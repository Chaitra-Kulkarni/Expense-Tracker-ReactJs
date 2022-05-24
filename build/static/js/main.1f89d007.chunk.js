(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),s=(n(17),n(8)),i=n(2),l=n(1),r=(n(18),n(0)),d=function(e){return Object(r.jsx)("div",{className:"expenses-filter ",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2018",children:"2018"})]})]})})};n(20);var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:c}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})};n(21);var o=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})};n(22);var u=function(e){return Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})},b=(n(23),function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found No Expenses!"}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(u,{title:e.title,amount:e.amount,date:e.date},e.id)}))})});n(24);var x=function(e){var t=Object(l.useState)("2022"),n=Object(i.a)(t,2),c=n[0],a=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(r.jsx)("div",{children:Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(d,{selected:c,onChangeFilter:function(e){a(e)}}),Object(r.jsx)(b,{items:s})]})})},O=n(5),h=(n(25),function(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(l.useState)(""),d=Object(i.a)(s,2),j=d[0],o=d[1],u=Object(l.useState)(""),b=Object(i.a)(u,2),x=b[0],O=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:j,date:new Date(x)};e.onSaveExpenseData(n),a(""),o(""),O("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){a(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-09-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsx)("div",{className:"new-expense__actions",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),m=(n(26),function(e){var t=Object(l.useState)(!1),n=Object(i.a)(t,2);n[0],n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[Object(r.jsx)("button",{children:"Add New Expense"}),Object(r.jsx)(h,{onSaveExpenseData:function(t){var n=Object(O.a)(Object(O.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})]})}),p=[{id:1,title:"New TV",amount:100,date:new Date(2022,7,14)},{id:2,title:"Trash Bags",amount:1,date:new Date(2021,2,12)},{id:3,title:"Car Insurance",amount:294,date:new Date(2021,2,28)},{id:4,title:"New Desk (Wooden)",amount:45,date:new Date(2022,5,12)},{id:5,title:"Washing Machine",amount:145,date:new Date(2020,3,19)},{id:6,title:"Health Insurance",amount:245,date:new Date(2019,12,29)},{id:7,title:"New Fridge",amount:55,date:new Date(2019,11,30)}];var v=function(){var e=Object(l.useState)(p),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Let's get started!"}),Object(r.jsx)(m,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(x,{items:n})]})};a.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(v,{}))}],[[27,1,2]]]);
//# sourceMappingURL=main.1f89d007.chunk.js.map