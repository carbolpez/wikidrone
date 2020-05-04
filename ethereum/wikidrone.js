import web3 from './web3';
import configApp from '../src/common/params';
import Wikidrone from './build/Wikidrone.json';
//GANACHE LOCAL
//const addr = '0x6Ba51c39Fe101B1505c6Fa2b1313Fb09EBB63d5a';
//TESTNET
//const addr = '0x2339A988701aC10b83230D62040D1d714d1a2E57';
const instance = new web3.eth.Contract(
  JSON.parse(Wikidrone.interface),
  configApp.configVars.CONTRACT_ADDRESS
);
export default instance;
/*
export default address => {
  return new web3.eth.Contract(
    JSON.parse(Wikidrone.interface),
    address
  );
};
*/
