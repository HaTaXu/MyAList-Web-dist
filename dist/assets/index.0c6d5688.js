import{e as t,E as O,a3 as y,j as x,af as $,ag as T,bL as h,$ as D,Z as M,b as f,a as d,L as W,N as z,K as S,S as p,au as E,bM as _,k as N,bN as I,ad as m,a6 as l,az as U,U as n,V as r,bO as P,aN as j,bP as H,bQ as Y,aG as F,W as w,aj as R,bR as X,bS as J,n as K,bi as Q,ba as Z,bb as q,bc as G,bd as ee,be as te,ay as v,bg as C,bh as V,bT as ne,bU as re,bV as oe}from"./index.32b75920.js";import{d as ae,e as ie,f as se,g as le,h as ce,i as ue,j as me,k as ge,l as de,m as _e,n as he,b as pe,o as Ee,c as fe}from"./index.c95ac649.js";import{A as Ie,f as ve,g as Ae,h as Le,i as be}from"./index.245aabef.js";import{S as $e}from"./index.b9585134.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(i||{}),Te=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Te||{});const De=e=>{const o=x(()=>{if(!$.is_admin(T())){if(e.role===void 0)return!1;if(e.role===h.GENERAL&&!$.is_general(T()))return!1}return!0});return t(M,{get fallback(){return t(Pe,e)},get children(){return[t(D,{get when(){return!o()},children:null}),t(D,{get when(){return e.children},get children(){return t(Re,e)}})]}})},Pe=e=>{const{pathname:o}=f(),a=d(),c=()=>o()===e.to;return t(Ie,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:u=>{var b;if(k(),e.refresh){(b=u.stopPropagation)==null||b.call(u);let g=e.to;g.startsWith("http")||(g=z(g)),window.open(g,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":S(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return a(e.title)}})]}})},Re=e=>{const{pathname:o}=f(),[a,c]=N(o().includes(e.to)),u=d();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:S()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return u(e.title)}})]}}),t(E,{as:ve,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(A,{get items(){return e.children}})}})}})]}})},A=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(O,{get each(){return e.items},children:o=>t(De,o)})}});function Oe(e){return U({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.8e3120ab.js"),["assets/Common.8e3120ab.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/SettingItem.93d3e22a.js","assets/item_type.be442da4.js","assets/index.245aabef.js","assets/ResponsiveGrid.8b9f4934.js","assets/index.b9585134.js"])),L=[{title:"manage.sidemenu.profile",icon:ae,to:"/@manage",role:h.GUEST,component:n(()=>r(()=>import("./Profile.d189a67e.js"),["assets/Profile.d189a67e.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/index.245aabef.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:ie,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:se,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:le,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:ce,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:ue,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:P,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:P,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:me,to:"/@manage/settings/s3",component:n(()=>r(()=>import("./S3.d02ca02e.js"),["assets/S3.d02ca02e.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/SettingItem.93d3e22a.js","assets/item_type.be442da4.js","assets/index.245aabef.js","assets/ResponsiveGrid.8b9f4934.js","assets/FolderTree.9f90db80.js","assets/index.754f6163.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.b9585134.js"]))},{title:"manage.sidemenu.other",icon:ge,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.5443f5c4.js"),["assets/Other.5443f5c4.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/SettingItem.93d3e22a.js","assets/item_type.be442da4.js","assets/index.245aabef.js","assets/index.b9585134.js"]))}]},{title:"manage.sidemenu.tasks",icon:Oe,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:j,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./offline_download.931986c9.js"),["assets/offline_download.931986c9.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/Tasks.338e7ade.js","assets/Paginator.92c25280.js","assets/index.245aabef.js"]))},{title:"manage.sidemenu.upload",icon:de,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.73f218f2.js"),["assets/Upload.73f218f2.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/Tasks.338e7ade.js","assets/Paginator.92c25280.js","assets/index.245aabef.js"]))},{title:"manage.sidemenu.copy",icon:H,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.f399a698.js"),["assets/Copy.f399a698.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/Tasks.338e7ade.js","assets/Paginator.92c25280.js","assets/index.245aabef.js"]))}]},{title:"manage.sidemenu.users",icon:_e,to:"/@manage/users",component:n(()=>r(()=>import("./Users.7e18340c.js"),["assets/Users.7e18340c.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/DeletePopover.9f4d9645.js","assets/Wether.4a11a11e.js"]))},{title:"manage.sidemenu.user_groups",icon:he,to:"/@manage/groups",component:n(()=>r(()=>import("./UserGroups.6cdffc17.js"),["assets/UserGroups.6cdffc17.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/user_group.fea77ba8.js","assets/DeletePopover.9f4d9645.js","assets/Wether.4a11a11e.js"]))},{title:"manage.sidemenu.storages",icon:Ae,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.73470a82.js"),["assets/Storages.73470a82.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/DeletePopover.9f4d9645.js"]))},{title:"manage.sidemenu.metas",icon:$e,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.bdfe050f.js"),["assets/Metas.bdfe050f.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/DeletePopover.9f4d9645.js","assets/Wether.4a11a11e.js"]))},{title:"manage.sidemenu.indexes",icon:pe,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.947b506f.js"),["assets/indexes.947b506f.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/Common.8e3120ab.js","assets/index.c95ac649.js","assets/SettingItem.93d3e22a.js","assets/item_type.be442da4.js","assets/index.245aabef.js","assets/ResponsiveGrid.8b9f4934.js","assets/index.b9585134.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Le,component:n(()=>r(()=>import("./backup-restore.4335fed6.js"),["assets/backup-restore.4335fed6.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/index.754f6163.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:Y,to:"/",role:h.GUEST,refresh:!0}],{isOpen:Se,onOpen:we,onClose:k}=F(),Ce=()=>{const e=d(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return w("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(R,{"aria-label":"menu",get icon(){return t(be,{})},display:{"@sm":"none"},onClick:we,size:"sm"}),t(_,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(R,{"aria-label":"logout",get icon(){return t(X,{})},onClick:()=>{J(),K.success(e("manage.logout_success")),o("/@login")},size:"sm"})}})]}}),t(Q,{get opened(){return Se()},placement:"left",onClose:k,get children(){return[t(Z,{}),t(q,{get children(){return[t(G,{}),t(ee,{color:"$info9",get children(){return e("manage.title")}}),t(te,{get children(){return[t(A,{items:L}),t(v,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(V,{})]}})}})]}})]}})]}})]}})},Ve=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.2ae6567e.js"),["assets/AddOrEdit.2ae6567e.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.8b9f4934.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.2ae6567e.js"),["assets/AddOrEdit.2ae6567e.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.8b9f4934.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.ec4c96c5.js"),["assets/AddOrEdit.ec4c96c5.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/FolderTree.9f90db80.js","assets/index.245aabef.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/add",component:n(()=>r(()=>import("./AddOrEdit.05a1cb59.js"),["assets/AddOrEdit.05a1cb59.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/FolderTree.9f90db80.js","assets/index.245aabef.js","assets/user_group.fea77ba8.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.ec4c96c5.js"),["assets/AddOrEdit.ec4c96c5.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/FolderTree.9f90db80.js","assets/index.245aabef.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.05a1cb59.js"),["assets/AddOrEdit.05a1cb59.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/FolderTree.9f90db80.js","assets/index.245aabef.js","assets/user_group.fea77ba8.js"]))},{to:"/userGroups/manage/:user_group_name",component:n(()=>r(()=>import("./Manage.104fdb1b.js"),["assets/Manage.104fdb1b.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/DeletePopover.9f4d9645.js","assets/Wether.4a11a11e.js","assets/index.c95ac649.js"]))},{to:"/userGroups/manage/:user_group_name/:id",component:n(()=>r(()=>import("./AddOrEdit.ec4c96c5.js"),["assets/AddOrEdit.ec4c96c5.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/index.c95ac649.js","assets/FolderTree.9f90db80.js","assets/index.245aabef.js","assets/user_group.fea77ba8.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.749d5f44.js"),["assets/AddOrEdit.749d5f44.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/FolderTree.9f90db80.js","assets/index.245aabef.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.749d5f44.js"),["assets/AddOrEdit.749d5f44.js","assets/index.32b75920.js","assets/index.b42d16c5.css","assets/FolderTree.9f90db80.js","assets/index.245aabef.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.47596e14.js"),["assets/2fa.47596e14.js","assets/index.32b75920.js","assets/index.b42d16c5.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.0ec24de7.js"),["assets/Messenger.0ec24de7.js","assets/index.32b75920.js","assets/index.b42d16c5.css"]))}],ke=e=>(Ee(e.title),t(v,{h:"$full",get children(){return t(_,{get children(){return e.title}})}})),B=(e,o=[])=>(e.forEach(a=>{a.children?B(a.children,o):o.push({to:ne(a.to,"/@manage"),component:a.component||(()=>t(ke,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),Be=B(L).concat(Ve),ye=()=>{const e=d();return fe(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ce,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return w("$background","$neutral2")()},overflowY:"auto",get children(){return[t(A,{items:L}),t(v,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(V,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(re,{get children(){return t(O,{each:Be,children:o=>t(oe,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Ne=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{Te as F,i as G,Ne as i};
