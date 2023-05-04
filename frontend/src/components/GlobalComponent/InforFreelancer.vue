<template>
  <div class="object-infor col-6 d-flex p-3 border rounded-4">
    <AvatarComponent :urlAvatar="freelancer.urlAvatar" class="col-5 me-4" />
    <div class="col-7 row flex-grow-1">
      <div class="col-8 my-1">
        <strong>MSSV: </strong> {{ freelancer.username }}
      </div>
      <div class="col-12 my-1">
        <strong>Họ và tên: </strong> {{ freelancer.name }}
      </div>
      <div class="col-12 my-1">
        <strong>Lớp: </strong> {{ freelancer.domain }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarComponent from "./AvatarComponent.vue";
export default {
  name: "InforFreelancer",
  components: { AvatarComponent },
  computed: {
    ...mapGetters({ freelancer: "getFreelancerInfor" }),
  },
};
</script>

<style scoped>
.object-infor {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  max-width: 49%;
}
</style>
