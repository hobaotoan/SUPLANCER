<template>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#flush-collapse${index}`"
          aria-expanded="false"
          :aria-controls="`flush - collapse${index}`"
        >
          <img
            :src="project.urlAvatar"
            alt=""
            class="me-2 rounded-circle"
            style="width: 35px; height: 35px"
          />{{ project.name }}
        </button>
      </h2>
      <div
        :id="`flush-collapse${index}`"
        class="accordion-collapse collapse"
        :aria-labelledby="`flush-heading${index}`"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body row">
          <div class="col-6">
            <strong>Tên đơn vị: </strong> {{ project.name }}
          </div>
          <div class="col-6"><strong>Email: </strong> {{ project.email }}</div>
          <div class="col-6">
            <strong>Điện thoại: </strong> {{ project.phoneNumber }}
          </div>

          <div class="col-12 d-flex justify-content-center mt-3">
            <button
              type="button"
              class="btn btn-outline-warning p-2"
              style="font-size: 15px"
              @click="handleSetDetail"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AdviserItem",
  methods: {
    ...mapMutations({
      showDetail: "SHOW_DETAIL",
    }),
    handleSetDetail() {
      this.showDetail();
      this.$store.commit("SET_PROJECT_DETAIL", this.project);
    },
  },
  props: ["index", "project"],
};
</script>

<style></style>
