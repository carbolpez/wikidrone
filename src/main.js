import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import OperationContainer from './components/operation/OperationContainer';
import DetailContainer from './components/detail/DetailContainer';
import RegisterContainer from './components/register/RegisterContainer';
import RegisterListContainer from './components/register/RegisterListContainer';
import OperationNewContainer from './components/operation/OperationNewContainer';
import Landing from './components/layout/Landing';

Vue.use(VueRouter);
//Si exportamos el objeto lo poemos importar en otro componente
export const router = new VueRouter({
  //browser router mode
  mode: 'history',
  routes: [
    { name: 'landing', path: '/', component: Landing, props:true},
    { name: 'operation', path: '/operation', component: OperationContainer, props:true },
    { name: 'detail', path: '/detail', component: DetailContainer, props:true },
    { name: 'register', path: '/register', component: RegisterListContainer, props:true },
    { name: 'registerNew', path: '/registerNew', component: RegisterContainer, props:true },
    { name: 'operationNew', path: '/operationNew', component: OperationNewContainer, props:true }
  ]
})
new Vue({
  //store: store  Cuando key y value son identicos dejamos solo un valor
  store,
  router,
  render: h => h(App)
}).$mount('#app');
