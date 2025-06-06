<template>
  <div class="content-welcome">
    
    <div class="card-mesa" v-for="mesa in mesas" :key="mesa.mesa_num">
      <TheCard :mesa="mesa" />
    </div>
  </div>
</template>

<script >
//referencia Curso de Vue JS #14 - V-for
  import TheCard from './TheCard.vue';

  export default {
    name: 'TheWelcome',
    components: { TheCard },
    data() {
      return {
        mesas: [
          { mesa_num: 1, qtd_lugares: 6 },
          { mesa_num: 2, qtd_lugares: 4 },
          { mesa_num: 3, qtd_lugares: 8 },
          { mesa_num: 4, qtd_lugares: 6 },
          { mesa_num: 5, qtd_lugares: 4 },
          { mesa_num: 6, qtd_lugares: 8 },
          { mesa_num: 7, qtd_lugares: 6 },
          { mesa_num: 8, qtd_lugares: 4 },
          { mesa_num: 9, qtd_lugares: 8 },
          { mesa_num: 10, qtd_lugares: 6 },
        ],
      }
    },
  }
</script>

<style>
  .content-welcome {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .card-mesa {
    margin: 10px;
    width: 120px;
    height: 100px;
  }
</style>
