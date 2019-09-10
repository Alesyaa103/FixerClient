<template>
  <li v-if="worker">
    <span>{{worker.firstname}}</span>
    <span>{{worker.lastname}}</span>
    <span v-if="worker.location">{{worker.location.country}}</span>
    <span>Requested</span>
    <span>{{worker.rating}}</span>
    <span class="email">{{worker.email}}</span>
    <button @click="deleteUser" type="button"></button>
  </li>
</template>
<script>
import Swal from 'sweetalert2';

export default {
  name: 'Worker',
  props: {
    worker: Object,
    onDeleteUser: Function,
  },
  methods: {
    deleteUser() {
      this.axios.delete(`api/remove${this.worker._id}`)
      .then((res) => {
        this.showStatus(res);
        }, (err) => {
          this.showErr(err);
        });
    },
    showErr(error) {
      Swal.fire({
        position: 'top',
        toast: true,
        type: 'error',
        title: err,
        showConfirmButton: false,
        timer: 1000,
      });
    },
    showStatus(error) {
      Swal.fire({
        position: 'top',
        toast: true,
        type: 'success',
        title: err,
        showConfirmButton: false,
        timer: 1000,
      });
    
    },
  },
}
</script>
<style lang="scss" scoped>
li{
  min-height: 42px;
  height: 16%;
  border: 1px solid #DAE4F2;
  display: flex;
  & span{
    font-family: $roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -0.046704px;
    color: #000000;
    width: 16.5%;
    min-width: 83px;
    text-align: center;
    padding-top: 1%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button{
    width: 9px;
    height: 9px;
    margin-top: 2%;
    margin-right: 2%;
    background-image: url('../../../../assets/personal/cross.svg');
    background-repeat: no-repeat;
    background-color: inherit;
  }
  .email{
    text-align: left;
  }
}
</style>