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
  /*
  body::-webkit-scrollbar{
    width: 8px;
  }
  body::-webkit-scrollbar-track{
    background: rgb(200, 200, 200);
    border-radius: 5px;
  }
  body::-webkit-scrollbar-thumb{
    background: rgb(120, 120, 120);
    border-radius: 5px;
  }
  */
</style>
