<template>
    <div class="chart-account mt-4 animate__fadeIn animate__animated row">
        <TitleStructure
            :title="`Biểu đồ văn hóa làm việc`"
            class="col-12"
        ></TitleStructure>
        <img src="/Chart.png">
        <h6 class="fw-bolder col-12 text-center mt-3">
            Biểu đồ thể hiện văn hóa làm việc của SUPLANCER
        </h6>
    </div>
</template>

<script>
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";

export default {
    name: "LineChatAccount",
    components: { TitleStructure }}
</script>

<style></style>
