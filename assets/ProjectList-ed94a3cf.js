import{p as d,_ as p,a as m,b as v,c as u,d as g,e as j,f as h,g as w,h as b}from"./projects-2e8e4ed4.js";import{_ as f,r as y,o as c,c as n,F as L,e as P,f as k,w as B,a as r,t as a}from"./index-41d7d03a.js";const S={props:["projectsSelection"],data:()=>({projects:d}),computed:{projectsFiltered(){return this.projectsSelection?this.projects.filter(e=>this.projectsSelection.includes(e.title)):this.projects}},methods:{getTrailer(e){return new URL(Object.assign({"/src/assets/projects/Arcade Automat/videos/ProjectList.webm":p,"/src/assets/projects/Brush Cleaner/videos/ProjectList.webm":m,"/src/assets/projects/Emberpoint/videos/ProjectList.webm":v,"/src/assets/projects/Monopoly Animation/videos/ProjectList.webm":u,"/src/assets/projects/Motile/videos/ProjectList.webm":g,"/src/assets/projects/OpenFile/videos/ProjectList.webm":j,"/src/assets/projects/Revitalize/videos/ProjectList.webm":h,"/src/assets/projects/Universe Simulation/videos/ProjectList.webm":w,"/src/assets/projects/Whacky Contraptions/videos/ProjectList.webm":b})[`/src/assets/projects/${e}/videos/ProjectList.webm`],self.location)},playVideo(e){let t=e.getElementsByTagName("video")[0];e.classList.add("pl-element-active"),t.play()},closeVideo(e){let t=e.getElementsByTagName("video")[0];e.classList.remove("pl-element-active"),t.pause()},checkScrollDirectionIsUp(){var e=window.pageYOffset||document.documentElement.scrollTop;let t=e>this.lastScrollTop;return this.lastScrollTop=e<=0?0:e,t},isElementInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}},mounted(){window.onscroll=()=>{let e=this.checkScrollDirectionIsUp()?-100:100,t=document.getElementsByClassName("ProjectList")[0],o=t?t.getElementsByClassName("pl-element"):null;if(o)for(let i=0;o.length>i;i++)o[i]==document.elementFromPoint(window.innerWidth/2,window.innerHeight/2+e)?this.playVideo(o[i]):this.closeVideo(o[i])}}},E=["src"],T={class:"pl-overlay"},C={class:"p-overlay-title"},F={class:"p-overlay-category"},V={class:"p-overlay-shortDescription"};function N(e,t,o,i,A,l){const _=y("router-link");return c(),n("div",{class:"ProjectList",onScroll:t[0]||(t[0]=s=>e.scroll())},[(c(!0),n(L,null,P(l.projectsFiltered?l.projectsFiltered:e.projects,s=>(c(),k(_,{tag:"div",to:"/work/"+s.title.replaceAll(" ","-"),key:s.title,class:"pl-element"},{default:B(()=>[r("video",{src:l.getTrailer(s.folder),muted:"",loop:"",class:"pl-video"},null,8,E),r("div",T,[r("div",C,a(s.title),1),r("div",F,a(s.category),1),r("div",V,a(s.description_short),1)])]),_:2},1032,["to"]))),128))],32)}const U=f(S,[["render",N],["__scopeId","data-v-cc13acf1"]]);export{U as P};
