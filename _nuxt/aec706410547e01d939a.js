(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1514:function(t,e,n){"use strict";var r=n(435);n.n(r).a},1515:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".watermark .nya-subtitle{margin-top:.9375rem}.watermark .preview{position:relative;max-width:50rem}.watermark .preview img{width:100%;height:100%}.watermark .preview .watermark{position:absolute;left:0;top:0;width:100%;height:100%}.watermark .results{max-width:100%}.watermark .inputbtn{margin-bottom:.9375rem}",""])},1585:function(t,e,n){"use strict";n.r(e);var r=n(434).a,o=(n(1514),n(2)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"watermark"},[n("nya-container",{attrs:{title:"图片加水印"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{staticClass:"upfile",attrs:{type:"file",accept:"image/*",label:"请选择要添加水印的图片",placeholder:"点击这里上传文件"},on:{change:t.handleChange},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.addWatermark}},[t._v("\n                "+t._s(t.requestIn?"处理中":"开始处理")+"\n            ")])],1),t._v(" "),n("nya-input",{attrs:{label:"请输入水印文字",placeholder:"Hello MikuTools",autocomplete:"off",autofocus:"",fullwidth:""},model:{value:t.options.text,callback:function(e){t.$set(t.options,"text","string"==typeof e?e.trim():e)},expression:"options.text"}}),t._v(" "),n("div",{staticClass:"nya-subtitle"},[t._v("\n            字体大小\n        ")]),t._v(" "),n("no-ssr",[n("vue-slider",{attrs:{lazy:"",min:10,max:30},model:{value:t.options.fontSize,callback:function(e){t.$set(t.options,"fontSize",e)},expression:"options.fontSize"}})],1),t._v(" "),n("div",{staticClass:"nya-subtitle"},[t._v("\n            透明度\n        ")]),t._v(" "),n("no-ssr",[n("vue-slider",{attrs:{lazy:"",min:0,max:10},model:{value:t.options.alpha,callback:function(e){t.$set(t.options,"alpha",e)},expression:"options.alpha"}})],1),t._v(" "),n("div",{staticClass:"nya-subtitle"},[t._v("\n            旋转角度\n        ")]),t._v(" "),n("no-ssr",[n("vue-slider",{attrs:{lazy:"",min:0,max:360},model:{value:t.options.rotate,callback:function(e){t.$set(t.options,"rotate",e)},expression:"options.rotate"}})],1),t._v(" "),n("div",{staticClass:"nya-subtitle"},[t._v("\n            文本间距\n        ")]),t._v(" "),n("no-ssr",[n("vue-slider",{attrs:{lazy:"",min:0,max:100},model:{value:t.options.width,callback:function(e){t.$set(t.options,"width",e)},expression:"options.width"}})],1),t._v(" "),n("div",{staticClass:"nya-subtitle"},[t._v("\n            文字颜色\n        ")]),t._v(" "),n("no-ssr",[n("compact-picker",{on:{input:t.updateColor},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),t.preview?n("div",{staticClass:"nya-subtitle"},[t._v("\n            预览\n        ")]):t._e(),t._v(" "),t.preview?n("div",{ref:"preview",staticClass:"preview"},[n("img",{attrs:{src:t.preview,alt:"preview"}}),t._v(" "),n("div",{staticClass:"watermark",style:{background:"url("+t.svg+")"}})]):t._e()],1),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[t._v("主要用于某些需要实名认证的情况下，避免将您的一些信息泄露出去")])]),t._v(" "),n("li",[n("b",[t._v("全部过程均在本地进行，不会在云端存储您的任何信息")])]),t._v(" "),n("li",[t._v("如果生成时间过长或生成失败，请使用其他浏览器，推荐使用 Chrome")])])])],1)},[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";e.a=function(t,e){var a=document.createElement("a");a.href=t,a.download=e,a.click()}},341:function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(content,t){return"data:"+t+";base64,"+content},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(canvas){return canvas.toBlob?new Promise(function(t){canvas.toBlob(t)}):function(canvas){return new Promise(function(t){for(var e=window.atob(canvas.toDataURL().split(",")[1]),n=e.length,r=new Uint8Array(n),i=0;i<n;i++)r[i]=e.charCodeAt(i);t(new Blob([r],{type:"image/png"}))})}(canvas)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),base=n.createElement("base");n.head.appendChild(base);var a=n.createElement("a");return n.body.appendChild(a),base.href=e,a.href=t,a.href},getAndEncode:function(t){var e=3e4;f.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise(function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4!==o.readyState)return;if(200!==o.status)return void(r?n(r):l("cannot fetch resource: "+t+", status: "+o.status));var e=new FileReader;e.onloadend=function(){var content=e.result.split(/,/)[1];n(content)},e.readAsDataURL(o.response)},o.ontimeout=function(){r?n(r):l("timeout of "+e+"ms occured while fetching resource: "+t)},o.responseType="blob",o.timeout=e,o.open("GET",t,!0),o.send(),f.impl.options.imagePlaceholder){var c=f.impl.options.imagePlaceholder.split(/,/);c&&c[1]&&(r=c[1])}function l(t){console.error(t),n("")}})},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise(function(n){setTimeout(function(){n(e)},t)})}},asArray:function(t){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise(function(e,n){var image=new Image;image.onload=function(){e(image)},image.onerror=n,image.src=t})},width:function(t){var e=n(t,"border-left-width"),r=n(t,"border-right-width");return t.scrollWidth+e+r},height:function(t){var e=n(t,"border-top-width"),r=n(t,"border-bottom-width");return t.scrollHeight+e+r}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),r=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,c){return e(t)?Promise.resolve(t).then(r).then(function(e){var r=Promise.resolve(t);return e.forEach(function(t){r=r.then(function(e){return o(e,t,n,c)})}),r}):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:r,inline:o}};function e(e){return-1!==e.search(t)}function r(e){for(var r,o=[];null!==(r=t.exec(e));)o.push(r[1]);return o.filter(function(t){return!n.isDataUrl(t)})}function o(t,e,r,o){return Promise.resolve(e).then(function(t){return r?n.resolveUrl(t,r):t}).then(o||n.getAndEncode).then(function(data){return n.dataAsUrl(data,n.mimeType(e))}).then(function(r){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+r+"$3")})}}(),o=function(){return{resolveAll:function(){return t(document).then(function(t){return Promise.all(t.map(function(t){return t.resolve()}))}).then(function(t){return t.join("\n")})},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(t){var e=[];return t.forEach(function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),e}).then(function(t){return t.filter(function(t){return t.type===CSSRule.FONT_FACE_RULE}).filter(function(t){return r.shouldProcess(t.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return r.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),c=function(){return{inlineAll:function e(o){if(!(o instanceof Element))return Promise.resolve(o);return function(t){var e=t.style.getPropertyValue("background");return e?r.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}(o).then(function(){return o instanceof HTMLImageElement?t(o).inline():Promise.all(n.asArray(o.childNodes).map(function(t){return e(t)}))})},impl:{newImage:t}};function t(element){return{inline:function(t){return n.isDataUrl(element.src)?Promise.resolve():Promise.resolve(element.src).then(t||n.getAndEncode).then(function(data){return n.dataAsUrl(data,n.mimeType(element.src))}).then(function(t){return new Promise(function(e,n){element.onload=e,element.onerror=n,element.src=t})})}}}}(),l={imagePlaceholder:void 0,cacheBust:!1},f={toSvg:h,toPng:function(t,e){return m(t,e||{}).then(function(canvas){return canvas.toDataURL()})},toJpeg:function(t,e){return m(t,e=e||{}).then(function(canvas){return canvas.toDataURL("image/jpeg",e.quality||1)})},toBlob:function(t,e){return m(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return m(t,e||{}).then(function(canvas){return canvas.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data})},impl:{fontFaces:o,images:c,util:n,inliner:r,options:{}}};function h(t,e){return function(t){void 0===t.imagePlaceholder?f.impl.options.imagePlaceholder=l.imagePlaceholder:f.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?f.impl.options.cacheBust=l.cacheBust:f.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then(function(t){return function(t,filter,e){if(!e&&filter&&!filter(t))return Promise.resolve();return Promise.resolve(t).then(function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}).then(function(e){return function(t,e,filter){var r=t.childNodes;return 0===r.length?Promise.resolve(e):function(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return d(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}(e,n.asArray(r),filter).then(function(){return e})}(t,e,filter)}).then(function(e){return function(t,e){return e instanceof Element?Promise.resolve().then(function(){var source,r;source=window.getComputedStyle(t),r=e.style,source.cssText?r.cssText=source.cssText:function(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}(source,r)}).then(function(){[":before",":after"].forEach(function(element){!function(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(""!==content&&"none"!==content){var r=n.uid();e.className=e.className+" "+r;var o=document.createElement("style");o.appendChild(function(t,element,style){var e="."+t+":"+element,r=style.cssText?function(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}(style):function(style){return n.asArray(style).map(function(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(style);return document.createTextNode(e+"{"+r+"}")}(r,element,style)),e.appendChild(o)}}(element)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)}))}).then(function(){return e}):e}(t,e)})}(t,e.filter,!0)}).then(v).then(w).then(function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach(function(n){t.style[n]=e.style[n]});return t}).then(function(r){return function(t,e,r){return Promise.resolve(t).then(function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)}).then(n.escapeXhtml).then(function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"}).then(function(foreignObject){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+foreignObject+"</svg>"}).then(function(svg){return"data:image/svg+xml;charset=utf-8,"+svg})}(r,e.width||n.width(t),e.height||n.height(t))})}function m(t,e){return h(t,e).then(n.makeImage).then(n.delay(100)).then(function(image){var canvas=function(t){var canvas=document.createElement("canvas");if(canvas.width=e.width||n.width(t),canvas.height=e.height||n.height(t),e.bgcolor){var r=canvas.getContext("2d");r.fillStyle=e.bgcolor,r.fillRect(0,0,canvas.width,canvas.height)}return canvas}(t);return canvas.getContext("2d").drawImage(image,0,0),canvas})}function d(t,filter,e){if(!e&&filter&&!filter(t))return Promise.resolve();return Promise.resolve(t).then(r).then(function(e){return o(t,e,filter)}).then(function(e){return c(t,e)});function r(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}function o(t,e,filter){var r=t.childNodes;return 0===r.length?Promise.resolve(e):function(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return d(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}(e,n.asArray(r),filter).then(function(){return e});function o(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return d(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}}function c(t,e){return e instanceof Element?Promise.resolve().then(function(){!function(source,t){source.cssText?t.cssText=source.cssText:function(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}(source,t)}(window.getComputedStyle(t),e.style)}).then(function(){[":before",":after"].forEach(function(element){!function(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(""===content||"none"===content)return;var r=n.uid();e.className=e.className+" "+r;var o=document.createElement("style");o.appendChild(function(t,element,style){var e="."+t+":"+element,r=style.cssText?function(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}(style):function(style){return n.asArray(style).map(function(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(style);return document.createTextNode(e+"{"+r+"}")}(r,element,style)),e.appendChild(o)}(element)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value);t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})}).then(function(){return e}):e;function r(){function r(source,t){if(source.cssText)t.cssText=source.cssText;else e(source,t);function e(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}}r(window.getComputedStyle(t),e.style)}function o(){function r(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(content===""||content==="none")return;var r=n.uid();e.className=e.className+" "+r;var o=document.createElement("style");function c(t,element,style){var e="."+t+":"+element,r=style.cssText?o(style):c(style);return document.createTextNode(e+"{"+r+"}");function o(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}function c(style){return n.asArray(style).map(t).join("; ")+";";function t(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}}}o.appendChild(c(r,element,style)),e.appendChild(o)}[":before",":after"].forEach(function(element){r(element)})}function c(){if(t instanceof HTMLTextAreaElement)e.innerHTML=t.value;if(t instanceof HTMLInputElement)e.setAttribute("value",t.value)}function l(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);if(!n)return;e.style.setProperty(t,n)})}}}function v(t){return o.resolveAll().then(function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t})}function w(t){return c.inlineAll(t).then(function(){return t})}t.exports=f}()},434:function(t,e,n){"use strict";(function(t){n(86),n(87),n(18),n(108);var r,o=n(333),c=n(341),l=n.n(c),f=(n(339),n(351));r=n(340),e.a={name:"Watermark",head:function(){return this.$store.state.currentTool.head},components:{"compact-picker":f.Compact,VueSlider:r},data:function(){return{colors:"#000000",results:"",preview:"",requestIn:!1,options:{fontSize:13,text:"仅供 xxx 验证使用",alpha:5,color:"#000000",rotate:23,width:10},n:null,watermark:null}},computed:{svg:function(){var e=this.options.fontSize*this.options.text.split("").length;e+=this.options.width/100*e;var n='<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(e,'px" height="').concat(e,'px">\n                <text x="50%" y="50%"\n                    alignment-baseline="middle"\n                    text-anchor="middle"\n                    stroke="').concat(this.options.color,'"\n                    opacity="').concat(this.options.alpha/10,'"\n                    transform="translate(').concat(e/2,", ").concat(e/2,") rotate(").concat(this.options.rotate,") translate(-").concat(e/2,", -").concat(e/2,')"\n                    font-weight="100"\n                    font-size="').concat(this.options.fontSize,'"\n                    font-family="microsoft yahe"\n                    >\n                    ').concat(this.options.text,"\n                </text>\n            </svg>");return"data:image/svg+xml;base64,"+t.from(n).toString("base64")}},methods:{handleChange:function(t){var e=t.target.files;if(!e.length)return!1;this.file=e[0],this.docs=[],this.preview=URL.createObjectURL(this.file)},addWatermark:function(){var t=this;this.requestIn=!0,l.a.toPng(this.$refs.preview).then(function(e){t.results=e,t.requestIn=!1,Object(o.a)(e,"watermark.png")}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"生成失败",text:"ERROR: ".concat(e)})})},updateColor:function(t){this.options.color=t.hex8}}}}).call(this,n(9).Buffer)},435:function(t,e,n){var content=n(1515);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("38de0f8d",content,!0,{sourceMap:!1})}}]);