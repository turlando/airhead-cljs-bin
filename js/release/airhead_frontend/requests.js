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
airhead_frontend.requests.upload_BANG_ = (function airhead_frontend$requests$upload_BANG_(form){
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var http_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var c__15034__auto___19499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___19499,progress_chan,http_chan){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___19499,progress_chan,http_chan){
return (function (state_19461){
var state_val_19462 = (state_19461[(1)]);
if((state_val_19462 === (7))){
var inst_19457 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
var statearr_19463_19500 = state_19461__$1;
(statearr_19463_19500[(2)] = inst_19457);

(statearr_19463_19500[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (1))){
var state_19461__$1 = state_19461;
var statearr_19464_19501 = state_19461__$1;
(statearr_19464_19501[(2)] = null);

(statearr_19464_19501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (4))){
var inst_19439 = (state_19461[(7)]);
var inst_19439__$1 = (state_19461[(2)]);
var state_19461__$1 = (function (){var statearr_19465 = state_19461;
(statearr_19465[(7)] = inst_19439__$1);

return statearr_19465;
})();
if(cljs.core.truth_(inst_19439__$1)){
var statearr_19466_19502 = state_19461__$1;
(statearr_19466_19502[(1)] = (5));

} else {
var statearr_19467_19503 = state_19461__$1;
(statearr_19467_19503[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (6))){
var state_19461__$1 = state_19461;
var statearr_19468_19504 = state_19461__$1;
(statearr_19468_19504[(2)] = null);

(statearr_19468_19504[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (3))){
var inst_19459 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19461__$1,inst_19459);
} else {
if((state_val_19462 === (2))){
var state_19461__$1 = state_19461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19461__$1,(4),progress_chan);
} else {
if((state_val_19462 === (9))){
var state_19461__$1 = state_19461;
var statearr_19469_19505 = state_19461__$1;
(statearr_19469_19505[(2)] = null);

(statearr_19469_19505[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (5))){
var inst_19439 = (state_19461[(7)]);
var inst_19441 = (function (){var G__19470 = cljs.core.cst$kw$direction;
return (inst_19439.cljs$core$IFn$_invoke$arity$1 ? inst_19439.cljs$core$IFn$_invoke$arity$1(G__19470) : inst_19439.call(null,G__19470));
})();
var inst_19442 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19441,cljs.core.cst$kw$upload);
var state_19461__$1 = state_19461;
if(inst_19442){
var statearr_19471_19506 = state_19461__$1;
(statearr_19471_19506[(1)] = (8));

} else {
var statearr_19472_19507 = state_19461__$1;
(statearr_19472_19507[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (10))){
var inst_19453 = (state_19461[(2)]);
var state_19461__$1 = (function (){var statearr_19473 = state_19461;
(statearr_19473[(8)] = inst_19453);

return statearr_19473;
})();
var statearr_19474_19508 = state_19461__$1;
(statearr_19474_19508[(2)] = null);

(statearr_19474_19508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19462 === (8))){
var inst_19439 = (state_19461[(7)]);
var inst_19444 = (function (){var G__19475 = cljs.core.cst$kw$loaded;
return (inst_19439.cljs$core$IFn$_invoke$arity$1 ? inst_19439.cljs$core$IFn$_invoke$arity$1(G__19475) : inst_19439.call(null,G__19475));
})();
var inst_19445 = (function (){var G__19476 = cljs.core.cst$kw$total;
return (inst_19439.cljs$core$IFn$_invoke$arity$1 ? inst_19439.cljs$core$IFn$_invoke$arity$1(G__19476) : inst_19439.call(null,G__19476));
})();
var inst_19446 = (inst_19444 / inst_19445);
var inst_19447 = (inst_19446 * (100));
var inst_19448 = goog.string.format("Uploading: %.0f%",inst_19447);
var inst_19449 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_percentage,inst_19447);
var inst_19450 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,inst_19448);
var state_19461__$1 = (function (){var statearr_19477 = state_19461;
(statearr_19477[(9)] = inst_19449);

return statearr_19477;
})();
var statearr_19478_19509 = state_19461__$1;
(statearr_19478_19509[(2)] = inst_19450);

(statearr_19478_19509[(1)] = (10));


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
});})(c__15034__auto___19499,progress_chan,http_chan))
;
return ((function (switch__14910__auto__,c__15034__auto___19499,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_19482 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19482[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__);

(statearr_19482[(1)] = (1));

return statearr_19482;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1 = (function (state_19461){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19461);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19483){if((e19483 instanceof Object)){
var ex__14914__auto__ = e19483;
var statearr_19484_19510 = state_19461;
(statearr_19484_19510[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19461);

return cljs.core.cst$kw$recur;
} else {
throw e19483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19511 = state_19461;
state_19461 = G__19511;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = function(state_19461){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1.call(this,state_19461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___19499,progress_chan,http_chan))
})();
var state__15036__auto__ = (function (){var statearr_19485 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___19499);

return statearr_19485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___19499,progress_chan,http_chan))
);


var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__,progress_chan,http_chan){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__,progress_chan,http_chan){
return (function (state_19490){
var state_val_19491 = (state_19490[(1)]);
if((state_val_19491 === (1))){
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19490__$1,(2),http_chan);
} else {
if((state_val_19491 === (2))){
var inst_19487 = (state_19490[(2)]);
var inst_19488 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_response,inst_19487);
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19490__$1,inst_19488);
} else {
return null;
}
}
});})(c__15034__auto__,progress_chan,http_chan))
;
return ((function (switch__14910__auto__,c__15034__auto__,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_19495 = [null,null,null,null,null,null,null];
(statearr_19495[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__);

(statearr_19495[(1)] = (1));

return statearr_19495;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1 = (function (state_19490){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19490);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19496){if((e19496 instanceof Object)){
var ex__14914__auto__ = e19496;
var statearr_19497_19512 = state_19490;
(statearr_19497_19512[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19490);

return cljs.core.cst$kw$recur;
} else {
throw e19496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19513 = state_19490;
state_19490 = G__19513;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = function(state_19490){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1.call(this,state_19490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__,progress_chan,http_chan))
})();
var state__15036__auto__ = (function (){var statearr_19498 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_19498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__,progress_chan,http_chan))
);

return c__15034__auto__;
});
airhead_frontend.requests.get_updates_BANG_ = (function airhead_frontend$requests$get_updates_BANG_(){
airhead_frontend.requests.get_info_BANG_();

airhead_frontend.requests.get_playlist_BANG_();

return airhead_frontend.requests.get_library_BANG_();
});
airhead_frontend.requests.get_updates_BANG_();
var c__15034__auto___19631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___19631){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___19631){
return (function (state_19584){
var state_val_19585 = (state_19584[(1)]);
if((state_val_19585 === (7))){
var state_19584__$1 = state_19584;
var statearr_19586_19632 = state_19584__$1;
(statearr_19586_19632[(2)] = false);

(statearr_19586_19632[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (20))){
var inst_19568 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
if(cljs.core.truth_(inst_19568)){
var statearr_19587_19633 = state_19584__$1;
(statearr_19587_19633[(1)] = (24));

} else {
var statearr_19588_19634 = state_19584__$1;
(statearr_19588_19634[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (27))){
var state_19584__$1 = state_19584;
var statearr_19589_19635 = state_19584__$1;
(statearr_19589_19635[(2)] = null);

(statearr_19589_19635[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (1))){
var inst_19515 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:");
var state_19584__$1 = state_19584;
if(inst_19515){
var statearr_19590_19636 = state_19584__$1;
(statearr_19590_19636[(1)] = (2));

} else {
var statearr_19591_19637 = state_19584__$1;
(statearr_19591_19637[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (24))){
var inst_19552 = (state_19584[(7)]);
var inst_19570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19552);
var state_19584__$1 = state_19584;
var statearr_19592_19638 = state_19584__$1;
(statearr_19592_19638[(2)] = inst_19570);

(statearr_19592_19638[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (4))){
var inst_19519 = (state_19584[(2)]);
var inst_19520 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19519),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_19521 = [cljs.core.cst$kw$format];
var inst_19522 = [cljs.core.cst$kw$json_DASH_kw];
var inst_19523 = cljs.core.PersistentHashMap.fromArrays(inst_19521,inst_19522);
var inst_19524 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_19520,cljs.core.array_seq([inst_19523], 0));
var state_19584__$1 = state_19584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19584__$1,(5),inst_19524);
} else {
if((state_val_19585 === (15))){
var inst_19548 = (state_19584[(8)]);
var state_19584__$1 = state_19584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19584__$1,(17),inst_19548);
} else {
if((state_val_19585 === (21))){
var state_19584__$1 = state_19584;
var statearr_19593_19639 = state_19584__$1;
(statearr_19593_19639[(2)] = true);

(statearr_19593_19639[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (13))){
var inst_19526 = (state_19584[(9)]);
var state_19584__$1 = state_19584;
var statearr_19594_19640 = state_19584__$1;
(statearr_19594_19640[(2)] = inst_19526);

(statearr_19594_19640[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (22))){
var state_19584__$1 = state_19584;
var statearr_19595_19641 = state_19584__$1;
(statearr_19595_19641[(2)] = false);

(statearr_19595_19641[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (29))){
var inst_19580 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
var statearr_19596_19642 = state_19584__$1;
(statearr_19596_19642[(2)] = inst_19580);

(statearr_19596_19642[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (6))){
var inst_19526 = (state_19584[(9)]);
var inst_19531 = inst_19526.cljs$lang$protocol_mask$partition0$;
var inst_19532 = (inst_19531 & (64));
var inst_19533 = inst_19526.cljs$core$ISeq$;
var inst_19534 = (cljs.core.PROTOCOL_SENTINEL === inst_19533);
var inst_19535 = (inst_19532) || (inst_19534);
var state_19584__$1 = state_19584;
if(cljs.core.truth_(inst_19535)){
var statearr_19597_19643 = state_19584__$1;
(statearr_19597_19643[(1)] = (9));

} else {
var statearr_19598_19644 = state_19584__$1;
(statearr_19598_19644[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (28))){
var state_19584__$1 = state_19584;
var statearr_19599_19645 = state_19584__$1;
(statearr_19599_19645[(2)] = null);

(statearr_19599_19645[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (25))){
var inst_19552 = (state_19584[(7)]);
var state_19584__$1 = state_19584;
var statearr_19600_19646 = state_19584__$1;
(statearr_19600_19646[(2)] = inst_19552);

(statearr_19600_19646[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (17))){
var inst_19552 = (state_19584[(7)]);
var inst_19552__$1 = (state_19584[(2)]);
var inst_19554 = (inst_19552__$1 == null);
var inst_19555 = cljs.core.not(inst_19554);
var state_19584__$1 = (function (){var statearr_19601 = state_19584;
(statearr_19601[(7)] = inst_19552__$1);

return statearr_19601;
})();
if(inst_19555){
var statearr_19602_19647 = state_19584__$1;
(statearr_19602_19647[(1)] = (18));

} else {
var statearr_19603_19648 = state_19584__$1;
(statearr_19603_19648[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (3))){
var state_19584__$1 = state_19584;
var statearr_19604_19649 = state_19584__$1;
(statearr_19604_19649[(2)] = "ws://");

(statearr_19604_19649[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (12))){
var inst_19526 = (state_19584[(9)]);
var inst_19544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19526);
var state_19584__$1 = state_19584;
var statearr_19605_19650 = state_19584__$1;
(statearr_19605_19650[(2)] = inst_19544);

(statearr_19605_19650[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (2))){
var state_19584__$1 = state_19584;
var statearr_19606_19651 = state_19584__$1;
(statearr_19606_19651[(2)] = "wss://");

(statearr_19606_19651[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (23))){
var inst_19565 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
var statearr_19607_19652 = state_19584__$1;
(statearr_19607_19652[(2)] = inst_19565);

(statearr_19607_19652[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (19))){
var state_19584__$1 = state_19584;
var statearr_19608_19653 = state_19584__$1;
(statearr_19608_19653[(2)] = false);

(statearr_19608_19653[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (11))){
var inst_19539 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
var statearr_19609_19654 = state_19584__$1;
(statearr_19609_19654[(2)] = inst_19539);

(statearr_19609_19654[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (9))){
var state_19584__$1 = state_19584;
var statearr_19610_19655 = state_19584__$1;
(statearr_19610_19655[(2)] = true);

(statearr_19610_19655[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (5))){
var inst_19526 = (state_19584[(9)]);
var inst_19526__$1 = (state_19584[(2)]);
var inst_19528 = (inst_19526__$1 == null);
var inst_19529 = cljs.core.not(inst_19528);
var state_19584__$1 = (function (){var statearr_19611 = state_19584;
(statearr_19611[(9)] = inst_19526__$1);

return statearr_19611;
})();
if(inst_19529){
var statearr_19612_19656 = state_19584__$1;
(statearr_19612_19656[(1)] = (6));

} else {
var statearr_19613_19657 = state_19584__$1;
(statearr_19613_19657[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (14))){
var inst_19547 = (state_19584[(2)]);
var inst_19548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19547,cljs.core.cst$kw$ws_DASH_channel);
var state_19584__$1 = (function (){var statearr_19614 = state_19584;
(statearr_19614[(8)] = inst_19548);

return statearr_19614;
})();
var statearr_19615_19658 = state_19584__$1;
(statearr_19615_19658[(2)] = null);

(statearr_19615_19658[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (26))){
var inst_19573 = (state_19584[(2)]);
var inst_19574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19573,cljs.core.cst$kw$message);
var inst_19575 = airhead_frontend.requests.get_updates_BANG_();
var state_19584__$1 = (function (){var statearr_19616 = state_19584;
(statearr_19616[(10)] = inst_19575);

return statearr_19616;
})();
if(cljs.core.truth_(inst_19574)){
var statearr_19617_19659 = state_19584__$1;
(statearr_19617_19659[(1)] = (27));

} else {
var statearr_19618_19660 = state_19584__$1;
(statearr_19618_19660[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (16))){
var inst_19582 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19584__$1,inst_19582);
} else {
if((state_val_19585 === (10))){
var state_19584__$1 = state_19584;
var statearr_19619_19661 = state_19584__$1;
(statearr_19619_19661[(2)] = false);

(statearr_19619_19661[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (18))){
var inst_19552 = (state_19584[(7)]);
var inst_19557 = inst_19552.cljs$lang$protocol_mask$partition0$;
var inst_19558 = (inst_19557 & (64));
var inst_19559 = inst_19552.cljs$core$ISeq$;
var inst_19560 = (cljs.core.PROTOCOL_SENTINEL === inst_19559);
var inst_19561 = (inst_19558) || (inst_19560);
var state_19584__$1 = state_19584;
if(cljs.core.truth_(inst_19561)){
var statearr_19620_19662 = state_19584__$1;
(statearr_19620_19662[(1)] = (21));

} else {
var statearr_19621_19663 = state_19584__$1;
(statearr_19621_19663[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19585 === (8))){
var inst_19542 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
if(cljs.core.truth_(inst_19542)){
var statearr_19622_19664 = state_19584__$1;
(statearr_19622_19664[(1)] = (12));

} else {
var statearr_19623_19665 = state_19584__$1;
(statearr_19623_19665[(1)] = (13));

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
});})(c__15034__auto___19631))
;
return ((function (switch__14910__auto__,c__15034__auto___19631){
return (function() {
var airhead_frontend$requests$state_machine__14911__auto__ = null;
var airhead_frontend$requests$state_machine__14911__auto____0 = (function (){
var statearr_19627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19627[(0)] = airhead_frontend$requests$state_machine__14911__auto__);

(statearr_19627[(1)] = (1));

return statearr_19627;
});
var airhead_frontend$requests$state_machine__14911__auto____1 = (function (state_19584){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19584);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19628){if((e19628 instanceof Object)){
var ex__14914__auto__ = e19628;
var statearr_19629_19666 = state_19584;
(statearr_19629_19666[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19584);

return cljs.core.cst$kw$recur;
} else {
throw e19628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19667 = state_19584;
state_19584 = G__19667;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$state_machine__14911__auto__ = function(state_19584){
switch(arguments.length){
case 0:
return airhead_frontend$requests$state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$state_machine__14911__auto____1.call(this,state_19584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$state_machine__14911__auto____0;
airhead_frontend$requests$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$state_machine__14911__auto____1;
return airhead_frontend$requests$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___19631))
})();
var state__15036__auto__ = (function (){var statearr_19630 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___19631);

return statearr_19630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___19631))
);

