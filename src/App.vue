<template>
<div class="wrapper">
  <LeftMenu></LeftMenu>
  <router-view></router-view>
</div>
</template>

<script>
import LeftMenu from './components/layout/LeftMenu';

export default {
  name: 'App',
  components: {
  LeftMenu
  },
  data() {
    return {};
  }
};
</script>
