import Web3 from 'web3';
//import configApp from '../src/common/params';
/*
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3gxKB8rcIJvR5IzMWKd'
  );
  web3 = new Web3(provider);
}
*/
//const web3 = new Web3('ws://127.0.0.1:7545');
//const web3 = new Web3(configApp.configVars.ETHEREUM_URL);
const web3 = new Web3(window.web3.currentProvider);
window.ethereum.enable();
export default web3;
