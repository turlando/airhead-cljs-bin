// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_frontend.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
airhead_frontend.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"",cljs.core.cst$kw$greet_message,"",cljs.core.cst$kw$stream_url,null], null),cljs.core.cst$kw$playlist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$now_DASH_playing,null,cljs.core.cst$kw$library,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$sort_DASH_field,cljs.core.cst$kw$title,cljs.core.cst$kw$ascending,true,cljs.core.cst$kw$upload_DASH_percentage,(0),cljs.core.cst$kw$upload_DASH_response,null], null));
airhead_frontend.state.update_state_BANG_ = (function airhead_frontend$state$update_state_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(airhead_frontend.state.app_state,cljs.core.assoc,k,v);
});
