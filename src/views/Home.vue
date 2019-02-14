<template>
  <div class="home">
    <div class="d-flex justify-content-center" style="margin-top: 80px;">
      <div class="card-columns" style="width: 95%">
        <div v-for="image in Images" v-bind:key="image.name" class="d-flex justify-content-center">
          <div class="col pl-0 pr-0">
            <b-btn class="card" v-b-modal="'myModal' + image.name" cancel-variant>
              <img class="card-img-top" :src="image.url">
            </b-btn>
            <!-- Modal Component -->
            <b-modal :id="'myModal' + image.name" title="Rachel's Photo">
              <img class="card-img-top" :src="image.url">
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  // @ is an alias to /src
  import HomeComponent from '@/components/HomeComponent.vue'
  import navigation from '@/components/navigation.vue'

  export default {
    name: 'home',
    components: {
      HomeComponent
    },
    mounted() {
      let arr = this.$store.dispatch('getImages')
    },
    computed: {
      Images() {
        return this.$store.state.Images
      }
    }

  }
</script>

<style>
  .modal-footer {
    display: none !important;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 70vw !important;
    }
  }
</style>