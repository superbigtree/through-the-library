/*
* crtrdg.js modules
*/

var Game = require('crtrdg-gameloop');
var Mouse = require('crtrdg-mouse');
var Keyboard = require('crtrdg-keyboard');
var Scenes = require('crtrdg-scene');
var Goal = require('crtrdg-goal');


/*
* custom modules
*/

var Players = require('./players');
var Log = require('./ui/log');
var Terminal = require('./ui/terminal');
var randomInt = require('./util/math').randomInt;
var randomRGB = require('./util/math').randomRGB;
var randomRGBA = require('./util/math').randomRGBA;

/*
* create game object
*/

var game = new Game({
  canvas: 'game',
  width: window.innerWidth,
  height: window.innerHeight - 80,
  backgroundColor: randomRGBA(0, 256, 0, 256, 0, 256, 0.3)
});

game.on('update', function(interval){});

var size = 5;
var columns = game.width / size;
var rows = game.height / size;

game.on('draw', function(c){
  for (var h=0; h<rows; h+=randomInt(5, 20)){
    c.save();
    c.translate(game.width / 2, 0);
    c.rotate(Math.PI / randomInt(100, -180));
    c.fillStyle = randomRGBA(100, 255, 200, 255, 200, 255, 0.1);
    c.fillRect(-game.width/2-50, size*h-30, game.width+100, randomInt(100, 1000));
    c.restore();
  }

  for (var w=0; w<columns; w+=randomInt(5, 20)){
    c.fillStyle = randomRGBA(100, 255, 100, 200, 100, 211, .6);
    c.fillRect(size*w, randomInt(0, game.height), randomInt(1, 3), randomInt(1, 3));    
  }
});


/*
* create player characters
*/

var players = new Players({
  eika: {
    name: 'eika',
    log: new Log('log-eika')
  },
  fullerton: {
    name: 'fullerton',
    log: new Log('log-fullerton')
  }
});


/*
* terminal
*/

var terminal = new Terminal();

terminal.on('command', function(message, command, option){
  players.active.log.add('<b>' + players.active.name + ':</b> ' + message);
  players.switch();
  var color = randomRGBA(0, 256, 0, 256, 0, 256, 0.2);
  game.backgroundColor = color;
});