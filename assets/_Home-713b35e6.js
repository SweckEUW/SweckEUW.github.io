import{V as i}from"./VideoWithButton-e6d41271.js";import{P as r}from"./ProjectList-a3e7cbab.js";import{_ as d,r as a,o as _,c as l,a as o,b as t,w as h,T as p,p as m,d as u}from"./index-3fcb9202.js";import"./projects-2911511d.js";const v={components:{ProjectList:r,VideoWithButton:i},mounted(){setTimeout(()=>{window.scrollTo(0,0)},0)}},s=e=>(m("data-v-a39509f7"),e=e(),u(),e),f={class:"Home"},w={class:"ho-header"},P=s(()=>o("div",{class:"ho-container"},[o("h1",null,"Simon Weck"),o("h1",{class:"ho-subheader"},"Technical Director")],-1)),S=["src"],k={class:"ho-reel"},B=s(()=>o("h1",null,"[Showreel]",-1)),I={class:"ho-work"},T=s(()=>o("h1",null,"[My Work]",-1));function V(e,b,x,y,W,j){const c=a("VideoWithButton"),n=a("ProjectList");return _(),l("div",f,[o("div",w,[t(p,{name:"appearFade",appear:""},{default:h(()=>[P]),_:1}),o("video",{src:"/src/assets/home/header.webm",muted:"",loop:"",autoplay:""},null,8,S)]),o("div",k,[B,t(c,{class:"ho-video",videoPath:"home/Reel.webm",posterPath:"home/ReelPoster.png"},null,8,["videoPath","posterPath"])]),o("div",I,[T,t(n,{projectsSelection:["Monopoly Animation","AI Image Editor Toolkit","Universe Simulation","Emberpoint","Motile"]})])])}const L=d(v,[["render",V],["__scopeId","data-v-a39509f7"]]);export{L as default};