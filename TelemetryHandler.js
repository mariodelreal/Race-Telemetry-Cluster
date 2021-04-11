const UDPServer = require('./UDPServer.js');
const WebSocketServer = require('./WebSocketServer.js');
const HTTPServer = require('./HTTPServer.js');
const GameData = require("./GameData.js");

module.exports.startTelemetryCapture = function(game, UDPPort, WebSocketPort, HTTPPort){
    var gameData = GameData.getGameData(game);
    UDPServer.startUDPServer(gameData, UDPPort || 6789);
    WebSocketServer.startWebSocketServer(gameData, WebSocketPort || 5678);
    HTTPServer.startHTTPServer(HTTPPort || 8080);
}