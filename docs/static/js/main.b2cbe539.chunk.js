(this["webpackJsonpgifs-app"]=this["webpackJsonpgifs-app"]||[]).push([[0],{15:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=(n(15),n(16),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){var e=t.target.value;o(e)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),b=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"EUtrAGNFXRvgfNeerW22qVVShgKEh530",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("EUtrAGNFXRvgfNeerW22qVVShgKEh530","&q=").concat(encodeURI(e),"&limit=10"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return r=t.sent,c=r.data,i=c.map((function(t){var e,n;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e||null===(n=e.downsized_medium)||void 0===n?void 0:n.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{alt:e,src:n}),Object(u.jsx)("p",{children:e})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),1500)}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate_animated animate_fadeIn",children:e}),c&&Object(u.jsx)("p",{className:"animate_animated animate_flash",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(h,Object(j.a)({},t),t.id)}))})]})},p=function(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(m,{category:t},t)}))})]})};c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b2cbe539.chunk.js.map