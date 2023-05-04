<template>
  <div class="px-5">
    <div class="freelancer-register px-3">
      <div class="row animate__fadeIn animate__animated p-5">
        <div class="col-12 d-flex">
          <TitleStructure
            :title="`Danh sách đơn vị dự án`"
            class="col-6"
          ></TitleStructure>
          <TitleStructure
            :title="`Tổng quan`"
            class="col-6 title-detail"
          ></TitleStructure>
        </div>
        <div class="project__list col-6">
          <ProjectItem
            v-for="(project, index) in projectList"
            :key="index"
            :index="index"
            :project="project"
          ></ProjectItem>
        </div>
        <div class="col-6">
          <DetailProject />
          <Overview />
        </div>
      </div>
      <SendRegister />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectItem from "../../components/Freelancer/RegisterProject/ProjectItem.vue";
import DetailProject from "@/components/Freelancer/RegisterProject/DetailProject.vue";
import SendRegister from "@/components/Freelancer/RegisterProject/SendRegister.vue";
import Overview from "@/components/Freelancer/RegisterProject/Overview.vue";
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";

export default {
  name: "FreelancerRegister",

  components: {
    ProjectItem,
    DetailProject,
    SendRegister,
    Overview,
    TitleStructure,
  },

  computed: {
    ...mapGetters({ projectList: "getProjectList", account: "getAccount" }),
  },

  async created() {
    await this.$store.dispatch("setAccount");
    const rule = localStorage.getItem("rule").toLowerCase();

    //Freelancer va Adviser deu dung chung Store voi cac action, action goi api oi duong dan khac nha.
    //Dung rule de truyen vao duong dan cho tung doi tuong goi toi api do.
    const payload = { id: this.account.id, rule };

    await this.$store.dispatch("setProjectList");
    await this.$store.dispatch("setFreelancerInfor", payload);
    await this.$store.dispatch("setProjectInfor", payload);
  },

  //Close detail project when all of accordions are not shown
  mounted() {
    const accordionShow = document.querySelector(".accordion-collapse.show");
    if (!accordionShow) {
      this.closeDetail();
    }
  },
  methods: {
    showDetail() {
      const headerDetail = document.querySelector(".title-detail .label");
      headerDetail.innerText = "Thông tin chi tiết";
      this.$store.commit("SHOW_PROJECT");
    },

    closeDetail() {
      const headerDetail = document.querySelector(".title-detail .label");
      headerDetail.innerText = "Tổng quan";
      this.$store.commit("CLOSE_PROJECT");
    },
  },
};
</script>

<style scoped>
.project__list {
  width: 49%;
  height: 400px;
  overflow-y: scroll;
}
</style>
