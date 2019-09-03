<template>
<div class="envelop">
    <img src="@/assets/auth/email.svg" alt="" />
    <h1>You are almost ready to go!</h1>
    <h2>Please check your email to reset your password</h2>
</div>
</template>
<script>
export default {
  name: 'password2',
  data() {
    return {
      headerItems: {
        headerText: 'Back to',
        headerPath: 'signin',
        headerLink: 'SignIn',
      },
      user: {},
    };
  },
  mounted() {
    this.$emit('returnItems', this.headerItems);
  },
};

</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.envelop{
    align-items: center;
    background-image: url('../../assets/auth/bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 1000px;
    justify-content: center;
    margin: 0 auto;
    width: 1000px;
    @include onMiddle{
      background-size: cover;
    }
    & img{
        height: 170px;
        margin-bottom: 20px;
        width: 150px;
    }

    & h1{
        color: $sky;
        font-family: $exo2;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.4px;
        line-height: 60px;
        @include onMiddle{
            font-size: 35px;
        }

        @include onPhone{
            font-size: 22px;
        }
    }

    & h2{
        color: $content;
        font-family: $exo2;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.4px;
        line-height: 29px;
        @include onMiddle{
            font-size: 18px;
        }

        @include onPhone{
            font-size: 12px;
        }
    }
}
</style>
