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
cljs_http.core.pending_requests = (function (){var G__17894 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17894) : cljs.core.atom.call(null,G__17894));
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
return (function (p__17899){
var vec__17900 = p__17899;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__17904 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__17904)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__17904)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__17904)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__17904)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__17904)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17904)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17904)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__17905){
var map__17909 = p__17905;
var map__17909__$1 = ((((!((map__17909 == null)))?((((map__17909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17909):map__17909);
var request = map__17909__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17909__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17909__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17909__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6993__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__17911 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__17911,default_headers);

cljs_http.core.apply_response_type_BANG_(G__17911,response_type);

G__17911.setTimeoutInterval(timeout);

G__17911.setWithCredentials(send_credentials);

return G__17911;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__17912){
var map__17941 = p__17912;
var map__17941__$1 = ((((!((map__17941 == null)))?((((map__17941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17941):map__17941);
var request = map__17941__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17941__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17941__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17941__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17941__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17941__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17941__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6993__auto__ = request_method;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__17943 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__17943) : cljs_http.core.error_kw.call(null,G__17943));
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
});})(channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_17969 = ((function (channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__17944_17970 = xhr;
G__17944_17970.setProgressEventsEnabled(true);

G__17944_17970.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17969,cljs.core.cst$kw$upload));

G__17944_17970.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17969,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15034__auto___17971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17971,channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17971,channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_17955){
var state_val_17956 = (state_17955[(1)]);
if((state_val_17956 === (1))){
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17955__$1,(2),cancel);
} else {
if((state_val_17956 === (2))){
var inst_17946 = (state_17955[(2)]);
var inst_17947 = xhr.isComplete();
var inst_17948 = cljs.core.not(inst_17947);
var state_17955__$1 = (function (){var statearr_17957 = state_17955;
(statearr_17957[(7)] = inst_17946);

return statearr_17957;
})();
if(inst_17948){
var statearr_17958_17972 = state_17955__$1;
(statearr_17958_17972[(1)] = (3));

} else {
var statearr_17959_17973 = state_17955__$1;
(statearr_17959_17973[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (3))){
var inst_17950 = xhr.abort();
var state_17955__$1 = state_17955;
var statearr_17960_17974 = state_17955__$1;
(statearr_17960_17974[(2)] = inst_17950);

(statearr_17960_17974[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (4))){
var state_17955__$1 = state_17955;
var statearr_17961_17975 = state_17955__$1;
(statearr_17961_17975[(2)] = null);

(statearr_17961_17975[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17956 === (5))){
var inst_17953 = (state_17955[(2)]);
var state_17955__$1 = state_17955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17955__$1,inst_17953);
} else {
return null;
}
}
}
}
}
});})(c__15034__auto___17971,channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__14910__auto__,c__15034__auto___17971,channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__14911__auto__ = null;
var cljs_http$core$xhr_$_state_machine__14911__auto____0 = (function (){
var statearr_17965 = [null,null,null,null,null,null,null,null];
(statearr_17965[(0)] = cljs_http$core$xhr_$_state_machine__14911__auto__);

(statearr_17965[(1)] = (1));

return statearr_17965;
});
var cljs_http$core$xhr_$_state_machine__14911__auto____1 = (function (state_17955){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17955);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17966){if((e17966 instanceof Object)){
var ex__14914__auto__ = e17966;
var statearr_17967_17976 = state_17955;
(statearr_17967_17976[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17955);

return cljs.core.cst$kw$recur;
} else {
throw e17966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17977 = state_17955;
state_17955 = G__17977;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__14911__auto__ = function(state_17955){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__14911__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__14911__auto____1.call(this,state_17955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__14911__auto____0;
cljs_http$core$xhr_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__14911__auto____1;
return cljs_http$core$xhr_$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17971,channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__15036__auto__ = (function (){var statearr_17968 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17971);

return statearr_17968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17971,channel,request_url,method,headers__$1,xhr,map__17941,map__17941__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17978){
var map__17995 = p__17978;
var map__17995__$1 = ((((!((map__17995 == null)))?((((map__17995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17995):map__17995);
var request = map__17995__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17995__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17995__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17995__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17995__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_18011 = jsonp.send(null,((function (channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_18011], null));

if(cljs.core.truth_(cancel)){
var c__15034__auto___18012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___18012,req_18011,channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___18012,req_18011,channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_18001){
var state_val_18002 = (state_18001[(1)]);
if((state_val_18002 === (1))){
var state_18001__$1 = state_18001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18001__$1,(2),cancel);
} else {
if((state_val_18002 === (2))){
var inst_17998 = (state_18001[(2)]);
var inst_17999 = jsonp.cancel(req_18011);
var state_18001__$1 = (function (){var statearr_18003 = state_18001;
(statearr_18003[(7)] = inst_17998);

return statearr_18003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18001__$1,inst_17999);
} else {
return null;
}
}
});})(c__15034__auto___18012,req_18011,channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__14910__auto__,c__15034__auto___18012,req_18011,channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__14911__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__14911__auto____0 = (function (){
var statearr_18007 = [null,null,null,null,null,null,null,null];
(statearr_18007[(0)] = cljs_http$core$jsonp_$_state_machine__14911__auto__);

(statearr_18007[(1)] = (1));

return statearr_18007;
});
var cljs_http$core$jsonp_$_state_machine__14911__auto____1 = (function (state_18001){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_18001);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e18008){if((e18008 instanceof Object)){
var ex__14914__auto__ = e18008;
var statearr_18009_18013 = state_18001;
(statearr_18009_18013[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18001);

return cljs.core.cst$kw$recur;
} else {
throw e18008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__18014 = state_18001;
state_18001 = G__18014;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__14911__auto__ = function(state_18001){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__14911__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__14911__auto____1.call(this,state_18001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__14911__auto____0;
cljs_http$core$jsonp_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__14911__auto____1;
return cljs_http$core$jsonp_$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___18012,req_18011,channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__15036__auto__ = (function (){var statearr_18010 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_18010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___18012);

return statearr_18010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___18012,req_18011,channel,jsonp,map__17995,map__17995__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__18015){
var map__18018 = p__18015;
var map__18018__$1 = ((((!((map__18018 == null)))?((((map__18018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18018):map__18018);
var request = map__18018__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
