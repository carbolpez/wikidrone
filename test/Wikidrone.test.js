const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledWikidrone = require('../ethereum/build/Wikidrone.json');

let accounts;
let wikidroneAddress;
let wikidrone;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    wikidrone = await new web3.eth.Contract(JSON.parse(compiledWikidrone.interface))
      .deploy({ data: compiledWikidrone.bytecode })
      .send({ from: accounts[0], gas: '1000000'});
});

describe('Wikidrone', () => {
  it('deploys a wikidrone', () => {
    assert.ok(factory.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const manager = await wikidrone.methods.manager().call();
    assert.equal(accounts[0], manager);
  });
});
