(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5606],{6537:function(e,t,r){Promise.resolve().then(r.bind(r,3948))},7648:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var a=r(2972),s=r.n(a)},3948:function(e,t,r){"use strict";r.r(t);var a=r(7437),s=r(2265),l=r(7648),n=r(7996);r(3874);let i=async()=>{let e=await fetch("http://localhost:1337/api/articles?populate=*",{cache:"no-store"});return(await e.json()).data.map(e=>({id:e.id,title:e.title,slug:e.slug,publishedAt:e.publishedAt,cover:{url:e.cover&&e.cover.formats&&e.cover.formats.medium?"http://localhost:1337".concat(e.cover.formats.medium.url):"/path/to/default-image.jpg"},tags:e.tags?{name:e.tags.name}:null}))};t.default=()=>{let[e,t]=(0,s.useState)([]),[r,o]=(0,s.useState)(""),[c,u]=(0,s.useState)(""),[d,m]=(0,s.useState)([]),[p,f]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{let e=await i(),r=e.sort((e,t)=>new Date(t.publishedAt).getTime()-new Date(e.publishedAt).getTime());t(r),m(r),f(Array.from(new Set(e.flatMap(e=>e.tags?[e.tags.name]:[]))))})()},[]),(0,s.useEffect)(()=>{m(e.filter(e=>e.title.toLowerCase().includes(r.toLowerCase())&&(""===c||e.tags&&e.tags.name===c)))},[r,c,e]),(0,a.jsxs)("section",{className:"py-16 bg-white font-inter",children:[(0,a.jsx)("div",{className:"bg-blue-50 py-12 mb-10 px-4",children:(0,a.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,a.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-center p-3 text-blue-500 mb-8",children:"Blogs"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute -left-4 top-0 text-blue-500 text-6xl",children:'"'}),(0,a.jsx)("div",{className:"absolute -right-4 bottom-0 text-blue-500 text-6xl",children:'"'}),(0,a.jsx)("div",{className:"border-t border-b border-blue-300 py-4",children:(0,a.jsx)("p",{className:"text-xl md:text-2xl text-gray-700 italic text-center px-8",children:"Never stop learning, because life never stops teaching"})})]})]})}),(0,a.jsxs)("div",{className:"flex justify-center mb-8 space-x-4",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search blogs...",value:r,onChange:e=>o(e.target.value),className:"border rounded-l-md px-4 py-2 w-1/3 text-gray-900 bg-white"}),(0,a.jsxs)("button",{className:"bg-blue-600 text-white rounded-r-md px-4 flex items-center",children:[(0,a.jsx)(n.jRj,{className:"mr-2"})," Search"]}),(0,a.jsxs)("select",{value:c,onChange:e=>u(e.target.value),className:"border rounded-md px-4 py-2 text-gray-900 bg-white",children:[(0,a.jsx)("option",{value:"",children:"All Tags"}),p.map(e=>(0,a.jsx)("option",{value:e,children:e},e))]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20",children:d.length>0?d.map(e=>(0,a.jsx)(l.default,{href:"/blogs/".concat(e.slug),children:(0,a.jsxs)("div",{className:"relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer",children:[(0,a.jsx)("img",{src:e.cover.url,alt:e.title,className:"w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-105"}),(0,a.jsxs)("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4",children:[(0,a.jsx)("div",{className:"absolute top-4 left-4 bg-blue-500 rounded-full px-3 py-1 text-white text-xs font-medium shadow-md",children:new Date(e.publishedAt).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})}),(0,a.jsx)("h3",{className:"text-white text-lg font-semibold leading-snug mb-2",children:e.title}),e.tags&&(0,a.jsxs)("p",{className:"text-white text-sm mt-2",children:[(0,a.jsx)("span",{className:"font-semibold",children:"Tags:"})," ",e.tags.name]})]}),(0,a.jsx)("div",{className:"absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,a.jsx)("div",{className:"text-white text-2xl",children:(0,a.jsx)(n.Rgz,{})})})]})},e.id)):(0,a.jsx)("div",{className:"text-center col-span-full text-lg text-gray-500",children:"No blogs found..."})})]})}},3874:function(){},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var a=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(s),n=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var a,s;a=t,s=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:l,title:o}=e,u=function(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,n),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==l?a.createElement(l.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[7398,9956,2972,2971,2117,1744],function(){return e(e.s=6537)}),_N_E=e.O()}]);