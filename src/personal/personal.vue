<template>
    <div id="app">
        <Sidebar v-if="showBar"/>
        <section class="container">
            <HeaderPro :onShowMenu="onShowMenu"/>
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderPro from './components/HeaderPro.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  components: {
    HeaderPro,
    Sidebar,
  },
  data() {
    return {
      showBar: true,
    };
  },
  methods: {
    onShowMenu(showBar) {
      this.showBar=showBar;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
#app{
    display: flex;
    overflow: hidden;
    @include onTablet {
      overflow: auto;
    }
}
.container {
    background: #f9fafc;
    width: 100%;
    @include onTablet {
      width: 95%;
    }
    @include onPhone {
        height: 100%;
        width: 100%;
    }
}

</style>
