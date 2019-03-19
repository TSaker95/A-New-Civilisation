if (self.CavalryLogger) { CavalryLogger.start_js(["75ZDT"]); }

__d("VideoPlaybackExperienceIssueType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUDIO_VIDEO_SYNC:"audio_video_sync",VIDEO_ONLY_STUTTER:"video_only_stutter",AUDIO_VIDEO_STUTTER:"audio_video_stutter",BLACK_SCREEN:"black_screen",VIDEO_WONT_PLAY:"video_wont_play"})}),null);
__d("XVideoPlaybackExperienceReportController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videos/playback_report/",{video_id:{type:"FBID",required:!0},issue_type:{type:"String",required:!0},is_live:{type:"Int"},playback_timestamp:{type:"Int"}})}),null);
__d("VideoSettingsMenu.react",["ix","cx","fbt","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","Image.react","Layout.react","Link.react","MessengerEnvironment","React","Selector.react","URI","VideoPlaybackExperienceIssueType","VideoPlayerShakaPerformanceLogger","XUIButton.react","XVideoPlaybackExperienceReportController","asset","gkx","isFacebookURI","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=b("Layout.react").Column,k=b("Layout.react").FillColumn,l=b("Selector.react").Option;a=b("React").PropTypes;var m=/(instagram)/g;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.UNSAFE_componentWillMount=function(){this.setState({autoSelectVideoQuality:!this.props.preferredQuality&&this.props.canAutoSelectVideoQuality,currentMenuContext:"main",feedbackSubmitted:!1})};d.createMenuItem=function(a,c,d,e,f,g){__p&&__p();g===void 0&&(g=!1);var h=function(){};c&&(h=function(a){e(),a.preventDefault()});var i="_2iw4"+(c?"":" _4t7o"),j;if(f==="checkBox"){var k=null;c&&d&&(k=b("React").createElement("div",{className:"_2iw1"}));j=b("React").createElement("div",{className:"_2iw3"},k)}else if(f==="radioButton"){k=null;c&&d&&(k=b("React").createElement("div",{className:"_4t7r"}));j=b("React").createElement("div",{className:"_4t7u"},k)}k=a;g&&(k=b("React").createElement("div",null,a.slice(0,-1),b("React").createElement("div",{className:"_4t7w"})));return b("React").createElement("a",{href:"#",key:a,className:i,onClick:h,tabIndex:this.props.tabIndex,"aria-checked":d?"true":"false",role:f==="radioButton"?"radio":"checkbox","aria-disabled":!c},j,b("React").createElement("div",{className:"_2iw5"+(d?"":" _4t8e")},k))};d.$1=function(){var a=this.props,c=a.hasSubtitles,d=a.areSubtitlesActive;a=a.areSubtitlesAutogenerated;if(!c)return null;c=i._("Captions");var e="_1x4f";a&&b("gkx")("678905")&&(c=i._("Captions (auto)"),e="_1x4f _6m2q");return b("React").createElement(b("Layout.react"),{"aria-checked":d,className:"_2iw4 _1x4e"},b("React").createElement(k,null,c),b("React").createElement(j,null,b("React").createElement("div",{className:e},b("React").createElement(b("BUISwitch.react"),{animate:!0,showLabel:!0,value:d,onToggle:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex}))))};d.showQualitySelector=function(){return this.props.showQualitySelector&&this.props.streamingFormat==="dash"&&!!this.props.availableQualities&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(a){return!!a})};d.$2=function(){var a=this;return b("React").createElement(b("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return a.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1})}},b("React").createElement(b("Image.react"),{className:"_4t8f",src:g("480579")}))};d.$3=function(){var a=i._("More video settings"),c=new(b("URI"))("/settings/?tab=videos"),d=c.getQualifiedURI().getSubdomain();(d==="business"||d==="partners")&&c.setSubdomain("www");b("isFacebookURI")(c)||c.setDomain(c.getDomain().replace(m,"facebook"));b("MessengerEnvironment").messengerui&&c.setDomain("facebook.com").setSubdomain(d).setProtocol("https");return b("React").createElement("a",{href:c,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex},a)};d.$4=function(){var a=this;return b("React").createElement(b("Selector.react"),{name:"feedback_selector",onChange:function(b){a.setState({currentFeedbackSelected:b.value?b.value:null})},defaultValue:0},b("React").createElement(l,{value:0},i._("What's wrong with this video?")),b("React").createElement(l,{value:b("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_SYNC},i._("Video and audio are out of sync")),b("React").createElement(l,{value:b("VideoPlaybackExperienceIssueType").VIDEO_ONLY_STUTTER},i._("Video is choppy")),b("React").createElement(l,{value:b("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_STUTTER},i._("Video and audio are choppy")),b("React").createElement(l,{value:b("VideoPlaybackExperienceIssueType").BLACK_SCREEN},i._("Screen is black")),b("React").createElement(l,{value:b("VideoPlaybackExperienceIssueType").VIDEO_WONT_PLAY},i._("Video won't play")))};d.$5=function(){if(this.state.currentFeedbackSelected){var a=b("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(b("AsyncRequest"))(a).send();this.setState({feedbackSubmitted:!0});b("VideoPlayerShakaPerformanceLogger").setVideoPlaybackExperienceIssue(this.state.currentFeedbackSelected)}};d.render=function(){__p&&__p();var a=this,c=null,d=null,e=null,f=null;this.showQualitySelector()&&this.props.availableQualities?(c=this.props.availableQualities.map(function(b){return a.createMenuItem(b,!0,b===a.props.selectedQuality&&!a.state.autoSelectVideoQuality,function(){a.setState({autoSelectVideoQuality:!1}),a.props.onSelectQuality(b)},"radioButton",a.props.isSphericalVideo)}),c.push(this.createMenuItem(i._("Auto"),this.props.canAutoSelectVideoQuality,this.state.autoSelectVideoQuality,function(){a.setState({autoSelectVideoQuality:!0}),a.props.onSelectQuality(null)},"radioButton")),c.reverse(),d=b("React").createElement(b("ClickableAreaButton.react"),{onClick:function(){return a.setState({currentMenuContext:"quality"})},label:"Change Quality"},b("React").createElement("div",{className:"_2iw4 _4t9t"},b("React").createElement(b("Layout.react"),null,b("React").createElement(k,null,i._("Quality")),b("React").createElement(j,{className:"_4t9u"},this.state.autoSelectVideoQuality?i._("Automatic"):null," ",b("React").createElement("span",null,this.props.selectedQuality),b("React").createElement(b("Image.react"),{className:"_4t9v",src:g("480587")})))))):f=this.createMenuItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");(this.props.isLive||b("gkx")("678906"))&&(e=b("React").createElement(b("Link.react"),{onClick:function(){return a.setState({currentMenuContext:"feedback"})},className:"_2iw4 _4t9w"},b("React").createElement(b("Layout.react"),null,b("React").createElement(k,null,i._("Report video issue")),b("React").createElement(j,{className:"_4t9u"},b("React").createElement(b("Image.react"),{className:"_4t9v",src:g("480587")})))));var h=null;switch(this.state.currentMenuContext){case"main":h=b("React").createElement("div",{className:"_2i_x"},f,this.$1(),d,this.$3(),e);break;case"quality":h=b("React").createElement("div",{className:"_2i_x"},b("React").createElement("div",{className:"_4t9q"},this.$2(),i._("Quality")),b("React").createElement("div",{className:"_4t9z",role:"radiogroup"},c));break;case"feedback":h=b("React").createElement("div",{className:"_2i_x"},b("React").createElement("div",{className:"_4t9q"},this.$2(),i._("Report video issue")),b("React").createElement("div",{className:"_4t9z"},this.state.feedbackSubmitted?null:this.$4(),this.state.feedbackSubmitted?b("React").createElement("div",{className:"_4t9-"},i._("Thanks for your feedback!")):b("React").createElement("div",{className:"_4ta3"},b("React").createElement(b("XUIButton.react"),{disabled:!this.state.currentFeedbackSelected,label:i._("Submit"),use:"confirm",onClick:this.$5.bind(this)}))));break}return b("React").createElement("div",{className:"_2i_w"},h,b("React").createElement("div",{className:"_2j03"}))};return c}(b("React").Component);c.propTypes={areSubtitlesActive:a.bool,areSubtitlesAutogenerated:a.bool,hasHD:a.bool,hasSubtitles:a.bool,isHD:a.bool,isLive:a.bool,isSphericalVideo:a.bool,onToggleHD:a.func,onToggleSubtitles:a.func,tabIndex:a.string,availableQualities:a.array,selectedQuality:a.string,preferredQuality:a.string,canAutoSelectVideoQuality:a.bool,onSelectQuality:a.func,showQualitySelector:a.bool,qualitySelectorMinStreams:a.number,streamingFormat:a.string};c.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,preferredQuality:null,canAutoSelectVideoQuality:!1,showQualitySelector:!1,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function(){}};e.exports=c}),null);
__d("VideoSettingsControl.react",["ix","cx","fbt","AbstractButton.react","BanzaiODS","ClickableArea.react","Image.react","React","TooltipData","TrackingNodes","VideoPlayerExperiments","VideoSettingsMenu.react","asset","gkx","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;var j=720,k=2160,l=14,m=15;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={isFocus:!1};return b}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onClick=function(){!this.state.isFocus&&!this.props.disabled&&this.refs.menu&&this.refs.menu.showQualitySelector()&&b("BanzaiODS").bumpEntityKey("videos","quality_selector.impression"),this.setState(function(a){return{isFocus:!a.isFocus}}),this.props.onSettingsClick&&this.props.onSettingsClick()};d.getHDIndicator=function(){__p&&__p();var a=b("VideoPlayerExperiments").showHDIndicator&&!this.props.isInline&&this.props.selectedQuality&&(this.props.selectedQuality=="HD"||parseInt(this.props.selectedQuality,10)>=j);if(!a)return null;if(!b("gkx")("678901")){a=null;parseInt(this.props.selectedQuality,10)>=k?a="4K":a="HD";return b("React").createElement("span",{className:"_132c"},a)}a=null;parseInt(this.props.selectedQuality,10)>=k?a=b("React").createElement(b("Image.react"),{src:"/images/4k_filled_12-1.5x.png",alt:"4k",height:l,width:m}):a=b("React").createElement(b("Image.react"),{src:"/images/hd_filled_12-1.5x.png",alt:"hd",height:l,width:m});return b("React").createElement("span",{className:"_3pyk"},a)};d.render=function(){var a=b("React").createElement(b("Image.react"),{className:"_rwt",src:g("391244")}),c=i._("Additional visual settings"),d=null;!this.props.disabled&&this.state.isFocus&&(d=b("React").createElement("div",{className:"_2iw7"+(this.state.isFocus?" _2iw8":"")},b("React").createElement(b("VideoSettingsMenu.react"),{areSubtitlesActive:this.props.areSubtitlesActive,areSubtitlesAutogenerated:this.props.areSubtitlesAutogenerated,hasHD:this.props.hasHD,hasSubtitles:this.props.hasSubtitles,isHD:this.props.isHD,isLive:this.props.isLive,isSphericalVideo:this.props.isSphericalVideo,onToggleHD:this.props.onToggleHD,onToggleSubtitles:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,preferredQuality:this.props.preferredQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,videoID:this.props.videoID,ref:"menu"})));var e=this.getHDIndicator(),f="_zbd"+(this.props.disabled?" _132h":""),h=i._("Settings");f=b("React").createElement(b("AbstractButton.react"),{className:f,disabled:this.props.disabled,image:a,label:c,labelIsHidden:!0,ref:"button",tabIndex:this.props.tabIndex,type:"button"});a=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.VIDEO_SETTINGS);return b("React").createElement("div",{className:"_2j04","data-ft":a},d,b("React").createElement(b("ClickableArea.react"),babelHelpers["extends"]({},b("TooltipData").propsFor(h,"above"),{onClick:this.onClick.bind(this)}),b("React").createElement("div",null,f,e)))};return c}(b("React").Component);c.propTypes={disabled:a.bool,hasHD:a.bool,hasSubtitles:a.bool,isHD:a.bool,isInline:a.bool,isLive:a.bool,isSphericalVideo:a.bool,areSubtitlesActive:a.bool,areSubtitlesAutogenerated:a.bool,onToggleHD:a.func,onToggleSubtitles:a.func,tabIndex:a.string,availableQualities:a.array,selectedQuality:a.string,canAutoSelectVideoQuality:a.bool,onSelectQuality:a.func,showQualitySelector:a.bool,qualitySelectorMinStreams:a.number,streamingFormat:a.string};c.defaultProps={tabIndex:"-1"};e.exports=c}),null);