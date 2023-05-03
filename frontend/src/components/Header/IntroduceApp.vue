<template>
    <div class="app-introduce container d-flex align-items-center" style="padding-left: 0px; padding-right: 0px;">
        <div class="d-flex align-items-center flex-grow-1">
            <img src="/logo.png" alt="logo" style="width: 120x; height: 120px" class="p-4"/>
            <!-- <div class="app-name ms-3">
                <h2
                    class="d-flex align-items-center fw-bold p-0 m-0"
                    style="color: #00b0f0"
                >
                    <p class="m-0" style="color: #1f5caa">CTU&nbsp;</p>
                    <p class="m-0">M-INTERSHIP</p>
                </h2>
                <h5 style="color: #595959">
                    Hệ thống quản lý sinh viên thực tập thực tế
                </h5>
            </div> -->
        </div>
        <Navbar />
        <div v-if="isLogin" class="dropdown mx-5 align-items-center text-center">
            <span><p class=" m-0" style="font-size: 13px!important;">{{ account.name }}</p></span>

            <button
                class="avatar-icon d-flex align-items-center dropdown-toggle m-auto"
                style="background: none;"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    :src="account.urlAvatar"
                    alt="Ảnh đại diện"
                    style="width: 50px; height: 50px;"
                    class="rounded-circle"
                />
                &nbsp;
            </button>
            <ul class="dropdown-menu">
                <li>
                    <button class="dropdown-item" @click="changeProfile">
                        <i class="bi bi-person-circle"></i>&nbsp; Cập nhật hồ sơ
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" @click="handleLogout">
                        <i class="bi bi-box-arrow-right"></i>&nbsp; Đăng xuất
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./Navbar.vue";

export default {
    name: "IntroduceApp",
    components: { Navbar },
    computed: mapGetters({ isLogin: "getIsLogin", account: "getAccount" }),

    methods: {
        ...mapActions(["logout"]),
        handleLogout() {
            this.logout();
            this.$router.push("/login");
        },
        ...mapActions(["changeprofile"]),
        changeProfile() {
            // this.logout();
            this.$router.push(
                `/${this.account.rule.toLowerCase()}/update-infor/view`
            );
        },
    },
};
</script>

<style>
.avatar-icon{
    border: none!important;
}
.app-name {
    font-family: "Noto Sans", sans-serif;
}

.btn-option {
    height: 40px;
}

.avatar-icon:hover {
    
    opacity: 0.8;
    
}
.dropdown-item:hover{
    background-color: none!important;
}
.dropdown-toggle::after{
    content: none!important;;
}
.dropdown-item:active {
    color: white!important;
    text-decoration: none!important;
    background-color: #2C542F!important;}
</style>
