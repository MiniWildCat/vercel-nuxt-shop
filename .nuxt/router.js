import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d0d3dcf = () => interopDefault(import('..\\pages\\demo\\index.vue' /* webpackChunkName: "pages/demo/index" */))
const _1373fd3b = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _31bd0ee7 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _5980c1e2 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _2ae1b87f = () => interopDefault(import('..\\pages\\demo\\one\\index.vue' /* webpackChunkName: "pages/demo/one/index" */))
const _1042749b = () => interopDefault(import('..\\pages\\demo\\three.vue' /* webpackChunkName: "pages/demo/three" */))
const _6affc0ee = () => interopDefault(import('..\\pages\\demo\\two.vue' /* webpackChunkName: "pages/demo/two" */))
const _cf12df66 = () => interopDefault(import('..\\pages\\demo2\\list.vue' /* webpackChunkName: "pages/demo2/list" */))
const _767322b5 = () => interopDefault(import('..\\pages\\demo2\\list2.vue' /* webpackChunkName: "pages/demo2/list2" */))
const _76813a36 = () => interopDefault(import('..\\pages\\demo2\\list3.vue' /* webpackChunkName: "pages/demo2/list3" */))
const _768f51b7 = () => interopDefault(import('..\\pages\\demo2\\list4.vue' /* webpackChunkName: "pages/demo2/list4" */))
const _194d7112 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4031cea7 = () => interopDefault(import('..\\pages\\demo\\one\\_id.vue' /* webpackChunkName: "pages/demo/one/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/demo",
    component: _3d0d3dcf,
    name: "demo"
  }, {
    path: "/user",
    component: _1373fd3b,
    children: [{
      path: "",
      component: _31bd0ee7,
      name: "user"
    }, {
      path: ":id",
      component: _5980c1e2,
      name: "user-id"
    }]
  }, {
    path: "/demo/one",
    component: _2ae1b87f,
    name: "demo-one"
  }, {
    path: "/demo/three",
    component: _1042749b,
    name: "demo-three"
  }, {
    path: "/demo/two",
    component: _6affc0ee,
    name: "demo-two"
  }, {
    path: "/demo2/list",
    component: _cf12df66,
    name: "demo2-list"
  }, {
    path: "/demo2/list2",
    component: _767322b5,
    name: "demo2-list2"
  }, {
    path: "/demo2/list3",
    component: _76813a36,
    name: "demo2-list3"
  }, {
    path: "/demo2/list4",
    component: _768f51b7,
    name: "demo2-list4"
  }, {
    path: "/",
    component: _194d7112,
    name: "index"
  }, {
    path: "/demo/one/:id",
    component: _4031cea7,
    name: "demo-one-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
