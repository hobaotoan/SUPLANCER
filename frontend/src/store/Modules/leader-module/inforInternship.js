import axios from "axios";
import config from "../../../config/index.js";

const InforInternship = {
    state: {
        freelancerInfor: {},
        projectInfor: {},
        progressInfor: [],
        projectAssess: {},
        leaderAssess: {},
    },
    getters: {
        getFreelancerInfor(state) {
            return state.freelancerInfor;
        },
        getProjectInfor(state) {
            return state.projectInfor;
        },
        getProgressInfor(state) {
            return state.progressInfor;
        },
        getProjectAssess(state) {
            return state.projectAssess;
        },
        getLeaderAssess(state) {
            return state.leaderAssess;
        },
    },
    mutations: {
        SET_FREELANCER_INFOR(state, freelancerInfor) {
            state.freelancerInfor = freelancerInfor;
        },
        SET_PROJECT_INFOR(state, projectInfor) {
            state.projectInfor = projectInfor;
        },
        SET_PROGRESS_INFOR(state, progressInfor) {
            state.progressInfor = progressInfor;
        },
        SET_PROJECT_ASSESS(state, projectAssess) {
            state.projectAssess = projectAssess;
        },
        SET_LEADER_ASSESS(state, leaderAssess) {
            state.leaderAssess = leaderAssess;
        },
    },
    actions: {
        async setFreelancerInfor({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin thuc tap cua sinh vien.
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-freelancer-infor`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { freelancerId: payload.id },
                }
            );

            // Thay doi dinh dang ngay  bat dau thuc tap!
            let startDate = response.data.result.startDate;
            response.data.result.startDate =
                startDate === 0
                    ? 0
                    : new Date(startDate).toLocaleDateString("en-GB");
            commit("SET_FREELANCER_INFOR", response.data.result);
        },

        async setProjectInfor({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin thuc tap cua sinh vien!
            const responseFreelancer = await axios.get(
                `${config.domain}/${payload.rule}/get-freelancer-infor`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { freelancerId: payload.id },
                }
            );

            // Lay thong tin don vi thuc tap!
            const projectId = responseFreelancer.data.result.projectId;
            if (projectId) {
                const response = await axios.get(
                    `${config.domain}/${payload.rule}/get-project-infor`,
                    {
                        headers: { Authorization: "Bearer " + token },
                        params: { projectId: projectId },
                    }
                );
                commit("SET_PROJECT_INFOR", response.data.result);
            }
        },

        async setProgressInfor({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin phan cong cong viec
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-all-task`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { freelancerId: payload.id },
                }
            );

            // Thay doi dinh dang thoi gian hoan thanh cong viec
            response.data.result.forEach((task) => {
                task.time = new Date(task.time).toLocaleDateString("en-GB");
            });
            commit("SET_PROGRESS_INFOR", response.data.result);
        },

        async setProjectAssess({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin danh gia cua don vi thuc tap!
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-project-assess`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { freelancerId: payload.id },
                }
            );
            if (!response.data.result) {
                commit("SET_PROJECT_ASSESS", { points: [] });
            } else commit("SET_PROJECT_ASSESS", response.data.result);
        },

        async setLeaderAssess({ commit }, payload) {
            const token = localStorage.getItem("token");

            // Lay thong tin danh gia cua giang vien
            const response = await axios.get(
                `${config.domain}/${payload.rule}/get-assess`,
                {
                    headers: { Authorization: "Bearer " + token },
                    params: { freelancerId: payload.id },
                }
            );
            commit("SET_LEADER_ASSESS", response.data.points);
        },
    },
};

export default InforInternship;
