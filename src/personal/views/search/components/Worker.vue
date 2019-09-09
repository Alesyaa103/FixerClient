<template>
    <article class="worker">
        <img class="worker__avatar" :src="worker.photo" alt="" />
        <div class="info">
          <span class="info__name category">{{worker.firstname}} {{worker.lastname}}
            <img :src="currentRating" /></span>
          <div class="info__location">
            <img src="@/assets/personal/geo.svg" alt=""/>
            <p v-if="worker.location">{{worker.location.city}} {{worker.location.country}}</p>
          </div>
          <div class="info__content">
            <div class="info__content--group">
              <p class="category">Stack:</p>
              <p class="content">  {{worker.stack}}</p>
            </div>
            <button to="/personal/search/worker" @click.prevent="showWorkerProfile">More</button>
          </div>
          <div class="info__content">
            <div class="info__content--group">
              <p class="category">Base Daily Rate:</p>
              <p class="content">  $ {{worker.price}} USD</p>
            </div>
          </div>
        </div>
      </article>
</template>
<script>
import bronze from '@/assets/personal/bronze.svg';
import silver from '@/assets/personal/silver.svg';
import gold from '@/assets/personal/gold.svg';

export default {
  name: 'Worker',
  props: {
    worker: Object,
    onShowWorkerProfile: Function,
  },
  data() {
    return {
      currentRating: bronze,
    };
  },
  mounted() {
    if (this.worker.rating > 80) {
      this.currentRating = gold;
    } else if (this.worker.rating > 50) {
      this.currentRating = silver;
    }
  },
  methods: {
    showWorkerProfile() {
      this.onShowWorkerProfile(
        this.worker,
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
.worker {
    align-items: center;
    border: 1px solid rgba(237, 237, 237, 0.2);
    border-radius: 2px;
    box-shadow: -2px 9px 30px rgba(23, 31, 76, 0.06);
    box-sizing: border-box;
    display: flex;
    height: 128px;
    justify-content: space-around;
    margin: 0 18px 18px 0;
    width: 330px;

    &__avatar {
      height: 76px;
      width: 76px;
      border-radius: 50%;
    }
    @include onTablet {
      margin: 10px auto;
    }
    @include onPhone {
      width: 245px;
      margin: 3px auto;
    }
  }

  .info {
    width: 67%;

    &__name {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: -0.046704px;
      line-height: 28px;
      margin-bottom: 10px;
      color: #01134e;
      font-weight: 600;
      font-family: $roboto;
    }
    &__location {
      display: flex;
      margin-bottom: 6px;
      align-content: center;
      & img {
        margin-right: 5px;
      }
      & p {
        font-family: $roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: -0.046704px;
        color: #000;
      }
    }
    &__content {
      display: flex;
      margin-bottom: 9px;
      justify-content: space-between;
      font-family: $roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.046704px;
      color: #000;
      & button {
        color: #2A74DB;
        background-color: inherit;
      }
      &--group {
        display: flex;
      }
      & .category {
        color: #01134e !important;
        font-weight: 600;
      }
      & .content {
        padding-left: 5px;
      }
    }
  }
</style>
