(window["webpackJsonpmy-first-react-progect"]=window["webpackJsonpmy-first-react-progect"]||[]).push([[4],{294:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__137z4",dialog:"Dialogs_dialog__lFtmd"}},295:function(e,a,t){e.exports={dialog:"DialogsItem_dialog__1eZEQ",activeLink:"DialogsItem_activeLink__26hKv"}},299:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(125),c=t(294),r=t.n(c),o=t(295),l=t.n(o),m=t(12),d=function(e){return i.a.createElement("div",{className:l.a.dialog},i.a.createElement("div",null,i.a.createElement("img",{src:"https://www.vokrug.tv/pic/person/a/c/1/0/ac106ad67ce63e4c52b43f29dc3b1039.jpg"})),i.a.createElement(m.b,{to:"/dialogs/"+e.id,className:l.a.dialog,activeClassName:l.a.activeLink},e.name))},u=function(e){return i.a.createElement("div",{className:r.a.dialog},e.message)},g=t(28),b=t(87),f=t(126),p=t(31),E=t(84),v=Object(E.a)(50),h=Object(f.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(b.a,{component:p.b,validate:[E.b,v],name:"newMessageBody",placeholder:"Enter your message"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),j=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return i.a.createElement(d,{name:e.name,key:e.id,id:e.id})})),n=a.messagesData.map((function(e){return i.a.createElement(u,{message:e.message,id:e.id,key:e.id})}));a.newMessageBody;return!1===e.isAuth?i.a.createElement(g.a,{to:"/login"}):i.a.createElement("div",{className:r.a.dialogs},i.a.createElement("div",{className:r.a.dialogsItems},t),i.a.createElement("div",{className:r.a.messages},i.a.createElement("div",null,n)),i.a.createElement(h,{onSubmit:function(a){e.sendMassage(a.newMessageBody)}}))},w=t(32),_=t(33),O=t(36),y=t(34),k=t(37),N=t(17),D=function(e){return{isAuth:e.auth.isAuth}},M=t(7);a.default=Object(M.d)(Object(N.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMassage:function(a){e(Object(s.b)(a))}}})),(function(e){var a=function(a){function t(){return Object(w.a)(this,t),Object(O.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(k.a)(t,a),Object(_.a)(t,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(g.a,{to:"/login"})}}]),t}(i.a.Component);return Object(N.b)(D)(a)}))(j)}}]);
//# sourceMappingURL=4.b4032b50.chunk.js.map