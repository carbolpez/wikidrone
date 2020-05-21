<template>
  <div class="content-wrapper" id="mycontainer">
    <section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>New Track</h1>
					</div>
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item active"><a href="/register">Tracks</a></li>
						</ol>
					</div>
				</div>
			</div><!-- /.container-fluid -->
		</section>
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
      OperationNewDetail
    },
  };
</script>

<style scoped>
</style>
