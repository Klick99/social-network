(window["webpackJsonpmy-first-react-progect"]=window["webpackJsonpmy-first-react-progect"]||[]).push([[3],{293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__Bv2H_"}},296:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__28d-0",posts:"MyPosts_posts__1NHDk"}},297:function(e,t,a){e.exports={item:"Post_item__121al"}},298:function(e,t,a){"use strict";a.r(t);var n=a(32),s=a(33),o=a(36),r=a(34),c=a(37),u=a(0),i=a.n(u),l=a(94),p=a(296),m=a.n(p),f=a(297),d=a.n(f),A=function(e){return i.a.createElement("div",{className:d.a.item},i.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEX////VSEjWTEz0zc3++vrXUVHkiYnbZGTZWVnfc3P55+f33Nz88vLwvLzonJzsrKx7lPY1AAADoUlEQVR4nO1Z2ZKjMAwE+eb8/79dSGaILCTZpOZt1Vu1DwNC7dZhWxkGg8FgMBgMBoPBYDAYDAaDwaBgWmNJOYwhlW2dHhh6t8eSA0BOcXPLd97nLY8jwHji9X/eXJ/3NX6s4PxX9uccXIEf5wiQVt8yXPZMzc51xPmR+7mMN+/vNSVdBb8Gzu40jf0q+I31/gPtQ1OS7SCsnf6norg/kEQ116AxP7g3A3hiZmJI1iKEYW8ZjqUjDLMURAxOTL91GKYmgy7/IzAMevy3GSxN/QUGXes/DYueB0XPIplBp//DcNP8c2kUUsoMrZoB5z+no48zhkonmamjEN1rC/DzTiscwH3EvPk/uu9771hcpCSSGAQfifttGX5e9sf+cqNwaXAjXjXeZSOJvYsC1O8Vsv95GqBwiblWDLIjayQNMgiVUAsA8f6GozXKMYB027i9r5urIMFUq8hqROL5Saj1+htb6TUDIQsqhYVypX3qYuB/GQidZqmiwBcCJhmk8w9lEIgGWTJ0TXmXjihpDF4aiP6HAWdY4PTFFKU81RnsEJRzT1VjXAxwM1HbJakF+ERhV89dOMScwlgi/dxF+462bgSc5FwS4DRtnFxoP4AuBijGkJjnqMS5xyqDLg1wlmfmOdK1tFfzDQOsmf64TWBwX+QBJs08fqTAXYPcZtBQ4EkOvBjAQwZ4r+FyAJdp1yXmKQPc6TiN+/uAyEC/QONOx11RcJ9QO+Fnoc/yIDUc9O4FDrWxJxpU2yEnscfLEXdDf/r88H/AAOcYsK222i/1bX27PtDNYMVv8XVev8JvB7/+kAZkbxQY1Js4f1FfqnfYq/THmxyF+5l0oOdiWPjl1dcLhgE+fSt5cK8Fci5nT2Tna/WXbveCrZrbyAyApjCd24jVSm5GsKFq9Cs9kst5ANUkydGJiyTA/XIOIa7TGYllPW549P6F1nnTYEzv8eDitkSnbWKFDaQQLoMcRmZkV+lMGfxYjiNjqc6qIvMZHiTOPAMO+qTKK3M2zT9zbxTwRzMaplX3adDYMQ8Jph4G7FbRowHbpQi0aecbIEyM2xPGHv9HFBqT0iwdV3xrxto3KT2wa2IWoZG/KGjDstAetV+YpHKE3Jg4z6IIcer3f47FWAp5b3/EcZYQn/zg8mLgp50sJsS+s+pwWFYlCWX97lcbf3TymDJASCXu8yMFzx+NSkrlMHT+iSX90Pemf2BuMBgMBoPBYDAYDAaDwWD4P/APuu4cqDlw0+QAAAAASUVORK5CYII="}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"Like ",e.likeCount)))},E=a(87),b=a(126),P=a(84),g=a(31),h=Object(P.a)(10),v=function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(E.a,{name:"newPostText",component:g.b,placeholder:"Post message",validate:[P.b,h]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))};v=Object(b.a)({form:"ProfileAddNewPostForm"})(v);var O=i.a.memo((function(e){console.log("render");var t=e.postsData.map((function(e){return i.a.createElement(A,{message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:m.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(v,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:m.a.posts},t))})),j=a(17),S=Object(j.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(l.a)(t))}}}))(O),w=a(293),D=a.n(w),B=a(39),M=(i.a.Component,a(127)),k=function(e){var t=Object(u.useState)(!1),a=Object(M.a)(t,2),n=a[0],s=a[1],o=Object(u.useState)(e.status),r=Object(M.a)(o,2),c=r[0],l=r[1];Object(u.useEffect)((function(){l(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"---------")),n&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},onChange:function(e){l(e.currentTarget.value)},value:c})))},T=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",{className:D.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large}),i.a.createElement(k,{status:a,updateStatus:n}))):i.a.createElement(B.a,null)},X=function(e){return i.a.createElement("div",null,i.a.createElement(T,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(S,null))},x=a(28),Y=a(7),y=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(X,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStstus:this.props.updateStatus})))}}]),t}(i.a.Component);t.default=Object(Y.d)(Object(j.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:l.d,getStatus:l.c,updateStatus:l.e}),x.f)(y)}}]);
//# sourceMappingURL=3.0bf4bdf6.chunk.js.map