<template>
  <div class="adviser-manage p-4">
    <div class="col-12 d-flex container">
      <TitleStructure :title="`Danh sách Freelancer`" class="col-6 me-4">
        <!-- <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png"
                    alt="Lọc sinh viên"
                    data-bs-toggle="modal"
                    data-bs-target="#FreelancerFilter"
                    class="filter-icon dashboard__img"
                /> -->
      </TitleStructure>
      <TitleStructure :title="`Tổng quan`" class="col-6 title-detail">
      </TitleStructure>
    </div>
    <div class="adviser-manage__content container">
      <div class="row">
        <div class="adviser-freelancer-list col-6">
          <div class="adviser-freelancer-item">
            <FreelancerItem
              v-for="(freelancer, index) in currentList"
              :key="index"
              :index="`id${index}`"
              :freelancer="freelancer"
              class="me-3"
            >
            </FreelancerItem>
          </div>
        </div>
        <div class="view-detail col-6 flex-grow-1">
          <Overview />
          <DetailFreelancer></DetailFreelancer>
        </div>
      </div>
    </div>
    <FreelancerFilter />
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";
import { mapGetters, mapActions } from "vuex";
import Overview from "@/components/Adviser/Manage/Overview.vue";
import DetailFreelancer from "@/components/Adviser/Manage/DetailFreelancer.vue";
import TitleStructure from "@/components/GlobalComponent/TitleStructure.vue";
import FreelancerFilter from "@/components/FreelancerFilter/FreelancerFilter.vue";
import FreelancerItem from "../../components/Adviser/Manage/FreelancerItem.vue";

export default {
  name: "AdviserManage",
  components: {
    Overview,
    DetailFreelancer,
    FreelancerFilter,
    TitleStructure,
    FreelancerItem,
  },
  computed: {
    ...mapGetters({ account: "getAccount", currentList: "getCurrentList" }),
  },
  methods: mapActions(["setAccount"]),

  async created() {
    //Tao lai account khi refresh
    await this.setAccount();

    const token = localStorage.getItem("token");

    // Lay danh sach lop <classManagement> cua giang vien!
    const response = await axios.get(
      `${config.domain}/adviser/get-class-list`,
      {
        headers: { Authorization: "Bearer " + token },
        params: { adviserId: this.account.id },
      }
    );
    const classList = response.data.result;

    //Lay ten lop tu danh sach lop cua giang vien!
    const domainName = [];
    classList.forEach((classManagement) => {
      if (!domainName.includes(classManagement.domainName)) {
        domainName.push(classManagement.domainName);
      }
    });
    this.$store.commit("SET_CLASS_NAME", domainName);

    //Lay danh sach sinh vien tu ten lop cua giang vien
    const freelancerList = [];
    for (let i = 0; i < domainName.length; ++i) {
      const response = await axios.get(
        `${config.domain}/adviser/get-freelancer-list`,
        {
          headers: { Authorization: "Bearer " + token },
          params: { domainName: domainName[i] },
        }
      );
      const tempt = response.data.result;
      freelancerList.push(...tempt);
    }

    this.$store.commit("SET_FREELANCER_LIST", freelancerList);
    this.$store.commit("SET_CURRENT_LIST", freelancerList);
  },
  mounted() {
    // Dong cac detail khi accordion khong mo.
    const accordion = document.querySelector(".accordion-collapse.show");
    if (!accordion) {
      this.$store.commit("CLOSE_DETAIL_FREELANCER");
    }
  },
};
</script>

<style scoped>
.adviser-freelancer-item {
  height: 420px;
  overflow-y: scroll;
}
.view-detail {
  width: 49%;
}
</style>
