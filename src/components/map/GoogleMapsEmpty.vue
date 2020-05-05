<template>
  <div id="map" ref="map">
  </div>
</template>

<script>
import configApp from '../../common/params';
export default {
  name: 'GoogleMapsEmpty',
  data: () => ({
    map: null
  }),
  mounted() {
    //console.log("start:" + this.operation.start);
    let centerPoint = configApp.configVars.DEFAULT_CENTER_POINT;
    this.map = new window.google.maps.Map(
      this.$refs["map"], {
      center: {lat: centerPoint.geometry.coordinates[1], lng:centerPoint.geometry.coordinates[0]},
      zoom: 13
    });
  }
}

</script>

<style>
#map {
  width: 100%;
  height:100%;
  background: white;
  position: absolute;
}
</style>
