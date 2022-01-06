<template>
  <div id="app">
    <v-app>
      <word-checker></word-checker>
    </v-app>
  </div>
</template>

<script>
import WordChecker from '@/components/scratcher/WordChecker'

export default {
  name: 'App',
  components: {
    WordChecker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
