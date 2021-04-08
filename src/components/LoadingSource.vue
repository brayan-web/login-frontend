<template>
<div class="container-loader">
  <div class="content-loader">
    <h2 class="text-dark">Cargando...</h2>
    <div class="spinner-border text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "LoadingSource"
}
</script>

<style scoped>
.container-loader{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-loader h2{


}



.container-loader::after {
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  background:rgba(0,0,0,0.6);
  z-index:-1;
}
</style>