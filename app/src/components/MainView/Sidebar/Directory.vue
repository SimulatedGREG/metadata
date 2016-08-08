<style lang="scss" scoped>
  .directory {
    color: rgba(#000, .8);
    background-color: rgba(#40aaef, .35);
    font-size: 14px;
    min-height: 32px;
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
  <div class="directory" @click="openDirectory">
    {{ directory }}
  </div>
</template>

<script>
  import { directory } from 'src/vuex/getters'
  import { shell } from 'electron'

  export default {
    methods: {
      openDirectory () {
        shell.showItemInFolder(this.directory)
      }
    },
    vuex: {
      getters: { directory }
    }
  }
</script>
