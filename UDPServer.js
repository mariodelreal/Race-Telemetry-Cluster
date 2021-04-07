const dgram = require('dgram');
const UDPserver = dgram.createSocket('udp4');

module.exports.startUDPServer = function (gameData, port){
    startUDPServer(gameData, port);
}

function startUDPServer(gameData, port){
    UDPserver.on('error', (err) => {
        console.log(`UDP server error:\n${err.stack}`);
        UDPserver.close();
    });
    UDPserver.on('message', (msg, rinfo) => {
		for (var key of Object.keys(gameData.UserRequestedFields)){
            loadData(msg, gameData.UserRequestedFields[key].fields, gameData.UserRequestedFields[key].data, gameData.DataMap);
        }
    });
    UDPserver.on('listening', () => {
        const address = UDPserver.address();
        console.log(`UDP server listening ${address.address}:${address.port}`);
    });
    UDPserver.bind(port);
}

function parseData(buffer, label, fieldMap){
	var dataType = fieldMap[label].DataType;
	var offset = fieldMap[label].Offset;

	var retval = "";

	switch (dataType) {
		case "f32":
			retval = buffer.readFloatLE(offset);
			break;
		case "u8":
			retval = buffer.readUInt8(offset);
			break;
		case "s32":
			retval = buffer.readInt32LE(offset);
			break;
		case "s8":
			retval = buffer.readInt8(offset);
			break;
		case "u32":
			retval = buffer.readUInt32LE(offset);
			break;
		case "u16":
			retval = buffer.readUInt16LE(offset);
			break;
		case "U1":
			retval = buffer.subarray(offset, offset + 12);
			break;
		case "U2":
			retval = buffer.subarray(offset, offset + 1);
			break;
		default:
			console.log("Unknown data type");
	};

	return retval;
}

function loadData(msg, fields, destObj, fieldMap){
	fields.forEach(function(field){
		var data = parseData(msg, field, fieldMap);
		destObj[field] = data;
	});
}