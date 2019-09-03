<template>
  <div class="results">
    <span class="map">show results</span>
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
      const map = new google.maps.Map(element, options);
    });
  },

};
</script>
<style lang="scss" scoped>
.results {
    height: 100%;
    margin: 0 5%;
}
#map {
    width: 750px;
    height: 470px;
}
.map {
    color: #546087;
    display: block;
    font-family: $roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    height: 17px;
    letter-spacing: 1px;
    line-height: 14px;
    margin-bottom: 14px;
    text-transform: uppercase;
}
</style>
