<template>
  <div>
    <!-- large navbar -->
    <div class="navbar-toggle-large">
      <div class="row container-fluid ml-0 mr-0 pt-3 d-flex align-items-center">
        <div class="col-4 d-flex" @click="goHome()">
          <a href="#" style="text-decoration: none; color: black;">
            <p class="nav-name" v-scroll-reveal.reset="{ delay: 250,  duration: 2000,
      origin: 'right',
      distance: '300px' }">R A C H E L &nbsp; H A Y S</p>
          </a>
        </div>
        <a class="col-2" @click="goHome()">
          <a href="#" style="text-decoration: none; color: black;">
            <p v-scroll-reveal.reset="{ delay: 250,  duration: 2000,
              origin: 'left',
              distance: '200px' }">Home</p>
          </a>
        </a>
        <div class="col-2">
          <a href="https://www.naturalmythology.com/products" target="_blank"
            style="text-decoration: none; color: black;">
            <p v-scroll-reveal.reset="{ delay: 250,  duration: 2000,
      origin: 'left',
      distance: '200px' }">Shop</p>
          </a>
        </div>
        <a class="col-2" @click="goContact()">
          <a href="#" style="text-decoration: none; color: black;">
            <p v-scroll-reveal.reset="{ delay: 250,  duration: 2000,
                      origin: 'left',
                      distance: '200px' }">Contact</p>
          </a>
        </a>
        <a class="col-2" @click="goAbout()">
          <a href="#" style="text-decoration: none; color: black;">
            <p v-scroll-reveal.reset="{ delay: 250,  duration: 2000,
      origin: 'left',
      distance: '200px' }">About</p>
          </a>
        </a>
      </div>
    </div>


    <!-- Navbar Small -->
    <div class="navbar-toggle-small">
      <div class="pos-f-t" id="nav-small">
        <nav class="navbar navbar-light">
          <div class="col-m-6" @click="goHome()">
            <p class="nav-name-small" v-scroll-reveal.reset="{ delay: 250,  duration: 2000, origin: 'right',
      distance: '300px' }">R A C H E L &nbsp; H A Y S</p>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"
            v-scroll-reveal.reset="{ delay: 250,  duration: 2000,
      origin: 'left',
      distance: '300px' }" style="outline: 0;">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-light p-4 d-flex justify-content-around" style="align-items: flex-end; color: black;">
            <a @click="goHome()">
              <a href="#" style="text-decoration: none; color: black;">
                <span>Home</span>
              </a>
            </a>
            <a href="https://www.naturalmythology.com/products" target="_blank"> <span
                style="text-decoration: none; color: black;">Shop</span></a>
            <a @click="goContact()">
              <a href="#" style="text-decoration: none; color: black;">
                <span>Contact</span>
              </a>
            </a>
            <a @click="goAbout()">
              <a href="#" style="text-decoration: none; color: black;">
                <span>About</span>
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      goAbout() {
        this.$store.dispatch("goAbout");
      },
      goHome() {
        this.$store.dispatch("goHome");
      },
      goContact() {
        this.$store.dispatch("goContact");
      }
    },

  }

</script>

<style>
  a {
    color: inherit;
  }

  .nav-name-small {
    font-size: 1.5rem;
    margin-bottom: 0px !important;
    padding-top: 3px;
  }

  .nav-name {
    font-size: 1.5rem;
  }

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

  @media only screen and (max-width: 719px) {


    .rachel {
      margin-top: 50px !important;
    }
  }

  @media only screen and (max-width: 500px) {
    .handdiv {
      background-size: 60%;
    }
  }

  @media only screen and (max-height: 500px) {
    .handdiv {
      background-size: 60%;
    }
  }

  @media only screen and (min-width: 819px) {
    .navbar-toggle-small {
      display: none;
    }
  }

  @media only screen and (max-width: 820px) {
    .navbar-toggle-large {
      display: none;
    }
  }

  .close {
    color: white !important;
  }



  /* bootstrap navbar css */
  .navbar.navbar-1 .navbar-toggler-icon {
    background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');
  }
</style>