<template>
	<div class="content-wrapper">
		<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Administration</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active"><a href="/admin">Admin</a></li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

		<!-- Main content -->
		<section class="content">
			<div class="container-fluid">
				<Spinner v-if="getAdminSpinVisible" ref="spinner"/>
				<div class="row">
				<div v-if="(getAdminResult !=null) && (getAdminResult.retCode != 0)" class="alert alert-danger col-6" role="alert">
					<b>Problemas procesando registro: {{getAdminResult}}</b>
				</div>
				<div v-else-if="(getAdminResult !=null) && (getAdminResult.retCode==0)" class="alert alert-success col-6" role="alert">
					<b>Operación realizada correctamente {{getAdminResult.retCode}}</b>
				</div>
			</div>
				<div class="row">
					<div class="col-6">
					    <div class="card">
								<div class="card-header">
									<h3 class="card-title">Administration operations</h3>
								</div>
								<div class="card-body">
					      	<span>Reset System</span>
					      	<button type="button" class="btn btn btn-danger" @click="resetSystemWrapper">Reset</button>
								</div><!-- car-body-->
					    </div>
							<hr class="mt-3 mb-3"/>
							<button type="button" class="btn btn-outline-info float-left" @click="sendHome">Back</button>
						</div><!--col6-->
					</div><!--row-->
			</div><!--container-fluid-->
		</section>

	</div>
</template>

<script>
import Spinner from '../layout/Spinner';
import { router } from '../../main';
import { mapActions, mapGetters} from 'vuex';
	export default {
		name: 'AdminConatiner',
    methods: {
      ...mapActions(['resetSystem', 'resetAdminResult']),
      sendHome: function(){
        router.push({name:'landing'});
      },
			resetSystemWrapper: async function(){
				this.resetAdminResult();
				this.resetSystem();
			}
    },
		data() {
			return {
				spinVisible: false
      };
		},
    computed: {...mapGetters(['getAdminResult','getAdminSpinVisible'])},
    created: function () {
      this.resetAdminResult();
    },
		components: {
			//SearchBar,
			//OperationList
			Spinner
		}
	};//default
</script>

<style scoped>
button{
  margin-left:20px;
}
</style>
