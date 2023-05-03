<template>
    <div>
        <div
            class="freelancers-register row p-4 animate__fadeIn animate__animated"
        >
            <div class="col-12">
                <div class="d-flex">
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"

                    >
                        Freelancer đăng ký
                        <div class="line my-3"></div>
                    </h2>
                    <h2
                        class="header-list label m-0 p-2 pt-4 fw-bold col-6"

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
                    v-for="(freelancer, index) in freelancerList"
                    :key="index"
                    class="mb-2"
                    :freelancer="freelancer"
                    :index="index"
                />
            </div>
            <div class="col-6">
                <InformationDetail v-if="isShowDetail" />
                <Statistics v-else />
            </div>
        </div>
        <Modal id="ModalRefuse" message="Bạn có chắc muốn xóa ứng viên này?"
            ><button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Đóng
            </button>

            <button
                type="button"
                class="btn text-white"
                        style="background-color: #2C542F; border:none;"
                data-bs-dismiss="modal"
                @click="
                    handleRefuse(freelancer.id);
                    closeDetail();
                "
            >
                Xác nhận
            </button>
        </Modal>

        <Modal
            id="ModalAccept"
            message="Bạn có chắc muốn xác nhận ứng viên này?"
            ><button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Đóng
            </button>
            <button
                type="button"
                class="btn"
                style="background-color: #2C542F; color: white;"
                data-bs-dismiss="modal"
                @click="
                    handleConfirm(freelancer.id);
                    closeDetail();
                "
            >
                Xác nhận
            </button>
        </Modal>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import ItemFreelancer from "../../components/Project/FreelancersRegister/ItemFreelancer.vue";
import InformationDetail from "../../components/Project/FreelancersRegister/InformationDetail.vue";
import Statistics from "../../components/Project/FreelancersRegister/Statistics.vue";
import Modal from "@/components/Modal/Modal.vue";

import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    name: "FreelancersRegister",
    components: { ItemFreelancer, InformationDetail, Statistics, Modal },
    computed: {
        ...mapGetters({
            isShowDetail: "getShowDetail",
            freelancerList: "getFreelancerList",
            account: "getAccount",
            freelancer: "getFreelancerDetail",
        }),
        ...mapMutations({ closeDetail: "CLOSE_DETAIL" }),
    },
    methods: {
        ...mapActions(["setAccount"]),
        ...mapMutations({ closeDetail: "CLOSE_DETAIL" }),
        async handleRefuse(freelancerId) {
            try {
                const toast = await this.handleDeleteFreelancer(freelancerId);

                this.$store.dispatch("setToast", {
                    isSuccess: toast.status,
                    message: toast.message,
                });
            } catch (error) {
                console.log(error);
            }
        },
        async handleConfirm(freelancerId) {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.post(
                    `${config.domain}/project/confirm/`,
                    { freelancerId, projectId: this.account.id },
                    {
                        headers: { Authorization: "Bearer " + token },
                    }
                );

                await this.handleRefuse(freelancerId);

                if (res.data.status) {
                    this.$store.dispatch("setToast", {
                        isSuccess: res.data.status,
                        message: res.data.message,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },
        async handleDeleteFreelancer(freelancerId) {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.delete(
                    `${config.domain}/project/refuse-register/`,
                    {
                        headers: { Authorization: "Bearer " + token },

                        data: {
                            freelancerId,
                            projectId: this.account.id,
                        },
                    }
                );

                if (res.data.status) {
                    this.$store.commit("DELETE_FREELANCER", this.freelancer.id);
                }

                return { status: res.data.status, message: res.data.message };
            } catch (error) {
                console.log(error);
            }
        },
    },
    async created() {
        this.$store.commit("CLOSE_DETAIL");

        const token = localStorage.getItem("token");
        await this.setAccount();

        const res = await axios.get(
            `${config.domain}/project/get-freelancers-register/`,
            {
                params: {
                    projectId: this.account.id,
                },
                headers: { Authorization: "Bearer " + token },
            }
        );
        this.$store.commit("SET_FREELANCER_LIST", res.data.result);
    },
};
</script>

<style>
.line {
    border-bottom: 3px solid #1c57a5;
    width: 100px;
}
.header-list{
    color:#2C542F;
}
</style>
