import components from "./components"
import Vue from "vue"
import VueRoter from "vue-router"

for (let key in components) {
    if (components.hasOwnProperty(key)) {
        Vue.component(key, components[key])
    }
}

// function _getInitRoute () {
//     let route = [];

//     route.push({
//         path: '/',
//         component: login,
//     });
//     return route;
// }

// export default {
//     getInitRoute: _getInitRoute
// }

const routers = []
for (let key in components) {
    if (components.hasOwnProperty(key)) {
        routers.push({
            path: `/${key}`,
            components: components[key]
        })
    }
}

export default new VueRoter({
    routers
})