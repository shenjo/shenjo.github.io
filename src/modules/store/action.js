import  TYPES from './mutation-types';
import Vue from 'vue';

const JSON_FILE_SUFFIX = '.json';
const ROOT_DIR = 'dist/Articles/';

export default {
  [TYPES.GET_POST_BY_ID]({ commit }, postID) {
    return  new Promise((resolve,reject)=>{
      Vue.http.get(ROOT_DIR + postID + JSON_FILE_SUFFIX).then(res => {
        let data = res.data;
        commit(TYPES.GET_POST_BY_ID, [postID, data]);
        resolve();
      }).catch((err) => {
        commit(TYPES.GET_POST_BY_ID, [postID, null]);
        reject(err);
      });
    });


  }
}