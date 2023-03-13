import{_ as m,e as u,f as v,g as h,h as b,i as f,j as S,k as w,l as y,m as E,n as k,q as I,s as x,t as T,u as C,v as j,x as q,y as L,z as M,A as D,B as N,C as F,D as O,E as A,o as B,c as V,a as t,b as H,w as P,T as J,L as W,M as R,N as X,p as U,d as G}from"./index-4aa37c68.js";import{_ as K,a as Y,b as z,c as Q,d as Z,e as $,f as ss}from"./work-de6b5007.js";const r={_origin:"https://api.emailjs.com"},es=(s,e="https://api.emailjs.com")=>{r._userID=s,r._origin=e},p=(s,e,a)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const g=(s,e,a={})=>new Promise((c,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:n})=>{const l=new d(n);l.status===200||l.text==="OK"?c(l):i(l)}),o.addEventListener("error",({target:n})=>{i(new d(n))}),o.open("POST",r._origin+s,!0),Object.keys(a).forEach(n=>{o.setRequestHeader(n,a[n])}),o.send(e)}),ts=(s,e,a,c)=>{const i=c||r._userID;return p(i,s,e),g("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:i,service_id:s,template_id:e,template_params:a}),{"Content-type":"application/json"})},os=s=>{let e;if(typeof s=="string"?e=document.querySelector(s):e=s,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},ns=(s,e,a,c)=>{const i=c||r._userID,o=os(a);p(i,s,e);const n=new FormData(o);return n.append("lib_version","3.10.0"),n.append("service_id",s),n.append("template_id",e),n.append("user_id",i),g("/api/v1.0/email/send-form",n)},_s={init:es,send:ts,sendForm:ns};const as={data:()=>({spinnerEnabled:!1}),methods:{getIcon(s){return new URL(Object.assign({"/src/assets/icons/Adobe After Effects.png":u,"/src/assets/icons/Adobe Illustrator.png":v,"/src/assets/icons/Adobe XD.png":h,"/src/assets/icons/Autodesk Maya.png":b,"/src/assets/icons/Babylon.js.png":f,"/src/assets/icons/Blender.png":S,"/src/assets/icons/C-Sharp.png":w,"/src/assets/icons/CSS.png":y,"/src/assets/icons/GitHub.png":E,"/src/assets/icons/HTML.png":k,"/src/assets/icons/Java.png":I,"/src/assets/icons/JavaFX.png":x,"/src/assets/icons/JavaScript.png":T,"/src/assets/icons/LinkedIn.png":C,"/src/assets/icons/Node.js.png":j,"/src/assets/icons/OpenCV.png":q,"/src/assets/icons/OpenGL.png":L,"/src/assets/icons/PyQt.png":M,"/src/assets/icons/Python.png":D,"/src/assets/icons/React.png":N,"/src/assets/icons/SolidWorks.png":F,"/src/assets/icons/Unity.png":O,"/src/assets/icons/education.svg":K,"/src/assets/icons/location.svg":Y,"/src/assets/icons/mail.svg":z,"/src/assets/icons/mongoDB.png":A,"/src/assets/icons/person.svg":Q,"/src/assets/icons/phone.svg":Z,"/src/assets/icons/play.svg":$,"/src/assets/icons/work.svg":ss})[`/src/assets/icons/${s}`],self.location)},sendEmail(){this.spinnerEnabled=!0,_s.sendForm("service_3nfg1cg","template_wwwpk9y",this.$refs.form,"XaE1Tm4qNpspiVMOp").then(s=>{console.log("SUCCESS!",s.text),this.$refs.form.reset(),this.spinnerEnabled=!1},s=>{console.log("FAILED...",s.text),this.spinnerEnabled=!1})}},mounted(){setTimeout(()=>{window.scrollTo(0,0)},0)}},_=s=>(U("data-v-785087a0"),s=s(),G(),s),is={class:"Contact"},cs=_(()=>t("h1",null,"[Contact]",-1)),rs={class:"ct-data"},ls=["src"],ds=_(()=>t("p",null,"Simon Weck",-1)),ps=["src"],gs=_(()=>t("p",null,"Kaspar-von-Zumbusch Straße 6, 33378 Rheda-Wiedenbrück",-1)),ms=["src"],us=_(()=>t("p",null,"0176 71236857",-1)),vs=["src"],hs=_(()=>t("a",{href:"mailto:Simon.Weck98@yahoo.de"},"Simon.Weck98@yahoo.de",-1)),bs={class:"ct-form"},fs={class:"inactive-blocker"},Ss=_(()=>t("div",{class:"spinner"},null,-1)),ws=[Ss],ys=_(()=>t("label",null,"Name",-1)),Es=_(()=>t("input",{type:"text",name:"user_name",placeholder:"Your Name",required:""},null,-1)),ks=_(()=>t("label",null,"Email",-1)),Is=_(()=>t("input",{type:"email",name:"user_email",placeholder:"Your Email",required:""},null,-1)),xs=_(()=>t("label",null,"Message",-1)),Ts=_(()=>t("textarea",{name:"message",placeholder:"Message",required:""},null,-1)),Cs=_(()=>t("input",{class:"ct-submit",type:"submit",value:"Send"},null,-1)),js=[ys,Es,ks,Is,xs,Ts,Cs];function qs(s,e,a,c,i,o){return B(),V("div",is,[cs,t("div",rs,[t("div",null,[t("img",{src:o.getIcon("person.svg"),alt:""},null,8,ls),ds]),t("div",null,[t("img",{src:o.getIcon("location.svg"),alt:""},null,8,ps),gs]),t("div",null,[t("img",{src:o.getIcon("phone.svg"),alt:""},null,8,ms),us]),t("div",null,[t("img",{src:o.getIcon("mail.svg"),alt:""},null,8,vs),hs])]),t("div",bs,[H(J,{name:"fade-in"},{default:P(()=>[R(t("div",fs,ws,512),[[X,s.spinnerEnabled]])]),_:1}),t("form",{ref:"form",onSubmit:e[0]||(e[0]=W((...n)=>o.sendEmail&&o.sendEmail(...n),["prevent"]))},js,544)])])}const Ds=m(as,[["render",qs],["__scopeId","data-v-785087a0"]]);export{Ds as default};
