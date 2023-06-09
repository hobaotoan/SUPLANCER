<template>
    <div class="view-progress my-4 animate__animated animate__fadeIn">
        <div class="view-progress__content mb-3">
            <div class="view-progress__title col-6 me-5">
                <h2
                    class="header-list label m-0 pt-2 fw-bold"
                    style="color: #2C542F"
                >
                    Thông tin tiến độ công việc
                </h2>
                <div class="line my-3"></div>
            </div>
            <div class="view-progress__detail my-4">
                <p class="view-progress__date" v-if="startDate">
                    <strong>Thời gian làm việc: </strong> từ ngày
                    <span>{{ startDate }}</span>
                </p>
                <p v-else style="color: red">Bạn chưa tham gia dự án</p>
                <p class="view-progress__status" v-if="startDate">
                    <strong>Trạng thái hoàn thành: </strong>
                    <span class="text-warning" v-if="!completedAssess"
                        >Freelancer đang làm việc</span
                    >
                    <span class="text-success" v-else>
                        Đã hoàn thành công việc trong dự án</span
                    >
                </p>
            </div>
            <div class="progress" v-if="startDate">
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
        <div class="table-progress border rounded-4 p-3" v-if="startDate">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style="width: 5%">Tuần</th>
                        <th scope="col" style="width: 40%">
                            Nội dung công việc
                        </th>
                        <th scope="col" style="width: 15%">Trạng thái</th>
                        <th scope="col" style="width: 10%">Thời hạn</th>
                        <th scope="col" style="width: 30%">Nhận xét</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                        <th scope="row">{{ ++index }}</th>
                        <td>{{ task.title }}</td>
                        <td>
                            {{ task.status ? "Hoàn thành" : "Chưa hoàn thành" }}
                        </td>
                        <td>{{ task.time }}</td>
                        <td :class="task.message ? '' : 'text-warning'">
                            {{
                                task.message ? task.message : "Chưa có nhận xét"
                            }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "ViewProgress",
    data() {
        return {
            points: [],
            time: "",
        };
    },
    computed: {
        ...mapGetters({
            tasks: "getProgressInfor",
            freelancer: "getFreelancerInfor",
            projectAssess: "getProjectAssess",
            account: "getAccount",
        }),
        startDate() {
            return this.freelancer.startDate;
        },
        progress() {
            let count = 0;
            this.tasks.forEach((task) => {
                if (task.status) {
                    count++;
                }
            });
            return isNaN((count * 100) / this.tasks.length)
                ? 0
                : (count * 100) / this.tasks.length;
        },
        completedAssess() {
            let pointLength = this.points.length;
            if (pointLength === 0 || pointLength < 14) return false;
            else return true;
        },
    },
    async created() {
        await this.$store.dispatch("setAccount");
        const id = this.$route.params.id
            ? this.$route.params.id
            : this.account.id;
        const rule = localStorage.getItem("rule").toLowerCase();
        const payload = { id, rule };
        await this.$store.dispatch("setProjectAssess", payload);
        this.points = this.projectAssess.points;
    },
};
</script>

<style scoped>
.view-progress__title {
    max-width: 48%;
}

.table-progress {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
