(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(14),c=e(12),o=Object(c.a)([function(n){return n.content}],function(n){return n.data}),l=Object(c.a)([o],function(n){return n?n.items:[]}),u=(Object(c.a)([o],function(n){return n?Object.keys(n).map(function(t){return n[t]}):[]}),e(33)),s=e(7),f=e(5);function d(){var n=Object(s.a)(["\n  margin-bottom: 2rem;\n"]);return d=function(){return n},n}function m(){var n=Object(s.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]);return m=function(){return n},n}function p(){var n=Object(s.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: ","\n"]);return p=function(){return n},n}function b(){var n=Object(s.a)(["\n         height: 90px;\n         padding: 0 25px;\n         display: flex;\n         flex-direction: column;\n         align-items: center;\n         justify-content: center;\n         border: 1px solid black;\n         background-color: ",";\n         opacity: 0.7;\n         position: absolute;\n       "]);return b=function(){return n},n}function g(){var n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"]);return g=function(){return n},n}function h(){var n=Object(s.a)(["\n\theight: ",";\n\tmin-width: 30%;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid black;\n\tmargin: 0 7.5px 15px;\n\toverflow: hidden;\n\n\t&:hover {\n\t\tcursor: pointer;\n\n\t\t& .background-image {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n\t\t}\n\n\t\t& .content {\n\t\t\topacity: 0.9;\n\t\t}\n\t}\n\n\t&:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"]);return h=function(){return n},n}f.d.div(h(),function(n){return n.size?"380px":"240px"}).displayName="MenuItemContainer",f.d.div(g(),function(n){var t=n.imageUrl;return"url(".concat(t,")")}).displayName="BackgroundImageContainer";f.d.div(b(),function(n){return n.theme.background}),f.d.span(p(),function(n){return n.theme.foreground}),f.d.span(m());var v=f.d.article(d()),x=function(n){var t=n.post;return console.log("Post property in article-item.js is:",t),a.a.createElement(v,null,a.a.createElement("div",{className:"no-gutter"},a.a.createElement("h2",null,a.a.createElement(u.b,{to:"articles/".concat(t.fields.slug)},t.fields.title)),a.a.createElement("img",{src:t.fields.featuredImage.fields.file.url+"?w=400&h=300",alt:t.fields.featuredImage.fields.file.fileName}),a.a.createElement("p",null,t.fields.content),a.a.createElement("p",{className:"contentful"},a.a.createElement("img",{src:t.fields.author.fields.avatar.fields.file.url+"?w=50&h=50",alt:t.fields.author.fields.fullName}),a.a.createElement("a",null,t.fields.author.fields.fullName),a.a.createElement("i",{className:"link-spacer"}),a.a.createElement("time",{className:"post-date",dateTime:"2015-05-05"},t.fields.publishDate))))};function j(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return j=function(){return n},n}var w=f.d.div(j()),O=Object(c.b)({data:o,posts:l}),k=Object(i.b)(O)(function(n){var t=n.posts,e=n.data;return console.log("data is ...",e),console.log("posts are ...",t),a.a.createElement(w,null,t.map(function(n,t){return console.log("hello #",t)}),t.map(function(n,t){return a.a.createElement(x,{id:t,post:n})}))}),y=e(43),E=Object(c.a)([function(n){return n.directory}],function(n){return n.sections}),N=e(36);function z(){var n=Object(s.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]);return z=function(){return n},n}function C(){var n=Object(s.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: ","\n"]);return C=function(){return n},n}function I(){var n=Object(s.a)(["\n         height: 90px;\n         padding: 0 25px;\n         display: flex;\n         flex-direction: column;\n         align-items: center;\n         justify-content: center;\n         border: 1px solid black;\n         background-color: ",";\n         opacity: 0.7;\n         position: absolute;\n       "]);return I=function(){return n},n}function U(){var n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"]);return U=function(){return n},n}function B(){var n=Object(s.a)(["\n\theight: ",";\n\tmin-width: 30%;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid black;\n\tmargin: 0 7.5px 15px;\n\toverflow: hidden;\n\n\t&:hover {\n\t\tcursor: pointer;\n\n\t\t& .background-image {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n\t\t}\n\n\t\t& .content {\n\t\t\topacity: 0.9;\n\t\t}\n\t}\n\n\t&:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"]);return B=function(){return n},n}var D=f.d.div(B(),function(n){return n.size?"380px":"240px"});D.displayName="MenuItemContainer";var J=f.d.div(U(),function(n){var t=n.imageUrl;return"url(".concat(t,")")});J.displayName="BackgroundImageContainer";var M=f.d.div(I(),function(n){return n.theme.background}),S=f.d.span(C(),function(n){return n.theme.foreground}),W=f.d.span(z()),A=Object(N.f)(function(n){var t=n.title,e=n.imageUrl,r=n.size,i=n.history,c=n.linkUrl,o=n.match;n.routeName;return a.a.createElement(D,{size:r,onClick:function(){return i.push("".concat(o.url).concat(c))}},a.a.createElement(J,{className:"background-image",imageUrl:e}),a.a.createElement(M,{className:"content"},a.a.createElement(S,null,t.toUpperCase()),a.a.createElement(W,null,"visit our ",t," section ")))});function H(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return H=function(){return n},n}var K=f.d.div(H()),P=Object(c.b)({sections:E}),Q=Object(i.b)(P)(function(n){var t=n.sections;return a.a.createElement(K,null,t.map(function(n){var t=n.id,e=Object(y.a)(n,["id"]);return a.a.createElement(A,Object.assign({key:t},e))}))}),R=e(68);function T(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return T=function(){return n},n}var q=f.d.div(T());t.default=Object(i.b)(null,function(n){return{fetchContentStart:function(){return n(Object(R.b)())}}})(function(n){var t=n.fetchContentStart;return Object(r.useEffect)(function(){t()},[t]),a.a.createElement(q,null,a.a.createElement(Q,null),a.a.createElement(k,null),a.a.createElement("iframe",{src:"https://pasteapp.com/p/KlvWDQenHd2/embed?view=2Rn8cAnnmcW",width:"480",height:"480",scrolling:"no",frameborder:"0",allowfullscreen:!0}))})}}]);
//# sourceMappingURL=9.fc672da3.chunk.js.map