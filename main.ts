// const TelemetryHandler = require('./TelemetryHandler.js');
import startTelemetryCapture from './TelemetryHandler';

const Game = process.env.npm_config_game;
const UDPPort = process.env.npm_config_udpPort;
const WebSocketPort = process.env.npm_config_wsPort;
const HTTPPort = process.env.npm_config_httpPort;

if (Game) {
  startTelemetryCapture(Game, UDPPort, WebSocketPort, HTTPPort);
} else {
  console.log('--game argument must be provided. Valid options are ForzaHorizion4 or ForzaMotorsport7');
}
