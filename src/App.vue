<template>
<div class="container-fluid">
<WikiHeader></WikiHeader>
<!--TopMenu></TopMenu-->
<div class="row">
  <LeftMenu></LeftMenu>
  <router-view></router-view>
</div>
</div>
</template>

<script>
import WikiHeader from './components/layout/WikiHeader';
//import TopMenu from './components/layout/TopMenu';
import LeftMenu from './components/layout/LeftMenu';

export default {
  name: 'App',
  components: {
  WikiHeader,
  //TopMenu,
  LeftMenu
  },
  data() {
    return {};
  }
};
</script>
