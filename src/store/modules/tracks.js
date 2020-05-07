
import wikidrone from '../../../ethereum/wikidrone' ;
const state = {
  tracks: [],
  result: null
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
