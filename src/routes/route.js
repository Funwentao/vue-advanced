import components from "./components"
import VueRoter from "vue-router"
import Vue from "vue"


/*
for (let key in components) {
    if (components.hasOwnProperty(key)) {
        Vue.component(key, components[key])
    }
}

function _getInitRoute () {
    let route = [];

    route.push({
        path: '/',
        component: login,
    });
    return route;
}

export default {
    getInitRoute: _getInitRoute
}
*/


// const login = () => import("../views/login/login.vue"),
//       home = () => import("../views/home/home.vue");
// import login from '../views/login/login.vue'
// import home from '../views/home/home.vue'

// const routes = [
//     {
//         path: `/`,
//         name: 'login',
//         component: login
//     },{
//         path: `/home`,
//         name: 'home',
//         component: home
//     }
// ]
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