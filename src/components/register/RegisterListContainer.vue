<template>
  <div class="col-md-8 border rounded" id="registerListContainer">
    <h4 class="titleContainer">Register List</h4>
    <div class="w-50">
    <SearchBar @termChange="searchRegisters"></SearchBar>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Address</th>
          <th scope="col">Name</th>
          <th scope="col">Postal Address</th>
          <th scope="col">Email</th>
          <th scope="col">Company</th>
          <th scope="col">Licence</th>
          <th scope="col">Status</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
      <RegisterListItem 	v-for="register in getRegisters"	:register="register" :key="register.address" @itemSelect="registerSelect">
      </RegisterListItem>
    </tbody>
  </table>
    <hr class="mt-3 mb-3">
    <button type="button" class="btn btn-outline-info float-right" @click="newRegister">Nuevo Registro</button>
    </div>
  </div>
</template>

<script>
import SearchBar from '../search/SearchBar';
//import { router } from '../../main';

import RegisterListItem from './RegisterListItem';
import { mapActions,mapGetters} from 'vuex';
import { router } from '../../main';
	export default {
		name: 'RegisterContainer',
		components: {
			SearchBar,
			//OperationList
			RegisterListItem
		},
    data() {
			return {
        registers: []
      };
		},
		computed: {...mapGetters(['getResult','getRegisters'])},
		methods:
		{
			...mapActions(['findRegisters']),
				searchRegisters: function(searchTerm) {
					//console.log('onTermChange:' + searchTerm);
					//this.operations = [searchTerm];
					this.findRegisters(searchTerm);
				},//onTermChange
				registerSelect: function(register){
					console.log("registerSelect --> " + register);
					//router.push({name:'detail', params: {operation}});
				},
        newRegister: function(){
          router.push({name:'registerNew'});
        }
		}//methods

	};//export
</script>

<style scoped>
#registerListContainer{
margin:10px;
padding:10px;
width:100%;
}
th {
  cursor: pointer;
  font-size: 12px;
}
</style>
