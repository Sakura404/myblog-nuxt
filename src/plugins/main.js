import Vue from 'vue'
import Prism from 'prismjs';
import randomImg from './randomImg.js'
import Moment from 'moment'
import 'moment/locale/zh-cn'
import VueTinymce from "@packy-tang/vue-tinymce";

Vue.use(Prism)
if (process.client) {
   Vue.prototype.$tinymce = tinymce; // 将全局tinymce对象指向给Vue作用域下
   Vue.use(VueTinymce); // 安装vue的tinymce组件
   Prism.highlightAll();
}
Vue.prototype.$randomImg = randomImg
Vue.prototype.$Moment = Moment
