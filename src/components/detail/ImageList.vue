<template>
  <div class="image-container w-100">
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

img {
  padding: 5px;
  margin:5px;
  opacity: 1;
  max-width: 200px;
}
</style>
