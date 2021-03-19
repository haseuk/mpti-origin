import Vue from 'vue';
import Router from 'vue-router';
import Intro from "@/components/Intro";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/intro' },
    { path: '/intro', name: 'intro', component: Intro },
  ]
});

export default router;