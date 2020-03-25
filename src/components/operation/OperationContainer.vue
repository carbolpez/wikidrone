<template>
	<div class="col-md-9 border rounded">
		<SearchBar @termChange="findOperations"></SearchBar>
	<ul class="list-group">
		<OperationListItem 	v-for="operation in allTracks"	:operation="operation" :key="operation.metadata" @operationSelect="operationSelect">
		</OperationListItem>
	</ul>
	<br>
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
				}//operationSelect
		}//methods

	};//export
</script>

<style scoped>
div{
margin:10px;
padding:10px;
width:100%;
}
</style>
