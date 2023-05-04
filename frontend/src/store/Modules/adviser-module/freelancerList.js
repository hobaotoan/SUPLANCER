const FreelancerList = {
  state: {
    domainName: [],
    currentList: [],
    freelancerActive: {},
  },
  getters: {
    getTeamName(state) {
      return state.domainName;
    },
    getCurrentList(state) {
      return state.currentList;
    },
    getFreelancerActive(state) {
      return state.freelancerActive;
    },
  },
  mutations: {
    SET_CLASS_NAME(state, domainName) {
      state.domainName = domainName;
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
