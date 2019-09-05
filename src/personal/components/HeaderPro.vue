<template>
<header class="header">
  <div class="linetop">
        <!-- <div class="burger">
            <div class="burger__line"></div>
            <div class="burger__line"></div>
            <div class="burger__line"></div>
        </div> -->
    <a class="linetop__words" href="###">Home</a>
    <img class="linetop__element" src="@/assets/personal/Vector.svg" alt="" />
    <a class="linetop__words" href="###">Network</a>
    <a class="linetop__words" href="###">Results</a>
  </div>
  <div class="profile">
    <p class="linetop__words">{{user.firstname}} {{user.lastname}}</p>
    <div class="profile__button">
     <img src="@/assets/personal/Shape.svg" alt="">
      <ul>
        <li>
          <button @click="logOut"><p class="linetop__words">LogOut</p></button>
        </li>
      </ul>
    </div>
  </div>
</header>
</template>
<script>
export default {
  name: 'HeaderPro',
  data() {
    return {
      user: {},
    }
  },
  props: {
    returnItems: Object,
  },
  methods: {
    logOut() {
      localStorage.removeItem('token');
      this.user = {};
      this.$store.commit('SET_USER', this.user);
      this.$router.push('/auth/signIn');
    },
  },
  mounted() {
    this.user = this.$store.state.user;
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.header {
  background: #fff;
  border-bottom: 1px solid #dae4f2;
  display: flex;
  max-height: 60px;
  height: 7%;
  justify-content: space-between;
}

.linetop {
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: space-around;
  margin-left: 40px;
  width: 190px;

  &__element {
    @include onPhone {
      height: 8px;
    }
  }

  &__words {
    color: #252f48;
    font-family: $roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.685714px;
    line-height: 15px;
    text-decoration: none;

    @include onPhone {
      font-size: 10px;
    }
  }

  @include onTablet {
    width: 120px;
  }

  @include onPhone {
    margin-left: 5px;
    width: 150px;
  }
}

.profile {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-right: 57px;
  width: 150px;

  &__link {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    min-width: 130px;
  }

  &__button {
    position: relative;
  }

  &__button:hover {
    & ul {
        display: block;
        cursor: pointer;
    }
  }
  @include onPhone {
    margin-right: 5px;
  }
}
ul{
  display: none;
  position: absolute;
  top: 15px;
  right: 0px;
  background-color: white;
  border: 1px solid $content;
  & li {
    display: block;
    & button {
      outline: none;
      background-color: #fff;
    }
  }
}
</style>
