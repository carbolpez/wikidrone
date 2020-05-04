
import wikidrone from '../../../ethereum/wikidrone' ;
const state = {
  tracks: []
};

const getters = {
  allTracks: state => state.tracks
};

const actions = {
  async findTracks({commit}, searchTerm) {
    //TO DO: SEARCH BY QUERY
    console.log('findOperations --> ' + searchTerm);
    const tracksCount = await wikidrone.methods.tracksCount().call();
    console.log("wikidrone trackscount: " + tracksCount);
    const operatorsCount = await wikidrone.methods.operatorsCount().call();
    console.log("wikidrone operatorsCount: " + operatorsCount);
    var newTracks = [];
    for (var i = 0; i < tracksCount; i++) {
      newTracks[i] = await wikidrone.methods.getTrack(i).call();
    }

    commit('updateTracks', newTracks);
  }
};

const mutations = {
  updateTracks: ({rootState},newTracks) => {
    rootState;
    state.tracks = newTracks;
    console.log(state.tracks);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
