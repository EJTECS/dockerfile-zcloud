var cron = require('node-cron');

const task = cron.schedule('* * * * * *', () => {
  console.log('hello world!');
});

task.start();
