// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__19991){
var map__20004 = p__19991;
var map__20004__$1 = ((((!((map__20004 == null)))?((((map__20004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20004):map__20004);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20004__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20004__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20004__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__20004,map__20004__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_20006 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__20007 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR_20006,map__20004,map__20004__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__20010,transformer){
var vec__20011 = p__20010;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20011,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20011,(1),null);
var G__20014 = text;
var G__20015 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__20014,G__20015) : transformer.call(null,G__20014,G__20015));
});})(_STAR_inhibit_separator_STAR_20006,map__20004,map__20004__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6993__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20007,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20007,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_20006;
}});
;})(map__20004,map__20004__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__8113__auto__ = [];
var len__8106__auto___20018 = arguments.length;
var i__8107__auto___20019 = (0);
while(true){
if((i__8107__auto___20019 < len__8106__auto___20018)){
args__8113__auto__.push((arguments[i__8107__auto___20019]));

var G__20020 = (i__8107__auto___20019 + (1));
i__8107__auto___20019 = G__20020;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq20016){
var G__20017 = cljs.core.first(seq20016);
var seq20016__$1 = cljs.core.next(seq20016);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__20017,seq20016__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = (function (){var G__20026 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20026) : cljs.core.atom.call(null,G__20026));
})();
var seq__20027_20031 = cljs.core.seq(lines);
var chunk__20028_20032 = null;
var count__20029_20033 = (0);
var i__20030_20034 = (0);
while(true){
if((i__20030_20034 < count__20029_20033)){
var line_20035 = chunk__20028_20032.cljs$core$IIndexed$_nth$arity$2(null,i__20030_20034);
markdown.links.parse_reference_link(line_20035,references);

var G__20036 = seq__20027_20031;
var G__20037 = chunk__20028_20032;
var G__20038 = count__20029_20033;
var G__20039 = (i__20030_20034 + (1));
seq__20027_20031 = G__20036;
chunk__20028_20032 = G__20037;
count__20029_20033 = G__20038;
i__20030_20034 = G__20039;
continue;
} else {
var temp__4657__auto___20040 = cljs.core.seq(seq__20027_20031);
if(temp__4657__auto___20040){
var seq__20027_20041__$1 = temp__4657__auto___20040;
if(cljs.core.chunked_seq_QMARK_(seq__20027_20041__$1)){
var c__7812__auto___20042 = cljs.core.chunk_first(seq__20027_20041__$1);
var G__20043 = cljs.core.chunk_rest(seq__20027_20041__$1);
var G__20044 = c__7812__auto___20042;
var G__20045 = cljs.core.count(c__7812__auto___20042);
var G__20046 = (0);
seq__20027_20031 = G__20043;
chunk__20028_20032 = G__20044;
count__20029_20033 = G__20045;
i__20030_20034 = G__20046;
continue;
} else {
var line_20047 = cljs.core.first(seq__20027_20041__$1);
markdown.links.parse_reference_link(line_20047,references);

var G__20048 = cljs.core.next(seq__20027_20041__$1);
var G__20049 = null;
var G__20050 = (0);
var G__20051 = (0);
seq__20027_20031 = G__20048;
chunk__20028_20032 = G__20049;
count__20029_20033 = G__20050;
i__20030_20034 = G__20051;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(references) : cljs.core.deref.call(null,references));
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = (function (){var G__20057 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$next_DASH_fn_DASH_id,(1),cljs.core.cst$kw$processed,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unprocessed,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20057) : cljs.core.atom.call(null,G__20057));
})();
var seq__20058_20062 = cljs.core.seq(lines);
var chunk__20059_20063 = null;
var count__20060_20064 = (0);
var i__20061_20065 = (0);
while(true){
if((i__20061_20065 < count__20060_20064)){
var line_20066 = chunk__20059_20063.cljs$core$IIndexed$_nth$arity$2(null,i__20061_20065);
markdown.links.parse_footnote_link(line_20066,footnotes);

var G__20067 = seq__20058_20062;
var G__20068 = chunk__20059_20063;
var G__20069 = count__20060_20064;
var G__20070 = (i__20061_20065 + (1));
seq__20058_20062 = G__20067;
chunk__20059_20063 = G__20068;
count__20060_20064 = G__20069;
i__20061_20065 = G__20070;
continue;
} else {
var temp__4657__auto___20071 = cljs.core.seq(seq__20058_20062);
if(temp__4657__auto___20071){
var seq__20058_20072__$1 = temp__4657__auto___20071;
if(cljs.core.chunked_seq_QMARK_(seq__20058_20072__$1)){
var c__7812__auto___20073 = cljs.core.chunk_first(seq__20058_20072__$1);
var G__20074 = cljs.core.chunk_rest(seq__20058_20072__$1);
var G__20075 = c__7812__auto___20073;
var G__20076 = cljs.core.count(c__7812__auto___20073);
var G__20077 = (0);
seq__20058_20062 = G__20074;
chunk__20059_20063 = G__20075;
count__20060_20064 = G__20076;
i__20061_20065 = G__20077;
continue;
} else {
var line_20078 = cljs.core.first(seq__20058_20072__$1);
markdown.links.parse_footnote_link(line_20078,footnotes);

var G__20079 = cljs.core.next(seq__20058_20072__$1);
var G__20080 = null;
var G__20081 = (0);
var G__20082 = (0);
seq__20058_20062 = G__20079;
chunk__20059_20063 = G__20080;
count__20060_20064 = G__20081;
i__20061_20065 = G__20082;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(footnotes) : cljs.core.deref.call(null,footnotes));
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__20087 = cljs.core.split_with((function (p1__20083_SHARP_){
return cljs.core.not_empty(p1__20083_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_20117 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_20118 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_20117,_STAR_formatter_STAR_20118){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_20117,_STAR_formatter_STAR_20118))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__20119 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20119,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20119,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__20125_20144 = lines__$1;
var vec__20126_20145 = G__20125_20144;
var seq__20127_20146 = cljs.core.seq(vec__20126_20145);
var first__20128_20147 = cljs.core.first(seq__20127_20146);
var seq__20127_20148__$1 = cljs.core.next(seq__20127_20146);
var line_20149 = first__20128_20147;
var more_20150 = seq__20127_20148__$1;
var state_20151 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__20125_20152__$1 = G__20125_20144;
var state_20153__$1 = state_20151;
while(true){
var vec__20129_20154 = G__20125_20152__$1;
var seq__20130_20155 = cljs.core.seq(vec__20129_20154);
var first__20131_20156 = cljs.core.first(seq__20130_20155);
var seq__20130_20157__$1 = cljs.core.next(seq__20130_20155);
var line_20158__$1 = first__20131_20156;
var more_20159__$1 = seq__20130_20157__$1;
var state_20160__$2 = state_20153__$1;
var line_20161__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_20160__$2))?"":line_20158__$1);
var state_20162__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_20160__$2))?(function (){var G__20132 = html;
var G__20133 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_20160__$2);
var G__20134 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_20160__$2);
var G__20135 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_20160__$2,cljs.core.cst$kw$buf,cljs.core.array_seq([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__20132,G__20133,G__20134,G__20135) : transformer.call(null,G__20132,G__20133,G__20134,G__20135));
})():state_20160__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_20159__$1))){
var G__20163 = more_20159__$1;
var G__20164 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20136 = html;
var G__20137 = line_20161__$2;
var G__20138 = cljs.core.first(more_20159__$1);
var G__20139 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_20162__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__20136,G__20137,G__20138,G__20139) : transformer.call(null,G__20136,G__20137,G__20138,G__20139));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_20161__$2));
G__20125_20152__$1 = G__20163;
state_20153__$1 = G__20164;
continue;
} else {
var G__20140_20165 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_20162__$3)));
var G__20141_20166 = line_20161__$2;
var G__20142_20167 = "";
var G__20143_20168 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_20162__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__20140_20165,G__20141_20166,G__20142_20167,G__20143_20168) : transformer.call(null,G__20140_20165,G__20141_20166,G__20142_20167,G__20143_20168));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_20118;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_20117;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__8113__auto__ = [];
var len__8106__auto___20171 = arguments.length;
var i__8107__auto___20172 = (0);
while(true){
if((i__8107__auto___20172 < len__8106__auto___20171)){
args__8113__auto__.push((arguments[i__8107__auto___20172]));

var G__20173 = (i__8107__auto___20172 + (1));
i__8107__auto___20172 = G__20173;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return cljs.core.cst$kw$html.cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq20169){
var G__20170 = cljs.core.first(seq20169);
var seq20169__$1 = cljs.core.next(seq20169);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__20170,seq20169__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__8113__auto__ = [];
var len__8106__auto___20176 = arguments.length;
var i__8107__auto___20177 = (0);
while(true){
if((i__8107__auto___20177 < len__8106__auto___20176)){
args__8113__auto__.push((arguments[i__8107__auto___20177]));

var G__20178 = (i__8107__auto___20177 + (1));
i__8107__auto___20177 = G__20178;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse_DASH_meta_QMARK_,true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq20174){
var G__20175 = cljs.core.first(seq20174);
var seq20174__$1 = cljs.core.next(seq20174);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__20175,seq20174__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__8113__auto__ = [];
var len__8106__auto___20180 = arguments.length;
var i__8107__auto___20181 = (0);
while(true){
if((i__8107__auto___20181 < len__8106__auto___20180)){
args__8113__auto__.push((arguments[i__8107__auto___20181]));

var G__20182 = (i__8107__auto___20181 + (1));
i__8107__auto___20181 = G__20182;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((0) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__8114__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq20179){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20179));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__8113__auto__ = [];
var len__8106__auto___20184 = arguments.length;
var i__8107__auto___20185 = (0);
while(true){
if((i__8107__auto___20185 < len__8106__auto___20184)){
args__8113__auto__.push((arguments[i__8107__auto___20185]));

var G__20186 = (i__8107__auto___20185 + (1));
i__8107__auto___20185 = G__20186;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((0) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__8114__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq20183){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20183));
});

