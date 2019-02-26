import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Images: [
      { url: "https://i.imgur.com/IGuIXQ7.jpg", alt: "You cant undo this", description: "Square thing", name: "Knots" },
      { url: "https://i.imgur.com/lCK0ZMw.jpg", alt: "It's all a game", description: "Square thing", name: "It's all a game" },
      { url: "https://i.imgur.com/WlFwjqZ.png", alt: 'horsetheif', description: "knots and thieves", name: "uewrwu" },
      { url: "https://i.imgur.com/zrfmwze.jpg", alt: 'Ants comic', description: "Long comic", name: "Ants" },
      { url: "https://i.imgur.com/hsJzWCk.jpg", alt: 'Braids', description: "Braid comic", name: "Braids" },
      { url: "https://i.imgur.com/BDRpfva.jpg", alt: 'horsetheif', description: "knots and thieves", name: "fjadskf" },
      { url: "https://i.imgur.com/saeUOZq.jpg", alt: 'horsetheif', description: "knots and thieves", name: "jjjjee" },
      { url: "https://i.imgur.com/EIw8DyH.jpg", alt: 'horsetheif', description: "knots and thieves", name: "baefw" },
      { url: "https://i.imgur.com/TSTqcHc.jpg", alt: 'horsetheif', description: "knots and thieves", name: "bhaewj" },
      { url: "https://i.imgur.com/lQq21bo.jpg", alt: 'horsetheif', description: "knots and thieves", name: "jadsfjka;" },
      { url: "https://i.imgur.com/zTlR6Fw.jpg", alt: 'horsetheif', description: "knots and thieves", name: "herewqh" },
      { url: "https://i.imgur.com/8kR546g.jpg", alt: 'horsetheif', description: "knots and thieves", name: "nnnmm" },
      { url: "https://i.imgur.com/metpmoP.jpg", alt: 'horsetheif', description: "knots and thieves", name: "qqweqwe" },
      { url: "https://i.imgur.com/muv1zSA.jpg", alt: 'horsetheif', description: "knots and thieves", name: "ppppole" },
      { url: "https://i.imgur.com/Tu4jOZ9.jpg", alt: 'horsetheif', description: "knots and thieves", name: "hasdafh" },
      { url: "https://i.imgur.com/GkCR1AH.jpg", alt: 'horsetheif', description: "knots and thieves", name: "zcxvnz" },
      { url: "https://i.imgur.com/Erq6dBq.jpg", alt: 'horsetheif', description: "knots and thieves", name: "vcz" },
      { url: "https://i.imgur.com/DlH8yFi.jpg", alt: 'moth', description: "knots and thieves", name: "vczfefe" },
      { url: "https://i.imgur.com/2pEYGFS.jpg", alt: 'moth', description: "knots and thieves", name: "vcdadfz" },
      { url: "https://i.imgur.com/8xu4a82.jpg", alt: 'moth', description: "knots and thieves", name: "vadfgcz" },
      { url: "https://i.imgur.com/zvUxxuZ.jpg", alt: 'moth', description: "knots and thieves", name: "vdafacz" },
      // { url: "https://i.imgur.com/Kgo8SxM.jpg", alt: 'moth', description: "knots and thieves", name: "vcdafaz" },
      { url: "https://i.imgur.com/KVN2vMQ.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfaz" },
      { url: "https://i.imgur.com/BAVyCyj.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfagz" },
      { url: "https://i.imgur.com/ZMtCmBU.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfdfaagz" },
      { url: "https://i.imgur.com/buI3FXy.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfdfafafagz" },
      { url: "https://i.imgur.com/sXXl6an.jpg", alt: 'moth', description: "knots and thieves", name: "vcddssfafagz" },
    ]
    // images: [
    //   "/img/0-2.97047606.jpg",
    //   "/img/allagame.f85e37b1.jpg",
    //   "/img/antscomic.b6d094a8.jpg",
    //   "/img/braid.47e20cf0.jpg",
    //   "/img/horsethief.6057512c.jpg"
    // ]
  },
  mutations: {

  },
  actions: {
    getImages() {
      return this.state.images
    }
  }
})
