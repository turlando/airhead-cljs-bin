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
airhead_frontend.requests.upload_BANG_ = (function airhead_frontend$requests$upload_BANG_(){
var form = document.getElementById("upload-form");
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var http_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var c__15034__auto___19501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___19501,form,progress_chan,http_chan){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___19501,form,progress_chan,http_chan){
return (function (state_19462){
var state_val_19463 = (state_19462[(1)]);
if((state_val_19463 === (7))){
var inst_19458 = (state_19462[(2)]);
var state_19462__$1 = state_19462;
var statearr_19464_19502 = state_19462__$1;
(statearr_19464_19502[(2)] = inst_19458);

(statearr_19464_19502[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19463 === (1))){
var state_19462__$1 = state_19462;
var statearr_19465_19503 = state_19462__$1;
(statearr_19465_19503[(2)] = null);

(statearr_19465_19503[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19463 === (4))){
var inst_19440 = (state_19462[(7)]);
var inst_19440__$1 = (state_19462[(2)]);
var state_19462__$1 = (function (){var statearr_19466 = state_19462;
(statearr_19466[(7)] = inst_19440__$1);

return statearr_19466;
})();
if(cljs.core.truth_(inst_19440__$1)){
var statearr_19467_19504 = state_19462__$1;
(statearr_19467_19504[(1)] = (5));

} else {
var statearr_19468_19505 = state_19462__$1;
(statearr_19468_19505[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19463 === (6))){
var state_19462__$1 = state_19462;
var statearr_19469_19506 = state_19462__$1;
(statearr_19469_19506[(2)] = null);

(statearr_19469_19506[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19463 === (3))){
var inst_19460 = (state_19462[(2)]);
var state_19462__$1 = state_19462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19462__$1,inst_19460);
} else {
if((state_val_19463 === (2))){
var state_19462__$1 = state_19462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19462__$1,(4),progress_chan);
} else {
if((state_val_19463 === (9))){
var state_19462__$1 = state_19462;
var statearr_19470_19507 = state_19462__$1;
(statearr_19470_19507[(2)] = null);

(statearr_19470_19507[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19463 === (5))){
var inst_19440 = (state_19462[(7)]);
var inst_19442 = (function (){var G__19471 = cljs.core.cst$kw$direction;
return (inst_19440.cljs$core$IFn$_invoke$arity$1 ? inst_19440.cljs$core$IFn$_invoke$arity$1(G__19471) : inst_19440.call(null,G__19471));
})();
var inst_19443 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19442,cljs.core.cst$kw$upload);
var state_19462__$1 = state_19462;
if(inst_19443){
var statearr_19472_19508 = state_19462__$1;
(statearr_19472_19508[(1)] = (8));

} else {
var statearr_19473_19509 = state_19462__$1;
(statearr_19473_19509[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19463 === (10))){
var inst_19454 = (state_19462[(2)]);
var state_19462__$1 = (function (){var statearr_19474 = state_19462;
(statearr_19474[(8)] = inst_19454);

return statearr_19474;
})();
var statearr_19475_19510 = state_19462__$1;
(statearr_19475_19510[(2)] = null);

(statearr_19475_19510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19463 === (8))){
var inst_19440 = (state_19462[(7)]);
var inst_19445 = (function (){var G__19476 = cljs.core.cst$kw$loaded;
return (inst_19440.cljs$core$IFn$_invoke$arity$1 ? inst_19440.cljs$core$IFn$_invoke$arity$1(G__19476) : inst_19440.call(null,G__19476));
})();
var inst_19446 = (function (){var G__19477 = cljs.core.cst$kw$total;
return (inst_19440.cljs$core$IFn$_invoke$arity$1 ? inst_19440.cljs$core$IFn$_invoke$arity$1(G__19477) : inst_19440.call(null,G__19477));
})();
var inst_19447 = (inst_19445 / inst_19446);
var inst_19448 = (inst_19447 * (100));
var inst_19449 = goog.string.format("Uploading: %.0f%",inst_19448);
var inst_19450 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_percentage,inst_19448);
var inst_19451 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,inst_19449);
var state_19462__$1 = (function (){var statearr_19478 = state_19462;
(statearr_19478[(9)] = inst_19450);

return statearr_19478;
})();
var statearr_19479_19511 = state_19462__$1;
(statearr_19479_19511[(2)] = inst_19451);

(statearr_19479_19511[(1)] = (10));


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
});})(c__15034__auto___19501,form,progress_chan,http_chan))
;
return ((function (switch__14910__auto__,c__15034__auto___19501,form,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_19483 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19483[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__);

(statearr_19483[(1)] = (1));

return statearr_19483;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1 = (function (state_19462){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19462);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19484){if((e19484 instanceof Object)){
var ex__14914__auto__ = e19484;
var statearr_19485_19512 = state_19462;
(statearr_19485_19512[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19462);

return cljs.core.cst$kw$recur;
} else {
throw e19484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19513 = state_19462;
state_19462 = G__19513;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = function(state_19462){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1.call(this,state_19462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___19501,form,progress_chan,http_chan))
})();
var state__15036__auto__ = (function (){var statearr_19486 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___19501);

return statearr_19486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___19501,form,progress_chan,http_chan))
);


var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__,form,progress_chan,http_chan){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__,form,progress_chan,http_chan){
return (function (state_19491){
var state_val_19492 = (state_19491[(1)]);
if((state_val_19492 === (1))){
var state_19491__$1 = state_19491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19491__$1,(2),http_chan);
} else {
if((state_val_19492 === (2))){
var inst_19488 = (state_19491[(2)]);
var inst_19489 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,"Done! It will show in the library once it gets transcoded.");
var state_19491__$1 = (function (){var statearr_19493 = state_19491;
(statearr_19493[(7)] = inst_19488);

return statearr_19493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19491__$1,inst_19489);
} else {
return null;
}
}
});})(c__15034__auto__,form,progress_chan,http_chan))
;
return ((function (switch__14910__auto__,c__15034__auto__,form,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0 = (function (){
var statearr_19497 = [null,null,null,null,null,null,null,null];
(statearr_19497[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__);

(statearr_19497[(1)] = (1));

return statearr_19497;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1 = (function (state_19491){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19491);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19498){if((e19498 instanceof Object)){
var ex__14914__auto__ = e19498;
var statearr_19499_19514 = state_19491;
(statearr_19499_19514[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19491);

return cljs.core.cst$kw$recur;
} else {
throw e19498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19515 = state_19491;
state_19491 = G__19515;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__ = function(state_19491){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1.call(this,state_19491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__,form,progress_chan,http_chan))
})();
var state__15036__auto__ = (function (){var statearr_19500 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_19500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__,form,progress_chan,http_chan))
);

return c__15034__auto__;
});
airhead_frontend.requests.get_updates_BANG_ = (function airhead_frontend$requests$get_updates_BANG_(){
airhead_frontend.requests.get_info_BANG_();

airhead_frontend.requests.get_playlist_BANG_();

return airhead_frontend.requests.get_library_BANG_();
});
airhead_frontend.requests.get_updates_BANG_();
var c__15034__auto___19633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___19633){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___19633){
return (function (state_19586){
var state_val_19587 = (state_19586[(1)]);
if((state_val_19587 === (7))){
var state_19586__$1 = state_19586;
var statearr_19588_19634 = state_19586__$1;
(statearr_19588_19634[(2)] = false);

(statearr_19588_19634[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (20))){
var inst_19570 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
if(cljs.core.truth_(inst_19570)){
var statearr_19589_19635 = state_19586__$1;
(statearr_19589_19635[(1)] = (24));

} else {
var statearr_19590_19636 = state_19586__$1;
(statearr_19590_19636[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (27))){
var state_19586__$1 = state_19586;
var statearr_19591_19637 = state_19586__$1;
(statearr_19591_19637[(2)] = null);

(statearr_19591_19637[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (1))){
var inst_19517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:");
var state_19586__$1 = state_19586;
if(inst_19517){
var statearr_19592_19638 = state_19586__$1;
(statearr_19592_19638[(1)] = (2));

} else {
var statearr_19593_19639 = state_19586__$1;
(statearr_19593_19639[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (24))){
var inst_19554 = (state_19586[(7)]);
var inst_19572 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19554);
var state_19586__$1 = state_19586;
var statearr_19594_19640 = state_19586__$1;
(statearr_19594_19640[(2)] = inst_19572);

(statearr_19594_19640[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (4))){
var inst_19521 = (state_19586[(2)]);
var inst_19522 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19521),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_19523 = [cljs.core.cst$kw$format];
var inst_19524 = [cljs.core.cst$kw$json_DASH_kw];
var inst_19525 = cljs.core.PersistentHashMap.fromArrays(inst_19523,inst_19524);
var inst_19526 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_19522,cljs.core.array_seq([inst_19525], 0));
var state_19586__$1 = state_19586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19586__$1,(5),inst_19526);
} else {
if((state_val_19587 === (15))){
var inst_19550 = (state_19586[(8)]);
var state_19586__$1 = state_19586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19586__$1,(17),inst_19550);
} else {
if((state_val_19587 === (21))){
var state_19586__$1 = state_19586;
var statearr_19595_19641 = state_19586__$1;
(statearr_19595_19641[(2)] = true);

(statearr_19595_19641[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (13))){
var inst_19528 = (state_19586[(9)]);
var state_19586__$1 = state_19586;
var statearr_19596_19642 = state_19586__$1;
(statearr_19596_19642[(2)] = inst_19528);

(statearr_19596_19642[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (22))){
var state_19586__$1 = state_19586;
var statearr_19597_19643 = state_19586__$1;
(statearr_19597_19643[(2)] = false);

(statearr_19597_19643[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (29))){
var inst_19582 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
var statearr_19598_19644 = state_19586__$1;
(statearr_19598_19644[(2)] = inst_19582);

(statearr_19598_19644[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (6))){
var inst_19528 = (state_19586[(9)]);
var inst_19533 = inst_19528.cljs$lang$protocol_mask$partition0$;
var inst_19534 = (inst_19533 & (64));
var inst_19535 = inst_19528.cljs$core$ISeq$;
var inst_19536 = (cljs.core.PROTOCOL_SENTINEL === inst_19535);
var inst_19537 = (inst_19534) || (inst_19536);
var state_19586__$1 = state_19586;
if(cljs.core.truth_(inst_19537)){
var statearr_19599_19645 = state_19586__$1;
(statearr_19599_19645[(1)] = (9));

} else {
var statearr_19600_19646 = state_19586__$1;
(statearr_19600_19646[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (28))){
var state_19586__$1 = state_19586;
var statearr_19601_19647 = state_19586__$1;
(statearr_19601_19647[(2)] = null);

(statearr_19601_19647[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (25))){
var inst_19554 = (state_19586[(7)]);
var state_19586__$1 = state_19586;
var statearr_19602_19648 = state_19586__$1;
(statearr_19602_19648[(2)] = inst_19554);

(statearr_19602_19648[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (17))){
var inst_19554 = (state_19586[(7)]);
var inst_19554__$1 = (state_19586[(2)]);
var inst_19556 = (inst_19554__$1 == null);
var inst_19557 = cljs.core.not(inst_19556);
var state_19586__$1 = (function (){var statearr_19603 = state_19586;
(statearr_19603[(7)] = inst_19554__$1);

return statearr_19603;
})();
if(inst_19557){
var statearr_19604_19649 = state_19586__$1;
(statearr_19604_19649[(1)] = (18));

} else {
var statearr_19605_19650 = state_19586__$1;
(statearr_19605_19650[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (3))){
var state_19586__$1 = state_19586;
var statearr_19606_19651 = state_19586__$1;
(statearr_19606_19651[(2)] = "ws://");

(statearr_19606_19651[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (12))){
var inst_19528 = (state_19586[(9)]);
var inst_19546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19528);
var state_19586__$1 = state_19586;
var statearr_19607_19652 = state_19586__$1;
(statearr_19607_19652[(2)] = inst_19546);

(statearr_19607_19652[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (2))){
var state_19586__$1 = state_19586;
var statearr_19608_19653 = state_19586__$1;
(statearr_19608_19653[(2)] = "wss://");

(statearr_19608_19653[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (23))){
var inst_19567 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
var statearr_19609_19654 = state_19586__$1;
(statearr_19609_19654[(2)] = inst_19567);

(statearr_19609_19654[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (19))){
var state_19586__$1 = state_19586;
var statearr_19610_19655 = state_19586__$1;
(statearr_19610_19655[(2)] = false);

(statearr_19610_19655[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (11))){
var inst_19541 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
var statearr_19611_19656 = state_19586__$1;
(statearr_19611_19656[(2)] = inst_19541);

(statearr_19611_19656[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (9))){
var state_19586__$1 = state_19586;
var statearr_19612_19657 = state_19586__$1;
(statearr_19612_19657[(2)] = true);

(statearr_19612_19657[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (5))){
var inst_19528 = (state_19586[(9)]);
var inst_19528__$1 = (state_19586[(2)]);
var inst_19530 = (inst_19528__$1 == null);
var inst_19531 = cljs.core.not(inst_19530);
var state_19586__$1 = (function (){var statearr_19613 = state_19586;
(statearr_19613[(9)] = inst_19528__$1);

return statearr_19613;
})();
if(inst_19531){
var statearr_19614_19658 = state_19586__$1;
(statearr_19614_19658[(1)] = (6));

} else {
var statearr_19615_19659 = state_19586__$1;
(statearr_19615_19659[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (14))){
var inst_19549 = (state_19586[(2)]);
var inst_19550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19549,cljs.core.cst$kw$ws_DASH_channel);
var state_19586__$1 = (function (){var statearr_19616 = state_19586;
(statearr_19616[(8)] = inst_19550);

return statearr_19616;
})();
var statearr_19617_19660 = state_19586__$1;
(statearr_19617_19660[(2)] = null);

(statearr_19617_19660[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (26))){
var inst_19575 = (state_19586[(2)]);
var inst_19576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19575,cljs.core.cst$kw$message);
var inst_19577 = airhead_frontend.requests.get_updates_BANG_();
var state_19586__$1 = (function (){var statearr_19618 = state_19586;
(statearr_19618[(10)] = inst_19577);

return statearr_19618;
})();
if(cljs.core.truth_(inst_19576)){
var statearr_19619_19661 = state_19586__$1;
(statearr_19619_19661[(1)] = (27));

} else {
var statearr_19620_19662 = state_19586__$1;
(statearr_19620_19662[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (16))){
var inst_19584 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19586__$1,inst_19584);
} else {
if((state_val_19587 === (10))){
var state_19586__$1 = state_19586;
var statearr_19621_19663 = state_19586__$1;
(statearr_19621_19663[(2)] = false);

(statearr_19621_19663[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (18))){
var inst_19554 = (state_19586[(7)]);
var inst_19559 = inst_19554.cljs$lang$protocol_mask$partition0$;
var inst_19560 = (inst_19559 & (64));
var inst_19561 = inst_19554.cljs$core$ISeq$;
var inst_19562 = (cljs.core.PROTOCOL_SENTINEL === inst_19561);
var inst_19563 = (inst_19560) || (inst_19562);
var state_19586__$1 = state_19586;
if(cljs.core.truth_(inst_19563)){
var statearr_19622_19664 = state_19586__$1;
(statearr_19622_19664[(1)] = (21));

} else {
var statearr_19623_19665 = state_19586__$1;
(statearr_19623_19665[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19587 === (8))){
var inst_19544 = (state_19586[(2)]);
var state_19586__$1 = state_19586;
if(cljs.core.truth_(inst_19544)){
var statearr_19624_19666 = state_19586__$1;
(statearr_19624_19666[(1)] = (12));

} else {
var statearr_19625_19667 = state_19586__$1;
(statearr_19625_19667[(1)] = (13));

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
});})(c__15034__auto___19633))
;
return ((function (switch__14910__auto__,c__15034__auto___19633){
return (function() {
var airhead_frontend$requests$state_machine__14911__auto__ = null;
var airhead_frontend$requests$state_machine__14911__auto____0 = (function (){
var statearr_19629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19629[(0)] = airhead_frontend$requests$state_machine__14911__auto__);

(statearr_19629[(1)] = (1));

return statearr_19629;
});
var airhead_frontend$requests$state_machine__14911__auto____1 = (function (state_19586){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_19586);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e19630){if((e19630 instanceof Object)){
var ex__14914__auto__ = e19630;
var statearr_19631_19668 = state_19586;
(statearr_19631_19668[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19586);

return cljs.core.cst$kw$recur;
} else {
throw e19630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__19669 = state_19586;
state_19586 = G__19669;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
airhead_frontend$requests$state_machine__14911__auto__ = function(state_19586){
switch(arguments.length){
case 0:
return airhead_frontend$requests$state_machine__14911__auto____0.call(this);
case 1:
return airhead_frontend$requests$state_machine__14911__auto____1.call(this,state_19586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$state_machine__14911__auto____0;
airhead_frontend$requests$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$state_machine__14911__auto____1;
return airhead_frontend$requests$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___19633))
})();
var state__15036__auto__ = (function (){var statearr_19632 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_19632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___19633);

return statearr_19632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___19633))
);

