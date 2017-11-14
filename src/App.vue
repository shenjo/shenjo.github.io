<template>
    <div class="full_height">
        <nav-header></nav-header>
        <Row class="full_height">
            <Col span="3" class="full_height home-left-side">
            <Input v-model="searchText" icon="ios-search-strong" placeholder="Enter something..." ></Input>
            <Table :columns="columns" :data="menus" :show-header="false" @on-row-click="directPage"></Table>
            </Col>
            <Col span="21" class="blog_router_view">
            <router-view></router-view>
            </Col>

        </Row>
    </div>
</template>

<script>
  import NavHeader from './modules/common/NavHeader'
  export default {
    name: 'app',
    components: { NavHeader },
    data() {
      return {
        columns: [{ title: 'Name', key: 'name' }],
        menus: [{ name: 'All Posts', path: '/posts' }, { name: 'About Me', path: '/aboutMe' }],
        searchText: '',
      }
    },
    methods: {
      translate: function() {
        this.result = '';
        this.errorMessage = '';
        try {
//          this.result = myEval(this.message);
        } catch (err) {
          this.errorMessage = err.message;
        }
      },
      directPage(page){
        if (_.isString(page)) {
          this.$router.push(page);
        } else {
          this.$router.push(_.get(page, 'path', '/'));
        }

      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        top: 0;
        left: 0;
    }

    .blog_router_view {
        padding-left: 10px;
    }

    .home-left-side {
        background-color: #e9eaec;
    }

    .demo-auto-complete-item {
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }

    .demo-auto-complete-group {
        font-size: 12px;
        padding: 4px 6px;
    }

    .demo-auto-complete-group span {
        color: #666;
        font-weight: bold;
    }

    .demo-auto-complete-group a {
        float: right;
    }

    .demo-auto-complete-count {
        float: right;
        color: #999;
    }

    .demo-auto-complete-more {
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
</style>