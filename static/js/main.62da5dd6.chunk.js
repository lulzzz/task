(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[function(t,n,e){t.exports=e.p+"static/media/check-icon.cc4bfc9f.svg"},function(t,n,e){t.exports=e(11)},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){var i={"./1/overview.json":[12,0],"./2/overview.json":[13,1],"./3/overview.json":[14,2],"./4/overview.json":[15,3],"./5/overview.json":[16,4]};function r(t){var n=i[t];return n?e.e(n[1]).then(function(){var t=n[0];return e.t(t,3)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(i)},r.id=10,t.exports=r},function(t,n,e){"use strict";e.r(n);e(2);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],i=!0,r=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(i=(c=a.next()).done)&&(e.push(c.value),!n||e.length!==n);i=!0);}catch(s){r=!0,o=s}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(t,n,e){return(c=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(t,i));return e&&o(r,e.prototype),r}).apply(null,arguments)}e(3);var a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",e=document.createElement(n);return t&&(e.className=t),e},s=function(t,n,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);return e&&(i.className.baseVal=e),n&&Object.keys(n).forEach(function(t){i.setAttribute(t,n[t])}),i},u=function(t,n,e){t.addEventListener(n,e,!1)},l=function(t,n,e){t.removeEventListener(n,e)},h=function(t,n){var e=function(t){return{x:t.touches[0].clientX,y:t.touches[0].clientY}};u(t,"mousedown",function(t){var e=function(t){return{x:t.offsetX,y:t.offsetY}}(t),i=function t(i){if(1!==i.buttons)l(document.body,"mousemove",t),l(document.body,"mouseup",r);else{var o=function(t){return{x:t.clientX,y:t.clientY}}(i),c={x:o.x-e.x,y:o.y+e.y};n(c)}};function r(){l(document.body,"mousemove",i),l(document.body,"mouseup",r)}u(document.body,"mousemove",i),u(document.body,"mouseup",r)}),u(t,"touchstart",function(i){var r=function(n){var i=t.getBoundingClientRect(),r=e(n);return{x:r.x-i.left,y:r.y-i.top}}(i),o=function(t){var i=e(t),o={x:i.x-r.x,y:i.y+r.y};n(o)};function c(){l(document.body,"touchmove",o),l(document.body,"touchend",c),l(document.body,"touchcancel",c)}u(document.body,"touchmove",o),u(document.body,"touchend",c),u(document.body,"touchcancel",c)})},f=e(0),d=e.n(f),p=function(t,n,e){var i=!0,r=a("cb_wrapper"),o=a("cb_checked-mark");o.style.color=t;var c=a("cb_label");return c.textContent=n,r.appendChild(o),r.appendChild(c),o.appendChild(function(){var t=a("icon","img");return t.setAttribute("src",d.a),t}()),u(r,"click",function(){i=!i,e&&e(i),o.className=i?"cb_checked-mark":"cb_unchecked-mark"}),r};function m(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function v(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t,n,e){return n&&v(t.prototype,n),e&&v(t,e),t}function b(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(t){var n=null,e=null;return t.forEach(function(t){var i=t.min,r=t.max;n=null===n?i:Math.min(n,i),e=null===e?r:Math.max(e,r)}),{min:n,max:e}},_=function(t,n,e){return t=void 0===n?t:Math.max(n,t),t=void 0===e?t:Math.min(e,t)},C=function(t,n,e){return n+t*(e-n)},w=function(t,n,e){return(t-n)/(e-n)},x=function(t,n,e,i,r){if(!n)return{min:0,max:0};for(var o=1,c=t.length-1,a=C(e,t[1],t[c]),s=C(i,t[1],t[c]);t[o]<a;)o++;for(;t[c]>s;)c--;for(var u=n[o],l=n[o],h=o+1;h<=c;h++){var f=n[h];u=Math.min(u,f),l=Math.max(l,f)}return{min:"line"===r?u:0,max:l}},A=function(t,n){if(!n)return null;for(var e=C(n,t[1],t[t.length-1]),i=1;t[i]<e;)i++;return i=(t[i-1]+t[i])/2<e?i:i-1},k=function(t,n){var e=Object.keys(t).filter(function(n){return"x"===t[n]})[0],r=n.filter(function(t){return t[0]===e})[0],o=Object.keys(t).filter(function(n){return"x"!==t[n]});return{xColumn:r,yColumns:o.reduce(function(t,e){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){i(t,n,e[n])})}return t}({},t,i({},e,n.filter(function(t){return t[0]===e})[0]))},{}),keys:o}},P=function(t){if("#"===(t=t.replace(/ /g,""))[0])return 4===t.length?{r:parseInt(t[1]+t[1],16),g:parseInt(t[2]+t[2],16),b:parseInt(t[3]+t[3],16)}:{r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16)};var n=t.slice(4,-1).split(",");return{r:+n[0],g:+n[1],b:+n[2]}},M="gray",B=function(t,n,e,i){var r=n.length;if(i){for(var o=n[1],c=n[r-1]-o,a="0,".concat(i[1]+e[1]," "),s=2;s<r;s++)a+="".concat((n[s]-o)/c,",").concat(i[s]+e[s]," ");return t?"0,0 ".concat(a," 1,0"):a}for(var u=n[1],l=n[r-1]-u,h="0,".concat(e[1]," "),f=2;f<r;f++)h+="".concat((n[f]-u)/l,",").concat(e[f]," ");return t?"0,0 ".concat(h," 1,0"):h},N=function(){function t(n,e,i,r,o){var c=this;m(this,t),this.onChange=function(t){c._yColumnBase=t;var n=B(c._area,c._xColumn,c._yColumn,t);c._chartLine.setAttribute("points",n),c._mapLine.setAttribute("points",n)},this._visible=!0,this._color=o,this._xColumn=i,this._yColumn=r,this._area=n;var a=B(n,i,r);this._chartLine=s(n?"polygon":"polyline",{"stroke-linejoin":"round","vector-effect":"non-scaling-stroke",points:a,stroke:n?"none":o,fill:n?o:"none"},"chart-line"),this._mapLine=s("polyline",{"stroke-linejoin":"round","vector-effect":"non-scaling-stroke",points:a,stroke:n?"none":o,fill:n?o:"none"},"map-line");var u=s("line",{x1:0,x2:0,y0:0,y1:1,"vector-effect":"non-scaling-stroke",stroke:M},"intersection-line");this.intersectionPoint=s("g",{},""),this.intersectionPoint.appendChild(u),n||(this._intersectionLineH=s("line",{x1:-1,x2:1,y0:0,y1:0,"vector-effect":"non-scaling-stroke",stroke:M},"intersection-line"),this._intersectionPoint0=s("circle",{r:5,stroke:o,fill:"white"},"intersection-point"),this._intersectionPoint1=s("g",{},""),this._intersectionPoint2=s("g",{},"animated"),this._intersectionPoint3=s("g",{},""),this._intersectionPoint4=s("g",{},"animated"),this._intersectionPoint1.appendChild(this._intersectionPoint0),this._intersectionPoint2.appendChild(this._intersectionPoint1),this._intersectionPoint3.appendChild(this._intersectionLineH),this._intersectionPoint3.appendChild(this._intersectionPoint2),this._intersectionPoint4.appendChild(this._intersectionPoint3),this.intersectionPoint.appendChild(this._intersectionPoint4)),this.mapNode=s("g",{},"animated"),this.mapNode.appendChild(this._mapLine),this.node=s("g",{},"animated"),this.node.appendChild(this._chartLine)}return y(t,[{key:"visible",get:function(){return this._visible},set:function(t){this._visible=t,this._intersectionPoint0.setAttribute("opacity",+t),this._chartLine.setAttribute("opacity",+t),this._mapLine.setAttribute("opacity",+t),this._intersectionLineH.setAttribute("stroke",t?M:"transparent")}},{key:"yMapArea",set:function(t){var n=r(t,2),e=n[0],i=n[1];this.mapNode.setAttribute("transform","scale(1 ".concat(1/(i-e),") translate(0 ").concat(-e,")"))}},{key:"yChartArea",set:function(t){var n=r(t,2),e=n[0],i=n[1];this.node.setAttribute("transform","scale(1 ".concat(1/(i-e),") translate(0 ").concat(-e,")"))}}]),y(t,[{key:"onMouseMove",value:function(t,n,e,i,r,o,c){var a=w(t,n,e);if(a<0||a>1)this.intersectionPoint.style.display="none";else{this.intersectionPoint.style.display="initial";var s=A(this._xColumn,t);if(a=w(this._xColumn[s],this._xColumn[1],this._xColumn[this._xColumn.length-1]),this.intersectionPoint.setAttribute("transform","scale(".concat(o," ").concat(c,") translate(").concat(w(a,n,e)," 0) ")),!this._area){var u=this._yColumn[s];this._intersectionPoint1.setAttribute("transform","scale(".concat(1/o," ").concat(1/c,")")),this._intersectionPoint2.setAttribute("transform","scale(1 ".concat(r-i,")")),this._intersectionPoint3.setAttribute("transform","translate(0 ".concat(u,")")),this._intersectionPoint4.setAttribute("transform","scale(1 ".concat(1/(r-i),") translate(0 ").concat(-i,")"))}}}}]),t}(),E=function(t,n,e){var i=t.length-1;if(e){for(var r="0,0 0,".concat(e[1]+n[1]," "),o=2;o<=i;o++)r+="".concat((o-1)/i,",").concat(e[o-1]+n[o-1]," ").concat((o-1)/i,",").concat(e[o]+n[o]," ");return r+="1,".concat(e[i]+n[i]," 1,0")}for(var c="0,0 0,".concat(n[1]," "),a=2;a<=i;a++)c+="".concat((a-1)/i,",").concat(n[a-1]," ").concat((a-1)/i,",").concat(n[a]," ");return c+="1,".concat(n[i]," 1,0")},L=function(){function t(n,e,i,r){var o=this;m(this,t),this.onChange=function(t){o._yColumnBase=t;var n=E(o._xColumn,o._yColumn,t);o._chartLine.setAttribute("points",n),o._mapLine.setAttribute("points",n)},this._visible=!0,this._color=r,this._xColumn=e,this._yColumn=i,this._chartLine=s("polygon",{"vector-effect":"non-scaling-stroke","stroke-width":0,fill:r},"chart-bar"),this._selectedBar=s("rect",{"vector-effect":"non-scaling-stroke","stroke-width":0,fill:r},"chart-bar"),this._mapLine=s("polygon",{"vector-effect":"non-scaling-stroke","stroke-width":0,fill:r},"map-bar"),this.mapNode=s("g",{},"animated"),this.mapNode.appendChild(this._mapLine),this.node=s("g",{},"animated"),this.node.appendChild(this._chartLine),this.node.appendChild(this._selectedBar)}return y(t,[{key:"visible",get:function(){return this._visible},set:function(t){this._visible=t,this._chartLine.setAttribute("fill",t?this._color:"transparent"),this._mapLine.setAttribute("fill",t?this._color:"transparent")}},{key:"yMapArea",set:function(t){var n=r(t,2),e=n[0],i=n[1];this.mapNode.setAttribute("transform","scale(1 ".concat(1/(i-e),") translate(0 ").concat(-e,")"))}},{key:"yChartArea",set:function(t){var n=r(t,2),e=n[0],i=n[1];this.node.setAttribute("transform","scale(1 ".concat(1/(i-e),") translate(0 ").concat(-e,")"))}}]),y(t,[{key:"onMouseMove",value:function(t){if(!t)return this._chartLine.setAttribute("fill",this._visible?this._color:"transparent"),void this._selectedBar.setAttribute("fill","transparent");if(this._visible){var n=1/(this._xColumn.length-1),e=Math.ceil(t/n);this._selectedBar.setAttribute("x",(e-1)*n),this._selectedBar.setAttribute("y",this._yColumnBase?this._yColumnBase[e]:0),this._selectedBar.setAttribute("width",n),this._selectedBar.setAttribute("height",this._yColumn[e]),this._selectedBar.setAttribute("fill",this._color);var i=window.getComputedStyle(document.body).backgroundColor;this._chartLine.setAttribute("fill",function(t,n,e){var i=P(t),r=i.r,o=i.g,c=i.b,a=P(n),s=a.r,u=a.g,l=a.b;return function(t){var n=t.r,e=t.g,i=t.b;return"rgb(".concat(n,", ").concat(e,", ").concat(i,")")}({r:(e*r+(1-e)*s).toFixed(),g:(e*o+(1-e)*u).toFixed(),b:(e*c+(1-e)*l).toFixed()})}(this._color,i,.6))}}}]),t}(),O=(e(4),e(5),e(6),["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),j=["Jan","Feb","Mar","Apr","May","June","Jule","Aug","Sep","Oct","Nov","Dec"],R=20,S=10,Y=180,X=18,D=function(){function t(n){m(this,t),this.transformY=s("g",{},"tt_wrapper"),this.transformX=s("g",{},"tt_wrapper"),this.rect=s("rect",{x:R,y:R,rx:15,ry:15,width:Y,transform:"scale(1 -1)"},"tt_rect"),this.text=s("text",{x:R+S,y:R+S+X,transform:"scale(1 -1)"}),this.transformY.appendChild(this.transformX),this.transformX.appendChild(this.rect),this.transformX.appendChild(this.text),n.appendChild(this.transformY)}return y(t,[{key:"resize",value:function(){var t=this.transformY.parentNode.getBoundingClientRect();this.transformY.setAttribute("transform","translate(0 ".concat(t.height,")"))}},{key:"render",value:function(t,n,e){var i=this;if(!e||t<0||t>1)this.transformY.setAttribute("opacity","0");else{this.transformY.setAttribute("opacity","1"),this.rect.setAttribute("height",(e.length+1)*X+2*S);for(var r=this.transformY.parentNode.getBoundingClientRect();this.text.childNodes.length;)this.text.removeChild(this.text.childNodes[0]);var o=s("tspan",{},"tt_bold");o.textContent=function(t){var n=new Date(t),e=O[n.getDay()],i=n.getDate(),r=j[n.getMonth()],o=n.getFullYear();return"".concat(e,", ").concat(i," ").concat(r," ").concat(o)}(n),this.text.appendChild(o),e.forEach(function(t){var n=t.y,e=t.color,r=t.name,o=s("tspan",{x:R+S,dy:X});o.textContent="".concat(r,": ");var c=s("tspan",{fill:e,"text-anchor":"end",x:R+Y-S},"tt_bold");c.textContent=(+n).toFixed(2),i.text.appendChild(o),i.text.appendChild(c)}),t<.5?this.transformX.setAttribute("transform","translate(".concat(t*r.width," 0)")):this.transformX.setAttribute("transform","translate(".concat(t*r.width-2*R-Y," 0)"))}}}]),t}(),F=(e(7),function(){function t(n){m(this,t),this.node=s("g",{}),this.transform=s("g",{},"grid_wrapper"),n.appendChild(this.node),this.node.appendChild(this.transform),this.resize()}return y(t,[{key:"resize",value:function(){var t=this.node.parentNode.getBoundingClientRect(),n=t.width,e=t.height;this.node.setAttribute("transform","scale(".concat(n," ").concat(e,")"))}},{key:"render",value:function(t,n,e,i){for(var r=this.node.parentNode.getBoundingClientRect(),o=r.height/180,c=r.width/180,a=0;(i-e)/I[a]<o;)a++;for(var u=I[a],l=0;(n-t)/I[l]<c;)l++;var h=I[l];for(this.transform.setAttribute("transform","scale(1 ".concat(1/(i-e),") translate(0 ").concat(-e,")"));this.transform.childNodes.length;)this.transform.removeChild(this.transform.childNodes[0]);for(var f=(a=Math.ceil(e/u))*u;f<=i;){var d=s("line",{x1:0,x2:1,y1:f,y2:f,"vector-effect":"non-scaling-stroke"},"grid_line");this.transform.appendChild(d),f+=u}for(var p=(l=Math.ceil(t/h))*h;p<=n;){var m=s("line",{y1:e,y2:i,x1:w(p,t,n),x2:w(p,t,n),"vector-effect":"non-scaling-stroke"},"grid_line");this.transform.appendChild(m),p+=h}}}]),t}()),I=[1e8,5e7,2e7,1e7,5e6,2e6,1e6,5e5,2e5,1e5,5e4,2e4,1e4,5e3,2e3,1e3,500,200,100,50,20,10,5,2,1,.5,.2,.1,.05,.02,.01],z={line:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return c(N,[!1].concat(n))},bar:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return c(L,n)},area:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return c(N,[!0].concat(n))}},T=function(t,n){var e=s("svg",{},"ctr_chart"),o=t.colors,c=t.names,f=t.types,d=t.columns,m=(t.percentage,t.stacked),v=(t.y_scaled,k(f,d)),y=v.xColumn,C=v.yColumns,P=v.keys;C=Object.entries(C).map(function(t){var n=r(t,2);return i({},n[0],n[1].map(function(t,n){return n?t/1e3:t}))}).reduce(function(t,n){return Object.assign(t,n)},{});var M,B,N=0,E=1,L=0,O=1,j=null,R=!1,S={},Y={},X=s("g"),I=s("g"),T=a("crt_wrapper"),J=a("crt_controls"),W=a();W.textContent=n,T.appendChild(W),T.appendChild(e),e.appendChild(X),X.appendChild(I),T.appendChild(J);return{node:T,init:function(){var t=P.reverse().map(function(t){return i({},t,z[f[t]](t,y,C[t],o[t]))}).reduce(function(t,n){return Object.assign(t,n)},{}),n=function(){var t=s("svg",{},"map-chart"),n=a("map-container"),e=a("map-svg-wrapper"),i=s("g");e.appendChild(t),n.appendChild(e),t.appendChild(i);var r=s("rect",{x:0,y:0,width:0,height:1},"map-overlay"),o=s("rect",{x:1,y:0,width:0,height:1},"map-overlay"),c=a("map-window","div"),u=a("map-left-edge","div"),l=a("map-right-edge","div");return i.append(r),i.append(o),n.append(c),n.append(u),n.append(l),{mapNode:n,appendBeforeOverlay:function(t){i.insertBefore(t,r)},setMapViewport:function(t,n){i.setAttribute("transform","scale(".concat(t," ").concat(n,")"))},setMapWindow:function(t,e){r.setAttribute("width",t),o.setAttribute("x",e),o.setAttribute("width",1-e);var i=n.getBoundingClientRect().width;c.style.left="".concat(t*i,"px"),c.style.width="".concat((e-t)*i,"px"),u.style.left="".concat(t*i-10,"px"),l.style.left="".concat(e*i-1,"px")},windowLeftEdge:u,windowRightEdge:l,mapWindow:c}}(),r=n.mapNode,d=n.setMapViewport,v=n.appendBeforeOverlay,k=n.setMapWindow,W=n.windowLeftEdge,H=n.windowRightEdge,V=n.mapWindow,U=function(n){var i=e.getBoundingClientRect(),r=i.width,a=i.height;-1!==n&&(j=n);var s=A(y,j),u=j&&P.filter(function(n){return t[n].visible}).map(function(t){return{y:C[t][s],color:o[t],name:c[t]}});M.render(w(j,N,E),y[s],u),P.forEach(function(n){t[n].onMouseMove(j,N,E,L,O,r,a)})},q=function(){var n=null;P.filter(function(n){return t[n].visible}).forEach(function(e){var i,r;t[e].onChange(m?n:null),i=n,r=C[e],n=i?i.map(function(t,n){return t+r[n]}):b(r)});var e=m?x(y,n,N,E,"bar"):g(P.filter(function(n){return t[n].visible}).map(function(t){return function(t){return S[t]||(S[t]=x(y,C[t],N,E,f[t]))}(t)})),i=e.min,r=e.max,o=m?x(y,n,0,1,"bar"):g(P.filter(function(n){return t[n].visible}).map(function(t){return function(t){return Y[t]||(Y[t]=x(y,C[t],0,1,f[t]))}(t)})),c=o.min,a=o.max;P.forEach(function(n){t[n].yChartArea=[i,r],t[n].yMapArea=[c,a]}),L=i,O=r,B.render(N,E,L,O),U(-1)},G=function(){S={},q()},K=function(t,n){(function(t,n){I.setAttribute("transform","\n                    scale(".concat(1/(n-t)," 1) \n                    translate(").concat(-t," 0)\n                ")),G()})(N=t,E=n),k(N,E)},Q=function(){var t,n,i=e.getBoundingClientRect(),o=i.width,c=i.height,a=r.getBoundingClientRect(),s=a.width,u=a.height;t=o,n=c,X.setAttribute("transform","scale(".concat(t," ").concat(n,")")),d(s,u),B.resize(),M.resize(),k(N,E),U(-1)};B=new F(e),M=new D(e),T.insertBefore(r,J),P.forEach(function(n){I.appendChild(t[n].node)}),P.forEach(function(n){v(t[n].mapNode)}),P.reverse().forEach(function(n){t[n].intersectionPoint&&e.insertBefore(t[n].intersectionPoint,M.transformY),J.appendChild(p(o[n],c[n],function(e){t[n].visible=e,q()}))}),G(),Q(),u(window,"resize",Q);var Z=function(t){var n=r.getBoundingClientRect();return(t-n.left)/n.width},$=function(t){var n=e.getBoundingClientRect();return(t-n.left)/n.width};h(V,function(t){var n=E-N,e=Z(t.x),i=e+n;K(_(e,0,1-n),_(i,n,1))}),h(W,function(t){var n=Z(t.x+10);K(_(n,0,E-.05),E)}),h(H,function(t){var n=Z(t.x);K(N,_(n,N+.05,1))});var tt=function(t){return U(N+(E-N)*$(t.clientX))};u(e,"mousemove",tt),u(e,"mouseleave",function(){R||U()}),u(e,"touchmove",function(t){return U(N+(E-N)*$(t.touches[0].clientX))}),u(e,"mousedown",function(){R?u(e,"mousemove",tt):l(e,"mousemove",tt),R=!R})}}},J=(e(8),function(){var t=document.createElement("div");t.id="btn-switch";var n=!1;t.textContent="Switch to Night Mode";return u(t,"click",function(){n?(t.textContent="Switch to Night Mode",document.body.className="",n=!1):(t.textContent="Switch to Day Mode",document.body.className="night",n=!0)}),t}),W=(e(9),a()),H=document.getElementById("root");H.appendChild(W),H.appendChild(function(){var t=document.createElement("div");return t.id="footer",t.appendChild(J()),t}());var V=function(t){return e(10)("./".concat(t,"/overview.json")).then(function(t){return t.default})},U=[];V(1).then(function(t){return U.push(t)}).then(function(){return V(2)}).then(function(t){return U.push(t)}).then(function(){return V(3)}).then(function(t){return U.push(t)}).then(function(){return V(4)}).then(function(t){return U.push(t)}).then(function(){return V(5)}).then(function(t){return U.push(t)}).then(function(){U.forEach(function(t,n){var e=T(t,"Chart #"+n),i=e.node,r=e.init;W.appendChild(i),r()})})}],[[1,6]]]);
//# sourceMappingURL=main.62da5dd6.chunk.js.map