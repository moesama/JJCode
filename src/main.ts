import Vue from 'vue'
import Vuex from 'vuex'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Store from './data/Store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Element)

const app = new Vue({
    el: '#app',
    store: Store,
    render: (h) => h(App),
})
