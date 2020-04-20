const connectDB = require("./connectDb");

const task = require("./CronTask");

connectDB().then(async (con) => {
  // await con.connection.db.dropDatabase(() => console.log('drop db done'));
  console.log("database connected");

  task.start();
});
