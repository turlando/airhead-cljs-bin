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
if(cljs.core.truth_((function (){var and__6981__auto__ = v;
if(cljs.core.truth_(and__6981__auto__)){
return (v > (0));
} else {
return and__6981__auto__;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18023_SHARP_,p2__18022_SHARP_){
var vec__18027 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__18022_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18023_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18030_SHARP_){
return cljs_http.client.encode_val(k,p1__18030_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__18031){
var vec__18035 = p__18031;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(1),null);
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
return (function (p1__18038_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18038_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__6981__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__6981__auto__){
var and__6981__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__6981__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6981__auto____$1;
}
} else {
return and__6981__auto__;
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
var G__18040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18040) : client.call(null,G__18040));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18041_SHARP_){
return cljs_http.client.decode_body(p1__18041_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18049 = arguments.length;
var i__8107__auto___18050 = (0);
while(true){
if((i__8107__auto___18050 < len__8106__auto___18049)){
args__8113__auto__.push((arguments[i__8107__auto___18050]));

var G__18051 = (i__8107__auto___18050 + (1));
i__8107__auto___18050 = G__18051;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18044){
var vec__18045 = p__18044;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18045,(0),null);
return ((function (vec__18045,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6993__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__18048 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18048) : client.call(null,G__18048));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18045,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq18042){
var G__18043 = cljs.core.first(seq18042);
var seq18042__$1 = cljs.core.next(seq18042);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__18043,seq18042__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18059 = arguments.length;
var i__8107__auto___18060 = (0);
while(true){
if((i__8107__auto___18060 < len__8106__auto___18059)){
args__8113__auto__.push((arguments[i__8107__auto___18060]));

var G__18061 = (i__8107__auto___18060 + (1));
i__8107__auto___18060 = G__18061;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18054){
var vec__18055 = p__18054;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,(0),null);
return ((function (vec__18055,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6993__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__18058 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18058) : client.call(null,G__18058));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18055,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq18052){
var G__18053 = cljs.core.first(seq18052);
var seq18052__$1 = cljs.core.next(seq18052);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__18053,seq18052__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18069 = arguments.length;
var i__8107__auto___18070 = (0);
while(true){
if((i__8107__auto___18070 < len__8106__auto___18069)){
args__8113__auto__.push((arguments[i__8107__auto___18070]));

var G__18071 = (i__8107__auto___18070 + (1));
i__8107__auto___18070 = G__18071;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18064){
var vec__18065 = p__18064;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18065,(0),null);
return ((function (vec__18065,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6993__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__18068 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18068) : client.call(null,G__18068));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__18065,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq18062){
var G__18063 = cljs.core.first(seq18062);
var seq18062__$1 = cljs.core.next(seq18062);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__18063,seq18062__$1);
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
var map__18075 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18075__$1 = ((((!((map__18075 == null)))?((((map__18075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18075):map__18075);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18075__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18075__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__18077 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18077) : client.call(null,G__18077));
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
var map__18082 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__18082__$1 = ((((!((map__18082 == null)))?((((map__18082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18082):map__18082);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18082__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18082__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__18082,map__18082__$1,decoding,decoding_opts){
return (function (p1__18078_SHARP_){
return cljs_http.util.transit_decode(p1__18078_SHARP_,decoding,decoding_opts);
});})(map__18082,map__18082__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__18082,map__18082__$1,decoding,decoding_opts,transit_decode){
return (function (p1__18079_SHARP_){
return cljs_http.client.decode_body(p1__18079_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__18082,map__18082__$1,decoding,decoding_opts,transit_decode))
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
var G__18085 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18085) : client.call(null,G__18085));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__18086_SHARP_){
return cljs_http.client.decode_body(p1__18086_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__18091){
var map__18092 = p__18091;
var map__18092__$1 = ((((!((map__18092 == null)))?((((map__18092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18092):map__18092);
var req = map__18092__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18092__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__18094 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18094) : client.call(null,G__18094));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__18099){
var map__18100 = p__18099;
var map__18100__$1 = ((((!((map__18100 == null)))?((((map__18100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18100):map__18100);
var request = map__18100__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6981__auto__ = form_params;
if(cljs.core.truth_(and__6981__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6981__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__18102 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18102) : client.call(null,G__18102));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__18113_18123 = cljs.core.seq(params);
var chunk__18114_18124 = null;
var count__18115_18125 = (0);
var i__18116_18126 = (0);
while(true){
if((i__18116_18126 < count__18115_18125)){
var vec__18117_18127 = chunk__18114_18124.cljs$core$IIndexed$_nth$arity$2(null,i__18116_18126);
var k_18128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117_18127,(0),null);
var v_18129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117_18127,(1),null);
if(cljs.core.coll_QMARK_(v_18129)){
form_data.append(cljs.core.name(k_18128),cljs.core.first(v_18129),cljs.core.second(v_18129));
} else {
form_data.append(cljs.core.name(k_18128),v_18129);
}

var G__18130 = seq__18113_18123;
var G__18131 = chunk__18114_18124;
var G__18132 = count__18115_18125;
var G__18133 = (i__18116_18126 + (1));
seq__18113_18123 = G__18130;
chunk__18114_18124 = G__18131;
count__18115_18125 = G__18132;
i__18116_18126 = G__18133;
continue;
} else {
var temp__4657__auto___18134 = cljs.core.seq(seq__18113_18123);
if(temp__4657__auto___18134){
var seq__18113_18135__$1 = temp__4657__auto___18134;
if(cljs.core.chunked_seq_QMARK_(seq__18113_18135__$1)){
var c__7812__auto___18136 = cljs.core.chunk_first(seq__18113_18135__$1);
var G__18137 = cljs.core.chunk_rest(seq__18113_18135__$1);
var G__18138 = c__7812__auto___18136;
var G__18139 = cljs.core.count(c__7812__auto___18136);
var G__18140 = (0);
seq__18113_18123 = G__18137;
chunk__18114_18124 = G__18138;
count__18115_18125 = G__18139;
i__18116_18126 = G__18140;
continue;
} else {
var vec__18120_18141 = cljs.core.first(seq__18113_18135__$1);
var k_18142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120_18141,(0),null);
var v_18143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120_18141,(1),null);
if(cljs.core.coll_QMARK_(v_18143)){
form_data.append(cljs.core.name(k_18142),cljs.core.first(v_18143),cljs.core.second(v_18143));
} else {
form_data.append(cljs.core.name(k_18142),v_18143);
}

var G__18144 = cljs.core.next(seq__18113_18135__$1);
var G__18145 = null;
var G__18146 = (0);
var G__18147 = (0);
seq__18113_18123 = G__18144;
chunk__18114_18124 = G__18145;
count__18115_18125 = G__18146;
i__18116_18126 = G__18147;
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
return (function (p__18152){
var map__18153 = p__18152;
var map__18153__$1 = ((((!((map__18153 == null)))?((((map__18153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18153):map__18153);
var request = map__18153__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18153__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18153__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6981__auto__ = multipart_params;
if(cljs.core.truth_(and__6981__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6981__auto__;
}
})())){
var G__18155 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18155) : client.call(null,G__18155));
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
var G__18157 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18157) : client.call(null,G__18157));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__18158_SHARP_){
var G__18160 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18158_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18160) : client.call(null,G__18160));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__18166){
var map__18167 = p__18166;
var map__18167__$1 = ((((!((map__18167 == null)))?((((map__18167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18167):map__18167);
var req = map__18167__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18167__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__18169 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__18167,map__18167__$1,req,query_params){
return (function (p1__18161_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__18161_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__18167,map__18167__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18169) : client.call(null,G__18169));
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
var args__8113__auto__ = [];
var len__8106__auto___18177 = arguments.length;
var i__8107__auto___18178 = (0);
while(true){
if((i__8107__auto___18178 < len__8106__auto___18177)){
args__8113__auto__.push((arguments[i__8107__auto___18178]));

var G__18179 = (i__8107__auto___18178 + (1));
i__8107__auto___18178 = G__18179;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__18172){
var vec__18173 = p__18172;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18173,(0),null);
return ((function (vec__18173,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6993__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__18176 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18176) : client.call(null,G__18176));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__18173,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq18170){
var G__18171 = cljs.core.first(seq18170);
var seq18170__$1 = cljs.core.next(seq18170);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__18171,seq18170__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__18181 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__18181) : client.call(null,G__18181));
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
var args__8113__auto__ = [];
var len__8106__auto___18189 = arguments.length;
var i__8107__auto___18190 = (0);
while(true){
if((i__8107__auto___18190 < len__8106__auto___18189)){
args__8113__auto__.push((arguments[i__8107__auto___18190]));

var G__18191 = (i__8107__auto___18190 + (1));
i__8107__auto___18190 = G__18191;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18184){
var vec__18185 = p__18184;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18185,(0),null);
var G__18188 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18188) : cljs_http.client.request.call(null,G__18188));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq18182){
var G__18183 = cljs.core.first(seq18182);
var seq18182__$1 = cljs.core.next(seq18182);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__18183,seq18182__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18199 = arguments.length;
var i__8107__auto___18200 = (0);
while(true){
if((i__8107__auto___18200 < len__8106__auto___18199)){
args__8113__auto__.push((arguments[i__8107__auto___18200]));

var G__18201 = (i__8107__auto___18200 + (1));
i__8107__auto___18200 = G__18201;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18194){
var vec__18195 = p__18194;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18195,(0),null);
var G__18198 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18198) : cljs_http.client.request.call(null,G__18198));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq18192){
var G__18193 = cljs.core.first(seq18192);
var seq18192__$1 = cljs.core.next(seq18192);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__18193,seq18192__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18209 = arguments.length;
var i__8107__auto___18210 = (0);
while(true){
if((i__8107__auto___18210 < len__8106__auto___18209)){
args__8113__auto__.push((arguments[i__8107__auto___18210]));

var G__18211 = (i__8107__auto___18210 + (1));
i__8107__auto___18210 = G__18211;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18204){
var vec__18205 = p__18204;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(0),null);
var G__18208 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18208) : cljs_http.client.request.call(null,G__18208));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq18202){
var G__18203 = cljs.core.first(seq18202);
var seq18202__$1 = cljs.core.next(seq18202);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__18203,seq18202__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18219 = arguments.length;
var i__8107__auto___18220 = (0);
while(true){
if((i__8107__auto___18220 < len__8106__auto___18219)){
args__8113__auto__.push((arguments[i__8107__auto___18220]));

var G__18221 = (i__8107__auto___18220 + (1));
i__8107__auto___18220 = G__18221;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18214){
var vec__18215 = p__18214;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18215,(0),null);
var G__18218 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18218) : cljs_http.client.request.call(null,G__18218));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq18212){
var G__18213 = cljs.core.first(seq18212);
var seq18212__$1 = cljs.core.next(seq18212);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__18213,seq18212__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18229 = arguments.length;
var i__8107__auto___18230 = (0);
while(true){
if((i__8107__auto___18230 < len__8106__auto___18229)){
args__8113__auto__.push((arguments[i__8107__auto___18230]));

var G__18231 = (i__8107__auto___18230 + (1));
i__8107__auto___18230 = G__18231;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18224){
var vec__18225 = p__18224;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(0),null);
var G__18228 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18228) : cljs_http.client.request.call(null,G__18228));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq18222){
var G__18223 = cljs.core.first(seq18222);
var seq18222__$1 = cljs.core.next(seq18222);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__18223,seq18222__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18239 = arguments.length;
var i__8107__auto___18240 = (0);
while(true){
if((i__8107__auto___18240 < len__8106__auto___18239)){
args__8113__auto__.push((arguments[i__8107__auto___18240]));

var G__18241 = (i__8107__auto___18240 + (1));
i__8107__auto___18240 = G__18241;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18234){
var vec__18235 = p__18234;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18235,(0),null);
var G__18238 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18238) : cljs_http.client.request.call(null,G__18238));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq18232){
var G__18233 = cljs.core.first(seq18232);
var seq18232__$1 = cljs.core.next(seq18232);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__18233,seq18232__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18249 = arguments.length;
var i__8107__auto___18250 = (0);
while(true){
if((i__8107__auto___18250 < len__8106__auto___18249)){
args__8113__auto__.push((arguments[i__8107__auto___18250]));

var G__18251 = (i__8107__auto___18250 + (1));
i__8107__auto___18250 = G__18251;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18244){
var vec__18245 = p__18244;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18245,(0),null);
var G__18248 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18248) : cljs_http.client.request.call(null,G__18248));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq18242){
var G__18243 = cljs.core.first(seq18242);
var seq18242__$1 = cljs.core.next(seq18242);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__18243,seq18242__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18259 = arguments.length;
var i__8107__auto___18260 = (0);
while(true){
if((i__8107__auto___18260 < len__8106__auto___18259)){
args__8113__auto__.push((arguments[i__8107__auto___18260]));

var G__18261 = (i__8107__auto___18260 + (1));
i__8107__auto___18260 = G__18261;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18254){
var vec__18255 = p__18254;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18255,(0),null);
var G__18258 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18258) : cljs_http.client.request.call(null,G__18258));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq18252){
var G__18253 = cljs.core.first(seq18252);
var seq18252__$1 = cljs.core.next(seq18252);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__18253,seq18252__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__8113__auto__ = [];
var len__8106__auto___18269 = arguments.length;
var i__8107__auto___18270 = (0);
while(true){
if((i__8107__auto___18270 < len__8106__auto___18269)){
args__8113__auto__.push((arguments[i__8107__auto___18270]));

var G__18271 = (i__8107__auto___18270 + (1));
i__8107__auto___18270 = G__18271;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__18264){
var vec__18265 = p__18264;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18265,(0),null);
var G__18268 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__18268) : cljs_http.client.request.call(null,G__18268));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq18262){
var G__18263 = cljs.core.first(seq18262);
var seq18262__$1 = cljs.core.next(seq18262);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__18263,seq18262__$1);
});

