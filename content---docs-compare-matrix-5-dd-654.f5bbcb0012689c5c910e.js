(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{131:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return g});var a=r(0),n=r.n(a),b=n.a.createContext({}),c=function(t){var e=n.a.useContext(b),r=e;return t&&(r="function"==typeof t?t(e):Object.assign({},e,t)),r},i=function(t){var e=c(t.components);return n.a.createElement(b.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){return n.a.createElement(n.a.Fragment,{},t.children)}},l=function(t){var e=t.components,r=t.mdxType,a=t.originalType,b=t.parentName,i=function(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&-1===e.indexOf(a)&&(r[a]=t[a]);return r}(t,["components","mdxType","originalType","parentName"]),p=c(e);return n.a.createElement(p[b+"."+r]||p[r]||m[r]||a,e?Object.assign({},i,{components:e}):i)};function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var b=r.length,c=new Array(b);c[0]=l;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[p]="string"==typeof t?t:a,c[1]=i;for(var g=2;g<b;g++)c[g]=r[g];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},63:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",function(){return c}),r.d(e,"rightToc",function(){return i}),r.d(e,"default",function(){return l});r(0);var a=r(131);function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},b=Object.keys(t);for(a=0;a<b.length;a++)r=b[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(a=0;a<b.length;a++)r=b[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c={id:"compare-matrix",title:"Comparison matrix"},i=[],p={rightToc:i},m="wrapper";function l(t){var e=t.components,r=b(t,["components"]);return Object(a.b)(m,n({},p,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",n({parentName:"tr"},{align:"right"}),"Feature"),Object(a.b)("th",n({parentName:"tr"},{align:"center"}),Object(a.b)("a",n({parentName:"th"},{href:"https://github.com/vazco/uniforms"}),"uniforms")),Object(a.b)("th",n({parentName:"tr"},{align:"center"}),Object(a.b)("a",n({parentName:"th"},{href:"https://github.com/jaredpalmer/formik"}),"Formik")),Object(a.b)("th",n({parentName:"tr"},{align:"center"}),Object(a.b)("a",n({parentName:"th"},{href:"https://github.com/erikras/redux-form"}),"redux-form")),Object(a.b)("th",n({parentName:"tr"},{align:"center"}),Object(a.b)("a",n({parentName:"th"},{href:"https://github.com/final-form/react-final-form"}),"React Final Form")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Synchronous validation"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Asynchronous validation"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Field level validation"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Manual form layout"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Automatic form layout"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Manual state management mode"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Automatic state management mode"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Manually trigger change"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Manually trigger reset"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Manually trigger validation"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Built in focus state management"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Bootstrap 3 theme"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Bootstrap 4 theme"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Semantic UI theme"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Your custom theme"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"JSON Schema support"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"GraphQL schema support"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"SimpleSchema support"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✖️")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:"right"}),"Your custom schema support"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️"),Object(a.b)("td",n({parentName:"tr"},{align:"center"}),"✔️")))))}l.isMDXComponent=!0}}]);