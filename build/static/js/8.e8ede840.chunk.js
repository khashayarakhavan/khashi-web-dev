(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(14),c=t(12),l=t(18),u=t(7),o=t(5);function d(){var n=Object(u.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]);return d=function(){return n},n}function m(){var n=Object(u.a)(["\n  display: flex;\n\n  span {\n    margin: 0 10px;\n  }\n\n  div {\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 23%;\n\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(u.a)(["\n  width: 23%;\n  padding-right: 15px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]);return f=function(){return n},n}var h=o.d.div(f()),v=o.d.div(s()),b=o.d.span(p()),g=Object(o.d)(b)(m());g.displayName="QuantityContainer";var x=o.d.div(d());x.displayName="RemoveButtonContainer";var E=Object(i.b)(null,function(n){return{clearItem:function(e){return n(Object(l.c)(e))},addItem:function(e){return n(Object(l.a)(e))},removeItem:function(e){return n(Object(l.d)(e))}}})(function(n){var e=n.cartItem,t=n.clearItem,a=n.addItem,i=n.removeItem,c=e.name,l=e.imageUrl,u=e.price,o=e.quantity;return r.a.createElement(h,null,r.a.createElement(v,null,r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement(b,null,c),r.a.createElement(g,null,r.a.createElement("div",{onClick:function(){return i(e)}},"\u276e"),r.a.createElement("span",null,o),r.a.createElement("div",{onClick:function(){return a(e)}},"\u276f")),r.a.createElement(b,null,u),r.a.createElement(x,{onClick:function(){return t(e)}},"\u2715"))}),w=t(345),y=t.n(w),j=t(346),O=t.n(j),k=function(n){var e=n.price,t=100*e;return r.a.createElement(y.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(e),amount:t,panelLabel:"Pay Now",token:function(n){O()({url:"payment",method:"post",data:{amount:t,token:n}}).then(function(n){alert("succesful payment")}).catch(function(n){console.log("Payment Error: ",n),alert("There was an issue with your payment! Please make sure you use the provided credit card.")})},stripeKey:"pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H"})},C=t(32);function I(){var n=Object(u.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]);return I=function(){return n},n}function P(){var n=Object(u.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]);return P=function(){return n},n}function z(){var n=Object(u.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 22%\n\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]);return z=function(){return n},n}function N(){var n=Object(u.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return N=function(){return n},n}function A(){var n=Object(u.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]);return A=function(){return n},n}var L=o.d.div(A()),Q=o.d.div(N()),R=o.d.div(z()),T=o.d.div(P()),q=o.d.div(I());t.d(e,"CheckoutPage",function(){return B});var B=function(n){var e=n.cartItems,t=n.total;return r.a.createElement(L,null,r.a.createElement(Q,null,r.a.createElement(R,null,r.a.createElement("span",null,"Product")),r.a.createElement(R,null,r.a.createElement("span",null,"Description")),r.a.createElement(R,null,r.a.createElement("span",null,"Quantity")),r.a.createElement(R,null,r.a.createElement("span",null,"Price")),r.a.createElement(R,null,r.a.createElement("span",null,"Remove"))),e.map(function(n){return r.a.createElement(E,{key:n.id,cartItem:n})}),r.a.createElement(T,null,"TOTAL: $",t),r.a.createElement(q,null,"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(k,{price:t}))},J=Object(c.b)({cartItems:C.b,total:C.d});e.default=Object(i.b)(J)(B)}}]);
//# sourceMappingURL=8.e8ede840.chunk.js.map