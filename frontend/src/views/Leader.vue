<template>
    <div class="leader w-100 h-100 row m-0">
        <Header class="p-0" />
        <router-view></router-view>
        <InforFreelancer></InforFreelancer>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import InforFreelancer from "../components/Freelancer/Infor/InforUser.vue";

export default {
    name: "LeaderComponent",
    components: { Header, InforFreelancer },
};
</script>

<style scoped></style>
