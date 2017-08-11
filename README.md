Simple Tag Bot
==============
A simple tag storage and usage selfbot for Discord.

Setup
-----
The bot is simple to setup. You are required to have [Node.JS](http://nodejs.org) on your system for this bot to work. Put the `tagfile.json` and the `index.js` file in a folder and then install [eris](https://abal.moe/Eris/) to be able to run the bot. Edit the index file and replace `YOUR_USER_TOKEN` with your user token and the prefix will be `/` by default.

Tags
----
The `tagfile.json` is editable and the main thing you change as that stores the keys and output.
```json
{
  "key": "output",
  "key2": "output 2"
}
```
The key is your command and the output is what the bot will change it to. A good example for the memers is like bellow
```json
{
  "lenny": "( ͡° ͜ʖ ͡°)"
}
```
