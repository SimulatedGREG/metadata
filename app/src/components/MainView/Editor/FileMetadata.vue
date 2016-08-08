<style lang="scss" scoped>
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul { list-style-type: none; }
  li {
    font-size: 12px;
    padding: 4px 0;

    span { font-weight: bold; }
  }
</style>

<template>
  <p class="title">
    File Details
  </p>
  <ul class="metadata">
    <li>
      <span class="subtitle">File size:</span>
      1.2 mb
    </li>
    <li>
      <span class="subtitle">File type:</span>
      MP3
    </li>
    <li>
      <span class="subtitle">Date created:</span>
      02/02/2014, 04:44 PM
    </li>
    <li>
      <span class="subtitle">Date modified:</span>
      06/02/2016, 11:48 AM
    </li>
  </ul>
</template>

<script>
  export default {
  }
</script>
