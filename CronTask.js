const cron = require("node-cron");
const Http = require("./Http");
const imageModel = require("./models");

const handleGetImage = async () => {
  Http.get("https://api.unsplash.com/photos/random?count=30").then(
    async (res) => {
      await imageModel.insertMany(
        res.data.map((cc) => ({ ...cc, source_id: cc.id }))
      );
    }
  );
};

const task = cron.schedule(
  "*/2 * * * *",
  async () => {
    console.log("running a task every two minutes");
    await handleGetImage();
  },
  {
    scheduled: false,
  }
);

module.exports = task;
