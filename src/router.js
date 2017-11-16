/**
 * Created by SHENJO on 11/8/2017.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home';
import PostRouter from './modules/posts/router';
import AuthorRouter from './modules/Author/router';
import CommentsRouter from './modules/comments/router';


Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history'
});

const routes = [{
  path: '/',
  name: 'post',
  component: home
}];


router.addRoutes(routes);
router.addRoutes(PostRouter);
router.addRoutes(AuthorRouter);
router.addRoutes(CommentsRouter);

export default router;