<template>
  <header class="header">
    <figure class="header__logo"></figure>
    <div v-if="headerItems" class="header__text">
      <span>{{headerItems.headerText}}</span>
      <router-link :to="headerItems.headerPath">{{headerItems.headerLink}}</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderAuth',
  data() {
    return {
      headerItems: null,
    };
  },
  methods: {
    setHeaderItems() {
      switch (this.$route.path) {
        case ('/auth/signin'):
        case ('/auth/password3'): {
          this.headerItems = {
            headerText: 'Do not have an account?',
            headerPath: 'signup1',
            headerLink: 'SignUp',
          };
          break;
        }
        case ('/auth/password2'):
        case ('/auth/password1'): {
          this.headerItems = {
            headerText: 'Back to',
            headerPath: 'signin',
            headerLink: 'SignIn',
          };
          break;
        }
        default: {
          this.headerItems = {
            headerText: 'Already have an account?',
            headerPath: 'signin',
            headerLink: 'Log In',
          };
          break;
        }
      }
    },
  },
  watch: {
    $route() {
      this.setHeaderItems();
    },
  },
  mounted() {
    this.setHeaderItems();
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
.header{
    align-items: center;
    display: flex;
    height: 8%;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    &__logo{
        background-image: url('../../assets/auth/logo.svg');
        background-size: cover;
        height: 35.32px;
        margin-left: 141px;
        margin-top: 20px;
        width: 138px;
        @include onTablet{
            margin-left: 50px;
            width: 138px;
        }

        @include onPhone{
            margin:  3px 20px;
            width: 138px;
        }
    }

    &__text{
        margin-right: 137px;
        margin-top: 28px;
        & span{
            color: $content;
            font-family: $roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            letter-spacing: 0.28px;
            line-height: 19px;
            @include onPhone{
                display: none;
            }
        }

        & a{
            color: $sky;
            font-family: $roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            letter-spacing: 0.28px;
            line-height: 19px;
            padding-left: 5px;
        }

        @include onTablet{
            margin-right: 50px;
        }

        @include onPhone{
            margin: 0 20px;
        }
    }
}
</style>
