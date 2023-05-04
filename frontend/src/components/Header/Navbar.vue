<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="!isLogin">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/register"
              >Đăng ký</router-link
            >
          </li>
          <li
            v-for="router in routers"
            v-else
            class="nav-item"
            :key="router.path"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item py-1 ms-3">
                <router-link
                  class="text-decoration-none ms-3 fw-medium text-black"
                  aria-current="page"
                  :to="router.path"
                  >{{ router.name }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavbarComponent",
  data() {
    return {
      rule: "",
    };
  },
  computed: {
    ...mapGetters({
      isLogin: "getIsLogin",
      getRouters: "getRouters",
    }),
    ...mapMutations({ login: "LOGIN" }),
    routers() {
      if (this.rule == "PROJECT") {
        return this.getRouters.projectRoutes;
      } else if (this.rule == "ADVISER") {
        return this.getRouters.adviserRoutes;
      } else if (this.rule == "MINISTRY") {
        return this.getRouters.ministryRoutes;
      } else if (this.rule == "ADMIN") {
        return this.getRouters.adminRoutes;
      } else if (this.rule == "FREELANCER") {
        return this.getRouters.freelancerRoutes;
      }
      return "";
    },
  },
  created() {
    const rule = localStorage.getItem("rule");

    this.rule = rule;
    if (rule) {
      this.login;
    }
  },
};
</script>

<style scoped>
.navbar {
  /* background-color: #3a454b !important; */
}

.active-link {
  color: #2c542f !important;
}
</style>
