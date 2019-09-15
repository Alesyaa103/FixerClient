<template>
  <section v-if="user" class="wraper">
    <div class="information">
      <button class="information__button"  :class="{grey:selectedAccount}"  id="personal" @click="chooseScreen"> PERSONAL INFORMATION</button>
      <button class="information__button " :class="{grey:!selectedAccount}" id="account" @click="chooseScreen">ACCOUNT INFORMATION</button>
    </div>
    <div class="content" v-if="!selectedAccount">
      <div class="content__photo">
        <img :src="user.photo" class="content__avatar">
        <label class="content__button" for="file" href="#">Change photo</label>
          <input @change="changePhoto($event)" type="file" id="file" ref=file >
      </div>
      <form>
        <fieldset>
          <span>First name
            <input type="text" @change="updateUser" v-model="user.firstname" :class="{errorInput: $v.user.firstname.$error}" @blur="$v.user.firstname.$touch()"/>
          </span>
          <span>title<select @change="updateUser" v-model="user.title">
              <option disabled selected style='display:none;'> {{user.title}}</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </span>
          <span>COUNTRY
            <select class="location" @change="updateUser" v-model="user.location.country">
              <option disabled selected style='display:none;'>{{this.user.location.country}}</option>
              <option value="Poland">Poland</option>
              <option value="Russian">Russia</option>
              <option value="Ukraine">Ukraine</option>
            </select>
          </span>
        </fieldset>
        <fieldset>
          <span>Last name
            <input type="text" v-model="user.lastname" @change="updateUser" :class="{errorInput: $v.user.lastname.$error}" @blur="$v.user.lastname.$touch()"/>
          </span>
          <span>Category
            <input type="text" v-model="user.stack" @change="updateUser" :class="{errorInput: $v.user.stack.$error}" @blur="$v.user.stack.$touch()"/>
          </span>
          <span>City
            <select v-model="user.location.city" @change="updateUser" :class="{errorInput: $v.user.location.city.$error}" @blur="$v.user.location.city.$touch()">
              <option disabled selected style='display:none;'> {{this.user.city}}</option>
              <option value="Kyiv">Kyiv</option>
              <option value="Lviv">Lviv</option>
              <option value="Varshava">Varshava</option>
              <option value="Moskow">Moskow</option>
            </select>
          </span>
        </fieldset>
      </form>
    </div>
    <div class="account" v-if="selectedAccount">
      <form>
        <fieldset>
          <span>username
            <input type="text" v-model="user.username" @change="updateUser" :class="{errorInput: $v.user.username.$error}" @blur="$v.user.username.$touch()"/>
          </span>
          <span>mobile phone
            <div class="mobile">
              <select class="mobile__country" @change="updateUser" v-model="user.mobile.code" >
                <option disabled selected style='display:none;'> {{this.user.mobile.code}}</option>
                <option value="+38">+38</option>
                <option value="+48">+48</option>
              </select>
              <input class="mobile__number" @change="updateUser" type="tel" size="10" v-model="user.mobile.number" :class="{errorInput: $v.user.mobile.number.$error}" @blur="$v.user.mobile.number.$touch()">
            </div>
          </span>
          </fieldset>
        <fieldset>
          <span>e-mail
            <input type="text" v-model="user.email" @change="updateUser" :class="{errorInput: $v.user.email.$error}" @blur="$v.user.email.$touch()"/>
          </span>
          <span>company<input type="text" v-model="user.company" @change="updateUser"/></span>
          </fieldset>
      </form><button class="account__link">
        <p>Change password</p><img src="@/assets/personal/part.svg" alt="" />
      </button>
    </div>
  </section>
</template>
<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import Swal from 'sweetalert2';

export default {
  name: 'profile',
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        title: '',
        stack: '',
        email: '',
        location: {
          country: '',
          city: '',
        },
        mobile: {
          code: '',
          number: '',
        },
        photo: '',
      },
      selectedAccount: false,
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      username: {
        required,
      },
      stack: {
        required,
      },
      location: {
        country: {
          required,
        },
        city: {
          required,
        },
      },
      mobile: {
        number: {
          minLength: minLength(10),
        },
      },
    },
  },
  methods: {
    chooseScreen() {
      this.selectedAccount = !this.selectedAccount;
    },
    updateUser() {
      this.axios.put('api/update-user', this.user);
    },
    changePhoto(event) {
      const file = event.target.files[0];
      const photo = new FormData();
      photo.set('photo', file);
      this.axios.put('api/photo', photo)
        .then((res) => {
          this.user.photo = res.data.photo;
        }, (err) => {
          this.showErr(err.err);
        });
    },
    showErr(error) {
      Swal.fire({
        position: 'top',
        toast: true,
        type: 'error',
        title: error,
        showConfirmButton: false,
        timer: 1000,
      });
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    this.axios.defaults.headers.common.Authorization = `JWT ${token}`;
    this.axios.get('api/')
      .then((res) => {
        if (res.data.err) {
          const error = res.data.err;
          this.showErr(error);
        } else {
          this.user = res.data.user;
        }
      }, (err) => {
        this.showErr(err.err);
      });
  },
};

</script>
<style lang="scss" scoped>
  @import "@/styles/_mixins.scss";
  @import "@/styles/_reset.scss";
  .wraper {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
    height: 65%;
    margin: 2% auto;
    padding: 5% 5%;
    width: 80%;

    @include onPhone {
      height: 86%;
      margin: 2% auto;
      width: 95%;
      padding: 1%;
    }
  }

  .information {
    width: 800px;

    &__button {
      background-color: #fff;
      border-bottom: 2px solid $primary;
      color: #01134e;
      font-family: $roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0.6px;
      line-height: 19px;
      text-transform: uppercase;
      width: 50%;
      outline: none;
      @include onPhone{
        font-size: 10px;
      }
    }

    @include onTablet{
      width: 100%;
    }
  }

  .content {
    display: flex;
    margin-top: 50px;
    width: 800px;

    &__avatar {
      width: 135px;
      height: 135px;
      background-repeat: no-repeat;
      border-radius: 50%;
      object-fit: cover;
      @include onPhone {
        height:90px;
        width: 90px;
      }
    }

    &__button {
      display: flex;
      background-color: $fon;
      justify-content: center;
      width: 100%;
      font-family: $roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.28px;
      color: #35373B;
      @include onPhone {
        font-size: 9px;
      }
    }

    &__photo {
      display: block;
      width: 135px;
      height: 160px;
      & input {
        display: none;
      }
      @include onTablet {
        margin: 0 auto;
      }
      @include onPhone {
        height:110px;
        width: 90px;
      }
    }

    @include onTablet{
      display: block;
      width: 50%;
      margin: 50px auto;
    }
    @include onPhone {
      margin: 10px auto;
      width: 100%;
    }
  }

  .account {
    justify-content: space-around;
    margin-top: 50px;
    width: 800px;

    &__link {
      display: flex;
      height: 14px;
      justify-content: space-between;
      margin: 40px auto;
      width: 155px;
      background-color: inherit;
      outline: none;
      align-items: center;

      & p {
        color: #01134e;
        font-family: $roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.28px;
        line-height: 14px;
        text-transform: uppercase;
      }
    }
    @include onTablet{
      width: 50%;
      margin: 50px auto;
    }
      @include onPhone{
      width: 100%;
    }
  }

  form {
    display: flex;

    & span {
      color: #546087;
      display: block;
      font-family: $roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      height: 61px;
      letter-spacing: 1px;
      line-height: 14px;
      margin-bottom: 30px;
      text-transform: uppercase;
      @include onPhone{
        width: 237px;
        margin: 15px auto;
      }

      & input,
      select {
        background: #fcfcfc;
        border: 2px solid #f2f2f2;
        border-radius: 2px;
        color: #35373b;
        font-family: $roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        height: 36px;
        letter-spacing: 0.28px;
        line-height: 16px;
        margin-top: 4px;
        padding-left: 13px;
        width: 259px;
        @include onPhone{
          width: 220px;
        }
      }
      .errorInput{
        border-color: #FF6359;
      }
      & select {
        height: 42px;
        width: 276px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url(../../assets/personal/Shape.svg);
        background-repeat: no-repeat;
        background-position: 250px 17px;
        @include onPhone{
          width: 237px;
        }
      }

      & select::-ms-expand {
        display: none;
      }
    }
    @include onTablet {
      display: block;
    }
    @include onPhone {
      width: 100%;
    }
  }

  fieldset {
    margin-left: 33px;
    width: 280px;
    @include onPhone {
      margin: 0px auto;
    }
  }

  .location {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url(../../assets/personal/Shape.svg);
    background-repeat: no-repeat;
    background-position: 250px 17px;

    &::before {
      content: '';
      background-position: 6% 50%;
      padding-left: 25px;
      background-image: url(../../assets/personal/geo.svg);
      display: block;
      width: 10px;
      height: 10px;
    }
    & select::-ms-expand {
      display: none;
    }
  }

  .cover {
    display: flex;
    margin: 3% 0;
  }

  .mobile {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;

    &__country {
      align-items: center;
      border: 2px solid #f2f2f2;
      display: flex;
      justify-content: space-around;
      width: 76px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;       /* remove default arrow */
      background-image: url(../../assets/personal/Shape.svg);
      background-repeat: no-repeat;
      background-position: 55px 17px;

      & select::-ms-expand {
        display: none; /* hide the default arrow in ie10 and ie11 */
      }
    }

    &__number {
      width: 179px;
      @include onPhone{
        width: 140px;
      }
    }
  }

  .hidden {
    display: none;
  }

  .grey {
    border-bottom: 2px solid #ccd0dc;
    color: #ccd0dc;
  }
</style>
