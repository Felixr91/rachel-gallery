<template>
  <div style="height: 100vh;">
    <div class="row container-fluid ml-0 mr-0 mt-2">
      <div class="rachel col-12 col-md-12 col-lg-12">
        <span class="raleway">R A C H E L</span>
      </div>
      <div class="hays col-12 col-md-12 col-lg-12 d-flex justify-content-center">
        <span class="raleway">H A Y S</span>
      </div>
    </div>
    <div class="row container-fluid ml-0 mr-0">
      <div class="col-12 pt-3 handdiv">
        <img src="../assets/naturalmythologystamphands.png" class="image hands-size" alt="">
      </div>
    </div>
  </div>
  <!-- <p class="mt-3"><a href="#about-jump" class="text-decor">About</a></p> -->
  <!-- <p><a href="https://www.naturalmythology.com/products" class="text-decor">Shop</a></p> -->
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  .hands-size {
    width: 90%;
  }

  .raleway {
    font-family: 'Raleway', sans-serif;
  }

  @media only screen and (max-width: 225px) {
    .rachel {
      /* background-color: lightblue; */
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 225px) {
    .hays {
      /* background-color: lightblue; */
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 226px) {
    .rachel {
      /* background-color: lightblue; */
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 226px) {
    .hays {
      /* background-color: lightblue; */
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 400px) {
    .rachel {
      /* background-color: lightblue; */
      font-size: 60px;
    }

    .hays {
      /* background-color: lightblue; */
      font-size: 60px;
    }
  }

  @media only screen and (max-width: 720px) {

    .handdiv {
      margin-top: 200px;
      transform: rotate(270deg);
    }

    .hands-size {
      width: 100vw !important;
    }
  }

  @media only screen and (min-width: 720px) {
    .rachel {
      /* background-color: lightblue; */
      font-size: 90px;
    }
  }

  @media only screen and (min-width: 720px) {
    .hays {
      /* background-color: lightblue; */
      font-size: 90px;

    }
  }

  @media only screen and (min-width: 960px) {
    .rachel {
      /* background-color: lightblue; */
      font-size: 80px;
    }
  }

  @media only screen and (min-width: 960px) {
    .hays {
      /* background-color: lightblue; */
      font-size: 80px;
      /* margin-left: 85px; */
    }
  }

  @media only screen and (min-width: 1065px) {
    .hays {
      /* background-color: lightblue; */
      font-size: 80px;
    }
  }
</style>