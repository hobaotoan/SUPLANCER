<template>
    <div class="training-detail">
        <div class="training-detail-freelancer">
            <div
                class="information-detail position-relative border rounded-2 p-3 py-4 row col-12 animate__fadeIn animate__animated"
            >
                <button
                    type="button"
                    class="btn-close position-absolute"
                    aria-label="Close"
                    @click="closeDetail"
                ></button>
                <div
                    class="col-5 d-flex justify-content-center"
                    style="height: 180px; width: 200px"
                >
                    <img
                        :src="freelancer.urlAvatar"
                        style="height: 100%; width: 100%"
                        class="rounded-circle"
                    />
                </div>
                <div class="col-7 flex-grow-1" style="min-height: 200px">
                    <div class="col-12 my-1">
                        <strong>MSSV: </strong> {{ freelancer.username }}
                    </div>
                    <div class="col-12 my-1">
                        <strong>Họ và tên: </strong> {{ freelancer.name }}
                    </div>
                    <div class="col-12 my-1">
                        <strong>Email: </strong> {{ freelancer.email }}
                    </div>
                    <div class="col-12 my-1">
                        <strong>Số điện thoại: </strong>
                        {{ freelancer.phoneNumber }}
                    </div>

                    <div class="col-12 my-1">
                        <strong>Tiến độ: </strong>
                        <div class="progress w-100 mt-2">
                            <div
                                :class="
                                    freelancer.progress
                                        ? ' bg-success text-light d-flex justify-content-center align-items-center'
                                        : ' d-flex justify-content-center align-items-center'
                                "
                                :style="`width: ${freelancer.progress || 100}%`"
                            >
                                {{
                                    `${
                                        freelancer.progress
                                            ? freelancer.progress.toFixed()
                                            : 0
                                    }%`
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-around">
                    <router-link
                        :to="`/project/detail-task/${freelancer.id}`"
                        class="btn btn-outline-warning d-flex align-items-center"
                    >
                        Quản lý công việc
                    </router-link>
                </div>
            </div>
            <div class="col-12"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "TrainingDetail",

    computed: {
        ...mapGetters({
            freelancer: "getFreelancerTrainingDetail",
        }),
    },
};
</script>

<style scoped>
.information-detail {
    min-height: 300px;
}

.btn-close {
    top: 10px;
    right: 10px;
}
</style>
