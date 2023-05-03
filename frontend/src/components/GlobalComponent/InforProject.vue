<template>
    <div class="object-infor col-6 d-flex p-3 border rounded-4">
        <div v-if="freelancer.projectId !== null" class="d-flex">
            <AvatarComponent
                :urlAvatar="project.urlAvatar"
                class="col-5 me-4"
            />
            <div class="col-7 row flex-grow-1">
                <div class="col-12 my-2">
                    <strong>Tên dự án: </strong> {{ project.name }}
                </div>
                <div class="col-12 my-2">
                    <strong>Số điện thoại: </strong> {{ project.phoneNumber }}
                </div>
                <div class="col-12 my-2">
                    <strong>Email: </strong> {{ project.email }}
                </div>
                <div class="col-12 my-2">
                    <strong>Địa chỉ: </strong> {{ project.address }}
                </div>
            </div>
        </div>
        <div
            v-else
            class="d-flex justify-content-center align-items-center flex-grow-1"
        >
            <h4 style="color: red">Sinh viên chưa tham gia thực tập!</h4>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "./AvatarComponent.vue";
export default {
    name: "InforProject",
    components: { AvatarComponent },
    computed: {
        ...mapGetters({
            project: "getProjectInfor",
            freelancer: "getFreelancerInfor",
        }),
    },
};
</script>

<style scoped>
.object-infor {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 49%;
}
</style>
