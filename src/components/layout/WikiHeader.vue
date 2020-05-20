<template>
	<div class="position-left row border rounded" id="divHeader">
		<div class="col-4 logo"><img class="float-left" src="images/logo.png"/></div>
		<div class="col-8 float-left text-left"><h4 class="float-left">Secure Distributed flight operations for drones</h4></div>
	</div>
</template>

<script>
	export default {
	name: 'WikiHeader'
	};
</script>

<style scoped>
div {
	text-align: center;
	font-family: "Arial";
}

div#divHeader{
	margin-top:10px;
}

h4{
	margin-top:24px;
	margin-left:10px;
	color:orange;
	vertical-align:middle;
	font-style:italic;
}
img{
	height: 100px;
}
</style>
