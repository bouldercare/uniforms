(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(131),o=a(22),l=a(631),c=a(111),s=a.n(c),u=a(491),m=a(1255),d=a.n(m);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=24;var b=function(e){var t=f(Object(n.useState)(!1),2),a=t[0],i=t[1],o=e.docsMetadata,l=e.sidebar;if(!l)return null;var c=o.docsSidebars[l];if(!c)throw new Error("Can not find ".concat(l," config"));var m=function e(t){switch(t.type){case"category":return r.a.createElement("li",{className:"menu__list-item",key:t.label},r.a.createElement("a",{className:"menu__link",href:"#!"},t.label),r.a.createElement("ul",{className:"menu__list"},t.items.map(e)));case"link":return r.a.createElement("li",{className:"menu__list-item",key:t.label},r.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",to:t.href,onClick:function(){i(!1)}},t.label));case"ref":default:return e(function(e){var t=e.id,a=o.docs[t];if(!a)throw new Error("Improper sidebars file, document with id '".concat(t,"' not found."));return{type:"link",label:a.sidebar_label||a.title,href:a.permalink}}(t))}};return r.a.createElement("div",{className:d.a.sidebar},r.a.createElement("div",{className:s()("menu","menu--responsive",{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){i(!a)}},a?r.a.createElement("span",{className:s()(d.a.sidebarMenuIcon,d.a.sidebarMenuCloseIcon)},"×"):r.a.createElement("svg",{className:d.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map(function(e){return m(e)}))))},v=a(591);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,c=a.permalinkToId,s=c[n.pathname]||c[n.pathname.replace(/\/$/,"")],u=a.docs[s]||{},m=u.sidebar,d=u.description,f=u.title,p=u.permalink,h=u.image;return r.a.createElement(l.a,{noFooter:!0,description:d,title:f,image:h,permalink:p},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(b,{docsMetadata:a,sidebar:m})),r.a.createElement("main",{className:"col"},r.a.createElement(i.a,{components:v.a},Object(o.a)(t.routes,{docsMetadata:a}))))))}},111:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},1255:function(e,t,a){e.exports={sidebar:"sidebar_3Z2ybOxr",sidebarMenuIcon:"sidebarMenuIcon_1vtPwbjq",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_1mQUblWh"}},500:function(e,t){e.exports=function(e,t,a,n){var r=a?a.call(n,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!l(s))return!1;var u=e[s],m=t[s];if(!1===(r=a?a.call(n,u,m,s):void 0)||void 0===r&&u!==m)return!1}return!0}}}]);