const e="rick-challenge";let t,n,l=!1;const s="undefined"!=typeof window?window:{},o=s.CSS,c=s.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=(()=>(c.head.attachShadow+"").indexOf("[native")>-1)(),a=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),f=new WeakMap,$=e=>"sc-"+e.o,d={},h=e=>"object"==(e=typeof e)||"function"===e,y=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!h(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?p(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=p(e,null);return i.u=t,c.length>0&&(i.$=c),i},p=(e,t)=>({t:0,h:e,i:t,p:null,$:null,u:null}),m={},w=(e,t,n,l,o,c)=>{if(n!==l){let a=V(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,s=g(n),o=g(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if(a||"o"!==t[0]||"n"!==t[1]){const s=h(l);if((a||s&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?a=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(i){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!a||4&c||o)&&!s&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):V(s,u)?u.slice(2):u[2]+t.slice(3),n&&r.rel(e,t,n,!1),l&&r.ael(e,t,l,!1)}},b=/\s/,g=e=>e?e.split(b):[],S=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||d,c=t.u||d;for(l in o)l in c||w(s,l,o[l],void 0,n,t.t);for(l in c)w(s,l,o[l],c[l],n,t.t)},_=(e,n,l)=>{let s,o,r=n.$[l],i=0;if(null!==r.i)s=r.p=c.createTextNode(r.i);else if(s=r.p=c.createElement(r.h),S(null,r,!1),null!=t&&s["s-si"]!==t&&s.classList.add(s["s-si"]=t),r.$)for(i=0;i<r.$.length;++i)o=_(e,r,i),o&&s.appendChild(o);return s},j=(e,t,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=_(null,l,o),r&&(s[o].p=r,i.insertBefore(r,t)))},k=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},v=(e,t)=>e.h===t.h,M=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?(S(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],$=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==$?$=l[--u]:v(i,f)?(M(i,f),i=t[++o],f=l[++c]):v(a,$)?(M(a,$),a=t[--r],$=l[--u]):v(i,$)?(M(i,$),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],$=l[--u]):v(a,f)?(M(a,f),e.insertBefore(a.p,i.p),a=t[--r],f=l[++c]):(s=_(t&&t[c],n,c),f=l[++c],s&&i.p.parentNode.insertBefore(s,i.p));o>r?j(e,null==l[u+1]?null:l[u+1].p,n,l,c,u):c>u&&k(t,o,r)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),j(n,null,t,s,0,s.length-1)):null!==l&&k(l,0,l.length-1)):e.i!==o&&(n.data=o)},C=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.m=t)))},O=(e,t)=>{if(e.t|=16,!(4&e.t))return C(e,e.g),Z((()=>P(e,t)));e.t|=512},P=(e,t)=>{const n=e.S;return A(void 0,(()=>x(e,n,t)))},x=async(e,t,n)=>{const l=e._,s=l["s-rc"];n&&(e=>{const t=e.j,n=e._,l=t.t,s=((e,t)=>{let n=$(t),l=G.get(n);if(e=11===e.nodeType?e:c,l)if("string"==typeof l){let t,s=f.get(e=e.head||e);s||f.set(e,s=new Set),s.has(n)||(t=c.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(i&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);E(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>R(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},E=(e,l)=>{try{l=l.render(),e.t&=-17,e.t|=2,((e,l)=>{const s=e._,o=e.k||p(null,null),c=(e=>e&&e.h===m)(l)?l:y(null,null,l);n=s.tagName,c.h=null,c.t|=4,e.k=c,c.p=o.p=s.shadowRoot||s,t=s["s-sc"],M(o,c)})(e,l)}catch(s){z(s,e._)}return null},R=e=>{const t=e._,n=e.g;64&e.t||(e.t|=64,L(t),e.v(t),n||T()),e.m&&(e.m(),e.m=void 0),512&e.t&&Y((()=>O(e,!1))),e.t&=-517},T=()=>{L(c.documentElement),Y((()=>(e=>{const t=r.ce("appload",{detail:{namespace:"rick-challenge"}});return e.dispatchEvent(t),t})(s)))},A=(e,t)=>e&&e.then?e.then(t):t(),L=e=>e.classList.add("hydrated"),N=(e,t,n)=>{if(t.M){const l=Object.entries(t.M),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>q(this).C.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=q(e),o=s.C.get(t),c=s.t,r=s.S;n=((e,t)=>null==e||h(e)?e:1&t?e+"":e)(n,l.M[t][0]),8&c&&void 0!==o||n===o||(s.C.set(t,n),r&&2==(18&c)&&O(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){r.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},U=(e,t={})=>{const n=[],l=t.exclude||[],o=s.customElements,a=c.head,f=a.querySelector("meta[charset]"),d=c.createElement("style"),h=[];let y,p=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",c.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],o:t[1],M:t[2],O:t[3]};s.M=t[2],!i&&1&s.t&&(s.t|=8);const c=s.o,a=class extends HTMLElement{constructor(e){super(e),H(e=this,s),1&s.t&&(i?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){y&&(clearTimeout(y),y=null),p?h.push(this):r.jmp((()=>(e=>{if(0==(1&r.t)){const t=q(e),n=t.j,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.g=n);break}}n.M&&Object.entries(n.M).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=D(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(N(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(r){z(r)}t.t&=-9,e()}if(s.style){let e=s.style;const t=$(n);if(!G.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_rick_challenge("./shadow-css-23c95dd7.js").then((n=>n.scopeCss(e,t,!1)))),((e,t,n)=>{let l=G.get(e);u&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,G.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,c=()=>O(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){r.jmp((()=>{}))}componentOnReady(){return q(this).P}};s.R=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,N(a,s,1)))})))),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),a.insertBefore(d,f?f.nextSibling:a.firstChild),p=!1,h.length?h.map((e=>e.connectedCallback())):r.jmp((()=>y=setTimeout(T,30)))},W=new WeakMap,q=e=>W.get(e),F=(e,t)=>W.set(t.S=e,t),H=(e,t)=>{const n={t:0,_:e,j:t,C:new Map};return n.P=new Promise((e=>n.v=e)),e["s-p"]=[],e["s-rc"]=[],W.set(e,n)},V=(e,t)=>t in e,z=(e,t)=>(0,console.error)(e,t),B=new Map,D=e=>{const t=e.o.replace(/-/g,"_"),n=e.R,l=B.get(n);return l?l[t]:__sc_import_rick_challenge(`./${n}.entry.js`).then((e=>(B.set(n,e),e[t])),z)},G=new Map,I=[],J=[],K=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&r.t?Y(X):r.raf(X))},Q=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){z(t)}e.length=0},X=()=>{Q(I),Q(J),(l=I.length>0)&&r.raf(X)},Y=e=>a().then(e),Z=K(J,!0);export{o as C,e as N,a,U as b,c as d,y as h,r as p,F as r,s as w}