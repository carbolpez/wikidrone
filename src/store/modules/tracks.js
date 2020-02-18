
const state = {
  tracks: []
};

const getters = {
  allTracks: state => state.tracks
};

const actions = {
  findTracks({commit}, searchTerm) {
    //console.log('findOperations --> ' + searchTerm);
    var newTracks = [];
    newTracks[0] = searchTerm + '0';
    newTracks[1] = searchTerm + '1';
    newTracks[2] = searchTerm + '2';
    newTracks[3] = searchTerm + '3';
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
