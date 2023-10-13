(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(4),n=a.n(s),r=(a(9),a(10),a(3)),i=(a(11),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),l=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],d=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}],o=a(0);var j=function(){var e=Object(c.useState)("All"),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),j=Object(r.a)(n,2),h=j[0],b=j[1],m=function(e,t){var a=t.selectedUser,c=t.query,s=i.filter((function(e){return e.name===a||"All"===a})),n=l.filter((function(e){return s.find((function(t){return t.id===e.ownerId}))}));return e.filter((function(e){return n.find((function(t){return t.id===e.categoryId}))&&e.name.toLowerCase().includes(c.toLowerCase())}))}(d,{selectedUser:a,query:h});return Object(o.jsx)("div",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Product Categories"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(o.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:"All"===a&&"is-active",onClick:function(){return s("All")},children:"All"}),i.map((function(e){return Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:a===e.name&&"is-active",onClick:function(){return s(e.name)},children:e.name},e.id)}))]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(o.jsx)("span",{className:"icon is-right",children:""===h?"":Object(o.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return b("")}})})]})}),Object(o.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(o.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s("All"),b("")},children:"Reset all filters"})})]})}),Object(o.jsx)("div",{className:"box table-container",children:0===m.length?Object(o.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}):Object(o.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(o.jsx)("tbody",{children:m.map((function(e){var t=l.find((function(t){return t.id===e.categoryId})),a=i.find((function(e){return e.id===t.ownerId}));return Object(o.jsxs)("tr",{"data-cy":"Product",children:[Object(o.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(o.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(o.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(t.icon," - ").concat(t.title)}),Object(o.jsx)("td",{"data-cy":"ProductUser",className:"has-text-link",children:a.name})]},e.id)}))})]})})]})})};n.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a2bf2cfa.chunk.js.map