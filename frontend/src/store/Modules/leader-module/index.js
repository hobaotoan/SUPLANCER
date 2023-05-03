import FreelancerList from "./freelancerList.js";
import InforInternship from "./inforInternship.js";

const modules = {
    FreelancerList,
    InforInternship,
};

const state = {
    detailFreelancer: false,
};

const getters = {
    getDetailFreelancer(state) {
        return state.detailFreelancer;
    },
};

const mutations = {
    SHOW_DETAIL_FREELANCER(state) {
        state.detailFreelancer = true;
    },

    CLOSE_DETAIL_FREELANCER(state) {
        state.detailFreelancer = false;
    },
};

const actions = {};

export default { modules, state, getters, mutations, actions };
