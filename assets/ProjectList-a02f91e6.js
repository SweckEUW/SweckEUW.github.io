import{_ as d,a as p,b as m,c as v,d as j,e as g,f as u,g as h,h as b,i as w}from"./ProjectList-cca076ab.js";import{p as f}from"./projects-589dcbd7.js";import{_ as L,r as y,o as c,c as a,H as P,I as k,J as E,w as B,a as r,F as n}from"./index-7eca6682.js";const S={props:["projectsSelection"],data:()=>({projects:f}),computed:{projectsFiltered(){if(!this.projectsSelection)return this.projects;let e=[];return this.projectsSelection.forEach(t=>{let s=this.projects.find(o=>o.title==t);s&&e.push(s)}),e}},methods:{getTrailer(e){return new URL(Object.assign({"/src/assets/projects/AI Image Editor Toolkit/videos/ProjectList.webm":d,"/src/assets/projects/Arcade Automat/videos/ProjectList.webm":p,"/src/assets/projects/Brush Cleaner/videos/ProjectList.webm":m,"/src/assets/projects/Emberpoint/videos/ProjectList.webm":v,"/src/assets/projects/Monopoly Animation/videos/ProjectList.webm":j,"/src/assets/projects/Motile/videos/ProjectList.webm":g,"/src/assets/projects/OpenFile/videos/ProjectList.webm":u,"/src/assets/projects/Revitalize/videos/ProjectList.webm":h,"/src/assets/projects/Universe Simulation/videos/ProjectList.webm":b,"/src/assets/projects/Whacky Contraptions/videos/ProjectList.webm":w})[`/src/assets/projects/${e}/videos/ProjectList.webm`],self.location)},playVideo(e){e.getElementsByTagName("video")[0].play()},closeVideo(e){e.getElementsByTagName("video")[0].pause()},checkScrollDirectionIsUp(){var e=window.pageYOffset||document.documentElement.scrollTop;let t=e>this.lastScrollTop;return this.lastScrollTop=e<=0?0:e,t},isElementInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}},mounted(){window.onscroll=()=>{let e=this.checkScrollDirectionIsUp()?-100:100,t=document.getElementsByClassName("ProjectList")[0],s=t?t.getElementsByClassName("pl-element"):null;if(s)for(let o=0;s.length>o;o++)s[o]==document.elementFromPoint(window.innerWidth/2,window.innerHeight/2+e)?this.playVideo(s[o]):this.closeVideo(s[o])}}},T=["src"],C={class:"pl-overlay"},F={class:"pl-overlay-title"},I={class:"pl-overlay-category"};function V(e,t,s,o,A,l){const _=y("router-link");return c(),a("div",{class:"ProjectList",onScroll:t[0]||(t[0]=i=>e.scroll())},[(c(!0),a(P,null,k(l.projectsFiltered?l.projectsFiltered:e.projects,i=>(c(),E(_,{tag:"div",to:"/Work/"+i.title.replaceAll(" ","-"),key:i.title,class:"pl-element"},{default:B(()=>[r("video",{src:l.getTrailer(i.folder),muted:"",loop:"",class:"pl-video"},null,8,T),r("div",C,[r("div",F,n(i.title),1),r("div",I,n(i.category),1)])]),_:2},1032,["to"]))),128))],32)}const x=L(S,[["render",V],["__scopeId","data-v-f8096346"]]);export{x as P};