import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../../App.vue'
import Edit from '../..//pages/edit/Index.vue'
import store from '../../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/edit',
    name: 'Edit',
    component: Edit,
  }],
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  sync(store, router)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
