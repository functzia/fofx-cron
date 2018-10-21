const cronJob = require("cron").job;

module.exports = () => ({
  type: "cron",
  input({ cron }, sendToQueue) {
    cronJob(cron, sendToQueue, null, true);
  }
});
