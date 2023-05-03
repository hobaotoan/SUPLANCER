<template>
    <div>
        <div
            class="freelancers-register row p-4 animate__fadeIn animate__animated position-relative"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color:  #2C542F"
                    >
                        Danh sách Adviser
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
                    <LeaderItem
                        v-for="(leader, index) in leaderList"
                        :key="index"
                        class="mb-2"
                        :leader="leader"
                        :index="index"
                    />
                </div>
            </div>
            <div class="col-6">
                <LeaderDetail v-if="isShowDetail">
                    <div class="col-12 d-flex justify-content-center mt-3">
                        <button
                            type="button"
                            class="btn-close position-absolute"
                            aria-label="Close"
                            @click="closeDetail"
                        ></button>
                        <button
                            type="button"
                            class="btn btn-outline-warning d-flex align-items-center me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#assignModal"
                        >
                            <i class="bi bi-pass me-1"></i>
                            Phân công
                        </button>
                        <router-link
                            :to="
                                '/ministry/leader-management/' +
                                leaderDetail._id
                            "
                            type="button"
                            class="btn btn btn-outline-primary d-flex align-items-center"
                        >
                            <i class="bi bi-eye me-1"></i>
                            Xem danh sách Freelancer đang làm việc
                        </router-link>
                    </div>
                </LeaderDetail>
                <Statistics v-else />
            </div>
        </div>
        <AssignForm />
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import LeaderItem from "../../components/Ministry/LeaderManagement/LeaderItem.vue";
import LeaderDetail from "../../components/Ministry/LeaderManagement/LeaderDetail.vue";
import Statistics from "../../components/Ministry/LeaderManagement/Statistics.vue";
import AssignForm from "@/components/Ministry/LeaderManagement/AssignForm.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "LeaderManagement",
    components: { LeaderItem, LeaderDetail, Statistics, AssignForm },
    computed: mapGetters({
        isShowDetail: "getShowDetail",
        leaderDetail: "getLeaderDetail",
        leaderList: "getLeaderList",
    }),
    methods: {
        ...mapMutations({
            closeDetail: "CLOSE_DETAIL",
        }),
    },
    async created() {
        try {
            // Dong xem chi tiet
            this.$store.commit("CLOSE_DETAIL");

            // Xu ly load du lieu
            const token = localStorage.getItem("token");
            const res = await axios.get(
                `${config.domain}/ministry/get-all-leaders`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            this.$store.commit("SET_ADVISER_LIST", res.data.result);
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style>
.btn-close {
    top: 10px;
    right: 10px;
}

.complete {
    width: 20%;
}
</style>
