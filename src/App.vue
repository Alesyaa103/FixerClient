<template>
  <div>
    <router-view :user="user" @returnUser="onReturnUser"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return{
      user: {},
    }
  },
  methods: {
    onReturnUser(user) {
      this.user = user;
    }
  },
};
</script>

<style lang="scss">


#app {
  background-color: #f9fafc;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
}

</style>
