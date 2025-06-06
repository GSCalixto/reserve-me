<script>
export default {
    setup (){
        const msg = "Mesas disponiveis"

        return {
            msg
        }
    }
}
</script>

<template>
    <div class= "content-header" >
        {{ msg }}
    </div>
</template>

<style>
    .content-header { 
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #000;
    };
</style>