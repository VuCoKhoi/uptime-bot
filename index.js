const express = require('express');

const app = express();

app.get('/uptime', (req, res) => {
  console.log('uptime req');
  res.send('oke');
});

app.listen(3000, (error) => {
  if (error) {
    console.error('ERROR - Unable to start app.');
  } else {
    console.info(`🚀 Server ready at http://localhost:3000/graphql`);
  }
});

require('./CronTask').start();
