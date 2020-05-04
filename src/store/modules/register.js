import axios from 'axios';
import web3 from '../../../ethereum/web3';
import wikidrone from '../../../ethereum/wikidrone';
import configApp from '../../common/params';
const state = {
  result: {},
  registers: [],
  accounts: []
};

const getters = {
  getResult: state => state.result,
  getAccounts: state => state.accounts,
  getRegisters: state => state.registers
};

const actions = {
  async registerOperator({commit}, account){
    try {
        console.log('registerOperator --> account: ' + account);
        await wikidrone.methods.registerOperator().send({from: account, gas:'1000000'});
        const operatorsCount = await wikidrone.methods.operatorsCount().call();
        console.log('registerOperator --> operatorsCount: ' + operatorsCount);
        commit('updateResult', {codRet:0});
        return 0;
    } catch (exc) {
      console.log("registerOperatorCatch --> exc:" + exc);
      commit('updateResult', {codRet:1,errorMessage:exc.message})
      return 1;
    }
  },
  async findRegisters({commit}, searchTerm){
    console.log('findRegisters --> searchTerm: ' + searchTerm);
    try{
          //Register Metadata
          const data = searchTerm;
          const headers = {
            "Content-Type": "application/json"
          };

          let URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.FIND_REGISTERS_URI;
          console.log("findRegisters --> URL: " + URL);

          axios.post(URL, data, headers).then(function callback(response, err){
            if(!err){
              console.log("findRegistersCallback --> response: " + JSON.stringify(response));
              commit('updateResult', response.data);
            }
            else{
              console.log("findRegistersCallback --> error: " + err);
              commit('updateResult', {codRet:1,errorMessage:err});
            }
          }).catch(function callback(e){
            console.log("findRegistersCallback --> e: " + e);
            commit('updateResult', {codRet:1,errorMessage:e})
          });
    }
    catch(exc){
      console.log("registerOperatorMetadataCatch2 --> exc:" + exc);
      commit('updateResult', {codRet:1,errorMessage:exc});
    }

  },
  async registerOperatorMetadata({commit}, operatorMetadata) {
    console.log('registerOperatorMetadata --> operatorMetadata: ' + operatorMetadata);
    try{
          //Register Metadata
          const data = operatorMetadata;
          const headers = {
            "Content-Type": "application/json"
          };
          let URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.REGISTER_OPERATOR_URI;
          axios.post(URL, data, headers).then(function callback(response, err){
            if(!err){
              //console.log("registerOperatorMetadataCallback --> response: " + JSON.stringify(response));
              commit('updateResult', response.data);
            }
            else{
              console.log("registerOperatorMetadataCallback --> error: " + err);
              commit('updateResult', {codRet:1,errorMessage:err});
            }
          }).catch(function callback(e){
            console.log("registerOperatorMetadataCallbackCatch --> e: " + e);
            commit('updateResult', {codRet:1,errorMessage:e})
          });
    }
    catch(exc){
      console.log("registerOperatorMetadataCatch2 --> exc:" + exc);
      commit('updateResult', {codRet:1,errorMessage:exc});
    }

  },
  async setAccounts({commit}) {
    try {
      var accounts = await web3.eth.getAccounts();
      console.log("setAccounts --> accounts: " + accounts);
      commit('updateResult', null);
      commit('updateAccounts', accounts);
    }catch(exc){
      console.log("setAccounts --> exc:" + exc);
      commit('updateResult', {codRet:1,errorMessage:exc});
    }
  },
  async resetResult({commit}) {
      commit('updateResult', null);
  }
};

const mutations = {
  updateResult: ({rootState},result) => {
    rootState;
    if (result != null){
      state.result = result;
      state.registers = result.operatorMetadata;
    }
    else {
      state.result = null;
    }
  },
  updateAccounts: ({rootState},accounts) => {
    rootState;
    state.accounts = accounts;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
