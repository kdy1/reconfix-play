(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1035:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=1035},1036:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(47),a=n(873),i=n.n(a),l=n(832),u=n.n(l),c=n(824),s=n(847),p=n.n(s);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=y(this,h(e).call(this,t))).state={yaml_text:"",hasError:!1,error:null,form_ui:null},n}var n,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,o["Component"]),n=e,(a=[{key:"evaluate",value:function(t){this.setState({yaml_text:t});try{var e=c.u(t);this.onChange(t,e)}catch(t){this.onError(t)}}},{key:"onChange",value:function(t,e){this.setState({hasError:!1,form_ui:e}),this.props.onChange&&this.props.onChange(t,e)}},{key:"onError",value:function(t){this.setState({hasError:!0,error:t}),this.props.onError&&this.props.onError(t)}},{key:"componentDidMount",value:function(){this.setDataFromUrl()}},{key:"setDataFromUrl",value:function(){var t=p.a.decode();t&&this.evaluate(t)}},{key:"render",value:function(){var t=this;btoa(this.state.yaml_text);return o.createElement(r.Box,null,o.createElement(p.a,{text:this.state.yaml_text}),o.createElement(r.Flex,null,o.createElement(u.a,{placeholder:"yaml",onChange:function(e){return t.evaluate(e.target.value)},value:this.state.yaml_text}),this.state.hasError?o.createElement(u.a,{value:this.state.error,onChange:function(t){}}):null))}}])&&m(n.prototype,a),i&&m(n,i),e}(),v=n(826),_=n(901);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=O(this,g(e).call(this,t))).state={formData:null},n}var n,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,o["Component"]),n=e,(a=[{key:"renderFormData",value:function(t){try{var e=t.formData,n=v.t(e);this.setState({formData:(o=n,JSON.stringify(o,null,2))})}catch(t){console.log(t)}var o}},{key:"render",value:function(){var t=this;return o.createElement(r.Box,null,o.createElement(r.Box,null,o.createElement(r.Heading.h4,{mb:3},"Rendered form"),o.createElement(r.Flex,null,o.createElement(_.Form,{schema:this.props.jsonSchema,uiSchema:this.props.uiSchema,onFormChange:function(e){return t.renderFormData(e)},hideSubmitButton:!1}))),this.state.formData?o.createElement(r.Box,null,o.createElement(r.Heading.h4,null,"Form data (dry json)"),o.createElement(r.Flex,null,o.createElement(u.a,{placeholder:"form data",value:this.state.formData,onChange:function(e){return t.noop(e)}}))):null)}}])&&E(n.prototype,a),i&&E(n,i),e}();function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function D(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(t){return JSON.stringify(t,null,2)},U=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=D(this,P(e).call(this))).state={json_schema_text:"",json_schema:{},ui_object_text:"",ui_object:{},formData:"",hasError:!1},t}var n,a,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,o["Component"]),n=e,(a=[{key:"noop",value:function(){}},{key:"onDSLChanged",value:function(t,e){var n=F(e.json_schema),o=F(e.ui_object);this.setState({json_schema:e.json_schema,json_schema_text:n,ui_object:e.ui_object,ui_object_text:o,hasError:!1})}},{key:"onDSLError",value:function(t){this.setState({hasError:!0})}},{key:"render",value:function(){var t=this;return o.createElement(r.Box,null,o.createElement(i.a,null),o.createElement(r.Divider,null),o.createElement(d,{onChange:function(e,n){return t.onDSLChanged(e,n)},onError:function(e){return t.onDSLError(e)}}),o.createElement(r.Divider,null),this.state.hasError?null:o.createElement(w,{jsonSchema:this.state.json_schema,uiSchema:this.state.ui_object}),o.createElement(r.Divider,null),o.createElement(r.Box,null,this.state.hasError?null:o.createElement(r.Box,null,o.createElement(r.Heading.h4,null,"JSON and UI schemas"),o.createElement(r.Flex,null,o.createElement(u.a,{placeholder:"json schema",onChange:function(e){return t.noop(e)},value:this.state.json_schema_text}),o.createElement(u.a,{placeholder:"ui object",onChange:function(e){return t.noop(e)},value:this.state.ui_object_text})))),o.createElement(r.Divider,null))}}])&&k(n.prototype,a),l&&k(n,l),e}();e.default=U},832:function(t,e,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(47);e.default=function(t){return r.createElement(a.Textarea,o({monospace:!0,minRows:12,autoRows:!0,maxRows:16,onKeyDown:function(t){return function(t){9==(t.keyCode||t.which)&&t.preventDefault()}(t)}},t))}},847:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),u=n(1),c=n(47),s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.encode=function(t){return encodeURIComponent(btoa(t))},e.decode=function(){try{var t=new URLSearchParams(window.location.search),e=t.get("yaml");return t&&e?atob(decodeURIComponent(e)):null}catch(t){console.log(t)}},e.prototype.render=function(){var t=this.props,e=t.children,n=(t.text,i(t,["children","text"]));return l.createElement(c.Link,a({},n,{href:this.getPermalink()}),e||"permalink")},e.prototype.getPermalink=function(){try{return"?yaml="+e.encode(this.props.text)}catch(t){console.log(t)}},e}(u.Component);e.default=s},873:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(1),l=n(47),u=n(874),c=n(875);var s,p=(s=n(876)).keys().map(s),f={},m=function(t){function e(e){var n=t.call(this,e)||this;return n.state={allExamples:{}},n}return r(e,t),e.prototype.componentDidMount=function(){var t=this;p.map(function(e){c.default.get(e).text().then(function(t){var n=e.replace("examples/","");f[n]=t}).then(function(){t.setState({allExamples:f})})})},e.prototype.render=function(){return a.createElement(l.Box,null,"Documentation:",a.createElement("a",{href:"https://github.com/balena-io-modules/balena-cdsl/issues/15"},"What is supported")," | ",a.createElement("a",{href:"https://github.com/balena-io/balena/blob/9471e79bcdaa75a567e89b7d3ce4a11979d38485/specs/configuration-dsl.md"},"DSL specification")," | ",a.createElement("a",{href:"https://github.com/balena-io/balena/blob/614c8f4c3960008f5da7feb63752040287c1f540/specs/configuration-dsl-mapping-extension.md"},"Mapping extensions")," | ",a.createElement("a",{href:"https://github.com/balena-io/balena/blob/8e9c7c177e8d730484fbfce5c4281d4c7c205565/specs/json-schema-extensions.md"},"JSON Schema extensions"),a.createElement(l.Divider,null),a.createElement(u.default,{examples:this.state.allExamples}))},e}(i.Component);e.default=m},874:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(1),l=n(47),u=n(847),c=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.render=function(){var t=this.props.examples;return a.createElement(l.DropDownButton,{joined:!0,label:a.createElement("div",null,"Examples")},Object.keys(t).sort().map(function(e,n){return a.createElement(u.default,{mx:2,text:t[e],key:n},e)}))},e}(i.Component);e.default=c},876:function(t,e,n){var o={"./001 primitive types.yaml":877,"./002 abstract data types.yaml":878,"./003 structures.yaml":879,"./004 optional types.yaml":880,"./005 compound types.yaml":881,"./006 annotations.yaml":882,"./007 group annotations.yaml":883,"./008 property annotations.yaml":884,"./009 array annotations.yaml":885,"./010 integer validation.yaml":886,"./011 number validation.yaml":887,"./012 string validation.yaml":888,"./013 array validation.yaml":889,"./014 formula functions.yaml":890,"./015 formula filters.yaml":891,"./016 formula math.yaml":892,"./017 formula string concat.yaml":893,"./018 formula chained math.yaml":894,"./019 formula boolean.yaml":895,"./900 simplest schema.yaml":896,"./901 network configuration.yaml":897,"./902 advanced network configuration.yaml":898};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=876},877:function(t,e,n){t.exports=n.p+"examples/001 primitive types.yaml"},878:function(t,e,n){t.exports=n.p+"examples/002 abstract data types.yaml"},879:function(t,e,n){t.exports=n.p+"examples/003 structures.yaml"},880:function(t,e,n){t.exports=n.p+"examples/004 optional types.yaml"},881:function(t,e,n){t.exports=n.p+"examples/005 compound types.yaml"},882:function(t,e,n){t.exports=n.p+"examples/006 annotations.yaml"},883:function(t,e,n){t.exports=n.p+"examples/007 group annotations.yaml"},884:function(t,e,n){t.exports=n.p+"examples/008 property annotations.yaml"},885:function(t,e,n){t.exports=n.p+"examples/009 array annotations.yaml"},886:function(t,e,n){t.exports=n.p+"examples/010 integer validation.yaml"},887:function(t,e,n){t.exports=n.p+"examples/011 number validation.yaml"},888:function(t,e,n){t.exports=n.p+"examples/012 string validation.yaml"},889:function(t,e,n){t.exports=n.p+"examples/013 array validation.yaml"},890:function(t,e,n){t.exports=n.p+"examples/014 formula functions.yaml"},891:function(t,e,n){t.exports=n.p+"examples/015 formula filters.yaml"},892:function(t,e,n){t.exports=n.p+"examples/016 formula math.yaml"},893:function(t,e,n){t.exports=n.p+"examples/017 formula string concat.yaml"},894:function(t,e,n){t.exports=n.p+"examples/018 formula chained math.yaml"},895:function(t,e,n){t.exports=n.p+"examples/019 formula boolean.yaml"},896:function(t,e,n){t.exports=n.p+"examples/900 simplest schema.yaml"},897:function(t,e,n){t.exports=n.p+"examples/901 network configuration.yaml"},898:function(t,e,n){t.exports=n.p+"examples/902 advanced network configuration.yaml"},900:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=900}}]);
//# sourceMappingURL=2.js.map