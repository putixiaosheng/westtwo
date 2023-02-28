import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import addd from '../views/addd.vue'
import Index from '../views/Index.vue'
import Detail from '../views/sys/Detail.vue'
import Role from '../views/sys/Role.vue'
import Audit from '../views/sys/Audit.vue'  
import UserCenter from '../views/UserCenter.vue'
import HomePage from '../views/HomePage.vue'
import MyAll from '../views/conmonuser/MyAll.vue'
import MyProject from '../views/conmonuser/MyProject.vue'
import MyCreate from '../views/conmonuser/MyCreate.vue'
import Register from '../views/Register.vue'
import AllProject from '../views/conmonuser/AllProject.vue'
import MyOrder from '../views/conmonuser/MyOrder.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
    children:[
      {
        path: '/AllProject',
        name: 'allproject',
        component: AllProject
      },
      {
        path: '/myorder',
        name: 'MyOrder',
        component: MyOrder
      },
      {
        path: '/myall',
        name: 'MyAll',
        component: MyAll
      },
      {
        path: '/myproject',
        name: 'Myproject',
        component: MyProject
      },
      {
        path: '/mycreate',
        name: 'MyCreate',
        component: MyCreate
      },
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/usercenter',
        name: 'UserCenter',
        component: UserCenter
      },
      {
        path: '/detail',
        name: 'detail',
        component: Detail
      },
      {
        path: '/sys/role',
        name: 'Role',
        component: Role
      },
      {
        path: '/audit',
        name: 'Audit',
        component: Audit
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/addd',
    name: 'addd',
    component: addd
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  if(to.path === '/login'||to.path === '/register'){ //若是进入登录与注册页面 ==> pass
    next()
  }else{ 
    let userToken = localStorage.getItem('token');
    if(userToken == null || userToken == ''){
      alert("无权限，请先登录!");
      return next('/login');
    }else{
      next();
    }
  }
})
export default router
