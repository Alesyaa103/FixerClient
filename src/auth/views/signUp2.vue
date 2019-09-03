<template>
<div class="container">
    <form class="send">
        <legend class="send__name">Complete your account</legend>
        <input type="password" id="password" placeholder="Create a password" required v-model="password" :class="{errorInput: $v.password.$error}" @change="$v.password.$touch()">
        <ConfirmPassword :password="password"/>
        <input placeholder="Confirm password" type="password" required v-model="passwordConfirm" :class="{errorInput: $v.passwordConfirm.$error}" @change="$v.passwordConfirm.$touch()">
        <div class="send__check">
            <input type="checkbox" id="check" v-model="checked1">
            <label for="check">I agree to the myFixer.com</label>
            <a href="##">Terms of Service</a>
        </div>
        <div class="send__check">
            <input type="checkbox" id="check1" v-model="checked2">
            <label for="check1">I agree to the myFixer.com</label>
            <a href="##">Privacy Policy</a>
        </div>
        <img src="@/assets/auth/recaptcha.svg" alt="">
        <div class="send__button">
            <button type="submit" @click.prevent="signUp2"> Done!</button>
        </div>
    </form>
</div>
</template>
<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators';
import ConfirmPassword from '../components/ConfirmPassword.vue';

export default {
  name: 'signUp2',
  props: ['onSignUp2'],
  components: {
    ConfirmPassword,
  },
  data() {
    return {
      password: '',
      headerItems: {
        headerText: 'Already have an account?',
        headerPath: 'signin',
        headerLink: 'Login',
      },
      checked1: false,
      checked2: false,
      passwordConfirm: '',
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    passwordConfirm: {
      required,
      sameAs: sameAs('password'),
    },
  },
  methods: {
    signUp2() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      if (this.checked1 && this.checked2) {
        this.onSignUp2(
          this.password,
        );
      }
    },
  },
  mounted() {
    this.$emit('returnItems', this.headerItems);
  },
};

</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";

.container {
  align-self: auto;
  background-color: $fon;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0 5px 40px rgba(0, 45, 113, 0.06);
  margin: 130px auto;
  position: relative;
  width: 632px;

  @include onMiddle {
    max-width: 490px;
    width: 90%;
  }
}

.send {
  margin: 70px auto;
  position: relative;
  width: 400px;
  @include onPhone {
      margin: 45px auto;
      width: 90%;
  }
  & input {
    background-color: $input;
    border: 2px solid #f2f2f2;
    border-radius: 2px;
    display: block;
    height: 40px;
    margin-bottom: 24px;
    outline: none;
    padding-left: 13px;
    width: 383px;
    &:focus {
      box-shadow: -2px 0 0 0 $sky;
    }
    &::placeholder {
      color: rgba(135, 144, 167, 0.57);
      font-family: $roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: normal;
      letter-spacing: 0.28px;
      line-height: 16px;
    }
    @include onMiddle {
      width: 94%;
    }
  }
  .errorInput{
    border-color: #FF6359;
  }
  & button {
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
  &__same {
    display: flex;
    justify-content: space-between;
    width: 400px;
    & input {
      width: 173px;
      @include onPhone {
        margin-right: 2%;
        width: 45%;
      }
    }
    @include onPhone {
      width: 100%;
    }
  }
  &__name {
    color: $content;;
    font-family: $exo2;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.4px;
    line-height: 34px;
    padding-bottom: 27px;
    @include onPhone {
      font-size: 20px;
    }
  }
  &__button{
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  }
  &__check {
    display: inline-block;
    height: 40px;
    ;
    width: 400px;
    & a,
    label {
      color: #222428;
      font-family: $roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      letter-spacing: 0.28px;
      line-height: 16px;
      @include onPhone {
        font-size: 12px;
      }
    }
    @include onPhone {
      width: 100%;
    }
    & a {
      color: $primary;
      padding-left: 10px;
    }
  }
}
input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]+label:before {
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  color: transparent;
  content: "\2714";
  display: inline-block;
  font-size: 20px;
  height: 20px;
  line-height: 22px;
  margin: -5px 5px 0 0;
  text-align: center;
  transition: color ease .3s;
  vertical-align: middle;
  width: 20px;
}

input[type="checkbox"]:checked+label:before {
  color: $success;
}
</style>
