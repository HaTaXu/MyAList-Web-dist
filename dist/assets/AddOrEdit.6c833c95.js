import{a as L,e as t,bj as M,Z as G,ay as H,$ as s,I as T,bv as J,T as P,bl as Z,bm as z,bn as K,bo as Q,bp as U,bq as W,br as X,E as S,bs as Y,bt as p,bu as ee,S as w,F as te,bw as ne,b as re,aS as v,b5 as f,k as ae,c3 as k,j as ie,bL as de,a3 as ue,cS as ce,cw as ge,cx as le,av as oe,D as O,B as se,n as I,N as me,b6 as y,a7 as he}from"./index.cd92df38.js";import{T as c}from"./item_type.be442da4.js";import{R as ve}from"./ResponsiveGrid.aace10e4.js";const b=e=>{const d=L();return t(ne,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(M,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var a;return d(((a=e.full_name_path)!=null?a:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(G,{get fallback(){return t(H,{get children(){return d("settings.unknown_type")}})},get children(){return[t(s,{get when(){return e.type===c.String},get children(){return t(T,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===c.String?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===c.Number},get children(){return t(T,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===c.Number?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,parseInt(a.currentTarget.value))}:void 0}})}}),t(s,{get when(){return e.type===c.Bool},get children(){return t(J,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===c.Bool?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.checked)}:void 0}})}}),t(s,{get when(){return e.type===c.Text},get children(){return t(P,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===c.Text?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===c.Select},get children(){return t(Z,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===c.Select?a=>{var i;return(i=e.onChange)==null?void 0:i.call(e,a)}:void 0},get children(){return[t(z,{get children(){return[t(K,{get children(){return d("global.choose")}}),t(Q,{}),t(U,{})]}}),t(W,{get children(){return t(X,{get children(){return t(S,{get each(){var a;return(a=e.options)==null?void 0:a.split(",")},children:a=>t(Y,{value:a,get children(){return[t(p,{get children(){var i;return d(((i=e.options_prefix)!=null?i:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${a}`)}}),t(ee,{})]}})})}})}})]}})}})]}}),t(w,{get when(){return e.help},get children(){return t(te,{get children(){return d(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function _(e,d){switch(e){case c.Bool:return d?d==="true":!1;case c.Number:return d?parseInt(d):0;default:return d||""}}const we=()=>{const e=L(),{params:d,back:a,to:i}=re(),{id:g}=d,[B,F]=v(()=>f.get("/admin/driver/list"),!0),[l,$]=ae({}),N=async()=>{const n=await F();y(n,$)},[R,j]=v(()=>f.get(`/admin/storage/get?id=${g}`),!0),[A,D]=v(()=>f.get(`/admin/driver/info?driver=${u.driver}`),!0);g?(async()=>{const n=await j();y(n,async r=>{o(r),m(JSON.parse(r.addition));const h=await D();y(h,V=>$({[u.driver]:V}))})})():N();const[u,o]=k({}),[C,m]=k({}),[q,E]=v(()=>(o("addition",JSON.stringify(C)),f.post(`/admin/storage/${g?"update":"create"}`,u))),x=ie(()=>{var r;const n=(r=l()[u.driver])==null?void 0:r.config.alert;if(console.log(n),n)return n.split("|")[0]});return t(he,{get loading(){return g?R()||A():B()},get children(){return[t(de,{mb:"$2",get children(){return e(`global.${g?"edit":"add"}`)}}),t(ue,{mb:"$2",spacing:"$2",get children(){return[t(b,{name:"driver",default:"",readonly:g!==void 0,required:!0,get type(){return c.Select},get options(){return g?u.driver:Object.keys(l()).join(",")},get value(){return u.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:n=>{for(const r of l()[n].common)o(r.name,_(r.type,r.default));m(ce(r=>{for(const h in r)delete r[h]}));for(const r of l()[n].additional)m(r.name,_(r.type,r.default));o("driver",n)}}),t(w,{get when(){return x()},get children(){return t(ge,{get status(){return x()},w:"$full",get children(){return[t(le,{}),oe(()=>e(`drivers.config.${u.driver}.alert`))]}})}})]}}),t(ve,{get children(){return t(w,{get when(){return l()[u.driver]},get children(){return[t(S,{get each(){return l()[u.driver].common},children:n=>t(b,O(n,{driver:"common",get value(){return u[n.name]},onChange:r=>{o(n.name,r)}}))}),t(S,{get each(){return l()[u.driver].additional},children:n=>t(b,O(n,{get driver(){return u.driver},get value(){return C[n.name]},onChange:r=>{m(n.name,r)}}))})]}})}}),t(se,{mt:"$2",get loading(){return q()},onClick:async()=>{l()[u.driver].config.need_ms&&(I.info(e("manage.add_storage-tips")),window.open(me("/@manage/messenger"),"_blank"));const n=await E();y(n,()=>{I.success(e("global.save_success")),a()},(r,h)=>{n.data.id&&i(`/@manage/storages/edit/${n.data.id}`)})},get children(){return e(`global.${g?"save":"add"}`)}})]}})};export{we as default};
