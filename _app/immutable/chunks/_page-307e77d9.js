import{e as p,f as s}from"./model-50861430.js";import{f as n}from"./pages-6967ab4a.js";import{e as f}from"./index-b13fb244.js";const y=({params:t,url:r})=>{const e=p(t.type),a=s(e),o=n(r.pathname);if(!e||!o)throw f(404,`Type ${t.type} not found.`);return{type:e,usages:a,page:o}},i=Object.freeze(Object.defineProperty({__proto__:null,load:y},Symbol.toStringTag,{value:"Module"}));export{i as _,y as l};
