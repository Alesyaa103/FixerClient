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
    </div>
    <div class="profile">
        <a class="profile__link" href="###">
            <img src="@/assets/personal/profile.svg" alt="" />
            <p class="linetop__words">Sarah Freeman</p>
        </a>
        <img src="@/assets/personal/Shape.svg" alt="" />
    </div>
</header>
</template>
<script>
export default {
  name: 'HeaderPro',
  props: {
    returnItems: {},
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
.header {
    background: #fff;
    border-bottom: 1px solid #dae4f2;
    display: flex;
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
    width: 13%;

    &__link {
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        min-width: 130px;
    }
}
</style>
