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
    console.log("routePoints: " + this.operation.routePoints);
    //console.log("geometry: " + startPoint.geometry.coordinates);
    this.map = new window.google.maps.Map(
      this.$refs["map"], {
      //center: {lat: startPoint.geometry.coordinates[1], lng:startPoint.geometry.coordinates[0]},
      center: startPoint,
      zoom: 15
    });
    //StartPoint
    //var latLng1 = new window.google.maps.LatLng(startPoint.geometry.coordinates[1],startPoint.geometry.coordinates[0]);
    var marker1 = new window.google.maps.Marker({
           position: startPoint,
           map: this.map,
           title: 'Start Point',
           icon: '/images/startPoint.png'
         });

    //Route Points
    let routePoints = JSON.parse(this.operation.routePoints);
    /*var coordinates = new Array();
    for (var i in routePoints) {
       console.log("routePoints [" + i + "]: " + routePoints[i]);
       //coordinates.push({lat: routePoints[i].geometry.coordinates[1], lng: routePoints[i].geometry.coordinates[0]});
       coordinates.push(JSON.parse(routePoints[i]));
    }
    */
    var flightPath = new window.google.maps.Polyline({
              path: routePoints,
              geodesic: true,
              strokeColor: '#FFA500',
              strokeOpacity: 1.0,
              strokeWeight: 2,
              map: this.map
            });

    //EndPoint
    //var latLng2 = new window.google.maps.LatLng(endPoint.geometry.coordinates[1],endPoint.geometry.coordinates[0]);
    var marker2 = new window.google.maps.Marker({
          position: endPoint,
          map: this.map,
          title: 'Finish Point',
          icon: '/images/endPoint.png'
        });
    //Evitar error reportado de uso
    marker1;
    flightPath;
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
