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
    font-size: 14px;
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
    <li
      v-for="path in filePaths"
      :class="{ 'selected': path.selected }"
      @click="togglePathSelection(path.path)">
      {{ path.path | filename }}
    </li>
  </ul>
</template>

<script>
  import { togglePathSelection } from 'src/vuex/actions'
  import { filePaths } from 'src/vuex/getters'

  export default {
    filters: {
      filename (path) {
        let split = path.split('/')
        return split[split.length - 1]
      }
    },
    vuex: {
      actions: { togglePathSelection },
      getters: { filePaths }
    }
  }
</script>
