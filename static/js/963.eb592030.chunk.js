"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[963],{970:function(e,n,r){r.d(n,{Fg:function(){return h},HC:function(){return f},W2:function(){return p},aV:function(){return d},qm:function(){return v}});var t,i,o,a,c,s=r(168),u=r(444),l=r(87),p=u.ZP.div(t||(t=(0,s.Z)(["\n  padding: 20px;\n"]))),d=u.ZP.ul(i||(i=(0,s.Z)(["\n  list-style: square;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),f=u.ZP.li(o||(o=(0,s.Z)(["\n  font-size: 18px;\n  transition: color 250ms linear;\n  &:hover {\n    color: #0070ba;\n  }\n"]))),h=(0,u.ZP)(l.OL)(a||(a=(0,s.Z)(["\n  color: black;\n  text-decoration: none;\n  transition: color 250ms linear;\n  &:hover,\n  &.active {\n    color: #0070ba;\n  }\n"]))),v=u.ZP.div(c||(c=(0,s.Z)(["\n  box-shadow: 0 2px 4px #8e8e8e;\n  padding: 20px;\n"])))},963:function(e,n,r){r.r(n),r.d(n,{default:function(){return H}});var t,i=r(861),o=r(439),a=r(757),c=r.n(a),s=r(791),u=r(689),l=r(48),p=r(970),d=r(168),f=r(444),h=r(87),v=["title","titleId"];function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},x.apply(this,arguments)}function g(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function m(e,n){var r=e.title,i=e.titleId,o=g(e,v);return s.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:n,"aria-labelledby":i},o),r?s.createElement("title",{id:i},r):null,t||(t=s.createElement("polygon",{points:"12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"})))}var b,w,j,Z,y,k=s.forwardRef(m),_=(r.p,f.ZP.div(b||(b=(0,d.Z)(["\n  display: flex;\n  align-items: start;\n  margin-top: 10px;\n"])))),O=f.ZP.div(w||(w=(0,d.Z)(["\n  padding: 0 20px;\n"]))),P=f.ZP.ul(j||(j=(0,d.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-left: 0;\n"]))),E=(0,f.ZP)(h.rU)(Z||(Z=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid #8e8e8e;\n  padding: 5px 10px;\n  border-radius: 10px;\n  background-color: #f0f0f0;\n  color: #000;\n  text-decoration: none;\n  transition: color 250ms linear, background-color 250ms linear,\n    border-color 250ms linear;\n  &:hover {\n    background-color: #0070ba;\n    color: #fff;\n    border-color: #0070ba;\n  }\n"]))),C=(0,f.ZP)(k)(y||(y=(0,d.Z)(["\nfill: currentColor;\n}\n  }\n"]))),q=r(184),H=function(){var e,n,r=(0,u.TH)(),t=(0,s.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),a=(0,u.UO)().movieId,d=(0,s.useState)(null),f=(0,o.Z)(d,2),h=f[0],v=f[1];return(0,s.useEffect)((function(){(0,i.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(a);case 3:n=e.sent,r=n.data,v(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[a]),(0,q.jsx)(q.Fragment,{children:h&&(0,q.jsxs)("div",{children:[(0,q.jsxs)(p.qm,{children:[(0,q.jsxs)(E,{to:t.current,children:[(0,q.jsx)(C,{width:"20",height:"20"}),"Go back"]}),(0,q.jsxs)(_,{children:[(0,q.jsx)("img",{src:h.poster_path?"https://image.tmdb.org/t/p/original".concat(h.poster_path):"https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg",alt:h.title,width:"300"}),(0,q.jsxs)(O,{children:[(0,q.jsxs)("h1",{children:[h.title,"(",h.release_date.slice(0,4),")"]}),(0,q.jsxs)("p",{children:["User Score ",Math.round(10*h.vote_average),"%"]}),(0,q.jsx)("h2",{children:"Overview"}),(0,q.jsx)("p",{children:h.overview}),(0,q.jsx)("h3",{children:"Genres"}),(0,q.jsx)(P,{children:h.genres.map((function(e){return(0,q.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,q.jsxs)(p.qm,{children:[(0,q.jsx)("h3",{children:"Additional information"}),(0,q.jsxs)(p.aV,{children:[(0,q.jsx)(p.HC,{children:(0,q.jsx)(p.Fg,{to:"/movies/".concat(a,"/cast"),children:"Cast"})}),(0,q.jsx)(p.HC,{children:(0,q.jsx)(p.Fg,{to:"/movies/".concat(a,"/reviews"),children:"Reviews"})})]})]}),(0,q.jsx)(s.Suspense,{fallback:(0,q.jsx)("div",{children:"Loading..."}),children:(0,q.jsx)(u.j3,{})})]})})}},48:function(e,n,r){r.d(n,{Hx:function(){return l},WK:function(){return p},Y5:function(){return s},wr:function(){return c},xc:function(){return u}});var t=r(861),i=r(757),o=r.n(i),a=r(243),c=function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=40e15dc62f9875135cfe2bf57a204366");case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=963.eb592030.chunk.js.map