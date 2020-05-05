<template>
  <div class="container">
  <h5 class="titleDetail">Nueva Operación</h5>
  <div class="row border">
    <div class="col-md-7 border content">
      <GoogleMapsEmpty></GoogleMapsEmpty>

    </div>
    <div class="col-md-4 border content">
      <form>
        <div class="form-row">
            <label>Operator Address:</label><label>a</label>
        </div>
        <div class="form-row">
            <label>Start Time:</label><label>a</label>
        </div>
        <div class="form-row">
            <label>End Time:</label><label>asdf</label>
        </div>
        <div class="form-row">
            <label>Min. Altitude:</label><label>asdf</label>
        </div>
        <div class="form-row">
            <label>Max. Altitude:</label><label>asdf</label>
        </div>
        <div class="form-row">
            <label>Metadata:</label><label>asdf</label>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import GoogleMapsEmpty from '../map/GoogleMapsEmpty';
  export default {
    name: 'OperationNewDetail',
    components: {GoogleMapsEmpty},
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
