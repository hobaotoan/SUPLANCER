<template>
    <div class="dashboard row border-bottom pb-4">
        <div class="dashboard-item col-12 d-flex justify-content-center">
            <div
                class="dashboard-detail col-3 d-flex justify-content-around m-2"
            >
                <div class="dashboard-infor">
                    <p class="item__name mb-1">Tổng số tài khoản</p>
                    <h3 class="item__quantity fw-bold">{{ total }}</h3>
                </div>
                <img
                    src="/imageedit_5_6133938238.png"
                    alt=""
                    class="dashboard__img"
                />
            </div>
            <div
                class="dashboard-detail col-3 d-flex justify-content-around m-2"
            >
                <div class="dashboard-infor">
                    <p class="item__name mb-1">Tài khoản leader</p>
                    <h3 class="item__quantity fw-bold">{{ leader }}</h3>
                </div>
                <img
                    src="/imageedit_2_9588297617.png"
                    alt=""
                    class="dashboard__img"
                />
            </div>
            <div
                class="dashboard-detail col-3 d-flex justify-content-around m-2"
            >
                <div class="dashboard-infor">
                    <p class="item__name mb-1">Tài khoản freelancer</p>
                    <h3 class="item__quantity fw-bold">{{ freelancer }}</h3>
                </div>
                <img
                    src="/imageedit_3_5298534601.png"
                    alt=""
                    class="dashboard__img"
                />
            </div>
            <div
                class="dashboard-detail col-3 d-flex justify-content-around m-2"
            >
                <div class="dashboard-infor">
                    <p class="item__name mb-1">Tài khoản đơn vị dự án</p>
                    <h3 class="item__quantity fw-bold">{{ project }}</h3>
                </div>
                <img
                    src="/imageedit_5_9156385034.png"
                    alt=""
                    class="dashboard__img"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
export default {
    name: "DashBoard",
    data() {
        return {
            total: 0,
            leader: 0,
            freelancer: 0,
            project: 0,
        };
    },
    async created() {
        const token = localStorage.getItem("token");
        const response = await axios.get(
            `${config.domain}/admin/get-all-account`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const accounts = response.data.result;

        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].rule == "PROJECT") this.project++;
            else if (accounts[i].rule == "LEADER") this.leader++;
            else if (accounts[i].rule == "FREELANCER") this.freelancer++;
        }

        this.total = this.project + this.leader + this.freelancer;
    },
};
</script>

<style scoped>
.dashboard-detail {
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    border-radius: 10px;
}
.dashboard__img {
    width: 20%;
    height: 80%;
    align-self: center;
}
</style>
