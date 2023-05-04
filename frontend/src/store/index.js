import { createStore } from "vuex";
import adviserModule from "./Modules/adviser-module/index.js";
import freelancerModule from "./Modules/freelancer-module/index.js";
import authModule from "./Modules/authModule.js";
import routersModule from "./Modules/routersModule";
import projectModule from "./Modules/project-module/index.js";
import modalModule from "./Modules/modalModel.js";
import toastModule from "./Modules/toastModule.js";
import accountModule from "./Modules/account.js";

import adminModule from "./Modules/admin-module";
import ministryModule from "./Modules/ministry-module";

// Create a new store instance.
const store = createStore({
  modules: {
    adviserModule,
    freelancerModule,
    authModule,
    routersModule,
    projectModule,
    modalModule,
    toastModule,
    accountModule,
    adminModule,
    ministryModule,
  },
});

export default store;
