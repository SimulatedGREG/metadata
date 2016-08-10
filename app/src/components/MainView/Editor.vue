<style lang="scss" scoped>
  .editor {
    background-color: #fcfffe;
    float: left;
    height: 100%;
    margin: 0;
    overflow-y: auto;
    padding: 20px;
    width: (100% / 12) * 9;
  }

  .left,
  .right { float: left; }

  .left {
    padding-right: 10px;
    width: 70%;
  }

  .right {
    padding-left: 10px;
    width: 30%;
  }

  .song-filename {
    font-size: 20px;
    margin: 0 0 20px;
  }

  .song-artwork {
    max-width: 100%;
  }

  .input-group {
    margin-bottom: 10px;

    label {
      color: rgba(#000, .8);
      display: block;
      font-size: 14px;
      margin-bottom: 2px;
      text-transform: uppercase;
    }

    input {
      border: solid 1px rgba(#000, .2);
      border-radius: 2px;
      font-size: 16px;
      outline: none;
      padding: 10px;
      width: 100%;

      &:focus,
      &:hover {
        border: solid 1px rgba(#0e7ac4, .5);
        box-shadow: 2px 2px 2px .5px rgba(#000, .05);
      }
    }
  }
</style>

<template>
  <div class="editor">
    <p class="song-filename">{{ editorMetadata.filename }}</p>
    <div class="left">
      <div class="input-group">
        <label for="song-title">Title</label>
        <input id="song-title" v-model="diff.title" :value="editorMetadata.title" type="text">
      </div>
      <div class="input-group">
        <label for="song-artist">Artist</label>
        <input id="song-artist" v-model="diff.artist" :value="editorMetadata.artist" type="text">
      </div>
      <div class="input-group">
        <label for="song-album-artist">Album Artist</label>
        <input id="song-album-artist" v-model="diff.album_artist" :value="editorMetadata.album_artist" type="text">
      </div>
      <div class="input-group">
        <label for="song-album">Album</label>
        <input id="song-album" v-model="diff.album" :value="editorMetadata.album" type="text">
      </div>
      <div class="input-group">
        <label for="song-date">Year</label>
        <input id="song-date" v-model="diff.date" :value="editorMetadata.date" type="text">
      </div>
      <div class="input-group">
        <label for="song-genre">Genre</label>
        <input id="song-genre" v-model="diff.genre" :value="editorMetadata.genre" type="text">
      </div>
      <div class="input-group">
        <label for="song-track">Track #</label>
        <input id="song-track" v-model="diff.track" :value="editorMetadata.track" type="text">
      </div>
    </div>
    <div class="right">
      <img class="song-artwork" src="//placehold.it/1024">
      <file-metadata></file-metadata>
    </div>
  </div>
</template>

<script>
  import {
    filePaths,
    metadata,
    selectedPaths
  } from 'src/vuex/getters'
  import FileMetadata from './Editor/FileMetadata'
  import { map, uniq } from 'lodash'

  export default {
    components: { FileMetadata },
    computed: {
      currentMetadata () {
        let metadata = []
        for (let i = 0; i < this.selectedPaths.length; i++) {
          metadata.push(this.metadata[this.selectedPaths[i]])
        }

        return metadata
      },
      editorMetadata () {
        let blob = {}
        let fields = [
          'title',
          'artist',
          'album_artist',
          'album',
          'date',
          'genre',
          'track'
        ]

        for (let i = 0; i < fields.length; i++) {
          blob[fields[i]] = this.parseField(fields[i])
        }

        if (this.selectedPaths.length === 1) {
          let split = this.filePaths[this.selectedPaths[0]].split('/')
          blob.filename = split[split.length - 1]
        } else blob.filename = 'Multiple Filenames'

        return blob
      }
    },
    data () {
      return {
        diff: {
          title: '',
          artist: '',
          album_artist: '',
          album: '',
          date: '',
          genre: '',
          track: ''
        }
      }
    },
    methods: {
      parseField (field) {
        let f = uniq(map(this.currentMetadata, field))

        if (!f[0]) return 'Not Specified'
        else return f.length === 1 ? f[0] : 'Multiple Values'
      }
    },
    vuex: {
      getters: {
        filePaths,
        metadata,
        selectedPaths
      }
    }
  }
</script>
