(this["webpackJsonpsuspicious-ip"]=this["webpackJsonpsuspicious-ip"]||[]).push([[0],{33:function(e,c,s){},34:function(e,c,s){},35:function(e,c,s){},36:function(e,c,s){},45:function(e,c,s){},46:function(e,c,s){},47:function(e,c,s){},48:function(e,c,s){},50:function(e,c,s){},51:function(e,c,s){},52:function(e,c,s){},53:function(e,c,s){},54:function(e,c,s){},55:function(e,c,s){},58:function(e,c,s){},59:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s(21),n=s.n(a),i=(s(33),s(34),s(3)),r=(s(35),s(36),s(9)),j=s(0);var l=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.b,{className:"go-home",to:"/suspicious-ip",children:Object(j.jsx)("p",{className:"nav-buttons",children:"Home"})}),Object(j.jsx)(r.b,{className:"go-local-ip",to:"local-ip",children:Object(j.jsx)("p",{className:"nav-buttons",children:"Local IP"})}),Object(j.jsx)(r.b,{className:"go-search-ip",to:"/searched-ip",children:Object(j.jsx)("p",{className:"nav-buttons",children:"Search IP"})}),Object(j.jsx)(r.b,{className:"go-saved-ips",to:"/saved-ip",children:Object(j.jsx)("p",{className:"nav-buttons",children:"Saved IPs"})})]})};var o=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Suspicious IP"}),Object(j.jsx)(l,{})]})};s(45);var d=function(){return Object(j.jsxs)("div",{className:"home-view",children:[Object(j.jsx)("h2",{className:"home-header",children:"Welcome !"}),Object(j.jsx)("p",{className:"about-text",children:"This app will allow you to generate a report with information from a local or unidentified IP Addresses in your network, with the opportunity to save those reports inside of the app."}),Object(j.jsxs)("p",{className:"about-text",children:["This app is using",Object(j.jsx)("a",{href:"https://ipapi.co/api/#introduction",target:"_blank",children:" ipapi "})," API "]})]})},b=s(8),u=(s(46),s(47),s(48),function(){return Object(j.jsx)("h2",{className:"loading",children:"Loading..."})}),x=function(e){var c=e.ip,s=e.saveToStorage;return c?Object(j.jsxs)("div",{className:"single-card",children:[Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-code-branch"})," ",Object(j.jsx)("b",{children:"IP:"})," ",Object(j.jsx)("i",{children:c.ip})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-atlas"})," ",Object(j.jsx)("b",{children:"Version:"})," ",Object(j.jsx)("i",{children:c.version})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-globe-americas"})," ",Object(j.jsx)("b",{children:"Country Name:"})," ",Object(j.jsx)("i",{children:c.country_name})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-code"})," ",Object(j.jsx)("b",{children:"Country Code:"})," ",Object(j.jsx)("i",{children:c.country_code})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-map-signs"})," ",Object(j.jsx)("b",{children:"Country Capital:"})," ",Object(j.jsx)("i",{children:c.country_capital})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-code"})," ",Object(j.jsx)("b",{children:"Country Calling Code:"})," ",Object(j.jsx)("i",{children:c.country_calling_code})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-map-pin"})," ",Object(j.jsx)("b",{children:"Country Area:"})," ",Object(j.jsx)("i",{children:c.country_area})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-user-friends"})," ",Object(j.jsx)("b",{children:"Country Population:"})," ",Object(j.jsx)("i",{children:c.country_population})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fab fa-font-awesome-flag"})," ",Object(j.jsx)("b",{children:"City:"})," ",Object(j.jsx)("i",{children:c.city})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-map-marked"})," ",Object(j.jsx)("b",{children:"Region:"})," ",Object(j.jsx)("i",{children:c.region})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-mail-bulk"})," ",Object(j.jsx)("b",{children:"Postal:"})," ",Object(j.jsx)("i",{children:c.postal})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-sort-numeric-up"})," ",Object(j.jsx)("b",{children:"Latitude:"})," ",Object(j.jsx)("i",{children:c.latitude})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-sort-numeric-down-alt"})," ",Object(j.jsx)("b",{children:"Longitude:"})," ",Object(j.jsx)("i",{children:c.longitude})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-hourglass-half"})," ",Object(j.jsx)("b",{children:"Timezone:"})," ",Object(j.jsx)("i",{children:c.timezone})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-money-check-alt"})," ",Object(j.jsx)("b",{children:"Currency:"})," ",Object(j.jsx)("i",{children:c.currency_name})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-language"})," ",Object(j.jsx)("b",{children:"Languages:"})," ",Object(j.jsx)("i",{children:c.languages})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-barcode"})," ",Object(j.jsx)("b",{children:"ASN:"})," ",Object(j.jsx)("i",{children:c.asn})]}),Object(j.jsxs)("p",{className:"ip-card-text",children:[Object(j.jsx)("i",{class:"fas fa-sitemap"})," ",Object(j.jsx)("b",{children:"Organization:"})," ",Object(j.jsx)("i",{children:c.org})]}),Object(j.jsxs)("button",{className:"saved-button",onClick:s,children:["Save ",Object(j.jsx)("i",{class:"fas fa-hdd"})]})]}):Object(j.jsx)(u,{})},O=s(12),p=s.n(O),h=s(14),f=function(){var e=Object(h.a)(p.a.mark((function e(){var c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ipapi.co/json/");case 3:if((c=e.sent).ok&&500!==c.status){e.next=6;break}throw Error("Error fetching local IP Info");case 6:return e.next=8,c.json();case 8:return s=e.sent,e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(p.a.mark((function e(c){var s,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ipapi.co/".concat(c,"/json/"));case 3:if((s=e.sent).ok&&500!==s.status){e.next=6;break}throw Error("Error fetching local IP Info");case 6:return e.next=8,s.json();case 8:return t=e.sent,e.abrupt("return",t);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(c){return e.apply(this,arguments)}}(),N=function(){var e=Object(t.useState)({}),c=Object(b.a)(e,2),s=c[0],a=c[1];Object(t.useEffect)((function(){n()}),[]);var n=function(){return f().then((function(e){return a(e)}))};return Object(j.jsx)("div",{className:"ip-card-info",children:Object(j.jsx)(x,{ip:s,saveToStorage:function(){localStorage.setItem(s.ip,JSON.stringify(s))}})})},g=(s(50),s(51),s(52),function(e){var c=e.field,s=e.ipField,t=e.ipAddress,a=e.saveToStorage;return c?Object(j.jsxs)("div",{className:"single-card-field",children:[Object(j.jsx)("h2",{className:"header-field",children:"IP Field Requested:"}),Object(j.jsxs)("h3",{children:[c,":"]}),Object(j.jsx)("h4",{children:s}),Object(j.jsxs)("h4",{children:["IP #: ",t]}),Object(j.jsxs)("button",{className:"saved-button-field",onClick:a,children:["Save ",Object(j.jsx)("i",{class:"fas fa-hdd"})]})]}):Object(j.jsx)(u,{})}),v=function(e){var c=e.ip,s=e.ipField,t=e.ipAddress,a=e.saveToStorage;return"all"===s?Object(j.jsx)("div",{className:"ip-card-info",children:Object(j.jsx)(x,{ip:c,saveToStorage:a})}):Object(j.jsx)(g,{field:s,ipField:c[s],ipAddress:t,saveToStorage:a})},y=(s(53),function(e){var c=e.getRequestedIpInfo,s=Object(t.useState)(""),a=Object(b.a)(s,2),n=a[0],i=a[1],r=Object(t.useState)(""),l=Object(b.a)(r,2),o=l[0],d=l[1],u=function(){i(""),d("")};return Object(j.jsxs)("form",{className:"ip-form-component",children:[Object(j.jsx)("input",{type:"text",placeholder:"IP Address",name:"ipAddress",value:n,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("select",{onChange:function(e){return d(e.target.value)},children:[{Name:"Select a field",Value:""},{Name:"All",Value:"all"},{Name:"Ip",Value:"ip"},{Name:"Version",Value:"version"},{Name:"City",Value:"city"},{Name:"Region",Value:"region"},{Name:"Country Name",Value:"country_name"},{Name:"Country Code",Value:"country_code"},{Name:"Country Capital",Value:"country_capital"},{Name:"Country Calling Code",Value:"country_calling_code"},{Name:"Country Area",Value:"country_area"},{Name:"Country Population",Vlaue:"country_population"},{Name:"Country Postal",Value:"postal"},{Name:"Latitude",Value:"latitude"},{Name:"Longitude",Value:"longitude"},{Name:"Timezone",Value:"timezone"},{Name:"Currency",Value:"currency_name"},{Name:"Languages",Values:"languages"},{Name:"ASN",Value:"asn"},{Name:"Organization",Value:"org"}].map((function(e){return Object(j.jsx)("option",{value:e.Value,children:e.Name})}))}),Object(j.jsxs)("button",{onClick:function(e){e.preventDefault(),c(n,o),u()},children:["Search ",Object(j.jsx)("i",{class:"fas fa-search"})]}),Object(j.jsx)("p",{className:"form-text",children:"Type an IP Address and select a filter field."})]})}),C=function(){var e=Object(t.useState)({}),c=Object(b.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)(""),i=Object(b.a)(n,2),r=i[0],l=i[1],o=Object(t.useState)(""),d=Object(b.a)(o,2),u=d[0],x=d[1],O=Object(t.useState)(!1),p=Object(b.a)(O,2);p[0],p[1];return Object(j.jsxs)("div",{className:"ipInfo",children:[Object(j.jsx)(y,{getRequestedIpInfo:function(e,c){return m(e).then((function(e){return a(e)})).then(x(c)).then(l(e)).then((function(e){return console.log(e)}))}}),r&&Object(j.jsx)(v,{ip:s,ipField:u,ipAddress:r,saveToStorage:function(){localStorage.setItem(s.ip,JSON.stringify(s))}},r+Date.now())]})},S=(s(54),s(55),function(e){var c=e.ip,s=e.deleteFromStorage;return c?Object(j.jsxs)("div",{className:"single-saved-card",children:[Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-code-branch"})," ",Object(j.jsx)("b",{children:"IP:"})," ",Object(j.jsx)("i",{children:c.ip?c.ip:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-atlas"})," ",Object(j.jsx)("b",{children:"Version:"})," ",Object(j.jsx)("i",{children:c.version?c.version:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-globe-americas"})," ",Object(j.jsx)("b",{children:"Country Name:"})," ",Object(j.jsx)("i",{children:c.country_name?c.country_name:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-code"})," ",Object(j.jsx)("b",{children:"Country Code:"})," ",Object(j.jsx)("i",{children:c.country_code?c.country_code:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-map-signs"})," ",Object(j.jsx)("b",{children:"Country Capital:"})," ",Object(j.jsx)("i",{children:c.country_capital?c.country_capital:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-code"})," ",Object(j.jsx)("b",{children:"Country Calling Code:"})," ",Object(j.jsx)("i",{children:c.country_calling_code?c.country_calling_code:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-map-pin"})," ",Object(j.jsx)("b",{children:"Country Area:"})," ",Object(j.jsx)("i",{children:c.country_area?c.country_area:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-user-friends"})," ",Object(j.jsx)("b",{children:"Country Population:"})," ",Object(j.jsx)("i",{children:c.country_population?c.country_population:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fab fa-font-awesome-flag"})," ",Object(j.jsx)("b",{children:"City:"})," ",Object(j.jsx)("i",{children:c.city?c.city:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-map-marked"})," ",Object(j.jsx)("b",{children:"Region:"})," ",Object(j.jsx)("i",{children:c.region?c.region:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-mail-bulk"})," ",Object(j.jsx)("b",{children:"Postal:"})," ",Object(j.jsx)("i",{children:c.postal?c.postal:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-sort-numeric-up"})," ",Object(j.jsx)("b",{children:"Latitude:"})," ",Object(j.jsx)("i",{children:c.latitude?c.latitude:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-sort-numeric-down-alt"})," ",Object(j.jsx)("b",{children:"Longitude:"})," ",Object(j.jsx)("i",{children:c.longitude?c.longitude:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-hourglass-half"})," ",Object(j.jsx)("b",{children:"Timezone:"})," ",Object(j.jsx)("i",{children:c.timezone?c.timezone:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-money-check-alt"})," ",Object(j.jsx)("b",{children:"Currency:"})," ",Object(j.jsx)("i",{children:c.currency_name?c.currency_name:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-language"})," ",Object(j.jsx)("b",{children:"Languages:"})," ",Object(j.jsx)("i",{children:c.languages?c.languages:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-barcode"})," ",Object(j.jsx)("b",{children:"ASN:"})," ",Object(j.jsx)("i",{children:c.asn?c.asn:"No info requested"})]}),Object(j.jsxs)("p",{className:"ip-saved-card-text",children:[Object(j.jsx)("i",{class:"fas fa-sitemap"})," ",Object(j.jsx)("b",{children:"Organization:"})," ",Object(j.jsx)("i",{children:c.org?c.org:"No info requested"})]}),Object(j.jsxs)("button",{className:"delete-button",onClick:function(){s(c.ip)},children:[Object(j.jsx)("i",{class:"fas fa-trash-alt"})," Remove"]})]}):Object(j.jsx)(u,{})}),_=s(28),I=function(){var e=Object(t.useState)([]),c=Object(b.a)(e,2),s=c[0],a=c[1];Object(t.useEffect)((function(){n()}),[]);var n=function(){var e=Object.keys(localStorage).map((function(e){return JSON.parse(localStorage.getItem(e))}));a(e),r(s)},i=function(e){localStorage.removeItem(e),n()},r=function(e){var c=e.map((function(e){return Object(j.jsx)(S,{ip:e,deleteFromStorage:i},e.ip)}));return Object(j.jsx)(_.a,{children:c})};return Object(j.jsx)("div",{className:"saved-cards-container",children:s?r(s):Object(j.jsx)("p",{className:"no-saved-cards",children:"No saved IPs so far !"})})},k=(s(58),function(){return Object(j.jsx)("div",{className:"error",children:Object(j.jsx)(r.b,{to:"/suspicious-ip",children:Object(j.jsx)("img",{className:"error-img",src:"https://img.freepik.com/free-vector/404-error-page-found-lamp-broken-background_114341-57.jpg?size=626&ext=jpg",alt:"404-img"})})})});var V=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsx)("main",{className:"main-section",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/suspicious-ip",render:function(){return Object(j.jsx)(d,{})}}),Object(j.jsx)(i.a,{exact:!0,path:"/local-ip",render:function(){return Object(j.jsx)(N,{})}}),Object(j.jsx)(i.a,{exact:!0,path:"/searched-ip",render:function(){return Object(j.jsx)(C,{})}}),Object(j.jsx)(i.a,{exact:!0,path:"/saved-ip",render:function(){return Object(j.jsx)(I,{})}}),Object(j.jsx)(i.a,{path:"*",render:function(){return Object(j.jsx)(k,{})}})]})})]})},q=Object(j.jsxs)(r.a,{children:[" ",Object(j.jsx)(V,{})," "]});n.a.render(q,document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.00e1671f.chunk.js.map