<template>
  <section class="wraper">
    <div class="information">
      <button class="information__button"  :class="{grey:selectedAccount}"  id="personal" @click="choosePersonal"> PERSONAL INFORMATION</button>
      <button class="information__button " :class="{grey:selectedPersonal}" id="account" @click="chooseAccount">ACCOUNT INFORMATION</button>
    </div>
    <div class="content" v-if="selectedPersonal">
      <div class="content__photo">
        <img class="content__image" :src="user.photo" alt="" />
        <button class="content__button">
          <img src="@/assets/personal/pencil.svg" alt="" />
          <p>Change photo</p>
        </button>
      </div>
      <form>
        <fieldset>
          <span>First name<input type="text" @change="updateUser" v-model="user.firstname"/></span>
          <span>title<select @change="updateUser" v-model="user.title">
              <option disabled selected style='display:none;'> {{user.title}}</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </span>
          <span>COUNTRY<select class="location" @change="updateUser" v-model="user.location.country">
              <option disabled selected style='display:none;'> {{user.location.country}} </option>
              <option value="POLAND">Poland</option>
              <option value="RUSSIAN">Russia</option>
              <option value="UKRAINE">Ukraine</option>
            </select>
          </span>
        </fieldset>
        <fieldset>
          <span>Last name<input type="text" v-model="user.lastname" @change="updateUser"/></span>
          <span>mobile phone
            <div class="mobile">
              <select class="mobile__country" @change="updateUser" v-model="user.mobile.code">
                <option disabled selected style='display:none;'> {{user.mobile.code}}</option>
                <option value="+38">+38</option>
                <option value="+48">+48</option>
              </select>
              <input class="mobile__number" @change="updateUser" type="tel" size="10" v-model="user.mobile.number">
            </div>
          </span>
          <span>company<input type="text" v-model="user.company" @change="updateUser"/></span>
        </fieldset>
      </form>
    </div>
    <div class="account" v-if="selectedAccount">
      <form>
        <fieldset><span>username<input type="text" v-model="user.username" @change="updateUser"/></span></fieldset>
        <fieldset><span>e-mail<input type="text" v-model="user.email" @change="updateUser"/></span></fieldset>
      </form><button class="account__link">
        <p>Change password</p><img src="@/assets/personal/part.svg" alt="" />
      </button>
    </div>
  </section>
</template>
<script>
import firstPath from '@/assets/personal/search.svg';
import secondPath from '@/assets/personal/profileActiv.svg';
import thirdPath from '@/assets/personal/messages.svg';
import fourthPath from '@/assets/personal/calendar.svg';

export default {
  name: 'profile',
  data() {
    return {
      returnItems: {
        firstLink: 'search',
        firstPath,
        secondLink: 'profile',
        secondPath,
        thirdLink: 'chat',
        thirdPath,
        fourthLink: '',
        fourthPath,
        fifthLink: '',
        fifthPath: '',
        // topFirstPath: 'My profile',
        // topSecondPath: '',
      },
      user: {},
      selectedAccount: false,
      selectedPersonal: true,
    };
  },
  methods: {
    choosePersonal() {
      this.selectedPersonal = true;
      this.selectedAccount = false;
    },
    chooseAccount() {
      this.selectedPersonal = false;
      this.selectedAccount = true;
    },
    updateUser() {
      this.$store.dispatch('SAVE_USER', this.user);
    },

  },
  mounted() {
    this.user = this.$store.state.user;
    this.$emit('returnItems', this.returnItems);
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
      width: 100%;
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
      width: 90%;
    }
  }

  .content {
    display: flex;
    margin-top: 50px;
    width: 800px;

    &__button {
      display: flex;
      background-color: $fon;
      justify-content: center;
      width: 100%;

      & p {
      color: #35373b;
      font-family: $roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: normal;
      letter-spacing: 0.28px;
      line-height: 14px;
      text-align: center;
      @include onPhone {
        font-size: 9px;
      }
      }
    }

    &__photo {
      display: block;
      width: 135px;
      height: 160px;
      @include onTablet {
        margin: 0 auto;
      }
      @include onPhone {
        height:110px;
        width: 90px;
      }
    }

    &__image {
      border-radius: 50%;
      width: 90px;
      height: 90px;
    }

    @include onTablet{
      display: block;
      width: 50%;
      margin: 50px auto;
    }
    @include onPhone {
      margin: 10px auto;
      width: 90%;
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
      }

      & select {
        height: 42px;
        width: 276px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;       /* remove default arrow */
        background-image: url(../../assets/personal/Shape.svg);
        background-repeat: no-repeat;
        background-position: 250px 17px;
      }

      & select::-ms-expand {
        display: none; /* hide the default arrow in ie10 and ie11 */
      }
    }
    @include onTablet {
      display: block;
    }
    @include onPhone {
      width: 80%;
    }
  }

  fieldset {
    margin-left: 33px;
    width: 280px;
  }

  .location {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;       /* remove default arrow */
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
      display: none; /* hide the default arrow in ie10 and ie11 */
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
