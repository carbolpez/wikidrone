<template>
  <div class="col-md-8 border rounded" id="mycontainer">
    <h4 class="titleContainer">New Operation</h4>
    <!--ImageList></ImageList-->
    <OperationNewDetail></OperationNewDetail>
  </div>
</template>

<script>
  import { mapActions, mapGetters} from 'vuex';
  import { router } from '../../main';
  import OperationNewDetail from '../operation/OperationNewDetail';
  //import ImageList from '../detail/ImageList';
  export default {
    name: 'OperationNewContainer',
    methods: {
      ...mapActions(['registerOperatorMetadata','registerOperator', 'setAccounts','resetResult']),
      listOperation: function() {
        router.push({name:'operation'});
      }
    },
    computed: {...mapGetters(['getResult','getAccounts'])},
    props: [],
    data() {
			return {
      };
		},
    components: {
      OperationNewDetail,
      //ImageList
    },
  };
</script>

<style scoped>
#mycontainer{
margin:10px;
padding:10px;
width:100%;
}

</style>
