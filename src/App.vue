<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
};
</script>

<style lang="scss">
@import "@/styles/_mixins.scss";

#app {
  background-color: #f9fafc;
  height: 100vh;
  width: 100vw;
}

</style>
