const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
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

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    wikidrone = await new web3.eth.Contract(JSON.parse(compiledWikidrone.interface))
      .deploy({ data: compiledWikidrone.bytecode, arguments: [accounts[0]]})
      .send({ from: accounts[0], gas: '4700000'});
    track = {
      operator:accounts[1],
      start:JSON.stringify(pointA),
      finish:JSON.stringify(pointB),
      routePoints:JSON.stringify([pointA,pointB]),
      startTime:new Date().getTime(),
      endTime:new Date().getTime(),
      minAltitude:0,
      maxAltitude:100,
      description:'Test track',
      metadata:'test metadata'
    }
});

describe('Wikidrone', () => {
  it('deploys a wikidrone', () => {
    assert.ok(wikidrone.options.address);
  });

  it('marks caller as the wikidrone manager', async () => {
    const manager = await wikidrone.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('registers an operator', async () => {
    await wikidrone.methods.registerOperator().send({from: accounts[0], gas:'1000000'});
    const operatorsCount = await wikidrone.methods.operatorsCount().call();
    assert.equal(operatorsCount, 1);
  });

  it('check for existen operator', async () => {
    await wikidrone.methods.registerOperator().send({from: accounts[0], gas:'1000000'});
    try {
          await wikidrone.methods.registerOperator().send({from: accounts[0], gas:'1000000'});
    } catch (e) {
      //console.log("check for existen operator: Inconsistence detected: " + e);
    }
    const operatorsCount = await wikidrone.methods.operatorsCount().call();
    assert.equal(operatorsCount, 1);
  });

  it('creates a track', async () => {
    await wikidrone.methods.registerOperator().send({from: accounts[0], gas:'1000000'});
    txId = await wikidrone.methods.createTrack(
      track.operator,
      track.start,
      track.finish,
      track.routePoints,
      track.startTime,
      track.endTime,
      track.minAltitude,
      track.maxAltitude,
      track.description,
      track.metadata
    ).send({from: accounts[0], gas:'1000000'});
    const tracksCount = await wikidrone.methods.tracksCount().call();
    assert.equal(tracksCount, 1);
  });

  it('lists a track', async () => {
    await wikidrone.methods.registerOperator().send({from: accounts[0], gas:'1000000'});
    txId = await wikidrone.methods.createTrack(
      track.operator,
      track.start,
      track.finish,
      track.routePoints,
      track.startTime,
      track.endTime,
      track.minAltitude,
      track.maxAltitude,
      track.description,
      track.metadata
    ).send({from: accounts[0], gas:'1000000'});
    const auxTrack = await wikidrone.methods.getTrack(0).call();
    assert.equal(track.operator, auxTrack.operator);
    assert.equal(track.start, auxTrack.start);
    assert.equal(track.finish, auxTrack.finish);
    assert.equal(track.routePoints, auxTrack.routePoints);
    assert.equal(track.startTime, auxTrack.startTime);
    assert.equal(track.endTime, auxTrack.endTime);
    assert.equal(track.minAltitude, auxTrack.minAltitude);
    assert.equal(track.maxAltitude, auxTrack.maxAltitude);
    assert.equal(track.description, auxTrack.description);
    assert.equal(track.metadata, auxTrack.metadata);
  });
});
