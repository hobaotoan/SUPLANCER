<template>
    <div>
        <div
            class="freelancers-register row p-4 animate__fadeIn animate__animated position-relative"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"
                        style="color: #2C542F"
                    >
                        Danh sách freelancer
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
            <div
                class="accordion col-6"
                style="height: 500px; overflow-y: scroll"
            >
                <ItemFreelancer
                    v-for="(freelancer, index) in freelancerTraining"
                    :key="index"
                    class="mb-2"
                    :freelancer="freelancer"
                    :index="index"
                />
            </div>
            <div class="col-6">
                <TrainingDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import ItemFreelancer from "../../components/Project/FreelancerTraining/ItemFreelancer.vue";
import TrainingDetail from "../../components/Project/FreelancerTraining/TrainingDetail.vue";
import Statistics from "../../components/Project/FreelancerTraining/Statistics.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "FreelancersTraining",
    components: { TrainingDetail, Statistics, ItemFreelancer },

    computed: mapGetters({
        isShowDetail: "getShowDetail",
        freelancerTraining: "getFreelancerTraining",
        account: "getAccount",
    }),

    async created() {
        const token = localStorage.getItem("token");
        this.$store.commit("CLOSE_DETAIL");
        await this.setAccount();

        const res = await axios.get(
            `${config.domain}/project/get-freelancers-training/`,
            {
                params: {
                    projectId: this.account.id,
                },
                headers: { Authorization: "Bearer " + token },
            }
        );
        this.$store.commit("SET_FREELANCER_TRAINING", res.data.result);
    },
    methods: {
        ...mapActions(["setAccount"]),
    },
};
</script>

<style></style>
