import React, { Component } from 'react';
import batchHelper from './batchHelper.js';
import settings from './settings.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    var batch = batchHelper.newBatch();

    this.state = {
      batch: batch,
      index: 1,
      total: 0,
      currentTicket: 0,
      interval: 250,
      largestWin: 0,
      playing: false,
      speed: "Snabb",
    }
  }

  scratchTickets = () => {
    var batch = this.state.batch;
    var currentTicket = batch.pop();
    var win = currentTicket > this.state.largestWin ? currentTicket : this.state.largestWin;
    var index = this.state.index + 1;

    if (batch.length == 0) {
      batch = batchHelper.newBatch();
    }

    this.setState({
      batch: batch,
      index: index,
      total: this.state.total + currentTicket - settings.ticketPrice,
      currentTicket: currentTicket,
      largestWin: win,
    })

    setTimeout(()=>{
      this.scratchTickets();
    }, this.state.interval);
  }

  handleClick = () => {
    if(!this.state.playing) {
      this.scratchTickets();
      this.setState({
        playing: true
      });
    } else {
      switch (this.state.interval) {
        case 250:
          this.setState({
            interval: 1,
            speed: "Skitsnabb"
          });
          break;
        case 1:
          this.setState({
            interval: 1000,
            speed: "Långsam",
          });
          break;
        case 1000:
          this.setState({
            interval: 250,
            speed: "Snabb",
          });
          break;
      }
    }
  }

renderInfo() {
  if (this.state.playing) {
    return (
      <ul className="info">
        <li>Netto resultat: <strong>{this.state.total.toLocaleString('sv-SE')} kr</strong></li>
        <li>Skrapade lotter: <strong>{this.state.index} st</strong></li>
        <li>Högsta vinst hittills: <strong>{this.state.largestWin.toLocaleString('sv-SE')} kr</strong></li>
        <li>Skraphastighet: <strong onClick={this.handleClick}>{this.state.speed}</strong></li>
      </ul>
    );
  }
  return (
    <button className="button-scratch" onClick={this.handleClick}>Gör det!</button>
  );
}

renderScratchArea() {
  if(this.state.playing) {
    return (<h2 onClick={this.handleClick}>{this.state.currentTicket}</h2>)
  }
  return (<h2 className="scratch" onClick={this.handleClick}>Skrapa!</h2>)
}

render() {
    return (
      <div className="app">
        <div className="ticket">

        <img src="/style/logo.png" className="logo" />
          {this.renderScratchArea()}
          {this.renderInfo()}



          </div>
      </div>
    );
  }
}
