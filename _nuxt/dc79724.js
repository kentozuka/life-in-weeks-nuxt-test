(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(t,e,r){var content=r(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("762541ba",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";r(261)},264:function(t,e,r){(e=r(45)(!1)).push([t.i,".fade-enter-active[data-v-291db0f8],.fade-leave-active[data-v-291db0f8]{transition:opacity .5s}.fade-enter[data-v-291db0f8],.fade-leave-active[data-v-291db0f8]{opacity:0}.num[data-v-291db0f8]{width:16px}.box[data-v-291db0f8],.num[data-v-291db0f8]{height:20px}.box[data-v-291db0f8]{width:20px;border-radius:2px;margin:0 2px 4px}",""]),t.exports=e},279:function(t,e,r){"use strict";r.r(e);r(8),r(25),r(82),r(44);var n=r(1).a.extend({transition:"fade",asyncData:function(t){return{username:t.params.username}},data:function(){return{showMenu:!1,now:new Date,diesAt:100,weeksYear:52,daysYear:365}},computed:{birthday:function(){return this.$accessor.birthday},daysPassed:function(){return this.diffPassed(this.birthday,"day")},weeksPassed:function(){return this.diffPassed(this.birthday,"week")},lifeDays:function(){return this.diesAt*this.daysYear}},methods:{goback:function(){this.$router.go(-1)},commad:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},sum:function(t,e){return t*this.weeksYear+e},passed:function(t,e){return this.sum(t,e+1)<=this.weeksPassed},diffPassed:function(t,e){var r=this.$dayjs(t);return this.$dayjs(this.now).diff(r,e)},toggleMenu:function(){this.showMenu=!this.showMenu},parentClicked:function(t){if(this.showMenu){var menu=document.getElementById("menu"),e=document.getElementById("setting"),r=menu.contains(t.target),n=e.contains(t.target);r||n||this.toggleMenu()}}}}),o=(r(263),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col px-5 md:px-24 select-none",on:{click:t.parentClicked}},[r("div",{staticClass:"w-full flex justify-between py-8"},[r("button",{staticClass:"w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition duration-200 transform -translate-x-2",on:{click:t.goback}},[r("svg",{staticClass:"feather feather-chevron-left",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("polyline",{attrs:{points:"15 18 9 12 15 6"}})])]),t._v(" "),r("div",{staticClass:"flex relative"},[r("button",{staticClass:"w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition duration-200"},[r("svg",{staticClass:"feather feather-trash-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("polyline",{attrs:{points:"3 6 5 6 21 6"}}),t._v(" "),r("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),t._v(" "),r("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),t._v(" "),r("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})])]),t._v(" "),r("button",{staticClass:"w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition duration-200 ml-4",attrs:{id:"setting"},on:{click:t.toggleMenu}},[r("svg",{staticClass:"feather feather-tool",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}})])]),t._v(" "),t.showMenu?r("div",{staticClass:"absolute top-0 right-0 transform translate-y-12 mt-1 bg-white border border-gray-300 shadow-lg rounded-lg z-30",attrs:{id:"menu"}},[r("div",{staticClass:"p-4 text-left"},[r("h1",{staticClass:"text-lg font-bold pb-4"},[t._v("Setting")]),t._v(" "),r("div",{staticClass:"pb-4"},[r("h2",{staticClass:"pb-2"},[t._v("Life expectancy")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.diesAt,expression:"diesAt"}],staticClass:"border-b p-1",attrs:{type:"number",name:"expectancy"},domProps:{value:t.diesAt},on:{input:function(e){e.target.composing||(t.diesAt=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pb-4"},[r("h2",{staticClass:"pb-2"},[t._v("Database support")]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("p",{staticClass:"pr-4 text-sm text-gray-600"},[t._v("Off")]),t._v(" "),r("svg",{staticClass:"text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}},[r("rect",{attrs:{x:"1",y:"5",width:"22",height:"14",rx:"7",ry:"7"}}),t._v(" "),r("circle",{attrs:{cx:"8",cy:"12",r:"3"}})])])]),t._v(" "),r("button",{staticClass:"mt-4 w-full py-2 bg-black text-white font-bold rounded-lg",on:{click:t.toggleMenu}},[t._v("\n            Save\n          ")])])]):t._e()])]),t._v(" "),r("div",{staticClass:"pb-8 md:pb-12"},[r("h1",{staticClass:"text-2xl font-bold"},[t._v("Your life in weeks")]),t._v(" "),r("p",[t._v("Born "+t._s(t.commad(t.daysPassed))+" days ago")])]),t._v(" "),r("p",{staticClass:"text-sm text-right text-gray-600 pb-2"},[t._v("\n    "+t._s(Math.round(t.daysPassed/t.lifeDays*100))+"% completed\n  ")]),t._v(" "),r("div",{staticClass:"pb-2 overflow-x-scroll"},t._l(Array(Number(t.diesAt)).fill(1),(function(e,n){return r("div",{key:n,staticClass:"flex items-center year"},[r("div",{staticClass:"num flex-none absolute transform -translate-x-4"},[r("p",{staticClass:"text-xs"},[t._v("\n          "+t._s(n%5==0?n:"")+"\n        ")])]),t._v(" "),t._l(Array(t.weeksYear).fill(1),(function(e,o){return r("div",{key:o,staticClass:"weeks relative"},[r("div",{staticClass:"box",class:{"bg-green-500":t.passed(n,o),"border border-gray-400":!t.passed(n,o)}})])}))],2)})),0),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-12 pb-24 flex justify-center"},[e("a",{staticClass:"text-gray-600",attrs:{href:"https://www.github.com/kentozuka",target:"_blank"}},[this._v("GitHub: kentozuka")])])}],!1,null,"291db0f8",null);e.default=component.exports}}]);