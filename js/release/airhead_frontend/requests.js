// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_frontend.requests');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('airhead_frontend.state');
goog.require('goog.string');
goog.require('goog.string.format');
airhead_frontend.requests.get_info_BANG_ = (function airhead_frontend$requests$get_info_BANG_(){
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__){
return (function (state_19262){
var state_val_19263 = (state_19262[(1)]);
if((state_val_19263 === (1))){
var inst_19256 = cljs_http.client.get("/api/info");
var state_19262__$1 = state_19262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19262__$1,(2),inst_19256);
} else {
if((state_val_19263 === (2))){
var inst_19258 = (state_19262[(2)]);
var inst_19259 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19258);
var inst_19260 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$info,inst_19259);
var state_19262__$1 = state_19262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19262__$1,inst_19260);
} else {
return null;
}
}
});})(c__15034__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__){
return (function() {
var airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto__ = null;
var airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_19267 = [null,null,null,null,null,null,null];
(statearr_19267[(0)] = airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto__);

(statearr_19267[(1)] = (1));

return statearr_19267;
});
var airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto____1 = (function (state_19262){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19262);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19268){if((e19268 instanceof Object)){
var ex__14914__auto__ = e19268;
var statearr_19269_19271 = state_19262;
(statearr_19269_19271[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19262);

return cljs.core.cst$kw$recur;
} else {
throw e19268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19272 = state_19262;
state_19262 = G__19272;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto__ = function(state_19262){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto____1.call(this,state_19262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto____0;
airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto____1;
return airhead_frontend$requests$get_info_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__))
})();
var state__15036__auto__ = (function (){var statearr_19270 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_19270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__))
);

return c__15034__auto__;
});
airhead_frontend.requests.get_playlist_BANG_ = (function airhead_frontend$requests$get_playlist_BANG_(){
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__){
return (function (state_19304){
var state_val_19305 = (state_19304[(1)]);
if((state_val_19305 === (1))){
var inst_19295 = cljs_http.client.get("/api/playlist");
var state_19304__$1 = state_19304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19304__$1,(2),inst_19295);
} else {
if((state_val_19305 === (2))){
var inst_19297 = (state_19304[(2)]);
var inst_19298 = (function (){var G__19306 = cljs.core.cst$kw$body;
return (inst_19297.cljs$core$IFn$_invoke$arity$1 ? inst_19297.cljs$core$IFn$_invoke$arity$1(G__19306) : inst_19297.call(null,G__19306));
})();
var inst_19299 = (function (){var G__19307 = cljs.core.cst$kw$next;
return (inst_19298.cljs$core$IFn$_invoke$arity$1 ? inst_19298.cljs$core$IFn$_invoke$arity$1(G__19307) : inst_19298.call(null,G__19307));
})();
var inst_19300 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$playlist,inst_19299);
var inst_19301 = (function (){var G__19308 = cljs.core.cst$kw$current;
return (inst_19298.cljs$core$IFn$_invoke$arity$1 ? inst_19298.cljs$core$IFn$_invoke$arity$1(G__19308) : inst_19298.call(null,G__19308));
})();
var inst_19302 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$now_DASH_playing,inst_19301);
var state_19304__$1 = (function (){var statearr_19309 = state_19304;
(statearr_19309[(7)] = inst_19300);

return statearr_19309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19304__$1,inst_19302);
} else {
return null;
}
}
});})(c__15034__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__){
return (function() {
var airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto__ = null;
var airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_19313 = [null,null,null,null,null,null,null,null];
(statearr_19313[(0)] = airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto__);

(statearr_19313[(1)] = (1));

return statearr_19313;
});
var airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto____1 = (function (state_19304){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19304);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19314){if((e19314 instanceof Object)){
var ex__14914__auto__ = e19314;
var statearr_19315_19317 = state_19304;
(statearr_19315_19317[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19304);

return cljs.core.cst$kw$recur;
} else {
throw e19314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19318 = state_19304;
state_19304 = G__19318;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto__ = function(state_19304){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto____1.call(this,state_19304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto____0;
airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto____1;
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__))
})();
var state__15036__auto__ = (function (){var statearr_19316 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_19316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__))
);

return c__15034__auto__;
});
airhead_frontend.requests.playlist_add_BANG_ = (function airhead_frontend$requests$playlist_add_BANG_(id){
return cljs_http.client.put([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_frontend.requests.playlist_remove_BANG_ = (function airhead_frontend$requests$playlist_remove_BANG_(id){
return cljs_http.client.delete$([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_frontend.requests.get_library_BANG_ = (function airhead_frontend$requests$get_library_BANG_(){
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__){
return (function (state_19363){
var state_val_19364 = (state_19363[(1)]);
if((state_val_19364 === (1))){
var inst_19346 = [cljs.core.cst$kw$query_DASH_params];
var inst_19347 = ["q"];
var inst_19348 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state));
var inst_19349 = (function (){var G__19365 = cljs.core.cst$kw$query;
return (inst_19348.cljs$core$IFn$_invoke$arity$1 ? inst_19348.cljs$core$IFn$_invoke$arity$1(G__19365) : inst_19348.call(null,G__19365));
})();
var inst_19350 = [inst_19349];
var inst_19351 = cljs.core.PersistentHashMap.fromArrays(inst_19347,inst_19350);
var inst_19352 = [inst_19351];
var inst_19353 = cljs.core.PersistentHashMap.fromArrays(inst_19346,inst_19352);
var inst_19354 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([inst_19353], 0));
var state_19363__$1 = state_19363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19363__$1,(2),inst_19354);
} else {
if((state_val_19364 === (2))){
var inst_19356 = (state_19363[(2)]);
var inst_19357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19358 = [cljs.core.cst$kw$body,cljs.core.cst$kw$tracks];
var inst_19359 = (new cljs.core.PersistentVector(null,2,(5),inst_19357,inst_19358,null));
var inst_19360 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_19356,inst_19359);
var inst_19361 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$library,inst_19360);
var state_19363__$1 = state_19363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19363__$1,inst_19361);
} else {
return null;
}
}
});})(c__15034__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__){
return (function() {
var airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto__ = null;
var airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_19369 = [null,null,null,null,null,null,null];
(statearr_19369[(0)] = airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto__);

(statearr_19369[(1)] = (1));

return statearr_19369;
});
var airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto____1 = (function (state_19363){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19363);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19370){if((e19370 instanceof Object)){
var ex__14914__auto__ = e19370;
var statearr_19371_19373 = state_19363;
(statearr_19371_19373[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19363);

return cljs.core.cst$kw$recur;
} else {
throw e19370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19374 = state_19363;
state_19363 = G__19374;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto__ = function(state_19363){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto____1.call(this,state_19363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto____0;
airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto____1;
return airhead_frontend$requests$get_library_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__))
})();
var state__15036__auto__ = (function (){var statearr_19372 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_19372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__))
);

return c__15034__auto__;
});
airhead_frontend.requests.playlist_skip_BANG_ = (function airhead_frontend$requests$playlist_skip_BANG_(id){
return cljs_http.client.get("/api/playlist/skip");
});
airhead_frontend.requests.upload_BANG_ = (function airhead_frontend$requests$upload_BANG_(form){
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__19375_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__19378 = cljs.core.cst$kw$direction;
return (p1__19375_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19375_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19378) : p1__19375_SHARP_.call(null,G__19378));
})(),cljs.core.cst$kw$upload);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__19376_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19376_SHARP_,cljs.core.cst$kw$direction);
}))));
var response_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var out_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(response_chan,out_chan);

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(progress_chan,out_chan);

return out_chan;
});
airhead_frontend.requests.get_updates_BANG_ = (function airhead_frontend$requests$get_updates_BANG_(){
airhead_frontend.requests.get_info_BANG_();

airhead_frontend.requests.get_playlist_BANG_();

return airhead_frontend.requests.get_library_BANG_();
});
airhead_frontend.requests.get_updates_BANG_();
var c__15034__auto___19496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___19496){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___19496){
return (function (state_19449){
var state_val_19450 = (state_19449[(1)]);
if((state_val_19450 === (7))){
var state_19449__$1 = state_19449;
var statearr_19451_19497 = state_19449__$1;
(statearr_19451_19497[(2)] = false);

(statearr_19451_19497[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (20))){
var inst_19433 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
if(cljs.core.truth_(inst_19433)){
var statearr_19452_19498 = state_19449__$1;
(statearr_19452_19498[(1)] = (24));

} else {
var statearr_19453_19499 = state_19449__$1;
(statearr_19453_19499[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (27))){
var state_19449__$1 = state_19449;
var statearr_19454_19500 = state_19449__$1;
(statearr_19454_19500[(2)] = null);

(statearr_19454_19500[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (1))){
var inst_19380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:");
var state_19449__$1 = state_19449;
if(inst_19380){
var statearr_19455_19501 = state_19449__$1;
(statearr_19455_19501[(1)] = (2));

} else {
var statearr_19456_19502 = state_19449__$1;
(statearr_19456_19502[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (24))){
var inst_19417 = (state_19449[(7)]);
var inst_19435 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19417);
var state_19449__$1 = state_19449;
var statearr_19457_19503 = state_19449__$1;
(statearr_19457_19503[(2)] = inst_19435);

(statearr_19457_19503[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (4))){
var inst_19384 = (state_19449[(2)]);
var inst_19385 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19384),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_19386 = [cljs.core.cst$kw$format];
var inst_19387 = [cljs.core.cst$kw$json_DASH_kw];
var inst_19388 = cljs.core.PersistentHashMap.fromArrays(inst_19386,inst_19387);
var inst_19389 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_19385,cljs.core.array_seq([inst_19388], 0));
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19449__$1,(5),inst_19389);
} else {
if((state_val_19450 === (15))){
var inst_19413 = (state_19449[(8)]);
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19449__$1,(17),inst_19413);
} else {
if((state_val_19450 === (21))){
var state_19449__$1 = state_19449;
var statearr_19458_19504 = state_19449__$1;
(statearr_19458_19504[(2)] = true);

(statearr_19458_19504[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (13))){
var inst_19391 = (state_19449[(9)]);
var state_19449__$1 = state_19449;
var statearr_19459_19505 = state_19449__$1;
(statearr_19459_19505[(2)] = inst_19391);

(statearr_19459_19505[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (22))){
var state_19449__$1 = state_19449;
var statearr_19460_19506 = state_19449__$1;
(statearr_19460_19506[(2)] = false);

(statearr_19460_19506[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (29))){
var inst_19445 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19461_19507 = state_19449__$1;
(statearr_19461_19507[(2)] = inst_19445);

(statearr_19461_19507[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (6))){
var inst_19391 = (state_19449[(9)]);
var inst_19396 = inst_19391.cljs$lang$protocol_mask$partition0$;
var inst_19397 = (inst_19396 & (64));
var inst_19398 = inst_19391.cljs$core$ISeq$;
var inst_19399 = (cljs.core.PROTOCOL_SENTINEL === inst_19398);
var inst_19400 = (inst_19397) || (inst_19399);
var state_19449__$1 = state_19449;
if(cljs.core.truth_(inst_19400)){
var statearr_19462_19508 = state_19449__$1;
(statearr_19462_19508[(1)] = (9));

} else {
var statearr_19463_19509 = state_19449__$1;
(statearr_19463_19509[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (28))){
var state_19449__$1 = state_19449;
var statearr_19464_19510 = state_19449__$1;
(statearr_19464_19510[(2)] = null);

(statearr_19464_19510[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (25))){
var inst_19417 = (state_19449[(7)]);
var state_19449__$1 = state_19449;
var statearr_19465_19511 = state_19449__$1;
(statearr_19465_19511[(2)] = inst_19417);

(statearr_19465_19511[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (17))){
var inst_19417 = (state_19449[(7)]);
var inst_19417__$1 = (state_19449[(2)]);
var inst_19419 = (inst_19417__$1 == null);
var inst_19420 = cljs.core.not(inst_19419);
var state_19449__$1 = (function (){var statearr_19466 = state_19449;
(statearr_19466[(7)] = inst_19417__$1);

return statearr_19466;
})();
if(inst_19420){
var statearr_19467_19512 = state_19449__$1;
(statearr_19467_19512[(1)] = (18));

} else {
var statearr_19468_19513 = state_19449__$1;
(statearr_19468_19513[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (3))){
var state_19449__$1 = state_19449;
var statearr_19469_19514 = state_19449__$1;
(statearr_19469_19514[(2)] = "ws://");

(statearr_19469_19514[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (12))){
var inst_19391 = (state_19449[(9)]);
var inst_19409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19391);
var state_19449__$1 = state_19449;
var statearr_19470_19515 = state_19449__$1;
(statearr_19470_19515[(2)] = inst_19409);

(statearr_19470_19515[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (2))){
var state_19449__$1 = state_19449;
var statearr_19471_19516 = state_19449__$1;
(statearr_19471_19516[(2)] = "wss://");

(statearr_19471_19516[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (23))){
var inst_19430 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19472_19517 = state_19449__$1;
(statearr_19472_19517[(2)] = inst_19430);

(statearr_19472_19517[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (19))){
var state_19449__$1 = state_19449;
var statearr_19473_19518 = state_19449__$1;
(statearr_19473_19518[(2)] = false);

(statearr_19473_19518[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (11))){
var inst_19404 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19474_19519 = state_19449__$1;
(statearr_19474_19519[(2)] = inst_19404);

(statearr_19474_19519[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (9))){
var state_19449__$1 = state_19449;
var statearr_19475_19520 = state_19449__$1;
(statearr_19475_19520[(2)] = true);

(statearr_19475_19520[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (5))){
var inst_19391 = (state_19449[(9)]);
var inst_19391__$1 = (state_19449[(2)]);
var inst_19393 = (inst_19391__$1 == null);
var inst_19394 = cljs.core.not(inst_19393);
var state_19449__$1 = (function (){var statearr_19476 = state_19449;
(statearr_19476[(9)] = inst_19391__$1);

return statearr_19476;
})();
if(inst_19394){
var statearr_19477_19521 = state_19449__$1;
(statearr_19477_19521[(1)] = (6));

} else {
var statearr_19478_19522 = state_19449__$1;
(statearr_19478_19522[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (14))){
var inst_19412 = (state_19449[(2)]);
var inst_19413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19412,cljs.core.cst$kw$ws_DASH_channel);
var state_19449__$1 = (function (){var statearr_19479 = state_19449;
(statearr_19479[(8)] = inst_19413);

return statearr_19479;
})();
var statearr_19480_19523 = state_19449__$1;
(statearr_19480_19523[(2)] = null);

(statearr_19480_19523[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (26))){
var inst_19438 = (state_19449[(2)]);
var inst_19439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19438,cljs.core.cst$kw$message);
var inst_19440 = airhead_frontend.requests.get_updates_BANG_();
var state_19449__$1 = (function (){var statearr_19481 = state_19449;
(statearr_19481[(10)] = inst_19440);

return statearr_19481;
})();
if(cljs.core.truth_(inst_19439)){
var statearr_19482_19524 = state_19449__$1;
(statearr_19482_19524[(1)] = (27));

} else {
var statearr_19483_19525 = state_19449__$1;
(statearr_19483_19525[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (16))){
var inst_19447 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19449__$1,inst_19447);
} else {
if((state_val_19450 === (10))){
var state_19449__$1 = state_19449;
var statearr_19484_19526 = state_19449__$1;
(statearr_19484_19526[(2)] = false);

(statearr_19484_19526[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (18))){
var inst_19417 = (state_19449[(7)]);
var inst_19422 = inst_19417.cljs$lang$protocol_mask$partition0$;
var inst_19423 = (inst_19422 & (64));
var inst_19424 = inst_19417.cljs$core$ISeq$;
var inst_19425 = (cljs.core.PROTOCOL_SENTINEL === inst_19424);
var inst_19426 = (inst_19423) || (inst_19425);
var state_19449__$1 = state_19449;
if(cljs.core.truth_(inst_19426)){
var statearr_19485_19527 = state_19449__$1;
(statearr_19485_19527[(1)] = (21));

} else {
var statearr_19486_19528 = state_19449__$1;
(statearr_19486_19528[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19450 === (8))){
var inst_19407 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
if(cljs.core.truth_(inst_19407)){
var statearr_19487_19529 = state_19449__$1;
(statearr_19487_19529[(1)] = (12));

} else {
var statearr_19488_19530 = state_19449__$1;
(statearr_19488_19530[(1)] = (13));

}

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
}
}
}
});})(c__15034__auto___19496))
;
return ((function (switch__14910__auto__,c__15034__auto___19496){
return (function() {
var airhead_frontend$requests$state_machine__14911__auto__ = null;
var airhead_frontend$requests$state_machine__14911__auto____0 = (function (){
var statearr_19492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19492[(0)] = airhead_frontend$requests$state_machine__14911__auto__);

(statearr_19492[(1)] = (1));

return statearr_19492;
});
var airhead_frontend$requests$state_machine__14911__auto____1 = (function (state_19449){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19449);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19493){if((e19493 instanceof Object)){
var ex__14914__auto__ = e19493;
var statearr_19494_19531 = state_19449;
(statearr_19494_19531[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19449);

return cljs.core.cst$kw$recur;
} else {
throw e19493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19532 = state_19449;
state_19449 = G__19532;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$state_machine__14911__auto__ = function(state_19449){
switch(arguments.length){
case 0:
return airhead_frontend$requests$state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$state_machine__14911__auto____1.call(this,state_19449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$state_machine__14911__auto____0;
airhead_frontend$requests$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$state_machine__14911__auto____1;
return airhead_frontend$requests$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___19496))
})();
var state__15036__auto__ = (function (){var statearr_19495 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___19496);

return statearr_19495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___19496))
);

