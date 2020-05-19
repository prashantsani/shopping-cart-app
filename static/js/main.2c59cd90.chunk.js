(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a(95)},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(34),i=a(13),l=a(2),o=a(22),s=a(40),m=a(3),u=a(4),p=a(6),b=a(5),d=a(35),h=a.n(d),f=a(16),g=a(17),E=(a(65),a(66),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(i.b,{to:"/cart",className:"inline-block cart-link ml-4"},r.a.createElement("sup",{className:"inline-block count"},this.props.CartLink),r.a.createElement(g.b,{color:"rgb(255,255,255)",size:"32",className:"inline-block"}))}}]),a}(n.Component)),v=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e;return this.props.cartLink&&(e=r.a.createElement(E,{cartNumber:this.props.cartNumber})),r.a.createElement("header",null,r.a.createElement("div",{className:"wrap flex flex-row flex-no-wrap items-center"},r.a.createElement(i.b,{to:"/shopping-cart-app/",className:"inline-block"},r.a.createElement(f.a,{color:"rgb(243,195,0)",size:"44"})),r.a.createElement("button",{className:"inline-block ml-auto bg-transparent"},r.a.createElement(g.a,{color:"rgb(255,255,255)",size:"28",className:"inline-block"})),e))}}]),a}(n.Component),j=(a(72),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"text-center text-white py-2"},"\xa9 copyright xyz"))}}]),a}(n.Component)),y=(a(73),a(74),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addToCart=function(){e.props.addToCart()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"shopping-item"},r.a.createElement("img",{alt:"",className:"shopping-item__img block",src:this.props.product.image}),r.a.createElement("h4",{className:"shopping-item__title font-weight-bold text-2xl mb-1"},this.props.product.name),r.a.createElement("p",{className:"mb-2"},r.a.createElement("span",{className:"inline-block shopping-item-mrp font-bold"},"\u20b9 ",this.props.product.price.actual),r.a.createElement("span",{className:"block flex justify-between flex-wrap"},r.a.createElement("span",{className:"inline-block font-bold selling-price line-through gray-100 text-sm"},this.props.product.price.display),r.a.createElement("span",{className:"inline-block text-green font-bold shopping-item-discount"},this.props.product.discount," % off"))),r.a.createElement("button",{className:"btn bg-orange border border-orange hover--text-orange hover--bg-transparent rounded-full m-auto font-bold py-2 block shopping-item__cta"},"Add to Cart"))}}]),a}(n.Component)),k=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"unstyled shopping-list grid grid-cols-1 md--grid-cols-2 lg--grid-cols-3 xl--grid-cols-5 gap-5"},this.props.products.map((function(t,a){return r.a.createElement(y,{addToCart:e.props.addToCart,key:a,id:t.id,product:t})})))}}]),a}(n.Component),x=(a(75),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).sortDiscount=function(){e.props.sortDiscount()},e.sortPriceAscending=function(){e.props.sortPriceAscending()},e.sortPriceDescending=function(){e.props.sortPriceDescending()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex"},r.a.createElement("h3",{className:"text-xl font-bold mr-5"},"Sort By"),r.a.createElement("button",{className:"mr-5 inline-block",onClick:this.sortPriceAscending},"Price High to Low"),r.a.createElement("button",{className:"mr-5 inline-block",onClick:this.sortPriceDescending},"Price Low to High"),r.a.createElement("button",{className:"mr-5 inline-block",onClick:this.sortDiscount},"Discount"))}}]),a}(n.Component)),O=a(37),N=a.n(O),C=(a(91),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({value:e}),n.props.filterInventory(e.min,e.max)},n.componentDidUpdate=function(e,t){e.price.max!==n.props.price.max&&n.setState({value:{min:n.props.price.min,max:n.props.price.max}})},n.state={value:{min:n.props.price.min,max:n.props.price.max}},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(N.a,{maxValue:this.props.price.max,minValue:0,value:this.state.value,onChange:function(t){return e.handleChange(t)}})}}]),a}(n.Component));function w(e,t){var a=e.price.actual,n=t.price.actual,r=0;return a>n?r=1:a<n&&(r=-1),r}function P(e,t){var a=e.discount,n=t.discount,r=0;return a<n?r=1:a>n&&(r=-1),r}var D=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).sortDiscount=function(){var e=n.state.products.sort(P);n.setState({products:e})},n.sortPriceAscending=function(){var e=n.state.products.sort(w);n.setState({products:e})},n.sortPriceDescending=function(){var e=n.state.products.sort(w).reverse();n.setState({products:e})},n.addToCart=function(e,t){n.setState((function(a){return{cartItems:[].concat(Object(s.a)(a.cartItems),[{id:e,quantity:t}])}}))},n.filterInventory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=n.state.inventory.filter((function(a){var n=a.price.actual;return n>e&&n<=t}));n.setState({products:a})},n.state={inventory:[],products:[],price:{min:0,max:1},cartItems:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://prashantsani.github.io/shopping-cart-app/cart.json").then((function(t){for(var a=t.data.items,n=0,r=0;r<a.length;r++)a[r].price.actual>n&&(n=a[r].price.actual);e.setState((function(e){return{price:Object(o.a)(Object(o.a)({},e.price),{},{max:n}),inventory:a,products:a}}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{cartLink:!0,cart:this.state.cartItems.length}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("h1",{className:"text-3xl"},"Welcome to ReactJS Store")),r.a.createElement("div",{className:"my-5 flex justify-between wrap"},r.a.createElement("div",{className:"filters"},r.a.createElement("h3",{className:"mb-4"},"Filters"),r.a.createElement(C,{filterInventory:this.filterInventory,price:this.state.price})),r.a.createElement("div",{className:"ml-5 pl-5"},r.a.createElement(x,{sortDiscount:this.sortDiscount,sortPriceAscending:this.sortPriceAscending,sortPriceDescending:this.sortPriceDescending}),r.a.createElement(k,{addToCart:this.addToCart,products:this.state.products})))),r.a.createElement(j,null))}}]),a}(r.a.Component),S=a(38),_=a(39),A=a(41),I=a(42),z=(a(92),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"shopping-item flex cart-item"},r.a.createElement("img",{src:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",alt:"",className:"shopping-item__img block"}),r.a.createElement("div",{className:"ml-4"},r.a.createElement("h4",{className:"shopping-item__title font-weight-bold text-2xl mb-1"},"Item"),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("p",{className:"mb-2"},r.a.createElement("span",{className:"inline-block shopping-item-mrp font-bold"},"\u20b9319"),r.a.createElement("span",{className:"inline-block flex justify-between flex-wrap"},r.a.createElement("span",{className:"inline-block font-bold selling-price line-through gray-100 text-sm"},"900"),r.a.createElement("span",{className:"inline-block text-green font-bold shopping-item-discount"},"64% off"))))))}}]),a}(n.Component)),L=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{cartLink:!1}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("h3",{className:"text-3xl"},"Cart"),r.a.createElement("ul",{className:"unstyled cart-list"},r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null)))),r.a.createElement(j,null))}}]),a}(r.a.Component),T=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{cartLink:!0}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("h2",null,"Page Not Found"),r.a.createElement(i.b,{to:"/"},"Return to Home Page"))),r.a.createElement(j,null))}}]),a}(n.Component),F=function(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:D}),r.a.createElement(l.a,{exact:!0,path:"/shopping-cart-app/",component:D}),r.a.createElement(l.a,{exact:!0,path:"/store",component:D}),r.a.createElement(l.a,{exact:!0,path:"/cart",component:L}),r.a.createElement(l.a,{component:T})))};a(93),a(94);Object(c.render)(r.a.createElement(F,null),document.querySelector("#main"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2c59cd90.chunk.js.map