import{u as U,f as ee,m as j,n as B,Z as ae,p as le,t as se,h as x,i as D,q as te,x as M,k as l,y as _,z as F,A as I,B as re,D as ue,E as ie,F as ne,R as oe,O as ce,s as ve,j as pe,G as he,H as ye,I as de,J as me,K as b,L as fe}from"./app-57542e83.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=U(ge,[]),He=()=>{const{queryHistoryCount:r}=b,n=r>0;return{enabled:n,queryHistory:y,addQueryHistory:t=>{n&&(y.value.length<r?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,r-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:E}=b,d=U(Re,[]),Qe=()=>{const r=j(),n=E>0,t=s=>r.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:n,resultHistory:d,addResultHistory:s=>{if(n){const u={link:t(s),display:s.display};"header"in s&&(u.header=s.header),d.value.length<E?d.value=[u,...d.value]:d.value=[u,...d.value.slice(0,E-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=r=>{const n=oe(),t=B(),{search:s,terminate:u}=ce(),f=x(!1),g=ve([]);return pe(()=>{const m=()=>{g.value=[],f.value=!1},w=fe(H=>{f.value=!0,H?s({type:"search",query:H,locale:t.value,options:n}).then(h=>{g.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},b.searchDelay);M([r,t],()=>w(r.value),{immediate:!0}),he(()=>{u()})}),{searching:f,results:g}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(r,{emit:n}){const t=j(),s=B(),u=ae(le),{enabled:f,addQueryHistory:g,queryHistory:m,removeQueryHistory:w}=He(),{enabled:H,resultHistory:h,addResultHistory:L,removeResultHistory:Y}=Qe(),O=f||H,S=se(r,"query"),{results:R,searching:z}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),P=D(()=>O&&(m.value.length>0||h.value.length>0)),C=D(()=>R.value.length>0),q=D(()=>R.value[p.value]||null),T=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,G=()=>{const{isQuery:e,index:a}=o.value;a===0?o.value={isQuery:!e,index:e?h.value.length-1:m.value.length-1}:o.value={isQuery:e,index:a-1}},J=()=>{const{isQuery:e,index:a}=o.value;a===(e?m.value.length-1:h.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:a+1}},K=()=>{p.value=p.value>0?p.value-1:R.value.length-1,c.value=q.value.contents.length-1},V=()=>{p.value=p.value<R.value.length-1?p.value+1:0,c.value=0},Z=()=>{c.value<q.value.contents.length-1?c.value=c.value+1:V()},N=()=>{c.value>0?c.value=c.value-1:K()},A=e=>e.map(a=>ye(a)?a:l(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=de[e.index]||"$content",[i,k=""]=me(a)?a[s.value].split("$content"):a.split("$content");return e.display.map(v=>l("div",A([i,...v,k])))}return e.display.map(a=>l("div",A(a)))},Q=()=>{p.value=0,c.value=0,n("updateQuery",""),n("close")};return te("keydown",e=>{if(r.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")Z();else if(e.key==="Enter"){const a=q.value.contents[c.value],i=T(a);g(r.query),L(a),t.push(i),Q()}}else if(H){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const{index:a}=o.value;o.value.isQuery?(n("updateQuery",m.value[a]),e.preventDefault()):(t.push(h.value[a].link),Q())}}}}),M([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:S.value?!C.value:!P.value}],id:"search-pro-results"},S.value===""?O?P.value?[f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),m.value.map((e,a)=>l("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===a}],onClick:()=>{n("updateQuery",e)}},[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(a)}})]))])):null,H?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),h.value.map((e,a)=>l(I,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===a}],onClick:()=>{Q()}},()=>[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(i=>A(i)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),Y(a)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:z.value?l(re,{hint:u.value.searching}):C.value?l("ul",{class:"search-pro-result-list"},R.value.map(({title:e,contents:a},i)=>{const k=p.value===i;return l("li",{class:["search-pro-result-list-item",{active:k}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((v,X)=>{const $=k&&c.value===X;return l(I,{to:T(v),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{g(r.query),L(v),Q()}},()=>[v.type==="text"?null:l(v.type==="title"?ue:v.type==="heading"?ie:ne,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",W(v))])])})])})):u.value.emptyResult)}});export{we as default};
