(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)s=o[u],r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2c437b16"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");s.type=a,s.request=i,n[1](s)}r[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/rachel-gallery/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"550c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navigation"),n("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100vh"}},[a("div",{staticClass:"row container-fluid ml-0 mr-0 mt-2"},[a("div",{staticClass:"rachel col-12 col-md-12 col-lg-12"},[a("span",{staticClass:"raleway"},[t._v("R A C H E L")])]),a("div",{staticClass:"hays col-12 col-md-12 col-lg-12 d-flex justify-content-center"},[a("span",{staticClass:"raleway"},[t._v("H A Y S")])])]),a("div",{staticClass:"row container-fluid ml-0 mr-0"},[a("div",{staticClass:"col-12 pt-3 handdiv"},[a("img",{staticClass:"image hands-size",attrs:{src:n("d688"),alt:""}})])])])}],c={name:"navigation",data(){return{}},computed:{},methods:{}},l=c,u=(n("f90c"),n("2877")),m=Object(u["a"])(l,s,o,!1,null,null,null),p=m.exports,d={name:"app",components:{navigation:p}},h=d,f=(n("034f"),Object(u["a"])(h,r,i,!1,null,null,null)),g=f.exports,v=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("navigation"),n("div",{staticClass:"d-flex justify-content-center",staticStyle:{"margin-top":"80px"}},[n("div",{staticClass:"card-columns",staticStyle:{width:"95%"}},t._l(t.Images,function(e){return n("div",{key:e.name,staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"col pl-0 pr-0"},[n("div",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"myModal"+e.name,expression:"'myModal' + image.name"}],staticClass:"card",attrs:{"cancel-variant":""}},[n("img",{staticClass:"card-img-top",attrs:{src:e.url}})]),n("b-modal",{attrs:{id:"myModal"+e.name,title:"Rachel's Photo"}},[n("img",{staticClass:"card-img-top",attrs:{src:e.url}}),n("p",{staticClass:"my-4"},[t._v("Hello from modal!")])])],1)])}),0)])],1)},b=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},w=[],C={name:"HomeComponent",data(){return{}},computed:{Images(){return this.$store.state.images}}},k=C,_=Object(u["a"])(k,y,w,!1,null,"b1820362",null),x=_.exports,O={name:"home",components:{HomeComponent:x},mounted(){this.$store.dispatch("getImages")},computed:{Images(){return this.$store.state.Images}}},S=O,q=(n("cccb"),Object(u["a"])(S,j,b,!1,null,null,null)),I=q.exports;a["a"].use(v["a"]);var E=new v["a"]({routes:[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),P=n("2f62");a["a"].use(P["a"]);var z=new P["a"].Store({state:{Images:[{url:"https://i.imgur.com/IGuIXQ7.jpg",alt:"You cant undo this",description:"Square thing",name:"Knots"},{url:"https://i.imgur.com/lCK0ZMw.jpg",alt:"It's all a game",description:"Square thing",name:"It's all a game"},{url:"https://i.imgur.com/WlFwjqZ.png",alt:"horsetheif",description:"knots and thieves",name:"uewrwu"},{url:"https://i.imgur.com/zrfmwze.jpg",alt:"Ants comic",description:"Long comic",name:"Ants"},{url:"https://i.imgur.com/hsJzWCk.jpg",alt:"Braids",description:"Braid comic",name:"Braids"},{url:"https://i.imgur.com/BDRpfva.jpg",alt:"horsetheif",description:"knots and thieves",name:"fjadskf"},{url:"https://i.imgur.com/saeUOZq.jpg",alt:"horsetheif",description:"knots and thieves",name:"jjjjee"},{url:"https://i.imgur.com/EIw8DyH.jpg",alt:"horsetheif",description:"knots and thieves",name:"baefw"},{url:"https://i.imgur.com/TSTqcHc.jpg",alt:"horsetheif",description:"knots and thieves",name:"bhaewj"},{url:"https://i.imgur.com/lQq21bo.jpg",alt:"horsetheif",description:"knots and thieves",name:"jadsfjka;"},{url:"https://i.imgur.com/zTlR6Fw.jpg",alt:"horsetheif",description:"knots and thieves",name:"herewqh"},{url:"https://i.imgur.com/8kR546g.jpg",alt:"horsetheif",description:"knots and thieves",name:"nnnmm"},{url:"https://i.imgur.com/metpmoP.jpg",alt:"horsetheif",description:"knots and thieves",name:"qqweqwe"},{url:"https://i.imgur.com/muv1zSA.jpg",alt:"horsetheif",description:"knots and thieves",name:"ppppole"},{url:"https://i.imgur.com/Tu4jOZ9.jpg",alt:"horsetheif",description:"knots and thieves",name:"hasdafh"},{url:"https://i.imgur.com/GkCR1AH.jpg",alt:"horsetheif",description:"knots and thieves",name:"zcxvnz"},{url:"https://i.imgur.com/Erq6dBq.jpg",alt:"horsetheif",description:"knots and thieves",name:"vcz"}]},mutations:{},actions:{getImages(){return this.state.images}}}),T=n("9f7b");n("f9e3"),n("2dd8");a["a"].use(T["a"]),a["a"].config.productionTip=!1,new a["a"]({router:E,store:z,render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("d563"),r=n.n(a);r.a},d563:function(t,e,n){},d688:function(t,e,n){t.exports=n.p+"img/naturalmythologystamphands.fcf0fe79.png"},f90c:function(t,e,n){"use strict";var a=n("550c"),r=n.n(a);r.a}});
//# sourceMappingURL=app.1144c792.js.map