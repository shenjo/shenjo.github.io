<template>
    <Timeline>
        <TimelineItem v-for="postMenu in postsMenuDisplay" :key="postMenu.year">
            <p class="time">{{postMenu.year}}</p>
            <div v-for="eachPost in postMenu.posts">
                <p class="content">{{eachPost.time | dateFormat('MMM Do')}}
                    <router-link :to="'/post/'+eachPost.name">{{eachPost.name}}</router-link>
                </p>
            </div>
        </TimelineItem>
    </Timeline>
</template>

<style scoped>
    .time {
        font-size: 14px;
        font-weight: bold;
    }

    .content {
        padding-left: 5px;
    }
</style>

<script>
    import {uniq, map, filter} from 'lodash';

    export default {
        name: 'all-posts',
        computed: {
            postsMenu() {
                return this.$store.state.allPostsMenu;
            },
            postsMenuDisplay() {
                const years = uniq(map(this.postsMenu, postMenu => new Date(postMenu.createTime).getFullYear()));
                return map(years.sort((a, b) => b - a), year => {
                    return {
                        year,
                        posts: map(filter(this.postsMenu, postMenu => new Date(postMenu.createTime).getFullYear() === year), postMenu => ({
                            name: postMenu.id,
                            time: postMenu.createTime
                        }))
                    }
                });
            }
        }

  }
</script>