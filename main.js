"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const TelemetryHandler = require('./TelemetryHandler.js');
const TelemetryHandler_1 = __importDefault(require("./TelemetryHandler"));
const Game = process.env.npm_config_game;
const UDPPort = process.env.npm_config_udpPort;
const WebSocketPort = process.env.npm_config_wsPort;
const HTTPPort = process.env.npm_config_httpPort;
if (Game) {
    (0, TelemetryHandler_1.default)(Game, UDPPort, WebSocketPort, HTTPPort);
}
else {
    console.log('--game argument must be provided. Valid options are ForzaHorizion4 or ForzaMotorsport7');
}
