<template>
	<div>
		<!--input v-on:input="onInput"/-->
		<input @input="onInput"/>

    <input class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="Search drone operations"
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
