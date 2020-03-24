<template>
  <div class="container">
  <h5 class="titleDetail">{{ operation.description }}</h5>
  <div class="row border">
    <div class="col-md-7 border content">

    </div>
    <div class="col-md-4 border content">
      <form>
        <div class="form-row">
            <label>Operator Address</label><label> {{operation.operator}} </label>
        </div>
        <div class="form-row">
            <label>startTime</label><label> {{operation.startTime}} </label>
        </div>
        <div class="form-row">
            <label>endTime</label><label> {{operation.endTime}} </label>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'OperationDetail',
    props: ['operation'],
    components: {
    },
    data() {
      return { };
    },
    methods: {

    }
  };//export
</script>

<style scoped>
.content{
margin-left:5px;
margin-top:10px;
margin-bottom:10px;
}
.label{
margin-left:10px;
}
</style>
