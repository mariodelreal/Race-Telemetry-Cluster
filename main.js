const TelemetryHandler = require('./TelemetryHandler.js');

// const GAME = "ForzaMotorsport7";
const GAME = "ForzaHorizon4";

const UDPPort = 6789;
const WebSocketPort = 5678;
const HTTPPort = 8080;

TelemetryHandler.startTelemetryCapture(GAME, UDPPort, WebSocketPort, HTTPPort);