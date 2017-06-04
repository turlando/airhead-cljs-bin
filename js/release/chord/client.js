// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,ev.reason,cljs.core.cst$kw$code,ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((function (){var and__6981__auto__ = typeof require !== 'undefined';
if(and__6981__auto__){
try{return require("ws");
}catch (e18431){var e = e18431;
return false;
}} else {
return and__6981__auto__;
}
})())){
var ws = require("ws");
if(cljs.core.truth_(opts)){
return (new ws(url,cljs.core.clj__GT_js(opts)));
} else {
return (new ws(url));
}
} else {
return (new WebSocket(url));

}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 *    :ws-opts       - (optional) Other options to be passed to the websocket constructor (NodeJS only)
 *                                see https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18546 = arguments.length;
var i__8107__auto___18547 = (0);
while(true){
if((i__8107__auto___18547 < len__8106__auto___18546)){
args__8113__auto__.push((arguments[i__8107__auto___18547]));

var G__18548 = (i__8107__auto___18547 + (1));
i__8107__auto___18547 = G__18548;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__18436){
var vec__18437 = p__18436;
var map__18440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18437,(0),null);
var map__18440__$1 = ((((!((map__18440 == null)))?((((map__18440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18440):map__18440);
var opts = map__18440__$1;
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18440__$1,cljs.core.cst$kw$read_DASH_ch);
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18440__$1,cljs.core.cst$kw$write_DASH_ch);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18440__$1,cljs.core.cst$kw$format);
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18440__$1,cljs.core.cst$kw$ws_DASH_opts);
var web_socket = chord.client.create_ws(ws_url,ws_opts);
var map__18442 = chord.format.wrap_format(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read_DASH_ch,(function (){var or__6993__auto__ = read_ch;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})(),cljs.core.cst$kw$write_DASH_ch,(function (){var or__6993__auto__ = write_ch;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})()], null),opts);
var map__18442__$1 = ((((!((map__18442 == null)))?((((map__18442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18442):map__18442);
var read_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18442__$1,cljs.core.cst$kw$read_DASH_ch);
var write_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18442__$1,cljs.core.cst$kw$write_DASH_ch);
var open_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_(web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_(web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__18432_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(open_ch,p1__18432_SHARP_);
});})(web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts))
;

web_socket.onclose = ((function (web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__18433_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,p1__18433_SHARP_);
});})(web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts))
;

var ws_chan = chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(read_ch__$1,write_ch__$1,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_close,((function (web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
return web_socket.close();
});})(web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts))
], null)], 0));
var initial_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__15034__auto___18549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___18549,ws_chan,initial_ch,web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___18549,ws_chan,initial_ch,web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (state_18509){
var state_val_18510 = (state_18509[(1)]);
if((state_val_18510 === (7))){
var inst_18505 = (state_18509[(2)]);
var state_18509__$1 = state_18509;
var statearr_18511_18550 = state_18509__$1;
(statearr_18511_18550[(2)] = inst_18505);

(statearr_18511_18550[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (20))){
var state_18509__$1 = state_18509;
var statearr_18512_18551 = state_18509__$1;
(statearr_18512_18551[(2)] = null);

(statearr_18512_18551[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (1))){
var inst_18444 = false;
var state_18509__$1 = (function (){var statearr_18513 = state_18509;
(statearr_18513[(7)] = inst_18444);

return statearr_18513;
})();
var statearr_18514_18552 = state_18509__$1;
(statearr_18514_18552[(2)] = null);

(statearr_18514_18552[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (4))){
var inst_18457 = (state_18509[(8)]);
var inst_18459 = (state_18509[(9)]);
var inst_18457__$1 = (state_18509[(2)]);
var inst_18458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18457__$1,(0),null);
var inst_18459__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18457__$1,(1),null);
var inst_18460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18459__$1,open_ch);
var state_18509__$1 = (function (){var statearr_18515 = state_18509;
(statearr_18515[(10)] = inst_18458);

(statearr_18515[(8)] = inst_18457__$1);

(statearr_18515[(9)] = inst_18459__$1);

return statearr_18515;
})();
if(inst_18460){
var statearr_18516_18553 = state_18509__$1;
(statearr_18516_18553[(1)] = (5));

} else {
var statearr_18517_18554 = state_18509__$1;
(statearr_18517_18554[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (15))){
var inst_18490 = (state_18509[(2)]);
var state_18509__$1 = state_18509;
var statearr_18518_18555 = state_18509__$1;
(statearr_18518_18555[(2)] = inst_18490);

(statearr_18518_18555[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (21))){
var inst_18501 = (state_18509[(2)]);
var state_18509__$1 = state_18509;
var statearr_18519_18556 = state_18509__$1;
(statearr_18519_18556[(2)] = inst_18501);

(statearr_18519_18556[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (13))){
var state_18509__$1 = state_18509;
var statearr_18520_18557 = state_18509__$1;
(statearr_18520_18557[(2)] = null);

(statearr_18520_18557[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (6))){
var inst_18459 = (state_18509[(9)]);
var inst_18474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18459,close_ch);
var state_18509__$1 = state_18509;
if(inst_18474){
var statearr_18521_18558 = state_18509__$1;
(statearr_18521_18558[(1)] = (9));

} else {
var statearr_18522_18559 = state_18509__$1;
(statearr_18522_18559[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (17))){
var state_18509__$1 = state_18509;
var statearr_18523_18560 = state_18509__$1;
(statearr_18523_18560[(2)] = initial_ch);

(statearr_18523_18560[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (3))){
var inst_18507 = (state_18509[(2)]);
var state_18509__$1 = state_18509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18509__$1,inst_18507);
} else {
if((state_val_18510 === (12))){
var inst_18444 = (state_18509[(7)]);
var state_18509__$1 = state_18509;
if(cljs.core.truth_(inst_18444)){
var statearr_18524_18561 = state_18509__$1;
(statearr_18524_18561[(1)] = (16));

} else {
var statearr_18525_18562 = state_18509__$1;
(statearr_18525_18562[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (2))){
var inst_18453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18454 = [open_ch,close_ch];
var inst_18455 = (new cljs.core.PersistentVector(null,2,(5),inst_18453,inst_18454,null));
var state_18509__$1 = state_18509;
return cljs.core.async.ioc_alts_BANG_(state_18509__$1,(4),inst_18455);
} else {
if((state_val_18510 === (19))){
var inst_18458 = (state_18509[(10)]);
var state_18509__$1 = state_18509;
var statearr_18526_18563 = state_18509__$1;
(statearr_18526_18563[(2)] = inst_18458);

(statearr_18526_18563[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (11))){
var inst_18503 = (state_18509[(2)]);
var state_18509__$1 = state_18509;
var statearr_18527_18564 = state_18509__$1;
(statearr_18527_18564[(2)] = inst_18503);

(statearr_18527_18564[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (9))){
var inst_18457 = (state_18509[(8)]);
var inst_18480 = (state_18509[(11)]);
var inst_18479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18457,(0),null);
var inst_18480__$1 = chord.client.close_event__GT_maybe_error(inst_18479);
var state_18509__$1 = (function (){var statearr_18528 = state_18509;
(statearr_18528[(11)] = inst_18480__$1);

return statearr_18528;
})();
if(cljs.core.truth_(inst_18480__$1)){
var statearr_18529_18565 = state_18509__$1;
(statearr_18529_18565[(1)] = (12));

} else {
var statearr_18530_18566 = state_18509__$1;
(statearr_18530_18566[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (5))){
var inst_18457 = (state_18509[(8)]);
var inst_18465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18457,(0),null);
var inst_18466 = [cljs.core.cst$kw$ws_DASH_channel];
var inst_18467 = [ws_chan];
var inst_18468 = cljs.core.PersistentHashMap.fromArrays(inst_18466,inst_18467);
var state_18509__$1 = (function (){var statearr_18531 = state_18509;
(statearr_18531[(12)] = inst_18465);

return statearr_18531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18509__$1,(8),initial_ch,inst_18468);
} else {
if((state_val_18510 === (14))){
var inst_18493 = (state_18509[(2)]);
var inst_18494 = cljs.core.async.close_BANG_(ws_chan);
var inst_18495 = cljs.core.async.close_BANG_(initial_ch);
var state_18509__$1 = (function (){var statearr_18532 = state_18509;
(statearr_18532[(13)] = inst_18493);

(statearr_18532[(14)] = inst_18494);

return statearr_18532;
})();
var statearr_18533_18567 = state_18509__$1;
(statearr_18533_18567[(2)] = inst_18495);

(statearr_18533_18567[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (16))){
var state_18509__$1 = state_18509;
var statearr_18534_18568 = state_18509__$1;
(statearr_18534_18568[(2)] = read_ch__$1);

(statearr_18534_18568[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (10))){
var inst_18459 = (state_18509[(9)]);
var inst_18497 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18459,cljs.core.cst$kw$default);
var state_18509__$1 = state_18509;
if(inst_18497){
var statearr_18535_18569 = state_18509__$1;
(statearr_18535_18569[(1)] = (19));

} else {
var statearr_18536_18570 = state_18509__$1;
(statearr_18536_18570[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18510 === (18))){
var inst_18480 = (state_18509[(11)]);
var inst_18485 = (state_18509[(2)]);
var inst_18486 = [cljs.core.cst$kw$error];
var inst_18487 = [inst_18480];
var inst_18488 = cljs.core.PersistentHashMap.fromArrays(inst_18486,inst_18487);
var state_18509__$1 = state_18509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18509__$1,(15),inst_18485,inst_18488);
} else {
if((state_val_18510 === (8))){
var inst_18470 = (state_18509[(2)]);
var inst_18471 = cljs.core.async.close_BANG_(initial_ch);
var inst_18444 = true;
var state_18509__$1 = (function (){var statearr_18537 = state_18509;
(statearr_18537[(15)] = inst_18471);

(statearr_18537[(7)] = inst_18444);

(statearr_18537[(16)] = inst_18470);

return statearr_18537;
})();
var statearr_18538_18571 = state_18509__$1;
(statearr_18538_18571[(2)] = null);

(statearr_18538_18571[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15034__auto___18549,ws_chan,initial_ch,web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts))
;
return ((function (switch__14910__auto__,c__15034__auto___18549,ws_chan,initial_ch,web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts){
return (function() {
var chord$client$state_machine__14911__auto__ = null;
var chord$client$state_machine__14911__auto____0 = (function (){
var statearr_18542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18542[(0)] = chord$client$state_machine__14911__auto__);

(statearr_18542[(1)] = (1));

return statearr_18542;
});
var chord$client$state_machine__14911__auto____1 = (function (state_18509){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_18509);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e18543){if((e18543 instanceof Object)){
var ex__14914__auto__ = e18543;
var statearr_18544_18572 = state_18509;
(statearr_18544_18572[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18509);

return cljs.core.cst$kw$recur;
} else {
throw e18543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__18573 = state_18509;
state_18509 = G__18573;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
chord$client$state_machine__14911__auto__ = function(state_18509){
switch(arguments.length){
case 0:
return chord$client$state_machine__14911__auto____0.call(this);
case 1:
return chord$client$state_machine__14911__auto____1.call(this,state_18509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chord$client$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__14911__auto____0;
chord$client$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__14911__auto____1;
return chord$client$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___18549,ws_chan,initial_ch,web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts))
})();
var state__15036__auto__ = (function (){var statearr_18545 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_18545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___18549);

return statearr_18545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___18549,ws_chan,initial_ch,web_socket,map__18442,map__18442__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__18437,map__18440,map__18440__$1,opts,read_ch,write_ch,format,ws_opts))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq18434){
var G__18435 = cljs.core.first(seq18434);
var seq18434__$1 = cljs.core.next(seq18434);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__18435,seq18434__$1);
});

