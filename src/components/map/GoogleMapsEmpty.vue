<template>
  <div id="map" ref="map">
  </div>
</template>

<script>
import configApp from '../../common/params';
export default {
  name: 'GoogleMapsEmpty',
  data() {
    return {
      start: null,
      finish: null,
      routePoints: null
    };
  },
  mounted() {
    //console.log("start:" + this.operation.start);
    let centerPoint = configApp.configVars.DEFAULT_CENTER_POINT;
    this.map = new window.google.maps.Map(
      this.$refs["map"], {
      center: {lat: centerPoint.geometry.coordinates[1], lng:centerPoint.geometry.coordinates[0]},
      zoom: 13
    });

    var drawingManager = new window.google.maps.drawing.DrawingManager({
          drawingMode: window.google.maps.drawing.OverlayType.POLYLINE,
          drawingControl: true,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            //drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
            drawingModes: [ 'polyline']
          },
          //markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
          polylineOptions: {
            geodesic: true,
            strokeColor: '#C70039',
            strokeOpacity: 1.0,
            strokeWeight: 1.5,
            icons: [{icon: {
                      path: window.google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                      strokeOpacity: 1,
                      scale:1.4
                    }}]
          }
        });
        drawingManager.setMap(this.map);
        var listener = function(event) {
          if (event.type == 'polyline'){
            //console.log("overlaycomplete --> event.overlay: " + event.overlay.getPath().getArray());
            this.routePoints = [];
            //console.log("overlaycomplete --> this.operation: " + this.operation);
            this.start = event.overlay.getPath().getArray()[0];
            this.finish = event.overlay.getPath().getArray()[event.overlay.getPath().getArray().length-1];
            for (var i=1; i<event.overlay.getPath().getArray().length-1;i++) {
               //console.log("event.overlay.getPath().getArray() [" + i + "]: " + event.overlay.getPath().getArray()[i]);
               this.routePoints.push(event.overlay.getPath().getArray()[i]);
            }
          }
        };
        //Bind this to the listener function in order to access data information
        var boundListener = listener.bind(this.$data);
        window.google.maps.event.addListener(drawingManager, 'overlaycomplete', boundListener);
        //TODO: Clean all shapes
  }
};
</script>

<style>
#map {
  width: 100%;
  height:100%;
  background: white;
  position: absolute;
}
</style>
