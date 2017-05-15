import Vue from 'vue'
import Vuex from 'vuex'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(Element)

const vuex_store = new Vuex.Store({
    state: {
        content: "",
        theme: ""
    }
})

new Vue({
    el: '#app',
    store: vuex_store,
    render: h => h(App)
})