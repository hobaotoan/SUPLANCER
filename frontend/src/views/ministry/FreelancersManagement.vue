<template>
    <div>
        <LeaderDetail />
        <FreelancersList />
    </div>
</template>

<script>
import LeaderDetail from "../../components/Ministry/LeaderManagement/LeaderDetail.vue";
import FreelancersList from "../../components/Ministry/FreelancersManagement/FreelancersList.vue";
export default {
    name: "FreelancerManagement",
    components: { LeaderDetail, FreelancersList },
};
</script>

<style></style>
