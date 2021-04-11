# Race-Telemetry-Cluster

A NodeJS app for distributing race and car telemetry data within Forza Motorsport 7 and Forza Horizon 4. Both games are available for PC and XBox One/Series S and X. This app Allows multiple devices to request real-time, low-latency, telemtry values through web sockets.

## Installation

Unzipped project can be installed and ran using npm

```bash
npm install
```

## Usage

Forza features a setting to transmit data over UDP to a given IP address and port. The device with the given IP address and port should then run this app to read the telemtry data.

The app requires a --game command line argument to run

```bash
npm start --game=ForzaHorizon4
#or
npm start --game=ForzaMotorsport7
```

If one or more of the network ports need to be modified, default values can be replaced
```bash
npm start --game=ForzaHorizon4 --udpPort 1111 --wsPort=2222 --httpPort=3333
```

NOTE: There are sample pages under the /public folder. These use a hard connection to the host machine's ip address. This must be updated to work on another machine. If the --wsPort is overridden. The client that communicates through the web socket port must also be updated to talk to the right port. The example pages under /public use the default port 5678.

## Future Development

The note above can be addressed by having the pages under the /public folder be templated web pages. Therefore allowing the server to render an HTML page with knowledge of its own IP address and will be able to run on any machine.