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
}catch (e14728){var e = e14728;
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
var len__8106__auto___14843 = arguments.length;
var i__8107__auto___14844 = (0);
while(true){
if((i__8107__auto___14844 < len__8106__auto___14843)){
args__8113__auto__.push((arguments[i__8107__auto___14844]));

var G__14845 = (i__8107__auto___14844 + (1));
i__8107__auto___14844 = G__14845;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__14733){
var vec__14734 = p__14733;
var map__14737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14734,(0),null);
var map__14737__$1 = ((((!((map__14737 == null)))?((((map__14737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14737):map__14737);
var opts = map__14737__$1;
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14737__$1,cljs.core.cst$kw$read_DASH_ch);
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14737__$1,cljs.core.cst$kw$write_DASH_ch);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14737__$1,cljs.core.cst$kw$format);
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14737__$1,cljs.core.cst$kw$ws_DASH_opts);
var web_socket = chord.client.create_ws(ws_url,ws_opts);
var map__14739 = chord.format.wrap_format(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read_DASH_ch,(function (){var or__6993__auto__ = read_ch;
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
var map__14739__$1 = ((((!((map__14739 == null)))?((((map__14739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14739):map__14739);
var read_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14739__$1,cljs.core.cst$kw$read_DASH_ch);
var write_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14739__$1,cljs.core.cst$kw$write_DASH_ch);
var open_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_(web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_(web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__14729_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(open_ch,p1__14729_SHARP_);
});})(web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts))
;

web_socket.onclose = ((function (web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (p1__14730_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,p1__14730_SHARP_);
});})(web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts))
;

var ws_chan = chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(read_ch__$1,write_ch__$1,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_close,((function (web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
return web_socket.close();
});})(web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts))
], null)], 0));
var initial_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__11948__auto___14846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto___14846,ws_chan,initial_ch,web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto___14846,ws_chan,initial_ch,web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts){
return (function (state_14806){
var state_val_14807 = (state_14806[(1)]);
if((state_val_14807 === (7))){
var inst_14802 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14808_14847 = state_14806__$1;
(statearr_14808_14847[(2)] = inst_14802);

(statearr_14808_14847[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (20))){
var state_14806__$1 = state_14806;
var statearr_14809_14848 = state_14806__$1;
(statearr_14809_14848[(2)] = null);

(statearr_14809_14848[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (1))){
var inst_14741 = false;
var state_14806__$1 = (function (){var statearr_14810 = state_14806;
(statearr_14810[(7)] = inst_14741);

return statearr_14810;
})();
var statearr_14811_14849 = state_14806__$1;
(statearr_14811_14849[(2)] = null);

(statearr_14811_14849[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (4))){
var inst_14756 = (state_14806[(8)]);
var inst_14754 = (state_14806[(9)]);
var inst_14754__$1 = (state_14806[(2)]);
var inst_14755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14754__$1,(0),null);
var inst_14756__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14754__$1,(1),null);
var inst_14757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14756__$1,open_ch);
var state_14806__$1 = (function (){var statearr_14812 = state_14806;
(statearr_14812[(8)] = inst_14756__$1);

(statearr_14812[(10)] = inst_14755);

(statearr_14812[(9)] = inst_14754__$1);

return statearr_14812;
})();
if(inst_14757){
var statearr_14813_14850 = state_14806__$1;
(statearr_14813_14850[(1)] = (5));

} else {
var statearr_14814_14851 = state_14806__$1;
(statearr_14814_14851[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (15))){
var inst_14787 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14815_14852 = state_14806__$1;
(statearr_14815_14852[(2)] = inst_14787);

(statearr_14815_14852[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (21))){
var inst_14798 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14816_14853 = state_14806__$1;
(statearr_14816_14853[(2)] = inst_14798);

(statearr_14816_14853[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (13))){
var state_14806__$1 = state_14806;
var statearr_14817_14854 = state_14806__$1;
(statearr_14817_14854[(2)] = null);

(statearr_14817_14854[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (6))){
var inst_14756 = (state_14806[(8)]);
var inst_14771 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14756,close_ch);
var state_14806__$1 = state_14806;
if(inst_14771){
var statearr_14818_14855 = state_14806__$1;
(statearr_14818_14855[(1)] = (9));

} else {
var statearr_14819_14856 = state_14806__$1;
(statearr_14819_14856[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (17))){
var state_14806__$1 = state_14806;
var statearr_14820_14857 = state_14806__$1;
(statearr_14820_14857[(2)] = initial_ch);

(statearr_14820_14857[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (3))){
var inst_14804 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14806__$1,inst_14804);
} else {
if((state_val_14807 === (12))){
var inst_14741 = (state_14806[(7)]);
var state_14806__$1 = state_14806;
if(cljs.core.truth_(inst_14741)){
var statearr_14821_14858 = state_14806__$1;
(statearr_14821_14858[(1)] = (16));

} else {
var statearr_14822_14859 = state_14806__$1;
(statearr_14822_14859[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (2))){
var inst_14750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14751 = [open_ch,close_ch];
var inst_14752 = (new cljs.core.PersistentVector(null,2,(5),inst_14750,inst_14751,null));
var state_14806__$1 = state_14806;
return cljs.core.async.ioc_alts_BANG_(state_14806__$1,(4),inst_14752);
} else {
if((state_val_14807 === (19))){
var inst_14755 = (state_14806[(10)]);
var state_14806__$1 = state_14806;
var statearr_14823_14860 = state_14806__$1;
(statearr_14823_14860[(2)] = inst_14755);

(statearr_14823_14860[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (11))){
var inst_14800 = (state_14806[(2)]);
var state_14806__$1 = state_14806;
var statearr_14824_14861 = state_14806__$1;
(statearr_14824_14861[(2)] = inst_14800);

(statearr_14824_14861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (9))){
var inst_14777 = (state_14806[(11)]);
var inst_14754 = (state_14806[(9)]);
var inst_14776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14754,(0),null);
var inst_14777__$1 = chord.client.close_event__GT_maybe_error(inst_14776);
var state_14806__$1 = (function (){var statearr_14825 = state_14806;
(statearr_14825[(11)] = inst_14777__$1);

return statearr_14825;
})();
if(cljs.core.truth_(inst_14777__$1)){
var statearr_14826_14862 = state_14806__$1;
(statearr_14826_14862[(1)] = (12));

} else {
var statearr_14827_14863 = state_14806__$1;
(statearr_14827_14863[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (5))){
var inst_14754 = (state_14806[(9)]);
var inst_14762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14754,(0),null);
var inst_14763 = [cljs.core.cst$kw$ws_DASH_channel];
var inst_14764 = [ws_chan];
var inst_14765 = cljs.core.PersistentHashMap.fromArrays(inst_14763,inst_14764);
var state_14806__$1 = (function (){var statearr_14828 = state_14806;
(statearr_14828[(12)] = inst_14762);

return statearr_14828;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14806__$1,(8),initial_ch,inst_14765);
} else {
if((state_val_14807 === (14))){
var inst_14790 = (state_14806[(2)]);
var inst_14791 = cljs.core.async.close_BANG_(ws_chan);
var inst_14792 = cljs.core.async.close_BANG_(initial_ch);
var state_14806__$1 = (function (){var statearr_14829 = state_14806;
(statearr_14829[(13)] = inst_14791);

(statearr_14829[(14)] = inst_14790);

return statearr_14829;
})();
var statearr_14830_14864 = state_14806__$1;
(statearr_14830_14864[(2)] = inst_14792);

(statearr_14830_14864[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (16))){
var state_14806__$1 = state_14806;
var statearr_14831_14865 = state_14806__$1;
(statearr_14831_14865[(2)] = read_ch__$1);

(statearr_14831_14865[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (10))){
var inst_14756 = (state_14806[(8)]);
var inst_14794 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14756,cljs.core.cst$kw$default);
var state_14806__$1 = state_14806;
if(inst_14794){
var statearr_14832_14866 = state_14806__$1;
(statearr_14832_14866[(1)] = (19));

} else {
var statearr_14833_14867 = state_14806__$1;
(statearr_14833_14867[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14807 === (18))){
var inst_14777 = (state_14806[(11)]);
var inst_14782 = (state_14806[(2)]);
var inst_14783 = [cljs.core.cst$kw$error];
var inst_14784 = [inst_14777];
var inst_14785 = cljs.core.PersistentHashMap.fromArrays(inst_14783,inst_14784);
var state_14806__$1 = state_14806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14806__$1,(15),inst_14782,inst_14785);
} else {
if((state_val_14807 === (8))){
var inst_14767 = (state_14806[(2)]);
var inst_14768 = cljs.core.async.close_BANG_(initial_ch);
var inst_14741 = true;
var state_14806__$1 = (function (){var statearr_14834 = state_14806;
(statearr_14834[(15)] = inst_14767);

(statearr_14834[(7)] = inst_14741);

(statearr_14834[(16)] = inst_14768);

return statearr_14834;
})();
var statearr_14835_14868 = state_14806__$1;
(statearr_14835_14868[(2)] = null);

(statearr_14835_14868[(1)] = (2));


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
});})(c__11948__auto___14846,ws_chan,initial_ch,web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts))
;
return ((function (switch__11871__auto__,c__11948__auto___14846,ws_chan,initial_ch,web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts){
return (function() {
var chord$client$state_machine__11872__auto__ = null;
var chord$client$state_machine__11872__auto____0 = (function (){
var statearr_14839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14839[(0)] = chord$client$state_machine__11872__auto__);

(statearr_14839[(1)] = (1));

return statearr_14839;
});
var chord$client$state_machine__11872__auto____1 = (function (state_14806){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_14806);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e14840){if((e14840 instanceof Object)){
var ex__11875__auto__ = e14840;
var statearr_14841_14869 = state_14806;
(statearr_14841_14869[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14806);

return cljs.core.cst$kw$recur;
} else {
throw e14840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__14870 = state_14806;
state_14806 = G__14870;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
chord$client$state_machine__11872__auto__ = function(state_14806){
switch(arguments.length){
case 0:
return chord$client$state_machine__11872__auto____0.call(this);
case 1:
return chord$client$state_machine__11872__auto____1.call(this,state_14806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chord$client$state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__11872__auto____0;
chord$client$state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__11872__auto____1;
return chord$client$state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto___14846,ws_chan,initial_ch,web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts))
})();
var state__11950__auto__ = (function (){var statearr_14842 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_14842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto___14846);

return statearr_14842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto___14846,ws_chan,initial_ch,web_socket,map__14739,map__14739__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__14734,map__14737,map__14737__$1,opts,read_ch,write_ch,format,ws_opts))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq14731){
var G__14732 = cljs.core.first(seq14731);
var seq14731__$1 = cljs.core.next(seq14731);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__14732,seq14731__$1);
});

