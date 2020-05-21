<template>
	<!--
	<div class="col-9">
		<h4 class="titleContainer">Wikidrone home</h4>
		<p class="text-justify">Flight operations registry pilot in mixed centralized systems and with blockchain technology. Single Page Application application developed with vue.js. Centralized Metadata System developed with node.js, express.js, mongoose.js, mongodb technology. SmartContract developed for Ethereum blockchain network with Solidity</p>
	</div>
-->


	<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Wikidrone Home</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">	<router-link to="/register">Home</router-link></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
		<!-- Main content -->
		<section class="content">

			<div class="container-fluid">
				<!-- Small boxes (Stat box) -->
				<div class="row">
					<div class="card col-12">
							<div class="card-header">
								Flight operations registry pilot in mixed centralized systems and with blockchain technology.
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col-lg-3 col-6">
										<!-- small box -->
										<div class="small-box bg-info">
											<div class="inner">
												<h3>{{getOperatorsCount}}</h3>

												<p>Operators registered</p>
											</div>
											<div class="icon">
												<i class="ion ion-person"></i>
											</div>
											<router-link to="/register" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
										</div>
									</div>
									<!-- ./col -->
									<div class="col-lg-3 col-6">
										<!-- small box -->
										<div class="small-box bg-success">
											<div class="inner">
												<h3>{{getTracksCount}}</h3>

												<p>Tracks recorded</p>
											</div>
											<div class="icon">
												<i class="ion ion-stats-bars"></i>
											</div>
											<router-link to="/operation" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /.row -->
			</div><!-- /.container-fluid -->
		</section>
	</div>

</template>

<script>
import { mapActions, mapGetters} from 'vuex';
	export default {
		name: 'Landig',
		methods: {...mapActions(['initContractSummary',])},
		computed: {...mapGetters(['getTracksCount', 'getOperatorsCount'])},
		created: function () {
      this.initContractSummary();
    }
	};//default
</script>

<style>
</style>
