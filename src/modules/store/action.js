import  TYPES from './mutation-types';
import Vue from 'vue';

const JSON_FILE_SUFFIX = '.json';
const ROOT_DIR = '/dist/Articles/';

export default {
  [TYPES.GET_POST_BY_ID]({ commit }, postID) {
    Vue.http.get(ROOT_DIR + postID + JSON_FILE_SUFFIX).then(res => {
      let data = res.data;
      commit(TYPES.GET_POST_BY_ID, [postID, data]);
    }).catch(() => {
      commit(TYPES.GET_POST_BY_ID, [postID, null]);
    });
  }
}