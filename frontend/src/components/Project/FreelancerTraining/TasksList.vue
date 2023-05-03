<template>
    <div class="container">
        <div class="task-list">
            <h4
                class="header-list m-0 p-2 pt-3 fw-bold col-6"
            >
                Danh sách công việc
                <div class="line my-3"></div>
            </h4>
        </div>
        <table class="table table-striped">
            <thead>
                <tr class="text-center">
                    <th scope="col">Tuần</th>
                    <th scope="col">Tên công việc</th>
                    <th scope="col ">Ngày hoàn thành</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Đánh giá</th>
                    <th scope="col">Tùy chọn</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr v-for="(task, index) in taskList" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="col text-center">{{ task.title }}</td>
                    <td class="text-center">
                        {{ new Date(task.time).toLocaleDateString("en-GB") }}
                    </td>

                    <td class="col-2">
                        {{ task.status ? "Đã hoàn thành" : "Chưa hoàn thành" }}
                    </td>
                    <td v-if="task.message" class="col text-center">
                        {{ task.message }}
                    </td>
                    <td v-else class="col-3 text-center">
                        <div class="text-warning">
                            Chưa có đánh giá
                        </div>
                    </td>

                    <td class="col-2">
                        <div class="d-flex justify-content-center">
                            <button
                            type="button"
                            class="btn text-warning"
                            style="width: auto;"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAssessTask"
                            @click="setTaskCurrent(task)"
                        >
                            <i class="bi bi-pencil-square fs-5"></i>
                        </button>
                        <button class="btn"
                        style="width: auto;"
                         @click="deleteTask(task._id)">
                            <i class="bi bi-archive-fill text-danger fs-5"></i>
                        </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="w-100 option d-flex justify-content-center">
            <button
                type="button"
                class="btn"
                style="background-color:#2C542F; color: white; font-size: 12px; border-radius: 0!important;"
                data-bs-toggle="modal"
                data-bs-target="#AddTaskModal"
            >
                <i class="bi bi-plus-circle-fill"></i> Thêm công việc
            </button>
        </div>
        <AssessTaskForm />
        <AddTaskForm />
    </div>
</template>

<script>
import AssessTaskForm from "../FreelancerTraining/AssessTaskForm.vue";
import AddTaskForm from "../FreelancerTraining/AddTaskForm.vue";
import { mapGetters } from "vuex";

export default {
    name: "TaskList",
    components: { AssessTaskForm, AddTaskForm },
    async created() {
        try {
            const freelancerId = this.$route.params.freelancerId;

            await this.$store.dispatch("setTaskList", freelancerId);
        } catch (error) {
            console.log(error);
        }
    },
    computed: { ...mapGetters({ taskList: "getTaskList" }) },
    methods: {
        deleteTask(taskId) {
            this.$store.dispatch("deleteTask", taskId);
        },
        setTaskCurrent(task) {
            this.$store.commit("SET_TASK_CURRENT", task);
        },
    },
};
</script>

<style scoped>
.btn:hover {
    /* opacity: 0.8; */
}
.btn:first-child:hover{
     /* opacity: 0.8; */
}
</style>
