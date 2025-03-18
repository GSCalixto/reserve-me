<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import  TheHeader  from '../components/TheHeader.vue'

</script>

<template>
  <main>
    <div class= "app">
      <div class= "header">
        <TheHeader />
      </div>
      <div class="content">
        <TheWelcome />
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* Ajuste conforme a altura do seu header */
  z-index: 1000;
  background-color: #fff; /* Ajuste conforme necessário */
}

.content {
  margin-top: 60px; /* Ajuste conforme a altura do seu header */
  flex: 1;
  overflow-y: auto;
}
</style>
