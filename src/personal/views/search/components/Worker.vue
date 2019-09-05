<template>
    <article class="worker">
        <img class="worker__avatar" :src="worker.photo" alt="" />
        <div class="info">
          <span class="info__name">{{worker.firstname}} {{worker.lastname}}
            <img class="img__star" src="@/assets/personal/gold.svg" /></span>
          <div class="info__location">
            <img src="@/assets/personal/geo.svg" alt="" />
            <p>{{worker.location.city}} {{worker.location.country}}</p>
          </div>
          <div class="info__stack">
            <p class="inf">Stack:</p>
            <p>  {{worker.stack}}</p>
          </div>
          <div class="info__price">
            <p class="inf">Base Daily Rate:</p>
            <p>  $ {{worker.price}} USD</p>
          </div>
        </div>
      </article>
</template>
<script>
export default {
  name: 'Worker',
  props: {
    worker: Object,
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
    @include onTablet{
      margin: 10px auto;
    }
    @include onPhone{
      width: 245px;
      margin: 3px auto;
    }
  }

  .info {
    width: 67%;

    &__name {
      color: #000;
      font-family: $roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: normal;
      letter-spacing: -0.046704px;
      line-height: 28px;
      margin-bottom: 10px;
    }

    & .inf{
    color: #01134e;
    font-weight: 400;
    }

    & p {
      color: #000;
      font-family: $roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      letter-spacing: -0.046704px;
      line-height: 12px;
    }

    &__location {
      display: flex;
      margin-bottom: 6px;
      & img {
        margin-right: 5px;
      }
    }

    &__stack,
    &__price {
      display: flex;
      margin-bottom: 9px;
    }
  }

</style>
