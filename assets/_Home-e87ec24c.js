import{P as _}from"./ProjectList-2f918234.js";import{_ as n,r,o as d,c as i,a as e,b as a,w as l,T as h,p,d as m}from"./main-003cd6c8.js";import"./projects-2e8e4ed4.js";const u="/assets/Reel-2c3b8669.webm",v="/assets/ReelPoster-cd21b12d.png",b="/assets/header-4f3723f5.webm";const f={components:{ProjectList:_},methods:{getMedia(s){return new URL(Object.assign({"/src/assets/home/Reel.webm":u,"/src/assets/home/ReelPoster.png":v,"/src/assets/home/header.webm":b})[`/src/assets/home/${s}`],self.location)}},mounted(){setTimeout(()=>{window.scrollTo(0,0)},0)}},t=s=>(p("data-v-d21ae6fa"),s=s(),m(),s),w={class:"Home"},g={class:"ho-header"},M=t(()=>e("div",{class:"ho-container"},[e("h1",null,"Simon Weck"),e("h1",{class:"ho-subheader"},"Technical Director")],-1)),P=["src"],R={class:"ho-reel"},S=t(()=>e("h1",null,"[Showreel]",-1)),k=["src","poster"],I={class:"ho-work"},T=t(()=>e("h1",null,"[My Work]",-1));function j(s,x,y,L,B,o){const c=r("ProjectList");return d(),i("div",w,[e("div",g,[a(h,{name:"appearFade",appear:""},{default:l(()=>[M]),_:1}),e("video",{src:o.getMedia("header.webm"),muted:"",loop:"",autoplay:""},null,8,P)]),e("div",R,[S,e("video",{src:o.getMedia("Reel.webm"),poster:o.getMedia("ReelPoster.png"),controls:""},null,8,k)]),e("div",I,[T,a(c,{projectsSelection:["Universe Simulation","Emberpoint","Monopoly Animation","AI Image Editor Toolkit","Motile"]})])])}const C=n(f,[["render",j],["__scopeId","data-v-d21ae6fa"]]);export{C as default};
