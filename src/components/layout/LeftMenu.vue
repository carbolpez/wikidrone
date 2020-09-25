<template>
	<!--
	<div v-if="visible" class="col-2 border rounded">
		<ul class="list-group">
			<li class="list-group-item"><router-link to="/register">Register</router-link></li>
			<li class="list-group-item"><router-link to="/operation">Operations</router-link></li>
			<li class="list-group-item"><router-link to="/admin">Administration</router-link></li>
		</ul>
	</div>
-->
	<!-- Main Sidebar Container -->
	<div v-if="visible" class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<a href="/" class="brand-link">
			<img src="/images/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
					 style="opacity: .8">
			<span class="brand-text font-weight-light">Wikidrone</span>
		</a>
		<!-- Sidebar -->
		<div class="sidebar">

			<!-- Sidebar Menu -->
			<div class="mt-2">
				<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
					<!-- Add icons to the links using the .nav-icon class
							 with font-awesome or any other icon font library -->
					<li class="nav-header">OPTIONS</li>
					<li class="nav-item">
						<!--a href="/register" class="nav-link"-->
						<router-link to="/register" class="nav-link">
							<i class="nav-icon fas fa-user"></i>
							<p>
								Register
							</p>
						</router-link>
						<!--/a-->
					</li>
					<li class="nav-item">
						<router-link to="/operation" class="nav-link">
							<i class="nav-icon fas fa-road"></i>
							<p>
								Tracks
							</p>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/admin" class="nav-link">
							<i class="nav-icon fas fa-cog"></i>
							<p>Admin</p>
						</router-link>
					</li>
				</ul>
			</div>
			<!-- /.sidebar-menu -->
		</div>
		<!-- /.sidebar -->
	</div>
</template>
<script>
	export default {
		name: 'LeftMenu',
		data() {
			return { visible: true};
		}
	};
</script>

<style scoped>
</style>
