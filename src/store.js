import VueAxios from "vue-axios";

const store = new Vuex.store({
  state: {
    user: Object,
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload;
    }
  },
  getters: {
    USER: state => {
      return state.user;
    }
  },
})

//this.$store.getters.USER;
//this.$store.commit('SET_USER', user);