<template>
  <div>
    <div
      class="p-4 animate__animated animate__fadeIn container"
      v-if="freelancer.projectId !== null"
    >
      <div class="col-12 d-flex">
        <TitleStructure
          :title="`Tên dự án làm việc`"
          class="col-6 me-4"
        ></TitleStructure>
        <TitleStructure
          :title="`Quản lý công việc`"
          class="col-6"
        ></TitleStructure>
      </div>
      <div>
        <div
          class="infor row m-0 pt-3 pb-5 border-bottom justify-content-between"
        >
          <InforProject></InforProject>
          <div
            class="manage-internship col-6 d-flex justify-content-center align-items-center mb-4 mx-auto"
          >
            <div class="col-3 me-5">
              <router-link
                to="/freelancer/manage/view-progress"
                class="router-link"
              >
                <button
                  type="button"
                  class="btn btn-progress"
                  @click="viewInforInternship($event)"
                >
                  <i class="bi bi-calendar-week fs-2 me-2"></i>
                  <span>Xem tiến độ công việc</span>
                </button>
              </router-link>
            </div>
            <div class="col-3 me-5">
              <router-link
                to="/freelancer/manage/view-assess-project"
                class="router-link"
              >
                <button
                  type="button"
                  class="btn btn-project"
                  @click="viewInforInternship($event)"
                >
                  <i class="bi bi-clipboard-check fs-2 me-2"></i>
                  <span>Xem đánh giá của đơn vị dự án</span>
                </button>
              </router-link>
            </div>
            <div class="col-3">
              <router-link
                to="/freelancer/manage/view-assess-adviser"
                class="router-link"
              >
                <button
                  type="button"
                  class="btn btn-adviser"
                  @click="viewInforInternship($event)"
                >
                  <i class="bi bi-person-video3 fs-2 me-2"></i>
                  <span>Xem đánh giá của Adviser</span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div class="mt-5 text-center no-info" v-else>
      <img
        class="mt-5"
        src="https://cdn-icons-png.flaticon.com/512/4076/4076389.png"
        alt=""
        style="width: 300px"
      />
      <h3 class="text-warning mt-4">Freelancer chưa tham gia dự án</h3>
    </div>
  </div>
</template>

<script>
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";
import InforProject from "../../components/GlobalComponent/InforProject.vue";
import { mapGetters } from "vuex";
export default {
  components: { TitleStructure, InforProject },

  computed: {
    ...mapGetters({ account: "getAccount", freelancer: "getFreelancerInfor" }),
  },

  methods: {
    clearDisabled() {
      const buttons = document.querySelectorAll(".manage-internship button");
      buttons.forEach((button) => {
        button.disabled = false;
      });
    },
    viewInforInternship(event) {
      this.clearDisabled();
      event.currentTarget.disabled = true;
    },
  },

  async created() {
    await this.$store.dispatch("setAccount");
    const rule = localStorage.getItem("rule").toLowerCase();
    const payload = { id: this.account.id, rule };

    // Dat cac thong tin thuc tap cua sinh vien vao Store de su dung.
    await this.$store.dispatch("setFreelancerInfor", payload);
    await this.$store.dispatch("setProjectInfor", payload);
    await this.$store.dispatch("setProgressInfor", payload);
    await this.$store.dispatch("setProjectAssess", payload);
    await this.$store.dispatch("setAdviserAssess", payload);
  },
  mounted() {
    const viewProgress = document.querySelector(".view-progress");
    const viewAssessProject = document.querySelector(".view-assess-project");
    const viewAssessAdviser = document.querySelector(".view-assess-adviser");
    this.clearDisabled();
    if (viewProgress) {
      const btnProgress = document.querySelector(".btn-progress");
      btnProgress.disabled = true;
    }
    if (viewAssessProject) {
      const btnProject = document.querySelector(".btn-project");
      btnProject.disabled = true;
    }
    if (viewAssessAdviser) {
      const btnAdviser = document.querySelector(".btn-adviser");
      btnAdviser.disabled = true;
    }
  },
};
</script>

<style scoped>
.router-link {
  cursor: default;
  text-decoration: none;
}

.btn {
  height: 90px;
  width: 180px;
  display: flex;
  align-items: center;
}
a {
  color: #95a800;
}
.btn:first-child:active {
  background-color: #95a800 !important;
}
</style>
