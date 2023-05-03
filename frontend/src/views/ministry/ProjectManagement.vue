<template>
    <div>
        <div
            class="project-management row p-4 animate__fadeIn animate__animated position-relative"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #2C542F"
                    >
                        Danh sách các đơn vị dự án
                        <div class="line my-3"></div>
                    </h2>
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #2C542F"
                    >
                        Thông tin chi tiết
                        <div class="line my-3"></div>
                    </h2>
                </div>
            </div>
            <div class="col-6" style="height: 500px; overflow-y: scroll">
                <div class="accordion">
                    <ProjectItem
                        class="mb-2 me-2"
                        v-for="(project, index) in projectList"
                        :key="index"
                        :project="project"
                        :index="index"
                    />
                </div>
            </div>

            <div class="col-6">
                <ProjectDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";

import ProjectItem from "../../components/Ministry/ProjectManagement/ProjectItem.vue";
import ProjectDetail from "../../components/Ministry/ProjectManagement/ProjectDetail.vue";
import Statistics from "../../components/Ministry/ProjectManagement/Statistics.vue";

import { mapGetters } from "vuex";
export default {
    name: "ProjectManagement",
    components: {
        ProjectDetail,
        ProjectItem,
        Statistics,
    },
    computed: mapGetters({
        isShowDetail: "getShowDetail",
        projectList: "getProjectList",
    }),

    async created() {
        try {
            // Dong xem chi tiet
            this.$store.commit("CLOSE_DETAIL");

            // Load du lieu
            const token = localStorage.getItem("token");
            const res = await axios.get(
                `${config.domain}/ministry/get-all-companies`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            this.$store.commit("SET_PROJECT_LIST", res.data.result);
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style></style>
