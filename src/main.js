// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'bootstrap'
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import animated from 'animate.css'
import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import * as swiperAni from '../static/js/swiper.animate.min.js';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(animated)
axios.defaults.withCredentials = true//cookie
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);


Vue.component('Loading', Loading)
Vue.use(VueI18n)

Vue.prototype.$swiperAnimateCache = swiperAni.swiperAnimateCache;
Vue.prototype.$swiperAnimate = swiperAni.swiperAnimate;
Vue.prototype.$clearSwiperAnimate = swiperAni.clearSwiperAnimate;

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})
/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  // ...
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/controller',//如果切到#/，但還沒登入路徑會切回/login
        });
      }
    });
  } else {
    next();
  }
});