<template>
    <div id="app">
        <Sidebar :returnItems="returnItems"/>
        <section class="container">
            <HeaderPro :returnItems="returnItems"/>
            <router-view @returnItems="onReturnItems" :workers="workers"></router-view>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderPro from './components/HeaderPro.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  data() {
    return {
      returnItems: {},
      workers: [],
    };
  },
  components: {
    HeaderPro,
    Sidebar,
  },
  methods: {
    onReturnItems(data) {
      this.returnItems = data;
    },
  },
  mounted() {
    this.axios.get('returnWorkers')
      .then ((res) => {
        if (res.data.workers) {
          this.workers = res.data.workers;
        }
      },
      (err) => {
        console.log(err);
      }
      )
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
#app{
    display: flex;
    overflow: hidden;
}
.container {
    background: #f9fafc;
    width: 100%;

    @include onPhone {
        height: 100%;
        width: 100%;
    }
}

</style>
