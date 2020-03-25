<template>
  <div class="col-md-9 border rounded">
  <h4 class="titleContainer">Operation Details</h4>
  <ImageList></ImageList>
  <OperationDetail :operation="operation"></OperationDetail>
  </div>
</template>

<script>
  import OperationDetail from './OperationDetail';
  import ImageList from './ImageList';
  export default {
    name: 'DetailContainer',
    props: ['operation'],
    components: {
      ImageList,
      OperationDetail
    }
  };
</script>

<style scoped>
</style>
