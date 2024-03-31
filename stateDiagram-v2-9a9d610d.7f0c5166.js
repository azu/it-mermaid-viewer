!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire44d4,r=e.register;r("3uAE3",function(r,n){t(r.exports,"diagram",function(){return M});var o,a=e("hMcdm"),i=e("1t9cm"),c=e("76wyh"),l=e("ewvVJ"),s=e("Knj1d"),d=e("5GUWQ"),u=e("3GDLI");e("6fO6W"),e("biwpL"),e("gyk94"),e("cDk4l"),e("1RzZk"),e("9miRt");var f="rect",p="rectWithTitle",y="statediagram",b="".concat(y,"-").concat("state"),h="transition",g="".concat(h," ").concat("note-edge"),_="".concat(y,"-").concat("note"),v="".concat(y,"-").concat("cluster"),m="".concat(y,"-").concat("cluster-alt"),w="parent",x="note",S="----",A="".concat(S).concat(x),k="".concat(S).concat(w),T="fill:none",j="fill: #333",E="text",D="normal",I={},R=0;function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:S,o=null!==r&&r.length>0?"".concat(n).concat(r):"";return"".concat("state","-").concat(t).concat(o,"-").concat(e)}var B=function(t,e,r,n,o,a){var i,l=r.id,s=null==(i=n[l])?"":i.classes?i.classes.join(" "):"";if("root"!==l){var u=f;!0===r.start&&(u="start"),!1===r.start&&(u="end"),r.type!==c.D&&(u=r.type),I[l]||(I[l]={id:l,shape:u,description:(0,d.e).sanitizeText(l,(0,d.c)()),classes:"".concat(s," ").concat(b)});var y=I[l];r.description&&(Array.isArray(y.description)?(y.shape=p,y.description.push(r.description)):y.description.length>0?(y.shape=p,y.description===l?y.description=[r.description]:y.description=[y.description,r.description]):(y.shape=f,y.description=r.description),y.description=(0,d.e).sanitizeTextOrArray(y.description,(0,d.c)())),1===y.description.length&&y.shape===p&&(y.shape=f),!y.type&&r.doc&&((0,d.l).info("Setting cluster for ",l,L(r)),y.type="group",y.dir=L(r),y.shape=r.type===c.a?"divider":"roundedWithTitle",y.classes=y.classes+" "+v+" "+(a?m:""));var h={labelStyle:"",shape:y.shape,labelText:y.description,classes:y.classes,style:"",id:l,dir:y.dir,domId:V(l,R),type:y.type,padding:15};if(h.centerLabel=!0,r.note){var S={labelStyle:"",shape:"note",labelText:r.note.text,classes:_,style:"",id:l+A+"-"+R,domId:V(l,R,x),type:y.type,padding:15},B={labelStyle:"",shape:"noteGroup",labelText:r.note.text,classes:y.classes,style:"",id:l+k,domId:V(l,R,w),type:"group",padding:0};R++;var O=l+k;t.setNode(O,B),t.setNode(S.id,S),t.setNode(l,h),t.setParent(l,O),t.setParent(S.id,O);var M=l,z=S.id;"left of"===r.note.position&&(M=S.id,z=l),t.setEdge(M,z,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:g,arrowheadStyle:j,labelpos:"c",labelType:E,thickness:D})}else t.setNode(l,h)}e&&"root"!==e.id&&((0,d.l).trace("Setting node ",l," to be child of its parent ",e.id),t.setParent(l,e.id)),r.doc&&((0,d.l).trace("Adding nodes children "),C(t,r,r.doc,n,o,!a))},C=function(t,e,r,n,o,a){(0,d.l).trace("items",r),r.forEach(function(r){switch(r.stmt){case c.b:case c.D:B(t,e,r,n,o,a);break;case c.S:B(t,e,r.state1,n,o,a),B(t,e,r.state2,n,o,a);var i={id:"edge"+R,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:(0,d.e).sanitizeText(r.description,(0,d.c)()),arrowheadStyle:j,labelpos:"c",labelType:E,thickness:D,classes:h};t.setEdge(r.state1.id,r.state2.id,i,R),R++}})},L=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.c,r=e;if(t.doc)for(var n=0;n<t.doc.length;n++){var o=t.doc[n];"dir"===o.stmt&&(r=o.value)}return r},O=(o=(0,a._)(function(t,e,r,n){var o,a,c,p,b,h,g,_,v,m,w,x,S,A,k,T,j,E,D,R,V,C,O,M,z;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return(0,d.l).info("Drawing state diagram (v2)",e),I={},n.db.getDirection(),a=(o=(0,d.c)()).securityLevel,p=(c=o.state).nodeSpacing||50,b=c.rankSpacing||50,(0,d.l).info(n.db.getRootDocV2()),n.db.extract(n.db.getRootDocV2()),(0,d.l).info(n.db.getRootDocV2()),h=n.db.getStates(),B(g=new l.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:L(n.db.getRootDocV2()),nodesep:p,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),void 0,n.db.getRootDocV2(),h,n.db,!0),"sandbox"===a&&(_=(0,s.select)("#i"+e)),m=(v="sandbox"===a?(0,s.select)(_.nodes()[0].contentDocument.body):(0,s.select)("body")).select('[id="'.concat(e,'"]')),w=v.select("#"+e+" g"),[4,(0,u.r)(w,g,["barb"],y,e)];case 1:t.sent(),(0,d.u).insertTitle(m,"statediagramTitleText",c.titleTopMargin,n.db.getDiagramTitle()),S=(x=m.node().getBBox()).width+16,A=x.height+16,m.attr("class",y),k=m.node().getBBox(),(0,d.i)(m,A,S,c.useMaxWidth),T="".concat(k.x-8," ").concat(k.y-8," ").concat(S," ").concat(A),(0,d.l).debug("viewBox ".concat(T)),m.attr("viewBox",T),j=document.querySelectorAll('[id="'+e+'"] .edgeLabel .label'),E=!0,D=!1,R=void 0;try{for(V=j[Symbol.iterator]();!(E=(C=V.next()).done);E=!0)M=(O=C.value).getBBox(),(z=document.createElementNS("http://www.w3.org/2000/svg",f)).setAttribute("rx",0),z.setAttribute("ry",0),z.setAttribute("width",M.width),z.setAttribute("height",M.height),O.insertBefore(z,O.firstChild)}catch(t){D=!0,R=t}finally{try{E||null==V.return||V.return()}finally{if(D)throw R}}return[2]}})}),function(t,e,r,n){return o.apply(this,arguments)}),M={parser:c.p,db:c.d,renderer:{setConf:function(t){var e=Object.keys(t),r=!0,n=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done);r=!0)t[a.value]}catch(t){n=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}},getClasses:function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},draw:O},styles:c.s,init:function(t){t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,(0,c.d).clear()}}}),r("3o9tm",function(e,r){t(e.exports,"_",function(){return n});function n(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}}),r("eVvkm",function(e,r){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}t(e.exports,"_",function(){return o})}),r("fCefb",function(r,n){t(r.exports,"_",function(){return l});var o=e("st1HL"),a=e("j4rtj"),i=e("a3SFK"),c=e("iiEjw");function l(t,e){return(0,o._array_with_holes)(t)||(0,a._iterable_to_array_limit)(t,e)||(0,c._unsupported_iterable_to_array)(t,e)||(0,i._non_iterable_rest)()}}),r("st1HL",function(e,r){t(e.exports,"_array_with_holes",function(){return n});function n(t){if(Array.isArray(t))return t}}),r("j4rtj",function(e,r){t(e.exports,"_iterable_to_array_limit",function(){return n});function n(t,e){var r,n,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a=[],i=!0,c=!1;try{for(o=o.call(t);!(i=(r=o.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,n=t}finally{try{i||null==o.return||o.return()}finally{if(c)throw n}}return a}}}),r("a3SFK",function(e,r){t(e.exports,"_non_iterable_rest",function(){return n});function n(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}),r("iiEjw",function(r,n){t(r.exports,"_unsupported_iterable_to_array",function(){return a});var o=e("hn6IE");function a(t,e){if(t){if("string"==typeof t)return(0,o._array_like_to_array)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return(0,o._array_like_to_array)(t,e)}}}),r("hn6IE",function(e,r){t(e.exports,"_array_like_to_array",function(){return n});function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}}),r("acy6y",function(r,n){t(r.exports,"_",function(){return l});var o=e("gurs8"),a=e("d224A"),i=e("klRkV"),c=e("iiEjw");function l(t){return(0,o._array_without_holes)(t)||(0,a._iterable_to_array)(t)||(0,c._unsupported_iterable_to_array)(t)||(0,i._non_iterable_spread)()}}),r("gurs8",function(r,n){t(r.exports,"_array_without_holes",function(){return a});var o=e("hn6IE");function a(t){if(Array.isArray(t))return(0,o._array_like_to_array)(t)}}),r("d224A",function(e,r){t(e.exports,"_iterable_to_array",function(){return n});function n(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}}),r("klRkV",function(e,r){t(e.exports,"_non_iterable_spread",function(){return n});function n(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}),r("gSezU",function(r,n){t(r.exports,"default",function(){return a});var o=e("fCUSH"),a=function(t){return(0,o.default)(t,4)}})}();
//# sourceMappingURL=stateDiagram-v2-9a9d610d.7f0c5166.js.map
