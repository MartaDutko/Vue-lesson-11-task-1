import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import DriversView from "@/views/DriversView.vue";
import BusesView from "@/views/BusesView.vue";
import AppointmentView from "@/views/AppointmentView.vue";
import ContactsView from "@/views/ContactsView.vue";
import BusConfig from "@/views/BusConfig.vue";
import DriverConfig from "@/views/DriverConfig.vue";
const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: DriversView,
  },
  {
    path: "/drivers/driverConfig/:id?",
    name: "driverConfig",
    component:DriverConfig ,
  },
  {
    path: "/buses",
    name: "buses",
    component: BusesView,
  },
  {
    path: "/appointment",
    name: "appointment",
    component: AppointmentView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/buses/busConfig/:id?",
    name: "busConfig",
    component: BusConfig,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
