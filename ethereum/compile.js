const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

console.log('Init...');
const wikidronePath = path.resolve(__dirname, 'contracts', 'Wikidrone.sol');
//console.log('wikidronePath: ' + wikidronePath);
const source = fs.readFileSync(wikidronePath, 'utf8');
//console.log('Starting compile action: ' + source);
console.log('compilacion: ' + solc.compile(source, 1));
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
}
