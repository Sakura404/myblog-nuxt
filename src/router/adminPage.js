// const work  from '../components/working.vue'
import adminPost from '../components/admin/admin-post.vue'
// const dashboard  from '../components/dashboard.vue'
import admin from '../components/admin/admin.vue'
import editor from '../components/admin/editor.vue'
import adminComment from '../components/admin/admin-comment.vue'
import adminImage from '../components/admin/admin-image.vue'
import adminPhrase from '../components/admin/admin-phrase.vue'
const adminPage = {
   path: '/admin',
   component: admin,
   meta: {
      requireAuth: true
   },
   children: [
      {
         path: 'image',
         name: 'adminImage',
         component: adminImage
      },
      //   {
      //     path: 'dashboard',
      //     name: 'dashboard',
      //     component: dashboard
      // }, 
      // {
      //     path: 'work',
      //     name: 'work',
      //     component: work
      // },
      {
         path: 'post',
         name: 'adminPost',
         component: adminPost
      },
      {
         path: 'phrase',
         name: 'adminPhrase',
         component: adminPhrase
      },
      {
         path: 'editor/:id',
         name: 'editorwithid',
         component: editor
      },
      {
         path: 'editor',
         name: 'editor',
         component: editor
      },
      {
         path: 'comment',
         name: 'adminComment',
         component: adminComment
      },
      {
         path: '/',
         redirect: 'post'
      }]
}
export default adminPage