<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">github</a> |
                <a href="#">blog</a> |
                <a href="#">weibo</a> |
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'nav-header'
  }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-ceiling {
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }

    .layout-ceiling-main {
        float: right;
        margin-right: 15px;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }
</style>