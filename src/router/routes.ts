import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/Index.vue') }]
  // },
  {
    path: '/',
    component: () => import('layouts/layoutPortafolio.vue'),
    children: [
      { path: '', component: () => import('pages/principal.vue') },
      { path: 'projectGolan', component: () => import('src/pages/projectGolang/projectoGolang.vue') }
      // { path: 'busqueda', component: () => import('pages/projectGolang/busqueda.vue') },
      // { path: 'alta', component: () => import('pages/projectGolang/alta.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
