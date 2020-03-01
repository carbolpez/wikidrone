const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

console.log('Init...');
const wikidronePath = path.resolve(__dirname, 'contracts', 'Wikidrone.sol');
const source = fs.readFileSync(wikidronePath, 'utf8');
console.log('Starting compile action ...');
const output = solc.compile(source, 1).contracts;
console.log('Finis compilation:\n ' + output);
fs.ensureDirSync(buildPath);
console.log('Dir created: ' + buildPath);
console.log(output);

for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
  console.log('contract: ' + contract);
}
