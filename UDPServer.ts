import dgram from 'dgram';

const UDPserver = dgram.createSocket('udp4');

function parseData(buffer:any, label:any, fieldMap:any) {
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

function loadData(msg:any, fields:any, destObj:any, fieldMap:any) {
  const destObjRef = destObj;
  fields.forEach((field:any) => {
    console.log(`field ${field}`);
    const data = parseData(msg, field, fieldMap);
    destObjRef[field] = data;
  });
}

export default function startUDPServer(gameData:any, port:any) {
  UDPserver.on('error', (err:any) => {
    console.log(`UDP server error:\n${err.stack}`);
    UDPserver.close();
  });
  UDPserver.on('message', (msg:any) => {
    // console.log(rinfo);
    console.log(`gamedatauserreqfields ${JSON.stringify(gameData.UserRequestedFields)}`);
    Object.keys(gameData.UserRequestedFields).forEach((key) => {
      loadData(
        msg,
        gameData.UserRequestedFields[key].fields,
        gameData.UserRequestedFields[key].data,
        gameData.DataMap[key],
      );
    });
  });
  UDPserver.on('listening', () => {
    const address = UDPserver.address();
    console.log(`UDP server listening ${address.address}:${address.port}`);
  });
  UDPserver.bind(port);
}
