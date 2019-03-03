import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Images: [
      { url: "https://i.imgur.com/IGuIXQ7.jpg", alt: "You cant undo this", description: "Twin Brain Comics Series (2018)", type: "digital drawing", name: "You Can't Undo This" },

      { url: "https://i.imgur.com/WlFwjqZ.png", alt: 'Transformation', description: "(2018)", name: "Transfomation", type: 'risograph print' },
      { url: "https://i.imgur.com/hsJzWCk.jpg", alt: 'Blueberry House', description: "(2011)", name: "Blueberry House", type: "marker on colored paper" },
      { url: "https://i.imgur.com/BDRpfva.jpg", alt: 'Braids', description: "(2015)", name: "Braids", type: 'marker on paper' },
      { url: "https://i.imgur.com/saeUOZq.jpg", alt: 'You Can End This', description: "Twin Brain Comics Series (2018)", name: "You Can End This", type: 'digital drawing' },
      {
        url: "https://i.imgur.com/EIw8DyH.jpg", alt: 'Fail To Sleep', description: "published in Fail Times #1 (2018)", name: "Fail To Sleep", type: "pen on paper"
      },
      { url: "https://i.imgur.com/lCK0ZMw.jpg", alt: "Let's. Its All A Gamble", description: "Twin Brain Comics Series (2018)", type: "digital drawing", name: "It's All A Gamble" },

      { url: "https://i.imgur.com/zTlR6Fw.jpg", alt: 'Open Up', description: "(2017)", name: "Open Up", type: "screen print" },
      { url: "https://i.imgur.com/metpmoP.jpg", alt: "We Can't... It's Too Risky", description: "Twin Brain Comics Series (2018)", name: "We Can't... It's Too Risky", type: "digital drawing" },
      { url: "https://i.imgur.com/muv1zSA.jpg", alt: 'Thank You', description: "(2018)", name: "Thank You", type: "digital drawing" },
      { url: "https://i.imgur.com/Tu4jOZ9.jpg", alt: 'Trans Rights Are Human Rights', description: "(2018)", name: "Trans Rights Are Human Rights", type: "digital drawing" },
      { url: "https://i.imgur.com/GkCR1AH.jpg", alt: 'You Are Real', description: "(2018)", name: "You Are Real", type: "screen print" },
      { url: "https://i.imgur.com/Erq6dBq.jpg", alt: "Your 'Hey' Echoes Into The Void", description: "published in Smoke Signal anthology (2016)", name: "Your 'Hey' Echoes Into The Voiid", type: 'pen on paper' },
      { url: "https://i.imgur.com/ZMtCmBU.jpg", alt: 'Horsetheif Knot', description: "(2018)", name: "Horsethief Knot", type: 'pen and colored pencil on paper' },
      { url: "https://i.imgur.com/2pEYGFS.jpg", alt: 'Botanical Fortune Teller', description: "(2014)", name: "Botanical Fortune Teller", type: "marker on paper" },
      { url: "https://i.imgur.com/8xu4a82.jpg", alt: 'Fishing', description: "(2014)", name: "Fishing", type: "water colors and colored pencil" },
      { url: "https://i.imgur.com/zvUxxuZ.jpg", alt: 'Dissolving Knot', description: "(2018)", name: "Dissolving Knot", type: "colored pencil on paper" },
      { url: "https://i.imgur.com/KVN2vMQ.jpg", alt: 'No Dancing', description: "published online by Redefine Magazine (2010)", name: "No Dancing", type: "marker on paper" },
      { url: "https://i.imgur.com/BAVyCyj.jpg", alt: 'Tattoo', description: "published online by Redefine Magazine (2010)", name: "Tattoo", type: "marker on paper" },
      { url: "https://i.imgur.com/buI3FXy.jpg", alt: 'Trains Across The Sea', description: "published online by Redefine Magazine (2010)", name: "Trains Across The Sea", type: "pen and watercolor on paper" },
      { url: "https://i.imgur.com/sXXl6an.jpg", alt: 'Dreamthink', description: "published online by Redefine Magazine (2010)", name: "Dreamthink", type: "pen and watercolor on paper" },
      { url: "https://i.imgur.com/8R7ZLML.jpg", alt: "Coin Flip", description: "(2018)", name: "Coin Flip", type: "digital drawing" },
      { url: "https://i.imgur.com/0Z6Y532.jpg", alt: 'We Are Real', description: "published online by Redefine Magazine (2010)", name: "We Are Real", type: "pen and watercolor on paper" },
      { url: "https://i.imgur.com/YJioQfe.jpg", alt: 'Make It So', description: "(2018)", name: "Make It So", type: "digital drawing" },
      { url: "https://i.imgur.com/lQq21bo.jpg", alt: 'Never Mind What Is Real', description: "Twin Brain Comics Series (2018)", name: "Never Mind What Is Real", type: "digital drawing" },
      { url: "https://i.imgur.com/TKCuW9s.jpg", alt: 'Stand Fast', description: "(2018)", name: "Stand Fast", type: "digital drawing" },
      { url: "https://i.imgur.com/gR2TGj2.jpg", alt: 'Ants', description: "Published in Secret Prisons #4 (2011)", name: "Ants", type: "pen on paper" },
      { url: "https://i.imgur.com/4UdrXAK.jpg", alt: 'Wait For It', description: "(2018)", name: "Wait For It", type: "digital drawing" },
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
    },
    goContact() {
      router.push({ name: 'contact' })
    }
  }
})
