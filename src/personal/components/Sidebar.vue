<template>
<aside class="sidebar">
  <ul>
    <li class="logo"></li>
    <li class="sidebar__item" >
      <router-link :to="returnItems.firstLink">
        <img :src="returnItems.firstPath" alt="" />
      </router-link>
    </li>
    <li class="sidebar__item">
      <router-link :to="returnItems.secondLink">
        <img :src="returnItems.secondPath" alt="" />
      </router-link>
    </li>
    <li class="sidebar__item">
      <router-link :to="returnItems.thirdLink">
        <img :src="returnItems.thirdPath" alt="" />
      </router-link>
    </li>
    <li class="sidebar__item">
      <router-link :to="returnItems.fourthLink">
        <img :src="returnItems.fourthPath" alt="" />
      </router-link>
    </li>
    <li class="sidebar__item active">
      <router-link :to="returnItems.fifthLink">
        <img :src="returnItems.fifthPath" alt="" />
      </router-link>
    </li>
  </ul>
</aside>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    returnItems: Object,
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
.sidebar {
    background-color: #01134e;
    width: 80px;

    &__item {
        height: 20px;
        padding: 35px 30px;
        position: relative;
        width: 20px;
        & img{
            width: 20px;
            height: 20px;
        }
        & a{
            width: 20px;
            height: 20px;
        }
        @include onPhone{
            padding: 35px 10px;
        }
    }

    &__item:hover {
      border-left: 4px solid #0ad69c;
    }

    @include onPhone {
        display: none;
    }
}

.burger{
    display: none;
    &__line{
        background-color: #000;
        border-radius: 2px;
        height: 3px;
        margin-bottom: 4px;
        width: 25px;
    }

    @include onPhone {
        display: block;
    }
}

.show{
    display: block;
    height: 100vh;
    position: absolute;
    width: 46px;
    z-index: 30;
}

.logo {
    background-image: url("../../assets/personal/logo.svg");
    height: 35px;
    margin: 18px 22px 65px 23px;
    width: 35px;

    @include onPhone {
        height: 35px;
        margin: 5px auto;
    }
}
</style>
