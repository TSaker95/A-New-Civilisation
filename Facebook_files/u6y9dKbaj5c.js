if (self.CavalryLogger) { CavalryLogger.start_js(["5va8E"]); }

__d("SearchClientFunnelTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActionName=function(a){this.$1.action_name=a;return this};c.setLastState=function(a){this.$1.last_state=a;return this};c.setSelectedID=function(a){this.$1.selected_id=a;return this};c.setSelectedText=function(a){this.$1.selected_text=a;return this};c.setSelectedType=function(a){this.$1.selected_type=a;return this};c.setTypeaheadSid=function(a){this.$1.typeahead_sid=a;return this};c.setTypedQuery=function(a){this.$1.typed_query=a;return this};return a}();c={action_name:!0,last_state:!0,selected_id:!0,selected_text:!0,selected_type:!0,typeahead_sid:!0,typed_query:!0};e.exports=a}),null);
__d("SearchFunnelLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SEARCH_BOX_TAPPED:"search_box_tapped",TA_SUGGESTION_CLICKED:"ta_suggestion_clicked",TA_ABANDON:"ta_abandon",SERP_INLINE_ACTION:"serp_inline_action",SERP_RESULTS_LOADED:"serp_results_loaded",SERP_RESULT_CLICKED:"serp_result_clicked",SERP_SEE_MORE_CLICKED:"serp_see_more_clicked",SERP_SCROLL_RESULTS:"serp_scroll_results",SERP_TAB_CLICKED:"serp_tab_clicked",VIEW_PORT_VIEWS_ON_SEARCH_RESULTS:"view_port_views_on_search_results",END_OF_SERP_RESULTS:"end_of_serp_results",MARKETPLACE_SERP_ITEM_CLICKED:"marketplace_click"})}),null);
__d("SearchFunnelLogger",["SearchClientFunnelTypedLogger","SearchFunnelLoggerConfig","SearchFunnelLoggerEvents"],(function(a,b,c,d,e,f){"use strict";a={logSearchOpen:function(a){if(!b("SearchFunnelLoggerConfig").isEnabled)return;new(b("SearchClientFunnelTypedLogger"))().setActionName(b("SearchFunnelLoggerEvents").SEARCH_BOX_TAPPED).setTypeaheadSid(a).log()}};e.exports=a}),null);
__d("BrowseClientEventLogger",["csx","Banzai","DOMQuery","SearchFunnelLogger","SearchLoggingOptions","ge","gkx","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="browse_client_event_session",i="search_www_click_error",j="21.";a={logData:function(a,c,d,e){__p&&__p();e===void 0&&(e={});if(!a||!c)return;e.event=a;e.client_time=Math.floor(Date.now());e.client_time_2=Date.now()/1e3;e.session_id=c;e.vertical=d;this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(c)!==-1)return;a=e.event==="click"&&e.clicked_href!=null&&b("SearchLoggingOptions").signalLinkClicks;b("Banzai").post(h,[e],{delay:0,retry:!0,signal:a})},logClick:function(a){a.gt.event="click",this.maybeLogVisiblityEvent(a,!0),b("gkx")("678249")&&b("ifRequired")("FacebarTypeaheadRefreshNullstate",function(a){a.setIsNullstateStale(!0)})},maybeLogClientViewEvent:function(a){a.event="client_view",this.maybeLogVisiblityEvent(a)},maybeLogVisiblityEvent:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=null;c&&(d=a,a=a.gt);if(!a||!a.xt||a.xt.indexOf(j)!==0){c&&b("Banzai").post(i,[d],{delay:0,retry:!0});return}var e=JSON.parse(a.xt.substring(3));c&&(e.click_type=a.click_type,e.tn=a.tn,e.clicked_href=a.clicked_href,d&&d.bt&&d.bt.ct&&(d.bt.ct=="feedback"&&(e.feedback_score=d.bt.feedback_score,e.feedback_type=d.bt.feedback_type)));c=a.event;d=this._getPositionForCurrentDOMNode(e.unit_id);e.position=d;if(e.display_style==="context_hscroll"&&(c==="client_view"||c==="vpvd"||c==="visible"||c==="hidden"))return;if(c==="vpvd"){if(!a.ft)return;e.vpvd_time=a.ft.vpvd_time_delta}this.logData(c,e.session_id,e.vertical,e)},_getPositionForCurrentDOMNode:function(a){__p&&__p();if(a==null||a==void 0)return null;var c=0,d=b("ge")("browse_result_area");if(d==null||d==void 0)return null;d=b("DOMQuery").scry(d,"._401d");for(var e=0;e<d.length;e++){var f=d[e];f=f.getAttribute("data-gt");if(f!==null||f!==void 0){f=JSON.parse(JSON.parse(f).xt.substring(3));if(f.item_type=="result"&&f.id!==""&&f.id!==null){if(f.unit_id==a)return c;c++}}}return null},logImpression:function(a){a.event="impression",this.maybeLogVisiblityEvent(a)}};e.exports=a}),null);
__d("ViewableImpressionUtils",["csx","CSS"],(function(a,b,c,d,e,f,g){a={isHorizontallyOffscreen:function(a,c,d){var e=Math.max(c.x,0);d=Math.min(c.x+c.width,d.width);return d-e<c.width||b("CSS").matchesSelector(a,".desktop_hscroll_offscreen")}};e.exports=a}),null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","Event","getViewportDimensions"],(function(a,b,c,d,e,f){a={getEventListeners:function(a){return[b("Event").listen(document,"DOMContentLoaded",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,a)]},getViewportInfo:function(){return b("getViewportDimensions")()},isSnippetFlyoutVisible:function(){return!1}};e.exports=a}),null);
__d("FullViewLogger",["Banzai","ScriptPath","SubscriptionsHandler","URI"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){}a.logFromViewableImpressionTracker=function(b){var c=new a();c.subscribeToTrackerEvents(b)};var c=a.prototype;c.subscribeToTrackerEvents=function(a){this.subscriptionsHandler=new(b("SubscriptionsHandler"))(),this.subscriptionsHandler.addSubscriptions(a.addListener("full_view",this.onFullView,this))};c.onFullView=function(a){this.$1()&&this.$2(a);a={token:a.token,fullViewType:a.fullViewType,scriptPath:b("ScriptPath").getTopViewEndpoint()};b("Banzai").post("xtrackable:full_view",a);this.$1()&&this.$3(a)};c.$1=function(){return 0};c.$2=function(a){};c.$3=function(a){};return a}();e.exports=a}),null);
__d("PercentVisible",[],(function(a,b,c,d,e,f){e.exports={NO_VISIBLE:-1,VISIBLE_0_PCT:0,VISIBLE_50_PCT:50,VISIBLE_100_PCT:100}}),null);
__d("FullViewType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTIRE_UNIT:1})}),null);
__d("GHLDelay",["AdImpressionLoggingConfig"],(function(a,b,c,d,e,f){var g=null;a={getEnabled:function(){return g===null?b("AdImpressionLoggingConfig").enableDelayedHiddenCheck:g},setEnabled:function(a){g=a}};e.exports=a}),null);
__d("GHLTestElement",["csx","invariant","BanzaiODS","Parent","containsNode","getElementPosition"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a,c){__p&&__p();var d=Array.from(a.querySelectorAll("img"));d.length>0||h(0,13937);d=d.filter(i);if(d.length===0){b("BanzaiODS").bumpEntityKey("feed_ads","GHLTestElement.testElementI.skipping_check_for_incompatible_element"+c);return!1}c=d.filter(function(a){a=b("getElementPosition")(a);return a.width>0||a.height>0});d=c.length===0;return d&&!j(a)};var i=function(a){var c;return b("containsNode")(a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement,a)},j=function(a){return!!b("Parent").bySelector(a,k)},k=[".hidden_elem","._5ds2","._i6m"].join(",");e.exports={testElementI:a}}),null);
__d("GHLTracker",["BanzaiODS"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();a=function(a){if(g.has(a)){b("BanzaiODS").bumpEntityKey("feed_ads","GHLTracker.element_id_duplicated");return}g.set(a,{isHidden:!1,isDelayImpLogged:!1})};c=function(a){var b=g.get(a);b!==void 0&&g.set(a,{isHidden:!0,isDelayImpLogged:b.isDelayImpLogged})};d=function(a){var b=g.get(a);b!==void 0&&g.set(a,{isHidden:b.isHidden,isDelayImpLogged:!0})};f=function(a){return g.get(a)};e.exports={track:a,markH:c,markImp:d,getState:f}}),null);
__d("ViewableImpressionTracker",["csx","cx","AdImpressionLoggingConfig","Banzai","BanzaiODS","BrowseClientEventLogger","DataAttributeUtils","DOM","FBSiteWhiteOps","FullViewType","GHLDelay","GHLTestElement","GHLTracker","NonBlockingIFrame","PercentVisible","Run","Style","URI","ViewableImpressionUtils","Visibility","ge","getElementPosition","getViewportDimensions","ghlTestUBT","gkx","mixInEventEmitter","randomInt","ScriptPath"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.checkAndLogImpressionIfPendingOnExit=function(){b("AdImpressionLoggingConfig").enableFlushDelayLogOnCleanup&&e.waitForDelayLogged&&(clearTimeout(e.delayedLoggingTimeout),e.delayLogImpression())};this.delayLogImpression=function(){__p&&__p();e.waitForDelayLogged=!1;var a="other";e.element.id.startsWith("hyperfeed")&&(a="16");var c=b("GHLTestElement").testElementI(e.element,".vit."+a),d=b("GHLTracker").getState(e.element.id);d&&(d.isHidden!==c&&b("BanzaiODS").bumpEntityKey("feed_ads","ViewableImpressionTracker.delayLogImpression.hidden_value_mismatch."+c+"."+d.isHidden+"."+a));b("GHLTracker").markImp(e.element.id);if(c){e.$11();b("AdImpressionLoggingConfig").logForHiddenAds&&e.logImpression(1,!0,{});return}e.logImpression(1,!1,{});e.$9()};this.id=a;this.element=c;this.config=d;this.iframe=null;this.viewableTimeout=null;this.delayedLoggingTimeout=null;this.clearSubsequentTimeout=null;this.waitForSubsequent=!1;this.waitForLogged=!1;this.waitForDelayLogged=!1;this.isNonViewableLogged=!1;this.isVisible=!1;this.iframeLogged=!1;this.banzaiLogged=!1;this.topLeftInViewport=!1;this.bottomRightInViewport=!1;b("Run").onUnload(this.checkAndLogImpressionIfPendingOnExit);b("Run").onLeave(this.checkAndLogImpressionIfPendingOnExit);b("ghlTestUBT")(function(a){a===!0&&b("GHLDelay").setEnabled(!0)})}var c=a.prototype;c.getID=function(){return this.id};c.getConfig=function(){return this.config};c.getPercentInViewport=function(){var a=b("getViewportDimensions")(),c=b("getElementPosition")(this.element);return this.$1(a,c)};c.$2=function(a,c,d){__p&&__p();d===void 0&&(d=0);var e=b("gkx")("833732");if(e&&(c.height===0||c.width===0))return 0;if(c.x<a.width&&c.x+c.width>0&&c.y<a.height&&c.y+c.height>d&&b("Style").get(this.element,"visibility")!=="hidden"&&b("Style").get(this.element,"opacity")!=="0"){e=Math.max(c.x,0);var f=Math.min(c.x+c.width,a.width);d=Math.max(c.y,d);a=Math.min(c.y+c.height,a.height);if(c.height*c.width===0)return 100;f=100*(f-e)*(a-d)/(c.height*c.width);return f}return 0};c.$1=function(a,c){return this.config.require_horizontally_onscreen&&b("ViewableImpressionUtils").isHorizontallyOffscreen(this.element,c,a)?0:this.$2(a,c)};c.$3=function(a,c,d){a=this.$2(a,c,d);if(a===0)return b("PercentVisible").NO_VISIBLE;else if(a<50)return b("PercentVisible").VISIBLE_0_PCT;else if(a<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};c.$4=function(a,c,d){d===void 0&&(d=0);var e=Math.max(c.y,d);c=Math.min(c.y+c.height,a.height);c=100*(c-e)/(a.height-d);if(c<50)return b("PercentVisible").VISIBLE_0_PCT;else if(c<100)return b("PercentVisible").VISIBLE_50_PCT;else return b("PercentVisible").VISIBLE_100_PCT};c.$5=function(a,c){__p&&__p();var d=0,e=b("ge")("pagelet_bluebar");e&&e.offsetHeight&&(d=e.offsetHeight+e.offsetTop);if(this.config.should_log_viewport_duration){e=this.$4(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewport_viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:break}}e=this.$3(a,c,d);switch(e){case b("PercentVisible").VISIBLE_0_PCT:case b("PercentVisible").VISIBLE_50_PCT:case b("PercentVisible").VISIBLE_100_PCT:this.emit("viewability",{tracker:this,id:this.getID(),token:this.getToken(),percentVisible:e});break;default:this.emit("hidden",{id:this.getID(),token:this.getToken()});break}};c.$6=function(a,c){if(b("Style").get(this.element,"visibility")==="hidden"||b("Style").get(this.element,"opacity")==="0")return!1;var d=c.x,e=c.y,f=c.x+c.width;c=c.y+c.height;this.topLeftInViewport=this.topLeftInViewport||d>=0&&d<=a.width&&e>=0&&e<=a.height;this.bottomRightInViewport=this.bottomRightInViewport||f>=0&&f<=a.width&&c>=0&&c<=a.height;return this.topLeftInViewport&&this.bottomRightInViewport};c.$7=function(a,c){if(this.hasEmittedFullViewEvent)return;this.$6(a,c)&&(this.emit("full_view",{tracker:this,id:this.getID(),token:this.getToken(),fullViewType:b("FullViewType").ENTIRE_UNIT}),this.hasEmittedFullViewEvent=!0)};c.onVisible=function(a){__p&&__p();var c=this;this.isVisible=!0;a=b("getViewportDimensions")();var d=b("getElementPosition")(this.element),e=this.$1(a,d),f=e>this.config.pixel_in_percentage,g=[],h=[];(this.config.skip_imp_if_no_images||this.config.check_images_before_log)&&(g=Array.from(this.element.querySelectorAll("img")),h=Array.from(this.element.getElementsByClassName("_7cqq")),b("BanzaiODS").bumpEntityKey("feed_ads","ViewableImpressionTracker.delayLogImpression.isFeedLoadedCheck."+(g.length===0)+"."+(h.length===0)));if(this.config.skip_imp_if_no_images&&g.length===0)return;this.emit("visible",{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:e});this.config.should_log_viewability_duration&&this.$5(a,d);this.$7(a,d);if(!f){this.$8();return}this.isLogged()?this.$9():this.$10();!this.waitForLogged&&!this.waitForDelayLogged&&!this.isLogged()&&!(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())&&(this.waitForLogged=!0,this.viewableTimeout=setTimeout(function(){__p&&__p();c.waitForLogged=!1;if(b("AdImpressionLoggingConfig").blockInvisible&&b("Visibility").isHidden())return;var a=c.getPercentInViewport();a=a>c.config.pixel_in_percentage;if(!a){c.$11();return}c.config.check_images_before_log&&(g.length===0&&b("BanzaiODS").bumpEntityKey("feed_ads","ViewableImpressionTracker.log_without_load."+c.config.trackable_identifier));if(b("GHLDelay").getEnabled()&&c.config.can_delay_log_impression===!0){c.waitForDelayLogged=!0;a=b("AdImpressionLoggingConfig").maxHiddenCheckDelay;a=a-c.config.duration_in_ms;a<0&&(a=0);c.delayedLoggingTimeout=setTimeout(c.delayLogImpression,a)}else c.logImpression(1,!1,{}),c.$9()},this.config.duration_in_ms))};c.onHidden=function(){var a=this;this.emit("hidden",{id:this.getID(),token:this.getToken()});this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged?this.logNonViewableImpression():!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible&&this.logNonViewableImpression();this.isVisible=!1;this.waitForLogged&&(this.waitForLogged=!1,clearTimeout(this.viewableTimeout));this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0&&(this.waitForSubsequent=!0,this.clearSubsequentTimeout=setTimeout(function(){a.waitForSubsequent=!1,a.reset(),a.isVisible&&a.onVisible()},this.config.subsequent_gap_in_ms));this.$11()};c.onRemoved=function(){this.isVisible=!1};c.getToken=function(){return b("DataAttributeUtils").getDataAttribute(this.element,"data-xt")};c.logImpression=function(a,c,d){__p&&__p();if(this.isLogged())return;var e=this.getToken(),f=Math.floor(Date.now()/1e3),g=this.$12(),h=Date.now()+"_"+(b("randomInt")(0,4294967295)+1);e={xt:e,isv:a,cts:f,csp:g,hba:c,etid:h};this.config.should_log_endpoint_info&&(e.me=b("ScriptPath").getTopViewEndpoint());if(b("Banzai").isEnabled("xtrackable_clientview_batch")&&this.config.should_batch||this.config.vital_mode_for_ss||this.config.signal_mode_for_ss){a=this.config.vital_mode_for_ss?b("Banzai").VITAL:{};a.signal=this.config.signal_mode_for_ss;this.logWithBanzai(e,a);b("AdImpressionLoggingConfig").runBotDetection&&b("FBSiteWhiteOps").appendToWindow(h,"FACEBOOK_WEB_ADS","IMPRESSION")}else this.logWithIFrame(Object.assign(e,d))};c.logNonViewableImpression=function(){if(this.config.nonviewableEnabled){var a=this.getToken();b("Banzai").post("xtrackable:nonviewable",{xt:a})}this.isNonViewableLogged=!0};c.isLogged=function(){return this.iframeLogged||this.banzaiLogged};c.reset=function(){this.iframeLogged&&(this.iframeLogged=!1),this.iframe&&(b("DOM").remove(this.iframe),this.iframe=null),this.banzaiLogged&&(this.banzaiLogged=!1),this.isNonViewableLogged=!1,this.isVisible=!1,this.waitForLogged=!1,this.waitForDelayLogged=!1,this.waitForSubsequent=!1};c.logWithBanzai=function(a,c){this.banzaiLogged=!0,b("BrowseClientEventLogger").maybeLogClientViewEvent(a),b("Banzai").post("xtrackable:clientview_batch",a,c)};c.logWithIFrame=function(a){this.iframeLogged=!0,this.config.is_instream_story?b("NonBlockingIFrame").loadIFrame(new(b("URI"))(this.config.impressionURL).addQueryData(a).toString()):(this.iframe=b("DOM").create("iframe",{src:new(b("URI"))(this.config.impressionURL).addQueryData(a),width:0,height:0,frameborder:0,scrolling:"no",className:"fbEmuTracking"}),this.iframe.setAttribute("aria-hidden","true"),b("DOM").appendContent(this.element,this.iframe))};c.$12=function(){__p&&__p();var a=b("DataAttributeUtils").getDataAttribute(this.element,"data-dedupekey");if(a===null)return null;var c=this.$13();if(c===null||c.length===0)return null;var d=c.length;while(--d>=0){var e=b("DataAttributeUtils").getDataAttribute(c[d],"data-dedupekey");if(e!==null&&a===e)break}return d+1};c.$13=function(){__p&&__p();var a=b("ge")("contentArea");if(a){var c="._5jmm";a=b("DOM").scry(a,c);return a.filter(function(a){return b("DataAttributeUtils").getDataAttribute(a,"data-dedupekey")})}else{c=b("ge")("m_newsfeed_stream");return c===null?null:c.getElementsByTagName("article")}};c.$14=function(){return 0};c.$8=function(){this.$14()&&(b("Style").set(this.element,"background-color","#abab9a"),b("Style").set(this.element,"outline","3px solid #abab9a"))};c.$10=function(){this.$14()&&(b("Style").set(this.element,"background-color","#e4f70a"),b("Style").set(this.element,"outline","3px solid #e4f70a"))};c.$11=function(){this.$14()&&(b("Style").set(this.element,"background-color",null),b("Style").set(this.element,"outline",null))};c.$9=function(){this.$14()&&(b("Style").set(this.element,"background-color","#047515"),b("Style").set(this.element,"outline","3px solid #047515"))};return a}();b("mixInEventEmitter")(a,{visible:!0,hidden:!0,full_view:!0,viewability:!0,viewport_viewability:!0,viewability_debug:!0});e.exports=a}),null);
__d("VisibilityUnitType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED_UNIT:"feed_unit",VIEWPORT:"viewport"})}),null);
__d("ViewabilityDurationSegmentLogger",["Banzai","PercentVisible","ViewableImpressionTracker","VisibilityUnitType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=8e3;a=function(){__p&&__p();a.logFromViewableImpressionTracker=function(b){var c=new a();c.subscribeToTrackerEvents(b)};function a(){this.$1=new Map(),this.$2=new Map(),this.$3=new Map(),this.$4=new Map(),this.$5=new Map()}var c=a.prototype;c.subscribeToTrackerEvents=function(a){a.addListener("viewability",this.onViewable.bind(this)),a.addListener("viewport_viewability",this.onViewport.bind(this)),a.addListener("hidden",this.onHidden.bind(this))};c.onViewable=function(a){__p&&__p();var c=a.id,d=a.percentVisible,e=Date.now(),f;switch(d){case b("PercentVisible").VISIBLE_0_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$2.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));d=this.$4.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_50_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$2.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$4.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_100_PCT:d=this.$1.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_0_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$2.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);d=this.$4.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_100_PCT,e,b("VisibilityUnitType").FEED_UNIT):this.$7(d,c,e);break}};c.onViewport=function(a){__p&&__p();var c=a.id,d=a.percentVisible,e=Date.now(),f;switch(d){case b("PercentVisible").VISIBLE_0_PCT:d=this.$3.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));d=this.$5.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_50_PCT:d=this.$3.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").VIEWPORT):this.$7(d,c,e);d=this.$5.get(c);d&&(f=this.$8(d,c,e,!0),this.$9(f,c));break;case b("PercentVisible").VISIBLE_100_PCT:d=this.$3.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_50_PCT,e,b("VisibilityUnitType").VIEWPORT):this.$7(d,c,e);d=this.$5.get(c);!d?this.$6(a,b("PercentVisible").VISIBLE_100_PCT,e,b("VisibilityUnitType").VIEWPORT):this.$7(d,c,e);break}};c.onHidden=function(a){a=a.id;var b=Date.now(),c=this.$1.get(a),d=this.$2.get(a),e=this.$3.get(a),f=this.$4.get(a),g=this.$5.get(a);c&&this.$9(this.$8(c,a,b,!0),a);d&&this.$9(this.$8(d,a,b,!0),a);e&&this.$9(this.$8(e,a,b,!0),a);f&&this.$9(this.$8(f,a,b,!0),a);g&&this.$9(this.$8(g,a,b,!0),a)};c.$6=function(a,c,d,e){d={token:a.token,startedTrackingTS:d,percentVisible:c,visibilityUnit:e,intervalMs:0,cumulativeMs:0,segmentIdx:0};switch(c){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(a.id,d);break;case b("PercentVisible").VISIBLE_50_PCT:e===b("VisibilityUnitType").FEED_UNIT?this.$2.set(a.id,d):this.$3.set(a.id,d);break;case b("PercentVisible").VISIBLE_100_PCT:e===b("VisibilityUnitType").FEED_UNIT?this.$4.set(a.id,d):this.$5.set(a.id,d);break}};c.$8=function(a,c,d,e){__p&&__p();d=d-a.startedTrackingTS;var f=d-a.cumulativeMs,g=a.percentVisible;f={token:a.token,startedTrackingTS:a.startedTrackingTS,percentVisible:g,visibilityUnit:a.visibilityUnit,intervalMs:f,cumulativeMs:d,segmentIdx:++a.segmentIdx};e&&(f.duration=d);switch(g){case b("PercentVisible").VISIBLE_0_PCT:this.$1.set(c,f);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2.set(c,f):this.$3.set(c,f);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4.set(c,f):this.$5.set(c,f);break}return f};c.$7=function(a,c,d){var e=a.intervalMs,f=d-a.startedTrackingTS-a.cumulativeMs;if(this.$10(e,f)){e=this.$8(a,c,d,!1);b("Banzai").post("xtrackable:viewability",e,b("Banzai").VITAL)}};c.$10=function(a,b){if(a>=g)return!1;if(a==0)return!0;if(a<1e3)return b>=1e3;a=a/1e3;b=b/1e3;return b>=2*a};c.$9=function(a,c){var d=a.percentVisible;switch(d){case b("PercentVisible").VISIBLE_0_PCT:this.$1["delete"](c);break;case b("PercentVisible").VISIBLE_50_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$2["delete"](c):this.$3["delete"](c);break;case b("PercentVisible").VISIBLE_100_PCT:a.visibilityUnit===b("VisibilityUnitType").FEED_UNIT?this.$4["delete"](c):this.$5["delete"](c);break}b("Banzai").post("xtrackable:viewability",a,b("Banzai").VITAL)};return a}();e.exports=a}),null);
__d("ViewableImpressionDurationLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();a.logFromViewableImpressionTracker=function(b){var c=new a();c.subscribeToTrackerEvents(b)};function a(){this.$1=new Map()}var c=a.prototype;c.subscribeToTrackerEvents=function(a){a.addListener("visible",this.onElementVisible.bind(this)),a.addListener("hidden",this.onElementHidden.bind(this))};c.onElementVisible=function(a){if(this.$1.get(a.id))return null;var b={token:a.token,startedTrackingTS:this.getTimeNow()};this.$1.set(a.id,b);return b};c.onElementHidden=function(a){var b=this.$1.get(a.id);if(!b)return!1;b.trackingDuration=this.getTimeNow()-b.startedTrackingTS;return this.sendLog(a.id)};c.sendLog=function(a){var c=this.$1.get(a);if(!c||!c.trackingDuration)return!1;b("Banzai").post("xtrackable:duration",c);this.$1["delete"](a);return!0};c.getTimeNow=function(){return parseFloat((Date.now()/1e3).toFixed(2))};return a}();e.exports=a}),null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();a.logFromViewableImpressionTracker=function(b,c){c=new a(c);c.subscribeToTrackerEvents(b)};function a(a){this.loggingDurationMS=a,this.trackingEntries={}}var c=a.prototype;c.subscribeToTrackerEvents=function(a){this.visibleSubscription=a.addListener("visible",this.onElementVisible,this),this.hiddenSubscription=a.addListener("hidden",this.onElementHidden,this)};c.onElementVisible=function(a){var b=this.getCurrentTimestamp(),c=this.trackingEntries[a.id];c||(c=this.createTrackingEntry(a),this.beginTracking(a.id,c),b=c.startedTrackingTS);c.viewportProgressEvents.push({timestamp:b,percentInViewport:a.percentInViewport.toFixed(2)})};c.onElementHidden=function(a){var b=this.getCurrentTimestamp();a=this.trackingEntries[a.id];if(!a)return;a.viewportProgressEvents.push({timestamp:b,percentInViewport:0})};c.onTrackingCompleted=function(a){var b=this.trackingEntries[a];b.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:b.tracker.getPercentInViewport().toFixed(2)});this.$1()&&this.$2(a,b);this.logToServer(b);delete this.trackingEntries[a]};c.logToServer=function(a){a=a;delete a.tracker;b("Banzai").post("xtrackable:heatmap",a)};c.beginTracking=function(a,b){var c=this;this.trackingEntries[a]=b;setTimeout(function(){return c.onTrackingCompleted(a)},this.loggingDurationMS)};c.createTrackingEntry=function(a){return{tracker:a.tracker,token:a.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]}};c.getCurrentTimestamp=function(){return(Date.now()/1e3).toFixed(2)};c.$1=function(){return 0};c.$2=function(a,b){var c="Completed tracking for id "+a+" token="+b.token+" startedTrackingTS="+b.startedTrackingTS+"\n";b.viewportProgressEvents.forEach(function(a){c+="% in view: "+a.percentInViewport+" timestamp="+a.timestamp+"\n"})};return a}();e.exports=a}),null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","DataAttributeUtils","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","gkx","pageID","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g="visibility_tracking",h="[data-vistracking]",i=500,j=50,k=50,l=50,m=50,n=0;a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;a=a||{};if(!a.bypass_banzai_check&&!b("Banzai").isEnabled(g))return;this.visibleElementInfo={};this.getDataFromConfig(a);b("Visibility").addListener(b("Visibility").VISIBLE,b("ErrorUtils").guard(function(){return c.fireEvent("browser")},"VisibilityTracking:visible",this));b("Visibility").addListener(b("Visibility").HIDDEN,b("ErrorUtils").guard(function(){return c.clearAllVisibleElements("browser")},"VisibilityTracking:hidden",this));b("ScriptPath").subscribe(b("ErrorUtils").guard(function(){return c.updateVisibleElements()},"VisibilityTracking:scriptPath",this));b("Banzai").subscribe(b("Banzai").SHUTDOWN,b("ErrorUtils").guard(function(){return c.onUnload()},"VisibilityTracking:banzaiShutdown",this));this.fireEventCallback=b("throttle").acrossTransitions(b("ErrorUtils").guard(function(a){return c.fireEvent(a)},"VisibilityTracking:fireEventCallback",this),this.timeout,this);this.listeners=new(b("SubscriptionsHandler"))();b("VisibilityTrackingHelper").getEventListeners(function(){return c.fireEventCallback()}).forEach(function(a){this.listeners.addSubscriptions(a)},this);this.extraInit&&b("ErrorUtils").applyWithGuard(this.extraInit.bind(this))}var c=a.prototype;c.getDataFromConfig=function(a){this.config=a,this.root=a.root||document.documentElement,this.selector=a.selector||h,this.visibleEventCallBack=a.visibleEventCallBack||function(){},this.timeout=a.timeout!==void 0?a.timeout:i,this.minOffsetVisibleFromBottom=a.minOffsetVisibleFromBottom!==void 0?a.minOffsetVisibleFromBottom:j,this.minOffsetVisibleFromTop=a.minOffsetVisibleFromTop!==void 0?a.minOffsetVisibleFromTop:k,this.minOffsetVisibleFromLeft=a.minOffsetVisibleFromLeft!==void 0?a.minOffsetVisibleFromLeft:l,this.minOffsetVisibleFromRight=a.minOffsetVisibleFromRight!==void 0?a.minOffsetVisibleFromRight:m,this.handleAllHiddenEvents=a.handleAllHiddenEvents!==void 0?a.handleAllHiddenEvents:!1,this.handleAllVisibleEvents=a.handleAllVisibleEvents!==void 0?a.handleAllVisibleEvents:!1,this.cacheTrackedElements=a.cacheTrackedElements!==void 0?a.cacheTrackedElements:!1};c.getAllTrackedElements=function(){__p&&__p();if(!this.allTrackedElements){this.allTrackedElements={};var a=[];this.config.is_xtrackable?a=b("DataAttributeUtils").getXTrackableElements():this.root&&this.root.querySelectorAll&&(a=this.root.querySelectorAll(this.selector));for(var c=0;c<a.length;c++){var d=this.getElementID(a[c]);this.allTrackedElements[d.toString()]=a[c]}}return this.allTrackedElements};c.refreshAllTrackedElements=function(){delete this.allTrackedElements;return this.getAllTrackedElements()};c.getDataToLog=function(a){a=Object.assign(b("collectDataAttributes")(a,["gt"]).gt,{client_time:Date.now()/1e3,time_spent_id:b("pageID"),script_path:b("ScriptPath").getScriptPath()});return a};c.getElementID=function(a){var b=a.$1;if(b)return b;a.$1=++n;return n};c.sendDataToLog=function(a){b("BrowseClientEventLogger").maybeLogVisiblityEvent(a),b("Banzai").post(g,a)};c.isInstreamAdStoryElement=function(a){return!1};c.fireEvent=function(a){a===void 0&&(a="default");var c=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var d in c){var e=c[d],f=b("VisibilityTrackingHelper").getViewportInfo();f=this.isVisible(e,f);!f&&(d in this.visibleElementInfo||this.handleAllHiddenEvents)?this.handleEvent(e,{name:"hidden",cause:a}):f&&(!(d in this.visibleElementInfo)||this.handleAllVisibleEvents)&&this.handleEvent(e,{name:"visible",cause:a})}this.clearUntrackedVisibleElements()};c.isVisible=function(a,c){if(a==null)return!1;if(b("gkx")("820050")&&b("VisibilityTrackingHelper").isSnippetFlyoutVisible())return!1;a=b("getElementPosition")(a);return!!(a.x||a.y||a.width||a.height)&&a.y+a.height>=this.minOffsetVisibleFromTop&&a.y<=c.height-this.minOffsetVisibleFromBottom&&a.x+a.width>=this.minOffsetVisibleFromLeft&&a.x<=c.width-this.minOffsetVisibleFromRight};c.handleEvent=function(a,c){__p&&__p();var d=this.getElementID(a).toString(),e=this.getDataToLog(a),f;if(c.name==="visible"){var g=Math.floor(Date.now()/1e3);f=b("pageID").concat(":",g.toString(),":",this.getElementID(a).toString());this.visibleElementInfo[d]={visibility_id:f,elem:a}}else if(c.name==="hidden"){d in this.visibleElementInfo&&(f=this.visibleElementInfo[d].visibility_id,delete this.visibleElementInfo[d]);if(c.cause==="browser")return}this.sendDataToLog(Object.assign(e,{event:c.name,visibility_id:f}))};c.clearUntrackedVisibleElements=function(){var a=this.getAllTrackedElements();for(var b in this.visibleElementInfo)if(!(b in a)){var c=this.visibleElementInfo[b];c.elem&&this.handleEvent(c.elem,{name:"hidden",cause:"removed"})}};c.clearAllVisibleElements=function(a){a===void 0&&(a="default");var b=this.getAllTrackedElements();for(var c in b)c in this.visibleElementInfo&&this.handleEvent(b[c],{name:"hidden",cause:a});this.clearUntrackedVisibleElements()};c.updateVisibleElements=function(){this.clearAllVisibleElements(),this.fireEvent()};c.refreshAndFireEvent=function(a){this.refreshAllTrackedElements(),this.fireEventCallback(a)};c.onUnload=function(){this.clearAllVisibleElements(),this.listeners&&(this.listeners.release(),this.listeners=null),this.extraCleanup&&b("ErrorUtils").applyWithGuard(this.extraCleanup.bind(this))};a.init=function(b){return new a(b)};return a}();e.exports=a}),null);
__d("ViewableImpressionEventHandler",["DataAttributeUtils","FullViewLogger","ViewabilityDurationSegmentLogger","ViewableImpressionDurationLogger","ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.extraInit=function(){this.impressionTrackers={}};d.getDataFromConfig=function(b){a.prototype.getDataFromConfig.call(this,b),this.doHeatmapLogging=b.doHeatmapLogging,this.heatmapLoggingDurationMS=b.heatmapLoggingDurationMS,b.impressionURL=b.impressionURL!==void 0?b.impressionURL:"/xti.php",b.nonviewableEnabled=b.nonviewableEnabled!==void 0?b.nonviewableEnabled:!1};d.getImpressionTracking=function(a){__p&&__p();var c=this.getElementID(a),d=this.impressionTrackers[c];if(!d){var e=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);d=new(b("ViewableImpressionTracker"))(c,a,e);this.impressionTrackers[c]=d;e.log_impression_duration&&b("ViewableImpressionDurationLogger").logFromViewableImpressionTracker(d);this.doHeatmapLogging&&b("ViewableImpressionHeatmapLogger").logFromViewableImpressionTracker(d,this.heatmapLoggingDurationMS);e.should_log_full_views&&b("FullViewLogger").logFromViewableImpressionTracker(d);e.should_log_viewability_duration&&b("ViewabilityDurationSegmentLogger").logFromViewableImpressionTracker(d)}return d};d.handleEvent=function(a,b){var c=this.getImpressionTracking(a);if(!c)return;if(b.name==="visible")c.onVisible(b),this.visibleElementInfo[c.getID()]||(this.visibleElementInfo[c.getID()]={elem:a});else if(b.name==="hidden"){a=c.getConfig();b.cause==="default"||a.log_visibility_hidden_when_browser_inactive&&b.cause==="browser"?(c.onHidden(),delete this.visibleElementInfo[c.getID()]):b.cause==="removed"&&(c.onRemoved(),delete this.visibleElementInfo[c.getID()],delete this.impressionTrackers[c.getID()])}};d.isInstreamAdStoryElement=function(a){a=babelHelpers["extends"]({},this.getConfigFromElement(a),this.config);return!!a.is_instream_story};d.getConfigFromElement=function(a){return JSON.parse(b("DataAttributeUtils").getDataAttribute(a,"data-xt-vimp"))};d.getElementID=function(a){a.getAttribute("id")||a.setAttribute("id","xt_uniq_"+g++);return a.getAttribute("id")};return c}(b("VisibilityTracking"));e.exports=a}),null);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnitEventConstants","ErrorUtils","LitestandMessages","Run","ViewableImpressionConfig","ViewableImpressionEventHandler"],(function(a,b,c,d,e,f){a={init:function(){b("ViewableImpressionEventHandler").instance===void 0&&(b("ViewableImpressionEventHandler").instance=new(b("ViewableImpressionEventHandler"))(b("ViewableImpressionConfig")),b("ViewableImpressionEventHandler").instance.listeners.addSubscriptions(b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED,"AdsRefreshHandler/AdsLoaded","MPPInsights/ChartView","PhotoSnowliftAds/displayUnits","WebMessengerAdsControl/adjustAds",b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT,"WebVideoChannelAds/AdsLoaded","Stories/cardChanged"],b("ErrorUtils").guard(function(a){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent(a)},"ViewableImpressionTracking")))),b("Run").onLoad(function(){b("ViewableImpressionEventHandler").instance.refreshAndFireEvent()})}};e.exports=a}),null);
__d("BanzaiNectar",["Banzai"],(function(a,b,c,d,e,f){function a(a){return{log:function(c,d,e){d={e:d,a:e};b("Banzai").post("nectar:"+c,d,a)}}}c=a();c.create=a;e.exports=c}),null);