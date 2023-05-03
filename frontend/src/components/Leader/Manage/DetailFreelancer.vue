<template>
    <div class="detail-freelancer" v-if="detail">
        <div
            class="detail__infor position-relative border rounded-2 p-3 row animate__fadeIn animate__animated m-0"
        >
            <button
                type="button"
                class="btn-close position-absolute"
                aria-label="Close"
                @click="closeDetail"
            ></button>
            <AvatarComponent
                :urlAvatar="freelancerActive.urlAvatar"
                class="col-4 me-3"
            />
            <div class="col-7 flex-grow-1 mt-3">
                <div class="col-12 mb-3">
                    <strong>MSSV: </strong> {{ freelancerActive.username }}
                </div>
                <div class="col-12 mb-3">
                    <strong>Họ và tên: </strong> {{ freelancerActive.name }}
                </div>
                <div class="col-12 mb-3">
                    <strong>Email: </strong> {{ freelancerActive.email }}
                </div>
                <div class="col-12 mb-3">
                    <strong>Tên dự án thực tập: </strong>
                    {{ freelancerActive.projectName }}
                </div>
            </div>
            <div class="col-12 d-flex justify-content-around mt-3">
                <router-link :to="'/leader/view/progress/' + freelancerActive.id">
                    <button type="button" class="btn btn-outline-warning" style="width:auto; ">
                        Xem thông tin thực tập
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
export default {
    name: "DetailFreelancer",
    data() {
        return {
            avatar: {
                path: "https://cdn-icons-png.flaticon.com/512/2302/2302834.png",
                height: 150,
                width: 150,
            },
        };
    },
    computed: {
        ...mapGetters({
            detail: "getDetailFreelancer",
            freelancerActive: "getFreelancerActive",
        }),
    },

    methods: {
        closeDetail() {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Tổng quan";
            this.$store.commit("CLOSE_DETAIL_FREELANCER");
        },
    },
    components: { AvatarComponent },
};
</script>

<style scoped>
.btn-close {
    top: 10px;
    right: 10px;
}
</style>
