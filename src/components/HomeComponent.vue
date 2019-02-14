<template>
  <!-- <div class="hello">
    <div class="d-flex justify-content-center" style="margin-top: 80px;">
      <div class="card-columns" style="width: 95%">
        <div v-for="image in Images" class="d-flex justify-content-center">
          <div class="col pl-0 pr-0">
            <div class="card">
              <img class="card-img-top" :src="image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->





</template>

<script>
  export default {
    name: 'HomeComponent',
    data() {
      return {

      }
    },
    computed: {
      Images() {
        return this.$store.state.images
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>