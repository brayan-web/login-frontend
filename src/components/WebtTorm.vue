<template>
<div>
  <h1>FORM EXAMPLE</h1>
  <form action="">
    <select v-model="countri" @change="onChangeState($event)"  class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option :value="{countriId: countrie.id}" v-for="(countrie, index) in countries" :key="index">{{countrie.name}}</option>
    </select>


    <div>
      <select v-model="state"   class="form-select" aria-label="hola">
        <option selected>Open this select menu</option>
        <option v-for="(state, index) in states" :key="index">{{state.name}}</option>
      </select>
    </div>

<button class="btn btn-success">Enviar</button>

  </form>




</div>
</template>

<script>

import axios from "axios"
export default {
name: "WebtTorm",
  components:{


  },
  data(){
  return{
    countri:"",
    state:"",
    showText: false,
    countries: [],
    states:[],

    }
  },
  methods:{
    onChangeState(){
      const idState = this.countri.countriId
      axios.get(`https://gn3bbxdche.execute-api.us-west-2.amazonaws.com/Production/api/states/${idState}`)
          .then(response => (this.states = response.data))

    }
  },
  mounted() {
    axios.get('https://gn3bbxdche.execute-api.us-west-2.amazonaws.com/Production/api/countries')
    .then(response => (this.countries = response.data))
  }
}

</script>

<style scoped>

</style>