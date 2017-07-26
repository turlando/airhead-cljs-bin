// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('markdown.links');
goog.require('markdown.lists');
goog.require('markdown.tables');
goog.require('markdown.common');
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim(text):null);
var and__6981__auto__ = cljs.core.not_empty(trimmed);
if(cljs.core.truth_(and__6981__auto__)){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([type]),trimmed);
} else {
return and__6981__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,p__19876){
var map__19879 = p__19876;
var map__19879__$1 = ((((!((map__19879 == null)))?((((map__19879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19879):map__19879);
var state = map__19879__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__6993__auto__ = code;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__6993__auto__ = markdown.transformers.h1_QMARK_(text);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return markdown.transformers.h2_QMARK_(text);
}
})())?"":text),((clojure.string.blank_QMARK_(text))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$hr,cljs.core.array_seq([cljs.core.cst$kw$heading], 0)):state)], null);
}
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__19881 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq("<sup>"),cljs.core.second(remaining),cljs.core.array_seq([cljs.core.seq("</sup>")], 0)));
var G__19882 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),remaining);
buf = G__19881;
remaining = G__19882;
continue;
} else {
var G__19883 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(remaining));
var G__19884 = cljs.core.rest(remaining);
buf = G__19883;
remaining = G__19884;
continue;

}
}
break;
}
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,p__19885){
var map__19888 = p__19885;
var map__19888__$1 = ((((!((map__19888 == null)))?((((map__19888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19888):map__19888);
var state = map__19888__$1;
var buf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888__$1,cljs.core.cst$kw$buf);
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888__$1,cljs.core.cst$kw$next_DASH_line);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888__$1,cljs.core.cst$kw$codeblock);
var heading_anchors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888__$1,cljs.core.cst$kw$heading_DASH_anchors);
if(cljs.core.truth_((function (){var or__6993__auto__ = codeblock;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return code;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_((function (){var or__6993__auto__ = buf;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h1>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h1>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_((function (){var or__6993__auto__ = buf;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h2>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h2>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
var temp__4655__auto__ = markdown.common.make_heading(text,heading_anchors);
if(cljs.core.truth_(temp__4655__auto__)){
var heading = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$inline_DASH_heading,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__19890){
var map__19893 = p__19890;
var map__19893__$1 = ((((!((map__19893 == null)))?((((map__19893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19893):map__19893);
var state = map__19893__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19893__$1,cljs.core.cst$kw$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19893__$1,cljs.core.cst$kw$lists);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),text))) && (cljs.core.not((function (){var or__6993__auto__ = code;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return lists;
}
})())))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),text))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,p__19896){
var map__19902 = p__19896;
var map__19902__$1 = ((((!((map__19902 == null)))?((((map__19902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19902):map__19902);
var state = map__19902__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19902__$1,cljs.core.cst$kw$code);
var frozen_strings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19902__$1,cljs.core.cst$kw$frozen_DASH_strings);
if(cljs.core.truth_(code)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var currently_frozen = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$frozen_DASH_strings,frozen_strings], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,((function (currently_frozen,map__19902,map__19902__$1,state,code,frozen_strings){
return (function (p1__19895_SHARP_){
var vec__19904 = markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__19895_SHARP_,(1),(cljs.core.count(p1__19895_SHARP_) - (1))),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(currently_frozen) : cljs.core.deref.call(null,currently_frozen))], 0));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(0),null);
var frozen_strings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(1),null);
cljs.core.vreset_BANG_(currently_frozen,frozen_strings__$1);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});})(currently_frozen,map__19902,map__19902__$1,state,code,frozen_strings))
),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(currently_frozen) : cljs.core.deref.call(null,currently_frozen))], 0))], null);
}
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__6993__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__19907_SHARP_){
var encoded = (cljs.core.truth_(cljs.core.cst$kw$clojurescript.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__19907_SHARP_,(1),(cljs.core.count(p1__19907_SHARP_) - (1))):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5)){
var G__19910 = "&#x%02x;";
var G__19911 = (c | (0));
return (markdown.transformers._STAR_formatter_STAR_.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers._STAR_formatter_STAR_.cljs$core$IFn$_invoke$arity$2(G__19910,G__19911) : markdown.transformers._STAR_formatter_STAR_.call(null,G__19910,G__19911));
} else {
return c;
}
}),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__19907_SHARP_,(1),(cljs.core.count(p1__19907_SHARP_) - (1))))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a href=\"mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
}))),state], null);
});
markdown.transformers.set_line_state = (function markdown$transformers$set_line_state(text,p__19912){
var map__19915 = p__19912;
var map__19915__$1 = ((((!((map__19915 == null)))?((((map__19915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19915):map__19915);
var state = map__19915__$1;
var inline_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.cst$kw$inline_DASH_heading);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$inline_DASH_heading),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$temp,cljs.core.cst$kw$inline_DASH_heading], null),inline_heading)], null);
});
markdown.transformers.clear_line_state = (function markdown$transformers$clear_line_state(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$temp)], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__6981__auto__ = cljs.core.not(last_line_empty_QMARK_);
if(and__6981__auto__){
return cljs.core.not_empty(text);
} else {
return and__6981__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('');
} else {
return text;
}
});
markdown.transformers.open_paragraph = (function markdown$transformers$open_paragraph(text,p__19917){
var map__19920 = p__19917;
var map__19920__$1 = ((((!((map__19920 == null)))?((((map__19920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19920):map__19920);
var state = map__19920__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$eof);
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$paragraph);
var blockquote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$blockquote);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$heading);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$hr);
var temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$temp);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$lists);
var inline_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$inline_DASH_heading);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$code);
if(cljs.core.truth_((function (){var and__6981__auto__ = paragraph;
if(cljs.core.truth_(and__6981__auto__)){
return lists;
} else {
return and__6981__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("</p>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$paragraph)], null);
} else {
if(cljs.core.truth_((function (){var or__6993__auto__ = heading;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
var or__6993__auto____$1 = inline_heading;
if(cljs.core.truth_(or__6993__auto____$1)){
return or__6993__auto____$1;
} else {
var or__6993__auto____$2 = hr;
if(cljs.core.truth_(or__6993__auto____$2)){
return or__6993__auto____$2;
} else {
var or__6993__auto____$3 = code;
if(cljs.core.truth_(or__6993__auto____$3)){
return or__6993__auto____$3;
} else {
var or__6993__auto____$4 = lists;
if(cljs.core.truth_(or__6993__auto____$4)){
return or__6993__auto____$4;
} else {
return blockquote;
}
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph)){
if(cljs.core.truth_((function (){var or__6993__auto__ = eof;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.empty_QMARK_(clojure.string.trim(text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.transformers.paragraph_text(last_line_empty_QMARK_,text)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</p>")].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$paragraph)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text(last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__6981__auto__ = cljs.core.not(eof);
if(and__6981__auto__){
var and__6981__auto____$1 = !(clojure.string.blank_QMARK_(text));
if(and__6981__auto____$1){
var or__6993__auto__ = cljs.core.cst$kw$inline_DASH_heading.cljs$core$IFn$_invoke$arity$1(temp);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return last_line_empty_QMARK_;
}
} else {
return and__6981__auto____$1;
}
} else {
return and__6981__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$paragraph,true,cljs.core.array_seq([cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.close_paragraph = (function markdown$transformers$close_paragraph(text,p__19922){
var map__19925 = p__19922;
var map__19925__$1 = ((((!((map__19925 == null)))?((((map__19925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19925):map__19925);
var state = map__19925__$1;
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19925__$1,cljs.core.cst$kw$next_DASH_line);
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19925__$1,cljs.core.cst$kw$paragraph);
if(cljs.core.truth_((function (){var and__6981__auto__ = paragraph;
if(cljs.core.truth_(and__6981__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),next_line));
} else {
return and__6981__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</p>")].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$paragraph)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.transformers.close_paragraph,markdown.transformers.open_paragraph(text,state));
});
markdown.transformers.code = (function markdown$transformers$code(text,p__19927){
var map__19930 = p__19927;
var map__19930__$1 = ((((!((map__19930 == null)))?((((map__19930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19930):map__19930);
var state = map__19930__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19930__$1,cljs.core.cst$kw$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19930__$1,cljs.core.cst$kw$lists);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19930__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19930__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__6993__auto__ = lists;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code)){
if(cljs.core.truth_((function (){var or__6993__auto__ = eof;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("    ",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("</code></pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$indented_DASH_code,cljs.core.array_seq([cljs.core.cst$kw$code,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_(clojure.string.trim(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre><code>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,true,cljs.core.array_seq([cljs.core.cst$kw$indented_DASH_code,true], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,p__19932){
var map__19941 = p__19932;
var map__19941__$1 = ((((!((map__19941 == null)))?((((map__19941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19941):map__19941);
var state = map__19941__$1;
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,cljs.core.cst$kw$codeblock);
var codeblock_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,cljs.core.cst$kw$codeblock_DASH_end);
var indented_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,cljs.core.cst$kw$indented_DASH_code);
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,cljs.core.cst$kw$next_DASH_line);
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_(codeblock_end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true),cljs.core.cst$kw$code,cljs.core.array_seq([cljs.core.cst$kw$codeblock,cljs.core.cst$kw$codeblock_DASH_end], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__6981__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last((3),(function (){var G__19944 = next_line;
if((G__19944 == null)){
return null;
} else {
return clojure.string.trim(G__19944);
}
})()));
if(and__6981__auto__){
return codeblock;
} else {
return and__6981__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code([cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),next_line)))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</code></pre>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_,true,cljs.core.array_seq([cljs.core.cst$kw$codeblock_DASH_end,true,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], 0))], null);
} else {
if((cljs.core.not(indented_code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed)))){
var vec__19945 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed));
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19945,(1),null);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(code));
var formatter = cljs.core.cst$kw$code_DASH_style.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre><code"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty(lang))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(formatter)?(function (){var G__19948 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang);
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__19948) : formatter.call(null,G__19948));
})():[cljs.core.str.cljs$core$IFn$_invoke$arity$1("class=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('')))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(((cljs.core.empty_QMARK_(s))?s:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''))))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,true,cljs.core.array_seq([cljs.core.cst$kw$codeblock,true], 0))], null);
} else {
if(cljs.core.truth_(codeblock)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(text)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<hr/>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hr,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
/**
 * Check for blockquotes and signal to blockquote-2 function with
 *   states blockquote-start and blockquote-end so that tags can be added.
 *   This approach enables lists to be included in blockquotes.
 */
markdown.transformers.blockquote_1 = (function markdown$transformers$blockquote_1(text,p__19949){
var map__19952 = p__19949;
var map__19952__$1 = ((((!((map__19952 == null)))?((((map__19952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19952):map__19952);
var state = map__19952__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$eof);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$codeblock);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$lists);
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var or__6993__auto__ = code;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$blockquote.cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__6993__auto__ = eof;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.empty_QMARK_(trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$blockquote_DASH_end,true,cljs.core.array_seq([cljs.core.cst$kw$blockquote,false], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?"</p>":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<p>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,true)], null);
} else {
if(((cljs.core.count(trimmed) >= (2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(2))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?"</p>":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<footer>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</footer>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,false)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?null:"<p>")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?null:"<p>")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,true)], null);

}
}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.first(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(text))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$blockquote_DASH_start,true,cljs.core.array_seq([cljs.core.cst$kw$blockquote,true,cljs.core.cst$kw$blockquote_DASH_paragraph,true], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
/**
 * Check for change in blockquote states and add start or end tags.
 *   Closing a blockquote with a list in it is a bit more complex, 
 *   as the list is not closed until the following blank line.
 */
markdown.transformers.blockquote_2 = (function markdown$transformers$blockquote_2(text,p__19954){
var map__19957 = p__19954;
var map__19957__$1 = ((((!((map__19957 == null)))?((((map__19957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19957):map__19957);
var state = map__19957__$1;
var blockquote_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19957__$1,cljs.core.cst$kw$blockquote_DASH_start);
var blockquote_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19957__$1,cljs.core.cst$kw$blockquote_DASH_end);
var blockquote_paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19957__$1,cljs.core.cst$kw$blockquote_DASH_paragraph);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19957__$1,cljs.core.cst$kw$lists);
var not_in_list = (cljs.core.not(lists)) || (cljs.core.empty_QMARK_(lists));
if(cljs.core.truth_(blockquote_start)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<blockquote><p>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$blockquote_DASH_start)], null);
} else {
if(cljs.core.truth_((function (){var and__6981__auto__ = blockquote_end;
if(cljs.core.truth_(and__6981__auto__)){
return not_in_list;
} else {
return and__6981__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(blockquote_paragraph)?"</p>":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</blockquote>")].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$blockquote,cljs.core.array_seq([cljs.core.cst$kw$blockquote_DASH_paragraph,cljs.core.cst$kw$blockquote_DASH_end], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
});
markdown.transformers.footer = (function markdown$transformers$footer(footnotes){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes))){
return "";
} else {
return (function (p1__19959_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol class='footnotes'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19959_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</ol>")].join('');
}).call(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (footnotes__$1,p__19964){
var vec__19965 = p__19964;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19965,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19965,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(footnotes__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li id='fn-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",label))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a href='#fnref"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>&#8617;</a></li>")].join('');
}),"",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes))));
}
});
/**
 * Given a line of metadata header text return either a list containing a parsed
 *   and normalizd key and the original text of the value, or if no header is found
 *   (this is a continuation or new value from a pervious header key) simply
 *   return the text. If a blank or invalid line is found return nil.
 */
markdown.transformers.parse_metadata_line = (function markdown$transformers$parse_metadata_line(line){
if(cljs.core.truth_(line)){
var vec__19974 = cljs.core.re_matches(/^([0-9A-Za-z_-]*):(.*)$/,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19974,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19974,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19974,(2),null);
var vec__19977 = cljs.core.re_matches(/^    (.*)$/,line);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19977,(0),null);
var next_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19977,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),"")){
if(cljs.core.truth_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(key)),val], null);
} else {
if(cljs.core.truth_(next_val)){
return line;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a list of maps which contain a single key/value, flatten them all into
 *   a single map with all the leading spaces removed. If an empty list is provided
 *   then return nil.
 */
markdown.transformers.flatten_metadata = (function markdown$transformers$flatten_metadata(metadata){
if((cljs.core.count(metadata) > (0))){
var acc = cljs.core.PersistentArrayMap.EMPTY;
var remain = metadata;
var prev_key = null;
while(true){
if(!(cljs.core.empty_QMARK_(remain))){
var data = cljs.core.first(remain);
var vec__19983 = ((cljs.core.sequential_QMARK_(data))?data:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key,data], null));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19983,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19983,(1),null);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.PersistentVector.EMPTY);
var postfix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),val)))?"\n":"");
var norm_val = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(val)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix)].join('');
var new_val = ((!(cljs.core.empty_QMARK_(norm_val)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_val,norm_val):prev_val);
var G__19986 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new_val])], 0));
var G__19987 = cljs.core.rest(remain);
var G__19988 = key;
acc = G__19986;
remain = G__19987;
prev_key = G__19988;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});
/**
 * Given a sequence of lines from a markdown document, attempt to parse a
 *   metadata header if it exists.
 */
markdown.transformers.parse_metadata_headers = (function markdown$transformers$parse_metadata_headers(lines_seq){
if(cljs.core.sequential_QMARK_(lines_seq)){
} else {
throw (new Error("Assert failed: (sequential? lines-seq)"));
}

if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,lines_seq)){
} else {
throw (new Error("Assert failed: (every? string? lines-seq)"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,line){
var temp__4655__auto__ = markdown.transformers.parse_metadata_line(line);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,parsed);
} else {
return cljs.core.reduced(markdown.transformers.flatten_metadata(acc));
}
}),cljs.core.PersistentVector.EMPTY,lines_seq);
});
markdown.transformers.transformer_vector = cljs.core.PersistentVector.fromArray([markdown.transformers.set_line_state,markdown.transformers.empty_line,markdown.common.inhibit,markdown.common.escape_inhibit_separator,markdown.transformers.code,markdown.transformers.codeblock,markdown.common.escaped_chars,markdown.common.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.links.image,markdown.links.image_reference_link,markdown.links.link,markdown.links.implicit_reference_link,markdown.links.reference_link,markdown.links.footnote_link,markdown.transformers.hr,markdown.transformers.blockquote_1,markdown.lists.li,markdown.transformers.heading,markdown.transformers.blockquote_2,markdown.common.italics,markdown.common.bold_italic,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough,markdown.transformers.superscript,markdown.tables.table,markdown.transformers.paragraph,markdown.transformers.br,markdown.common.thaw_strings,markdown.common.dashes,markdown.transformers.clear_line_state], true);
