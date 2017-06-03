// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = (function (){var G__18488 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18488) : cljs.core.atom.call(null,G__18488));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__18493){
var vec__18494 = p__18493;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18494,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__18498 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__18498)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__18498)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__18498)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__18498)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__18498)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18498)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18498)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__18499){
var map__18503 = p__18499;
var map__18503__$1 = ((((!((map__18503 == null)))?((((map__18503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18503):map__18503);
var request = map__18503__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6896__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__18505 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__18505,default_headers);

cljs_http.core.apply_response_type_BANG_(G__18505,response_type);

G__18505.setTimeoutInterval(timeout);

G__18505.setWithCredentials(send_credentials);

return G__18505;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__18506){
var map__18535 = p__18506;
var map__18535__$1 = ((((!((map__18535 == null)))?((((map__18535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18535):map__18535);
var request = map__18535__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6896__auto__ = request_method;
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__18537 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__18537) : cljs_http.core.error_kw.call(null,G__18537));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_18563 = ((function (channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__18538_18564 = xhr;
G__18538_18564.setProgressEventsEnabled(true);

G__18538_18564.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18563,cljs.core.cst$kw$upload));

G__18538_18564.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_18563,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15628__auto___18565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___18565,channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___18565,channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_18549){
var state_val_18550 = (state_18549[(1)]);
if((state_val_18550 === (1))){
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18549__$1,(2),cancel);
} else {
if((state_val_18550 === (2))){
var inst_18540 = (state_18549[(2)]);
var inst_18541 = xhr.isComplete();
var inst_18542 = cljs.core.not(inst_18541);
var state_18549__$1 = (function (){var statearr_18551 = state_18549;
(statearr_18551[(7)] = inst_18540);

return statearr_18551;
})();
if(inst_18542){
var statearr_18552_18566 = state_18549__$1;
(statearr_18552_18566[(1)] = (3));

} else {
var statearr_18553_18567 = state_18549__$1;
(statearr_18553_18567[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18550 === (3))){
var inst_18544 = xhr.abort();
var state_18549__$1 = state_18549;
var statearr_18554_18568 = state_18549__$1;
(statearr_18554_18568[(2)] = inst_18544);

(statearr_18554_18568[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18550 === (4))){
var state_18549__$1 = state_18549;
var statearr_18555_18569 = state_18549__$1;
(statearr_18555_18569[(2)] = null);

(statearr_18555_18569[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18550 === (5))){
var inst_18547 = (state_18549[(2)]);
var state_18549__$1 = state_18549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18549__$1,inst_18547);
} else {
return null;
}
}
}
}
}
});})(c__15628__auto___18565,channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__15504__auto__,c__15628__auto___18565,channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__15505__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15505__auto____0 = (function (){
var statearr_18559 = [null,null,null,null,null,null,null,null];
(statearr_18559[(0)] = cljs_http$core$xhr_$_state_machine__15505__auto__);

(statearr_18559[(1)] = (1));

return statearr_18559;
});
var cljs_http$core$xhr_$_state_machine__15505__auto____1 = (function (state_18549){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18549);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18560){if((e18560 instanceof Object)){
var ex__15508__auto__ = e18560;
var statearr_18561_18570 = state_18549;
(statearr_18561_18570[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18549);

return cljs.core.cst$kw$recur;
} else {
throw e18560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18571 = state_18549;
state_18549 = G__18571;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15505__auto__ = function(state_18549){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15505__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15505__auto____1.call(this,state_18549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15505__auto____0;
cljs_http$core$xhr_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15505__auto____1;
return cljs_http$core$xhr_$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___18565,channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__15630__auto__ = (function (){var statearr_18562 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___18565);

return statearr_18562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___18565,channel,request_url,method,headers__$1,xhr,map__18535,map__18535__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__18572){
var map__18589 = p__18572;
var map__18589__$1 = ((((!((map__18589 == null)))?((((map__18589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18589):map__18589);
var request = map__18589__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18589__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_18605 = jsonp.send(null,((function (channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_18605], null));

if(cljs.core.truth_(cancel)){
var c__15628__auto___18606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___18606,req_18605,channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___18606,req_18605,channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_18595){
var state_val_18596 = (state_18595[(1)]);
if((state_val_18596 === (1))){
var state_18595__$1 = state_18595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18595__$1,(2),cancel);
} else {
if((state_val_18596 === (2))){
var inst_18592 = (state_18595[(2)]);
var inst_18593 = jsonp.cancel(req_18605);
var state_18595__$1 = (function (){var statearr_18597 = state_18595;
(statearr_18597[(7)] = inst_18592);

return statearr_18597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18595__$1,inst_18593);
} else {
return null;
}
}
});})(c__15628__auto___18606,req_18605,channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__15504__auto__,c__15628__auto___18606,req_18605,channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__15505__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15505__auto____0 = (function (){
var statearr_18601 = [null,null,null,null,null,null,null,null];
(statearr_18601[(0)] = cljs_http$core$jsonp_$_state_machine__15505__auto__);

(statearr_18601[(1)] = (1));

return statearr_18601;
});
var cljs_http$core$jsonp_$_state_machine__15505__auto____1 = (function (state_18595){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18595);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18602){if((e18602 instanceof Object)){
var ex__15508__auto__ = e18602;
var statearr_18603_18607 = state_18595;
(statearr_18603_18607[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18595);

return cljs.core.cst$kw$recur;
} else {
throw e18602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18608 = state_18595;
state_18595 = G__18608;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15505__auto__ = function(state_18595){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15505__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15505__auto____1.call(this,state_18595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15505__auto____0;
cljs_http$core$jsonp_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15505__auto____1;
return cljs_http$core$jsonp_$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___18606,req_18605,channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__15630__auto__ = (function (){var statearr_18604 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___18606);

return statearr_18604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___18606,req_18605,channel,jsonp,map__18589,map__18589__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__18609){
var map__18612 = p__18609;
var map__18612__$1 = ((((!((map__18612 == null)))?((((map__18612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18612):map__18612);
var request = map__18612__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18612__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
