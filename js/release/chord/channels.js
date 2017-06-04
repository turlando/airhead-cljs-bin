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
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__){
return (function (state_18316){
var state_val_18317 = (state_18316[(1)]);
if((state_val_18317 === (1))){
var state_18316__$1 = state_18316;
var statearr_18318_18333 = state_18316__$1;
(statearr_18318_18333[(2)] = null);

(statearr_18318_18333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18317 === (2))){
var state_18316__$1 = state_18316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18316__$1,(4),ch);
} else {
if((state_val_18317 === (3))){
var inst_18314 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18316__$1,inst_18314);
} else {
if((state_val_18317 === (4))){
var inst_18306 = (state_18316[(7)]);
var inst_18306__$1 = (state_18316[(2)]);
var state_18316__$1 = (function (){var statearr_18319 = state_18316;
(statearr_18319[(7)] = inst_18306__$1);

return statearr_18319;
})();
if(cljs.core.truth_(inst_18306__$1)){
var statearr_18320_18334 = state_18316__$1;
(statearr_18320_18334[(1)] = (5));

} else {
var statearr_18321_18335 = state_18316__$1;
(statearr_18321_18335[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18317 === (5))){
var inst_18306 = (state_18316[(7)]);
var inst_18308 = ws.send(inst_18306);
var state_18316__$1 = (function (){var statearr_18322 = state_18316;
(statearr_18322[(8)] = inst_18308);

return statearr_18322;
})();
var statearr_18323_18336 = state_18316__$1;
(statearr_18323_18336[(2)] = null);

(statearr_18323_18336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18317 === (6))){
var state_18316__$1 = state_18316;
var statearr_18324_18337 = state_18316__$1;
(statearr_18324_18337[(2)] = null);

(statearr_18324_18337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18317 === (7))){
var inst_18312 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
var statearr_18325_18338 = state_18316__$1;
(statearr_18325_18338[(2)] = inst_18312);

(statearr_18325_18338[(1)] = (3));


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
});})(c__15034__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__14911__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_18329 = [null,null,null,null,null,null,null,null,null];
(statearr_18329[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__14911__auto__);

(statearr_18329[(1)] = (1));

return statearr_18329;
});
var chord$channels$write_to_ws_BANG__$_state_machine__14911__auto____1 = (function (state_18316){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_18316);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e18330){if((e18330 instanceof Object)){
var ex__14914__auto__ = e18330;
var statearr_18331_18339 = state_18316;
(statearr_18331_18339[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18316);

return cljs.core.cst$kw$recur;
} else {
throw e18330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__18340 = state_18316;
state_18316 = G__18340;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__14911__auto__ = function(state_18316){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__14911__auto____1.call(this,state_18316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chord$channels$write_to_ws_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__14911__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__14911__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__))
})();
var state__15036__auto__ = (function (){var statearr_18332 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_18332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_18332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__))
);

return c__15034__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18353 = arguments.length;
var i__8107__auto___18354 = (0);
while(true){
if((i__8107__auto___18354 < len__8106__auto___18353)){
args__8113__auto__.push((arguments[i__8107__auto___18354]));

var G__18355 = (i__8107__auto___18354 + (1));
i__8107__auto___18354 = G__18355;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((2) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8114__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__18344){
var vec__18345 = p__18344;
var map__18348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345,(0),null);
var map__18348__$1 = ((((!((map__18348 == null)))?((((map__18348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18348):map__18348);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18348__$1,cljs.core.cst$kw$on_DASH_close);
if(typeof chord.channels.t_chord$channels18350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels18350 = (function (read_ch,write_ch,p__18344,vec__18345,map__18348,on_close,meta18351){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__18344 = p__18344;
this.vec__18345 = vec__18345;
this.map__18348 = map__18348;
this.on_close = on_close;
this.meta18351 = meta18351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels18350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__18345,map__18348,map__18348__$1,on_close){
return (function (_18352,meta18351__$1){
var self__ = this;
var _18352__$1 = this;
return (new chord.channels.t_chord$channels18350(self__.read_ch,self__.write_ch,self__.p__18344,self__.vec__18345,self__.map__18348,self__.on_close,meta18351__$1));
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

chord.channels.t_chord$channels18350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__18345,map__18348,map__18348__$1,on_close){
return (function (_18352){
var self__ = this;
var _18352__$1 = this;
return self__.meta18351;
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

chord.channels.t_chord$channels18350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels18350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__18345,map__18348,map__18348__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

chord.channels.t_chord$channels18350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels18350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__18345,map__18348,map__18348__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

chord.channels.t_chord$channels18350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chord.channels.t_chord$channels18350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__18345,map__18348,map__18348__$1,on_close){
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
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

chord.channels.t_chord$channels18350.getBasis = ((function (vec__18345,map__18348,map__18348__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read_DASH_ch,cljs.core.cst$sym$write_DASH_ch,cljs.core.cst$sym$p__18344,cljs.core.cst$sym$vec__18345,cljs.core.cst$sym$map__18348,cljs.core.cst$sym$on_DASH_close,cljs.core.cst$sym$meta18351], null);
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

chord.channels.t_chord$channels18350.cljs$lang$type = true;

chord.channels.t_chord$channels18350.cljs$lang$ctorStr = "chord.channels/t_chord$channels18350";

chord.channels.t_chord$channels18350.cljs$lang$ctorPrWriter = ((function (vec__18345,map__18348,map__18348__$1,on_close){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"chord.channels/t_chord$channels18350");
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

chord.channels.__GT_t_chord$channels18350 = ((function (vec__18345,map__18348,map__18348__$1,on_close){
return (function chord$channels$__GT_t_chord$channels18350(read_ch__$1,write_ch__$1,p__18344__$1,vec__18345__$1,map__18348__$2,on_close__$1,meta18351){
return (new chord.channels.t_chord$channels18350(read_ch__$1,write_ch__$1,p__18344__$1,vec__18345__$1,map__18348__$2,on_close__$1,meta18351));
});})(vec__18345,map__18348,map__18348__$1,on_close))
;

}

return (new chord.channels.t_chord$channels18350(read_ch,write_ch,p__18344,vec__18345,map__18348__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq18341){
var G__18342 = cljs.core.first(seq18341);
var seq18341__$1 = cljs.core.next(seq18341);
var G__18343 = cljs.core.first(seq18341__$1);
var seq18341__$2 = cljs.core.next(seq18341__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__18342,G__18343,seq18341__$2);
});

