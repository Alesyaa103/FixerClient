<template>
    <header class="header">
        <figure class="header__logo"></figure>
        <div class="header__text">
            <span>{{headerItems.headerText}}</span>
            <router-link :to="headerItems.headerPath">{{headerItems.headerLink}}</router-link>
        </div>
    </header>
</template>
<script>
export default {
  name: 'HeaderAuth',
  props: {
    headerItems: Object,
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
            margin: 0 20px;
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
