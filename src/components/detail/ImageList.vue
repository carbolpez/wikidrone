<template>
  <div class="image-container">
        <img class="border border-warning" src="/images/wikidrone.png"/>
        <img class="border border-warning" src="/images/wikidrone.png"/>
        <img class="border border-warning" src="/images/wikidrone.png"/>

        <img class="border border-warning" src="/images/wikidrone.png"/>
        <img class="border border-warning" src="/images/wikidrone.png"/>
        <img class="border border-warning" src="/images/wikidrone.png"/>
  </div>
</template>

<script>



  export default {
   name: 'ImageList',
   methods: {}
 };//export
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  padding: 5px;
  margin:20px;
  opacity: 0.5;
}
</style>
