import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "Tasks" },
    },
    {
      path: "/tasks",
      name: "Tasks",
      component: () => import("../views/TasksView.vue"),
    },
  ],
});

export default router;
