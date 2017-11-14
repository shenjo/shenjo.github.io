/**
 * Created by SHENJO on 11/8/2017.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import post from './modules/posts/post.md';
import PostRouter from './modules/posts/router';


Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history'
});

const routes = [{
  path: '/',
  name: 'post',
  component: post
}];


router.addRoutes(routes);
router.addRoutes(PostRouter);

export default router;