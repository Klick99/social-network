(this["webpackJsonpmy-first-react-progect"]=this["webpackJsonpmy-first-react-progect"]||[]).push([[5],{377:function(e,t,c){"use strict";c.r(t);var r=c(143);var n=c(0),s=c.n(n),i=c(15),j=c(182),u=c(1),o=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.chat.status}));return Object(n.useEffect)((function(){return e(Object(j.c)()),function(){e(Object(j.d)())}}),[]),Object(u.jsxs)("div",{children:["error"===t&&Object(u.jsx)("div",{children:"Some error occurred. Please refresh the page"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a,{}),Object(u.jsx)(l,{})]})]})},a=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(i.d)((function(e){return e.chat.messages})),c=Object(n.useRef)(null),s=Object(n.useState)(!0),j=Object(r.a)(s,2),o=j[0],a=j[1];return Object(n.useEffect)((function(){var e;o&&(null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[t]),Object(u.jsxs)("div",{style:{height:"700px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!o&&a(!0):o&&a(!1)},children:[t.map((function(e){return Object(u.jsx)(b,{message:e},e.id)})),Object(u.jsx)("div",{ref:c})]})},b=s.a.memo((function(e){var t=e.message;return console.log(">>>>>"),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:t.photo,style:{width:"30px"}})," ",Object(u.jsx)("b",{children:t.userName}),Object(u.jsx)("br",{}),t.message,Object(u.jsx)("hr",{})]})})),l=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],o=Object(i.c)(),a=Object(i.d)((function(e){return e.chat.status}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{onChange:function(e){return s(e.currentTarget.value)},value:c})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{disabled:"ready"!==a,onClick:function(){c&&(o(Object(j.b)(c)),s(""))},children:"Send"})})]})};t.default=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(o,{})})}}}]);
//# sourceMappingURL=5.d50e6eb0.chunk.js.map