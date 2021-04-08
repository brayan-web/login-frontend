<template>
  <div class="mt-5">
    <LoadingSource/>
  </div>
</template>


<script>
  // import VueEasyLightbox from 'vue-easy-lightbox'
// import axios from "axios";

  import LoadingSource from "@/components/LoadingSource";

export default {
  nam: "BlogEntrada1",
  data() {
    return {
          msg: 'This is a button.',
           gallery: [
        {

     

        },
        {

            description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
            alt: 'Landscape photo of mountain with fog.',
            thumbnailWidth: '220px'
        },
        {

            description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
            alt: 'Low angle photo of pine trees.',
            thumbnailWidth: '220px'
        },
    ]
     
    
    };
  },
  components: {
    //  VueEasyLightbox,

    LoadingSource

  },
  methods: {
    
  },
  // mounted() {
  //   axios
  //     .get(
  //       "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3196195ac89f7189051bc25534706ef4&hash=eadc638076d3dedacd1f8edaddd2e730",
  //       {}
  //     )
  //     .then(response => {
  //       this.personajes = response.data.data.results;
  //       console.log(this.personajes.name)
  //       for (var i = 0; i < this.personajes.length; i++) {
  //        console.log(this.personajes[i].thumbnail.path)
  //       }

  //       this.personajes = response.data.results;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       manejar el error
  //     });
  // }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.modal-dialog-full-width {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  max-width: none !important;
}

.modal-content-full-width {
  height: auto !important;
  min-height: 100% !important;
  border-radius: 0 !important;
  background-color: #ececec !important;
}

.modal-header-full-width {
  border-bottom: 1px solid #9ea2a2 !important;
}

.modal-footer-full-width {
  border-top: 1px solid #9ea2a2 !important;
}
</style>