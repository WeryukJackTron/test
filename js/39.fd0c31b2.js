(globalThis["webpackChunkpsquasar"]=globalThis["webpackChunkpsquasar"]||[]).push([[39],{1569:(e,t,s)=>{"use strict";s.d(t,{h:()=>a});var n=s(3340),l=s(7524);(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=l.Z,e.config.globalProperties.$api=a}));l.Z.defaults.withCredentials=!0,l.Z.defaults.headers.common.Accept="application/json",l.Z.defaults.headers.common["Content-Type"]="application/json",l.Z.defaults.headers.common.Authorization="Bearer 1|37mTdS2Y2tcZTMpcKwfImXFpVoUs5Bxt56GZjlcx";const a=l.Z.create({baseURL:"https://gamingdrv.stageit.se/api"})},6039:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>E});var n=s(9835),l=s(6970),a=s(5492),i=s.n(a);const o={class:"column items-center"},r=(0,n._)("img",{alt:"Arrow",src:i(),style:{width:"50px",height:"50px"},class:""},null,-1),h={class:"q-pb-md"},u=(0,n._)("div",null,"GO!",-1);function c(e,t,s,a,i,c){const d=(0,n.up)("q-card-section"),m=(0,n.up)("q-btn"),g=(0,n.up)("q-card-actions"),p=(0,n.up)("q-card"),w=(0,n.up)("q-dialog"),y=(0,n.up)("Roulette"),b=(0,n.Q2)("resize-text"),C=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(w,{modelValue:i.winner,"onUpdate:modelValue":t[0]||(t[0]=e=>i.winner=e),"full-height":"","full-width":""},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"card"},{default:(0,n.w5)((()=>[(0,n.wy)(((0,n.wg)(),(0,n.j4)(d,{class:"absolute-top huh",style:{"text-align":"center"}},{default:(0,n.w5)((()=>[(0,n._)("strong",null,(0,l.zw)(i.title),1)])),_:1})),[[b,{ratio:.7,minFontSize:"5px",maxFontSize:"80px",delay:200}]]),(0,n.wy)(((0,n.wg)(),(0,n.j4)(d,{class:"absolute-center",style:{"text-align":"center"}},{default:(0,n.w5)((()=>[(0,n._)("strong",null,(0,l.zw)(i.result),1)])),_:1})),[[b,{ratio:.7,minFontSize:"5px",maxFontSize:"50px",delay:200}]]),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(m,{class:"absolute-bottom bg-black",size:"35px",flat:"",label:">",color:"white"},null,512),[[C]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n._)("div",o,[r,(0,n._)("div",h,[((0,n.wg)(),(0,n.j4)(y,{ref:"wheel",key:i.rouletteKey,items:i.items,"display-shadow":"","display-border":"",class:"wheel",size:"580","base-size":"100","base-display":"","base-background":"#dedede","base-display-shadow":"",easing:"bounce",onWheelStart:c.wheelStartedCallback,onWheelEnd:c.wheelEndedCallback,onClick:c.launchWheel},{baseContent:(0,n.w5)((()=>[u])),_:1},8,["items","onWheelStart","onWheelEnd","onClick"]))])])],64)}s(9665);var d=s(8824),m=s(9863),g=s.n(m),p=s(1569);const w={mounted(){var e="",t="";p.h.get("/modules").then((s=>{e=s.data[2].uuid,console.log(s.data),p.h.get("/modules/"+e).then((e=>{t=e.data.question_lists[0].id,console.log(t),p.h.get("/question_lists/"+t).then((e=>{console.log(e.data.questions),e.data.questions.forEach((e=>{"100"==e.answers[0].text&&this.arrayquestions100.push(e),"200"==e.answers[0].text&&this.arrayquestions200.push(e),"300"==e.answers[0].text&&this.arrayquestions300.push(e),"400"==e.answers[0].text&&this.arrayquestions400.push(e),"500"==e.answers[0].text&&this.arrayquestions500.push(e)})),console.log("HALLO"),console.log(this.arrayquestions100),console.log(this.arrayquestions200),console.log(this.arrayquestions300),console.log(this.arrayquestions400),console.log(this.arrayquestions500),this.loadItems()}))}))}))},directives:{ResizeText:g().ResizeText},name:"App",components:{Roulette:d.c},data(){return{arrayquestions100:[],arrayquestions200:[],arrayquestions300:[],arrayquestions400:[],arrayquestions500:[],winner:!1,newItem:"",result:"",title:"",colorT:"orange",rouletteKey:0,items:[],colors:["#00A8C0","#F28D21","#994895","#E30F67"],countC:0,difficulty:["100","200","300","400","500"],countD:0}},methods:{launchWheel(){this.rouletteKey+=1,setTimeout((()=>this.$refs.wheel.launchWheel()),0)},wheelStartedCallback(){console.log("wheelStartedCallback")},wheelEndedCallback(){var e=document.getElementsByClassName("wheel easing-bounce wheel-border")[0].attributes.style.nodeValue,t=e[72]+e[73]+e[74];"d"!=e[75]&&(t+=e[75]),t-=720,t=360-t;var s=Math.round(t/(360/document.getElementsByClassName("wheel easing-bounce wheel-border")[0].children.length));while(s>4)s-=4;if(t-=360/document.getElementsByClassName("wheel easing-bounce wheel-border")[0].children.length/2,t>-1){t+="deg",console.log(s+" Piece");var n=document.getElementsByClassName("wheel-item");setTimeout((()=>{document.getElementsByClassName("huh")[0].style.color=4==s?"#E30F67":3==s?"#994895":2==s?"#F28D21":"#00A8C0"}),1100),n.forEach((e=>{e.style.transform.includes(t)&&(console.log(e.children[0].children[0].children[0].innerHTML+" TESTING"),e.children[0].children[0].children[0].innerHTML.includes("100")?(this.result=this.arrayquestions100[Math.floor(Math.random()*this.arrayquestions100.length)].text,this.title="100"):e.children[0].children[0].children[0].innerHTML.includes("200")?(this.result=this.arrayquestions200[Math.floor(Math.random()*this.arrayquestions100.length)].text,this.title="200"):e.children[0].children[0].children[0].innerHTML.includes("300")?(this.result=this.arrayquestions300[Math.floor(Math.random()*this.arrayquestions100.length)].text,this.title="300"):e.children[0].children[0].children[0].innerHTML.includes("400")?(this.result=this.arrayquestions400[Math.floor(Math.random()*this.arrayquestions100.length)].text,this.title="400"):e.children[0].children[0].children[0].innerHTML.includes("500")?(this.result=this.arrayquestions500[Math.floor(Math.random()*this.arrayquestions100.length)].text,this.title="500"):(this.result="",this.title=""),setTimeout((()=>{this.winner=!0}),1e3))})),console.log(document.getElementsByClassName("wheel easing-bounce wheel-border")[0].children.length)}},addItem(){""!=this.newItem&&(this.items.push({id:5,name:"newItem",htmlContent:'<div class="rotate-90">'+this.newItem+"</div>",textColor:"",background:this.colors[this.countC]}),this.$q.notify(this.newItem+" added"),this.countC=this.countC+1,this.countC>3&&(this.countC=0)),this.newItem=""},loadItems(){for(var e=0;e<15;e++)this.items.push({id:5,name:"newItem",htmlContent:'<div class="rotate-90"><h6>'+this.difficulty[this.countD]+"</h6></div>",textColor:"",background:this.colors[this.countC]}),this.countC=this.countC+1,this.countD++,this.countC>3&&(this.countC=0),this.countD>4&&(this.countD=0)}}};var y=s(1639),b=s(5263),C=s(4458),q=s(3190),f=s(1821),x=s(4455),v=s(4925),T=s(2146),M=s(9984),k=s.n(M);const Z=(0,y.Z)(w,[["render",c]]),E=Z;k()(w,"components",{QDialog:b.Z,QCard:C.Z,QCardSection:q.Z,QCardActions:f.Z,QBtn:x.Z,QInput:v.Z}),k()(w,"directives",{ClosePopup:T.Z})},5492:(e,t,s)=>{e.exports=s.p+"img/arrow.c9670cbf.png"}}]);