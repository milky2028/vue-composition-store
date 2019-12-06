import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Thing from '../views/Thing.vue';
import { ref } from '@vue/composition-api';
import { Modules, Store } from '@/store/store';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/thing',
    name: 'thing',
    component: Thing
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter(to, from, next) {
      // @ts-ignore
      console.log(Store[Modules.thing1].thing1);
      if (Store[Modules.thing1].thing1.value) {
        return next()
      } else {
        return next('/')
      }
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
