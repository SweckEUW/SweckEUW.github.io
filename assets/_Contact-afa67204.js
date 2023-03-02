import{_ as m,g as u,h as v,i as h,j as b,k as f,l as S,m as w,n as E,q as y,s as I,u as k,v as x,x as T,y as C,z as j,A as q,B as L,C as M,D,E as N,G as F,H as O,I as A,o as B,c as H,a as t,b as V,w as P,T as J,L as W,M as R,N as X,p as G,d as U}from"./index-8525852f.js";import{_ as K,a as Y,b as z,c as Q,d as Z,e as $}from"./work-4a6642b5.js";const r={_origin:"https://api.emailjs.com"},ss=(s,e="https://api.emailjs.com")=>{r._userID=s,r._origin=e},p=(s,e,a)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const g=(s,e,a={})=>new Promise((c,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:n})=>{const l=new d(n);l.status===200||l.text==="OK"?c(l):i(l)}),o.addEventListener("error",({target:n})=>{i(new d(n))}),o.open("POST",r._origin+s,!0),Object.keys(a).forEach(n=>{o.setRequestHeader(n,a[n])}),o.send(e)}),es=(s,e,a,c)=>{const i=c||r._userID;return p(i,s,e),g("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:i,service_id:s,template_id:e,template_params:a}),{"Content-type":"application/json"})},ts=s=>{let e;if(typeof s=="string"?e=document.querySelector(s):e=s,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},os=(s,e,a,c)=>{const i=c||r._userID,o=ts(a);p(i,s,e);const n=new FormData(o);return n.append("lib_version","3.10.0"),n.append("service_id",s),n.append("template_id",e),n.append("user_id",i),g("/api/v1.0/email/send-form",n)},ns={init:ss,send:es,sendForm:os};const _s={data:()=>({spinnerEnabled:!1}),methods:{getIcon(s){return new URL(Object.assign({"/src/assets/icons/Adobe After Effects.png":u,"/src/assets/icons/Adobe Illustrator.png":v,"/src/assets/icons/Adobe XD.png":h,"/src/assets/icons/Autodesk Maya.png":b,"/src/assets/icons/Babylon.js.png":f,"/src/assets/icons/Blender.png":S,"/src/assets/icons/C-Sharp.png":w,"/src/assets/icons/CSS.png":E,"/src/assets/icons/GitHub.png":y,"/src/assets/icons/HTML.png":I,"/src/assets/icons/Java.png":k,"/src/assets/icons/JavaFX.png":x,"/src/assets/icons/JavaScript.png":T,"/src/assets/icons/LinkedIn.png":C,"/src/assets/icons/Node.js.png":j,"/src/assets/icons/OpenCV.png":q,"/src/assets/icons/OpenGL.png":L,"/src/assets/icons/PyQt.png":M,"/src/assets/icons/Python.png":D,"/src/assets/icons/React.png":N,"/src/assets/icons/SolidWorks.png":F,"/src/assets/icons/Unity.png":O,"/src/assets/icons/education.svg":K,"/src/assets/icons/location.svg":Y,"/src/assets/icons/mail.svg":z,"/src/assets/icons/mongoDB.png":A,"/src/assets/icons/person.svg":Q,"/src/assets/icons/phone.svg":Z,"/src/assets/icons/work.svg":$})[`/src/assets/icons/${s}`],self.location)},sendEmail(){this.spinnerEnabled=!0,ns.sendForm("service_3nfg1cg","template_wwwpk9y",this.$refs.form,"XaE1Tm4qNpspiVMOp").then(s=>{console.log("SUCCESS!",s.text),this.$refs.form.reset(),this.spinnerEnabled=!1},s=>{console.log("FAILED...",s.text),this.spinnerEnabled=!1})}},mounted(){setTimeout(()=>{window.scrollTo(0,0)},0)}},_=s=>(G("data-v-4260c199"),s=s(),U(),s),as={class:"Contact"},is=_(()=>t("h1",null,"[Contact]",-1)),cs={class:"ct-data"},rs=["src"],ls=_(()=>t("p",null,"Simon Weck",-1)),ds=["src"],ps=_(()=>t("p",null,"Kaspar-von-Zumbusch Straße 6, 33378 Rheda-Wiedenbrück",-1)),gs=["src"],ms=_(()=>t("p",null,"0176 71236857",-1)),us=["src"],vs=_(()=>t("a",{href:"mailto:Simon.Weck98@yahoo.de"},"Simon.Weck98@yahoo.de",-1)),hs={class:"ct-form"},bs={class:"inactive-blocker"},fs=_(()=>t("div",{class:"spinner"},null,-1)),Ss=[fs],ws=_(()=>t("label",null,"Name",-1)),Es=_(()=>t("input",{type:"text",name:"user_name",placeholder:"Your Name",required:""},null,-1)),ys=_(()=>t("label",null,"Email",-1)),Is=_(()=>t("input",{type:"email",name:"user_email",placeholder:"Your Email",required:""},null,-1)),ks=_(()=>t("label",null,"Message",-1)),xs=_(()=>t("textarea",{name:"message",placeholder:"Message",required:""},null,-1)),Ts=_(()=>t("input",{class:"ct-submit",type:"submit",value:"Send"},null,-1)),Cs=[ws,Es,ys,Is,ks,xs,Ts];function js(s,e,a,c,i,o){return B(),H("div",as,[is,t("div",cs,[t("div",null,[t("img",{src:o.getIcon("person.svg"),alt:""},null,8,rs),ls]),t("div",null,[t("img",{src:o.getIcon("location.svg"),alt:""},null,8,ds),ps]),t("div",null,[t("img",{src:o.getIcon("phone.svg"),alt:""},null,8,gs),ms]),t("div",null,[t("img",{src:o.getIcon("mail.svg"),alt:""},null,8,us),vs])]),t("div",hs,[V(J,{name:"fade-in"},{default:P(()=>[R(t("div",bs,Ss,512),[[X,s.spinnerEnabled]])]),_:1}),t("form",{ref:"form",onSubmit:e[0]||(e[0]=W((...n)=>o.sendEmail&&o.sendEmail(...n),["prevent"]))},Cs,544)])])}const Ms=m(_s,[["render",js],["__scopeId","data-v-4260c199"]]);export{Ms as default};