(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{6562:(e,n,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/Login",function(){return s(6632)}])},6632:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>d});var t=s(4848),i=s(6540),o=s(9965),a=s.n(o),l=s(3675),r=s.n(l);let d=e=>{let{setScreen:n,saveData:s,setSaveData:o,sender:l,getPlace:d}=e,[c,u]=(0,i.useState)(""),[g,p]=(0,i.useState)(""),[m,_]=(0,i.useState)(!1),[h,v]=(0,i.useState)({temp:!1}),x=(e,n,s)=>{let t=new Date;t.setTime(t.getTime()+864e5*s),document.cookie="".concat(e,"=").concat(encodeURIComponent(n),";expires=").concat(t.toUTCString(),";path=/")},f=e=>{let n="; ".concat(document.cookie).split("; ".concat(e,"="));return 2===n.length?decodeURIComponent(n.pop().split(";").shift()):null},y=async()=>{if("flex"==loading.style.display)return;loading.style.display="flex";let e=await l("login",s);"success"===e.status?(m&&(x("username",name_input.value,7),x("password",pass_input.value,7)),o(e.data),s.continue?n("play"):"id"in s?n("result"):n("settings")):(loading.style.display="none",alert("Error: "+e.message))},b=()=>{s.username=name_input.value,s.password=pass_input.value,y()},w=!0;return(0,i.useEffect)(()=>{if(w){w=!1;let e=f("username");if(e){let n=f("password");s.username=e,s.password=n,y();return}body.style.display="flex"}},[]),(0,i.useEffect)(()=>{let e=e=>{"Enter"!==e.key||""==name_input.value||""==pass_input.value||h.temp||b()},n=e=>{h.temp=!0},s=e=>{h.temp=!1};return document.addEventListener("keydown",e),document.addEventListener("compositionstart",n),document.addEventListener("compositionend",s),()=>{document.removeEventListener("keydown",e),document.removeEventListener("compositionstart",n),document.removeEventListener("compositionend",s)}},[c,g,m]),(0,t.jsxs)("div",{id:"body",className:r().body,children:[(0,t.jsxs)("div",{id:"loading",className:r().loading,children:[(0,t.jsx)("img",{className:r().loadingIcon,src:"/freeguessr/images/compass.svg",alt:"Loading"}),(0,t.jsx)("div",{children:"loading..."})]}),(0,t.jsxs)("div",{className:r().loginContainer,children:[(0,t.jsx)(a(),{src:"/freeguessr/images/login-back.svg",alt:"Geoguessr Logo",className:r().logo,width:500,height:300}),(0,t.jsx)("h5",{className:r().slogan,children:"Explore the world freely and for free"}),(0,t.jsx)(a(),{src:"/freeguessr/images/logo.png",alt:"Geoguessr Logo",className:r().title,width:500,height:300,priority:!0}),(0,t.jsxs)("form",{children:[(0,t.jsx)("div",{className:r().inputContainer,children:(0,t.jsx)("input",{id:"name_input",type:"text",placeholder:"Username",value:c,onChange:e=>u(e.target.value),autoComplete:"username"})}),(0,t.jsx)("div",{className:r().inputContainer,children:(0,t.jsx)("input",{id:"pass_input",type:"password",placeholder:"Password",value:g,onChange:e=>p(e.target.value),autoComplete:"current-password"})})]}),(0,t.jsxs)("div",{className:r().rememberMe,children:[(0,t.jsx)("input",{type:"checkbox",id:"rememberMe",checked:m,onChange:e=>_(e.target.checked)}),(0,t.jsx)("label",{htmlFor:"rememberMe",children:"アカウントを記憶"})]}),(0,t.jsx)("div",{className:r().buttonContainer,children:(0,t.jsx)("button",{id:"login_btn",onClick:b,children:"Login"})}),(0,t.jsx)("a",{onClick:()=>n("register"),className:r().signupLink,children:"アカウントを作成"}),(0,t.jsx)("a",{href:"/freeguessr/daily",className:r().signupLink,children:"今日の1問"}),(0,t.jsx)("a",{href:"https://note.com/abshrimp/n/n91f4c83d35a5",target:"_blank",rel:"noopener noreferrer",className:r().signupLink,children:"How to Play"})]})]})}},3675:e=>{e.exports={body:"login_body__1lCiq",loginContainer:"login_loginContainer__KnJlW",slogan:"login_slogan__SoReZ",title:"login_title__x5Khj",inputContainer:"login_inputContainer__4A1tU",rememberMe:"login_rememberMe__bsXgW",buttonContainer:"login_buttonContainer__vcPDH",signupLink:"login_signupLink__Z7YyX",logo:"login_logo__zdAsU",loading:"login_loading__bxnS2",loadingIcon:"login_loadingIcon__QJL1w",spin:"login_spin__lsw6F"}}},e=>{var n=n=>e(e.s=n);e.O(0,[965,636,593,792],()=>n(6562)),_N_E=e.O()}]);