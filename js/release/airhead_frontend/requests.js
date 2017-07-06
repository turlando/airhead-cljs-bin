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
return (function (state_14851){
var state_val_14852 = (state_14851[(1)]);
if((state_val_14852 === (1))){
var inst_14845 = cljs_http.client.get("/api/info");
var state_14851__$1 = state_14851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14851__$1,(2),inst_14845);
} else {
if((state_val_14852 === (2))){
var inst_14847 = (state_14851[(2)]);
var inst_14848 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_14847);
var inst_14849 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$info,inst_14848);
var state_14851__$1 = state_14851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14851__$1,inst_14849);
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
var statearr_14856 = [null,null,null,null,null,null,null];
(statearr_14856[(0)] = airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__);

(statearr_14856[(1)] = (1));

return statearr_14856;
});
var airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____1 = (function (state_14851){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_14851);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14857){if((e14857 instanceof Object)){
var ex__11415__auto__ = e14857;
var statearr_14858_14860 = state_14851;
(statearr_14858_14860[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14851);

return cljs.core.cst$kw$recur;
} else {
throw e14857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__14861 = state_14851;
state_14851 = G__14861;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__ = function(state_14851){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____1.call(this,state_14851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$get_info_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__))
})();
var state__11490__auto__ = (function (){var statearr_14859 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_14859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_14859;
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
return (function (state_14893){
var state_val_14894 = (state_14893[(1)]);
if((state_val_14894 === (1))){
var inst_14884 = cljs_http.client.get("/api/playlist");
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14893__$1,(2),inst_14884);
} else {
if((state_val_14894 === (2))){
var inst_14886 = (state_14893[(2)]);
var inst_14887 = (function (){var G__14895 = cljs.core.cst$kw$body;
return (inst_14886.cljs$core$IFn$_invoke$arity$1 ? inst_14886.cljs$core$IFn$_invoke$arity$1(G__14895) : inst_14886.call(null,G__14895));
})();
var inst_14888 = (function (){var G__14896 = cljs.core.cst$kw$next;
return (inst_14887.cljs$core$IFn$_invoke$arity$1 ? inst_14887.cljs$core$IFn$_invoke$arity$1(G__14896) : inst_14887.call(null,G__14896));
})();
var inst_14889 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$playlist,inst_14888);
var inst_14890 = (function (){var G__14897 = cljs.core.cst$kw$current;
return (inst_14887.cljs$core$IFn$_invoke$arity$1 ? inst_14887.cljs$core$IFn$_invoke$arity$1(G__14897) : inst_14887.call(null,G__14897));
})();
var inst_14891 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$now_DASH_playing,inst_14890);
var state_14893__$1 = (function (){var statearr_14898 = state_14893;
(statearr_14898[(7)] = inst_14889);

return statearr_14898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14893__$1,inst_14891);
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
var statearr_14902 = [null,null,null,null,null,null,null,null];
(statearr_14902[(0)] = airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__);

(statearr_14902[(1)] = (1));

return statearr_14902;
});
var airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____1 = (function (state_14893){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_14893);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14903){if((e14903 instanceof Object)){
var ex__11415__auto__ = e14903;
var statearr_14904_14906 = state_14893;
(statearr_14904_14906[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14893);

return cljs.core.cst$kw$recur;
} else {
throw e14903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__14907 = state_14893;
state_14893 = G__14907;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__ = function(state_14893){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____1.call(this,state_14893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$get_playlist_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__))
})();
var state__11490__auto__ = (function (){var statearr_14905 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_14905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_14905;
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
return (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (1))){
var inst_14935 = [cljs.core.cst$kw$query_DASH_params];
var inst_14936 = ["q"];
var inst_14937 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_frontend.state.app_state) : cljs.core.deref.call(null,airhead_frontend.state.app_state));
var inst_14938 = (function (){var G__14954 = cljs.core.cst$kw$query;
return (inst_14937.cljs$core$IFn$_invoke$arity$1 ? inst_14937.cljs$core$IFn$_invoke$arity$1(G__14954) : inst_14937.call(null,G__14954));
})();
var inst_14939 = [inst_14938];
var inst_14940 = cljs.core.PersistentHashMap.fromArrays(inst_14936,inst_14939);
var inst_14941 = [inst_14940];
var inst_14942 = cljs.core.PersistentHashMap.fromArrays(inst_14935,inst_14941);
var inst_14943 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([inst_14942], 0));
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14952__$1,(2),inst_14943);
} else {
if((state_val_14953 === (2))){
var inst_14945 = (state_14952[(2)]);
var inst_14946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14947 = [cljs.core.cst$kw$body,cljs.core.cst$kw$tracks];
var inst_14948 = (new cljs.core.PersistentVector(null,2,(5),inst_14946,inst_14947,null));
var inst_14949 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_14945,inst_14948);
var inst_14950 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$library,inst_14949);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14952__$1,inst_14950);
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
var statearr_14958 = [null,null,null,null,null,null,null];
(statearr_14958[(0)] = airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__);

(statearr_14958[(1)] = (1));

return statearr_14958;
});
var airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____1 = (function (state_14952){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_14952);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e14959){if((e14959 instanceof Object)){
var ex__11415__auto__ = e14959;
var statearr_14960_14962 = state_14952;
(statearr_14960_14962[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14952);

return cljs.core.cst$kw$recur;
} else {
throw e14959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__14963 = state_14952;
state_14952 = G__14963;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$get_library_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__))
})();
var state__11490__auto__ = (function (){var statearr_14961 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_14961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_14961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto__))
);

return c__11488__auto__;
});
airhead_frontend.requests.upload_BANG_ = (function airhead_frontend$requests$upload_BANG_(form,state){
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var http_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var c__11488__auto___15086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto___15086,progress_chan,http_chan){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto___15086,progress_chan,http_chan){
return (function (state_15048){
var state_val_15049 = (state_15048[(1)]);
if((state_val_15049 === (7))){
var inst_15044 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
var statearr_15050_15087 = state_15048__$1;
(statearr_15050_15087[(2)] = inst_15044);

(statearr_15050_15087[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15049 === (1))){
var state_15048__$1 = state_15048;
var statearr_15051_15088 = state_15048__$1;
(statearr_15051_15088[(2)] = null);

(statearr_15051_15088[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15049 === (4))){
var inst_15027 = (state_15048[(7)]);
var inst_15027__$1 = (state_15048[(2)]);
var state_15048__$1 = (function (){var statearr_15052 = state_15048;
(statearr_15052[(7)] = inst_15027__$1);

return statearr_15052;
})();
if(cljs.core.truth_(inst_15027__$1)){
var statearr_15053_15089 = state_15048__$1;
(statearr_15053_15089[(1)] = (5));

} else {
var statearr_15054_15090 = state_15048__$1;
(statearr_15054_15090[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15049 === (6))){
var state_15048__$1 = state_15048;
var statearr_15055_15091 = state_15048__$1;
(statearr_15055_15091[(2)] = null);

(statearr_15055_15091[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15049 === (3))){
var inst_15046 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15048__$1,inst_15046);
} else {
if((state_val_15049 === (2))){
var state_15048__$1 = state_15048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15048__$1,(4),progress_chan);
} else {
if((state_val_15049 === (9))){
var state_15048__$1 = state_15048;
var statearr_15056_15092 = state_15048__$1;
(statearr_15056_15092[(2)] = null);

(statearr_15056_15092[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15049 === (5))){
var inst_15027 = (state_15048[(7)]);
var inst_15029 = (function (){var G__15057 = cljs.core.cst$kw$direction;
return (inst_15027.cljs$core$IFn$_invoke$arity$1 ? inst_15027.cljs$core$IFn$_invoke$arity$1(G__15057) : inst_15027.call(null,G__15057));
})();
var inst_15030 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15029,cljs.core.cst$kw$upload);
var state_15048__$1 = state_15048;
if(inst_15030){
var statearr_15058_15093 = state_15048__$1;
(statearr_15058_15093[(1)] = (8));

} else {
var statearr_15059_15094 = state_15048__$1;
(statearr_15059_15094[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15049 === (10))){
var inst_15040 = (state_15048[(2)]);
var state_15048__$1 = (function (){var statearr_15060 = state_15048;
(statearr_15060[(8)] = inst_15040);

return statearr_15060;
})();
var statearr_15061_15095 = state_15048__$1;
(statearr_15061_15095[(2)] = null);

(statearr_15061_15095[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15049 === (8))){
var inst_15027 = (state_15048[(7)]);
var inst_15032 = (function (){var G__15062 = cljs.core.cst$kw$loaded;
return (inst_15027.cljs$core$IFn$_invoke$arity$1 ? inst_15027.cljs$core$IFn$_invoke$arity$1(G__15062) : inst_15027.call(null,G__15062));
})();
var inst_15033 = (function (){var G__15063 = cljs.core.cst$kw$total;
return (inst_15027.cljs$core$IFn$_invoke$arity$1 ? inst_15027.cljs$core$IFn$_invoke$arity$1(G__15063) : inst_15027.call(null,G__15063));
})();
var inst_15034 = (inst_15032 / inst_15033);
var inst_15035 = (inst_15034 * (100));
var inst_15036 = goog.string.format("Uploading: %.0f%",inst_15035);
var inst_15037 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$percentage,inst_15035);
var state_15048__$1 = (function (){var statearr_15064 = state_15048;
(statearr_15064[(9)] = inst_15036);

return statearr_15064;
})();
var statearr_15065_15096 = state_15048__$1;
(statearr_15065_15096[(2)] = inst_15037);

(statearr_15065_15096[(1)] = (10));


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
});})(c__11488__auto___15086,progress_chan,http_chan))
;
return ((function (switch__11411__auto__,c__11488__auto___15086,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_15069 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15069[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__);

(statearr_15069[(1)] = (1));

return statearr_15069;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1 = (function (state_15048){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15048);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15070){if((e15070 instanceof Object)){
var ex__11415__auto__ = e15070;
var statearr_15071_15097 = state_15048;
(statearr_15071_15097[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15048);

return cljs.core.cst$kw$recur;
} else {
throw e15070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15098 = state_15048;
state_15048 = G__15098;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = function(state_15048){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1.call(this,state_15048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto___15086,progress_chan,http_chan))
})();
var state__11490__auto__ = (function (){var statearr_15072 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto___15086);

return statearr_15072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto___15086,progress_chan,http_chan))
);


var c__11488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto__,progress_chan,http_chan){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto__,progress_chan,http_chan){
return (function (state_15077){
var state_val_15078 = (state_15077[(1)]);
if((state_val_15078 === (1))){
var state_15077__$1 = state_15077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15077__$1,(2),http_chan);
} else {
if((state_val_15078 === (2))){
var inst_15074 = (state_15077[(2)]);
var inst_15075 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$response,inst_15074);
var state_15077__$1 = state_15077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15077__$1,inst_15075);
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
var statearr_15082 = [null,null,null,null,null,null,null];
(statearr_15082[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__);

(statearr_15082[(1)] = (1));

return statearr_15082;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1 = (function (state_15077){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15077);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15083){if((e15083 instanceof Object)){
var ex__11415__auto__ = e15083;
var statearr_15084_15099 = state_15077;
(statearr_15084_15099[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15077);

return cljs.core.cst$kw$recur;
} else {
throw e15083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15100 = state_15077;
state_15077 = G__15100;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = function(state_15077){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1.call(this,state_15077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__,progress_chan,http_chan))
})();
var state__11490__auto__ = (function (){var statearr_15085 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_15085;
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
var c__11488__auto___15218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto___15218){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto___15218){
return (function (state_15171){
var state_val_15172 = (state_15171[(1)]);
if((state_val_15172 === (7))){
var state_15171__$1 = state_15171;
var statearr_15173_15219 = state_15171__$1;
(statearr_15173_15219[(2)] = false);

(statearr_15173_15219[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (20))){
var inst_15155 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15155)){
var statearr_15174_15220 = state_15171__$1;
(statearr_15174_15220[(1)] = (24));

} else {
var statearr_15175_15221 = state_15171__$1;
(statearr_15175_15221[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (27))){
var state_15171__$1 = state_15171;
var statearr_15176_15222 = state_15171__$1;
(statearr_15176_15222[(2)] = null);

(statearr_15176_15222[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (1))){
var inst_15102 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:");
var state_15171__$1 = state_15171;
if(inst_15102){
var statearr_15177_15223 = state_15171__$1;
(statearr_15177_15223[(1)] = (2));

} else {
var statearr_15178_15224 = state_15171__$1;
(statearr_15178_15224[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (24))){
var inst_15139 = (state_15171[(7)]);
var inst_15157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15139);
var state_15171__$1 = state_15171;
var statearr_15179_15225 = state_15171__$1;
(statearr_15179_15225[(2)] = inst_15157);

(statearr_15179_15225[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (4))){
var inst_15106 = (state_15171[(2)]);
var inst_15107 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15106),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_15108 = [cljs.core.cst$kw$format];
var inst_15109 = [cljs.core.cst$kw$json_DASH_kw];
var inst_15110 = cljs.core.PersistentHashMap.fromArrays(inst_15108,inst_15109);
var inst_15111 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_15107,cljs.core.array_seq([inst_15110], 0));
var state_15171__$1 = state_15171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15171__$1,(5),inst_15111);
} else {
if((state_val_15172 === (15))){
var inst_15135 = (state_15171[(8)]);
var state_15171__$1 = state_15171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15171__$1,(17),inst_15135);
} else {
if((state_val_15172 === (21))){
var state_15171__$1 = state_15171;
var statearr_15180_15226 = state_15171__$1;
(statearr_15180_15226[(2)] = true);

(statearr_15180_15226[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (13))){
var inst_15113 = (state_15171[(9)]);
var state_15171__$1 = state_15171;
var statearr_15181_15227 = state_15171__$1;
(statearr_15181_15227[(2)] = inst_15113);

(statearr_15181_15227[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (22))){
var state_15171__$1 = state_15171;
var statearr_15182_15228 = state_15171__$1;
(statearr_15182_15228[(2)] = false);

(statearr_15182_15228[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (29))){
var inst_15167 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15183_15229 = state_15171__$1;
(statearr_15183_15229[(2)] = inst_15167);

(statearr_15183_15229[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (6))){
var inst_15113 = (state_15171[(9)]);
var inst_15118 = inst_15113.cljs$lang$protocol_mask$partition0$;
var inst_15119 = (inst_15118 & (64));
var inst_15120 = inst_15113.cljs$core$ISeq$;
var inst_15121 = (cljs.core.PROTOCOL_SENTINEL === inst_15120);
var inst_15122 = (inst_15119) || (inst_15121);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15122)){
var statearr_15184_15230 = state_15171__$1;
(statearr_15184_15230[(1)] = (9));

} else {
var statearr_15185_15231 = state_15171__$1;
(statearr_15185_15231[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (28))){
var state_15171__$1 = state_15171;
var statearr_15186_15232 = state_15171__$1;
(statearr_15186_15232[(2)] = null);

(statearr_15186_15232[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (25))){
var inst_15139 = (state_15171[(7)]);
var state_15171__$1 = state_15171;
var statearr_15187_15233 = state_15171__$1;
(statearr_15187_15233[(2)] = inst_15139);

(statearr_15187_15233[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (17))){
var inst_15139 = (state_15171[(7)]);
var inst_15139__$1 = (state_15171[(2)]);
var inst_15141 = (inst_15139__$1 == null);
var inst_15142 = cljs.core.not(inst_15141);
var state_15171__$1 = (function (){var statearr_15188 = state_15171;
(statearr_15188[(7)] = inst_15139__$1);

return statearr_15188;
})();
if(inst_15142){
var statearr_15189_15234 = state_15171__$1;
(statearr_15189_15234[(1)] = (18));

} else {
var statearr_15190_15235 = state_15171__$1;
(statearr_15190_15235[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (3))){
var state_15171__$1 = state_15171;
var statearr_15191_15236 = state_15171__$1;
(statearr_15191_15236[(2)] = "ws://");

(statearr_15191_15236[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (12))){
var inst_15113 = (state_15171[(9)]);
var inst_15131 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15113);
var state_15171__$1 = state_15171;
var statearr_15192_15237 = state_15171__$1;
(statearr_15192_15237[(2)] = inst_15131);

(statearr_15192_15237[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (2))){
var state_15171__$1 = state_15171;
var statearr_15193_15238 = state_15171__$1;
(statearr_15193_15238[(2)] = "wss://");

(statearr_15193_15238[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (23))){
var inst_15152 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15194_15239 = state_15171__$1;
(statearr_15194_15239[(2)] = inst_15152);

(statearr_15194_15239[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (19))){
var state_15171__$1 = state_15171;
var statearr_15195_15240 = state_15171__$1;
(statearr_15195_15240[(2)] = false);

(statearr_15195_15240[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (11))){
var inst_15126 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
var statearr_15196_15241 = state_15171__$1;
(statearr_15196_15241[(2)] = inst_15126);

(statearr_15196_15241[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (9))){
var state_15171__$1 = state_15171;
var statearr_15197_15242 = state_15171__$1;
(statearr_15197_15242[(2)] = true);

(statearr_15197_15242[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (5))){
var inst_15113 = (state_15171[(9)]);
var inst_15113__$1 = (state_15171[(2)]);
var inst_15115 = (inst_15113__$1 == null);
var inst_15116 = cljs.core.not(inst_15115);
var state_15171__$1 = (function (){var statearr_15198 = state_15171;
(statearr_15198[(9)] = inst_15113__$1);

return statearr_15198;
})();
if(inst_15116){
var statearr_15199_15243 = state_15171__$1;
(statearr_15199_15243[(1)] = (6));

} else {
var statearr_15200_15244 = state_15171__$1;
(statearr_15200_15244[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (14))){
var inst_15134 = (state_15171[(2)]);
var inst_15135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15134,cljs.core.cst$kw$ws_DASH_channel);
var state_15171__$1 = (function (){var statearr_15201 = state_15171;
(statearr_15201[(8)] = inst_15135);

return statearr_15201;
})();
var statearr_15202_15245 = state_15171__$1;
(statearr_15202_15245[(2)] = null);

(statearr_15202_15245[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (26))){
var inst_15160 = (state_15171[(2)]);
var inst_15161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15160,cljs.core.cst$kw$message);
var inst_15162 = airhead_frontend.requests.get_updates_BANG_();
var state_15171__$1 = (function (){var statearr_15203 = state_15171;
(statearr_15203[(10)] = inst_15162);

return statearr_15203;
})();
if(cljs.core.truth_(inst_15161)){
var statearr_15204_15246 = state_15171__$1;
(statearr_15204_15246[(1)] = (27));

} else {
var statearr_15205_15247 = state_15171__$1;
(statearr_15205_15247[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (16))){
var inst_15169 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15171__$1,inst_15169);
} else {
if((state_val_15172 === (10))){
var state_15171__$1 = state_15171;
var statearr_15206_15248 = state_15171__$1;
(statearr_15206_15248[(2)] = false);

(statearr_15206_15248[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (18))){
var inst_15139 = (state_15171[(7)]);
var inst_15144 = inst_15139.cljs$lang$protocol_mask$partition0$;
var inst_15145 = (inst_15144 & (64));
var inst_15146 = inst_15139.cljs$core$ISeq$;
var inst_15147 = (cljs.core.PROTOCOL_SENTINEL === inst_15146);
var inst_15148 = (inst_15145) || (inst_15147);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15148)){
var statearr_15207_15249 = state_15171__$1;
(statearr_15207_15249[(1)] = (21));

} else {
var statearr_15208_15250 = state_15171__$1;
(statearr_15208_15250[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15172 === (8))){
var inst_15129 = (state_15171[(2)]);
var state_15171__$1 = state_15171;
if(cljs.core.truth_(inst_15129)){
var statearr_15209_15251 = state_15171__$1;
(statearr_15209_15251[(1)] = (12));

} else {
var statearr_15210_15252 = state_15171__$1;
(statearr_15210_15252[(1)] = (13));

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
});})(c__11488__auto___15218))
;
return ((function (switch__11411__auto__,c__11488__auto___15218){
return (function() {
var airhead_frontend$requests$state_machine__11412__auto__ = null;
var airhead_frontend$requests$state_machine__11412__auto____0 = (function (){
var statearr_15214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15214[(0)] = airhead_frontend$requests$state_machine__11412__auto__);

(statearr_15214[(1)] = (1));

return statearr_15214;
});
var airhead_frontend$requests$state_machine__11412__auto____1 = (function (state_15171){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15171);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15215){if((e15215 instanceof Object)){
var ex__11415__auto__ = e15215;
var statearr_15216_15253 = state_15171;
(statearr_15216_15253[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15171);

return cljs.core.cst$kw$recur;
} else {
throw e15215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15254 = state_15171;
state_15171 = G__15254;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$state_machine__11412__auto__ = function(state_15171){
switch(arguments.length){
case 0:
return airhead_frontend$requests$state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$state_machine__11412__auto____1.call(this,state_15171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$state_machine__11412__auto____0;
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$state_machine__11412__auto____1;
return airhead_frontend$requests$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto___15218))
})();
var state__11490__auto__ = (function (){var statearr_15217 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto___15218);

return statearr_15217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto___15218))
);

