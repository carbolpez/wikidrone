<template>
  <div class="container">
  <h5 class="titleDetail">{{ operation.description }}</h5>
  <div class="row border">
    <div class="col-md-7 border content">
      <GoogleMaps :operation="operation"></GoogleMaps>

    </div>
    <div class="col-md-4 border content">
      <form>
        <div class="form-row">
            <label>Operator Address:</label><label>{{operation.operator}}</label>
        </div>
        <div class="form-row">
            <label>Start Time:</label><label>{{new Date(parseInt(operation.startTime)).toLocaleString()}}</label>
        </div>
        <div class="form-row">
            <label>End Time:</label><label>{{new Date(parseInt(operation.endTime)).toLocaleString()}}</label>
        </div>
        <div class="form-row">
            <label>Min. Altitude:</label><label>{{operation.minAltitude}}</label>
        </div>
        <div class="form-row">
            <label>Max. Altitude:</label><label>{{operation.maxAltitude}}</label>
        </div>
        <div class="form-row">
            <label>Metadata:</label><label>{{operation.metadata}}</label>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import GoogleMaps from '../map/GoogleMaps';
  export default {
    name: 'OperationDetail',
    props: ['operation'],
    components: {GoogleMaps},
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
height:300px;
}
label{
margin-left:10px;
font-size: 10px;
}
</style>
