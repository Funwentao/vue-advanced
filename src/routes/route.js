import components from "./components"
import Vue from "vue"

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