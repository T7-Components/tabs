!function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],s=0,p=[];s<l.length;s++)i=l[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0,2:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;a.push([7,0]),n()}({3:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}(this,f(t).call(this,e)),Object(l.bind)(p(p(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"handleClick",value:function(e){var t=e.keyCode;if(!t||13===t){var n=this.props.handleClick;if("function"==typeof n)n(e,this.props.index,this.props.label)}}},{key:"render",value:function(){var e=this.props.ariaControls,t=this.props.ariaExpanded,n=this.props.ariaSelected,r=this.props.className,a=this.props.id,i=this.props.label,l=this.handleClick;return o.a.createElement("li",{"aria-controls":e,"aria-expanded":t,"aria-selected":n,className:r,id:a,key:a,role:"tab",tabIndex:"0",onClick:l,onKeyDown:l},i)}}]),t}();b.propTypes={ariaControls:i.a.string,ariaExpanded:i.a.bool,ariaSelected:i.a.bool,className:i.a.string,id:i.a.string,index:i.a.number,label:i.a.string,handleClick:i.a.func},b.defaultProps={ariaExpanded:!1,ariaSelected:!1},t.a=b},34:function(e,t,n){},36:function(e,t,n){},4:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(2),c=n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"TabPanel",function(){return b});var _=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?v(e):t}(this,h(t).call(this,e)),Object(l.bind)(v(v(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"defaultState",value:function(){this.state={id:this.props.id||Object(l.unique)(),selected:this.props.selected}}},{key:"handleClick",value:function(e,t,n){var r=e.keyCode;if(!r||13===r){this.setState({selected:t});var o=this.props.handleClick;"function"==typeof o&&o(e,t,n)}}},{key:"render",value:function(){var e=this.state.id,t=this.props.children,n=this.state.selected,r=this.handleClick;return o.a.createElement("div",{className:"t7-tabs",id:e},o.a.createElement("ul",{role:"tablist",className:"t7-tabs__list"},t.map(function(t,a){var i=t.props.label,l="tabpanel_"+a+"_"+e,u="tab_"+a+"_"+e,f=n===a;return o.a.createElement(c.a,{ariaControls:l,ariaExpanded:f,ariaSelected:f,className:"t7-tabs__item",id:u,index:a,key:u,label:i,handleClick:r})})),t.map(function(t,r){var a="tab_panel_"+r+"_"+e,i="tab_"+r+"_"+e,l=n===r,c=t.props.children;return"string"==typeof c&&(c=o.a.createElement("p",null,c)),o.a.createElement("div",{"aria-hidden":!l,"aria-labelledby":i,className:"t7-tabs__panel",id:a,key:a,role:"tabpanel"},c)}))}}]),t}();_.propTypes={children:i.a.node,id:i.a.string,selected:i.a.number,handleClick:i.a.func},_.defaultProps={children:null,selected:0};t.default=_},7:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n.n(a),l=n(4),c=n(3);n(34),n(36);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"handleClick",value:function(e){}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"@t7/tabs"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/t7-components/tabs/blob/master/source/demo.js"},'View "demo.js" on GitHub')),o.a.createElement("hr",null),o.a.createElement("h2",null,"Tabs rendered using <Tabs> as a container and <TabPanel> for content"),o.a.createElement(l.default,{selected:0,handleClick:this.handleClick},o.a.createElement(c.a,{label:"Tab 1"},o.a.createElement("p",null,'Tab content for "Tab 1"')),o.a.createElement(c.a,{label:"Tab 2"},o.a.createElement("p",null,'Tab content for "Tab 2"')),o.a.createElement(c.a,{label:"Tab 3"},o.a.createElement("p",null,'Tab content for "Tab 3"'))))}}]),t}(),d=document.getElementById("root");i.a.render(o.a.createElement(y,null),d)}});