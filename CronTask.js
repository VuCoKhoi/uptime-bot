const cron = require("node-cron");
const Http = require("./Http");

const reqHandle = async () => {
  process.env.URL.split(",").map((url) => Http.get(`${url}/uptime`));
};

const task = cron.schedule(
  "*/5 * * * * *",
  async () => {
    console.log("running a task every two minutes");
    await reqHandle();
  },
  {
    scheduled: false,
  }
);

module.exports = task;
