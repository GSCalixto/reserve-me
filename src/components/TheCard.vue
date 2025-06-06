<template>
    <div class="card">
        <div class="green">
            <h4> Mesa: {{ mesa.mesa_num }}</h4>
        </div>
        <div class="green">
            <h4> lugares: {{ mesa.qtd_lugares }}</h4>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TheCard',
    props: {
        mesa: {
            type: Object
        }
    },
}
</script>

<style scoped>
.card {
    display: grid;
    background-color: rgb(237, 226, 205);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
}
</style>