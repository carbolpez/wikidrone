<template>
	<div v-if="visible" class="col-2 border rounded">
		<ul class="list-group">
			<li class="list-group-item"><router-link to="/register">Register</router-link></li>
			<li class="list-group-item"><router-link to="/operation">Operations</router-link></li>
		</ul>
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
div{
margin:10px;
padding:10px;
height:500px;
}
</style>
