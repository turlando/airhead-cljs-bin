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
chord.format.formatter_STAR_ = (function (){var method_table__7926__auto__ = (function (){var G__18384 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18384) : cljs.core.atom.call(null,G__18384));
})();
var prefer_table__7927__auto__ = (function (){var G__18385 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18385) : cljs.core.atom.call(null,G__18385));
})();
var method_cache__7928__auto__ = (function (){var G__18386 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18386) : cljs.core.atom.call(null,G__18386));
})();
var cached_hierarchy__7929__auto__ = (function (){var G__18387 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18387) : cljs.core.atom.call(null,G__18387));
})();
var hierarchy__7930__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("chord.format","formatter*"),cljs.core.cst$kw$format,cljs.core.cst$kw$default,hierarchy__7930__auto__,method_table__7926__auto__,prefer_table__7927__auto__,method_cache__7928__auto__,cached_hierarchy__7929__auto__));
})();
}
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$edn,(function (_){
if(typeof chord.format.t_chord$format18388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format18388 = (function (_,meta18389){
this._ = _;
this.meta18389 = meta18389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format18388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18390,meta18389__$1){
var self__ = this;
var _18390__$1 = this;
return (new chord.format.t_chord$format18388(self__._,meta18389__$1));
});

chord.format.t_chord$format18388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18390){
var self__ = this;
var _18390__$1 = this;
return self__.meta18389;
});

chord.format.t_chord$format18388.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format18388.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0));
});

chord.format.t_chord$format18388.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string(s);
});

chord.format.t_chord$format18388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta18389], null);
});

chord.format.t_chord$format18388.cljs$lang$type = true;

chord.format.t_chord$format18388.cljs$lang$ctorStr = "chord.format/t_chord$format18388";

chord.format.t_chord$format18388.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format18388");
});

chord.format.__GT_t_chord$format18388 = (function chord$format$__GT_t_chord$format18388(___$1,meta18389){
return (new chord.format.t_chord$format18388(___$1,meta18389));
});

}

return (new chord.format.t_chord$format18388(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$json,(function (_){
if(typeof chord.format.t_chord$format18391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format18391 = (function (_,meta18392){
this._ = _;
this.meta18392 = meta18392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format18391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18393,meta18392__$1){
var self__ = this;
var _18393__$1 = this;
return (new chord.format.t_chord$format18391(self__._,meta18392__$1));
});

chord.format.t_chord$format18391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18393){
var self__ = this;
var _18393__$1 = this;
return self__.meta18392;
});

chord.format.t_chord$format18391.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format18391.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
var G__18394 = cljs.core.clj__GT_js(obj);
return JSON.stringify(G__18394);
});

chord.format.t_chord$format18391.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
});

chord.format.t_chord$format18391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta18392], null);
});

chord.format.t_chord$format18391.cljs$lang$type = true;

chord.format.t_chord$format18391.cljs$lang$ctorStr = "chord.format/t_chord$format18391";

chord.format.t_chord$format18391.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format18391");
});

chord.format.__GT_t_chord$format18391 = (function chord$format$__GT_t_chord$format18391(___$1,meta18392){
return (new chord.format.t_chord$format18391(___$1,meta18392));
});

}

return (new chord.format.t_chord$format18391(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$json_DASH_kw,(function (opts){
var json_formatter = (function (){var G__18395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$format,cljs.core.cst$kw$json);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__18395) : chord.format.formatter_STAR_.call(null,G__18395));
})();
if(typeof chord.format.t_chord$format18396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format18396 = (function (opts,json_formatter,meta18397){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta18397 = meta18397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format18396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_18398,meta18397__$1){
var self__ = this;
var _18398__$1 = this;
return (new chord.format.t_chord$format18396(self__.opts,self__.json_formatter,meta18397__$1));
});})(json_formatter))
;

chord.format.t_chord$format18396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_18398){
var self__ = this;
var _18398__$1 = this;
return self__.meta18397;
});})(json_formatter))
;

chord.format.t_chord$format18396.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format18396.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze(self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format18396.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys(chord.format.thaw(self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format18396.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opts,cljs.core.cst$sym$json_DASH_formatter,cljs.core.cst$sym$meta18397], null);
});})(json_formatter))
;

chord.format.t_chord$format18396.cljs$lang$type = true;

chord.format.t_chord$format18396.cljs$lang$ctorStr = "chord.format/t_chord$format18396";

chord.format.t_chord$format18396.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format18396");
});})(json_formatter))
;

chord.format.__GT_t_chord$format18396 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format18396(opts__$1,json_formatter__$1,meta18397){
return (new chord.format.t_chord$format18396(opts__$1,json_formatter__$1,meta18397));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format18396(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$transit_DASH_json,(function (_){
if(typeof chord.format.t_chord$format18399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format18399 = (function (_,meta18400){
this._ = _;
this.meta18400 = meta18400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format18399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18401,meta18400__$1){
var self__ = this;
var _18401__$1 = this;
return (new chord.format.t_chord$format18399(self__._,meta18400__$1));
});

chord.format.t_chord$format18399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18401){
var self__ = this;
var _18401__$1 = this;
return self__.meta18400;
});

chord.format.t_chord$format18399.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format18399.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),obj);
});

chord.format.t_chord$format18399.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),s);
});

chord.format.t_chord$format18399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta18400], null);
});

chord.format.t_chord$format18399.cljs$lang$type = true;

chord.format.t_chord$format18399.cljs$lang$ctorStr = "chord.format/t_chord$format18399";

chord.format.t_chord$format18399.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format18399");
});

chord.format.__GT_t_chord$format18399 = (function chord$format$__GT_t_chord$format18399(___$1,meta18400){
return (new chord.format.t_chord$format18399(___$1,meta18400));
});

}

return (new chord.format.t_chord$format18399(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$str,(function (_){
if(typeof chord.format.t_chord$format18402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format18402 = (function (_,meta18403){
this._ = _;
this.meta18403 = meta18403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format18402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18404,meta18403__$1){
var self__ = this;
var _18404__$1 = this;
return (new chord.format.t_chord$format18402(self__._,meta18403__$1));
});

chord.format.t_chord$format18402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18404){
var self__ = this;
var _18404__$1 = this;
return self__.meta18403;
});

chord.format.t_chord$format18402.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL;

chord.format.t_chord$format18402.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format18402.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format18402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$meta18403], null);
});

chord.format.t_chord$format18402.cljs$lang$type = true;

chord.format.t_chord$format18402.cljs$lang$ctorStr = "chord.format/t_chord$format18402";

chord.format.t_chord$format18402.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.format/t_chord$format18402");
});

chord.format.__GT_t_chord$format18402 = (function chord$format$__GT_t_chord$format18402(___$1,meta18403){
return (new chord.format.t_chord$format18402(___$1,meta18403));
});

}

return (new chord.format.t_chord$format18402(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
var G__18406 = (((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,opts], null):opts);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__18406) : chord.format.formatter_STAR_.call(null,G__18406));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__18408,p__18409){
var map__18418 = p__18408;
var map__18418__$1 = ((((!((map__18418 == null)))?((((map__18418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18418):map__18418);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18418__$1,cljs.core.cst$kw$read_DASH_ch);
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18418__$1,cljs.core.cst$kw$write_DASH_ch);
var map__18419 = p__18409;
var map__18419__$1 = ((((!((map__18419 == null)))?((((map__18419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18419):map__18419);
var opts = map__18419__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,cljs.core.cst$kw$format);
var fmtr = chord.format.formatter((cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$format,cljs.core.cst$kw$edn], null)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read_DASH_ch,cljs.core.async.map_LT_(((function (fmtr,map__18418,map__18418__$1,read_ch,write_ch,map__18419,map__18419__$1,opts,format){
return (function (p__18422){
var map__18423 = p__18422;
var map__18423__$1 = ((((!((map__18423 == null)))?((((map__18423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18423):map__18423);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18423__$1,cljs.core.cst$kw$message);
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,chord.format.thaw(fmtr,message)], null);
} else {
return null;
}
}catch (e18425){if((e18425 instanceof Error)){
var e = e18425;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_format,cljs.core.cst$kw$cause,e,cljs.core.cst$kw$invalid_DASH_msg,message], null);
} else {
throw e18425;

}
}});})(fmtr,map__18418,map__18418__$1,read_ch,write_ch,map__18419,map__18419__$1,opts,format))
,read_ch),cljs.core.cst$kw$write_DASH_ch,cljs.core.async.map_GT_(((function (fmtr,map__18418,map__18418__$1,read_ch,write_ch,map__18419,map__18419__$1,opts,format){
return (function (p1__18407_SHARP_){
if(cljs.core.truth_(p1__18407_SHARP_)){
return chord.format.freeze(fmtr,p1__18407_SHARP_);
} else {
return null;
}
});})(fmtr,map__18418,map__18418__$1,read_ch,write_ch,map__18419,map__18419__$1,opts,format))
,write_ch)], null);
});
