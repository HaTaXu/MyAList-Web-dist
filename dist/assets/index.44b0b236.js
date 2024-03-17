import{bW as se,D as F,bX as U,bY as x,aH as A,W as M,e,a6 as L,aE as S,R as v,b as j,bS as m,bZ as P,d as ae,at as W,b5 as _,bO as ie,b_ as le,b$ as ce,c0 as ue,a as ge,j as de,k as f,c1 as pe,aS as E,a3 as he,bN as R,aq as fe,bM as me,S as w,I as O,c2 as N,b1 as we,ad as be,B as T,bg as _e,bh as $e,c3 as Ce,ax as ve,bD as D,n as b,b6 as xe}from"./index.d21b26a8.js";import{p as Se,c as ye}from"./index.ffd2b2c9.js";import{s as ke,g as Ie,a as Ge}from"./webauthn-json.browser-ponyfill.1c672167.js";const Le="https://github.com/alist-org/alist";function Ee(s){return se(`${s}-${Le}`)}const Re=A('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),Oe=s=>{const u=F({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Re.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return U(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&x(l,"stop-color",t._v$=i),d!==t._v$2&&x(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Te=A('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),Me=s=>{const u=F({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Te.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return U(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&x(l,"stop-color",t._v$=i),d!==t._v$2&&x(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Pe=()=>{const s=M("#a9c6ff","#062b74");return e(L,{get bgColor(){return s()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e(L,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(Me,{})}}),e(L,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(Oe,{})}})]}})},ze=()=>{const s=S("sso_login_enabled"),u=v("sso_login_platform"),n=S("sso_compatibility_mode"),{searchParams:c,to:g}=j(),r=c.token;r!=null&&r!=""&&(m(r),g(decodeURIComponent(c.redirect||P||"/"),!0));function l(a){const t=a.data;t.token&&(m(t.token),g(decodeURIComponent(c.redirect||P||"/"),!0))}if(window.addEventListener("message",l),ae(()=>{window.removeEventListener("message",l)}),s){const a=()=>{const i=_.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=i;return}window.open(i,"authPopup","width=500,height=600")};let t;switch(u){case"Github":t=ue;break;case"Microsoft":t=Se;break;case"Google":t=ce;break;case"Dingtalk":t=le;break;default:t=ie}return e(W,{cursor:"pointer",boxSize:"$8",as:t,p:"$0_5",onclick:a})}},Fe=()=>{const s=v("logo").split(`
`),u=M(s[0],s.pop()),n=ge(),c=de(()=>`${n("login.login_to")} ${v("site_title")}`);ye(c);const g=M("white","$neutral1"),[r,l]=f(localStorage.getItem("username")||""),[a,t]=f(localStorage.getItem("password")||""),[i,d]=f(""),[$,H]=f(!1),[C,Z]=pe("remember-pwd","false"),[y,z]=f(!1),[q,J]=E(async()=>y()?_.post("/auth/login/ldap",{username:r(),password:a(),otp_code:i()}):_.post("/auth/login/hash",{username:r(),password:Ee(a()),otp_code:i()})),[,K]=E((o,p,h)=>_.post("/authn/webauthn_finish_login?username="+h,JSON.stringify(p),{headers:{session:o}})),[,V]=E(o=>_.get("/authn/webauthn_begin_login?username="+o)),{searchParams:X,to:k}=j(),Y=S("webauthn_login_enabled"),Q=async()=>{H(!$())},I=async()=>{if($()){if(!ke()){b.error(n("users.webauthn_not_supported"));return}m(),C()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const o=await V(r());xe(o,async p=>{try{const h=Ie(p.options),ne=await Ge(h),oe=await K(p.session,ne,r());D(oe,re=>{b.success(n("login.success")),m(re.token),k(decodeURIComponent(X.redirect||P||"/"),!0)})}catch(h){h instanceof Error&&b.error(h.message)}})}else{C()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",a())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const o=await J();D(o,p=>{b.success(n("login.success")),m(p.token),k("/",!0)},(p,h)=>{!G()&&h===402?ee(!0):b.error(p)})}},[G,ee]=f(!1),B=S("ldap_login_enabled"),te=v("ldap_login_tips");return B&&z(!0),e(ve,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(he,{get bgColor(){return g()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(R,{alignItems:"center",justifyContent:"space-around",get children(){return[e(fe,{mr:"$2",boxSize:"$12",get src(){return u()}}),e(me,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),e(w,{get when(){return!G()},get fallback(){return e(O,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return i()},onInput:o=>d(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&I()}})},get children(){return[e(O,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return r()},onInput:o=>l(o.currentTarget.value)}),e(w,{get when(){return!$()},get children(){return e(O,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return a()},onInput:o=>t(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&I()}})}}),e(R,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(N,{get checked(){return C()==="true"},onChange:()=>Z(C()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(we,{as:"a",target:"_blank",get href(){return n("login.forget_url")},get children(){return n("login.forget")}})]}})]}}),e(be,{w:"$full",spacing:"$2",get children(){return[e(w,{get when(){return!$()},get children(){return e(T,{colorScheme:"primary",w:"$full",onClick:()=>{G()?d(""):(l(""),t(""))},get children(){return n("login.clear")}})}}),e(T,{w:"$full",get loading(){return q()},onClick:I,get children(){return n("login.login")}})]}}),e(w,{when:B,get children(){return e(N,{w:"$full",get checked(){return y()},onChange:()=>z(!y()),children:te})}}),e(T,{w:"$full",colorScheme:"accent",onClick:()=>{m(),k("/",!0)},get children(){return n("login.use_guest")}}),e(R,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(_e,{}),e($e,{}),e(ze,{}),e(w,{when:Y,get children(){return e(W,{cursor:"pointer",boxSize:"$8",as:Ce,p:"$0_5",onclick:Q})}})]}})]}}),e(Pe,{})]}})};export{Fe as default};
