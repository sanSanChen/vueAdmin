webpackJsonp([3],{"9oQk":function(t,e,r){"use strict";var n=r("P9l9");e.a={data:function(){return{filters:{name:""},loading:!1,users:[]}},methods:{formatSex:function(t,e){return 1==t.sex?"男":0==t.sex?"女":"未知"},getUser:function(){var t=this,e={name:this.filters.name};this.loading=!0,r.i(n.a)(e).then(function(e){t.users=e.data.users,t.loading=!1})}},mounted:function(){this.getUser()}}},HxJh:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[r("el-form",{attrs:{inline:!0,model:t.filters}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"姓名"},model:{value:t.filters.name,callback:function(e){t.filters.name=e},expression:"filters.name"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.getUser}},[t._v("查询")])],1)],1)],1),t._v(" "),[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.users,"highlight-current-row":""}},[r("el-table-column",{attrs:{type:"index",width:"60"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100",formatter:t.formatSex,sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"age",label:"年龄",width:"100",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"birth",label:"生日",width:"120",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"addr",label:"地址","min-width":"180",sortable:""}})],1)]],2)},a=[],o={render:n,staticRenderFns:a};e.a=o},M9of:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"",""])},P9l9:function(t,e,r){"use strict";r.d(e,"g",function(){return o}),r.d(e,"a",function(){return i}),r.d(e,"b",function(){return s}),r.d(e,"c",function(){return l}),r.d(e,"f",function(){return u}),r.d(e,"d",function(){return c}),r.d(e,"e",function(){return f});var n=r("mtWM"),a=r.n(n),o=function(t){return a.a.post("/login",t).then(function(t){return t.data})},i=function(t){return a.a.get("/user/list",{params:t})},s=function(t){return a.a.get("/user/listpage",{params:t})},l=function(t){return a.a.get("/user/remove",{params:t})},u=function(t){return a.a.get("/user/batchremove",{params:t})},c=function(t){return a.a.get("/user/edit",{params:t})},f=function(t){return a.a.get("/user/add",{params:t})}},PllQ:function(t,e,r){"use strict";function n(t){r("hXKk")}Object.defineProperty(e,"__esModule",{value:!0});var a=r("9oQk"),o=r("HxJh"),i=r("VU/8"),s=n,l=i(a.a,o.a,s,"data-v-126519a6",null);e.default=l.exports},hXKk:function(t,e,r){var n=r("M9of");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("2886017a",n,!0)}});