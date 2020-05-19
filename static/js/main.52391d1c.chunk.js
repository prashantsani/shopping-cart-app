(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,n){e.exports=n(95)},65:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(34),i=n(13),o=n(2),l=n(22),s=n(40),m=n(3),u=n(4),p=n(6),b=n(5),h=n(35),f=n.n(h),d=n(16),v=n(17),g=(n(65),n(66),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(i.b,{to:"/cart",className:"inline-block cart-link ml-4"},r.a.createElement("sup",{className:"inline-block count"},this.props.CartLink),r.a.createElement(v.b,{color:"rgb(255,255,255)",size:"32",className:"inline-block"}))}}]),n}(a.Component)),E=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e;return this.props.cartLink&&(e=r.a.createElement(g,{cartNumber:this.props.cartNumber})),r.a.createElement("header",null,r.a.createElement("div",{className:"wrap flex flex-row flex-no-wrap items-center"},r.a.createElement(i.b,{to:"/shopping-cart-app/",className:"inline-block"},r.a.createElement(d.a,{color:"rgb(243,195,0)",size:"44"})),r.a.createElement("button",{className:"inline-block ml-auto bg-transparent"},r.a.createElement(v.a,{color:"rgb(255,255,255)",size:"28",className:"inline-block"})),e))}}]),n}(a.Component),y=(n(72),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"text-center text-white py-2"},"\xa9 copyright xyz"))}}]),n}(a.Component)),j=(n(73),n(74),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addToCart=function(){e.props.addToCart()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("li",{className:"shopping-item"},r.a.createElement("img",{alt:"",className:"shopping-item__img block",src:this.props.inventory.image}),r.a.createElement("h4",{className:"shopping-item__title font-weight-bold text-2xl mb-1"},this.props.inventory.name),r.a.createElement("p",{className:"mb-2"},r.a.createElement("span",{className:"inline-block shopping-item-mrp font-bold"},"\u20b9 ",this.props.inventory.price.actual),r.a.createElement("span",{className:"block flex justify-between flex-wrap"},r.a.createElement("span",{className:"inline-block font-bold selling-price line-through gray-100 text-sm"},this.props.inventory.price.display),r.a.createElement("span",{className:"inline-block text-green font-bold shopping-item-discount"},this.props.inventory.discount," % off"))),r.a.createElement("button",{className:"btn bg-orange border border-orange hover--text-orange hover--bg-transparent rounded-full m-auto font-bold py-2 block shopping-item__cta"},"Add to Cart"))}}]),n}(a.Component)),k=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"unstyled shopping-list grid grid-cols-1 md--grid-cols-2 lg--grid-cols-3 xl--grid-cols-5 gap-5"},this.props.storeInventory.map((function(t,n){return r.a.createElement(j,{addToCart:e.props.addToCart,key:n,id:t.id,inventory:t})})))}}]),n}(a.Component),x=(n(75),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).sortDiscount=function(){e.props.sortDiscount()},e.sortPriceAscending=function(){e.props.sortPriceAscending()},e.sortPriceDescending=function(){e.props.sortPriceDescending()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex"},r.a.createElement("h3",{className:"text-xl font-bold mr-5"},"Sort By"),r.a.createElement("button",{className:"mr-5 inline-block",onClick:this.sortPriceAscending},"Price High to Low"),r.a.createElement("button",{className:"mr-5 inline-block",onClick:this.sortPriceDescending},"Price Low to High"),r.a.createElement("button",{className:"mr-5 inline-block",onClick:this.sortDiscount},"Discount"))}}]),n}(a.Component)),O=n(37),N=n.n(O),C=(n(91),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e}),a.props.filterInventory(e.min,e.max)},a.componentDidUpdate=function(e,t){e.price.max!==a.props.price.max&&a.setState({value:{min:a.props.price.min,max:a.props.price.max}})},a.state={value:{min:a.props.price.min,max:a.props.price.max}},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(N.a,{maxValue:this.props.price.max,minValue:0,value:this.state.value,onChange:function(t){return e.handleChange(t)}})}}]),n}(a.Component));function I(e,t){var n=e.price.actual,a=t.price.actual,r=0;return n>a?r=1:n<a&&(r=-1),r}function w(e,t){var n=e.discount,a=t.discount,r=0;return n<a?r=1:n>a&&(r=-1),r}var P=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).sortDiscount=function(){var e=a.state.storeInventory.sort(w);a.setState({storeInventory:e})},a.sortPriceAscending=function(){var e=a.state.storeInventory.sort(I);a.setState({storeInventory:e})},a.sortPriceDescending=function(){var e=a.state.storeInventory.sort(I).reverse();a.setState({storeInventory:e})},a.addToCart=function(e,t){a.setState((function(n){return{cartItems:[].concat(Object(s.a)(n.cartItems),[{id:e,quantity:t}])}}))},a.filterInventory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=a.state.storeInventoryAll.filter((function(n){var a=n.price.actual;return a>e&&a<=t}));a.setState({storeInventory:n})},a.state={storeInventoryAll:[],storeInventory:[],price:{min:0,max:1},cartItems:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://prashantsani.github.io/shopping-cart-app/cart.json").then((function(t){for(var n=t.data.items,a=0,r=0;r<n.length;r++)n[r].price.actual>a&&(a=n[r].price.actual);e.setState((function(e){return{price:Object(l.a)(Object(l.a)({},e.price),{},{max:a}),storeInventoryAll:n,storeInventory:n}}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{cartLink:!0,cart:this.state.cartItems.length}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("h1",{className:"text-3xl"},"Welcome to ReactJS Store")),r.a.createElement("div",{className:"my-5 flex justify-between wrap"},r.a.createElement("div",{className:"filters"},r.a.createElement("h3",{className:"mb-4"},"Filters"),r.a.createElement(C,{filterInventory:this.filterInventory,price:this.state.price})),r.a.createElement("div",{className:"ml-5 pl-5"},r.a.createElement(x,{sortDiscount:this.sortDiscount,sortPriceAscending:this.sortPriceAscending,sortPriceDescending:this.sortPriceDescending}),r.a.createElement(k,{addToCart:this.addToCart,storeInventory:this.state.storeInventory})))),r.a.createElement(y,null))}}]),n}(r.a.Component),D=n(38),A=n(39),S=n(41),_=n(42),z=(n(92),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("li",{className:"shopping-item flex cart-item"},r.a.createElement("img",{src:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",alt:"",className:"shopping-item__img block"}),r.a.createElement("div",{className:"ml-4"},r.a.createElement("h4",{className:"shopping-item__title font-weight-bold text-2xl mb-1"},"Item"),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("p",{className:"mb-2"},r.a.createElement("span",{className:"inline-block shopping-item-mrp font-bold"},"\u20b9319"),r.a.createElement("span",{className:"inline-block flex justify-between flex-wrap"},r.a.createElement("span",{className:"inline-block font-bold selling-price line-through gray-100 text-sm"},"900"),r.a.createElement("span",{className:"inline-block text-green font-bold shopping-item-discount"},"64% off"))))))}}]),n}(a.Component)),L=function(e){Object(_.a)(n,e);var t=Object(S.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{cartLink:!1}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("h3",{className:"text-3xl"},"Cart"),r.a.createElement("ul",{className:"unstyled cart-list"},r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null)))),r.a.createElement(y,null))}}]),n}(r.a.Component),T=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{cartLink:!0}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("h2",null,"Page Not Found"),r.a.createElement(i.b,{to:"/"},"Return to Home Page"))),r.a.createElement(y,null))}}]),n}(a.Component),F=function(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:P}),r.a.createElement(o.a,{exact:!0,path:"/shopping-cart-app/",component:P}),r.a.createElement(o.a,{exact:!0,path:"/store",component:P}),r.a.createElement(o.a,{exact:!0,path:"/cart",component:L}),r.a.createElement(o.a,{component:T})))};n(93),n(94);Object(c.render)(r.a.createElement(F,null),document.querySelector("#main"))}},[[43,1,2]]]);
//# sourceMappingURL=main.52391d1c.chunk.js.map