<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">shenjo</p>
            <Tooltip content="github">
                <p><a href="https://github.com/shenjo"><img src="../../assets/github.svg" height="50px"></a></p>
            </Tooltip>
            <Tooltip content="sina weibo">
                <p><a href="https://weibo.com/u/2812120962"><img src="../../assets/sinaweibo.svg" height="50px"></a></p>
            </Tooltip>
        </Card>
    </div>
</template>

<script>
    export default{
      name:'Author'
    }
</script>

<style scoped>

</style>