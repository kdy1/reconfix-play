(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1607:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(0),l=n(49),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return r.createElement(l.Box,null,"Examples:",r.createElement("a",{href:"?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string"},"one property")," | ",r.createElement("a",{href:"?yaml=title%3A resin-cli demo%0Aversion%3A 1%0Adefinitions%3A%0A%20 bootPartition%3A %26BOOT_PARTITION%0A%20%20%20 partition%3A 1%0Amapping%3A%0A%20 targets%3A%0A%20%20%20 config_json%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A json%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fconfig.json%0A%20%20%20 resin_wifi%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A ini%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fsystem-connections%2Fresin-wifi%0Aproperties%3A%0A%20 - network%3A%0A%20%20%20%20%20 title%3A Network%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - ssid%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network SSID%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 1%0A%20%20%20%20%20%20%20%20%20%20%20 maxLength%3A 32%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi.ssid%0A%20%20%20%20%20%20%20 - passphrase%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network Key%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A password%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 8%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi-security.psk%0A%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20 template%3A%0A%20%20%20%20%20%20%20%20%20 connection%3A%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A wifi%0A%20%20%20%20%20%20%20%20%20 wifi%3A%0A%20%20%20%20%20%20%20%20%20%20%20 hidden%3A true%0A%20%20%20%20%20%20%20%20%20%20%20 mode%3A infrastructure%0A%20%20%20%20%20%20%20%20%20 wifi-security%3A%0A%20%20%20%20%20%20%20%20%20%20%20 auth-alg%3A open%0A%20%20%20%20%20%20%20%20%20%20%20 key-mgmt%3A wpa-psk%0A%20%20%20%20%20%20%20%20%20 ipv4%3A%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20%20%20%20%20%20%20%20%20 ipv6%3A%0A%20%20%20%20%20%20%20%20%20%20%20 addr-gen-mode%3A stable-privacy%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20 - advanced%3A%0A%20%20%20%20%20 title%3A Advanced%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - hostname%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Device Hostname%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A hostname%0A%20%20%20%20%20%20%20 - persistentLogging%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Do you want to enable persistent logging%3F%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A boolean%0A%20%20%20%20%20%20%20%20%20%20%20 default%3A false%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A persistentLogging"},"network configuration"),r.createElement(l.Divider,null),"Documentation:",r.createElement("a",{href:"https://github.com/balena-io-modules/balena-cdsl/issues/15"},"What is supported")," | ",r.createElement("a",{href:"https://github.com/balena-io/balena/blob/832f5551127dd8e1e82fa082bea97fc4db81c3ce/specs/configuration-dsl.md"},"DSL specification")," | ",r.createElement("a",{href:"https://github.com/balena-io/balena/blob/63ca3a4b026694750f8d6f4e3eea9792cf344426/specs/configuration-dsl-mapping-extension.md"},"Mapping extensions")," | ",r.createElement("a",{href:"https://github.com/balena-io/balena/blob/8e9c7c177e8d730484fbfce5c4281d4c7c205565/specs/json-schema-extensions.md"},"JSON Schema extensions"))},t}(i.Component);t.default=c},1608:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(0),l=n(49),c=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){return r.createElement(l.Box,null,r.createElement(l.Link,{href:this.getPermalink()},"permalink"))},t.prototype.getPermalink=function(){try{return"?yaml="+encodeURIComponent(this.props.text)}catch(e){console.log(e)}},t.decode=function(){try{var e=new URLSearchParams(window.location.search),t=e.get("yaml");return e&&t?decodeURIComponent(t):null}catch(e){console.log(e)}},t}(i.Component);t.default=c},1610:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(49),i=n(1478),l=n(1435),c=n(1607),s=n.n(c),u=n(1608),p=n.n(u);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){return JSON.stringify(e,null,2)},_=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,h(t).call(this))).state={json_schema_text:"",json_schema:{},ui_object_text:"",ui_object:{},yaml_text:"",has_error:!1,formData:"",errors:""},e}var n,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o["Component"]),n=t,(c=[{key:"evaluate",value:function(e){this.setState({yaml_text:e});try{var t=l.h(e);this.setState({json_schema:t.json_schema,ui_object:t.ui_object,json_schema_text:d(t.json_schema),ui_object_text:d(t.ui_object),has_error:!1})}catch(e){this.setState({has_error:!0,errors:e})}}},{key:"componentDidMount",value:function(){this.setDataFromUrl()}},{key:"setDataFromUrl",value:function(){var e=p.a.decode();e&&this.evaluate(e)}},{key:"renderFormData",value:function(e){try{var t=e.formData;this.setState({formData:d(t)})}catch(e){console.log(e)}}},{key:"noTab",value:function(e){9==(e.keyCode||e.which)&&e.preventDefault()}},{key:"noop",value:function(){}},{key:"render",value:function(){var e=this;return a.a.createElement(r.Box,null,a.a.createElement(s.a,null),a.a.createElement(r.Divider,null),a.a.createElement(p.a,{text:this.state.yaml_text}),a.a.createElement(r.Box,null,a.a.createElement(r.Flex,{flexDirection:"column"},a.a.createElement(r.Flex,null,a.a.createElement(r.Textarea,{monospace:!0,minRows:12,autoRows:!0,maxRows:16,placeholder:"yaml",onChange:function(t){return e.evaluate(t.target.value)},value:this.state.yaml_text,onKeyDown:function(t){return e.noTab(t)}})))),a.a.createElement(r.Divider,null),this.state.has_error?null:a.a.createElement(r.Box,null,a.a.createElement(r.Box,null,a.a.createElement(r.Heading.h4,null,"Rendered form"),a.a.createElement(r.Flex,null,a.a.createElement(i.Form,{schema:this.state.json_schema,uiSchema:this.state.ui_object,onFormSubmit:function(t){return e.renderFormData(t)}}))),this.state.formData?a.a.createElement(r.Box,null,a.a.createElement(r.Heading.h4,null,"Form data (dry json)"),a.a.createElement(r.Flex,null,a.a.createElement(r.Textarea,{monospace:!0,autoRows:!0,readOnly:!0,placeholder:"form data",value:this.state.formData,onChange:function(t){return e.noop(t)}}))):null),a.a.createElement(r.Divider,null),a.a.createElement(r.Box,null,this.state.has_error?a.a.createElement(r.Box,null,a.a.createElement(r.Flex,null,a.a.createElement(r.Textarea,{monospace:!0,autoRows:!0,readOnly:!0,placeholder:"errors",onChange:function(t){return e.noop(t)},value:this.state.errors}))):null,this.state.has_error?null:a.a.createElement(r.Box,null,a.a.createElement(r.Heading.h4,null,"JSON and UI schemas"),a.a.createElement(r.Flex,null,a.a.createElement(r.Textarea,{monospace:!0,autoRows:!0,readOnly:!0,maxRows:16,placeholder:"json schema",onChange:function(t){return e.noop(t)},value:this.state.json_schema_text}),a.a.createElement(r.Textarea,{monospace:!0,autoRows:!0,readOnly:!0,maxRows:16,placeholder:"ui object",onChange:function(t){return e.noop(t)},value:this.state.ui_object_text})))),a.a.createElement(r.Divider,null))}}])&&m(n.prototype,c),u&&m(n,u),t}();t.default=_}}]);
//# sourceMappingURL=2.js.map