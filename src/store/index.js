import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doctor: null,
    survey: null,
    ep: null,
    completeSurvey: {},
    completeEvent: false,
  },
  mutations: {
    doctor(state, val) {
      state.doctor = val;
    },
    survey(state, val) {
      state.survey = val;
    },
    ep(state, val) {
      state.ep = val;
    },
    completeSurvey(state, arr) {
      if (arr) arr.forEach(ep => state.completeSurvey[ep] = true);
    },
    completeEvent(state) {
      state.completeEvent = true;
    }
  },
});