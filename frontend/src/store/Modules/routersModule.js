const routersModule = {
  state: {
    projectRoutes: [
      { name: "Trang chủ", path: "/project/home" },
      {
        name: "Freelancer đăng ký dự án",
        path: "/project/freelancers-register",
      },
      {
        name: "Quản lý công việc",
        path: "/project/freelancers-training",
      },
    ],
    adviserRoutes: [
      { name: "Trang chủ", path: "/adviser/home" },
      { name: "Quản lý Freelancer", path: "/adviser/manage" },
    ],
    ministryRoutes: [
      { name: "Trang chủ", path: "/ministry/home" },
      {
        name: "Quản lý Adviser",
        path: "/ministry/adviser-management",
      },
      {
        name: "Quản lý đơn vị dự án",
        path: "/ministry/project-management",
      },
    ],
    adminRoutes: [
      { name: "Trang chủ", path: "/admin/home" },
      {
        name: "Quản lý tài khoản",
        path: "/admin/manage",
      },
    ],
    freelancerRoutes: [
      { name: "Trang chủ", path: "/freelancer/home" },
      { name: "Đăng ký dự án", path: "/freelancer/register" },
      { name: "Quản lý công việc", path: "/freelancer/manage/view-progress" },
    ],
  },
  getters: {
    getRouters(state) {
      return state;
    },
  },
};

export default routersModule;
