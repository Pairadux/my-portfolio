function T(){}const X=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function H(t){return t()}function Y(){return Object.create(null)}function P(t){t.forEach(H)}function Z(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function tt(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function et(t){return Object.keys(t).length===0}function B(t,...e){if(t==null){for(const i of e)i(void 0);return T}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nt(t,e,n){t.$$.on_destroy.push(B(e,n))}function it(t,e,n,i){if(t){const r=k(t,e,n,i);return t[0](r)}}function k(t,e,n,i){return t[1]&&i?q(n.ctx.slice(),t[1](i(e))):n.ctx}function rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function ct(t,e,n,i,r,o){if(r){const c=k(e,n,i,o);t.p(c,r)}}function lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function st(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function ot(){p=!0}function ut(){p=!1}function L(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:L(1,r,C=>e[n[C]].claim_order,u))-1;i[l]=n[a]+1;const v=a+1;n[v]=l,r=Math.max(v,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function O(t,e){t.appendChild(e)}function R(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function at(t){const e=A("style");return e.textContent="/* empty */",F(R(t),e),e.sheet}function F(t,e){return O(t.head||t,e),e.sheet}function z(t,e){if(p){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ft(t,e,n){p&&!n?z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function _t(t){t.parentNode&&t.parentNode.removeChild(t)}function dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function ht(){return w(" ")}function mt(){return w("")}function pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function gt(t){return t.dataset.svelteH}function xt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,r=!1){U(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function S(t,e,n,i){return D(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function wt(t,e,n){return S(t,e,n,A)}function vt(t,e,n){return S(t,e,n,I)}function W(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function Et(t){return W(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function kt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function At(t,e,n){t.classList.toggle(e,!!n)}function G(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Dt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function St(t,e){return new t(e)}let m;function b(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){y().$$.on_mount.push(t)}function Ct(t){y().$$.after_update.push(t)}function Tt(t){y().$$.on_destroy.push(t)}function qt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=G(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],E=[];let _=[];const N=[],j=Promise.resolve();let x=!1;function J(){x||(x=!0,j.then(Q))}function Ht(){return J(),j}function K(t){_.push(t)}const g=new Set;let f=0;function Q(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,b(e),V(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;N.length;)N.pop()();x=!1,g.clear(),b(t)}function V(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function Pt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{bt as $,kt as A,Ht as B,E as C,St as D,R as E,at as F,P as G,Z as H,K as I,G as J,X as K,b as L,Y as M,Q as N,et as O,Pt as P,m as Q,H as R,d as S,J as T,ot as U,ut as V,pt as W,qt as X,I as Y,vt as Z,At as _,ht as a,st as a0,Tt as a1,xt as b,wt as c,W as d,A as e,_t as f,Et as g,z as h,ft as i,Nt as j,nt as k,Dt as l,yt as m,T as n,gt as o,dt as p,it as q,lt as r,$ as s,w as t,ct as u,rt as v,tt as w,mt as x,Ct as y,jt as z};
