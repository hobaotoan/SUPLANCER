<template>
  <div>
    <AdviserDetail />
    <FreelancersList />
  </div>
</template>

<script>
import AdviserDetail from "../../components/Ministry/AdviserManagement/AdviserDetail.vue";
import FreelancersList from "../../components/Ministry/FreelancersManagement/FreelancersList.vue";
export default {
  name: "FreelancerManagement",
  components: { AdviserDetail, FreelancersList },
};
</script>

<style></style>
