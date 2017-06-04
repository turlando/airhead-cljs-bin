// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__18677__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18678__i = 0, G__18678__a = new Array(arguments.length -  0);
while (G__18678__i < G__18678__a.length) {G__18678__a[G__18678__i] = arguments[G__18678__i + 0]; ++G__18678__i;}
  args = new cljs.core.IndexedSeq(G__18678__a,0,null);
} 
return G__18677__delegate.call(this,args);};
G__18677.cljs$lang$maxFixedArity = 0;
G__18677.cljs$lang$applyTo = (function (arglist__18679){
var args = cljs.core.seq(arglist__18679);
return G__18677__delegate(args);
});
G__18677.cljs$core$IFn$_invoke$arity$variadic = G__18677__delegate;
return G__18677;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18680__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18681__i = 0, G__18681__a = new Array(arguments.length -  0);
while (G__18681__i < G__18681__a.length) {G__18681__a[G__18681__i] = arguments[G__18681__i + 0]; ++G__18681__i;}
  args = new cljs.core.IndexedSeq(G__18681__a,0,null);
} 
return G__18680__delegate.call(this,args);};
G__18680.cljs$lang$maxFixedArity = 0;
G__18680.cljs$lang$applyTo = (function (arglist__18682){
var args = cljs.core.seq(arglist__18682);
return G__18680__delegate(args);
});
G__18680.cljs$core$IFn$_invoke$arity$variadic = G__18680__delegate;
return G__18680;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
