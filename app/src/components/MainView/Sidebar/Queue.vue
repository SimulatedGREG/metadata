<style lang="scss" scoped>
  select {
    border: 0;
    height: calc(100% - 40px);
    outline: none;
    overflow-y: auto;
    width: 100%;
  }

  option {
    font-size: 14px;
    overflow-x: hidden;
    padding: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      background-color: rgba(#000, .04);
    }

    &:focus { outline: none; }
  }
</style>

<template>
  <select v-model="fileSelection" multiple>
    <option v-for="path in filePaths">
      {{ path | filename }}
    </option>
  </select>
</template>

<script>
  import { filePaths } from 'src/vuex/getters'

  export default {
    data () {
      return { fileSelection: [] }
    },
    filters: {
      filename (path) {
        let split = path.split('/')
        return split[split.length - 1]
      }
    },
    vuex: {
      getters: { filePaths }
    },
    watch: {
      'fileSelection' (val) {
        this.$log('fileSelection')
      }
    }
  }
</script>
