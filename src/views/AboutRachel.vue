<template>
  <div class="row about-bg d-flex justify-content-center row-height"
    v-scroll-reveal.reset="{ delay: 250,  duration: 2000,}">
    <div class="layer">
      <div class="col-12 d-flex align-items-center about-height">
        <div class="about-padding" v-scroll-reveal.reset="{ delay: 400,  duration: 5000,}">
          <h4 class="text-font">Artist Bio</h4>
          <hr class="about-line">
          <p>Rachel Hays is an illustrator and comics artist originally from the Western US. She's inspired by plant
            folklore,
            quilting patterns, gemstones, tarot, numerology, knots, and vintage lettering. Her illustrations reflect a
            love of the
            handmade, and the poetry of symbols.</p>

          <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quis quasi, porro doloremque totam odio
            placeat
            cum mollitia alias facere, voluptate maiores suscipit expedita nisi veniam culpa tenetur sed quisquam! Lorem
            cum mollitia alias facere, volupt.</p> -->
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

  .about-height {
    height: 90vh;

  }

  .row-height {
    height: 100vh;
  }

  @media only screen and (max-height: 500px) {
    .about-height {
      height: 500px;
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 500px) and (max-height: 700px) {
    .about-height {
      height: 500px;
      margin-top: 50px;
    }

    .row-height {
      height: 700px;
    }
  }

  .about-padding {
    padding-left: 50px;
    padding-right: 50px;
  }

  /* XL Screens */

  @media only screen and (min-width: 1200px) {
    .about-height {
      height: 90vh;
    }

    .about-padding {
      padding-left: 400px;
      padding-right: 400px;
    }

    .row-height {
      height: 100vh;
    }
  }



  /* @media only screen and (max-height: 499px) {
    .about-height {
      margin-top: 200px;
      height: 100vh;
    }

    .about-padding {
      padding-left: 100px;
      padding-right: 100px;
    }

    .row-height {
      height: 800px;
    }
  } */
</style>