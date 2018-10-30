/**
 * Created by SHENJO on 11/8/2017.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home';
import PostRouter from './modules/posts/router';
import AuthorRouter from './modules/Author/router';
import CommentsRouter from './modules/comments/router';
import NotFound from './modules/common/Not_found';


Vue.use(VueRouter);
const routes = [{
    path: '/',
    name: 'post',
    component: home
}];

const unknownRoutes = ([{
    path: '/*',
    name: 'unknown page',
    component: NotFound
}]);

const router = new VueRouter({
    mode: 'history',
    routes: routes.concat(PostRouter).concat(AuthorRouter).concat(CommentsRouter).concat(unknownRoutes)
});

router.beforeEach((to, from, next) => {
    console.log('to router',to);
    console.log('from router',from);
    next();
});

export default router;