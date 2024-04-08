(()=>{"use strict";var n={82:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var m=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var p=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r={};(()=>{function n(){var n;return n=localStorage.getItem("level")?1*localStorage.getItem("level"):1,document.querySelector("span").textContent=n,n}function e(){var n;return n=localStorage.getItem("exp")?1*localStorage.getItem("exp"):0,j.children[0].style.width="".concat(n,"rem"),n>=12&&setTimeout((function(){var e=setInterval((function(){n-=.3,j.children[0].style.width="".concat(n,"rem"),n<=0&&(n=0,j.children[0].style.width="".concat(n,"rem"),clearInterval(e),localStorage.setItem("exp",n))}),100)}),1e3),n}function o(){var n,e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(n=localStorage.getItem("nText")?1*localStorage.getItem("nText"):0){case 0:e="Te amo mucho Alejandra",i();break;case 1:e="Eres mi tiktoker preciosa";break;case 2:e="Eres lo mejor que me ha pasado en esta vida mi reina"}return 1==t?e:n}function i(){var n=document.createElement("img");switch(n.alt="Emoji",localStorage.getItem("nText")?1*localStorage.getItem("nText"):0){case 0:n.src="./assets/img/heart.png";break;case 1:n.src="./assets/img/cute.png";break;case 2:n.src="./assets/img/brillos.png"}return n}function a(n){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(n)}function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,d(r.key),r)}}function s(n,e,t){return e&&c(n.prototype,e),t&&c(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function l(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e,t){return(e=d(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){var e=function(n,e){if("object"!=a(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,e||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==a(e)?e:String(e)}t.d(r,{Uv:()=>O,C3:()=>L,jc:()=>M,ni:()=>R,J7:()=>A,_u:()=>z,oZ:()=>j,_J:()=>q,ib:()=>D,O1:()=>F});var m=s((function n(e){var t=this;l(this,n),u(this,"flower",(function(n){var e=document.createElement("img");e.src="./assets/img/flower_grow_".concat(n-1,".png"),e.alt="flor",e.classList.add("flower"),M.innerHTML="",M.append(e)})),u(this,"water",(function(){t.wateringCan(),setTimeout(t.waterDrops,1e3),setTimeout((function(){L.innerHTML="",A.children[0].style.animation="unrotate 1s ease-in-out forwards",setTimeout((function(){A.innerHTML=""}),1200),setTimeout((function(){var n=0,e=setInterval((function(){t.glitters(n),4==++n&&clearInterval(e)}),200)}),1500),setTimeout(t.newText,2500,q)}),2500)})),u(this,"wateringCan",(function(){var n=document.createElement("img");n.src="./assets/img/regadera.png",n.alt="Regadera",n.classList.add("regadera"),A.append(n)})),u(this,"waterDrops",(function(){var n=document.createElement("img");n.src="./assets/img/drops.gif",n.alt="Gotas",n.classList.add("drops"),L.append(n)})),u(this,"glitters",(function(n){var e=document.createElement("img");e.src="./assets/img/brillos.png",e.alt="Brillos",e.classList.add("glitters-".concat(n)),L.append(e),setTimeout((function(){L.removeChild(e)}),400)})),u(this,"newText",(function(n){var e=document.createElement("p");e.textContent=o(!0),R.append(e),R.append(i())})),this.flower(e)})),f=s((function n(e,t){l(this,n),u(this,"newExp",(function(n){var e=0;switch(n){case 1:e=4;break;case 2:e=3;break;case 3:e=2;break;case 4:e=1;break;case 5:e=.5}return e})),u(this,"background",(function(n){var e=document.createElement("style");if(document.body.appendChild(e),n>0)e.innerHTML='body {\n                background-image: url("./assets/backgrounds/bg_'.concat(n,'.jpg");\n                background-position: center center;\n                background-repeat:  no-repeat;\n                background-size: cover;\n            }');else{if(0===n)n="white";e.innerHTML="body {\n                background-color: ".concat(n,";\n            }")}})),z.querySelector("p").textContent="V-".concat(e),this.background(t)})),p=t(72),h=t.n(p),g=t(825),b=t.n(g),v=t(659),y=t.n(v),w=t(56),x=t.n(w),S=t(540),E=t.n(S),I=t(113),k=t.n(I),C=t(82),T={};T.styleTagTransform=k(),T.setAttributes=x(),T.insert=y().bind(null,"head"),T.domAPI=b(),T.insertStyleElement=E();h()(C.A,T);C.A&&C.A.locals&&C.A.locals;var z=document.querySelector(".version"),M=document.querySelector(".div-flower"),A=document.querySelector(".div-regadera"),L=document.querySelector(".div-drops"),R=document.querySelector(".message"),j=document.querySelector(".xp"),F=document.querySelectorAll("span")[1],H=document.querySelector("#options"),O=document.querySelector("#btn-regar"),q=o(),D=new Date,P=(function(){var n=(new Date).getDate(),e=(new Date).getMonth(),t=(new Date).getFullYear();localStorage.getItem("today")?(localStorage.getItem("today")<n||localStorage.getItem("month")<e||localStorage.getItem("year")<t?O.disabled=!1:O.disabled=!0,function(n){if(1==O.disabled){var e=new Date;e.setHours(e.getHours()+24);var t=setInterval((function(){var r=(new Date).getTime(),o=e-r,i=Math.floor(o%864e5/36e5)-n.getHours(),a=Math.floor(o%36e5/6e4)-n.getMinutes(),c=Math.floor(o%6e4/1e3);F.innerHTML="".concat(i,":").concat(a,":").concat(c),o<=0&&(clearInterval(t),F.innerHTML="Regar")}),1e3)}else F.innerHTML="Regar"}(D)):O.disabled=!1}(),(new Date).getMonth(),(new Date).getFullYear(),n()),_=e(),N=new m(P),J=new f("1.9",0);H.addEventListener("click",(function(){window.location.href="./options.html"})),O.addEventListener("click",(function(){N.water(),function(n){localStorage.setItem("exp",n),e()}(_+=J.newExp(P)),console.log(_),_>=12&&(_=0,function(n){localStorage.setItem("level",n)}(P+=1),setTimeout((function(){N.flower(P),n()}),5500)),setTimeout((function(){R.innerHTML="",function(n){localStorage.setItem("nText",n)}(q+=1)}),8500)}))})()})();