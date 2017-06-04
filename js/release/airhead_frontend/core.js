// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_frontend.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('airhead_frontend.components');
airhead_frontend.core.mount_root = (function airhead_frontend$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airhead_frontend.components.page_component], null),document.getElementById("app"));
});
airhead_frontend.core.init_BANG_ = (function airhead_frontend$core$init_BANG_(){
return airhead_frontend.core.mount_root();
});
