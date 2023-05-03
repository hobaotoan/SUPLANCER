<template>
    <div class="assgn-form">
        <!-- Modal -->
        <div
            class="modal fade"
            id="assignModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1
                            class="modal-title fs-4 fw-bold"
                            id="exampleModalLabel"
                        >
                            Phân công Adviser
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="name" class="form-label fw-bold"
                                >Tên Adviser</label
                            >
                            <input
                                type="email"
                                class="form-control"
                                id="name"
                                disabled
                                :placeholder="leader.name"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label fw-bold"
                                >Mã số Adviser</label
                            >
                            <input
                                type="email"
                                class="form-control"
                                id="username"
                                disabled
                                :placeholder="leader.username"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label fw-bold"
                                >Domain phân công</label
                            >
                            <select
                                class="form-select"
                                aria-label="select example"
                                v-model="teamName"
                            >
                                <option disabled value="">Tên Domain</option>
                                <option
                                    v-for="teamName in teamsName"
                                    :key="teamName"
                                    :value="teamName"
                                >
                                    {{ teamName }}
                                </option>
                            </select>
                        </div>
                        <!-- <div class="mb-3">
                            <label for="name" class="form-label fw-bold"
                                >Học kỳ</label
                            >
                            <select
                                class="form-select"
                                aria-label="select example"
                                v-model="semester"
                            >
                                <option disabled value="">Học kỳ</option>

                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">Hè</option>
                            </select>
                        </div> -->
                        <!-- <div class="mb-3">
                            <label for="name" class="form-label fw-bold"
                                >Niên khóa</label
                            >
                            <select
                                class="form-select"
                                aria-label="select example"
                                v-model="schoolYear"
                            >
                                <option disabled value="">Niên khóa</option>

                                <option
                                    v-for="year in schoolYears"
                                    :key="year"
                                    :value="year"
                                >
                                    {{ year }}
                                </option>
                            </select>
                        </div> -->
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
                            @click="handleAssign"
                            :disabled="!teamName"
                        >
                            Phân công
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from "@/config/index.js";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "AssignForm",
    data() {
        return {
            teamName: "",
            // semester: "",
            // schoolYear: "",
            teamsName: [],
            // schoolYears: [],
        };
    },
    async created() {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(
                `${config.domain}/ministry/get-infor-assign`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            this.teamsName = res.data.result.teamsName;
            // this.schoolYears = res.data.result.schoolYears;
        } catch (error) {
            console.log(error);
        }
    },
    computed: mapGetters({ leader: "getLeaderDetail" }),
    methods: {
        async handleAssign() {
            const token = localStorage.getItem("token");
            const res = await axios.post(
                `${config.domain}/ministry/assign-leader`,
                {
                    leaderId: this.leader._id,
                    teamName: this.teamName,
                    // semester: this.semester,
                    // schoolYear: this.schoolYear,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            this.$store.dispatch("setToast", {
                isSuccess: res.data.status,
                message: res.data.message,
            });
        },
    },
};
</script>

<style></style>
