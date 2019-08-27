<template>
   <div id='map'></div>
</template>
<script>
import GoogleMapsLoader from 'google-maps';

export default {
  name: 'myMap',
  data: () => ({
    msg: '',
  }),
  mounted: () => {
    GoogleMapsLoader.load((google) => {
      const element = document.getElementById('map');
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(50.45466, 30.5238),
      };
      const map = new google.maps.Map(element, options);
    });
  },

};
</script>
<style lang="scss" scoped>
#map {
    width: 750px;
    height: 470px;
}
</style>
