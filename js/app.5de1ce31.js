(()=>{"use strict";var e={4647:(e,t,r)=>{var o=r(1957),n=r(1947),a=r(499),i=r(9835);function l(e,t,r,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var d=r(1639);const u=(0,d.Z)(s,[["render",l]]),c=u;var p=r(3340),f=r(8339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(626)]).then(r.bind(r,1626)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(990)]).then(r.bind(r,4990)),name:"index"},{path:"/menu",component:()=>Promise.all([r.e(736),r.e(560)]).then(r.bind(r,7560)),name:"menu"},{path:"/draw",component:()=>Promise.all([r.e(736),r.e(246)]).then(r.bind(r,1246)),name:"draw"},{path:"/question",component:()=>Promise.all([r.e(736),r.e(639)]).then(r.bind(r,5639)),name:"question"},{path:"/WoFstart",component:()=>Promise.all([r.e(736),r.e(698)]).then(r.bind(r,1698)),name:"Wheel of Fortune"},{path:"/bingostart",component:()=>Promise.all([r.e(736),r.e(905)]).then(r.bind(r,7905)),name:"bingo"},{path:"/bingo",component:()=>Promise.all([r.e(736),r.e(144)]).then(r.bind(r,2144)),name:"bingogame"},{path:"/WoF",component:()=>Promise.all([r.e(736),r.e(328)]).then(r.bind(r,8328)),name:"wofgame"}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=h,g=(0,p.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function v(e,t){const r=e(c);r.use(n.Z,t);const o=(0,a.Xl)("function"===typeof g?await g({}):g);return{app:r,router:o}}var b=r(6827);const w={config:{},plugins:{Notify:b.Z}},y="";async function k({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:y})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}v(o.ri,w).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,8325))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));k(e,r)}))}))},8325:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(6647);const n=JSON.parse('{"index":{"choose":"Choose your language!"},"pitstop":{"title":"Welcome to Pitstop","description":"Draw a prompt card to answer each question. Prepare to have a group discussion with your mates when needed.","foot":"Let\'s talk it out!"},"wof":{"title":"Welcome to Wheel of Fortune","description":"It\'s time to take a spin and see where fortune leads. Be prepared for the topics as the wheel spins, although you never know where it will land next!","foot":"Let the spin begin!","answer":"ANSWER"},"bingo":{"title":"Welcome to an exciting round of Bingo","description":"Listen carefully and mark the topic when it\'s mentioned in class. First complete row, column or diagonal wins!","foot":"Sharpen your ears!","join":"Join"}}'),a=JSON.parse('{"index":{"choose":"Välj språk!"},"pitstop":{"title":"Välkommen till Pitstop","description":"Dra ett kort för att svara på en fråga. Ibland måste du diskutera fram svaret med dina kurskamrater.","foot":"Dags för diskussion!"},"wof":{"title":"Välkommen till Wheel of Fortune","description":"Det har blivit dags att prova lyckan! När hjulet stannar gäller det att svara rätt och inte snurra till det.","foot":"Låt snurrandet börja!","answer":"Rätt svar"},"bingo":{"title":"Välkommen till en spännande bingorunda","description":"Lyssna noga på frågorna som läraren ställer. Markera det svar du tror är rätt på bingobrickan. Den som först får bingo på vågrät, lodrät eller diagonal rad vinner!","foot":"Lyssna noga!","join":"Anslut"}}'),i={en:n,sv:a},l=({app:e})=>{const t=(0,o.o)({locale:"en",fallbackLocale:"en",globalInjection:!0,allowComposition:!0,messages:i});e.use(t)}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{144:"a4290eed",246:"c2bf4094",328:"910d4031",560:"423080b2",626:"9a6d30f4",639:"0df81c7a",698:"2658eec3",862:"1dd79154",905:"4870f4c4",990:"32dc5f2f"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{144:"1430d510",246:"d6055a47",328:"96ad97af",626:"ea47df41",905:"473eae4a"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="psquasar:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+a){l=c;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,o,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)o();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),n(s)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,null,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={144:1,246:1,328:1,626:1,905:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,d=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var u=s(r)}for(t&&t(o);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkpsquasar"]=globalThis["webpackChunkpsquasar"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4647)));o=r.O(o)})();