import { createRouter, createWebHistory } from "vue-router";
import guardRouter from "./guard-router.js";

// 1. Define route components.
import Home from "../views/Home.vue";
import Freelancer from "../views/Freelancer";
import Leader from "../views/Leader";
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

//Leader router
import LeaderManage from "../views/leader/LeaderManage.vue";
import LeaderView from "../views/leader/LeaderView.vue";
import LeaderAssess from "../components/Leader/ProgressAssess/LeaderAssess.vue";
import ViewProgress from "../components/GlobalComponent/ViewProgress.vue";

// Ministry router
import LeaderManagement from "../views/ministry/LeaderManagement.vue";
import ProjectManagement from "../views/ministry/ProjectManagement.vue";
import FreelancersManagement from "../views/ministry/FreelancersManagement.vue";

//Freelancer router
import FreelancerRegister from "../views/freelancer/FreelancerRegister.vue";
import FreelancerManage from "../views/freelancer/FreelancerManage.vue";
import UpdateInfor from "../views/UpdateInfor.vue";
import ViewAssessProject from "../components/GlobalComponent/ViewAssessProject.vue";
import ViewAssessLeader from "../components/Freelancer/ManageInternship/ViewAssessLeader.vue";

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
        path: "/leader",
        component: Leader,
        children: [
            { path: "/leader/home", component: HomePage },
            { path: "/leader/manage", component: LeaderManage },
            {
                path: "/leader/view",
                component: LeaderView,
                children: [
                    {
                        path: "/leader/view/progress/:id",
                        component: ViewProgress,
                    },
                    {
                        path: "/leader/view/project-assess/:id",
                        component: ViewAssessProject,
                    },
                    {
                        path: "/leader/view/assess-freelancer/:id",
                        component: LeaderAssess,
                    },
                ],
            },
            {
                path: "/leader/update-infor/:status",
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
                path: "/ministry/leader-management",
                component: LeaderManagement,
            },
            {
                path: "/ministry/leader-management/:leaderId",
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
                        path: "/freelancer/manage/view-assess-leader",
                        component: ViewAssessLeader,
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
