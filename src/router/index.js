import { createRouter, createWebHistory } from "vue-router";

import admin from "./admin";
import provider from "./provider";
import website from "./website";
import customer from "./customer";

const routes = [...admin, ...customer, ...provider, ...website];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
