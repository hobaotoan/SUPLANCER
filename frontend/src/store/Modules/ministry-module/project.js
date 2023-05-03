import axios from "axios";
import config from "@/config";
const projectModule = {
    state: {
        projectList: [],
        projectDetail: {},
    },
    getters: {
        getProjectList(state) {
            return state.projectList;
        },
        getProjectDetail(state) {
            return state.projectDetail;
        },
    },
    mutations: {
        SET_PROJECT_LIST(state, projectList) {
            state.projectList = projectList;
        },
        SET_PROJECT_DETAIL(state, project) {
            state.projectDetail = project;
        },
    },
    actions: {
        async setProjectList({ commit }) {
            const token = localStorage.getItem("token");
            const response = await axios.get(
                `${config.domain}/freelancer/get-project-list`,
                {
                    headers: { Authorization: "Bearer " + token },
                }
            );
            commit("SET_PROJECT_LIST", response.data.result);
        },
    },
};

export default projectModule;
