import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _618de49a = () => interopDefault(import('..\\pages\\clients\\index.vue' /* webpackChunkName: "pages/clients/index" */))
const _0d9b1875 = () => interopDefault(import('..\\pages\\coupons\\index.vue' /* webpackChunkName: "pages/coupons/index" */))
const _69dac212 = () => interopDefault(import('..\\pages\\directories\\index.vue' /* webpackChunkName: "pages/directories/index" */))
const _8aa35ace = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _517c9fba = () => interopDefault(import('..\\pages\\logs\\index.vue' /* webpackChunkName: "pages/logs/index" */))
const _e4ec344e = () => interopDefault(import('..\\pages\\main\\index.vue' /* webpackChunkName: "pages/main/index" */))
const _4350b3c2 = () => interopDefault(import('..\\pages\\organization\\index.vue' /* webpackChunkName: "pages/organization/index" */))
const _33091efa = () => interopDefault(import('..\\pages\\reports\\index.vue' /* webpackChunkName: "pages/reports/index" */))
const _d764b310 = () => interopDefault(import('..\\pages\\resetpassword\\index.vue' /* webpackChunkName: "pages/resetpassword/index" */))
const _b1b56828 = () => interopDefault(import('..\\pages\\screening\\index.vue' /* webpackChunkName: "pages/screening/index" */))
const _16afe7e4 = () => interopDefault(import('..\\pages\\sendemail\\index.vue' /* webpackChunkName: "pages/sendemail/index" */))
const _3f3ef5a2 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _4cadfab2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/clients",
    component: _618de49a,
    name: "clients"
  }, {
    path: "/coupons",
    component: _0d9b1875,
    name: "coupons"
  }, {
    path: "/directories",
    component: _69dac212,
    name: "directories"
  }, {
    path: "/login",
    component: _8aa35ace,
    name: "login"
  }, {
    path: "/logs",
    component: _517c9fba,
    name: "logs"
  }, {
    path: "/main",
    component: _e4ec344e,
    name: "main"
  }, {
    path: "/organization",
    component: _4350b3c2,
    name: "organization"
  }, {
    path: "/reports",
    component: _33091efa,
    name: "reports"
  }, {
    path: "/resetpassword",
    component: _d764b310,
    name: "resetpassword"
  }, {
    path: "/screening",
    component: _b1b56828,
    name: "screening"
  }, {
    path: "/sendemail",
    component: _16afe7e4,
    name: "sendemail"
  }, {
    path: "/settings",
    component: _3f3ef5a2,
    name: "settings"
  }, {
    path: "/",
    component: _4cadfab2,
    name: "index"
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
