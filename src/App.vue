<script setup>
import AppTitle from './components/AppTitle.vue';
import TodoApp from './components/TodoApp.vue';
</script>

<template>
  <main>
    <AppTitle title="Todo List" />
    <TodoApp />
  </main>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
}
</style>
