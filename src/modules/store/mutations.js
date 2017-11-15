import * as TYPES from './mutation-types';


export default {
	[TYPES.GET_ALL_POSTS](state, post) {
		state.allPosts.push(post);
	}
}