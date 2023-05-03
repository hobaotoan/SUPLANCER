<template>
    <div class="object-item accordion mb-3" :id="`accordion${index}`">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="`heading${index}`">
                <button
                    class="accordion-button collapsed p-3"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    aria-expanded="false"
                    :aria-controls="`collapse${index}`"
                >
                    <img
                        :src="freelancer.urlAvatar"
                        alt=""
                        class="me-2 rounded-circle"
                        style="width: 40px; height: 40px"
                    />
                    <!-- <span class="me-2">{{ freelancer.username }}</span> -->
                    <span>{{ freelancer.name }}</span>
                </button>
            </h2>
            <div
                :id="`collapse${index}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`heading${index}`"
                :data-bs-parent="`#accordion${index}`"
            >
                <div class="accordion-body row">
                    <div class="col-4">
                        <strong>Tên Domain: </strong> {{ freelancer.team }}
                    </div>
                    <div class="col-12">
                        <strong>Tên đơn vị dự án: </strong>
                        {{ freelancer.projectName }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-4">
                        <button
                            type="button"
                            class="btn btn-outline-warning p-2"
                            style="font-size: 15px"
                            @click="showDetail(freelancer)"
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FreelancerItem",
    props: ["freelancer", "index"],
    methods: {
        showDetail(freelancer) {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Thông tin chi tiết";
            this.$store.commit("SHOW_DETAIL_FREELANCER");
            this.$store.commit("SET_FREELANCER_ACTIVE", freelancer);
        },
    },
};
</script>

<style scoped>
</style>
