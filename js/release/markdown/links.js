// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__19581 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(1),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<a href='"),link__$1,cljs.core.seq("'"),(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str," title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title)),">")):cljs.core.seq(">")),text,cljs.core.seq("</a>"),state], 0));
});
markdown.links.img = (function markdown$links$img(var_args){
var args__8113__auto__ = [];
var len__8106__auto___19592 = arguments.length;
var i__8107__auto___19593 = (0);
while(true){
if((i__8107__auto___19593 < len__8106__auto___19592)){
args__8113__auto__.push((arguments[i__8107__auto___19593]));

var G__19594 = (i__8107__auto___19593 + (1));
i__8107__auto___19593 = G__19594;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((3) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8114__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__19588){
var vec__19589 = p__19588;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19589,(0),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />")),state], 0));
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

markdown.links.img.cljs$lang$applyTo = (function (seq19584){
var G__19585 = cljs.core.first(seq19584);
var seq19584__$1 = cljs.core.next(seq19584);
var G__19586 = cljs.core.first(seq19584__$1);
var seq19584__$2 = cljs.core.next(seq19584__$1);
var G__19587 = cljs.core.first(seq19584__$2);
var seq19584__$3 = cljs.core.next(seq19584__$2);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(G__19585,G__19586,G__19587,seq19584__$3);
});

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__19607 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19607,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19607,(1),null);
var vec__19610 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19610,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19610,(1),null);
var vec__19613 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(1),null);
var vec__19616 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,state,cljs.core.array_seq([cljs.core.not_empty(title)], 0));
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19616,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19616,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",new_text,cljs.core.array_seq([cljs.core.rest(zy)], 0)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19620_SHARP_,p2__19619_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__19619_SHARP_,p1__19620_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__19674){
var map__19701 = p__19674;
var map__19701__$1 = ((((!((map__19701 == null)))?((((map__19701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19701):map__19701);
var state = map__19701__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19701__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19701__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__6993__auto__ = code;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),loop_state], null);
} else {
var vec__19703 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(1),null);
var vec__19706 = markdown.links.handle_img_link(xs,loop_state);
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(0),null);
var loop_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(1),null);
var vec__19709 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(1),null);
var vec__19712 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19712,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19712,(1),null);
var vec__19715 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19715,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19715,(1),null);
if(((cljs.core.count(link__$1) < (2))) || ((cljs.core.count(tail) < (1))) || ((cljs.core.count(dud) > (1)))){
var G__19727 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([markdown.links.process_link_title(title,state),dud,link__$1], 0));
var G__19728 = tail;
var G__19729 = loop_state__$1;
out = G__19727;
tokens = G__19728;
loop_state = G__19729;
continue;
} else {
if((cljs.core.not(img_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!"))){
var vec__19718 = markdown.links.href(cljs.core.rest(markdown.links.process_link_title(title,state)),cljs.core.rest(link__$1),loop_state__$1);
var link_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(1),null);
var G__19730 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([link_text], 0));
var G__19731 = cljs.core.rest(tail);
var G__19732 = new_loop_state;
out = G__19730;
tokens = G__19731;
loop_state = G__19732;
continue;
} else {
if(cljs.core.truth_((function (){var and__6981__auto__ = img_QMARK_;
if(cljs.core.truth_(and__6981__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!");
} else {
return and__6981__auto__;
}
})())){
var alt = cljs.core.rest(title);
var vec__19721 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19721,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19721,(1),null);
var title__$2 = markdown.links.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),loop_state__$1);
var vec__19724 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,loop_state__$1,cljs.core.array_seq([title__$2], 0));
var img_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19724,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19724,(1),null);
var G__19733 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.butlast(head),cljs.core.array_seq([img_text], 0));
var G__19734 = cljs.core.rest(tail);
var G__19735 = new_loop_state;
out = G__19733;
tokens = G__19734;
loop_state = G__19735;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,tokens)),loop_state__$1], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link(false);
markdown.links.image = markdown.links.make_link(true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 \-_\.]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__4657__auto__ = markdown.links.reference(trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__19742 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19742,(1),null);
var vec__19745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19745,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19745,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a href='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(alt)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" title='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__19752,link){
var vec__19753 = p__19752;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19753,(0),null);
var encoded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19753,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encoded,markdown.common.gen_token(i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19760){
var vec__19761 = p__19760;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19761,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link(references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq(/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.]+\]/,text);
var encoded_links = markdown.links.encode_links(links,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (links,encoded_links){
return (function (s,p__19768){
var vec__19769 = p__19768;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19769,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19769,(1),null);
return clojure.string.replace(s,link,id);
});})(links,encoded_links))
,text,encoded_links),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$frozen_DASH_strings,cljs.core.merge,markdown.links.parse_links(references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__19772){
var map__19775 = p__19772;
var map__19775__$1 = ((((!((map__19775 == null)))?((((map__19775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19775):map__19775);
var state = map__19775__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19775__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19775__$1,cljs.core.cst$kw$codeblock);
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19775__$1,cljs.core.cst$kw$references);
if(cljs.core.truth_((function (){var or__6993__auto__ = (references == null);
if(or__6993__auto__){
return or__6993__auto__;
} else {
var or__6993__auto____$1 = code;
if(cljs.core.truth_(or__6993__auto____$1)){
return or__6993__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links(references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace(text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find(/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim(line);
var temp__4657__auto__ = markdown.links.footnote(trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unprocessed,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1)))], null),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = cljs.core.cst$kw$next_DASH_fn_DASH_id.cljs$core$IFn$_invoke$arity$1(footnotes);
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#fn-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a href='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' id='fnref"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'><sup>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</sup></a>")].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__19777){
while(true){
var map__19780 = p__19777;
var map__19780__$1 = ((((!((map__19780 == null)))?((((map__19780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19780):map__19780);
var state = map__19780__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19780__$1,cljs.core.cst$kw$footnotes);
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find(matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first(text,matcher,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$processed,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$unprocessed,match], null)));
var G__19782 = next_text;
var G__19783 = next_state;
text = G__19782;
p__19777 = G__19783;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__19784){
var map__19790 = p__19784;
var map__19790__$1 = ((((!((map__19790 == null)))?((((map__19790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19790):map__19790);
var state = map__19790__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19790__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19790__$1,cljs.core.cst$kw$codeblock);
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19790__$1,cljs.core.cst$kw$footnotes);
if(cljs.core.truth_((function (){var or__6993__auto__ = (cljs.core.cst$kw$unprocessed.cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__6993__auto__){
return or__6993__auto__;
} else {
var or__6993__auto____$1 = code;
if(cljs.core.truth_(or__6993__auto____$1)){
return or__6993__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__19792 = markdown.links.replace_all_footnote_links(text,state);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(title)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" title="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("")].join(''):"\""))].join('');
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<img src=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" alt=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" />")].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__19795){
var map__19801 = p__19795;
var map__19801__$1 = ((((!((map__19801 == null)))?((((map__19801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19801):map__19801);
var state = map__19801__$1;
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19801__$1,cljs.core.cst$kw$references);
if((cljs.core.not(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_(references))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.re_seq(matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq(ms)){
var vec__19803 = cljs.core.first(ms);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19803,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19803,(1),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19803,(2),null);
var refval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,ref);
var im = markdown.links.make_image_reference(cljs.core.first(refval),alt,cljs.core.second(refval));
var G__19806 = cljs.core.rest(ms);
var G__19807 = clojure.string.replace(new_text,m,im);
ms = G__19806;
new_text = G__19807;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});
