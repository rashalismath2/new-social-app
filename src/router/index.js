
import home from "../components/home.vue"
import login from "../components/Authentication/login"
import signup from "../components/Authentication/signup"
export default  [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
  ]

