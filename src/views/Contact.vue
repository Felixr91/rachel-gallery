<template>
  <div class="row mt-5">
    <div class="col-12" v-scroll-reveal.reset="{ delay: 400,  duration: 5000,}">
      <h4 class="text-font">Contact</h4>
      <hr class="about-line">
      <h5 class="mt-5">Email</h5>
      <p>rachelhays@gmail.com</p>
      <h5 class="mt-5">Post</h5>
      <p>1111 South Orchard Street</p>
      <p>Boise, Idaho 83705</p>
      <p>suite #203</p>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'contact',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  hr.about-line {
    width: 20%
  }
</style>