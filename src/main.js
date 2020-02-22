// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import routes from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
var router = new VueRouter({
  routes:routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
