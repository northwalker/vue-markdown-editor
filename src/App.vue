<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue Markdown Editor</h1>
    <VueMarkdownEditor />
  </div>
</template>

<script>
import VueMarkdownEditor from './components/VueMarkdownEditor.vue'

export default {
  name: 'app',
  components: {
    VueMarkdownEditor
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Noto Sans TC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
