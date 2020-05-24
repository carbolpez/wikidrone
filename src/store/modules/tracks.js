
import wikidrone from '../../../ethereum/wikidrone' ;
import axios from 'axios';
import configApp from '../../common/params';
const state = {
  tracks: [],
  result: null,
  imageList: [],
  operatorsCount:0,
  tracksCount: 0,
  spinVisible: false
};

const getters = {
  allTracks: state => state.tracks,
  getTrackResult: state => state.result,
  getImageList: state => state.imageList,
  getTracksCount: state=> state.tracksCount,
  getOperatorsCount: state=> state.operatorsCount,
  getTrackSpinVisible: state=> state.spinVisible
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
      commit('activateSpin');
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
      commit('updateTrackResult', {retCode:0});
      return 0;
    } catch (exc) {
    console.log("newTrack --> exc:" + exc);
    commit('updateTrackResult', {retCode:1,errorMessage:exc.message})
    return 1;
    }
  },
  async fetchImages({commit}, metadata) {
    try{
          //Register Metadata
          const data = {metadata: metadata};
          const headers = {
            "Content-Type": "application/json"
          };

          let URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.FETCH_IMAGELIST_URI;
          //console.log("findRegisters --> URL: " + URL);

          axios.post(URL, data, headers).then(function callback(response, err){
            if(!err){
              //console.log("findRegistersCallback --> response: " + JSON.stringify(response));
              commit('updateImages', response.data);
              //commit('updateTrackResult', {retCode:0})
            }
            else{
              console.log("fetchImages --> error: " + err);
              commit('updateTrackResult', {retCode:1,errorMessage:err});
            }
          }).catch(function callback(e){
            console.log("fetchImages --> e: " + e);
            commit('updateTrackResult', {retCode:1,errorMessage:e})
          });
    }
    catch(exc){
      console.log("fetchImages --> exc:" + exc);
      commit('updateTrackResult', {retCode:1,errorMessage:exc});
    }
  },
  async uploadImage ({commit},imageUpload) {
    console.log("uploadImage --> Iniciando. imageUpload.metadata: " + imageUpload.metadata);
      //Tenemos que tomar el file, solo tenemos su referencia al disco. FomrData es objete de especificación javascript
      const formData = new FormData();
      formData.append('metadata', imageUpload.metadata);
      formData.append('image', imageUpload.image);
      const URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.SEND_OPERATION_IMAGE_URI;
      //const URL = configApp.configVars.CLOUD_URL + "/services/upload";
      URL;
      const headers = {
        "Content-Type": "multipart/form-data"
      };
      //TODO: OJOOOOOOOOOOOOOOOOOOOOo upload no URL
      axios.post(URL, formData, headers).then(function callback(response, err){
        if(!err){
          //console.log("findRegistersCallback --> response: " + JSON.stringify(response));
          commit('updateTrackResult', response.data);
        }
        else{
          console.log("uploadImage --> error: " + err);
          commit('updateTrackResult', {retCode:1,errorMessage:err});
        }
      }).catch(function callback(e){
        console.log("uploadImage --> e: " + e);
        commit('updateTrackResult', {retCode:1,errorMessage:e})
      });
  },
  async uploadImages ({commit},imagesUpload) {
    console.log("uploadImages --> imagesUpload.metadata: " + imagesUpload.metadata);
    console.log("uploadImages --> imagesUpload.images.length: " + imagesUpload.images.length);
    commit('activateSpin');
    const URL = configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.SEND_OPERATION_IMAGES_URI;
    //Tenemos que tomar el file, solo tenemos su referencia al disco. FomrData es objete de especificación javascript
    const formData = new FormData();
    formData.append('metadata', imagesUpload.metadata);
    for(var i=0; i<imagesUpload.images.length;i++){
      console.log("uploadImages --> imagesUpload[" + i + "]: " + imagesUpload.images[i].name);
      formData.append('images', imagesUpload.images[i]);
    }
    const headers = {
      "Content-Type": "multipart/form-data"
    };

    axios.post(URL, formData, headers).then(function callback(response, err){
      if(!err){
        //console.log("findRegistersCallback --> response: " + JSON.stringify(response));
        commit('updateTrackResult', response.data);
      }
      else{
        console.log("uploadImages --> error: " + err);
        commit('updateTrackResult', {retCode:1,errorMessage:err});
      }
    }).catch(function callback(e){
      console.log("uploadImages --> e: " + e);
      commit('updateTrackResult', {retCode:1,errorMessage:e})
    });

  },
  async setTrackResult({commit}, result) {
      commit('updateTrackResult', result);
  },
  async initContractSummary({commit}) {
    try{
      console.log('initContractSummary --> Iniciando...');
      const tracksCount = await wikidrone.methods.tracksCount().call();
      const operatorsCount = await wikidrone.methods.operatorsCount().call();
      console.log('initContractSummary --> tracksCount: ' + tracksCount);
      console.log('initContractSummary --> operatorsCount: ' + operatorsCount);
      var valores = {};
      valores.tc = tracksCount;
      valores.oc = operatorsCount;
      commit('updateTrackResult', {retCode:0});
      commit('updateContractSummary', valores);
      return 0;
    } catch (exc) {
    console.log("getTracksCount --> exc:" + exc);
    commit('updateTrackResult', {retCode:1,errorMessage:exc.message})
    return 1;
    }
  }
};

const mutations = {
  updateTracks: ({rootState},newTracks) => {
    rootState;
    state.tracks = newTracks;
    state.spinVisible = false;
    //console.log(state.tracks);
  },
  activateSpin: ({rootState}) => {
    rootState;
    state.spinVisible = true;
  },
  updateContractSummary: ({rootState},valores) => {
    console.log("updateContractSummary --> tc: " + valores.tc);
    console.log("updateContractSummary --> oc: " + valores.oc);
    rootState;
    state.tracksCount = valores.tc;
    state.operatorsCount = valores.oc;
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
    state.spinVisible = false;
  },
  updateImages: ({rootState},result) => {
    rootState;
    if (result != null){
      console.log("updateImages --> result: " + JSON.stringify(result));
      state.imageList = result;
      //state.registers = result.operatorMetadata;
    }
    else {
      state.imageList = null;
    }
    state.spinVisible = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
