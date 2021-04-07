const fs = require('fs');
const HTTPServer = require('http');
const RoutingMap = require('./TelemetryRoutingMap.js');

module.exports.startHTTPServer = function (port){
    startHTTPServer(port);
}

function startHTTPServer(port){
    HTTPServer.createServer(function(req, res){
        var url = req.url;
        if (url in RoutingMap.RoutingMap){
            fetchStaticHTML(RoutingMap.RoutingMap[url], res);
        }
        else{
            res.write("Unknown page hit");
            res.end();
        }
    }).listen(port, function(){
        console.log("HTTP server listening on port " + port);
    });
}

function fetchStaticHTML(path, res, cb){
	(cb && typeof cb === "function") ? fs.readFile(path, cb) : fs.readFile(path, function(error, pgResp){
		if (error){
			res.writeHead(404);
			res.write("Contents you are looking for not found");
		} else{
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(pgResp);
		}
		res.end();
	});
}