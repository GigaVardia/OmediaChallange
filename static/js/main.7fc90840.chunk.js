(this.webpackJsonpomedia=this.webpackJsonpomedia||[]).push([[0],{37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(22),s=r.n(n),i=r(5),l=r.n(i),o=r(10),u=r(6),j=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)(null),s=Object(u.a)(n,2),i=s[0],j=s[1];return{loading:r,request:Object(a.useCallback)(function(){var e=Object(o.a)(l.a.mark((function e(t){var r,a,n,s,i,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,n=o.length>3&&void 0!==o[3]?o[3]:{},e.prev=3,a&&(a=JSON.stringify(a),n["Content-Type"]="application/json"),c(!0),e.next=9,fetch(t,{method:r,body:a,headers:n});case 9:return s=e.sent,e.next=12,s.json();case 12:if(i=e.sent,s.ok){e.next=15;break}throw new Error(i.msg||"Something went wrong");case 15:return c(!1),e.abrupt("return",i);case 19:throw e.prev=19,e.t0=e.catch(3),c(!1),j(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(a.useCallback)((function(){return j(null)}),[])}},h=r(11),d=r(0),b=function(e){return Object(d.jsx)("a",{className:"repos-linksWrap-link",href:e.html_url,children:e.name})},p=function(e){for(var t=[],r=e.length>3?3:e.length,a=0;a<r;a++)t.push(Object(d.jsx)(b,{html_url:e[a].html_url,name:e[a].name},e[a].id));return t},g=function(e){var t=e.user,r=Object(a.useState)([]),c=Object(u.a)(r,2),n=c[0],s=c[1],i=j(),b=i.loading,g=(i.error,i.request);i.clearError;return Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("".concat(t.repos_url,"?per_page=3"));case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),p(n),Object(d.jsxs)("li",{className:"users-wrapper__item",children:[Object(d.jsxs)("div",{className:"users-wrapper__item-info",children:[Object(d.jsx)("img",{className:"users-wrapper__item-info-img",src:t.avatar_url,alt:"user_img"}),Object(d.jsxs)("span",{className:"users-wrapper__item-info-type",children:["Type: ",t.type," \u2014"]}),Object(d.jsxs)(h.b,{to:"/".concat(t.login),children:["\xa0",t.login]})]}),Object(d.jsxs)("div",{className:"repos",children:[Object(d.jsx)("div",{className:"text",children:"Repositories:"}),Object(d.jsx)("div",{className:"repos-linksWrap",children:b||0===n.length?null:p(n).map((function(e){return e}))})]})]})},m=r(13),O=r(14),x=r(3),f=Object(d.jsx)(m.a,{icon:O.c}),v=Object(d.jsx)(m.a,{icon:O.b}),N=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)("list"),s=Object(u.a)(n,2),i=s[0],b=s[1],p=j(),m=p.loading,O=(p.error,p.request),N=(p.clearError,Object(a.useState)("")),_=Object(u.a)(N,2),y=_[0],k=_[1],w=Object(x.f)();Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("https://api.github.com/search/users?q=followers:>=1000&per_page=12");case 3:t=e.sent,c(t.items),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var S=function(e){var t=localStorage["user".concat(e)].replace(/"/g,"");return Object(d.jsx)("div",{className:"header-search__history-item",children:Object(d.jsx)(h.b,{to:"/".concat(t),children:t})},localStorage["user".concat(e)])};return Object(d.jsxs)("div",{className:"mainPage mainPage-outer",children:[Object(d.jsx)("div",{className:"header header-outer",children:Object(d.jsxs)("div",{className:"header-inner container",children:[Object(d.jsx)("div",{className:"header-title",children:"Most popular users in GitHub!"}),Object(d.jsxs)("div",{className:"header-search",children:[Object(d.jsx)("input",{className:"header-search__input",type:"text",value:y,placeholder:"Search user...",onChange:function(e){k(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(w.push("/".concat(y)),localStorage.length<3&&(localStorage.setItem("user".concat(localStorage.length),JSON.stringify(y)),console.log(localStorage)))},onFocus:function(){document.querySelector("#searchHistory").style.display="flex"},onBlur:function(){document.querySelector("#searchHistory").style.display="none"}}),Object(d.jsx)("div",{id:"searchHistory",className:"header-search__history",children:function(){for(var e=[],t=0;t<localStorage.length;t++)e.push(S(t));return e}()})]}),Object(d.jsx)("div",{className:"header-viewType",onClick:function(){"list"===i&&b("grid"),"grid"===i&&b("list")},children:"list"===i?Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)("span",{className:"text",children:"List"})," ",v]}):Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)("span",{className:"text",children:"Grid"})," ",f]})})]})}),Object(d.jsx)("div",{className:"mainPage-inner container",children:Object(d.jsx)("ul",{id:"usersWrapId",className:"".concat(i," users-wrapper"),children:m?Object(d.jsx)("div",{className:"loading",children:"Loading..."}):r.map((function(e){return Object(d.jsx)(g,{user:e},e.id)}))})})]})},_=Object(d.jsx)(m.a,{icon:O.a}),y=function(e){var t=e.orgz;return Object(d.jsxs)("li",{className:"userPage-organizations-ul__item",children:[Object(d.jsx)("img",{className:"userPage-organizations-ul__item-img",src:t.avatar_url}),Object(d.jsx)("a",{className:"userPage-organizations-ul__item-link",href:"https://github.com/".concat(t.login),target:"_blank",children:t.login})]})},k=function(e){var t=e.user,r=Object(a.useState)([]),c=Object(u.a)(r,2),n=c[0],s=c[1],i=j(),h=i.loading,b=(i.error,i.request);i.clearError;return Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("".concat(t.organizations_url));case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(d.jsx)(d.Fragment,{children:h?Object(d.jsx)(d.Fragment,{children:"Loading Organizations..."}):0===n.length?Object(d.jsx)(d.Fragment,{children:"No organizations!"}):Object(d.jsx)("ul",{className:"userPage-organizations-ul",children:n.map((function(e){return Object(d.jsx)(y,{orgz:e},e.id)}))})})},w=function(e){var t=e.user,r=Object(a.useState)([]),c=Object(u.a)(r,2),n=c[0],s=c[1],i=j(),h=i.loading,b=(i.error,i.request);i.clearError;Object(a.useEffect)(Object(o.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("".concat(t.repos_url,"?per_page=3"));case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var g=h?[]:p(n),m=Object(x.f)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){m.push("/")},className:"userPage-back",children:_}),Object(d.jsx)("div",{className:"userPage-imgWrap",children:Object(d.jsx)("img",{className:"userPage-imgWrap__img",src:t.avatar_url,alt:"user_img"})}),Object(d.jsx)("div",{className:"userPage-name",children:Object(d.jsx)("a",{className:"userPage-name__link",href:t.html_url,target:"_blank",children:t.login})}),Object(d.jsxs)("div",{className:"userPage-type",children:["Type: ",t.type]}),Object(d.jsxs)("div",{className:"userPage-repos",children:["Repositories: ",h?null:g.length>0?Object(d.jsx)("div",{className:"repos-linksWrap",children:g}):Object(d.jsx)(d.Fragment,{children:"Empty"})]}),Object(d.jsxs)("div",{className:"userPage-organizations",children:["Organizations:",Object(d.jsx)(k,{user:t})]})]})},S=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)(!0),s=Object(u.a)(n,2),i=s[0],j=s[1],h=Object(x.g)().username;Object(a.useEffect)((function(){b()}),[]);var b=function(){var e=Object(o.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.github.com/users/").concat(h));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,c(r),j(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"userPage userPage-outer",children:Object(d.jsx)("div",{className:"userPage-inner container",children:i?Object(d.jsx)(d.Fragment,{children:"Loading..."}):r.hasOwnProperty("login")?Object(d.jsx)(w,{user:r}):Object(d.jsx)(d.Fragment,{children:"User Not Found..."})})})},P=(r(37),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{path:"/",exact:!0,component:N}),Object(d.jsx)(x.a,{path:"/:username",children:Object(d.jsx)(S,{})})]})})})});s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7fc90840.chunk.js.map