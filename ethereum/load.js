
const Web3 = require('web3');
//const provider = ganache.provider();
const web3 = new Web3('ws://127.0.0.1:7545');
//const web3 = new Web3(provider);
const Wikidrone = require('./build/Wikidrone.json');
let accounts;
const addr = '0xB75dF35AA2CddF2AAB87B4f2Da7e49Be319e2563';
let pointA = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-3.684936, 40.497720]
  },
  properties: {
    name: "Madrid inicio"
  }
};
let pointB = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-3.677471, 40.491673]
  },
  properties: {
    name: "Madrid Final"
  }
};


const wikidrone = new web3.eth.Contract(
  JSON.parse(Wikidrone.interface),
  addr
);

const load = async () => {


  accounts = await web3.eth.getAccounts();
  track = {
    operator:accounts[0],
    start:JSON.stringify(pointA),
    finish:JSON.stringify(pointB),
    routePoints:JSON.stringify([pointA,pointB]),
    startTime:new Date().getTime(),
    endTime:new Date().getTime(),
    minAltitude:0,
    maxAltitude:100,
    description:'Test track 2',
    metadata:'2'
  }
/*
//Registers an operator
await wikidrone.methods.registerOperator().send({from: accounts[0], gas:'4700000'});
const operatorsCount = await wikidrone.methods.operatorsCount().call();
console.log("load --> operatorsCount: " + operatorsCount);
*/
//Loads a track
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
).send({from: accounts[0], gas:'4700000'});
const tracksCount = await wikidrone.methods.tracksCount().call();
console.log("load --> tracksCount: " + tracksCount);
};
load();
