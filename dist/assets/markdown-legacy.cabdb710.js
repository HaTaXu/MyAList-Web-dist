!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var e,o,u=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(e=n.next()).done)&&(u.push(e.value),!r||u.length!==r);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}System.register(["./index-legacy.f8a2962c.js"],(function(r,n){"use strict";var e,o,u,a,i,l;return{setters:[function(t){e=t.c_,o=t.e,u=t.a8,a=t.ck,i=t.a0,l=t.a7}],execute:function(){r("default",(function(){var r=t(e(),1)[0];return o(l,{get loading(){return r.loading},get children(){return o(u,{get children(){var t;return null===(t=r())||void 0===t?void 0:t.content},get ext(){return a(i.obj.name)},toc:!0})}})}))}}}))}();
