(this["webpackJsonpgamarra-ar"]=this["webpackJsonpgamarra-ar"]||[]).push([[0],{107:function(e,t,a){},115:function(e,t){window.AFRAME.registerComponent("foo",{init:function(){this.el.addEventListener("click",(function(e){console.log("HELLO"),window.location.href="https://www.bata.pe"}))}})},131:function(e,t){window.AFRAME.registerComponent("peakfinder",{init:function(){var e=this;this.loaded=!1,window.addEventListener("gps-camera-update-position",(function(t){!1===e.loaded&&(e._loadPeaks(t.detail.position.longitude,t.detail.position.latitude),e.loaded=!0)}))},_loadPeaks:function(e,t){var a=2e3;console.log(e),console.log(t);var n=document.createElement("a-text");n.setAttribute("look-at","[gps-projected-camera]"),n.setAttribute("value","Hola"),n.setAttribute("scale",{x:a,y:a,z:a}),n.setAttribute("gps-projected-entity-place",{latitude:t+3e-4,longitude:e+3e-4}),this.el.appendChild(n)}})},132:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(51),a(52),a(10)),s=a.n(r),o=(a(56),a(6)),c=a(7),l=a(9),d=a(8),u=(a(57),a(11)),j=a(4),b=(a(106),a(107),a(17)),p=(a(108),a.p+"static/media/logo.b30ed51f.png"),g=a(1),h=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(g.jsx)("hashHistory",{basename:"/gamarra-ar",children:Object(g.jsxs)("div",{class:"container",children:[Object(g.jsx)("div",{class:"row",children:Object(g.jsx)("div",{class:"col",children:Object(g.jsx)("img",{src:p,class:"img-fluid"})})}),Object(g.jsx)("div",{class:"row",className:"mb-2",children:Object(g.jsx)("div",{class:"col text-center",children:Object(g.jsx)(u.Button,{component:b.b,className:"btn btn-primary btn-lg btn-block",to:"/arlocation",children:"AR"})})}),Object(g.jsx)("div",{class:"row",className:"mb-2",children:Object(g.jsx)("div",{class:"col text-center",children:Object(g.jsx)(u.Button,{component:b.b,className:"btn btn-primary btn-lg btn-block",to:"/maplocation",children:"Mapa"})})})]})})}}]),a}(n.Component),m=(a(115),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("a-scene",{"vr-mode-ui":"enabled: false",cursor:"rayOrigin: mouse",renderer:"antialias: true; alpha:true",arjs:"videoTexture: true; sourceType: webcam; debugUIEnabled: false",children:[Object(g.jsx)("a-assets",{children:Object(g.jsx)("img",{id:"my-image",src:"./store.png",crossOrigin:"anonymous"})}),Object(g.jsxs)("a-entity",{id:"point_card_1","gps-entity-place":"latitude: -12.0751071; longitude: -77.0803832;",foo:!0,"look-at":"[gps-camera]",children:[Object(g.jsx)("a-plane",{id:"background",color:"#921ace",height:"1.2",width:"3.6",position:"0 -0.5 -12"}),Object(g.jsx)("a-text",{id:"name",value:"Abraham Store",scale:"1 1 1",position:"-0.4 0.1 -10"}),Object(g.jsx)("a-text",{id:"adress",value:"Av La Mar 2223",scale:"0.6 0.6 0.6",position:"-0.4 -0.2 -10"}),Object(g.jsx)("a-text",{id:"interior",value:"Interior 1",scale:"0.6 0.6 0.6",position:"-0.4 -0.4 -10"}),Object(g.jsx)("a-image",{id:"logo",src:"#my-image",scale:"1 1 1",position:"-1 -0.15 -10"})]}),Object(g.jsxs)("a-entity",{id:"point_card_2","gps-entity-place":"latitude: -11.9654429; longitude: -76.9942375;",foo:!0,"look-at":"[gps-camera]",children:[Object(g.jsx)("a-plane",{id:"background",color:"#B21ace",height:"1.2",width:"3.6",position:"0 -0.5 -12"}),Object(g.jsx)("a-text",{id:"name",value:"Ailton Store",scale:"1 1 1",position:"-0.4 0.1 -10"}),Object(g.jsx)("a-text",{id:"adress",value:"Av La Mar 2223",scale:"0.6 0.6 0.6",position:"-0.4 -0.2 -10"}),Object(g.jsx)("a-text",{id:"interior",value:"Interior 1",scale:"0.6 0.6 0.6",position:"-0.4 -0.4 -10"}),Object(g.jsx)("a-image",{id:"logo",src:"#my-image",scale:"1 1 1",position:"-1 -0.15 -10"})]}),Object(g.jsx)("a-camera",{"gps-camera":!0,"rotation-reader":!0,children:" "})]})})}}]),a}(n.Component)),v=a(30),O=a(16),x=a.n(O),f=a(22),y=a(23),A=a(18),k=a.n(A),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,showingInfoWindow:!1,activeMarker:{},selectedPlace:{},mapCenter:{lat:-12.0647762,lng:-77.0165612},stores:[]},e.onMarkerClick=function(t,a,n){return e.setState({selectedPlace:t,activeMarker:a,showingInfoWindow:!0})},e.onMapClicked=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;console.log("Latitude is :",t),console.log("Longitude is :",a)})),this.setState({stores:[{id:1,name:"Victors Nombre Comercial",adress:"Av. Agustin Gamarra 140",latitude:-12.0641762,longitude:-77.1525624},{id:2,name:"Kayser",adress:"Av Agustin Gamarra 650",latitude:-12.0665232,longitude:-77.01325109999999},{id:3,name:"Mya Line",adress:"Av. Agustin Gamarra 1103",latitude:-12.0695634,longitude:-77.0128069},{id:4,name:"Mya Line",adress:"Av Agustin Gamarra 1105",latitude:-12.0694625,longitude:-77.0127509},{id:5,name:"Pioner",adress:"Av Agustin Gamarra 445",latitude:-12.0652889,longitude:-77.154501},{id:6,name:"Bata",adress:"Av. Agustin Gamarra 1017",latitude:-12.0684229,longitude:-77.0128529},{id:7,name:"Kayser",adress:"Av. La Mar 2225 - San Miguel",latitude:-12.0750562,longitude:-77.08071819999999},{id:8,name:"Bata",adress:"Av. La Marina 2000, San Miguel",latitude:-12.0761542,longitude:-77.083643},{id:9,name:"Bata",adress:"Jiron Jose Galvez 522 - B",latitude:-12.0903509,longitude:-77.07283799999999},{id:10,name:"Bata",adress:"Av. La Mar 2275, San Miguel",latitude:-12.0749941,longitude:-77.08168979999999},{id:11,name:"Victors Nombre Comercial",adress:"Av. Las Carmelias 234",latitude:-12.0931147,longitude:-77.0293717},{id:12,name:"Angelas Flowers",adress:"Av. Las Carmelias 234",latitude:-12.0931147,longitude:-77.0293717},{id:13,name:"Victors Nombre Comercial",adress:"Av. Las Carmelias 234",latitude:-12.0931147,longitude:-77.0293717},{id:14,name:"Victors Nombre Comercial",adress:"Av. Las Carmelias 234",latitude:-12.0931147,longitude:-77.0293717},{id:15,name:"Angelas Flowers",adress:"Av. Las Carmelias 234",latitude:-12.0931147,longitude:-77.0293717},{id:16,name:"Abraham Store",adress:"Av. Universitaria",latitude:-12.0751071,longitude:-77.0803832}],loading:!1})}},{key:"distance",value:function(e,t,a,n,i){if(e==a&&t==n)return 0;var r=Math.PI*e/180,s=Math.PI*a/180,o=t-n,c=Math.PI*o/180,l=Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(c);return l>1&&(l=1),l=60*(l=180*(l=Math.acos(l))/Math.PI)*1.1515,"K"==i&&(l*=1.609344),"N"==i&&(l*=.8684),l}},{key:"get_data_stores",value:function(){var e=this;fetch("https://gamarraappserviceapi.azurewebsites.net/api/Usuario/ListUsuariosByCoordenadas/200/200").then((function(e){return e.json()})).then((function(t){var a=t.usuariosRolTiendaByQuery;console.log(a),e.get_stores(a).then((function(t){e.setState({stores:t,loading:!1})}))}))}},{key:"get_location_from_adress",value:function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.a.setApiKey("AIzaSyAwO1y7_y1hk2V9HR1FNCyQFB1JjdCVzk8"),k.a.setLanguage("es"),k.a.setRegion("pe"),e.next=5,k.a.fromAddress(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"get_stores",value:function(){var e=Object(f.a)(x.a.mark((function e(t){var a,n,i,r,s,o,c,l,d,u,j;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=1,n=[],i=t.sort(),r=Object(v.a)(i),e.prev=4,r.s();case 6:if((s=r.n()).done){e.next=20;break}return o=s.value,c=o.direccion_Direccion,console.log(c),e.next=12,this.get_location_from_adress(c);case 12:l=e.sent,console.log(l),d=l.results[0].geometry.location,u=d.lat,j=d.lng,console.log(u,j),n.push({id:a,name:o.nombresComercial,adress:c,latitude:u,longitude:j}),a++;case 18:e.next=6;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(4),r.e(e.t0);case 25:return e.prev=25,r.f(),e.finish(25);case 28:return console.log(n),e.abrupt("return",n);case 30:case"end":return e.stop()}}),e,this,[[4,22,25,28]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(g.jsx)("div",{children:"Cargando..."}):Object(g.jsxs)(y.Map,{google:this.props.google,initialCenter:{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng},children:[this.state.stores.map((function(e){return Object(g.jsx)(y.Marker,{position:{lat:e.latitude,lng:e.longitude},children:Object(g.jsx)(y.InfoWindow,{children:Object(g.jsx)("div",{children:e.name})})},e.id)})),Object(g.jsx)(y.InfoWindow,{pixelOffset:"0",marker:this.state.activeMarker,visible:this.state.showingInfoWindow,children:Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:this.state.selectedPlace.name})})})]})}}]),a}(n.Component),C=Object(y.GoogleApiWrapper)({apiKey:"AIzaSyAwO1y7_y1hk2V9HR1FNCyQFB1JjdCVzk8"})(w),M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"Map"}),Object(g.jsx)(C,{})]})}}]),a}(n.Component);n.Component,n.Component;a(131);n.Component,n.Component;var L=function(){return Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(g.jsx)(j.a,{path:"/arlocation",component:m}),Object(g.jsx)(j.a,{path:"/maplocation",component:M})]})},I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(g.jsx)(b.a,{basename:"/gamarra-ar",children:Object(g.jsx)("div",{className:"demo-big-content",children:Object(g.jsxs)(u.Layout,{children:[Object(g.jsx)(u.Header,{className:"header-color",title:Object(g.jsx)(b.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Gamarra Web App"}),scroll:!0,children:Object(g.jsxs)(u.Navigation,{children:[Object(g.jsx)(b.b,{to:"/",children:"Inicio"}),Object(g.jsx)(b.b,{path:"https://kyssnar.github.io/location-ar0a8hz/",children:"AR"}),Object(g.jsx)(b.b,{to:"/maplocation",children:"Mapa"})]})}),Object(g.jsxs)(u.Content,{children:[Object(g.jsx)("div",{className:"page-content"}),Object(g.jsx)(L,{})]})]})})})}}]),a}(n.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),_()},56:function(e,t,a){},57:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.4bf50d90.chunk.js.map