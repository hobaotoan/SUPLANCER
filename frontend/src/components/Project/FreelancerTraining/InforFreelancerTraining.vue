<template>
    <div class="training-detail container">
        <div class="training-detail-freelancer">
            <div class="row align-items-center border rounded-2 p-3">
                <div
                    class="col-5 d-flex justify-content-center"
                    style="height: 180px; width: 200px"
                >
                    <img
                        :src="freelancer.urlAvatar"
                        alt=""
                        style="height: 100%; width: 100%"
                        class="rounded-circle"
                    />
                </div>
                <div class="col-7 flex-grow-1" style="min-height: 200px">
                    <div class="col-12 my-1">
                        <strong>MSSV: </strong> {{ freelancer.username }}
                    </div>
                    <div class="col-12 my-1">
                        <strong>Họ và tên: </strong> {{ freelancer.name }}
                    </div>
                    <div class="col-12 my-1">
                        <strong>Email: </strong>
                        {{ freelancer.email }}
                    </div>

                    <div class="col-12 my-1">
                        <strong>Tiến độ: </strong>

                        <div class="progress w-100 my-3">
                            <div
                                role="progressbar"
                                :class="
                                    progress
                                        ? ' bg-success text-light d-flex justify-content-center align-items-center'
                                        : ' d-flex justify-content-center align-items-center'
                                "
                                :style="`width: ${progress || 100}%`"
                            >
                                {{ `${progress ? progress.toFixed() : 0}%` }}
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-outline-warning me-3"
                        style="width: auto;"
                        data-bs-toggle="modal"
                        data-bs-target="#AssessResultModal"
                    >
                        <i class="bi bi-pencil-square"></i> Đánh giá kết quả
                        thực tập
                    </button>
                </div>
            </div>
        </div>
        <AssessResult />
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import { mapGetters } from "vuex";
import AssessResult from "../FreelancerTraining/AssessResult.vue";
export default {
    name: "InforFreelancerTraining",
    components: { AssessResult },

    computed: {
        ...mapGetters({
            freelancer: "getFreelancerTrainingDetail",
            taskList: "getTaskList",
        }),
        progress() {
            let completed = 0;
            for (let i = 0; i < this.taskList.length; i++) {
                if (this.taskList[i].status) {
                    completed++;
                }
            }

            return (completed / this.taskList.length) * 100;
        },
    },
    async created() {
        try {
            const token = localStorage.getItem("token");
            const freelancerId = this.$route.params.freelancerId;
            const res = await axios.get(
                `${config.domain}/project/get-infor-training`,
                {
                    params: {
                        freelancerId,
                    },
                    headers: { Authorization: "Bearer " + token },
                }
            );
            this.$store.commit("SET_FREELANCER_TRAINING_DETAIL", {
                ...res.data.result,
                progress: this.progressCaculate(res.data.result.tasks),
            });
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        progressCaculate(tasks) {
            let completed = 0;
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].status) {
                    completed++;
                }
            }

            return (completed / tasks.length) * 100;
        },
    },
};
</script>

<style>
.btn-outline-warning {
    --bs-btn-color: #95A800;
    --bs-btn-border-color: #95A800;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #95A800;
    --bs-btn-hover-border-color: #95A800;
    --bs-btn-focus-shadow-rgb: 255,193,7;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #95A800;
    --bs-btn-active-border-color: #95A800;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #95A800;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #95A800;
    --bs-gradient: none;
}
</style>
