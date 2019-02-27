<template>
  <div>
    <!-- large navbar -->
    <div class="navbar-toggle-large">
      <div class="row container-fluid ml-0 mr-0 pt-3 d-flex align-items-center">
        <div class="col-4 d-flex" @click="goHome()">
          <p style="font-size: 1.5rem;">R A C H E L &nbsp; H A Y S</p>
        </div>
        <div class="col-2">
          <p>Illustration</p>
        </div>
        <div class="col-2">
          <p>Shop</p>
        </div>
        <div class="col-2">
          <p>Comics</p>
        </div>
        <a class="col-2" @click="goAbout()">
          <p>About</p>
        </a>
      </div>
    </div>


    <!-- Navbar Small -->
    <div class="navbar-toggle-small">
      <div class="pos-f-t" id="nav-small">
        <nav class="navbar navbar-light bg-light">
          <div class="col-m-6" @click="goHome()">
            <p style="font-size: 1.5rem;">R A C H E L &nbsp; H A Y S</p>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4 d-flex justify-content-around" style="align-items: flex-end; color: white;">
            <span>Home</span>
            <span>Portfolio</span>
            <span @click="goAbout()">About</span>
            <span>Contact</span>
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
      }
    }
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

  @media only screen and (min-width: 799px) {
    .navbar-toggle-small {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    .navbar-toggle-large {
      display: none;
    }
  }

  /* bootstrap navbar css */
  .navbar.navbar-1 .navbar-toggler-icon {
    background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');
  }
</style>