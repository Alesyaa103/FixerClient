<template>
  <div>
    <div id='map'></div>
    <script type="application/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXWcV_Jb3exf1-wI7FQ8XXemxy8g2RM0"></script>
  </div>
</template>
<script>
import GoogleMapsLoader from 'google-maps';

export default {
  name: 'resultMap',
  props: {
    workers: Array,
  },
  mounted: () => {
    GoogleMapsLoader.load((google) => {
      const element = document.getElementById('map');
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(50.45466, 30.5238),
      };
      new google.maps.Map(element, options);
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
