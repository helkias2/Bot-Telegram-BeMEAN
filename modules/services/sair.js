'use strict';

const answers = [
  'Saiu porque não aguentou a pressão!',
  'Já vai tarde!'
];

const s = require('../settings');

const execute = (bot, msg) => {
  s.get(msg.chat.id, 'funny', (err, data) => {
    if (data == 'true') _execute(bot, msg);
  });
}

const _execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log);
};

module.exports = {
  execute
};
