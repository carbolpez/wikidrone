<template>
	<div class="col-md-2 border rounded">
		<ul class="list-group">
			<li class="list-group-item"><router-link to="/operation">Operations</router-link></li>
			<li class="list-group-item"><router-link to="/detail">Detail</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
	name: 'LeftMenu'
	};
</script>

<style scoped>
div{
margin:10px;
padding:10px;
height:500px;
}
</style>
