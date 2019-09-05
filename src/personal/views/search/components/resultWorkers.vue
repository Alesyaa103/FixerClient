<template>
  <div class="workers">
    <Worker :worker="worker" v-for='worker in workers' :key="worker._id" />
  </div>
</template>
<script>
  import Worker from '../components/Worker.vue';

  export default {
    name: 'resultWorkers',
    props: {
      workers: Array,
    },
    components: {
      Worker,
    }
}  

</script>
<style lang="scss" scoped>

  .workers {
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    justify-content: space-between;
    min-width: 750px;
    overflow: auto;
  }

  ::-webkit-scrollbar-button {
    background-image: url('');
    background-repeat: no-repeat;
    height: 0;
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ecedee
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0;
    background-color: #dadada;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #dadada;
  }

  ::-webkit-resizer {
    background-image: url('');
    background-repeat: no-repeat;
    height: 0;
    width: 4px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

</style>
