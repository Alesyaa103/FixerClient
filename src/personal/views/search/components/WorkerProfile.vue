<template>
  <section class="workerProfile">
    <button type="button" class="back" @click.prevent="backToSearch"></button>
    <div class="information">
      <button class="information__button"  :class="{grey:selectedAccount}"  id="personal" @click="chooseScreen"> PERSONAL INFORMATION</button>
      <button class="information__button " :class="{grey:!selectedAccount}" id="account" @click="chooseScreen">ACCOUNT INFORMATION</button>
    </div>
    <div class="content" v-if="!selectedAccount">
      <div class="content__photo">
        <img :src="currentWorker.photo" class="content__avatar">
      </div>
      <form>
        <fieldset>
          <span>First name<input type="text" v-model="currentWorker.firstname" readonly/></span>
          <span>title<input type="text" v-model="currentWorker.title"></span>
          <span>COUNTRY
            <input class="location" v-model="currentWorker.location.country" readonly>
          </span>
        </fieldset>
        <fieldset>
          <span>Last name<input type="text" v-model="currentWorker.lastname" readonly/></span>
          <span>Stack<input type="text" v-model="currentWorker.stack" readonly/></span>
          <span>City<input type="text" v-model="currentWorker.location.city" readonly/></span>
        </fieldset>
      </form>
    </div>
    <div class="account" v-if="selectedAccount">
      <form>
        <fieldset>
          <span>username<input type="text" v-model="currentWorker.username" readonly/></span>
          <span>mobile phone
            <div class="mobile">
              <input class="mobile__country" v-model="currentWorker.mobile.code" readonly>
              <input class="mobile__number" type="tel" size="10" v-model="currentWorker.mobile.number" readonly>
            </div>
          </span>
          </fieldset>
        <fieldset>
          <span>e-mail<input type="text" v-model="currentWorker.email" readonly/></span>
          <span>company<input type="text" v-model="currentWorker.company" readonly/></span>
        </fieldset>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'profile',
  props: {
    currentWorker: Object,
    onBackToSearch: Function,
  },
  data() {
    return {
      selectedAccount: false,
    };
  },
  methods: {
    chooseScreen() {
      this.selectedAccount = !this.selectedAccount;
    },
    backToSearch() {
      this.onBackToSearch();
    },
  },
};

</script>
<style lang="scss" scoped>
  @import "@/styles/_mixins.scss";
  @import "@/styles/_reset.scss";
  .workerProfile {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
    height: 65%;
    margin: 2% auto;
    padding: 5% 5%;
    width: 80%;
    position: relative;

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
      @include onTablet {
        margin: 0 auto;
      }
      @include onPhone {
        height:90px;
        width: 90px;
        justify-self: center;
      }
    }
    &__photo{
      display: flex;
    }
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
        appearance: none;       /* remove default arrow */
        background-image: url(../../../../assets/personal/Shape.svg);
        background-repeat: no-repeat;
        background-position: 250px 17px;
        @include onPhone{
          width: 237px;
        }
      }

      & select::-ms-expand {
        display: none; /* hide the default arrow in ie10 and ie11 */
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
    appearance: none;       /* remove default arrow */
    background-image: url(../../../../assets/personal/geo.svg);
    background-repeat: no-repeat;
    padding-left: 22px;
    background-position: 8px 10px;

    &::before {
      content: '';
      background-position: 6% 50%;
      padding-left: 25px;
      background-image: url(../../../../assets/personal/geo.svg);
      display: block;
      width: 10px;
      height: 10px;
    }
    & select::-ms-expand {
      display: none; /* hide the default arrow in ie10 and ie11 */
    }
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
      background-image: url(../../../../assets/personal/Shape.svg);
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
  .back{
    width: 25px;
    height: 25px;
    position: absolute;
    top: 20px;
    left: 20px;
    background-image: url("../../../../assets/personal/backArrow.svg");
    background-repeat: no-repeat;
    outline: none;
    background-color: inherit;
    @include onPhone{
      top: 50px;
    }
  }
</style>
