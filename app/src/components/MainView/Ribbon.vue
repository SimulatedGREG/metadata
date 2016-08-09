<style lang="scss" scoped>
  .ribbon {
    background-color: #40aaef;
    color: rgba(#fff, .9);
    height: 40px;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    align-items: center;
    display: inline-flex;
    height: 100%;
    list-style-type: none;
    width: 300px;
  }

  li {
    font-size: 24px;
    padding-left: 20px;
    text-align: center;
    transition: all 140ms cubic-bezier(0.7, -0.96, 0.43, 2.66);

    &:hover {
      color: #fff;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
</style>

<template>
  <div class="ribbon">
    <ul class="actions">
      <li><i class="fa fa-folder-open-o" @click="openFolder"></i></li>
      <li><i class="fa fa-save"></i></li>
      <li><i class="fa fa-question"></i></li>
    </ul>
  </div>
</template>

<script>
  import {
    setDirectory,
    setFilePaths
  } from 'src/vuex/actions'
  import { remote } from 'electron'
  import nodeDir from 'node-dir'
  const dialog = remote.dialog

  export default {
    methods: {
      openFolder () {
        dialog.showOpenDialog({
          title: 'What folder is your music saved in?',
          properties: ['openDirectory']
        }, directory => {
          this.setDirectory(directory[0])
          nodeDir.files(directory[0], (err, paths) => {
            if (err) console.error(err)
            else {
              paths = paths.filter(file => /\.mp3$|\.m4a$|\.ogg$|\.flac$/.test(file))

              this.setFilePaths(paths)
            }
          })
        })
      }
    },
    vuex: {
      actions: {
        setDirectory,
        setFilePaths
      }
    }
  }
</script>
