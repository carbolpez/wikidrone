
import wikidrone from '../../../ethereum/wikidrone' ;
const state = {
  tracks: []
};

const getters = {
  allTracks: state => state.tracks
};

const actions = {
  async findTracks({commit}, searchTerm) {
    console.log('findOperations --> ' + searchTerm);
    const tracksCount = await wikidrone.methods.tracksCount().call();
    console.log("wikidrone trackscount: " + tracksCount);
    var newTracks = [];
    /*
    newTracks[0] = searchTerm + '0';
    newTracks[1] = searchTerm + '1';
    newTracks[2] = searchTerm + '2';
    newTracks[3] = searchTerm + '3';
    */
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
