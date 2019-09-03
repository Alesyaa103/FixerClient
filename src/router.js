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
import search from './personal/views/search.vue';
import profile from './personal/views/profile.vue';
import resultWorkers from './personal/views/resultWorkers.vue';
import resultMap from './personal/views/resultMap.vue';
import admin from './personal/views/admin.vue';

const routes = [
  {
    path: '/auth',
    component: auth,
    children: [
      {
        path: 'signin',
        component: signIn,
        meta: { guest: true },
      },
      {
        path: 'signup1',
        component: signUp1,
        meta: { guest: true },
      },
      {
        path: 'signup2',
        component: signUp2,
        meta: { guest: true },
      },
      {
        path: 'signup3',
        component: signUp3,
        meta: { guest: true },
      },
      {
        path: 'password1',
        component: password1,
        meta: { guest: true },
      },
      {
        path: 'password2',
        component: password2,
        meta: { guest: true },
      },
      {
        path: 'password3',
        component: password3,
        meta: { guest: true },
      },
    ],
  },
  {
    path: '/personal',
    component: personal,
    children: [
      {
        path: 'chat',
        component: chat,
        meta: { auth: true },
      },
      {
        path: 'search',
        component: search,
        meta: { auth: true },
        children: [
          {
            path: 'resultWorkers',
            component: resultWorkers,
          },
          {
            path: 'resultMap',
            copmonent: resultMap,
          },
        ],
      },
      {
        path: 'profile',
        component: profile,
        meta: { auth: true },
      },
      {
        path: 'admin',
        component: admin,
        meta: { auth: true, admin: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.auth)) {
//     if (localStorage.getItem('token') == null) {
//       next({
//         path: 'auth/signin',
//         params: { nextUrl: to.fullPath }
//       })
//     } 
//   } else if(to.matched.some(record => record.meta.guest)) {
//     if(localStorage.getItem('token') == null){
//       next()
//     }
//     else{
//       next({
//         path: 'personal/profile',
//         params: { nextUrl: to.fullPath }
//       })
//     }
//   }  else {
//     next() 
//   }
// })

export default router;
