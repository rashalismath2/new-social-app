
import home from "../components/home.vue"
import login from "../components/Authentication/login"
import signup from "../components/Authentication/signup"
import conversation from "../components/Conversation/conversation"
import stepper from "../components/Stepper/stepper"
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
      path: '/stepper',
      name: 'stepper',
      component: stepper
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/conversation',
      name: 'conversation',
      component: conversation
    },
  ]

