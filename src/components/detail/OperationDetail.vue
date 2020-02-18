<template>
  <div class="container">
  <h5 class="titleDetail">{{ operation }}</h5>
  <div class="row border">
    <div class="col-md-7 border content">
    Informacion de mapa
    </div>
    <div class="col-md-4 border content">
    Detalle de mapa
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'OperationDetail',
    props: ['operation'],
    components: {
    },
    data() {
      return { };
    },
    methods: {

    }
  };//export
</script>

<style scoped>
.content{
margin-left:5px;
margin-top:10px;
margin-bottom:10px;
}
</style>
