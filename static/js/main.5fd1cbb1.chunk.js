(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(15),i=s.n(n),o=(s(21),s(5)),l=(s(22),s(16)),d=s.n(l),m=s(0),j=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),i=Object(o.a)(n,2),l=i[0],j=i[1],b=Object(a.useState)({name:"",number:"",species:"",image:"",backImage:"",hp:"",attack:"",defense:"",speed:"",type:""}),r=Object(o.a)(b,2),p=r[0],h=r[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"TitleSection",children:[Object(m.jsxs)("h1",{className:"title-browser",children:[Object(m.jsx)("img",{src:"https://img.icons8.com/bubbles/100/000000/pokeball.png"})," POKEMON BROWSER "]}),Object(m.jsx)("p",{children:"Choose a Pokemon:"}),Object(m.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:s.toLowerCase()}),Object(m.jsx)("button",{onClick:function(){d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(s)).then((function(e){h({name:s,number:e.data.id,species:e.data.species.name,image:e.data.sprites.front_default,backImage:e.data.sprites.back_default,hp:e.data.stats[0].base_stat,attack:e.data.stats[1].base_stat,defense:e.data.stats[2].base_stat,speed:e.data.stats[5].base_stat,type:e.data.types[0].type.name}),j(!0)}))},children:"Search Pok\xe9mon"})]}),Object(m.jsx)("div",{className:"DisplaySection",children:l?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"pokemon-name",children:p.name.toUpperCase()}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"image-container",children:[Object(m.jsx)("img",{className:"front_image",src:p.image,alt:p.name}),Object(m.jsx)("img",{className:"back_image",src:p.backImage,alt:p.name})]}),Object(m.jsxs)("div",{className:"detail-container",children:[Object(m.jsxs)("h3",{className:"pokemon-details",children:["Number: #",p.number]}),Object(m.jsxs)("h3",{className:"pokemon-details",children:["Species: ",p.species]}),Object(m.jsxs)("h3",{className:"pokemon-details",children:["Type: ",p.type]}),Object(m.jsxs)("h4",{className:"pokemon-details",children:["Hp: ",p.hp]}),Object(m.jsxs)("h4",{className:"pokemon-details",children:["Attack: ",p.attack]}),Object(m.jsxs)("h4",{className:"pokemon-details",children:["Defense: ",p.defense]}),Object(m.jsxs)("h4",{className:"pokemon-details",children:["Speed: ",p.speed]})]})]})]}):Object(m.jsx)("div",{className:"choosing-container",children:Object(m.jsx)("h1",{className:"choosing-title",children:" Please choose a Pok\xe9mon "})})})]})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.5fd1cbb1.chunk.js.map