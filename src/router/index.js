import Vue from 'vue';
import Router from 'vue-router';
import Intro from "@/components/Intro";
import Choice from "@/components/Choice";
import Survey from "@/components/Survey";
import Event from "@/components/Event";
import Result4 from "@/components/Result4";
import Result7 from "@/components/Result7";
import Result8 from "@/components/Result8";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/intro' },
    { path: '/intro', name: 'intro', component: Intro },
    { path: '/choice', name: 'choice', component: Choice },
    { path: '/survey/:month', name: 'survey', component: Survey },
    { path: '/event/:month', name: 'event', component: Event },
    { path: '/result/202104', name: 'result', component: Result4 },
    { path: '/result/202107', name: 'result', component: Result7 },
    { path: '/result/202108', name: 'result', component: Result8 },
  ]
});

export default router;