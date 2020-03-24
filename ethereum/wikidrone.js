import web3 from './web3';
import Wikidrone from './build/Wikidrone.json';
//GANACHE LOCAL
const addr = '0x8d58662424B29d8855EBC006B3886F60d34c8592';
//TESTNET
//const addr = '0x2339A988701aC10b83230D62040D1d714d1a2E57';
const instance = new web3.eth.Contract(
  JSON.parse(Wikidrone.interface),
  addr
);
//console.log('instance: ' + instance);
export default instance;
/*
export default address => {
  return new web3.eth.Contract(
    JSON.parse(Wikidrone.interface),
    address
  );
};
*/
