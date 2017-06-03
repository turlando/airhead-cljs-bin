// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6884__auto__ = v;
if(cljs.core.truth_(and__6884__auto__)){
return (v > (0));
} else {
return and__6884__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18617_SHARP_,p2__18616_SHARP_){
var vec__18621 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__18616_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18621,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18617_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18624_SHARP_){
return cljs_http.client.encode_val(k,p1__18624_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__18625){
var vec__18629 = p__18625;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18629,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18629,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__18632_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18632_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6884__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__6884__auto__){
var and__6884__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__6884__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6884__auto____$1;
}
} else {
return and__6884__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18634 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18634) : client.call(null,G__18634));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18635_SHARP_){
return cljs_http.client.decode_body(p1__18635_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18643 = arguments.length;
var i__8010__auto___18644 = (0);
while(true){
if((i__8010__auto___18644 < len__8009__auto___18643)){
args__8016__auto__.push((arguments[i__8010__auto___18644]));

var G__18645 = (i__8010__auto___18644 + (1));
i__8010__auto___18644 = G__18645;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18638){
var vec__18639 = p__18638;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18639,(0),null);
return ((function (vec__18639,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6896__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__18642 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18642) : client.call(null,G__18642));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18639,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq18636){
var G__18637 = cljs.core.first(seq18636);
var seq18636__$1 = cljs.core.next(seq18636);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__18637,seq18636__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18653 = arguments.length;
var i__8010__auto___18654 = (0);
while(true){
if((i__8010__auto___18654 < len__8009__auto___18653)){
args__8016__auto__.push((arguments[i__8010__auto___18654]));

var G__18655 = (i__8010__auto___18654 + (1));
i__8010__auto___18654 = G__18655;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18648){
var vec__18649 = p__18648;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18649,(0),null);
return ((function (vec__18649,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6896__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__18652 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18652) : client.call(null,G__18652));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18649,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq18646){
var G__18647 = cljs.core.first(seq18646);
var seq18646__$1 = cljs.core.next(seq18646);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__18647,seq18646__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18663 = arguments.length;
var i__8010__auto___18664 = (0);
while(true){
if((i__8010__auto___18664 < len__8009__auto___18663)){
args__8016__auto__.push((arguments[i__8010__auto___18664]));

var G__18665 = (i__8010__auto___18664 + (1));
i__8010__auto___18664 = G__18665;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18658){
var vec__18659 = p__18658;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(0),null);
return ((function (vec__18659,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6896__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__18662 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18662) : client.call(null,G__18662));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18659,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq18656){
var G__18657 = cljs.core.first(seq18656);
var seq18656__$1 = cljs.core.next(seq18656);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__18657,seq18656__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__18669 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18669__$1 = ((((!((map__18669 == null)))?((((map__18669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18669):map__18669);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18671 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18671) : client.call(null,G__18671));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__18676 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18676__$1 = ((((!((map__18676 == null)))?((((map__18676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18676):map__18676);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__18676,map__18676__$1,decoding,decoding_opts){
return (function (p1__18672_SHARP_){
return cljs_http.util.transit_decode(p1__18672_SHARP_,decoding,decoding_opts);
});})(map__18676,map__18676__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__18676,map__18676__$1,decoding,decoding_opts,transit_decode){
return (function (p1__18673_SHARP_){
return cljs_http.client.decode_body(p1__18673_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__18676,map__18676__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18679) : client.call(null,G__18679));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18680_SHARP_){
return cljs_http.client.decode_body(p1__18680_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__18685){
var map__18686 = p__18685;
var map__18686__$1 = ((((!((map__18686 == null)))?((((map__18686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18686):map__18686);
var req = map__18686__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__18688 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18688) : client.call(null,G__18688));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__18693){
var map__18694 = p__18693;
var map__18694__$1 = ((((!((map__18694 == null)))?((((map__18694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18694):map__18694);
var request = map__18694__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18694__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18694__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18694__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6884__auto__ = form_params;
if(cljs.core.truth_(and__6884__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6884__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__18696 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18696) : client.call(null,G__18696));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__18707_18717 = cljs.core.seq(params);
var chunk__18708_18718 = null;
var count__18709_18719 = (0);
var i__18710_18720 = (0);
while(true){
if((i__18710_18720 < count__18709_18719)){
var vec__18711_18721 = chunk__18708_18718.cljs$core$IIndexed$_nth$arity$2(null,i__18710_18720);
var k_18722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711_18721,(0),null);
var v_18723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711_18721,(1),null);
if(cljs.core.coll_QMARK_(v_18723)){
form_data.append(cljs.core.name(k_18722),cljs.core.first(v_18723),cljs.core.second(v_18723));
} else {
form_data.append(cljs.core.name(k_18722),v_18723);
}

var G__18724 = seq__18707_18717;
var G__18725 = chunk__18708_18718;
var G__18726 = count__18709_18719;
var G__18727 = (i__18710_18720 + (1));
seq__18707_18717 = G__18724;
chunk__18708_18718 = G__18725;
count__18709_18719 = G__18726;
i__18710_18720 = G__18727;
continue;
} else {
var temp__4657__auto___18728 = cljs.core.seq(seq__18707_18717);
if(temp__4657__auto___18728){
var seq__18707_18729__$1 = temp__4657__auto___18728;
if(cljs.core.chunked_seq_QMARK_(seq__18707_18729__$1)){
var c__7715__auto___18730 = cljs.core.chunk_first(seq__18707_18729__$1);
var G__18731 = cljs.core.chunk_rest(seq__18707_18729__$1);
var G__18732 = c__7715__auto___18730;
var G__18733 = cljs.core.count(c__7715__auto___18730);
var G__18734 = (0);
seq__18707_18717 = G__18731;
chunk__18708_18718 = G__18732;
count__18709_18719 = G__18733;
i__18710_18720 = G__18734;
continue;
} else {
var vec__18714_18735 = cljs.core.first(seq__18707_18729__$1);
var k_18736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18714_18735,(0),null);
var v_18737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18714_18735,(1),null);
if(cljs.core.coll_QMARK_(v_18737)){
form_data.append(cljs.core.name(k_18736),cljs.core.first(v_18737),cljs.core.second(v_18737));
} else {
form_data.append(cljs.core.name(k_18736),v_18737);
}

var G__18738 = cljs.core.next(seq__18707_18729__$1);
var G__18739 = null;
var G__18740 = (0);
var G__18741 = (0);
seq__18707_18717 = G__18738;
chunk__18708_18718 = G__18739;
count__18709_18719 = G__18740;
i__18710_18720 = G__18741;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__18746){
var map__18747 = p__18746;
var map__18747__$1 = ((((!((map__18747 == null)))?((((map__18747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18747):map__18747);
var request = map__18747__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18747__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18747__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6884__auto__ = multipart_params;
if(cljs.core.truth_(and__6884__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6884__auto__;
}
})())){
var G__18749 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18749) : client.call(null,G__18749));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__18751 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18751) : client.call(null,G__18751));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__18752_SHARP_){
var G__18754 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18752_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18754) : client.call(null,G__18754));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__18760){
var map__18761 = p__18760;
var map__18761__$1 = ((((!((map__18761 == null)))?((((map__18761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18761):map__18761);
var req = map__18761__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18761__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__18763 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__18761,map__18761__$1,req,query_params){
return (function (p1__18755_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__18755_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__18761,map__18761__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18763) : client.call(null,G__18763));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18771 = arguments.length;
var i__8010__auto___18772 = (0);
while(true){
if((i__8010__auto___18772 < len__8009__auto___18771)){
args__8016__auto__.push((arguments[i__8010__auto___18772]));

var G__18773 = (i__8010__auto___18772 + (1));
i__8010__auto___18772 = G__18773;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18766){
var vec__18767 = p__18766;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18767,(0),null);
return ((function (vec__18767,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6896__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__18770 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18770) : client.call(null,G__18770));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__18767,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq18764){
var G__18765 = cljs.core.first(seq18764);
var seq18764__$1 = cljs.core.next(seq18764);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__18765,seq18764__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__18775 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18775) : client.call(null,G__18775));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18783 = arguments.length;
var i__8010__auto___18784 = (0);
while(true){
if((i__8010__auto___18784 < len__8009__auto___18783)){
args__8016__auto__.push((arguments[i__8010__auto___18784]));

var G__18785 = (i__8010__auto___18784 + (1));
i__8010__auto___18784 = G__18785;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18778){
var vec__18779 = p__18778;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18779,(0),null);
var G__18782 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18782) : cljs_http.client.request.call(null,G__18782));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq18776){
var G__18777 = cljs.core.first(seq18776);
var seq18776__$1 = cljs.core.next(seq18776);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__18777,seq18776__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18793 = arguments.length;
var i__8010__auto___18794 = (0);
while(true){
if((i__8010__auto___18794 < len__8009__auto___18793)){
args__8016__auto__.push((arguments[i__8010__auto___18794]));

var G__18795 = (i__8010__auto___18794 + (1));
i__8010__auto___18794 = G__18795;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18788){
var vec__18789 = p__18788;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18789,(0),null);
var G__18792 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18792) : cljs_http.client.request.call(null,G__18792));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq18786){
var G__18787 = cljs.core.first(seq18786);
var seq18786__$1 = cljs.core.next(seq18786);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__18787,seq18786__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18803 = arguments.length;
var i__8010__auto___18804 = (0);
while(true){
if((i__8010__auto___18804 < len__8009__auto___18803)){
args__8016__auto__.push((arguments[i__8010__auto___18804]));

var G__18805 = (i__8010__auto___18804 + (1));
i__8010__auto___18804 = G__18805;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18798){
var vec__18799 = p__18798;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18799,(0),null);
var G__18802 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18802) : cljs_http.client.request.call(null,G__18802));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq18796){
var G__18797 = cljs.core.first(seq18796);
var seq18796__$1 = cljs.core.next(seq18796);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__18797,seq18796__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18813 = arguments.length;
var i__8010__auto___18814 = (0);
while(true){
if((i__8010__auto___18814 < len__8009__auto___18813)){
args__8016__auto__.push((arguments[i__8010__auto___18814]));

var G__18815 = (i__8010__auto___18814 + (1));
i__8010__auto___18814 = G__18815;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18808){
var vec__18809 = p__18808;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18809,(0),null);
var G__18812 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18812) : cljs_http.client.request.call(null,G__18812));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq18806){
var G__18807 = cljs.core.first(seq18806);
var seq18806__$1 = cljs.core.next(seq18806);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__18807,seq18806__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18823 = arguments.length;
var i__8010__auto___18824 = (0);
while(true){
if((i__8010__auto___18824 < len__8009__auto___18823)){
args__8016__auto__.push((arguments[i__8010__auto___18824]));

var G__18825 = (i__8010__auto___18824 + (1));
i__8010__auto___18824 = G__18825;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18818){
var vec__18819 = p__18818;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(0),null);
var G__18822 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18822) : cljs_http.client.request.call(null,G__18822));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq18816){
var G__18817 = cljs.core.first(seq18816);
var seq18816__$1 = cljs.core.next(seq18816);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__18817,seq18816__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18833 = arguments.length;
var i__8010__auto___18834 = (0);
while(true){
if((i__8010__auto___18834 < len__8009__auto___18833)){
args__8016__auto__.push((arguments[i__8010__auto___18834]));

var G__18835 = (i__8010__auto___18834 + (1));
i__8010__auto___18834 = G__18835;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18828){
var vec__18829 = p__18828;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18829,(0),null);
var G__18832 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18832) : cljs_http.client.request.call(null,G__18832));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq18826){
var G__18827 = cljs.core.first(seq18826);
var seq18826__$1 = cljs.core.next(seq18826);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__18827,seq18826__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18843 = arguments.length;
var i__8010__auto___18844 = (0);
while(true){
if((i__8010__auto___18844 < len__8009__auto___18843)){
args__8016__auto__.push((arguments[i__8010__auto___18844]));

var G__18845 = (i__8010__auto___18844 + (1));
i__8010__auto___18844 = G__18845;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18838){
var vec__18839 = p__18838;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(0),null);
var G__18842 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18842) : cljs_http.client.request.call(null,G__18842));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq18836){
var G__18837 = cljs.core.first(seq18836);
var seq18836__$1 = cljs.core.next(seq18836);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__18837,seq18836__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18853 = arguments.length;
var i__8010__auto___18854 = (0);
while(true){
if((i__8010__auto___18854 < len__8009__auto___18853)){
args__8016__auto__.push((arguments[i__8010__auto___18854]));

var G__18855 = (i__8010__auto___18854 + (1));
i__8010__auto___18854 = G__18855;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18848){
var vec__18849 = p__18848;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18849,(0),null);
var G__18852 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18852) : cljs_http.client.request.call(null,G__18852));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq18846){
var G__18847 = cljs.core.first(seq18846);
var seq18846__$1 = cljs.core.next(seq18846);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__18847,seq18846__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__8016__auto__ = [];
var len__8009__auto___18863 = arguments.length;
var i__8010__auto___18864 = (0);
while(true){
if((i__8010__auto___18864 < len__8009__auto___18863)){
args__8016__auto__.push((arguments[i__8010__auto___18864]));

var G__18865 = (i__8010__auto___18864 + (1));
i__8010__auto___18864 = G__18865;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18858){
var vec__18859 = p__18858;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18859,(0),null);
var G__18862 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18862) : cljs_http.client.request.call(null,G__18862));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq18856){
var G__18857 = cljs.core.first(seq18856);
var seq18856__$1 = cljs.core.next(seq18856);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__18857,seq18856__$1);
});

