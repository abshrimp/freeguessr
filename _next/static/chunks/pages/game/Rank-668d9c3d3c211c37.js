(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{2824:(e,n,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/Rank",function(){return s(8655)}])},8655:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>c});var a=s(4848),r=s(6540),t=s(270),i=s.n(t);let c=e=>{let{setScreen:n,saveData:s,setSaveData:t,sender:c,getPlace:l}=e,[d,o]=(0,r.useState)([]),[h,_]=(0,r.useState)([]),k=e=>{let n=Math.floor(e/3600),s=Math.floor(e%3600/60),a;a=n<100?"00".concat(n).slice(-2):n;let r="00".concat(s).slice(-2),t="00".concat(e%60).slice(-2);return 0!==n?"".concat(a,":").concat(r,":").concat(t):"".concat(r,":").concat(t)},m=!0;(0,r.useEffect)(()=>{m&&(m=!1,x())},[]);let x=async()=>{let e=await c("rank",s);if("success"===e.status){let n=e.ranking;n.sort((e,n)=>n.highest_score!==e.highest_score?n.highest_score-e.highest_score:e.session_duration-n.session_duration);let a=1;for(let e=0;e<n.length;e++)e>0&&n[e].highest_score===n[e-1].highest_score&&n[e].session_duration===n[e-1].session_duration?n[e].rank=n[e-1].rank:n[e].rank=a++,n[e].time=k(n[e].session_duration),n[e].score=n[e].highest_score.toLocaleString(),n[e].class=s.username==n[e].username?i()["my-rank"]:"";o(n),e.my_duration?_([{rank:e.my_rank,name:s.username,score:e.my_score.toLocaleString(),time:k(e.my_duration)}]):_([{rank:"-",name:s.username,score:"-",time:"-"}])}else alert("Error: "+e.message),n("settings")},j=async()=>{await x(),alert("更新しました")};return(0,a.jsx)("div",{className:i().body,children:(0,a.jsxs)("div",{className:i().container,children:[(0,a.jsx)("div",{className:i().title,children:"統一ルール　スコア TOP100"}),(0,a.jsx)("div",{className:i()["ranking-table-wrapper"],children:(0,a.jsx)("table",{id:"table",className:i()["ranking-table"],children:(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"順位"}),(0,a.jsx)("th",{children:"名前"}),(0,a.jsx)("th",{children:"スコア"}),(0,a.jsx)("th",{children:"タイム"})]})})})}),(0,a.jsx)("div",{className:i()["ranking-table-wrapper"],children:(0,a.jsx)("table",{id:"table",className:i()["ranking-table"],children:(0,a.jsx)("tbody",{children:d.map((e,n)=>(0,a.jsxs)("tr",{className:e.class,children:[(0,a.jsxs)("td",{children:[e.rank,"位"]}),(0,a.jsx)("td",{children:e.username}),(0,a.jsx)("td",{children:e.score}),(0,a.jsx)("td",{children:e.time})]},n))})})}),(0,a.jsx)("div",{className:i()["ranking-table-wrapper"],children:(0,a.jsx)("table",{className:i()["ranking-table"],children:(0,a.jsx)("tbody",{children:h.map((e,n)=>(0,a.jsxs)("tr",{className:i()["my-rank"],children:[(0,a.jsxs)("td",{children:[e.rank,"位"]}),(0,a.jsx)("td",{children:e.name}),(0,a.jsx)("td",{children:e.score}),(0,a.jsx)("td",{children:e.time})]},n))})})}),(0,a.jsxs)("div",{className:i()["ranking-actions"],children:[(0,a.jsx)("button",{onClick:()=>n("settings"),children:"戻る"}),(0,a.jsx)("button",{onClick:j,children:"更新"})]})]})})}},270:e=>{e.exports={body:"rank_body__bH0TW",container:"rank_container__TV26o",title:"rank_title__GDfJG","ranking-table-wrapper":"rank_ranking-table-wrapper__TmRCX","ranking-table":"rank_ranking-table___uAIU","my-rank":"rank_my-rank__VmNgC","ranking-actions":"rank_ranking-actions__Cq_5z"}}},e=>{var n=n=>e(e.s=n);e.O(0,[636,593,792],()=>n(2824)),_N_E=e.O()}]);