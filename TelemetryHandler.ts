import startUDPServer from './UDPServer';
import startWebSocketServer from './WebSocketServer';
import startHTTPServer from './HTTPServer';
import getGameData from './GameData';

export default function startTelemetryCapture(game:any, UDPPort:any, WebSocketPort:any, HTTPPort:any) {
  getGameData(game).then((gameData) => {
    startUDPServer(gameData, UDPPort || 6789);
    startWebSocketServer(gameData, WebSocketPort || 5678);
    startHTTPServer(HTTPPort || 8080);
  });
}
