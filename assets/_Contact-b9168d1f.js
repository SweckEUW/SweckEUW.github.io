import{_ as u,a as m,b as v,c as h,d as b,e as f,f as S,g as w,h as y,i as E,j as k,k as I,l as x,m as C,n as T,o as j,p as q,q as F,r as D,s as L,t as M,u as N,v as O,w as B,x as P,y as A,z as H,A as V,B as J,C as W,D as X,E as U,F as G,G as R,H as Y,I as z,J as t,U as K,aW as Q,aX as $,br as Z,bo as ss,bp as es,N as ts,O as os}from"./index-3bedd496.js";const r={_origin:"https://api.emailjs.com"},_s=(s,e="https://api.emailjs.com")=>{r._userID=s,r._origin=e},p=(s,e,a)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const g=(s,e,a={})=>new Promise((c,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:_})=>{const l=new d(_);l.status===200||l.text==="OK"?c(l):i(l)}),o.addEventListener("error",({target:_})=>{i(new d(_))}),o.open("POST",r._origin+s,!0),Object.keys(a).forEach(_=>{o.setRequestHeader(_,a[_])}),o.send(e)}),ns=(s,e,a,c)=>{const i=c||r._userID;return p(i,s,e),g("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:i,service_id:s,template_id:e,template_params:a}),{"Content-type":"application/json"})},as=s=>{let e;if(typeof s=="string"?e=document.querySelector(s):e=s,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},is=(s,e,a,c)=>{const i=c||r._userID,o=as(a);p(i,s,e);const _=new FormData(o);return _.append("lib_version","3.10.0"),_.append("service_id",s),_.append("template_id",e),_.append("user_id",i),g("/api/v1.0/email/send-form",_)},cs={init:_s,send:ns,sendForm:is};const rs={data:()=>({spinnerEnabled:!1}),methods:{getIcon(s){return new URL(Object.assign({"/src/assets/icons/Adobe After Effects.png":m,"/src/assets/icons/Adobe Illustrator.png":v,"/src/assets/icons/Adobe XD.png":h,"/src/assets/icons/Autodesk Flow Production Tracking.png":b,"/src/assets/icons/Autodesk Maya.png":f,"/src/assets/icons/Babylon.js.png":S,"/src/assets/icons/Blender.png":w,"/src/assets/icons/C-Sharp.png":y,"/src/assets/icons/CSS.png":E,"/src/assets/icons/GitHub.png":k,"/src/assets/icons/HTML.png":I,"/src/assets/icons/Java.png":x,"/src/assets/icons/JavaFX.png":C,"/src/assets/icons/JavaScript.png":T,"/src/assets/icons/LinkedIn.png":j,"/src/assets/icons/Node.js.png":q,"/src/assets/icons/OpenCV.png":F,"/src/assets/icons/OpenGL.png":D,"/src/assets/icons/Prism Pipeline.png":L,"/src/assets/icons/PyQt.png":M,"/src/assets/icons/Python.png":N,"/src/assets/icons/React.png":O,"/src/assets/icons/SolidWorks.png":B,"/src/assets/icons/Unity.png":P,"/src/assets/icons/Vue.png":A,"/src/assets/icons/education.svg":H,"/src/assets/icons/location.svg":V,"/src/assets/icons/mail.svg":J,"/src/assets/icons/mongoDB.png":W,"/src/assets/icons/person.svg":X,"/src/assets/icons/phone.svg":U,"/src/assets/icons/play.svg":G,"/src/assets/icons/work.svg":R})[`/src/assets/icons/${s}`],self.location)},sendEmail(){this.spinnerEnabled=!0,cs.sendForm("service_3nfg1cg","template_wwwpk9y",this.$refs.form,"XaE1Tm4qNpspiVMOp").then(s=>{console.log("SUCCESS!",s.text),this.$refs.form.reset(),this.spinnerEnabled=!1},s=>{console.log("FAILED...",s.text),this.spinnerEnabled=!1})}}},n=s=>(ts("data-v-e8983010"),s=s(),os(),s),ls={class:"Contact"},ds=n(()=>t("h1",null,"[Contact]",-1)),ps={class:"ct-data"},gs=["src"],us=n(()=>t("p",null,"Simon Weck",-1)),ms=["src"],vs=n(()=>t("p",null,"Heinrichstraße 9B, 33602 Bielefeld",-1)),hs=["src"],bs=n(()=>t("p",null,"0176 71236857",-1)),fs=["src"],Ss=n(()=>t("a",{href:"mailto:Simon.Weck98@yahoo.de"},"Simon.Weck98@yahoo.de",-1)),ws={class:"ct-form"},ys={class:"inactive-blocker"},Es=n(()=>t("div",{class:"spinner"},null,-1)),ks=[Es],Is=n(()=>t("label",null,"Name",-1)),xs=n(()=>t("input",{type:"text",name:"user_name",placeholder:"Your Name",required:""},null,-1)),Cs=n(()=>t("label",null,"Email",-1)),Ts=n(()=>t("input",{type:"email",name:"user_email",placeholder:"Your Email",required:""},null,-1)),js=n(()=>t("label",null,"Message",-1)),qs=n(()=>t("textarea",{name:"message",placeholder:"Message",required:""},null,-1)),Fs=n(()=>t("input",{class:"ct-submit",type:"submit",value:"Send"},null,-1)),Ds=[Is,xs,Cs,Ts,js,qs,Fs];function Ls(s,e,a,c,i,o){return Y(),z("div",ls,[ds,t("div",ps,[t("div",null,[t("img",{src:o.getIcon("person.svg"),alt:""},null,8,gs),us]),t("div",null,[t("img",{src:o.getIcon("location.svg"),alt:""},null,8,ms),vs]),t("div",null,[t("img",{src:o.getIcon("phone.svg"),alt:""},null,8,hs),bs]),t("div",null,[t("img",{src:o.getIcon("mail.svg"),alt:""},null,8,fs),Ss])]),t("div",ws,[K($,{name:"fade-in"},{default:Q(()=>[ss(t("div",ys,ks,512),[[es,s.spinnerEnabled]])]),_:1}),t("form",{ref:"form",onSubmit:e[0]||(e[0]=Z((..._)=>o.sendEmail&&o.sendEmail(..._),["prevent"]))},Ds,544)])])}const Ns=u(rs,[["render",Ls],["__scopeId","data-v-e8983010"]]);export{Ns as default};