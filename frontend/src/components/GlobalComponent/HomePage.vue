<template>
    <div style="background-color: #2C542F;">
        <div
        class="home-page d-flex container"
    >
        <div
            class="col-6 d-flex align-items-center animate__animated animate__backInUp"
        >
            <div class="app-name ms-5">
                <h2 class="d-flex align-items-center fw-bold p-0 m-0 py-3 text-white" >
                    <p class="m-0">Xin chào&nbsp;</p>
                    <p class="m-0" style="color: #95A800">
                        {{ account.name }}&nbsp;
                    </p>
                    !!!
                </h2>
                <h5 class="lh-lg text-white">
                    Chào mừng bạn đến với SUPLANCER <br />
                    Hệ thống kết nối người làm - người tìm việc.
                </h5>
            </div>
        </div>
        <div
            class="col-6 py-5 d-flex align-items-center justify-content-end animate__animated animate__fadeInRight"
        >
            <img
            src="/home.png"
                alt=""
                style="width: 400px"
            />
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "HomePage",
    computed: {
        ...mapGetters({ account: "getAccount" }),
    },
};
</script>

<style></style>
