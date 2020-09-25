<template>
	<div class="row mb-2">
		<div class="card col-6">
				<div class="card-body">
					<div class="spinner-border text-primary" role="status">
	  				<span class="sr-only">Loading...</span>
					</div>
					<span class="ml-3 text-secondary">Blockchain communication. Please, wait a few seconds and don't click any link...</span>
				</div>
		</div>
</div>
</template>

<script>
	export default {
		name: 'Spinner',
		props: ['spinVisible']
	};
</script>

<style scoped>

</style>
