export default {
    login: () => import("../views/login/login.vue"),
    home: () => import("../views/home/home.vue")
}

// import login from '../views/login/login.vue'
// import home from '../views/home/home.vue'

// export default {
//     login,
//     home
// }
// export default {
//     login: resolve => require(['../views/login/login.vue'], resolve),
//     home: resolve => require(["../views/home/home.vue"], resolve)
// }