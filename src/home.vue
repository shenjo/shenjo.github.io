<template>
    <div>
        <h1>welcome</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        mounted() {
            this.$router.push('/posts')
        }
    }
</script>