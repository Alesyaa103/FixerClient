import VueRouter from 'vue-router';
import auth from './auth/auth.vue';
import personal from './personal/personal.vue';
import signIn from './auth/views/signIn.vue';
import signUp1 from './auth/views/signUp1.vue';
import signUp2 from './auth/views/signUp2.vue';
import signUp3 from './auth/views/signUp3.vue';
import password1 from './auth/views/password1.vue';
import password2 from './auth/views/password2.vue';
import password3 from './auth/views/password3.vue';
import chat from './personal/views/chat.vue';
import search from './personal/views/search/search.vue';
import profile from './personal/views/profile.vue';
import admin from './personal/views/admin.vue';

const routes = [
  {
    path: '/auth',
    component: auth,
    beforeEnter: (to, from, next) => {
      if ((localStorage.getItem('token'))) {
        next({
          path: 'personal/profile',
        });
      } else {
        next();
      }
    },
    children: [
      {
        path: 'signin',
        component: signIn,
      },
      {
        path: 'signup1',
        component: signUp1,
      },
      {
        path: 'signup2',
        component: signUp2,
      },
      {
        path: 'signup3',
        component: signUp3,
      },
      {
        path: 'password1',
        component: password1,
      },
      {
        path: 'password2',
        component: password2,
      },
      {
        path: 'password3',
        component: password3,
      },
    ],
  },
  {
    path: '/personal',
    component: personal,
    beforeEnter: (to, from, next) => {
      if (!(localStorage.getItem('token'))) {
        next({
          path: 'auth/signin',
        });
      } else {
        next();
      }
    },
    children: [
      {
        path: 'chat',
        component: chat,
      },
      {
        path: 'search',
        component: search,
      },
      {
        path: 'profile',
        component: profile,
      },
      {
        path: 'admin',
        component: admin,
        meta: { admin: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
