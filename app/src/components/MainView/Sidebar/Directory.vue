<style lang="scss" scoped>
  .directory {
    color: rgba(#000, .8);
    background-color: rgba(#40aaef, .35);
    overflow: hidden;
    padding: 8px 15px;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      color: #000;
      cursor: alias;
      background-color: rgba(#40aaef, .4);
    }
  }
</style>

<template>
  <div class="directory">
    path/to/my/extra/long/directory/place/really/long/did/i/say/that
  </div>
</template>

<script>
  export default {
  }
</script>
