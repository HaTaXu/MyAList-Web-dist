!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.a061a944.js","./Folder-legacy.4398d591.js","./index-legacy.19ebfa2e.js","./index-legacy.127dcaa9.js","./icon-legacy.6e6097b3.js","./Layout-legacy.e4e5ad42.js","./index-legacy.23edb529.js","./FolderTree-legacy.59f95c72.js","./video_box-legacy.7d22fce9.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.e248d19b.js","./index-legacy.b49f5515.js"],(function(n,t){"use strict";var r,i,o,c,a,l,u,s,g,d,f,m,h,b,y,j,w,p,x,v,A,$,S,k,C,z,I,E,M,O,P,_;return{setters:[function(e){r=e.cB,i=e.e,o=e.ad,c=e.K,a=e.r,l=e.aK,u=e.cT,s=e.S,g=e.aI,d=e.c1,f=e.au,m=e.ak,h=e.at,b=e.b1,y=e.c5,j=e.cm,w=e.ac,p=e.a,x=e.k,v=e.w,A=e.cU,$=e.cV,S=e.cW,k=e.D,C=e.E,z=e.a0,I=e.a3},function(e){E=e.b},function(e){M=e.u},function(e){O=e.q},function(e){P=e.g,_=e.O},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var t=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],T=function(e){if((0,r().isHide)(e.obj))return null;var n=M().setPathAs,p=E({id:1}).show;return i(w.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return i(o,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:c()}},as:O,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){a((function(){l(!1),u(e.index,!0,!0)})),p(n,{props:e.obj})},get children(){return[i(o,{class:"name-box",spacing:"$1",get w(){return t[0].w},get children(){return[i(s,{get when(){return g()},get children(){return i(d,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){u(e.index,n.target.checked)}})}}),i(f,{class:"icon",boxSize:"$6",get color(){return m()},get as(){return P(e.obj)},mr:"$1","on:click":function(n){e.obj.type===_.IMAGE&&(n.stopPropagation(),n.preventDefault(),h.emit("gallery",e.obj.name))}}),i(b,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),i(b,{class:"size",get w(){return t[1].w},get textAlign(){return t[1].textAlign},get children(){return y(e.obj.size)}}),i(b,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return t[2].w},get textAlign(){return t[2].textAlign},get children(){return j(e.obj.modified)}})]}})}})};n("default",(function(){var n=p(),r=e(x(),2),c=r[0],u=r[1],f=e(x(!1),2),m=f[0],h=f[1];v((function(){c()&&A(c(),m())}));var y=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===c()?h(!m()):a((function(){u(e.name),h(!1)}))}}};return i(I,{class:"list",w:"$full",spacing:"$1",get children(){return[i(o,{class:"title",w:"$full",p:"$2",get children(){return[i(o,{get w(){return t[0].w},spacing:"$1",get children(){return[i(s,{get when(){return g()},get children(){return i(d,{get checked(){return $()},get indeterminate(){return S()},onChange:function(e){l(e.target.checked)}})}}),i(b,k((function(){return y(t[0])}),{get children(){return n("home.obj.".concat(t[0].name))}}))]}}),i(b,k({get w(){return t[1].w}},(function(){return y(t[1])}),{get children(){return n("home.obj.".concat(t[1].name))}})),i(b,k({get w(){return t[2].w}},(function(){return y(t[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(t[2].name))}}))]}}),i(C,{get each(){return z.objs},children:function(e,n){return i(T,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
