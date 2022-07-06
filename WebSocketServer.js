"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
function startWebSocketServer(gameData, port) {
    const gameDataRef = gameData;
    const WebSocketServer = new ws_1.WebSocket.Server({ port, clientTracking: true });
    WebSocketServer.on('connection', (ws) => {
        console.log('client connected');
        ws.on('message', (message) => {
            const jsonMessage = JSON.parse(message);
            const { id } = jsonMessage;
            if (!(id in gameDataRef.UserRequestedFields)) {
                const { fields } = jsonMessage;
                gameDataRef.UserRequestedFields[id] = { fields, data: {} };
            }
            ws.send(JSON.stringify(gameDataRef.UserRequestedFields[id].data));
            // if (!(id in gameData.UserRequestedFields)) {
            //   console.log('adding id');
            //   const { fields } = jsonMessage;
            //   gameData.UserRequestedFields[id] = { fields, data: {} };
            //   // console.log(JSON.stringify(gameData));
            // }
            // ws.send(JSON.stringify(gameData.UserRequestedFields[id].data));
        });
    });
}
exports.default = startWebSocketServer;
