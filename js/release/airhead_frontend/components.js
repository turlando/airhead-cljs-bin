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
return (function (p1__20189_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(audio_ref,p1__20189_SHARP_) : cljs.core.reset_BANG_.call(null,audio_ref,p1__20189_SHARP_));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(cljs.core.truth_(action_button)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_button,track], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_field,(function (){var G__20193 = cljs.core.cst$kw$title;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__20193) : track.call(null,G__20193));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_field,(function (){var G__20194 = cljs.core.cst$kw$artist;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__20194) : track.call(null,G__20194));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_field,(function (){var G__20195 = cljs.core.cst$kw$album;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__20195) : track.call(null,G__20195));
})()], null)], null);
});
airhead_frontend.components.info_uploading = (function airhead_frontend$components$info_uploading(total,loaded){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Uploading..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress$pure_DASH_input_DASH_1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max,total,cljs.core.cst$kw$value,loaded], null)], null)], null);
});
airhead_frontend.components.info_transcoding = (function airhead_frontend$components$info_transcoding(total,loaded){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Transcoding..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress$pure_DASH_input_DASH_1], null)], null);
});
airhead_frontend.components.info_done = (function airhead_frontend$components$info_done(track){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Done!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.playlist_add_button,track], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$artist.cljs$core$IFn$_invoke$arity$1(track)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(track))].join('')], null)], null)], null);
});
airhead_frontend.components.info_error = (function airhead_frontend$components$info_error(status,error_msg){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$upload_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_msg)].join('')], null)], null);
});
airhead_frontend.components.upload_info = (function airhead_frontend$components$upload_info(p__20198){
var map__20203 = p__20198;
var map__20203__$1 = ((((!((map__20203 == null)))?((((map__20203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20203):map__20203);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20203__$1,cljs.core.cst$kw$loaded);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20203__$1,cljs.core.cst$kw$total);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20203__$1,cljs.core.cst$kw$status);
var map__20204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20203__$1,cljs.core.cst$kw$body);
var map__20204__$1 = ((((!((map__20204 == null)))?((((map__20204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20204):map__20204);
var error_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,cljs.core.cst$kw$msg);
var track_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,cljs.core.cst$kw$track);
var library = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$library);
var done_QMARK_ = ((function (library,map__20203,map__20203__$1,loaded,total,status,map__20204,map__20204__$1,error_msg,track_id){
return (function (){
return cljs.core.some(((function (library,map__20203,map__20203__$1,loaded,total,status,map__20204,map__20204__$1,error_msg,track_id){
return (function (p1__20196_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(track_id,p1__20196_SHARP_);
});})(library,map__20203,map__20203__$1,loaded,total,status,map__20204,map__20204__$1,error_msg,track_id))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$uuid,library));
});})(library,map__20203,map__20203__$1,loaded,total,status,map__20204,map__20204__$1,error_msg,track_id))
;
if((loaded < total)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.info_uploading,loaded,total], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(200))){
if(cljs.core.truth_(done_QMARK_())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.info_done,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (library,done_QMARK_,map__20203,map__20203__$1,loaded,total,status,map__20204,map__20204__$1,error_msg,track_id){
return (function (p1__20197_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(p1__20197_SHARP_),track_id);
});})(library,done_QMARK_,map__20203,map__20203__$1,loaded,total,status,map__20204,map__20204__$1,error_msg,track_id))
,library))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.info_transcoding], null);
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
airhead_frontend.components.upload_button = (function airhead_frontend$components$upload_button(form_ref){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pure_DASH_button$pure_DASH_button$pure_DASH_u_DASH_1_DASH_2,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Upload",cljs.core.cst$kw$on_DASH_click,(function (){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_ref) : cljs.core.deref.call(null,form_ref));
if(cljs.core.truth_(temp__4657__auto__)){
var form = temp__4657__auto__;
var up_chan = airhead_frontend.requests.upload_BANG_(form);
var upload_state = reagent.core.cursor(airhead_frontend.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uploads], null));
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__,up_chan,upload_state,form,temp__4657__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__,up_chan,upload_state,form,temp__4657__auto__){
return (function (state_20256){
var state_val_20257 = (state_20256[(1)]);
if((state_val_20257 === (1))){
var state_20256__$1 = state_20256;
var statearr_20258_20273 = state_20256__$1;
(statearr_20258_20273[(2)] = null);

(statearr_20258_20273[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20257 === (2))){
var state_20256__$1 = state_20256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20256__$1,(4),up_chan);
} else {
if((state_val_20257 === (3))){
var inst_20254 = (state_20256[(2)]);
var state_20256__$1 = state_20256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20256__$1,inst_20254);
} else {
if((state_val_20257 === (4))){
var inst_20242 = (state_20256[(7)]);
var inst_20242__$1 = (state_20256[(2)]);
var state_20256__$1 = (function (){var statearr_20259 = state_20256;
(statearr_20259[(7)] = inst_20242__$1);

return statearr_20259;
})();
if(cljs.core.truth_(inst_20242__$1)){
var statearr_20260_20274 = state_20256__$1;
(statearr_20260_20274[(1)] = (5));

} else {
var statearr_20261_20275 = state_20256__$1;
(statearr_20261_20275[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20257 === (5))){
var inst_20242 = (state_20256[(7)]);
var inst_20244 = cljs.core.hash(up_chan);
var inst_20245 = [inst_20244];
var inst_20246 = [inst_20242];
var inst_20247 = cljs.core.PersistentHashMap.fromArrays(inst_20245,inst_20246);
var inst_20248 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(upload_state,cljs.core.merge,inst_20247);
var state_20256__$1 = (function (){var statearr_20262 = state_20256;
(statearr_20262[(8)] = inst_20248);

return statearr_20262;
})();
var statearr_20263_20276 = state_20256__$1;
(statearr_20263_20276[(2)] = null);

(statearr_20263_20276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20257 === (6))){
var state_20256__$1 = state_20256;
var statearr_20264_20277 = state_20256__$1;
(statearr_20264_20277[(2)] = null);

(statearr_20264_20277[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20257 === (7))){
var inst_20252 = (state_20256[(2)]);
var state_20256__$1 = state_20256;
var statearr_20265_20278 = state_20256__$1;
(statearr_20265_20278[(2)] = inst_20252);

(statearr_20265_20278[(1)] = (3));


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
});})(c__15034__auto__,up_chan,upload_state,form,temp__4657__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__,up_chan,upload_state,form,temp__4657__auto__){
return (function() {
var airhead_frontend$components$upload_button_$_state_machine__14911__auto__ = null;
var airhead_frontend$components$upload_button_$_state_machine__14911__auto____0 = (function (){
var statearr_20269 = [null,null,null,null,null,null,null,null,null];
(statearr_20269[(0)] = airhead_frontend$components$upload_button_$_state_machine__14911__auto__);

(statearr_20269[(1)] = (1));

return statearr_20269;
});
var airhead_frontend$components$upload_button_$_state_machine__14911__auto____1 = (function (state_20256){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_20256);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e20270){if((e20270 instanceof Object)){
var ex__14914__auto__ = e20270;
var statearr_20271_20279 = state_20256;
(statearr_20271_20279[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20256);

return cljs.core.cst$kw$recur;
} else {
throw e20270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__20280 = state_20256;
state_20256 = G__20280;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$components$upload_button_$_state_machine__14911__auto__ = function(state_20256){
switch(arguments.length){
case 0:
return airhead_frontend$components$upload_button_$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$components$upload_button_$_state_machine__14911__auto____1.call(this,state_20256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$components$upload_button_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$components$upload_button_$_state_machine__14911__auto____0;
airhead_frontend$components$upload_button_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$components$upload_button_$_state_machine__14911__auto____1;
return airhead_frontend$components$upload_button_$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__,up_chan,upload_state,form,temp__4657__auto__))
})();
var state__15036__auto__ = (function (){var statearr_20272 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_20272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_20272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__,up_chan,upload_state,form,temp__4657__auto__))
);

return c__15034__auto__;
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
return (function (p1__20281_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(form_ref,p1__20281_SHARP_) : cljs.core.reset_BANG_.call(null,form_ref,p1__20281_SHARP_));
});})(form_ref,file_input_ref))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$name,"track",cljs.core.cst$kw$ref,((function (form_ref,file_input_ref){
return (function (p1__20282_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(file_input_ref,p1__20282_SHARP_) : cljs.core.reset_BANG_.call(null,file_input_ref,p1__20282_SHARP_));
});})(form_ref,file_input_ref))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controller_DASH_box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pure_DASH_button_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.file_select_button,file_input_ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.upload_button,form_ref], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_file_DASH_o], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(file_input_ref) : cljs.core.deref.call(null,file_input_ref)))?(function (){var path = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(file_input_ref) : cljs.core.deref.call(null,file_input_ref)).value;
if(!(clojure.string.blank_QMARK_(path))){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"\\"));
} else {
return "No file selected.";
}
})():null)], null)], null)], null),(function (){var iter__7781__auto__ = ((function (form_ref,file_input_ref){
return (function airhead_frontend$components$upload_section_$_iter__20301(s__20302){
return (new cljs.core.LazySeq(null,((function (form_ref,file_input_ref){
return (function (){
var s__20302__$1 = s__20302;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20302__$1);
if(temp__4657__auto__){
var s__20302__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20302__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__20302__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__20304 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__20303 = (0);
while(true){
if((i__20303 < size__7780__auto__)){
var vec__20313 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__20303);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20313,(0),null);
var upload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20313,(1),null);
cljs.core.chunk_append(b__20304,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.upload_info,upload], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__20319 = (i__20303 + (1));
i__20303 = G__20319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20304),airhead_frontend$components$upload_section_$_iter__20301(cljs.core.chunk_rest(s__20302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20304),null);
}
} else {
var vec__20316 = cljs.core.first(s__20302__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20316,(0),null);
var upload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20316,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.upload_info,upload], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),airhead_frontend$components$upload_section_$_iter__20301(cljs.core.rest(s__20302__$2)));
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
return (function airhead_frontend$components$playlist_section_$_iter__20326(s__20327){
return (new cljs.core.LazySeq(null,((function (tracks,temp__4655__auto__){
return (function (){
var s__20327__$1 = s__20327;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20327__$1);
if(temp__4657__auto__){
var s__20327__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20327__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__20327__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__20329 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__20328 = (0);
while(true){
if((i__20328 < size__7780__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__20328);
cljs.core.chunk_append(b__20329,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_remove_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__20332 = (i__20328 + (1));
i__20328 = G__20332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20329),airhead_frontend$components$playlist_section_$_iter__20326(cljs.core.chunk_rest(s__20327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20329),null);
}
} else {
var track = cljs.core.first(s__20327__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_remove_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),airhead_frontend$components$playlist_section_$_iter__20326(cljs.core.rest(s__20327__$2)));
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
return (function airhead_frontend$components$library_section_$_iter__20339(s__20340){
return (new cljs.core.LazySeq(null,((function (tracks){
return (function (){
var s__20340__$1 = s__20340;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20340__$1);
if(temp__4657__auto__){
var s__20340__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20340__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__20340__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__20342 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__20341 = (0);
while(true){
if((i__20341 < size__7780__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__20341);
cljs.core.chunk_append(b__20342,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_add_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__20345 = (i__20341 + (1));
i__20341 = G__20345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20342),airhead_frontend$components$library_section_$_iter__20339(cljs.core.chunk_rest(s__20340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20342),null);
}
} else {
var track = cljs.core.first(s__20340__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_add_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),airhead_frontend$components$library_section_$_iter__20339(cljs.core.rest(s__20340__$2)));
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
