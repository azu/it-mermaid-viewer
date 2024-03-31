!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire44d4,n=t.register;n("b40NP",function(n,r){e(n.exports,"isSubgraph",function(){return o}),e(n.exports,"edgeToId",function(){return i}),e(n.exports,"applyStyle",function(){return d}),e(n.exports,"applyClass",function(){return u}),e(n.exports,"applyTransition",function(){return p});var l=t("1vYQf"),a=t("6vkoW");function o(e,t){return!!e.children(t).length}function i(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var c=/:/g;function s(e){return e?String(e).replace(c,"\\:"):""}function d(e,t){t&&e.attr("style",t)}function u(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(a.default(n)){var r=n.transition;if(l.default(r))return r(e)}return e}}),n("ft3yP",function(n,r){e(n.exports,"addHtmlLabel",function(){return o});var l=t("6BtQu"),a=t("b40NP");function o(e,t){var n=e.append("foreignObject").attr("width","100000"),r=n.append("xhtml:div");r.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(void 0===o?"undefined":(0,l._)(o)){case"function":r.insert(o);break;case"object":r.insert(function(){return o});break;default:r.html(o)}a.applyStyle(r,t.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap");var i=r.node().getBoundingClientRect();return n.attr("width",i.width).attr("height",i.height),n}}),n("aII9A",function(n,r){e(n.exports,"f",function(){return v}),e(n.exports,"a",function(){return m});var l,a,o,i=t("hMcdm"),c=t("1t9cm"),s=t("ewvVJ"),d=t("Knj1d"),u=t("5GUWQ"),p=t("3GDLI"),b=t("ft3yP"),f=t("7kbez"),h=t("bl9w2"),y={},w=(l=(0,i._)(function(e,t,n,r,l,a){var o,i,s,d,p,f,h,y,w,g,k,v,x,m,S,T,_,C,L,A,B,N,E,D,I,j;return(0,c.__generator)(this,function(c){switch(c.label){case 0:o=r.select('[id="'.concat(n,'"]')),i=Object.keys(e),s=!0,d=!1,p=void 0,c.label=1;case 1:c.trys.push([1,6,7,8]),f=i[Symbol.iterator](),c.label=2;case 2:if(s=(h=f.next()).done)return[3,5];if(y=e[h.value],w="default",y.classes.length>0&&(w=y.classes.join(" ")),w+=" flowchart-label",g=(0,u.k)(y.styles),k=void 0!==y.text?y.text:y.id,v=void 0,(0,u.l).info("vertex",y,y.labelType),"markdown"===y.labelType)(0,u.l).info("vertex",y,y.labelType);else if((0,u.m)((0,u.c)().flowchart.htmlLabels))x={label:k},(v=(0,b.addHtmlLabel)(o,x).node()).parentNode.removeChild(v);else{(m=l.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("style",g.labelStyle.replace("color:","fill:")),S=k.split(u.e.lineBreakRegex),T=!0,_=!1,C=void 0;try{for(L=S[Symbol.iterator]();!(T=(A=L.next()).done);T=!0)B=A.value,(N=l.createElementNS("http://www.w3.org/2000/svg","tspan")).setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),N.setAttribute("dy","1em"),N.setAttribute("x","1"),N.textContent=B,m.appendChild(N)}catch(e){_=!0,C=e}finally{try{T||null==L.return||L.return()}finally{if(_)throw C}}v=m}switch(E=0,D="",y.type){case"round":E=5,D="rect";break;case"square":case"group":default:D="rect";break;case"diamond":D="question";break;case"hexagon":D="hexagon";break;case"odd":case"odd_right":D="rect_left_inv_arrow";break;case"lean_right":D="lean_right";break;case"lean_left":D="lean_left";break;case"trapezoid":D="trapezoid";break;case"inv_trapezoid":D="inv_trapezoid";break;case"circle":D="circle";break;case"ellipse":D="ellipse";break;case"stadium":D="stadium";break;case"subroutine":D="subroutine";break;case"cylinder":D="cylinder";break;case"doublecircle":D="doublecircle"}return[4,(0,u.r)(k,(0,u.c)())];case 3:I=c.sent(),t.setNode(y.id,{labelStyle:g.labelStyle,shape:D,labelText:I,labelType:y.labelType,rx:E,ry:E,class:w,style:g.style,id:y.id,link:y.link,linkTarget:y.linkTarget,tooltip:a.db.getTooltip(y.id)||"",domId:a.db.lookUpDomId(y.id),haveCallback:y.haveCallback,width:"group"===y.type?500:void 0,dir:y.dir,type:y.type,props:y.props,padding:(0,u.c)().flowchart.padding}),(0,u.l).info("setNode",{labelStyle:g.labelStyle,labelType:y.labelType,shape:D,labelText:I,rx:E,ry:E,class:w,style:g.style,id:y.id,domId:a.db.lookUpDomId(y.id),width:"group"===y.type?500:void 0,type:y.type,dir:y.dir,props:y.props,padding:(0,u.c)().flowchart.padding}),c.label=4;case 4:return s=!0,[3,2];case 5:return[3,8];case 6:return j=c.sent(),d=!0,p=j,[3,8];case 7:try{s||null==f.return||f.return()}finally{if(d)throw p}return[7];case 8:return[2]}})}),function(e,t,n,r,a,o){return l.apply(this,arguments)}),g=(a=(0,i._)(function(e,t,n){var r,l,a,o,i,s,p,b,f,h,w,g,k,v,x,m,S,T,_,C;return(0,c.__generator)(this,function(n){switch(n.label){case 0:(0,u.l).info("abc78 edges = ",e),r=0,l={},void 0!==e.defaultStyle&&(a=(i=(0,u.k)(e.defaultStyle)).style,o=i.labelStyle),s=!0,p=!1,b=void 0,n.label=1;case 1:n.trys.push([1,6,7,8]),f=e[Symbol.iterator](),n.label=2;case 2:if(s=(h=f.next()).done)return[3,5];switch(w=h.value,r++,void 0===l[g="L-"+w.start+"-"+w.end]?l[g]=0:l[g]++,(0,u.l).info("abc78 new entry",g,l[g]),k=g+"-"+l[g],(0,u.l).info("abc78 new link id to be used is",g,k,l[g]),v="LS-"+w.start,x="LE-"+w.end,(m={style:"",labelStyle:""}).minlen=w.length||1,"arrow_open"===w.type?m.arrowhead="none":m.arrowhead="normal",m.arrowTypeStart="arrow_open",m.arrowTypeEnd="arrow_open",w.type){case"double_arrow_cross":m.arrowTypeStart="arrow_cross";case"arrow_cross":m.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":m.arrowTypeStart="arrow_point";case"arrow_point":m.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":m.arrowTypeStart="arrow_circle";case"arrow_circle":m.arrowTypeEnd="arrow_circle"}switch(S="",T="",w.stroke){case"normal":S="fill:none;",void 0!==a&&(S=a),void 0!==o&&(T=o),m.thickness="normal",m.pattern="solid";break;case"dotted":m.thickness="normal",m.pattern="dotted",m.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":m.thickness="thick",m.pattern="solid",m.style="stroke-width: 3.5px;fill:none;";break;case"invisible":m.thickness="invisible",m.pattern="solid",m.style="stroke-width: 0;fill:none;"}return void 0!==w.style&&(S=(_=(0,u.k)(w.style)).style,T=_.labelStyle),m.style=m.style+=S,m.labelStyle=m.labelStyle+=T,void 0!==w.interpolate?m.curve=(0,u.n)(w.interpolate,d.curveLinear):void 0!==e.defaultInterpolate?m.curve=(0,u.n)(e.defaultInterpolate,d.curveLinear):m.curve=(0,u.n)(y.curve,d.curveLinear),void 0===w.text?void 0!==w.style&&(m.arrowheadStyle="fill: #333"):(m.arrowheadStyle="fill: #333",m.labelpos="c"),m.labelType=w.labelType,[4,(0,u.r)(w.text.replace(u.e.lineBreakRegex,"\n"),(0,u.c)())];case 3:m.label=n.sent(),void 0===w.style&&(m.style=m.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),m.labelStyle=m.labelStyle.replace("color:","fill:"),m.id=k,m.classes="flowchart-link "+v+" "+x,t.setEdge(w.start,w.end,m,r),n.label=4;case 4:return s=!0,[3,2];case 5:return[3,8];case 6:return C=n.sent(),p=!0,b=C,[3,8];case 7:try{s||null==f.return||f.return()}finally{if(p)throw b}return[7];case 8:return[2]}})}),function(e,t,n){return a.apply(this,arguments)}),k=(o=(0,i._)(function(e,t,n,r){var l,a,o,i,b,f,h,y,k,v,x,m,S,T,_,C,L,A,B,N,E,D,I,j,P,z,G,O;return(0,c.__generator)(this,function(e){switch(e.label){case 0:for((0,u.l).info("Drawing flowchart"),void 0===(l=r.db.getDirection())&&(l="TD"),o=(a=(0,u.c)()).securityLevel,b=(i=a.flowchart).nodeSpacing||50,f=i.rankSpacing||50,"sandbox"===o&&(h=(0,d.select)("#i"+t)),y="sandbox"===o?(0,d.select)(h.nodes()[0].contentDocument.body):(0,d.select)("body"),k="sandbox"===o?h.nodes()[0].contentDocument:document,v=new s.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:b,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),m=r.db.getSubGraphs(),(0,u.l).info("Subgraphs - ",m),S=m.length-1;S>=0;S--)x=m[S],(0,u.l).info("Subgraph - ",x),r.db.addVertex(x.id,{text:x.title,type:x.labelType},"group",void 0,x.classes,x.dir);for(T=r.db.getVertices(),_=r.db.getEdges(),(0,u.l).info("Edges",_),C=0,C=m.length-1;C>=0;C--)for(x=m[C],(0,d.selectAll)("cluster").append("text"),L=0;L<x.nodes.length;L++)(0,u.l).info("Setting up subgraphs",x.nodes[L],x.id),v.setParent(x.nodes[L],x.id);return[4,w(T,v,t,y,k,r)];case 1:return e.sent(),[4,g(_,v)];case 2:return e.sent(),A=y.select('[id="'.concat(t,'"]')),B=y.select("#"+t+" g"),[4,(0,p.r)(B,v,["point","circle","cross"],"flowchart",t)];case 3:if(e.sent(),(0,u.u).insertTitle(A,"flowchartTitleText",i.titleTopMargin,r.db.getDiagramTitle()),(0,u.o)(v,A,i.diagramPadding,i.useMaxWidth),r.db.indexNodes("subGraph"+C),!i.htmlLabels){N=k.querySelectorAll('[id="'+t+'"] .edgeLabel .label'),E=!0,D=!1,I=void 0;try{for(j=N[Symbol.iterator]();!(E=(P=j.next()).done);E=!0)G=(z=P.value).getBBox(),(O=k.createElementNS("http://www.w3.org/2000/svg","rect")).setAttribute("rx",0),O.setAttribute("ry",0),O.setAttribute("width",G.width),O.setAttribute("height",G.height),z.insertBefore(O,z.firstChild)}catch(e){D=!0,I=e}finally{try{E||null==j.return||j.return()}finally{if(D)throw I}}}return Object.keys(T).forEach(function(e){var n=T[e];if(n.link){var r=(0,d.select)("#"+t+' [id="'+e+'"]');if(r){var l=k.createElementNS("http://www.w3.org/2000/svg","a");l.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),l.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),l.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===o?l.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&l.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);var a=r.insert(function(){return l},":first-child"),i=r.select(".label-container");i&&a.append(function(){return i.node()});var c=r.select(".label");c&&a.append(function(){return c.node()})}}}),[2]}})}),function(e,t,n,r){return o.apply(this,arguments)}),v={setConf:function(e){var t=Object.keys(e),n=!0,r=!1,l=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var i=a.value;y[i]=e[i]}}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}},addVertices:w,addEdges:g,getClasses:function(e,t){return t.db.getClasses()},draw:k},x=function(e,t){var n=f.default,r=n(e,"r"),l=n(e,"g"),a=n(e,"b");return h.default(r,l,a,t)},m=function(e){return".label {\n    font-family: ".concat(e.fontFamily,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n  .cluster-label text {\n    fill: ").concat(e.titleColor,";\n  }\n  .cluster-label span,p {\n    color: ").concat(e.titleColor,";\n  }\n\n  .label text,span,p {\n    fill: ").concat(e.nodeTextColor||e.textColor,";\n    color: ").concat(e.nodeTextColor||e.textColor,";\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ").concat(e.mainBkg,";\n    stroke: ").concat(e.nodeBorder,";\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .katex path {\n    fill: #000;\n    stroke: #000;\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ").concat(e.arrowheadColor,";\n  }\n\n  .edgePath .path {\n    stroke: ").concat(e.lineColor,";\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ").concat(e.lineColor,";\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ").concat(e.edgeLabelBackground,";\n    rect {\n      opacity: 0.5;\n      background-color: ").concat(e.edgeLabelBackground,";\n      fill: ").concat(e.edgeLabelBackground,";\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ").concat(x(e.edgeLabelBackground,.5),";\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ").concat(e.clusterBkg,";\n    stroke: ").concat(e.clusterBorder,";\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ").concat(e.titleColor,";\n  }\n\n  .cluster span,p {\n    color: ").concat(e.titleColor,";\n  }\n  /* .cluster div {\n    color: ").concat(e.titleColor,";\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ").concat(e.fontFamily,";\n    font-size: 12px;\n    background: ").concat(e.tertiaryColor,";\n    border: 1px solid ").concat(e.border2,";\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(e.textColor,";\n  }\n")}})}();
//# sourceMappingURL=flowDiagram-5540d9b9.fe8e9d79.js.map
