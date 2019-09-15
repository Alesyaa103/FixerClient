<template>
<div class="container">
                <form class="send">
                    <legend class="send__name">Sign In</legend>
                    <input type="email" placeholder="E-mail" required name="email"  v-model="user.email" :class="{errorInput: $v.user.email.$error}" @change="$v.user.email.$touch()">
                    <input type="password" placeholder="Password" required name="password" v-model="user.password" :class="{errorInput: $v.user.password.$error}" @change="$v.user.password.$touch()">
                    <router-link to="/auth/password1" class="send__link">Forgot password?</router-link>
                    <div class="send__button">
                        <button type="submit" @click.prevent="signIn"> Sign In</button>
                    </div>
                </form>
            </div>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'signIn',
  props: ['onSignIn'],
  data() {
    return {
      user: {
        password: '',
        email: '',
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    signIn() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.onSignIn(
        this.user,
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
.container{
    align-self: auto;
    background-color: $fon;
    border: 1px solid #fff;
    border-radius: 10px;
    box-shadow: 0 5px 40px rgba(0, 45, 113, 0.06);
    margin: 130px auto;
    position: relative;
    width: 632px;
    @include onMiddle{
        max-width: 490px;
        width: 90%;
    }
}

.send{
    margin: 70px auto;
    position: relative;
    width: 400px;
    @include onPhone{
        margin: 45px auto;
        width: 90%;
    }

    & input{
        background-color: $input;
        border: 2px solid #f2f2f2;
        border-radius: 2px;
        display: block;
        height: 40px;
        margin-bottom: 24px;
        outline: none;
        padding-left: 13px;
        width: 383px;
        &:focus{
            box-shadow: -2px 0 0 0 $sky;
        }
        &::placeholder{
            color: rgba(135, 144, 167, 0.57);
            font-family: $roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: normal;
            letter-spacing: 0.28px;
            line-height: 16px;
        }

        @include onMiddle{
            width: 94%;
        }
    }
    .errorInput{
      border-color: #FF6359;
    }
    &__link{
        bottom: 55px;
        color: $content;
        font-family: $roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: normal;
        letter-spacing: 0.28px;
        line-height: 14px;
        position: absolute;
        right: 0;
    }
    & button{
        background-color: $success;
        border-radius: 2px;
        color: #fff;
        font-family: $exo2;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        height: 42px;
        letter-spacing: 0.4px;
        line-height: 19px;
        text-align: center;
        width: 188px;
    }

    &__button{
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
    }

    &__name{
        color: $primary;
        font-family: $exo2;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.4px;
        line-height: 34px;
        padding-bottom: 27px;

        @include onPhone{
            width: 100%;
        }

        & a{
            color: $primary;
            padding-left: 10px;

        }
    }
}

</style>
