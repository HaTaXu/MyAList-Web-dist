import{a as E,k as i,aS as o,b5 as c,bF as N,e as t,bM as m,cB as A,D as g,B as u,b6 as l,n as h,I as P,ad as j,a7 as z}from"./index.d21b26a8.js";import{o as J}from"./index.ffd2b2c9.js";import{G}from"./index.86ce63a8.js";import{I as d}from"./SettingItem.205a6d56.js";import"./index.b9ab84d9.js";import"./index.68ac6b60.js";import"./item_type.be442da4.js";const ne=()=>{const r=E();J("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[b,f]=i(""),[$,v]=i(""),[S,q]=i(""),[a,Q]=i([]),[U,B]=o(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[M,D]=o(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[F,H]=o(()=>c.post("/admin/setting/set_qbit",{url:b(),seedtime:$()}));(async()=>{const e=await B();l(e,n=>{var C,T,I,L,w;_(((C=n.find(s=>s.key==="aria2_uri"))==null?void 0:C.value)||""),y(((T=n.find(s=>s.key==="aria2_secret"))==null?void 0:T.value)||""),q(((I=n.find(s=>s.key==="token"))==null?void 0:I.value)||""),f(((L=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:L.value)||""),v(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[O,R]=o(()=>c.post("/admin/setting/reset_token")),{copy:x}=N();return t(z,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return M()},onClick:async()=>{const e=await D();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>f(e)})),t(d,g(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>v(e)}))]}}),t(u,{my:"$2",get loading(){return F()},onClick:async()=>{const e=await H();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(P,{get value(){return S()},readOnly:!0}),t(j,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{x(S())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return O()},onClick:async()=>{const e=await R();l(e,n=>{h.success(r("settings_other.reset_token_success")),q(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{ne as default};
