import axios from "axios";
import config from "@/config/index.js";
const adviserModule = {
  state: {
    adviserList: [],
    adviserDetail: {},
  },
  getters: {
    getAdviserList(state) {
      return state.adviserList;
    },
    getAdviserDetail(state) {
      return state.adviserDetail;
    },
  },
  mutations: {
    SET_ADVISER_LIST(state, adviserList) {
      state.adviserList = adviserList;
    },
    SET_ADVISER_DETAIL(state, adviser) {
      state.adviserDetail = adviser;
    },
  },
  actions: {
    async setAdviserDetail({ commit }, adviserId) {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${config.domain}/ministry/get-infor-adviser`,
        {
          params: { adviserId },
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      commit("SET_ADVISER_DETAIL", res.data.result);
    },
  },
};

export default adviserModule;
