import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7875882d = () => interopDefault(import('../pages/sandbox.vue' /* webpackChunkName: "pages/sandbox" */))
const _138bc546 = () => interopDefault(import('../pages/content/about.vue' /* webpackChunkName: "pages/content/about" */))
const _fc2dc066 = () => interopDefault(import('../pages/content/contribute.vue' /* webpackChunkName: "pages/content/contribute" */))
const _266d10ee = () => interopDefault(import('../pages/content/kudos.vue' /* webpackChunkName: "pages/content/kudos" */))
const _63a8b960 = () => interopDefault(import('../pages/parse/_language/_wikipage.vue' /* webpackChunkName: "pages/parse/_language/_wikipage" */))
const _d5399f90 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/sandbox",
    component: _7875882d,
    name: "sandbox"
  }, {
    path: "/content/about",
    component: _138bc546,
    name: "content-about"
  }, {
    path: "/content/contribute",
    component: _fc2dc066,
    name: "content-contribute"
  }, {
    path: "/content/kudos",
    component: _266d10ee,
    name: "content-kudos"
  }, {
    path: "/parse/:language?/:wikipage?",
    component: _63a8b960,
    name: "parse-language-wikipage"
  }, {
    path: "/",
    component: _d5399f90,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
