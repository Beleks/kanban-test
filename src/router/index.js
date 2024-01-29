import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Board",
      redirect: { name: "Tasks" },
      component: () => import("../views/BoardView.vue"),
      children: [
        {
          path: "tasks",
          name: "Tasks",
          component: () => import("../views/TasksView.vue"),
        },
        {
          path: "tasks/:taskId",
          name: "Task",
          component: () => import("../views/TaskView.vue"),
        },
      ],
    },
  ],
});

export default router;
