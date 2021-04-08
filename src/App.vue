<template>
  <div id="app">
  
      <transition
        mode="out-in"
        appear enter-active-class="animate__animated animate__backInLeft"
        leave-active-class="animate__animated animate__backOutLeft"
      >
     <router-view/>
      </transition>
  </div>
</template>
// animate__backInLeft

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>


<style>

#app{
  text-align: center;
}
</style>
