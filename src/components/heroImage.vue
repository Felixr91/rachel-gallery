<template>

  <!-- Should this be a component? -->
  <div class="row container-fluid ml-0 mr-0" style="height: 90vh;">
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
  @media only screen and (min-width: 720px) {
    .handdiv {
      background-repeat: no-repeat;
      background-size: 80vw;
      background-image: url("../assets/naturalmythologystamphands.png");
      background-position: center;
    }
  }

  @media only screen and (max-width: 719px) {
    .handdiv {
      background-repeat: no-repeat;
      background-size: 300px;
      background-image: url("../assets/handforwebsite.jpeg");
      background-position: center;
    }
  }
</style>