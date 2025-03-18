<template>
    <div class="card">
        <slot><a class="green"> HelloWorld</a></slot>
    </div>
</template>

<script>
export default {
    name: 'TheCard'
}
</script>

<style scoped>
.card {
    background-color: rgb(237, 226, 205);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
}
</style>