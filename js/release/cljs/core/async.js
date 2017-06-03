// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args15673 = [];
var len__8009__auto___15679 = arguments.length;
var i__8010__auto___15680 = (0);
while(true){
if((i__8010__auto___15680 < len__8009__auto___15679)){
args15673.push((arguments[i__8010__auto___15680]));

var G__15681 = (i__8010__auto___15680 + (1));
i__8010__auto___15680 = G__15681;
continue;
} else {
}
break;
}

var G__15675 = args15673.length;
switch (G__15675) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15673.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15676 = (function (f,blockable,meta15677){
this.f = f;
this.blockable = blockable;
this.meta15677 = meta15677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15678,meta15677__$1){
var self__ = this;
var _15678__$1 = this;
return (new cljs.core.async.t_cljs$core$async15676(self__.f,self__.blockable,meta15677__$1));
});

cljs.core.async.t_cljs$core$async15676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15678){
var self__ = this;
var _15678__$1 = this;
return self__.meta15677;
});

cljs.core.async.t_cljs$core$async15676.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15677], null);
});

cljs.core.async.t_cljs$core$async15676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15676";

cljs.core.async.t_cljs$core$async15676.cljs$lang$ctorPrWriter = (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async15676");
});

cljs.core.async.__GT_t_cljs$core$async15676 = (function cljs$core$async$__GT_t_cljs$core$async15676(f__$1,blockable__$1,meta15677){
return (new cljs.core.async.t_cljs$core$async15676(f__$1,blockable__$1,meta15677));
});

}

return (new cljs.core.async.t_cljs$core$async15676(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args15685 = [];
var len__8009__auto___15688 = arguments.length;
var i__8010__auto___15689 = (0);
while(true){
if((i__8010__auto___15689 < len__8009__auto___15688)){
args15685.push((arguments[i__8010__auto___15689]));

var G__15690 = (i__8010__auto___15689 + (1));
i__8010__auto___15689 = G__15690;
continue;
} else {
}
break;
}

var G__15687 = args15685.length;
switch (G__15687) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15685.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args15692 = [];
var len__8009__auto___15695 = arguments.length;
var i__8010__auto___15696 = (0);
while(true){
if((i__8010__auto___15696 < len__8009__auto___15695)){
args15692.push((arguments[i__8010__auto___15696]));

var G__15697 = (i__8010__auto___15696 + (1));
i__8010__auto___15696 = G__15697;
continue;
} else {
}
break;
}

var G__15694 = args15692.length;
switch (G__15694) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15692.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args15699 = [];
var len__8009__auto___15702 = arguments.length;
var i__8010__auto___15703 = (0);
while(true){
if((i__8010__auto___15703 < len__8009__auto___15702)){
args15699.push((arguments[i__8010__auto___15703]));

var G__15704 = (i__8010__auto___15703 + (1));
i__8010__auto___15703 = G__15704;
continue;
} else {
}
break;
}

var G__15701 = args15699.length;
switch (G__15701) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15699.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15706 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15706) : fn1.call(null,val_15706));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15706,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15706) : fn1.call(null,val_15706));
});})(val_15706,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args15707 = [];
var len__8009__auto___15710 = arguments.length;
var i__8010__auto___15711 = (0);
while(true){
if((i__8010__auto___15711 < len__8009__auto___15710)){
args15707.push((arguments[i__8010__auto___15711]));

var G__15712 = (i__8010__auto___15711 + (1));
i__8010__auto___15711 = G__15712;
continue;
} else {
}
break;
}

var G__15709 = args15707.length;
switch (G__15709) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15707.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7819__auto___15714 = n;
var x_15715 = (0);
while(true){
if((x_15715 < n__7819__auto___15714)){
(a[x_15715] = (0));

var G__15716 = (x_15715 + (1));
x_15715 = G__15716;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15717 = (i + (1));
i = G__15717;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15721 = (function (flag,meta15722){
this.flag = flag;
this.meta15722 = meta15722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15723,meta15722__$1){
var self__ = this;
var _15723__$1 = this;
return (new cljs.core.async.t_cljs$core$async15721(self__.flag,meta15722__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15723){
var self__ = this;
var _15723__$1 = this;
return self__.meta15722;
});})(flag))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15721.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15722], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15721";

cljs.core.async.t_cljs$core$async15721.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async15721");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15721 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15721(flag__$1,meta15722){
return (new cljs.core.async.t_cljs$core$async15721(flag__$1,meta15722));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15721(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15727 = (function (flag,cb,meta15728){
this.flag = flag;
this.cb = cb;
this.meta15728 = meta15728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15729,meta15728__$1){
var self__ = this;
var _15729__$1 = this;
return (new cljs.core.async.t_cljs$core$async15727(self__.flag,self__.cb,meta15728__$1));
});

cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15729){
var self__ = this;
var _15729__$1 = this;
return self__.meta15728;
});

cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15728], null);
});

cljs.core.async.t_cljs$core$async15727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15727";

cljs.core.async.t_cljs$core$async15727.cljs$lang$ctorPrWriter = (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async15727");
});

cljs.core.async.__GT_t_cljs$core$async15727 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15727(flag__$1,cb__$1,meta15728){
return (new cljs.core.async.t_cljs$core$async15727(flag__$1,cb__$1,meta15728));
});

}

return (new cljs.core.async.t_cljs$core$async15727(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15730_SHARP_){
var G__15734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15730_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15734) : fret.call(null,G__15734));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15731_SHARP_){
var G__15735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15731_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15735) : fret.call(null,G__15735));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6896__auto__ = wport;
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15736 = (i + (1));
i = G__15736;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6896__auto__ = ret;
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6884__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6884__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6884__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8016__auto__ = [];
var len__8009__auto___15742 = arguments.length;
var i__8010__auto___15743 = (0);
while(true){
if((i__8010__auto___15743 < len__8009__auto___15742)){
args__8016__auto__.push((arguments[i__8010__auto___15743]));

var G__15744 = (i__8010__auto___15743 + (1));
i__8010__auto___15743 = G__15744;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((1) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8017__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15739){
var map__15740 = p__15739;
var map__15740__$1 = ((((!((map__15740 == null)))?((((map__15740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15740):map__15740);
var opts = map__15740__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15737){
var G__15738 = cljs.core.first(seq15737);
var seq15737__$1 = cljs.core.next(seq15737);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15738,seq15737__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args15745 = [];
var len__8009__auto___15795 = arguments.length;
var i__8010__auto___15796 = (0);
while(true){
if((i__8010__auto___15796 < len__8009__auto___15795)){
args15745.push((arguments[i__8010__auto___15796]));

var G__15797 = (i__8010__auto___15796 + (1));
i__8010__auto___15796 = G__15797;
continue;
} else {
}
break;
}

var G__15747 = args15745.length;
switch (G__15747) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15745.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15628__auto___15799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___15799){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___15799){
return (function (state_15771){
var state_val_15772 = (state_15771[(1)]);
if((state_val_15772 === (7))){
var inst_15767 = (state_15771[(2)]);
var state_15771__$1 = state_15771;
var statearr_15773_15800 = state_15771__$1;
(statearr_15773_15800[(2)] = inst_15767);

(statearr_15773_15800[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (1))){
var state_15771__$1 = state_15771;
var statearr_15774_15801 = state_15771__$1;
(statearr_15774_15801[(2)] = null);

(statearr_15774_15801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (4))){
var inst_15750 = (state_15771[(7)]);
var inst_15750__$1 = (state_15771[(2)]);
var inst_15751 = (inst_15750__$1 == null);
var state_15771__$1 = (function (){var statearr_15775 = state_15771;
(statearr_15775[(7)] = inst_15750__$1);

return statearr_15775;
})();
if(cljs.core.truth_(inst_15751)){
var statearr_15776_15802 = state_15771__$1;
(statearr_15776_15802[(1)] = (5));

} else {
var statearr_15777_15803 = state_15771__$1;
(statearr_15777_15803[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (13))){
var state_15771__$1 = state_15771;
var statearr_15778_15804 = state_15771__$1;
(statearr_15778_15804[(2)] = null);

(statearr_15778_15804[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (6))){
var inst_15750 = (state_15771[(7)]);
var state_15771__$1 = state_15771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15771__$1,(11),to,inst_15750);
} else {
if((state_val_15772 === (3))){
var inst_15769 = (state_15771[(2)]);
var state_15771__$1 = state_15771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15771__$1,inst_15769);
} else {
if((state_val_15772 === (12))){
var state_15771__$1 = state_15771;
var statearr_15779_15805 = state_15771__$1;
(statearr_15779_15805[(2)] = null);

(statearr_15779_15805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (2))){
var state_15771__$1 = state_15771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15771__$1,(4),from);
} else {
if((state_val_15772 === (11))){
var inst_15760 = (state_15771[(2)]);
var state_15771__$1 = state_15771;
if(cljs.core.truth_(inst_15760)){
var statearr_15780_15806 = state_15771__$1;
(statearr_15780_15806[(1)] = (12));

} else {
var statearr_15781_15807 = state_15771__$1;
(statearr_15781_15807[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (9))){
var state_15771__$1 = state_15771;
var statearr_15782_15808 = state_15771__$1;
(statearr_15782_15808[(2)] = null);

(statearr_15782_15808[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (5))){
var state_15771__$1 = state_15771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15783_15809 = state_15771__$1;
(statearr_15783_15809[(1)] = (8));

} else {
var statearr_15784_15810 = state_15771__$1;
(statearr_15784_15810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (14))){
var inst_15765 = (state_15771[(2)]);
var state_15771__$1 = state_15771;
var statearr_15785_15811 = state_15771__$1;
(statearr_15785_15811[(2)] = inst_15765);

(statearr_15785_15811[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (10))){
var inst_15757 = (state_15771[(2)]);
var state_15771__$1 = state_15771;
var statearr_15786_15812 = state_15771__$1;
(statearr_15786_15812[(2)] = inst_15757);

(statearr_15786_15812[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15772 === (8))){
var inst_15754 = cljs.core.async.close_BANG_(to);
var state_15771__$1 = state_15771;
var statearr_15787_15813 = state_15771__$1;
(statearr_15787_15813[(2)] = inst_15754);

(statearr_15787_15813[(1)] = (10));


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
});})(c__15628__auto___15799))
;
return ((function (switch__15504__auto__,c__15628__auto___15799){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_15791 = [null,null,null,null,null,null,null,null];
(statearr_15791[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_15791[(1)] = (1));

return statearr_15791;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_15771){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_15771);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e15792){if((e15792 instanceof Object)){
var ex__15508__auto__ = e15792;
var statearr_15793_15814 = state_15771;
(statearr_15793_15814[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15771);

return cljs.core.cst$kw$recur;
} else {
throw e15792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__15815 = state_15771;
state_15771 = G__15815;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_15771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_15771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___15799))
})();
var state__15630__auto__ = (function (){var statearr_15794 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_15794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___15799);

return statearr_15794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___15799))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16003){
var vec__16004 = p__16003;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004,(1),null);
var job = vec__16004;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15628__auto___16190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___16190,res,vec__16004,v,p,job,jobs,results){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___16190,res,vec__16004,v,p,job,jobs,results){
return (function (state_16011){
var state_val_16012 = (state_16011[(1)]);
if((state_val_16012 === (1))){
var state_16011__$1 = state_16011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16011__$1,(2),res,v);
} else {
if((state_val_16012 === (2))){
var inst_16008 = (state_16011[(2)]);
var inst_16009 = cljs.core.async.close_BANG_(res);
var state_16011__$1 = (function (){var statearr_16013 = state_16011;
(statearr_16013[(7)] = inst_16008);

return statearr_16013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16011__$1,inst_16009);
} else {
return null;
}
}
});})(c__15628__auto___16190,res,vec__16004,v,p,job,jobs,results))
;
return ((function (switch__15504__auto__,c__15628__auto___16190,res,vec__16004,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0 = (function (){
var statearr_16017 = [null,null,null,null,null,null,null,null];
(statearr_16017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__);

(statearr_16017[(1)] = (1));

return statearr_16017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1 = (function (state_16011){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16011);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16018){if((e16018 instanceof Object)){
var ex__15508__auto__ = e16018;
var statearr_16019_16191 = state_16011;
(statearr_16019_16191[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16011);

return cljs.core.cst$kw$recur;
} else {
throw e16018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16192 = state_16011;
state_16011 = G__16192;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = function(state_16011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1.call(this,state_16011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___16190,res,vec__16004,v,p,job,jobs,results))
})();
var state__15630__auto__ = (function (){var statearr_16020 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___16190);

return statearr_16020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___16190,res,vec__16004,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16021){
var vec__16022 = p__16021;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16022,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16022,(1),null);
var job = vec__16022;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7819__auto___16193 = n;
var __16194 = (0);
while(true){
if((__16194 < n__7819__auto___16193)){
var G__16025_16195 = type;
var G__16025_16196__$1 = (((G__16025_16195 instanceof cljs.core.Keyword))?G__16025_16195.fqn:null);
switch (G__16025_16196__$1) {
case "compute":
var c__15628__auto___16198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16194,c__15628__auto___16198,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (__16194,c__15628__auto___16198,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async){
return (function (state_16038){
var state_val_16039 = (state_16038[(1)]);
if((state_val_16039 === (1))){
var state_16038__$1 = state_16038;
var statearr_16040_16199 = state_16038__$1;
(statearr_16040_16199[(2)] = null);

(statearr_16040_16199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (2))){
var state_16038__$1 = state_16038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16038__$1,(4),jobs);
} else {
if((state_val_16039 === (3))){
var inst_16036 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16038__$1,inst_16036);
} else {
if((state_val_16039 === (4))){
var inst_16028 = (state_16038[(2)]);
var inst_16029 = process(inst_16028);
var state_16038__$1 = state_16038;
if(cljs.core.truth_(inst_16029)){
var statearr_16041_16200 = state_16038__$1;
(statearr_16041_16200[(1)] = (5));

} else {
var statearr_16042_16201 = state_16038__$1;
(statearr_16042_16201[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (5))){
var state_16038__$1 = state_16038;
var statearr_16043_16202 = state_16038__$1;
(statearr_16043_16202[(2)] = null);

(statearr_16043_16202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (6))){
var state_16038__$1 = state_16038;
var statearr_16044_16203 = state_16038__$1;
(statearr_16044_16203[(2)] = null);

(statearr_16044_16203[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (7))){
var inst_16034 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
var statearr_16045_16204 = state_16038__$1;
(statearr_16045_16204[(2)] = inst_16034);

(statearr_16045_16204[(1)] = (3));


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
});})(__16194,c__15628__auto___16198,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async))
;
return ((function (__16194,switch__15504__auto__,c__15628__auto___16198,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0 = (function (){
var statearr_16049 = [null,null,null,null,null,null,null];
(statearr_16049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__);

(statearr_16049[(1)] = (1));

return statearr_16049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1 = (function (state_16038){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16038);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16050){if((e16050 instanceof Object)){
var ex__15508__auto__ = e16050;
var statearr_16051_16205 = state_16038;
(statearr_16051_16205[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16038);

return cljs.core.cst$kw$recur;
} else {
throw e16050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16206 = state_16038;
state_16038 = G__16206;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = function(state_16038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1.call(this,state_16038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__;
})()
;})(__16194,switch__15504__auto__,c__15628__auto___16198,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async))
})();
var state__15630__auto__ = (function (){var statearr_16052 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___16198);

return statearr_16052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(__16194,c__15628__auto___16198,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async))
);


break;
case "async":
var c__15628__auto___16207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16194,c__15628__auto___16207,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (__16194,c__15628__auto___16207,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async){
return (function (state_16065){
var state_val_16066 = (state_16065[(1)]);
if((state_val_16066 === (1))){
var state_16065__$1 = state_16065;
var statearr_16067_16208 = state_16065__$1;
(statearr_16067_16208[(2)] = null);

(statearr_16067_16208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16066 === (2))){
var state_16065__$1 = state_16065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16065__$1,(4),jobs);
} else {
if((state_val_16066 === (3))){
var inst_16063 = (state_16065[(2)]);
var state_16065__$1 = state_16065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16065__$1,inst_16063);
} else {
if((state_val_16066 === (4))){
var inst_16055 = (state_16065[(2)]);
var inst_16056 = async(inst_16055);
var state_16065__$1 = state_16065;
if(cljs.core.truth_(inst_16056)){
var statearr_16068_16209 = state_16065__$1;
(statearr_16068_16209[(1)] = (5));

} else {
var statearr_16069_16210 = state_16065__$1;
(statearr_16069_16210[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16066 === (5))){
var state_16065__$1 = state_16065;
var statearr_16070_16211 = state_16065__$1;
(statearr_16070_16211[(2)] = null);

(statearr_16070_16211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16066 === (6))){
var state_16065__$1 = state_16065;
var statearr_16071_16212 = state_16065__$1;
(statearr_16071_16212[(2)] = null);

(statearr_16071_16212[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16066 === (7))){
var inst_16061 = (state_16065[(2)]);
var state_16065__$1 = state_16065;
var statearr_16072_16213 = state_16065__$1;
(statearr_16072_16213[(2)] = inst_16061);

(statearr_16072_16213[(1)] = (3));


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
});})(__16194,c__15628__auto___16207,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async))
;
return ((function (__16194,switch__15504__auto__,c__15628__auto___16207,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0 = (function (){
var statearr_16076 = [null,null,null,null,null,null,null];
(statearr_16076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__);

(statearr_16076[(1)] = (1));

return statearr_16076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1 = (function (state_16065){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16065);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16077){if((e16077 instanceof Object)){
var ex__15508__auto__ = e16077;
var statearr_16078_16214 = state_16065;
(statearr_16078_16214[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16065);

return cljs.core.cst$kw$recur;
} else {
throw e16077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16215 = state_16065;
state_16065 = G__16215;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = function(state_16065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1.call(this,state_16065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__;
})()
;})(__16194,switch__15504__auto__,c__15628__auto___16207,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async))
})();
var state__15630__auto__ = (function (){var statearr_16079 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___16207);

return statearr_16079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(__16194,c__15628__auto___16207,G__16025_16195,G__16025_16196__$1,n__7819__auto___16193,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16025_16196__$1)].join('')));

}

var G__16216 = (__16194 + (1));
__16194 = G__16216;
continue;
} else {
}
break;
}

var c__15628__auto___16217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___16217,jobs,results,process,async){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___16217,jobs,results,process,async){
return (function (state_16101){
var state_val_16102 = (state_16101[(1)]);
if((state_val_16102 === (1))){
var state_16101__$1 = state_16101;
var statearr_16103_16218 = state_16101__$1;
(statearr_16103_16218[(2)] = null);

(statearr_16103_16218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16102 === (2))){
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16101__$1,(4),from);
} else {
if((state_val_16102 === (3))){
var inst_16099 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16101__$1,inst_16099);
} else {
if((state_val_16102 === (4))){
var inst_16082 = (state_16101[(7)]);
var inst_16082__$1 = (state_16101[(2)]);
var inst_16083 = (inst_16082__$1 == null);
var state_16101__$1 = (function (){var statearr_16104 = state_16101;
(statearr_16104[(7)] = inst_16082__$1);

return statearr_16104;
})();
if(cljs.core.truth_(inst_16083)){
var statearr_16105_16219 = state_16101__$1;
(statearr_16105_16219[(1)] = (5));

} else {
var statearr_16106_16220 = state_16101__$1;
(statearr_16106_16220[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16102 === (5))){
var inst_16085 = cljs.core.async.close_BANG_(jobs);
var state_16101__$1 = state_16101;
var statearr_16107_16221 = state_16101__$1;
(statearr_16107_16221[(2)] = inst_16085);

(statearr_16107_16221[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16102 === (6))){
var inst_16087 = (state_16101[(8)]);
var inst_16082 = (state_16101[(7)]);
var inst_16087__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16089 = [inst_16082,inst_16087__$1];
var inst_16090 = (new cljs.core.PersistentVector(null,2,(5),inst_16088,inst_16089,null));
var state_16101__$1 = (function (){var statearr_16108 = state_16101;
(statearr_16108[(8)] = inst_16087__$1);

return statearr_16108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16101__$1,(8),jobs,inst_16090);
} else {
if((state_val_16102 === (7))){
var inst_16097 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
var statearr_16109_16222 = state_16101__$1;
(statearr_16109_16222[(2)] = inst_16097);

(statearr_16109_16222[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16102 === (8))){
var inst_16087 = (state_16101[(8)]);
var inst_16092 = (state_16101[(2)]);
var state_16101__$1 = (function (){var statearr_16110 = state_16101;
(statearr_16110[(9)] = inst_16092);

return statearr_16110;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16101__$1,(9),results,inst_16087);
} else {
if((state_val_16102 === (9))){
var inst_16094 = (state_16101[(2)]);
var state_16101__$1 = (function (){var statearr_16111 = state_16101;
(statearr_16111[(10)] = inst_16094);

return statearr_16111;
})();
var statearr_16112_16223 = state_16101__$1;
(statearr_16112_16223[(2)] = null);

(statearr_16112_16223[(1)] = (2));


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
});})(c__15628__auto___16217,jobs,results,process,async))
;
return ((function (switch__15504__auto__,c__15628__auto___16217,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0 = (function (){
var statearr_16116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__);

(statearr_16116[(1)] = (1));

return statearr_16116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1 = (function (state_16101){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16101);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16117){if((e16117 instanceof Object)){
var ex__15508__auto__ = e16117;
var statearr_16118_16224 = state_16101;
(statearr_16118_16224[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16101);

return cljs.core.cst$kw$recur;
} else {
throw e16117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16225 = state_16101;
state_16101 = G__16225;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = function(state_16101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1.call(this,state_16101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___16217,jobs,results,process,async))
})();
var state__15630__auto__ = (function (){var statearr_16119 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___16217);

return statearr_16119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___16217,jobs,results,process,async))
);


var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__,jobs,results,process,async){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__,jobs,results,process,async){
return (function (state_16157){
var state_val_16158 = (state_16157[(1)]);
if((state_val_16158 === (7))){
var inst_16153 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16159_16226 = state_16157__$1;
(statearr_16159_16226[(2)] = inst_16153);

(statearr_16159_16226[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (20))){
var state_16157__$1 = state_16157;
var statearr_16160_16227 = state_16157__$1;
(statearr_16160_16227[(2)] = null);

(statearr_16160_16227[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (1))){
var state_16157__$1 = state_16157;
var statearr_16161_16228 = state_16157__$1;
(statearr_16161_16228[(2)] = null);

(statearr_16161_16228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (4))){
var inst_16122 = (state_16157[(7)]);
var inst_16122__$1 = (state_16157[(2)]);
var inst_16123 = (inst_16122__$1 == null);
var state_16157__$1 = (function (){var statearr_16162 = state_16157;
(statearr_16162[(7)] = inst_16122__$1);

return statearr_16162;
})();
if(cljs.core.truth_(inst_16123)){
var statearr_16163_16229 = state_16157__$1;
(statearr_16163_16229[(1)] = (5));

} else {
var statearr_16164_16230 = state_16157__$1;
(statearr_16164_16230[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (15))){
var inst_16135 = (state_16157[(8)]);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16157__$1,(18),to,inst_16135);
} else {
if((state_val_16158 === (21))){
var inst_16148 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16165_16231 = state_16157__$1;
(statearr_16165_16231[(2)] = inst_16148);

(statearr_16165_16231[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (13))){
var inst_16150 = (state_16157[(2)]);
var state_16157__$1 = (function (){var statearr_16166 = state_16157;
(statearr_16166[(9)] = inst_16150);

return statearr_16166;
})();
var statearr_16167_16232 = state_16157__$1;
(statearr_16167_16232[(2)] = null);

(statearr_16167_16232[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (6))){
var inst_16122 = (state_16157[(7)]);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16157__$1,(11),inst_16122);
} else {
if((state_val_16158 === (17))){
var inst_16143 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
if(cljs.core.truth_(inst_16143)){
var statearr_16168_16233 = state_16157__$1;
(statearr_16168_16233[(1)] = (19));

} else {
var statearr_16169_16234 = state_16157__$1;
(statearr_16169_16234[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (3))){
var inst_16155 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16157__$1,inst_16155);
} else {
if((state_val_16158 === (12))){
var inst_16132 = (state_16157[(10)]);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16157__$1,(14),inst_16132);
} else {
if((state_val_16158 === (2))){
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16157__$1,(4),results);
} else {
if((state_val_16158 === (19))){
var state_16157__$1 = state_16157;
var statearr_16170_16235 = state_16157__$1;
(statearr_16170_16235[(2)] = null);

(statearr_16170_16235[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (11))){
var inst_16132 = (state_16157[(2)]);
var state_16157__$1 = (function (){var statearr_16171 = state_16157;
(statearr_16171[(10)] = inst_16132);

return statearr_16171;
})();
var statearr_16172_16236 = state_16157__$1;
(statearr_16172_16236[(2)] = null);

(statearr_16172_16236[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (9))){
var state_16157__$1 = state_16157;
var statearr_16173_16237 = state_16157__$1;
(statearr_16173_16237[(2)] = null);

(statearr_16173_16237[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (5))){
var state_16157__$1 = state_16157;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16174_16238 = state_16157__$1;
(statearr_16174_16238[(1)] = (8));

} else {
var statearr_16175_16239 = state_16157__$1;
(statearr_16175_16239[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (14))){
var inst_16137 = (state_16157[(11)]);
var inst_16135 = (state_16157[(8)]);
var inst_16135__$1 = (state_16157[(2)]);
var inst_16136 = (inst_16135__$1 == null);
var inst_16137__$1 = cljs.core.not(inst_16136);
var state_16157__$1 = (function (){var statearr_16176 = state_16157;
(statearr_16176[(11)] = inst_16137__$1);

(statearr_16176[(8)] = inst_16135__$1);

return statearr_16176;
})();
if(inst_16137__$1){
var statearr_16177_16240 = state_16157__$1;
(statearr_16177_16240[(1)] = (15));

} else {
var statearr_16178_16241 = state_16157__$1;
(statearr_16178_16241[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (16))){
var inst_16137 = (state_16157[(11)]);
var state_16157__$1 = state_16157;
var statearr_16179_16242 = state_16157__$1;
(statearr_16179_16242[(2)] = inst_16137);

(statearr_16179_16242[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (10))){
var inst_16129 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16180_16243 = state_16157__$1;
(statearr_16180_16243[(2)] = inst_16129);

(statearr_16180_16243[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (18))){
var inst_16140 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16181_16244 = state_16157__$1;
(statearr_16181_16244[(2)] = inst_16140);

(statearr_16181_16244[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16158 === (8))){
var inst_16126 = cljs.core.async.close_BANG_(to);
var state_16157__$1 = state_16157;
var statearr_16182_16245 = state_16157__$1;
(statearr_16182_16245[(2)] = inst_16126);

(statearr_16182_16245[(1)] = (10));


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
});})(c__15628__auto__,jobs,results,process,async))
;
return ((function (switch__15504__auto__,c__15628__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0 = (function (){
var statearr_16186 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__);

(statearr_16186[(1)] = (1));

return statearr_16186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1 = (function (state_16157){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16157);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16187){if((e16187 instanceof Object)){
var ex__15508__auto__ = e16187;
var statearr_16188_16246 = state_16157;
(statearr_16188_16246[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16157);

return cljs.core.cst$kw$recur;
} else {
throw e16187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16247 = state_16157;
state_16157 = G__16247;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__ = function(state_16157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1.call(this,state_16157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__,jobs,results,process,async))
})();
var state__15630__auto__ = (function (){var statearr_16189 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_16189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__,jobs,results,process,async))
);

return c__15628__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args16248 = [];
var len__8009__auto___16251 = arguments.length;
var i__8010__auto___16252 = (0);
while(true){
if((i__8010__auto___16252 < len__8009__auto___16251)){
args16248.push((arguments[i__8010__auto___16252]));

var G__16253 = (i__8010__auto___16252 + (1));
i__8010__auto___16252 = G__16253;
continue;
} else {
}
break;
}

var G__16250 = args16248.length;
switch (G__16250) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16248.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args16255 = [];
var len__8009__auto___16258 = arguments.length;
var i__8010__auto___16259 = (0);
while(true){
if((i__8010__auto___16259 < len__8009__auto___16258)){
args16255.push((arguments[i__8010__auto___16259]));

var G__16260 = (i__8010__auto___16259 + (1));
i__8010__auto___16259 = G__16260;
continue;
} else {
}
break;
}

var G__16257 = args16255.length;
switch (G__16257) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16255.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args16262 = [];
var len__8009__auto___16315 = arguments.length;
var i__8010__auto___16316 = (0);
while(true){
if((i__8010__auto___16316 < len__8009__auto___16315)){
args16262.push((arguments[i__8010__auto___16316]));

var G__16317 = (i__8010__auto___16316 + (1));
i__8010__auto___16316 = G__16317;
continue;
} else {
}
break;
}

var G__16264 = args16262.length;
switch (G__16264) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16262.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15628__auto___16319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___16319,tc,fc){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___16319,tc,fc){
return (function (state_16290){
var state_val_16291 = (state_16290[(1)]);
if((state_val_16291 === (7))){
var inst_16286 = (state_16290[(2)]);
var state_16290__$1 = state_16290;
var statearr_16292_16320 = state_16290__$1;
(statearr_16292_16320[(2)] = inst_16286);

(statearr_16292_16320[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (1))){
var state_16290__$1 = state_16290;
var statearr_16293_16321 = state_16290__$1;
(statearr_16293_16321[(2)] = null);

(statearr_16293_16321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (4))){
var inst_16267 = (state_16290[(7)]);
var inst_16267__$1 = (state_16290[(2)]);
var inst_16268 = (inst_16267__$1 == null);
var state_16290__$1 = (function (){var statearr_16294 = state_16290;
(statearr_16294[(7)] = inst_16267__$1);

return statearr_16294;
})();
if(cljs.core.truth_(inst_16268)){
var statearr_16295_16322 = state_16290__$1;
(statearr_16295_16322[(1)] = (5));

} else {
var statearr_16296_16323 = state_16290__$1;
(statearr_16296_16323[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (13))){
var state_16290__$1 = state_16290;
var statearr_16297_16324 = state_16290__$1;
(statearr_16297_16324[(2)] = null);

(statearr_16297_16324[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (6))){
var inst_16267 = (state_16290[(7)]);
var inst_16273 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16267) : p.call(null,inst_16267));
var state_16290__$1 = state_16290;
if(cljs.core.truth_(inst_16273)){
var statearr_16298_16325 = state_16290__$1;
(statearr_16298_16325[(1)] = (9));

} else {
var statearr_16299_16326 = state_16290__$1;
(statearr_16299_16326[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (3))){
var inst_16288 = (state_16290[(2)]);
var state_16290__$1 = state_16290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16290__$1,inst_16288);
} else {
if((state_val_16291 === (12))){
var state_16290__$1 = state_16290;
var statearr_16300_16327 = state_16290__$1;
(statearr_16300_16327[(2)] = null);

(statearr_16300_16327[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (2))){
var state_16290__$1 = state_16290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16290__$1,(4),ch);
} else {
if((state_val_16291 === (11))){
var inst_16267 = (state_16290[(7)]);
var inst_16277 = (state_16290[(2)]);
var state_16290__$1 = state_16290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16290__$1,(8),inst_16277,inst_16267);
} else {
if((state_val_16291 === (9))){
var state_16290__$1 = state_16290;
var statearr_16301_16328 = state_16290__$1;
(statearr_16301_16328[(2)] = tc);

(statearr_16301_16328[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (5))){
var inst_16270 = cljs.core.async.close_BANG_(tc);
var inst_16271 = cljs.core.async.close_BANG_(fc);
var state_16290__$1 = (function (){var statearr_16302 = state_16290;
(statearr_16302[(8)] = inst_16270);

return statearr_16302;
})();
var statearr_16303_16329 = state_16290__$1;
(statearr_16303_16329[(2)] = inst_16271);

(statearr_16303_16329[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (14))){
var inst_16284 = (state_16290[(2)]);
var state_16290__$1 = state_16290;
var statearr_16304_16330 = state_16290__$1;
(statearr_16304_16330[(2)] = inst_16284);

(statearr_16304_16330[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (10))){
var state_16290__$1 = state_16290;
var statearr_16305_16331 = state_16290__$1;
(statearr_16305_16331[(2)] = fc);

(statearr_16305_16331[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16291 === (8))){
var inst_16279 = (state_16290[(2)]);
var state_16290__$1 = state_16290;
if(cljs.core.truth_(inst_16279)){
var statearr_16306_16332 = state_16290__$1;
(statearr_16306_16332[(1)] = (12));

} else {
var statearr_16307_16333 = state_16290__$1;
(statearr_16307_16333[(1)] = (13));

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
});})(c__15628__auto___16319,tc,fc))
;
return ((function (switch__15504__auto__,c__15628__auto___16319,tc,fc){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_16311 = [null,null,null,null,null,null,null,null,null];
(statearr_16311[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_16311[(1)] = (1));

return statearr_16311;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_16290){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16290);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16312){if((e16312 instanceof Object)){
var ex__15508__auto__ = e16312;
var statearr_16313_16334 = state_16290;
(statearr_16313_16334[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16290);

return cljs.core.cst$kw$recur;
} else {
throw e16312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16335 = state_16290;
state_16290 = G__16335;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_16290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_16290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___16319,tc,fc))
})();
var state__15630__auto__ = (function (){var statearr_16314 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___16319);

return statearr_16314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___16319,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__){
return (function (state_16399){
var state_val_16400 = (state_16399[(1)]);
if((state_val_16400 === (7))){
var inst_16395 = (state_16399[(2)]);
var state_16399__$1 = state_16399;
var statearr_16401_16422 = state_16399__$1;
(statearr_16401_16422[(2)] = inst_16395);

(statearr_16401_16422[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16400 === (1))){
var inst_16379 = init;
var state_16399__$1 = (function (){var statearr_16402 = state_16399;
(statearr_16402[(7)] = inst_16379);

return statearr_16402;
})();
var statearr_16403_16423 = state_16399__$1;
(statearr_16403_16423[(2)] = null);

(statearr_16403_16423[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16400 === (4))){
var inst_16382 = (state_16399[(8)]);
var inst_16382__$1 = (state_16399[(2)]);
var inst_16383 = (inst_16382__$1 == null);
var state_16399__$1 = (function (){var statearr_16404 = state_16399;
(statearr_16404[(8)] = inst_16382__$1);

return statearr_16404;
})();
if(cljs.core.truth_(inst_16383)){
var statearr_16405_16424 = state_16399__$1;
(statearr_16405_16424[(1)] = (5));

} else {
var statearr_16406_16425 = state_16399__$1;
(statearr_16406_16425[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16400 === (6))){
var inst_16382 = (state_16399[(8)]);
var inst_16386 = (state_16399[(9)]);
var inst_16379 = (state_16399[(7)]);
var inst_16386__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16379,inst_16382) : f.call(null,inst_16379,inst_16382));
var inst_16387 = cljs.core.reduced_QMARK_(inst_16386__$1);
var state_16399__$1 = (function (){var statearr_16407 = state_16399;
(statearr_16407[(9)] = inst_16386__$1);

return statearr_16407;
})();
if(inst_16387){
var statearr_16408_16426 = state_16399__$1;
(statearr_16408_16426[(1)] = (8));

} else {
var statearr_16409_16427 = state_16399__$1;
(statearr_16409_16427[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16400 === (3))){
var inst_16397 = (state_16399[(2)]);
var state_16399__$1 = state_16399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16399__$1,inst_16397);
} else {
if((state_val_16400 === (2))){
var state_16399__$1 = state_16399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16399__$1,(4),ch);
} else {
if((state_val_16400 === (9))){
var inst_16386 = (state_16399[(9)]);
var inst_16379 = inst_16386;
var state_16399__$1 = (function (){var statearr_16410 = state_16399;
(statearr_16410[(7)] = inst_16379);

return statearr_16410;
})();
var statearr_16411_16428 = state_16399__$1;
(statearr_16411_16428[(2)] = null);

(statearr_16411_16428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16400 === (5))){
var inst_16379 = (state_16399[(7)]);
var state_16399__$1 = state_16399;
var statearr_16412_16429 = state_16399__$1;
(statearr_16412_16429[(2)] = inst_16379);

(statearr_16412_16429[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16400 === (10))){
var inst_16393 = (state_16399[(2)]);
var state_16399__$1 = state_16399;
var statearr_16413_16430 = state_16399__$1;
(statearr_16413_16430[(2)] = inst_16393);

(statearr_16413_16430[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16400 === (8))){
var inst_16386 = (state_16399[(9)]);
var inst_16389 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16386) : cljs.core.deref.call(null,inst_16386));
var state_16399__$1 = state_16399;
var statearr_16414_16431 = state_16399__$1;
(statearr_16414_16431[(2)] = inst_16389);

(statearr_16414_16431[(1)] = (10));


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
});})(c__15628__auto__))
;
return ((function (switch__15504__auto__,c__15628__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15505__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15505__auto____0 = (function (){
var statearr_16418 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16418[(0)] = cljs$core$async$reduce_$_state_machine__15505__auto__);

(statearr_16418[(1)] = (1));

return statearr_16418;
});
var cljs$core$async$reduce_$_state_machine__15505__auto____1 = (function (state_16399){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16399);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16419){if((e16419 instanceof Object)){
var ex__15508__auto__ = e16419;
var statearr_16420_16432 = state_16399;
(statearr_16420_16432[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16399);

return cljs.core.cst$kw$recur;
} else {
throw e16419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16433 = state_16399;
state_16399 = G__16433;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15505__auto__ = function(state_16399){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15505__auto____1.call(this,state_16399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15505__auto____0;
cljs$core$async$reduce_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15505__auto____1;
return cljs$core$async$reduce_$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__))
})();
var state__15630__auto__ = (function (){var statearr_16421 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_16421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__))
);

return c__15628__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__,f__$1){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__,f__$1){
return (function (state_16453){
var state_val_16454 = (state_16453[(1)]);
if((state_val_16454 === (1))){
var inst_16448 = cljs.core.async.reduce(f__$1,init,ch);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16453__$1,(2),inst_16448);
} else {
if((state_val_16454 === (2))){
var inst_16450 = (state_16453[(2)]);
var inst_16451 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16450) : f__$1.call(null,inst_16450));
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16453__$1,inst_16451);
} else {
return null;
}
}
});})(c__15628__auto__,f__$1))
;
return ((function (switch__15504__auto__,c__15628__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15505__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15505__auto____0 = (function (){
var statearr_16458 = [null,null,null,null,null,null,null];
(statearr_16458[(0)] = cljs$core$async$transduce_$_state_machine__15505__auto__);

(statearr_16458[(1)] = (1));

return statearr_16458;
});
var cljs$core$async$transduce_$_state_machine__15505__auto____1 = (function (state_16453){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16453);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16459){if((e16459 instanceof Object)){
var ex__15508__auto__ = e16459;
var statearr_16460_16462 = state_16453;
(statearr_16460_16462[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16453);

return cljs.core.cst$kw$recur;
} else {
throw e16459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16463 = state_16453;
state_16453 = G__16463;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15505__auto__ = function(state_16453){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15505__auto____1.call(this,state_16453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15505__auto____0;
cljs$core$async$transduce_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15505__auto____1;
return cljs$core$async$transduce_$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__,f__$1))
})();
var state__15630__auto__ = (function (){var statearr_16461 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_16461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__,f__$1))
);

return c__15628__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args16464 = [];
var len__8009__auto___16516 = arguments.length;
var i__8010__auto___16517 = (0);
while(true){
if((i__8010__auto___16517 < len__8009__auto___16516)){
args16464.push((arguments[i__8010__auto___16517]));

var G__16518 = (i__8010__auto___16517 + (1));
i__8010__auto___16517 = G__16518;
continue;
} else {
}
break;
}

var G__16466 = args16464.length;
switch (G__16466) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16464.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__){
return (function (state_16491){
var state_val_16492 = (state_16491[(1)]);
if((state_val_16492 === (7))){
var inst_16473 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16493_16520 = state_16491__$1;
(statearr_16493_16520[(2)] = inst_16473);

(statearr_16493_16520[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (1))){
var inst_16467 = cljs.core.seq(coll);
var inst_16468 = inst_16467;
var state_16491__$1 = (function (){var statearr_16494 = state_16491;
(statearr_16494[(7)] = inst_16468);

return statearr_16494;
})();
var statearr_16495_16521 = state_16491__$1;
(statearr_16495_16521[(2)] = null);

(statearr_16495_16521[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (4))){
var inst_16468 = (state_16491[(7)]);
var inst_16471 = cljs.core.first(inst_16468);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16491__$1,(7),ch,inst_16471);
} else {
if((state_val_16492 === (13))){
var inst_16485 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16496_16522 = state_16491__$1;
(statearr_16496_16522[(2)] = inst_16485);

(statearr_16496_16522[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (6))){
var inst_16476 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
if(cljs.core.truth_(inst_16476)){
var statearr_16497_16523 = state_16491__$1;
(statearr_16497_16523[(1)] = (8));

} else {
var statearr_16498_16524 = state_16491__$1;
(statearr_16498_16524[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (3))){
var inst_16489 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16491__$1,inst_16489);
} else {
if((state_val_16492 === (12))){
var state_16491__$1 = state_16491;
var statearr_16499_16525 = state_16491__$1;
(statearr_16499_16525[(2)] = null);

(statearr_16499_16525[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (2))){
var inst_16468 = (state_16491[(7)]);
var state_16491__$1 = state_16491;
if(cljs.core.truth_(inst_16468)){
var statearr_16500_16526 = state_16491__$1;
(statearr_16500_16526[(1)] = (4));

} else {
var statearr_16501_16527 = state_16491__$1;
(statearr_16501_16527[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (11))){
var inst_16482 = cljs.core.async.close_BANG_(ch);
var state_16491__$1 = state_16491;
var statearr_16502_16528 = state_16491__$1;
(statearr_16502_16528[(2)] = inst_16482);

(statearr_16502_16528[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (9))){
var state_16491__$1 = state_16491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16503_16529 = state_16491__$1;
(statearr_16503_16529[(1)] = (11));

} else {
var statearr_16504_16530 = state_16491__$1;
(statearr_16504_16530[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (5))){
var inst_16468 = (state_16491[(7)]);
var state_16491__$1 = state_16491;
var statearr_16505_16531 = state_16491__$1;
(statearr_16505_16531[(2)] = inst_16468);

(statearr_16505_16531[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (10))){
var inst_16487 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16506_16532 = state_16491__$1;
(statearr_16506_16532[(2)] = inst_16487);

(statearr_16506_16532[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16492 === (8))){
var inst_16468 = (state_16491[(7)]);
var inst_16478 = cljs.core.next(inst_16468);
var inst_16468__$1 = inst_16478;
var state_16491__$1 = (function (){var statearr_16507 = state_16491;
(statearr_16507[(7)] = inst_16468__$1);

return statearr_16507;
})();
var statearr_16508_16533 = state_16491__$1;
(statearr_16508_16533[(2)] = null);

(statearr_16508_16533[(1)] = (2));


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
});})(c__15628__auto__))
;
return ((function (switch__15504__auto__,c__15628__auto__){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_16512 = [null,null,null,null,null,null,null,null];
(statearr_16512[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_16512[(1)] = (1));

return statearr_16512;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_16491){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16491);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16513){if((e16513 instanceof Object)){
var ex__15508__auto__ = e16513;
var statearr_16514_16534 = state_16491;
(statearr_16514_16534[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16491);

return cljs.core.cst$kw$recur;
} else {
throw e16513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__16535 = state_16491;
state_16491 = G__16535;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_16491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_16491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__))
})();
var state__15630__auto__ = (function (){var statearr_16515 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_16515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__))
);

return c__15628__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7564__auto__ = (((_ == null))?null:_);
var m__7565__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7565__auto__.call(null,_));
} else {
var m__7565__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7565__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7565__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7565__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7565__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7565__auto__.call(null,m,ch));
} else {
var m__7565__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7565__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7565__auto__.call(null,m));
} else {
var m__7565__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7565__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__16764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16764) : cljs.core.atom.call(null,G__16764));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16765 = (function (ch,cs,meta16766){
this.ch = ch;
this.cs = cs;
this.meta16766 = meta16766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16767,meta16766__$1){
var self__ = this;
var _16767__$1 = this;
return (new cljs.core.async.t_cljs$core$async16765(self__.ch,self__.cs,meta16766__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16767){
var self__ = this;
var _16767__$1 = this;
return self__.meta16766;
});})(cs))
;

cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16765.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16768_16992 = self__.cs;
var G__16769_16993 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16768_16992,G__16769_16993) : cljs.core.reset_BANG_.call(null,G__16768_16992,G__16769_16993));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16765.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16766], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16765";

cljs.core.async.t_cljs$core$async16765.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async16765");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16765 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16765(ch__$1,cs__$1,meta16766){
return (new cljs.core.async.t_cljs$core$async16765(ch__$1,cs__$1,meta16766));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16765(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15628__auto___16994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___16994,cs,m,dchan,dctr,done){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___16994,cs,m,dchan,dctr,done){
return (function (state_16904){
var state_val_16905 = (state_16904[(1)]);
if((state_val_16905 === (7))){
var inst_16900 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16906_16995 = state_16904__$1;
(statearr_16906_16995[(2)] = inst_16900);

(statearr_16906_16995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (20))){
var inst_16803 = (state_16904[(7)]);
var inst_16815 = cljs.core.first(inst_16803);
var inst_16816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16815,(0),null);
var inst_16817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16815,(1),null);
var state_16904__$1 = (function (){var statearr_16907 = state_16904;
(statearr_16907[(8)] = inst_16816);

return statearr_16907;
})();
if(cljs.core.truth_(inst_16817)){
var statearr_16908_16996 = state_16904__$1;
(statearr_16908_16996[(1)] = (22));

} else {
var statearr_16909_16997 = state_16904__$1;
(statearr_16909_16997[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (27))){
var inst_16847 = (state_16904[(9)]);
var inst_16852 = (state_16904[(10)]);
var inst_16772 = (state_16904[(11)]);
var inst_16845 = (state_16904[(12)]);
var inst_16852__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16845,inst_16847);
var inst_16853 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16852__$1,inst_16772,done);
var state_16904__$1 = (function (){var statearr_16910 = state_16904;
(statearr_16910[(10)] = inst_16852__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16853)){
var statearr_16911_16998 = state_16904__$1;
(statearr_16911_16998[(1)] = (30));

} else {
var statearr_16912_16999 = state_16904__$1;
(statearr_16912_16999[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (1))){
var state_16904__$1 = state_16904;
var statearr_16913_17000 = state_16904__$1;
(statearr_16913_17000[(2)] = null);

(statearr_16913_17000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (24))){
var inst_16803 = (state_16904[(7)]);
var inst_16822 = (state_16904[(2)]);
var inst_16823 = cljs.core.next(inst_16803);
var inst_16781 = inst_16823;
var inst_16782 = null;
var inst_16783 = (0);
var inst_16784 = (0);
var state_16904__$1 = (function (){var statearr_16914 = state_16904;
(statearr_16914[(13)] = inst_16783);

(statearr_16914[(14)] = inst_16782);

(statearr_16914[(15)] = inst_16784);

(statearr_16914[(16)] = inst_16781);

(statearr_16914[(17)] = inst_16822);

return statearr_16914;
})();
var statearr_16915_17001 = state_16904__$1;
(statearr_16915_17001[(2)] = null);

(statearr_16915_17001[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (39))){
var state_16904__$1 = state_16904;
var statearr_16919_17002 = state_16904__$1;
(statearr_16919_17002[(2)] = null);

(statearr_16919_17002[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (4))){
var inst_16772 = (state_16904[(11)]);
var inst_16772__$1 = (state_16904[(2)]);
var inst_16773 = (inst_16772__$1 == null);
var state_16904__$1 = (function (){var statearr_16920 = state_16904;
(statearr_16920[(11)] = inst_16772__$1);

return statearr_16920;
})();
if(cljs.core.truth_(inst_16773)){
var statearr_16921_17003 = state_16904__$1;
(statearr_16921_17003[(1)] = (5));

} else {
var statearr_16922_17004 = state_16904__$1;
(statearr_16922_17004[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (15))){
var inst_16783 = (state_16904[(13)]);
var inst_16782 = (state_16904[(14)]);
var inst_16784 = (state_16904[(15)]);
var inst_16781 = (state_16904[(16)]);
var inst_16799 = (state_16904[(2)]);
var inst_16800 = (inst_16784 + (1));
var tmp16916 = inst_16783;
var tmp16917 = inst_16782;
var tmp16918 = inst_16781;
var inst_16781__$1 = tmp16918;
var inst_16782__$1 = tmp16917;
var inst_16783__$1 = tmp16916;
var inst_16784__$1 = inst_16800;
var state_16904__$1 = (function (){var statearr_16923 = state_16904;
(statearr_16923[(18)] = inst_16799);

(statearr_16923[(13)] = inst_16783__$1);

(statearr_16923[(14)] = inst_16782__$1);

(statearr_16923[(15)] = inst_16784__$1);

(statearr_16923[(16)] = inst_16781__$1);

return statearr_16923;
})();
var statearr_16924_17005 = state_16904__$1;
(statearr_16924_17005[(2)] = null);

(statearr_16924_17005[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (21))){
var inst_16826 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16928_17006 = state_16904__$1;
(statearr_16928_17006[(2)] = inst_16826);

(statearr_16928_17006[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (31))){
var inst_16852 = (state_16904[(10)]);
var inst_16856 = done(null);
var inst_16857 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16852);
var state_16904__$1 = (function (){var statearr_16929 = state_16904;
(statearr_16929[(19)] = inst_16856);

return statearr_16929;
})();
var statearr_16930_17007 = state_16904__$1;
(statearr_16930_17007[(2)] = inst_16857);

(statearr_16930_17007[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (32))){
var inst_16847 = (state_16904[(9)]);
var inst_16846 = (state_16904[(20)]);
var inst_16845 = (state_16904[(12)]);
var inst_16844 = (state_16904[(21)]);
var inst_16859 = (state_16904[(2)]);
var inst_16860 = (inst_16847 + (1));
var tmp16925 = inst_16846;
var tmp16926 = inst_16845;
var tmp16927 = inst_16844;
var inst_16844__$1 = tmp16927;
var inst_16845__$1 = tmp16926;
var inst_16846__$1 = tmp16925;
var inst_16847__$1 = inst_16860;
var state_16904__$1 = (function (){var statearr_16931 = state_16904;
(statearr_16931[(9)] = inst_16847__$1);

(statearr_16931[(22)] = inst_16859);

(statearr_16931[(20)] = inst_16846__$1);

(statearr_16931[(12)] = inst_16845__$1);

(statearr_16931[(21)] = inst_16844__$1);

return statearr_16931;
})();
var statearr_16932_17008 = state_16904__$1;
(statearr_16932_17008[(2)] = null);

(statearr_16932_17008[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (40))){
var inst_16872 = (state_16904[(23)]);
var inst_16876 = done(null);
var inst_16877 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16872);
var state_16904__$1 = (function (){var statearr_16933 = state_16904;
(statearr_16933[(24)] = inst_16876);

return statearr_16933;
})();
var statearr_16934_17009 = state_16904__$1;
(statearr_16934_17009[(2)] = inst_16877);

(statearr_16934_17009[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (33))){
var inst_16863 = (state_16904[(25)]);
var inst_16865 = cljs.core.chunked_seq_QMARK_(inst_16863);
var state_16904__$1 = state_16904;
if(inst_16865){
var statearr_16935_17010 = state_16904__$1;
(statearr_16935_17010[(1)] = (36));

} else {
var statearr_16936_17011 = state_16904__$1;
(statearr_16936_17011[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (13))){
var inst_16793 = (state_16904[(26)]);
var inst_16796 = cljs.core.async.close_BANG_(inst_16793);
var state_16904__$1 = state_16904;
var statearr_16937_17012 = state_16904__$1;
(statearr_16937_17012[(2)] = inst_16796);

(statearr_16937_17012[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (22))){
var inst_16816 = (state_16904[(8)]);
var inst_16819 = cljs.core.async.close_BANG_(inst_16816);
var state_16904__$1 = state_16904;
var statearr_16938_17013 = state_16904__$1;
(statearr_16938_17013[(2)] = inst_16819);

(statearr_16938_17013[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (36))){
var inst_16863 = (state_16904[(25)]);
var inst_16867 = cljs.core.chunk_first(inst_16863);
var inst_16868 = cljs.core.chunk_rest(inst_16863);
var inst_16869 = cljs.core.count(inst_16867);
var inst_16844 = inst_16868;
var inst_16845 = inst_16867;
var inst_16846 = inst_16869;
var inst_16847 = (0);
var state_16904__$1 = (function (){var statearr_16939 = state_16904;
(statearr_16939[(9)] = inst_16847);

(statearr_16939[(20)] = inst_16846);

(statearr_16939[(12)] = inst_16845);

(statearr_16939[(21)] = inst_16844);

return statearr_16939;
})();
var statearr_16940_17014 = state_16904__$1;
(statearr_16940_17014[(2)] = null);

(statearr_16940_17014[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (41))){
var inst_16863 = (state_16904[(25)]);
var inst_16879 = (state_16904[(2)]);
var inst_16880 = cljs.core.next(inst_16863);
var inst_16844 = inst_16880;
var inst_16845 = null;
var inst_16846 = (0);
var inst_16847 = (0);
var state_16904__$1 = (function (){var statearr_16941 = state_16904;
(statearr_16941[(27)] = inst_16879);

(statearr_16941[(9)] = inst_16847);

(statearr_16941[(20)] = inst_16846);

(statearr_16941[(12)] = inst_16845);

(statearr_16941[(21)] = inst_16844);

return statearr_16941;
})();
var statearr_16942_17015 = state_16904__$1;
(statearr_16942_17015[(2)] = null);

(statearr_16942_17015[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (43))){
var state_16904__$1 = state_16904;
var statearr_16943_17016 = state_16904__$1;
(statearr_16943_17016[(2)] = null);

(statearr_16943_17016[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (29))){
var inst_16888 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16944_17017 = state_16904__$1;
(statearr_16944_17017[(2)] = inst_16888);

(statearr_16944_17017[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (44))){
var inst_16897 = (state_16904[(2)]);
var state_16904__$1 = (function (){var statearr_16945 = state_16904;
(statearr_16945[(28)] = inst_16897);

return statearr_16945;
})();
var statearr_16946_17018 = state_16904__$1;
(statearr_16946_17018[(2)] = null);

(statearr_16946_17018[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (6))){
var inst_16836 = (state_16904[(29)]);
var inst_16835 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16836__$1 = cljs.core.keys(inst_16835);
var inst_16837 = cljs.core.count(inst_16836__$1);
var inst_16838 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16837) : cljs.core.reset_BANG_.call(null,dctr,inst_16837));
var inst_16843 = cljs.core.seq(inst_16836__$1);
var inst_16844 = inst_16843;
var inst_16845 = null;
var inst_16846 = (0);
var inst_16847 = (0);
var state_16904__$1 = (function (){var statearr_16947 = state_16904;
(statearr_16947[(9)] = inst_16847);

(statearr_16947[(20)] = inst_16846);

(statearr_16947[(12)] = inst_16845);

(statearr_16947[(21)] = inst_16844);

(statearr_16947[(30)] = inst_16838);

(statearr_16947[(29)] = inst_16836__$1);

return statearr_16947;
})();
var statearr_16948_17019 = state_16904__$1;
(statearr_16948_17019[(2)] = null);

(statearr_16948_17019[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (28))){
var inst_16863 = (state_16904[(25)]);
var inst_16844 = (state_16904[(21)]);
var inst_16863__$1 = cljs.core.seq(inst_16844);
var state_16904__$1 = (function (){var statearr_16949 = state_16904;
(statearr_16949[(25)] = inst_16863__$1);

return statearr_16949;
})();
if(inst_16863__$1){
var statearr_16950_17020 = state_16904__$1;
(statearr_16950_17020[(1)] = (33));

} else {
var statearr_16951_17021 = state_16904__$1;
(statearr_16951_17021[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (25))){
var inst_16847 = (state_16904[(9)]);
var inst_16846 = (state_16904[(20)]);
var inst_16849 = (inst_16847 < inst_16846);
var inst_16850 = inst_16849;
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16850)){
var statearr_16952_17022 = state_16904__$1;
(statearr_16952_17022[(1)] = (27));

} else {
var statearr_16953_17023 = state_16904__$1;
(statearr_16953_17023[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (34))){
var state_16904__$1 = state_16904;
var statearr_16954_17024 = state_16904__$1;
(statearr_16954_17024[(2)] = null);

(statearr_16954_17024[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (17))){
var state_16904__$1 = state_16904;
var statearr_16955_17025 = state_16904__$1;
(statearr_16955_17025[(2)] = null);

(statearr_16955_17025[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (3))){
var inst_16902 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16904__$1,inst_16902);
} else {
if((state_val_16905 === (12))){
var inst_16831 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16956_17026 = state_16904__$1;
(statearr_16956_17026[(2)] = inst_16831);

(statearr_16956_17026[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (2))){
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16904__$1,(4),ch);
} else {
if((state_val_16905 === (23))){
var state_16904__$1 = state_16904;
var statearr_16957_17027 = state_16904__$1;
(statearr_16957_17027[(2)] = null);

(statearr_16957_17027[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (35))){
var inst_16886 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16958_17028 = state_16904__$1;
(statearr_16958_17028[(2)] = inst_16886);

(statearr_16958_17028[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (19))){
var inst_16803 = (state_16904[(7)]);
var inst_16807 = cljs.core.chunk_first(inst_16803);
var inst_16808 = cljs.core.chunk_rest(inst_16803);
var inst_16809 = cljs.core.count(inst_16807);
var inst_16781 = inst_16808;
var inst_16782 = inst_16807;
var inst_16783 = inst_16809;
var inst_16784 = (0);
var state_16904__$1 = (function (){var statearr_16959 = state_16904;
(statearr_16959[(13)] = inst_16783);

(statearr_16959[(14)] = inst_16782);

(statearr_16959[(15)] = inst_16784);

(statearr_16959[(16)] = inst_16781);

return statearr_16959;
})();
var statearr_16960_17029 = state_16904__$1;
(statearr_16960_17029[(2)] = null);

(statearr_16960_17029[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (11))){
var inst_16803 = (state_16904[(7)]);
var inst_16781 = (state_16904[(16)]);
var inst_16803__$1 = cljs.core.seq(inst_16781);
var state_16904__$1 = (function (){var statearr_16961 = state_16904;
(statearr_16961[(7)] = inst_16803__$1);

return statearr_16961;
})();
if(inst_16803__$1){
var statearr_16962_17030 = state_16904__$1;
(statearr_16962_17030[(1)] = (16));

} else {
var statearr_16963_17031 = state_16904__$1;
(statearr_16963_17031[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (9))){
var inst_16833 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16964_17032 = state_16904__$1;
(statearr_16964_17032[(2)] = inst_16833);

(statearr_16964_17032[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (5))){
var inst_16779 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16780 = cljs.core.seq(inst_16779);
var inst_16781 = inst_16780;
var inst_16782 = null;
var inst_16783 = (0);
var inst_16784 = (0);
var state_16904__$1 = (function (){var statearr_16965 = state_16904;
(statearr_16965[(13)] = inst_16783);

(statearr_16965[(14)] = inst_16782);

(statearr_16965[(15)] = inst_16784);

(statearr_16965[(16)] = inst_16781);

return statearr_16965;
})();
var statearr_16966_17033 = state_16904__$1;
(statearr_16966_17033[(2)] = null);

(statearr_16966_17033[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (14))){
var state_16904__$1 = state_16904;
var statearr_16967_17034 = state_16904__$1;
(statearr_16967_17034[(2)] = null);

(statearr_16967_17034[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (45))){
var inst_16894 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16968_17035 = state_16904__$1;
(statearr_16968_17035[(2)] = inst_16894);

(statearr_16968_17035[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (26))){
var inst_16836 = (state_16904[(29)]);
var inst_16890 = (state_16904[(2)]);
var inst_16891 = cljs.core.seq(inst_16836);
var state_16904__$1 = (function (){var statearr_16969 = state_16904;
(statearr_16969[(31)] = inst_16890);

return statearr_16969;
})();
if(inst_16891){
var statearr_16970_17036 = state_16904__$1;
(statearr_16970_17036[(1)] = (42));

} else {
var statearr_16971_17037 = state_16904__$1;
(statearr_16971_17037[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (16))){
var inst_16803 = (state_16904[(7)]);
var inst_16805 = cljs.core.chunked_seq_QMARK_(inst_16803);
var state_16904__$1 = state_16904;
if(inst_16805){
var statearr_16972_17038 = state_16904__$1;
(statearr_16972_17038[(1)] = (19));

} else {
var statearr_16973_17039 = state_16904__$1;
(statearr_16973_17039[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (38))){
var inst_16883 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16974_17040 = state_16904__$1;
(statearr_16974_17040[(2)] = inst_16883);

(statearr_16974_17040[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (30))){
var state_16904__$1 = state_16904;
var statearr_16975_17041 = state_16904__$1;
(statearr_16975_17041[(2)] = null);

(statearr_16975_17041[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (10))){
var inst_16782 = (state_16904[(14)]);
var inst_16784 = (state_16904[(15)]);
var inst_16792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16782,inst_16784);
var inst_16793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16792,(0),null);
var inst_16794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16792,(1),null);
var state_16904__$1 = (function (){var statearr_16976 = state_16904;
(statearr_16976[(26)] = inst_16793);

return statearr_16976;
})();
if(cljs.core.truth_(inst_16794)){
var statearr_16977_17042 = state_16904__$1;
(statearr_16977_17042[(1)] = (13));

} else {
var statearr_16978_17043 = state_16904__$1;
(statearr_16978_17043[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (18))){
var inst_16829 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16979_17044 = state_16904__$1;
(statearr_16979_17044[(2)] = inst_16829);

(statearr_16979_17044[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (42))){
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16904__$1,(45),dchan);
} else {
if((state_val_16905 === (37))){
var inst_16863 = (state_16904[(25)]);
var inst_16772 = (state_16904[(11)]);
var inst_16872 = (state_16904[(23)]);
var inst_16872__$1 = cljs.core.first(inst_16863);
var inst_16873 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16872__$1,inst_16772,done);
var state_16904__$1 = (function (){var statearr_16980 = state_16904;
(statearr_16980[(23)] = inst_16872__$1);

return statearr_16980;
})();
if(cljs.core.truth_(inst_16873)){
var statearr_16981_17045 = state_16904__$1;
(statearr_16981_17045[(1)] = (39));

} else {
var statearr_16982_17046 = state_16904__$1;
(statearr_16982_17046[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16905 === (8))){
var inst_16783 = (state_16904[(13)]);
var inst_16784 = (state_16904[(15)]);
var inst_16786 = (inst_16784 < inst_16783);
var inst_16787 = inst_16786;
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16787)){
var statearr_16983_17047 = state_16904__$1;
(statearr_16983_17047[(1)] = (10));

} else {
var statearr_16984_17048 = state_16904__$1;
(statearr_16984_17048[(1)] = (11));

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
});})(c__15628__auto___16994,cs,m,dchan,dctr,done))
;
return ((function (switch__15504__auto__,c__15628__auto___16994,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15505__auto__ = null;
var cljs$core$async$mult_$_state_machine__15505__auto____0 = (function (){
var statearr_16988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16988[(0)] = cljs$core$async$mult_$_state_machine__15505__auto__);

(statearr_16988[(1)] = (1));

return statearr_16988;
});
var cljs$core$async$mult_$_state_machine__15505__auto____1 = (function (state_16904){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_16904);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e16989){if((e16989 instanceof Object)){
var ex__15508__auto__ = e16989;
var statearr_16990_17049 = state_16904;
(statearr_16990_17049[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16904);

return cljs.core.cst$kw$recur;
} else {
throw e16989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__17050 = state_16904;
state_16904 = G__17050;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15505__auto__ = function(state_16904){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15505__auto____1.call(this,state_16904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15505__auto____0;
cljs$core$async$mult_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15505__auto____1;
return cljs$core$async$mult_$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___16994,cs,m,dchan,dctr,done))
})();
var state__15630__auto__ = (function (){var statearr_16991 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_16991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___16994);

return statearr_16991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___16994,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args17051 = [];
var len__8009__auto___17054 = arguments.length;
var i__8010__auto___17055 = (0);
while(true){
if((i__8010__auto___17055 < len__8009__auto___17054)){
args17051.push((arguments[i__8010__auto___17055]));

var G__17056 = (i__8010__auto___17055 + (1));
i__8010__auto___17055 = G__17056;
continue;
} else {
}
break;
}

var G__17053 = args17051.length;
switch (G__17053) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17051.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7565__auto__.call(null,m,ch));
} else {
var m__7565__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7565__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7565__auto__.call(null,m,ch));
} else {
var m__7565__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7565__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7565__auto__.call(null,m));
} else {
var m__7565__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7565__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7565__auto__.call(null,m,state_map));
} else {
var m__7565__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7565__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7564__auto__ = (((m == null))?null:m);
var m__7565__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7565__auto__.call(null,m,mode));
} else {
var m__7565__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7565__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8016__auto__ = [];
var len__8009__auto___17068 = arguments.length;
var i__8010__auto___17069 = (0);
while(true){
if((i__8010__auto___17069 < len__8009__auto___17068)){
args__8016__auto__.push((arguments[i__8010__auto___17069]));

var G__17070 = (i__8010__auto___17069 + (1));
i__8010__auto___17069 = G__17070;
continue;
} else {
}
break;
}

var argseq__8017__auto__ = ((((3) < args__8016__auto__.length))?(new cljs.core.IndexedSeq(args__8016__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8017__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17062){
var map__17063 = p__17062;
var map__17063__$1 = ((((!((map__17063 == null)))?((((map__17063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17063):map__17063);
var opts = map__17063__$1;
var statearr_17065_17071 = state;
(statearr_17065_17071[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17063,map__17063__$1,opts){
return (function (val){
var statearr_17066_17072 = state;
(statearr_17066_17072[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17063,map__17063__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17067_17073 = state;
(statearr_17067_17073[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17058){
var G__17059 = cljs.core.first(seq17058);
var seq17058__$1 = cljs.core.next(seq17058);
var G__17060 = cljs.core.first(seq17058__$1);
var seq17058__$2 = cljs.core.next(seq17058__$1);
var G__17061 = cljs.core.first(seq17058__$2);
var seq17058__$3 = cljs.core.next(seq17058__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17059,G__17060,G__17061,seq17058__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__17245 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17245) : cljs.core.atom.call(null,G__17245));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__17246 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17246) : cljs.core.atom.call(null,G__17246));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17247 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17248){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17248 = meta17248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17249,meta17248__$1){
var self__ = this;
var _17249__$1 = this;
return (new cljs.core.async.t_cljs$core$async17247(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17248__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17249){
var self__ = this;
var _17249__$1 = this;
return self__.meta17248;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17250_17416 = self__.cs;
var G__17251_17417 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17250_17416,G__17251_17417) : cljs.core.reset_BANG_.call(null,G__17250_17416,G__17251_17417));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta17248], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17247";

cljs.core.async.t_cljs$core$async17247.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async17247");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17247 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17247(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17248){
return (new cljs.core.async.t_cljs$core$async17247(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17248));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17247(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15628__auto___17418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___17418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___17418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17353){
var state_val_17354 = (state_17353[(1)]);
if((state_val_17354 === (7))){
var inst_17268 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17355_17419 = state_17353__$1;
(statearr_17355_17419[(2)] = inst_17268);

(statearr_17355_17419[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (20))){
var inst_17280 = (state_17353[(7)]);
var state_17353__$1 = state_17353;
var statearr_17356_17420 = state_17353__$1;
(statearr_17356_17420[(2)] = inst_17280);

(statearr_17356_17420[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (27))){
var state_17353__$1 = state_17353;
var statearr_17357_17421 = state_17353__$1;
(statearr_17357_17421[(2)] = null);

(statearr_17357_17421[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (1))){
var inst_17255 = (state_17353[(8)]);
var inst_17255__$1 = calc_state();
var inst_17257 = (inst_17255__$1 == null);
var inst_17258 = cljs.core.not(inst_17257);
var state_17353__$1 = (function (){var statearr_17358 = state_17353;
(statearr_17358[(8)] = inst_17255__$1);

return statearr_17358;
})();
if(inst_17258){
var statearr_17359_17422 = state_17353__$1;
(statearr_17359_17422[(1)] = (2));

} else {
var statearr_17360_17423 = state_17353__$1;
(statearr_17360_17423[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (24))){
var inst_17327 = (state_17353[(9)]);
var inst_17304 = (state_17353[(10)]);
var inst_17313 = (state_17353[(11)]);
var inst_17327__$1 = (inst_17304.cljs$core$IFn$_invoke$arity$1 ? inst_17304.cljs$core$IFn$_invoke$arity$1(inst_17313) : inst_17304.call(null,inst_17313));
var state_17353__$1 = (function (){var statearr_17361 = state_17353;
(statearr_17361[(9)] = inst_17327__$1);

return statearr_17361;
})();
if(cljs.core.truth_(inst_17327__$1)){
var statearr_17362_17424 = state_17353__$1;
(statearr_17362_17424[(1)] = (29));

} else {
var statearr_17363_17425 = state_17353__$1;
(statearr_17363_17425[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (4))){
var inst_17271 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17271)){
var statearr_17364_17426 = state_17353__$1;
(statearr_17364_17426[(1)] = (8));

} else {
var statearr_17365_17427 = state_17353__$1;
(statearr_17365_17427[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (15))){
var inst_17298 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17298)){
var statearr_17366_17428 = state_17353__$1;
(statearr_17366_17428[(1)] = (19));

} else {
var statearr_17367_17429 = state_17353__$1;
(statearr_17367_17429[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (21))){
var inst_17303 = (state_17353[(12)]);
var inst_17303__$1 = (state_17353[(2)]);
var inst_17304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17303__$1,cljs.core.cst$kw$solos);
var inst_17305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17303__$1,cljs.core.cst$kw$mutes);
var inst_17306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17303__$1,cljs.core.cst$kw$reads);
var state_17353__$1 = (function (){var statearr_17368 = state_17353;
(statearr_17368[(12)] = inst_17303__$1);

(statearr_17368[(13)] = inst_17305);

(statearr_17368[(10)] = inst_17304);

return statearr_17368;
})();
return cljs.core.async.ioc_alts_BANG_(state_17353__$1,(22),inst_17306);
} else {
if((state_val_17354 === (31))){
var inst_17335 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17335)){
var statearr_17369_17430 = state_17353__$1;
(statearr_17369_17430[(1)] = (32));

} else {
var statearr_17370_17431 = state_17353__$1;
(statearr_17370_17431[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (32))){
var inst_17312 = (state_17353[(14)]);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17353__$1,(35),out,inst_17312);
} else {
if((state_val_17354 === (33))){
var inst_17303 = (state_17353[(12)]);
var inst_17280 = inst_17303;
var state_17353__$1 = (function (){var statearr_17371 = state_17353;
(statearr_17371[(7)] = inst_17280);

return statearr_17371;
})();
var statearr_17372_17432 = state_17353__$1;
(statearr_17372_17432[(2)] = null);

(statearr_17372_17432[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (13))){
var inst_17280 = (state_17353[(7)]);
var inst_17287 = inst_17280.cljs$lang$protocol_mask$partition0$;
var inst_17288 = (inst_17287 & (64));
var inst_17289 = inst_17280.cljs$core$ISeq$;
var inst_17290 = (cljs.core.PROTOCOL_SENTINEL === inst_17289);
var inst_17291 = (inst_17288) || (inst_17290);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17291)){
var statearr_17373_17433 = state_17353__$1;
(statearr_17373_17433[(1)] = (16));

} else {
var statearr_17374_17434 = state_17353__$1;
(statearr_17374_17434[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (22))){
var inst_17312 = (state_17353[(14)]);
var inst_17313 = (state_17353[(11)]);
var inst_17311 = (state_17353[(2)]);
var inst_17312__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17311,(0),null);
var inst_17313__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17311,(1),null);
var inst_17314 = (inst_17312__$1 == null);
var inst_17315 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17313__$1,change);
var inst_17316 = (inst_17314) || (inst_17315);
var state_17353__$1 = (function (){var statearr_17375 = state_17353;
(statearr_17375[(14)] = inst_17312__$1);

(statearr_17375[(11)] = inst_17313__$1);

return statearr_17375;
})();
if(cljs.core.truth_(inst_17316)){
var statearr_17376_17435 = state_17353__$1;
(statearr_17376_17435[(1)] = (23));

} else {
var statearr_17377_17436 = state_17353__$1;
(statearr_17377_17436[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (36))){
var inst_17303 = (state_17353[(12)]);
var inst_17280 = inst_17303;
var state_17353__$1 = (function (){var statearr_17378 = state_17353;
(statearr_17378[(7)] = inst_17280);

return statearr_17378;
})();
var statearr_17379_17437 = state_17353__$1;
(statearr_17379_17437[(2)] = null);

(statearr_17379_17437[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (29))){
var inst_17327 = (state_17353[(9)]);
var state_17353__$1 = state_17353;
var statearr_17380_17438 = state_17353__$1;
(statearr_17380_17438[(2)] = inst_17327);

(statearr_17380_17438[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (6))){
var state_17353__$1 = state_17353;
var statearr_17381_17439 = state_17353__$1;
(statearr_17381_17439[(2)] = false);

(statearr_17381_17439[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (28))){
var inst_17323 = (state_17353[(2)]);
var inst_17324 = calc_state();
var inst_17280 = inst_17324;
var state_17353__$1 = (function (){var statearr_17382 = state_17353;
(statearr_17382[(15)] = inst_17323);

(statearr_17382[(7)] = inst_17280);

return statearr_17382;
})();
var statearr_17383_17440 = state_17353__$1;
(statearr_17383_17440[(2)] = null);

(statearr_17383_17440[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (25))){
var inst_17349 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17384_17441 = state_17353__$1;
(statearr_17384_17441[(2)] = inst_17349);

(statearr_17384_17441[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (34))){
var inst_17347 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17385_17442 = state_17353__$1;
(statearr_17385_17442[(2)] = inst_17347);

(statearr_17385_17442[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (17))){
var state_17353__$1 = state_17353;
var statearr_17386_17443 = state_17353__$1;
(statearr_17386_17443[(2)] = false);

(statearr_17386_17443[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (3))){
var state_17353__$1 = state_17353;
var statearr_17387_17444 = state_17353__$1;
(statearr_17387_17444[(2)] = false);

(statearr_17387_17444[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (12))){
var inst_17351 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17353__$1,inst_17351);
} else {
if((state_val_17354 === (2))){
var inst_17255 = (state_17353[(8)]);
var inst_17260 = inst_17255.cljs$lang$protocol_mask$partition0$;
var inst_17261 = (inst_17260 & (64));
var inst_17262 = inst_17255.cljs$core$ISeq$;
var inst_17263 = (cljs.core.PROTOCOL_SENTINEL === inst_17262);
var inst_17264 = (inst_17261) || (inst_17263);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17264)){
var statearr_17388_17445 = state_17353__$1;
(statearr_17388_17445[(1)] = (5));

} else {
var statearr_17389_17446 = state_17353__$1;
(statearr_17389_17446[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (23))){
var inst_17312 = (state_17353[(14)]);
var inst_17318 = (inst_17312 == null);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17318)){
var statearr_17390_17447 = state_17353__$1;
(statearr_17390_17447[(1)] = (26));

} else {
var statearr_17391_17448 = state_17353__$1;
(statearr_17391_17448[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (35))){
var inst_17338 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17338)){
var statearr_17392_17449 = state_17353__$1;
(statearr_17392_17449[(1)] = (36));

} else {
var statearr_17393_17450 = state_17353__$1;
(statearr_17393_17450[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (19))){
var inst_17280 = (state_17353[(7)]);
var inst_17300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17280);
var state_17353__$1 = state_17353;
var statearr_17394_17451 = state_17353__$1;
(statearr_17394_17451[(2)] = inst_17300);

(statearr_17394_17451[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (11))){
var inst_17280 = (state_17353[(7)]);
var inst_17284 = (inst_17280 == null);
var inst_17285 = cljs.core.not(inst_17284);
var state_17353__$1 = state_17353;
if(inst_17285){
var statearr_17395_17452 = state_17353__$1;
(statearr_17395_17452[(1)] = (13));

} else {
var statearr_17396_17453 = state_17353__$1;
(statearr_17396_17453[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (9))){
var inst_17255 = (state_17353[(8)]);
var state_17353__$1 = state_17353;
var statearr_17397_17454 = state_17353__$1;
(statearr_17397_17454[(2)] = inst_17255);

(statearr_17397_17454[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (5))){
var state_17353__$1 = state_17353;
var statearr_17398_17455 = state_17353__$1;
(statearr_17398_17455[(2)] = true);

(statearr_17398_17455[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (14))){
var state_17353__$1 = state_17353;
var statearr_17399_17456 = state_17353__$1;
(statearr_17399_17456[(2)] = false);

(statearr_17399_17456[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (26))){
var inst_17313 = (state_17353[(11)]);
var inst_17320 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17313);
var state_17353__$1 = state_17353;
var statearr_17400_17457 = state_17353__$1;
(statearr_17400_17457[(2)] = inst_17320);

(statearr_17400_17457[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (16))){
var state_17353__$1 = state_17353;
var statearr_17401_17458 = state_17353__$1;
(statearr_17401_17458[(2)] = true);

(statearr_17401_17458[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (38))){
var inst_17343 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17402_17459 = state_17353__$1;
(statearr_17402_17459[(2)] = inst_17343);

(statearr_17402_17459[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (30))){
var inst_17305 = (state_17353[(13)]);
var inst_17304 = (state_17353[(10)]);
var inst_17313 = (state_17353[(11)]);
var inst_17330 = cljs.core.empty_QMARK_(inst_17304);
var inst_17331 = (inst_17305.cljs$core$IFn$_invoke$arity$1 ? inst_17305.cljs$core$IFn$_invoke$arity$1(inst_17313) : inst_17305.call(null,inst_17313));
var inst_17332 = cljs.core.not(inst_17331);
var inst_17333 = (inst_17330) && (inst_17332);
var state_17353__$1 = state_17353;
var statearr_17403_17460 = state_17353__$1;
(statearr_17403_17460[(2)] = inst_17333);

(statearr_17403_17460[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (10))){
var inst_17255 = (state_17353[(8)]);
var inst_17276 = (state_17353[(2)]);
var inst_17277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17276,cljs.core.cst$kw$solos);
var inst_17278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17276,cljs.core.cst$kw$mutes);
var inst_17279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17276,cljs.core.cst$kw$reads);
var inst_17280 = inst_17255;
var state_17353__$1 = (function (){var statearr_17404 = state_17353;
(statearr_17404[(16)] = inst_17277);

(statearr_17404[(17)] = inst_17279);

(statearr_17404[(7)] = inst_17280);

(statearr_17404[(18)] = inst_17278);

return statearr_17404;
})();
var statearr_17405_17461 = state_17353__$1;
(statearr_17405_17461[(2)] = null);

(statearr_17405_17461[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (18))){
var inst_17295 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17406_17462 = state_17353__$1;
(statearr_17406_17462[(2)] = inst_17295);

(statearr_17406_17462[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (37))){
var state_17353__$1 = state_17353;
var statearr_17407_17463 = state_17353__$1;
(statearr_17407_17463[(2)] = null);

(statearr_17407_17463[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17354 === (8))){
var inst_17255 = (state_17353[(8)]);
var inst_17273 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17255);
var state_17353__$1 = state_17353;
var statearr_17408_17464 = state_17353__$1;
(statearr_17408_17464[(2)] = inst_17273);

(statearr_17408_17464[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
});})(c__15628__auto___17418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15504__auto__,c__15628__auto___17418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15505__auto__ = null;
var cljs$core$async$mix_$_state_machine__15505__auto____0 = (function (){
var statearr_17412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17412[(0)] = cljs$core$async$mix_$_state_machine__15505__auto__);

(statearr_17412[(1)] = (1));

return statearr_17412;
});
var cljs$core$async$mix_$_state_machine__15505__auto____1 = (function (state_17353){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_17353);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e17413){if((e17413 instanceof Object)){
var ex__15508__auto__ = e17413;
var statearr_17414_17465 = state_17353;
(statearr_17414_17465[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17353);

return cljs.core.cst$kw$recur;
} else {
throw e17413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__17466 = state_17353;
state_17353 = G__17466;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15505__auto__ = function(state_17353){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15505__auto____1.call(this,state_17353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15505__auto____0;
cljs$core$async$mix_$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15505__auto____1;
return cljs$core$async$mix_$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___17418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15630__auto__ = (function (){var statearr_17415 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_17415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___17418);

return statearr_17415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___17418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7564__auto__ = (((p == null))?null:p);
var m__7565__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7565__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7565__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7565__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7564__auto__ = (((p == null))?null:p);
var m__7565__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7565__auto__.call(null,p,v,ch));
} else {
var m__7565__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7565__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17467 = [];
var len__8009__auto___17470 = arguments.length;
var i__8010__auto___17471 = (0);
while(true){
if((i__8010__auto___17471 < len__8009__auto___17470)){
args17467.push((arguments[i__8010__auto___17471]));

var G__17472 = (i__8010__auto___17471 + (1));
i__8010__auto___17471 = G__17472;
continue;
} else {
}
break;
}

var G__17469 = args17467.length;
switch (G__17469) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17467.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7564__auto__ = (((p == null))?null:p);
var m__7565__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7565__auto__.call(null,p));
} else {
var m__7565__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7565__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7564__auto__ = (((p == null))?null:p);
var m__7565__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7564__auto__)]);
if(!((m__7565__auto__ == null))){
return (m__7565__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7565__auto__.call(null,p,v));
} else {
var m__7565__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7565__auto____$1 == null))){
return (m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7565__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7565__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args17475 = [];
var len__8009__auto___17603 = arguments.length;
var i__8010__auto___17604 = (0);
while(true){
if((i__8010__auto___17604 < len__8009__auto___17603)){
args17475.push((arguments[i__8010__auto___17604]));

var G__17605 = (i__8010__auto___17604 + (1));
i__8010__auto___17604 = G__17605;
continue;
} else {
}
break;
}

var G__17477 = args17475.length;
switch (G__17477) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17475.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17478 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17478) : cljs.core.atom.call(null,G__17478));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6896__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6896__auto__)){
return or__6896__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6896__auto__,mults){
return (function (p1__17474_SHARP_){
if(cljs.core.truth_((p1__17474_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17474_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17474_SHARP_.call(null,topic)))){
return p1__17474_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17474_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6896__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17479 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17480){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17480 = meta17480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17481,meta17480__$1){
var self__ = this;
var _17481__$1 = this;
return (new cljs.core.async.t_cljs$core$async17479(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17480__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17481){
var self__ = this;
var _17481__$1 = this;
return self__.meta17480;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17482 = self__.mults;
var G__17483 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17482,G__17483) : cljs.core.reset_BANG_.call(null,G__17482,G__17483));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17480], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17479";

cljs.core.async.t_cljs$core$async17479.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async17479");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17479 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17479(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17480){
return (new cljs.core.async.t_cljs$core$async17479(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17480));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17479(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15628__auto___17607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___17607,mults,ensure_mult,p){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___17607,mults,ensure_mult,p){
return (function (state_17555){
var state_val_17556 = (state_17555[(1)]);
if((state_val_17556 === (7))){
var inst_17551 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17557_17608 = state_17555__$1;
(statearr_17557_17608[(2)] = inst_17551);

(statearr_17557_17608[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (20))){
var state_17555__$1 = state_17555;
var statearr_17558_17609 = state_17555__$1;
(statearr_17558_17609[(2)] = null);

(statearr_17558_17609[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (1))){
var state_17555__$1 = state_17555;
var statearr_17559_17610 = state_17555__$1;
(statearr_17559_17610[(2)] = null);

(statearr_17559_17610[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (24))){
var inst_17534 = (state_17555[(7)]);
var inst_17543 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17534);
var state_17555__$1 = state_17555;
var statearr_17560_17611 = state_17555__$1;
(statearr_17560_17611[(2)] = inst_17543);

(statearr_17560_17611[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (4))){
var inst_17486 = (state_17555[(8)]);
var inst_17486__$1 = (state_17555[(2)]);
var inst_17487 = (inst_17486__$1 == null);
var state_17555__$1 = (function (){var statearr_17561 = state_17555;
(statearr_17561[(8)] = inst_17486__$1);

return statearr_17561;
})();
if(cljs.core.truth_(inst_17487)){
var statearr_17562_17612 = state_17555__$1;
(statearr_17562_17612[(1)] = (5));

} else {
var statearr_17563_17613 = state_17555__$1;
(statearr_17563_17613[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (15))){
var inst_17528 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17564_17614 = state_17555__$1;
(statearr_17564_17614[(2)] = inst_17528);

(statearr_17564_17614[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (21))){
var inst_17548 = (state_17555[(2)]);
var state_17555__$1 = (function (){var statearr_17565 = state_17555;
(statearr_17565[(9)] = inst_17548);

return statearr_17565;
})();
var statearr_17566_17615 = state_17555__$1;
(statearr_17566_17615[(2)] = null);

(statearr_17566_17615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (13))){
var inst_17510 = (state_17555[(10)]);
var inst_17512 = cljs.core.chunked_seq_QMARK_(inst_17510);
var state_17555__$1 = state_17555;
if(inst_17512){
var statearr_17567_17616 = state_17555__$1;
(statearr_17567_17616[(1)] = (16));

} else {
var statearr_17568_17617 = state_17555__$1;
(statearr_17568_17617[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (22))){
var inst_17540 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
if(cljs.core.truth_(inst_17540)){
var statearr_17569_17618 = state_17555__$1;
(statearr_17569_17618[(1)] = (23));

} else {
var statearr_17570_17619 = state_17555__$1;
(statearr_17570_17619[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (6))){
var inst_17534 = (state_17555[(7)]);
var inst_17486 = (state_17555[(8)]);
var inst_17536 = (state_17555[(11)]);
var inst_17534__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17486) : topic_fn.call(null,inst_17486));
var inst_17535 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17536__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17535,inst_17534__$1);
var state_17555__$1 = (function (){var statearr_17571 = state_17555;
(statearr_17571[(7)] = inst_17534__$1);

(statearr_17571[(11)] = inst_17536__$1);

return statearr_17571;
})();
if(cljs.core.truth_(inst_17536__$1)){
var statearr_17572_17620 = state_17555__$1;
(statearr_17572_17620[(1)] = (19));

} else {
var statearr_17573_17621 = state_17555__$1;
(statearr_17573_17621[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (25))){
var inst_17545 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17574_17622 = state_17555__$1;
(statearr_17574_17622[(2)] = inst_17545);

(statearr_17574_17622[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (17))){
var inst_17510 = (state_17555[(10)]);
var inst_17519 = cljs.core.first(inst_17510);
var inst_17520 = cljs.core.async.muxch_STAR_(inst_17519);
var inst_17521 = cljs.core.async.close_BANG_(inst_17520);
var inst_17522 = cljs.core.next(inst_17510);
var inst_17496 = inst_17522;
var inst_17497 = null;
var inst_17498 = (0);
var inst_17499 = (0);
var state_17555__$1 = (function (){var statearr_17575 = state_17555;
(statearr_17575[(12)] = inst_17499);

(statearr_17575[(13)] = inst_17498);

(statearr_17575[(14)] = inst_17521);

(statearr_17575[(15)] = inst_17497);

(statearr_17575[(16)] = inst_17496);

return statearr_17575;
})();
var statearr_17576_17623 = state_17555__$1;
(statearr_17576_17623[(2)] = null);

(statearr_17576_17623[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (3))){
var inst_17553 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17555__$1,inst_17553);
} else {
if((state_val_17556 === (12))){
var inst_17530 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17577_17624 = state_17555__$1;
(statearr_17577_17624[(2)] = inst_17530);

(statearr_17577_17624[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (2))){
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17555__$1,(4),ch);
} else {
if((state_val_17556 === (23))){
var state_17555__$1 = state_17555;
var statearr_17578_17625 = state_17555__$1;
(statearr_17578_17625[(2)] = null);

(statearr_17578_17625[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (19))){
var inst_17486 = (state_17555[(8)]);
var inst_17536 = (state_17555[(11)]);
var inst_17538 = cljs.core.async.muxch_STAR_(inst_17536);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17555__$1,(22),inst_17538,inst_17486);
} else {
if((state_val_17556 === (11))){
var inst_17510 = (state_17555[(10)]);
var inst_17496 = (state_17555[(16)]);
var inst_17510__$1 = cljs.core.seq(inst_17496);
var state_17555__$1 = (function (){var statearr_17579 = state_17555;
(statearr_17579[(10)] = inst_17510__$1);

return statearr_17579;
})();
if(inst_17510__$1){
var statearr_17580_17626 = state_17555__$1;
(statearr_17580_17626[(1)] = (13));

} else {
var statearr_17581_17627 = state_17555__$1;
(statearr_17581_17627[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (9))){
var inst_17532 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17582_17628 = state_17555__$1;
(statearr_17582_17628[(2)] = inst_17532);

(statearr_17582_17628[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (5))){
var inst_17493 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17494 = cljs.core.vals(inst_17493);
var inst_17495 = cljs.core.seq(inst_17494);
var inst_17496 = inst_17495;
var inst_17497 = null;
var inst_17498 = (0);
var inst_17499 = (0);
var state_17555__$1 = (function (){var statearr_17583 = state_17555;
(statearr_17583[(12)] = inst_17499);

(statearr_17583[(13)] = inst_17498);

(statearr_17583[(15)] = inst_17497);

(statearr_17583[(16)] = inst_17496);

return statearr_17583;
})();
var statearr_17584_17629 = state_17555__$1;
(statearr_17584_17629[(2)] = null);

(statearr_17584_17629[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (14))){
var state_17555__$1 = state_17555;
var statearr_17588_17630 = state_17555__$1;
(statearr_17588_17630[(2)] = null);

(statearr_17588_17630[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (16))){
var inst_17510 = (state_17555[(10)]);
var inst_17514 = cljs.core.chunk_first(inst_17510);
var inst_17515 = cljs.core.chunk_rest(inst_17510);
var inst_17516 = cljs.core.count(inst_17514);
var inst_17496 = inst_17515;
var inst_17497 = inst_17514;
var inst_17498 = inst_17516;
var inst_17499 = (0);
var state_17555__$1 = (function (){var statearr_17589 = state_17555;
(statearr_17589[(12)] = inst_17499);

(statearr_17589[(13)] = inst_17498);

(statearr_17589[(15)] = inst_17497);

(statearr_17589[(16)] = inst_17496);

return statearr_17589;
})();
var statearr_17590_17631 = state_17555__$1;
(statearr_17590_17631[(2)] = null);

(statearr_17590_17631[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (10))){
var inst_17499 = (state_17555[(12)]);
var inst_17498 = (state_17555[(13)]);
var inst_17497 = (state_17555[(15)]);
var inst_17496 = (state_17555[(16)]);
var inst_17504 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17497,inst_17499);
var inst_17505 = cljs.core.async.muxch_STAR_(inst_17504);
var inst_17506 = cljs.core.async.close_BANG_(inst_17505);
var inst_17507 = (inst_17499 + (1));
var tmp17585 = inst_17498;
var tmp17586 = inst_17497;
var tmp17587 = inst_17496;
var inst_17496__$1 = tmp17587;
var inst_17497__$1 = tmp17586;
var inst_17498__$1 = tmp17585;
var inst_17499__$1 = inst_17507;
var state_17555__$1 = (function (){var statearr_17591 = state_17555;
(statearr_17591[(12)] = inst_17499__$1);

(statearr_17591[(13)] = inst_17498__$1);

(statearr_17591[(15)] = inst_17497__$1);

(statearr_17591[(17)] = inst_17506);

(statearr_17591[(16)] = inst_17496__$1);

return statearr_17591;
})();
var statearr_17592_17632 = state_17555__$1;
(statearr_17592_17632[(2)] = null);

(statearr_17592_17632[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (18))){
var inst_17525 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17593_17633 = state_17555__$1;
(statearr_17593_17633[(2)] = inst_17525);

(statearr_17593_17633[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (8))){
var inst_17499 = (state_17555[(12)]);
var inst_17498 = (state_17555[(13)]);
var inst_17501 = (inst_17499 < inst_17498);
var inst_17502 = inst_17501;
var state_17555__$1 = state_17555;
if(cljs.core.truth_(inst_17502)){
var statearr_17594_17634 = state_17555__$1;
(statearr_17594_17634[(1)] = (10));

} else {
var statearr_17595_17635 = state_17555__$1;
(statearr_17595_17635[(1)] = (11));

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
});})(c__15628__auto___17607,mults,ensure_mult,p))
;
return ((function (switch__15504__auto__,c__15628__auto___17607,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_17599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17599[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_17599[(1)] = (1));

return statearr_17599;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_17555){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_17555);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e17600){if((e17600 instanceof Object)){
var ex__15508__auto__ = e17600;
var statearr_17601_17636 = state_17555;
(statearr_17601_17636[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17555);

return cljs.core.cst$kw$recur;
} else {
throw e17600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__17637 = state_17555;
state_17555 = G__17637;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_17555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_17555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___17607,mults,ensure_mult,p))
})();
var state__15630__auto__ = (function (){var statearr_17602 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_17602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___17607);

return statearr_17602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___17607,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args17638 = [];
var len__8009__auto___17641 = arguments.length;
var i__8010__auto___17642 = (0);
while(true){
if((i__8010__auto___17642 < len__8009__auto___17641)){
args17638.push((arguments[i__8010__auto___17642]));

var G__17643 = (i__8010__auto___17642 + (1));
i__8010__auto___17642 = G__17643;
continue;
} else {
}
break;
}

var G__17640 = args17638.length;
switch (G__17640) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17638.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args17645 = [];
var len__8009__auto___17648 = arguments.length;
var i__8010__auto___17649 = (0);
while(true){
if((i__8010__auto___17649 < len__8009__auto___17648)){
args17645.push((arguments[i__8010__auto___17649]));

var G__17650 = (i__8010__auto___17649 + (1));
i__8010__auto___17649 = G__17650;
continue;
} else {
}
break;
}

var G__17647 = args17645.length;
switch (G__17647) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17645.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args17652 = [];
var len__8009__auto___17723 = arguments.length;
var i__8010__auto___17724 = (0);
while(true){
if((i__8010__auto___17724 < len__8009__auto___17723)){
args17652.push((arguments[i__8010__auto___17724]));

var G__17725 = (i__8010__auto___17724 + (1));
i__8010__auto___17724 = G__17725;
continue;
} else {
}
break;
}

var G__17654 = args17652.length;
switch (G__17654) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17652.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15628__auto___17727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___17727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___17727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17693){
var state_val_17694 = (state_17693[(1)]);
if((state_val_17694 === (7))){
var state_17693__$1 = state_17693;
var statearr_17695_17728 = state_17693__$1;
(statearr_17695_17728[(2)] = null);

(statearr_17695_17728[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (1))){
var state_17693__$1 = state_17693;
var statearr_17696_17729 = state_17693__$1;
(statearr_17696_17729[(2)] = null);

(statearr_17696_17729[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (4))){
var inst_17657 = (state_17693[(7)]);
var inst_17659 = (inst_17657 < cnt);
var state_17693__$1 = state_17693;
if(cljs.core.truth_(inst_17659)){
var statearr_17697_17730 = state_17693__$1;
(statearr_17697_17730[(1)] = (6));

} else {
var statearr_17698_17731 = state_17693__$1;
(statearr_17698_17731[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (15))){
var inst_17689 = (state_17693[(2)]);
var state_17693__$1 = state_17693;
var statearr_17699_17732 = state_17693__$1;
(statearr_17699_17732[(2)] = inst_17689);

(statearr_17699_17732[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (13))){
var inst_17682 = cljs.core.async.close_BANG_(out);
var state_17693__$1 = state_17693;
var statearr_17700_17733 = state_17693__$1;
(statearr_17700_17733[(2)] = inst_17682);

(statearr_17700_17733[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (6))){
var state_17693__$1 = state_17693;
var statearr_17701_17734 = state_17693__$1;
(statearr_17701_17734[(2)] = null);

(statearr_17701_17734[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (3))){
var inst_17691 = (state_17693[(2)]);
var state_17693__$1 = state_17693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17693__$1,inst_17691);
} else {
if((state_val_17694 === (12))){
var inst_17679 = (state_17693[(8)]);
var inst_17679__$1 = (state_17693[(2)]);
var inst_17680 = cljs.core.some(cljs.core.nil_QMARK_,inst_17679__$1);
var state_17693__$1 = (function (){var statearr_17702 = state_17693;
(statearr_17702[(8)] = inst_17679__$1);

return statearr_17702;
})();
if(cljs.core.truth_(inst_17680)){
var statearr_17703_17735 = state_17693__$1;
(statearr_17703_17735[(1)] = (13));

} else {
var statearr_17704_17736 = state_17693__$1;
(statearr_17704_17736[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (2))){
var inst_17656 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17657 = (0);
var state_17693__$1 = (function (){var statearr_17705 = state_17693;
(statearr_17705[(9)] = inst_17656);

(statearr_17705[(7)] = inst_17657);

return statearr_17705;
})();
var statearr_17706_17737 = state_17693__$1;
(statearr_17706_17737[(2)] = null);

(statearr_17706_17737[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (11))){
var inst_17657 = (state_17693[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17693,(10),Object,null,(9));
var inst_17666 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17657) : chs__$1.call(null,inst_17657));
var inst_17667 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17657) : done.call(null,inst_17657));
var inst_17668 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17666,inst_17667);
var state_17693__$1 = state_17693;
var statearr_17707_17738 = state_17693__$1;
(statearr_17707_17738[(2)] = inst_17668);


cljs.core.async.impl.ioc_helpers.process_exception(state_17693__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (9))){
var inst_17657 = (state_17693[(7)]);
var inst_17670 = (state_17693[(2)]);
var inst_17671 = (inst_17657 + (1));
var inst_17657__$1 = inst_17671;
var state_17693__$1 = (function (){var statearr_17708 = state_17693;
(statearr_17708[(10)] = inst_17670);

(statearr_17708[(7)] = inst_17657__$1);

return statearr_17708;
})();
var statearr_17709_17739 = state_17693__$1;
(statearr_17709_17739[(2)] = null);

(statearr_17709_17739[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (5))){
var inst_17677 = (state_17693[(2)]);
var state_17693__$1 = (function (){var statearr_17710 = state_17693;
(statearr_17710[(11)] = inst_17677);

return statearr_17710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17693__$1,(12),dchan);
} else {
if((state_val_17694 === (14))){
var inst_17679 = (state_17693[(8)]);
var inst_17684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17679);
var state_17693__$1 = state_17693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17693__$1,(16),out,inst_17684);
} else {
if((state_val_17694 === (16))){
var inst_17686 = (state_17693[(2)]);
var state_17693__$1 = (function (){var statearr_17711 = state_17693;
(statearr_17711[(12)] = inst_17686);

return statearr_17711;
})();
var statearr_17712_17740 = state_17693__$1;
(statearr_17712_17740[(2)] = null);

(statearr_17712_17740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (10))){
var inst_17661 = (state_17693[(2)]);
var inst_17662 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17693__$1 = (function (){var statearr_17713 = state_17693;
(statearr_17713[(13)] = inst_17661);

return statearr_17713;
})();
var statearr_17714_17741 = state_17693__$1;
(statearr_17714_17741[(2)] = inst_17662);


cljs.core.async.impl.ioc_helpers.process_exception(state_17693__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17694 === (8))){
var inst_17675 = (state_17693[(2)]);
var state_17693__$1 = state_17693;
var statearr_17715_17742 = state_17693__$1;
(statearr_17715_17742[(2)] = inst_17675);

(statearr_17715_17742[(1)] = (5));


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
});})(c__15628__auto___17727,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15504__auto__,c__15628__auto___17727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_17719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17719[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_17719[(1)] = (1));

return statearr_17719;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_17693){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_17693);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e17720){if((e17720 instanceof Object)){
var ex__15508__auto__ = e17720;
var statearr_17721_17743 = state_17693;
(statearr_17721_17743[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17693);

return cljs.core.cst$kw$recur;
} else {
throw e17720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__17744 = state_17693;
state_17693 = G__17744;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_17693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_17693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___17727,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15630__auto__ = (function (){var statearr_17722 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_17722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___17727);

return statearr_17722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___17727,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args17746 = [];
var len__8009__auto___17804 = arguments.length;
var i__8010__auto___17805 = (0);
while(true){
if((i__8010__auto___17805 < len__8009__auto___17804)){
args17746.push((arguments[i__8010__auto___17805]));

var G__17806 = (i__8010__auto___17805 + (1));
i__8010__auto___17805 = G__17806;
continue;
} else {
}
break;
}

var G__17748 = args17746.length;
switch (G__17748) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17746.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15628__auto___17808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___17808,out){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___17808,out){
return (function (state_17780){
var state_val_17781 = (state_17780[(1)]);
if((state_val_17781 === (7))){
var inst_17760 = (state_17780[(7)]);
var inst_17759 = (state_17780[(8)]);
var inst_17759__$1 = (state_17780[(2)]);
var inst_17760__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17759__$1,(0),null);
var inst_17761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17759__$1,(1),null);
var inst_17762 = (inst_17760__$1 == null);
var state_17780__$1 = (function (){var statearr_17782 = state_17780;
(statearr_17782[(9)] = inst_17761);

(statearr_17782[(7)] = inst_17760__$1);

(statearr_17782[(8)] = inst_17759__$1);

return statearr_17782;
})();
if(cljs.core.truth_(inst_17762)){
var statearr_17783_17809 = state_17780__$1;
(statearr_17783_17809[(1)] = (8));

} else {
var statearr_17784_17810 = state_17780__$1;
(statearr_17784_17810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (1))){
var inst_17749 = cljs.core.vec(chs);
var inst_17750 = inst_17749;
var state_17780__$1 = (function (){var statearr_17785 = state_17780;
(statearr_17785[(10)] = inst_17750);

return statearr_17785;
})();
var statearr_17786_17811 = state_17780__$1;
(statearr_17786_17811[(2)] = null);

(statearr_17786_17811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (4))){
var inst_17750 = (state_17780[(10)]);
var state_17780__$1 = state_17780;
return cljs.core.async.ioc_alts_BANG_(state_17780__$1,(7),inst_17750);
} else {
if((state_val_17781 === (6))){
var inst_17776 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
var statearr_17787_17812 = state_17780__$1;
(statearr_17787_17812[(2)] = inst_17776);

(statearr_17787_17812[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (3))){
var inst_17778 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17780__$1,inst_17778);
} else {
if((state_val_17781 === (2))){
var inst_17750 = (state_17780[(10)]);
var inst_17752 = cljs.core.count(inst_17750);
var inst_17753 = (inst_17752 > (0));
var state_17780__$1 = state_17780;
if(cljs.core.truth_(inst_17753)){
var statearr_17789_17813 = state_17780__$1;
(statearr_17789_17813[(1)] = (4));

} else {
var statearr_17790_17814 = state_17780__$1;
(statearr_17790_17814[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (11))){
var inst_17750 = (state_17780[(10)]);
var inst_17769 = (state_17780[(2)]);
var tmp17788 = inst_17750;
var inst_17750__$1 = tmp17788;
var state_17780__$1 = (function (){var statearr_17791 = state_17780;
(statearr_17791[(10)] = inst_17750__$1);

(statearr_17791[(11)] = inst_17769);

return statearr_17791;
})();
var statearr_17792_17815 = state_17780__$1;
(statearr_17792_17815[(2)] = null);

(statearr_17792_17815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (9))){
var inst_17760 = (state_17780[(7)]);
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17780__$1,(11),out,inst_17760);
} else {
if((state_val_17781 === (5))){
var inst_17774 = cljs.core.async.close_BANG_(out);
var state_17780__$1 = state_17780;
var statearr_17793_17816 = state_17780__$1;
(statearr_17793_17816[(2)] = inst_17774);

(statearr_17793_17816[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (10))){
var inst_17772 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
var statearr_17794_17817 = state_17780__$1;
(statearr_17794_17817[(2)] = inst_17772);

(statearr_17794_17817[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17781 === (8))){
var inst_17761 = (state_17780[(9)]);
var inst_17750 = (state_17780[(10)]);
var inst_17760 = (state_17780[(7)]);
var inst_17759 = (state_17780[(8)]);
var inst_17764 = (function (){var cs = inst_17750;
var vec__17755 = inst_17759;
var v = inst_17760;
var c = inst_17761;
return ((function (cs,vec__17755,v,c,inst_17761,inst_17750,inst_17760,inst_17759,state_val_17781,c__15628__auto___17808,out){
return (function (p1__17745_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17745_SHARP_);
});
;})(cs,vec__17755,v,c,inst_17761,inst_17750,inst_17760,inst_17759,state_val_17781,c__15628__auto___17808,out))
})();
var inst_17765 = cljs.core.filterv(inst_17764,inst_17750);
var inst_17750__$1 = inst_17765;
var state_17780__$1 = (function (){var statearr_17795 = state_17780;
(statearr_17795[(10)] = inst_17750__$1);

return statearr_17795;
})();
var statearr_17796_17818 = state_17780__$1;
(statearr_17796_17818[(2)] = null);

(statearr_17796_17818[(1)] = (2));


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
});})(c__15628__auto___17808,out))
;
return ((function (switch__15504__auto__,c__15628__auto___17808,out){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_17800 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17800[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_17800[(1)] = (1));

return statearr_17800;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_17780){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_17780);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e17801){if((e17801 instanceof Object)){
var ex__15508__auto__ = e17801;
var statearr_17802_17819 = state_17780;
(statearr_17802_17819[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17780);

return cljs.core.cst$kw$recur;
} else {
throw e17801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__17820 = state_17780;
state_17780 = G__17820;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_17780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_17780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___17808,out))
})();
var state__15630__auto__ = (function (){var statearr_17803 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_17803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___17808);

return statearr_17803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___17808,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17821 = [];
var len__8009__auto___17870 = arguments.length;
var i__8010__auto___17871 = (0);
while(true){
if((i__8010__auto___17871 < len__8009__auto___17870)){
args17821.push((arguments[i__8010__auto___17871]));

var G__17872 = (i__8010__auto___17871 + (1));
i__8010__auto___17871 = G__17872;
continue;
} else {
}
break;
}

var G__17823 = args17821.length;
switch (G__17823) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17821.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15628__auto___17874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___17874,out){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___17874,out){
return (function (state_17847){
var state_val_17848 = (state_17847[(1)]);
if((state_val_17848 === (7))){
var inst_17829 = (state_17847[(7)]);
var inst_17829__$1 = (state_17847[(2)]);
var inst_17830 = (inst_17829__$1 == null);
var inst_17831 = cljs.core.not(inst_17830);
var state_17847__$1 = (function (){var statearr_17849 = state_17847;
(statearr_17849[(7)] = inst_17829__$1);

return statearr_17849;
})();
if(inst_17831){
var statearr_17850_17875 = state_17847__$1;
(statearr_17850_17875[(1)] = (8));

} else {
var statearr_17851_17876 = state_17847__$1;
(statearr_17851_17876[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (1))){
var inst_17824 = (0);
var state_17847__$1 = (function (){var statearr_17852 = state_17847;
(statearr_17852[(8)] = inst_17824);

return statearr_17852;
})();
var statearr_17853_17877 = state_17847__$1;
(statearr_17853_17877[(2)] = null);

(statearr_17853_17877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (4))){
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17847__$1,(7),ch);
} else {
if((state_val_17848 === (6))){
var inst_17842 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17854_17878 = state_17847__$1;
(statearr_17854_17878[(2)] = inst_17842);

(statearr_17854_17878[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (3))){
var inst_17844 = (state_17847[(2)]);
var inst_17845 = cljs.core.async.close_BANG_(out);
var state_17847__$1 = (function (){var statearr_17855 = state_17847;
(statearr_17855[(9)] = inst_17844);

return statearr_17855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17847__$1,inst_17845);
} else {
if((state_val_17848 === (2))){
var inst_17824 = (state_17847[(8)]);
var inst_17826 = (inst_17824 < n);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17826)){
var statearr_17856_17879 = state_17847__$1;
(statearr_17856_17879[(1)] = (4));

} else {
var statearr_17857_17880 = state_17847__$1;
(statearr_17857_17880[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (11))){
var inst_17824 = (state_17847[(8)]);
var inst_17834 = (state_17847[(2)]);
var inst_17835 = (inst_17824 + (1));
var inst_17824__$1 = inst_17835;
var state_17847__$1 = (function (){var statearr_17858 = state_17847;
(statearr_17858[(10)] = inst_17834);

(statearr_17858[(8)] = inst_17824__$1);

return statearr_17858;
})();
var statearr_17859_17881 = state_17847__$1;
(statearr_17859_17881[(2)] = null);

(statearr_17859_17881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (9))){
var state_17847__$1 = state_17847;
var statearr_17860_17882 = state_17847__$1;
(statearr_17860_17882[(2)] = null);

(statearr_17860_17882[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (5))){
var state_17847__$1 = state_17847;
var statearr_17861_17883 = state_17847__$1;
(statearr_17861_17883[(2)] = null);

(statearr_17861_17883[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (10))){
var inst_17839 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17862_17884 = state_17847__$1;
(statearr_17862_17884[(2)] = inst_17839);

(statearr_17862_17884[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (8))){
var inst_17829 = (state_17847[(7)]);
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17847__$1,(11),out,inst_17829);
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
});})(c__15628__auto___17874,out))
;
return ((function (switch__15504__auto__,c__15628__auto___17874,out){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_17866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17866[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_17866[(1)] = (1));

return statearr_17866;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_17847){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_17847);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e17867){if((e17867 instanceof Object)){
var ex__15508__auto__ = e17867;
var statearr_17868_17885 = state_17847;
(statearr_17868_17885[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17847);

return cljs.core.cst$kw$recur;
} else {
throw e17867;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__17886 = state_17847;
state_17847 = G__17886;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_17847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_17847);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___17874,out))
})();
var state__15630__auto__ = (function (){var statearr_17869 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_17869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___17874);

return statearr_17869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___17874,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17896 = (function (f,ch,meta17897){
this.f = f;
this.ch = ch;
this.meta17897 = meta17897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17898,meta17897__$1){
var self__ = this;
var _17898__$1 = this;
return (new cljs.core.async.t_cljs$core$async17896(self__.f,self__.ch,meta17897__$1));
});

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17898){
var self__ = this;
var _17898__$1 = this;
return self__.meta17897;
});

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17899 = (function (f,ch,meta17897,_,fn1,meta17900){
this.f = f;
this.ch = ch;
this.meta17897 = meta17897;
this._ = _;
this.fn1 = fn1;
this.meta17900 = meta17900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17901,meta17900__$1){
var self__ = this;
var _17901__$1 = this;
return (new cljs.core.async.t_cljs$core$async17899(self__.f,self__.ch,self__.meta17897,self__._,self__.fn1,meta17900__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17901){
var self__ = this;
var _17901__$1 = this;
return self__.meta17900;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17887_SHARP_){
var G__17902 = (((p1__17887_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17887_SHARP_) : self__.f.call(null,p1__17887_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17902) : f1.call(null,G__17902));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17899.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17897,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17896], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17900], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17899";

cljs.core.async.t_cljs$core$async17899.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async17899");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17899 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17899(f__$1,ch__$1,meta17897__$1,___$2,fn1__$1,meta17900){
return (new cljs.core.async.t_cljs$core$async17899(f__$1,ch__$1,meta17897__$1,___$2,fn1__$1,meta17900));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17899(self__.f,self__.ch,self__.meta17897,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6884__auto__ = ret;
if(cljs.core.truth_(and__6884__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6884__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17903 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17903) : self__.f.call(null,G__17903));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17897], null);
});

cljs.core.async.t_cljs$core$async17896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17896";

cljs.core.async.t_cljs$core$async17896.cljs$lang$ctorPrWriter = (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async17896");
});

cljs.core.async.__GT_t_cljs$core$async17896 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17896(f__$1,ch__$1,meta17897){
return (new cljs.core.async.t_cljs$core$async17896(f__$1,ch__$1,meta17897));
});

}

return (new cljs.core.async.t_cljs$core$async17896(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17907 = (function (f,ch,meta17908){
this.f = f;
this.ch = ch;
this.meta17908 = meta17908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17909,meta17908__$1){
var self__ = this;
var _17909__$1 = this;
return (new cljs.core.async.t_cljs$core$async17907(self__.f,self__.ch,meta17908__$1));
});

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17909){
var self__ = this;
var _17909__$1 = this;
return self__.meta17908;
});

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17908], null);
});

cljs.core.async.t_cljs$core$async17907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17907";

cljs.core.async.t_cljs$core$async17907.cljs$lang$ctorPrWriter = (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async17907");
});

cljs.core.async.__GT_t_cljs$core$async17907 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17907(f__$1,ch__$1,meta17908){
return (new cljs.core.async.t_cljs$core$async17907(f__$1,ch__$1,meta17908));
});

}

return (new cljs.core.async.t_cljs$core$async17907(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17913 = (function (p,ch,meta17914){
this.p = p;
this.ch = ch;
this.meta17914 = meta17914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17915,meta17914__$1){
var self__ = this;
var _17915__$1 = this;
return (new cljs.core.async.t_cljs$core$async17913(self__.p,self__.ch,meta17914__$1));
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17915){
var self__ = this;
var _17915__$1 = this;
return self__.meta17914;
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17914], null);
});

cljs.core.async.t_cljs$core$async17913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17913";

cljs.core.async.t_cljs$core$async17913.cljs$lang$ctorPrWriter = (function (this__7507__auto__,writer__7508__auto__,opt__7509__auto__){
return cljs.core._write(writer__7508__auto__,"cljs.core.async/t_cljs$core$async17913");
});

cljs.core.async.__GT_t_cljs$core$async17913 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17913(p__$1,ch__$1,meta17914){
return (new cljs.core.async.t_cljs$core$async17913(p__$1,ch__$1,meta17914));
});

}

return (new cljs.core.async.t_cljs$core$async17913(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17916 = [];
var len__8009__auto___17960 = arguments.length;
var i__8010__auto___17961 = (0);
while(true){
if((i__8010__auto___17961 < len__8009__auto___17960)){
args17916.push((arguments[i__8010__auto___17961]));

var G__17962 = (i__8010__auto___17961 + (1));
i__8010__auto___17961 = G__17962;
continue;
} else {
}
break;
}

var G__17918 = args17916.length;
switch (G__17918) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17916.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15628__auto___17964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___17964,out){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___17964,out){
return (function (state_17939){
var state_val_17940 = (state_17939[(1)]);
if((state_val_17940 === (7))){
var inst_17935 = (state_17939[(2)]);
var state_17939__$1 = state_17939;
var statearr_17941_17965 = state_17939__$1;
(statearr_17941_17965[(2)] = inst_17935);

(statearr_17941_17965[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (1))){
var state_17939__$1 = state_17939;
var statearr_17942_17966 = state_17939__$1;
(statearr_17942_17966[(2)] = null);

(statearr_17942_17966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (4))){
var inst_17921 = (state_17939[(7)]);
var inst_17921__$1 = (state_17939[(2)]);
var inst_17922 = (inst_17921__$1 == null);
var state_17939__$1 = (function (){var statearr_17943 = state_17939;
(statearr_17943[(7)] = inst_17921__$1);

return statearr_17943;
})();
if(cljs.core.truth_(inst_17922)){
var statearr_17944_17967 = state_17939__$1;
(statearr_17944_17967[(1)] = (5));

} else {
var statearr_17945_17968 = state_17939__$1;
(statearr_17945_17968[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (6))){
var inst_17921 = (state_17939[(7)]);
var inst_17926 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17921) : p.call(null,inst_17921));
var state_17939__$1 = state_17939;
if(cljs.core.truth_(inst_17926)){
var statearr_17946_17969 = state_17939__$1;
(statearr_17946_17969[(1)] = (8));

} else {
var statearr_17947_17970 = state_17939__$1;
(statearr_17947_17970[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (3))){
var inst_17937 = (state_17939[(2)]);
var state_17939__$1 = state_17939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17939__$1,inst_17937);
} else {
if((state_val_17940 === (2))){
var state_17939__$1 = state_17939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17939__$1,(4),ch);
} else {
if((state_val_17940 === (11))){
var inst_17929 = (state_17939[(2)]);
var state_17939__$1 = state_17939;
var statearr_17948_17971 = state_17939__$1;
(statearr_17948_17971[(2)] = inst_17929);

(statearr_17948_17971[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (9))){
var state_17939__$1 = state_17939;
var statearr_17949_17972 = state_17939__$1;
(statearr_17949_17972[(2)] = null);

(statearr_17949_17972[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (5))){
var inst_17924 = cljs.core.async.close_BANG_(out);
var state_17939__$1 = state_17939;
var statearr_17950_17973 = state_17939__$1;
(statearr_17950_17973[(2)] = inst_17924);

(statearr_17950_17973[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (10))){
var inst_17932 = (state_17939[(2)]);
var state_17939__$1 = (function (){var statearr_17951 = state_17939;
(statearr_17951[(8)] = inst_17932);

return statearr_17951;
})();
var statearr_17952_17974 = state_17939__$1;
(statearr_17952_17974[(2)] = null);

(statearr_17952_17974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17940 === (8))){
var inst_17921 = (state_17939[(7)]);
var state_17939__$1 = state_17939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17939__$1,(11),out,inst_17921);
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
});})(c__15628__auto___17964,out))
;
return ((function (switch__15504__auto__,c__15628__auto___17964,out){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_17956 = [null,null,null,null,null,null,null,null,null];
(statearr_17956[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_17956[(1)] = (1));

return statearr_17956;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_17939){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_17939);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e17957){if((e17957 instanceof Object)){
var ex__15508__auto__ = e17957;
var statearr_17958_17975 = state_17939;
(statearr_17958_17975[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17939);

return cljs.core.cst$kw$recur;
} else {
throw e17957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__17976 = state_17939;
state_17939 = G__17976;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_17939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_17939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___17964,out))
})();
var state__15630__auto__ = (function (){var statearr_17959 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_17959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___17964);

return statearr_17959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___17964,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17977 = [];
var len__8009__auto___17980 = arguments.length;
var i__8010__auto___17981 = (0);
while(true){
if((i__8010__auto___17981 < len__8009__auto___17980)){
args17977.push((arguments[i__8010__auto___17981]));

var G__17982 = (i__8010__auto___17981 + (1));
i__8010__auto___17981 = G__17982;
continue;
} else {
}
break;
}

var G__17979 = args17977.length;
switch (G__17979) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17977.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15628__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto__){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto__){
return (function (state_18149){
var state_val_18150 = (state_18149[(1)]);
if((state_val_18150 === (7))){
var inst_18145 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18151_18192 = state_18149__$1;
(statearr_18151_18192[(2)] = inst_18145);

(statearr_18151_18192[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (20))){
var inst_18115 = (state_18149[(7)]);
var inst_18126 = (state_18149[(2)]);
var inst_18127 = cljs.core.next(inst_18115);
var inst_18101 = inst_18127;
var inst_18102 = null;
var inst_18103 = (0);
var inst_18104 = (0);
var state_18149__$1 = (function (){var statearr_18152 = state_18149;
(statearr_18152[(8)] = inst_18104);

(statearr_18152[(9)] = inst_18126);

(statearr_18152[(10)] = inst_18101);

(statearr_18152[(11)] = inst_18102);

(statearr_18152[(12)] = inst_18103);

return statearr_18152;
})();
var statearr_18153_18193 = state_18149__$1;
(statearr_18153_18193[(2)] = null);

(statearr_18153_18193[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (1))){
var state_18149__$1 = state_18149;
var statearr_18154_18194 = state_18149__$1;
(statearr_18154_18194[(2)] = null);

(statearr_18154_18194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (4))){
var inst_18090 = (state_18149[(13)]);
var inst_18090__$1 = (state_18149[(2)]);
var inst_18091 = (inst_18090__$1 == null);
var state_18149__$1 = (function (){var statearr_18155 = state_18149;
(statearr_18155[(13)] = inst_18090__$1);

return statearr_18155;
})();
if(cljs.core.truth_(inst_18091)){
var statearr_18156_18195 = state_18149__$1;
(statearr_18156_18195[(1)] = (5));

} else {
var statearr_18157_18196 = state_18149__$1;
(statearr_18157_18196[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (15))){
var state_18149__$1 = state_18149;
var statearr_18161_18197 = state_18149__$1;
(statearr_18161_18197[(2)] = null);

(statearr_18161_18197[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (21))){
var state_18149__$1 = state_18149;
var statearr_18162_18198 = state_18149__$1;
(statearr_18162_18198[(2)] = null);

(statearr_18162_18198[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (13))){
var inst_18104 = (state_18149[(8)]);
var inst_18101 = (state_18149[(10)]);
var inst_18102 = (state_18149[(11)]);
var inst_18103 = (state_18149[(12)]);
var inst_18111 = (state_18149[(2)]);
var inst_18112 = (inst_18104 + (1));
var tmp18158 = inst_18101;
var tmp18159 = inst_18102;
var tmp18160 = inst_18103;
var inst_18101__$1 = tmp18158;
var inst_18102__$1 = tmp18159;
var inst_18103__$1 = tmp18160;
var inst_18104__$1 = inst_18112;
var state_18149__$1 = (function (){var statearr_18163 = state_18149;
(statearr_18163[(8)] = inst_18104__$1);

(statearr_18163[(10)] = inst_18101__$1);

(statearr_18163[(14)] = inst_18111);

(statearr_18163[(11)] = inst_18102__$1);

(statearr_18163[(12)] = inst_18103__$1);

return statearr_18163;
})();
var statearr_18164_18199 = state_18149__$1;
(statearr_18164_18199[(2)] = null);

(statearr_18164_18199[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (22))){
var state_18149__$1 = state_18149;
var statearr_18165_18200 = state_18149__$1;
(statearr_18165_18200[(2)] = null);

(statearr_18165_18200[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (6))){
var inst_18090 = (state_18149[(13)]);
var inst_18099 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18090) : f.call(null,inst_18090));
var inst_18100 = cljs.core.seq(inst_18099);
var inst_18101 = inst_18100;
var inst_18102 = null;
var inst_18103 = (0);
var inst_18104 = (0);
var state_18149__$1 = (function (){var statearr_18166 = state_18149;
(statearr_18166[(8)] = inst_18104);

(statearr_18166[(10)] = inst_18101);

(statearr_18166[(11)] = inst_18102);

(statearr_18166[(12)] = inst_18103);

return statearr_18166;
})();
var statearr_18167_18201 = state_18149__$1;
(statearr_18167_18201[(2)] = null);

(statearr_18167_18201[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (17))){
var inst_18115 = (state_18149[(7)]);
var inst_18119 = cljs.core.chunk_first(inst_18115);
var inst_18120 = cljs.core.chunk_rest(inst_18115);
var inst_18121 = cljs.core.count(inst_18119);
var inst_18101 = inst_18120;
var inst_18102 = inst_18119;
var inst_18103 = inst_18121;
var inst_18104 = (0);
var state_18149__$1 = (function (){var statearr_18168 = state_18149;
(statearr_18168[(8)] = inst_18104);

(statearr_18168[(10)] = inst_18101);

(statearr_18168[(11)] = inst_18102);

(statearr_18168[(12)] = inst_18103);

return statearr_18168;
})();
var statearr_18169_18202 = state_18149__$1;
(statearr_18169_18202[(2)] = null);

(statearr_18169_18202[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (3))){
var inst_18147 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18149__$1,inst_18147);
} else {
if((state_val_18150 === (12))){
var inst_18135 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18170_18203 = state_18149__$1;
(statearr_18170_18203[(2)] = inst_18135);

(statearr_18170_18203[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (2))){
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18149__$1,(4),in$);
} else {
if((state_val_18150 === (23))){
var inst_18143 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18171_18204 = state_18149__$1;
(statearr_18171_18204[(2)] = inst_18143);

(statearr_18171_18204[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (19))){
var inst_18130 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18172_18205 = state_18149__$1;
(statearr_18172_18205[(2)] = inst_18130);

(statearr_18172_18205[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (11))){
var inst_18101 = (state_18149[(10)]);
var inst_18115 = (state_18149[(7)]);
var inst_18115__$1 = cljs.core.seq(inst_18101);
var state_18149__$1 = (function (){var statearr_18173 = state_18149;
(statearr_18173[(7)] = inst_18115__$1);

return statearr_18173;
})();
if(inst_18115__$1){
var statearr_18174_18206 = state_18149__$1;
(statearr_18174_18206[(1)] = (14));

} else {
var statearr_18175_18207 = state_18149__$1;
(statearr_18175_18207[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (9))){
var inst_18137 = (state_18149[(2)]);
var inst_18138 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18149__$1 = (function (){var statearr_18176 = state_18149;
(statearr_18176[(15)] = inst_18137);

return statearr_18176;
})();
if(cljs.core.truth_(inst_18138)){
var statearr_18177_18208 = state_18149__$1;
(statearr_18177_18208[(1)] = (21));

} else {
var statearr_18178_18209 = state_18149__$1;
(statearr_18178_18209[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (5))){
var inst_18093 = cljs.core.async.close_BANG_(out);
var state_18149__$1 = state_18149;
var statearr_18179_18210 = state_18149__$1;
(statearr_18179_18210[(2)] = inst_18093);

(statearr_18179_18210[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (14))){
var inst_18115 = (state_18149[(7)]);
var inst_18117 = cljs.core.chunked_seq_QMARK_(inst_18115);
var state_18149__$1 = state_18149;
if(inst_18117){
var statearr_18180_18211 = state_18149__$1;
(statearr_18180_18211[(1)] = (17));

} else {
var statearr_18181_18212 = state_18149__$1;
(statearr_18181_18212[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (16))){
var inst_18133 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18182_18213 = state_18149__$1;
(statearr_18182_18213[(2)] = inst_18133);

(statearr_18182_18213[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18150 === (10))){
var inst_18104 = (state_18149[(8)]);
var inst_18102 = (state_18149[(11)]);
var inst_18109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18102,inst_18104);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18149__$1,(13),out,inst_18109);
} else {
if((state_val_18150 === (18))){
var inst_18115 = (state_18149[(7)]);
var inst_18124 = cljs.core.first(inst_18115);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18149__$1,(20),out,inst_18124);
} else {
if((state_val_18150 === (8))){
var inst_18104 = (state_18149[(8)]);
var inst_18103 = (state_18149[(12)]);
var inst_18106 = (inst_18104 < inst_18103);
var inst_18107 = inst_18106;
var state_18149__$1 = state_18149;
if(cljs.core.truth_(inst_18107)){
var statearr_18183_18214 = state_18149__$1;
(statearr_18183_18214[(1)] = (10));

} else {
var statearr_18184_18215 = state_18149__$1;
(statearr_18184_18215[(1)] = (11));

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
});})(c__15628__auto__))
;
return ((function (switch__15504__auto__,c__15628__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15505__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15505__auto____0 = (function (){
var statearr_18188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18188[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15505__auto__);

(statearr_18188[(1)] = (1));

return statearr_18188;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15505__auto____1 = (function (state_18149){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18149);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18189){if((e18189 instanceof Object)){
var ex__15508__auto__ = e18189;
var statearr_18190_18216 = state_18149;
(statearr_18190_18216[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18149);

return cljs.core.cst$kw$recur;
} else {
throw e18189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18217 = state_18149;
state_18149 = G__18217;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15505__auto__ = function(state_18149){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15505__auto____1.call(this,state_18149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15505__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15505__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto__))
})();
var state__15630__auto__ = (function (){var statearr_18191 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto__);

return statearr_18191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto__))
);

return c__15628__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18218 = [];
var len__8009__auto___18221 = arguments.length;
var i__8010__auto___18222 = (0);
while(true){
if((i__8010__auto___18222 < len__8009__auto___18221)){
args18218.push((arguments[i__8010__auto___18222]));

var G__18223 = (i__8010__auto___18222 + (1));
i__8010__auto___18222 = G__18223;
continue;
} else {
}
break;
}

var G__18220 = args18218.length;
switch (G__18220) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18218.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18225 = [];
var len__8009__auto___18228 = arguments.length;
var i__8010__auto___18229 = (0);
while(true){
if((i__8010__auto___18229 < len__8009__auto___18228)){
args18225.push((arguments[i__8010__auto___18229]));

var G__18230 = (i__8010__auto___18229 + (1));
i__8010__auto___18229 = G__18230;
continue;
} else {
}
break;
}

var G__18227 = args18225.length;
switch (G__18227) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18225.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18232 = [];
var len__8009__auto___18283 = arguments.length;
var i__8010__auto___18284 = (0);
while(true){
if((i__8010__auto___18284 < len__8009__auto___18283)){
args18232.push((arguments[i__8010__auto___18284]));

var G__18285 = (i__8010__auto___18284 + (1));
i__8010__auto___18284 = G__18285;
continue;
} else {
}
break;
}

var G__18234 = args18232.length;
switch (G__18234) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18232.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15628__auto___18287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___18287,out){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___18287,out){
return (function (state_18258){
var state_val_18259 = (state_18258[(1)]);
if((state_val_18259 === (7))){
var inst_18253 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
var statearr_18260_18288 = state_18258__$1;
(statearr_18260_18288[(2)] = inst_18253);

(statearr_18260_18288[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18259 === (1))){
var inst_18235 = null;
var state_18258__$1 = (function (){var statearr_18261 = state_18258;
(statearr_18261[(7)] = inst_18235);

return statearr_18261;
})();
var statearr_18262_18289 = state_18258__$1;
(statearr_18262_18289[(2)] = null);

(statearr_18262_18289[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18259 === (4))){
var inst_18238 = (state_18258[(8)]);
var inst_18238__$1 = (state_18258[(2)]);
var inst_18239 = (inst_18238__$1 == null);
var inst_18240 = cljs.core.not(inst_18239);
var state_18258__$1 = (function (){var statearr_18263 = state_18258;
(statearr_18263[(8)] = inst_18238__$1);

return statearr_18263;
})();
if(inst_18240){
var statearr_18264_18290 = state_18258__$1;
(statearr_18264_18290[(1)] = (5));

} else {
var statearr_18265_18291 = state_18258__$1;
(statearr_18265_18291[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18259 === (6))){
var state_18258__$1 = state_18258;
var statearr_18266_18292 = state_18258__$1;
(statearr_18266_18292[(2)] = null);

(statearr_18266_18292[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18259 === (3))){
var inst_18255 = (state_18258[(2)]);
var inst_18256 = cljs.core.async.close_BANG_(out);
var state_18258__$1 = (function (){var statearr_18267 = state_18258;
(statearr_18267[(9)] = inst_18255);

return statearr_18267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18258__$1,inst_18256);
} else {
if((state_val_18259 === (2))){
var state_18258__$1 = state_18258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18258__$1,(4),ch);
} else {
if((state_val_18259 === (11))){
var inst_18238 = (state_18258[(8)]);
var inst_18247 = (state_18258[(2)]);
var inst_18235 = inst_18238;
var state_18258__$1 = (function (){var statearr_18268 = state_18258;
(statearr_18268[(10)] = inst_18247);

(statearr_18268[(7)] = inst_18235);

return statearr_18268;
})();
var statearr_18269_18293 = state_18258__$1;
(statearr_18269_18293[(2)] = null);

(statearr_18269_18293[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18259 === (9))){
var inst_18238 = (state_18258[(8)]);
var state_18258__$1 = state_18258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18258__$1,(11),out,inst_18238);
} else {
if((state_val_18259 === (5))){
var inst_18238 = (state_18258[(8)]);
var inst_18235 = (state_18258[(7)]);
var inst_18242 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18238,inst_18235);
var state_18258__$1 = state_18258;
if(inst_18242){
var statearr_18271_18294 = state_18258__$1;
(statearr_18271_18294[(1)] = (8));

} else {
var statearr_18272_18295 = state_18258__$1;
(statearr_18272_18295[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18259 === (10))){
var inst_18250 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
var statearr_18273_18296 = state_18258__$1;
(statearr_18273_18296[(2)] = inst_18250);

(statearr_18273_18296[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18259 === (8))){
var inst_18235 = (state_18258[(7)]);
var tmp18270 = inst_18235;
var inst_18235__$1 = tmp18270;
var state_18258__$1 = (function (){var statearr_18274 = state_18258;
(statearr_18274[(7)] = inst_18235__$1);

return statearr_18274;
})();
var statearr_18275_18297 = state_18258__$1;
(statearr_18275_18297[(2)] = null);

(statearr_18275_18297[(1)] = (2));


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
});})(c__15628__auto___18287,out))
;
return ((function (switch__15504__auto__,c__15628__auto___18287,out){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_18279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18279[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_18279[(1)] = (1));

return statearr_18279;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_18258){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18258);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18280){if((e18280 instanceof Object)){
var ex__15508__auto__ = e18280;
var statearr_18281_18298 = state_18258;
(statearr_18281_18298[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18258);

return cljs.core.cst$kw$recur;
} else {
throw e18280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18299 = state_18258;
state_18258 = G__18299;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_18258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_18258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___18287,out))
})();
var state__15630__auto__ = (function (){var statearr_18282 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___18287);

return statearr_18282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___18287,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18300 = [];
var len__8009__auto___18370 = arguments.length;
var i__8010__auto___18371 = (0);
while(true){
if((i__8010__auto___18371 < len__8009__auto___18370)){
args18300.push((arguments[i__8010__auto___18371]));

var G__18372 = (i__8010__auto___18371 + (1));
i__8010__auto___18371 = G__18372;
continue;
} else {
}
break;
}

var G__18302 = args18300.length;
switch (G__18302) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18300.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15628__auto___18374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___18374,out){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___18374,out){
return (function (state_18340){
var state_val_18341 = (state_18340[(1)]);
if((state_val_18341 === (7))){
var inst_18336 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18342_18375 = state_18340__$1;
(statearr_18342_18375[(2)] = inst_18336);

(statearr_18342_18375[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (1))){
var inst_18303 = (new Array(n));
var inst_18304 = inst_18303;
var inst_18305 = (0);
var state_18340__$1 = (function (){var statearr_18343 = state_18340;
(statearr_18343[(7)] = inst_18304);

(statearr_18343[(8)] = inst_18305);

return statearr_18343;
})();
var statearr_18344_18376 = state_18340__$1;
(statearr_18344_18376[(2)] = null);

(statearr_18344_18376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (4))){
var inst_18308 = (state_18340[(9)]);
var inst_18308__$1 = (state_18340[(2)]);
var inst_18309 = (inst_18308__$1 == null);
var inst_18310 = cljs.core.not(inst_18309);
var state_18340__$1 = (function (){var statearr_18345 = state_18340;
(statearr_18345[(9)] = inst_18308__$1);

return statearr_18345;
})();
if(inst_18310){
var statearr_18346_18377 = state_18340__$1;
(statearr_18346_18377[(1)] = (5));

} else {
var statearr_18347_18378 = state_18340__$1;
(statearr_18347_18378[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (15))){
var inst_18330 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18348_18379 = state_18340__$1;
(statearr_18348_18379[(2)] = inst_18330);

(statearr_18348_18379[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (13))){
var state_18340__$1 = state_18340;
var statearr_18349_18380 = state_18340__$1;
(statearr_18349_18380[(2)] = null);

(statearr_18349_18380[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (6))){
var inst_18305 = (state_18340[(8)]);
var inst_18326 = (inst_18305 > (0));
var state_18340__$1 = state_18340;
if(cljs.core.truth_(inst_18326)){
var statearr_18350_18381 = state_18340__$1;
(statearr_18350_18381[(1)] = (12));

} else {
var statearr_18351_18382 = state_18340__$1;
(statearr_18351_18382[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (3))){
var inst_18338 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18340__$1,inst_18338);
} else {
if((state_val_18341 === (12))){
var inst_18304 = (state_18340[(7)]);
var inst_18328 = cljs.core.vec(inst_18304);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18340__$1,(15),out,inst_18328);
} else {
if((state_val_18341 === (2))){
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18340__$1,(4),ch);
} else {
if((state_val_18341 === (11))){
var inst_18320 = (state_18340[(2)]);
var inst_18321 = (new Array(n));
var inst_18304 = inst_18321;
var inst_18305 = (0);
var state_18340__$1 = (function (){var statearr_18352 = state_18340;
(statearr_18352[(7)] = inst_18304);

(statearr_18352[(8)] = inst_18305);

(statearr_18352[(10)] = inst_18320);

return statearr_18352;
})();
var statearr_18353_18383 = state_18340__$1;
(statearr_18353_18383[(2)] = null);

(statearr_18353_18383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (9))){
var inst_18304 = (state_18340[(7)]);
var inst_18318 = cljs.core.vec(inst_18304);
var state_18340__$1 = state_18340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18340__$1,(11),out,inst_18318);
} else {
if((state_val_18341 === (5))){
var inst_18304 = (state_18340[(7)]);
var inst_18305 = (state_18340[(8)]);
var inst_18308 = (state_18340[(9)]);
var inst_18313 = (state_18340[(11)]);
var inst_18312 = (inst_18304[inst_18305] = inst_18308);
var inst_18313__$1 = (inst_18305 + (1));
var inst_18314 = (inst_18313__$1 < n);
var state_18340__$1 = (function (){var statearr_18354 = state_18340;
(statearr_18354[(12)] = inst_18312);

(statearr_18354[(11)] = inst_18313__$1);

return statearr_18354;
})();
if(cljs.core.truth_(inst_18314)){
var statearr_18355_18384 = state_18340__$1;
(statearr_18355_18384[(1)] = (8));

} else {
var statearr_18356_18385 = state_18340__$1;
(statearr_18356_18385[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (14))){
var inst_18333 = (state_18340[(2)]);
var inst_18334 = cljs.core.async.close_BANG_(out);
var state_18340__$1 = (function (){var statearr_18358 = state_18340;
(statearr_18358[(13)] = inst_18333);

return statearr_18358;
})();
var statearr_18359_18386 = state_18340__$1;
(statearr_18359_18386[(2)] = inst_18334);

(statearr_18359_18386[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (10))){
var inst_18324 = (state_18340[(2)]);
var state_18340__$1 = state_18340;
var statearr_18360_18387 = state_18340__$1;
(statearr_18360_18387[(2)] = inst_18324);

(statearr_18360_18387[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18341 === (8))){
var inst_18304 = (state_18340[(7)]);
var inst_18313 = (state_18340[(11)]);
var tmp18357 = inst_18304;
var inst_18304__$1 = tmp18357;
var inst_18305 = inst_18313;
var state_18340__$1 = (function (){var statearr_18361 = state_18340;
(statearr_18361[(7)] = inst_18304__$1);

(statearr_18361[(8)] = inst_18305);

return statearr_18361;
})();
var statearr_18362_18388 = state_18340__$1;
(statearr_18362_18388[(2)] = null);

(statearr_18362_18388[(1)] = (2));


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
});})(c__15628__auto___18374,out))
;
return ((function (switch__15504__auto__,c__15628__auto___18374,out){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_18366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18366[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_18366[(1)] = (1));

return statearr_18366;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_18340){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18340);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18367){if((e18367 instanceof Object)){
var ex__15508__auto__ = e18367;
var statearr_18368_18389 = state_18340;
(statearr_18368_18389[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18340);

return cljs.core.cst$kw$recur;
} else {
throw e18367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18390 = state_18340;
state_18340 = G__18390;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_18340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_18340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___18374,out))
})();
var state__15630__auto__ = (function (){var statearr_18369 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___18374);

return statearr_18369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___18374,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18391 = [];
var len__8009__auto___18465 = arguments.length;
var i__8010__auto___18466 = (0);
while(true){
if((i__8010__auto___18466 < len__8009__auto___18465)){
args18391.push((arguments[i__8010__auto___18466]));

var G__18467 = (i__8010__auto___18466 + (1));
i__8010__auto___18466 = G__18467;
continue;
} else {
}
break;
}

var G__18393 = args18391.length;
switch (G__18393) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18391.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15628__auto___18469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15628__auto___18469,out){
return (function (){
var f__15629__auto__ = (function (){var switch__15504__auto__ = ((function (c__15628__auto___18469,out){
return (function (state_18435){
var state_val_18436 = (state_18435[(1)]);
if((state_val_18436 === (7))){
var inst_18431 = (state_18435[(2)]);
var state_18435__$1 = state_18435;
var statearr_18437_18470 = state_18435__$1;
(statearr_18437_18470[(2)] = inst_18431);

(statearr_18437_18470[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (1))){
var inst_18394 = [];
var inst_18395 = inst_18394;
var inst_18396 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18435__$1 = (function (){var statearr_18438 = state_18435;
(statearr_18438[(7)] = inst_18396);

(statearr_18438[(8)] = inst_18395);

return statearr_18438;
})();
var statearr_18439_18471 = state_18435__$1;
(statearr_18439_18471[(2)] = null);

(statearr_18439_18471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (4))){
var inst_18399 = (state_18435[(9)]);
var inst_18399__$1 = (state_18435[(2)]);
var inst_18400 = (inst_18399__$1 == null);
var inst_18401 = cljs.core.not(inst_18400);
var state_18435__$1 = (function (){var statearr_18440 = state_18435;
(statearr_18440[(9)] = inst_18399__$1);

return statearr_18440;
})();
if(inst_18401){
var statearr_18441_18472 = state_18435__$1;
(statearr_18441_18472[(1)] = (5));

} else {
var statearr_18442_18473 = state_18435__$1;
(statearr_18442_18473[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (15))){
var inst_18425 = (state_18435[(2)]);
var state_18435__$1 = state_18435;
var statearr_18443_18474 = state_18435__$1;
(statearr_18443_18474[(2)] = inst_18425);

(statearr_18443_18474[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (13))){
var state_18435__$1 = state_18435;
var statearr_18444_18475 = state_18435__$1;
(statearr_18444_18475[(2)] = null);

(statearr_18444_18475[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (6))){
var inst_18395 = (state_18435[(8)]);
var inst_18420 = inst_18395.length;
var inst_18421 = (inst_18420 > (0));
var state_18435__$1 = state_18435;
if(cljs.core.truth_(inst_18421)){
var statearr_18445_18476 = state_18435__$1;
(statearr_18445_18476[(1)] = (12));

} else {
var statearr_18446_18477 = state_18435__$1;
(statearr_18446_18477[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (3))){
var inst_18433 = (state_18435[(2)]);
var state_18435__$1 = state_18435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18435__$1,inst_18433);
} else {
if((state_val_18436 === (12))){
var inst_18395 = (state_18435[(8)]);
var inst_18423 = cljs.core.vec(inst_18395);
var state_18435__$1 = state_18435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18435__$1,(15),out,inst_18423);
} else {
if((state_val_18436 === (2))){
var state_18435__$1 = state_18435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18435__$1,(4),ch);
} else {
if((state_val_18436 === (11))){
var inst_18403 = (state_18435[(10)]);
var inst_18399 = (state_18435[(9)]);
var inst_18413 = (state_18435[(2)]);
var inst_18414 = [];
var inst_18415 = inst_18414.push(inst_18399);
var inst_18395 = inst_18414;
var inst_18396 = inst_18403;
var state_18435__$1 = (function (){var statearr_18447 = state_18435;
(statearr_18447[(7)] = inst_18396);

(statearr_18447[(11)] = inst_18415);

(statearr_18447[(8)] = inst_18395);

(statearr_18447[(12)] = inst_18413);

return statearr_18447;
})();
var statearr_18448_18478 = state_18435__$1;
(statearr_18448_18478[(2)] = null);

(statearr_18448_18478[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (9))){
var inst_18395 = (state_18435[(8)]);
var inst_18411 = cljs.core.vec(inst_18395);
var state_18435__$1 = state_18435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18435__$1,(11),out,inst_18411);
} else {
if((state_val_18436 === (5))){
var inst_18396 = (state_18435[(7)]);
var inst_18403 = (state_18435[(10)]);
var inst_18399 = (state_18435[(9)]);
var inst_18403__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18399) : f.call(null,inst_18399));
var inst_18404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18403__$1,inst_18396);
var inst_18405 = cljs.core.keyword_identical_QMARK_(inst_18396,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18406 = (inst_18404) || (inst_18405);
var state_18435__$1 = (function (){var statearr_18449 = state_18435;
(statearr_18449[(10)] = inst_18403__$1);

return statearr_18449;
})();
if(cljs.core.truth_(inst_18406)){
var statearr_18450_18479 = state_18435__$1;
(statearr_18450_18479[(1)] = (8));

} else {
var statearr_18451_18480 = state_18435__$1;
(statearr_18451_18480[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (14))){
var inst_18428 = (state_18435[(2)]);
var inst_18429 = cljs.core.async.close_BANG_(out);
var state_18435__$1 = (function (){var statearr_18453 = state_18435;
(statearr_18453[(13)] = inst_18428);

return statearr_18453;
})();
var statearr_18454_18481 = state_18435__$1;
(statearr_18454_18481[(2)] = inst_18429);

(statearr_18454_18481[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (10))){
var inst_18418 = (state_18435[(2)]);
var state_18435__$1 = state_18435;
var statearr_18455_18482 = state_18435__$1;
(statearr_18455_18482[(2)] = inst_18418);

(statearr_18455_18482[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18436 === (8))){
var inst_18403 = (state_18435[(10)]);
var inst_18395 = (state_18435[(8)]);
var inst_18399 = (state_18435[(9)]);
var inst_18408 = inst_18395.push(inst_18399);
var tmp18452 = inst_18395;
var inst_18395__$1 = tmp18452;
var inst_18396 = inst_18403;
var state_18435__$1 = (function (){var statearr_18456 = state_18435;
(statearr_18456[(7)] = inst_18396);

(statearr_18456[(14)] = inst_18408);

(statearr_18456[(8)] = inst_18395__$1);

return statearr_18456;
})();
var statearr_18457_18483 = state_18435__$1;
(statearr_18457_18483[(2)] = null);

(statearr_18457_18483[(1)] = (2));


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
});})(c__15628__auto___18469,out))
;
return ((function (switch__15504__auto__,c__15628__auto___18469,out){
return (function() {
var cljs$core$async$state_machine__15505__auto__ = null;
var cljs$core$async$state_machine__15505__auto____0 = (function (){
var statearr_18461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18461[(0)] = cljs$core$async$state_machine__15505__auto__);

(statearr_18461[(1)] = (1));

return statearr_18461;
});
var cljs$core$async$state_machine__15505__auto____1 = (function (state_18435){
while(true){
var ret_value__15506__auto__ = (function (){try{while(true){
var result__15507__auto__ = switch__15504__auto__(state_18435);
if(cljs.core.keyword_identical_QMARK_(result__15507__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15507__auto__;
}
break;
}
}catch (e18462){if((e18462 instanceof Object)){
var ex__15508__auto__ = e18462;
var statearr_18463_18484 = state_18435;
(statearr_18463_18484[(5)] = ex__15508__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18435);

return cljs.core.cst$kw$recur;
} else {
throw e18462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15506__auto__,cljs.core.cst$kw$recur)){
var G__18485 = state_18435;
state_18435 = G__18485;
continue;
} else {
return ret_value__15506__auto__;
}
break;
}
});
cljs$core$async$state_machine__15505__auto__ = function(state_18435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15505__auto____1.call(this,state_18435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15505__auto____0;
cljs$core$async$state_machine__15505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15505__auto____1;
return cljs$core$async$state_machine__15505__auto__;
})()
;})(switch__15504__auto__,c__15628__auto___18469,out))
})();
var state__15630__auto__ = (function (){var statearr_18464 = (f__15629__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15629__auto__.cljs$core$IFn$_invoke$arity$0() : f__15629__auto__.call(null));
(statearr_18464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15628__auto___18469);

return statearr_18464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15630__auto__);
});})(c__15628__auto___18469,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

