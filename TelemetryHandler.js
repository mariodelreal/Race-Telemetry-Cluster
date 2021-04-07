const UDPServer = require('./UDPServer.js');
const WebSocketServer = require('./WebSocketServer.js');
const HTTPServer = require('./HTTPServer.js');
const GameData = require("./GameData.js");

module.exports.startTelemetryCapture = function(game, UDPPort = 6789, WebSocketPort = 5678, HTTPPort = 8080){
    var gameData = GameData.getGameData(game);
    UDPServer.startUDPServer(gameData, UDPPort);
    WebSocketServer.startWebSocketServer(gameData, WebSocketPort);
    HTTPServer.startHTTPServer(HTTPPort);
}