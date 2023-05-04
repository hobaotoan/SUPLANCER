<template>
  <div>
    <div class="freelancer-list d-flex animate__fadeIn animate__animated">
      <div class="header-list m-0 p-2 pt-3 col-6" style="color: #2c542f">
        <div class="d-flex align-items-center">
          <h2 class="me-3 fw-bold">Danh sách Freelancer đang làm việc</h2>
          <!-- <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png"
                        alt="Lọc sinh viên"
                        data-bs-toggle="modal"
                        data-bs-target="#FreelancerFilter"
                        class="filter-icon"
                    /> -->
        </div>

        <div class="line mt-3 mb-2"></div>
      </div>
    </div>

    <table class="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Mã số</th>
          <th scope="col">Họ và tên</th>
          <th scope="col">Lớp</th>
          <th scope="col">Điện thoại</th>
          <th scope="col">Email</th>
        </tr>
      </thead>

      <tbody style="overflow-y: scroll">
        <tr v-for="(freelancer, index) in currentList" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ freelancer.username }}</td>
          <td>{{ freelancer.name }}</td>
          <td>{{ freelancer.domain }}</td>
          <td>{{ freelancer.phoneNumber }}</td>
          <td>{{ freelancer.email }}</td>
        </tr>
      </tbody>
    </table>
    <FreelancerFilter />
  </div>
</template>

<script>
import FreelancerFilter from "@/components/FreelancerFilter/FreelancerFilter.vue";
import axios from "axios";
import config from "@/config/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FreelancersList",
  components: { FreelancerFilter },
  computed: mapGetters({
    adviser: "getAdviserDetail",
    currentList: "getCurrentList",
  }),
  methods: mapActions(["setAdviserDetail"]),
  async created() {
    // get adviserId query
    const adviserId = this.$route.params.adviserId;

    const token = localStorage.getItem("token");

    // set adviser detail
    this.setAdviserDetail(adviserId);

    const res = await axios.get(
      `${config.domain}/ministry/get-freelancer-managed`,
      {
        params: {
          adviserId,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    this.$store.commit("SET_CLASS_NAME", res.data.classes);
    this.$store.commit("SET_FREELANCER_LIST", res.data.result);
    this.$store.commit("SET_CURRENT_LIST", res.data.result);
  },
};
</script>

<style></style>
