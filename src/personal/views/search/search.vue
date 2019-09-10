<template>
<section class="wraper">
    <div class="cover"  v-if="!isWorker">
        <form class="search" action="##">
            <span>location<select v-model="selected.country">
                    <option disabled selected style='display:none;'> </option>
                    <option>All</option>
                    <option>Poland</option>
                    <option>Ukraine</option>
                    <option>Russian</option>
                </select></span>
            <span>Search
              <input type="search" placeholder="type your querty" v-model="selected.fullname">
            </span>
            <span >category<select v-model="selected.category">
              <option disabled selected style='display:none;'></option>
              <option>All</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Java</option>
              <option>C++</option>
              <option>Pyton</option>
              </select>
            </span>
            <span>service<select>
              <option disabled selected style='display:none;'></option>
            </select></span><span>period<select>
                <option disabled style='display:none;'></option>
            </select></span>
            <div class="search__button">
              <button type="submit">search</button>
            </div>
        </form>
        <div class="results">
          <div class="category">
            <button class="category__button" @click="changeScreen">
              <p>{{ showResults ? "show map" : "show results" }}</p>
            </button>
            <div class="category__radio">
              <input id="price" type="radio" name="category" value="by price" v-model="currentSort" @change="showWorker"/>
              <label for="price">by price</label>
              <input id="rating" type="radio" name="category" value="by rating" checked v-model="currentSort" @change="showWorker"/>
              <label for="rating">by rating</label>
            </div>
          </div>
          <div class="workers" v-if="showResults">
            <Worker :worker="worker" v-for='worker in filteredWorkers' :key="worker._id" :onShowWorkerProfile="onShowWorkerProfile"/>
          </div>
          <resultMap v-if="showMap"/>
        </div>
    </div>
    <WorkerProfile v-if="isWorker" :currentWorker="currentWorker" :onBackToSearch="onBackToSearch"/>
</section>
</template>
<script>
import Swal from 'sweetalert2';
import resultMap from './components/resultMap.vue';
import Worker from './components/Worker.vue';
import WorkerProfile from './components/WorkerProfile.vue';

export default {
  name: 'search',
  components: {
    resultMap,
    Worker,
    WorkerProfile,
  },
  data() {
    return {
      showResults: true,
      showMap: false,
      showText: '',
      workers: [],
      selected: {
        country: '',
        fullname: '',
        category: '',
      },
      currentSort: 'by rating',
      isWorker: false,
      currentWorker: {},
    };
  },
  computed: {
    filteredWorkers() {
      let filterWorkers = this.workers;
      if (this.selected.fullname !== '') {
        filterWorkers = filterWorkers.filter(el => (el.firstname.toLowerCase().includes(this.selected.fullname.toLowerCase()) || (el.lastname.toLowerCase().includes(this.selected.fullname.toLowerCase()))));
      }
      if ((this.selected.category !== '') && (this.selected.category !== 'All')) {
        filterWorkers = filterWorkers.filter(el => el.email.includes(this.selected.category));
      }
      if ((this.selected.country !== '') && (this.selected.country !== 'All')) {
        filterWorkers = filterWorkers.filter(el => el.location.country === this.selected.country);
      }
      return filterWorkers;
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    this.axios.defaults.headers.common.Authorization = `JWT ${token}`;
    this.showWorker();
  },
  methods: {
    changeScreen() {
      this.showResults = !this.showResults;
      this.showMap = !this.showMap;
    },
    showWorker() {
      this.axios.get(`api/workers?param=${this.currentSort}`)
        .then((res) => {
          if (res.data.workers) {
            this.workers = res.data.workers;
          }
        }, (err) => {
          this.showErr(err.err);
        });
    },
    onShowWorkerProfile(data) {
      this.currentWorker = data;
      this.isWorker = !this.isWorker;
    },
    onBackToSearch() {
      this.isWorker = !this.isWorker;
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
};
</script>
<style lang="scss" scoped>
  @import "@/styles/_mixins.scss";

  .wraper {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
    margin: 2% auto;
    width: 90%;
    display: flex;
    height: 87%;
    @include onPhone {
      height: 93%;
      margin: 10px auto;
      width: 100%;
    }
  }

  .cover {
    display: flex;
    margin: 3% 0;
    @include onTablet{
      margin: 3% 2px;
      width:100%;
    }
    @include onPhone {
      display: block;
    }
  }

  .search {
    border-right: 1px solid #e7eaf5;
    box-shadow: 7px 0 18px -15px rgba(85, 85, 85, 0.25);
    display: block;
    padding: 0 3%;
    width: 250px;

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
    }
    & input, select {
      width: 250px;
      background: #fcfcfc;
      border: 2px solid #f2f2f2;
      border-radius: 2px;
      color: #35373b;
      font-family: $roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: normal;
      height: 40px;
      letter-spacing: 0.28px;
      line-height: 16px;
      margin-top: 4px;
      padding-left: 13px;
      @include onTablet{
        width: 150px;
      }
      @include onPhone{
        width: 230px;
      }
    & select::-ms-expand {
      display: none; /* hide the default arrow in ie10 and ie11 */
      }
    }
    & select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;       /* remove default arrow */
      background-image: url(../../../assets/personal/Shape.svg);
      background-repeat: no-repeat;
      background-position: 225px 17px;
    }
    &__button {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      background-color: $success;
      border-radius: 2px;
      width: 250px;
      & button {
        color: #fff;
        font-family: $roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: bold;
        height: 42px;
        letter-spacing: 0.4px;
        line-height: 16px;
        text-align: center;
        text-transform: uppercase;
        background-color: inherit;
        outline: none;
      }
      @include onTablet{
        width: 150px;
      }
      @include onPhone{
        width: 235px;
      }
    }
    @include onTablet{
      width: 150px;
    }
    @include onPhone{
      width: 235px;
      margin: 0 auto;
    }
  }
  .results {
    height: 100%;
    margin: 0 5%;
    @include onTablet{
      margin: 5px auto;
    }
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
        @include onPhone{
          font-size: 12px;
        }
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
        @include onPhone{
          font-size: 12px;
        }
      }
      @include onTablet{
        width: 150px;
        jusify-content: space-around;
      }
    }
    @include onPhone{
      width: 260px;
      margin: 0 auto;
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
  .workers {
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    justify-content: space-between;
    min-width: 750px;
    overflow: auto;
    @include onTablet{
      min-width: 250px;
      display: block;
      margin: 10px auto;
    }
  }
  ::-webkit-scrollbar-button {
    background-image: url('');
    background-repeat: no-repeat;
    height: 0;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ecedee
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0;
    background-color: #dadada;
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #dadada;
  }
  ::-webkit-resizer {
    background-image: url('');
    background-repeat: no-repeat;
    height: 0;
    width: 4px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  input[type="search"]::-webkit-search-cancel-button {
    margin-right: 10px;
    background: url("../../../assets/personal/cross.svg");
  }
</style>
