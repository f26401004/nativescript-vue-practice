import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import DialogPractice from '../components/DialogPractice';
import ActionBarPractice from '../components/ActionBarPractice';
import ComponentsPractice from '../components/ComponentsPractice';
import ListViewPractice from '../components/ListViewPractice';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/dialog',
      component: DialogPractice,
      meta: {
        title: 'Dialog-Practice',
      },
    },
    {
      path: '/actionbar',
      component: ActionBarPractice,
      meta: {
        title: 'ActionBar-Practice',
      },
    },
    {
      path: '/components',
      component: ComponentsPractice,
      meta: {
        title: 'Components-Practice',
      },
    },
    {
      path: '/listview',
      component: ListViewPractice,
      meta: {
        title: 'ListView-Practice',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
