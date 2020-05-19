<template>
  <div class="image-container">
        <img 	v-for="image in getImageList"	:key="image._id" class="border border-warning" :src="getImageURI(image._id)"/>
  </div>
</template>

<script>
  import configApp from '../../common/params';
  import { mapGetters, mapActions } from 'vuex';

  export default {
   name: 'ImageList',
   computed: {
     ...mapGetters(['getImageList'])
   },
   props: ['metadata'],
   methods: {
     ...mapActions(['fetchImages']),
     getImageURI(id){
       return configApp.configVars.CLOUD_URL + "/" + configApp.configVars.CONTEXT + "/" + configApp.configVars.GET_IMAGE_URI + "?id=" + id;
     }
   },
    created() {
      this.fetchImages(this.metadata);
    }
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
