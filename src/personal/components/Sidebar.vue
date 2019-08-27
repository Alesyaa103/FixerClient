<template>
<aside class="sidebar">
    <ul>
        <li class="logo"></li>
        <li class="sidebar__item" >
            <router-link to="">
                <img src="../assets/icon3.svg" alt="" />
                <img class="img" src="../assets/date.svg" alt="" />
            </router-link>
        </li>
        <li class="sidebar__item">
            <router-link to="/profile">
                <img src="../assets/myprofile.svg" alt="" />
            </router-link>
        </li>
        <li class="sidebar__item">
            <router-link to="">
                <img src="../assets/handyman-tools.svg" alt="" />
            </router-link>
        </li>
        <li class="sidebar__item">
            <router-link to="">
                <img src="../assets/team.svg" alt="" />
            </router-link>
        </li>
        <li class="sidebar__item active">
            <router-link to=""><img src="../assets/messages.svg" alt="" />
            </router-link>
        </li>
    </ul>
</aside>
</template>
<script>
export default {
  name: 'Sidebar',
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
        @include onPhone{
            padding: 35px 10px;
        }
    }

    @include onPhone {
        display: none;
    }
}
.img{
    left: 19px;
    position: absolute;
    top: 27px;
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

.active{
    border-left: 4px solid #0ad69c;
}

.logo {
    background-image: url("../assets/logo.svg");
    height: 35px;
    margin: 18px 22px 65px 23px;
    width: 35px;

    @include onPhone {
        height: 35px;
        margin: 5px auto;
    }
}
</style>
