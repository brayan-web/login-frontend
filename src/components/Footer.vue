<template>
  <div>
    <!-- Footer -->
    <footer class="bg-dark">
      <!-- Grid container -->
      <div class="container">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 py-3">
            <button type="button" class="btn btn-social btn-circle text-center">
             <i class="fab fa-facebook-f"></i>
            </button>
            <button type="button" class="btn btn-social btn-circle text-center">
             <i class="fab fa-youtube"></i>
            </button>
             <button type="button" class="btn btn-social btn-circle">
            <i class="fab fa-instagram"></i>
            </button>
          </div>
          <!--Grid column-->
       
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
     
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.btn-circle {
  border:2px solid #ffff;
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 50%;
  margin-left: 2%;

}
.btn-social{
  background:transparent;
}
i{
  color: #fff;
  font-size: 1.5rem;
}
</style>