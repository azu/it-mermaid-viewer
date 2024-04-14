var t;(0,(t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree2db).register)("dzTjd",function(i,e){Object.defineProperty(i.exports,"diagram",{get:function(){return g},set:void 0,enumerable:!0,configurable:!0});var n=t("3o9tm"),a=t("eVvkm"),r=t("4HqLh"),s=t("acy6y"),o=t("5GUWQ"),l=t("Knj1d");t("6fO6W"),t("biwpL"),t("gyk94"),t("cDk4l");var h=function(){var t=function(t,i,e,n){for(e=e||{},n=t.length;n--;e[t[n]]=i);return e},i=[1,3],e=[1,4],n=[1,5],a=[1,6],r=[1,7],s=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],o=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],l=[32,33,34],h=[2,7],c=[1,13],u=[1,17],d=[1,18],x=[1,19],f=[1,20],g=[1,21],y=[1,22],p=[1,23],q=[1,24],T=[1,25],m=[1,26],_=[1,27],A=[1,30],b=[1,31],k=[1,32],S=[1,33],v=[1,34],F=[1,35],P=[1,36],L=[1,37],C=[1,38],z=[1,39],B=[1,40],E=[1,41],D=[1,42],I=[1,57],w=[1,58],R=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],W={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function(t,i,e,n,a,r,s){var o=r.length-1;switch(a){case 12:this.$=r[o].trim(),n.setDiagramTitle(this.$);break;case 13:this.$=r[o].trim(),n.setAccTitle(this.$);break;case 14:case 15:this.$=r[o].trim(),n.setAccDescription(this.$);break;case 16:n.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 17:n.addPoint(r[o-3],r[o-1],r[o]);break;case 18:n.setXAxisLeftText(r[o-2]),n.setXAxisRightText(r[o]);break;case 19:r[o-1].text+=" ⟶ ",n.setXAxisLeftText(r[o-1]);break;case 20:n.setXAxisLeftText(r[o]);break;case 21:n.setYAxisBottomText(r[o-2]),n.setYAxisTopText(r[o]);break;case 22:r[o-1].text+=" ⟶ ",n.setYAxisBottomText(r[o-1]);break;case 23:n.setYAxisBottomText(r[o]);break;case 24:n.setQuadrant1Text(r[o]);break;case 25:n.setQuadrant2Text(r[o]);break;case 26:n.setQuadrant3Text(r[o]);break;case 27:n.setQuadrant4Text(r[o]);break;case 31:case 33:this.$={text:r[o],type:"text"};break;case 32:this.$={text:r[o-1].text+""+r[o],type:r[o-1].type};break;case 34:this.$={text:r[o],type:"markdown"};break;case 35:this.$=r[o];break;case 36:this.$=r[o-1]+""+r[o]}},table:[{3:1,4:2,5:i,6:e,32:n,33:a,34:r},{1:[3]},{3:8,4:2,5:i,6:e,32:n,33:a,34:r},{3:9,4:2,5:i,6:e,32:n,33:a,34:r},t(s,[2,4],{7:10}),t(o,[2,28]),t(o,[2,29]),t(o,[2,30]),{1:[2,1]},{1:[2,2]},t(l,h,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:c,13:u,15:d,17:x,19:f,20:g,25:y,27:p,28:q,29:T,30:m,31:_,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D}),t(s,[2,5]),{4:43,32:n,33:a,34:r},t(l,h,{10:14,11:15,12:16,21:28,35:29,9:44,5:c,13:u,15:d,17:x,19:f,20:g,25:y,27:p,28:q,29:T,30:m,31:_,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D}),t(l,[2,9]),t(l,[2,10]),t(l,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},t(l,[2,15]),t(l,[2,16]),{21:48,35:29,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D},{21:49,35:29,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D},{21:50,35:29,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D},{21:51,35:29,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D},{21:52,35:29,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D},{21:53,35:29,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D},{5:I,22:[1,54],35:56,36:55,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w},t(R,[2,31]),t(R,[2,33]),t(R,[2,34]),t(R,[2,37]),t(R,[2,38]),t(R,[2,39]),t(R,[2,40]),t(R,[2,41]),t(R,[2,42]),t(R,[2,43]),t(R,[2,44]),t(R,[2,45]),t(R,[2,46]),t(R,[2,47]),t(s,[2,6]),t(l,[2,8]),t(l,[2,12]),t(l,[2,13]),t(l,[2,14]),t(l,[2,20],{36:55,35:56,5:I,26:[1,59],40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),t(l,[2,23],{36:55,35:56,5:I,26:[1,60],40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),t(l,[2,24],{36:55,35:56,5:I,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),t(l,[2,25],{36:55,35:56,5:I,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),t(l,[2,26],{36:55,35:56,5:I,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),t(l,[2,27],{36:55,35:56,5:I,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),{23:[1,61]},t(R,[2,32]),t(R,[2,48]),t(R,[2,49]),t(R,[2,50]),t(l,[2,19],{35:29,21:62,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D}),t(l,[2,22],{35:29,21:63,37:A,38:b,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D}),{24:[1,64]},t(l,[2,18],{36:55,35:56,5:I,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),t(l,[2,21],{36:55,35:56,5:I,40:k,41:S,42:v,43:F,44:P,45:L,46:C,47:z,48:B,49:E,50:D,51:w}),t(l,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function(t,i){if(i.recoverable)this.trace(t);else{var e=Error(t);throw e.hash=i,e}},parse:function(t){var i=this,e=[0],n=[],a=[null],r=[],s=this.table,o="",l=0,h=0,c=r.slice.call(arguments,1),u=Object.create(this.lexer),d={yy:{}};for(var x in this.yy)Object.prototype.hasOwnProperty.call(this.yy,x)&&(d.yy[x]=this.yy[x]);u.setInput(t,d.yy),d.yy.lexer=u,d.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var f=u.yylloc;r.push(f);var g=u.options&&u.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var y,p,q,T,m,_,A,b,k={};;){if(p=e[e.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null==y&&(y=function(){var t;return"number"!=typeof(t=n.pop()||u.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=i.symbols_[t]||t),t}()),q=s[p]&&s[p][y]),void 0===q||!q.length||!q[0]){var S="";for(m in b=[],s[p])this.terminals_[m]&&m>2&&b.push("'"+this.terminals_[m]+"'");S=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==y?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(S,{text:u.match,token:this.terminals_[y]||y,line:u.yylineno,loc:f,expected:b})}if(q[0]instanceof Array&&q.length>1)throw Error("Parse Error: multiple actions possible at state: "+p+", token: "+y);switch(q[0]){case 1:e.push(y),a.push(u.yytext),r.push(u.yylloc),e.push(q[1]),y=null,h=u.yyleng,o=u.yytext,l=u.yylineno,f=u.yylloc;break;case 2:if(_=this.productions_[q[1]][1],k.$=a[a.length-_],k._$={first_line:r[r.length-(_||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(_||1)].first_column,last_column:r[r.length-1].last_column},g&&(k._$.range=[r[r.length-(_||1)].range[0],r[r.length-1].range[1]]),void 0!==(T=this.performAction.apply(k,[o,h,l,d.yy,q[1],a,r].concat(c))))return T;_&&(e=e.slice(0,-1*_*2),a=a.slice(0,-1*_),r=r.slice(0,-1*_)),e.push(this.productions_[q[1]][0]),a.push(k.$),r.push(k._$),A=s[e[e.length-2]][e[e.length-1]],e.push(A);break;case 3:return!0}}return!0}};function N(){this.yy={}}return W.lexer={EOF:1,parseError:function(t,i){if(this.yy.parser)this.yy.parser.parseError(t,i);else throw Error(t)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===n.length?this.yylloc.first_column:0)+n[n.length-e.length].length-e[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+i+"^"},test_match:function(t,i){var e,n,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack)for(var r in a)this[r]=a[r];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,i,e,n,a=this._currentRules(),r=0;r<a.length;r++)if((e=this._input.match(this.rules[a[r]]))&&(!i||e[0].length>i[0].length)){if(i=e,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,a[r])))return t;if(!this._backtrack)return!1;i=!1;continue}if(!this.options.flex)break}return i?!1!==(t=this.test_match(i,a[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,i,e,n){switch(e){case 0:case 1:case 3:break;case 2:return 32;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 22:case 24:case 28:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 23:this.begin("string");break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}},N.prototype=W,W.Parser=N,new N}();h.parser=h;var c=(0,o.E)(),u=function(){function t(){(0,n._)(this,t),this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}return(0,a._)(t,[{key:"getDefaultData",value:function(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}},{key:"getDefaultConfig",value:function(){var t,i,e,n,a,r,s,l,h,c,u,d,x,f,g,y,p,q;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:(null==(t=o.B.quadrantChart)?void 0:t.chartWidth)||500,chartWidth:(null==(i=o.B.quadrantChart)?void 0:i.chartHeight)||500,titlePadding:(null==(e=o.B.quadrantChart)?void 0:e.titlePadding)||10,titleFontSize:(null==(n=o.B.quadrantChart)?void 0:n.titleFontSize)||20,quadrantPadding:(null==(a=o.B.quadrantChart)?void 0:a.quadrantPadding)||5,xAxisLabelPadding:(null==(r=o.B.quadrantChart)?void 0:r.xAxisLabelPadding)||5,yAxisLabelPadding:(null==(s=o.B.quadrantChart)?void 0:s.yAxisLabelPadding)||5,xAxisLabelFontSize:(null==(l=o.B.quadrantChart)?void 0:l.xAxisLabelFontSize)||16,yAxisLabelFontSize:(null==(h=o.B.quadrantChart)?void 0:h.yAxisLabelFontSize)||16,quadrantLabelFontSize:(null==(c=o.B.quadrantChart)?void 0:c.quadrantLabelFontSize)||16,quadrantTextTopPadding:(null==(u=o.B.quadrantChart)?void 0:u.quadrantTextTopPadding)||5,pointTextPadding:(null==(d=o.B.quadrantChart)?void 0:d.pointTextPadding)||5,pointLabelFontSize:(null==(x=o.B.quadrantChart)?void 0:x.pointLabelFontSize)||12,pointRadius:(null==(f=o.B.quadrantChart)?void 0:f.pointRadius)||5,xAxisPosition:(null==(g=o.B.quadrantChart)?void 0:g.xAxisPosition)||"top",yAxisPosition:(null==(y=o.B.quadrantChart)?void 0:y.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:(null==(p=o.B.quadrantChart)?void 0:p.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:(null==(q=o.B.quadrantChart)?void 0:q.quadrantExternalBorderStrokeWidth)||2}}},{key:"getDefaultThemeConfig",value:function(){return{quadrant1Fill:c.quadrant1Fill,quadrant2Fill:c.quadrant2Fill,quadrant3Fill:c.quadrant3Fill,quadrant4Fill:c.quadrant4Fill,quadrant1TextFill:c.quadrant1TextFill,quadrant2TextFill:c.quadrant2TextFill,quadrant3TextFill:c.quadrant3TextFill,quadrant4TextFill:c.quadrant4TextFill,quadrantPointFill:c.quadrantPointFill,quadrantPointTextFill:c.quadrantPointTextFill,quadrantXAxisTextFill:c.quadrantXAxisTextFill,quadrantYAxisTextFill:c.quadrantYAxisTextFill,quadrantTitleFill:c.quadrantTitleFill,quadrantInternalBorderStrokeFill:c.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:c.quadrantExternalBorderStrokeFill}}},{key:"clear",value:function(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),(0,o.l).info("clear called")}},{key:"setData",value:function(t){this.data=(0,r._)({},this.data,t)}},{key:"addPoints",value:function(t){this.data.points=(0,s._)(t).concat((0,s._)(this.data.points))}},{key:"setConfig",value:function(t){(0,o.l).trace("setConfig called with: ",t),this.config=(0,r._)({},this.config,t)}},{key:"setThemeConfig",value:function(t){(0,o.l).trace("setThemeConfig called with: ",t),this.themeConfig=(0,r._)({},this.themeConfig,t)}},{key:"calculateSpace",value:function(t,i,e,n){var a=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,r={top:"top"===t&&i?a:0,bottom:"bottom"===t&&i?a:0},s=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,o={left:"left"===this.config.yAxisPosition&&e?s:0,right:"right"===this.config.yAxisPosition&&e?s:0},l=this.config.titleFontSize+2*this.config.titlePadding,h={top:n?l:0},c=this.config.quadrantPadding+o.left,u=this.config.quadrantPadding+r.top+h.top,d=this.config.chartWidth-2*this.config.quadrantPadding-o.left-o.right,x=this.config.chartHeight-2*this.config.quadrantPadding-r.top-r.bottom-h.top;return{xAxisSpace:r,yAxisSpace:o,titleSpace:h,quadrantSpace:{quadrantLeft:c,quadrantTop:u,quadrantWidth:d,quadrantHalfWidth:d/2,quadrantHeight:x,quadrantHalfHeight:x/2}}}},{key:"getAxisLabels",value:function(t,i,e,n){var a=n.quadrantSpace,r=n.titleSpace,s=a.quadrantHalfHeight,o=a.quadrantHeight,l=a.quadrantLeft,h=a.quadrantHalfWidth,c=a.quadrantTop,u=a.quadrantWidth,d=!!this.data.xAxisRightText,x=!!this.data.yAxisTopText,f=[];return this.data.xAxisLeftText&&i&&f.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+(d?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:d?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&i&&f.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+h+(d?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:d?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&e&&f.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+u+this.config.quadrantPadding,y:c+o-(x?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&e&&f.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+u+this.config.quadrantPadding,y:c+s-(x?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),f}},{key:"getQuadrants",value:function(t){var i=t.quadrantSpace,e=i.quadrantHalfHeight,n=i.quadrantLeft,a=i.quadrantHalfWidth,r=i.quadrantTop,s=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n+a,y:r,width:a,height:e,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n,y:r,width:a,height:e,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n,y:r+e,width:a,height:e,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:n+a,y:r+e,width:a,height:e,fill:this.themeConfig.quadrant4Fill}],o=!0,l=!1,h=void 0;try{for(var c,u=s[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var d=c.value;d.text.x=d.x+d.width/2,0===this.data.points.length?(d.text.y=d.y+d.height/2,d.text.horizontalPos="middle"):(d.text.y=d.y+this.config.quadrantTextTopPadding,d.text.horizontalPos="top")}}catch(t){l=!0,h=t}finally{try{o||null==u.return||u.return()}finally{if(l)throw h}}return s}},{key:"getQuadrantPoints",value:function(t){var i=this,e=t.quadrantSpace,n=e.quadrantHeight,a=e.quadrantLeft,r=e.quadrantTop,s=e.quadrantWidth,o=(0,l.scaleLinear)().domain([0,1]).range([a,s+a]),h=(0,l.scaleLinear)().domain([0,1]).range([n+r,r]);return this.data.points.map(function(t){return{x:o(t.x),y:h(t.y),fill:i.themeConfig.quadrantPointFill,radius:i.config.pointRadius,text:{text:t.text,fill:i.themeConfig.quadrantPointTextFill,x:o(t.x),y:h(t.y)+i.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:i.config.pointLabelFontSize,rotation:0}}})}},{key:"getBorders",value:function(t){var i=this.config.quadrantExternalBorderStrokeWidth/2,e=t.quadrantSpace,n=e.quadrantHalfHeight,a=e.quadrantHeight,r=e.quadrantLeft,s=e.quadrantHalfWidth,o=e.quadrantTop,l=e.quadrantWidth;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-i,y1:o,x2:r+l+i,y2:o},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r+l,y1:o+i,x2:r+l,y2:o+a-i},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-i,y1:o+a,x2:r+l+i,y2:o+a},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r,y1:o+i,x2:r,y2:o+a-i},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+s,y1:o+i,x2:r+s,y2:o+a-i},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+i,y1:o+n,x2:r+l-i,y2:o+n}]}},{key:"getTitle",value:function(t){if(t)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}},{key:"build",value:function(){var t=this.config.showXAxis&&!!(this.data.xAxisLeftText||this.data.xAxisRightText),i=this.config.showYAxis&&!!(this.data.yAxisTopText||this.data.yAxisBottomText),e=this.config.showTitle&&!!this.data.titleText,n=this.data.points.length>0?"bottom":this.config.xAxisPosition,a=this.calculateSpace(n,t,i,e);return{points:this.getQuadrantPoints(a),quadrants:this.getQuadrants(a),axisLabels:this.getAxisLabels(n,t,i,a),borderLines:this.getBorders(a),title:this.getTitle(e)}}}]),t}(),d=(0,o.c)();function x(t){return(0,o.d)(t.trim(),d)}var f=new u,g={parser:h,db:{setWidth:function(t){f.setConfig({chartWidth:t})},setHeight:function(t){f.setConfig({chartHeight:t})},setQuadrant1Text:function(t){f.setData({quadrant1Text:x(t.text)})},setQuadrant2Text:function(t){f.setData({quadrant2Text:x(t.text)})},setQuadrant3Text:function(t){f.setData({quadrant3Text:x(t.text)})},setQuadrant4Text:function(t){f.setData({quadrant4Text:x(t.text)})},setXAxisLeftText:function(t){f.setData({xAxisLeftText:x(t.text)})},setXAxisRightText:function(t){f.setData({xAxisRightText:x(t.text)})},setYAxisTopText:function(t){f.setData({yAxisTopText:x(t.text)})},setYAxisBottomText:function(t){f.setData({yAxisBottomText:x(t.text)})},addPoint:function(t,i,e){f.addPoints([{x:i,y:e,text:x(t.text)}])},getQuadrantData:function(){var t=(0,o.c)(),i=t.themeVariables,e=t.quadrantChart;return e&&f.setConfig(e),f.setThemeConfig({quadrant1Fill:i.quadrant1Fill,quadrant2Fill:i.quadrant2Fill,quadrant3Fill:i.quadrant3Fill,quadrant4Fill:i.quadrant4Fill,quadrant1TextFill:i.quadrant1TextFill,quadrant2TextFill:i.quadrant2TextFill,quadrant3TextFill:i.quadrant3TextFill,quadrant4TextFill:i.quadrant4TextFill,quadrantPointFill:i.quadrantPointFill,quadrantPointTextFill:i.quadrantPointTextFill,quadrantXAxisTextFill:i.quadrantXAxisTextFill,quadrantYAxisTextFill:i.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:i.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:i.quadrantInternalBorderStrokeFill,quadrantTitleFill:i.quadrantTitleFill}),f.setData({titleText:(0,o.t)()}),f.build()},clear:function(){f.clear(),(0,o.v)()},setAccTitle:o.s,getAccTitle:o.g,setDiagramTitle:o.q,getDiagramTitle:o.t,getAccDescription:o.a,setAccDescription:o.b},renderer:{draw:function(t,i,e,n){var a,r,s,h,c=function(t){return"top"===t?"hanging":"middle"},u=function(t){return"left"===t?"start":"middle"},d=function(t){return"translate(".concat(t.x,", ").concat(t.y,") rotate(").concat(t.rotation||0,")")},x=(0,o.c)();(0,o.l).debug("Rendering quadrant chart\n"+t);var f=x.securityLevel;"sandbox"===f&&(h=(0,l.select)("#i"+i));var g=("sandbox"===f?(0,l.select)(h.nodes()[0].contentDocument.body):(0,l.select)("body")).select('[id="'.concat(i,'"]')),y=g.append("g").attr("class","main"),p=(null==(a=x.quadrantChart)?void 0:a.chartWidth)||500,q=(null==(r=x.quadrantChart)?void 0:r.chartHeight)||500;(0,o.i)(g,q,p,(null==(s=x.quadrantChart)?void 0:s.useMaxWidth)||!0),g.attr("viewBox","0 0 "+p+" "+q),n.db.setHeight(q),n.db.setWidth(p);var T=n.db.getQuadrantData(),m=y.append("g").attr("class","quadrants"),_=y.append("g").attr("class","border"),A=y.append("g").attr("class","data-points"),b=y.append("g").attr("class","labels"),k=y.append("g").attr("class","title");T.title&&k.append("text").attr("x",0).attr("y",0).attr("fill",T.title.fill).attr("font-size",T.title.fontSize).attr("dominant-baseline",c(T.title.horizontalPos)).attr("text-anchor",u(T.title.verticalPos)).attr("transform",d(T.title)).text(T.title.text),T.borderLines&&_.selectAll("line").data(T.borderLines).enter().append("line").attr("x1",function(t){return t.x1}).attr("y1",function(t){return t.y1}).attr("x2",function(t){return t.x2}).attr("y2",function(t){return t.y2}).style("stroke",function(t){return t.strokeFill}).style("stroke-width",function(t){return t.strokeWidth});var S=m.selectAll("g.quadrant").data(T.quadrants).enter().append("g").attr("class","quadrant");S.append("rect").attr("x",function(t){return t.x}).attr("y",function(t){return t.y}).attr("width",function(t){return t.width}).attr("height",function(t){return t.height}).attr("fill",function(t){return t.fill}),S.append("text").attr("x",0).attr("y",0).attr("fill",function(t){return t.text.fill}).attr("font-size",function(t){return t.text.fontSize}).attr("dominant-baseline",function(t){return c(t.text.horizontalPos)}).attr("text-anchor",function(t){return u(t.text.verticalPos)}).attr("transform",function(t){return d(t.text)}).text(function(t){return t.text.text}),b.selectAll("g.label").data(T.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(function(t){return t.text}).attr("fill",function(t){return t.fill}).attr("font-size",function(t){return t.fontSize}).attr("dominant-baseline",function(t){return c(t.horizontalPos)}).attr("text-anchor",function(t){return u(t.verticalPos)}).attr("transform",function(t){return d(t)});var v=A.selectAll("g.data-point").data(T.points).enter().append("g").attr("class","data-point");v.append("circle").attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y}).attr("r",function(t){return t.radius}).attr("fill",function(t){return t.fill}),v.append("text").attr("x",0).attr("y",0).text(function(t){return t.text.text}).attr("fill",function(t){return t.text.fill}).attr("font-size",function(t){return t.text.fontSize}).attr("dominant-baseline",function(t){return c(t.text.horizontalPos)}).attr("text-anchor",function(t){return u(t.text.verticalPos)}).attr("transform",function(t){return d(t.text)})}},styles:function(){return""}}});
//# sourceMappingURL=quadrantDiagram-62f64e94.105607e6.js.map