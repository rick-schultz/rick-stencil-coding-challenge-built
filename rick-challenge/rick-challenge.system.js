System.register(["./index-475b36e7.system.js","./app-globals-b7ec2292.system.js"],(function(e,r){"use strict";var t,n,i,o,a,s,c,m,f,u;return{setters:[function(e){t=e.B;n=e.c;i=e.p;o=e.w;a=e.H;s=e.d;c=e.N;m=e.a;f=e.b},function(e){u=e.g}],execute:function(){var e=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var p=function(){if(t.isDev&&!t.isTesting){n("Running in development mode.")}if(t.cssVarShim){i.$cssShim$=o.__cssshim}if(t.cloneNodeFix){d(a.prototype)}if(t.profile&&!performance.mark){performance.mark=performance.measure=function(){};performance.getEntriesByName=function(){return[]}}var e=t.scriptDataOpts||t.safari10||t.dynamicImportShim?Array.from(s.querySelectorAll("script")).find((function(e){return new RegExp("/"+c+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===c})):null;var f=r.meta.url;var u=t.scriptDataOpts?e["data-opts"]||{}:{};if(t.safari10&&"onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}if(!t.safari10&&f!==""){u.resourcesUrl=new URL(".",f).href}else if(t.dynamicImportShim||t.safari10){u.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,o.location.href)).href;if(t.dynamicImportShim){l(u.resourcesUrl,e)}if(t.dynamicImportShim&&!o.customElements){return r.import("./dom-9370655f.system.js").then((function(){return u}))}}return m(u)};var l=function(r,t){var n=e(c);try{o[n]=new Function("w","return import(w);//"+Math.random())}catch(a){var i=new Map;o[n]=function(e){var a=new URL(e,r).href;var c=i.get(a);if(!c){var m=s.createElement("script");m.type="module";m.crossOrigin=t.crossOrigin;m.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+n+".m = m;"],{type:"application/javascript"}));c=new Promise((function(e){m.onload=function(){e(o[n].m);m.remove()}}));i.set(a,c);s.head.appendChild(m)}return c}}};var d=function(e){var r=e.cloneNode;e.cloneNode=function(e){if(this.nodeName==="TEMPLATE"){return r.call(this,e)}var t=r.call(this,false);var n=this.childNodes;if(e){for(var i=0;i<n.length;i++){if(n[i].nodeType!==2){t.appendChild(n[i].cloneNode(true))}}}return t}};p().then((function(e){u();return f([["example-component.system",[[1,"example-component",{headline:[1],contactUS:[32]}]]]],e)}))}}}));