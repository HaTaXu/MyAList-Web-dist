import{bF as v,e as r,ak as $,l as d,au as w,k as y,j as C,aI as a,b as M,a3 as S,K as m,av as O,cT as i,r as z,aK as P,ay as _,at as b,S as g,as as A,b1 as E,ac as K}from"./index.32b75920.js";import{b as W}from"./Folder.b9182d87.js";import{u as D}from"./index.a1e58339.js";import{q as G}from"./index.245aabef.js";import{I as H}from"./ImageWithError.d4987e55.js";import{g as L,O as f}from"./icon.8683bc12.js";import{u as T,I as q,a as B}from"./helper.f5bcb904.js";const X=e=>{const{isHide:h}=v();if(h(e.obj))return null;const{setPathAs:j}=D(),l=r(w,{get color(){return $()},get boxSize(){return`${parseInt(d.grid_item_size)-30}px`},get as(){return L(e.obj)}}),[x,s]=y(!1),k=C(()=>a()&&(x()||e.obj.selected)),{show:I}=W({id:1}),{pushHref:u,to:c}=M(),{isMouseSupported:n}=B(),o=T();return r(K.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(S,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:m()}},as:G,get href(){return e.obj.name},get cursor(){return!n()&&(!a()||o())?"pointer":"default"},get bgColor(){return O(()=>!!e.obj.selected,!0)()?m():void 0},"on:dblclick":t=>{!n()||t.ctrlKey||t.metaKey||t.shiftKey||c(u(e.obj.name))},"on:click":t=>{if(n())return t.preventDefault();if(!!a()){if(t.preventDefault(),o()){c(u(e.obj.name));return}i(e.index,!e.obj.selected)}},onMouseEnter:()=>{s(!0),j(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{s(!1)},onContextMenu:t=>{z(()=>{P(!1),i(e.index,!0,!0)}),I(t,{props:e.obj})},get children(){return[r(_,{class:"item-thumbnail",get h(){return`${parseInt(d.grid_item_size)}px`},w:"$full","on:dblclick":t=>{!n()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),b.emit("gallery",e.obj.name))},"on:click":t=>{n()||a()&&!o()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),b.emit("gallery",e.obj.name))},pos:"relative",get children(){return[r(g,{get when(){return k()},get children(){return r(q,{pos:"absolute",left:"$1",top:"$1","on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{i(e.index,t.target.checked)}})}}),r(g,{get when(){return e.obj.thumb},fallback:l,get children(){return r(H,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(A,{size:"lg"})},fallbackErr:l,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(E,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{X as G};
