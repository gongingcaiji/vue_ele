import home from '../components/home.vue';
import login from '../components/login.vue';
import myorder from '../components/myorder.vue';
import worker from '../components/worker.vue';
import my from '../components/my.vue';
import register from '../components/register.vue';




let routes=[
  {path:'/home',component:home},
  {path:'/login',component:login},
  {path:'/myorder',component:myorder},
  {path:'/worker',component:worker},
  {path:'/my',component:my},
  {path:'/register',component:register}
]



// export default routes;
export default {routes}