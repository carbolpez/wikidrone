<template>
  <!--
  <li class="list-group-item media" @click="onOperationSelect">
  {{ operation.description }}
  </li>
-->
  <tr @click="onOperationSelect">
    <td>{{operation.description}}</td>
    <td>{{operation.metadata}}</td>
    <td>{{new Date(parseInt(operation.startTime)).toLocaleString()}}</td>
    <td>{{operation.operator}}</td>
  </tr>
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
