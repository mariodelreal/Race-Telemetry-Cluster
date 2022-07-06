export default async function getGameData(gameName:any) {
  const userRequestedFields = {};
  let dataMap = {};
  const gamename = gameName;
  switch (gameName) {
    case 'ForzaHorizon4':
      dataMap = await import('./gameDataMaps/ForzaHorizon4');
      break;
    case 'ForzaMotorsport7':
      dataMap = await import('./gameDataMaps/ForzaMotorsport7');
      break;
    default:
      console.log('Could not find game data');
  }

  const gameData = {
    UserRequestedFields: userRequestedFields,
    DataMap: dataMap,
    GameName: gamename,
  };

  return gameData;
}
