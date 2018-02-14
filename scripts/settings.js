const winners = [
  {
    amount: 30,
    nrOfTickets: 179700
  },{
    amount: 60,
    nrOfTickets: 208800
  },{
    amount: 90,
    nrOfTickets: 29800
  },{
    amount: 120,
    nrOfTickets: 7200
  },{
    amount: 150,
    nrOfTickets: 3760
  },{
    amount: 180,
    nrOfTickets: 1200
  },{
    amount: 300,
    nrOfTickets: 950
  },{
    amount: 500,
    nrOfTickets: 310
  },{
    amount: 600,
    nrOfTickets: 200
  },{
    amount: 900,
    nrOfTickets: 100
  },{
    amount: 1000,
    nrOfTickets: 165
  },{
    amount: 1500,
    nrOfTickets: 80
  },{
    amount: 2000,
    nrOfTickets: 70
  },{
    amount: 5000,
    nrOfTickets: 30
  },{
    amount: 10000,
    nrOfTickets: 40
  },{
    amount: 20000,
    nrOfTickets: 2
  },{
    amount: 100000,
    nrOfTickets: 2
  },{
    amount: 265000,
    nrOfTickets: 5
  },{
    amount: 1000000,
    nrOfTickets: 1
  },{
    amount: 2765000,
    nrOfTickets: 1
  },
]

const batchSize = 2000000;
const ticketPrice = 30;

export default {
  batchSize: batchSize,
  winners: winners,
  ticketPrice: ticketPrice,
}
