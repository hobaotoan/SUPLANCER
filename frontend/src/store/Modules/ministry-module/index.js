import adviserModule from "./adviser.js";
import projectModule from "./project.js";
const ministryModule = {
  modules: { adviserModule, projectModule },
  state() {
    return {
      isShowDetail: false,
    };
  },
  getters: {
    getShowDetail(state) {
      return state.isShowDetail;
    },
  },
  mutations: {
    SHOW_DETAIL(state) {
      state.isShowDetail = true;
    },
    CLOSE_DETAIL(state) {
      state.isShowDetail = false;
    },
  },
};

export default ministryModule;
