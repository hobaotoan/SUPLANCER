import axios from "axios";
import config from "@/config/index.js";
const freelancerModule = {
    state: {
        freelancerList: [],
        freelancerTraining: [],
        freelancerDetail: {},
        freelancerTrainingDetail: {},
    },
    getters: {
        getFreelancerList(state) {
            return state.freelancerList;
        },
        getFreelancerTraining(state) {
            return state.freelancerTraining;
        },
        getFreelancerDetail(state) {
            return state.freelancerDetail;
        },
        getFreelancerTrainingDetail(state) {
            return state.freelancerTrainingDetail;
        },
    },
    mutations: {
        SET_FREELANCER_LIST(state, freelancerList) {
            state.freelancerList = freelancerList;
        },
        SET_FREELANCER_TRAINING(state, freelancerTraining) {
            state.freelancerTraining = freelancerTraining;
        },
        SET_FREELANCER_TRAINING_DETAIL(state, freelancerTrainingDetail) {
            state.freelancerTrainingDetail = freelancerTrainingDetail;
        },
        SET_FREELANCER_DETAIL(state, freelancerDetail) {
            state.freelancerDetail = freelancerDetail;
        },
        DELETE_FREELANCER(state, freelancerId) {
            for (let i = 0; i < state.freelancerList.length; i++) {
                if (state.freelancerList[i].id == freelancerId) {
                    state.freelancerList.splice(i, 1);
                }
            }
        },
    },
    actions: {
        async setFreelancerDetail({ commit }, payload) {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(
                    `${config.domain}/project/get-infor-register`,
                    {
                        params: {
                            projectId: payload.projectId,
                            freelancerId: payload.freelancerId,
                        },
                        headers: { Authorization: "Bearer " + token },
                    }
                );

                commit("SET_FREELANCER_DETAIL", res.data.result);
            } catch (error) {
                console.log(error);
            }
        },
    },
};

export default freelancerModule;
