<template>
  <div class="col-md-9 border rounded">
    <h4 class="titleContainer">Operation Details</h4>
    <div v-if="(getTrackResult !=null) && (getTrackResult.retCode != 0)" class="alert alert-danger w-100" role="alert">
      <b>Problemas procesando registro: {{getTrackResult}}</b>
    </div>
    <ImageList :metadata="operation.metadata"></ImageList>
    <OperationDetail :operation="operation"></OperationDetail>
    <button type="button" class="btn btn-outline-info float-left" @click="listOperation">Volver</button>
  </div>
</template>

<script>
  import OperationDetail from './OperationDetail';
  import ImageList from './ImageList';
  import { router } from '../../main';
  import { mapGetters, mapActions} from 'vuex';
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
      },
      ...mapActions(['setTrackResult'])
    },
    computed: {...mapGetters(['getTrackResult'])},
    created: function () {
      this.setTrackResult(null);
    },
    activated: function() {
      this.setTrackResult(null);
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
