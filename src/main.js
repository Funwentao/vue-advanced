import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './routes/index'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)


new Vue({
    router,
    render: h => h(App)
}).$mount("#app")