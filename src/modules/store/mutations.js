import  TYPES from './mutation-types';


export default {
  [TYPES.GET_POST_BY_ID](state, post) {
    state.allPostsList[post[0]] = post[1];
  }
}