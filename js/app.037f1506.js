(function(t){function e(e){for(var n,i,l=e[0],c=e[1],s=e[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ifmo-js-frmw-005/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),t._m(0),n("div",{staticClass:"aspect-ratio"},[n("div",{staticClass:"aspect-ratio__inner"},[n("div",{style:t.style})])]),n("div",{staticClass:"flex card bordered rounded"},[n("div",[n("rgb-color-slider",{staticClass:"bordered-bottom",attrs:{color:"R"},model:{value:t.R,callback:function(e){t.R=e},expression:"R"}}),n("rgb-color-slider",{staticClass:"bordered-bottom",attrs:{color:"G"},model:{value:t.G,callback:function(e){t.G=e},expression:"G"}}),n("rgb-color-slider",{attrs:{color:"B"},model:{value:t.B,callback:function(e){t.B=e},expression:"B"}})],1)]),t._m(1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"task-link",attrs:{target:"_blank",href:"https://kodaktor.ru/frmw_005"}},[t._v("Задание FRMW-005")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"author"},[t._v("Автор: "),r("strong",[t._v("Кочетыгов Андрей")])])}],i=(r("99af"),r("db43"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group flex"},[r("div",{staticClass:"group-element"},[r("label",{attrs:{for:t.id}},[t._v(t._s(t.color))])]),r("div",{staticClass:"divider-flex"}),r("div",{staticClass:"group-element"},[r("div",{style:t.colorSampleStyle})]),r("div",{staticClass:"divider-flex"}),r("div",{staticClass:"group-element grow"},[r("input",{staticClass:"full-width",attrs:{id:t.id,type:"range",step:"1",min:"0",max:"256"},domProps:{value:t.val},on:{input:t.input}})])])}),l=[],c=(r("caad"),r("a9e3"),function(t){return t=t>255?255:t,t=t<0?0:t,t}),s={name:"RgbColorSlider",props:{id:{type:String,default:null},color:{type:String,required:!0,validator:function(t){return["R","G","B"].includes(t)}},value:{type:Number,default:128,validator:function(t){return-1<t&&t<256}}},data:function(){return{val:this.value}},watch:{value:function(t){this.val=t}},computed:{colorSampleStyle:function(){return{height:"20px",width:"20px",backgroundColor:this.cssRgbValue}},cssRgbValue:function(){switch(this.color){case"R":return"rgb(".concat(this.val,", 0, 0)");case"G":return"rgb(0, ".concat(this.val,", 0)");case"B":return"rgb(0, 0, ".concat(this.val,")");default:return"rgb(0, 0, 0)"}}},methods:{input:function(t){var e=t.target;this.val=c(+e.value),this.$emit("input",this.val)}}},u=s,d=(r("9276"),r("2877")),f=Object(d["a"])(u,i,l,!1,null,"05416bfe",null),p=f.exports,v={name:"App",components:{RgbColorSlider:p},data:function(){return{R:128,G:128,B:128}},computed:{style:function(){return{width:"100%",height:"100%",background:"rgb(".concat(this.R,", ").concat(this.G,", ").concat(this.B,")")}}}},b=v,h=(r("034f"),Object(d["a"])(b,o,a,!1,null,null,null)),g=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},"77e4":function(t,e,r){},"85ec":function(t,e,r){},9276:function(t,e,r){"use strict";var n=r("77e4"),o=r.n(n);o.a},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},db43:function(t,e,r){}});
//# sourceMappingURL=app.037f1506.js.map