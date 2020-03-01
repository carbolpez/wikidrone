const ganache = require ('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const wikidrone = require('./build/Wikidrone.json');

//vamos a escribir una funcion únicamente para poder llamar await, ya que fuera de ellas no se puede utilizar
 const deploy = async () => {
   //Como mnemonic genera muchas accounts, tenemos que elegir la primera que es la que utilizamos
   const accounts = await web3.eth.getAccounts();

   console.log('Attempting to deploy from account', accounts[0]);
   //result es una instancia del contract desplegado
   const result = await new web3.eth.Contract(
     JSON.parse(wikidrone.interface))
   .deploy({ data: wikidrone.bytecode })
   .send({ gas: '1000000', from: accounts[0]});

   console.log('Contract deployd to', result.options.address);

 };
 deploy();
