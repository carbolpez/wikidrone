<template>
  <div class="content-wrapper" id="registerListContainer">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Operators Register</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active"><a href="/register">Register</a></li>
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
              <h3 class="card-title">List of operators with all their attributes</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Address</th>
                  <th>Name</th>
                  <th>Postal Address</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Licence</th>
                  <th>Status</th>
                  <th >Type</th>
                </tr>
                </thead>
                <tbody>
                  <RegisterListItem 	v-for="register in getRegisters"	:register="register" :key="register.address" @itemSelect="registerSelect">
                  </RegisterListItem>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

        </div>
        <!-- /.col -->
        <div class="col-12">
          <hr class="mt-3 mb-3">
          <button type="button" class="btn btn-outline-info float-left" @click="sendHome">Back</button>
          <button type="button" class="btn btn-outline-info float-right" @click="newRegister">New Record</button>
        </div>
      </div>
      <!-- /.row -->

    </div>
  </div>
</template>
<!-- jQuery -->
<script>
//import SearchBar from '../search/SearchBar';
//import { router } from '../../main';

import RegisterListItem from './RegisterListItem';
import { mapActions,mapGetters} from 'vuex';
import { router } from '../../main';
	export default {
		name: 'RegisterContainer',
		components: {
			//SearchBar,
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
        },
        sendHome: function(){
          router.push({name:'landing'});
        }
		},
    created: function () {
      this.searchRegisters(null);
    }
	};//export
</script>

<style scoped>
</style>
