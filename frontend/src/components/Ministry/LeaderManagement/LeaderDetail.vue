<template>
    <div class="leader-detail">
        <div
            class="information-detail position-relative border rounded-2 ms-2 py-4 row col-12 animate__fadeIn animate__animated"
        >
            <div
                class="col-5 d-flex justify-content-center"
                style="height: 180px; width: 200px"
            >
                <img
                    :src="leader.urlAvatar"
                    alt=""
                    style="height: 100%; width: 100%"
                    class="rounded-circle"
                />
            </div>
            <div class="col-7 flex-grow-1">
                <div class="col-12 my-1">
                    <strong>Họ tên giảng viên: </strong> {{ leader.name }}
                </div>
                <div class="col-12 my-1">
                    <strong>Mã số giảng viên: </strong> {{ leader.username }}
                </div>
                <div class="col-12 my-1">
                    <strong>Email: </strong> {{ leader.email }}
                </div>
                <div class="col-12 my-1">
                    <strong>Điện thoại: </strong> {{ leader.phoneNumber }}
                </div>
                <div class="col-12 my-1">
                    <strong>Quản lý lớp: </strong><br />
                    <span
                        v-for="(item, index) in leader.teamsManagement"
                        :key="index"
                        >{{ item.teamName }} <br
                    /></span>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "LeaderDetail",
    computed: mapGetters({ leader: "getLeaderDetail" }),
};
</script>

<style></style>
