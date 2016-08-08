import Vue from 'vue'

export default {
  '/': {
    component: Vue.component('main', require('./components/MainView')),
    name: 'main'
  }
}
