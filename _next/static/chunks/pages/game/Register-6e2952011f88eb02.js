(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{3018:(e,n,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/Register",function(){return s(2564)}])},2564:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>d});var i=s(4848),t=s(6540),o=s(9965),a=s.n(o),l=s(3675),r=s.n(l);let d=e=>{let{setScreen:n,saveData:s,setSaveData:o,sender:l,getPlace:d}=e,[g,u]=(0,t.useState)(""),[_,c]=(0,t.useState)(""),[m,p]=(0,t.useState)({temp:!1}),v=async()=>{if("flex"==loading.style.display)return;loading.style.display="flex";let e=await l("register",s);"success"===e.status?(alert("登録が完了しました"),n("login")):(loading.style.display="none",alert("Error: "+e.message))},h=()=>{if(name_input.value.length>20){alert("Usernameは20文字以内にしてください");return}window.confirm("Username, Passwordの変更はできませんがよろしいですか？")&&(s.username=name_input.value,s.password=pass_input.value,v())};return(0,t.useEffect)(()=>{body.style.display="flex";let e=e=>{"Enter"!==e.key||""==name_input.value||""==pass_input.value||m.temp||h()},n=e=>{m.temp=!0},s=e=>{m.temp=!1};return document.addEventListener("keydown",e),document.addEventListener("compositionstart",n),document.addEventListener("compositionend",s),()=>{document.removeEventListener("keydown",e),document.removeEventListener("compositionstart",n),document.removeEventListener("compositionend",s)}},[g,_]),(0,i.jsxs)("div",{id:"body",className:r().body,children:[(0,i.jsxs)("div",{id:"loading",className:r().loading,children:[(0,i.jsx)("img",{className:r().loadingIcon,src:"/freeguessr/images/compass.svg",alt:"Loading"}),(0,i.jsx)("div",{children:"loading..."})]}),(0,i.jsxs)("div",{className:r().loginContainer,children:[(0,i.jsx)(a(),{src:"/freeguessr/images/login-back.svg",alt:"Geoguessr Logo",className:r().logo,width:500,height:300}),(0,i.jsx)("h5",{className:r().slogan,children:"Explore the world freely and for free"}),(0,i.jsx)(a(),{src:"/freeguessr/images/logo.png",alt:"Geoguessr Logo",className:r().title,width:500,height:300}),(0,i.jsxs)("form",{children:[(0,i.jsx)("div",{className:r().inputContainer,children:(0,i.jsx)("input",{id:"name_input",type:"text",placeholder:"Username",value:g,onChange:e=>u(e.target.value),autoComplete:"username"})}),(0,i.jsx)("div",{className:r().inputContainer,children:(0,i.jsx)("input",{id:"pass_input",type:"password",placeholder:"Password",value:_,onChange:e=>c(e.target.value),autoComplete:"new-password"})})]}),(0,i.jsx)("div",{className:r().buttonContainer,children:(0,i.jsx)("button",{id:"login_btn",onClick:h,children:"登録"})}),(0,i.jsx)("a",{onClick:()=>n("login"),className:r().signupLink,children:"戻る"})]})]})}},3675:e=>{e.exports={body:"login_body__1lCiq",loginContainer:"login_loginContainer__KnJlW",slogan:"login_slogan__SoReZ",title:"login_title__x5Khj",inputContainer:"login_inputContainer__4A1tU",rememberMe:"login_rememberMe__bsXgW",buttonContainer:"login_buttonContainer__vcPDH",signupLink:"login_signupLink__Z7YyX",logo:"login_logo__zdAsU",loading:"login_loading__bxnS2",loadingIcon:"login_loadingIcon__QJL1w",spin:"login_spin__lsw6F"}}},e=>{var n=n=>e(e.s=n);e.O(0,[965,636,593,792],()=>n(3018)),_N_E=e.O()}]);