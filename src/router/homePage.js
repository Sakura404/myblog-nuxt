import home from '../views/home'
import article from '../components/post.vue'
import postlist from '../views/postlist.vue'
import timelines from '../views/timelines.vue'
import archive from '../views/archive.vue'
import about from '../views/about.vue'
import game from '../views/game.vue'

const homePage = {
   path: '/',
   component: home,
   children: [{
      path: '/',
      name: 'home',
      component: postlist,
      meta: { title: '首页' }
   }, {
      path: '/post/:id',
      name: 'post',
      component: article
   }, {
      path: '/game',
      name: 'game',
      component: game,
      meta: { title: '游戏' }

   }, {
      path: '/timelines',
      name: 'timelines',
      component: timelines,
      meta: { title: '时间轴' }

   }, {
      path: '/archive',
      name: 'archive',
      component: archive,
      meta: { title: '归档' }

   }, {
      path: '/about',
      name: 'about',
      component: about,
      meta: { title: '关于' }

   }, {
      path: '/*',
      redirect: '/'
   },]
}
export default homePage