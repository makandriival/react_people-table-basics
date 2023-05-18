(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),r=c(5),a=(c(21),c(22),c(8)),s=c(12),j=c(9),i=c(4),d=c(1),l=c(2),b=(c(23),c(6)),h=c.n(b),o=c(0),O=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(r.c,{className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(o.jsx)(r.c,{className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},x=(c(25),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),u=function(e){var t=e.person,c=e.selectedPerson,n=e.setSelectedPerson,a=t.name,s=t.born,j=t.died,i=t.sex,d=t.slug,l=t.fatherName,b=t.motherName,O=t.mother,x=t.father;return Object(o.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":d===c}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(r.b,{to:d,className:h()({"has-text-danger":"f"===i}),onClick:function(){n(d)},children:a})}),Object(o.jsx)("td",{children:i}),Object(o.jsx)("td",{children:s}),Object(o.jsx)("td",{children:j}),O?Object(o.jsx)("td",{className:h()({"has-text-danger":"f"===O.sex}),children:Object(o.jsx)(r.b,{to:d,onClick:function(){n(O.slug)},children:b})}):Object(o.jsx)("td",{children:b||"-"}),x?Object(o.jsx)("td",{children:Object(o.jsx)(r.b,{to:d,onClick:function(){n(x.slug)},children:l})}):Object(o.jsx)("td",{children:l||"-"})]})},p=function(e){var t=e.fetchPeople,c=e.people,n=e.isLoading,r=Object(d.useState)(""),a=Object(i.a)(r,2),s=a[0],j=a[1],l=function(e){j(e)};return Object(d.useEffect)((function(){t()}),[]),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[n&&Object(o.jsx)(x,{}),Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsxs)("tbody",{children:[c.map((function(e){return Object(o.jsx)(u,{person:e,selectedPerson:s,setSelectedPerson:l},e.slug)})),Object(o.jsxs)("tr",{"data-cy":"person",children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/jan-van-brussel-1714",children:"Jan van Brussel"})}),Object(o.jsx)("td",{children:"m"}),Object(o.jsx)("td",{children:"1714"}),Object(o.jsx)("td",{children:"1748"}),Object(o.jsx)("td",{children:"Joanna van Rooten"}),Object(o.jsx)("td",{children:"Jacobus van Brussel"})]}),Object(o.jsxs)("tr",{"data-cy":"person",children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/philibert-haverbeke-1907",children:"Philibert Haverbeke"})}),Object(o.jsx)("td",{children:"m"}),Object(o.jsx)("td",{children:"1907"}),Object(o.jsx)("td",{children:"1997"}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"has-text-danger",href:"#/people/emma-de-milliano-1876",children:"Emma de Milliano"})}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/emile-haverbeke-1877",children:"Emile Haverbeke"})})]}),Object(o.jsxs)("tr",{"data-cy":"person",className:"has-background-warning",children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/jan-frans-van-brussel-1761",children:"Jan Frans van Brussel"})}),Object(o.jsx)("td",{children:"m"}),Object(o.jsx)("td",{children:"1761"}),Object(o.jsx)("td",{children:"1833"}),Object(o.jsx)("td",{children:"-"}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/jacobus-bernardus-van-brussel-1736",children:"Jacobus Bernardus van Brussel"})})]}),Object(o.jsxs)("tr",{"data-cy":"person",children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"has-text-danger",href:"#/people/lievijne-jans-1542",children:"Lievijne Jans"})}),Object(o.jsx)("td",{children:"f"}),Object(o.jsx)("td",{children:"1542"}),Object(o.jsx)("td",{children:"1582"}),Object(o.jsx)("td",{children:"-"}),Object(o.jsx)("td",{children:"-"})]}),Object(o.jsxs)("tr",{"data-cy":"person",children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/bernardus-de-causmaecker-1721",children:"Bernardus de Causmaecker"})}),Object(o.jsx)("td",{children:"m"}),Object(o.jsx)("td",{children:"1721"}),Object(o.jsx)("td",{children:"1789"}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"has-text-danger",href:"#/people/livina-haverbeke-1692",children:"Livina Haverbeke"})}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/lieven-de-causmaecker-1696",children:"Lieven de Causmaecker"})})]})]})]})]})})};function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(d.useState)(null),b=Object(i.a)(r,2),h=b[0],x=b[1],u=Object(d.useState)(!1),f=Object(i.a)(u,2),v=f[0],g=f[1],N=function(e){var t=e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(j.a)(Object(j.a)({},t),{},{mother:c,father:n})}));n(t)},k=Object(d.useCallback)(Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,m().then((function(e){return N(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),x("load");case 9:return e.prev=9,g(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])}))),[]);return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(O,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsx)(l.a,{path:"people",element:Object(o.jsx)(p,{people:c,error:h,isLoading:v,fetchPeople:k})}),Object(o.jsx)(l.a,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(r.a,{children:Object(o.jsx)(f,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.88e9f1ef.chunk.js.map