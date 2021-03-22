import Vue from 'vue';
import Router from 'vue-router';
import Intro from "@/components/Intro";
import Choice from "@/components/Choice";
import Survey from "@/components/Survey";
import Event from "@/components/Event";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/intro' },
    { path: '/intro', name: 'intro', component: Intro },
    { path: '/choice', name: 'choice', component: Choice },
    { path: '/survey/:month', name: 'survey', component: Survey },
    { path: '/event', name: 'event', component: Event },
  ]
});

export default router;