<template>
	<div>
		<!--input v-on:input="onInput"/-->
		<input @input="onInput" placeholder="Search automatically"/>

    <input class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="Search and press enter"
      @keyup.enter="onInput">
	</div>
</template>

<script>
	export default {
		name: 'SearchBar',
		methods: {
			onInput: function(event) {
				this.$emit('termChange', event.target.value);
			}
		}
	};//export
</script>

<style scoped>
	input {
		width: 75%;
	}

	div {
		text-align: center;
		margin: 20px;
	}
</style>
