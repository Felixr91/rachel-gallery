<template>
  <div style="height: 100vh;">
    <div class="row container-fluid ml-0 mr-0" style="height: 40vh;">
      <div class="rachel col-12 col-md-12 col-lg-12">
        <span class="raleway">R A C H E L</span>
      </div>
      <div class="hays col-12 col-md-12 col-lg-12 d-flex justify-content-center">
        <span class="raleway">H A Y S</span>
      </div>
    </div>
    <div class="row container-fluid ml-0 mr-0">
      <div class="col-12 pt-3 handdiv">
        <!-- <img src="../assets/naturalmythologystamphands.png" class="image hands-size" alt=""> -->
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
  .raleway {
    font-family: 'Raleway', sans-serif;
  }

  .rachel {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media only screen and (max-width: 225px) {
    .rachel {
      font-size: 20px;
    }

    .hays {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 226px) {
    .rachel {
      font-size: 30px;
    }

    .hays {
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 400px) {
    .rachel {
      font-size: 60px;
    }

    .hays {
      font-size: 60px;
    }
  }

  @media only screen and (min-width: 720px) {
    .rachel {
      font-size: 90px;
    }
  }

  @media only screen and (min-width: 720px) {
    .hays {
      font-size: 90px;

    }
  }

  @media only screen and (min-width: 960px) {
    .rachel {
      font-size: 80px;
    }
  }

  @media only screen and (min-width: 960px) {
    .hays {
      font-size: 80px;
    }
  }

  @media only screen and (min-width: 1065px) {
    .hays {
      font-size: 80px;
    }
  }

  @media only screen and (min-width: 720px) {
    .handdiv {
      height: 60vh;
      background-repeat: no-repeat;
      background-size: 80vw;
      background-image: url("../assets/naturalmythologystamphands.png");
      background-position: center;
    }
  }


  @media only screen and (max-width: 719px) {
    .handdiv {
      height: 60vh;
      background-repeat: no-repeat;
      background-size: 300px;
      background-image: url("../assets/handforwebsite.jpeg");
      background-position: center;
    }

    .rachel {
      margin-top: 50px !important;
    }
  }

  @media only screen and (max-width: 500px) {
    .handdiv {
      background-size: 60%;
    }
  }
</style>