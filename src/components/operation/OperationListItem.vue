<template>
  <li class="list-group-item media" @click="onOperationSelect">
  {{ operation.description }}
  </li>
</template>

<script>
export default {
  name: 'OperationListItem',
  props: ['operation'],
  computed: {
    thumbnailUrl(){
      return null;
    }
  },
  methods: {
    onOperationSelect(event) {
      console.log("onOperationSelect --> " + event.target.innerHTML);
      this.$emit('itemSelect', this.operation);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>
