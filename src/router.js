import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import login from './views/login.vue'
import homePage from './router/homePage.js'
import adminPage from './router/adminPage.js'
Vue.use(VueRouter)
const loginPage = {
   path: '/login',
   name: 'login',
   component: login
}

const routes = [
   adminPage, loginPage, homePage, {
      path: '/*',
      redirect: '/'
   }
]

export function createRouter() {
   let router = new VueRouter({
      routes,
      mode: 'history',
      base: process.env.BASE_URL,
      scrollBehavior(to, from, savedPosition) {
         if (savedPosition) {
            return savedPosition
         } else {
            return { top: 0 }
         }
      },
   })

   // router.afterEach((to, from) => {//全局后置钩子，不需要主动调用next()函数
   //    //从from跳转到to      
   //    document.title = to.matched[0].meta.title
   // })

   router.beforeEach((to, from, next) => {
      if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
         var token = getCookie('LOGIN_TOKEN');
         if (token) { // 查询本地存储信息是否已经登陆 
            //  console.log(token)
            axios.post('/api/users/isLogin/', token).then((res, resolve, reject) => {
               if (res.data.code === 10000) {
                  next()
               } else reject('未登录')
            }).catch(err => {
               console.log(err)
               next({
                  path: '/login', // 未登录则跳转至login页面
                  query: {
                     redirect: (to.fullPath)// 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
                  }
               });
            })
         } else {
            next({
               path: '/login', // 未登录则跳转至login页面
               query: {
                  redirect: (to.fullPath)// 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
               }
            });
         }
      } else {
         next();
      }
   })

   return router
}



function getCookie(cname) {
   if (!process.browser) return
   var name = cname + "=";
   var ca = document.cookie.split(';');
   for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
   }
   return "";
}


