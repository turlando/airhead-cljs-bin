// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__11948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto__){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto__){
return (function (state_14639){
var state_val_14640 = (state_14639[(1)]);
if((state_val_14640 === (1))){
var state_14639__$1 = state_14639;
var statearr_14641_14656 = state_14639__$1;
(statearr_14641_14656[(2)] = null);

(statearr_14641_14656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14640 === (2))){
var state_14639__$1 = state_14639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14639__$1,(4),ch);
} else {
if((state_val_14640 === (3))){
var inst_14637 = (state_14639[(2)]);
var state_14639__$1 = state_14639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14639__$1,inst_14637);
} else {
if((state_val_14640 === (4))){
var inst_14629 = (state_14639[(7)]);
var inst_14629__$1 = (state_14639[(2)]);
var state_14639__$1 = (function (){var statearr_14642 = state_14639;
(statearr_14642[(7)] = inst_14629__$1);

return statearr_14642;
})();
if(cljs.core.truth_(inst_14629__$1)){
var statearr_14643_14657 = state_14639__$1;
(statearr_14643_14657[(1)] = (5));

} else {
var statearr_14644_14658 = state_14639__$1;
(statearr_14644_14658[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14640 === (5))){
var inst_14629 = (state_14639[(7)]);
var inst_14631 = ws.send(inst_14629);
var state_14639__$1 = (function (){var statearr_14645 = state_14639;
(statearr_14645[(8)] = inst_14631);

return statearr_14645;
})();
var statearr_14646_14659 = state_14639__$1;
(statearr_14646_14659[(2)] = null);

(statearr_14646_14659[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14640 === (6))){
var state_14639__$1 = state_14639;
var statearr_14647_14660 = state_14639__$1;
(statearr_14647_14660[(2)] = null);

(statearr_14647_14660[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14640 === (7))){
var inst_14635 = (state_14639[(2)]);
var state_14639__$1 = state_14639;
var statearr_14648_14661 = state_14639__$1;
(statearr_14648_14661[(2)] = inst_14635);

(statearr_14648_14661[(1)] = (3));


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
});})(c__11948__auto__))
;
return ((function (switch__11871__auto__,c__11948__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__11872__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__11872__auto____0 = (function (){
var statearr_14652 = [null,null,null,null,null,null,null,null,null];
(statearr_14652[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__11872__auto__);

(statearr_14652[(1)] = (1));

return statearr_14652;
});
var chord$channels$write_to_ws_BANG__$_state_machine__11872__auto____1 = (function (state_14639){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_14639);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e14653){if((e14653 instanceof Object)){
var ex__11875__auto__ = e14653;
var statearr_14654_14662 = state_14639;
(statearr_14654_14662[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14639);

return cljs.core.cst$kw$recur;
} else {
throw e14653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__14663 = state_14639;
state_14639 = G__14663;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__11872__auto__ = function(state_14639){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__11872__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__11872__auto____1.call(this,state_14639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chord$channels$write_to_ws_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__11872__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__11872__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto__))
})();
var state__11950__auto__ = (function (){var statearr_14655 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_14655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto__);

return statearr_14655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto__))
);

return c__11948__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__8113__auto__ = [];
var len__8106__auto___14676 = arguments.length;
var i__8107__auto___14677 = (0);
while(true){
if((i__8107__auto___14677 < len__8106__auto___14676)){
args__8113__auto__.push((arguments[i__8107__auto___14677]));

var G__14678 = (i__8107__auto___14677 + (1));
i__8107__auto___14677 = G__14678;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((2) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8114__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__14667){
var vec__14668 = p__14667;
var map__14671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14668,(0),null);
var map__14671__$1 = ((((!((map__14671 == null)))?((((map__14671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14671):map__14671);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14671__$1,cljs.core.cst$kw$on_DASH_close);
if(typeof chord.channels.t_chord$channels14673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels14673 = (function (read_ch,write_ch,p__14667,vec__14668,map__14671,on_close,meta14674){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__14667 = p__14667;
this.vec__14668 = vec__14668;
this.map__14671 = map__14671;
this.on_close = on_close;
this.meta14674 = meta14674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels14673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function (_14675,meta14674__$1){
var self__ = this;
var _14675__$1 = this;
return (new chord.channels.t_chord$channels14673(self__.read_ch,self__.write_ch,self__.p__14667,self__.vec__14668,self__.map__14671,self__.on_close,meta14674__$1));
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

chord.channels.t_chord$channels14673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function (_14675){
var self__ = this;
var _14675__$1 = this;
return self__.meta14674;
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

chord.channels.t_chord$channels14673.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels14673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

chord.channels.t_chord$channels14673.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels14673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

chord.channels.t_chord$channels14673.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels14673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return (self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));
} else {
return null;
}
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

chord.channels.t_chord$channels14673.getBasis = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read_DASH_ch,cljs.core.cst$sym$write_DASH_ch,cljs.core.cst$sym$p__14667,cljs.core.cst$sym$vec__14668,cljs.core.cst$sym$map__14671,cljs.core.cst$sym$on_DASH_close,cljs.core.cst$sym$meta14674], null);
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

chord.channels.t_chord$channels14673.cljs$lang$type = true;

chord.channels.t_chord$channels14673.cljs$lang$ctorStr = "chord.channels/t_chord$channels14673";

chord.channels.t_chord$channels14673.cljs$lang$ctorPrWriter = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.channels/t_chord$channels14673");
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

chord.channels.__GT_t_chord$channels14673 = ((function (vec__14668,map__14671,map__14671__$1,on_close){
return (function chord$channels$__GT_t_chord$channels14673(read_ch__$1,write_ch__$1,p__14667__$1,vec__14668__$1,map__14671__$2,on_close__$1,meta14674){
return (new chord.channels.t_chord$channels14673(read_ch__$1,write_ch__$1,p__14667__$1,vec__14668__$1,map__14671__$2,on_close__$1,meta14674));
});})(vec__14668,map__14671,map__14671__$1,on_close))
;

}

return (new chord.channels.t_chord$channels14673(read_ch,write_ch,p__14667,vec__14668,map__14671__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq14664){
var G__14665 = cljs.core.first(seq14664);
var seq14664__$1 = cljs.core.next(seq14664);
var G__14666 = cljs.core.first(seq14664__$1);
var seq14664__$2 = cljs.core.next(seq14664__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__14665,G__14666,seq14664__$2);
});

