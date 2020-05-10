<template>
  <div class="col-md-9 border rounded">
    <h4 class="titleContainer">Operation Details</h4>
    <ImageList></ImageList>
    <OperationDetail :operation="operation"></OperationDetail>
    <button type="button" class="btn btn-outline-info float-left" @click="listOperation">Volver</button>
  </div>
</template>

<script>
  import OperationDetail from './OperationDetail';
  import ImageList from './ImageList';
  import { router } from '../../main';
  export default {
    name: 'DetailContainer',
    props: ['operation'],
    components: {
      ImageList,
      OperationDetail
    },
    methods: {
      listOperation: function() {
        router.push({name:'operation'});
      }
    }
  };
</script>

<style scoped>
div{
margin:10px;
padding:10px;
width:100%;
}
</style>
