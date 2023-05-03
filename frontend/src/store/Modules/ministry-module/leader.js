import axios from "axios";
import config from "@/config/index.js";
const leaderModule = {
    state: {
        leaderList: [],
        leaderDetail: {},
    },
    getters: {
        getLeaderList(state) {
            return state.leaderList;
        },
        getLeaderDetail(state) {
            return state.leaderDetail;
        },
    },
    mutations: {
        SET_ADVISER_LIST(state, leaderList) {
            state.leaderList = leaderList;
        },
        SET_ADVISER_DETAIL(state, leader) {
            state.leaderDetail = leader;
        },
    },
    actions: {
        async setLeaderDetail({ commit }, leaderId) {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                `${config.domain}/ministry/get-infor-leader`,
                {
                    params: { leaderId },
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            commit("SET_ADVISER_DETAIL", res.data.result);
        },
    },
};

export default leaderModule;
