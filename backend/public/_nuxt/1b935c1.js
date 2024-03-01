/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[78,21],{438:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(o),u=l[0].substr(0,l[0].indexOf(" "))||l[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===l.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,d),i=c.root,m=c.rootMargin,v=c.threshold,u=c.load,g=c.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:m,threshold:v}));for(var f,k=n(l,i),b=0;b<k.length;b++)(f=k[b]).getAttribute("data-placeholder-background")&&(f.style.background=f.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(l,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},853:function(t,e,r){"use strict";r.r(e);var n=r(1),o=(r(21),r(445)),l=r(80),d=r(149),c={name:"brands",middleware:["common-middleware","auth"],data:function(){var t,e;return{result:{id:"",title:"",link:"",type:null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.type,status:2,image:""}}},mixins:[l.a],components:{Dropdown:d.default,DataPage:o.default},computed:{},methods:{dropdownSelected:function(data){this.result.status=data.key}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},m=r(16),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-page",{ref:"dataPage",attrs:{"set-api":"setFooterImageLink","get-api":"getFooterImageLink","set-image-api":"setFooterImageLinkImage","route-name":"footer-links",hash:"payment-social",name:t.$t("dataPage.fImgs"),"validation-keys":["title","link"],"file-keys":["id","type"],result:t.result,gate:"footer_link"},on:{result:function(e){t.result=e}},scopedSlots:t._u([{key:"form",fn:function(e){var n=e.hasError;return[r("div",{staticClass:"input-wrapper"},[r("label",[t._v(t._s(t.$t("index.title")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.title,expression:"result.title"}],class:{invalid:!t.result.title&&n},attrs:{type:"text",placeholder:t.$t("index.title"),name:"title"},domProps:{value:t.result.title},on:{input:function(e){e.target.composing||t.$set(t.result,"title",e.target.value)}}}),t._v(" "),!t.result.title&&n?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("index.title")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[t._v(t._s(t.$t("admin.link")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.link,expression:"result.link"}],ref:"link",class:{invalid:!t.result.link&&n},attrs:{type:"text",placeholder:t.$t("admin.link"),name:"link"},domProps:{value:t.result.link},on:{input:function(e){e.target.composing||t.$set(t.result,"link",e.target.value)}}}),t._v(" "),!t.result.link&&n?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("admin.link")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",{staticClass:"block"},[t._v(t._s(t.$t("category.status")))]),t._v(" "),r("dropdown",{attrs:{selectedKey:""+t.result.status,options:t.statusObj},on:{clicked:t.dropdownSelected}})],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dropdown:r(149).default})}}]);