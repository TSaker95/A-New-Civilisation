if (self.CavalryLogger) { CavalryLogger.start_js(["OSXsJ"]); }

__d("PopoverMenuDisableTypeahead",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(a){this.$1=a}var b=a.prototype;b.enable=function(){this.$1.disableTypeaheadActivation()};b.disable=function(){this.$1.enableTypeaheadActivation()};return a}();e.exports=a}),null);
__d("UFIShareNowMenu.react",["ContextualDialogArrow","ContextualLayerAsyncRelative","ContextualLayerAutoFlip","PopoverAsyncMenu.react","PopoverMenuDisableTypeahead","React","ShareNowController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){if(!a)return;a=a.getPopoverMenu();b("ShareNowController").initMenu(a);d.props.focusOnInit&&a.getTriggerElem().focus();d.props.openOnInit&&a.getTriggerElem().click()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.children,d=a.className,e=a.endpoint,f=a.endpointData,g=a.onShow;a=a.onHide;return b("React").createElement(b("PopoverAsyncMenu.react"),{alignv:"baseline",behaviors:[b("PopoverMenuDisableTypeahead")],className:d,endpoint:e,endpointData:f,onShow:g,onHide:a,layerBehaviors:[b("ContextualLayerAutoFlip"),b("ContextualDialogArrow"),b("ContextualLayerAsyncRelative")],ref:this.$1},c)};return c}(b("React").Component);c.propTypes={focusOnInit:a.bool,openOnInit:a.bool};e.exports=c}),null);