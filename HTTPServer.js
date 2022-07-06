"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const TelemetryRoutingMap_1 = __importDefault(require("./TelemetryRoutingMap"));
function fetchStaticHTML(path, res) {
    fs_1.default.readFile(path, (error, pgResp) => {
        if (error) {
            res.writeHead(404);
            res.write('Contents you are looking for not found');
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgResp);
        }
        res.end();
    });
}
function startHTTPServer(port) {
    http_1.default.createServer((req, res) => {
        const { url } = req;
        if (url in TelemetryRoutingMap_1.default) {
            fetchStaticHTML(TelemetryRoutingMap_1.default[url], res);
        }
        else {
            res.write('Unknown page hit');
            res.end();
        }
    }).listen(port, () => {
        console.log(`HTTP server listening on port ${port}`);
    });
}
exports.default = startHTTPServer;
