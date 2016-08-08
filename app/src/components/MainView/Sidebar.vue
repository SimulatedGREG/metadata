<style lang="scss" scoped>
  .sidebar {
    background-color: #f7fbff;
    float: left;
    height: 100%;
    width: (100% / 12) * 3;
  }
</style>

<template>
  <div class="sidebar">
    <directory></directory>
    <queue></queue>
  </div>
</template>

<script>
  import Directory from './Sidebar/Directory'
  import Queue from './Sidebar/Queue'

  export default {
    components: {
      Directory,
      Queue
    }
  }
</script>
