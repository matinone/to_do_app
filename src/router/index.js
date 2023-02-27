import { createRouter, createWebHistory } from "vue-router";

const TaskView = () => import("@/views/TaskView.vue");

const routes = [
  {
    name: "tasks",
    path: "/",
    component: TaskView
  },
  {
    path: "/tasks",
    redirect: { name: "tasks" }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
