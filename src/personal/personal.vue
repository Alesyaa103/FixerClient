<template>
    <div id="app">
        <Sidebar />
        <section class="container">
            <HeaderPro />
            <router-view></router-view>
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
