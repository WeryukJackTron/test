(globalThis["webpackChunkpsquasar"]=globalThis["webpackChunkpsquasar"]||[]).push([[656],{1569:(e,t,i)=>{"use strict";i.d(t,{h:()=>a});var o=i(3340),n=i(7524);(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n.Z,e.config.globalProperties.$api=a}));n.Z.defaults.withCredentials=!0,n.Z.defaults.headers.common.Accept="application/json",n.Z.defaults.headers.common["Content-Type"]="application/json",n.Z.defaults.headers.common.Authorization="Bearer 1|37mTdS2Y2tcZTMpcKwfImXFpVoUs5Bxt56GZjlcx";const a=n.Z.create({baseURL:"https://gamingdrv.stageit.se/api"})},3656:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>U});var o=i(9835),n=i(1957),a=i(7616),l=i.n(a);const s={key:0},c={class:"row fixed-center"},r={class:"column q-mx-sm items-center"},d=(0,o._)("img",{alt:"Quasar logo",src:l(),style:{width:"300px",height:"210px"},class:"vertical-center"},null,-1),p={class:"q-mt-md",style:{color:"aqua","text-align":"center"}},m=(0,o._)("strong",null,"Welcome to an exciting round of Bingo",-1),u=[m],g={class:"q-mt-md",style:{color:"white","text-align":"center"}},x=(0,o._)("br",null,null,-1),h={class:"q-mt-md",style:{color:"white","text-align":"center"}},w={key:1},y={class:"row fixed-center"},f={class:"column q-mx-sm"},v=(0,o._)("img",{alt:"Quasar logo",src:l(),style:{width:"340px",height:"250px"},class:"vertical-center"},null,-1);function b(e,t,i,a,l,m){const b=(0,o.up)("q-card-main"),k=(0,o.up)("q-card"),z=(0,o.up)("q-page"),q=(0,o.up)("q-btn"),_=(0,o.Q2)("resize-text");return l.description?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(z,{class:"flex flex-center bg-black",clickable:"",onClick:m.enterCode},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{horizontal:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b),(0,o._)("div",c,[(0,o._)("div",r,[d,(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",p,u)),[[_,{ratio:1,minFontSize:"5px",maxFontSize:"50px",delay:200}]]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",g,[(0,o.Uk)("Listen carefully and mark the topic when it's mentioned in class."),x,(0,o.Uk)("First complete row, column or diagonal wins!")])),[[_,{ratio:1,minFontSize:"5px",maxFontSize:"21px",delay:200}]]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",h,[(0,o.Uk)("Sharpen your ears!")])),[[_,{ratio:.5,minFontSize:"5px",maxFontSize:"30px",delay:200}]])])])])),_:1})])),_:1},8,["onClick"])])):((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(z,{class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{horizontal:""},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o._)("div",f,[v,(0,o.wy)((0,o._)("input",{id:"code","onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),label:"URL",style:{height:"50px"}},null,512),[[n.nr,e.text],[_,{ratio:1.3,minFontSize:"5px",maxFontSize:"20px",delay:200}]]),(0,o.Wm)(q,{color:"deep-orange",glossy:"",label:"Join",size:"22px",class:"vertical-bottom q-px-xl q-py-xs",onClick:m.goBingo},null,8,["onClick"])])])])),_:1})])),_:1})]))}i(9665);var k=i(9863),z=i.n(k);i(1569);const q={directives:{ResizeText:z().ResizeText},data(){return{description:!0}},methods:{goBingo(){console.log(document.getElementById("code").value),this.$router.push({name:"bingogame"})},enterCode(){this.description=!this.description,console.log(this.description)}}};var _=i(1639),Z=i(9885),C=i(4458),F=i(4455),S=i(9984),B=i.n(S);const T=(0,_.Z)(q,[["render",b]]),U=T;B()(q,"components",{QPage:Z.Z,QCard:C.Z,QBtn:F.Z})},7616:(e,t,i)=>{e.exports=i.p+"img/Bingoicon.0a34794c.png"}}]);