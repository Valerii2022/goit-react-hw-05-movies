"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6],{970:function(n,e,r){r.d(e,{Fg:function(){return h},HC:function(){return d},W2:function(){return l},aV:function(){return f},qm:function(){return v}});var t,o,a,c,i,u=r(168),s=r(444),p=r(87),l=s.ZP.div(t||(t=(0,u.Z)(["\n  padding: 20px;\n"]))),f=s.ZP.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),d=s.ZP.li(a||(a=(0,u.Z)(["\n  font-size: 18px;\n  transition: color 250ms linear;\n  &:hover {\n    color: #0070ba;\n  }\n"]))),h=(0,s.ZP)(p.OL)(c||(c=(0,u.Z)(['\n  display: inline-flex;\n  align-items: center;\n  gap:10px;\n  color: black;\n  text-decoration: none;\n  transition: color 250ms linear;\n  &:hover,\n  &.active {\n    color: #0070ba;\n  }\n  &::before{\n    content: "";\n    width: 6px;\n    height: 6px;\n    background-color: currentColor;\n  }\n'],['\n  display: inline-flex;\n  align-items: center;\n  gap:10px;\n  color: black;\n  text-decoration: none;\n  transition: color 250ms linear;\n  &:hover,\n  &.active {\n    color: #0070ba;\n  }\n  &::before{\n    content: "\\";\n    width: 6px;\n    height: 6px;\n    background-color: currentColor;\n  }\n']))),v=s.ZP.div(i||(i=(0,u.Z)(["\n  box-shadow: 0 2px 4px #8e8e8e;\n  padding: 20px;\n"])))},6:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t,o,a=r(861),c=r(439),i=r(757),u=r.n(i),s=r(686),p=r.n(s),l=r(791),f=r(689),d=r(87),h=r(48),v=r(970),x=r(168),b=r(444),g=b.ZP.input(t||(t=(0,x.Z)(["\n  font-size: 18px;\n  padding: 5px;\n  margin-bottom: 20px;\n  margin-right: 10px;\n  border-radius: 3px;\n  outline: none;\n  border: 1px solid #000;\n  &:focus-visible {\n    border: 1px solid #0070ba;\n    box-shadow: 0 0 2px #0070ba;\n  }\n"]))),m=b.ZP.button(o||(o=(0,x.Z)(["\n  font-size: 18px;\n  padding: 5px;\n  cursor: pointer;\n  border: 1px solid #000;\n  border-radius: 3px;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover {\n    color: #fff;\n    background-color: #0070ba;\n    outline: none;\n    border: 1px solid #0070ba;\n  }\n"]))),w=r(184),Z=function(){var n,e=(0,f.TH)(),r=(0,d.lr)(),t=(0,c.Z)(r,2),o=t[0],i=t[1],s=null!==(n=o.get("query"))&&void 0!==n?n:"",x=(0,l.useState)([]),b=(0,c.Z)(x,2),Z=b[0],k=b[1],y=(0,l.useState)(s),_=(0,c.Z)(y,2),C=_[0],P=_[1];(0,l.useEffect)((function(){""!==s&&(0,a.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.WK)(s);case 3:e=n.sent,r=e.data,k(r.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[s]);var j=function(){var n=(0,a.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i({query:C}),n.prev=1,n.next=4,(0,h.WK)(C);case 4:e=n.sent,0===(r=e.data).results.length?(k([]),p().Notify.failure("There are no movies matching you search query. Please try again.")):k(r.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}();return(0,w.jsxs)(v.W2,{children:[(0,w.jsx)(g,{value:C,onChange:function(n){P(n.target.value)},type:"text"}),(0,w.jsx)(m,{type:"submit",onClick:j,children:"Search"}),(0,w.jsx)(v.aV,{children:Z.map((function(n){return(0,w.jsx)(v.HC,{children:(0,w.jsx)(v.Fg,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})]})}},48:function(n,e,r){r.d(e,{Hx:function(){return p},WK:function(){return l},Y5:function(){return u},wr:function(){return i},xc:function(){return s}});var t=r(861),o=r(757),a=r.n(o),c=r(243),i=function(){var n=(0,t.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=40e15dc62f9875135cfe2bf57a204366");case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=6.832937c5.chunk.js.map