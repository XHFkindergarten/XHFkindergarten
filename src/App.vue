<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Main
} from './pages'

export default defineComponent({
  name: 'App',
  components: {
    Main
  }
})
</script>

<style lang='scss'>
// 引入字体
@import url('./assets/fonts/font.css');

body {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  color: #121314;
  margin: 0;
}

</style>
