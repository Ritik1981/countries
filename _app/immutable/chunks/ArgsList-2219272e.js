import{S as j,i as C,s as J,e as R,b as k,C as x,h as d,q as L,r as E,u as q,G as ee,H as z,k as M,a as O,l as G,m as H,c as V,n as I,J as y,I as te,V as A,W as U,K as le,L as ne,M as ie,N as ge,f as m,t as h,E as be,O as re,a0 as he,Q as ke,X as K,Y as ye,g as Q,d as W,v as N,w,x as S,y as D,ab as oe,a6 as Te,p as ve}from"./paths-2c4a0c0c.js";import{d as F,S as Ne,e as we,f as Se,g as De}from"./PreviousNextPage-1ecf3b76.js";import{S as fe,w as Le,v as Ee,U as Pe,_ as Re}from"./definition-5ccca64e.js";import{L as Ue}from"./ChevronDown-b2e0fb54.js";import{u as se}from"./_commonjsHelpers-dcf24e41.js";function Ae(r){var l;let t=((l=r[0])!=null?l:"-")+"",n;return{c(){n=L(t)},l(e){n=E(e,t)},m(e,i){k(e,n,i)},p(e,i){var o;i&1&&t!==(t=((o=e[0])!=null?o:"-")+"")&&q(n,t)},d(e){e&&d(n)}}}function Be(r){let t=JSON.stringify(r[0],null,2)+"",n;return{c(){n=L(t)},l(l){n=E(l,t)},m(l,e){k(l,n,e)},p(l,e){e&1&&t!==(t=JSON.stringify(l[0],null,2)+"")&&q(n,t)},d(l){l&&d(n)}}}function Oe(r){let t,n,l;return{c(){t=L('"'),n=L(r[0]),l=L('"')},l(e){t=E(e,'"'),n=E(e,r[0]),l=E(e,'"')},m(e,i){k(e,t,i),k(e,n,i),k(e,l,i)},p(e,i){i&1&&q(n,e[0])},d(e){e&&d(t),e&&d(n),e&&d(l)}}}function Ve(r){let t;function n(i,o){return typeof i[0]=="string"?Oe:typeof i[0]=="object"?Be:Ae}let l=n(r),e=l(r);return{c(){e.c(),t=R()},l(i){e.l(i),t=R()},m(i,o){e.m(i,o),k(i,t,o)},p(i,[o]){l===(l=n(i))&&e?e.p(i,o):(e.d(1),e=l(i),e&&(e.c(),e.m(t.parentNode,t)))},i:x,o:x,d(i){e.d(i),i&&d(t)}}}function je(r,t,n){let{value:l}=t;return r.$$set=e=>{"value"in e&&n(0,l=e.value)},[l]}class Ce extends j{constructor(t){super(),C(this,t,je,Ve,J,{value:0})}}const Je=r=>({}),ae=r=>({});function qe(r){let t;return{c(){t=L(r[2])},l(n){t=E(n,r[2])},m(n,l){k(n,t,l)},p(n,l){l&4&&q(t,n[2])},d(n){n&&d(t)}}}function Ie(r){let t,n,l,e,i,o,p;const u=r[10].default,_=ee(u,r,r[9],null),T=r[10].tooltip,$=ee(T,r,r[9],ae),c=$||qe(r);let v=[r[8]],P={};for(let f=0;f<v.length;f+=1)P=z(P,v[f]);return{c(){t=M("span"),n=M("button"),_&&_.c(),l=O(),e=M("div"),c&&c.c(),this.h()},l(f){t=G(f,"SPAN",{});var s=H(t);n=G(s,"BUTTON",{type:!0,"aria-describedby":!0});var a=H(n);_&&_.l(a),a.forEach(d),l=V(s),e=G(s,"DIV",{role:!0,id:!0});var b=H(e);c&&c.l(b),b.forEach(d),s.forEach(d),this.h()},h(){I(n,"type","button"),I(n,"aria-describedby",r[5]),y(n,"bx--tooltip--a11y",!0),y(n,"bx--tooltip__trigger",!0),y(n,"bx--tooltip__trigger--definition",!0),y(n,"bx--tooltip--hidden",!r[0]),y(n,"bx--tooltip--visible",r[0]),y(n,"bx--tooltip--top",r[4]==="top"),y(n,"bx--tooltip--bottom",r[4]==="bottom"),y(n,"bx--tooltip--align-start",r[3]==="start"),y(n,"bx--tooltip--align-center",r[3]==="center"),y(n,"bx--tooltip--align-end",r[3]==="end"),I(e,"role","tooltip"),I(e,"id",r[5]),y(e,"bx--assistive-text",!0),te(t,P),y(t,"bx--tooltip--definition",!0),y(t,"bx--tooltip--a11y",!0)},m(f,s){k(f,t,s),A(t,n),_&&_.m(n,null),r[17](n),A(t,l),A(t,e),c&&c.m(e,null),i=!0,o||(p=[U(window,"keydown",r[16]),U(n,"click",r[11]),U(n,"mouseover",r[12]),U(n,"mouseenter",r[13]),U(n,"mouseleave",r[14]),U(n,"focus",r[15]),U(n,"focus",r[7]),U(n,"blur",r[6]),U(t,"mouseenter",r[7]),U(t,"mouseleave",r[6])],o=!0)},p(f,[s]){_&&_.p&&(!i||s&512)&&le(_,u,f,f[9],i?ie(u,f[9],s,null):ne(f[9]),null),(!i||s&32)&&I(n,"aria-describedby",f[5]),(!i||s&1)&&y(n,"bx--tooltip--hidden",!f[0]),(!i||s&1)&&y(n,"bx--tooltip--visible",f[0]),(!i||s&16)&&y(n,"bx--tooltip--top",f[4]==="top"),(!i||s&16)&&y(n,"bx--tooltip--bottom",f[4]==="bottom"),(!i||s&8)&&y(n,"bx--tooltip--align-start",f[3]==="start"),(!i||s&8)&&y(n,"bx--tooltip--align-center",f[3]==="center"),(!i||s&8)&&y(n,"bx--tooltip--align-end",f[3]==="end"),$?$.p&&(!i||s&512)&&le($,T,f,f[9],i?ie(T,f[9],s,Je):ne(f[9]),ae):c&&c.p&&(!i||s&4)&&c.p(f,i?s:-1),(!i||s&32)&&I(e,"id",f[5]),te(t,P=ge(v,[s&256&&f[8]])),y(t,"bx--tooltip--definition",!0),y(t,"bx--tooltip--a11y",!0)},i(f){i||(m(_,f),m(c,f),i=!0)},o(f){h(_,f),h(c,f),i=!1},d(f){f&&d(t),_&&_.d(f),r[17](null),c&&c.d(f),o=!1,be(p)}}}function Me(r,t,n){const l=["tooltipText","open","align","direction","id","ref"];let e=re(t,l),{$$slots:i={},$$scope:o}=t,{tooltipText:p=""}=t,{open:u=!1}=t,{align:_="center"}=t,{direction:T="bottom"}=t,{id:$="ccs-"+Math.random().toString(36)}=t,{ref:c=null}=t;const v=he(),P=()=>n(0,u=!1),f=()=>n(0,u=!0);function s(g){K.call(this,r,g)}function a(g){K.call(this,r,g)}function b(g){K.call(this,r,g)}function B(g){K.call(this,r,g)}function X(g){K.call(this,r,g)}const Y=({key:g})=>{g==="Escape"&&P()};function de(g){ye[g?"unshift":"push"](()=>{c=g,n(1,c)})}return r.$$set=g=>{t=z(z({},t),ke(g)),n(8,e=re(t,l)),"tooltipText"in g&&n(2,p=g.tooltipText),"open"in g&&n(0,u=g.open),"align"in g&&n(3,_=g.align),"direction"in g&&n(4,T=g.direction),"id"in g&&n(5,$=g.id),"ref"in g&&n(1,c=g.ref),"$$scope"in g&&n(9,o=g.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&v(u?"open":"close")},[u,c,p,_,T,$,P,f,e,o,i,s,a,b,B,X,Y,de]}class Ge extends j{constructor(t){super(),C(this,t,Me,Ie,J,{tooltipText:2,open:0,align:3,direction:4,id:5,ref:1})}}const He=Ge;function ue(r){let t,n;return t=new F({props:{type:"red",$$slots:{default:[Qe]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,e){const i={};e&3&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function Ke(r){let t;return{c(){t=L("Deprecated")},l(n){t=E(n,"Deprecated")},m(n,l){k(n,t,l)},d(n){n&&d(t)}}}function Qe(r){let t,n;return t=new He({props:{tooltipText:r[0],$$slots:{default:[Ke]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,e){const i={};e&1&&(i.tooltipText=l[0]),e&2&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function We(r){let t,n,l=r[0]&&ue(r);return{c(){l&&l.c(),t=R()},l(e){l&&l.l(e),t=R()},m(e,i){l&&l.m(e,i),k(e,t,i),n=!0},p(e,[i]){e[0]?l?(l.p(e,i),i&1&&m(l,1)):(l=ue(e),l.c(),m(l,1),l.m(t.parentNode,t)):l&&(Q(),h(l,1,1,()=>{l=null}),W())},i(e){n||(m(l),n=!0)},o(e){h(l),n=!1},d(e){l&&l.d(e),e&&d(t)}}}function Xe(r,t,n){let{reason:l}=t;return r.$$set=e=>{"reason"in e&&n(0,l=e.reason)},[l]}class Ye extends j{constructor(t){super(),C(this,t,Xe,We,J,{reason:0})}}function ce(r){let t,n;return t=new F({props:{type:"purple",$$slots:{default:[ze]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function ze(r){let t;return{c(){t=L("Non-null")},l(n){t=E(n,"Non-null")},m(n,l){k(n,t,l)},d(n){n&&d(t)}}}function Fe(r){let t=!fe(r[0]),n,l,e=t&&ce(r);return{c(){e&&e.c(),n=R()},l(i){e&&e.l(i),n=R()},m(i,o){e&&e.m(i,o),k(i,n,o),l=!0},p(i,[o]){o&1&&(t=!fe(i[0])),t?e?o&1&&m(e,1):(e=ce(i),e.c(),m(e,1),e.m(n.parentNode,n)):e&&(Q(),h(e,1,1,()=>{e=null}),W())},i(i){l||(m(e),l=!0)},o(i){h(e),l=!1},d(i){e&&e.d(i),i&&d(n)}}}function Ze(r,t,n){let{type:l}=t;return r.$$set=e=>{"type"in e&&n(0,l=e.type)},[l]}class xe extends j{constructor(t){super(),C(this,t,Ze,Fe,J,{type:0})}}function et(r){let t,n;return t=new Ue({props:{href:se.joinUrlPaths(oe,`/types/${String(r[0].name)}`),$$slots:{default:[nt]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,e){const i={};e&1&&(i.href=se.joinUrlPaths(oe,`/types/${String(l[0].name)}`)),e&3&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function tt(r){let t,n,l;return t=new Z({props:{type:r[0].ofType}}),{c(){N(t.$$.fragment),n=L("!")},l(e){w(t.$$.fragment,e),n=E(e,"!")},m(e,i){S(t,e,i),k(e,n,i),l=!0},p(e,i){const o={};i&1&&(o.type=e[0].ofType),t.$set(o)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){D(t,e),e&&d(n)}}}function lt(r){let t,n,l,e;return n=new Z({props:{type:r[0].ofType}}),{c(){t=L("["),N(n.$$.fragment),l=L("]")},l(i){t=E(i,"["),w(n.$$.fragment,i),l=E(i,"]")},m(i,o){k(i,t,o),S(n,i,o),k(i,l,o),e=!0},p(i,o){const p={};o&1&&(p.type=i[0].ofType),n.$set(p)},i(i){e||(m(n.$$.fragment,i),e=!0)},o(i){h(n.$$.fragment,i),e=!1},d(i){i&&d(t),D(n,i),i&&d(l)}}}function nt(r){let t=r[0].name+"",n;return{c(){n=L(t)},l(l){n=E(l,t)},m(l,e){k(l,n,e)},p(l,e){e&1&&t!==(t=l[0].name+"")&&q(n,t)},d(l){l&&d(n)}}}function it(r){let t,n,l,e,i,o,p;const u=[lt,tt,et],_=[];function T($,c){return c&1&&(t=null),c&1&&(n=null),c&1&&(l=null),t==null&&(t=!!Le($[0])),t?0:(n==null&&(n=!!Ee($[0])),n?1:(l==null&&(l=!!Pe($[0])),l?2:-1))}return~(e=T(r,-1))&&(i=_[e]=u[e](r)),{c(){i&&i.c(),o=R()},l($){i&&i.l($),o=R()},m($,c){~e&&_[e].m($,c),k($,o,c),p=!0},p($,[c]){let v=e;e=T($,c),e===v?~e&&_[e].p($,c):(i&&(Q(),h(_[v],1,1,()=>{_[v]=null}),W()),~e?(i=_[e],i?i.p($,c):(i=_[e]=u[e]($),i.c()),m(i,1),i.m(o.parentNode,o)):i=null)},i($){p||(m(i),p=!0)},o($){h(i),p=!1},d($){~e&&_[e].d($),$&&d(o)}}}function rt(r,t,n){let{type:l}=t;return r.$$set=e=>{"type"in e&&n(0,l=e.type)},[l]}class Z extends j{constructor(t){super(),C(this,t,rt,it,J,{type:0})}}function ot(r){let t,n;return t=new Z({props:{type:r[0]}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,e){const i={};e&1&&(i.type=l[0]),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function ft(r){let t,n;return t=new F({props:{type:"blue",$$slots:{default:[ot]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,[e]){const i={};e&3&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function st(r,t,n){let{type:l}=t;return r.$$set=e=>{"type"in e&&n(0,l=e.type)},[l]}class at extends j{constructor(t){super(),C(this,t,st,ft,J,{type:0})}}function pe(r,t,n){const l=r.slice();return l[2]=t[n],l}function _e(r){let t,n=r[2].description+"",l;return{c(){t=M("p"),l=L(n)},l(e){t=G(e,"P",{});var i=H(t);l=E(i,n),i.forEach(d)},m(e,i){k(e,t,i),A(t,l)},p(e,i){i&1&&n!==(n=e[2].description+"")&&q(l,n)},d(e){e&&d(t)}}}function me(r){let t,n,l;return n=new Ce({props:{value:r[2].default}}),{c(){t=L("Default: "),N(n.$$.fragment)},l(e){t=E(e,"Default: "),w(n.$$.fragment,e)},m(e,i){k(e,t,i),S(n,e,i),l=!0},p(e,i){const o={};i&1&&(o.value=e[2].default),n.$set(o)},i(e){l||(m(n.$$.fragment,e),l=!0)},o(e){h(n.$$.fragment,e),l=!1},d(e){e&&d(t),D(n,e)}}}function ut(r){let t,n,l=r[2].name+"",e,i,o,p,u,_,T,$,c,v,P;o=new at({props:{type:r[2].type}}),u=new Ye({props:{reason:r[2].deprecationReason}}),T=new xe({props:{type:r[2].type}});let f=r[2].description&&_e(r),s=r[2].default&&me(r);return{c(){t=M("p"),n=M("span"),e=L(l),i=O(),N(o.$$.fragment),p=O(),N(u.$$.fragment),_=O(),N(T.$$.fragment),$=O(),f&&f.c(),c=O(),s&&s.c(),v=R(),this.h()},l(a){t=G(a,"P",{});var b=H(t);n=G(b,"SPAN",{style:!0});var B=H(n);e=E(B,l),B.forEach(d),i=V(b),w(o.$$.fragment,b),p=V(b),w(u.$$.fragment,b),_=V(b),w(T.$$.fragment,b),b.forEach(d),$=V(a),f&&f.l(a),c=V(a),s&&s.l(a),v=R(),this.h()},h(){ve(n,"font-weight","bold")},m(a,b){k(a,t,b),A(t,n),A(n,e),A(t,i),S(o,t,null),A(t,p),S(u,t,null),A(t,_),S(T,t,null),k(a,$,b),f&&f.m(a,b),k(a,c,b),s&&s.m(a,b),k(a,v,b),P=!0},p(a,b){(!P||b&1)&&l!==(l=a[2].name+"")&&q(e,l);const B={};b&1&&(B.type=a[2].type),o.$set(B);const X={};b&1&&(X.reason=a[2].deprecationReason),u.$set(X);const Y={};b&1&&(Y.type=a[2].type),T.$set(Y),a[2].description?f?f.p(a,b):(f=_e(a),f.c(),f.m(c.parentNode,c)):f&&(f.d(1),f=null),a[2].default?s?(s.p(a,b),b&1&&m(s,1)):(s=me(a),s.c(),m(s,1),s.m(v.parentNode,v)):s&&(Q(),h(s,1,1,()=>{s=null}),W())},i(a){P||(m(o.$$.fragment,a),m(u.$$.fragment,a),m(T.$$.fragment,a),m(s),P=!0)},o(a){h(o.$$.fragment,a),h(u.$$.fragment,a),h(T.$$.fragment,a),h(s),P=!1},d(a){a&&d(t),D(o),D(u),D(T),a&&d($),f&&f.d(a),a&&d(c),s&&s.d(a),a&&d(v)}}}function ct(r){let t,n,l;return t=new De({props:{$$slots:{default:[ut]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment),n=O()},l(e){w(t.$$.fragment,e),n=V(e)},m(e,i){S(t,e,i),k(e,n,i),l=!0},p(e,i){const o={};i&33&&(o.$$scope={dirty:i,ctx:e}),t.$set(o)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){D(t,e),e&&d(n)}}}function $e(r){let t,n;return t=new Se({props:{$$slots:{default:[ct]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,e){const i={};e&33&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function pt(r){let t,n,l=r[0],e=[];for(let o=0;o<l.length;o+=1)e[o]=$e(pe(r,l,o));const i=o=>h(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=R()},l(o){for(let p=0;p<e.length;p+=1)e[p].l(o);t=R()},m(o,p){for(let u=0;u<e.length;u+=1)e[u].m(o,p);k(o,t,p),n=!0},p(o,p){if(p&1){l=o[0];let u;for(u=0;u<l.length;u+=1){const _=pe(o,l,u);e[u]?(e[u].p(_,p),m(e[u],1)):(e[u]=$e(_),e[u].c(),m(e[u],1),e[u].m(t.parentNode,t))}for(Q(),u=l.length;u<e.length;u+=1)i(u);W()}},i(o){if(!n){for(let p=0;p<l.length;p+=1)m(e[p]);n=!0}},o(o){e=e.filter(Boolean);for(let p=0;p<e.length;p+=1)h(e[p]);n=!1},d(o){Te(e,o),o&&d(t)}}}function _t(r){let t,n;return t=new we({props:{$$slots:{default:[pt]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,e){const i={};e&33&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function mt(r){let t,n;return t=new Ne({props:{condensed:!0,$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(l){w(t.$$.fragment,l)},m(l,e){S(t,l,e),n=!0},p(l,[e]){const i={};e&33&&(i.$$scope={dirty:e,ctx:l}),t.$set(i)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){h(t.$$.fragment,l),n=!1},d(l){D(t,l)}}}function $t(r,t,n){let l,{data:e}=t;return r.$$set=i=>{"data"in i&&n(1,e=i.data)},r.$$.update=()=>{r.$$.dirty&2&&n(0,l=Re.sortBy(e.map(i=>({id:i.name,deprecationReason:i.deprecationReason,name:i.name,description:i.description,default:i.defaultValue,type:i.type})),i=>i.name)||[])},[l,e]}class yt extends j{constructor(t){super(),C(this,t,$t,mt,J,{data:1})}}export{yt as A,Ye as D,xe as N,Z as T,at as a,Ce as b};
