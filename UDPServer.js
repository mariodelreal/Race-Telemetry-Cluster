"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dgram_1 = __importDefault(require("dgram"));
const UDPserver = dgram_1.default.createSocket('udp4');
function parseData(buffer, label, fieldMap) {
    const dataType = fieldMap[label].DataType;
    const offset = fieldMap[label].Offset;
    let retval = '';
    switch (dataType) {
        case 'f32':
            retval = buffer.readFloatLE(offset);
            break;
        case 'u8':
            retval = buffer.readUInt8(offset);
            break;
        case 's32':
            retval = buffer.readInt32LE(offset);
            break;
        case 's8':
            retval = buffer.readInt8(offset);
            break;
        case 'u32':
            retval = buffer.readUInt32LE(offset);
            break;
        case 'u16':
            retval = buffer.readUInt16LE(offset);
            break;
        case 'U1':
            retval = buffer.subarray(offset, offset + 12);
            break;
        case 'U2':
            retval = buffer.subarray(offset, offset + 1);
            break;
        default:
            console.log('Unknown data type');
    }
    return retval;
}
function loadData(msg, fields, destObj, fieldMap) {
    const destObjRef = destObj;
    // console.log(msg);
    // console.log(fields);
    // console.log(JSON.stringify(destObj));
    // console.log(JSON.stringify(fieldMap));
    fields.forEach((field) => {
        console.log(`field ${field}`);
        const data = parseData(msg, field, fieldMap);
        destObjRef[field] = data;
        // destObj[field] = data;
    });
}
function startUDPServer(gameData, port) {
    UDPserver.on('error', (err) => {
        console.log(`UDP server error:\n${err.stack}`);
        UDPserver.close();
    });
    UDPserver.on('message', (msg) => {
        // console.log(rinfo);
        console.log(`gamedatauserreqfields ${JSON.stringify(gameData.UserRequestedFields)}`);
        Object.keys(gameData.UserRequestedFields).forEach((key) => {
            loadData(msg, gameData.UserRequestedFields[key].fields, gameData.UserRequestedFields[key].data, gameData.DataMap[key]);
        });
    });
    UDPserver.on('listening', () => {
        const address = UDPserver.address();
        console.log(`UDP server listening ${address.address}:${address.port}`);
    });
    UDPserver.bind(port);
}
exports.default = startUDPServer;
