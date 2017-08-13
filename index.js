'use strict';
var _eris = require('eris');

var _tags = require('./tagfile.json');

var _bot = new _eris(YOUR_USER_TOKEN);
var _prefix = '/';

_bot.on('ready', () => {
  console.log(`Bot Started on User Account: ${_bot.user.username}#${_bot.user.discriminator}`);
});

_bot.on('messageCreate', (message) => {
  if(message.content.startsWith(_prefix)) {
    //Must be a simpler way to do this...
    var _command = message.content.replace(_prefix, '').trim();
    var _argument = _command.split(' ');
    if(message.author.id === _bot.user.id) {
      if(_tags[_argument[0]]) {
        var _tag = _tags[_argument[0]];
        message.delete();
        _bot.createMessage(message.channel.id, _tag);
      }
    }
  }
});

_bot.connect();
