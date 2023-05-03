const FreelancerList = {
    state: {
        teamName: [],
        currentList: [],
        freelancerActive: {},
    },
    getters: {
        getTeamName(state) {
            return state.teamName;
        },
        getCurrentList(state) {
            return state.currentList;
        },
        getFreelancerActive(state) {
            return state.freelancerActive;
        },
    },
    mutations: {
        SET_CLASS_NAME(state, teamName) {
            state.teamName = teamName;
        },
        SET_CURRENT_LIST(state, currentList) {
            state.currentList = currentList;
        },
        SET_FREELANCER_ACTIVE(state, freelancer) {
            state.freelancerActive = freelancer;
        },
    },
    actions: {},
};

export default FreelancerList;
