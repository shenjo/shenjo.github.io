/**
 * Created by SHENJO on 11/14/2017.
 */

import AllPosts from './allPost';
import Post from './myPost';

const routes = [{
	path: '/posts',
	name: 'posts',
	component: AllPosts,
}, {
	path: '/post/:id',
	name: 'Post',
	component: Post
}];

export default routes
