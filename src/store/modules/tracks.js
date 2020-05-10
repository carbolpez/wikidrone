
import wikidrone from '../../../ethereum/wikidrone' ;
import axios from 'axios';
import configApp from '../../common/params';
const state = {
  tracks: [],
  result: null,
  images: []
};

const getters = {
  allTracks: state => state.tracks,
  getTrackResult: state => state.result
};

const actions = {
  async findTracks({commit}, searchTerm) {
    //TO DO: SEARCH BY QUERY
    console.log('findTracks --> ' + searchTerm);
    const tracksCount = await wikidrone.methods.tracksCount().call();
    //console.log("wikidrone trackscount: " + tracksCount);
    //const operatorsCount = await wikidrone.methods.operatorsCount().call();
    //console.log("wikidrone operatorsCount: " + operatorsCount);
    var newTracks = [];
    for (var i = 0; i < tracksCount; i++) {
      newTracks[i] = await wikidrone.methods.getTrack(i).call();
    }

    commit('updateTracks', newTracks);
  },
  async newTrack({commit}, track) {
    try{
      console.log('newTrack -->  track: ' + JSON.stringify(track));
      var txId = await wikidrone.methods.createTrack(
        track.account,
        JSON.stringify(track.start),
        JSON.stringify(track.finish),
        JSON.stringify(track.routePoints),
        track.startTime,
        track.endTime,
        track.minAltitude,
        track.maxAltitude,
        track.description,
        track.metadata
      ).send({from: track.account, gas:'1000000'});
      const tracksCount = await wikidrone.methods.tracksCount().call();
      console.log('newTrack --> Registro procesado correctamente. txId: ' + txId);
      console.log('newTrack --> tracksCount: ' + tracksCount);
      commit('updateTrackResult', {codRet:0});
      return 0;
    } catch (exc) {
    console.log("newTrack --> exc:" + exc);
    commit('updateTrackResult', {codRet:1,errorMessage:exc.message})
    return 1;
    }
  },
  async uploadImages ({commit},images) {
    console.log("uploadImages --> Iniciando");
    for(var image in images){
      //Tenemos que tomar el file, solo tenemos su referencia al disco. FomrData es objete de especificación javascript
      const formData = new FormData();
      formData.append('image', image);
      const URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.SEND_OPERATION_IMAGES_URI;
      const headers = {
        "Content-Type": "application/json"
      };
      axios.post(URL, formData, headers).then(function callback(response, err){
        if(!err){
          //console.log("findRegistersCallback --> response: " + JSON.stringify(response));
          commit('updateTrackResult', response.data);
        }
        else{
          console.log("uploadImages --> error: " + err);
          commit('updateTrackResult', {codRet:1,errorMessage:err});
        }
      }).catch(function callback(e){
        console.log("uploadImages --> e: " + e);
        commit('updateTrackResult', {codRet:1,errorMessage:e})
      });
    }
    return 0;
  },

  async setTrackResult({commit}, result) {
      commit('updateTrackResult', result);
  }
};

const mutations = {
  updateTracks: ({rootState},newTracks) => {
    rootState;
    state.tracks = newTracks;
    //console.log(state.tracks);
  },
  updateTrackResult: ({rootState},result) => {
    rootState;
    if (result != null){
      state.result = result;
      //state.registers = result.operatorMetadata;
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
}
