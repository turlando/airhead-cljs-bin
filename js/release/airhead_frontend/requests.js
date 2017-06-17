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
var c__11488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto__){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto__){
return (function (state_14849){
var state_val_14850 = (state_14849[(1)]);
if((state_val_14850 === (1))){
var inst_14843 = cljs_http.client.get("/api/info");
var state_14849__$1 = state_14849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14849__$1,(2),inst_14843);
} else {
if((state_val_14850 === (2))){
var inst_14845 = (state_14849[(2)]);
var inst_14846 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_14845);
var inst_14847 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$info,inst_14846);
var state_14849__$1 = state_14849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14849__$1,inst_14847);
} else {
return null;
}
}
});})(c__11488__auto__))
;
return ((function (switch__11411__auto__,c__11488__auto__){
return (function() {
var airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_14854 = [null,null,null,null,null,null,null];
(statearr_14854[(0)] = airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__);

(statearr_14854[(1)] = (1));

return statearr_14854;
});
var airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____1 = (function (state_14849){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_14849);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14855){if((e14855 instanceof Object)){
var ex__11415__auto__ = e14855;
var statearr_14856_14858 = state_14849;
(statearr_14856_14858[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14849);

return cljs.core.cst$kw$recur;
} else {
throw e14855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__14859 = state_14849;
state_14849 = G__14859;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__ = function(state_14849){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____1.call(this,state_14849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__))
})();
var state__11490__auto__ = (function (){var statearr_14857 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_14857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_14857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto__))
);

return c__11488__auto__;
});
airhead_frontend.requests.get_playlist_BANG_ = (function airhead_frontend$requests$get_playlist_BANG_(){
var c__11488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto__){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto__){
return (function (state_14891){
var state_val_14892 = (state_14891[(1)]);
if((state_val_14892 === (1))){
var inst_14882 = cljs_http.client.get("/api/playlist");
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14891__$1,(2),inst_14882);
} else {
if((state_val_14892 === (2))){
var inst_14884 = (state_14891[(2)]);
var inst_14885 = (function (){var G__14893 = cljs.core.cst$kw$body;
return (inst_14884.cljs$core$IFn$_invoke$arity$1 ? inst_14884.cljs$core$IFn$_invoke$arity$1(G__14893) : inst_14884.call(null,G__14893));
})();
var inst_14886 = (function (){var G__14894 = cljs.core.cst$kw$next;
return (inst_14885.cljs$core$IFn$_invoke$arity$1 ? inst_14885.cljs$core$IFn$_invoke$arity$1(G__14894) : inst_14885.call(null,G__14894));
})();
var inst_14887 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$playlist,inst_14886);
var inst_14888 = (function (){var G__14895 = cljs.core.cst$kw$current;
return (inst_14885.cljs$core$IFn$_invoke$arity$1 ? inst_14885.cljs$core$IFn$_invoke$arity$1(G__14895) : inst_14885.call(null,G__14895));
})();
var inst_14889 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$now_DASH_playing,inst_14888);
var state_14891__$1 = (function (){var statearr_14896 = state_14891;
(statearr_14896[(7)] = inst_14887);

return statearr_14896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14891__$1,inst_14889);
} else {
return null;
}
}
});})(c__11488__auto__))
;
return ((function (switch__11411__auto__,c__11488__auto__){
return (function() {
var airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_14900 = [null,null,null,null,null,null,null,null];
(statearr_14900[(0)] = airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__);

(statearr_14900[(1)] = (1));

return statearr_14900;
});
var airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____1 = (function (state_14891){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_14891);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14901){if((e14901 instanceof Object)){
var ex__11415__auto__ = e14901;
var statearr_14902_14904 = state_14891;
(statearr_14902_14904[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14891);

return cljs.core.cst$kw$recur;
} else {
throw e14901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__14905 = state_14891;
state_14891 = G__14905;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__ = function(state_14891){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____1.call(this,state_14891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__))
})();
var state__11490__auto__ = (function (){var statearr_14903 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_14903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_14903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto__))
);

return c__11488__auto__;
});
airhead_frontend.requests.playlist_add_BANG_ = (function airhead_frontend$requests$playlist_add_BANG_(id){
return cljs_http.client.put([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_frontend.requests.playlist_remove_BANG_ = (function airhead_frontend$requests$playlist_remove_BANG_(id){
return cljs_http.client.delete$([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_frontend.requests.get_library_BANG_ = (function airhead_frontend$requests$get_library_BANG_(){
var c__11488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto__){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto__){
return (function (state_14950){
var state_val_14951 = (state_14950[(1)]);
if((state_val_14951 === (1))){
var inst_14933 = [cljs.core.cst$kw$query_DASH_params];
var inst_14934 = ["q"];
var inst_14935 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state));
var inst_14936 = (function (){var G__14952 = cljs.core.cst$kw$query;
return (inst_14935.cljs$core$IFn$_invoke$arity$1 ? inst_14935.cljs$core$IFn$_invoke$arity$1(G__14952) : inst_14935.call(null,G__14952));
})();
var inst_14937 = [inst_14936];
var inst_14938 = cljs.core.PersistentHashMap.fromArrays(inst_14934,inst_14937);
var inst_14939 = [inst_14938];
var inst_14940 = cljs.core.PersistentHashMap.fromArrays(inst_14933,inst_14939);
var inst_14941 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([inst_14940], 0));
var state_14950__$1 = state_14950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14950__$1,(2),inst_14941);
} else {
if((state_val_14951 === (2))){
var inst_14943 = (state_14950[(2)]);
var inst_14944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14945 = [cljs.core.cst$kw$body,cljs.core.cst$kw$tracks];
var inst_14946 = (new cljs.core.PersistentVector(null,2,(5),inst_14944,inst_14945,null));
var inst_14947 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_14943,inst_14946);
var inst_14948 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$library,inst_14947);
var state_14950__$1 = state_14950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14950__$1,inst_14948);
} else {
return null;
}
}
});})(c__11488__auto__))
;
return ((function (switch__11411__auto__,c__11488__auto__){
return (function() {
var airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_14956 = [null,null,null,null,null,null,null];
(statearr_14956[(0)] = airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__);

(statearr_14956[(1)] = (1));

return statearr_14956;
});
var airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____1 = (function (state_14950){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_14950);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14957){if((e14957 instanceof Object)){
var ex__11415__auto__ = e14957;
var statearr_14958_14960 = state_14950;
(statearr_14958_14960[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14950);

return cljs.core.cst$kw$recur;
} else {
throw e14957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__14961 = state_14950;
state_14950 = G__14961;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__ = function(state_14950){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____1.call(this,state_14950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__))
})();
var state__11490__auto__ = (function (){var statearr_14959 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_14959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_14959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto__))
);

return c__11488__auto__;
});
airhead_frontend.requests.upload_BANG_ = (function airhead_frontend$requests$upload_BANG_(form){
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var http_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var c__11488__auto___15088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto___15088,progress_chan,http_chan){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto___15088,progress_chan,http_chan){
return (function (state_15049){
var state_val_15050 = (state_15049[(1)]);
if((state_val_15050 === (7))){
var inst_15045 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
var statearr_15051_15089 = state_15049__$1;
(statearr_15051_15089[(2)] = inst_15045);

(statearr_15051_15089[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15050 === (1))){
var state_15049__$1 = state_15049;
var statearr_15052_15090 = state_15049__$1;
(statearr_15052_15090[(2)] = null);

(statearr_15052_15090[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15050 === (4))){
var inst_15027 = (state_15049[(7)]);
var inst_15027__$1 = (state_15049[(2)]);
var state_15049__$1 = (function (){var statearr_15053 = state_15049;
(statearr_15053[(7)] = inst_15027__$1);

return statearr_15053;
})();
if(cljs.core.truth_(inst_15027__$1)){
var statearr_15054_15091 = state_15049__$1;
(statearr_15054_15091[(1)] = (5));

} else {
var statearr_15055_15092 = state_15049__$1;
(statearr_15055_15092[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15050 === (6))){
var state_15049__$1 = state_15049;
var statearr_15056_15093 = state_15049__$1;
(statearr_15056_15093[(2)] = null);

(statearr_15056_15093[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15050 === (3))){
var inst_15047 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15049__$1,inst_15047);
} else {
if((state_val_15050 === (2))){
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15049__$1,(4),progress_chan);
} else {
if((state_val_15050 === (9))){
var state_15049__$1 = state_15049;
var statearr_15057_15094 = state_15049__$1;
(statearr_15057_15094[(2)] = null);

(statearr_15057_15094[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15050 === (5))){
var inst_15027 = (state_15049[(7)]);
var inst_15029 = (function (){var G__15058 = cljs.core.cst$kw$direction;
return (inst_15027.cljs$core$IFn$_invoke$arity$1 ? inst_15027.cljs$core$IFn$_invoke$arity$1(G__15058) : inst_15027.call(null,G__15058));
})();
var inst_15030 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15029,cljs.core.cst$kw$upload);
var state_15049__$1 = state_15049;
if(inst_15030){
var statearr_15059_15095 = state_15049__$1;
(statearr_15059_15095[(1)] = (8));

} else {
var statearr_15060_15096 = state_15049__$1;
(statearr_15060_15096[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15050 === (10))){
var inst_15041 = (state_15049[(2)]);
var state_15049__$1 = (function (){var statearr_15061 = state_15049;
(statearr_15061[(8)] = inst_15041);

return statearr_15061;
})();
var statearr_15062_15097 = state_15049__$1;
(statearr_15062_15097[(2)] = null);

(statearr_15062_15097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15050 === (8))){
var inst_15027 = (state_15049[(7)]);
var inst_15032 = (function (){var G__15063 = cljs.core.cst$kw$loaded;
return (inst_15027.cljs$core$IFn$_invoke$arity$1 ? inst_15027.cljs$core$IFn$_invoke$arity$1(G__15063) : inst_15027.call(null,G__15063));
})();
var inst_15033 = (function (){var G__15064 = cljs.core.cst$kw$total;
return (inst_15027.cljs$core$IFn$_invoke$arity$1 ? inst_15027.cljs$core$IFn$_invoke$arity$1(G__15064) : inst_15027.call(null,G__15064));
})();
var inst_15034 = (inst_15032 / inst_15033);
var inst_15035 = (inst_15034 * (100));
var inst_15036 = goog.string.format("Uploading: %.0f%",inst_15035);
var inst_15037 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_percentage,inst_15035);
var inst_15038 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,inst_15036);
var state_15049__$1 = (function (){var statearr_15065 = state_15049;
(statearr_15065[(9)] = inst_15037);

return statearr_15065;
})();
var statearr_15066_15098 = state_15049__$1;
(statearr_15066_15098[(2)] = inst_15038);

(statearr_15066_15098[(1)] = (10));


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
});})(c__11488__auto___15088,progress_chan,http_chan))
;
return ((function (switch__11411__auto__,c__11488__auto___15088,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_15070 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15070[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__);

(statearr_15070[(1)] = (1));

return statearr_15070;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1 = (function (state_15049){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15049);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15071){if((e15071 instanceof Object)){
var ex__11415__auto__ = e15071;
var statearr_15072_15099 = state_15049;
(statearr_15072_15099[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15049);

return cljs.core.cst$kw$recur;
} else {
throw e15071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15100 = state_15049;
state_15049 = G__15100;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = function(state_15049){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1.call(this,state_15049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto___15088,progress_chan,http_chan))
})();
var state__11490__auto__ = (function (){var statearr_15073 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto___15088);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto___15088,progress_chan,http_chan))
);


var c__11488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto__,progress_chan,http_chan){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto__,progress_chan,http_chan){
return (function (state_15078){
var state_val_15079 = (state_15078[(1)]);
if((state_val_15079 === (1))){
var state_15078__$1 = state_15078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15078__$1,(2),http_chan);
} else {
if((state_val_15079 === (2))){
var inst_15075 = (state_15078[(2)]);
var inst_15076 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,"Done! It will show in the library once it gets transcoded.");
var state_15078__$1 = (function (){var statearr_15080 = state_15078;
(statearr_15080[(7)] = inst_15075);

return statearr_15080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15078__$1,inst_15076);
} else {
return null;
}
}
});})(c__11488__auto__,progress_chan,http_chan))
;
return ((function (switch__11411__auto__,c__11488__auto__,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_15084 = [null,null,null,null,null,null,null,null];
(statearr_15084[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__);

(statearr_15084[(1)] = (1));

return statearr_15084;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1 = (function (state_15078){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15078);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15085){if((e15085 instanceof Object)){
var ex__11415__auto__ = e15085;
var statearr_15086_15101 = state_15078;
(statearr_15086_15101[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15078);

return cljs.core.cst$kw$recur;
} else {
throw e15085;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15102 = state_15078;
state_15078 = G__15102;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = function(state_15078){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1.call(this,state_15078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__,progress_chan,http_chan))
})();
var state__11490__auto__ = (function (){var statearr_15087 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_15087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto__,progress_chan,http_chan))
);

return c__11488__auto__;
});
airhead_frontend.requests.get_updates_BANG_ = (function airhead_frontend$requests$get_updates_BANG_(){
airhead_frontend.requests.get_info_BANG_();

airhead_frontend.requests.get_playlist_BANG_();

return airhead_frontend.requests.get_library_BANG_();
});
airhead_frontend.requests.get_updates_BANG_();
var c__11488__auto___15220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto___15220){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto___15220){
return (function (state_15173){
var state_val_15174 = (state_15173[(1)]);
if((state_val_15174 === (7))){
var state_15173__$1 = state_15173;
var statearr_15175_15221 = state_15173__$1;
(statearr_15175_15221[(2)] = false);

(statearr_15175_15221[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (20))){
var inst_15157 = (state_15173[(2)]);
var state_15173__$1 = state_15173;
if(cljs.core.truth_(inst_15157)){
var statearr_15176_15222 = state_15173__$1;
(statearr_15176_15222[(1)] = (24));

} else {
var statearr_15177_15223 = state_15173__$1;
(statearr_15177_15223[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (27))){
var state_15173__$1 = state_15173;
var statearr_15178_15224 = state_15173__$1;
(statearr_15178_15224[(2)] = null);

(statearr_15178_15224[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (1))){
var inst_15104 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:");
var state_15173__$1 = state_15173;
if(inst_15104){
var statearr_15179_15225 = state_15173__$1;
(statearr_15179_15225[(1)] = (2));

} else {
var statearr_15180_15226 = state_15173__$1;
(statearr_15180_15226[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (24))){
var inst_15141 = (state_15173[(7)]);
var inst_15159 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15141);
var state_15173__$1 = state_15173;
var statearr_15181_15227 = state_15173__$1;
(statearr_15181_15227[(2)] = inst_15159);

(statearr_15181_15227[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (4))){
var inst_15108 = (state_15173[(2)]);
var inst_15109 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15108),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_15110 = [cljs.core.cst$kw$format];
var inst_15111 = [cljs.core.cst$kw$json_DASH_kw];
var inst_15112 = cljs.core.PersistentHashMap.fromArrays(inst_15110,inst_15111);
var inst_15113 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_15109,cljs.core.array_seq([inst_15112], 0));
var state_15173__$1 = state_15173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15173__$1,(5),inst_15113);
} else {
if((state_val_15174 === (15))){
var inst_15137 = (state_15173[(8)]);
var state_15173__$1 = state_15173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15173__$1,(17),inst_15137);
} else {
if((state_val_15174 === (21))){
var state_15173__$1 = state_15173;
var statearr_15182_15228 = state_15173__$1;
(statearr_15182_15228[(2)] = true);

(statearr_15182_15228[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (13))){
var inst_15115 = (state_15173[(9)]);
var state_15173__$1 = state_15173;
var statearr_15183_15229 = state_15173__$1;
(statearr_15183_15229[(2)] = inst_15115);

(statearr_15183_15229[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (22))){
var state_15173__$1 = state_15173;
var statearr_15184_15230 = state_15173__$1;
(statearr_15184_15230[(2)] = false);

(statearr_15184_15230[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (29))){
var inst_15169 = (state_15173[(2)]);
var state_15173__$1 = state_15173;
var statearr_15185_15231 = state_15173__$1;
(statearr_15185_15231[(2)] = inst_15169);

(statearr_15185_15231[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (6))){
var inst_15115 = (state_15173[(9)]);
var inst_15120 = inst_15115.cljs$lang$protocol_mask$partition0$;
var inst_15121 = (inst_15120 & (64));
var inst_15122 = inst_15115.cljs$core$ISeq$;
var inst_15123 = (cljs.core.PROTOCOL_SENTINEL === inst_15122);
var inst_15124 = (inst_15121) || (inst_15123);
var state_15173__$1 = state_15173;
if(cljs.core.truth_(inst_15124)){
var statearr_15186_15232 = state_15173__$1;
(statearr_15186_15232[(1)] = (9));

} else {
var statearr_15187_15233 = state_15173__$1;
(statearr_15187_15233[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (28))){
var state_15173__$1 = state_15173;
var statearr_15188_15234 = state_15173__$1;
(statearr_15188_15234[(2)] = null);

(statearr_15188_15234[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (25))){
var inst_15141 = (state_15173[(7)]);
var state_15173__$1 = state_15173;
var statearr_15189_15235 = state_15173__$1;
(statearr_15189_15235[(2)] = inst_15141);

(statearr_15189_15235[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (17))){
var inst_15141 = (state_15173[(7)]);
var inst_15141__$1 = (state_15173[(2)]);
var inst_15143 = (inst_15141__$1 == null);
var inst_15144 = cljs.core.not(inst_15143);
var state_15173__$1 = (function (){var statearr_15190 = state_15173;
(statearr_15190[(7)] = inst_15141__$1);

return statearr_15190;
})();
if(inst_15144){
var statearr_15191_15236 = state_15173__$1;
(statearr_15191_15236[(1)] = (18));

} else {
var statearr_15192_15237 = state_15173__$1;
(statearr_15192_15237[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (3))){
var state_15173__$1 = state_15173;
var statearr_15193_15238 = state_15173__$1;
(statearr_15193_15238[(2)] = "ws://");

(statearr_15193_15238[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (12))){
var inst_15115 = (state_15173[(9)]);
var inst_15133 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15115);
var state_15173__$1 = state_15173;
var statearr_15194_15239 = state_15173__$1;
(statearr_15194_15239[(2)] = inst_15133);

(statearr_15194_15239[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (2))){
var state_15173__$1 = state_15173;
var statearr_15195_15240 = state_15173__$1;
(statearr_15195_15240[(2)] = "wss://");

(statearr_15195_15240[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (23))){
var inst_15154 = (state_15173[(2)]);
var state_15173__$1 = state_15173;
var statearr_15196_15241 = state_15173__$1;
(statearr_15196_15241[(2)] = inst_15154);

(statearr_15196_15241[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (19))){
var state_15173__$1 = state_15173;
var statearr_15197_15242 = state_15173__$1;
(statearr_15197_15242[(2)] = false);

(statearr_15197_15242[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (11))){
var inst_15128 = (state_15173[(2)]);
var state_15173__$1 = state_15173;
var statearr_15198_15243 = state_15173__$1;
(statearr_15198_15243[(2)] = inst_15128);

(statearr_15198_15243[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (9))){
var state_15173__$1 = state_15173;
var statearr_15199_15244 = state_15173__$1;
(statearr_15199_15244[(2)] = true);

(statearr_15199_15244[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (5))){
var inst_15115 = (state_15173[(9)]);
var inst_15115__$1 = (state_15173[(2)]);
var inst_15117 = (inst_15115__$1 == null);
var inst_15118 = cljs.core.not(inst_15117);
var state_15173__$1 = (function (){var statearr_15200 = state_15173;
(statearr_15200[(9)] = inst_15115__$1);

return statearr_15200;
})();
if(inst_15118){
var statearr_15201_15245 = state_15173__$1;
(statearr_15201_15245[(1)] = (6));

} else {
var statearr_15202_15246 = state_15173__$1;
(statearr_15202_15246[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (14))){
var inst_15136 = (state_15173[(2)]);
var inst_15137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15136,cljs.core.cst$kw$ws_DASH_channel);
var state_15173__$1 = (function (){var statearr_15203 = state_15173;
(statearr_15203[(8)] = inst_15137);

return statearr_15203;
})();
var statearr_15204_15247 = state_15173__$1;
(statearr_15204_15247[(2)] = null);

(statearr_15204_15247[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (26))){
var inst_15162 = (state_15173[(2)]);
var inst_15163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15162,cljs.core.cst$kw$message);
var inst_15164 = airhead_frontend.requests.get_updates_BANG_();
var state_15173__$1 = (function (){var statearr_15205 = state_15173;
(statearr_15205[(10)] = inst_15164);

return statearr_15205;
})();
if(cljs.core.truth_(inst_15163)){
var statearr_15206_15248 = state_15173__$1;
(statearr_15206_15248[(1)] = (27));

} else {
var statearr_15207_15249 = state_15173__$1;
(statearr_15207_15249[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (16))){
var inst_15171 = (state_15173[(2)]);
var state_15173__$1 = state_15173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15173__$1,inst_15171);
} else {
if((state_val_15174 === (10))){
var state_15173__$1 = state_15173;
var statearr_15208_15250 = state_15173__$1;
(statearr_15208_15250[(2)] = false);

(statearr_15208_15250[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (18))){
var inst_15141 = (state_15173[(7)]);
var inst_15146 = inst_15141.cljs$lang$protocol_mask$partition0$;
var inst_15147 = (inst_15146 & (64));
var inst_15148 = inst_15141.cljs$core$ISeq$;
var inst_15149 = (cljs.core.PROTOCOL_SENTINEL === inst_15148);
var inst_15150 = (inst_15147) || (inst_15149);
var state_15173__$1 = state_15173;
if(cljs.core.truth_(inst_15150)){
var statearr_15209_15251 = state_15173__$1;
(statearr_15209_15251[(1)] = (21));

} else {
var statearr_15210_15252 = state_15173__$1;
(statearr_15210_15252[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15174 === (8))){
var inst_15131 = (state_15173[(2)]);
var state_15173__$1 = state_15173;
if(cljs.core.truth_(inst_15131)){
var statearr_15211_15253 = state_15173__$1;
(statearr_15211_15253[(1)] = (12));

} else {
var statearr_15212_15254 = state_15173__$1;
(statearr_15212_15254[(1)] = (13));

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
});})(c__11488__auto___15220))
;
return ((function (switch__11411__auto__,c__11488__auto___15220){
return (function() {
var airhead_frontend$requests$state_machine__11412__auto__ = null;
var airhead_frontend$requests$state_machine__11412__auto____0 = (function (){
var statearr_15216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15216[(0)] = airhead_frontend$requests$state_machine__11412__auto__);

(statearr_15216[(1)] = (1));

return statearr_15216;
});
var airhead_frontend$requests$state_machine__11412__auto____1 = (function (state_15173){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15173);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15217){if((e15217 instanceof Object)){
var ex__11415__auto__ = e15217;
var statearr_15218_15255 = state_15173;
(statearr_15218_15255[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15173);

return cljs.core.cst$kw$recur;
} else {
throw e15217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15256 = state_15173;
state_15173 = G__15256;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$state_machine__11412__auto__ = function(state_15173){
switch(arguments.length){
case 0:
return airhead_frontend$requests$state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$state_machine__11412__auto____1.call(this,state_15173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$state_machine__11412__auto____0;
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$state_machine__11412__auto____1;
return airhead_frontend$requests$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto___15220))
})();
var state__11490__auto__ = (function (){var statearr_15219 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto___15220);

return statearr_15219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto___15220))
);

