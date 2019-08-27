<template>
    <div :class=" show === true ? 'progress' : 'hidden' ">
        <div :class="coloured1" class="progress__line"></div>
        <div :class="coloured2" class="progress__line"></div>
        <div :class="coloured3" class="progress__line"></div>
    </div>
</template>
<script>
export default {
  name: 'ConfirmPassword',
  props: {
    password: '',
  },
  computed: {
    show() {
      if (this.password === '') {
        return false;
      }
      return true;
    },
    coloured1() {
      if (this.password === '') return 'grey';
      if (this.password.length <= 6) return 'red';
      if ((this.password.length <= 9) && (this.password.length > 6)) return 'yellow';
      return 'green';
    },
    coloured2() {
      if (this.password.length <= 6) return 'grey';
      if ((this.password.length > 6) && (this.password.length <= 9)) return 'yellow';
      return 'green';
    },
    coloured3() {
      if (this.password.length <= 9) return 'grey';
      return 'green';
    },
  },
};
</script>
<style lang="scss" scoped>
.red{
    background-color: #FF6359;;
}
.yellow{
    background-color: #FFB966;;
}
.green{
    background-color: #38ECAC;
}
.grey{
    background-color: #ebeff3;
}
.progress {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 5px;

    &__line {
        border-radius: 2px;
        height: 6px;
        width: 128px;
    }
}
.hidden {
display: none;
}
</style>
