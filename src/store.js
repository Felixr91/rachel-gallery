import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Images: [
      { url: "https://i.imgur.com/IGuIXQ7.jpg", alt: "You cant undo this", description: "Square thing", name: "Knots" },
      { url: "https://i.imgur.com/lCK0ZMw.jpg", alt: "It's all a game", description: "Square thing", name: "It's all a game" },
      { url: "https://i.imgur.com/WlFwjqZ.png", alt: 'horsetheif', description: "knots and thieves", name: "uewrwu" },
      { url: "https://i.imgur.com/hsJzWCk.jpg", alt: 'Braids', description: "Braid comic", name: "Braids" },
      { url: "https://i.imgur.com/BDRpfva.jpg", alt: 'horsetheif', description: "knots and thieves", name: "fjadskf" },
      { url: "https://i.imgur.com/saeUOZq.jpg", alt: 'horsetheif', description: "knots and thieves", name: "jjjjee" },
      { url: "https://i.imgur.com/EIw8DyH.jpg", alt: 'horsetheif', description: "knots and thieves", name: "baefw" },
      { url: "https://i.imgur.com/lQq21bo.jpg", alt: 'horsetheif', description: "knots and thieves", name: "jadsfjka;" },
      { url: "https://i.imgur.com/zTlR6Fw.jpg", alt: 'horsetheif', description: "knots and thieves", name: "herewqh" },
      { url: "https://i.imgur.com/metpmoP.jpg", alt: 'horsetheif', description: "knots and thieves", name: "qqweqwe" },
      { url: "https://i.imgur.com/muv1zSA.jpg", alt: 'horsetheif', description: "knots and thieves", name: "ppppole" },
      { url: "https://i.imgur.com/Tu4jOZ9.jpg", alt: 'horsetheif', description: "knots and thieves", name: "hasdafh" },
      { url: "https://i.imgur.com/GkCR1AH.jpg", alt: 'horsetheif', description: "knots and thieves", name: "zcxvnz" },
      { url: "https://i.imgur.com/Erq6dBq.jpg", alt: 'horsetheif', description: "knots and thieves", name: "vcz" },
      { url: "https://i.imgur.com/DlH8yFi.jpg", alt: 'moth', description: "knots and thieves", name: "vczfefe" },
      { url: "https://i.imgur.com/2pEYGFS.jpg", alt: 'moth', description: "knots and thieves", name: "vcdadfz" },
      { url: "https://i.imgur.com/8xu4a82.jpg", alt: 'moth', description: "knots and thieves", name: "vadfgcz" },
      { url: "https://i.imgur.com/zvUxxuZ.jpg", alt: 'moth', description: "knots and thieves", name: "vdafacz" },
      { url: "https://i.imgur.com/KVN2vMQ.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfaz" },
      { url: "https://i.imgur.com/BAVyCyj.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfagz" },
      { url: "https://i.imgur.com/ZMtCmBU.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfdfaagz" },
      { url: "https://i.imgur.com/buI3FXy.jpg", alt: 'moth', description: "knots and thieves", name: "vcadfdfafafagz" },
      { url: "https://i.imgur.com/sXXl6an.jpg", alt: 'moth', description: "knots and thieves", name: "vcddssfafagz" },
      { url: "https://i.imgur.com/8R7ZLML.jpg", alt: 'moth', description: "knots and thieves", name: "vcddssfadffagz" },
      { url: "https://i.imgur.com/0Z6Y532.jpg", alt: 'moth', description: "knots and thieves", name: "vcqweqfadffagz" },
      { url: "https://i.imgur.com/YJioQfe.jpg", alt: 'moth', description: "knots and thieves", name: "vcqyufffagz" },
      { url: "https://i.imgur.com/TKCuW9s.jpg", alt: 'moth', description: "knots and thieves", name: "vcqyufffadgz" },
      { url: "https://i.imgur.com/gR2TGj2.jpg", alt: 'moth', description: "knots and thieves", name: "vcqbeygz" },
      { url: "https://i.imgur.com/4UdrXAK.jpg", alt: 'moth', description: "knots and thieves", name: "vcqbeygz" },
    ]
  },
  mutations: {

  },
  actions: {
    goAbout() {
      router.push({ name: 'aboutRachel' })
    },
    goHome() {
      router.push({ name: 'home' });
    }
  }
})
