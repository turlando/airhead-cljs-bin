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
airhead_frontend.requests.upload_BANG_ = (function airhead_frontend$requests$upload_BANG_(){
var form = document.getElementById("upload-form");
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var http_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var c__11488__auto___15090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto___15090,form,progress_chan,http_chan){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto___15090,form,progress_chan,http_chan){
return (function (state_15051){
var state_val_15052 = (state_15051[(1)]);
if((state_val_15052 === (7))){
var inst_15047 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15053_15091 = state_15051__$1;
(statearr_15053_15091[(2)] = inst_15047);

(statearr_15053_15091[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15052 === (1))){
var state_15051__$1 = state_15051;
var statearr_15054_15092 = state_15051__$1;
(statearr_15054_15092[(2)] = null);

(statearr_15054_15092[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15052 === (4))){
var inst_15029 = (state_15051[(7)]);
var inst_15029__$1 = (state_15051[(2)]);
var state_15051__$1 = (function (){var statearr_15055 = state_15051;
(statearr_15055[(7)] = inst_15029__$1);

return statearr_15055;
})();
if(cljs.core.truth_(inst_15029__$1)){
var statearr_15056_15093 = state_15051__$1;
(statearr_15056_15093[(1)] = (5));

} else {
var statearr_15057_15094 = state_15051__$1;
(statearr_15057_15094[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15052 === (6))){
var state_15051__$1 = state_15051;
var statearr_15058_15095 = state_15051__$1;
(statearr_15058_15095[(2)] = null);

(statearr_15058_15095[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15052 === (3))){
var inst_15049 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15051__$1,inst_15049);
} else {
if((state_val_15052 === (2))){
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15051__$1,(4),progress_chan);
} else {
if((state_val_15052 === (9))){
var state_15051__$1 = state_15051;
var statearr_15059_15096 = state_15051__$1;
(statearr_15059_15096[(2)] = null);

(statearr_15059_15096[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15052 === (5))){
var inst_15029 = (state_15051[(7)]);
var inst_15031 = (function (){var G__15060 = cljs.core.cst$kw$direction;
return (inst_15029.cljs$core$IFn$_invoke$arity$1 ? inst_15029.cljs$core$IFn$_invoke$arity$1(G__15060) : inst_15029.call(null,G__15060));
})();
var inst_15032 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15031,cljs.core.cst$kw$upload);
var state_15051__$1 = state_15051;
if(inst_15032){
var statearr_15061_15097 = state_15051__$1;
(statearr_15061_15097[(1)] = (8));

} else {
var statearr_15062_15098 = state_15051__$1;
(statearr_15062_15098[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15052 === (10))){
var inst_15043 = (state_15051[(2)]);
var state_15051__$1 = (function (){var statearr_15063 = state_15051;
(statearr_15063[(8)] = inst_15043);

return statearr_15063;
})();
var statearr_15064_15099 = state_15051__$1;
(statearr_15064_15099[(2)] = null);

(statearr_15064_15099[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15052 === (8))){
var inst_15029 = (state_15051[(7)]);
var inst_15034 = (function (){var G__15065 = cljs.core.cst$kw$loaded;
return (inst_15029.cljs$core$IFn$_invoke$arity$1 ? inst_15029.cljs$core$IFn$_invoke$arity$1(G__15065) : inst_15029.call(null,G__15065));
})();
var inst_15035 = (function (){var G__15066 = cljs.core.cst$kw$total;
return (inst_15029.cljs$core$IFn$_invoke$arity$1 ? inst_15029.cljs$core$IFn$_invoke$arity$1(G__15066) : inst_15029.call(null,G__15066));
})();
var inst_15036 = (inst_15034 / inst_15035);
var inst_15037 = (inst_15036 * (100));
var inst_15038 = goog.string.format("Uploading: %.0f%",inst_15037);
var inst_15039 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_percentage,inst_15037);
var inst_15040 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,inst_15038);
var state_15051__$1 = (function (){var statearr_15067 = state_15051;
(statearr_15067[(9)] = inst_15039);

return statearr_15067;
})();
var statearr_15068_15100 = state_15051__$1;
(statearr_15068_15100[(2)] = inst_15040);

(statearr_15068_15100[(1)] = (10));


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
});})(c__11488__auto___15090,form,progress_chan,http_chan))
;
return ((function (switch__11411__auto__,c__11488__auto___15090,form,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_15072 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15072[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__);

(statearr_15072[(1)] = (1));

return statearr_15072;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1 = (function (state_15051){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15051);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15073){if((e15073 instanceof Object)){
var ex__11415__auto__ = e15073;
var statearr_15074_15101 = state_15051;
(statearr_15074_15101[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15051);

return cljs.core.cst$kw$recur;
} else {
throw e15073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15102 = state_15051;
state_15051 = G__15102;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = function(state_15051){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1.call(this,state_15051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto___15090,form,progress_chan,http_chan))
})();
var state__11490__auto__ = (function (){var statearr_15075 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto___15090);

return statearr_15075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto___15090,form,progress_chan,http_chan))
);


var c__11488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto__,form,progress_chan,http_chan){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto__,form,progress_chan,http_chan){
return (function (state_15080){
var state_val_15081 = (state_15080[(1)]);
if((state_val_15081 === (1))){
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15080__$1,(2),http_chan);
} else {
if((state_val_15081 === (2))){
var inst_15077 = (state_15080[(2)]);
var inst_15078 = airhead_frontend.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,"Done! It will show in the library once it gets transcoded.");
var state_15080__$1 = (function (){var statearr_15082 = state_15080;
(statearr_15082[(7)] = inst_15077);

return statearr_15082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15080__$1,inst_15078);
} else {
return null;
}
}
});})(c__11488__auto__,form,progress_chan,http_chan))
;
return ((function (switch__11411__auto__,c__11488__auto__,form,progress_chan,http_chan){
return (function() {
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = null;
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0 = (function (){
var statearr_15086 = [null,null,null,null,null,null,null,null];
(statearr_15086[(0)] = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__);

(statearr_15086[(1)] = (1));

return statearr_15086;
});
var airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1 = (function (state_15080){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15080);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15087){if((e15087 instanceof Object)){
var ex__11415__auto__ = e15087;
var statearr_15088_15103 = state_15080;
(statearr_15088_15103[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15080);

return cljs.core.cst$kw$recur;
} else {
throw e15087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15104 = state_15080;
state_15080 = G__15104;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__ = function(state_15080){
switch(arguments.length){
case 0:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1.call(this,state_15080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____0;
airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto____1;
return airhead_frontend$requests$upload_BANG__$_state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto__,form,progress_chan,http_chan))
})();
var state__11490__auto__ = (function (){var statearr_15089 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto__);

return statearr_15089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto__,form,progress_chan,http_chan))
);

return c__11488__auto__;
});
airhead_frontend.requests.get_updates_BANG_ = (function airhead_frontend$requests$get_updates_BANG_(){
airhead_frontend.requests.get_info_BANG_();

airhead_frontend.requests.get_playlist_BANG_();

return airhead_frontend.requests.get_library_BANG_();
});
airhead_frontend.requests.get_updates_BANG_();
var c__11488__auto___15222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11488__auto___15222){
return (function (){
var f__11489__auto__ = (function (){var switch__11411__auto__ = ((function (c__11488__auto___15222){
return (function (state_15175){
var state_val_15176 = (state_15175[(1)]);
if((state_val_15176 === (7))){
var state_15175__$1 = state_15175;
var statearr_15177_15223 = state_15175__$1;
(statearr_15177_15223[(2)] = false);

(statearr_15177_15223[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (20))){
var inst_15159 = (state_15175[(2)]);
var state_15175__$1 = state_15175;
if(cljs.core.truth_(inst_15159)){
var statearr_15178_15224 = state_15175__$1;
(statearr_15178_15224[(1)] = (24));

} else {
var statearr_15179_15225 = state_15175__$1;
(statearr_15179_15225[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (27))){
var state_15175__$1 = state_15175;
var statearr_15180_15226 = state_15175__$1;
(statearr_15180_15226[(2)] = null);

(statearr_15180_15226[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (1))){
var inst_15106 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:");
var state_15175__$1 = state_15175;
if(inst_15106){
var statearr_15181_15227 = state_15175__$1;
(statearr_15181_15227[(1)] = (2));

} else {
var statearr_15182_15228 = state_15175__$1;
(statearr_15182_15228[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (24))){
var inst_15143 = (state_15175[(7)]);
var inst_15161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15143);
var state_15175__$1 = state_15175;
var statearr_15183_15229 = state_15175__$1;
(statearr_15183_15229[(2)] = inst_15161);

(statearr_15183_15229[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (4))){
var inst_15110 = (state_15175[(2)]);
var inst_15111 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15110),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/ws")].join('');
var inst_15112 = [cljs.core.cst$kw$format];
var inst_15113 = [cljs.core.cst$kw$json_DASH_kw];
var inst_15114 = cljs.core.PersistentHashMap.fromArrays(inst_15112,inst_15113);
var inst_15115 = chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(inst_15111,cljs.core.array_seq([inst_15114], 0));
var state_15175__$1 = state_15175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15175__$1,(5),inst_15115);
} else {
if((state_val_15176 === (15))){
var inst_15139 = (state_15175[(8)]);
var state_15175__$1 = state_15175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15175__$1,(17),inst_15139);
} else {
if((state_val_15176 === (21))){
var state_15175__$1 = state_15175;
var statearr_15184_15230 = state_15175__$1;
(statearr_15184_15230[(2)] = true);

(statearr_15184_15230[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (13))){
var inst_15117 = (state_15175[(9)]);
var state_15175__$1 = state_15175;
var statearr_15185_15231 = state_15175__$1;
(statearr_15185_15231[(2)] = inst_15117);

(statearr_15185_15231[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (22))){
var state_15175__$1 = state_15175;
var statearr_15186_15232 = state_15175__$1;
(statearr_15186_15232[(2)] = false);

(statearr_15186_15232[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (29))){
var inst_15171 = (state_15175[(2)]);
var state_15175__$1 = state_15175;
var statearr_15187_15233 = state_15175__$1;
(statearr_15187_15233[(2)] = inst_15171);

(statearr_15187_15233[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (6))){
var inst_15117 = (state_15175[(9)]);
var inst_15122 = inst_15117.cljs$lang$protocol_mask$partition0$;
var inst_15123 = (inst_15122 & (64));
var inst_15124 = inst_15117.cljs$core$ISeq$;
var inst_15125 = (cljs.core.PROTOCOL_SENTINEL === inst_15124);
var inst_15126 = (inst_15123) || (inst_15125);
var state_15175__$1 = state_15175;
if(cljs.core.truth_(inst_15126)){
var statearr_15188_15234 = state_15175__$1;
(statearr_15188_15234[(1)] = (9));

} else {
var statearr_15189_15235 = state_15175__$1;
(statearr_15189_15235[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (28))){
var state_15175__$1 = state_15175;
var statearr_15190_15236 = state_15175__$1;
(statearr_15190_15236[(2)] = null);

(statearr_15190_15236[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (25))){
var inst_15143 = (state_15175[(7)]);
var state_15175__$1 = state_15175;
var statearr_15191_15237 = state_15175__$1;
(statearr_15191_15237[(2)] = inst_15143);

(statearr_15191_15237[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (17))){
var inst_15143 = (state_15175[(7)]);
var inst_15143__$1 = (state_15175[(2)]);
var inst_15145 = (inst_15143__$1 == null);
var inst_15146 = cljs.core.not(inst_15145);
var state_15175__$1 = (function (){var statearr_15192 = state_15175;
(statearr_15192[(7)] = inst_15143__$1);

return statearr_15192;
})();
if(inst_15146){
var statearr_15193_15238 = state_15175__$1;
(statearr_15193_15238[(1)] = (18));

} else {
var statearr_15194_15239 = state_15175__$1;
(statearr_15194_15239[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (3))){
var state_15175__$1 = state_15175;
var statearr_15195_15240 = state_15175__$1;
(statearr_15195_15240[(2)] = "ws://");

(statearr_15195_15240[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (12))){
var inst_15117 = (state_15175[(9)]);
var inst_15135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15117);
var state_15175__$1 = state_15175;
var statearr_15196_15241 = state_15175__$1;
(statearr_15196_15241[(2)] = inst_15135);

(statearr_15196_15241[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (2))){
var state_15175__$1 = state_15175;
var statearr_15197_15242 = state_15175__$1;
(statearr_15197_15242[(2)] = "wss://");

(statearr_15197_15242[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (23))){
var inst_15156 = (state_15175[(2)]);
var state_15175__$1 = state_15175;
var statearr_15198_15243 = state_15175__$1;
(statearr_15198_15243[(2)] = inst_15156);

(statearr_15198_15243[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (19))){
var state_15175__$1 = state_15175;
var statearr_15199_15244 = state_15175__$1;
(statearr_15199_15244[(2)] = false);

(statearr_15199_15244[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (11))){
var inst_15130 = (state_15175[(2)]);
var state_15175__$1 = state_15175;
var statearr_15200_15245 = state_15175__$1;
(statearr_15200_15245[(2)] = inst_15130);

(statearr_15200_15245[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (9))){
var state_15175__$1 = state_15175;
var statearr_15201_15246 = state_15175__$1;
(statearr_15201_15246[(2)] = true);

(statearr_15201_15246[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (5))){
var inst_15117 = (state_15175[(9)]);
var inst_15117__$1 = (state_15175[(2)]);
var inst_15119 = (inst_15117__$1 == null);
var inst_15120 = cljs.core.not(inst_15119);
var state_15175__$1 = (function (){var statearr_15202 = state_15175;
(statearr_15202[(9)] = inst_15117__$1);

return statearr_15202;
})();
if(inst_15120){
var statearr_15203_15247 = state_15175__$1;
(statearr_15203_15247[(1)] = (6));

} else {
var statearr_15204_15248 = state_15175__$1;
(statearr_15204_15248[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (14))){
var inst_15138 = (state_15175[(2)]);
var inst_15139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15138,cljs.core.cst$kw$ws_DASH_channel);
var state_15175__$1 = (function (){var statearr_15205 = state_15175;
(statearr_15205[(8)] = inst_15139);

return statearr_15205;
})();
var statearr_15206_15249 = state_15175__$1;
(statearr_15206_15249[(2)] = null);

(statearr_15206_15249[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (26))){
var inst_15164 = (state_15175[(2)]);
var inst_15165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15164,cljs.core.cst$kw$message);
var inst_15166 = airhead_frontend.requests.get_updates_BANG_();
var state_15175__$1 = (function (){var statearr_15207 = state_15175;
(statearr_15207[(10)] = inst_15166);

return statearr_15207;
})();
if(cljs.core.truth_(inst_15165)){
var statearr_15208_15250 = state_15175__$1;
(statearr_15208_15250[(1)] = (27));

} else {
var statearr_15209_15251 = state_15175__$1;
(statearr_15209_15251[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (16))){
var inst_15173 = (state_15175[(2)]);
var state_15175__$1 = state_15175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15175__$1,inst_15173);
} else {
if((state_val_15176 === (10))){
var state_15175__$1 = state_15175;
var statearr_15210_15252 = state_15175__$1;
(statearr_15210_15252[(2)] = false);

(statearr_15210_15252[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (18))){
var inst_15143 = (state_15175[(7)]);
var inst_15148 = inst_15143.cljs$lang$protocol_mask$partition0$;
var inst_15149 = (inst_15148 & (64));
var inst_15150 = inst_15143.cljs$core$ISeq$;
var inst_15151 = (cljs.core.PROTOCOL_SENTINEL === inst_15150);
var inst_15152 = (inst_15149) || (inst_15151);
var state_15175__$1 = state_15175;
if(cljs.core.truth_(inst_15152)){
var statearr_15211_15253 = state_15175__$1;
(statearr_15211_15253[(1)] = (21));

} else {
var statearr_15212_15254 = state_15175__$1;
(statearr_15212_15254[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15176 === (8))){
var inst_15133 = (state_15175[(2)]);
var state_15175__$1 = state_15175;
if(cljs.core.truth_(inst_15133)){
var statearr_15213_15255 = state_15175__$1;
(statearr_15213_15255[(1)] = (12));

} else {
var statearr_15214_15256 = state_15175__$1;
(statearr_15214_15256[(1)] = (13));

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
});})(c__11488__auto___15222))
;
return ((function (switch__11411__auto__,c__11488__auto___15222){
return (function() {
var airhead_frontend$requests$state_machine__11412__auto__ = null;
var airhead_frontend$requests$state_machine__11412__auto____0 = (function (){
var statearr_15218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15218[(0)] = airhead_frontend$requests$state_machine__11412__auto__);

(statearr_15218[(1)] = (1));

return statearr_15218;
});
var airhead_frontend$requests$state_machine__11412__auto____1 = (function (state_15175){
while(true){
var ret_value__11413__auto__ = (function (){try{while(true){
var result__11414__auto__ = switch__11411__auto__(state_15175);
if(cljs.core.keyword_identical_QMARK_(result__11414__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11414__auto__;
}
break;
}
}catch (e15219){if((e15219 instanceof Object)){
var ex__11415__auto__ = e15219;
var statearr_15220_15257 = state_15175;
(statearr_15220_15257[(5)] = ex__11415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15175);

return cljs.core.cst$kw$recur;
} else {
throw e15219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11413__auto__,cljs.core.cst$kw$recur)){
var G__15258 = state_15175;
state_15175 = G__15258;
continue;
} else {
return ret_value__11413__auto__;
}
break;
}
});
airhead_frontend$requests$state_machine__11412__auto__ = function(state_15175){
switch(arguments.length){
case 0:
return airhead_frontend$requests$state_machine__11412__auto____0.call(this);
case 1:
return airhead_frontend$requests$state_machine__11412__auto____1.call(this,state_15175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_frontend$requests$state_machine__11412__auto____0;
airhead_frontend$requests$state_machine__11412__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_frontend$requests$state_machine__11412__auto____1;
return airhead_frontend$requests$state_machine__11412__auto__;
})()
;})(switch__11411__auto__,c__11488__auto___15222))
})();
var state__11490__auto__ = (function (){var statearr_15221 = (f__11489__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11489__auto__.cljs$core$IFn$_invoke$arity$0() : f__11489__auto__.call(null));
(statearr_15221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11488__auto___15222);

return statearr_15221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11490__auto__);
});})(c__11488__auto___15222))
);

