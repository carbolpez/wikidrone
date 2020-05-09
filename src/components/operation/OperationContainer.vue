<template>
	<div class="col-9">
		<h4 class="titleContainer">Operation List</h4>
		<div class="w-50">
			<SearchBar @termChange="findOperations"></SearchBar>
			<ul class="list-group">
				<OperationListItem 	v-for="operation in allTracks"	:operation="operation" :key="operation.metadata" @itemSelect="operationSelect">
				</OperationListItem>
			</ul>
			<hr class="mt-3 mb-3">
			<button type="button" class="btn btn-outline-info float-left" @click="sendHome">Volver</button>
			<button type="button" class="btn btn-outline-info float-right" @click="newRegister">Nueva Operación</button>
		</div>
	</div>
</template>

<script>
import SearchBar from '../search/SearchBar';
import { router } from '../../main';
//import OperationList from './OperationList';
import OperationListItem from './OperationListItem';
import { mapActions,mapGetters} from 'vuex';
	export default {
		name: 'OperationContainer',
		components: {
			SearchBar,
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
div{
margin:10px;
padding:10px;
width:100%;
}
</style>
