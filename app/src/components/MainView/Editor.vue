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

      &:focus {
        border: solid 1px rgba(#0e7ac4, .5);
        box-shadow: 2px 2px 2px .5px rgba(#000, .05);
      }

      &:hover {
        border: solid 1px rgba(#0e7ac4, .5);
        box-shadow: 2px 2px 2px .5px rgba(#000, .05);
      }
    }
  }
</style>

<template>
  <div class="editor">
    <p class="song-filename">MyCoolSong.mp3</p>
    <div class="left">
      <div class="input-group">
        <label for="song-title">Title</label>
        <input id="song-title" type="text">
      </div>
      <div class="input-group">
        <label for="song-artist">Artist</label>
        <input id="song-artist" type="text">
      </div>
      <div class="input-group">
        <label for="song-album-artist">Album Artist</label>
        <input id="song-album-artist" type="text">
      </div>
      <div class="input-group">
        <label for="song-album">Album</label>
        <input id="song-album" type="text">
      </div>
      <div class="input-group">
        <label for="song-year">Year</label>
        <input id="song-year" type="text">
      </div>
      <div class="input-group">
        <label for="song-genre">Genre</label>
        <input id="song-genre" type="text">
      </div>
      <div class="input-group">
        <label for="song-track">Track #</label>
        <input id="song-track" type="number">
      </div>
    </div>
    <div class="right">
      <img class="song-artwork" src="//placehold.it/1024">
      <file-metadata></file-metadata>
    </div>
  </div>
</template>

<script>
  import { selectedPaths } from 'src/vuex/getters'
  import FileMetadata from './Editor/FileMetadata'

  export default {
    components: { FileMetadata },
    vuex: {
      getters: { selectedPaths }
    }
  }
</script>
