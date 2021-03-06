import Vuex from 'vuex';
import Vue from 'vue';
import tracks from './modules/tracks';
import register from './modules/register';
import admin from './modules/admin';
//Permite conectar vue con vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    //auth: auth. CUando key y value son identicos podemos dejar solo un valor
    tracks: tracks,
    register: register,
    admin: admin
  }
})
