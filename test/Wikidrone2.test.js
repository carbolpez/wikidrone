const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(window.web3.currentProvider);
window.ethereum.enable();
//const web3 = new Web3('ws://127.0.0.1:7545');

const compiledWikidrone = require('../ethereum/build/Wikidrone.json');

let accounts;
let wikidroneAddress;
let wikidrone;
let track;
let pointA = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
};
let pointB = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.2]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}


describe('Wikidrone Rinkeby', () => {
  it('resetOperator', async () => {
    var accounts = await web3.eth.getAccounts();
    await wikidrone.methods.resetOperator(accounts[0]).send({from: accounts[0], gas:'1000000'});
    const operatorsCount = await wikidrone.methods.operatorsCount().call();
    console.log("operatorsCount: " + operatorsCount);
  });

});
