(this["webpackJsonpquotes-react-router-spa"]=this["webpackJsonpquotes-react-router-spa"]||[]).push([[3],{46:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},47:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},48:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},49:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},50:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},54:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(22),r=c(46),m=c.n(r),j=c(19),i=c(20),d=c(14),l=c(47),u=c.n(l),b=c(0),x=function(e){var t=e.onAddComment,c=Object(n.useRef)(),s=Object(j.a)(i.a),o=s.sendRequest,a=s.status,r=s.error;Object(n.useEffect)((function(){"completed"!==a||r||t()}),[a,r,t]);var m=function(t){t.preventDefault();var n=c.current.value;o({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:u.a.form,onSubmit:m,children:["pending"===a&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:u.a.control,onSubmit:m,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:c})]}),Object(b.jsx)("div",{className:u.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(48),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(49),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],r=Object(s.j)().quoteId,l=Object(j.a)(i.c,!0),u=l.sendRequest,O=l.status,h=l.data;Object(n.useEffect)((function(){u(r)}),[u,r]);var f,p=Object(n.useCallback)((function(){u(r)}),[u,r]);return"pending"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})})),"completed"===O&&h&&h.length>0&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No Comments were added yet"})),Object(b.jsxs)("section",{className:m.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{onAddComment:p,quoteId:r}),f]})},C=c(50),g=c.n(C),q=function(e){return Object(b.jsx)(n.Fragment,{children:Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})})},w=c(21);t.default=function(){var e=Object(j.a)(i.e,!0),t=e.sendRequest,c=e.status,a=e.data,r=e.error,m=Object(s.k)(),l=Object(s.j)().quoteId;return console.log(m),Object(n.useEffect)((function(){t(l)}),[t,l]),"pending"===c?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}):r?Object(b.jsx)("p",{className:"centered focused",children:r}):"completed"!==c||a.text?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(q,{author:a.author,text:a.text}),Object(b.jsx)(s.c,{path:m.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(m.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(s.c,{path:"".concat(m.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)(w.a,{})}}}]);
//# sourceMappingURL=3.8eca03c5.chunk.js.map