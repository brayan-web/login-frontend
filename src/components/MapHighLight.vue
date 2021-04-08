<template>
<div class="cont-img">
  <LocationModal/>

    <v-zoomer style="width: 100%; height: 100vh;">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 1332 1346" style="enable-background:new 0 0 1332 1346;" xml:space="preserve">
    <image id="map"   xlink:href="../assets/FULLHD.png"    style="left: 0px; right: 0px; margin-left: auto; margin-right: auto; position: relative; overflow:visible;">
    </image>
        <polygon slot="reference" v-for="(e, index) in locations" :key="index" @click="selectLocation(e)" :style="{fill: '#'+ e.color, opacity: 0.34}" alt="hola" :points="e.coords" :shape="e.shape" style="cursor: pointer; z-index: 99999999999"/>
  </svg>
    </v-zoomer>






</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import LocationModal from "@/components/LocationModal";
export default{
name: "MapHighLight",
  data(){
    return{

    }
  },
  components:{
  LocationModal,

  },

  computed:{
    ...mapGetters({
      locations: "getLocations"
    }),

  },
  methods:{
  ...mapActions([
      "toggleModal"
  ]),
    selectLocation(location){
      this.toggleModal(location);

    },



},
  mounted() {
    window.addEventListener('gesturestart', e => e.preventDefault());
    window.addEventListener('gesturechange', e => e.preventDefault());
    window.addEventListener('gestureend', e => e.preventDefault());
  }

}
</script>

<style scoped>

button { -webkit-tap-highlight-color: rgba(0,0,0,0);
cursor: pointer}



</style>