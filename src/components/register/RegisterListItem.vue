<template>
   <tr @click="onRegsiterSelect">
     <td>{{register.account}}</td>
     <td>{{register.name}}</td>
     <td>{{register.postalAddress}}</td>
     <td>{{register.email}}</td>
     <td>{{register.company}}</td>
     <td>{{register.licence}}</td>
     <td>{{register.status}}</td>
     <td>{{register.type}}</td>
   </tr>
</template>

<script>
export default {
  name: 'RegisterListItem',
  props: ['register'],
  computed: {
    thumbnailUrl(){
      return null;
    }
  },
  methods: {
    onRegsiterSelect(event) {
      console.log("onRegsiterSelect --> " + event.target.innerHTML);
      this.$emit('onRegsiterSelect', this.register);
    }
  }
};
</script>

<style scoped>
td {
  cursor: pointer;
  font-size: 12px;
}

td:hover {
  background-color: #eee;
}
</style>
