// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__7661__auto__ = (((_ == null))?null:_);
var m__7662__auto__ = (chord.format.freeze[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__7662__auto__.call(null,_,obj));
} else {
var m__7662__auto____$1 = (chord.format.freeze["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(_,obj) : m__7662__auto____$1.call(null,_,obj));
} else {
throw cljs.core.missing_protocol("ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__7661__auto__ = (((_ == null))?null:_);
var m__7662__auto__ = (chord.format.thaw[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__7662__auto__.call(null,_,s));
} else {
var m__7662__auto____$1 = (chord.format.thaw["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__7662__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__7926__auto__ = (function (){var G__14681 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14681) : cljs.core.atom.call(null,G__14681));
})();
var prefer_table__7927__auto__ = (function (){var G__14682 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14682) : cljs.core.atom.call(null,G__14682));
})();
var method_cache__7928__auto__ = (function (){var G__14683 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14683) : cljs.core.atom.call(null,G__14683));
})();
var cached_hierarchy__7929__auto__ = (function (){var G__14684 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14684) : cljs.core.atom.call(null,G__14684));
})();
var hierarchy__7930__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("chord.format","formatter*"),cljs.core.cst$kw$format,cljs.core.cst$kw$default,hierarchy__7930__auto__,method_table__7926__auto__,prefer_table__7927__auto__,method_cache__7928__auto__,cached_hierarchy__7929__auto__));
})();
}
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$edn,(function (_){
if(typeof chord.format.t_chord$format14685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14685 = (function (_,meta14686){
this._ = _;
this.meta14686 = meta14686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14687,meta14686__$1){
var self__ = this;
var _14687__$1 = this;
return (new chord.format.t_chord$format14685(self__._,meta14686__$1));
});

chord.format.t_chord$format14685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14687){
var self__ = this;
var _14687__$1 = this;
return self__.meta14686;
});

chord.format.t_chord$format14685.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format14685.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0));
});

chord.format.t_chord$format14685.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string(s);
});

chord.format.t_chord$format14685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta14686], null);
});

chord.format.t_chord$format14685.cljs$lang$type = true;

chord.format.t_chord$format14685.cljs$lang$ctorStr = "chord.format/t_chord$format14685";

chord.format.t_chord$format14685.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format14685");
});

chord.format.__GT_t_chord$format14685 = (function chord$format$__GT_t_chord$format14685(___$1,meta14686){
return (new chord.format.t_chord$format14685(___$1,meta14686));
});

}

return (new chord.format.t_chord$format14685(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$json,(function (_){
if(typeof chord.format.t_chord$format14688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14688 = (function (_,meta14689){
this._ = _;
this.meta14689 = meta14689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14690,meta14689__$1){
var self__ = this;
var _14690__$1 = this;
return (new chord.format.t_chord$format14688(self__._,meta14689__$1));
});

chord.format.t_chord$format14688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14690){
var self__ = this;
var _14690__$1 = this;
return self__.meta14689;
});

chord.format.t_chord$format14688.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format14688.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
var G__14691 = cljs.core.clj__GT_js(obj);
return JSON.stringify(G__14691);
});

chord.format.t_chord$format14688.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
});

chord.format.t_chord$format14688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta14689], null);
});

chord.format.t_chord$format14688.cljs$lang$type = true;

chord.format.t_chord$format14688.cljs$lang$ctorStr = "chord.format/t_chord$format14688";

chord.format.t_chord$format14688.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format14688");
});

chord.format.__GT_t_chord$format14688 = (function chord$format$__GT_t_chord$format14688(___$1,meta14689){
return (new chord.format.t_chord$format14688(___$1,meta14689));
});

}

return (new chord.format.t_chord$format14688(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$json_DASH_kw,(function (opts){
var json_formatter = (function (){var G__14692 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$format,cljs.core.cst$kw$json);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__14692) : chord.format.formatter_STAR_.call(null,G__14692));
})();
if(typeof chord.format.t_chord$format14693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14693 = (function (opts,json_formatter,meta14694){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta14694 = meta14694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_14695,meta14694__$1){
var self__ = this;
var _14695__$1 = this;
return (new chord.format.t_chord$format14693(self__.opts,self__.json_formatter,meta14694__$1));
});})(json_formatter))
;

chord.format.t_chord$format14693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_14695){
var self__ = this;
var _14695__$1 = this;
return self__.meta14694;
});})(json_formatter))
;

chord.format.t_chord$format14693.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format14693.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze(self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format14693.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys(chord.format.thaw(self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format14693.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opts,cljs.core.cst$sym$json_DASH_formatter,cljs.core.cst$sym$meta14694], null);
});})(json_formatter))
;

chord.format.t_chord$format14693.cljs$lang$type = true;

chord.format.t_chord$format14693.cljs$lang$ctorStr = "chord.format/t_chord$format14693";

chord.format.t_chord$format14693.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format14693");
});})(json_formatter))
;

chord.format.__GT_t_chord$format14693 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format14693(opts__$1,json_formatter__$1,meta14694){
return (new chord.format.t_chord$format14693(opts__$1,json_formatter__$1,meta14694));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format14693(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$transit_DASH_json,(function (_){
if(typeof chord.format.t_chord$format14696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14696 = (function (_,meta14697){
this._ = _;
this.meta14697 = meta14697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14698,meta14697__$1){
var self__ = this;
var _14698__$1 = this;
return (new chord.format.t_chord$format14696(self__._,meta14697__$1));
});

chord.format.t_chord$format14696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14698){
var self__ = this;
var _14698__$1 = this;
return self__.meta14697;
});

chord.format.t_chord$format14696.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format14696.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),obj);
});

chord.format.t_chord$format14696.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),s);
});

chord.format.t_chord$format14696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta14697], null);
});

chord.format.t_chord$format14696.cljs$lang$type = true;

chord.format.t_chord$format14696.cljs$lang$ctorStr = "chord.format/t_chord$format14696";

chord.format.t_chord$format14696.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format14696");
});

chord.format.__GT_t_chord$format14696 = (function chord$format$__GT_t_chord$format14696(___$1,meta14697){
return (new chord.format.t_chord$format14696(___$1,meta14697));
});

}

return (new chord.format.t_chord$format14696(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$str,(function (_){
if(typeof chord.format.t_chord$format14699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format14699 = (function (_,meta14700){
this._ = _;
this.meta14700 = meta14700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format14699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14701,meta14700__$1){
var self__ = this;
var _14701__$1 = this;
return (new chord.format.t_chord$format14699(self__._,meta14700__$1));
});

chord.format.t_chord$format14699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14701){
var self__ = this;
var _14701__$1 = this;
return self__.meta14700;
});

chord.format.t_chord$format14699.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format14699.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format14699.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format14699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta14700], null);
});

chord.format.t_chord$format14699.cljs$lang$type = true;

chord.format.t_chord$format14699.cljs$lang$ctorStr = "chord.format/t_chord$format14699";

chord.format.t_chord$format14699.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format14699");
});

chord.format.__GT_t_chord$format14699 = (function chord$format$__GT_t_chord$format14699(___$1,meta14700){
return (new chord.format.t_chord$format14699(___$1,meta14700));
});

}

return (new chord.format.t_chord$format14699(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
var G__14703 = (((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,opts], null):opts);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__14703) : chord.format.formatter_STAR_.call(null,G__14703));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__14705,p__14706){
var map__14715 = p__14705;
var map__14715__$1 = ((((!((map__14715 == null)))?((((map__14715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14715):map__14715);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14715__$1,cljs.core.cst$kw$read_DASH_ch);
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14715__$1,cljs.core.cst$kw$write_DASH_ch);
var map__14716 = p__14706;
var map__14716__$1 = ((((!((map__14716 == null)))?((((map__14716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14716):map__14716);
var opts = map__14716__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14716__$1,cljs.core.cst$kw$format);
var fmtr = chord.format.formatter((cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,cljs.core.cst$kw$edn], null)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read_DASH_ch,cljs.core.async.map_LT_(((function (fmtr,map__14715,map__14715__$1,read_ch,write_ch,map__14716,map__14716__$1,opts,format){
return (function (p__14719){
var map__14720 = p__14719;
var map__14720__$1 = ((((!((map__14720 == null)))?((((map__14720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14720):map__14720);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14720__$1,cljs.core.cst$kw$message);
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,chord.format.thaw(fmtr,message)], null);
} else {
return null;
}
}catch (e14722){if((e14722 instanceof Error)){
var e = e14722;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_format,cljs.core.cst$kw$cause,e,cljs.core.cst$kw$invalid_DASH_msg,message], null);
} else {
throw e14722;

}
}});})(fmtr,map__14715,map__14715__$1,read_ch,write_ch,map__14716,map__14716__$1,opts,format))
,read_ch),cljs.core.cst$kw$write_DASH_ch,cljs.core.async.map_GT_(((function (fmtr,map__14715,map__14715__$1,read_ch,write_ch,map__14716,map__14716__$1,opts,format){
return (function (p1__14704_SHARP_){
if(cljs.core.truth_(p1__14704_SHARP_)){
return chord.format.freeze(fmtr,p1__14704_SHARP_);
} else {
return null;
}
});})(fmtr,map__14715,map__14715__$1,read_ch,write_ch,map__14716,map__14716__$1,opts,format))
,write_ch)], null);
});
