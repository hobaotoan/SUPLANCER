<template>
    <div class="detail-project" v-if="showProject">
        <div
            class="detail__infor row position-relative border rounded-2 p-4 mx-2 animate__fadeIn animate__animated"
        >
            <button
                type="button"
                class="btn-close position-absolute"
                aria-label="Close"
                @click="closeDetail"
            ></button>
            <AvatarComponent
                :urlAvatar="project.urlAvatar"
                class="col-4 pe-0"
            />
            <div class="col-7 ms-3 mt-2">
                <div class="col-12 mt-0 mb-3">
                    <strong>Tên dự án: </strong>{{ project.name }}
                </div>
                <div class="col-12 my-3">
                    <strong>Email: </strong> {{ project.email }}
                </div>
                <div class="col-12 my-3">
                    <strong>Số điện thoại: </strong> {{ project.phoneNumber }}
                </div>
                <div class="col-12 my-3">
                    <strong>Địa chỉ: </strong> {{ project.address }}
                </div>
            </div>
            <div class="col-12 my-4 p-0">
                <strong>Về đơn vị: </strong> {{ project.message }}
            </div>
            <div class="col-12 d-flex justify-content-around pt-2">
                <button
                    type="button"
                    class="btn btn-light text-success rounded-5"
                    v-if="project.id === freelancer.projectId"
                    disabled
                >
                    Bạn đang làm việc trong dự án này
                </button>
                <button
                    type="button"
                    class="btn btn-light text-danger rounded-5"
                    v-else-if="freelancer.projectId !== null"
                    disabled
                >
                    Bạn đã tham gia dự án!
                </button>
                <button
                    v-else
                    type="button"
                    class="btn"
                    style="background-color: #2C542F; border:none; color: white;"
                    data-bs-toggle="modal"
                    data-bs-target="#sendRegister"
                >
                    <i class="bi bi-vector-pen"></i> &nbsp; Đăng ký
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
export default {
    name: "DetailProject",
    components: { AvatarComponent },
    computed: {
        ...mapGetters({
            showProject: "getShowProject",
            project: "getProjectDetail",
            freelancer: "getFreelancerInfor",
        }),
    },
    methods: {
        closeDetail() {
            const headerDetail = document.querySelector(".title-detail h2");
            headerDetail.innerText = "Tổng quan";
            this.$store.commit("CLOSE_PROJECT");
        },
    },
};
</script>

<style scoped>
.detail__infor {
    min-height: 300px;
}

.btn-close {
    top: 10px;
    right: 10px;
}
.btn-success {
    height: 40px;
}
</style>
