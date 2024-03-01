(window.webpackJsonp=window.webpackJsonp||[]).push([[80,14],{436:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),o=r(11);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},m=c,f=r(16),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(e,n){return r("li",{key:n},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,r){"use strict";r(25),r(37);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,passwordLength:6,maxImageSize:1,maxExcelSize:2,maxVideoSize:2,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e*1024?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e*1024?this.$t("util.fSize",{size:e}):r&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},806:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),o=r(5),l=(r(21),r(11)),c=r(439),m=r(148),f=r(436);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"login",layout:"login-layout",middleware:["common-middleware","non-logged-in"],data:function(){return{email:"",hasError:!1,formSubmitting:!1}},mixins:[c.a],components:{AjaxButton:m.default,ErrorFormatter:f.default},watch:{},computed:{isInvalidEmail:function(){return this.email&&!this.isValidEmail(this.email)},isLengthInvalid:function(){return this.password&&!this.isValidLength(this.password)}},methods:h(h({checkForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasError=!1,t.email&&!t.isInvalidEmail){e.next=4;break}return t.hasError=!0,e.abrupt("return",!1);case 4:return t.formSubmitting=!0,e.prev=5,e.next=8,t.setRequest({params:{email:t.email},api:"forgotPassword"});case 8:e.sent&&t.$router.push("/verify-code?email=".concat(t.email)),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",t.$nuxt.error(e.t0));case 15:t.formSubmitting=!1;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))()}},Object(l.b)("ui",["setErrors"])),Object(l.b)("common",["setRequest"])),mounted:function(){this.setErrors()}},O=r(16),component=Object(O.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"login-form",class:{"has-error":t.hasError},on:{submit:function(e){return e.preventDefault(),t.checkForm()}}},[r("h4",{staticClass:"mb-30 mb-sm-15"},[t._v("\n    "+t._s(t.$t("profile.sendCode"))+"\n  ")]),t._v(" "),r("error-formatter"),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("div",{staticClass:"icon-input"},[r("i",{staticClass:"icon email-icon"},[t._v(" ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],class:{invalid:!t.email||t.isInvalidEmail},attrs:{type:"text",placeholder:t.$t("fSale.email")},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),!t.email&&t.hasError?r("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("category.req",{type:t.$t("fSale.email")}))+"\n    ")]):t.isInvalidEmail&&t.hasError?r("span",{staticClass:"error"},[t._v("\n      "+t._s(t.$t("user.isValid",{type:t.$t("fSale.email")}))+"\n    ")]):t._e()]),t._v(" "),r("div",{staticClass:"dply-felx j-right mt-15"},[r("nuxt-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("\n      "+t._s(t.$t("profile.ltya"))+"\n    ")])],1),t._v(" "),r("ajax-button",{staticClass:"mt-20 primary-btn",attrs:{"fetching-data":t.formSubmitting,"loading-text":t.$t("profile.se"),text:t.$t("profile.svc"),"activate-btn":!0}})],1)}),[],!1,null,"672f2cd9",null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(436).default,AjaxButton:r(148).default})}}]);