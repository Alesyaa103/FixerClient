<template>
    <div id="app">
        <HeaderAuth/>
        <section class="content">
            <router-view :onSignIn="onSignIn" :onSignUp1="onSignUp1" :onSignUp2="onSignUp2" :onReset1="onReset1" :onReset2="onReset2" :user="user"> </router-view>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderAuth from './components/HeaderAuth.vue';

export default {
  name: 'app',
  data() {
    return {
      password: '',
      user: {},
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
          if (res.data.err) {
            const error = res.data.err;
            this.showErr(error);
          } else {
            this.$router.push('/auth/password3');
          }
        },
        (err) => {
          this.showErr(err);
        });
    },
    onReset2(password) {
      this.user.password = password;
      this.axios.post('reset2', this.user)
        .then((res) => {
          if (res.data.err) {
            const error = res.data.err;
            this.showErr(error);
          } else {
            this.$router.push('/auth/signin');
          }
        },
        (err) => {
          this.showErr(err);
        });
    },
    onSignUp2(password) {
      this.user.password = password;
      this.axios.post('signUp', this.user)
        .then((res) => {
          if (res.data.err) {
            const error = res.data.err;
            this.showErr(error);
            this.$router.push('/auth/signUp1');
          } else {
            this.$router.push('/auth/signUp3');
          }
        },
        (err) => {
          this.showErr(err);
        });
    },
    onSignUp1(user) {
      this.user = user;
      this.$router.push('/auth/signUp2');
    },
    onSignIn(user) {
      this.axios.post('signIn', user)
        .then((res) => {
          if (res.data.err) {
            const error = res.data.err;
            this.showErr(error);
          } else {
            this.saveToken(res);
            this.saveUser(res);
            this.$router.push('/personal/profile');
          }
        },
        (err) => {
          this.showErr(err);
        });
    },
    showErr(error) {
      Swal.fire({
        position: 'top',
        toast: true,
        type: 'error',
        title: error,
        showConfirmButton: false,
        timer: 1000,
      });
    },
    saveUser(res) {
      if (res.data.user) {
        const { user } = res.data;
        this.$store.commit('SET_USER', user);
      }
    },
    saveToken(res) {
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
    },
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

.alert{
  background-color: #fff;
  border: 2px solid black;
}
</style>
