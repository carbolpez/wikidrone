<template>
<div>
	<ul class="list-group">
	<!--Key mejora el rendimiento. Debe ser unico -->
		<OperationListItem 	v-for="operation in operations"	:operation="operation" :key="operation.metadata">
		</OperationListItem>
	</ul>
	</div>
</template>

<script>
	import OperationListItem from './OperationListItem';
	import { mapGetters} from 'vuex';
	export default {
		name: 'OperationList',
		components: {
			OperationListItem
		},
		props: ['operations'],
		methods:{
			onOperationSelect(operation) {
				this.$emit('opeartionSelect', operation);
			}//onOperationSelect
		}
	};//default
</script>

<style>
div{
width: 80%;
}
</style>
