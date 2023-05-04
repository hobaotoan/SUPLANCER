<template>
  <div class="view p-4 animate__animated animate__fadeIn">
    <div class="infor container">
      <div class="col-12 d-flex">
        <TitleStructure
          :title="`Thông tin cá nhân`"
          class="col-6 me-4"
        ></TitleStructure>
        <TitleStructure
          :title="`Thông tin đơn vị thực tập`"
          class="col-6 title-detail"
        ></TitleStructure>
      </div>
      <div class="row m-0 pt-3 pb-5 border-bottom justify-content-between">
        <InforFreelancer></InforFreelancer>
        <InforProject></InforProject>
      </div>
    </div>
    <InforInternship v-if="freelancer.projectId !== null" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InforInternship from "../../components/Adviser/ProgressAssess/InforInternship.vue";
import InforFreelancer from "../../components/GlobalComponent/InforFreelancer.vue";
import InforProject from "../../components/GlobalComponent/InforProject.vue";
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";

export default {
  name: "AdviserView",
  components: {
    InforInternship,
    InforProject,
    TitleStructure,
    InforFreelancer,
  },
  computed: {
    ...mapGetters({ freelancer: "getFreelancerInfor" }),
  },
  async created() {
    const freelancerId = this.$route.params.id;
    const rule = localStorage.getItem("rule").toLowerCase();
    const payload = {
      id: freelancerId,
      rule,
    };
    // Dua thong tin sinh vien vao Store!
    await this.$store.dispatch("setFreelancerInfor", payload);

    // Dua thong tin don vi thuc tap vao Store!
    await this.$store.dispatch("setProjectInfor", payload);

    // Dua thong tin tien do thuc tap vao Store!
    await this.$store.dispatch("setProgressInfor", payload);

    // Dua thong tin danh gia cua cong ty vao Store
    await this.$store.dispatch("setProjectAssess", payload);
  },
};
</script>

<style scoped>
.table-progress {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
