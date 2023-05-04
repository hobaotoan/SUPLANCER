<template>
  <div class="adviser-detail">
    <div
      class="information-detail position-relative border rounded-2 ms-2 py-4 row col-12 animate__fadeIn animate__animated"
    >
      <div
        class="col-5 d-flex justify-content-center"
        style="height: 180px; width: 200px"
      >
        <img
          :src="adviser.urlAvatar"
          alt=""
          style="height: 100%; width: 100%"
          class="rounded-circle"
        />
      </div>
      <div class="col-7 flex-grow-1">
        <div class="col-12 my-1">
          <strong>Họ tên Adviser: </strong> {{ adviser.name }}
        </div>
        <div class="col-12 my-1">
          <strong>Mã số Adviser: </strong> {{ adviser.username }}
        </div>
        <div class="col-12 my-1">
          <strong>Email: </strong> {{ adviser.email }}
        </div>
        <div class="col-12 my-1">
          <strong>Điện thoại: </strong> {{ adviser.phoneNumber }}
        </div>
        <div class="col-12 my-1">
          <strong>Quản lý Domain: </strong>
          <span v-for="(item, index) in adviser.domainsManagement" :key="index"
            >{{ item.domainName }} <br
          /></span>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AdviserDetail",
  computed: mapGetters({ adviser: "getAdviserDetail" }),
};
</script>

<style></style>
