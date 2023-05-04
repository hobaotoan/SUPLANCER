import { createRouter, createWebHistory } from "vue-router";
import guardRouter from "./guard-router.js";

// 1. Define route components.
import Home from "../views/Home.vue";
import Freelancer from "../views/Freelancer";
import Adviser from "../views/Adviser";
import Ministry from "../views/Ministry";
import Project from "../views/Project";
import Login from "../views/Login.vue";
// import Register from "../views/Register.vue";
import Error from "../views/Error.vue";
import HomePage from "../components/GlobalComponent/HomePage.vue";

// Project router
import FreelancersRegister from "../views/project/FreelancersRegister.vue";
import FreelancersTraining from "../views/project/FreelancersTraining.vue";
import TaskDetail from "../views/project/TaskDetail.vue";
import UpdateInforProject from "../components/Project/UpdateInfor.vue";

//Adviser router
import AdviserManage from "../views/adviser/AdviserManage.vue";
import AdviserView from "../views/adviser/AdviserView.vue";
import AdviserAssess from "../components/Adviser/ProgressAssess/AdviserAssess.vue";
import ViewProgress from "../components/GlobalComponent/ViewProgress.vue";

// Ministry router
import AdviserManagement from "../views/ministry/AdviserManagement.vue";
import ProjectManagement from "../views/ministry/ProjectManagement.vue";
import FreelancersManagement from "../views/ministry/FreelancersManagement.vue";

//Freelancer router
import FreelancerRegister from "../views/freelancer/FreelancerRegister.vue";
import FreelancerManage from "../views/freelancer/FreelancerManage.vue";
import UpdateInfor from "../views/UpdateInfor.vue";
import ViewAssessProject from "../components/GlobalComponent/ViewAssessProject.vue";
import ViewAssessAdviser from "../components/Freelancer/ManageInternship/ViewAssessAdviser.vue";

// Admin router
import Admin from "../views/Admin";
import AdminHome from "../views/admin/AdminHome.vue";
import AdminManage from "../views/admin/AdminManage.vue";
// 2. Define some routes

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  // { path: "/register", component: Register },
  { path: "/freelancer", component: Freelancer },
  { path: "/error", component: Error },

  {
    path: "/admin",
    component: Admin,
    children: [
      { path: "/admin/home", component: AdminHome },
      { path: "/admin/manage", component: AdminManage },
    ],
  },
  {
    path: "/adviser",
    component: Adviser,
    children: [
      { path: "/adviser/home", component: HomePage },
      { path: "/adviser/manage", component: AdviserManage },
      {
        path: "/adviser/view",
        component: AdviserView,
        children: [
          {
            path: "/adviser/view/progress/:id",
            component: ViewProgress,
          },
          {
            path: "/adviser/view/project-assess/:id",
            component: ViewAssessProject,
          },
          {
            path: "/adviser/view/assess-freelancer/:id",
            component: AdviserAssess,
          },
        ],
      },
      {
        path: "/adviser/update-infor/:status",
        component: UpdateInfor,
      },
    ],
  },
  {
    path: "/project",
    component: Project,
    children: [
      { path: "/project/home", component: HomePage },
      { path: "/project/freelancers-register", component: FreelancersRegister },
      { path: "/project/detail-task/:freelancerId", component: TaskDetail },
      { path: "/project/freelancers-training", component: FreelancersTraining },
      {
        path: "/project/update-infor/:status",
        component: UpdateInforProject,
      },
    ],
  },
  {
    path: "/ministry",
    component: Ministry,
    children: [
      { path: "/ministry/home", component: HomePage },
      {
        path: "/ministry/adviser-management",
        component: AdviserManagement,
      },
      {
        path: "/ministry/adviser-management/:adviserId",
        component: FreelancersManagement,
      },
      {
        path: "/ministry/project-management",
        component: ProjectManagement,
      },
    ],
  },

  {
    path: "/freelancer",
    component: Freelancer,
    children: [
      { path: "/freelancer/home", component: HomePage },
      { path: "/freelancer/register", component: FreelancerRegister },
      {
        path: "/freelancer/manage",
        component: FreelancerManage,
        children: [
          {
            path: "/freelancer/manage/view-progress",
            component: ViewProgress,
          },
          {
            path: "/freelancer/manage/view-assess-project",
            component: ViewAssessProject,
          },
          {
            path: "/freelancer/manage/view-assess-adviser",
            component: ViewAssessAdviser,
          },
        ],
      },
      {
        path: "/freelancer/update-infor/:status",
        component: UpdateInfor,
      },
    ],
  },
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

guardRouter(router);

export default router;
