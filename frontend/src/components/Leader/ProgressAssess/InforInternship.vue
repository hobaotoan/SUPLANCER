<template>
    <div class="infor-internship container">
        <div class="infor__header py-5 border-bottom">
            <div class="infor__title m-0 d-flex flex-column align-items-center">
                <h2 class="label fw-bold" style="color: #2C542F">
                    Quản lý công việc
                </h2>
                <div class="line my-3"></div>
            </div>
            <div class="infor__switch row mt-4 justify-content-center">
                <div class="col-2 me-2">
                    <router-link
                        :to="'/leader/view/progress/' + id"
                        class="router-link"
                    >
                        <button
                            type="button"
                            class="btn btn-progress"
                            @click="viewInforInternship($event)"
                        >
                            <i class="bi bi-calendar-week fs-4 me-2"></i>
                            <span>Xem tiến độ công việc</span>
                        </button>
                    </router-link>
                </div>
                <div class="col-2 me-2">
                    <router-link
                        :to="'/leader/view/project-assess/' + id"
                        class="router-link"
                    >
                        <button
                            type="button"
                            class="btn btn-project"
                            @click="viewInforInternship($event)"
                        >
                            <i class="bi bi-clipboard-check fs-4 me-2"></i>
                            <span>Xem đánh giá của đơn vị dự án</span>
                        </button>
                    </router-link>
                </div>
                <div class="col-2">
                    <router-link
                        :to="'/leader/view/assess-freelancer/' + id"
                        class="router-link"
                    >
                        <button
                            type="button"
                            class="btn  btn-leader"
                            @click="viewInforInternship($event)"
                        >
                            <i class="bi bi-pencil-square fs-4 me-2"></i>
                            <span>Đánh giá kết quả làm việc</span>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="infor__content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "InforInternShip",
    data() {
        return {
            id: "",
        };
    },
    methods: {
        clearDisabled() {
            const buttons = document.querySelectorAll(
                ".infor-internship button"
            );
            buttons.forEach((button) => {
                button.disabled = false;
            });
        },
        viewInforInternship(event) {
            this.clearDisabled();
            event.currentTarget.disabled = true;
        },
    },
    created() {
        this.id = this.$route.params.id;
    },
    mounted() {
        const viewProgress = document.querySelector(".view-progress");
        const viewAssessProject = document.querySelector(
            ".view-assess-project"
        );
        const AssessLeader = document.querySelector(".assess-leader");
        this.clearDisabled();
        if (viewProgress) {
            const btnProgress = document.querySelector(".btn-progress");
            btnProgress.disabled = true;
        }
        if (viewAssessProject) {
            const btnProject = document.querySelector(".btn-project");
            btnProject.disabled = true;
        }
        if (AssessLeader) {
            const btnLeader = document.querySelector(".btn-leader");
            btnLeader.disabled = true;
        }
    },
};
</script>
<style scoped>
.btn {
    height: 90px;
    width: 180px;
    display: flex;
    align-items: center;
}
.btn {
    height: 90px;
    width: 180px;
    display: flex;
    align-items: center;
}
a{
    color:#95A800;
}
.btn:first-child:active{
    background-color: #95A800!important;
}

.router-link {
    cursor: default;
    text-decoration: none;
}
</style>
