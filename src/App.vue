<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .fillcontain,body,html{
    width: 100%;
    height: 100%;
  }
</style>
