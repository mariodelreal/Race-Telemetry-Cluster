import { WebSocket } from 'ws';

export default function startWebSocketServer(gameData:any, port:any) {
  const gameDataRef = gameData;
  const WebSocketServer = new WebSocket.Server({ port, clientTracking: true });
  WebSocketServer.on('connection', (ws:any) => {
    console.log('client connected');
    ws.on('message', (message:any) => {
      const jsonMessage = JSON.parse(message);
      const { id } = jsonMessage;
      if (!(id in gameDataRef.UserRequestedFields)) {
        const { fields } = jsonMessage;
        gameDataRef.UserRequestedFields[id] = { fields, data: {} };
      }
      ws.send(JSON.stringify(gameDataRef.UserRequestedFields[id].data));
    });
  });
}
