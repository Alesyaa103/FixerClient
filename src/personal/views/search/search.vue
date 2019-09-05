<template>
<section class="wraper combine">
    <div class="cover">
        <form class="search" action="##">
            <span>location<select>
                    <option disabled selected style='display:none;'> </option>
                    <option value="PL">Poland</option>
                    <option value="RU">Russian</option>
                    <option value="UA">Ukraine</option>
                </select></span>
            <span>Search<input type="text" placeholder="type your querty"></span>
            <span>category<select>
              <option disabled selected style='display:none;'></option>
              <option>Front-end</option>
              <option>Back-end</option>
              <option>Java</option>
              <option>C++</option>
              </select>
            </span>
            <span>service<select>
              <option disabled selected style='display:none;'></option>
            </select></span><span>period<select>
                <option disabled style='display:none;'></option>
            </select></span>
            <div class="search__button"></div>
            <button type="submit">search</button>
        </form>
        <div class="results">
          <div class="category">
            <button class="category__button" @click="changeScreen"><p>{{ showResults ? "show results" : "show map" }}</p></button>
            <div class="category__radio">
              <input id="price" type="radio" name="category" value="by price" />
              <label for="price">by price</label>
              <input id="rating" type="radio" name="category" value="by rating" checked/>
              <label for="rating">by rating</label>
            </div>
          </div>
          <resultWorkers :workers=workers v-if="showResults"/>
          <resultMap v-if="showMap"/>
        </div>
    </div>
</section>
</template>
<script>
import resultMap from './components/resultMap.vue';
import resultWorkers from './components/resultWorkers.vue';
import firstPath from '../../../assets/personal/searchActiv.svg';
import secondPath from '../../../assets/personal/myprofile.svg';
import thirdPath from '../../../assets/personal/messages.svg';
import fourthPath from '../../../assets/personal/calendar.svg';

export default {
  name: 'search',
  components: {
    resultMap,
    resultWorkers,
  },
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
      },
      showResults: true,
      showMap: false,
      showText: '',
      workers: [],
    };
  },
  mounted() {
    this.$emit('returnItems', this.returnItems);
    this.axios.get('returnWorkers')
      .then((res) => {
        if (res.data.workers) {
          this.workers = res.data.workers;
        }
      },
      (err) => {
        console.log(err);
      });
  },
  methods: {
    changeScreen() {
      this.showResults = !this.showResults;
      this.showMap = !this.showMap;
    },
  },
};
</script>
<style lang="scss" scoped>
  @import "@/styles/_mixins.scss";

  .wraper {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
    height: 65%;
    margin: 2% auto;
    padding: 5% 5%;
    width: 80%;

    @include onPhone {
      height: 93%;
      margin: 0 auto;
      width: 100%;
    }
  }

  .combine {
    display: flex;
    height: 87%;
    padding: 0;
    width: 90%;
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
        width: 233px;
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
      }
    }
  }

  // .location {
  //   background: url("../../assets/personal/geo.svg") no-repeat transparent;
  //   background-position: 6% 50%;
  // }

  .cover {
    display: flex;
    margin: 3% 0;
  }

  .search {
    border-right: 1px solid #e7eaf5;
    box-shadow: 7px 0 18px -15px rgba(85, 85, 85, 0.25);
    display: block;
    padding: 0 3%;
    width: 250px;

    & select {
      width: 250px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;       /* remove default arrow */
      background-image: url(../../../assets/personal/Shape.svg);
      background-repeat: no-repeat;
      background-position: 225px 17px;

    & select::-ms-expand {
      display: none; /* hide the default arrow in ie10 and ie11 */
      }
    }

    &__button {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
    }

    & button {
      background-color: $success;
      border-radius: 2px;
      color: #fff;
      color: #fff;
      font-family: $exo2;
      font-family: $roboto;
      font-size: 16px;
      font-size: 14px;
      font-style: normal;
      font-style: normal;
      font-weight: bold;
      font-weight: 600;
      height: 42px;
      letter-spacing: 0.4px;
      letter-spacing: 0.4px;
      line-height: 19px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
      width: 250px;
    }
  }
  .results {
    height: 100%;
    margin: 0 5%;
  }

  .category {
    align-items: center;
    display: flex;
    height: 28px;
    justify-content: space-between;

    &__button {
      background-color: inherit;
      width: 115px;
      outline: none;
      & p {
        color: #01134e;
        font-family: $roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.28px;
        line-height: 14px;
        text-transform: uppercase;
      }
    }

    &__radio {
      align-items: center;
      display: flex;
      justify-content: space-around;
      width: 200px;

      & label {
        color: #000;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: -0.046704px;
        line-height: 28px;
      }
    }
  }

  .category__radio input[type="radio"]:checked,
  .category__radio input[type="radio"]:not(:checked) {
    position: absolute;
    visibility: hidden;

    &+label {
      cursor: pointer;
      display: inline-block;
      line-height: 20px;
      padding-left: 1.725rem;
      position: relative;

      &:before {
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 100%;
        content: '';
        height: 18px;
        left: 0;
        position: absolute;
        top: 0;
        width: 18px;
      }

      &:after {
        -webkit-transition: all 0.2s ease;
        background: #0ad69c;
        border-radius: 100%;
        content: '';
        height: 12px;
        left: 4px;
        position: absolute;
        top: 4px;
        transition: all 0.2s ease;
        width: 12px;
      }
    }
  }

  input[type="radio"]:not(:checked)+label:after {
    -webkit-transform: scale(0);
    opacity: 0;
    transform: scale(0);
  }

  input[type="radio"]:checked+label:after {
    -webkit-transform: scale(1);
    opacity: 1;
    transform: scale(1);
  }
</style>
