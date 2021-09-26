import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    listEdit(memo, index) {
      this.$emit('listEdit', memo, index)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')