(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{337:function(e,n,s){"use strict";s.r(n);var i={name:"VueConditional",data:function(){return{showing:!0,age:32}},computed:{seenComputed:function(){return!0}}},o=s(33),t=Object(o.a)(i,(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"container"},[e.showing?s("p",[e._v('"See me"'),s("span",[e._v(" and its childs")])]):e.showing?s("p",[e._v("Can't see me")]):s("p",[e._v("if second option")]),e._v(" "),e.showing?[s("li",[e._v('"See me"')]),e._v(" "),s("li",[e._v("and its siblings")])]:e._e(),e._v(" "),e.seenComputed?s("p",[e._v("See me computed ?")]):e._e(),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"showing"}]},[e._v('"Using V-Show will show in the DOM"')]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:!e.showing,expression:"!showing"}]},[e._v("Can't see me")]),e._v(" "),s("p",[e._v("Am I Retired? "+e._s(60==e.age?"Yes":"No"))])],2)}),[],!1,null,null,null);n.default=t.exports}}]);