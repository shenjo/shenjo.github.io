<template>
    <div class="layout">
        <div class="layout-ceiling-main">
            <a href="https://github.com/shenjo/shenjo.github.io"><img src="../../assets/github.svg" alt="Github" class="img-link"></a>
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
        background-color: rgb(245, 245, 245);
        border: 1px solid #d7dde4;
        color: rgba(0, 0, 0, 0.87);
        border-radius: 4px;
        overflow: hidden;
        margin: auto;
        max-width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 3;
        height: 64px;
    }

    .layout-ceiling-main {
        float: right;
        margin-right: 15px;
        height: 40px;
        min-height: 40px;
        padding: 20px;
    }

    .img-link{
        height: 40px;
    }
</style>