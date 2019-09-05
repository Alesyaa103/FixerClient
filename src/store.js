import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },

  },
  actions: {
    SAVE_USER: async (context, user) => {
      const { data } = await axios.post('http://localhost:7070/api/updateUser', user);
      if (data.status === 200) {
        context.commit('SET_USER', user);
      }
    },
  },

});

export default store;

// this.$store.getters.user;
// this.$store.dispatch('SAVE_USER', user);
