var Log = require('./ui/log');

module.exports = Players;

function Players(players){
  this.players = players;
  this.active = {};
  this.terminalName = document.getElementById('terminal-player');
  this.switch(this.players['eika']);
}


Players.prototype.get = function(name){
  return this.players[name];
}


Players.prototype.switch = function(){
  if (this.active.name === 'eika') this.active = this.get('fullerton');
  else this.active = this.get('eika');
  this.playerElUpdate(this.active.name);
}


Players.prototype.playerElUpdate = function(name){
  var player = this.active;
  this.terminalName.innerHTML = name;
}


Players.prototype.setItem = function(name, item){

}


Players.prototype.getItem = function(name){
  
}


Players.prototype.useItem = function(name, room){
  
}