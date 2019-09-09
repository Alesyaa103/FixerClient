<template>
    <div id="app">
        <HeaderAuth/>
        <section class="content">
            <router-view :onSignIn="onSignIn" :onSignUp1="onSignUp1" :onSignUp2="onSignUp2" :onReset1="onReset1" :onReset2="onReset2" :user="user">
            </router-view>
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
      this.axios.post('api/check-email', this.user)
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
      this.axios.post('api/reset-pass', this.user)
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
      this.axios.post('api/sign-up', this.user)
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
      this.axios.post('api/sign-in', user)
        .then((res) => {
          if (res.data.err) {
            const error = res.data.err;
            this.showErr(error);
          } else {
            this.saveToken(res);
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
    saveToken(res) {
      if (res.data.token) {
        const { token } = res.data;
        localStorage.setItem('token', token);
        this.axios.defaults.headers.common.Authorization = `JWT ${token}`;
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
