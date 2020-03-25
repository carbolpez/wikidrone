<template>
  <div id="map" ref="map">
  </div>
</template>

<script>
export default {
  name: 'GoogleMaps',
  props: ['operation'],
  data: () => ({
    map: null
  }),
  mounted() {
    //console.log("start:" + this.operation.start);
    let startPoint = JSON.parse(this.operation.start);
    let endPoint = JSON.parse(this.operation.finish);
    //console.log("geometry: " + startPoint.geometry.coordinates);
    this.map = new window.google.maps.Map(
      this.$refs["map"], {
      center: {lat: startPoint.geometry.coordinates[1], lng:startPoint.geometry.coordinates[0]},
      zoom: 13
    });
    var latLng1 = new window.google.maps.LatLng(startPoint.geometry.coordinates[1],startPoint.geometry.coordinates[0]);

    var marker1 = new window.google.maps.Marker({
           position: latLng1,
           map: this.map,
           title: 'Start Point'
         });
    var latLng2 = new window.google.maps.LatLng(endPoint.geometry.coordinates[1],endPoint.geometry.coordinates[0]);
    var marker2 = new window.google.maps.Marker({
          position: latLng2,
          map: this.map,
          title: 'Finish Point'
        });
    //Evitar error reportado de uso
    marker1;
    marker2;
  }
}
</script>

<style>
#map {
  width: 100%;
  height: 100%;
  background: white;
}
</style>
