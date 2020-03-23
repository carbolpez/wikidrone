import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import OperationContainer from './components/operation/OperationContainer';
import DetailContainer from './components/detail/DetailContainer';

Vue.use(VueRouter);
//Si exportamos el objeto lo poemos importar en otro componente
export const router = new VueRouter({
  //browser router mode
  mode: 'history',
  routes: [
    { path: '/operation', component: OperationContainer },
    { name: 'detail', path: '/detail', component: DetailContainer, props: true },
  ]
})
console.log('Iniciando...');
new Vue({
  //store: store  Cuando key y value son identicos dejamos solo un valor
  store,
  router,
  render: h => h(App)
}).$mount('#app');
