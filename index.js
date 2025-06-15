require("dotenv").config();
const { App } = require('@slack/bolt');
const app = new App({
  token: process.env.CLIENT_TOKEN,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.event("message", ({ event, say }) => {
    console.log(event);
  if (event.text.includes("meow")) {
    say("Please withold your tongue from such unpleasent terminology!");
  }
});
app.start().then(() => {
  console.log("⚡ Bolt app is running!");
});            