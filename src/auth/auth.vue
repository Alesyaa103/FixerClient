<template>
    <div id="app">
        <HeaderAuth :headerItems="headerItems"/>
        <section class="content">
            <router-view @returnItems="onReturnItems" :onSignIn="onSignIn" :onSignUp1="onSignUp1" :onSignUp2="onSignUp2" :onReset1="onReset1" :onReset2="onReset2" :user="user"> </router-view>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderAuth from './components/HeaderAuth.vue';

export default {
  name: 'app',
  props: ['onReturnUser'],
  data() {
    return {
      headerItems: {},
      user: {},
      password: '',
    };
  },
  components: {
    HeaderAuth,
  },
  methods: {
    onReset1(user) {
      this.user = user;
      this.axios.post('reset1', this.user)
        .then((res) => {
          this.$router.push('/auth/password3');
        }, (err) => {
          console.log(err);
        });
    },
    onReset2(password) {
      this.user.password = password;
      console.log(this.user);
      this.axios.post('reset2', this.user)
        .then((res) => {
          this.$router.push('/auth/signin');
        }, (err) => {
          console.log(err);
        });
    },
    onSignUp2(password) {
      this.user.password = password;
      this.axios.post('signUp', this.user)
        .then((res) => {
          this.$router.push('/auth/signUp3');
        }, (err) => {
          console.log(err);
        });
    },
    onSignUp1(user) {
      this.user = user;
      this.$router.push('/auth/signUp2');
    },
    onSignIn(user) {
      this.user = user;
      this.axios.post('signIn', user)
        .then((res) => {
          this.saveToken(res);  
          this.$router.push('/personal/profile');
        },
        (err) => {
          console.log(err);
        });
    },
    saveToken(res) {
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
    },
    onReturnItems(data) {
      this.headerItems = data;
    },
    returnUser(){
      this.onReturnUser(
        this.user,
      )
    }
  },
  mounted() {
    this.$emit('returnUser', this.returnUser);
  },
};
</script>
<style lang="scss" scoped>
.content {
        align-items: center;
        display: flex;
        height: 92%;
        justify-content: center;
    }
</style>
