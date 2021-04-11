const TelemetryHandler = require('./TelemetryHandler.js');

var Game = process.env.npm_config_game;
var UDPPort = process.env["npm_config_udpPort"];
var WebSocketPort = process.env["npm_config_wsPort"];
var HTTPPort = process.env["npm_config_httpPort"];

if (Game){
    TelemetryHandler.startTelemetryCapture(Game, UDPPort, WebSocketPort, HTTPPort);
}
else{
    console.log("--game argument must be provided. Valid options are ForzaHorizion4 or ForzaMotorsport7");
}