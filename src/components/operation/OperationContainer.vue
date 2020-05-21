<template>
	<div class="content-wrapper">
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>List of Tracks</h1>
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

		<div class="content">
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header">
							<h3 class="card-title">List of all tracks from smartcontract</h3>
						</div>
						<!-- /.card-header -->
						<div class="card-body">
			<!--
			<SearchBar @termChange="findOperations"></SearchBar>
						-->
							<ul class="list-group">
								<OperationListItem 	v-for="operation in allTracks"	:operation="operation" :key="operation.metadata" @itemSelect="operationSelect">
								</OperationListItem>
							</ul>
							<hr class="mt-3 mb-3">
							<button type="button" class="btn btn-outline-info float-left" @click="sendHome">Volver</button>
							<button type="button" class="btn btn-outline-info float-right" @click="newRegister">Nueva Operación</button>

						</div><!-- card-body-->
					</div><!-- card-->
				</div><!-- col-->
			</div><!-- row-->
		</div><!-- content-->


	</div><!--container-->
</template>

<script>
//import SearchBar from '../search/SearchBar';
import { router } from '../../main';
//import OperationList from './OperationList';
import OperationListItem from './OperationListItem';
import { mapActions,mapGetters} from 'vuex';
	export default {
		name: 'OperationContainer',
		components: {
	//		SearchBar,
			//OperationList
			OperationListItem
		},
		computed: {...mapGetters(['allTracks'])},
		methods:
		/*
		created() {
				this.findTracks();
		}
		*/
		{
			...mapActions(['findTracks']),
				findOperations: function(searchTerm) {
					//console.log('onTermChange:' + searchTerm);
					//this.operations = [searchTerm];
					this.findTracks(searchTerm);
				},//onTermChange
				operationSelect: function(operation){
					//console.log("operationSelect --> " + operation);
					router.push({name:'detail', params: {operation}});
				},
				newRegister: function(){
					router.push({name:'operationNew'});
				},
				sendHome: function(){
					router.push({name:'landing'});
				}
		},
		created: function () {
			this.findOperations(null);
		}

	};//export
</script>

<style scoped>

</style>
