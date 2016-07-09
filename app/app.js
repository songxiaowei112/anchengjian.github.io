import assets from './assets/index.js';

import app from './components/app.vue';
import header from './components/header.vue';
import footer from './components/footer.vue';
import postsList from './components/posts-list.vue';
import posts from './components/posts.vue';
import spinner from './components/spinner.vue';

Vue.component('app', app);
Vue.component('my-header', header);
Vue.component('my-footer', footer);
Vue.component('posts-list', postsList);
Vue.component('my-posts', posts);
Vue.component('spinner', spinner);

import dateFilter from './filters/date.filter.js';
Vue.filter('date', dateFilter);

Vue.use(VueRouter);
let router = new VueRouter({});

router.map({
  '/': {
    component: (resolve) => {
      resolve(postsList);
    }
  },
  '/posts/:title': {
    component: (resolve) => {
      resolve(posts);
    }
  }
});

router.start(app, 'body');