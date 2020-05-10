<template>
  <div class="dropper">
  <!-- $event.target.files $event le dice a view que viene del change envent. Podemos manejar el evento antes de pasarlo a la funcion vue-->
    <input type="file" @change="setFile($event)" multiple accept="image/*" />
    <span>Arrastra aquí las imágenes de la operación de vuelo</span>
  </div>
</template>

<script>

  export default {
   name: 'UploadForm',
   methods: {
     setFile: function(files) {
       console.log('setFile --> files: ' + JSON.stringify(event));
       this.images = files;
     }
  },
   data() {
     return {
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
  opacity: 0;
}
span{
  color: grey;
}
</style>
