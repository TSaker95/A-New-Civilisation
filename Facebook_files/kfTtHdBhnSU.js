if (self.CavalryLogger) { CavalryLogger.start_js(["C4no0"]); }

__d("AdsTestedFBTStrings",["fbt"],(function(a,b,c,d,e,f,g){e.exports={PLACING_ORDER:g._("Placing Order..."),CREATIVE:g._("Creative"),OPTIMIZATION:g._("Delivery optimisation"),TARGETING:g._("Audience"),PLACEMENT:g._("Placement"),PRODUCT_SET:g._("Product set"),FREEFORM:g._("More than one"),EVEN_SPLIT:g._("Even Split"),WEIGHTED_SPLIT:g._("Weighted Split")}}),null);
__d("DliteSessionConfig",[],(function(a,b,c,d,e,f){e.exports={loggedOutErrorCodes:[1340002,1340004,1357001,1780001,1348007]}}),null);
__d("GraphSort",[],(function(a,b,c,d,e,f){e.exports={ASC:"_ascending",DESC:"_descending"}}),null);
__d("ClientServerIDMap",[],(function(a,b,c,d,e,f){"use strict";var g=new Map();a={addIDMapping:function(a,b){g.set(a,b)},resolveID:function(a){return g.get(a)||a},getKeys:function(){return Array.from(g.keys())}};e.exports=a}),null);
__d("AdsLoadObjectUtils",["LoadObject","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){return{type:"hasOperation"}}var g={error:function(a){return{type:"error",error:a,value:void 0}},empty:function(){return{type:"empty"}},loaded:function(a){return{type:"loaded",value:a}},loadedWithError:function(a,b){return{type:"error",error:b,value:a}},loading:a,creating:a,updating:a,deleting:a};function h(a,c){__p&&__p();var d=[],e=!1,f,h;for(var a=a,i=Array.isArray(a),j=0,a=i?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(i){if(j>=a.length)break;k=a[j++]}else{j=a.next();if(j.done)break;k=j.value}k=k;if(!(k instanceof b("LoadObject"))){d.push(k);continue}var l=k.match(g);switch(l.type){case"hasOperation":var m=k.getOperation();if(!c)return b("LoadObject").empty().setOperation(m);d.push(k.getValue());f=f||m;break;case"error":if(!c)return b("LoadObject").withError(l.error);d.push(l.value);h=h||l.error;break;case"empty":d.push(void 0);e=!0;break;case"loaded":d.push(l.value);break}}return e&&!c?b("LoadObject").empty():b("LoadObject").withValue(d).setError(h).setOperation(f)}var i={all:function(a){return h(a,!1)},allForceWithValues:function(a){return h(a,!0)},allByKey:function(a){return i.all(a.values()).map(function(c){var d=Array.from(a.keys());d=d.map(function(a,b){return[a,c[b]]});return b("immutable").Map(d)})},anyLoadingOrEmpty:function(a){__p&&__p();for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;if(!d.hasValue()||!d.isDone())return!0}return!1},getLoadedValues:function(a){return Array.from(a).filter(function(a){return a.isDone()&&a.hasValue()}).map(function(a){return a.getValueEnforcing()})},getLoadedValuesFromMap:function(a){__p&&__p();var b=[];for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e[0];e=e[1];b.push(e)}return i.getLoadedValues(b)},getLoadedValuesByKey:function(a){return a.filter(function(a){return a.isDone()&&a.hasValue()}).map(function(a){return a.getValueEnforcing()})}};e.exports=i}),null);
__d("AdsSplitTestConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADPUBLISHER_BUFFER_MINUTES:15,ADPUBLISHER_BUFFER_SECONDS:900,SPLIT_TEST_BUCKETS:1e4,MAX_CONFIDENCE_THRESHOLD:95,MAX_LENGTH_DAYS:30,MIN_LENGTH_DAYS:1})}),null);
__d("AdsSplitTestStrings",["fbt","AdsSplitTestConstants","AdsSplitTestVariable","AdsTestedFBTStrings"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=g._("Do not show this again");d=g._("Complete split test setup");f=g._("Create split test");var i=g._("Test Another Ad"),j=g._("Default ad"),k=g._("What would you like to test?"),l=g._("You can't edit variables for split tests that are active, about to become active or complete"),m=g._("Incorrect split test settings"),n=g._("Estimated test power:"),o=g._("Help lower your cost per result"),p=g._("Some of your selection is not part of any split test."),q=g._("If you choose a single variable, you'll know why the winning ad set performs best and get insights for future tests. When testing more than one variable, you'll learn which ad set performs better."),r=g._("Split test created"),s=g._("Your split budgets are calculated as your total budget multiplied by the percentage you are splitting it by."),t=g._("Split tests run for between {min test length} and {max test length} days.",[g._param("min test length",b("AdsSplitTestConstants").MIN_LENGTH_DAYS),g._param("max test length",b("AdsSplitTestConstants").MAX_LENGTH_DAYS)]),u=g._("You can't save split tests as drafts. If you need to exit, make sure that you've recorded the details of your split test somewhere else so that you can easily create it again later."),v=g._("Define how much you'd like to spend and when you'd like your ads to appear."),w=g._("Split test budget & schedule"),x=g._("Split test summary"),y=g._("Split test"),z=g._("Understand how different strategies impact your ad performance. The split test gives you a clear understanding of the results with:"),A=g._("Variable"),B=g._("You can't edit this section because it's part of a split test that's no longer running"),C=g._("You can't edit this section because it's part of a running split test"),D=g._("To edit this section, select all of the ad sets in the split test"),E=g._("To edit this section, select all of the ads in the split test"),F=g._("Undo split test"),G=g._("Give Feedback"),H=g._("Try Split Test");b=(h={},h[b("AdsSplitTestVariable").CREATIVE]={key:b("AdsSplitTestVariable").CREATIVE,label:b("AdsTestedFBTStrings").CREATIVE,pluralLabel:g._("Creatives"),longLabel:"",description:g._("Choose which ads to show based on what you are trying to achieve")},h[b("AdsSplitTestVariable").OPTIMIZATION]={key:b("AdsSplitTestVariable").OPTIMIZATION,label:b("AdsTestedFBTStrings").OPTIMIZATION,pluralLabel:g._("Delivery optimisations"),longLabel:g._("Delivery optimisation (variable)"),description:g._("Choose how you want us to deliver ads to people based on what you are trying to achieve.")},h[b("AdsSplitTestVariable").TARGETING]={key:b("AdsSplitTestVariable").TARGETING,label:b("AdsTestedFBTStrings").TARGETING,pluralLabel:g._("Audiences"),longLabel:g._("Audience (variable)"),description:g._("Define who you want to see your ads based on what you are trying to achieve.")},h[b("AdsSplitTestVariable").PLACEMENT]={key:b("AdsSplitTestVariable").PLACEMENT,label:b("AdsTestedFBTStrings").PLACEMENT,pluralLabel:g._("Placements"),longLabel:g._("Placement (variable)"),description:g._("Define who you want to see your ads based on what you are trying to achieve.")},h[b("AdsSplitTestVariable").PRODUCT_SET]={key:b("AdsSplitTestVariable").PRODUCT_SET,label:b("AdsTestedFBTStrings").PRODUCT_SET,pluralLabel:g._("Product sets"),longLabel:g._("Product set (variable)"),description:g._("Choose the product sets that you want to test.")},h[b("AdsSplitTestVariable").FREEFORM]={key:b("AdsSplitTestVariable").FREEFORM,label:b("AdsTestedFBTStrings").FREEFORM,pluralLabel:"",longLabel:"",description:""},h);function a(a){try{return g._({"0":"A","1":"B","2":"C","3":"D","4":"E","5":"F","6":"G","7":"H","8":"I","9":"J"},[g._enum(a,{0:"A",1:"B",2:"C",3:"D",4:"E",5:"F",6:"G",7:"H",8:"I",9:"J"})])}catch(a){return""}}e.exports={CHECKBOX_LABEL_DO_NOT_SHOW_MODAL_AGAIN:c,COMPLETE_SPLIT_TEST_SETUP:d,CREATE_SPLIT_TEST:f,CREATIVE_SPLIT_TEST_ADD_VARIANT:i,DEFAULT_ADGROUP_NAME:j,DEFAULT_SPLIT_TEST_VARIABLE_SELECTOR_LABEL:k,DISABLED_SPLIT_TESTING_TOOLTIP:l,INCORRECT_SPLIT_TEST_SETTINGS_MESSAGE:m,LABEL_FOR_ESTIMATED_TEST_POWER:n,LOWER_COST_PER_RESULTS:o,NON_SPLIT_TEST_SELECTED_MESSAGE:p,SINGLE_VARIABLE_VS_FREEFORM_DESCRIPTON:q,SPLIT_TEST_BUDGET_HELP_TEXT:s,SPLIT_TEST_CREATED:r,SPLIT_TEST_GIVE_FEEDBACK:G,SPLIT_TEST_LENGTH_DESCRIPTION:t,SPLIT_TEST_NO_DRAFT_TIP:u,SPLIT_TEST_PRICING_SECTION_DESCRIPTION:v,SPLIT_TEST_PRICING_SECTION_TITLE:w,SPLIT_TEST_SUMMARY:x,SPLIT_TEST_TOGGLE_LABEL:y,SPLIT_TEST_UNDO_BUTTON:F,SPLIT_TEST_VARIABLE_SECTION_DESCRIPTION:z,SPLIT_TEST_VARIABLE_SECTION_TITLE:A,TOOLTIP_FOR_COMPLETED_SPLIT_TEST_DISABLED_SECTION:B,TOOLTIP_FOR_RUNNING_SPLIT_TEST_DISABLED_SECTION:C,TOOLTIP_FOR_SPLIT_TEST_DISABLED_ADGROUP_SECTION:E,TOOLTIP_FOR_SPLIT_TEST_DISABLED_CAMPAIGN_SECTION:D,UPSELL_BUTTON_TEXT:H,getLetterForIndex:a,testVariables:b}}),null);
__d("adsUEditorCampaignGroupSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.campaignGroupSelector;return a.getStores()},function(a){var b=a.campaignGroupID;a=a.campaignGroupSelector;return a(b)},e.id+".selector");e.exports=a}),null);
__d("adsUEditorCampaignSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.campaignSelector;return a.getStores()},function(a){var b=a.campaignID;a=a.campaignSelector;return a(b)},e.id+".selector");e.exports=a}),null);
__d("adsUEditorSelectedCampaignGroupsSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.selectedCampaignGroupsSelector;return a.getStores()},function(a){a=a.selectedCampaignGroupsSelector;return a()},e.id+".adsUEditorSelectedCampaignGroupsSelector");e.exports=a}),null);
__d("AdsCallToActionTypesUtils",["AdsCallToActionTypes","AdsLegacyObjectivesUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){__p&&__p();var a={},c=function(c){if(!Object.prototype.hasOwnProperty.call(b("AdsCallToActionTypes").TYPES,c))return"continue";var d=b("AdsCallToActionTypes").TYPES[c];c=d.objectives;c.forEach(function(b){a[b]||(a[b]=[]),a[b].push(d)})};for(var d in b("AdsCallToActionTypes").TYPES){var e=c(d);if(e==="continue")continue}for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&a[f].sort(function(a,b){return a.name.localeCompare(b.name)});return a}var g=a();c={typesForObjective:function(a,c,d,e){if(a==null||a==="")return[];d=b("AdsLegacyObjectivesUtils").convertToLegacyAppObjectives_HACK(a,c,e);return g[d]?g[d].slice(0):[]}};e.exports=c}),null);
__d("FBMoreLink.react",["ix","cx","fbt","Image.react","Link.react","React","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isCollapsed:c.props.isInitiallyCollapsed!=null?c.props.isInitiallyCollapsed:!0},c.onClick=function(){var a=c.$1();c.setState({isCollapsed:!a});c.props.onClick(!a)},c.$1=function(){return c.props.isCollapsed!=null?c.props.isCollapsed:c.state.isCollapsed},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.$1();if(!this.props.allowToggle&&!a)return b("React").createElement("div",null);var c=this.props.moreLabel,d=g("117293");a||(c=this.props.lessLabel,d=g("117305"));a=this.props.hideToggleIcon?null:b("React").createElement(b("Image.react"),{className:"_554d",src:d});return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,{onClick:this.onClick}),b("React").createElement("span",{className:"_554b"},c),a)};return c}(b("React").Component);c.propTypes={allowToggle:a.bool,hideToggleIcon:a.bool,moreLabel:a.node,lessLabel:a.node,isInitiallyCollapsed:a.bool,isCollapsed:a.bool,onClick:a.func.isRequired};c.defaultProps=function(){var a=i._("More"),b=i._("Less");return{allowToggle:!1,moreLabel:a,lessLabel:b}}();e.exports=c}),null);
__d("PromiseUtil",["Promise","nullthrows","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g={allSettled:function(a){var c=b("Promise").all(a);return b("Promise").all(a.map(function(a){return b("Promise").resolve(a).then(void 0,function(a){return void 0})})).then(function(){return c})},allSettledInSeries:function(a){var c=[];return a.reduce(function(a,b){return a.then(b).then(function(){return void 0},function(a){c.push(a);return void 0})},b("Promise").resolve()).then(function(){if(c.length)throw c[0]})},exponentialBackoff:function(a,b,c){b===void 0&&(b=Math.sqrt(2));c===void 0&&(c=1);var d=c;c=function(){var a=d;d*=b;return a};return g.rateLimit(a,c)},forEach:function(a,c){return a.then(function(a){return b("Promise").resolve(c(a)).then(function(){return a})})},forEachError:function(a,c){return a.then(void 0,function(a){return b("Promise").resolve(c(a)).then(function(){throw a})})},iterateUntil:function(a,c){var d=function d(e){return c(e)?b("Promise").resolve(e):b("Promise").resolve(a(e)).then(d)};return d},pollUntilImpl:function(a,c){var d,e=new(b("Promise"))(function(b,e){var f=function(){try{var c=a();c&&b(c.value)}catch(a){e(a)}};d=setInterval(f,1e3*c)});return e["finally"](function(){return clearInterval(b("nullthrows")(d))})},pollUntil:function(a,b){b===void 0&&(b=1);return g.pollUntilImpl(function(){var b=a();return b?{value:b}:void 0},b)},rateLimit:function(a,b){__p&&__p();var c=[],d=void 0,e=0;return function(){var f=b();for(var h=arguments.length,i=new Array(h),j=0;j<h;j++)i[j]=arguments[j];c=i;d||(d=g.wait(e+f-Date.now()/1e3).then(function(){e=Date.now()/1e3;d=void 0;return a.apply(void 0,c)}));return d}},rateLimitWithLastResult:function(a,c){var d=!1,e=void 0;return function(){d||(b("promiseDone")(g.wait(c()),function(){return d=!1}),e=a.apply(void 0,arguments),d=!0);return e}},repeatUntil:function(a,c){var d=function d(){return b("Promise").resolve(a()).then(function(a){return c(a)?b("Promise").resolve(a):d()})};return d},repeatWhileErrorUntil:function(a,c,d){var e=function e(){return b("Promise").resolve(a()).then(function(a){c(a);return b("Promise").resolve(a)},function(a){return d(a)?e():b("Promise").reject(a)})};return e},series:function(a,c){c=c;return a.reduce(function(a,b){return a.then(b)},b("Promise").resolve(c))},wait:function(a){return 0<a?new(b("Promise"))(function(b,c){return setTimeout(b,1e3*a)}):b("Promise").resolve()},waitAtMost:function(a,b){return g.waitOrElse(a,b,function(){throw new Error("Promise timed out")})},waitOrElse:function(a,c,d){var e=!1;return b("Promise").race([a.then(function(a){e=!0;return a},function(a){e=!0;throw a}),g.wait(c).then(function(){return e?void 0:d()})])}};e.exports=g}),null);
__d("forceSubdomain",["URI"],(function(a,b,c,d,e,f){function a(a,c){var d=new(b("URI"))(window.location.href),e=d.getDomain().split(".");e.length<=2?e.unshift(c):e[0]=c;return new(b("URI"))(a).setProtocol(d.getProtocol()).setDomain(e.join(".")).setPort(d.getPort())}e.exports=a}),null);
__d("serializeFormQueryMap",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return[].concat(Array.from(a.querySelectorAll("input")),Array.from(a.querySelectorAll("select")),Array.from(a.querySelectorAll("textarea")),Array.from(a.querySelectorAll("button")))}function h(a,b){__p&&__p();g(a).forEach(function(a){__p&&__p();if(!a.name||a.disabled)return;var c=a.type;if(c==="submit"||c==="reset"||c==="button"||c==="image"||c==="file")return;if((c==="radio"||c==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var d=0,e=a.options.length;d<e;d++){var f=a.options[d];f.selected&&b("select",a.name,f.value)}return}b(c,a.name,a.value||"")})}function a(a){var b={};h(a,function(a,c,d){a=b[c];Object.prototype.hasOwnProperty.call(b,c)?Array.isArray(a)?a.push(d):b[c]=[a,d]:b[c]=d});return b}e.exports=a}),null);
__d("NoIframeResponsiveBlock.react",["cx","Event","React","UserAgent","joinClasses","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent").isBrowser("IE")&&"onresize"in document.createElement("div"),i=window.ResizeObserver!=void 0,j=window.MutationObserver!=void 0,k={attributes:!0,characterData:!0,childList:!0,subtree:!0},l=["top","right","bottom","left","width","height","size","weight"],m=20;c=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(d,c);function d(){__p&&__p();var d,e;for(var f=arguments.length,g=new Array(f),n=0;n<f;n++)g[n]=arguments[n];return(d=e=c.call.apply(c,[this].concat(g))||this,e.$1=null,e.$4=null,e.$5=b("throttle")(function(){var a=!1;if(e.$1!=null){var b=e.$1.style,c={boxSizing:b.boxSizing,paddingTop:b.paddingTop,paddingLeft:b.paddingLeft,paddingBottom:b.paddingBottom,paddingRight:b.paddingRight,borderTop:b.borderTop,borderLeft:b.borderLeft,borderBottom:b.borderBottom,borderRight:b.borderRight,marginTop:b.marginTop,marginLeft:b.marginLeft,marginBottom:b.marginBottom,marginRight:b.marginRight,width:b.width,height:b.height},d=e.$4;d!=null?Object.keys(c).map(function(b){c[b]!=d[b]&&(a=!0)}):a=!0;e.$4=c;a&&e.props.onResize(+c.width,+c.height)}},m),e.$6=function(a){e.$1=a},e.$7=function(a){var b=a.propertyName;if(b){a=!1;l.forEach(function(c){b.indexOf(c)!==-1&&(a=!0)});a&&e.$5()}else e.$5()},e.$8=function(c){c?(h?c.onresize=e.$5:i?(e.$2=new ResizeObserver(e.$5),e.$2.observe(c)):(document.addEventListener("transitionend",e.$7),window.addEventListener("resize",e.$5),j?(b("Event").listen(window,"resize",e.$5),e.$3=new a.MutationObserver(e.$5),e.$3.observe(c,k)):document.addEventListener("DOMSubtreeModified",e.$5)),e.$5()):h||(i?(e.$2&&e.$2.disconnect(),delete e.$2):(document.removeEventListener("transitionend",e.$5),window.removeEventListener("resize",e.$5),j?(e.$3&&e.$3.disconnect(),delete e.$3):document.removeEventListener("DOMSubtreeModified",e.$5)))},d)||babelHelpers.assertThisInitialized(e)}var e=d.prototype;e.componentDidMount=function(){this.$5()};e.render=function(){var a=b("joinClasses")("_4u-c",this.props.className);return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:a,ref:this.$6}),this.props.children,b("React").createElement("div",{key:"sensor",ref:this.$8,className:"_4u-f"}))};return d}(b("React").Component);e.exports=c}),null);
__d("compose",[],(function(a,b,c,d,e,f){function g(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];if(b.length<2)throw new Error("Compose expects two or more functions as arguments.");var d=b.reverse(),e=d[0],f=d[1],h=d.slice(2),i=function(){return f(e.apply(void 0,arguments))};return h.length===0?i:g.apply(void 0,[i].concat(h).reverse())}e.exports=g}),null);
__d("promiseStoreGet",["Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){__p&&__p();return new(b("Promise"))(function(b,e){__p&&__p();var f=a.addListener(g);g();function g(){var a=c();if(a.isDone()&&a.hasError())e(a.error||a.value),f.remove();else if(a.isDone()&&a.hasValue()){a=a.getValueEnforcing();(!d||d(a))&&(b(a),f.remove())}}})}a.all=function(a,c,d){__p&&__p();return new(b("Promise"))(function(b,e){__p&&__p();var f=a.addListener(g);g();function g(){__p&&__p();var a=c(),g=new Map();for(var a=a,h=Array.isArray(a),i=0,a=h?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(h){if(i>=a.length)break;j=a[i++]}else{i=a.next();if(i.done)break;j=i.value}j=j;var k=j[0];j=j[1];if(!j.isDone())return;if(j.hasError()){e(j.error||j.value);f.remove();return}if(!j.hasValue())return;j=j.getValueEnforcing();if(d&&!d(j))return;g.set(k,j)}b(g);f.remove()}})};e.exports=a}),null);
__d("AdsPixelConversionEventsEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIEW_CONTENT:"ViewContent",SEARCH:"Search",ADD_TO_CART:"AddToCart",ADD_TO_WISHLIST:"AddToWishlist",INITIATE_CHECKOUT:"InitiateCheckout",ADD_PAYMENT_INFO:"AddPaymentInfo",PURCHASE:"Purchase",LEAD:"Lead",COMPLETE_REGISTRATION:"CompleteRegistration",CUSTOM_CONVERSION:"CustomConversion",AGGREGATE_CUSTOM_CONVERSION:"AggregateCustomConversion",OTHER:"Other"})}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){__p&&__p();try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){__p&&__p();var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);