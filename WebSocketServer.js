const WebSocket = require('ws');

module.exports.startWebSocketServer = function (gameData, port){
    startWebSocketServer(gameData, port);
}

function startWebSocketServer(gameData, port){
    const WebSocketServer = new WebSocket.Server({ port: port, clientTracking: true });
    WebSocketServer.on('connection', function connection(ws, req) {
        console.log("client connected");
        ws.on('message', function connection(message){
            var jsonMessage = JSON.parse(message);
            var id = jsonMessage.id;
            if (!(id in gameData.UserRequestedFields)){
                var fields = jsonMessage.fields;
                gameData.UserRequestedFields[id] = {"fields": fields, "data": {}};
            }
            ws.send(JSON.stringify(gameData.UserRequestedFields[id].data));
        });
    });
}