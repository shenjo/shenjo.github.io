<template>
    <div class="full_height container">
        <nav-header></nav-header>
        <div>
            <Row class="full_height">
                <Col span="3" class="full_height home-left-side">
                <Input v-model="searchText" icon="ios-search-strong" placeholder="Enter something..." class="search_everywhere"></Input>
                <Table :columns="columns" :data="menus" :show-header="false" @on-row-click="directPage" class="home-table"></Table>
                </Col>
            </Row>
            <div class="home-main-contain">
                <router-view class="home-content"></router-view>
            </div>
        </div>

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
        menus: [{ name: 'All Posts', path: '/posts' }, { name: 'About Me', path: '/aboutMe' },{name:'Comments',path:'/comments'}],
        searchText: '',
      }
    },
    methods: {
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
        font-size:14px;
    }

    .container{
        padding-top: 64px;
    }

    .home-left-side {
        width: 230px;
        padding: 24px 16px 112px;
        display: flex;
        -webkit-box-align: start;
        align-items: flex-start;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        overflow: auto;
        position: fixed;
        top: 64px;
        bottom: 0;
        left: 0;
        z-index: 2;
        border-right:1px solid rgba(0, 0, 0, 0.26);;
        transition: .3s cubic-bezier(.4,0,.2,1);
        transition-property: top;
    }

    .search_everywhere{
        padding: 10px 0px;
    }

    .home-main-contain{
        padding-left: 230px;

    }
    .home-table{
        border:none;
        width: 100%;
    }

    .home-content{
        margin: auto;
        padding: 16px;
        max-width: 1100px;
    }

</style>