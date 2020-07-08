const cron = require('node-cron');
const phantom = require('phantom');
const Http = require('./Http');

const fakeBrowser = async (url) => {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function (requestData) {
    console.info('Requesting', requestData.url);
  });

  const status = await page.open(`${url}/uptime`);
  const content = await page.property('content');
  console.log(content);

  await instance.exit();
};

const reqHandle = async () => {
  process.env.URL.split(',').map(fakeBrowser);
};

const task = cron.schedule(
  '*/2 * * * *',
  async () => {
    console.log('running a task every two minutes');
    await reqHandle();
  },
  {
    scheduled: false,
  },
);

module.exports = task;
