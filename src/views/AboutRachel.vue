<template>
  <div class="row about-bg d-flex justify-content-center" style="height: 100vh; ">
    <div class="layer">
      <div class="col-12 d-flex align-items-center" style="height: 90vh;">
        <div class="pl-5 pr-5">
          <h4 class="text-font">Artist Bio</h4>
          <hr class="about-line">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quis quasi, porro doloremque totam odio
            placeat
            cum mollitia alias facere, voluptate maiores suscipit expedita nisi veniam culpa tenetur sed quisquam! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Optio quis quasi, porro doloremque totam odio
            placeat?</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quis quasi, porro doloremque totam odio
            placeat
            cum mollitia alias facere, voluptate maiores suscipit expedita nisi veniam culpa tenetur sed quisquam! Lorem
            cum mollitia alias facere, volupt.</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'aboutRachel',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  .text-font {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Raleway', sans-serif;
  }

  .about-bg {
    background-image: url('../assets/desk.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .layer {
    background-color: rgba(253, 253, 253, 0.746);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  hr.about-line {
    width: 75%
  }
</style>