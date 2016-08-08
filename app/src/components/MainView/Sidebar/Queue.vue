<style lang="scss" scoped>
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    height: calc(100% - 40px);
    list-style-type: none;
    overflow-y: auto;
  }

  li {
    overflow-x: hidden;
    padding: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover,
    &.selected {
      cursor: pointer;
      background-color: rgba(#000, .04);
    }

    &.selected { font-weight: bold; }
  }
</style>

<template>
  <ul class="queue">
    <li>MyCoolSong.mp3</li>
    <li class="selected">MyCoolSong.mp3</li>
    <li>MyCoolSong.mp3</li>
    <li>MyCoolSong.mp3</li>
  </ul>
</template>

<script>
  export default {
  }
</script>
