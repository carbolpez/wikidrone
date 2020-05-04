const CONTRACT_ADDRESS = "0x3B5Ed160A51068E84C1daB7A78Bc2386B18d271C";

const Web3 = require('web3');
//const provider = ganache.provider();
const web3 = new Web3('ws://127.0.0.1:7545');
const INDEX_OPERATOR = 0;
//const web3 = new Web3(provider);
const Wikidrone = require('./build/Wikidrone.json');
let accounts;
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
  CONTRACT_ADDRESS
);

const load = async () => {


  accounts = await web3.eth.getAccounts();
  track = {
    operator:accounts[INDEX_OPERATOR],
    start:JSON.stringify(pointA),
    finish:JSON.stringify(pointB),
    routePoints:JSON.stringify([pointA,pointB]),
    startTime:new Date().getTime(),
    endTime:new Date().getTime(),
    minAltitude:0,
    maxAltitude:100,
    description:'Test track 1',
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
).send({from: accounts[INDEX_OPERATOR], gas:'4700000'});
const tracksCount = await wikidrone.methods.tracksCount().call();
console.log("load --> tracksCount: " + tracksCount);
};
load();
