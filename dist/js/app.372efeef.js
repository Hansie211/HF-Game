(function(e){function t(t){for(var r,c,o=t[0],u=t[1],s=t[2],f=0,b=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/HF-Game/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3324:function(e,t,n){},3347:function(e,t,n){"use strict";n("97c6")},"346c":function(e,t,n){},4932:function(e,t,n){"use strict";n("3324")},"4fac":function(e,t,n){},"4fe4":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="4fe4"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("ddfa"),n("8a7e"),n("f9c7")),i=n("2ecb"),c=n("d4ec"),o=n("bee2"),u=n("d5e4"),s=n("5364"),l=n("9bd1"),f=(n("99af"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0"),new WeakMap),b=function(){function e(t){Object(c["a"])(this,e),Object(u["a"])(this,f,{writable:!0,value:void 0}),Object(l["a"])(this,f,t)}return Object(o["a"])(e,[{key:"writeLine",get:function(){return Object(s["a"])(this,f)}}]),e}(),d=new WeakMap,h=function(){function e(t){Object(c["a"])(this,e),Object(u["a"])(this,d,{writable:!0,value:void 0}),Object(l["a"])(this,d,t)}return Object(o["a"])(e,[{key:"value",get:function(){return Object(s["a"])(this,d)}}]),e}(),p=new h(1),O=new h(2),v=new h(3),m=new h(4),j=function(){function e(){throw Object(c["a"])(this,e),new Error("Construction of static class")}return Object(o["a"])(e,null,[{key:"DEBUG",get:function(){return p}},{key:"INFO",get:function(){return O}},{key:"WARN",get:function(){return v}},{key:"ERROR",get:function(){return m}},{key:"setLogLevel",value:function(t){Object(i["a"])(e,e,g,t)}},{key:"getLogLevel",value:function(){return Object(a["a"])(e,e,g)}},{key:"registerTraceObject",value:function(t){Object(a["a"])(e,e,y).push(t),e.logDebug("Initialize new traceObject",t)}},{key:"writeLine",value:function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),c=2;c<r;c++)i[c-2]=arguments[c];for(var o=0;o<Object(a["a"])(e,e,y).length;o++){var u;(u=Object(a["a"])(e,e,y)[o]).writeLine.apply(u,[t,n].concat(i))}}},{key:"log",value:function(t,n){if(!(t.value<Object(a["a"])(e,e,g).value)){for(var r=arguments.length,i=new Array(r>2?r-2:0),c=2;c<r;c++)i[c-2]=arguments[c];e.writeLine.apply(e,[t,n].concat(i))}}},{key:"logDebug",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.log.apply(e,[e.DEBUG,t].concat(r))}},{key:"logInfo",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.log.apply(e,[e.INFO,t].concat(r))}},{key:"logWarn",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.log.apply(e,[e.WARN,t].concat(r))}},{key:"logError",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.log.apply(e,[e.ERROR,t].concat(r))}}]),e}(),y={writable:!0,value:[]},g={writable:!0,value:j.DEBUG},w=new b((function(e,t){for(var n=function(e){switch(e){case j.DEBUG:return console.debug;case j.INFO:return console.info;case j.WARN:return console.warn;default:return console.error}},r=n(e),a=arguments.length,i=new Array(a>2?a-2:0),c=2;c<a;c++)i[c-2]=arguments[c];r.apply(void 0,[t].concat(i))})),k=j,x=n("7a23");function C(e,t,n,r,a,i){var c=Object(x["A"])("router-view");return Object(x["s"])(),Object(x["d"])(c)}var R={name:"App",data:function(){return{info:{}}}},L=n("6b0d"),S=n.n(L);const A=S()(R,[["render",C]]);var T=A,P=n("6c02"),E=function(e){return Object(x["v"])("data-v-3193f5c6"),e=e(),Object(x["t"])(),e},_=E((function(){return Object(x["g"])("div",{class:"row"},[Object(x["g"])("h3",{class:"uppercase mb-10"},"Sign In")],-1)})),I={class:"row"},D=E((function(){return Object(x["g"])("label",{for:"username"},"Username",-1)})),U={class:"row"},N=E((function(){return Object(x["g"])("label",{for:"password"},"Password",-1)})),M=E((function(){return Object(x["g"])("div",{class:"row"},[Object(x["g"])("input",{type:"submit",value:"Login",class:"mt-10 bg-yellow-300 px-2 py-2 font-bold text-center cursor-pointer w-32 h-18 flex rounded self-end select-none"})],-1)}));function F(e,t,n,r,a,i){return Object(x["s"])(),Object(x["f"])("form",{ref:"form",id:"form",class:"bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 flex flex-col w-screen text-white text-lg",method:"POST",action:"#",onSubmit:t[2]||(t[2]=Object(x["I"])((function(){return e.addProduct&&e.addProduct.apply(e,arguments)}),["prevent"]))},[_,Object(x["g"])("div",I,[D,Object(x["H"])(Object(x["g"])("input",{type:"email",name:"username",required:"required",class:"rounded text-black pl-2 py-2","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t})},null,512),[[x["E"],e.username]])]),Object(x["g"])("div",U,[N,Object(x["H"])(Object(x["g"])("input",{type:"password",name:"password",required:"required",class:"rounded text-black pl-2 py-2","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[x["E"],e.password]])]),M],544)}var q=n("53ca"),G=n("4143"),W=n("34d8"),B=n("ade3"),H=(n("b64b"),n("d81d"),n("a15b"),n("1fe2"),n("159b"),new WeakMap),V=new WeakMap,$=new WeakMap,z=function(){function e(t,n,r){Object(c["a"])(this,e),Object(u["a"])(this,H,{writable:!0,value:void 0}),Object(u["a"])(this,V,{writable:!0,value:void 0}),Object(u["a"])(this,$,{writable:!0,value:void 0}),Object(l["a"])(this,H,t),Object(l["a"])(this,V,n),Object(l["a"])(this,$,r),this.getContent=this.getContent.bind(this),this.hasContent=this.hasContent.bind(this),this.getStatusCode=this.getStatusCode.bind(this),this.getStatusText=this.getStatusText.bind(this),this.hasError=this.hasError.bind(this)}return Object(o["a"])(e,[{key:"getContent",value:function(){return Object(s["a"])(this,H)}},{key:"hasContent",value:function(){return null!==Object(s["a"])(this,H)}},{key:"getStatusCode",value:function(){return Object(s["a"])(this,V)}},{key:"getStatusText",value:function(){return Object(s["a"])(this,$)}},{key:"hasError",value:function(){return!1}}]),e}(),J=z,Y=n("257e"),Q=n("262e"),K=n("2caf"),X=(n("25f0"),function(e){Object(Q["a"])(n,e);var t=Object(K["a"])(n);function n(e,r,a){var i;return Object(c["a"])(this,n),i=t.call(this,e,r,a),i.toString=i.toString.bind(Object(Y["a"])(i)),i}return Object(o["a"])(n,[{key:"hasError",value:function(){return!0}},{key:"toString",value:function(){return"Code ".concat(this.getStatusCode(),": ").concat(this.getStatusText(),"\n").concat(this.getContent())}}]),n}(J)),Z=X,ee=function(e){Object(Q["a"])(n,e);var t=Object(K["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(Z),te=ee,ne=function(e){Object(Q["a"])(n,e);var t=Object(K["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(Z),re=ne,ae=new WeakSet,ie=function(){function e(){Object(c["a"])(this,e),Object(G["a"])(this,ae)}return Object(o["a"])(e,[{key:"createFromResponse",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.status,r=t.statusText,t.ok){e.next=7;break}return e.next=5,Object(W["a"])(this,ae,ce).call(this,t);case 5:return a=e.sent,e.abrupt("return",new Z(a,n,r));case 7:return e.prev=7,e.next=10,t.json();case 10:return i=e.sent,e.abrupt("return",new J(i,n,r));case 14:return e.prev=14,e.t0=e["catch"](7),e.abrupt("return",te(e.t0,0,r));case 17:case"end":return e.stop()}}),e,this,[[7,14]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createFromRequest",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:return r=e.sent,e.next=6,this.createFromResponse(r);case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",new re(e.t0,0,null));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}();function ce(e){return oe.apply(this,arguments)}function oe(){return oe=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.text();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e["catch"](0),e.abrupt("return","");case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),oe.apply(this,arguments)}var ue=new ie,se=ue,le=(n("7db0"),new WeakMap),fe=function(){function e(){Object(c["a"])(this,e),Object(u["a"])(this,le,{writable:!0,value:[]})}return Object(o["a"])(e,[{key:"getRule",value:function(e,t){return Object(s["a"])(this,le).find((function(n){return n.isValidFor(e,t)}))}},{key:"addRule",value:function(e){Object(s["a"])(this,le).push(e)}}]),e}(),be=fe,de=function e(){throw Object(c["a"])(this,e),new Error("Construction of static class")};Object(B["a"])(de,"PROTOCOL","https://"),Object(B["a"])(de,"HOSTNAME","www.hellofresh.nl"),Object(B["a"])(de,"BASE_PATH","/gw"),Object(B["a"])(de,"BASE_URL",de.PROTOCOL+de.HOSTNAME+de.BASE_PATH),Object(B["a"])(de,"LOGIN_URL",de.BASE_URL+"/login"),Object(B["a"])(de,"SUBSCRIPTION_URL",de.BASE_URL+"/api/customers/me/subscriptions"),Object(B["a"])(de,"PRODUCT_URL",de.BASE_URL+"/my-deliveries/menu");var he=new WeakMap,pe=new WeakSet,Oe=function(){function e(){Object(c["a"])(this,e),Object(G["a"])(this,pe),Object(B["a"])(this,"defaultHeaders",{}),Object(u["a"])(this,he,{writable:!0,value:null}),Object(B["a"])(this,"mockServer",void 0),this.mockServer=new be}return Object(o["a"])(e,[{key:"setBearerToken",value:function(e){Object(l["a"])(this,he,e)}},{key:"removeBearerToken",value:function(){Object(l["a"])(this,he,null)}},{key:"hasBearerToken",value:function(){return null!==Object(s["a"])(this,he)}},{key:"createQuery",value:function(e){var t=Object.keys(e);if(0===t.length)return"";var n=t.map((function(t){var n=e[t];return"".concat(t,"=").concat(n)}));return"?"+n.join("&")}},{key:"sendRequest",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,i,c,o,u,s,l,f,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=r.method,i=void 0===a?"GET":a,c=r.body,o=void 0===c?null:c,u=r.headers,s=void 0===u?{}:u,i=i.toUpperCase(),l=t+this.createQuery(n),k.logDebug("Fetch ",l),b=this.mockServer.getRule(t,i),void 0===b){e.next=10;break}k.logDebug("Apply mock rule"),f=b.getResponse(n,o,s),e.next=15;break;case 10:return"object"===Object(q["a"])(o)&&null!==o&&(o=JSON.stringify(o)),Object(W["a"])(this,pe,ve).call(this,s),e.next=14,se.createFromRequest(l,{method:i,body:o,headers:s});case 14:f=e.sent;case 15:return f instanceof re?k.logError("Failed to fetch, "+f):f instanceof te?k.logError("Failed to parse, "+f):f instanceof Z&&k.logWarn("Repsonse failed, "+f),e.abrupt("return",f);case 17:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()}]),e}();function ve(e){var t=this,n=Object.keys(this.defaultHeaders),r=function(t){return Object.prototype.hasOwnProperty.call(e,t)},a=function(t,n){r(t)?null===e[t]&&delete e[t]:e[t]=n};n.forEach((function(e){var n=t.defaultHeaders[e];a(e,n)})),a("Authorization","Bearer ".concat(Object(s["a"])(this,he)))}var me=new Oe,je=me,ye=function e(t){var n=t.username,r=t.password;Object(c["a"])(this,e),this.username=n,this.password=r},ge=ye,we=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"createLoginRequest",value:function(e,t){return new ge({username:e,password:t})}}]),e}(),ke=new we,xe=ke,Ce=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"login",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=xe.createLoginRequest(t,n),k.logDebug(r),e.next=4,je.sendRequest(de.LOGIN_URL,{},{method:"POST",body:r,headers:{Authorization:null}});case 4:if(a=e.sent,!a.hasError()){e.next=7;break}return e.abrupt("return",!1);case 7:return i=a.getContent(),je.setBearerToken(i.access_token),k.logDebug("Token: ",i.access_token),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),Re=new Ce,Le=Re,Se={addProduct:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Le.login(e.username,e.password);case 2:if(n=t.sent,!0===n){t.next=5;break}return t.abrupt("return");case 5:e.$router.push("/");case 6:case"end":return t.stop()}}),t)})))()}},Ae={name:"App",methods:Se,data:function(){return{text:"LOGIN",username:"",password:""}}};n("c9a2");const Te=S()(Ae,[["render",F],["__scopeId","data-v-3193f5c6"]]);var Pe=Te,Ee={key:2,id:"end-overview",ref:"listContainer"};function _e(e,t,n,r,a,i){var c=Object(x["A"])("PlayerSetup"),o=Object(x["A"])("SortingGame"),u=Object(x["A"])("meal-card");return Object(x["s"])(),Object(x["f"])(x["a"],null,[1===e.state?(Object(x["s"])(),Object(x["d"])(c,{key:0,onFinished:i.finishPlayerSetup},null,8,["onFinished"])):Object(x["e"])("",!0),null!==e.currentVoteList&&2===e.state?(Object(x["s"])(),Object(x["d"])(o,{key:1,onFinished:i.finishGame,voteList:e.currentVoteList,player:e.currentPlayer},null,8,["onFinished","voteList","player"])):Object(x["e"])("",!0),3===e.state?(Object(x["s"])(),Object(x["f"])("div",Ee,[(Object(x["s"])(!0),Object(x["f"])(x["a"],null,Object(x["y"])(e.globalVoteList,(function(e){return Object(x["s"])(),Object(x["f"])("div",{key:e.meal.recipe.id,class:"meal-container"},[Object(x["i"])(u,{meal:e.meal},null,8,["meal"])])})),128))],512)):Object(x["e"])("",!0)],64)}n("ac1f"),n("466d"),n("4de4"),n("fb6a"),n("4e82");var Ie=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"createOverviewRequest",value:function(){return null}}]),e}(),De=new Ie,Ue=De,Ne=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"requestOverview",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Ue.createOverviewRequest(),e.next=3,je.sendRequest(de.SUBSCRIPTION_URL,{for:"my-deliveries",country:"nl",locale:"nl-NL"},{method:"GET",body:t});case 3:if(n=e.sent,!n.hasError()){e.next=6;break}return e.abrupt("return",!1);case 6:return r=n.getContent(),e.abrupt("return",r.items.first());case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),Me=new Ne,Fe=Me,qe=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"requestItems",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=r.getWeekNumber()+((r.getDay()||7)>2)?1:0,i="".concat(r.getFullYear(),"-W").concat(a),e.next=4,je.sendRequest(de.PRODUCT_URL,{"product-sku":n,locale:"nl-NL",preference:"veggie",servings:1,subscription:t,week:i},{});case 4:if(c=e.sent,!c.hasError()){e.next=7;break}return e.abrupt("return",!1);case 7:return o=c.getContent(),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()}]),e}(),Ge=new qe,We=Ge,Be=(n("b0c0"),function(e){return Object(x["v"])("data-v-318c34e7"),e=e(),Object(x["t"])(),e}),He={id:"player-table"},Ve={class:"player-name"},$e={class:"row"},ze=Be((function(){return Object(x["g"])("input",{type:"submit",value:"Add",class:"py-2 px-8 cursor-pointer rounded bg-yellow-300 text-white font-bold text-center"},null,-1)})),Je={class:"row warning"},Ye={key:0},Qe={key:1},Ke={class:"row"};function Xe(e,t,n,r,a,i){var c=Object(x["A"])("font-awesome-icon");return Object(x["s"])(),Object(x["f"])("div",He,[(Object(x["s"])(!0),Object(x["f"])(x["a"],null,Object(x["y"])(e.players,(function(t){return Object(x["s"])(),Object(x["f"])("div",{key:t.id,class:"row justify-between"},[Object(x["g"])("div",Ve,Object(x["C"])(t.name),1),Object(x["i"])(c,{icon:"times",class:"cursor-pointer",onClick:function(n){return e.deletePlayer(t.id)}},null,8,["onClick"])])})),128)),Object(x["g"])("div",$e,[Object(x["g"])("form",{id:"player-input-form",method:"POST",action:"#",onSubmit:t[1]||(t[1]=Object(x["I"])((function(){return e.addPlayer&&e.addPlayer.apply(e,arguments)}),["prevent"]))},[Object(x["H"])(Object(x["g"])("input",{type:"text",name:"player-name",required:"requierd",placeholder:"Name",class:"mr-5 p-1 rounded","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.playerName=t})},null,512),[[x["E"],e.playerName]]),ze],32)]),Object(x["g"])("div",Je,[null!==e.warning?(Object(x["s"])(),Object(x["f"])("div",Ye,"Warning: "+Object(x["C"])(e.warning),1)):(Object(x["s"])(),Object(x["f"])("div",Qe," "))]),Object(x["g"])("div",Ke,[Object(x["g"])("div",{class:"mt-10 bg-yellow-300 px-8 py-2 font-bold text-center cursor-pointer flex rounded select-none",onClick:t[2]||(t[2]=function(){return e.onClickStart&&e.onClickStart.apply(e,arguments)})},"Start")])])}n("c740"),n("a434");var Ze=new WeakMap,et=function(){function e(t){Object(c["a"])(this,e),Object(u["a"])(this,Ze,{writable:!0,value:0}),"number"===typeof t&&Object(l["a"])(this,Ze,t)}return Object(o["a"])(e,[{key:"getCurrent",value:function(){return Object(s["a"])(this,Ze)}},{key:"next",value:function(){return Object(l["a"])(this,Ze,+Object(s["a"])(this,Ze)+1)}}]),e}(),tt=et,nt={addPlayer:function(){var e=this;if(""!==this.playerName)if(this.players.some((function(t){return t.name===e.playerName})))this.warning="Player with name '".concat(this.playerName,"' already exists.");else{var t={name:this.playerName,id:rt.next()};this.players.push(t),this.playerName="",this.warning=null}else this.warning="Player name cannot be empty."},onClickStart:function(){this.players.length<=1?this.warning="Add at least 2 player to the list.":(this.$emit("finished",this.players),this.warning=null)},deletePlayer:function(e){var t=this.players.findIndex((function(t){return t.id===e}));t<0||this.players.splice(t,1)}},rt=new tt,at={name:"PlayerSetup",methods:nt,data:function(){return{playerName:"",players:[],warning:null}}};n("3347");const it=S()(at,[["render",Xe],["__scopeId","data-v-318c34e7"]]);var ct=it,ot={id:"game-board"},ut={id:"player-name"};function st(e,t,n,r,a,i){var c=Object(x["A"])("cards-select");return Object(x["s"])(),Object(x["f"])("div",ot,[Object(x["g"])("div",ut,Object(x["C"])(n.player.name),1),Object(x["i"])(c,{onFinished:e.selectFinished,voteList:n.voteList},null,8,["onFinished","voteList"])])}var lt={id:"overview-container",ref:"listContainer"},ft={class:"meal-container"},bt={id:"vote-box"},dt=["onClick"],ht=["onClick"];function pt(e,t,n,r,a,i){var c=Object(x["A"])("meal-card"),o=Object(x["A"])("font-awesome-icon");return Object(x["s"])(),Object(x["f"])(x["a"],null,[Object(x["g"])("div",lt,[(Object(x["s"])(!0),Object(x["f"])(x["a"],null,Object(x["y"])(n.voteList,(function(t,n){return Object(x["s"])(),Object(x["f"])("div",{key:t.meal.recipe.id,class:"list-item"},[Object(x["g"])("div",ft,[Object(x["i"])(c,{meal:t.meal},null,8,["meal"])]),Object(x["g"])("div",bt,[Object(x["g"])("div",{onClick:function(t){return e.likeCard(n)},class:Object(x["o"])("button bg-green-500"+(t.score>0?" highlight":""))},[Object(x["i"])(o,{icon:"thumbs-up"})],10,dt),Object(x["g"])("div",{onClick:function(t){return e.dislikeCard(n)},class:Object(x["o"])("button bg-red-700"+(t.score<0?" highlight":""))},[Object(x["i"])(o,{icon:"thumbs-down"})],10,ht)])])})),128))],512),Object(x["g"])("div",{class:"my-5 bg-yellow-300 w-4/5 py-2 font-bold text-center cursor-pointer rounded select-none",onClick:t[0]||(t[0]=function(){return e.clickDone&&e.clickDone.apply(e,arguments)})},"Done")],64)}var Ot={id:"meal-box"},vt={id:"title"},mt={id:"image"},jt=["src"],yt=["href"];function gt(e,t,n,r,a,i){var c=this,o=Object(x["A"])("font-awesome-icon"),u=Object(x["A"])("FitText");return Object(x["s"])(),Object(x["f"])("div",Ot,[n.canClose?(Object(x["s"])(),Object(x["d"])(o,{key:0,class:"self-end cursor-pointer",icon:"times",onClick:t[0]||(t[0]=function(e){return c.$emit("closed")})})):Object(x["e"])("",!0),Object(x["g"])("div",vt,[Object(x["i"])(u,{max:36,min:12},{default:Object(x["G"])((function(){return[Object(x["h"])(Object(x["C"])(e.mealTitle),1)]})),_:1})]),Object(x["g"])("div",mt,[Object(x["g"])("img",{class:Object(x["o"])(e.imageLoading?"filter blur-md":""),src:e.mealImage,onLoad:t[1]||(t[1]=function(t){return e.imageLoading=!1})},null,42,jt)]),Object(x["g"])("a",{href:e.mealLink,target:"_blank"},"Go to site",8,yt)])}function wt(e,t,n,r,a,i){return Object(x["s"])(),Object(x["f"])("div",null,[Object(x["z"])(e.$slots,"default",{},void 0,!0)])}n("a9e3");var kt={props:{targetLineCount:{default:1,type:Number},min:{default:6,type:Number},max:{default:24,type:Number}},data:function(){return{observer:null}},methods:{calculate:function(){var e=this.$el,t=this.max,n=1;e.style.fontSize=t+"px";while((e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth)&&t>this.min)t-=n,e.style.fontSize=t+"px"}},mounted:function(){this.calculate(),"MutationObserver"in window&&null===this.observer&&(this.observer=new MutationObserver(this.calculate),this.observer.observe(this.$el,{subtree:!0,characterData:!0}))},beforeUnmount:function(){this.observer.disconnect()}};n("4932");const xt=S()(kt,[["render",wt],["__scopeId","data-v-42fc8dd0"]]);var Ct=xt,Rt={},Lt={name:"MealCard",components:{FitText:Ct},props:["meal","canClose"],watch:{meal:{handler:function(e,t){var n=this.meal;this.imageLoading=!0,null===n?(this.mealTitle="???",this.mealImage="#",this.mealLink="#"):(this.mealTitle=n.recipe.name,this.mealImage=n.recipe.image,this.mealLink=n.recipe.websiteURL)},immediate:!0}},methods:Rt,data:function(){return{mealTitle:"",mealImage:"",mealIngredients:"",imageLoading:!1}}};n("b1e5");const St=S()(Lt,[["render",gt],["__scopeId","data-v-5c0450e5"]]);var At=St,Tt={clickDone:function(){this.$emit("finished",this.voteList)},dislikeCard:function(e){var t=this.voteList[e];t.score=-1===t.score?0:-1},likeCard:function(e){var t=this.voteList[e];t.score=1===t.score?0:1}},Pt={name:"CardsSelect",props:["voteList"],emits:["finished"],components:{MealCard:At},watch:{voteList:function(){this.$refs.listContainer.scrollTop=0}},methods:Tt};n("cf72");const Et=S()(Pt,[["render",pt],["__scopeId","data-v-0dfac006"]]);var _t=Et,It={selectFinished:function(){this.$emit("finished",this.voteList)}},Dt={name:"SortingGame",props:["voteList","player"],emits:["finished"],components:{CardsSelect:_t},methods:It};n("ba76");const Ut=S()(Dt,[["render",st],["__scopeId","data-v-9b71e53c"]]);var Nt=Ut;function Mt(e,t){var n=function(e){return null===e||null!==e.match(/^\s*$/)},r=!n(t),a=function(e){return!r||void 0!==e.recipe.tags&&e.recipe.tags.some((function(e){return e.type.toLowerCase()===t}))};return e.filter((function(e){return a(e)}))}function Ft(e){return e.map((function(e){return{meal:e,score:0}}))}var qt={name:"Home",components:{PlayerSetup:ct,SortingGame:Nt,MealCard:At},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Fe.requestOverview();case 2:return n=t.sent,t.next=5,We.requestItems(n.id,n.productType.handle,new Date);case 5:r=t.sent,a=n.preset,e.meals=Mt(r.meals,a);case 8:case"end":return t.stop()}}),t)})))()},methods:{finishPlayerSetup:function(e){this.players=e,this.state++,this.globalVoteList=Ft(this.meals),this.setupGame(this.players[this.currentPlayerIndex=0])},setupGame:function(e){this.currentPlayer=e,this.currentVoteList=Ft(this.meals)},finishGame:function(e){var t=this;e.forEach((function(e){var n=t.globalVoteList.find((function(t){return t.meal===e.meal}));n.score+=e.score})),this.currentPlayerIndex++,this.currentPlayerIndex===this.players.length?(this.globalVoteList=this.globalVoteList.sort((function(e,t){var n=e.score,r=t.score;return n>r?-1:n<r?1:.5-Math.random()})).slice(0,4),this.state++,this.$refs.listContainer.scrollTop=0):this.setupGame(this.players[this.currentPlayerIndex])}},data:function(){return{receivedMeals:!1,state:1,players:[],currentPlayerIndex:0,meals:[],currentVoteList:null}}};n("6116");const Gt=S()(qt,[["render",_e],["__scopeId","data-v-ed992244"]]);var Wt=Gt,Bt={name:"login",path:"/login",component:Pe,meta:{requiresAuth:!1}},Ht=[{name:"home",path:"/",component:Wt,meta:{requiresAuth:!0}},Bt],Vt=P["a"]({history:P["b"](),routes:Ht}),$t=function(e,t){if(Object.prototype.hasOwnProperty.call(e,"meta"))return e.meta[t]};Vt.beforeEach((function(e,t,n){var r=!1!==$t(e,"requiresAuth");!r||je.hasBearerToken()?n():n(Bt)}));var zt=Vt,Jt=(n("b2ee"),n("346c"),n("b277"),n("ecee")),Yt=n("c074"),Qt=n("ad3d");Jt["c"].add(Yt["f"]),Jt["c"].add(Yt["e"]),Jt["c"].add(Yt["d"]),Jt["c"].add(Yt["a"]),Jt["c"].add(Yt["b"]),Jt["c"].add(Yt["c"]);var Kt=Qt["a"];n("ba8c");function Xt(){return Zt.apply(this,arguments)}function Zt(){return Zt=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return k.setLogLevel(k.DEBUG),k.registerTraceObject(w),je.defaultHeaders["Accept"]="application/json, text/plain, */*",je.defaultHeaders["Content-Type"]="application/json;charset=utf-8",e.prev=4,t="../external/MockData/MockRules",e.next=8,n("4fe4")(t).default();case 8:e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](4);case 12:case"end":return e.stop()}}),e,null,[[4,10]])}))),Zt.apply(this,arguments)}function en(){return tn.apply(this,arguments)}function tn(){return tn=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Xt();case 2:Object(x["c"])(T).use(zt).component("font-awesome-icon",Kt).mount("#app");case 3:case"end":return e.stop()}}),e)}))),tn.apply(this,arguments)}en()},6116:function(e,t,n){"use strict";n("eae1")},"7f51":function(e,t,n){},"80e8":function(e,t,n){},"8a7e":function(e,t){Date.prototype.getWeekNumber=function(){var e=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate())),t=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-t);var n=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-n)/864e5+1)/7)}},"8b1d":function(e,t,n){},"97c6":function(e,t,n){},b1e5:function(e,t,n){"use strict";n("7f51")},b277:function(e,t,n){},ba76:function(e,t,n){"use strict";n("4fac")},ba8c:function(e,t,n){},c9a2:function(e,t,n){"use strict";n("80e8")},cf72:function(e,t,n){"use strict";n("8b1d")},ddfa:function(e,t,n){n("4e82"),n("159b"),n("fb6a"),Array.prototype.sum=function(){for(var e=0,t=this.length,n=0;n<t;n++)e+=this[n];return e},Array.prototype.first=function(){return this[0]},Array.prototype.firstOrDefault=function(e){return this.length>0?this[0]:e},Array.prototype.last=function(){return this[this.length-1]},Array.prototype.lastOrDefault=function(e){return this.length>0?this[this.length-1]:e},Array.prototype.range=function(){var e=this.sort();return{min:e[0],max:e[this.length-1]}},Array.prototype.groupBy=function(e){var t={},n=function(e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=[]};return this.forEach((function(t){var r=e(t),a=n(r);a.push(t)})),t},Array.prototype.shuffle=function(){return this.sort((function(){return.5-Math.random()}))},Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.sampleSize=function(e){var t=this.shuffle();return t.slice(0,e)}},eae1:function(e,t,n){}});
//# sourceMappingURL=app.372efeef.js.map