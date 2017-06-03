// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_cljs.requests');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('airhead_cljs.state');
goog.require('goog.string');
goog.require('goog.string.format');
airhead_cljs.requests.get_info_BANG_ = (function airhead_cljs$requests$get_info_BANG_(){
var c__11948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto__){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto__){
return (function (state_14894){
var state_val_14895 = (state_14894[(1)]);
if((state_val_14895 === (1))){
var inst_14888 = cljs_http.client.get("/api/info");
var state_14894__$1 = state_14894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14894__$1,(2),inst_14888);
} else {
if((state_val_14895 === (2))){
var inst_14890 = (state_14894[(2)]);
var inst_14891 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_14890);
var inst_14892 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$info,inst_14891);
var state_14894__$1 = state_14894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14894__$1,inst_14892);
} else {
return null;
}
}
});})(c__11948__auto__))
;
return ((function (switch__11871__auto__,c__11948__auto__){
return (function() {
var airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto__ = null;
var airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto____0 = (function (){
var statearr_14899 = [null,null,null,null,null,null,null];
(statearr_14899[(0)] = airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto__);

(statearr_14899[(1)] = (1));

return statearr_14899;
});
var airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto____1 = (function (state_14894){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_14894);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e14900){if((e14900 instanceof Object)){
var ex__11875__auto__ = e14900;
var statearr_14901_14903 = state_14894;
(statearr_14901_14903[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14894);

return cljs.core.cst$kw$recur;
} else {
throw e14900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__14904 = state_14894;
state_14894 = G__14904;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto__ = function(state_14894){
switch(arguments.length){
case 0:
return airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto____0.call(this);
case 1:
return airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto____1.call(this,state_14894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto____0;
airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto____1;
return airhead_cljs$requests$get_info_BANG__$_state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto__))
})();
var state__11950__auto__ = (function (){var statearr_14902 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_14902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto__);

return statearr_14902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto__))
);

return c__11948__auto__;
});
airhead_cljs.requests.get_playlist_BANG_ = (function airhead_cljs$requests$get_playlist_BANG_(){
var c__11948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto__){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto__){
return (function (state_14936){
var state_val_14937 = (state_14936[(1)]);
if((state_val_14937 === (1))){
var inst_14927 = cljs_http.client.get("/api/playlist");
var state_14936__$1 = state_14936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14936__$1,(2),inst_14927);
} else {
if((state_val_14937 === (2))){
var inst_14929 = (state_14936[(2)]);
var inst_14930 = (function (){var G__14938 = cljs.core.cst$kw$body;
return (inst_14929.cljs$core$IFn$_invoke$arity$1 ? inst_14929.cljs$core$IFn$_invoke$arity$1(G__14938) : inst_14929.call(null,G__14938));
})();
var inst_14931 = (function (){var G__14939 = cljs.core.cst$kw$next;
return (inst_14930.cljs$core$IFn$_invoke$arity$1 ? inst_14930.cljs$core$IFn$_invoke$arity$1(G__14939) : inst_14930.call(null,G__14939));
})();
var inst_14932 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$playlist,inst_14931);
var inst_14933 = (function (){var G__14940 = cljs.core.cst$kw$current;
return (inst_14930.cljs$core$IFn$_invoke$arity$1 ? inst_14930.cljs$core$IFn$_invoke$arity$1(G__14940) : inst_14930.call(null,G__14940));
})();
var inst_14934 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$now_DASH_playing,inst_14933);
var state_14936__$1 = (function (){var statearr_14941 = state_14936;
(statearr_14941[(7)] = inst_14932);

return statearr_14941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14936__$1,inst_14934);
} else {
return null;
}
}
});})(c__11948__auto__))
;
return ((function (switch__11871__auto__,c__11948__auto__){
return (function() {
var airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto__ = null;
var airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto____0 = (function (){
var statearr_14945 = [null,null,null,null,null,null,null,null];
(statearr_14945[(0)] = airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto__);

(statearr_14945[(1)] = (1));

return statearr_14945;
});
var airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto____1 = (function (state_14936){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_14936);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e14946){if((e14946 instanceof Object)){
var ex__11875__auto__ = e14946;
var statearr_14947_14949 = state_14936;
(statearr_14947_14949[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14936);

return cljs.core.cst$kw$recur;
} else {
throw e14946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__14950 = state_14936;
state_14936 = G__14950;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto__ = function(state_14936){
switch(arguments.length){
case 0:
return airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto____0.call(this);
case 1:
return airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto____1.call(this,state_14936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto____0;
airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto____1;
return airhead_cljs$requests$get_playlist_BANG__$_state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto__))
})();
var state__11950__auto__ = (function (){var statearr_14948 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_14948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto__);

return statearr_14948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto__))
);

return c__11948__auto__;
});
airhead_cljs.requests.playlist_add_BANG_ = (function airhead_cljs$requests$playlist_add_BANG_(id){
return cljs_http.client.put([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_cljs.requests.playlist_remove_BANG_ = (function airhead_cljs$requests$playlist_remove_BANG_(id){
return cljs_http.client.delete$([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_cljs.requests.get_library_BANG_ = (function airhead_cljs$requests$get_library_BANG_(){
var c__11948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto__){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto__){
return (function (state_14995){
var state_val_14996 = (state_14995[(1)]);
if((state_val_14996 === (1))){
var inst_14978 = [cljs.core.cst$kw$query_DASH_params];
var inst_14979 = ["q"];
var inst_14980 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state));
var inst_14981 = (function (){var G__14997 = cljs.core.cst$kw$query;
return (inst_14980.cljs$core$IFn$_invoke$arity$1 ? inst_14980.cljs$core$IFn$_invoke$arity$1(G__14997) : inst_14980.call(null,G__14997));
})();
var inst_14982 = [inst_14981];
var inst_14983 = cljs.core.PersistentHashMap.fromArrays(inst_14979,inst_14982);
var inst_14984 = [inst_14983];
var inst_14985 = cljs.core.PersistentHashMap.fromArrays(inst_14978,inst_14984);
var inst_14986 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([inst_14985], 0));
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14995__$1,(2),inst_14986);
} else {
if((state_val_14996 === (2))){
var inst_14988 = (state_14995[(2)]);
var inst_14989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14990 = [cljs.core.cst$kw$body,cljs.core.cst$kw$tracks];
var inst_14991 = (new cljs.core.PersistentVector(null,2,(5),inst_14989,inst_14990,null));
var inst_14992 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_14988,inst_14991);
var inst_14993 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$library,inst_14992);
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14995__$1,inst_14993);
} else {
return null;
}
}
});})(c__11948__auto__))
;
return ((function (switch__11871__auto__,c__11948__auto__){
return (function() {
var airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto__ = null;
var airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto____0 = (function (){
var statearr_15001 = [null,null,null,null,null,null,null];
(statearr_15001[(0)] = airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto__);

(statearr_15001[(1)] = (1));

return statearr_15001;
});
var airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto____1 = (function (state_14995){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_14995);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e15002){if((e15002 instanceof Object)){
var ex__11875__auto__ = e15002;
var statearr_15003_15005 = state_14995;
(statearr_15003_15005[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14995);

return cljs.core.cst$kw$recur;
} else {
throw e15002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__15006 = state_14995;
state_14995 = G__15006;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto__ = function(state_14995){
switch(arguments.length){
case 0:
return airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto____0.call(this);
case 1:
return airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto____1.call(this,state_14995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto____0;
airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto____1;
return airhead_cljs$requests$get_library_BANG__$_state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto__))
})();
var state__11950__auto__ = (function (){var statearr_15004 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_15004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto__);

return statearr_15004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto__))
);

return c__11948__auto__;
});
airhead_cljs.requests.upload_BANG_ = (function airhead_cljs$requests$upload_BANG_(){
var form = document.getElementById("upload-form");
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var http_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var c__11948__auto___15133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto___15133,form,progress_chan,http_chan){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto___15133,form,progress_chan,http_chan){
return (function (state_15094){
var state_val_15095 = (state_15094[(1)]);
if((state_val_15095 === (7))){
var inst_15090 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
var statearr_15096_15134 = state_15094__$1;
(statearr_15096_15134[(2)] = inst_15090);

(statearr_15096_15134[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15095 === (1))){
var state_15094__$1 = state_15094;
var statearr_15097_15135 = state_15094__$1;
(statearr_15097_15135[(2)] = null);

(statearr_15097_15135[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15095 === (4))){
var inst_15072 = (state_15094[(7)]);
var inst_15072__$1 = (state_15094[(2)]);
var state_15094__$1 = (function (){var statearr_15098 = state_15094;
(statearr_15098[(7)] = inst_15072__$1);

return statearr_15098;
})();
if(cljs.core.truth_(inst_15072__$1)){
var statearr_15099_15136 = state_15094__$1;
(statearr_15099_15136[(1)] = (5));

} else {
var statearr_15100_15137 = state_15094__$1;
(statearr_15100_15137[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15095 === (6))){
var state_15094__$1 = state_15094;
var statearr_15101_15138 = state_15094__$1;
(statearr_15101_15138[(2)] = null);

(statearr_15101_15138[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15095 === (3))){
var inst_15092 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15094__$1,inst_15092);
} else {
if((state_val_15095 === (2))){
var state_15094__$1 = state_15094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15094__$1,(4),progress_chan);
} else {
if((state_val_15095 === (9))){
var state_15094__$1 = state_15094;
var statearr_15102_15139 = state_15094__$1;
(statearr_15102_15139[(2)] = null);

(statearr_15102_15139[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15095 === (5))){
var inst_15072 = (state_15094[(7)]);
var inst_15074 = (function (){var G__15103 = cljs.core.cst$kw$direction;
return (inst_15072.cljs$core$IFn$_invoke$arity$1 ? inst_15072.cljs$core$IFn$_invoke$arity$1(G__15103) : inst_15072.call(null,G__15103));
})();
var inst_15075 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15074,cljs.core.cst$kw$upload);
var state_15094__$1 = state_15094;
if(inst_15075){
var statearr_15104_15140 = state_15094__$1;
(statearr_15104_15140[(1)] = (8));

} else {
var statearr_15105_15141 = state_15094__$1;
(statearr_15105_15141[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15095 === (10))){
var inst_15086 = (state_15094[(2)]);
var state_15094__$1 = (function (){var statearr_15106 = state_15094;
(statearr_15106[(8)] = inst_15086);

return statearr_15106;
})();
var statearr_15107_15142 = state_15094__$1;
(statearr_15107_15142[(2)] = null);

(statearr_15107_15142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15095 === (8))){
var inst_15072 = (state_15094[(7)]);
var inst_15077 = (function (){var G__15108 = cljs.core.cst$kw$loaded;
return (inst_15072.cljs$core$IFn$_invoke$arity$1 ? inst_15072.cljs$core$IFn$_invoke$arity$1(G__15108) : inst_15072.call(null,G__15108));
})();
var inst_15078 = (function (){var G__15109 = cljs.core.cst$kw$total;
return (inst_15072.cljs$core$IFn$_invoke$arity$1 ? inst_15072.cljs$core$IFn$_invoke$arity$1(G__15109) : inst_15072.call(null,G__15109));
})();
var inst_15079 = (inst_15077 / inst_15078);
var inst_15080 = (inst_15079 * (100));
var inst_15081 = goog.string.format("Uploading: %.0f%",inst_15080);
var inst_15082 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_percentage,inst_15080);
var inst_15083 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,inst_15081);
var state_15094__$1 = (function (){var statearr_15110 = state_15094;
(statearr_15110[(9)] = inst_15082);

return statearr_15110;
})();
var statearr_15111_15143 = state_15094__$1;
(statearr_15111_15143[(2)] = inst_15083);

(statearr_15111_15143[(1)] = (10));


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
});})(c__11948__auto___15133,form,progress_chan,http_chan))
;
return ((function (switch__11871__auto__,c__11948__auto___15133,form,progress_chan,http_chan){
return (function() {
var airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__ = null;
var airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____0 = (function (){
var statearr_15115 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15115[(0)] = airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__);

(statearr_15115[(1)] = (1));

return statearr_15115;
});
var airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____1 = (function (state_15094){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_15094);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e15116){if((e15116 instanceof Object)){
var ex__11875__auto__ = e15116;
var statearr_15117_15144 = state_15094;
(statearr_15117_15144[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15094);

return cljs.core.cst$kw$recur;
} else {
throw e15116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__15145 = state_15094;
state_15094 = G__15145;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__ = function(state_15094){
switch(arguments.length){
case 0:
return airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____0.call(this);
case 1:
return airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____1.call(this,state_15094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____0;
airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____1;
return airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto___15133,form,progress_chan,http_chan))
})();
var state__11950__auto__ = (function (){var statearr_15118 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_15118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto___15133);

return statearr_15118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto___15133,form,progress_chan,http_chan))
);


var c__11948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto__,form,progress_chan,http_chan){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto__,form,progress_chan,http_chan){
return (function (state_15123){
var state_val_15124 = (state_15123[(1)]);
if((state_val_15124 === (1))){
var state_15123__$1 = state_15123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15123__$1,(2),http_chan);
} else {
if((state_val_15124 === (2))){
var inst_15120 = (state_15123[(2)]);
var inst_15121 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,"Done! It will show in the library once it gets transcoded.");
var state_15123__$1 = (function (){var statearr_15125 = state_15123;
(statearr_15125[(7)] = inst_15120);

return statearr_15125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15123__$1,inst_15121);
} else {
return null;
}
}
});})(c__11948__auto__,form,progress_chan,http_chan))
;
return ((function (switch__11871__auto__,c__11948__auto__,form,progress_chan,http_chan){
return (function() {
var airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__ = null;
var airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____0 = (function (){
var statearr_15129 = [null,null,null,null,null,null,null,null];
(statearr_15129[(0)] = airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__);

(statearr_15129[(1)] = (1));

return statearr_15129;
});
var airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____1 = (function (state_15123){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_15123);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e15130){if((e15130 instanceof Object)){
var ex__11875__auto__ = e15130;
var statearr_15131_15146 = state_15123;
(statearr_15131_15146[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15123);

return cljs.core.cst$kw$recur;
} else {
throw e15130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__15147 = state_15123;
state_15123 = G__15147;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__ = function(state_15123){
switch(arguments.length){
case 0:
return airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____0.call(this);
case 1:
return airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____1.call(this,state_15123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____0;
airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto____1;
return airhead_cljs$requests$upload_BANG__$_state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto__,form,progress_chan,http_chan))
})();
var state__11950__auto__ = (function (){var statearr_15132 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_15132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto__);

return statearr_15132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto__,form,progress_chan,http_chan))
);

return c__11948__auto__;
});
airhead_cljs.requests.get_updates_BANG_ = (function airhead_cljs$requests$get_updates_BANG_(){
airhead_cljs.requests.get_info_BANG_();

airhead_cljs.requests.get_playlist_BANG_();

return airhead_cljs.requests.get_library_BANG_();
});
airhead_cljs.requests.get_updates_BANG_();
var c__11948__auto___15256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11948__auto___15256){
return (function (){
var f__11949__auto__ = (function (){var switch__11871__auto__ = ((function (c__11948__auto___15256){
return (function (state_15213){
var state_val_15214 = (state_15213[(1)]);
if((state_val_15214 === (7))){
var state_15213__$1 = state_15213;
var statearr_15215_15257 = state_15213__$1;
(statearr_15215_15257[(2)] = false);

(statearr_15215_15257[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (20))){
var inst_15194 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
var statearr_15216_15258 = state_15213__$1;
(statearr_15216_15258[(2)] = inst_15194);

(statearr_15216_15258[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (1))){
var inst_15149 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_15150 = [cljs.core.cst$kw$format];
var inst_15151 = [cljs.core.cst$kw$json_DASH_kw];
var inst_15152 = cljs.core.PersistentHashMap.fromArrays(inst_15150,inst_15151);
var inst_15153 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_15149,cljs.core.array_seq([inst_15152], 0));
var state_15213__$1 = state_15213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15213__$1,(2),inst_15153);
} else {
if((state_val_15214 === (24))){
var state_15213__$1 = state_15213;
var statearr_15217_15259 = state_15213__$1;
(statearr_15217_15259[(2)] = null);

(statearr_15217_15259[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (4))){
var state_15213__$1 = state_15213;
var statearr_15218_15260 = state_15213__$1;
(statearr_15218_15260[(2)] = false);

(statearr_15218_15260[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (15))){
var inst_15181 = (state_15213[(7)]);
var inst_15186 = inst_15181.cljs$lang$protocol_mask$partition0$;
var inst_15187 = (inst_15186 & (64));
var inst_15188 = inst_15181.cljs$core$ISeq$;
var inst_15189 = (cljs.core.PROTOCOL_SENTINEL === inst_15188);
var inst_15190 = (inst_15187) || (inst_15189);
var state_15213__$1 = state_15213;
if(cljs.core.truth_(inst_15190)){
var statearr_15219_15261 = state_15213__$1;
(statearr_15219_15261[(1)] = (18));

} else {
var statearr_15220_15262 = state_15213__$1;
(statearr_15220_15262[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (21))){
var inst_15181 = (state_15213[(7)]);
var inst_15199 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15181);
var state_15213__$1 = state_15213;
var statearr_15221_15263 = state_15213__$1;
(statearr_15221_15263[(2)] = inst_15199);

(statearr_15221_15263[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (13))){
var inst_15211 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15213__$1,inst_15211);
} else {
if((state_val_15214 === (22))){
var inst_15181 = (state_15213[(7)]);
var state_15213__$1 = state_15213;
var statearr_15222_15264 = state_15213__$1;
(statearr_15222_15264[(2)] = inst_15181);

(statearr_15222_15264[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (6))){
var state_15213__$1 = state_15213;
var statearr_15223_15265 = state_15213__$1;
(statearr_15223_15265[(2)] = true);

(statearr_15223_15265[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (25))){
var state_15213__$1 = state_15213;
var statearr_15224_15266 = state_15213__$1;
(statearr_15224_15266[(2)] = null);

(statearr_15224_15266[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (17))){
var inst_15197 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
if(cljs.core.truth_(inst_15197)){
var statearr_15225_15267 = state_15213__$1;
(statearr_15225_15267[(1)] = (21));

} else {
var statearr_15226_15268 = state_15213__$1;
(statearr_15226_15268[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (3))){
var inst_15155 = (state_15213[(8)]);
var inst_15160 = inst_15155.cljs$lang$protocol_mask$partition0$;
var inst_15161 = (inst_15160 & (64));
var inst_15162 = inst_15155.cljs$core$ISeq$;
var inst_15163 = (cljs.core.PROTOCOL_SENTINEL === inst_15162);
var inst_15164 = (inst_15161) || (inst_15163);
var state_15213__$1 = state_15213;
if(cljs.core.truth_(inst_15164)){
var statearr_15227_15269 = state_15213__$1;
(statearr_15227_15269[(1)] = (6));

} else {
var statearr_15228_15270 = state_15213__$1;
(statearr_15228_15270[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (12))){
var inst_15177 = (state_15213[(9)]);
var state_15213__$1 = state_15213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15213__$1,(14),inst_15177);
} else {
if((state_val_15214 === (2))){
var inst_15155 = (state_15213[(8)]);
var inst_15155__$1 = (state_15213[(2)]);
var inst_15157 = (inst_15155__$1 == null);
var inst_15158 = cljs.core.not(inst_15157);
var state_15213__$1 = (function (){var statearr_15229 = state_15213;
(statearr_15229[(8)] = inst_15155__$1);

return statearr_15229;
})();
if(inst_15158){
var statearr_15230_15271 = state_15213__$1;
(statearr_15230_15271[(1)] = (3));

} else {
var statearr_15231_15272 = state_15213__$1;
(statearr_15231_15272[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (23))){
var inst_15202 = (state_15213[(2)]);
var inst_15203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15202,cljs.core.cst$kw$message);
var inst_15204 = airhead_cljs.requests.get_updates_BANG_();
var state_15213__$1 = (function (){var statearr_15232 = state_15213;
(statearr_15232[(10)] = inst_15204);

return statearr_15232;
})();
if(cljs.core.truth_(inst_15203)){
var statearr_15233_15273 = state_15213__$1;
(statearr_15233_15273[(1)] = (24));

} else {
var statearr_15234_15274 = state_15213__$1;
(statearr_15234_15274[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (19))){
var state_15213__$1 = state_15213;
var statearr_15235_15275 = state_15213__$1;
(statearr_15235_15275[(2)] = false);

(statearr_15235_15275[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (11))){
var inst_15176 = (state_15213[(2)]);
var inst_15177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15176,cljs.core.cst$kw$ws_DASH_channel);
var state_15213__$1 = (function (){var statearr_15236 = state_15213;
(statearr_15236[(9)] = inst_15177);

return statearr_15236;
})();
var statearr_15237_15276 = state_15213__$1;
(statearr_15237_15276[(2)] = null);

(statearr_15237_15276[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (9))){
var inst_15155 = (state_15213[(8)]);
var inst_15173 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15155);
var state_15213__$1 = state_15213;
var statearr_15238_15277 = state_15213__$1;
(statearr_15238_15277[(2)] = inst_15173);

(statearr_15238_15277[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (5))){
var inst_15171 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
if(cljs.core.truth_(inst_15171)){
var statearr_15239_15278 = state_15213__$1;
(statearr_15239_15278[(1)] = (9));

} else {
var statearr_15240_15279 = state_15213__$1;
(statearr_15240_15279[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (14))){
var inst_15181 = (state_15213[(7)]);
var inst_15181__$1 = (state_15213[(2)]);
var inst_15183 = (inst_15181__$1 == null);
var inst_15184 = cljs.core.not(inst_15183);
var state_15213__$1 = (function (){var statearr_15241 = state_15213;
(statearr_15241[(7)] = inst_15181__$1);

return statearr_15241;
})();
if(inst_15184){
var statearr_15242_15280 = state_15213__$1;
(statearr_15242_15280[(1)] = (15));

} else {
var statearr_15243_15281 = state_15213__$1;
(statearr_15243_15281[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (26))){
var inst_15209 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
var statearr_15244_15282 = state_15213__$1;
(statearr_15244_15282[(2)] = inst_15209);

(statearr_15244_15282[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (16))){
var state_15213__$1 = state_15213;
var statearr_15245_15283 = state_15213__$1;
(statearr_15245_15283[(2)] = false);

(statearr_15245_15283[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (10))){
var inst_15155 = (state_15213[(8)]);
var state_15213__$1 = state_15213;
var statearr_15246_15284 = state_15213__$1;
(statearr_15246_15284[(2)] = inst_15155);

(statearr_15246_15284[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (18))){
var state_15213__$1 = state_15213;
var statearr_15247_15285 = state_15213__$1;
(statearr_15247_15285[(2)] = true);

(statearr_15247_15285[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15214 === (8))){
var inst_15168 = (state_15213[(2)]);
var state_15213__$1 = state_15213;
var statearr_15248_15286 = state_15213__$1;
(statearr_15248_15286[(2)] = inst_15168);

(statearr_15248_15286[(1)] = (5));


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
}
}
}
}
}
});})(c__11948__auto___15256))
;
return ((function (switch__11871__auto__,c__11948__auto___15256){
return (function() {
var airhead_cljs$requests$state_machine__11872__auto__ = null;
var airhead_cljs$requests$state_machine__11872__auto____0 = (function (){
var statearr_15252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15252[(0)] = airhead_cljs$requests$state_machine__11872__auto__);

(statearr_15252[(1)] = (1));

return statearr_15252;
});
var airhead_cljs$requests$state_machine__11872__auto____1 = (function (state_15213){
while(true){
var ret_value__11873__auto__ = (function (){try{while(true){
var result__11874__auto__ = switch__11871__auto__(state_15213);
if(cljs.core.keyword_identical_QMARK_(result__11874__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11874__auto__;
}
break;
}
}catch (e15253){if((e15253 instanceof Object)){
var ex__11875__auto__ = e15253;
var statearr_15254_15287 = state_15213;
(statearr_15254_15287[(5)] = ex__11875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15213);

return cljs.core.cst$kw$recur;
} else {
throw e15253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11873__auto__,cljs.core.cst$kw$recur)){
var G__15288 = state_15213;
state_15213 = G__15288;
continue;
} else {
return ret_value__11873__auto__;
}
break;
}
});
airhead_cljs$requests$state_machine__11872__auto__ = function(state_15213){
switch(arguments.length){
case 0:
return airhead_cljs$requests$state_machine__11872__auto____0.call(this);
case 1:
return airhead_cljs$requests$state_machine__11872__auto____1.call(this,state_15213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$state_machine__11872__auto____0;
airhead_cljs$requests$state_machine__11872__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$state_machine__11872__auto____1;
return airhead_cljs$requests$state_machine__11872__auto__;
})()
;})(switch__11871__auto__,c__11948__auto___15256))
})();
var state__11950__auto__ = (function (){var statearr_15255 = (f__11949__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11949__auto__.cljs$core$IFn$_invoke$arity$0() : f__11949__auto__.call(null));
(statearr_15255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11948__auto___15256);

return statearr_15255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11950__auto__);
});})(c__11948__auto___15256))
);

