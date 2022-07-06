import fs from 'fs';
import HTTPServer from 'http';
import RoutingMap from './TelemetryRoutingMap';

function fetchStaticHTML(path:any, res:any) {
  fs.readFile(path, (error:any, pgResp:any) => {
    if (error) {
      res.writeHead(404);
      res.write('Contents you are looking for not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(pgResp);
    }
    res.end();
  });
}

export default function startHTTPServer(port:any) {
  HTTPServer.createServer((req:any, res:any) => {
    const { url } = req;
    if (url in RoutingMap) {
      fetchStaticHTML(RoutingMap[url as keyof typeof RoutingMap], res);
    } else {
      res.write('Unknown page hit');
      res.end();
    }
  }).listen(port, () => {
    console.log(`HTTP server listening on port ${port}`);
  });
}
