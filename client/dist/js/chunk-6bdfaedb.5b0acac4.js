(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bdfaedb"],{"0d01":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.d.title?r("div",{attrs:{id:"ArticleID"}},[r("h1",[t._v(t._s(t.d.title))]),r("p",{staticClass:"author-time"},[t._v(" 作者："+t._s(t.d.author.user)+" 时间："+t._s(t._f("fmtTime")(t.d.time))+" ")]),r("div",{ref:"mdToHTML",attrs:{id:"article-content"}})]):t._e()},a=[],i=r("1da1"),s=(r("96cf"),{name:"ArticleID",data:function(){return{d:{}}},watch:{$route:function(){this.refresh()}},methods:{refresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$route.params.id,e.next=3,t.$axios({method:"get",url:"/art/id",params:{id:r}});case 3:return n=e.sent,t.d=n.data.data,e.next=7,t.$axios({method:"get",url:t.d.src});case 7:a=e.sent,i=a.data,t.$refs.mdToHTML.innerHTML="",editormd.markdownToHTML("article-content",{markdown:i,toc:!1,emoji:!0,taskList:!0,tex:!0,flowChart:!0,sequenceDiagram:!0});case 11:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.refresh()}}),c=s,o=(r("6628"),r("2877")),d=Object(o["a"])(c,n,a,!1,null,"4b4c5d72",null);e["default"]=d.exports},"369c":function(t,e,r){},6628:function(t,e,r){"use strict";r("369c")}}]);
//# sourceMappingURL=chunk-6bdfaedb.5b0acac4.js.map