<style lang="scss" scoped>
  .row {
    height: calc(100vh - 40px);
    margin: 0;
    padding: 0;
  }
</style>

<template>
  <ribbon>hi</ribbon>
  <div class="row">
    <sidebar></sidebar>
    <editor></editor>
  </div>
</template>

<script>
  import Editor from './MainView/Editor'
  import Sidebar from './MainView/Sidebar'
  import Ribbon from './MainView/Ribbon'

  export default {
    components: {
      Editor,
      Sidebar,
      Ribbon
    }
  }
</script>

