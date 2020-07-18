(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){e.exports=n(118)},108:function(e,t,n){},109:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(68),r=n(0),o=n.n(r),l=n(14),c=n.n(l),i=(n(108),n(13)),u=n(31),m=n(16);n(109);var s=function(){return o.a.createElement("div",null,"Home Page")},g=n(26),d=n(171),v=n(157),E=n(91),p=n(152),b=n(158),f=Object(r.createContext)({signIn:function(){},signOut:function(){}}),h=n(155),O=Object(p.a)((function(e){return{root:{position:"absolute",top:"0",left:"0",width:"-webkit-fill-available",height:"-webkit-fill-available",background:"black",opacity:"0.5"},icon:{position:"absolute",top:"50%",left:"50%"}}}));var j=function(){var e=O();return o.a.createElement("div",{className:e.root},o.a.createElement(h.a,{className:e.icon}))},k=n(27),C=n.n(k),S=n(24);function I(){var e=Object(g.a)(["\n    query signIn($email: String!, $password: String!){\n      login(email: $email, password: $password){\n        userId\n        token\n        tokenExpiration\n      }\n    }\n  "]);return I=function(){return e},e}var B=Object(p.a)((function(e){return{title:{marginTop:e.spacing(10)},signInbutton:{marginTop:e.spacing(5)},signUpbutton:{marginTop:e.spacing(2)}}}));var w=function(){var e=B(),t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],l=n[1],c=Object(r.useState)(""),m=Object(i.a)(c,2),s=m[0],g=m[1],p=Object(r.useContext)(f).signIn,h=C()(I()),O=Object(S.a)(h,{onCompleted:function(e){alert("Sign In Succeed"),console.log("Sign In Succeed",e),p(e.login.token)},onError:function(e){alert("Sign In Failed"),console.log("Sign In Failed",e)}}),k=Object(i.a)(O,2),w=k[0],x=k[1].loading;return o.a.createElement("div",null,x?o.a.createElement(j,null):null,o.a.createElement(v.a,{maxWidth:"xs"},o.a.createElement(E.a,{className:e.title,variant:"h4",align:"center",paragraph:!0},"Sign in"),o.a.createElement(d.a,{label:"Email",fullWidth:!0,margin:"normal",onChange:function(e){l(e.target.value)}}),o.a.createElement(d.a,{type:"password",label:"Password",fullWidth:!0,margin:"normal",onChange:function(e){g(e.target.value)}}),o.a.createElement(b.a,{className:e.signInbutton,variant:"contained",color:"primary",fullWidth:!0,size:"large",onClick:function(){w({variables:{email:a,password:s}})}},"Sign in"),o.a.createElement(b.a,{component:u.b,to:"/signup",className:e.signUpbutton,variant:"outlined",fullWidth:!0,size:"large"},"Don't have an account? Sign Up")))};function x(){var e=Object(g.a)(["\n    mutation createUser($userInput: UserInput){\n      createUser(userInput: $userInput){\n        _id\n        email\n      }\n    }\n  "]);return x=function(){return e},e}var y=Object(p.a)((function(e){return{title:{marginTop:e.spacing(10)},signInbutton:{marginTop:e.spacing(5)},signUpbutton:{marginTop:e.spacing(2)}}}));var U=function(){var e=y(),t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],l=n[1],c=Object(r.useState)(""),m=Object(i.a)(c,2),s=m[0],g=m[1],p=Object(r.useState)(""),f=Object(i.a)(p,2),h=f[0],O=f[1],k=C()(x()),I=Object(S.b)(k,{onCompleted:function(e){alert("Sign Up Succeed"),console.log("Sign Up Succeed",e)},onError:function(e){alert("Sign Up Failed"),console.log("Sign Up Failed",e)}}),B=Object(i.a)(I,2),w=B[0],U=B[1].loading;return o.a.createElement("div",null,U?o.a.createElement(j,null):null,o.a.createElement(v.a,{maxWidth:"xs"},o.a.createElement(E.a,{className:e.title,variant:"h4",align:"center",paragraph:"true"},"Sign in"),o.a.createElement(d.a,{label:"Email",fullWidth:"true",margin:"normal",onChange:function(e){l(e.target.value)}}),o.a.createElement(d.a,{type:"password",label:"Password",fullWidth:"true",margin:"normal",onChange:function(e){g(e.target.value)}}),o.a.createElement(d.a,{type:"password",label:"Password Confirm",fullWidth:"true",margin:"normal",onChange:function(e){O(e.target.value)}}),o.a.createElement(b.a,{className:e.signInbutton,variant:"contained",color:"primary",fullWidth:"true",size:"large",onClick:function(){s===h?w({variables:{userInput:{email:a,password:s}}}):alert("Check Password Confirmed")}},"Sign up"),o.a.createElement(b.a,{component:u.b,to:"/signin",className:e.signUpbutton,variant:"outlined",fullWidth:"true",size:"large"},"Already have an account? Sign in")))},N=n(159),F=n(161),W=n(160);function $(){var e=Object(g.a)(["\n    mutation cancelBooking($bookingId: ID!){\n      cancelBooking(bookingId:$bookingId){\n        _id\n        title\n      }\n    }\n  "]);return $=function(){return e},e}var z=Object(p.a)((function(e){return{card:{marginBottom:e.spacing(2)}}}));var P=function(e){var t=Object(r.useContext)(f).signOut,n=z(),a=e.id,l=e.createdAt,c=e.event,u=e.getBookings,m=c.title,s=c.date,g=C()($()),d=Object(S.b)(g,{onCompleted:function(e){u(),alert("Cancel Booking Succeed"),console.log("Cancel Booking Succeed",e)},onError:function(e){"Unauthenticatd!"===e.graphQLErrors[0].message?(t(),alert("Unauthenticatd"),console.log("Unauthenticatd",e)):(alert("Get Bookings Failed"),console.log("Get Bookings Failed",e))}}),v=Object(i.a)(d,2),p=v[0],h=v[1].loading;return o.a.createElement("div",null,h?o.a.createElement(j,null):null,o.a.createElement(N.a,{className:n.card,variant:"outlined"},o.a.createElement(W.a,null,o.a.createElement(E.a,{variant:"h4",color:"primary",gutterBottom:!0},m),o.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Event Date : ",s),o.a.createElement(E.a,{variant:"body2"},"Booking Date : ",l)),o.a.createElement(F.a,null,o.a.createElement(b.a,{color:"primary",size:"small",onClick:function(){p({variables:{bookingId:a}})}},"Cancel"))))};function T(){var e=Object(g.a)(["\n    query bookingList{\n      getBookings{\n        _id\n        createdAt\n        event{\n          title\n          date\n        }\n      }\n    }\n  "]);return T=function(){return e},e}var _=Object(p.a)((function(e){return{root:{marginTop:e.spacing(5)}}}));var D=function(){var e=Object(r.useContext)(f).signOut,t=_(),n=C()(T()),a=Object(S.c)(n,{onError:function(t){"Unauthenticatd!"===t.graphQLErrors[0].message?(e(),alert("Unauthenticatd"),console.log("Unauthenticatd",t)):(alert("Get Bookings Failed"),console.log("Get Bookings Failed",t))}}),l=a.data,c=a.loading,i=a.refetch;return o.a.createElement("div",null,c?o.a.createElement(j,null):null,o.a.createElement(v.a,{maxWidth:"lg",className:t.root},null===l||void 0===l?void 0:l.getBookings.map((function(e){return o.a.createElement(P,{getBookings:i,id:e._id,createdAt:e.createdAt,event:e.event})}))))},G=n(166),L=n(167),A=n(84),q=n.n(A),Q=n(173),J=n(165),R=n(163),H=n(164),Y=n(162);function K(){var e=Object(g.a)(["\n    mutation createEvent($eventInput: EventInput){\n      createEvent(eventInput: $eventInput){\n        title\n        description\n        price\n        date\n      }\n    }\n  "]);return K=function(){return e},e}var M=function(e){var t=Object(r.useContext)(f).signOut,n=e.open,a=e.handleClose,l=e.getEvents,c=Object(r.useState)(""),u=Object(i.a)(c,2),m=u[0],s=u[1],g=Object(r.useState)(""),v=Object(i.a)(g,2),E=v[0],p=v[1],h=Object(r.useState)(""),O=Object(i.a)(h,2),k=O[0],I=O[1],B=Object(r.useState)(""),w=Object(i.a)(B,2),x=w[0],y=w[1],U=C()(K()),N=Object(S.b)(U,{onCompleted:function(e){alert("Create event Succeed"),l(),console.log("Create event Succeed",e),a()},onError:function(e){var n;"Unauthenticatd!"===(null===(n=e.graphQLErrors[0])||void 0===n?void 0:n.message)?(t(),alert("Unauthenticatd"),console.log("Unauthenticatd",e)):(alert("Create event Failed"),console.log("Create event Failed",e))}}),F=Object(i.a)(N,2),W=F[0],$=F[1].loading;return o.a.createElement("div",null,$?o.a.createElement(j,null):null,o.a.createElement(Q.a,{open:n,onClose:a},o.a.createElement(Y.a,null,"Create Event"),o.a.createElement(R.a,null,o.a.createElement(H.a,null,"Please enter information about event you want to create!"),o.a.createElement(d.a,{autoFocus:!0,margin:"dense",label:"Title",fullWidth:!0,onChange:function(e){s(e.target.value)}}),o.a.createElement(d.a,{margin:"dense",label:"Price",fullWidth:!0,onChange:function(e){p(parseFloat(e.target.value))}}),o.a.createElement(d.a,{margin:"dense",label:"Date",fullWidth:!0,onChange:function(e){I(e.target.value)}}),o.a.createElement(d.a,{margin:"dense",label:"Description",fullWidth:!0,onChange:function(e){y(e.target.value)}})),o.a.createElement(J.a,null,o.a.createElement(b.a,{onClick:a,color:"primary"},"Cancel"),o.a.createElement(b.a,{onClick:function(){m&&E&&k&&x?W({variables:{eventInput:{title:m,price:E,date:k,description:x}}}):alert("All Fileds Can't Be Empty")},color:"primary"},"Create"))))};var V=function(e){var t,n=e.open,a=e.handleClose,r=e.creator;return o.a.createElement("div",null,o.a.createElement(Q.a,{open:n,onClose:a},o.a.createElement(Y.a,null,"Creator Information"),o.a.createElement(R.a,null,o.a.createElement(E.a,{gutterBottom:!0},"Email : ",r.email),o.a.createElement(E.a,null,"Ceated Events : ",null===(t=r.createdEvents)||void 0===t?void 0:t.reduce((function(e,t){return e+t.title+", "}),""))),o.a.createElement(J.a,null,o.a.createElement(b.a,{onClick:a,color:"primary"},"Close"))))};function X(){var e=Object(g.a)(["\n    mutation bookEvent($eventId: ID!){\n      bookEvent(eventId: $eventId){\n        _id\n      }\n    }\n  "]);return X=function(){return e},e}var Z=Object(p.a)((function(e){return{card:{marginBottom:e.spacing(2)}}}));var ee=function(e){var t=Object(r.useContext)(f).signOut,n=Z(),a=e.id,l=e.title,c=e.price,u=e.description,m=e.date,s=e.creator,g=Object(r.useState)(!1),d=Object(i.a)(g,2),v=d[0],p=d[1],h=C()(X()),O=Object(S.b)(h,{onCompleted:function(e){alert("Book Events Succeed"),console.log("Book Events Succeed",e)},onError:function(e){"Unauthenticatd!"===e.graphQLErrors[0].message?(t(),alert("Unauthenticatd"),console.log("Unauthenticatd",e)):(alert("Book Events Failed"),console.log("Book Events Failed",e))}}),k=Object(i.a)(O,2),I=k[0],B=k[1].loading;return o.a.createElement("div",null,B?o.a.createElement(j,null):null,o.a.createElement(N.a,{className:n.card,variant:"outlined"},o.a.createElement(W.a,null,o.a.createElement(E.a,{variant:"h4",color:"primary",gutterBottom:!0},l),o.a.createElement(E.a,{variant:"h6"},"Created By : ",s.email),o.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Price : ",c),o.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"Date : ",m),o.a.createElement(E.a,{variant:"body2"},u)),o.a.createElement(F.a,null,o.a.createElement(b.a,{color:"primary",size:"small",onClick:function(){I({variables:{eventId:a}})}},"Book"),o.a.createElement(b.a,{color:"primary",size:"small",onClick:function(){p(!0)}},"Creator Info"))),o.a.createElement(V,{handleClose:function(){p(!1)},open:v,creator:s}))};function te(){var e=Object(g.a)(["\n    query eventList{\n      getEvents{\n        _id\n        title\n        description\n        price\n        date\n        creator{\n          _id\n          email\n          createdEvents{\n            title\n          }\n        }\n      }\n    }\n  "]);return te=function(){return e},e}var ne=Object(p.a)((function(e){return{createCard:{marginTop:e.spacing(5),marginBottom:e.spacing(3)},media:{height:"10rem"}}}));var ae=function(){var e=ne(),t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],l=n[1],c=C()(te()),u=Object(S.c)(c,{onError:function(e){alert("Get Events Failed"),console.log("Get Events Failed",e)}}),m=u.data,s=u.loading,g=u.refetch;return o.a.createElement("div",null,s?o.a.createElement(j,null):null,o.a.createElement(v.a,{maxWidth:"lg"},o.a.createElement(N.a,{className:e.createCard},o.a.createElement(G.a,{onClick:function(){l(!0)}},o.a.createElement(L.a,{className:e.media,image:q.a}),o.a.createElement(W.a,null,o.a.createElement(E.a,{className:e.title,variant:"h6",color:"primary",gutterBottom:!0},"Create event whatever you want!")))),null===m||void 0===m?void 0:m.getEvents.map((function(e){return o.a.createElement(ee,{key:e._id,id:e._id,title:e.title,description:e.description,price:e.price,date:e.date,creator:e.creator})}))),o.a.createElement(M,{handleClose:function(){l(!1)},open:a,getEvents:g}))},re=n(168),oe=n(169),le=n(170),ce=n(85),ie=n.n(ce),ue=n(89);var me=function(e){var t=e.token,n=e.children,a=Object(ue.a)(e,["token","children"]);return o.a.createElement(m.b,Object.assign({},a,{render:function(e){var a=e.location;return t?n:o.a.createElement(m.a,{to:{pathname:"/signin",state:{from:a}}})}}))},se=Object(p.a)((function(e){return{root:{background:"#ecf0f1",width:"100%",height:"100%",flexGrow:1},main:{background:"#ffffff",overflowY:"scroll",width:"50%",height:"100%",margin:"0 25% 0 25%",boxSizing:"border-box","@media (max-width:960px)":{width:"100%",margin:"0"}},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var ge=function(){var e=se(),t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],l=n[1];Object(r.useEffect)((function(){var e=localStorage.getItem("token");e&&l(e)}),[]);var c=function(){l(null),localStorage.setItem("token","")};return console.log("Render"),o.a.createElement(u.a,null,o.a.createElement(f.Provider,{value:{signIn:function(e){l(e),localStorage.setItem("token",e)},signOut:c}},o.a.createElement(m.d,null,o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.main},o.a.createElement(re.a,{position:"static"},o.a.createElement(oe.a,null,o.a.createElement(le.a,{className:e.menuButton,edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(ie.a,null)),o.a.createElement(E.a,{className:e.title,variant:"h6"},"Booking"),o.a.createElement(b.a,{component:u.b,to:"/event",color:"inherit"},"Event"),o.a.createElement(b.a,{component:u.b,to:"/booking",color:"inherit"},"Booking"),a?o.a.createElement(b.a,{onClick:c,color:"inherit"},"Logout"):o.a.createElement(b.a,{component:u.b,to:"/signin",color:"inherit"},"SignIn"))),a&&o.a.createElement(m.a,{from:"/signin",to:"/home",exact:!0}),a&&o.a.createElement(m.a,{from:"/signup",to:"/home",exact:!0}),o.a.createElement(m.b,{exact:!0,path:"/",component:s}),o.a.createElement(m.b,{exact:!0,path:"/home",component:s}),o.a.createElement(m.b,{exact:!0,path:"/signin",component:w}),o.a.createElement(m.b,{exact:!0,path:"/signup",component:U}),o.a.createElement(me,{exact:!0,path:"/event",token:a},o.a.createElement(ae,null)),o.a.createElement(me,{exact:!0,path:"/booking",token:a},o.a.createElement(D,null)))))))},de=n(41),ve=n(87),Ee=n(88),pe=n(22),be=n(86),fe=new ve.a,he=new Ee.a({uri:"http://localhost:4000/graphql"}),Oe=Object(be.a)((function(e,t){var n=t.headers,r=localStorage.getItem("token");return{headers:Object(a.a)(Object(a.a)({},n),{},{authorization:r?"Bearer ".concat(r):""})}})),je=new de.a({cache:fe,link:Oe.concat(he)});c.a.render(o.a.createElement(pe.a,{client:je},o.a.createElement(ge,null)),document.getElementById("root"))},84:function(e,t,n){e.exports=n.p+"static/media/event.8762902f.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.c9c9b470.chunk.js.map