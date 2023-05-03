import leaderModule from "./leader.js";
import projectModule from "./project.js";
const ministryModule = {
    modules: { leaderModule, projectModule },
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
