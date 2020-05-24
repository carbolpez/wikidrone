<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Track Details</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active"><a href="/tracks">Tracks</a></li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <div v-if="(getTrackResult !=null) && (getTrackResult.retCode != 0)" class="alert alert-danger" role="alert">
      <b>Problemas procesando registro: {{getTrackResult}}</b>
    </div>
    <ImageList :metadata="operation.metadata"></ImageList>
    <OperationDetail :operation="operation"></OperationDetail>
    <div class="content" id="buttons">
      <div class="row">
        <div class="col-12">
            <button type="button" class="btn btn-outline-info float-left" @click="listOperation">Back</button>
        </div>
      </div>
    </div>
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
#buttons{
  margin-top: 100px;
}
</style>
