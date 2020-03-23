const assert = require('assert');
const Web3 = require('web3');
const compiledWikidrone = require('../ethereum/build/Wikidrone.json');

test();

async function test()
{
  const web3 = await new Web3('ws://127.0.0.1:7545');
  console.log("testing web3: " + web3);
  accounts = await web3.eth.getAccounts();
//  console.log("accounts: " + accounts);
  wikidrone = await new web3.eth.Contract(JSON.parse(compiledWikidrone.interface))
    .deploy({ data: compiledWikidrone.bytecode, arguments: [accounts[0]]})
    .send({ from: accounts[5], gas: '4700000'});
  return "ok";
}
