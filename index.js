var cron = require('node-cron');

const task = cron.schedule('* * * * * *', () => {
  console.log('jorge MARCOS BOIOLA');
});

task.start();