<template>
    <div
        class="statistics d-flex flex-column text-center mt-5 animate__fadeIn animate__animated"
        v-if="!showProject"
    >
        <div>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1376/1376203.png"
                style="width: 200px"
            />
        </div>
        <div class="mt-3">
            Hiện đang có {{ projectList.length }} đơn vị dự án.
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "OverviewComponent",
    computed: {
        ...mapGetters({
            showProject: "getShowProject",
            projectList: "getProjectList",
        }),
    },
};
</script>

<style></style>
