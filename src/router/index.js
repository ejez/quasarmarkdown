import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

import { scrollToElement } from 'src/utils/scroll'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        // scrolling to an anchor is buggy with vue-router, so we do it with the
        // following instead
        scrollToElement({ el: to.hash })
        return false
      }
      // scroll to previous position if any (if not scroll to top)
      return savedPosition || { x: 0, y: 0 }
    },

    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
