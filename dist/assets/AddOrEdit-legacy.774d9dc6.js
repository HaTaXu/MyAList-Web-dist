!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(j){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new $(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}r.wrap=s;var p={};function h(){}function d(){}function g(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(k([])));v&&v!==n&&o.call(v,a)&&(y=v);var w=g.prototype=h.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=g,l(w,"constructor",g),l(g,"constructor",d),d.displayName=l(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},_(b.prototype),l(b.prototype,c,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new b(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=k,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.a061a944.js","./FolderTree-legacy.59f95c72.js","./user_group-legacy.9344907d.js","./index-legacy.127dcaa9.js"],(function(t,r){"use strict";var i,a,c,u,l,s,f,p,h,d,g,y,m,v,w,_,b,x,L,S,$,k;return{setters:[function(t){i=t.a,a=t.b,c=t.c3,u=t.aS,l=t.b5,s=t.e,f=t.a3,p=t.bL,h=t.bw,d=t.ad,g=t.bj,y=t.c1,m=t.I,v=t.bM,w=t.E,_=t.B,b=t.b6,x=t.n,L=t.a7},function(t){S=t.a},function(t){$=t.U,k=t.a},function(){}],execute:function(){var r=function(t){var e=i();return s(h,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[s(g,{mb:"0",get children(){return e("users.permissions.".concat(t.name))}}),s(y,{get checked(){return t.can},onChange:function(){return t.onChange(!t.can)}})]}})};t("default",(function(){var t=i(),E=a(),j=E.params,O=E.back,I=j.id,T=o(c({id:0,user_group_name:"",ugn_apply_to_all:!1,size:0,base_path:"/",bp_apply_to_all:!1,permission:0,pms_apply_to_all:!1,disabled:!1}),2),C=T[0],A=T[1],G=o(u((function(){return l.get("/admin/user_group/get?id=".concat(I))})),2),N=G[0],P=G[1],F=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:r=t.sent,b(r,A);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();I&&F();var z=o(u((function(){return l.post("/admin/user_group/".concat(I?"update":"create"),C)})),2),B=z[0],D=z[1];return s(L,{get loading(){return N()},get children(){return s(f,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[s(p,{get children(){return t("global.".concat(I?"edit":"add"))}}),s(h,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[s(d,{spacing:"$3",get children(){return[s(g,{for:"user_group_name",display:"flex",alignItems:"center",get children(){return t("users.user_group_name")}}),s(h,{w:"fit-content",display:"flex",get children(){return s(y,{css:{whiteSpace:"nowrap"},id:"ugn_apply_to_all",onChange:function(t){return A("ugn_apply_to_all",t.currentTarget.checked)},color:"$neutral10",fontSize:"$sm",get checked(){return C.ugn_apply_to_all},marginBottom:"$1",get children(){return t("users.apply_to_all")}})}})]}}),s(m,{id:"user_group_name",get value(){return C.user_group_name},onInput:function(t){return A("user_group_name",t.currentTarget.value)}})]}}),s(h,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[s(d,{spacing:"$3",get children(){return[s(g,{for:"base_path",display:"flex",alignItems:"center",get children(){return t("users.base_path")}}),s(h,{w:"fit-content",display:"flex",get children(){return s(y,{css:{whiteSpace:"nowrap"},id:"bp_apply_to_all",onChange:function(t){return A("bp_apply_to_all",t.currentTarget.checked)},color:"$neutral10",fontSize:"$sm",get checked(){return C.bp_apply_to_all},marginBottom:"$1",get children(){return t("users.apply_to_all")}})}})]}}),s(S,{id:"base_path",get value(){return C.base_path},onChange:function(t){return A("base_path",t)},onlyFolder:!0})]}}),s(h,{w:"$full",get children(){return[s(d,{spacing:"3.2rem",get children(){return[s(g,{display:"flex",alignItems:"center",get children(){return t("users.permission")}}),s(h,{w:"fit-content",display:"flex",get children(){return s(y,{css:{whiteSpace:"nowrap"},id:"pms_apply_to_all",onChange:function(t){return A("pms_apply_to_all",t.currentTarget.checked)},color:"$neutral10",fontSize:"$sm",get checked(){return C.pms_apply_to_all},marginBottom:"$1",get children(){return t("users.apply_to_all")}})}})]}}),s(v,{w:"$full",wrap:"wrap",gap:"$2",get children(){return s(w,{each:$,children:function(t,e){return s(r,{name:t,get can(){return k.can(C.permission,e())},onChange:function(t){A("permission",t?C.permission|=1<<e():C.permission&=~(1<<e()))}})}})}})]}}),s(h,{w:"fit-content",display:"flex",get children(){return s(y,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:function(t){return A("disabled",t.currentTarget.checked)},color:"$neutral10",fontSize:"$sm",get checked(){return C.disabled},get children(){return t("users.disabled")}})}}),s(d,{spacing:"$2",get children(){return[s(_,{colorScheme:"accent",get loading(){return B()},onClick:(o=n(e().mark((function r(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:n=e.sent,b(n,(function(){x.success(t("global.save_success")),O()}));case 4:case"end":return e.stop()}}),r)}))),function(){return o.apply(this,arguments)}),get children(){return t("global.".concat(I?"save":"add"))}}),s(_,{onClick:(r=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O();case 1:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),get children(){return t("global.back")}})];var r,o}})]}})}})}))}}}))}();
