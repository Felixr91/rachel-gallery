<template>
  <div class="home">
    <!-- <navigation></navigation> -->
    <heroImage></heroImage>
    <div class="d-flex justify-content-center" style="margin-top: 80px;"
      v-scroll-reveal.reset="{ delay: 250,  duration: 2000,}">
      <div class="card-columns" style="width: 95%">
        <div v-for="image in Images" v-bind:key="image.name" class="d-flex justify-content-center">
          <div class="col pl-0 pr-0">
            <div class="card" style="border:none;" v-b-modal="'myModal' + image.name" cancel-variant>
              <img class="card-img-top" :src="image.url">
            </div>
            <!-- Modal Component -->
            <b-modal :id="'myModal' + image.name">
              <img class="card-img-top" :src="image.url">
              <p class="my-4">{{image.name}}</p>
              <p class="my-4"><i>{{image.description}}</i></p>
              <p class="my-4">{{image.type}}</p>
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
  import heroImage from '@/components/heroImage.vue'

  export default {
    name: 'home',
    components: {
      HomeComponent,
      heroImage
    },
    mounted() {
      // let arr = this.$store.dispatch('getImages')
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

  .card {
    border-radius: 0 !important;
  }

  .card-img-top {

    border-radius: 0 !important;
  }

  .modal-header {
    border-bottom: 0px !important;
  }

  .modal-content {
    background-color: rgba(0, 0, 0, 0.411) !important;
    color: white;
  }
</style>