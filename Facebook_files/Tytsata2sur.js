if (self.CavalryLogger) { CavalryLogger.start_js(["Q\/WmK"]); }

__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("TimezoneAutoset",["AsyncRequest","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g=!1;function h(a){var b=new Date(),c=b.getTimezoneOffset()/15;b=b.getTime()/1e3;a=Math.round((a-b)/900);b=Math.round(c+a)%96;if(b==0)return 0;else b>48?b-=Math.ceil(b/96)*96:b<-56&&(b+=Math.ceil(b/-96)*96);return b*15}function a(a,c,d){__p&&__p();if(!a||void 0==c)return;if(g)return;g=!0;a=-h(a);if(d||a!=c){c="/ajax/timezone/update.php";new(b("AsyncRequest"))().setURI(c).setData({gmt_off:a,is_forced:d}).setErrorHandler(b("emptyFunction")).setTransportErrorHandler(b("emptyFunction")).setOption("suppressErrorAlerts",!0).send()}}c={setInputValue:function(a,b){a.value=h(b)},setTimezone:a};e.exports=c}),null);
__d("BiometricDataField",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TIME_STAMP:"ts",WEB_SESSION_ID:"web_session_id",PAGE_URI:"page_uri",SCRIPT_PATH:"script_path",MOUSE_MOVEMENT_COORDINATES:"mouse_movement_coordinates",MOUSE_MOVEMENT_COORDINATES_NO_SCROLL:"mouse_movement_coordinates_no_scroll",MOUSE_CLICK_COORDINATES:"mouse_click_coordinates",MOUSE_CLICK_COORDINATES_NO_SCROLL:"mouse_click_coordinates_no_scroll",MOUSE_CLICK_DURATIONS:"mouse_click_durations",MOUSE_MOVEMENT_SPEEDS:"mouse_movement_speeds",MOUSE_MOVEMENT_ACCELERATIONS:"mouse_movement_accelerations",KEY_STROKE_TIMES:"key_stroke_times",KEY_STROKE_DURATIONS:"key_stroke_durations",KEY_TO_KEY_DOWN_TIMES:"key_to_key_down_times",KEY_TO_KEY_UP_TIMES:"key_to_key_up_times",SCROLL_LENGTHS:"scroll_lengths",SCROLL_SPEEDS:"scroll_speeds",BOT_DETECTOR_RESULTS:"bot_detector_results",BOT_DETECTOR_CONFIDENCE_SCORES:"bot_detector_confidence_scores",BOT_SCORER_FEATURE_SCORES:"bot_scorer_feature_scores"})}),null);
__d("IntegrityKeyStrokeTimeCollector",["BiometricDataField","Event","getTime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map(),h=new Map(),i=[];a={attachListener:function(){b("Event").listen(window.document,"keydown",j),b("Event").listen(window.document,"keyup",k)},storeData:function(){var a=Array.from(h.keys()),b=a.find(function(a){return g.has(a)})||"",c=g.get(b)||0;b=h.get(b)||0;c&&b?i.push([c,b]):i.push([0,0]);a.forEach(function(a){g["delete"](a),h["delete"](a)})},clearData:function(){i=[],g.clear(),h.clear()},getData:function(){var a;if(i.every(function(a){return a[0]===0&&a[1]===0}))return{};var c=b("BiometricDataField").KEY_STROKE_TIMES;return a={},a[c]=JSON.stringify(i),a}};function j(a){!g.has(a.code)&&!a.repeat&&g.set(a.code,b("getTime")())}function k(a){g.has(a.code)&&!h.has(a.code)&&h.set(a.code,b("getTime")())}e.exports=a}),null);
__d("IntegrityMouseClickCollector",["BiometricDataField","Event"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=[],i=-1,j=-1,k=-1,l=-1;a={attachListener:function(){b("Event").listen(window.document,"click",m)},storeData:function(){g.push([i,j]),h.push([k,l]),i=-1,j=-1,k=-1,l=-1},clearData:function(){g=[],h=[]},getData:function(){var a;if(g.every(function(a){return a.length===2&&a[0]===-1&&a[1]===-1}))return{};var c=b("BiometricDataField").MOUSE_CLICK_COORDINATES,d=b("BiometricDataField").MOUSE_CLICK_COORDINATES_NO_SCROLL;return a={},a[c]=JSON.stringify(g),a[d]=JSON.stringify(h),a}};function m(a){i=a.pageX,j=a.pageY,k=a.clientX,l=a.clientY}e.exports=a}),null);
__d("IntegrityMouseClickDurationCollector",["BiometricDataField","Event","getTime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=0,i=0;a={attachListener:function(){b("Event").listen(window.document,"mousedown",j),b("Event").listen(window.document,"mouseup",k)},storeData:function(){g.push(i),i=0},clearData:function(){g=[],h=0,i=0},getData:function(){var a;if(g.every(function(a){return a===0}))return{};var c=b("BiometricDataField").MOUSE_CLICK_DURATIONS;return a={},a[c]=JSON.stringify(g),a}};function j(a){h=b("getTime")()}function k(a){i=b("getTime")()-h}e.exports=a}),null);
__d("IntegrityMouseMovementCollector",["BiometricDataField","Event"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=[],i=-1,j=-1,k=-1,l=-1;a={attachListener:function(){b("Event").listen(window.document,"mousemove",m)},storeData:function(){g.push([i,j]),h.push([k,l])},clearData:function(){g=[],h=[]},getData:function(){var a;if(g.every(function(a){return a.length===2&&a[0]===-1&&a[1]===-1}))return{};var c=b("BiometricDataField").MOUSE_MOVEMENT_COORDINATES,d=b("BiometricDataField").MOUSE_MOVEMENT_COORDINATES_NO_SCROLL;return a={},a[c]=JSON.stringify(g),a[d]=JSON.stringify(h),a}};function m(a){i=a.pageX,j=a.pageY,k=a.clientX,l=a.clientY}e.exports=a}),null);
__d("IntegrityScrollLengthCollector",["BiometricDataField"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=window.pageYOffset;a={attachListener:function(){},storeData:function(){var a=window.pageYOffset;g.push(a-h);h=a},clearData:function(){g=[],h=window.pageYOffset},getData:function(){var a;if(g.every(function(a){return a===0}))return{};var c=b("BiometricDataField").SCROLL_LENGTHS;return a={},a[c]=JSON.stringify(g),a}};e.exports=a}),null);
__d("XIntegrityBiometricLoggingAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/ibl/",{})}),null);
__d("IntegrityBiometricsLogger",["AsyncRequest","BiometricDataField","XIntegrityBiometricLoggingAsyncController","IntegrityKeyStrokeTimeCollector","IntegrityMouseClickCollector","IntegrityMouseClickDurationCollector","IntegrityMouseMovementCollector","IntegrityScrollLengthCollector"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[b("IntegrityKeyStrokeTimeCollector"),b("IntegrityMouseClickCollector"),b("IntegrityMouseClickDurationCollector"),b("IntegrityMouseMovementCollector"),b("IntegrityScrollLengthCollector")];a={attachListeners:function(){g.forEach(function(a){return a.attachListener()})},storeData:function(){g.forEach(function(a){return a.storeData()})},clearData:function(){g.forEach(function(a){return a.clearData()})},logData:function(a){var c=b("XIntegrityBiometricLoggingAsyncController").getURIBuilder().getURI(),d=h(),e=b("BiometricDataField").PAGE_URI,f=b("BiometricDataField").SCRIPT_PATH;new(b("AsyncRequest"))(c).setData(babelHelpers["extends"]((c={},c[e]=a.currentPageURI,c[f]=a.scriptPath,c),d)).setAllowCrossPageTransition(!0).setOption("suppressEvaluation",!0).send()}};function h(){return g.map(function(a){return a.getData()}).reduce(function(a,b){return babelHelpers["extends"]({},a,b)},{})}e.exports=a}),null);
__d("IntegrityBiometricsScheduler",["BotDetectionMouseMovementSitevarConfig","IntegrityBiometricsLogger","Run","URI","clearInterval","getTime","setInterval"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BotDetectionMouseMovementSitevarConfig").run_time_ms,h=b("BotDetectionMouseMovementSitevarConfig").interval_time_ms,i=!1,j=!1,k,l,m,n={schedule:function(a){if(!i){i=!0;l=b("getTime")();k=a;b("IntegrityBiometricsLogger").attachListeners();m=b("setInterval")(n._storeData,h);a=!0;b("Run").onBeforeUnload(n._handlePageTransition,a)}},_storeData:function(){__p&&__p();if(j){b("clearInterval")(m);return}if(b("getTime")()-l>g){b("IntegrityBiometricsLogger").logData({currentPageURI:b("URI").getRequestURI().getPath(),scriptPath:k});b("IntegrityBiometricsLogger").clearData();j=!0;b("clearInterval")(m);return}b("IntegrityBiometricsLogger").storeData()},_handlePageTransition:function(){j||(b("IntegrityBiometricsLogger").logData({currentPageURI:b("URI").getRequestURI().getPath(),scriptPath:k}),b("IntegrityBiometricsLogger").clearData()),i=!1,j=!1}};e.exports=n}),null);
__d("HelpLiteFlyoutBootloader",["regeneratorRuntime","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:j.loadFlyoutWithHelpType(null);case 1:case"end":return a.stop()}},null,this)},loadFlyoutWithHelpType:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("JSResource")("HelpLiteFlyout").__setRef("HelpLiteFlyoutBootloader").load());case 2:c=h.sent;if(!g){h.next=6;break}c.refreshHelp();return h.abrupt("return");case 6:g=!0;a&&j.setHelpType(a);h.next=10;return b("regeneratorRuntime").awrap(this._getDeferredFlyoutElements().getPromise());case 10:d=h.sent,e=d.flyout,f=d.flyoutRoot,c.registerFlyoutToggler(e,f),c.loadBody();case 15:case"end":return h.stop()}},null,this)},setHelpType:function(a){i=a},getHelpType:function(){return i},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})}};e.exports=j}),null);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=b("PageHooks")._domreadyHook,a._onloadHook=b("PageHooks")._onloadHook,a.runHook=b("PageHooks").runHook,a.runHooks=b("PageHooks").runHooks,a.keep_window_set_as_loaded=b("PageHooks").keepWindowSetAsLoaded}),3);
__d("AsyncRequestPathTraversalTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:AsyncRequestPathTraversalLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:AsyncRequestPathTraversalLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AsyncRequestPathTraversalLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setOffendingURI=function(a){this.$1.offending_uri=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={offending_uri:!0,time:!0,weight:!0};e.exports=a}),null);
__d("RealtimeRequestStreamWebClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientSessionID=function(a){this.$1.client_session_id=a;return this};c.setClientTimeMs=function(a){this.$1.client_time_ms=a;return this};c.setMessage=function(a){this.$1.message=a;return this};c.setSeverity=function(a){this.$1.severity=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUserFbid=function(a){this.$1.user_fbid=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={client_session_id:!0,client_time_ms:!0,message:!0,severity:!0,time:!0,user_fbid:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f){Object.assign(b("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&b("Nectar").addModuleData(this.data,a)}})}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("BladeRunnerConfig",["RTISubscriptionManagerConfig","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.patchRequestHeaders=function(a){var c={},d=b("RTISubscriptionManagerConfig").bladerunner_www_sandbox;if(d!=null){var e=b("nullthrows")(a.method);e.startsWith("FBLQ:")||(c["javascript-sandbox"]=d)}for(var f in a)c[f]=a[f];return c};return a}();c=new a();e.exports=c}),null);
__d("BladeRunnerLogger",["BanzaiODS","CurrentUser","FBLogger","RealtimeRequestStreamWebClientTypedLogger","gkx"],(function(a,b,c,d,e,f){__p&&__p();var g="bladerunner_js_client",h={info:"info",warning:"warning",exception:"exception"};a=function(){"use strict";__p&&__p();function a(){this.$1=this.$4(),this.setFBLoggerLevel(1)}var c=a.prototype;c.info=function(a){this.$3>=2&&b("FBLogger")(g).info(a),this.$5(h.info,a)};c.warn=function(a){this.$3>=1&&b("FBLogger")(g).warn(a),this.$5(h.warning,a)};c.exception=function(a,c){c===void 0&&(c="");c=c+" "+a.toString();this.$3>=0&&b("FBLogger")(g).warn(c);this.$5(h.exception,c)};c.bumpCounter=function(a,c){c===void 0&&(c=1),b("BanzaiODS").bumpEntityKey("BladeRunnerClient",a,c)};c.setClientSessionId=function(a){this.$2=a};c.setFBLoggerLevel=function(a){this.$3=a};c.$5=function(a,c){if(this.$1){a=new(b("RealtimeRequestStreamWebClientTypedLogger"))().setClientTimeMs(Date.now()).setSeverity(a).setMessage(c).setClientSessionID(this.$2).setUserFbid(b("CurrentUser").getID());a.log()}};c.$4=function(){return b("gkx")("676834")};return a}();c=new a();e.exports=c}),null);
__d("BladeRunnerTypesInternal",["Base64","BladeRunnerLogger","BladeRunnerTypes"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){"use strict";__p&&__p();function a(){}var b=a.prototype;b.getHeaders=function(){if(this.headers!=null)return this.headers;throw new Error("Expected headers")};a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.requestType=n(b.requestType);c.payload=q(b.payload);c.headers=t(b.headers);c.extraHeader=q(b.extraHeader);c.requestTarget=q(b.requestTarget);return c};return a}(),h=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.dataId=o(b.dataId);c.data=q(b.data);c.shouldAck=v(b.shouldAck);return c};var c=a.prototype;c.decodeData=function(){if(this.data==null)throw new Error("Expected data");return b("Base64").decode(this.data)};return a}(),i=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.dataId=n(b.dataId);c.success=u(b.success);c.message=q(b.message);c.code=o(b.code);return c};return a}(),j=function(){"use strict";function a(){}a.readObject=function(b){var c=new a();c.streamId=o(b.streamId);c.message=q(b.message);return c};return a}(),k=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.status=n(b.status);c.message=q(b.message);c.code=o(b.code);c.shouldRetry=v(b.shouldRetry);c.retryDelayMs=o(b.retryDelayMs);return c};return a}(),l=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.newBody=q(b.newBody);c.newExtraHeader=q(b.newExtraHeader);c.patchExtraHeader=q(b.patchExtraHeader);c.killBody=v(b.killBody);c.temporary=v(b.temporary);return c};return a}(),m=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.getRequest=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request;throw new Error("Expected request")};c.getData=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data;throw new Error("Expected data")};c.getDataAck=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA_ACK&&this.dataAck!=null)return this.dataAck;throw new Error("Expected dataAck")};c.getStatusUpdate=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate;throw new Error("Expected status update")};c.getLog=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log;throw new Error("Expected log")};c.getRewriteRequest=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST&&this.rewriteRequest!=null)return this.rewriteRequest;throw new Error("Expected rewrite request")};c.getStreamId=function(){__p&&__p();if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST&&this.rewriteRequest!=null)return this.rewriteRequest.streamId;throw new Error("Frame with unexpected type")};a.readObject=function(c){__p&&__p();var d=new a();d.type=n(c.type);switch(d.type){case b("BladeRunnerTypes").StreamFrameType.REQUEST:d.request=g.readObject(r(c.request));break;case b("BladeRunnerTypes").StreamFrameType.DATA:d.data=h.readObject(r(c.data));break;case b("BladeRunnerTypes").StreamFrameType.DATA_ACK:d.dataAck=i.readObject(r(c.dataAck));break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:d.statusUpdate=k.readObject(r(c.statusUpdate));break;case b("BladeRunnerTypes").StreamFrameType.LOG:d.log=j.readObject(r(c.log));break;case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:d.rewriteRequest=l.readObject(r(c.rewriteRequest));break;default:b("BladeRunnerLogger").warn("Frame with unexpected type: "+d.type);return null}return d};a.newRequestFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.REQUEST;d.request=c;return d};a.newDataFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.DATA;d.data=c;return d};a.newDataAckFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.DATA_ACK;d.dataAck=c;return d};a.newStatusUpdateFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;d.statusUpdate=c;return d};a.newLogFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.LOG;d.log=c;return d};a.newRewriteRequestFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST;d.rewriteRequest=c;return d};return a}();a=function(){"use strict";__p&&__p();function a(a,b){this.batchId=a,this.frames=b}var b=a.prototype;b.getFrames=function(){if(this.frames!=null)return this.frames;throw new Error("Expected frames")};b.write=function(){return JSON.stringify(this)};a.read=function(b){__p&&__p();b=JSON.parse(b);var c=b.batchId||0,d=[];for(var b=b.frames,e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;g=m.readObject(g);g!=null&&d.push(g)}return new a(c,d)};return a}();function n(a){if(typeof a==="number")return a;throw new Error("Expected number")}function o(a){return a==null?null:n(a)}function p(a){if(typeof a==="string")return a;throw new Error("Expected string")}function q(a){return a==null?null:p(a)}function r(a){if(typeof a==="object"&&a!=null)return a;throw new Error("Expected object")}function s(a){if(typeof a==="object"&&a!=null){var b=a,c={};Object.keys(b).forEach(function(a){var d=b[a];typeof d==="string"&&d!=null&&(c[a]=d)});return c}throw new Error("Expected string map")}function t(a){return a==null?null:s(a)}function u(a){if(typeof a==="boolean"&&a!=null)return a;throw new Error("Expected boolean")}function v(a){return a==null?null:u(a)}e.exports={GatewayStreamBatch:a,GatewayStreamData:h,GatewayStreamDataAck:i,GatewayStreamFrame:m,GatewayStreamLog:j,GatewayStreamRequest:g,GatewayStreamRewriteRequest:l,GatewayStreamStatusUpdate:k}}),null);
__d("BladeRunnerEventHandler",["BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a=function(){"use strict";__p&&__p();function a(a,b,c){this.$2=a,this.$1=b,this.$3=c}var c=a.prototype;c.onProxyResponse=function(a){__p&&__p();this.$4(a);var c=[];for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;this.$2.witnessFrame(g)&&c.push(g)}c.length>0&&this.$5(new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(a.batchId,c))};c.onDisconnect=function(){this.$2.resetErrors();var a=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();a.streamId=this.$2.getRequest().streamId;a.status=b("BladeRunnerTypes").StreamStatus.CLOSED;a.shouldRetry=!0;a.retryDelayMs=0;a=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)]);this.onProxyResponse(a)};c.$4=function(a){__p&&__p();var c=this;a=a.getFrames().filter(function(a){return a.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE});for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;f=f.getStatusUpdate();if(f.status==b("BladeRunnerTypes").StreamStatus.CLOSED||f.status==b("BladeRunnerTypes").StreamStatus.REJECTED){this.$2.onError();var h=f.shouldRetry!=null&&f.shouldRetry,i=f.message!=null?f.message:"null";if(h&&this.$2.getErrorCount()<=this.$2.getRetriesAllowed()){f.status=b("BladeRunnerTypes").StreamStatus.PAUSED;var j=g;f.retryDelayMs!=null&&(j=f.retryDelayMs);b("BladeRunnerLogger").info("Can retry: stream "+f.streamId+" closed with status "+f.status+", message "+i+". Error count: "+this.$2.getErrorCount()+", retryDelay "+j+"ms. Already retrying: "+this.$2.getRetryRequestScheduled().toString());this.$2.getRetryRequestScheduled()?b("BladeRunnerLogger").bumpCounter("stream_closed_already_retrying"):(b("BladeRunnerLogger").bumpCounter("stream_closed_will_retry"),this.$2.setRetryRequestScheduled(!0),j>0?b("setTimeoutAcrossTransitions")(function(){return c.$6()},j):this.$6())}else b("BladeRunnerLogger").info("Will not retry: stream "+f.streamId+" closed with status "+f.status+", message "+i+". Error count: "+this.$2.getErrorCount()+", shouldRetry "+h.toString()+". Already retrying: "+this.$2.getRetryRequestScheduled().toString()),h?b("BladeRunnerLogger").bumpCounter("stream_closed_retry_exceeded"):b("BladeRunnerLogger").bumpCounter("stream_closed_no_retry"),this.$3.removeStream(f.streamId)}}};c.$6=function(){this.$2.setRetryRequestScheduled(!1),this.$2.isAlive()&&this.$3.sendRetryStreamRequest(this.$2)};c.$5=function(a){__p&&__p();b("BladeRunnerLogger").bumpCounter("send_to_handler");var c=[];this.$1.onBatch(a);for(var a=a.getFrames(),d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;try{switch(f.type){case b("BladeRunnerTypes").StreamFrameType.DATA:this.$1.onData(f.getData().decodeData());c.push(f.getData());break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:this.$1.onStatusUpdate(f.getStatusUpdate().status);break;case b("BladeRunnerTypes").StreamFrameType.LOG:f=f.getLog().message;f!=null&&this.$1.onLog(f);break;default:throw new Error("Frame with unexpected type")}}catch(a){b("BladeRunnerLogger").bumpCounter("send_to_handler_error"),b("BladeRunnerLogger").exception(a,"Failed sending frame to stream handler")}}this.$7(c)};c.$7=function(a){__p&&__p();var c=[];for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;if(f.shouldAck===!0&&f.dataId!=null){var g=new(b("BladeRunnerTypesInternal").GatewayStreamDataAck)();g.streamId=f.streamId;g.dataId=f.dataId;g.success=!0;c.push(g)}}this.$3.sendDataAcks(c)};return a}();e.exports=a}),null);
__d("BladeRunnerSocket",["BladeRunnerEventHandler","BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal","FBMqttChannel","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="Connected",h="Disconnected",i=32*1024,j="/br_sr",k="/sr_res",l=null;a=function(){__p&&__p();function a(a){this.$1=[],this.$2=0,this.$3=null,this.$4=0,this.$5=new Map(),this.$6=a!=null?a:b("FBMqttChannel"),b("BladeRunnerLogger").setClientSessionId(b("uuid")()),this.$7()}a.get=function(){l==null&&(l=new a(b("FBMqttChannel")));return l};var c=a.prototype;c.sendNewStreamRequest=function(c,d){d=new(b("BladeRunnerEventHandler"))(c,d,this);var e=c.getRequest();this.$5.set(e.streamId,d);this.getStreamCount()<=a.maxStreamCount?this.$8(e):(b("BladeRunnerLogger").bumpCounter("socket_request_throttled_max_streams"),b("BladeRunnerLogger").warn("Maximum stream count reached, will not send request: "+JSON.stringify(c.getRequest().getHeaders())),this.$9(d,e.streamId))};c.sendRetryStreamRequest=function(a){this.$8(a.getRequest())};c.sendCancel=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_cancel");var c=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();c.streamId=a;c.status=b("BladeRunnerTypes").StreamStatus.CLOSED;this.$10(c);this.removeStream(a)};c.sendDataAcks=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_data_ack",a.length),this.$11(a)};c.removeStream=function(a){this.$5["delete"](a)};c.getStreamCount=function(){return this.$5.size};c.getNextStreamId=function(){this.$4++;return this.$4};c.onMQTTStateChanged=function(a){this.$12();if(a!=h&&a!=g||this.$3==a)return;this.$3=a;b("BladeRunnerLogger").info("MQTTStateChanged: "+a);a==h?(b("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"),this.$13()):a==g&&b("BladeRunnerLogger").bumpCounter("mqtt_state_connected")};c.$8=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_request"),this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a)),this.$12()};c.$10=function(a){this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)),this.$12()};c.$11=function(a){__p&&__p();for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(e))}this.$12()};c.$14=function(){this.$2++;return this.$2};c.$12=function(){if(this.$6.getConnectionState()===g&&this.$1.length>0){try{this.$15(this.$1)}finally{this.$1=[]}return!0}return!1};c.$15=function(a){__p&&__p();var c=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(this.$14(),a);c=c.write();if(c.length>i){var d=Math.floor(a.length/2);if(d===0)throw new Error("Publish is too long: "+c.length);this.$15(a.slice(0,d));this.$15(a.slice(d,a.length))}else try{b("BladeRunnerLogger").info("send message to "+j+" "+c),this.$6.publish(j,c),b("BladeRunnerLogger").bumpCounter("mqtt_publish_success")}catch(a){b("BladeRunnerLogger").exception(a,"Failed publishing to MQTT");b("BladeRunnerLogger").bumpCounter("mqtt_publish_error");throw a}};c.$7=function(){__p&&__p();var a=this;b("BladeRunnerLogger").info("Starting socket with endpoint "+this.$6.getEndpoint()+" useragent "+navigator.userAgent);this.$16();this.onMQTTStateChanged(this.$6.getConnectionState());this.$6.subscribeChannelEvents({onMQTTStateChanged:function(b){a.onMQTTStateChanged(b)},onJSError:function(a){var c=a!=null&&typeof a.isRecoverable==="boolean"?a.isRecoverable:!1;c?b("BladeRunnerLogger").bumpCounter("mqtt_channel_recoverable_error"):(b("BladeRunnerLogger").warn("JS error in MQTTChannel: "+(typeof a=="object"&&a!=null?a.toString():"unknown error")+", "+JSON.stringify(a)),b("BladeRunnerLogger").bumpCounter("mqtt_channel_error"))}});this.$6.subscribe(j,function(a){throw new Error("Unexpected response: "+j+" "+a.toString())});this.$6.subscribe(k,function(b){a.$17(b)})};c.$17=function(a){a=b("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);this.processBatch(a)};c.processBatch=function(a){__p&&__p();try{b("BladeRunnerLogger").bumpCounter("socket_process_batch");var c=JSON.stringify(a);b("BladeRunnerLogger").info("Received batch "+c.substring(0,256)+(c.length>256?"...":""));c=null;for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;g=g.getStreamId();c==null&&(c=g);if(g!=null&&c!=g)throw new Error("Received batch with frames for multiple streams")}if(c!=null){g=this.$5.get(c);g!=null?g.onProxyResponse(a):b("BladeRunnerLogger").info("Received batch with frames for unknown stream id: "+c)}else b("BladeRunnerLogger").info("Received batch with no frames")}catch(a){b("BladeRunnerLogger").exception(a,"Failed processing batch from MQTT");b("BladeRunnerLogger").bumpCounter("socket_process_batch_error");throw a}};c.$13=function(){this.$5.forEach(function(a,b,c){a.onDisconnect()})};c.$9=function(a,c){var d=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();d.streamId=c;d.status=b("BladeRunnerTypes").StreamStatus.REJECTED;d.shouldRetry=!1;d.retryDelayMs=0;c=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(d)]);a.onProxyResponse(c)};c.$16=function(){"WebSocket"in window||(b("BladeRunnerLogger").warn("Browser does not support websocket"),b("BladeRunnerLogger").bumpCounter("websocket_not_supported"))};return a}();a.maxStreamCount=2e3;e.exports=a}),null);
__d("BladeRunnerStream",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var b=a.prototype;b.getStreamHandler=function(){return this.$1};b.cancel=function(){};b.isAlive=function(){return!1};b.getStatus=function(){return null};b.getStreamId=function(){return 0};return a}();e.exports=a}),null);
__d("BladeRunnerStreamState",["BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=null,this.$3=0,this.$4=!1,this.$5=0,this.$6=!1}var c=a.prototype;c.getRequest=function(){return this.$1};c.isAlive=function(){return!(this.$2==b("BladeRunnerTypes").StreamStatus.CLOSED||this.$2==b("BladeRunnerTypes").StreamStatus.REJECTED)};c.getLastStatus=function(){return this.$2};c.setLastStatus=function(a){this.$2=a};c.onError=function(){this.$3+=1};c.getErrorCount=function(){return this.$3};c.resetErrors=function(){this.$3=0};c.getRetryRequestScheduled=function(){return this.$6};c.setRetryRequestScheduled=function(a){this.$6=a};c.witnessFrame=function(a){__p&&__p();switch(a.type){case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:var c=a.getStatusUpdate(),d=!0;switch(c.status){case b("BladeRunnerTypes").StreamStatus.ACCEPTED:d=!this.$4;this.$4||(this.$4=!0);break;case b("BladeRunnerTypes").StreamStatus.STARTED:d=this.getLastStatus()!=b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.PAUSED:d=this.getLastStatus()==b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.CLOSED:case b("BladeRunnerTypes").StreamStatus.REJECTED:default:d=!0}this.setLastStatus(c.status);return d;case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:this.$7(a.getRewriteRequest());return!1;default:return!0}};c.setRetriesAllowed=function(a){this.$5=a};c.getRetriesAllowed=function(){return this.$5};c.$7=function(a){if(a.patchExtraHeader!=null)return;a.temporary!=null||a.temporary==!0||(a.newBody!=null&&(this.$1.payload=a.newBody),a.newExtraHeader!=null&&(this.$1.extraHeader=a.newExtraHeader,this.$1.headers=JSON.parse(a.newExtraHeader)),a.killBody!=null&&a.killBody==!0&&(this.$1.payload=null))};return a}();e.exports=a}),null);
__d("BladeRunnerSocketStream",["BladeRunnerStream","BladeRunnerStreamState","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();var g=4;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e){c=a.call(this,c)||this;c.$BladeRunnerSocketStream1=e;c.$BladeRunnerSocketStream2=new(b("BladeRunnerStreamState"))(d);c.$BladeRunnerSocketStream2.setRetriesAllowed(g);return c}var d=c.prototype;d.send=function(){this.$BladeRunnerSocketStream1.sendNewStreamRequest(this.$BladeRunnerSocketStream2,this.getStreamHandler())};d.cancel=function(){this.isAlive()&&(this.$BladeRunnerSocketStream1.sendCancel(this.$BladeRunnerSocketStream2.getRequest().streamId),this.$BladeRunnerSocketStream2.setLastStatus(b("BladeRunnerTypes").StreamStatus.CLOSED))};d.isAlive=function(){return this.$BladeRunnerSocketStream2.isAlive()};d.getStatus=function(){return this.$BladeRunnerSocketStream2.getLastStatus()};d.getStreamId=function(){return this.$BladeRunnerSocketStream2.getRequest().streamId};return c}(b("BladeRunnerStream"));e.exports=a}),null);
__d("BladeRunnerClient",["Base64","BladeRunnerConfig","BladeRunnerLogger","BladeRunnerSocket","BladeRunnerSocketStream","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a!=null?a:b("BladeRunnerSocket").get()}var c=a.prototype;c.requestStream=function(a,c,d){var e=new(b("BladeRunnerTypesInternal").GatewayStreamRequest)();e.streamId=this.$1.getNextStreamId();e.requestType=b("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;e.headers=b("BladeRunnerConfig").patchRequestHeaders(a);e.extraHeader=JSON.stringify(e.headers);e.payload=c!=null?b("Base64").encode(c):null;a=new(b("BladeRunnerSocketStream"))(d,e,this.$1);a.send();return a};c.logInfo=function(a){b("BladeRunnerLogger").info(a)};c.bumpCounter=function(a){b("BladeRunnerLogger").bumpCounter(a)};return a}();e.exports=a}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("PagesPageSurfaceImpressionFalcoEvent",["FalcoLogger"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}a.log=function(a){b("FalcoLogger").log("pages_page_surface_impression",a())};return a}();e.exports=a}),null);
__d("TBLPagesPageSurfaceImpressionFalcoEventWrapper",["PagesPageSurfaceImpressionFalcoEvent"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(){}a.log=function(a){b("PagesPageSurfaceImpressionFalcoEvent").log(function(){return a.data})};return a}();e.exports=a}),null);