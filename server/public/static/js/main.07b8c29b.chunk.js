(this.webpackJsonpchemical_industry_client=this.webpackJsonpchemical_industry_client||[]).push([[0],{41:function(e,t,n){e.exports=n(71)},46:function(e,t,n){},47:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),l=(n(46),n(14)),u=(n(47),n(3)),i=n.n(u),s=n(5),m=n(4),p=n(9),f=n.n(p),d=function(e){f.a.defaults.baseURL="http://ec2-100-25-10-187.compute-1.amazonaws.com/",f.a.defaults.headers.common.Authorization=e},v=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.post("".concat("http://ec2-100-25-10-187.compute-1.amazonaws.com").concat("/users","/login"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(1),b=n(2);function g(){var e=Object(h.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  text-align: left;\n  color: black;\n\n  margin-left: 1rem;\n  margin-bottom: 20px;\n"]);return g=function(){return e},e}var y=b.a.h3(g()),E=function(e){return r.a.createElement(y,null,e.name)};function j(){var e=Object(h.a)(["\n  position: relative;\n  text-align: center;\n  font-size: 20px;\n  color: white;\n"]);return j=function(){return e},e}function x(){var e=Object(h.a)(["\n  width: 100%;\n  position: absolute;\n  top: -70px;\n  left: 0;\n"]);return x=function(){return e},e}var O=b.a.div(x()),k=b.a.h4(j()),w=function(e){return r.a.createElement(O,null,r.a.createElement(k,null,e.name))};function C(){var e=Object(h.a)(["\n  width: 100%;\n  height: 50px;\n\n  border-radius: 50px;\n  border: 0px;\n  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);\n  font-size: 15px;\n  outline: none;\n  color: #b7b7b7;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n\n  z-index: 5;\n  margin-bottom: 15px;\n  padding-left: 20px;\n"]);return C=function(){return e},e}var S=b.a.input(C()),T=function(e){return r.a.createElement(S,{className:"styledInput",type:e.type,placeholder:e.placeholder,onChange:e.onChange})};function D(){var e=Object(h.a)(["\n  width: 315px;\n  height: 100%;\n  margin-top: -100px;\n"]);return D=function(){return e},e}function I(){var e=Object(h.a)(["\n  height: 91%;\n  width: 100%;\n  position: absolute;\n  top: 110px;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  align-content: center;\n\n  border-radius: 50px;\n  background-color: white;\n  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);\n\n  z-index: 1;\n"]);return I=function(){return e},e}function N(){var e=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: #6c49b8;\n"]);return N=function(){return e},e}var z=b.a.div(N()),_=b.a.div(I()),A=b.a.div(D()),W=function(e){return r.a.createElement(z,null,r.a.createElement(_,null,r.a.createElement(A,null,e.children)))};function H(){var e=Object(h.a)(["\n  width: 375px;\n  margin: auto;\n"]);return H=function(){return e},e}function M(){var e=Object(h.a)(["\n  position: absolute;\n  bottom: 35px;\n  left: 0px;\n  width: 100%;\n"]);return M=function(){return e},e}function Y(){var e=Object(h.a)(["\n  width: 100%;\n  height: 50px;\n  border-radius: 50px 50px 0px 0px;\n  background-color: #6c49b8;\n  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);\n  outline: none;\n  color: white;\n  font-size: 20px;\n  border: 0px;\n"]);return Y=function(){return e},e}var R=b.a.button(Y()),U=b.a.div(M()),J=b.a.div(H()),B=function(e){return r.a.createElement(U,null,r.a.createElement(J,null,r.a.createElement(R,{onClick:e.onClick},e.name)))},L=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(m.a)(o,2),p=u[0],f=u[1],h=Object(l.f)(),b=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("click"),e.prev=1,e.next=4,v({username:n,password:p});case 4:t=e.sent,a=t.data,d(a.token),localStorage.setItem("token",a.token),null===a.response.warehouse_id?h.push("/home-depot"):null!==a.response.warehouse_id&&h.push("/home-warehouse"),e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(1),!e.t0){e.next=16;break}return console.log("User cannot login."),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(w,{name:"CheManager"}),r.a.createElement(E,{name:"Login"}),r.a.createElement(T,{type:"text",placeholder:"username",onChange:function(e){return c(e.target.value)}}),r.a.createElement(T,{type:"password",placeholder:"Password",onChange:function(e){return f(e.target.value)}}),r.a.createElement(B,{onClick:b,name:"Login"}))},q="http://ec2-100-25-10-187.compute-1.amazonaws.com",P=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("".concat(q).concat("/deliveries","/data"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("".concat(q).concat("/deliveries")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("".concat(q,"/upcomingDeliveries")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("".concat(q).concat("/deliveries","/ticket/").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.abrupt("return",f.a.post("".concat(q).concat("/deliveries","/confirm"),t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.post("".concat(q).concat("/deliveries","/checkCreate"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.post("".concat(q).concat("/deliveries"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("".concat("http://ec2-100-25-10-187.compute-1.amazonaws.com").concat("/warehouses"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Z(){var e=Object(h.a)(["\n  width: 100%;\n  height: 50px;\n\n  color: white;\n  font-size: 18px;\n  background-color: #6c49b8;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  text-align: left;\n  padding-left: 2rem;\n\n  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);\n  border-radius: 50px;\n  border: 0px;\n  outline: none;\n  margin-bottom: 15px;\n"]);return Z=function(){return e},e}var ee=b.a.button(Z()),te=function(e){return r.a.createElement(ee,{onClick:e.onClick},e.name)},ne=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(m.a)(o,2),p=u[0],f=u[1],v=Object(a.useState)(""),h=Object(m.a)(v,2),b=h[0],g=h[1],y=Object(a.useState)(""),j=Object(m.a)(y,2),x=j[0],O=j[1],k=Object(l.f)();Object(a.useEffect)((function(){var e=localStorage.getItem("token");e&&d(e),C(),D(),T(),S()}),[]);var C=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:t=e.sent,n=t.data,c(n),console.log("===================================="),console.log("This is delivery ",n.response),console.log("===================================="),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0&&(localStorage.clear(),k.push("/"));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:t=e.sent,n=t.data,O(n),console.log("===================================="),console.log("This is upcoming deliveries ",n),console.log("===================================="),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:t=e.sent,n=t.data,f(n),console.log("act",n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X();case 3:t=e.sent,n=t.data,g(n),console.log("===================================="),console.log("This is warehouse ",n.response),console.log("===================================="),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0&&(localStorage.clear(),k.push("/"));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(w,{name:"Welcome Depot Worker"}),r.a.createElement(E,{name:"Choose action"}),r.a.createElement(te,{name:"Upcoming Deliveries",onClick:function(){k.push("/upcoming-deliveries",{deliveries:x.response})}}),r.a.createElement(te,{name:"Check Ticket",onClick:function(){k.push("/ticket-number")}}),r.a.createElement(te,{name:"Create Job",onClick:function(){k.push("/create-job",{delivery:n.response})}}),r.a.createElement(te,{name:"Warehouses Overview",onClick:function(){k.push("/warehouses-overview",{warehouses:b})}}),r.a.createElement(te,{name:"All Deliveries",onClick:function(){k.push("/all-deliveries",{delivery:n.response,actualDeliveries:p.deliveries})}}),r.a.createElement(B,{name:"Logout",onClick:function(){localStorage.removeItem("token"),k.push("/")}}))},ae=function(){var e=Object(l.f)(),t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),p=Object(m.a)(u,2),f=p[0],d=p[1];Object(a.useEffect)((function(){localStorage.getItem("token")||(localStorage.clear(),e.push("/")),v(),h()}),[]);var v=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X();case 3:t=e.sent,n=t.data,o(n.response[0]),console.log("===================================="),console.log("This is warehouse ",n.response[0]),console.log("===================================="),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:t=e.sent,n=t.data,d(n),console.log("===================================="),console.log("This is upcoming deliveries ",n),console.log("===================================="),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(w,{name:"Welcome Warehouse Worker"}),r.a.createElement(E,{name:"Choose action"}),r.a.createElement(te,{name:"Upcoming Deliveries",onClick:function(){e.push("/upcoming-deliveries",{deliveries:f.response})}}),r.a.createElement(te,{name:"Confirm Ticket",onClick:function(){e.push("/ticket-number")}}),r.a.createElement(te,{name:"Storage",onClick:function(){e.push("/check-storage",{storage:c})}}),r.a.createElement(B,{name:"Logout",onClick:function(){localStorage.removeItem("token"),e.push("/")}}))};function re(){var e=Object(h.a)(["\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 4px;\n  transform: rotate(135deg);\n"]);return re=function(){return e},e}function ce(){var e=Object(h.a)(["\n  position: absolute;\n  top: -70px;\n  z-index: 10;\n"]);return ce=function(){return e},e}var oe=b.a.div(ce()),le=b.a.i(re()),ue=function(){var e=Object(l.f)();return r.a.createElement(oe,{onClick:function(){return e.goBack()}},r.a.createElement(le,null))},ie=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(l.f)();Object(a.useEffect)((function(){var e=localStorage.getItem("token");e&&d(e)}));var u=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",alert("You need to add a ticket number!"));case 2:o.push("/ticket-details/".concat(n));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Ticket number"}),r.a.createElement(E,{name:"Insert Ticket Number"}),r.a.createElement(T,{type:"text",placeholder:"Ticket number",onChange:function(e){return c(e.target.value)}}),r.a.createElement(B,{onClick:u,name:"Check ticket"}))};function se(){var e=Object(h.a)(["\n  font-size: 13px;\n  color: black;\n  margin-bottom: 10px;\n"]);return se=function(){return e},e}function me(){var e=Object(h.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: grey;\n  border-bottom: 1px solid grey;\n"]);return me=function(){return e},e}function pe(){var e=Object(h.a)(["\n  width: 100%;\n  height: auto;\n  margin-top: -180px;\n"]);return pe=function(){return e},e}var fe=b.a.div(pe()),de=b.a.div(me()),ve=b.a.div(se()),he=function(e){return r.a.createElement(fe,null,r.a.createElement(de,null,"TICKET NUMBER"),r.a.createElement(ve,null,e.ticket),r.a.createElement(de,null,"ARRIVAL"),r.a.createElement(ve,null,e.arrival),r.a.createElement(de,null,"TYPE"),r.a.createElement(ve,null,e.type),r.a.createElement(de,null,"DRIVERS"),r.a.createElement(ve,null,e.drivers),r.a.createElement(de,null,"TRUCK"),r.a.createElement(ve,null,e.truck))};function be(){var e=Object(h.a)(["\n  font-size: 10px;\n  color: grey;\n"]);return be=function(){return e},e}function ge(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1.5fr) 1fr;\n  justify-items: center;\n  border-bottom: 1px solid grey;\n"]);return ge=function(){return e},e}function ye(){var e=Object(h.a)(["\n  width: 315px;\n  height: auto;\n  margin-top: 50px;\n"]);return ye=function(){return e},e}var Ee=b.a.div(ye()),je=b.a.div(ge()),xe=b.a.h5(be()),Oe=function(e){return r.a.createElement(Ee,null,r.a.createElement(je,null,r.a.createElement(xe,null,"CHEMICAL"),r.a.createElement(xe,null,"QUANTITY"),r.a.createElement(xe,null,"WAREHOUSE"),r.a.createElement(xe,null,"ISLE")))};function ke(){var e=Object(h.a)(["\n  font-size: 13px;\n  font-weight: 600;\n  color: black;\n"]);return ke=function(){return e},e}function we(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1.5fr) 1fr;\n  justify-items: center;\n  border-bottom: 1px solid grey;\n"]);return we=function(){return e},e}function Ce(){var e=Object(h.a)(["\n  width: 315px;\n  height: auto;\n  margin-top: 15px;\n"]);return Ce=function(){return e},e}var Se=b.a.div(Ce()),Te=b.a.div(we()),De=b.a.div(ke()),Ie=function(e){return r.a.createElement(Se,null,r.a.createElement(Te,null,r.a.createElement(De,null,e.chemical),r.a.createElement(De,null,e.quantity," barels"),r.a.createElement(De,null,e.warehouse),r.a.createElement(De,null,e.isle)))};function Ne(){var e=Object(h.a)(["\n  width: 315px;\n  margin: auto;\n"]);return Ne=function(){return e},e}function ze(){var e=Object(h.a)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 80px;\n  left: 0px;\n"]);return ze=function(){return e},e}var _e=b.a.div(ze()),Ae=b.a.div(Ne()),We=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(m.a)(o,2),p=u[0],f=u[1],v=Object(a.useState)(""),h=Object(m.a)(v,2),b=h[0],g=h[1],y=Object(a.useState)([]),E=Object(m.a)(y,2),j=E[0],x=E[1],O=Object(a.useState)(""),k=Object(m.a)(O,2),C=k[0],S=k[1],T=Object(a.useState)(""),D=Object(m.a)(T,2),I=D[0],N=D[1],z=Object(l.h)().ticketNumber,_=Object(l.f)();Object(a.useEffect)((function(){var e=localStorage.getItem("token");e&&d(e),A()}),[]);var A=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(z);case 3:t=e.sent,n=t.data,console.log(n),c(n.delivery.deliveryStock),f(n.delivery.ticket_no),g(n.delivery.deliveryType),x(n.delivery.drivers),S(n.delivery.truck.plateNumber),N(n.delivery.time),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q({ticketNumber:p});case 3:t=e.sent,n=t.data,console.log(n),_.push("/home-depot"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.push("/reject-ticket",{ticketNumber:z});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Delivery Details"}),r.a.createElement(he,{ticket:p,arrival:I,type:b,drivers:j.map((function(e,t){return r.a.createElement("p",{key:t},e.firstName)})),truck:C}),r.a.createElement(Oe,null),n.map((function(e,t){return r.a.createElement(Ie,{key:t,chemical:e.chemicalName,quantity:e.storage,warehouse:e.warehouseNumber,isle:"5"})})),r.a.createElement(_e,null,r.a.createElement(Ae,null,r.a.createElement(te,{name:"Send",onClick:function(){return H()}}),r.a.createElement(te,{name:"Reject",onClick:function(){return M()}}))))},He=function(){var e=Object(l.f)(),t=Object(l.g)().state.delivery,n=function(n){e.push("/select-company-job/",{deliveryType:n,delivery:t})};return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Create Job"}),r.a.createElement(E,{name:"Select type"}),t.deliveryTypes.map((function(e,t){return r.a.createElement(te,{key:t,name:e.name,onClick:function(){return n(e.id)}})})))},Me=function(){var e=Object(l.f)(),t=Object(l.g)(),n=t.state.deliveryType,a=t.state.delivery;return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Create Job Company"}),r.a.createElement(E,{name:"Select Company"}),a.companies.map((function(t,c){return r.a.createElement(te,{key:c,name:t.name,onClick:function(){return r=t.id,void e.push("/select-driver",{delivery:a,deliveryType:n,companyID:r});var r}})})))},Ye=function(){var e=Object(l.f)(),t=Object(l.g)(),n=t.state.deliveryType,a=t.state.delivery,c=t.state.companyID;return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Create Job Driver"}),r.a.createElement(E,{name:"Select Driver"}),a.drivers.map((function(t,o){return r.a.createElement(te,{key:o,name:"Driver: ".concat(t.username),onClick:function(){return function(t){e.push("/select-truck",{delivery:a,deliveryType:n,companyID:c,driver:t})}(t)}})})))},Re=function(){var e=Object(l.f)(),t=Object(l.g)(),n=t.state.deliveryType,a=t.state.delivery,c=t.state.companyID,o=t.state.driver;return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Create Job Truck"}),r.a.createElement(E,{name:"Select Truck"}),a.trucks.map((function(t,l){return r.a.createElement(te,{key:l,name:"Truck: ".concat(t.plate_no),onClick:function(){return function(t){e.push("/select-chemicals",{delivery:a,deliveryType:n,companyID:c,driver:o,truck:t})}(t)}})})))},Ue=function(){var e=Object(l.f)(),t=Object(l.g)(),n=t.state.deliveryType,c=t.state.delivery,o=t.state.companyID,u=t.state.driver,p=t.state.truck,f=Object(a.useState)(),d=Object(m.a)(f,2),v=d[0],h=d[1],b=Object(a.useState)(),g=Object(m.a)(b,2),y=g[0],j=g[1],x=Object(a.useState)(),O=Object(m.a)(x,2),k=O[0],C=O[1],S=Object(a.useState)("Chemical A"),D=Object(m.a)(S,1)[0],I=Object(a.useState)("Chemical B"),N=Object(m.a)(I,1)[0],z=Object(a.useState)("Chemical C"),_=Object(m.a)(z,1)[0],A=Object(a.useState)(1),H=Object(m.a)(A,1)[0],M=Object(a.useState)(2),Y=Object(m.a)(M,1)[0],R=Object(a.useState)(3),U=Object(m.a)(R,1)[0],J=[{chemical:D,storage:parseInt(v),id:H},{chemical:N,storage:parseInt(y),id:Y},{chemical:_,storage:parseInt(k),id:U}],L=function(){var t=Object(s.a)(i.a.mark((function t(){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$({chemicals:J,deliveryType:n});case 3:a=t.sent,r=a.data,e.push("/finalize-job",{deliveryType:n,companyID:o,driver:u,truck:p,delivery:c,data:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0&&console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Create Job Chemicals"}),r.a.createElement(E,{name:"Insert Chemicals"}),r.a.createElement(T,{type:"number",placeholder:"Amount Chemical A",onChange:function(e){return h(e.target.value)}}),r.a.createElement(T,{type:"number",placeholder:"Amount Chemical B",onChange:function(e){return j(e.target.value)}}),r.a.createElement(T,{type:"number",placeholder:"Amount Chemical C",onChange:function(e){return C(e.target.value)}}),r.a.createElement(B,{name:"Insert",onClick:L}))},Je=function(){var e=Object(l.f)(),t=Object(l.g)(),n=t.state.deliveryType,a=t.state.companyID,c=t.state.driver,o=t.state.truck,u=t.state.data.response,m=u.possibleStorage.filter((function(e){return e.storage})),p=[];p.push(c.id);var f=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G({deliveryType:n,companyId:a,drivers:p,truckId:o.id,chemicals:m,ticketNo:u.ticketNumber});case 3:e.push("/home-depot"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0&&console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Create Job Information"}),r.a.createElement(he,{ticket:u.ticketNumber,arrival:u.arrival,type:1===n?"Delivery":"Pick-up",drivers:c.username,truck:o.plate_no}),r.a.createElement(Oe,null),m.map((function(e,t){return r.a.createElement(Ie,{key:t,chemical:e.chemicalName,quantity:e.storage,warehouse:e.warehouseId,isle:"3"})})),r.a.createElement(B,{name:"Send",onClick:f}))};function Be(){var e=Object(h.a)(["\n  margin-top: 5px;\n  padding-bottom: 10px;\n  display: grid;\n  color: black;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  border-bottom: 1px solid grey;\n"]);return Be=function(){return e},e}function Le(){var e=Object(h.a)(["\n  margin-top: 5px;\n  display: grid;\n  color: grey;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  border-top: 1px solid grey;\n  padding-top: 10px;\n"]);return Le=function(){return e},e}function qe(){var e=Object(h.a)(["\n  width: 100%;\n  height: auto;\n  margin-top: -230px;\n"]);return qe=function(){return e},e}var Pe=b.a.div(qe()),Fe=b.a.div(Le()),Ke=b.a.div(Be()),Ve=function(e){return r.a.createElement(Pe,null,r.a.createElement("h3",null,"Maximum Capacity"),r.a.createElement(Fe,null,r.a.createElement("h5",null,"WAREHOUSE"),r.a.createElement("h5",null,"CAPACITY")),r.a.createElement(Ke,null,r.a.createElement("h4",null,e.warehouse),r.a.createElement("h4",null,e.capacity," barels")))};function Qe(){var e=Object(h.a)(["\n  margin-top: 5px;\n  display: grid;\n  color: black;\n  justify-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid grey;\n  border-top: 1px solid grey;\n"]);return Qe=function(){return e},e}function $e(){var e=Object(h.a)(["\n  width: 100%;\n  height: auto;\n  margin-top: 40px;\n"]);return $e=function(){return e},e}var Ge=b.a.div($e()),Xe=b.a.div(Qe()),Ze=function(e){return r.a.createElement(Ge,null,r.a.createElement("h3",null,"Available Capacity"),r.a.createElement(Xe,null,r.a.createElement("h4",null,e.capacity," barels")))};function et(){var e=Object(h.a)(["\n  width: 100%;\n  height: auto;\n  margin-top: 40px;\n"]);return et=function(){return e},e}var tt=b.a.div(et()),nt=function(){return r.a.createElement(tt,null,r.a.createElement("h3",null,"In Stock"))},at=function(){var e=Object(l.f)(),t=Object(l.g)().state.storage;return console.log(t),r.a.createElement(W,null,r.a.createElement(w,{name:"Warehouse ".concat(t.warehouse_number," Storage")}),r.a.createElement(Ve,{warehouse:t.warehouse_id,capacity:t.warehouse_total_capacity}),r.a.createElement(Ze,{capacity:t.warehouse_total_capacity-t.warehouse_current_storage}),r.a.createElement(nt,null),t.chemicals.map((function(e,n){return r.a.createElement(Ie,{key:n,chemical:e.chemical,quantity:e.storage,warehouse:"WH ".concat(t.warehouse_number),isle:"Isle 2"})})),r.a.createElement(B,{name:"Close",onClick:function(){return e.goBack()}}))},rt=n(19),ct=n(23),ot=n(6),lt=n.n(ot);function ut(){var e=Object(h.a)(["\n  width: 100%;\n  height: 50px;\n\n  border-radius: 50px;\n  border: 0px;\n  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);\n  font-size: 15px;\n  outline: none;\n\n  z-index: 5;\n  margin-bottom: 15px;\n  padding-left: 20px;\n"]);return ut=function(){return e},e}var it=b.a.select(ut()),st=function(e){return r.a.createElement(it,{type:e.type,placeholder:e.placeholder,onChange:e.onChange},r.a.createElement("option",{value:null},e.name),e.options.map((function(e,t){return r.a.createElement("option",{key:"option"+t,value:e.name?e.name:e.username?e.username:e},e.name?e.name:e.username?e.username:e)})))};function mt(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: black;\n  height: 50px;\n  overflow-x: scroll;\n  width: 70px;\n  margin-right: 10px;\n  white-space: nowrap;\n  justify-content: flex-start;\n"]);return mt=function(){return e},e}function pt(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1.5fr);\n  justify-items: center;\n  border-bottom: 1px solid grey;\n"]);return pt=function(){return e},e}function ft(){var e=Object(h.a)(["\n  width: 315px;\n  height: auto;\n"]);return ft=function(){return e},e}var dt=b.a.div(ft()),vt=b.a.div(pt()),ht=b.a.div(mt()),bt=function(e){var t=Object(l.f)();return r.a.createElement(dt,{className:"deliveryItem",onClick:function(){return n=e.ticketNumber,console.log(n),void t.push("/ticket-details/".concat(n));var n}},r.a.createElement(vt,null,r.a.createElement(ht,null,e.ticketNumber),r.a.createElement(ht,null,e.deliveryDate),r.a.createElement(ht,null,e.deliveryType),r.a.createElement(ht,null,e.companyName)))};function gt(){var e=Object(h.a)(["\n  font-size: 10px;\n  color: grey;\n"]);return gt=function(){return e},e}function yt(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1.5fr);\n  justify-items: center;\n  border-bottom: 1px solid grey;\n"]);return yt=function(){return e},e}function Et(){var e=Object(h.a)(["\n  width: 315px;\n  height: auto;\n  margin-top: 50px;\n"]);return Et=function(){return e},e}var jt=b.a.div(Et()),xt=b.a.div(yt()),Ot=b.a.h5(gt()),kt=function(e){return r.a.createElement(jt,null,r.a.createElement(xt,null,r.a.createElement(Ot,null,"Ticket"),r.a.createElement(Ot,null,"Scheduled"),r.a.createElement(Ot,null,"Type"),r.a.createElement(Ot,null,"Company")))};function wt(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 315px;\n  height: auto;\n  max-height: 200px;\n  overflow: scroll;\n  margin-top: 15px;\n"]);return wt=function(){return e},e}function Ct(){var e=Object(h.a)(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  width: 315px;\n  height: auto;\n  margin-top: 15px;\n"]);return Ct=function(){return e},e}var St=b.a.div(Ct()),Tt=b.a.div(wt()),Dt=function(e){var t=Object(l.f)(),n=Object(l.g)(),c=Object(a.useState)([lt()().add(-1,"days").format(),lt()().add(-2,"days").format(),lt()().add(-3,"days").format(),lt()().add(-4,"days").format(),lt()().add(-5,"days").format(),lt()().add(-6,"days").format(),lt()().add(-7,"days").format()]),o=Object(m.a)(c,1)[0],u=Object(a.useState)([lt()().add(1,"days").format(),lt()().add(2,"days").format(),lt()().add(3,"days").format(),lt()().add(4,"days").format(),lt()().add(5,"days").format(),lt()().add(6,"days").format(),lt()().add(7,"days").format()]),i=Object(m.a)(u,1)[0],s=Object(a.useState)(n.state.delivery),p=Object(m.a)(s,1)[0],f=Object(a.useState)(n.state.actualDeliveries),d=Object(m.a)(f,2),v=d[0],h=d[1],b=Object(a.useState)({from:null,to:null,chemical:null,company:null,deliveryType:null,driver:null,caseHandler:null,depot:null}),g=Object(m.a)(b,2),y=g[0],E=g[1],j=function(e){return function(t){E(Object(ct.a)(Object(ct.a)({},y),{},Object(rt.a)({},e,t.target.value)))}};Object(a.useEffect)((function(){localStorage.getItem("token")||t.push("/")}),[]);return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"All deliveries"}),p?r.a.createElement(St,null,r.a.createElement(st,{name:"From",options:o,onChange:j("from")}),r.a.createElement(st,{name:"To",options:i,onChange:j("to")}),r.a.createElement(st,{name:"Chemicals",options:p.chemicals,onChange:j("chemical")}),r.a.createElement(st,{name:"Companies",options:p.companies,onChange:j("company")}),r.a.createElement(st,{name:"Delivery types",onChange:j("deliveryType"),options:p.deliveryTypes}),r.a.createElement(st,{name:"Drivers",options:p.drivers,onChange:j("driver")}),r.a.createElement(st,{name:"Case handler",options:p.users,onChange:j("caseHandler")}),r.a.createElement(st,{name:"Depots",options:Object.keys(p.depots),onChange:j("depot")})):"",r.a.createElement("div",null,r.a.createElement(kt,null),r.a.createElement(Tt,null,v.length>0?v.map((function(e,t){return r.a.createElement(bt,{key:"delivery-"+t,ticketNumber:e.ticket_no,deliveryDate:lt()(e.date_scheduled).format("DD/MM/YY"),deliveryType:e.deliveryType,companyName:e.company.companyName})})):r.a.createElement("p",{style:{textAlign:"center"}},"Sorry no results"))),r.a.createElement(B,{name:"Find",onClick:function(){return function(){var e=n.state.actualDeliveries;"Chemicals"!==y.chemical&&null!==y.chemical&&(console.log("da"),e=e.filter((function(e){return e.deliveryStock.some((function(e){return e.chemicalName===y.chemical}))}))),"Companies"!==y.company&&null!==y.company&&(e=e.filter((function(e){return e.company.companyName===y.company}))),"Delivery types"!==y.deliveryType&&null!==y.deliveryType&&(e=e.filter((function(e){return e.deliveryType===y.deliveryType}))),"Drivers"!==y.driver&&null!==y.driver&&(e=e.filter((function(e){return e.drivers.some((function(e){return e.username===y.driver}))}))),"Case handler"!==y.caseHandler&&null!==y.caseHandler&&(e=e.filter((function(e){return e.caseHandler===y.caseHandler}))),"From"!==y.from&&null!==y.from&&(e=e.filter((function(e){return lt()(e.date_scheduled).isAfter(y.from)}))),"To"!==y.to&&null!==y.to&&(e=e.filter((function(e){return lt()(e.date_scheduled).isBefore(y.to)}))),"Depots"!==y.depot&&null!==y.depot&&(e=e.filter((function(e){return console.log(y.depot),e.deliveryStock.some((function(e){return e.depot_id===Number(y.depot)}))}))),h(e)}()}}))};function It(){var e=Object(h.a)(["\n  position: relative;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: white;\n"]);return It=function(){return e},e}function Nt(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 315px;\n  height: auto;\n  max-height: 80vh;\n  overflow: scroll;\n  margin-top: 15px;\n"]);return Nt=function(){return e},e}function zt(){var e=Object(h.a)(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: 1fr 1fr;\n  width: 315px;\n  height: auto;\n  margin-top: 15px;\n"]);return zt=function(){return e},e}b.a.div(zt());var _t=b.a.div(Nt()),At=b.a.h4(It()),Wt=function(){Object(l.f)();var e=Object(l.g)(),t=Object(a.useState)(e.state.deliveries),n=Object(m.a)(t,2),c=n[0];n[1];return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Upcoming deliveries"}),r.a.createElement(At,null,lt()().format("DD-MM-YY")+" to "+lt()().add(6,"days").format("DD-MM-YY")),r.a.createElement("div",null,r.a.createElement(kt,null),r.a.createElement(_t,null,c.map((function(e,t){return r.a.createElement(bt,{key:"delivery-"+t,ticketNumber:e.ticketNumber,deliveryDate:lt()(e.dateScheduled).format("DD/MM/YY"),deliveryType:e.deliveryType,companyName:e.company})})))))};function Ht(){var e=Object(h.a)(["\n  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);\n  padding: 1rem;\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n"]);return Ht=function(){return e},e}function Mt(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 1.5rem;\n  justify-content: center;\n"]);return Mt=function(){return e},e}var Yt=b.a.div(Mt()),Rt=b.a.div(Ht()),Ut=function(){var e=Object(l.f)(),t=Object(l.g)(),n=Object(a.useState)(t.state.warehouses.response),c=Object(m.a)(n,1)[0];console.log(c[1]);return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Warehouses overview"}),r.a.createElement(E,{name:"Select warehouse"}),r.a.createElement(Yt,null,Object.keys(c).map((function(t,n){return console.log(c[n+1]),r.a.createElement(Rt,{key:"warehouse-"+n+1,onClick:function(){return function(t){e.push("/check-storage",{storage:t})}(c[n+1])}},n+1)}))))};function Jt(){var e=Object(h.a)(["\n  font-size: 20px;\n  color: black;\n  margin-bottom: 10rem;\n  text-align: center;\n"]);return Jt=function(){return e},e}var Bt=b.a.h4(Jt()),Lt=function(){var e=Object(l.f)(),t=Object(l.g)(),n=Object(a.useState)(t.state.ticketNumber),c=Object(m.a)(n,2),o=c[0],u=(c[1],Object(a.useState)(["Wrong amount of chemical","Wrong truck number","Wrong company name"])),i=Object(m.a)(u,1)[0];return r.a.createElement(W,null,r.a.createElement(ue,null),r.a.createElement(w,{name:"Upcoming deliveries"}),r.a.createElement(Bt,null,"The job ",r.a.createElement("span",{style:{color:"gray"}},o)," has been rejected."),r.a.createElement(E,{name:"Select the reason"}),r.a.createElement(st,{name:"Reject reason",options:i}),r.a.createElement(B,{name:"Close",onClick:function(){return e.push("/home-depot")}}))},qt=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:L}),r.a.createElement(l.a,{path:"/home-depot",component:ne}),r.a.createElement(l.a,{path:"/home-warehouse",component:ae}),r.a.createElement(l.a,{path:"/ticket-number",component:ie}),r.a.createElement(l.a,{path:"/reject-ticket",component:Lt}),r.a.createElement(l.a,{path:"/ticket-details/:ticketNumber",component:We}),r.a.createElement(l.a,{path:"/create-job",component:He}),r.a.createElement(l.a,{path:"/select-company-job",component:Me}),r.a.createElement(l.a,{path:"/select-driver",component:Ye}),r.a.createElement(l.a,{path:"/select-truck",component:Re}),r.a.createElement(l.a,{path:"/select-chemicals",component:Ue}),r.a.createElement(l.a,{path:"/finalize-job",component:Je}),r.a.createElement(l.a,{path:"/check-storage",component:at}),r.a.createElement(l.a,{path:"/all-deliveries",component:Dt}),r.a.createElement(l.a,{path:"/upcoming-deliveries",component:Wt}),r.a.createElement(l.a,{path:"/warehouses-overview",component:Ut}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pt=n(7);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pt.a,{basename:"/"},r.a.createElement(qt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.07b8c29b.chunk.js.map