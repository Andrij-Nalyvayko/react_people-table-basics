(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{56:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c.n(n),s=c(10),r=c(27),j=c(31),i=c(15),l=c.n(i),b=c(0),h=c(28),d=c.n(h),o=c(2),p=c(1),x=function(e){var t=e.users;return Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Sex"}),Object(p.jsx)("th",{children:"Born"}),Object(p.jsx)("th",{children:"Died"}),Object(p.jsx)("th",{children:"Mother"}),Object(p.jsx)("th",{children:"Father"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.sex}),Object(p.jsx)("td",{children:e.born}),Object(p.jsx)("td",{children:e.died}),Object(p.jsx)("td",{children:e.motherName}),Object(p.jsx)("td",{children:e.fatherName})]})}))})]})},u=(c(56),function(){var e=Object(b.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];function a(){return(a=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/react_people-table/api/people.json",e.next=3,d.a.get("https://mate-academy.github.io/react_people-table/api/people.json");case 3:t=e.sent,n(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsxs)("nav",{className:"navigation",children:[Object(p.jsx)("button",{className:"button",type:"button",children:Object(p.jsx)(s.b,{to:"/",className:"button__link",children:" Home Page "})}),Object(p.jsx)("button",{className:"button",type:"button",onClick:function(){return function(){return a.apply(this,arguments)}()},children:Object(p.jsx)(s.b,{to:"/people",className:"button__link",children:" PeoplePage "})})]})}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,children:Object(p.jsx)("h2",{className:"head",children:"Home Page"})}),Object(p.jsxs)(o.a,{path:"/people",exact:!0,children:[Object(p.jsx)("h2",{className:"head",children:"People Page"}),c.length>0&&Object(p.jsx)(x,{users:c})]}),Object(p.jsx)("p",{className:"notFound",children:"Not Found Page"})]})]})});a.a.render(Object(p.jsx)(s.a,{basename:"/",children:Object(p.jsx)(u,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2ffb5f57.chunk.js.map