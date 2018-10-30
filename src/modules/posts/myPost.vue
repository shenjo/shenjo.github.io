<template>
    <div v-if="post">
        <div v-html="post.html"></div>
    </div>
    <div v-else>
        no post found
    </div>
</template>


<script>
  import store from '../store/store';
  import TYPES from '../store/mutation-types';
  import {get} from 'lodash';
  export default {
    name: 'Post',
    data() {
      return {
        post: null
      }
    },
    beforeRouteEnter (to, from, next) {
      const postID = to.params['id'];
      const cachePost = get(store.state.allPostsList, postID, null);
      if (!cachePost) {
        store.dispatch(TYPES.GET_POST_BY_ID, postID)
          .then(next)
          .catch((err) => {
          //todo: direct to error page.
            next(err)
          });
      }else{
        next();
      }
    },
    mounted () {
      let postList = this.$store.state.allPostsList;
      this.post = postList[this.$route.params['id']] || null;
    }
  }
</script>