<style>
  *,
  *:before,
  *:after { box-sizing: border-box; }
  *:not(.fa) { font-family: 'Roboto', sans-serif !important; }
  *:not(input) { user-select: none; }

  body {
    margin: 0;
    padding: 0;
  }
</style>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  export default {
    store
  }
</script>
