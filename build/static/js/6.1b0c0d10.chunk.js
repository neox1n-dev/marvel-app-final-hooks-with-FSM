(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{34:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error"})}},35:function(e,t,c){"use strict";var a=c(39),r=c.n(a),n=c(40),s=c(32),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],a=t[1];return{request:Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),a("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){a("loading")}),[]),process:c,setProcess:a}}(),t=e.request,c=e.clearError,a=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=4c99d2861f7069bd64ba326558540525",h=function(){var e=Object(n.a)(r.a.mark((function e(){var c,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",m(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(){var c,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,t("".concat(l,"comics?limit=8&offset=").concat(c,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",f(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},f=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:c,process:a,setProcess:o,getAllCharacters:h,getCharacter:j,getCharacterByName:function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllComics:d,getComic:b}}},43:function(e,t,c){"use strict";c(45);var a=c(0),r=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})},n=c(13),s=c(34);t.a=function(e,t,c){switch(e){case"waiting":return Object(a.jsx)(r,{});case"loading":return Object(a.jsx)(n.a,{});case"confirmed":return Object(a.jsx)(t,{data:c});case"error":return Object(a.jsx)(s.a,{});default:throw new Error("Unexpected process state")}}},45:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},71:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(32),r=c(1),n=c(37),s=c(35),i=c(43),o=(c(62),c.p+"static/media/mjolnir.61f31e18.png"),l=c(0),u=function(e){var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:{objectFit:"cover"};return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",style:i,className:"randomchar__img"}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),c=t[0],n=t[1],h=Object(s.a)(),j=h.getCharacter,d=h.clearError,b=h.process,m=h.setProcess;Object(r.useEffect)((function(){p()}),[]);var f=function(e){n(e)},p=function(){d();var e=Math.floor(400*Math.random()+1011e3);j(e).then(f).then((function(){return m("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(b,u,c),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",children:Object(l.jsx)("div",{className:"inner",onClick:p,children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},j=c(42),d=c(13),b=c(34),m=c(85),f=c(86),p=(c(63),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],i=c[1],o=Object(r.useState)(!1),u=Object(a.a)(o,2),h=u[0],p=u[1],O=Object(r.useState)(210),v=Object(a.a)(O,2),x=v[0],_=v[1],g=Object(r.useState)(!1),N=Object(a.a)(g,2),k=N[0],w=N[1],y=Object(s.a)(),C=y.getAllCharacters,E=y.process,S=y.setProcess;Object(r.useEffect)((function(){F(x,!0)}),[]);var F=function(e,t){p(!t),C(e).then(M).then((function(){return S("confirmed")}))},P=Object(r.useRef)([]),T=function(e){P.current.forEach((function(e){e.classList.remove("char__item_selected")})),P.current[e].classList.add("char__item_selected"),P.current[e].focus()},M=function(e){var t=!1;e.length<9&&(t=!0),i((function(t){return[].concat(Object(j.a)(n),Object(j.a)(e))})),p((function(e){return!1})),_((function(e){return e+9})),w((function(e){return t}))};var q=Object(r.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(d.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(d.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(b.a,{});default:throw new Error("Unexpected process state")}}(E,(function(){return function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(l.jsx)(m.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return P.current[c]=e},onClick:function(a){e.onCharSelected(t.id),T(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),T(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(f.a,{component:null,children:c})})}(n)}),h)}),[E]);return Object(l.jsxs)("div",{className:"char__list",children:[q,Object(l.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:k?"none":"block"},onClick:function(){return F(x)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),O=(c(64),function(e){var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:{objectFit:"cover"};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.lenght>0?null:"There is no comics with this character",i.map((function(e,t){if(t<10)return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),v=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),n=c[0],o=c[1],u=Object(s.a)(),h=u.getCharacter,j=u.clearError,d=u.process,b=u.setProcess;Object(r.useEffect)((function(){f()}),[e.charId]);var m=function(e){o(e)},f=function(){var t=e.charId;t&&(j(),h(t).then(m).then((function(){return b("confirmed")})))};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(d,O,n)})},x=c(50),_=c(51),g=c(52),N=c(58),k=function(e){Object(g.a)(c,e);var t=Object(N.a)(c);function c(){var e;Object(x.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(_.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(b.a,{}):this.props.children}}]),c}(r.Component),w=c.p+"static/media/vision.067d4ae1.png",y=c(77),C=c(78),E=c(8),S=(c(71),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(s.a)(),o=i.getCharacterByName,u=i.clearError,h=i.process,j=i.setProcess,d=function(e){n(e)},m="error"===h?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(b.a,{})}):null,f=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(E.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(y.d,{initialValues:{charName:""},validationSchema:C.a({charName:C.b().required("This field is required")}),onSubmit:function(e){!function(e){u(),o(e).then(d).then((function(){return j("confirmed")}))}(e.charName)},children:Object(l.jsxs)(y.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(y.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===h,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(y.a,{component:"div",className:"char__search-error",name:"charName"})]})}),m,f]})});t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(p,{onCharSelected:function(e){s(e)}}),Object(l.jsxs)("div",{children:[Object(l.jsx)(k,{children:Object(l.jsx)(v,{charId:c})}),Object(l.jsx)(S,{})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:w,alt:"vision"})]})}}}]);
//# sourceMappingURL=6.1b0c0d10.chunk.js.map