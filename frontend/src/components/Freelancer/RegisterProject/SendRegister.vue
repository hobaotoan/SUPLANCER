<template>
    <div
        class="modal fade"
        id="sendRegister"
        tabindex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bold" id="modalLabel">
                        Thông tin đăng ký tham gia dự án
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body ps-0">
                    <form action="" class="row col-12 p-0 my-3 mx-2">
                        <div
                            class="avatar col-4 d-flex flex-column align-items-center ps-0 text-center mt-3"
                        >
                            <AvatarComponent
                                :urlAvatar="freelancer.urlAvatar"
                                class="col-12"
                            />
                            <h3
                                class="col-10 text-center fw-bold fs-4 mt-3"
                                style="color: #2C542F"
                            >
                                {{ freelancer.name }}
                            </h3>
                        </div>
                        <div class="infor col-8">
                            <div class="mb-3 row">
                                <span class="col-3 px-0"
                                    ><strong>Email: </strong></span
                                >
                                <span class="col-6">{{ freelancer.email }}</span>
                            </div>
                            <div class="mb-3 row">
                                <span class="col-3 px-0"
                                    ><strong>Số điện thoại: </strong></span
                                >
                                <span class="col-6">{{
                                    freelancer.phoneNumber
                                }}</span>
                                <!-- <label
                                    for="inputGPA"
                                    class="col-1 col-form-label px-0 ms-auto"
                                    ><strong>GPA:</strong></label
                                >
                                <div class="col-2">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputGPA"
                                        v-model="gpa"
                                    />
                                </div> -->
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="inputLanguage"
                                    class="col-3 col-form-label px-0"
                                    ><strong>Kỹ năng:</strong></label
                                >
                                <div class="col-9">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputLanguage"
                                        v-model="technology"
                                    />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="textareaProject"
                                    class="col-3 col-form-label px-0"
                                    ><strong>Dự án đã từng tham gia:</strong></label
                                >
                                <div class="col-9">
                                    <textarea
                                        class="form-control"
                                        id="textareaProject"
                                        v-model="projects"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label
                                    for="textareaProject"
                                    class="col-3 col-form-label px-0"
                                    ><strong>Thông điệp:</strong></label
                                >
                                <div class="col-9">
                                    <textarea
                                        class="form-control"
                                        id="textareaProject"
                                        v-model="message"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        style="background-color: #2C542F; border:none;"
                        @click="sendRegister"
                        :disabled=" !technology || !projects || !message"
                    >
                        Gửi đi
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AvatarComponent from "@/components/GlobalComponent/AvatarComponent.vue";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import config from "@/config";
export default {
    name: "SendRegister",
    data() {
        return {
            technology: "",
            projects: "",
            message: "",
        };
    },
    computed: {
        ...mapGetters({ freelancer: "getAccount", project: "getProjectDetail" }),
    },
    methods: {
        ...mapActions(["setAccount"]),
        async sendRegister() {

            const token = localStorage.getItem("token");
            const response = await axios.post(
                `${config.domain}/freelancer/register-project`,
                {
                    freelancerId: this.freelancer.id,
                    projectId: this.project.id,
                    technology: this.technology,
                    projects: this.projects,
                    message: this.message,
                },
                {
                    headers: { Authorization: "Bearer " + token },
                }
            );
            this.$store.dispatch("setToast", {
                isSuccess: true,
                message: response.data.message,
            });
        },
    },
    created() {
        this.setAccount();
    },
    components: { AvatarComponent },
};
</script>

<style></style>
