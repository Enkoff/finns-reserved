(this["webpackJsonpreservatoin-page"]=this["webpackJsonpreservatoin-page"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(20),i=a.n(n),l=(a(153),a(154),a(278)),s=a(273),o=a(272),d=a(28),p=a(62),u=a(124),j=a.n(u),b=a(267),m=a(270),f=a(21),O=a(63),h=a.n(O),x=a(84),v="SET_TABLE_DATA",y="SET_INITIAL_STATE",g="ADD_AND_REMOVE_FROM_RESERVATION",k="TOGGLE_BALL",S="CART_PRESS",B=function(e,t){return function(){var a=Object(x.a)(h.a.mark((function a(r){var c,n,i,l,s,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.month,e.month<=9&&(c="0".concat(c)),n="?q=book&user=".concat(t,"&date=").concat(e.year,"-").concat(c,"-").concat(e.day,"&time=08:00-09:00"),a.next=5,fetch("".concat("https://f05a0e942e75.ngrok.io","/").concat(n),{method:"GET"});case 5:if((i=a.sent).ok){a.next=11;break}return a.next=9,i.json();case 9:throw l=a.sent,new Error(l);case 11:return a.next=13,i.json();case 13:s=a.sent,o=s.map((function(e,t){var a=e.place1.name+e.place1.price+e.place1.time+e.id;return e.id=t+1,e.place1.cord="\u041a\u043e\u0440\u0434 1",e.place1.id=a.replace(/\s/g,""),e.place1.isMarked=!1,e.place1.isBall=!0,a=e.place2.name+e.place2.price+e.place2.time+e.id,e.id=t+1,e.place2.cord="\u041a\u043e\u0440\u0434 2",e.place2.id=a.replace(/\s/g,""),e.place2.isMarked=!1,e.place2.isBall=!0,a=e.place3.name+e.place3.price+e.place3.time+e.id,e.id=t+1,e.place3.cord="\u041a\u043e\u0440\u0434 3",e.place3.id=a.replace(/\s/g,""),e.place3.isMarked=!1,e.place3.isBall=!0,a=e.place4.name+e.place4.price+e.place4.time+e.id,e.id=t+1,e.place4.cord="\u041a\u043e\u0440\u0434 4",e.place4.id=a.replace(/\s/g,""),e.place4.isMarked=!1,e.place4.isBall=!0,a=e.place5.name+e.place5.price+e.place5.time+e.id,e.id=t+1,e.place5.cord="\u041a\u043e\u0440\u0434 5",e.place5.id=a.replace(/\s/g,""),e.place5.isMarked=!1,e.place5.isBall=!0,a=e.place6.name+e.place6.price+e.place6.time+e.id,e.id=t+1,e.place6.cord="\u041a\u043e\u0440\u0434 6",e.place6.id=a.replace(/\s/g,""),e.place6.isMarked=!1,e.place6.isBall=!0,e})),r({type:v,tableData:o,calendarData:e});case 16:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},M=function(){return{type:y}},C=function(e){return function(t){t({type:g,item:e})}},D=a(271),N=a(7),T=function(e){var t=Object(r.useState)(!1),a=Object(p.a)(t,2),c=a[0],n=a[1],i=Object(f.c)((function(e){return e.reservations.reservations})),l=Object(f.b)();return Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",right:"10px"},children:[Object(N.jsx)(b.a,{edge:"start",color:"inherit",onClick:function(){l({type:S}),n(!0),setTimeout((function(){n(!1)}),1e3)},"aria-label":"close",style:{marginLeft:"20px",marginTop:"10px"},children:Object(N.jsx)(m.a,{badgeContent:i.length,color:"secondary",children:Object(N.jsx)(j.a,{color:"inherit"})})}),Object(N.jsx)(D.a,{direction:"left",timeout:{enter:500,exit:1},in:!(0!==i.length||!c),children:Object(N.jsx)("div",Object(d.a)(Object(d.a)({style:{top:"2.9rem",position:"absolute",right:"-.3rem",display:"flex",fontSize:"0.5rem"}},e),{},{children:"\u043a\u043e\u0448\u0438\u043a \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439"}))})]})},w=Object(o.a)((function(e){return{appbar:{display:"flex",justifyContent:"center",alignItems:"center",backdropFilter:"blur(3px)",backgroundColor:"rgb(20,60,100)",position:"reletiv"},h1:{marginTop:10,marginBottom:0,fontSize:30},hr:{marginTop:-4,width:130,height:2},h5:{marginTop:-5,marginBottom:5}}})),I=function(e){var t=w();return Object(N.jsx)("div",{children:Object(N.jsxs)(s.a,{className:t.appbar,elevation:10,children:[Object(N.jsx)("h1",{className:t.h1,children:"F I N N S"}),Object(N.jsx)("hr",{className:t.hr}),Object(N.jsx)("h6",{className:t.h5,children:"SPORT \u25cb EVENTS \u25cb CLUB"}),Object(N.jsx)(T,{})]})})},E=(a(160),a(106)),R=a.n(E),A=(a(161),function(e){var t=e.ref,a=Object(f.c)((function(e){return e.reservations.calendarData})),r=Object(f.b)();return Object(N.jsx)("input",{onClick:function(){return r(M())},readOnly:!0,ref:t,placeholder:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0430\u0442\u0443 \u0431\u0440\u043e\u043d\u044e\u0432\u0430\u043d\u043d\u044f",size:25,value:a?"\u2705 ".concat(a.year,"/").concat(a.month,"/").concat(a.day," "):"",style:{marginTop:"5.5rem",textAlign:"center",padding:"1rem 1rem",fontWeight:"bold",fontSize:"1rem",border:"1px solid white",borderRadius:"100px",color:"white",outline:"none",cursor:"pointer",backdropFilter:"blur(10px",backgroundColor:"rgba(0,0,0,0.3)"},className:"my-custom-input-class"})}),L={months:["C\u0456\u0447\u0435\u043d\u044c","\u041b\u044e\u0442\u0438\u0439","\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u041a\u0432\u0456\u0442\u0435\u043d\u044c","\u0422\u0440\u0430\u0432\u0435\u043d\u044c","\u0427\u0435\u0440\u0432\u0435\u043d\u044c","\u041b\u0438\u043f\u0435\u043d\u044c","\u0421\u0435\u0440\u043f\u0435\u043d\u044c","\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0416\u043e\u0432\u0442\u0435\u043d\u044c","\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],weekDays:[{name:"Sunday",short:"\u041f\u043d",isWeekend:!0},{name:"Monday",short:"\u0412\u0442"},{name:"Tuesday",short:"\u0421\u0440"},{name:"Wednesday",short:"\u0427\u0442"},{name:"Thursday",short:"\u041f\u0442"},{name:"Friday",short:"\u0421\u0431"},{name:"Saturday",short:"\u041d\u0434",isWeekend:!0}],weekStartingIndex:0,getToday:function(e){return e},toNativeDate:function(e){return new Date(e.year,e.month-1,e.day)},getMonthLength:function(e){return new Date(e.year,e.month,0).getDate()},transformDigit:function(e){return e},nextMonth:"Next Month",previousMonth:"Previous Month",openMonthSelector:"Open Month Selector",openYearSelector:"Open Year Selector",closeMonthSelector:"Close Month Selector",closeYearSelector:"Close Year Selector",defaultPlaceholder:"Select...",from:"from",to:"to",digitSeparator:",",yearLetterSkip:0,isRtl:!1},_=function(e){var t=Object(r.useState)(""),a=Object(p.a)(t,2),c=a[0],n=a[1],i=Object(f.b)(),l=function(){var e=Object(x.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t),a=window.location.href.split("=")[1],i(B(t,a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(R.a,{value:c,onChange:function(e){return l(e)},renderInput:A,shouldHighlightWeekends:!0,minimumDate:Object(E.utils)().getToday(),locale:L})},P=a(279),z=(a(162),function(e){var t=e.place,a=t.isReserved,r=t.isMarked,c=t.price,n=Object(f.b)(),i="";return i="false"===a?"item-disable":"item",r&&(i="item-activ item-price-activ"),Object(N.jsx)("div",{onClick:function(){return n(C(t))},className:i,children:Object(N.jsx)("div",{className:"item-price",children:"".concat(c," \u0433\u0440\u043d")})})}),F=[{title:"\u0427\u0430\u0441",dataIndex:"time",key:"id",fixed:"left",render:function(e){var t=e.replace(/-/g,"");return console.log(),e[0]<10&&":"===e[1]&&(t="0".concat(e.replace(/-/g,""))),Object(N.jsx)("div",{children:t})}},{title:"\u041a\u043e\u0440\u0434 1",dataIndex:"place1",key:"id",render:function(e){return Object(N.jsx)(z,{place:e})}},{title:"\u041a\u043e\u0440\u0434 2",dataIndex:"place2",key:"id",render:function(e){return Object(N.jsx)(z,{place:e})}},{title:"\u041a\u043e\u0440\u0434 3",dataIndex:"place3",key:"id",render:function(e){return Object(N.jsx)(z,{place:e})}},{title:"\u041a\u043e\u0440\u0434 4",dataIndex:"place4",key:"id",render:function(e){return Object(N.jsx)(z,{place:e})}},{title:"\u041a\u043e\u0440\u0434 5",dataIndex:"place5",key:"id",render:function(e){return Object(N.jsx)(z,{place:e})}},{title:"\u041a\u043e\u0440\u0434 6",dataIndex:"place6",key:"id",render:function(e){return Object(N.jsx)(z,{place:e})}}],W=function(e){var t=Object(f.c)((function(e){return e.reservations.tableData}));return Object(N.jsx)(D.a,{direction:"up",timeout:{enter:500},in:0!==t.length,children:Object(N.jsx)("div",Object(d.a)(Object(d.a)({},e),{},{children:Object(N.jsx)(P.a,{dataSource:t,columns:F,pagination:!1,scroll:{y:400},rowKey:"id"})}))})},J=a(274),Y=function(e){var t=Object(f.c)((function(e){return e.reservations})).reservations;return Object(N.jsx)(D.a,{direction:"up",timeout:{enter:500},in:0!==t.length,children:Object(N.jsx)("div",Object(d.a)(Object(d.a)({},e),{},{children:Object(N.jsx)(J.a,{variant:"contained",color:"primary",children:e.children})}))})},G=a(280),V=a(276),q=a(277),H=a(133),K=a.n(H),U=a(282),Q=a(275),X=a(281),Z=function(e){var t=e.item,a=Object(f.b)();return Object(N.jsx)(X.a,{checked:t.isBall,onChange:function(){var e,r;a((e=t.id,r=t.isBall,{type:k,id:e,isBall:r}))},color:"primary",inputProps:{"aria-label":"secondary checkbox"}})},$=a(132),ee=a.n($),te=function(e){var t=e.item,a=Object(f.b)();return Object(N.jsx)(ee.a,{onClick:function(){a(C(t))},color:"secondary"})},ae=function(e){var t=Object(f.c)((function(e){return e.reservations})),a=t.reservations,r=t.calendarData,c=a.sort((function(e,t){return e.item.cord===t.item.cord?Number(e.item.time.split(":")[0])>Number(t.item.time.split(":")[0])?1:-1:e.item.cord>t.item.cord?1:-1}));return Object(N.jsx)(U.a,{style:{marginTop:"3.1rem"},children:c.map((function(e,t){var a=e.item.cord,c=e.item.price,n=e.item.time;return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{style:{paddingLeft:"10px",paddingRight:"10px",cursor:"default"},children:[Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(N.jsx)("p",{style:{fontSize:"1rem"},children:a}),Object(N.jsx)("p",{style:{color:"grey"},children:"".concat(r.year,"/").concat(r.month,"/").concat(r.day)}),Object(N.jsx)("p",{style:{color:"#EC1547"},children:"".concat(n)}),Object(N.jsx)("p",{style:{color:"grey"},children:"\u0446\u0456\u043d\u0430 ".concat(c," \u0433\u0440\u043d")}),Object(N.jsx)(te,{item:e.item})]}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}}),Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(N.jsx)("p",{style:{color:"grey",fontSize:"10px"},children:"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0456\u0434\u043c\u043e\u0432\u0438\u0442\u0438\u0441\u044c \u0432\u0456\u0434 \u043c'\u044f\u0447\u0430 \u0442\u0430 \u0432\u0437\u044f\u0442\u0438 \u0441\u0432\u0456\u0439 *"}),Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(N.jsx)(Z,{item:e.item}),Object(N.jsx)("p",{style:{fontWeight:"bold",fontSize:"10px"},children:"\u041c'\u044f\u0447 50 \u0433\u0440\u043d"})]})]})]}),Object(N.jsx)(Q.a,{})]},t)}))})},re=function(e){var t=Object(f.c)((function(e){return e.reservations})),a=t.reservations,r=t.orderSum,c=Object(f.b)();return Object(N.jsx)(J.a,{autoFocus:!0,color:"inherit",onClick:function(){var e=JSON.parse(JSON.stringify(a));e.ordersSum=r,console.log(e),console.log("\u041e\u0422\u041f\u0420\u0410\u0412\u041a\u0410 \u0414\u0410\u041d\u041d\u0418\u0425"),c(M())},children:"\u0421\u041f\u041b\u0410\u0422\u0418\u0422\u0418"})},ce=Object(o.a)((function(e){return{appBar:{position:"fixed"},title:{marginLeft:e.spacing(.2),flex:1}}})),ne=c.a.forwardRef((function(e,t){return Object(N.jsx)(D.a,Object(d.a)({direction:"up",ref:t},e))}));function ie(e){var t=ce(),a=Object(r.useState)(!1),c=Object(p.a)(a,2),n=c[0],i=c[1],l=Object(f.c)((function(e){return e.reservations})),o=l.orderSum,d=l.isCartPress,u=function(){i(!1)};return 0===o&&n&&u(),Object(r.useEffect)((function(){i(!0)}),[d]),Object(N.jsxs)("div",{children:[Object(N.jsx)(Y,{variant:"outlined",color:"primary",onClick:function(){i(!0)},children:"\u0417\u0410\u0420\u0415\u0417\u0415\u0420\u0412\u0423\u0412\u0410\u0422\u0418"}),Object(N.jsxs)(G.a,{fullScreen:!0,open:n,onClose:u,TransitionComponent:ne,children:[Object(N.jsx)(s.a,{className:t.appBar,children:Object(N.jsxs)(V.a,{children:[Object(N.jsx)(b.a,{edge:"start",color:"inherit",onClick:u,"aria-label":"close",children:Object(N.jsx)(K.a,{})}),Object(N.jsx)(q.a,{variant:"h6",className:t.title,children:"".concat(o," \u0433\u0440\u043d")}),Object(N.jsx)(re,{})]})}),Object(N.jsx)(ae,{})]})]})}var le=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(I,{}),Object(N.jsx)(_,{}),Object(N.jsx)(W,{}),Object(N.jsx)(ie,{})]})},se=a(97),oe=a(137),de={tableData:[],reservations:[],calendarData:"",orderSum:0,isCartPress:!1},pe=50,ue=a(134),je=Object(se.b)({reservations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(d.a)(Object(d.a)({},e),{},{tableData:t.tableData,calendarData:t.calendarData});case y:return de;case g:var a=t.item,r=a.id,c=a.isMarked,n=a.isReserved,i=a.isBall;if("true"===n)return e;var l,s=e.tableData.map((function(e){return e.place1.id===r&&(e.place1.isMarked=!e.place1.isMarked,e.place1.isBall=!0),e.place2.id===r&&(e.place2.isMarked=!e.place2.isMarked,e.place2.isBall=!0),e.place3.id===r&&(e.place3.isMarked=!e.place3.isMarked,e.place3.isBall=!0),e.place4.id===r&&(e.place4.isMarked=!e.place4.isMarked,e.place4.isBall=!0),e.place5.id===r&&(e.place5.isMarked=!e.place5.isMarked,e.place5.isBall=!0),e.place6.id===r&&(e.place6.isMarked=!e.place6.isMarked,e.place6.isBall=!0),e})),o={userId:window.location.href.split("=")[1],item:t.item};return l=i&&!c?e.orderSum+Number(o.item.price)+pe:i?e.orderSum-Number(o.item.price)-pe:e.orderSum-Number(o.item.price),Object(d.a)(Object(d.a)({},e),{},{tableData:s,reservations:c?e.reservations.filter((function(e){return e.item.id!==r})):[].concat(Object(oe.a)(e.reservations),[o]),orderSum:l});case k:var p=e.tableData.map((function(e){return e.place1.id===t.id&&(e.place1.isBall=!e.place1.isBall),e.place2.id===t.id&&(e.place2.isBall=!e.place2.isBall),e.place3.id===t.id&&(e.place3.isBall=!e.place3.isBall),e.place4.id===t.id&&(e.place4.isBall=!e.place4.isBall),e.place5.id===t.id&&(e.place5.isBall=!e.place5.isBall),e.place6.id===t.id&&(e.place6.isBall=!e.place6.isBall),e}));return Object(d.a)(Object(d.a)({},e),{},{tableData:p,orderSum:t.isBall?e.orderSum-pe:e.orderSum+pe});case S:return Object(d.a)(Object(d.a)({},e),{},{isCartPress:!e.isCartPress});default:return e}}}),be=Object(se.c)(je,Object(se.a)(ue.a));i.a.render(Object(N.jsx)(f.a,{store:be,children:Object(N.jsx)(le,{})}),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.6d0938a8.chunk.js.map