<template>
    <div class="freelancer-update my-5 animate__animated animate__fadeIn">
        <h2 class="update__title text-center fw-bold" style="color: #2C542F">
            Cập nhật thông tin cá nhân
        </h2>

        <div class="form-update row col-6 rounded-3 m-auto p-3 mt-3">
            <div class="col-12 text-center mb-3">
                <AvatarComponent class="mb-3" :urlAvatar="account.urlAvatar" />
                <h5 class="fw-bold">
                    {{ account.name }} - {{ account.username }}
                </h5>
            </div>
            <form
                class="form-update-infor col-12 row"
                enctype="multipart/form-data"
                method="post"
                @submit="updateProfile"
            >
                <input
                    class="form-control d-none"
                    name="accountId"
                    v-model="account.id"
                />
                <input
                    class="form-control d-none"
                    name="urlAvatar"
                    v-model="account.urlAvatar"
                />

                <div class="col-6">
                    <div class="mb-4">
                        <label for="email" class="form-label py-1"
                            ><strong>Email</strong></label
                        >
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            name="email"
                            v-model="account.email"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="form-label py-1"
                            ><strong>Số điện thoại</strong></label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="phone"
                            aria-describedby="name"
                            name="phoneNumber"
                            v-model="account.phoneNumber"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label for="address" class="form-label py-1"
                            ><strong>Địa chỉ</strong></label
                        >
                        <textarea
                            type="text"
                            class="form-control"
                            id="address"
                            aria-describedby="name"
                            name="address"
                            v-model="account.address"
                            required
                            rows="2"
                            cols="70"
                        ></textarea>
                    </div>
                    <div class="mb-4">
                        <label class="form-label py-1 col-12"
                            ><strong>Cập nhật ảnh đại diện</strong></label
                        >
                        <label
                            type="button"
                            class="btn btn-outline-warning col-12"
                            for="avatar"
                        >
                            <i class="bi bi-cloud-arrow-up-fill"></i>
                            Tải ảnh lên
                        </label>
                        <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            accept="image/png, image/jpeg"
                            @change="setNameFile"
                            class="d-none"
                        />
                        <div
                            class="col-12 my-2"
                            style="text-overflow: ellipsis; overflow: hidden"
                        >
                            {{ fileName }}
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-4">
                        <label for="message" class="form-label py-1"
                            ><strong>Thông tin giới thiệu</strong></label
                        >
                        <textarea
                            type="text"
                            class="form-control"
                            id="message"
                            aria-describedby="name"
                            name="message"
                            v-model="account.message"
                            required
                            rows="3"
                            cols="70"
                        ></textarea>
                    </div>

                    <div class="d-flex align-items-center">
                        <input
                            v-model="changePwd"
                            type="checkbox"
                            style="width: 18px; height: 18px"
                        />
                        <span class="ms-2">Thay đổi mật khẩu</span>
                    </div>
                    <div class="mb-4" style="margin-top: 32px" v-if="changePwd">
                        <label for="phone" class="form-label py-1"
                            ><strong>Mật khẩu hiện tại</strong></label
                        >
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            aria-describedby="name"
                            name="password"
                            v-model="password"
                            required
                        />
                    </div>
                    <div class="mb-4" v-if="changePwd">
                        <label for="phone" class="form-label py-1"
                            ><strong>Mật khẩu mới</strong></label
                        >
                        <input
                            type="password"
                            class="form-control"
                            id="newPassword"
                            aria-describedby="name"
                            name="newPassword"
                            v-model="newPassword"
                            required
                        />
                    </div>
                </div>

                <div class="form__footer d-flex justify-content-center mt-4">
                    <button class="btn btn-danger mx-3" @click="handleReset">
                        <i class="bi bi-arrow-clockwise"></i>&nbsp;Đặt lại
                    </button>
                    <button type="submit" class="btn btn-primary btn-save mx-3">
                        <i class="bi bi-calendar4"></i>&nbsp; Lưu
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import config from "@/config/index.js";
import axios from "axios";

import { mapGetters } from "vuex";
import AvatarComponent from "../../components/GlobalComponent/AvatarComponent.vue";

export default {
    name: "UpdateInfor",
    components: { AvatarComponent },
    data() {
        return {
            changePwd: false,
            newPassword: "",
            password: "",
            fileName: "",
        };
    },
    computed: {
        ...mapGetters({ account: "getAccount" }),
    },
    async created() {
        const token = localStorage.getItem("token");
        await this.$store.dispatch("setAccount");

        const res = await axios.get(
            `${config.domain}/project/get-project-infor`,
            {
                params: { projectId: this.account.id },
                headers: { Authorization: "Bearer " + token },
            }
        );

        this.$store.commit("SET_ACCOUNT", res.data.result);

        if (this.$route.params.status == "not-update") {
            this.$store.commit("SET_TOAST", {
                message: "Mật khẩu hiện tại không chính xác!",
                isSuccess: false,
            });
        } else if (this.$route.params.status == "success") {
            this.$store.commit("SET_TOAST", {
                message: "Cập nhật thành công!",
                isSuccess: true,
            });
        }
    },
    mounted() {
        const nav = document.querySelector("nav");
        nav.scrollIntoView();
    },
    methods: {
        async updateProfile(e) {
            try {
                e.target.action = `${config.domain}/update-profile`;
            } catch (error) {
                console.log(error);
            }
        },
        handleReset() {
            this.account.email = "";
            this.account.phoneNumber = "";
            this.newPassword = "";
            this.password = "";
            this.address = "";
            this.message = "";
        },
        setNameFile(e) {
            this.fileName = e.target.value.split("\\")[2];
        },
    },
};
</script>

<style scoped>
.btn-save {
    min-width: 70px;
}

.form-update {
    min-width: 900px;
}

.form-update {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
