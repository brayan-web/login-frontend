<template>
<div>
  <mdb-modal class="modal-size" size="sm" :show="modal" @close="toggleModal({})">
    <mdb-modal-header color="blue-tm">
      <mdb-modal-title>LINDA VISTA</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body class="text-left">
      <p>UBICACION: {{selected.name}}</p>
      <p>STATUS: {{selected.statusText}}</p>
      <p>TIPO: {{selected.type}}</p>
      <p>M2 DE TERRENO: {{selected.m2t}}</p>
    </mdb-modal-body>
    <mdb-modal-footer>
      <mdb-btn color="danger" @click.native="toggleModal({})">Cerrar</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
export default {
name: "LocationModal",
  components:{
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn
  },
  computed:{
  ...mapGetters({
    modal : "getModalStatus",
    selected: "getSelectedLocation"
  })
  },
  methods:{
  ...mapActions([
      "toggleModal"
  ])
  }
}
</script>

<style scoped>
.blue-tm {
  background-color: rgb(20,39,74);
}
.modal-size{

}
</style>