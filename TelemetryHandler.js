"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UDPServer_1 = __importDefault(require("./UDPServer"));
const WebSocketServer_1 = __importDefault(require("./WebSocketServer"));
const HTTPServer_1 = __importDefault(require("./HTTPServer"));
const GameData_1 = __importDefault(require("./GameData"));
function startTelemetryCapture(game, UDPPort, WebSocketPort, HTTPPort) {
    (0, GameData_1.default)(game).then((gameData) => {
        (0, UDPServer_1.default)(gameData, UDPPort || 6789);
        (0, WebSocketServer_1.default)(gameData, WebSocketPort || 5678);
        (0, HTTPServer_1.default)(HTTPPort || 8080);
    });
}
exports.default = startTelemetryCapture;
