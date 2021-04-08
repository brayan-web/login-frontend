<template>
<div>
    <MapHighLight/>
</div>
</template>

<script>
import {mapActions} from "vuex"
import MapHighLight  from "@/components/MapHighLight";
export default {
name: "ImageMapSvg",
  components:{
    MapHighLight
  },
  data(){
  return{
  id:43,

  }
  },
  computed:{
    development(){
      return { id: this.id };
    }
  },

  methods:{
  ...mapActions([
      "getAvailableLocations"
  ]),

  },
  async mounted() {
        await this.getAvailableLocations(this.development)
  },
}

</script>

<style scoped>
.st0{opacity:0.34;fill:#31AF67;}
a:link, a:visited, a:active {
  text-decoration:none;
}
</style>
