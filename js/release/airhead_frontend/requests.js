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
airhead_frontend.requests.playlist_skip_BANG_ = (function airhead_frontend$requests$playlist_skip_BANG_(id){
return cljs_http.client.delete$([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uuid.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$now_DASH_playing.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state)))))].join(''));
});
airhead_frontend.requests.upload_BANG_ = (function airhead_frontend$requests$upload_BANG_(form){
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__14962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14965 = cljs.core.cst$kw$direction;
return (p1__14962_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14962_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14965) : p1__14962_SHARP_.call(null,G__14965));
})(),cljs.core.cst$kw$upload);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14963_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14963_SHARP_,cljs.core.cst$kw$direction);
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
var c__11488__auto___15083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto___15083){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto___15083){
return (function (state_15036){
var state_val_15037 = (state_15036[(1)]);
if((state_val_15037 === (7))){
var state_15036__$1 = state_15036;
var statearr_15038_15084 = state_15036__$1;
(statearr_15038_15084[(2)] = false);

(statearr_15038_15084[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (20))){
var inst_15020 = (state_15036[(2)]);
var state_15036__$1 = state_15036;
if(cljs.core.truth_(inst_15020)){
var statearr_15039_15085 = state_15036__$1;
(statearr_15039_15085[(1)] = (24));

} else {
var statearr_15040_15086 = state_15036__$1;
(statearr_15040_15086[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (27))){
var state_15036__$1 = state_15036;
var statearr_15041_15087 = state_15036__$1;
(statearr_15041_15087[(2)] = null);

(statearr_15041_15087[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (1))){
var inst_14967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:");
var state_15036__$1 = state_15036;
if(inst_14967){
var statearr_15042_15088 = state_15036__$1;
(statearr_15042_15088[(1)] = (2));

} else {
var statearr_15043_15089 = state_15036__$1;
(statearr_15043_15089[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (24))){
var inst_15004 = (state_15036[(7)]);
var inst_15022 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15004);
var state_15036__$1 = state_15036;
var statearr_15044_15090 = state_15036__$1;
(statearr_15044_15090[(2)] = inst_15022);

(statearr_15044_15090[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (4))){
var inst_14971 = (state_15036[(2)]);
var inst_14972 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14971),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_14973 = [cljs.core.cst$kw$format];
var inst_14974 = [cljs.core.cst$kw$json_DASH_kw];
var inst_14975 = cljs.core.PersistentHashMap.fromArrays(inst_14973,inst_14974);
var inst_14976 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_14972,cljs.core.array_seq([inst_14975], 0));
var state_15036__$1 = state_15036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15036__$1,(5),inst_14976);
} else {
if((state_val_15037 === (15))){
var inst_15000 = (state_15036[(8)]);
var state_15036__$1 = state_15036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15036__$1,(17),inst_15000);
} else {
if((state_val_15037 === (21))){
var state_15036__$1 = state_15036;
var statearr_15045_15091 = state_15036__$1;
(statearr_15045_15091[(2)] = true);

(statearr_15045_15091[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (13))){
var inst_14978 = (state_15036[(9)]);
var state_15036__$1 = state_15036;
var statearr_15046_15092 = state_15036__$1;
(statearr_15046_15092[(2)] = inst_14978);

(statearr_15046_15092[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (22))){
var state_15036__$1 = state_15036;
var statearr_15047_15093 = state_15036__$1;
(statearr_15047_15093[(2)] = false);

(statearr_15047_15093[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (29))){
var inst_15032 = (state_15036[(2)]);
var state_15036__$1 = state_15036;
var statearr_15048_15094 = state_15036__$1;
(statearr_15048_15094[(2)] = inst_15032);

(statearr_15048_15094[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (6))){
var inst_14978 = (state_15036[(9)]);
var inst_14983 = inst_14978.cljs$lang$protocol_mask$partition0$;
var inst_14984 = (inst_14983 & (64));
var inst_14985 = inst_14978.cljs$core$ISeq$;
var inst_14986 = (cljs.core.PROTOCOL_SENTINEL === inst_14985);
var inst_14987 = (inst_14984) || (inst_14986);
var state_15036__$1 = state_15036;
if(cljs.core.truth_(inst_14987)){
var statearr_15049_15095 = state_15036__$1;
(statearr_15049_15095[(1)] = (9));

} else {
var statearr_15050_15096 = state_15036__$1;
(statearr_15050_15096[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (28))){
var state_15036__$1 = state_15036;
var statearr_15051_15097 = state_15036__$1;
(statearr_15051_15097[(2)] = null);

(statearr_15051_15097[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (25))){
var inst_15004 = (state_15036[(7)]);
var state_15036__$1 = state_15036;
var statearr_15052_15098 = state_15036__$1;
(statearr_15052_15098[(2)] = inst_15004);

(statearr_15052_15098[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (17))){
var inst_15004 = (state_15036[(7)]);
var inst_15004__$1 = (state_15036[(2)]);
var inst_15006 = (inst_15004__$1 == null);
var inst_15007 = cljs.core.not(inst_15006);
var state_15036__$1 = (function (){var statearr_15053 = state_15036;
(statearr_15053[(7)] = inst_15004__$1);

return statearr_15053;
})();
if(inst_15007){
var statearr_15054_15099 = state_15036__$1;
(statearr_15054_15099[(1)] = (18));

} else {
var statearr_15055_15100 = state_15036__$1;
(statearr_15055_15100[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (3))){
var state_15036__$1 = state_15036;
var statearr_15056_15101 = state_15036__$1;
(statearr_15056_15101[(2)] = "ws://");

(statearr_15056_15101[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (12))){
var inst_14978 = (state_15036[(9)]);
var inst_14996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14978);
var state_15036__$1 = state_15036;
var statearr_15057_15102 = state_15036__$1;
(statearr_15057_15102[(2)] = inst_14996);

(statearr_15057_15102[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (2))){
var state_15036__$1 = state_15036;
var statearr_15058_15103 = state_15036__$1;
(statearr_15058_15103[(2)] = "wss://");

(statearr_15058_15103[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (23))){
var inst_15017 = (state_15036[(2)]);
var state_15036__$1 = state_15036;
var statearr_15059_15104 = state_15036__$1;
(statearr_15059_15104[(2)] = inst_15017);

(statearr_15059_15104[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (19))){
var state_15036__$1 = state_15036;
var statearr_15060_15105 = state_15036__$1;
(statearr_15060_15105[(2)] = false);

(statearr_15060_15105[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (11))){
var inst_14991 = (state_15036[(2)]);
var state_15036__$1 = state_15036;
var statearr_15061_15106 = state_15036__$1;
(statearr_15061_15106[(2)] = inst_14991);

(statearr_15061_15106[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (9))){
var state_15036__$1 = state_15036;
var statearr_15062_15107 = state_15036__$1;
(statearr_15062_15107[(2)] = true);

(statearr_15062_15107[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (5))){
var inst_14978 = (state_15036[(9)]);
var inst_14978__$1 = (state_15036[(2)]);
var inst_14980 = (inst_14978__$1 == null);
var inst_14981 = cljs.core.not(inst_14980);
var state_15036__$1 = (function (){var statearr_15063 = state_15036;
(statearr_15063[(9)] = inst_14978__$1);

return statearr_15063;
})();
if(inst_14981){
var statearr_15064_15108 = state_15036__$1;
(statearr_15064_15108[(1)] = (6));

} else {
var statearr_15065_15109 = state_15036__$1;
(statearr_15065_15109[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (14))){
var inst_14999 = (state_15036[(2)]);
var inst_15000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14999,cljs.core.cst$kw$ws_DASH_channel);
var state_15036__$1 = (function (){var statearr_15066 = state_15036;
(statearr_15066[(8)] = inst_15000);

return statearr_15066;
})();
var statearr_15067_15110 = state_15036__$1;
(statearr_15067_15110[(2)] = null);

(statearr_15067_15110[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (26))){
var inst_15025 = (state_15036[(2)]);
var inst_15026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15025,cljs.core.cst$kw$message);
var inst_15027 = airhead_frontend.requests.get_updates_BANG_();
var state_15036__$1 = (function (){var statearr_15068 = state_15036;
(statearr_15068[(10)] = inst_15027);

return statearr_15068;
})();
if(cljs.core.truth_(inst_15026)){
var statearr_15069_15111 = state_15036__$1;
(statearr_15069_15111[(1)] = (27));

} else {
var statearr_15070_15112 = state_15036__$1;
(statearr_15070_15112[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (16))){
var inst_15034 = (state_15036[(2)]);
var state_15036__$1 = state_15036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15036__$1,inst_15034);
} else {
if((state_val_15037 === (10))){
var state_15036__$1 = state_15036;
var statearr_15071_15113 = state_15036__$1;
(statearr_15071_15113[(2)] = false);

(statearr_15071_15113[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (18))){
var inst_15004 = (state_15036[(7)]);
var inst_15009 = inst_15004.cljs$lang$protocol_mask$partition0$;
var inst_15010 = (inst_15009 & (64));
var inst_15011 = inst_15004.cljs$core$ISeq$;
var inst_15012 = (cljs.core.PROTOCOL_SENTINEL === inst_15011);
var inst_15013 = (inst_15010) || (inst_15012);
var state_15036__$1 = state_15036;
if(cljs.core.truth_(inst_15013)){
var statearr_15072_15114 = state_15036__$1;
(statearr_15072_15114[(1)] = (21));

} else {
var statearr_15073_15115 = state_15036__$1;
(statearr_15073_15115[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (8))){
var inst_14994 = (state_15036[(2)]);
var state_15036__$1 = state_15036;
if(cljs.core.truth_(inst_14994)){
var statearr_15074_15116 = state_15036__$1;
(statearr_15074_15116[(1)] = (12));

} else {
var statearr_15075_15117 = state_15036__$1;
(statearr_15075_15117[(1)] = (13));

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
});})(c__11488__auto___15083))
;
return ((function (switch__11411__auto__,c__11488__auto___15083){
return (function() {
var airhead_frontend$requests$state_machine__11412__auto__ = null;
var airhead_frontend$requests$state_machine__11412__auto____0 = (function (){
var statearr_15079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15079[(0)] = airhead_frontend$requests$state_machine__11412__auto__);

(statearr_15079[(1)] = (1));

return statearr_15079;
});
var airhead_frontend$requests$state_machine__11412__auto____1 = (function (state_15036){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15036);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15080){if((e15080 instanceof Object)){
var ex__11415__auto__ = e15080;
var statearr_15081_15118 = state_15036;
(statearr_15081_15118[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15036);

return cljs.core.cst$kw$recur;
} else {
throw e15080;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15119 = state_15036;
state_15036 = G__15119;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$state_machine__11412__auto__ = function(state_15036){
switch(arguments.length){
case 0:
return airhead_frontend$requests$state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$state_machine__11412__auto____1.call(this,state_15036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$state_machine__11412__auto____0;
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$state_machine__11412__auto____1;
return airhead_frontend$requests$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto___15083))
})();
var state__11490__auto__ = (function (){var statearr_15082 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto___15083);

return statearr_15082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto___15083))
);

