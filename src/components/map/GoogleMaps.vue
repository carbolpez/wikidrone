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
    console.log("start:" + this.operation.start);
    this.map = new window.google.maps.Map(
      this.$refs["map"], {
      center: {lat: -25.344, lng:131.036},
      zoom: 4
    })
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
