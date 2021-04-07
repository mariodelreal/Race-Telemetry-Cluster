module.exports.getGameData = function (gameName){
    return getGameData(gameName);
}

function getGameData(gameName){
    var userRequestedFields = {};
    var dataMap = {};
    var gamename = gameName;
    switch (gameName){
        case "ForzaHorizon4":
            dataMap = require('./gameDataMaps/ForzaHorizon4.js').DataMap;
            break;
        case "ForzaMotorsport7":
            dataMap = require('./gameDataMaps/ForzaMotorsport7').DataMap;
            break;
        default:
            console.log("Could not find game data");
    }

    var gameData = {
        UserRequestedFields: userRequestedFields,
        DataMap: dataMap,
        GameName: gamename
    }

    return gameData;
}