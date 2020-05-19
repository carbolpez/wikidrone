<template>
  <div class="dropper">
  <!-- $event.target.files $event le dice a view que viene del change envent. Podemos manejar el evento antes de pasarlo a la funcion vue-->
    <input type="file" @change="setFile" id="inputFile" ref="inputFile" multiple/>
    <span>Arrastra aquí las imágenes de la operación de vuelo</span>
  </div>
</template>

<script>
  'use strict';
  export default {
   name: 'UploadForm',
   methods: {
     setFile: function() {
     console.log('setFile --> files[0]: ' + this.$refs.inputFile.files[0].name);
     console.log('setFile --> files.length: ' + this.$refs.inputFile.files.length);
     this.image = this.$refs.inputFile.files[0];
     this.images = [];
     for(var i=0;i<this.$refs.inputFile.files.length;i++){
        console.log("setFile --> inputFile[" + i + "].name: " + this.$refs.inputFile.files[i].name);
      }
      this.images = this.$refs.inputFile.files;
       //this.$emit('change', this.$refs.inputFile.files[0]);
     }
  },
   data() {
     return {
       image: '',
       images: []
     };
   }
 };
</script>

<style scoped>
.dropper {
  height:15vh;
  border: 1px dashed grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropper:hover{
  background-color: #eee;
}

input {
  width: 100%;
  height: 15vh;
  position: absolute;
/*  opacity: 0;*/
}
span{
  color: grey;
}
</style>
