// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_cljs.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('airhead_cljs.state');
goog.require('airhead_cljs.requests');
airhead_cljs.components.header = (function airhead_cljs$components$header(){
var cursor = reagent.core.cursor(airhead_cljs.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null));
var title = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor) : cljs.core.deref.call(null,cursor)).call(null,cljs.core.cst$kw$name);
var message = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor) : cljs.core.deref.call(null,cursor)).call(null,cljs.core.cst$kw$greet_message);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,message], null)], null);
});
airhead_cljs.components.now_playing = (function airhead_cljs$components$now_playing(){
var track = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state)).call(null,cljs.core.cst$kw$now_DASH_playing);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_now_DASH_playing,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$note_DASH_icon], null),(cljs.core.truth_(track)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$artist.cljs$core$IFn$_invoke$arity$1(track)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(track))].join(''):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$em,"Nothing is playing"], null))], null);
});
airhead_cljs.components.player_section = (function airhead_cljs$components$player_section(){
var cursor = reagent.core.cursor(airhead_cljs.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null));
var url = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cursor) : cljs.core.deref.call(null,cursor)).call(null,cljs.core.cst$kw$stream_url);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_player,(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$controls,"controls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,url], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,url], null)], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.now_playing], null)], null);
});
airhead_cljs.components.upload_section = (function airhead_cljs$components$upload_section(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_upload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Upload"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"upload-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$name,"track"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Upload",cljs.core.cst$kw$on_DASH_click,airhead_cljs.requests.upload_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max,(100),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state)).call(null,cljs.core.cst$kw$upload_DASH_percentage)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state)).call(null,cljs.core.cst$kw$upload_DASH_status)], null)], null);
});
airhead_cljs.components.playlist_add_button = (function airhead_cljs$components$playlist_add_button(track){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$add,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_cljs.requests.playlist_add_BANG_(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(track));
})], null)], null);
});
airhead_cljs.components.playlist_remove_button = (function airhead_cljs$components$playlist_remove_button(track){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$remove,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return airhead_cljs.requests.playlist_remove_BANG_(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(track));
})], null)], null);
});
airhead_cljs.components.track_tr = (function airhead_cljs$components$track_tr(track,action_button){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(cljs.core.truth_(action_button)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_button,track], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(function (){var G__19148 = cljs.core.cst$kw$title;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__19148) : track.call(null,G__19148));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(function (){var G__19149 = cljs.core.cst$kw$artist;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__19149) : track.call(null,G__19149));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(function (){var G__19150 = cljs.core.cst$kw$album;
return (track.cljs$core$IFn$_invoke$arity$1 ? track.cljs$core$IFn$_invoke$arity$1(G__19150) : track.call(null,G__19150));
})()], null)], null);
});
airhead_cljs.components.tracks_table = (function airhead_cljs$components$tracks_table(tracks,action_button){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tracks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Artist"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Album"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__7684__auto__ = (function airhead_cljs$components$tracks_table_$_iter__19157(s__19158){
return (new cljs.core.LazySeq(null,(function (){
var s__19158__$1 = s__19158;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19158__$1);
if(temp__4657__auto__){
var s__19158__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19158__$2)){
var c__7682__auto__ = cljs.core.chunk_first(s__19158__$2);
var size__7683__auto__ = cljs.core.count(c__7682__auto__);
var b__19160 = cljs.core.chunk_buffer(size__7683__auto__);
if((function (){var i__19159 = (0);
while(true){
if((i__19159 < size__7683__auto__)){
var track = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7682__auto__,i__19159);
cljs.core.chunk_append(b__19160,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.track_tr,track,action_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)));

var G__19163 = (i__19159 + (1));
i__19159 = G__19163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19160),airhead_cljs$components$tracks_table_$_iter__19157(cljs.core.chunk_rest(s__19158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19160),null);
}
} else {
var track = cljs.core.first(s__19158__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.track_tr,track,action_button], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,track], null)),airhead_cljs$components$tracks_table_$_iter__19157(cljs.core.rest(s__19158__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7684__auto__(tracks);
})()], null)], null);
});
airhead_cljs.components.playlist_section = (function airhead_cljs$components$playlist_section(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_playlist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Playlist"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.tracks_table,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state)).call(null,cljs.core.cst$kw$playlist),airhead_cljs.components.playlist_remove_button], null)], null);
});
airhead_cljs.components.on_query_change = (function airhead_cljs$components$on_query_change(e){
return airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$query,e.target.value);
});
airhead_cljs.components.search_form = (function airhead_cljs$components$search_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_search,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"query"], null),"Search:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$id,"query",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state)).call(null,cljs.core.cst$kw$query),cljs.core.cst$kw$on_DASH_change,airhead_cljs.components.on_query_change], null)], null)], null)], null);
});
airhead_cljs.components.library_section = (function airhead_cljs$components$library_section(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section_SHARP_library,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Library"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.search_form], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.tracks_table,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state)).call(null,cljs.core.cst$kw$library),airhead_cljs.components.playlist_add_button], null)], null);
});
airhead_cljs.components.page_component = (function airhead_cljs$components$page_component(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.player_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.upload_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.playlist_section], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_cljs.components.library_section], null)], null);
});
