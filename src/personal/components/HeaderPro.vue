<template>
<header class="header">
  <div v-if="headerItems" class="linetop">
    <div v-if="showThisBurger" class="burger" @click="showMenu">
      <div class="burger__line"></div>
      <div class="burger__line"></div>
      <div class="burger__line"></div>
    </div>
    <a class="linetop__words" href="###">Home</a>
    <img class="linetop__element" src="@/assets/personal/Vector.svg" alt="" />
    <a class="linetop__words" href="###">{{headerItems.firstLink}}</a>
    <img v-if="headerItems.secondLink" class="linetop__element" src="@/assets/personal/Vector.svg" alt="" />
    <a class="linetop__words" href="###">{{headerItems.secondLink}}</a>
  </div>
  <div class="profile" @click="showLogout">
    <p v-if="user" class="linetop__words">{{user.firstname}} {{user.lastname}}</p>
    <div class="profile__button">
     <img src="@/assets/personal/Shape.svg" alt="">
      <ul v-if="logout">
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
  props: {
    user: Object,
    onShowMenu: Function,
    showThisBurger: Boolean,
  },
  data() {
    return {
      headerItems: null,
      logout: false,
    };
  },
  methods: {
    showMenu() {
      this.onShowMenu();
    },
    showLogout() {
      this.logout = !this.logout;
    },
    logOut() {
      localStorage.removeItem('token');
      this.axios.defaults.headers.common = {};
      this.$router.push('/auth/signIn');
    },
    setHeaderItems() {
      switch (this.$route.path) {
        case ('/personal/profile'): {
          this.headerItems = {
            firstLink: 'My Profile',
            secondLink: '',
          };
          break;
        }
        case ('/personal/search'): {
          this.headerItems = {
            firstLink: 'Search',
            secondLink: 'Results',
          };
          break;
        }
        case ('/personal/admin'): {
          this.headerItems = {
            firstLink: 'Manage Users',
            secondLink: '',
          };
          break;
        }
        default: {
          this.headerItems = {
            firstLink: 'Network',
            secondLink: '',
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

.header {
  background: #fff;
  border-bottom: 1px solid #dae4f2;
  display: flex;
  max-height: 80px;
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
    width: 150px;
    margin-left: 0px;
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

  @include onPhone {
    margin-right: 5px;
  }
}
ul{
  position: absolute;
  top: 13px;
  right: 0px;
  & li {
    display: block;
    & button {
      outline: none;
      background-color: #FF6359;
      line-height: 45px;
      border-radius: 45px;
      margin: 10px 20px;
      font-size: 11px;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 3px;
      font-weight: 600;
      box-shadow: 0 8px 15px rgba(0,0,0,.1);
    }
  }
}
.burger{
  display: none;
  margin: 4px;
  &__line{
      background-color: #9f9da8;
      border-radius: 2px;
      height: 3px;
      width: 25px;
      margin-bottom: 4px;
  }

  @include onPhone{
      display: block;
  }
}
</style>
