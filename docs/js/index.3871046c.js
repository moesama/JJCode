(function(e){function t(t){for(var o,s,n=t[0],r=t[1],c=t[2],d=0,p=[];d<n.length;d++)s=n[d],l[s]&&p.push(l[s][0]),l[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,n=1;n<a.length;n++){var r=a[n];0!==l[r]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},l={index:0},i=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";var o=a("27fb"),l=a.n(o);l.a},"27fb":function(e,t,a){},9142:function(e){e.exports=[{label:"明亮",options:[{value:"ace/theme/chrome",label:"Chrome"},{value:"ace/theme/clouds",label:"Clouds"},{value:"ace/theme/crimson_editor",label:"Crimson Editor"},{value:"ace/theme/dawn",label:"Dawn"},{value:"ace/theme/dreamweaver",label:"Dreamweaver"},{value:"ace/theme/eclipse",label:"Eclipse"},{value:"ace/theme/github",label:"GitHub"},{value:"ace/theme/iplastic",label:"IPlastic"},{value:"ace/theme/solarized_light",label:"Solarized Light"},{value:"ace/theme/textmate",label:"TextMate"},{value:"ace/theme/tomorrow",label:"Tomorrow"},{value:"ace/theme/xcode",label:"XCode"},{value:"ace/theme/kuroir",label:"Kuroir"},{value:"ace/theme/katzenmilch",label:"KatzenMilch"},{value:"ace/theme/sqlserver",label:"SQL Server"}]},{label:"黑暗",options:[{value:"ace/theme/ambiance",label:"Ambiance"},{value:"ace/theme/chaos",label:"Chaos"},{value:"ace/theme/clouds_midnight",label:"Clouds Midnight"},{value:"ace/theme/cobalt",label:"Cobalt"},{value:"ace/theme/gruvbox",label:"Gruvbox"},{value:"ace/theme/idle_fingers",label:"idle Fingers"},{value:"ace/theme/kr_theme",label:"krTheme"},{value:"ace/theme/merbivore",label:"Merbivore"},{value:"ace/theme/merbivore_soft",label:"Merbivore Soft"},{value:"ace/theme/mono_industrial",label:"Mono Industrial"},{value:"ace/theme/monokai",label:"Monokai"},{value:"ace/theme/pastel_on_dark",label:"Pastel on dark"},{value:"ace/theme/solarized_dark",label:"Solarized Dark"},{value:"ace/theme/terminal",label:"Terminal"},{value:"ace/theme/tomorrow_night",label:"Tomorrow Night"},{value:"ace/theme/tomorrow_night_blue",label:"Tomorrow Night Blue"},{value:"ace/theme/tomorrow_night_bright",label:"Tomorrow Night Bright"},{value:"ace/theme/tomorrow_night_eighties",label:"Tomorrow Night 80s"},{value:"ace/theme/twilight",label:"Twilight"},{value:"ace/theme/vibrant_ink",label:"Vibrant Ink"}]}]},b6a1:function(e,t,a){"use strict";var o=a("f0af"),l=a.n(o);l.a},cd49:function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),l=a("2f62"),i=a("5c96"),s=a.n(i),n=(a("0fae"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-dialog",{attrs:{title:"一键扒帖",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"帖子内容"}},[a("el-input",{attrs:{type:"textarea",rows:10,placeholder:"请输入内容"},model:{value:e.topicCopy,callback:function(t){e.topicCopy=t},expression:"topicCopy"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.hideBaDialog}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.applyBa}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"格式输出",visible:e.dialogOutputVisible},on:{"update:visible":function(t){e.dialogOutputVisible=t}}},[a("el-input",{attrs:{placeholder:"请输入防抄标签"},model:{value:e.outputTag,callback:function(t){e.outputTag=t},expression:"outputTag"}},[a("el-button",{attrs:{slot:"append"},on:{click:e.produceOutput},slot:"append"},[e._v("重新生成防抄贴")])],1),a("div",{staticClass:"output",attrs:{id:"output"}},[e._v(e._s(e.output))]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.copyOutput}},[e._v("全选")])],1)],1),a("div",{staticClass:"split split-horizontal",attrs:{id:"workspace"}},[a("editor",{staticClass:"editor",model:{value:e.$store.state.content,callback:function(t){e.$set(e.$store.state,"content",t)},expression:"$store.state.content"}}),a("div",{staticClass:"toolbar"},[a("el-popover",{ref:"popover_shortcut",attrs:{placement:"left",trigger:"hover"}},[a("h3",[e._v("快捷键说明")]),a("el-table",{attrs:{data:e.shortcutData}},[a("el-table-column",{attrs:{prop:"command",label:"操作",width:"180"}}),a("el-table-column",{attrs:{prop:"shortcut",label:"快捷键",width:"180"}})],1),a("el-button",{attrs:{slot:"reference",size:"small",icon:"el-icon-info"},slot:"reference"})],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"输出格式化代码",placement:"left"}},[a("el-button",{attrs:{size:"small"},on:{click:e.showOutputDialog}},[a("i",{staticClass:"fa fa-align-justify",attrs:{"aria-hidden":"true"}})])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"一键扒帖",placement:"left"}},[a("el-button",{attrs:{size:"small"},on:{click:e.showBaDialog}},[e._v("\n                    扒\n                ")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载",placement:"left"}},[a("el-button",{attrs:{size:"small"},on:{click:e.download}},[a("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})])],1),a("el-popover",{ref:"popover_config",attrs:{placement:"left",trigger:"click"}},[a("el-form",[a("el-form-item",{attrs:{label:"主题"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.$store.state.theme,callback:function(t){e.$set(e.$store.state,"theme",t)},expression:"$store.state.theme"}},e._l(e.themes,function(t){return a("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)}),1)],1)],1)],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"设置",placement:"left"}},[a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover_config",arg:"popover_config"}],attrs:{size:"small"}},[a("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}})])],1)],1)],1),a("JJ",{staticClass:"split split-horizontal",attrs:{id:"preview"}})],1)}),r=[],c=a("9ab4"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"preview"},[a("iframe",{attrs:{id:"preview_frame",src:"jj.html"}}),a("div",{staticClass:"slider-block"},[a("i",{staticClass:"el-icon-plus",on:{click:e.zoomIn}}),a("el-slider",{staticClass:"slider",attrs:{vertical:"",height:"200px",min:50,max:150,step:25,"show-stops":""},model:{value:e.scale,callback:function(t){e.scale=t},expression:"scale"}}),a("i",{staticClass:"el-icon-minus",on:{click:e.zoomOut}})],1)])},d=[],p=a("b6e2"),m=a.n(p),h=a("60a3");let b=class extends h["c"]{constructor(){super(...arguments),this.inputTimer=null,this.scale=100}zoomIn(){this.scale<150&&(this.scale+=25)}zoomOut(){this.scale>50&&(this.scale-=25)}onContentChanged(e,t){e!=t&&(this.inputTimer&&clearTimeout(this.inputTimer),this.inputTimer=setTimeout(()=>{const t=document.getElementById("preview_frame").contentWindow,a=t.document.getElementById("topic");a&&(a.innerHTML=e,window.localStorage.draft=e)},1e3))}onScaleChanged(e,t){const a=document.getElementById("preview_frame").contentWindow;m()(a.document.body).css("transform","scale("+e/100+")")}};c["a"]([Object(h["d"])("$store.state.content"),c["b"]("design:type",Function),c["b"]("design:paramtypes",[Object,Object]),c["b"]("design:returntype",void 0)],b.prototype,"onContentChanged",null),c["a"]([Object(h["d"])("scale"),c["b"]("design:type",Function),c["b"]("design:paramtypes",[Object,Object]),c["b"]("design:returntype",void 0)],b.prototype,"onScaleChanged",null),b=c["a"]([h["a"]],b);var f=b,v=f,g=(a("b6a1"),a("2877")),w=Object(g["a"])(v,u,d,!1,null,null,null),y=w.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"editor"}},[e._v("\n    "+e._s(e.value)+"\n")])},C=[],O=a("e552"),k=a.n(O);let T=class extends h["c"]{constructor(){super(...arguments),this.value=""}mounted(){const e=this;this.editor=ace.edit("editor"),this.editor.session.setMode("ace/mode/html"),window.localStorage.theme&&(this.$store.state.theme=window.localStorage.theme),this.editor.setOptions({enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0}),this.editor.session.on("change",()=>{e.$emit("input",e.editor.session.doc.getValue())}),this.editor.commands.addCommand({name:"format",bindKey:{win:"Ctrl-Alt-F",mac:"Command-Option-F"},exec(){e.beautify()}}),window.localStorage.draft&&this.editor.session.setValue(window.localStorage.draft)}beautify(){const e=k.a.html_beautify(this.editor.session.getValue(),{indent_size:4,end_with_newline:!0,unformatted:[]});this.editor.session.doc.setValue(e)}onValueChanged(e){this.editor.session.doc.getValue()!=e&&this.editor.session.doc.setValue(e)}onThemeChanged(e,t){window.localStorage.theme=e,this.editor.setTheme(e)}};c["a"]([Object(h["b"])(),c["b"]("design:type",String)],T.prototype,"value",void 0),c["a"]([Object(h["d"])("value"),c["b"]("design:type",Function),c["b"]("design:paramtypes",[Object]),c["b"]("design:returntype",void 0)],T.prototype,"onValueChanged",null),c["a"]([Object(h["d"])("$store.state.theme"),c["b"]("design:type",Function),c["b"]("design:paramtypes",[Object,Object]),c["b"]("design:returntype",void 0)],T.prototype,"onThemeChanged",null),T=c["a"]([h["a"]],T);var x=T,j=x,S=Object(g["a"])(j,_,C,!1,null,null,null),z=S.exports,B=a("1970");class V{static format(e){for(const t in this.rules)e=e.replace(new RegExp(t,"gi"),this.rules[t]);return e}}V.rules={"\\n":"","\\s+":" ",width:"WIDTH",height:"HEIGHT",style:"STYLE"};let $=class extends h["c"]{constructor(){super(...arguments),this.dialogFormVisible=!1,this.dialogOutputVisible=!1,this.topicCopy="",this.output="",this.outputTag="",this.shortcutData=a("f60a"),this.themes=a("9142")}mounted(){Object(B["a"])(["#workspace","#preview"])}download(){const e=URL||webkitURL||window,t=window;let a=null;const o="output.html";try{a=new Blob([this.$store.state.content],{type:"text/html"})}catch(c){const e=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder,o=new e;o.append(this.$store.state.content),a=o.getBlob("text/plain;charset=gb2312")}const l=a.type,i="application/octet-stream";if(l&&l!=i){const e=a.slice||a.webkitSlice||a.mozSlice;a=e.call(a,0,a.size,i)}const s=e.createObjectURL(a),n=document.createElementNS("http://www.w3.org/1999/xhtml","a");n.href=s,n.download=o;const r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(r),e.revokeObjectURL(s)}showBaDialog(){this.dialogFormVisible=!0}hideBaDialog(){this.dialogFormVisible=!1}applyBa(){this.dialogFormVisible=!1;const e=m()(this.topicCopy).find("#topic").html();e&&(this.$store.state.content=e),this.topicCopy=""}showOutputDialog(){this.produceOutput(),this.dialogOutputVisible=!0}hideOutputDialog(){this.dialogOutputVisible=!1}produceOutput(){if(this.outputTag&&""!=this.outputTag){const e=this,t=m()("<div>").append(this.$store.state.content);t.find("*").each((t,a)=>{Math.random()<.3&&m()(a).addClass(e.outputTag+"_"+t)}),this.output=V.format(t[0].innerHTML)}else this.output=V.format(this.$store.state.content)}copyOutput(){const e=document.getElementById("output");if(document.body.createTextRange){const t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){const t=window.getSelection(),a=document.createRange();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a)}}};$=c["a"]([Object(h["a"])({components:{JJ:y,Editor:z}})],$);var E=$,M=E,F=(a("034f"),Object(g["a"])(M,n,r,!1,null,null,null)),D=F.exports;o["default"].use(l["a"]);var I=new l["a"].Store({state:{content:"",theme:""}});o["default"].config.productionTip=!1,o["default"].use(l["a"]),o["default"].use(s.a);new o["default"]({el:"#app",store:I,render:e=>e(D)})},f0af:function(e,t,a){},f60a:function(e){e.exports=[{command:"格式化代码",shortcut:"Ctrl + Alt + F"},{command:"撤销",shortcut:"Ctrl + Z"},{command:"重做",shortcut:"Ctrl + Y"}]}});