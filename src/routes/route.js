import components from "./components"
import VueRoter from "vue-router"
import Vue from "vue"


const routes = []
for (let key in components) {
    if (components.hasOwnProperty(key)) {
        // Vue.component(key, components[key])
        if (key === 'login') {
            routes.push({
                path: `/`,
                name: key,
                component: components[key]
            })
        } else {
            routes.push({
                path: `/${key}`,
                name: key,
                component: components[key]
            })
        }
    }
}



export default new VueRoter({
    routes
})