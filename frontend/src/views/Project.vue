<template>
    <div class="project">
        <Header />
        <router-view class="p-3"></router-view>
        <InforFreelancer></InforFreelancer>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import InforFreelancer from "../components/Freelancer/Infor/InforUser.vue";

export default {
    name: "ProjectComponent",
    components: { Header, InforFreelancer },
};
</script>

<style></style>
