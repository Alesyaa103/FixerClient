<template>
  <div class="results">
    <div class="category">
      <router-link class="category__text" to="/personal/search/resultMap">show map</router-link>
      <div class="category__button">
        <input id="price" type="radio" name="category" value="by price" />
        <label for="price">by price</label>
        <input id="rating" type="radio" name="category" value="by rating" checked/>
        <label for="rating">by rating</label></div>
    </div>
    <div class="workers">
      <Worker :worker="worker" v-for='worker in workers' :key="worker._id" />
    </div>
  </div>
</template>
<script>
  import Worker from '../components/Worker.vue';

  export default {
    name: 'resultWorkers',
    props: {
      workers: Array,
    },
    components: {
      Worker,
    }
}  

</script>
<style lang="scss" scoped>
  .results {
    height: 100%;
    margin: 0 5%;
  }

  .category {
    align-items: center;
    display: flex;
    height: 28px;
    justify-content: space-between;

    &__text {
      color: #01134e;
      font-family: $roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.28px;
      line-height: 14px;
      text-transform: uppercase;
    }

    &__button {
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

  .workers {
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    justify-content: space-between;
    min-width: 750px;
    overflow: auto;
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

  .category__button input[type="radio"]:checked,
  .category__button input[type="radio"]:not(:checked) {
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
