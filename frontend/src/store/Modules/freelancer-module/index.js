const state = {
    showProject: false,
};

const getters = {
    getShowProject(state) {
        return state.showProject;
    },
};

const mutations = {
    SHOW_PROJECT(state) {
        state.showProject = true;
    },
    CLOSE_PROJECT(state) {
        state.showProject = false;
    },
};

const actions = {};

export default { state, getters, mutations, actions };
