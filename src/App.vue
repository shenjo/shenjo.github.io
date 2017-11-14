<template>
    <div class="full_height">
        <nav-header></nav-header>
        <Row class="full_height">
            <Col span="3" class="full_height home-left-side">

            <Menu width="100%">
                <router-link to="/posts" tag="li"><MenuItem name="1-1">All Posts</MenuItem></router-link>
                <router-link to="/faq" tag="li"><MenuItem name="1-2">评论管理</MenuItem></router-link>
                <router-link to="/faq" tag="li"><MenuItem name="1-3">举报管理</MenuItem></router-link>
            </Menu>
            <auto-complete
                    v-model="searchText"
                    icon="ios-search"
                    placeholder="input here">
                <div class="demo-auto-complete-item" v-for="item in data4">
                    <div class="demo-auto-complete-group">
                        <span>{{ item.title }}</span>
                        <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
                    </div>
                    <i-option v-for="option in item.children" :value="option.title" :key="option.title">
                        <span class="demo-auto-complete-title">{{ option.title }}</span>
                        <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                    </i-option>
                </div>
                <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
            </auto-complete>
            </Col>
            <Col span="21">
            <div>ahhaah</div>
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
        message: '(define a (+ 2 3))(+ a 3)',
        result: '',
        errorMessage: '',
        theme2: 'light',
        searchText: '',
        data4: [
          {
            title: '话题',
            children: [
              {
                title: 'iView',
                count: 10000,

              },
              {
                title: 'iView UI',
                count: 10600,

              }
            ]
          },
          {
            title: '问题',
            children: [
              {
                title: 'iView UI 有多好',
                count: 60100,

              },
              {
                title: 'iView 是啥',
                count: 30010,

              }
            ]
          },
          {
            title: '文章',
            children: [
              {
                title: 'iView 是一个设计语言',
                count: 100000,

              }
            ]
          }
        ]
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

    .home-left-side{
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