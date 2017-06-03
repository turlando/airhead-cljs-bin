// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('airhead_cljs.requests');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('airhead_cljs.state');
goog.require('goog.string');
goog.require('goog.string.format');
airhead_cljs.requests.get_info_BANG_ = (function airhead_cljs$requests$get_info_BANG_(){
var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__){
return (function (state_18889){
var state_val_18890 = (state_18889[(1)]);
if((state_val_18890 === (1))){
var inst_18883 = cljs_http.client.get("/api/info");
var state_18889__$1 = state_18889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18889__$1,(2),inst_18883);
} else {
if((state_val_18890 === (2))){
var inst_18885 = (state_18889[(2)]);
var inst_18886 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18885);
var inst_18887 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$info,inst_18886);
var state_18889__$1 = state_18889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18889__$1,inst_18887);
} else {
return null;
}
}
});})(c__15628__auto__))
;
return ((function (switch__15504__auto__,c__15628__auto__){
return (function() {
var airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto__ = null;
var airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto____0 = (function (){
var statearr_18894 = [null,null,null,null,null,null,null];
(statearr_18894[(0)] = airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto__);

(statearr_18894[(1)] = (1));

return statearr_18894;
});
var airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto____1 = (function (state_18889){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18889);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18895){if((e18895 instanceof Object)){
var ex__15508__auto__ = e18895;
var statearr_18896_18898 = state_18889;
(statearr_18896_18898[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18889);

return cljs.core.cst$kw$recur;
} else {
throw e18895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18899 = state_18889;
state_18889 = G__18899;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto__ = function(state_18889){
switch(arguments.length){
case 0:
return airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto____0.call(this);
case 1:
return airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto____1.call(this,state_18889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto____0;
airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto____1;
return airhead_cljs$requests$get_info_BANG__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__))
})();
var state__15630__auto__ = (function (){var statearr_18897 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_18897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__))
);

return c__15628__auto__;
});
airhead_cljs.requests.get_playlist_BANG_ = (function airhead_cljs$requests$get_playlist_BANG_(){
var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__){
return (function (state_18931){
var state_val_18932 = (state_18931[(1)]);
if((state_val_18932 === (1))){
var inst_18922 = cljs_http.client.get("/api/playlist");
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18931__$1,(2),inst_18922);
} else {
if((state_val_18932 === (2))){
var inst_18924 = (state_18931[(2)]);
var inst_18925 = (function (){var G__18933 = cljs.core.cst$kw$body;
return (inst_18924.cljs$core$IFn$_invoke$arity$1 ? inst_18924.cljs$core$IFn$_invoke$arity$1(G__18933) : inst_18924.call(null,G__18933));
})();
var inst_18926 = (function (){var G__18934 = cljs.core.cst$kw$next;
return (inst_18925.cljs$core$IFn$_invoke$arity$1 ? inst_18925.cljs$core$IFn$_invoke$arity$1(G__18934) : inst_18925.call(null,G__18934));
})();
var inst_18927 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$playlist,inst_18926);
var inst_18928 = (function (){var G__18935 = cljs.core.cst$kw$current;
return (inst_18925.cljs$core$IFn$_invoke$arity$1 ? inst_18925.cljs$core$IFn$_invoke$arity$1(G__18935) : inst_18925.call(null,G__18935));
})();
var inst_18929 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$now_DASH_playing,inst_18928);
var state_18931__$1 = (function (){var statearr_18936 = state_18931;
(statearr_18936[(7)] = inst_18927);

return statearr_18936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18931__$1,inst_18929);
} else {
return null;
}
}
});})(c__15628__auto__))
;
return ((function (switch__15504__auto__,c__15628__auto__){
return (function() {
var airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto__ = null;
var airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto____0 = (function (){
var statearr_18940 = [null,null,null,null,null,null,null,null];
(statearr_18940[(0)] = airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto__);

(statearr_18940[(1)] = (1));

return statearr_18940;
});
var airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto____1 = (function (state_18931){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18931);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18941){if((e18941 instanceof Object)){
var ex__15508__auto__ = e18941;
var statearr_18942_18944 = state_18931;
(statearr_18942_18944[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18931);

return cljs.core.cst$kw$recur;
} else {
throw e18941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18945 = state_18931;
state_18931 = G__18945;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto__ = function(state_18931){
switch(arguments.length){
case 0:
return airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto____0.call(this);
case 1:
return airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto____1.call(this,state_18931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto____0;
airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto____1;
return airhead_cljs$requests$get_playlist_BANG__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__))
})();
var state__15630__auto__ = (function (){var statearr_18943 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_18943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__))
);

return c__15628__auto__;
});
airhead_cljs.requests.playlist_add_BANG_ = (function airhead_cljs$requests$playlist_add_BANG_(id){
return cljs_http.client.put([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_cljs.requests.playlist_remove_BANG_ = (function airhead_cljs$requests$playlist_remove_BANG_(id){
return cljs_http.client.delete$([cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/playlist/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});
airhead_cljs.requests.get_library_BANG_ = (function airhead_cljs$requests$get_library_BANG_(){
var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__){
return (function (state_18990){
var state_val_18991 = (state_18990[(1)]);
if((state_val_18991 === (1))){
var inst_18973 = [cljs.core.cst$kw$query_DASH_params];
var inst_18974 = ["q"];
var inst_18975 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(airhead_cljs.state.app_state) : cljs.core.deref.call(null,airhead_cljs.state.app_state));
var inst_18976 = (function (){var G__18992 = cljs.core.cst$kw$query;
return (inst_18975.cljs$core$IFn$_invoke$arity$1 ? inst_18975.cljs$core$IFn$_invoke$arity$1(G__18992) : inst_18975.call(null,G__18992));
})();
var inst_18977 = [inst_18976];
var inst_18978 = cljs.core.PersistentHashMap.fromArrays(inst_18974,inst_18977);
var inst_18979 = [inst_18978];
var inst_18980 = cljs.core.PersistentHashMap.fromArrays(inst_18973,inst_18979);
var inst_18981 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([inst_18980], 0));
var state_18990__$1 = state_18990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18990__$1,(2),inst_18981);
} else {
if((state_val_18991 === (2))){
var inst_18983 = (state_18990[(2)]);
var inst_18984 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18985 = [cljs.core.cst$kw$body,cljs.core.cst$kw$tracks];
var inst_18986 = (new cljs.core.PersistentVector(null,2,(5),inst_18984,inst_18985,null));
var inst_18987 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_18983,inst_18986);
var inst_18988 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$library,inst_18987);
var state_18990__$1 = state_18990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18990__$1,inst_18988);
} else {
return null;
}
}
});})(c__15628__auto__))
;
return ((function (switch__15504__auto__,c__15628__auto__){
return (function() {
var airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto__ = null;
var airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto____0 = (function (){
var statearr_18996 = [null,null,null,null,null,null,null];
(statearr_18996[(0)] = airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto__);

(statearr_18996[(1)] = (1));

return statearr_18996;
});
var airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto____1 = (function (state_18990){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18990);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18997){if((e18997 instanceof Object)){
var ex__15508__auto__ = e18997;
var statearr_18998_19000 = state_18990;
(statearr_18998_19000[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18990);

return cljs.core.cst$kw$recur;
} else {
throw e18997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__19001 = state_18990;
state_18990 = G__19001;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto__ = function(state_18990){
switch(arguments.length){
case 0:
return airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto____0.call(this);
case 1:
return airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto____1.call(this,state_18990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto____0;
airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto____1;
return airhead_cljs$requests$get_library_BANG__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__))
})();
var state__15630__auto__ = (function (){var statearr_18999 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_18999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__))
);

return c__15628__auto__;
});
airhead_cljs.requests.upload_BANG_ = (function airhead_cljs$requests$upload_BANG_(){
var form = document.getElementById("upload-form");
var progress_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var http_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/library",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,(new FormData(form)),cljs.core.cst$kw$progress,progress_chan], null)], 0));
var c__15628__auto___19128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___19128,form,progress_chan,http_chan){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___19128,form,progress_chan,http_chan){
return (function (state_19089){
var state_val_19090 = (state_19089[(1)]);
if((state_val_19090 === (7))){
var inst_19085 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
var statearr_19091_19129 = state_19089__$1;
(statearr_19091_19129[(2)] = inst_19085);

(statearr_19091_19129[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (1))){
var state_19089__$1 = state_19089;
var statearr_19092_19130 = state_19089__$1;
(statearr_19092_19130[(2)] = null);

(statearr_19092_19130[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (4))){
var inst_19067 = (state_19089[(7)]);
var inst_19067__$1 = (state_19089[(2)]);
var state_19089__$1 = (function (){var statearr_19093 = state_19089;
(statearr_19093[(7)] = inst_19067__$1);

return statearr_19093;
})();
if(cljs.core.truth_(inst_19067__$1)){
var statearr_19094_19131 = state_19089__$1;
(statearr_19094_19131[(1)] = (5));

} else {
var statearr_19095_19132 = state_19089__$1;
(statearr_19095_19132[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (6))){
var state_19089__$1 = state_19089;
var statearr_19096_19133 = state_19089__$1;
(statearr_19096_19133[(2)] = null);

(statearr_19096_19133[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (3))){
var inst_19087 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19089__$1,inst_19087);
} else {
if((state_val_19090 === (2))){
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19089__$1,(4),progress_chan);
} else {
if((state_val_19090 === (9))){
var state_19089__$1 = state_19089;
var statearr_19097_19134 = state_19089__$1;
(statearr_19097_19134[(2)] = null);

(statearr_19097_19134[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (5))){
var inst_19067 = (state_19089[(7)]);
var inst_19069 = (function (){var G__19098 = cljs.core.cst$kw$direction;
return (inst_19067.cljs$core$IFn$_invoke$arity$1 ? inst_19067.cljs$core$IFn$_invoke$arity$1(G__19098) : inst_19067.call(null,G__19098));
})();
var inst_19070 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19069,cljs.core.cst$kw$upload);
var state_19089__$1 = state_19089;
if(inst_19070){
var statearr_19099_19135 = state_19089__$1;
(statearr_19099_19135[(1)] = (8));

} else {
var statearr_19100_19136 = state_19089__$1;
(statearr_19100_19136[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (10))){
var inst_19081 = (state_19089[(2)]);
var state_19089__$1 = (function (){var statearr_19101 = state_19089;
(statearr_19101[(8)] = inst_19081);

return statearr_19101;
})();
var statearr_19102_19137 = state_19089__$1;
(statearr_19102_19137[(2)] = null);

(statearr_19102_19137[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (8))){
var inst_19067 = (state_19089[(7)]);
var inst_19072 = (function (){var G__19103 = cljs.core.cst$kw$loaded;
return (inst_19067.cljs$core$IFn$_invoke$arity$1 ? inst_19067.cljs$core$IFn$_invoke$arity$1(G__19103) : inst_19067.call(null,G__19103));
})();
var inst_19073 = (function (){var G__19104 = cljs.core.cst$kw$total;
return (inst_19067.cljs$core$IFn$_invoke$arity$1 ? inst_19067.cljs$core$IFn$_invoke$arity$1(G__19104) : inst_19067.call(null,G__19104));
})();
var inst_19074 = (inst_19072 / inst_19073);
var inst_19075 = (inst_19074 * (100));
var inst_19076 = goog.string.format("Uploading: %.0f%",inst_19075);
var inst_19077 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_percentage,inst_19075);
var inst_19078 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,inst_19076);
var state_19089__$1 = (function (){var statearr_19105 = state_19089;
(statearr_19105[(9)] = inst_19077);

return statearr_19105;
})();
var statearr_19106_19138 = state_19089__$1;
(statearr_19106_19138[(2)] = inst_19078);

(statearr_19106_19138[(1)] = (10));


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
});})(c__15628__auto___19128,form,progress_chan,http_chan))
;
return ((function (switch__15504__auto__,c__15628__auto___19128,form,progress_chan,http_chan){
return (function() {
var airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__ = null;
var airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____0 = (function (){
var statearr_19110 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19110[(0)] = airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__);

(statearr_19110[(1)] = (1));

return statearr_19110;
});
var airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____1 = (function (state_19089){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_19089);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e19111){if((e19111 instanceof Object)){
var ex__15508__auto__ = e19111;
var statearr_19112_19139 = state_19089;
(statearr_19112_19139[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19089);

return cljs.core.cst$kw$recur;
} else {
throw e19111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__19140 = state_19089;
state_19089 = G__19140;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__ = function(state_19089){
switch(arguments.length){
case 0:
return airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____0.call(this);
case 1:
return airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____1.call(this,state_19089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____0;
airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____1;
return airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___19128,form,progress_chan,http_chan))
})();
var state__15630__auto__ = (function (){var statearr_19113 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_19113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___19128);

return statearr_19113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___19128,form,progress_chan,http_chan))
);


var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__,form,progress_chan,http_chan){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__,form,progress_chan,http_chan){
return (function (state_19118){
var state_val_19119 = (state_19118[(1)]);
if((state_val_19119 === (1))){
var state_19118__$1 = state_19118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19118__$1,(2),http_chan);
} else {
if((state_val_19119 === (2))){
var inst_19115 = (state_19118[(2)]);
var inst_19116 = airhead_cljs.state.update_state_BANG_(cljs.core.cst$kw$upload_DASH_status,"Done! It will show in the library once it gets transcoded.");
var state_19118__$1 = (function (){var statearr_19120 = state_19118;
(statearr_19120[(7)] = inst_19115);

return statearr_19120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19118__$1,inst_19116);
} else {
return null;
}
}
});})(c__15628__auto__,form,progress_chan,http_chan))
;
return ((function (switch__15504__auto__,c__15628__auto__,form,progress_chan,http_chan){
return (function() {
var airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__ = null;
var airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____0 = (function (){
var statearr_19124 = [null,null,null,null,null,null,null,null];
(statearr_19124[(0)] = airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__);

(statearr_19124[(1)] = (1));

return statearr_19124;
});
var airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____1 = (function (state_19118){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_19118);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e19125){if((e19125 instanceof Object)){
var ex__15508__auto__ = e19125;
var statearr_19126_19141 = state_19118;
(statearr_19126_19141[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19118);

return cljs.core.cst$kw$recur;
} else {
throw e19125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__19142 = state_19118;
state_19118 = G__19142;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__ = function(state_19118){
switch(arguments.length){
case 0:
return airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____0.call(this);
case 1:
return airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____1.call(this,state_19118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____0;
airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto____1;
return airhead_cljs$requests$upload_BANG__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__,form,progress_chan,http_chan))
})();
var state__15630__auto__ = (function (){var statearr_19127 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_19127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_19127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__,form,progress_chan,http_chan))
);

return c__15628__auto__;
});
airhead_cljs.requests.polling_callback = (function airhead_cljs$requests$polling_callback(){
airhead_cljs.requests.get_info_BANG_();

airhead_cljs.requests.get_playlist_BANG_();

return airhead_cljs.requests.get_library_BANG_();
});
setInterval(airhead_cljs.requests.polling_callback,(1000));
