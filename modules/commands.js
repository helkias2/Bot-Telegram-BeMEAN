"use strict";

const echo = require("./commands/echo");
const ping = require("./commands/ping");
const id = require("./commands/id");
const start = require("./commands/start");
const webschool = require("./commands/webschool");
const help = require("./commands/help");
const par = require("./commands/par");
const impar = require("./commands/impar");
const repo = require("./commands/repo");
const sendsticker = require("./commands/sendsticker");
const log = require("./commands/log");
const userstats = require("./commands/userstats");
const whitelist = require("./commands/whitelist");
const example = require("./commands/example");
const broadcast = require("./commands/broadcast");
const say = require("./commands/say");
const math = require("./commands/math");

module.exports = {
  echo,
  ping,
  id,
  start,
  webschool,
  help,
  par,
  impar,
  repo,
  sendsticker,
  log,
  userstats,
  whitelist,
  broadcast,
  say,
  math
};
