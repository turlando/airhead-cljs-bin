// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_frontend.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('airhead_frontend.state');
goog.require('airhead_frontend.requests');
airhead_frontend.components.header = (function airhead_frontend$components$header(){
var cursor = reagent.core.cursor(airhead_frontend.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null));
var title = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor) : cljs.core.deref.call(null,cursor)).call(null,cljs.core.cst$kw$name);
var message = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor) : cljs.core.deref.call(null,cursor)).call(null,cljs.core.cst$kw$greet_message);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,message], null)], null);
});
airhead_frontend.components.now_playing = (function airhead_frontend$components$now_playing(){
var track = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$now_DASH_playing);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_player_DASH_track,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_music], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(track)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$artist.cljs$core$IFn$_invoke$arity$1(track)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(track))].join(''):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$em,"Nothing is playing."], null))], null)], null);
});
airhead_frontend.components.pause_button = (function airhead_frontend$components$pause_button(audio){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$pure_DASH_button_DASH_active,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return audio.pause();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_pause], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Pause"], null)], null);
});
airhead_frontend.components.play_button = (function airhead_frontend$components$play_button(audio){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return audio.play();
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_play], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Play"], null)], null);
});
airhead_frontend.components.audio_on_button = (function airhead_frontend$components$audio_on_button(audio){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return audio.muted = true;
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_up], null)], null);
});
airhead_frontend.components.audio_off_button = (function airhead_frontend$components$audio_off_button(audio){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$pure_DASH_button_DASH_active,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return audio.muted = false;
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_off], null)], null);
});
airhead_frontend.components.player_section = (function airhead_frontend$components$player_section(){
var audio_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (audio_ref){
return (function (){
var temp__4657__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info,cljs.core.cst$kw$stream_url], null));
if(cljs.core.truth_(temp__4657__auto__)){
var url = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_player,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,((function (url,temp__4657__auto__,audio_ref){
return (function (p1__15261_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(audio_ref,p1__15261_SHARP_) : cljs.core.reset_BANG_.call(null,audio_ref,p1__15261_SHARP_));
});})(url,temp__4657__auto__,audio_ref))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null)], null),(function (){var temp__4657__auto____$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(audio_ref) : cljs.core.deref.call(null,audio_ref));
if(cljs.core.truth_(temp__4657__auto____$1)){
var audio = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_player_DASH_controls$pure_DASH_button_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"group"], null),(cljs.core.truth_(audio.paused)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.play_button,audio], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.pause_button,audio], null)),(cljs.core.truth_(audio.muted)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.audio_off_button,audio], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.audio_on_button,audio], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$pure_DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_external_DASH_link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Open stream"], null)], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.now_playing], null)], null);
} else {
return null;
}
});
;})(audio_ref))
});
airhead_frontend.components.progress_bar = (function airhead_frontend$components$progress_bar(){
var percentage = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$upload_DASH_percentage);
if((((0) < percentage)) && ((percentage < (100)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress$pure_DASH_input_DASH_1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max,(100),cljs.core.cst$kw$value,percentage], null)], null);
} else {
return null;
}
});
airhead_frontend.components.upload_section = (function airhead_frontend$components$upload_section(){
var form_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (form_ref){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_upload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Upload"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$pure_DASH_form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,((function (form_ref){
return (function (p1__15262_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(form_ref,p1__15262_SHARP_) : cljs.core.reset_BANG_.call(null,form_ref,p1__15262_SHARP_));
});})(form_ref))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$pure_DASH_input_DASH_2_DASH_3,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$name,"track"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$pure_DASH_button$pure_DASH_input_DASH_1_DASH_3,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Upload",cljs.core.cst$kw$on_DASH_click,((function (form_ref){
return (function (){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_ref) : cljs.core.deref.call(null,form_ref));
if(cljs.core.truth_(temp__4657__auto__)){
var form = temp__4657__auto__;
return airhead_frontend.requests.upload_BANG_(form);
} else {
return null;
}
});})(form_ref))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.progress_bar], null)], null),(function (){var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$upload_DASH_status);
if(cljs.core.truth_(temp__4657__auto__)){
var status = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,status], null);
} else {
return null;
}
})()], null);
});
;})(form_ref))
});
airhead_frontend.components.playlist_add_button = (function airhead_frontend$components$playlist_add_button(track){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$track_DASH_action,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_frontend.requests.playlist_add_BANG_(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(track));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus], null)], null);
});
airhead_frontend.components.playlist_remove_button = (function airhead_frontend$components$playlist_remove_button(track){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$pure_DASH_button$track_DASH_action,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_frontend.requests.playlist_remove_BANG_(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(track));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_minus], null)], null);
});
airhead_frontend.components.track_tr = (function airhead_frontend$components$track_tr(track,action_button){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(cljs.core.truth_(action_button)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_button,track], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(function (){var G__15266 = cljs.core.cst$kw$title;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__15266) : track.call(null,G__15266));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(function (){var G__15267 = cljs.core.cst$kw$artist;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__15267) : track.call(null,G__15267));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(function (){var G__15268 = cljs.core.cst$kw$album;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__15268) : track.call(null,G__15268));
})()], null)], null);
});
airhead_frontend.components.table = (function airhead_frontend$components$table(head,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$pure_DASH_table$pure_DASH_table_DASH_horizontal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,head], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,content], null)], null);
});
airhead_frontend.components.playlist_section = (function airhead_frontend$components$playlist_section(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_playlist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Playlist"], null),(function (){var temp__4655__auto__ = cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$playlist));
if(cljs.core.truth_(temp__4655__auto__)){
var tracks = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Artist"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Album"], null)], null),(function (){var iter__7781__auto__ = ((function (tracks,temp__4655__auto__){
return (function airhead_frontend$components$playlist_section_$_iter__15275(s__15276){
return (new cljs.core.LazySeq(null,((function (tracks,temp__4655__auto__){
return (function (){
var s__15276__$1 = s__15276;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15276__$1);
if(temp__4657__auto__){
var s__15276__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15276__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__15276__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__15278 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__15277 = (0);
while(true){
if((i__15277 < size__7780__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__15277);
cljs.core.chunk_append(b__15278,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_remove_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__15281 = (i__15277 + (1));
i__15277 = G__15281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15278),airhead_frontend$components$playlist_section_$_iter__15275(cljs.core.chunk_rest(s__15276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15278),null);
}
} else {
var track = cljs.core.first(s__15276__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_remove_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),airhead_frontend$components$playlist_section_$_iter__15275(cljs.core.rest(s__15276__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$sorting_DASH_th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_frontend.components.update_sort_field_BANG_(field);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,caption], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sorting_DASH_th_DASH_arrow,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$sort_DASH_field)))?(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$ascending))?"\u25B2":"\u25BC"):null)], null)], null);
});
airhead_frontend.components.library_section = (function airhead_frontend$components$library_section(){
var tracks = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$library);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_library,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Library"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_SHARP_library_DASH_search$pure_DASH_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$id,"query",cljs.core.cst$kw$placeholder,"Search through the library...",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)).call(null,cljs.core.cst$kw$query),cljs.core.cst$kw$on_DASH_change,airhead_frontend.components.on_query_change], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.sorting_th,cljs.core.cst$kw$title,"Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.sorting_th,cljs.core.cst$kw$artist,"Artist"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.sorting_th,cljs.core.cst$kw$album,"Album"], null)], null),(function (){var iter__7781__auto__ = ((function (tracks){
return (function airhead_frontend$components$library_section_$_iter__15288(s__15289){
return (new cljs.core.LazySeq(null,((function (tracks){
return (function (){
var s__15289__$1 = s__15289;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15289__$1);
if(temp__4657__auto__){
var s__15289__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15289__$2)){
var c__7779__auto__ = cljs.core.chunk_first(s__15289__$2);
var size__7780__auto__ = cljs.core.count(c__7779__auto__);
var b__15291 = cljs.core.chunk_buffer(size__7780__auto__);
if((function (){var i__15290 = (0);
while(true){
if((i__15290 < size__7780__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7779__auto__,i__15290);
cljs.core.chunk_append(b__15291,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_add_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__15294 = (i__15290 + (1));
i__15290 = G__15294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15291),airhead_frontend$components$library_section_$_iter__15288(cljs.core.chunk_rest(s__15289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15291),null);
}
} else {
var track = cljs.core.first(s__15289__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.track_tr,track,airhead_frontend.components.playlist_add_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),airhead_frontend$components$library_section_$_iter__15288(cljs.core.rest(s__15289__$2)));
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
