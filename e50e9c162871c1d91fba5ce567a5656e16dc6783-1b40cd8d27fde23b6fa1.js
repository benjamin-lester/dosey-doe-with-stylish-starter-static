(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+22N":function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("I5cv");var r=n("dwco"),o=n.n(r),i=n("q1tI"),a=n.n(i);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){return e.children},s=function(e){var t,n;n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r;r=i;function i(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(c(t)),t}var s=i.prototype;return s.componentDidMount=function(){o.a.polyfill()},s.handleClick=function(e){e.preventDefault();var t=this.props.onClick,n=void 0===t?function(){}:t,r=0,o=!0,i=this.props,a=i.type,c=i.element,l=i.offset,s=i.timeout;if(a&&c)switch(a){case"class":o=!!(r=document.getElementsByClassName(c)[0]);break;case"id":o=!!(r=document.getElementById(c))}o?this.scrollTo(r,l,s):console.log("Element not found: "+c),n(e)},s.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var r=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:r+t,left:0,behavior:"smooth"})}),n):window.scroll({top:r+t,left:0,behavior:"smooth"})},s.render=function(){return a.a.createElement(l,null,"object"==typeof this.props.children?a.a.cloneElement(this.props.children,{onClick:this.handleClick}):a.a.createElement("span",{onClick:this.handleClick},this.props.children))},i}(a.a.Component);t.a=s},"7oih":function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("I5cv");var r=n("gBsp"),o=n("q1tI"),i=n.n(o),a=n("TJpk"),c=n.n(a),l=n("Wbzz");n("9T2v");var s=function(e){var t,n;n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o;o=a;function a(){return e.apply(this,arguments)||this}return a.prototype.render=function(){var e=this.props.children;return i.a.createElement(l.StaticQuery,{query:"1044757290",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Stylish"},{name:"keywords",content:"site, web"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:"page-top"},e))},data:r})},a}(o.Component);t.a=s},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){u.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",l),p}}},"9T2v":function(e,t,n){},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var s=i[l];if(!c(s))return!1;var u=e[s],f=t[s];if(!1===(o=n?n.call(r,u,f,s):void 0)||void 0===o&&u!==f)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),i=n("hswa").f,a=n("kJMx").f,c=n("quPj"),l=n("C/va"),s=r.RegExp,u=s,f=s.prototype,p=/a/g,T=/a/g,d=new s(p)!==p;if(n("nh4g")&&(!d||n("eeVq")((function(){return T[n("K0xU")("match")]=!1,s(p)!=p||s(T)==T||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),i=void 0===t;return!n&&r&&e.constructor===s&&i?e:o(d?new u(r&&!i?e.source:e,t):u((r=e instanceof s)?e.source:e,r&&i?l.call(e):t),n?this:f,s)};for(var E=function(e){e in s||i(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},h=a(u),m=0;h.length>m;)E(h[m++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),a=f(n("17x9")),c=f(n("8+s/")),l=f(n("bmMU")),s=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,h,m,y=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),A=(E=y,m=h=function(e){function t(){return T(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=c,t.titleAttributes=r({},a),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(E,o)},o(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),h.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=E.peek,h.rewind=function(){var e=E.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,s,u=r(t),f=r(n);if(u&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,T=n instanceof Date;if(p!=T)return!1;if(p&&T)return t.getTime()==n.getTime();var d=t instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return t.toString()==n.toString();var h=o(t);if((l=h.length)!==o(n).length)return!1;for(c=l;0!=c--;)if(!i.call(n,h[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(s=h[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},dwco:function(e,t,n){n("Oyvg"),n("eM6i"),n("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var n=p(this),r=n.getBoundingClientRect(),i=this.getBoundingClientRect();n!==t.body?(d.call(this,n,n.scrollLeft+i.left-r.left,n.scrollTop+i.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function f(e){var t=s(e,"Y")&&u(e,"Y"),n=s(e,"X")&&u(e,"X");return t||n}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function T(t){var n,r,o,a,c=(i()-t.startTime)/468;a=c=c>1?1:c,n=.5*(1-Math.cos(Math.PI*a)),r=t.startX+(t.x-t.startX)*n,o=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,o),r===t.x&&o===t.y||e.requestAnimationFrame(T.bind(e,t))}function d(n,r,a){var l,s,u,f,p=i();n===t.body?(l=e,s=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=o.scroll):(l=n,s=n.scrollLeft,u=n.scrollTop,f=c),T({scrollable:l,method:f,startTime:p,startX:s,startY:u,x:r,y:a})}}}}()},gBsp:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Dosey-Doe"}}}}')},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?o.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},obyI:function(e,t){e.exports={siteTitle:"Dosey-Doe",manifestName:"Dosey-Doe",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/favicon/android-chrome-512x512.png",pathPrefix:"",heading:"Dosey-Doe",subHeading:"Austin-based creators",socialLinks:[{icon:"icon-social-instagram",name:"Twitter",url:"https://twitter.com/"},{icon:"icon-camrecorder",name:"Vimeo",url:"https://vimeo.com/doseydoe"}],email:"",phone:"000-00000",address:""}},rY4l:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("a1Th"),n("Btvt"),n("I5cv");var r=n("q1tI"),o=n.n(r),i=n("+22N"),a=n("obyI"),c=n.n(a);var l=function(e){var t,n;n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r;r=a;function a(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(e){n.setState({openMenu:e})},n.state={openMenu:!1},n}return a.prototype.render=function(){var e=this,t=this.state.openMenu;return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{onClick:function(n){return e.toggleMenu(!t)},className:"menu-toggle rounded "+(t?"active":""),href:"/#"},t?o.a.createElement("i",{className:"fas fa-times"}):o.a.createElement("i",{className:"fas fa-bars"})),o.a.createElement("nav",{id:"sidebar-wrapper",className:" "+(t?"active":"")},o.a.createElement("ul",{className:"sidebar-nav"},o.a.createElement("li",{className:"sidebar-brand"},o.a.createElement("a",{href:"#page-top"},c.a.siteTitle)),o.a.createElement("li",{className:"sidebar-nav-item"},o.a.createElement(i.a,{onClick:function(n){return e.toggleMenu(!t)},type:"class",element:"page-top"},o.a.createElement("a",{href:"#page-top"},"Home"))),o.a.createElement("li",{className:"sidebar-nav-item"},o.a.createElement(i.a,{onClick:function(n){return e.toggleMenu(!t)},type:"id",element:"about"},o.a.createElement("a",{href:"#about"},"About"))),o.a.createElement("li",{className:"sidebar-nav-item"},o.a.createElement(i.a,{onClick:function(n){return e.toggleMenu(!t)},type:"id",element:"services"},o.a.createElement("a",{href:"#services"},"Services"))),o.a.createElement("li",{className:"sidebar-nav-item"},o.a.createElement(i.a,{onClick:function(n){return e.toggleMenu(!t)},type:"id",element:"portfolio"},o.a.createElement("a",{href:"#portfolio"},"Portfolio"))),o.a.createElement("li",{className:"sidebar-nav-item"},o.a.createElement(i.a,{onClick:function(n){return e.toggleMenu(!t)},type:"id",element:"contact"},o.a.createElement("a",{href:"#contact"},"Contact"))))))},a}(r.Component)},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=l(n("q1tI")),a=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],s=l.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),l=0;l<i.length;l++){var s=i[l],u=(0,a.default)({},o[s],r[s]);o[s]=u}return e}),[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){m(e)}),0)}),y=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,p=e.title,T=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),O(p,T);var d={baseTag:M(c.TAG_NAMES.BASE,n),linkTags:M(c.TAG_NAMES.LINK,i),metaTags:M(c.TAG_NAMES.META,a),noscriptTags:M(c.TAG_NAMES.NOSCRIPT,l),scriptTags:M(c.TAG_NAMES.SCRIPT,u),styleTags:M(c.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,E,h)},_=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var s=a[l],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},M=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=w(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=P(n),i=_(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+u(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&v(b),e.defer?b=A((function(){g(e,(function(){b=null}))})):(g(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,p=void 0===f?"":f,T=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,o,r),link:C(c.TAG_NAMES.LINK,i,r),meta:C(c.TAG_NAMES.META,a,r),noscript:C(c.TAG_NAMES.NOSCRIPT,l,r),script:C(c.TAG_NAMES.SCRIPT,s,r),style:C(c.TAG_NAMES.STYLE,u,r),title:C(c.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=S}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-1b40cd8d27fde23b6fa1.js.map