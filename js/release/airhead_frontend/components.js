// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_frontend.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('airhead_frontend.state');
goog.require('airhead_frontend.requests');
goog.require('markdown.core');
airhead_frontend.components.header = (function airhead_frontend$components$header(){
var cursor = reagent.core.cursor(airhead_frontend.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null));
var title = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor) : cljs.core.deref.call(null,cursor)).call(null,cljs.core.cst$kw$name);
var message = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor) : cljs.core.deref.call(null,cursor)).call(null,cljs.core.cst$kw$greet_message);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.core.md__GT_html(message))].join('')], null)], null)], null)], null);
});
airhead_frontend.components.pause_button = (function airhead_frontend$components$pause_button(audio){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$pure_DASH_button_DASH_active$pure_DASH_u_DASH_1_DASH_4,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Pause",cljs.core.cst$kw$on_DASH_click,(function (){
return audio.pause();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_pause], null)], null);
});
airhead_frontend.components.play_button = (function airhead_frontend$components$play_button(audio){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$pure_DASH_u_DASH_1_DASH_4,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Play",cljs.core.cst$kw$on_DASH_click,(function (){
return audio.play();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_play], null)], null);
});
airhead_frontend.components.skip_button = (function airhead_frontend$components$skip_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$pure_DASH_u_DASH_1_DASH_4,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Skip track",cljs.core.cst$kw$on_DASH_click,airhead_frontend.requests.playlist_skip_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_step_DASH_forward], null)], null);
});
airhead_frontend.components.audio_on_button = (function airhead_frontend$components$audio_on_button(audio){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$pure_DASH_u_DASH_1_DASH_4,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Mute",cljs.core.cst$kw$on_DASH_click,(function (){
return audio.muted = true;
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_up], null)], null);
});
airhead_frontend.components.audio_off_button = (function airhead_frontend$components$audio_off_button(audio){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$pure_DASH_button_DASH_active$pure_DASH_u_DASH_1_DASH_4,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Unmute",cljs.core.cst$kw$on_DASH_click,(function (){
return audio.muted = false;
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_off], null)], null);
});
airhead_frontend.components.open_stream_button = (function airhead_frontend$components$open_stream_button(url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$pure_DASH_button$pure_DASH_u_DASH_1_DASH_4,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Open stream",cljs.core.cst$kw$href,url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_external_DASH_link], null)], null);
});
airhead_frontend.components.now_playing = (function airhead_frontend$components$now_playing(){
var track = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$now_DASH_playing);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_music], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(track)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$artist.cljs$core$IFn$_invoke$arity$1(track)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(track))].join(''):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$em,"Nothing is playing."], null))], null)], null);
});
airhead_frontend.components.player_section = (function airhead_frontend$components$player_section(){
var audio_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (audio_ref){
return (function (){
var temp__4657__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info,cljs.core.cst$kw$stream_url], null));
if(cljs.core.truth_(temp__4657__auto__)){
var url = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_player,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio$hidden,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,((function (url,temp__4657__auto__,audio_ref){
return (function (p1__15588_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(audio_ref,p1__15588_SHARP_) : cljs.core.reset_BANG_.call(null,audio_ref,p1__15588_SHARP_));
});})(url,temp__4657__auto__,audio_ref))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null)], null),(function (){var temp__4657__auto____$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(audio_ref) : cljs.core.deref.call(null,audio_ref));
if(cljs.core.truth_(temp__4657__auto____$1)){
var audio = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controller_DASH_box,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pure_DASH_button_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"group"], null),(cljs.core.truth_(audio.paused)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.play_button,audio], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.pause_button,audio], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.skip_button], null),(cljs.core.truth_(audio.muted)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.audio_off_button,audio], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.audio_on_button,audio], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.open_stream_button,url], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.now_playing], null)], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
});
;})(audio_ref))
});
airhead_frontend.components.playlist_add_button = (function airhead_frontend$components$playlist_add_button(track){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$track_DASH_action,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Add to playlist",cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_frontend.requests.playlist_add_BANG_(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(track));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus], null)], null);
});
airhead_frontend.components.playlist_remove_button = (function airhead_frontend$components$playlist_remove_button(track){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$track_DASH_action,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Remove from playlist",cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_frontend.requests.playlist_remove_BANG_(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(track));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_minus], null)], null);
});
airhead_frontend.components.track_field = (function airhead_frontend$components$track_field(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,text], null),text], null);
});
airhead_frontend.components.track_tr = (function airhead_frontend$components$track_tr(track,action_button){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(cljs.core.truth_(action_button)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_button,track], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_field,(function (){var G__15592 = cljs.core.cst$kw$title;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__15592) : track.call(null,G__15592));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_field,(function (){var G__15593 = cljs.core.cst$kw$artist;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__15593) : track.call(null,G__15593));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_field,(function (){var G__15594 = cljs.core.cst$kw$album;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__15594) : track.call(null,G__15594));
})()], null)], null);
});
airhead_frontend.components.info_uploading = (function airhead_frontend$components$info_uploading(file_name,total,loaded){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress$pure_DASH_input_DASH_1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max,total,cljs.core.cst$kw$value,loaded], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Uploading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join('')], null)], null);
});
airhead_frontend.components.info_transcoding = (function airhead_frontend$components$info_transcoding(file_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress$pure_DASH_input_DASH_1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Transcoding: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join('')], null)], null);
});
airhead_frontend.components.info_done = (function airhead_frontend$components$info_done(track){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Done!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.playlist_add_button,track], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$artist.cljs$core$IFn$_invoke$arity$1(track)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(track))].join('')], null)], null)], null);
});
airhead_frontend.components.info_error = (function airhead_frontend$components$info_error(status,error_msg){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_msg)].join('')], null)], null);
});
airhead_frontend.components.upload_info = (function airhead_frontend$components$upload_info(p__15597){
var map__15602 = p__15597;
var map__15602__$1 = ((((!((map__15602 == null)))?((((map__15602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15602):map__15602);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.cst$kw$loaded);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.cst$kw$total);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.cst$kw$status);
var file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.cst$kw$file_DASH_name);
var map__15603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.cst$kw$body);
var map__15603__$1 = ((((!((map__15603 == null)))?((((map__15603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15603):map__15603);
var error_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15603__$1,cljs.core.cst$kw$msg);
var track_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15603__$1,cljs.core.cst$kw$track);
var library = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$library);
var done_QMARK_ = ((function (library,map__15602,map__15602__$1,loaded,total,status,file_name,map__15603,map__15603__$1,error_msg,track_id){
return (function (){
return cljs.core.some(((function (library,map__15602,map__15602__$1,loaded,total,status,file_name,map__15603,map__15603__$1,error_msg,track_id){
return (function (p1__15595_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(track_id,p1__15595_SHARP_);
});})(library,map__15602,map__15602__$1,loaded,total,status,file_name,map__15603,map__15603__$1,error_msg,track_id))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$uuid,library));
});})(library,map__15602,map__15602__$1,loaded,total,status,file_name,map__15603,map__15603__$1,error_msg,track_id))
;
if((loaded < total)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.info_uploading,file_name,loaded,total], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(200))){
if(cljs.core.truth_(done_QMARK_())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.info_done,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (library,done_QMARK_,map__15602,map__15602__$1,loaded,total,status,file_name,map__15603,map__15603__$1,error_msg,track_id){
return (function (p1__15596_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(p1__15596_SHARP_),track_id);
});})(library,done_QMARK_,map__15602,map__15602__$1,loaded,total,status,file_name,map__15603,map__15603__$1,error_msg,track_id))
,library))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.info_transcoding,file_name], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.info_error,status,error_msg], null);

}
}
});
airhead_frontend.components.file_select_button = (function airhead_frontend$components$file_select_button(file_input_ref){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pure_DASH_button$pure_DASH_u_DASH_1_DASH_2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Select a file",cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(file_input_ref) : cljs.core.deref.call(null,file_input_ref)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(file_input_ref) : cljs.core.deref.call(null,file_input_ref)).click();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_folder_DASH_open], null)], null);
});
airhead_frontend.components.get_file_name = (function airhead_frontend$components$get_file_name(file_input_ref){
var path = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(file_input_ref) : cljs.core.deref.call(null,file_input_ref)).value;
if(!(clojure.string.blank_QMARK_(path))){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"\\"));
} else {
return null;
}
});
airhead_frontend.components.upload_button = (function airhead_frontend$components$upload_button(form_ref,file_input_ref){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pure_DASH_button$pure_DASH_button$pure_DASH_u_DASH_1_DASH_2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Upload",cljs.core.cst$kw$on_DASH_click,(function (){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_ref) : cljs.core.deref.call(null,form_ref));
if(cljs.core.truth_(temp__4657__auto__)){
var form = temp__4657__auto__;
var temp__4657__auto____$1 = airhead_frontend.components.get_file_name(file_input_ref);
if(cljs.core.truth_(temp__4657__auto____$1)){
var file_name = temp__4657__auto____$1;
var up_chan = airhead_frontend.requests.upload_BANG_(form);
var upload_state = reagent.core.cursor(airhead_frontend.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uploads], null));
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(file_input_ref) : cljs.core.deref.call(null,file_input_ref)).value = "";

var c__11488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto__,up_chan,upload_state,file_name,temp__4657__auto____$1,form,temp__4657__auto__){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto__,up_chan,upload_state,file_name,temp__4657__auto____$1,form,temp__4657__auto__){
return (function (state_15663){
var state_val_15664 = (state_15663[(1)]);
if((state_val_15664 === (1))){
var state_15663__$1 = state_15663;
var statearr_15665_15680 = state_15663__$1;
(statearr_15665_15680[(2)] = null);

(statearr_15665_15680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (2))){
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15663__$1,(4),up_chan);
} else {
if((state_val_15664 === (3))){
var inst_15661 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15663__$1,inst_15661);
} else {
if((state_val_15664 === (4))){
var inst_15645 = (state_15663[(7)]);
var inst_15645__$1 = (state_15663[(2)]);
var state_15663__$1 = (function (){var statearr_15666 = state_15663;
(statearr_15666[(7)] = inst_15645__$1);

return statearr_15666;
})();
if(cljs.core.truth_(inst_15645__$1)){
var statearr_15667_15681 = state_15663__$1;
(statearr_15667_15681[(1)] = (5));

} else {
var statearr_15668_15682 = state_15663__$1;
(statearr_15668_15682[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (5))){
var inst_15645 = (state_15663[(7)]);
var inst_15647 = cljs.core.hash(up_chan);
var inst_15648 = [inst_15647];
var inst_15649 = [cljs.core.cst$kw$file_DASH_name];
var inst_15650 = [file_name];
var inst_15651 = cljs.core.PersistentHashMap.fromArrays(inst_15649,inst_15650);
var inst_15652 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_15645,inst_15651], 0));
var inst_15653 = [inst_15652];
var inst_15654 = cljs.core.PersistentHashMap.fromArrays(inst_15648,inst_15653);
var inst_15655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(upload_state,cljs.core.merge,inst_15654);
var state_15663__$1 = (function (){var statearr_15669 = state_15663;
(statearr_15669[(8)] = inst_15655);

return statearr_15669;
})();
var statearr_15670_15683 = state_15663__$1;
(statearr_15670_15683[(2)] = null);

(statearr_15670_15683[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (6))){
var state_15663__$1 = state_15663;
var statearr_15671_15684 = state_15663__$1;
(statearr_15671_15684[(2)] = null);

(statearr_15671_15684[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (7))){
var inst_15659 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
var statearr_15672_15685 = state_15663__$1;
(statearr_15672_15685[(2)] = inst_15659);

(statearr_15672_15685[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11488__auto__,up_chan,upload_state,file_name,temp__4657__auto____$1,form,temp__4657__auto__))
;
return ((function (switch__11411__auto__,c__11488__auto__,up_chan,upload_state,file_name,temp__4657__auto____$1,form,temp__4657__auto__){
return (function() {
var airhead_frontend$components$upload_button_$_state_machine__11412__auto__ = null;
var airhead_frontend$components$upload_button_$_state_machine__11412__auto____0 = (function (){
var statearr_15676 = [null,null,null,null,null,null,null,null,null];
(statearr_15676[(0)] = airhead_frontend$components$upload_button_$_state_machine__11412__auto__);

(statearr_15676[(1)] = (1));

return statearr_15676;
});
var airhead_frontend$components$upload_button_$_state_machine__11412__auto____1 = (function (state_15663){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15663);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15677){if((e15677 instanceof Object)){
var ex__11415__auto__ = e15677;
var statearr_15678_15686 = state_15663;
(statearr_15678_15686[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15663);

return cljs.core.cst$kw$recur;
} else {
throw e15677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15687 = state_15663;
state_15663 = G__15687;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$components$upload_button_$_state_machine__11412__auto__ = function(state_15663){
switch(arguments.length){
case 0:
return airhead_frontend$components$upload_button_$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$components$upload_button_$_state_machine__11412__auto____1.call(this,state_15663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$components$upload_button_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$components$upload_button_$_state_machine__11412__auto____0;
airhead_frontend$components$upload_button_$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$components$upload_button_$_state_machine__11412__auto____1;
return airhead_frontend$components$upload_button_$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__,up_chan,upload_state,file_name,temp__4657__auto____$1,form,temp__4657__auto__))
})();
var state__11490__auto__ = (function (){var statearr_15679 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_15679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto__,up_chan,upload_state,file_name,temp__4657__auto____$1,form,temp__4657__auto__))
);

return c__11488__auto__;
} else {
return null;
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_upload], null)], null);
});
airhead_frontend.components.upload_section = (function airhead_frontend$components$upload_section(){
var form_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var file_input_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (form_ref,file_input_ref){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_upload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Upload"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$hidden,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,((function (form_ref,file_input_ref){
return (function (p1__15688_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(form_ref,p1__15688_SHARP_) : cljs.core.reset_BANG_.call(null,form_ref,p1__15688_SHARP_));
});})(form_ref,file_input_ref))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$name,"track",cljs.core.cst$kw$ref,((function (form_ref,file_input_ref){
return (function (p1__15689_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(file_input_ref,p1__15689_SHARP_) : cljs.core.reset_BANG_.call(null,file_input_ref,p1__15689_SHARP_));
});})(form_ref,file_input_ref))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controller_DASH_box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pure_DASH_button_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.file_select_button,file_input_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.upload_button,form_ref,file_input_ref], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_file_DASH_o], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(file_input_ref) : cljs.core.deref.call(null,file_input_ref)))?(function (){var or__6993__auto__ = airhead_frontend.components.get_file_name(file_input_ref);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return "No file selected.";
}
})():null)], null)], null)], null),(function (){var iter__7781__auto__ = ((function (form_ref,file_input_ref){
return (function airhead_frontend$components$upload_section_$_iter__15708(s__15709){
return (new cljs.core.LazySeq(null,((function (form_ref,file_input_ref){
return (function (){
var s__15709__$1 = s__15709;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15709__$1);
if(temp__4657__auto__){
var s__15709__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15709__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__15709__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__15711 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__15710 = (0);
while(true){
if((i__15710 < size__7780__auto__)){
var vec__15720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__15710);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15720,(0),null);
var upload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15720,(1),null);
cljs.core.chunk_append(b__15711,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.upload_info,upload], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__15726 = (i__15710 + (1));
i__15710 = G__15726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15711),airhead_frontend$components$upload_section_$_iter__15708(cljs.core.chunk_rest(s__15709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15711),null);
}
} else {
var vec__15723 = cljs.core.first(s__15709__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15723,(0),null);
var upload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15723,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.upload_info,upload], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),airhead_frontend$components$upload_section_$_iter__15708(cljs.core.rest(s__15709__$2)));
}
} else {
return null;
}
break;
}
});})(form_ref,file_input_ref))
,null,null));
});})(form_ref,file_input_ref))
;
return iter__7781__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$uploads));
})()], null);
});
;})(form_ref,file_input_ref))
});
airhead_frontend.components.table = (function airhead_frontend$components$table(head,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$pure_DASH_table$pure_DASH_table_DASH_horizontal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,head], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,content], null)], null);
});
airhead_frontend.components.playlist_section = (function airhead_frontend$components$playlist_section(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_playlist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Playlist"], null),(function (){var temp__4655__auto__ = cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$playlist));
if(cljs.core.truth_(temp__4655__auto__)){
var tracks = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Artist"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Album"], null)], null),(function (){var iter__7781__auto__ = ((function (tracks,temp__4655__auto__){
return (function airhead_frontend$components$playlist_section_$_iter__15733(s__15734){
return (new cljs.core.LazySeq(null,((function (tracks,temp__4655__auto__){
return (function (){
var s__15734__$1 = s__15734;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15734__$1);
if(temp__4657__auto__){
var s__15734__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15734__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__15734__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__15736 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__15735 = (0);
while(true){
if((i__15735 < size__7780__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__15735);
cljs.core.chunk_append(b__15736,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_remove_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__15739 = (i__15735 + (1));
i__15735 = G__15739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15736),airhead_frontend$components$playlist_section_$_iter__15733(cljs.core.chunk_rest(s__15734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15736),null);
}
} else {
var track = cljs.core.first(s__15734__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_remove_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),airhead_frontend$components$playlist_section_$_iter__15733(cljs.core.rest(s__15734__$2)));
}
} else {
return null;
}
break;
}
});})(tracks,temp__4655__auto__))
,null,null));
});})(tracks,temp__4655__auto__))
;
return iter__7781__auto__(tracks);
})()], null);
} else {
return "The playlist is empty.";
}
})()], null);
});
airhead_frontend.components.on_query_change = (function airhead_frontend$components$on_query_change(e){
airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$query,e.target.value);

return airhead_frontend.requests.get_library_BANG_();
});
airhead_frontend.components.update_sort_field_BANG_ = (function airhead_frontend$components$update_sort_field_BANG_(new_field){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_field,cljs.core.cst$kw$sort_DASH_field.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(airhead_frontend.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ascending], null),cljs.core.not);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(airhead_frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$ascending,true);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(airhead_frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$sort_DASH_field,new_field);
});
airhead_frontend.components.sort_tracks = (function airhead_frontend$components$sort_tracks(tracks){
var sorted_tracks = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sort_DASH_field.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state))),tracks);
if(cljs.core.truth_(cljs.core.cst$kw$ascending.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state))))){
return sorted_tracks;
} else {
return cljs.core.rseq(sorted_tracks);
}
});
airhead_frontend.components.sorting_th = (function airhead_frontend$components$sorting_th(field,caption){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$sorting_DASH_th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Sort by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(caption))].join(''),cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_frontend.components.update_sort_field_BANG_(field);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,caption], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sorting_DASH_th_DASH_arrow,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$sort_DASH_field)))?(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$ascending))?"\u25B2":"\u25BC"):null)], null)], null);
});
airhead_frontend.components.library_section = (function airhead_frontend$components$library_section(){
var tracks = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$library);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_library,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Library"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_SHARP_library_DASH_search$pure_DASH_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$id,"query",cljs.core.cst$kw$placeholder,"Search through the library...",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$query),cljs.core.cst$kw$on_DASH_change,airhead_frontend.components.on_query_change], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.sorting_th,cljs.core.cst$kw$title,"Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.sorting_th,cljs.core.cst$kw$artist,"Artist"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.sorting_th,cljs.core.cst$kw$album,"Album"], null)], null),(function (){var iter__7781__auto__ = ((function (tracks){
return (function airhead_frontend$components$library_section_$_iter__15746(s__15747){
return (new cljs.core.LazySeq(null,((function (tracks){
return (function (){
var s__15747__$1 = s__15747;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15747__$1);
if(temp__4657__auto__){
var s__15747__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15747__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__15747__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__15749 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__15748 = (0);
while(true){
if((i__15748 < size__7780__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__15748);
cljs.core.chunk_append(b__15749,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_add_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__15752 = (i__15748 + (1));
i__15748 = G__15752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15749),airhead_frontend$components$library_section_$_iter__15746(cljs.core.chunk_rest(s__15747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15749),null);
}
} else {
var track = cljs.core.first(s__15747__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_add_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),airhead_frontend$components$library_section_$_iter__15746(cljs.core.rest(s__15747__$2)));
}
} else {
return null;
}
break;
}
});})(tracks))
,null,null));
});})(tracks))
;
return iter__7781__auto__(airhead_frontend.components.sort_tracks(tracks));
})()], null)], null);
});
airhead_frontend.components.page_component = (function airhead_frontend$components$page_component(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.player_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.upload_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.playlist_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.library_section], null)], null);
});
