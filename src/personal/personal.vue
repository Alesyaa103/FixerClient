<template>
    <div id="app">
        <Sidebar v-if="showBar" :onShowBurger="onChangeMenu" :user="user"/>
        <section class="container">
            <HeaderPro :user="user" :onShowMenu="onChangeMenu" :showThisBurger="showThisBurger"/>
            <router-view @returnUser="onReturnUser"></router-view>
        </section>
    </div>
</template>
<script>
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
      user: {},
      showThisBurger: false,
    };
  },
  methods: {
    onReturnUser(data) {
      this.user = data;
    },
    onChangeMenu() {
      this.showThisBurger = !this.showThisBurger;
      this.showBar = !this.showBar;
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
      min-height: 100vh;
      height: 100%;
    }
    @include onPhone {
      min-height: 100vh;
      height: 100%;
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
