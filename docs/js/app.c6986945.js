(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)o=s[p],r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/rachelhays/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0c57":function(e,t,a){"use strict";var n=a("ffd3"),r=a.n(n);r.a},"550c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navigation"),a("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navbar-toggle-large"},[a("div",{staticClass:"row container-fluid ml-0 mr-0 pt-3 d-flex align-items-center"},[a("div",{staticClass:"col-4 d-flex",on:{click:function(t){return e.goHome()}}},[a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#"}},[a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3,origin:"right",distance:"300px"},expression:"{ delay: 250,  duration: 2000,\n    origin: 'right',\n    distance: '300px' }",modifiers:{reset:!0}}],staticClass:"nav-name"},[e._v("R A C H E L   H A Y S")])])]),a("a",{staticClass:"col-2",on:{click:function(t){return e.goHome()}}},[a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#"}},[a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3,origin:"left",distance:"200px"},expression:"{ delay: 250,  duration: 2000,\n            origin: 'left',\n            distance: '200px' }",modifiers:{reset:!0}}]},[e._v("Home")])])]),a("div",{staticClass:"col-2"},[a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"https://www.naturalmythology.com/products",target:"_blank"}},[a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3,origin:"left",distance:"200px"},expression:"{ delay: 250,  duration: 2000,\n    origin: 'left',\n    distance: '200px' }",modifiers:{reset:!0}}]},[e._v("Shop")])])]),a("a",{staticClass:"col-2",on:{click:function(t){return e.goContact()}}},[a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#"}},[a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3,origin:"left",distance:"200px"},expression:"{ delay: 250,  duration: 2000,\n                    origin: 'left',\n                    distance: '200px' }",modifiers:{reset:!0}}]},[e._v("Contact")])])]),a("a",{staticClass:"col-2",on:{click:function(t){return e.goAbout()}}},[a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#"}},[a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3,origin:"left",distance:"200px"},expression:"{ delay: 250,  duration: 2000,\n    origin: 'left',\n    distance: '200px' }",modifiers:{reset:!0}}]},[e._v("About")])])])])]),a("div",{staticClass:"navbar-toggle-small"},[a("div",{staticClass:"pos-f-t",attrs:{id:"nav-small"}},[a("nav",{staticClass:"navbar navbar-light"},[a("div",{staticClass:"col-m-6",on:{click:function(t){return e.goHome()}}},[a("p",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3,origin:"right",distance:"300px"},expression:"{ delay: 250,  duration: 2000, origin: 'right',\n    distance: '300px' }",modifiers:{reset:!0}}],staticClass:"nav-name-small"},[e._v("R A C H E L   H A Y S")])]),a("button",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3,origin:"left",distance:"300px"},expression:"{ delay: 250,  duration: 2000,\n    origin: 'left',\n    distance: '300px' }",modifiers:{reset:!0}}],staticClass:"navbar-toggler",staticStyle:{outline:"0"},attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])]),a("div",{staticClass:"collapse",attrs:{id:"navbarToggleExternalContent"}},[a("div",{staticClass:"bg-light p-4 d-flex justify-content-around",staticStyle:{"align-items":"flex-end",color:"black"}},[a("a",{on:{click:function(t){return e.goHome()}}},[e._m(0)]),e._m(1),a("a",{on:{click:function(t){return e.goContact()}}},[e._m(2)]),a("a",{on:{click:function(t){return e.goAbout()}}},[e._m(3)])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#"}},[a("span",[e._v("Home")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://www.naturalmythology.com/products",target:"_blank"}},[a("span",{staticStyle:{"text-decoration":"none",color:"black"}},[e._v("Shop")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#"}},[a("span",[e._v("Contact")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#"}},[a("span",[e._v("About")])])}],l={name:"navigation",data(){return{}},computed:{},methods:{goAbout(){this.$store.dispatch("goAbout")},goHome(){this.$store.dispatch("goHome")},goContact(){this.$store.dispatch("goContact")}}},c=l,u=(a("f90c"),a("2877")),p=Object(u["a"])(c,o,s,!1,null,null,null),d=p.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row container-fluid ml-0 mr-0 hero-query"},[a("div",{staticClass:"col-12 pt-3 handdiv"})])}],v={name:"heroImage",data(){return{}},computed:{},methods:{}},h=v,f=(a("0c57"),Object(u["a"])(h,m,g,!1,null,null,null)),y=f.exports,b={name:"app",components:{navigation:d,heroImage:y}},C=b,x=(a("034f"),Object(u["a"])(C,r,i,!1,null,null,null)),_=x.exports,w=a("8c4f"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("heroImage"),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3},expression:"{ delay: 250,  duration: 2000,}",modifiers:{reset:!0}}],staticClass:"d-flex justify-content-center",staticStyle:{"margin-top":"80px"}},[a("div",{staticClass:"card-columns",staticStyle:{width:"95%"}},e._l(e.Images,function(t){return a("div",{key:t.name,staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"col pl-0 pr-0"},[a("div",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"myModal"+t.name,expression:"'myModal' + image.name"}],staticClass:"card",staticStyle:{border:"none"},attrs:{"cancel-variant":""}},[a("img",{staticClass:"card-img-top",attrs:{src:t.url}})]),a("b-modal",{attrs:{id:"myModal"+t.name}},[a("img",{staticClass:"card-img-top",attrs:{src:t.url}}),a("p",{staticClass:"my-4"},[e._v(e._s(t.name))]),a("p",{staticClass:"my-4"},[a("i",[e._v(e._s(t.description))])]),a("p",{staticClass:"my-4"},[e._v(e._s(t.type))])])],1)])}),0)])],1)},S=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},T=[],A={name:"HomeComponent",data(){return{}},computed:{Images(){return this.$store.state.images}}},R=A,H=Object(u["a"])(R,k,T,!1,null,"b1820362",null),I=H.exports,E={name:"home",components:{HomeComponent:I,heroImage:y},mounted(){},computed:{Images(){return this.$store.state.Images}}},M=E,O=(a("cccb"),Object(u["a"])(M,j,S,!1,null,null,null)),$=O.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:250,duration:2e3},expression:"{ delay: 250,  duration: 2000,}",modifiers:{reset:!0}}],staticClass:"row about-bg d-flex justify-content-center row-height"},[a("div",{staticClass:"layer"},[a("div",{staticClass:"col-12 d-flex align-items-center about-height"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:400,duration:5e3},expression:"{ delay: 400,  duration: 5000,}",modifiers:{reset:!0}}],staticClass:"about-padding"},[a("h4",{staticClass:"text-font"},[e._v("Artist Bio")]),a("hr",{staticClass:"about-line"}),a("p",[e._v("Rachel Hays is an illustrator and comics artist originally from the Western US. She's inspired by plant\n          folklore,\n          quilting patterns, gemstones, tarot, numerology, knots, and vintage lettering. Her illustrations reflect a\n          love of the\n          handmade, and the poetry of symbols.")])])])])])},F=[],N={name:"aboutRachel",data(){return{}},computed:{},methods:{}},Y=N,W=(a("fee6"),Object(u["a"])(Y,B,F,!1,null,null,null)),z=W.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:400,duration:5e3},expression:"{ delay: 400,  duration: 5000,}",modifiers:{reset:!0}}],staticClass:"col-12"},[a("h4",{staticClass:"text-font"},[e._v("Contact")]),a("hr",{staticClass:"about-line"}),a("h5",{staticClass:"mt-5"},[e._v("Email")]),a("p",[e._v("rachelhays@gmail.com")]),a("h5",{staticClass:"mt-5"},[e._v("Mail")]),a("p",[e._v("1111 South Orchard Street")]),a("p",[e._v("Boise, Idaho 83705")]),a("p",[e._v("suite #203")])])])},D=[],K={name:"contact",data(){return{}},computed:{},methods:{}},U=K,Z=(a("fe4d"),Object(u["a"])(U,P,D,!1,null,null,null)),q=Z.exports;n["a"].use(w["a"]);var G=new w["a"]({routes:[{path:"/",name:"home",component:$},{path:"/aboutRachel",name:"aboutRachel",component:z},{path:"/contact",name:"contact",component:q}]}),L=a("2f62");n["a"].use(L["a"]);var X=new L["a"].Store({state:{Images:[{url:"https://i.imgur.com/IGuIXQ7.jpg",alt:"You cant undo this",description:"Twin Brain Comics Series (2018)",type:"digital drawing",name:"You Can't Undo This"},{url:"https://i.imgur.com/WlFwjqZ.png",alt:"Transformation",description:"(2018)",name:"Transfomation",type:"risograph print"},{url:"https://i.imgur.com/hsJzWCk.jpg",alt:"Blueberry House",description:"(2011)",name:"Blueberry House",type:"marker on colored paper"},{url:"https://i.imgur.com/BDRpfva.jpg",alt:"Braids",description:"(2015)",name:"Braids",type:"marker on paper"},{url:"https://i.imgur.com/saeUOZq.jpg",alt:"You Can End This",description:"Twin Brain Comics Series (2018)",name:"You Can End This",type:"digital drawing"},{url:"https://i.imgur.com/EIw8DyH.jpg",alt:"Fail To Sleep",description:"published in Fail Times #1 (2018)",name:"Fail To Sleep",type:"pen on paper"},{url:"https://i.imgur.com/lCK0ZMw.jpg",alt:"Let's. Its All A Gamble",description:"Twin Brain Comics Series (2018)",type:"digital drawing",name:"It's All A Gamble"},{url:"https://i.imgur.com/zTlR6Fw.jpg",alt:"Open Up",description:"(2017)",name:"Open Up",type:"screen print"},{url:"https://i.imgur.com/metpmoP.jpg",alt:"We Can't... It's Too Risky",description:"Twin Brain Comics Series (2018)",name:"We Can't... It's Too Risky",type:"digital drawing"},{url:"https://i.imgur.com/muv1zSA.jpg",alt:"Thank You",description:"(2018)",name:"Thank You",type:"digital drawing"},{url:"https://i.imgur.com/Tu4jOZ9.jpg",alt:"Trans Rights Are Human Rights",description:"(2018)",name:"Trans Rights Are Human Rights",type:"digital drawing"},{url:"https://i.imgur.com/GkCR1AH.jpg",alt:"You Are Real",description:"(2018)",name:"You Are Real",type:"screen print"},{url:"https://i.imgur.com/Erq6dBq.jpg",alt:"Your 'Hey' Echoes Into The Void",description:"published in Smoke Signal anthology (2016)",name:"Your 'Hey' Echoes Into The Voiid",type:"pen on paper"},{url:"https://i.imgur.com/ZMtCmBU.jpg",alt:"Horsetheif Knot",description:"(2018)",name:"Horsethief Knot",type:"pen and colored pencil on paper"},{url:"https://i.imgur.com/2pEYGFS.jpg",alt:"Botanical Fortune Teller",description:"(2014)",name:"Botanical Fortune Teller",type:"marker on paper"},{url:"https://i.imgur.com/8xu4a82.jpg",alt:"Fishing",description:"(2014)",name:"Fishing",type:"water colors and colored pencil"},{url:"https://i.imgur.com/zvUxxuZ.jpg",alt:"Dissolving Knot",description:"(2018)",name:"Dissolving Knot",type:"colored pencil on paper"},{url:"https://i.imgur.com/KVN2vMQ.jpg",alt:"No Dancing",description:"published online by Redefine Magazine (2010)",name:"No Dancing",type:"marker on paper"},{url:"https://i.imgur.com/BAVyCyj.jpg",alt:"Tattoo",description:"published online by Redefine Magazine (2010)",name:"Tattoo",type:"marker on paper"},{url:"https://i.imgur.com/buI3FXy.jpg",alt:"Trains Across The Sea",description:"published online by Redefine Magazine (2010)",name:"Trains Across The Sea",type:"pen and watercolor on paper"},{url:"https://i.imgur.com/sXXl6an.jpg",alt:"Dreamthink",description:"published online by Redefine Magazine (2010)",name:"Dreamthink",type:"pen and watercolor on paper"},{url:"https://i.imgur.com/8R7ZLML.jpg",alt:"Coin Flip",description:"(2018)",name:"Coin Flip",type:"digital drawing"},{url:"https://i.imgur.com/0Z6Y532.jpg",alt:"We Are Real",description:"published online by Redefine Magazine (2010)",name:"We Are Real",type:"pen and watercolor on paper"},{url:"https://i.imgur.com/YJioQfe.jpg",alt:"Make It So",description:"(2018)",name:"Make It So",type:"digital drawing"},{url:"https://i.imgur.com/lQq21bo.jpg",alt:"Never Mind What Is Real",description:"Twin Brain Comics Series (2018)",name:"Never Mind What Is Real",type:"digital drawing"},{url:"https://i.imgur.com/TKCuW9s.jpg",alt:"Stand Fast",description:"(2018)",name:"Stand Fast",type:"digital drawing"},{url:"https://i.imgur.com/gR2TGj2.jpg",alt:"Ants",description:"Published in Secret Prisons #4 (2011)",name:"Ants",type:"pen on paper"},{url:"https://i.imgur.com/4UdrXAK.jpg",alt:"Wait For It",description:"(2018)",name:"Wait For It",type:"digital drawing"}]},mutations:{},actions:{goAbout(){G.push({name:"aboutRachel"})},goHome(){G.push({name:"home"})},goContact(){G.push({name:"contact"})}}}),J=a("9f7b"),Q=(a("f9e3"),a("2dd8"),a("4c95")),V=a.n(Q);n["a"].use(J["a"]),n["a"].use(V.a),n["a"].config.productionTip=!1,new n["a"]({router:G,store:X,render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,t,a){},"83a8":function(e,t,a){},cc39:function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("d563"),r=a.n(n);r.a},d563:function(e,t,a){},f90c:function(e,t,a){"use strict";var n=a("550c"),r=a.n(n);r.a},fe4d:function(e,t,a){"use strict";var n=a("83a8"),r=a.n(n);r.a},fee6:function(e,t,a){"use strict";var n=a("cc39"),r=a.n(n);r.a},ffd3:function(e,t,a){}});
//# sourceMappingURL=app.c6986945.js.map