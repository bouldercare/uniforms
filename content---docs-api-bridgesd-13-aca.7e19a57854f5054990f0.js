(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{131:function(e,n,a){"use strict";a.d(n,"a",function(){return m}),a.d(n,"b",function(){return p});var r=a(0),t=a.n(r),i=t.a.createContext({}),o=function(e){var n=t.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},m=function(e){var n=o(e.components);return t.a.createElement(i.Provider,{value:n},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){return t.a.createElement(t.a.Fragment,{},e.children)}},s=function(e){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),c=o(n);return t.a.createElement(c[i+"."+a]||c[a]||l[a]||r,n?Object.assign({},m,{components:n}):m)};function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[c]="string"==typeof e?e:r,o[1]=m;for(var p=2;p<i;p++)o[p]=a[p];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},52:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",function(){return o}),a.d(n,"rightToc",function(){return m}),a.d(n,"default",function(){return s});a(0);var r=a(131);function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o={id:"api-bridges",title:"Bridges"},m=[{value:"GraphQLBridge",id:"graphqlbridge",children:[]},{value:"JSONSchemaBridge",id:"jsonschemabridge",children:[]},{value:"SimpleSchema2Bridge",id:"simpleschema2bridge",children:[]},{value:"SimpleSchemaBridge",id:"simpleschemabridge",children:[]}],c={rightToc:m},l="wrapper";function s(e){var n=e.components,a=i(e,["components"]);return Object(r.b)(l,t({},c,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To make use of any schema, uniforms have to create a ",Object(r.b)("em",{parentName:"p"},"bridge")," of it - a unified schema mapper."),Object(r.b)("p",null,"Currently available bridges:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GraphQLBridge")," in ",Object(r.b)("inlineCode",{parentName:"li"},"uniforms-bridge-graphql")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JSONSchemaBridge")," in ",Object(r.b)("inlineCode",{parentName:"li"},"uniforms-bridge-json-schema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SimpleSchema2Bridge")," in ",Object(r.b)("inlineCode",{parentName:"li"},"uniforms-bridge-simple-schema-2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SimpleSchemaBridge")," in ",Object(r.b)("inlineCode",{parentName:"li"},"uniforms-bridge-simple-schema"))),Object(r.b)("h2",null,Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"graphqlbridge"})),Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#graphqlbridge"}),"#"),Object(r.b)("inlineCode",{parentName:"h2"},"GraphQLBridge")),Object(r.b)("pre",null,Object(r.b)("code",t({parentName:"pre"},{className:"language-js"}),"import { GraphQLBridge } from 'uniforms-bridge-graphql';\nimport { buildASTSchema } from 'graphql';\nimport { parse } from 'graphql';\n\nconst schema = `\n    type Author {\n        id:        String!\n        firstName: String\n        lastName:  String\n    }\n\n    type Post {\n        id:     Int!\n        author: Author!\n        title:  String\n        votes:  Int\n    }\n\n    # This is required by buildASTSchema\n    type Query { anything: ID }\n`;\n\nconst schemaType = buildASTSchema(parse(schema)).getType('Post');\nconst schemaData = {\n  id: {\n    allowedValues: [1, 2, 3]\n  },\n  title: {\n    options: [{ label: 1, value: 'a' }, { label: 2, value: 'b' }]\n  }\n};\n\nconst schemaValidator = model => {\n  const details = [];\n\n  if (!model.id) {\n    details.push({ name: 'id', message: 'ID is required!' });\n  }\n\n  // ...\n\n  if (details.length) {\n    throw { details };\n  }\n};\n\nconst bridge = new GraphQLBridge(schemaType, schemaValidator, schemaData);\n")),Object(r.b)("h2",null,Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"jsonschemabridge"})),Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#jsonschemabridge"}),"#"),Object(r.b)("inlineCode",{parentName:"h2"},"JSONSchemaBridge")),Object(r.b)("pre",null,Object(r.b)("code",t({parentName:"pre"},{className:"language-js"}),"import Ajv from 'ajv';\nimport { JSONSchemaBridge } from 'uniforms-bridge-json-schema';\n\nconst ajv = new Ajv({ allErrors: true, useDefaults: true });\n\nconst schema = {\n  title: 'Person',\n  type: 'object',\n  properties: {\n    firstName: { type: 'string' },\n    lastName: { type: 'string' },\n    age: {\n      description: 'Age in years',\n      type: 'integer',\n      minimum: 0\n    }\n  },\n  required: ['firstName', 'lastName']\n};\n\nfunction createValidator(schema) {\n  const validator = ajv.compile(schema);\n\n  return model => {\n    validator(model);\n\n    if (validator.errors && validator.errors.length) {\n      throw { details: validator.errors };\n    }\n  };\n}\n\nconst schemaValidator = createValidator(schema);\n\nconst bridge = new JSONSchemaBridge(schema, schemaValidator);\n")),Object(r.b)("h2",null,Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"simpleschema2bridge"})),Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#simpleschema2bridge"}),"#"),Object(r.b)("inlineCode",{parentName:"h2"},"SimpleSchema2Bridge")),Object(r.b)("pre",null,Object(r.b)("code",t({parentName:"pre"},{className:"language-js"}),"import SimpleSchema from 'simpl-schema';\nimport SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';\n\nconst PersonSchema = new SimpleSchema({\n  // ...\n\n  aboutMe: {\n    type: String,\n    uniforms: MyText, // Component...\n    uniforms: {\n      // ...or object...\n      component: MyText, // ...with component...\n      propA: 1 // ...and/or extra props.\n    }\n  }\n});\n\nconst bridge = new SimpleSchema2Bridge(PersonSchema);\n")),Object(r.b)("h2",null,Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"simpleschemabridge"})),Object(r.b)("a",t({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#simpleschemabridge"}),"#"),Object(r.b)("inlineCode",{parentName:"h2"},"SimpleSchemaBridge")),Object(r.b)("pre",null,Object(r.b)("code",t({parentName:"pre"},{className:"language-js"}),"import SimpleSchemaBridge from 'uniforms-bridge-simple-schema';\nimport { SimpleSchema } from 'aldeed:simple-schema';\n\nconst PersonSchema = new SimpleSchema({\n  // ...\n\n  aboutMe: {\n    type: String,\n    uniforms: MyText, // Component...\n    uniforms: {\n      // ...or object...\n      component: MyText, // ...with component...\n      propA: 1 // ...and/or extra props.\n    }\n  }\n});\n\nconst bridge = new SimpleSchemaBridge(PersonSchema);\n")))}s.isMDXComponent=!0}}]);