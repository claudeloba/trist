import settings from './settings';

const newBatch = () => {
  var batch = [];

  for(var i = 0; i < settings.batchSize; i++) batch[i] = 0;

  settings.winners.map((winner) => {
    for (var i = 0; i < winner.nrOfTickets; i++) {
      var index = Math.floor(Math.random() * settings.batchSize);

      while(batch[index]) index = Math.floor(Math.random() * settings.batchSize);

      batch[index] = winner.amount;
    }
  });

  return batch;
}

export default {
  newBatch: newBatch
}
