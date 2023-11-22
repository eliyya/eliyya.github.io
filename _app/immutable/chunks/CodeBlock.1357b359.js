import{w as Y,r as $}from"./index.768855ed.js";import{S as ee,s as te,e as x,i as D,y as K,d as y,z as ne,M as oe,H as R,I as V,f as T,l as I,a as J,g as M,h as H,m as j,c as Q,j as v,x as E,C as ae,D as le,n as O,T as re,F as ie,U as se,V as ce}from"./scheduler.2042f13f.js";import{S as ue,i as de}from"./index.0614fa34.js";const fe=Y(void 0),P={};function W(o){return o==="local"?localStorage:sessionStorage}function F(o,t,e){const n=(e==null?void 0:e.serializer)??JSON,l=(e==null?void 0:e.storage)??"local";function h(f,i){W(l).setItem(f,n.stringify(i))}if(!P[o]){const f=Y(t,s=>{const u=W(l).getItem(o);u&&s(n.parse(u));{const r=c=>{c.key===o&&s(c.newValue?n.parse(c.newValue):null)};return window.addEventListener("storage",r),()=>window.removeEventListener("storage",r)}}),{subscribe:i,set:d}=f;P[o]={set(s){h(o,s),d(s)},update(s){const u=s(ee(f));h(o,u),d(u)},subscribe:i}}return P[o]}F("modeOsPrefers",!1);F("modeUserPrefers",void 0);F("modeCurrent",!1);const Z="(prefers-reduced-motion: reduce)";function be(){return window.matchMedia(Z).matches}$(be(),o=>{{const t=n=>{o(n.matches)},e=window.matchMedia(Z);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}});function me(o,t){if(!window.isSecureContext){console.error("Clipboard action failed: app not running in secure context, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard");return}const e=()=>{o.dispatchEvent(new CustomEvent("copyComplete"))},n=()=>{if(typeof t=="object"){if("element"in t){const l=document.querySelector(`[data-clipboard="${t.element}"]`);if(!l)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${t.element}"]`);B(l.innerHTML,"text/html").then(e);return}if("input"in t){const l=document.querySelector(`[data-clipboard="${t.input}"]`);if(!l)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${t.input}"]`);B(l.value).then(e);return}}B(t).then(e)};return o.addEventListener("click",n),{update(l){t=l},destroy(){o.removeEventListener("click",n)}}}async function B(o,t="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[t]:new Blob([o],{type:t}),"text/plain":new Blob([o],{type:"text/plain"})})]):await new Promise(e=>{e(navigator.clipboard.writeText(String(o)))})}function Le(o,t){const e='a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';let n,l;function h(r){r.shiftKey&&r.code==="Tab"&&(r.preventDefault(),l.focus())}function f(r){!r.shiftKey&&r.code==="Tab"&&(r.preventDefault(),n.focus())}const i=r=>{if(t===!1)return;const c=Array.from(o.querySelectorAll(e));c.length&&(n=c[0],l=c[c.length-1],r||n.focus(),n.addEventListener("keydown",h),l.addEventListener("keydown",f))};i(!1);function d(){n&&n.removeEventListener("keydown",h),l&&l.removeEventListener("keydown",f)}const s=(r,c)=>(r.length&&(d(),i(!0)),c),u=new MutationObserver(s);return u.observe(o,{childList:!0,subtree:!0}),{update(r){t=r,r?i(!1):d()},destroy(){d(),u.disconnect()}}}function G(o){let t,e,n,l=X(o[0])+"",h,f,i,d=(o[7]?o[4]:o[3])+"",s,u,r,c,_,g,w,C,L,S;function p(a,b){return a[6]?ge:he}let k=p(o),m=k(o);return{c(){t=T("div"),e=T("header"),n=T("span"),h=I(l),f=J(),i=T("button"),s=I(d),c=J(),_=T("pre"),g=T("code"),m.c(),this.h()},l(a){t=M(a,"DIV",{class:!0,"data-testid":!0});var b=H(t);e=M(b,"HEADER",{class:!0});var N=H(e);n=M(N,"SPAN",{class:!0});var U=H(n);h=j(U,l),U.forEach(y),f=Q(N),i=M(N,"BUTTON",{class:!0});var q=H(i);s=j(q,d),q.forEach(y),N.forEach(y),c=Q(b),_=M(b,"PRE",{class:!0});var z=H(_);g=M(z,"CODE",{class:!0});var A=H(g);m.l(A),A.forEach(y),z.forEach(y),b.forEach(y),this.h()},h(){v(n,"class","codeblock-language"),v(i,"class",u="codeblock-btn "+o[2]),v(e,"class","codeblock-header "+ye),v(g,"class",w="codeblock-code language-"+o[0]+" lineNumbers"),v(_,"class","codeblock-pre "+Ee),v(t,"class",C="codeblock "+o[8]),v(t,"data-testid","codeblock")},m(a,b){D(a,t,b),E(t,e),E(e,n),E(n,h),E(e,f),E(e,i),E(i,s),E(t,c),E(t,_),E(_,g),m.m(g,null),L||(S=[ae(i,"click",o[9]),le(r=me.call(null,i,o[1]))],L=!0)},p(a,b){b&1&&l!==(l=X(a[0])+"")&&O(h,l),b&152&&d!==(d=(a[7]?a[4]:a[3])+"")&&O(s,d),b&4&&u!==(u="codeblock-btn "+a[2])&&v(i,"class",u),r&&re(r.update)&&b&2&&r.update.call(null,a[1]),k===(k=p(a))&&m?m.p(a,b):(m.d(1),m=k(a),m&&(m.c(),m.m(g,null))),b&1&&w!==(w="codeblock-code language-"+a[0]+" lineNumbers")&&v(g,"class",w),b&256&&C!==(C="codeblock "+a[8])&&v(t,"class",C)},d(a){a&&y(t),m.d(),L=!1,ie(S)}}}function he(o){let t=o[1].trim()+"",e;return{c(){e=I(t)},l(n){e=j(n,t)},m(n,l){D(n,e,l)},p(n,l){l&2&&t!==(t=n[1].trim()+"")&&O(e,t)},d(n){n&&y(e)}}}function ge(o){let t,e;return{c(){t=new se(!1),e=x(),this.h()},l(n){t=ce(n,!1),e=x(),this.h()},h(){t.a=e},m(n,l){t.m(o[5],n,l),D(n,e,l)},p(n,l){l&32&&t.p(n[5])},d(n){n&&(y(e),t.d())}}}function _e(o){let t,e=o[0]&&o[1]&&G(o);return{c(){e&&e.c(),t=x()},l(n){e&&e.l(n),t=x()},m(n,l){e&&e.m(n,l),D(n,t,l)},p(n,[l]){n[0]&&n[1]?e?e.p(n,l):(e=G(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:K,o:K,d(n){n&&y(t),e&&e.d(n)}}}const ve="overflow-hidden shadow",ye="text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4",Ee="whitespace-pre-wrap break-all p-4 pt-1";function X(o){return o==="js"?"javascript":o==="ts"?"typescript":o==="shell"?"terminal":o}function ke(o,t,e){let n,l;ne(o,fe,a=>e(17,l=a));const h=oe();let{language:f="plaintext"}=t,{code:i=""}=t,{lineNumbers:d=!1}=t,{background:s="bg-neutral-900/90"}=t,{blur:u=""}=t,{text:r="text-sm"}=t,{color:c="text-white"}=t,{rounded:_="rounded-container-token"}=t,{shadow:g="shadow"}=t,{button:w="btn btn-sm variant-soft !text-white"}=t,{buttonLabel:C="Copy"}=t,{buttonCopied:L="👍"}=t,S=!1,p=i,k=!1;function m(){e(7,k=!0),setTimeout(()=>{e(7,k=!1)},2e3),h("copy")}return o.$$set=a=>{e(19,t=R(R({},t),V(a))),"language"in a&&e(0,f=a.language),"code"in a&&e(1,i=a.code),"lineNumbers"in a&&e(10,d=a.lineNumbers),"background"in a&&e(11,s=a.background),"blur"in a&&e(12,u=a.blur),"text"in a&&e(13,r=a.text),"color"in a&&e(14,c=a.color),"rounded"in a&&e(15,_=a.rounded),"shadow"in a&&e(16,g=a.shadow),"button"in a&&e(2,w=a.button),"buttonLabel"in a&&e(3,C=a.buttonLabel),"buttonCopied"in a&&e(4,L=a.buttonCopied)},o.$$.update=()=>{o.$$.dirty&131075&&l!==void 0&&(e(5,p=l.highlight(i,{language:f}).value.trim()),e(6,S=!0)),o.$$.dirty&1056&&d&&(e(5,p=p.replace(/^/gm,()=>'<span class="line"></span>	')),e(6,S=!0)),e(8,n=`${ve} ${s} ${u} ${r} ${c} ${_} ${g} ${t.class??""}`)},t=V(t),[f,i,w,C,L,p,S,k,n,m,d,s,u,r,c,_,g,l]}class Se extends ue{constructor(t){super(),de(this,t,ke,_e,te,{language:0,code:1,lineNumbers:10,background:11,blur:12,text:13,color:14,rounded:15,shadow:16,button:2,buttonLabel:3,buttonCopied:4})}}export{Se as C,Le as f,fe as s};
