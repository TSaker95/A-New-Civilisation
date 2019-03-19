if (self.CavalryLogger) { CavalryLogger.start_js(["PJutz"]); }

__d("VideoHomeVerifiedPageTooltip.react",["fbt","React","Tooltip.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("Tooltip.react"),{tooltip:b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{display:"block",weight:"bold"},g._("Verified Page")),b("React").createElement(b("XUIText.react"),{display:"block"},g._("Facebook confirmed that this is an authentic Page for this public figure, media company or brand.")))},this.props.children)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("VideoShowsCardHeader.react",["cx","fbt","DOMContainer.react","Link.react","React","XUICardHeader.react","XUICardHeaderTitle.react"],(function(a,b,c,d,e,f,g,h){function a(a){var c=a.link?b("React").createElement(b("Link.react"),{href:a.link.targetURI},a.contentTerm?a.contentTerm instanceof Node?b("React").createElement(b("DOMContainer.react"),null,a.contentTerm):a.contentTerm:h._({"*":"{number} videos","_1":"1 video"},[h._plural(a.link.numVideos,"number")])):null,d=a.title instanceof Node?b("React").createElement(b("DOMContainer.react"),null,a.title):a.title;return b("React").createElement(b("XUICardHeader.react"),{link:c,type:a.type,className:"_2wuo"},b("React").createElement(b("XUICardHeaderTitle.react"),{className:a.type==="secondary"?"_cdn":""},d))}e.exports=a}),null);
__d("VideoShowsCarousel.react",["ix","cx","fbt","Image.react","React","SubscriptionsHandler","TimeSliceInteraction","XUICarousel.react","XUICarouselAnimator","XUICarouselArrow.react","XUICarouselItem.react","emptyFunction","fbglyph","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){c=a.call(this,c)||this;c.$1=new(b("SubscriptionsHandler"))();return c}var d=c.prototype;d.componentDidMount=function(){var a=this,b=this.refs.carousel;if(!b)return;this.$1.addSubscriptions(b.subscribe(["animationEnd"],function(b,c){c!==null&&a.props.onCarouselUpdate&&a.props.onCarouselUpdate(c,a.$3||void 0)}))};d.componentWillUnmount=function(){this.$1.release()};d.$4=function(){return this.props.children?b("React").Children.map(this.props.children,function(a,c){return b("React").createElement(b("XUICarouselItem.react"),{key:c},a)}):[]};d.$5=function(){var a=this,c=i._("See previous");return b("React").createElement(b("XUICarouselArrow.react"),null,b("React").createElement("div",{className:"_625n",onClick:function(){a.$3=b("TimeSliceInteraction").create("watch_carousel_left_scroll"),a.props.onCarouselArrowClick&&a.props.onCarouselArrowClick()}},b("React").createElement("div",{className:(this.props.arrowsAlwaysVisible?"":"_3my_")+" _2eso _2esp",title:c},b("React").createElement(b("Image.react"),{src:g("124201")}))))};d.$6=function(){var a=this,c=i._("See next");return b("React").createElement(b("XUICarouselArrow.react"),null,b("React").createElement("div",{className:"_625n",onClick:function(){a.$3=b("TimeSliceInteraction").create("watch_carousel_right_scroll"),a.props.onCarouselArrowClick&&a.props.onCarouselArrowClick()}},b("React").createElement("div",{className:(this.props.arrowsAlwaysVisible?"":"_3my_")+" _2eso _2esq",title:c},b("React").createElement(b("Image.react"),{src:g("124211")}))))};d.$7=function(a){this.$2||(this.$2=new(b("XUICarouselAnimator"))({type:"horizontal",firstAndLastAligned:a,staticElemDimensions:!0}));return this.$2.setFirstAndLastAligned(a)};d.render=function(){var a=this.$4(),c=a.length>this.props.moveStep,d=b("joinClasses")("_2h2d",this.props.className);return b("React").createElement("div",{className:d},b("React").createElement(b("XUICarousel.react"),{initialAutoplay:!1,animator:this.$7(c),initialIndex:0,moveStep:this.props.moveStep,onItemClick:b("emptyFunction"),wrapAround:!1,resizeViewport:"disabled",renderArrowsOutsideViewport:this.props.renderArrowsOutsideViewport,ref:"carousel",arrows:c?[this.$5(),this.$6()]:null},a))};return c}(b("React").Component);a.defaultProps={arrowsAlwaysVisible:!1,renderArrowsOutsideViewport:!1,moveStep:1};e.exports=a}),null);
__d("StoryRenderLocation",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({HOMEPAGE_STREAM:"homepage_stream",SUMMARY:"summary",ACTIVITY_LOG:"activity_log",BRIEF_ACTIVITY_LOG:"brief_activity_log",TIMELINE:"timeline",NEWSSTAND:"newsstand",GROUP:"group",EVENT:"event",CIVIC_PROPOSAL:"civic_proposal",NEWSSTAND_PERMALINK:"newsstand_permalink",TIMELINE_ENTSTREAM:"timeline_entstream",PERMALINK:"permalink",COVER_FEED:"cover_feed",BLENDED_SEARCH_RESULTS:"blended_search",FEED_MOBILE:"feed_mobile",HOME_BUBBLE:"home_bubble",FEED_IMMERSIVE:"feed_immersive",PERMALINK_IMMERSIVE:"permalink_immersive",TIMELINE_IMMERSIVE:"timeline_immersive",GROUP_IMMERSIVE:"group_immersive",COVER_IMMERSIVE:"cover_immersive",TIMELINE_CONTEXT:"timeline_context",EDIT_HISTORY:"edit_history",SNAPTU_FEED:"snaptu_feed",SNAPTU_TIMELINE:"snaptu_timeline",SNAPTU_GROUPS_FEED:"snaptu_groups_feed",SIDE_FEED:"side_feed",MESSAGE_THREAD:"message_thread",MESSENGER_AD:"messenger_ad",PRESENCE_FEED:"presence_feed",APP_FEED:"app_feed",EXPLORE_FEED:"explore_feed",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",NEWS_FEED_DEEP_DIVE:"news_feed_deep_dive",SEEN_CONTENT:"seen_content",TRENDING_HOVERCARD:"trending_hovercard",GAMETIME_HIGHLIGHTS:"gametime_highlights",VIDEO_CHANNEL:"video_channel",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME:"video_home",VIDEO_HOME_CHANNEL:"video_home_channel",GROUPS_LANDING:"groups_landing",GROUP_BIO:"group_bio",GROUP_ALERTED_QUEUE:"group_alerted_queue",GROUP_FLAGGED_QUEUE:"group_flagged_queue",GROUP_REPORT_QUEUE:"group_report_queue",GROUP_PENDING_QUEUE:"group_pending_queue",BUY_AND_SELL:"buy_and_sell",APPENDABLE_PROMPT:"appendable_prompt",REVIEWS_FEED:"reviews_feed",TOPIC_FEED:"topic_feed",ADMIN_FEED:"admin_feed",BREAKUP_VIEW_POSTS_FEED:"breakup_view_posts_feed",CRISIS_FEED:"crisis_feed",LOCAL_SEARCH_RESULTS_PAGE:"local_search_results_page",PLACE_FEED:"place_feed",NATIVE_TEMPLATES:"native_templates",SEARCH_RESULTS_PAGE:"search_results_page",FUNDRAISER_PAGE:"fundraiser_page",FUNDRAISER_FOR_STORY_MORE_INFO_PAGE:"fundraiser_for_story_more_info_page",LOCAL_SERP:"local_serp",REACTION_OVERLAY:"reaction_overlay",VIDEO_INSTREAM:"video_instream",SOCIAL_BALLOT:"social_ballot",ENDORSEMENTS:"endorsements",GOV_DIGEST:"gov_digest",TRENDING_ISSUES:"trending_issues",POLITICAL_POST_FEED:"political_post_feed",TOWN_HALL:"town_hall",UNSPECIFIED:"unspecified",CONVERSATION_NUB:"conversation_nub",SUPPORT_INBOX:"support_inbox",COMMERCE_BOOKMARK:"commerce_bookmark",PAGE_LIVE_VIDEO_MODULE:"page_live_video_module",MARKETPLACE:"marketplace",MARKETPLACE_BSG_PROFILE:"marketplace_bsg_profile",MARKETPLACE_MEGAMALL:"marketplace_megamall",MARKETPLACE_PDP:"marketplace_pdp",MARKETPLACE_PDP_SELLER:"marketplace_pdp_seller",MARKETPLACE_PROFILE:"marketplace_profile",MARKETPLACE_PROFILE_BUYER:"marketplace_profile_buyer",MARKETPLACE_PROFILE_SELLER:"marketplace_profile_seller",MARKETPLACE_RATING_CONFIRMATION:"marketplace_rating_confirmation",MARKETPLACE_RATING_CONFIRMATION_BUYER:"marketplace_rating_confirmation_buyer",MARKETPLACE_RATING_CONFIRMATION_SELLER:"marketplace_rating_confirmation_seller",MARKETPLACE_RATING_FLOW:"marketplace_rating_flow",MARKETPLACE_RATING_FLOW_BUYER:"marketplace_rating_flow_buyer",MARKETPLACE_RATING_FLOW_SELLER:"marketplace_rating_flow_seller",MARKETPLACE_THREAD:"marketplace_thread",MARKETPLACE_THREAD_SELLER:"marketplace_thread_seller",MARKETPLACE_THREAD_BUYER:"marketplace_thread_buyer",MARKETPLACE_MESSENGER_REPORT_BUYER:"marketplace_messenger_report_buyer",MARKETPLACE_MESSENGER_REPORT_SELLER:"marketplace_messenger_report_seller",MARKETPLACE_SHOP_PDP:"marketplace_shop_pdp",MARKETPLACE_SHOP_PDP_SELLER:"marketplace_shop_pdp_seller",MARKETPLACE_B2C_REVIEW:"marketplace_b2c_review",CURATED_COLLECTION_PAGE:"curated_collection_page",COLLEGE_HOMEPAGE:"college_community_homepage",SIGNAL_APP:"signal_app",B2C_BOOKMARK:"b2c_bookmark",TOPIC_ENTITY_PAGE:"topic_entity_page",GROUPS_TAB:"groups_tab",GROUPS_GSYM_SEE_MORE:"groups_gsym_see_more",GROUPS_MY_POSTS:"groups_my_posts",GROUPS_SAVED_POSTS:"groups_saved_posts",JOBS_MULTI_GROUP_BROWSER:"jobs_multi_group_browser",JOBS_SINGLE_GROUP_BROWSER:"jobs_single_group_browser",JOBS_TAB:"jobs_tab",FACEBOOK_360:"facebook_360",ALBUM_FEED:"album_feed",SHARING_SPACES:"sharing_spaces",OPENGRAPH_DIALOG:"opengraph_dialog",SEARCH:"search",COMPOUNDEYE_PII_STRIPPED:"compoundeye_pii_stripped",GAMEROOM_FEED:"gameroom_feed",GAME_HUB_FEED:"game_hub_feed",PAGES_COMMUNITY_TAB:"pages_community_tab",THROWBACK_COMPOSER:"throwback_composer",TOP_LIVE_VIDEOS:"top_live_videos",STONEHENGE_CONSUMPTION:"stonehenge_consumption",ARTICLE_CONTEXT:"article_context",INTEGRITY_CONTEXT:"integrity_context",PROFILE_FRAME_DISCOVERY:"profile_frame_discovery",LUMOS:"lumos",CREATOR_APP_INSPIRATION_FEED:"inspiration_feed",PROJECT_NEO:"project_neo",GROUP_MALL:"group_mall",GROUP_PERMALINK:"group_permalink",GROUP_ACTIVITY_LOG:"group_activity_log",GROUP_ADMIN_TO_MEMBER_FEEDBACK:"group_admin_to_member_feedback",PYI:"pyi",RECOMMENDATIONS_DASHBOARD:"recommendations_dashboard",PAGE_RECOMMENDATIONS_TOOL:"page_recommendations_tool",PAGE_RECOMMENDATIONS_TAB_FEED:"page_recommendation_tab_feed",RAINBOW_EXPLORE:"rainbow_explore",AGORA_GROUPS_FEED:"agora_groups_feed",AGORA_PAGES_FEED:"agora_pages_feed",AGORA_SCHOOL_FEED:"agora_school_feed",AGORA_WEATHER_FEED:"agora_weather_feed",AGORA_YOUTH_HIGH_SCHOOL_DIGEST:"agora_youth_high_school_digest",AGORA_DEEP_DIVE:"agora_deep_dive",ATHENS_FEED:"athens_feed",LOCAL_ALERTS_DIGEST:"local_alerts_digest",FOX_FEED:"fox_feed",FOX_PERMALINK:"fox_permalink",FOX_RECOMMENDATIONS_FEED:"fox_recommendation_feed",HIGHLIGHTS_UNIT:"highlights_unit",MARKETPLACE_LOCAL_SHOP_PAGE_POSTS:"marketplace_local_shop_page_posts",GROUP_HOISTED:"group_hoisted",PAGE_SURFACE_RECOMMENDATIONS:"page_surface_recommendations",ACTOR_GATEWAY:"actor_gateway",ACTION_EXPERIENCE:"action_experience",ACTOR_EXPERIENCE_APPEALS:"actor_experience_appeals",AGORA_BREAKING_NEWS:"agora_breaking_news",SURVEY_GALLERY:"survey_gallery",LOGGED_OUT_FEED:"logged_out_feed",GAMES_FEED:"games_feed",GAMING_VIDEO_STREAMER_HUB:"gaming_video_streamer_hub",FB_STORIES:"fb_stories",MEDIA_MANAGER_HOME:"media_manager_home",MEDIA_MANAGER_POST_INSIGHTS:"media_manager_post_insights",WOODHENGE_EXCLUSIVE_FEED:"woodhenge_exclusive_feed",LOCAL_SURFACE:"local_surface",ADS_TRANSPARENCY_SHOW_ADS:"ads_transparency_show_ads",MISINFORMATION_FACT_CHECKER_APP:"misinformation_fact_checker_app",INSANT_ARTICLE:"instant_article",PROFILE_FEATURED:"profile_featured",WORKPLACE_TEAM_FEED:"workplace_team_feed",NEWS_STORYLINE_FEED:"news_storyline_feed",MONTHLY_ACTIVITY_DIGEST_FEED:"monthly_activity_digest_feed",END_OF_FEED_UNIT_OVERLAY:"end_of_feed_unit_overlay",WORKPLACE_NEWSFEED_PROMOTED_POST:"workplace_newsfeed_promoted_post",ASSET3D_PHOTO_FULLSCREEN:"asset3d_photo_fullscreen",GROUP_GRID_ISLAND:"group_grid_island",FBR:"fbr",NEWS_STORYLINE_NEWSFEED_QP:"news_storyline_newsfeed_qp",HIRING_METRICS_DASHBOARD:"hiring_metrics_dashboard",CANDIDATE_PACKET_REVIEW:"candidate_packet_review",NEWS_OCT_DRAFT_POST_PREVIEW:"news_oct_draft_post_preview",BUSINESS_FEED:"business_feed",CENTRA_INVESTIGATION_FEED:"centra_investigation_feed",TOP_GROUP_POSTS_TOOL:"top_group_posts_tool",WORKPLACE_SHORTCUTS_FEED:"workplace_shortcuts_feed",NEXT_TOOL:"next_tool",CRS_FEED:"crs_feed",PAGES_FEED:"pages_feed"})}),null);
__d("XGroupsMembershipCriteriaAnswerDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/membership_criteria_answer/edit/",{group_id:{type:"Int",required:!0},source:{type:"Enum",required:!0,enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("XLiveScheduleSubscriptionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_video_schedule/subscription/",{video_broadcast_schedule_id:{type:"FBID"},video_id:{type:"FBID"},subscribe:{type:"Bool",defaultValue:!1},origin:{type:"String"}})}),null);