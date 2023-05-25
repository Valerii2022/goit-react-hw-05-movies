"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[256],{970:function(e,n,r){r.d(n,{Fg:function(){return h},HC:function(){return f},W2:function(){return p},aV:function(){return d},qm:function(){return v}});var t,i,c,o,a,s=r(168),u=r(444),l=r(87),p=u.ZP.div(t||(t=(0,s.Z)(["\n  padding: 20px;\n"]))),d=u.ZP.ul(i||(i=(0,s.Z)(["\n  list-style: square;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),f=u.ZP.li(c||(c=(0,s.Z)(["\n  font-size: 18px;\n  transition: color 250ms linear;\n  &:hover {\n    color: #0070ba;\n  }\n"]))),h=(0,u.ZP)(l.OL)(o||(o=(0,s.Z)(["\n  color: black;\n  text-decoration: none;\n  transition: color 250ms linear;\n  &:hover,\n  &.active {\n    color: #0070ba;\n  }\n"]))),v=u.ZP.div(a||(a=(0,s.Z)(["\n  box-shadow: 0 2px 4px #8e8e8e;\n  padding: 20px;\n"])))},256:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var t,i,c,o,a,s=r(861),u=r(439),l=r(757),p=r.n(l),d=r(791),f=r(689),h=r(48),v=r(970),x=r(168),g=r(444),m=r(87),b=g.ZP.div(t||(t=(0,x.Z)(["\n  display: flex;\n  align-items: start;\n  margin-top: 10px;\n"]))),w=g.ZP.div(i||(i=(0,x.Z)(["\n  padding: 0 20px;\n"]))),j=g.ZP.ul(c||(c=(0,x.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-left: 0;\n"]))),Z=(0,g.ZP)(m.rU)(o||(o=(0,x.Z)(["\n  border: 1px solid #8e8e8e;\n  padding: 0 10px;\n  border-radius: 10px;\n  background-color: #f0f0f0;\n  color: #000;\n  text-decoration: none;\n  transition: color 250ms linear, background-color 250ms linear,\n    border-color 250ms linear;\n  &:hover,\n  &.active {\n    background-color: #0070ba;\n    color: #fff;\n    border-color: #0070ba;\n  }\n"]))),y=["title","titleId"];function k(){return k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},k.apply(this,arguments)}function _(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function O(e,n){var r=e.title,t=e.titleId,i=_(e,y);return d.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:n,"aria-labelledby":t},i),r?d.createElement("title",{id:t},r):null,a||(a=d.createElement("polygon",{points:"12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"})))}var P=d.forwardRef(O),E=(r.p,r(184)),C=function(){var e,n,r=(0,f.TH)(),t=(0,d.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),i=(0,f.UO)().movieId,c=(0,d.useState)(null),o=(0,u.Z)(c,2),a=o[0],l=o[1];return(0,d.useEffect)((function(){(0,s.Z)(p().mark((function e(){var n,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Y5)(i);case 3:n=e.sent,r=n.data,l(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[i]),(0,E.jsx)(E.Fragment,{children:a&&(0,E.jsxs)("div",{children:[(0,E.jsxs)(v.qm,{children:[(0,E.jsx)(P,{width:"30",height:"30"}),(0,E.jsx)(Z,{to:t.current,children:"Go back"}),(0,E.jsxs)(b,{children:[(0,E.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(a.poster_path),alt:a.title,width:"300"}),(0,E.jsxs)(w,{children:[(0,E.jsxs)("h1",{children:[a.title,"(",a.release_date.slice(0,4),")"]}),(0,E.jsxs)("p",{children:["User Score ",Math.round(10*a.vote_average),"%"]}),(0,E.jsx)("h2",{children:"Overview"}),(0,E.jsx)("p",{children:a.overview}),(0,E.jsx)("h3",{children:"Genres"}),(0,E.jsx)(j,{children:a.genres.map((function(e){return(0,E.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,E.jsxs)(v.qm,{children:[(0,E.jsx)("h3",{children:"Additional information"}),(0,E.jsxs)(v.aV,{children:[(0,E.jsx)(v.HC,{children:(0,E.jsx)(v.Fg,{to:"/movies/".concat(i,"/cast"),children:"Cast"})}),(0,E.jsx)(v.HC,{children:(0,E.jsx)(v.Fg,{to:"/movies/".concat(i,"/reviews"),children:"Reviews"})})]})]}),(0,E.jsx)(d.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading..."}),children:(0,E.jsx)(f.j3,{})})]})})}},48:function(e,n,r){r.d(n,{Hx:function(){return l},WK:function(){return p},Y5:function(){return s},wr:function(){return a},xc:function(){return u}});var t=r(861),i=r(757),c=r.n(i),o=r(243),a=function(){var e=(0,t.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=40e15dc62f9875135cfe2bf57a204366");case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=256.3513a9a0.chunk.js.map