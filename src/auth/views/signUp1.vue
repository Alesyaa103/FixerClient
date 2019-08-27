<template>
<div class="container">
    <form class="send">
        <legend class="send__name">Sign Up</legend>
        <div class="send__same">
            <input type="text" placeholder="Firstname" required v-model="user.firstname" :class="{errorInput: $v.user.firstname.$error}" @change="$v.user.firstname.$touch()">
            <input type="text" placeholder="Lastname" required v-model="user.lastname" :class="{errorInput: $v.user.lastname.$error}" @change="$v.user.lastname.$touch()">
        </div>
        <input type="text" placeholder="Username" required v-model="user.username" :class="{errorInput: $v.user.username.$error}" @change="$v.user.username.$touch()">
        <input type="email" placeholder="E-mail" required v-model="user.email" :class="{errorInput: $v.user.email.$error}" @change="$v.user.email.$touch()">
        <div class="send__button">
            <button type="submit" @click.prevent="signUp1"> Get started</button>
        </div>
    </form>
</div>
</template>
<script>
import axios from 'axios';
import { required, email} from 'vuelidate/lib/validators';

export default {
  name: 'signUp1',
  props: ['onSignUp1'],
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
      },
      headerItems: {
        headerText: 'Already have an account?',
        headerPath: 'signin',
        headerLink: 'Login',
      },
      submited: false,
    };
  },
  validations: {
    user: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      username: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    signUp1() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      };
      this.onSignUp1(
        this.user,
      );
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
        &__button{
            display: flex;
            justify-content: flex-end;
            margin-top: 30px;
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
            color: $primary;
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
    }
</style>
