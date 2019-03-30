<template>
  <div class="row container-fluid ml-0 mr-0 hero-query">
    <div class="col-12 pt-3 handdiv">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'heroImage',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  @media only screen and (min-width: 920px) {
    .handdiv {
      background-repeat: no-repeat;
      background-size: 80vw;
      background-image: url("../assets/hands.svg");
      background-position: 50% 70%;
    }
  }

  @media only screen and (min-width: 1500px) and (min-height: 600px) {
    .handdiv {
      background-repeat: no-repeat;
      background-size: 70vw;
      background-image: url("../assets/hands.svg");
      background-position: 50% 90%;
    }
  }

  @media only screen and (max-height: 800px) {
    .handdiv {
      height: 800px;
    }
  }

  @media only screen and (max-width: 919px) {
    .handdiv {
      background-repeat: no-repeat;
      background-size: 300px;
      background-image: url("../assets/handforwebsite.png");
      background-position: center;
    }
  }


  @media only screen and (min-height: 401px) {
    .hero-query {
      height: 90vh;
    }
  }
</style>