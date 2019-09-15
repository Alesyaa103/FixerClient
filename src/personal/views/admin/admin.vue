<template>
<section class="wraper contain">
  <input type="text" placeholder="Type here to search" v-model="search"/>
  <ul class="admin">
    <li class="admin__green">
      <span>firstname</span>
      <span>lastname</span>
      <span>country</span>
      <span>status</span>
      <span>level</span>
      <span>e-mail</span>
    </li>
  <Worker :worker="worker" v-for='worker in filteredWorkers' :key="worker._id"/>
  </ul>
</section>
</template>
<script>
import Swal from 'sweetalert2';
import Worker from './components/Worker.vue';

export default {
  name: 'admin',
  components: {
    Worker,
  },
  data() {
    return {
      workers: [],
      search: '',
    };
  },
  mounted() {
    const token = localStorage.getItem('token');
    this.axios.defaults.headers.common.Authorization = `JWT ${token}`;
    this.axios.get('api/workers?param=by rating')
      .then((res) => {
        if (res.data.workers) {
          this.workers = res.data.workers;
        }
      }, (err) => {
        this.showErr(err.err);
      });
  },
  methods: {
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
  computed: {
    filteredWorkers() {
      let filterWorkers = this.workers;
      if (this.search !== '') {
        filterWorkers = filterWorkers.filter(el => (el.firstname.toLowerCase().includes(this.search.toLowerCase()) || (el.lastname.toLowerCase().includes(this.search.toLowerCase()))));
      }
      return filterWorkers;
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
.contain{
  padding: 3%;
  & input{
    font-family: $roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.5px;
    color: #252F48;
    mix-blend-mode: normal;
    opacity: 0.2;
    width: 184px;
    height: 22px;
    margin-bottom: 12px;
  }
}
.admin{
  margin: 0 auto;
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: -2px 9px 8px rgba(23, 31, 76, 0.03);
  border-radius: 4px;
  height: 90%;
  overflow: auto;
  &__green{
    background: #F5F7FA;
    border-radius: 2px;
    min-height: 42px;
    height: 16%;
    border: 1px solid #DAE4F2;
    display: flex;
    & span{
      font-family: $roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.6px;
      text-transform: uppercase;
      color: #01134E;
      width: 16.5%;
      min-width: 83px;
      text-align: center;
      padding-top: 1%;
    }
  }
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
</style>
