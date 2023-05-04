<template>
  <div class="adviser-detail">
    <div
      class="information-detail position-relative border rounded-2 py-4 row col-12 animate__fadeIn animate__animated"
    >
      <button
        type="button"
        class="btn-close position-absolute"
        aria-label="Close"
        @click="closeDetail"
      ></button>
      <div
        class="col-5 d-flex justify-content-center"
        style="height: 180px; width: 200px"
      >
        <img
          :src="project.urlAvatar"
          alt=""
          style="height: 100%; width: 100%"
          class="rounded-circle border"
        />
      </div>
      <div class="col-7 flex-grow-1" style="min-height: 200px">
        <div class="col-12 my-1">
          <strong>Tên đơn vị: </strong> {{ project.name }}
        </div>
        <div class="col-12 my-1">
          <strong>Mã đơn vị: </strong> {{ project.username }}
        </div>
        <div class="col-12 my-1">
          <strong>Email: </strong> {{ project.email }}
        </div>
        <div class="col-12 my-1">
          <strong>Điện thoại: </strong> {{ project.phoneNumber }}
        </div>
        <div class="col-12 my-1">
          <strong>Địa chỉ: </strong> {{ project.address }}
        </div>
      </div>
      <div class="col-12 my-1">
        <strong>Giới thiệu: </strong> {{ project.message }}
      </div>
    </div>
    <div class="col-12"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AdviserDetail",
  methods: {
    ...mapMutations({
      closeDetail: "CLOSE_DETAIL",
    }),
  },
  computed: mapGetters({ project: "getProjectDetail" }),
};
</script>

<style></style>
