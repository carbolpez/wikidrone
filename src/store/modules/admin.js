
import axios from 'axios';
import configApp from '../../common/params';

//import web3 from '../../../ethereum/web3';
import wikidrone from '../../../ethereum/wikidrone';
const state = {
  result: null,
};

const getters = {
  getAdminResult: state => state.result,
};

const actions = {
  async resetSystem({commit}){
    console.log('resetSystem --> commit: ' + commit);
    //console.log('findRegisters --> searchTerm: ' + searchTerm);
    try{
      //Register Metadata
      const data = '';
      const headers = {
        "Content-Type": "application/json"
      };

      let URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.FIND_REGISTERS_URI;
      //console.log("findRegisters --> URL: " + URL);

      axios.post(URL, data, headers).then(async function callback(response, err){

        if(!err){
            console.log("resetSystem --> response: " + JSON.stringify(response));
            var manager = await wikidrone.methods.manager().call();
            console.log("resetSystem --> manager: " + manager);
            for(var i=0;i<response.data.operatorMetadata.length;i++){
              var address = response.data.operatorMetadata[i].account;
              console.log("resetSystem --> address: " + address);
              await wikidrone.methods.resetOperator(address).send({from: manager, gas:'1000000'});
              const operatorsCount = await wikidrone.methods.operatorsCount().call();
              console.log('registerOperator --> operatorsCount: ' + operatorsCount);
            }
            URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.DELETE_REGISTERS_URI;

            axios.post(URL, data, headers).then(async function callback(response, err){
              if(!err){
                    console.log("resetSystem --> Operators deleted");
                    await wikidrone.methods.resetTracks().send({from: manager, gas:'1000000'});
                    const tracksCount = await wikidrone.methods.tracksCount().call();
                    console.log('registerOperator --> tracksCount: ' + tracksCount);

                    URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.DELETE_IMAGES_URI;
                    axios.post(URL, data, headers).then(async function callback(response, err){
                    if(!err){
                        console.log("resetSystem --> Images deleted");
                        commit('updateAdminResult', response.data);
                    }
                    else{
                      console.log("resetSystem --> error1: " + err);
                      commit('updateAdminResult', {retCode:1,errorMessage:err});
                    }
                  }).catch(function callback(e){
                    console.log("resetSystem --> e1: " + e);
                    commit('updateAdminResult', {retCode:1,errorMessage:e})
                  });
              }
              else{
                console.log("resetSystem --> error2: " + err);
                commit('updateAdminResult', {retCode:1,errorMessage:err});
              }

            }).catch(function callback(e){
              console.log("resetSystem --> e2: " + e);
              commit('updateAdminResult', {retCode:1,errorMessage:e})
            });
        }
        else{
          console.log("resetSystem --> error3: " + err);
          commit('updateAdminResult', {codRet:1,errorMessage:err});
        }

      }).catch(function callback(e){
        console.log("resetSystem --> e3: " + e);
        commit('updateAdminResult', {codRet:1,errorMessage:e})
      });
    }
    catch(exc){
      console.log("resetSystem2 --> exc:" + exc);
      commit('updateAdminResult', {codRet:1,errorMessage:exc});
    }
  },
  async resetAdminResult({commit}) {
      commit('updateAdminResult', null);
  }
};

const mutations = {
  updateAdminResult: ({rootState},result) => {
    rootState;
    if (result != null){
      state.result = result;
    }
    else {
      state.result = null;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
