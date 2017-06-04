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
var args15079 = [];
var len__8106__auto___15085 = arguments.length;
var i__8107__auto___15086 = (0);
while(true){
if((i__8107__auto___15086 < len__8106__auto___15085)){
args15079.push((arguments[i__8107__auto___15086]));

var G__15087 = (i__8107__auto___15086 + (1));
i__8107__auto___15086 = G__15087;
continue;
} else {
}
break;
}

var G__15081 = args15079.length;
switch (G__15081) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15079.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15082 = (function (f,blockable,meta15083){
this.f = f;
this.blockable = blockable;
this.meta15083 = meta15083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15084,meta15083__$1){
var self__ = this;
var _15084__$1 = this;
return (new cljs.core.async.t_cljs$core$async15082(self__.f,self__.blockable,meta15083__$1));
});

cljs.core.async.t_cljs$core$async15082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15084){
var self__ = this;
var _15084__$1 = this;
return self__.meta15083;
});

cljs.core.async.t_cljs$core$async15082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15083], null);
});

cljs.core.async.t_cljs$core$async15082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15082";

cljs.core.async.t_cljs$core$async15082.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async15082");
});

cljs.core.async.__GT_t_cljs$core$async15082 = (function cljs$core$async$__GT_t_cljs$core$async15082(f__$1,blockable__$1,meta15083){
return (new cljs.core.async.t_cljs$core$async15082(f__$1,blockable__$1,meta15083));
});

}

return (new cljs.core.async.t_cljs$core$async15082(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args15091 = [];
var len__8106__auto___15094 = arguments.length;
var i__8107__auto___15095 = (0);
while(true){
if((i__8107__auto___15095 < len__8106__auto___15094)){
args15091.push((arguments[i__8107__auto___15095]));

var G__15096 = (i__8107__auto___15095 + (1));
i__8107__auto___15095 = G__15096;
continue;
} else {
}
break;
}

var G__15093 = args15091.length;
switch (G__15093) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15091.length)].join('')));

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
var args15098 = [];
var len__8106__auto___15101 = arguments.length;
var i__8107__auto___15102 = (0);
while(true){
if((i__8107__auto___15102 < len__8106__auto___15101)){
args15098.push((arguments[i__8107__auto___15102]));

var G__15103 = (i__8107__auto___15102 + (1));
i__8107__auto___15102 = G__15103;
continue;
} else {
}
break;
}

var G__15100 = args15098.length;
switch (G__15100) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15098.length)].join('')));

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
var args15105 = [];
var len__8106__auto___15108 = arguments.length;
var i__8107__auto___15109 = (0);
while(true){
if((i__8107__auto___15109 < len__8106__auto___15108)){
args15105.push((arguments[i__8107__auto___15109]));

var G__15110 = (i__8107__auto___15109 + (1));
i__8107__auto___15109 = G__15110;
continue;
} else {
}
break;
}

var G__15107 = args15105.length;
switch (G__15107) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15105.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15112 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15112) : fn1.call(null,val_15112));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15112,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15112) : fn1.call(null,val_15112));
});})(val_15112,ret))
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
var args15113 = [];
var len__8106__auto___15116 = arguments.length;
var i__8107__auto___15117 = (0);
while(true){
if((i__8107__auto___15117 < len__8106__auto___15116)){
args15113.push((arguments[i__8107__auto___15117]));

var G__15118 = (i__8107__auto___15117 + (1));
i__8107__auto___15117 = G__15118;
continue;
} else {
}
break;
}

var G__15115 = args15113.length;
switch (G__15115) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15113.length)].join('')));

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
var n__7916__auto___15120 = n;
var x_15121 = (0);
while(true){
if((x_15121 < n__7916__auto___15120)){
(a[x_15121] = (0));

var G__15122 = (x_15121 + (1));
x_15121 = G__15122;
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

var G__15123 = (i + (1));
i = G__15123;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async15127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15127 = (function (flag,meta15128){
this.flag = flag;
this.meta15128 = meta15128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15129,meta15128__$1){
var self__ = this;
var _15129__$1 = this;
return (new cljs.core.async.t_cljs$core$async15127(self__.flag,meta15128__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15129){
var self__ = this;
var _15129__$1 = this;
return self__.meta15128;
});})(flag))
;

cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15127.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15128], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15127";

cljs.core.async.t_cljs$core$async15127.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async15127");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15127 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15127(flag__$1,meta15128){
return (new cljs.core.async.t_cljs$core$async15127(flag__$1,meta15128));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15127(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15133 = (function (flag,cb,meta15134){
this.flag = flag;
this.cb = cb;
this.meta15134 = meta15134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15135,meta15134__$1){
var self__ = this;
var _15135__$1 = this;
return (new cljs.core.async.t_cljs$core$async15133(self__.flag,self__.cb,meta15134__$1));
});

cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15135){
var self__ = this;
var _15135__$1 = this;
return self__.meta15134;
});

cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15134], null);
});

cljs.core.async.t_cljs$core$async15133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15133";

cljs.core.async.t_cljs$core$async15133.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async15133");
});

cljs.core.async.__GT_t_cljs$core$async15133 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15133(flag__$1,cb__$1,meta15134){
return (new cljs.core.async.t_cljs$core$async15133(flag__$1,cb__$1,meta15134));
});

}

return (new cljs.core.async.t_cljs$core$async15133(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15136_SHARP_){
var G__15140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15136_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15140) : fret.call(null,G__15140));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15137_SHARP_){
var G__15141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15137_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15141) : fret.call(null,G__15141));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6993__auto__ = wport;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15142 = (i + (1));
i = G__15142;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6993__auto__ = ret;
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6981__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6981__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6981__auto__;
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
var args__8113__auto__ = [];
var len__8106__auto___15148 = arguments.length;
var i__8107__auto___15149 = (0);
while(true){
if((i__8107__auto___15149 < len__8106__auto___15148)){
args__8113__auto__.push((arguments[i__8107__auto___15149]));

var G__15150 = (i__8107__auto___15149 + (1));
i__8107__auto___15149 = G__15150;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((1) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8114__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15145){
var map__15146 = p__15145;
var map__15146__$1 = ((((!((map__15146 == null)))?((((map__15146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15146):map__15146);
var opts = map__15146__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15143){
var G__15144 = cljs.core.first(seq15143);
var seq15143__$1 = cljs.core.next(seq15143);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15144,seq15143__$1);
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
var args15151 = [];
var len__8106__auto___15201 = arguments.length;
var i__8107__auto___15202 = (0);
while(true){
if((i__8107__auto___15202 < len__8106__auto___15201)){
args15151.push((arguments[i__8107__auto___15202]));

var G__15203 = (i__8107__auto___15202 + (1));
i__8107__auto___15202 = G__15203;
continue;
} else {
}
break;
}

var G__15153 = args15151.length;
switch (G__15153) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15151.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15034__auto___15205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___15205){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___15205){
return (function (state_15177){
var state_val_15178 = (state_15177[(1)]);
if((state_val_15178 === (7))){
var inst_15173 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
var statearr_15179_15206 = state_15177__$1;
(statearr_15179_15206[(2)] = inst_15173);

(statearr_15179_15206[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (1))){
var state_15177__$1 = state_15177;
var statearr_15180_15207 = state_15177__$1;
(statearr_15180_15207[(2)] = null);

(statearr_15180_15207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (4))){
var inst_15156 = (state_15177[(7)]);
var inst_15156__$1 = (state_15177[(2)]);
var inst_15157 = (inst_15156__$1 == null);
var state_15177__$1 = (function (){var statearr_15181 = state_15177;
(statearr_15181[(7)] = inst_15156__$1);

return statearr_15181;
})();
if(cljs.core.truth_(inst_15157)){
var statearr_15182_15208 = state_15177__$1;
(statearr_15182_15208[(1)] = (5));

} else {
var statearr_15183_15209 = state_15177__$1;
(statearr_15183_15209[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (13))){
var state_15177__$1 = state_15177;
var statearr_15184_15210 = state_15177__$1;
(statearr_15184_15210[(2)] = null);

(statearr_15184_15210[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (6))){
var inst_15156 = (state_15177[(7)]);
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15177__$1,(11),to,inst_15156);
} else {
if((state_val_15178 === (3))){
var inst_15175 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15177__$1,inst_15175);
} else {
if((state_val_15178 === (12))){
var state_15177__$1 = state_15177;
var statearr_15185_15211 = state_15177__$1;
(statearr_15185_15211[(2)] = null);

(statearr_15185_15211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (2))){
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15177__$1,(4),from);
} else {
if((state_val_15178 === (11))){
var inst_15166 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
if(cljs.core.truth_(inst_15166)){
var statearr_15186_15212 = state_15177__$1;
(statearr_15186_15212[(1)] = (12));

} else {
var statearr_15187_15213 = state_15177__$1;
(statearr_15187_15213[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (9))){
var state_15177__$1 = state_15177;
var statearr_15188_15214 = state_15177__$1;
(statearr_15188_15214[(2)] = null);

(statearr_15188_15214[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (5))){
var state_15177__$1 = state_15177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15189_15215 = state_15177__$1;
(statearr_15189_15215[(1)] = (8));

} else {
var statearr_15190_15216 = state_15177__$1;
(statearr_15190_15216[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (14))){
var inst_15171 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
var statearr_15191_15217 = state_15177__$1;
(statearr_15191_15217[(2)] = inst_15171);

(statearr_15191_15217[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (10))){
var inst_15163 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
var statearr_15192_15218 = state_15177__$1;
(statearr_15192_15218[(2)] = inst_15163);

(statearr_15192_15218[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15178 === (8))){
var inst_15160 = cljs.core.async.close_BANG_(to);
var state_15177__$1 = state_15177;
var statearr_15193_15219 = state_15177__$1;
(statearr_15193_15219[(2)] = inst_15160);

(statearr_15193_15219[(1)] = (10));


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
});})(c__15034__auto___15205))
;
return ((function (switch__14910__auto__,c__15034__auto___15205){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_15197 = [null,null,null,null,null,null,null,null];
(statearr_15197[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_15197[(1)] = (1));

return statearr_15197;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_15177){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15177);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15198){if((e15198 instanceof Object)){
var ex__14914__auto__ = e15198;
var statearr_15199_15220 = state_15177;
(statearr_15199_15220[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15177);

return cljs.core.cst$kw$recur;
} else {
throw e15198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15221 = state_15177;
state_15177 = G__15221;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_15177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_15177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___15205))
})();
var state__15036__auto__ = (function (){var statearr_15200 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___15205);

return statearr_15200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___15205))
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
return (function (p__15409){
var vec__15410 = p__15409;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410,(1),null);
var job = vec__15410;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15034__auto___15596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___15596,res,vec__15410,v,p,job,jobs,results){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___15596,res,vec__15410,v,p,job,jobs,results){
return (function (state_15417){
var state_val_15418 = (state_15417[(1)]);
if((state_val_15418 === (1))){
var state_15417__$1 = state_15417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15417__$1,(2),res,v);
} else {
if((state_val_15418 === (2))){
var inst_15414 = (state_15417[(2)]);
var inst_15415 = cljs.core.async.close_BANG_(res);
var state_15417__$1 = (function (){var statearr_15419 = state_15417;
(statearr_15419[(7)] = inst_15414);

return statearr_15419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15417__$1,inst_15415);
} else {
return null;
}
}
});})(c__15034__auto___15596,res,vec__15410,v,p,job,jobs,results))
;
return ((function (switch__14910__auto__,c__15034__auto___15596,res,vec__15410,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0 = (function (){
var statearr_15423 = [null,null,null,null,null,null,null,null];
(statearr_15423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__);

(statearr_15423[(1)] = (1));

return statearr_15423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1 = (function (state_15417){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15417);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15424){if((e15424 instanceof Object)){
var ex__14914__auto__ = e15424;
var statearr_15425_15597 = state_15417;
(statearr_15425_15597[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15417);

return cljs.core.cst$kw$recur;
} else {
throw e15424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15598 = state_15417;
state_15417 = G__15598;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = function(state_15417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1.call(this,state_15417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___15596,res,vec__15410,v,p,job,jobs,results))
})();
var state__15036__auto__ = (function (){var statearr_15426 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___15596);

return statearr_15426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___15596,res,vec__15410,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15427){
var vec__15428 = p__15427;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15428,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15428,(1),null);
var job = vec__15428;
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
var n__7916__auto___15599 = n;
var __15600 = (0);
while(true){
if((__15600 < n__7916__auto___15599)){
var G__15431_15601 = type;
var G__15431_15602__$1 = (((G__15431_15601 instanceof cljs.core.Keyword))?G__15431_15601.fqn:null);
switch (G__15431_15602__$1) {
case "compute":
var c__15034__auto___15604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15600,c__15034__auto___15604,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (__15600,c__15034__auto___15604,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async){
return (function (state_15444){
var state_val_15445 = (state_15444[(1)]);
if((state_val_15445 === (1))){
var state_15444__$1 = state_15444;
var statearr_15446_15605 = state_15444__$1;
(statearr_15446_15605[(2)] = null);

(statearr_15446_15605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15445 === (2))){
var state_15444__$1 = state_15444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15444__$1,(4),jobs);
} else {
if((state_val_15445 === (3))){
var inst_15442 = (state_15444[(2)]);
var state_15444__$1 = state_15444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15444__$1,inst_15442);
} else {
if((state_val_15445 === (4))){
var inst_15434 = (state_15444[(2)]);
var inst_15435 = process(inst_15434);
var state_15444__$1 = state_15444;
if(cljs.core.truth_(inst_15435)){
var statearr_15447_15606 = state_15444__$1;
(statearr_15447_15606[(1)] = (5));

} else {
var statearr_15448_15607 = state_15444__$1;
(statearr_15448_15607[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15445 === (5))){
var state_15444__$1 = state_15444;
var statearr_15449_15608 = state_15444__$1;
(statearr_15449_15608[(2)] = null);

(statearr_15449_15608[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15445 === (6))){
var state_15444__$1 = state_15444;
var statearr_15450_15609 = state_15444__$1;
(statearr_15450_15609[(2)] = null);

(statearr_15450_15609[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15445 === (7))){
var inst_15440 = (state_15444[(2)]);
var state_15444__$1 = state_15444;
var statearr_15451_15610 = state_15444__$1;
(statearr_15451_15610[(2)] = inst_15440);

(statearr_15451_15610[(1)] = (3));


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
});})(__15600,c__15034__auto___15604,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async))
;
return ((function (__15600,switch__14910__auto__,c__15034__auto___15604,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0 = (function (){
var statearr_15455 = [null,null,null,null,null,null,null];
(statearr_15455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__);

(statearr_15455[(1)] = (1));

return statearr_15455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1 = (function (state_15444){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15444);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15456){if((e15456 instanceof Object)){
var ex__14914__auto__ = e15456;
var statearr_15457_15611 = state_15444;
(statearr_15457_15611[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15444);

return cljs.core.cst$kw$recur;
} else {
throw e15456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15612 = state_15444;
state_15444 = G__15612;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = function(state_15444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1.call(this,state_15444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__;
})()
;})(__15600,switch__14910__auto__,c__15034__auto___15604,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async))
})();
var state__15036__auto__ = (function (){var statearr_15458 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___15604);

return statearr_15458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(__15600,c__15034__auto___15604,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async))
);


break;
case "async":
var c__15034__auto___15613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15600,c__15034__auto___15613,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (__15600,c__15034__auto___15613,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async){
return (function (state_15471){
var state_val_15472 = (state_15471[(1)]);
if((state_val_15472 === (1))){
var state_15471__$1 = state_15471;
var statearr_15473_15614 = state_15471__$1;
(statearr_15473_15614[(2)] = null);

(statearr_15473_15614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (2))){
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15471__$1,(4),jobs);
} else {
if((state_val_15472 === (3))){
var inst_15469 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15471__$1,inst_15469);
} else {
if((state_val_15472 === (4))){
var inst_15461 = (state_15471[(2)]);
var inst_15462 = async(inst_15461);
var state_15471__$1 = state_15471;
if(cljs.core.truth_(inst_15462)){
var statearr_15474_15615 = state_15471__$1;
(statearr_15474_15615[(1)] = (5));

} else {
var statearr_15475_15616 = state_15471__$1;
(statearr_15475_15616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (5))){
var state_15471__$1 = state_15471;
var statearr_15476_15617 = state_15471__$1;
(statearr_15476_15617[(2)] = null);

(statearr_15476_15617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (6))){
var state_15471__$1 = state_15471;
var statearr_15477_15618 = state_15471__$1;
(statearr_15477_15618[(2)] = null);

(statearr_15477_15618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15472 === (7))){
var inst_15467 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15478_15619 = state_15471__$1;
(statearr_15478_15619[(2)] = inst_15467);

(statearr_15478_15619[(1)] = (3));


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
});})(__15600,c__15034__auto___15613,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async))
;
return ((function (__15600,switch__14910__auto__,c__15034__auto___15613,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0 = (function (){
var statearr_15482 = [null,null,null,null,null,null,null];
(statearr_15482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__);

(statearr_15482[(1)] = (1));

return statearr_15482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1 = (function (state_15471){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15471);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15483){if((e15483 instanceof Object)){
var ex__14914__auto__ = e15483;
var statearr_15484_15620 = state_15471;
(statearr_15484_15620[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15471);

return cljs.core.cst$kw$recur;
} else {
throw e15483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15621 = state_15471;
state_15471 = G__15621;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = function(state_15471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1.call(this,state_15471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__;
})()
;})(__15600,switch__14910__auto__,c__15034__auto___15613,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async))
})();
var state__15036__auto__ = (function (){var statearr_15485 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___15613);

return statearr_15485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(__15600,c__15034__auto___15613,G__15431_15601,G__15431_15602__$1,n__7916__auto___15599,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15431_15602__$1)].join('')));

}

var G__15622 = (__15600 + (1));
__15600 = G__15622;
continue;
} else {
}
break;
}

var c__15034__auto___15623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___15623,jobs,results,process,async){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___15623,jobs,results,process,async){
return (function (state_15507){
var state_val_15508 = (state_15507[(1)]);
if((state_val_15508 === (1))){
var state_15507__$1 = state_15507;
var statearr_15509_15624 = state_15507__$1;
(statearr_15509_15624[(2)] = null);

(statearr_15509_15624[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15508 === (2))){
var state_15507__$1 = state_15507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15507__$1,(4),from);
} else {
if((state_val_15508 === (3))){
var inst_15505 = (state_15507[(2)]);
var state_15507__$1 = state_15507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15507__$1,inst_15505);
} else {
if((state_val_15508 === (4))){
var inst_15488 = (state_15507[(7)]);
var inst_15488__$1 = (state_15507[(2)]);
var inst_15489 = (inst_15488__$1 == null);
var state_15507__$1 = (function (){var statearr_15510 = state_15507;
(statearr_15510[(7)] = inst_15488__$1);

return statearr_15510;
})();
if(cljs.core.truth_(inst_15489)){
var statearr_15511_15625 = state_15507__$1;
(statearr_15511_15625[(1)] = (5));

} else {
var statearr_15512_15626 = state_15507__$1;
(statearr_15512_15626[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15508 === (5))){
var inst_15491 = cljs.core.async.close_BANG_(jobs);
var state_15507__$1 = state_15507;
var statearr_15513_15627 = state_15507__$1;
(statearr_15513_15627[(2)] = inst_15491);

(statearr_15513_15627[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15508 === (6))){
var inst_15488 = (state_15507[(7)]);
var inst_15493 = (state_15507[(8)]);
var inst_15493__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15495 = [inst_15488,inst_15493__$1];
var inst_15496 = (new cljs.core.PersistentVector(null,2,(5),inst_15494,inst_15495,null));
var state_15507__$1 = (function (){var statearr_15514 = state_15507;
(statearr_15514[(8)] = inst_15493__$1);

return statearr_15514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15507__$1,(8),jobs,inst_15496);
} else {
if((state_val_15508 === (7))){
var inst_15503 = (state_15507[(2)]);
var state_15507__$1 = state_15507;
var statearr_15515_15628 = state_15507__$1;
(statearr_15515_15628[(2)] = inst_15503);

(statearr_15515_15628[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15508 === (8))){
var inst_15493 = (state_15507[(8)]);
var inst_15498 = (state_15507[(2)]);
var state_15507__$1 = (function (){var statearr_15516 = state_15507;
(statearr_15516[(9)] = inst_15498);

return statearr_15516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15507__$1,(9),results,inst_15493);
} else {
if((state_val_15508 === (9))){
var inst_15500 = (state_15507[(2)]);
var state_15507__$1 = (function (){var statearr_15517 = state_15507;
(statearr_15517[(10)] = inst_15500);

return statearr_15517;
})();
var statearr_15518_15629 = state_15507__$1;
(statearr_15518_15629[(2)] = null);

(statearr_15518_15629[(1)] = (2));


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
});})(c__15034__auto___15623,jobs,results,process,async))
;
return ((function (switch__14910__auto__,c__15034__auto___15623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0 = (function (){
var statearr_15522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__);

(statearr_15522[(1)] = (1));

return statearr_15522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1 = (function (state_15507){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15507);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15523){if((e15523 instanceof Object)){
var ex__14914__auto__ = e15523;
var statearr_15524_15630 = state_15507;
(statearr_15524_15630[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15507);

return cljs.core.cst$kw$recur;
} else {
throw e15523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15631 = state_15507;
state_15507 = G__15631;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = function(state_15507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1.call(this,state_15507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___15623,jobs,results,process,async))
})();
var state__15036__auto__ = (function (){var statearr_15525 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___15623);

return statearr_15525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___15623,jobs,results,process,async))
);


var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__,jobs,results,process,async){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__,jobs,results,process,async){
return (function (state_15563){
var state_val_15564 = (state_15563[(1)]);
if((state_val_15564 === (7))){
var inst_15559 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15565_15632 = state_15563__$1;
(statearr_15565_15632[(2)] = inst_15559);

(statearr_15565_15632[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (20))){
var state_15563__$1 = state_15563;
var statearr_15566_15633 = state_15563__$1;
(statearr_15566_15633[(2)] = null);

(statearr_15566_15633[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (1))){
var state_15563__$1 = state_15563;
var statearr_15567_15634 = state_15563__$1;
(statearr_15567_15634[(2)] = null);

(statearr_15567_15634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (4))){
var inst_15528 = (state_15563[(7)]);
var inst_15528__$1 = (state_15563[(2)]);
var inst_15529 = (inst_15528__$1 == null);
var state_15563__$1 = (function (){var statearr_15568 = state_15563;
(statearr_15568[(7)] = inst_15528__$1);

return statearr_15568;
})();
if(cljs.core.truth_(inst_15529)){
var statearr_15569_15635 = state_15563__$1;
(statearr_15569_15635[(1)] = (5));

} else {
var statearr_15570_15636 = state_15563__$1;
(statearr_15570_15636[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (15))){
var inst_15541 = (state_15563[(8)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15563__$1,(18),to,inst_15541);
} else {
if((state_val_15564 === (21))){
var inst_15554 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15571_15637 = state_15563__$1;
(statearr_15571_15637[(2)] = inst_15554);

(statearr_15571_15637[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (13))){
var inst_15556 = (state_15563[(2)]);
var state_15563__$1 = (function (){var statearr_15572 = state_15563;
(statearr_15572[(9)] = inst_15556);

return statearr_15572;
})();
var statearr_15573_15638 = state_15563__$1;
(statearr_15573_15638[(2)] = null);

(statearr_15573_15638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (6))){
var inst_15528 = (state_15563[(7)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15563__$1,(11),inst_15528);
} else {
if((state_val_15564 === (17))){
var inst_15549 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
if(cljs.core.truth_(inst_15549)){
var statearr_15574_15639 = state_15563__$1;
(statearr_15574_15639[(1)] = (19));

} else {
var statearr_15575_15640 = state_15563__$1;
(statearr_15575_15640[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (3))){
var inst_15561 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15563__$1,inst_15561);
} else {
if((state_val_15564 === (12))){
var inst_15538 = (state_15563[(10)]);
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15563__$1,(14),inst_15538);
} else {
if((state_val_15564 === (2))){
var state_15563__$1 = state_15563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15563__$1,(4),results);
} else {
if((state_val_15564 === (19))){
var state_15563__$1 = state_15563;
var statearr_15576_15641 = state_15563__$1;
(statearr_15576_15641[(2)] = null);

(statearr_15576_15641[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (11))){
var inst_15538 = (state_15563[(2)]);
var state_15563__$1 = (function (){var statearr_15577 = state_15563;
(statearr_15577[(10)] = inst_15538);

return statearr_15577;
})();
var statearr_15578_15642 = state_15563__$1;
(statearr_15578_15642[(2)] = null);

(statearr_15578_15642[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (9))){
var state_15563__$1 = state_15563;
var statearr_15579_15643 = state_15563__$1;
(statearr_15579_15643[(2)] = null);

(statearr_15579_15643[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (5))){
var state_15563__$1 = state_15563;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15580_15644 = state_15563__$1;
(statearr_15580_15644[(1)] = (8));

} else {
var statearr_15581_15645 = state_15563__$1;
(statearr_15581_15645[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (14))){
var inst_15541 = (state_15563[(8)]);
var inst_15543 = (state_15563[(11)]);
var inst_15541__$1 = (state_15563[(2)]);
var inst_15542 = (inst_15541__$1 == null);
var inst_15543__$1 = cljs.core.not(inst_15542);
var state_15563__$1 = (function (){var statearr_15582 = state_15563;
(statearr_15582[(8)] = inst_15541__$1);

(statearr_15582[(11)] = inst_15543__$1);

return statearr_15582;
})();
if(inst_15543__$1){
var statearr_15583_15646 = state_15563__$1;
(statearr_15583_15646[(1)] = (15));

} else {
var statearr_15584_15647 = state_15563__$1;
(statearr_15584_15647[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (16))){
var inst_15543 = (state_15563[(11)]);
var state_15563__$1 = state_15563;
var statearr_15585_15648 = state_15563__$1;
(statearr_15585_15648[(2)] = inst_15543);

(statearr_15585_15648[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (10))){
var inst_15535 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15586_15649 = state_15563__$1;
(statearr_15586_15649[(2)] = inst_15535);

(statearr_15586_15649[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (18))){
var inst_15546 = (state_15563[(2)]);
var state_15563__$1 = state_15563;
var statearr_15587_15650 = state_15563__$1;
(statearr_15587_15650[(2)] = inst_15546);

(statearr_15587_15650[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15564 === (8))){
var inst_15532 = cljs.core.async.close_BANG_(to);
var state_15563__$1 = state_15563;
var statearr_15588_15651 = state_15563__$1;
(statearr_15588_15651[(2)] = inst_15532);

(statearr_15588_15651[(1)] = (10));


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
});})(c__15034__auto__,jobs,results,process,async))
;
return ((function (switch__14910__auto__,c__15034__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0 = (function (){
var statearr_15592 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__);

(statearr_15592[(1)] = (1));

return statearr_15592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1 = (function (state_15563){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15563);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15593){if((e15593 instanceof Object)){
var ex__14914__auto__ = e15593;
var statearr_15594_15652 = state_15563;
(statearr_15594_15652[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15563);

return cljs.core.cst$kw$recur;
} else {
throw e15593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15653 = state_15563;
state_15563 = G__15653;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__ = function(state_15563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1.call(this,state_15563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__,jobs,results,process,async))
})();
var state__15036__auto__ = (function (){var statearr_15595 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_15595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__,jobs,results,process,async))
);

return c__15034__auto__;
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
var args15654 = [];
var len__8106__auto___15657 = arguments.length;
var i__8107__auto___15658 = (0);
while(true){
if((i__8107__auto___15658 < len__8106__auto___15657)){
args15654.push((arguments[i__8107__auto___15658]));

var G__15659 = (i__8107__auto___15658 + (1));
i__8107__auto___15658 = G__15659;
continue;
} else {
}
break;
}

var G__15656 = args15654.length;
switch (G__15656) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15654.length)].join('')));

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
var args15661 = [];
var len__8106__auto___15664 = arguments.length;
var i__8107__auto___15665 = (0);
while(true){
if((i__8107__auto___15665 < len__8106__auto___15664)){
args15661.push((arguments[i__8107__auto___15665]));

var G__15666 = (i__8107__auto___15665 + (1));
i__8107__auto___15665 = G__15666;
continue;
} else {
}
break;
}

var G__15663 = args15661.length;
switch (G__15663) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15661.length)].join('')));

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
var args15668 = [];
var len__8106__auto___15721 = arguments.length;
var i__8107__auto___15722 = (0);
while(true){
if((i__8107__auto___15722 < len__8106__auto___15721)){
args15668.push((arguments[i__8107__auto___15722]));

var G__15723 = (i__8107__auto___15722 + (1));
i__8107__auto___15722 = G__15723;
continue;
} else {
}
break;
}

var G__15670 = args15668.length;
switch (G__15670) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15668.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15034__auto___15725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___15725,tc,fc){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___15725,tc,fc){
return (function (state_15696){
var state_val_15697 = (state_15696[(1)]);
if((state_val_15697 === (7))){
var inst_15692 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15698_15726 = state_15696__$1;
(statearr_15698_15726[(2)] = inst_15692);

(statearr_15698_15726[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (1))){
var state_15696__$1 = state_15696;
var statearr_15699_15727 = state_15696__$1;
(statearr_15699_15727[(2)] = null);

(statearr_15699_15727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (4))){
var inst_15673 = (state_15696[(7)]);
var inst_15673__$1 = (state_15696[(2)]);
var inst_15674 = (inst_15673__$1 == null);
var state_15696__$1 = (function (){var statearr_15700 = state_15696;
(statearr_15700[(7)] = inst_15673__$1);

return statearr_15700;
})();
if(cljs.core.truth_(inst_15674)){
var statearr_15701_15728 = state_15696__$1;
(statearr_15701_15728[(1)] = (5));

} else {
var statearr_15702_15729 = state_15696__$1;
(statearr_15702_15729[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (13))){
var state_15696__$1 = state_15696;
var statearr_15703_15730 = state_15696__$1;
(statearr_15703_15730[(2)] = null);

(statearr_15703_15730[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (6))){
var inst_15673 = (state_15696[(7)]);
var inst_15679 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15673) : p.call(null,inst_15673));
var state_15696__$1 = state_15696;
if(cljs.core.truth_(inst_15679)){
var statearr_15704_15731 = state_15696__$1;
(statearr_15704_15731[(1)] = (9));

} else {
var statearr_15705_15732 = state_15696__$1;
(statearr_15705_15732[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (3))){
var inst_15694 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15696__$1,inst_15694);
} else {
if((state_val_15697 === (12))){
var state_15696__$1 = state_15696;
var statearr_15706_15733 = state_15696__$1;
(statearr_15706_15733[(2)] = null);

(statearr_15706_15733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (2))){
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15696__$1,(4),ch);
} else {
if((state_val_15697 === (11))){
var inst_15673 = (state_15696[(7)]);
var inst_15683 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15696__$1,(8),inst_15683,inst_15673);
} else {
if((state_val_15697 === (9))){
var state_15696__$1 = state_15696;
var statearr_15707_15734 = state_15696__$1;
(statearr_15707_15734[(2)] = tc);

(statearr_15707_15734[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (5))){
var inst_15676 = cljs.core.async.close_BANG_(tc);
var inst_15677 = cljs.core.async.close_BANG_(fc);
var state_15696__$1 = (function (){var statearr_15708 = state_15696;
(statearr_15708[(8)] = inst_15676);

return statearr_15708;
})();
var statearr_15709_15735 = state_15696__$1;
(statearr_15709_15735[(2)] = inst_15677);

(statearr_15709_15735[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (14))){
var inst_15690 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15710_15736 = state_15696__$1;
(statearr_15710_15736[(2)] = inst_15690);

(statearr_15710_15736[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (10))){
var state_15696__$1 = state_15696;
var statearr_15711_15737 = state_15696__$1;
(statearr_15711_15737[(2)] = fc);

(statearr_15711_15737[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15697 === (8))){
var inst_15685 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
if(cljs.core.truth_(inst_15685)){
var statearr_15712_15738 = state_15696__$1;
(statearr_15712_15738[(1)] = (12));

} else {
var statearr_15713_15739 = state_15696__$1;
(statearr_15713_15739[(1)] = (13));

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
});})(c__15034__auto___15725,tc,fc))
;
return ((function (switch__14910__auto__,c__15034__auto___15725,tc,fc){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_15717 = [null,null,null,null,null,null,null,null,null];
(statearr_15717[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_15717[(1)] = (1));

return statearr_15717;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_15696){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15696);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15718){if((e15718 instanceof Object)){
var ex__14914__auto__ = e15718;
var statearr_15719_15740 = state_15696;
(statearr_15719_15740[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15696);

return cljs.core.cst$kw$recur;
} else {
throw e15718;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15741 = state_15696;
state_15696 = G__15741;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_15696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_15696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___15725,tc,fc))
})();
var state__15036__auto__ = (function (){var statearr_15720 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___15725);

return statearr_15720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___15725,tc,fc))
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
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__){
return (function (state_15805){
var state_val_15806 = (state_15805[(1)]);
if((state_val_15806 === (7))){
var inst_15801 = (state_15805[(2)]);
var state_15805__$1 = state_15805;
var statearr_15807_15828 = state_15805__$1;
(statearr_15807_15828[(2)] = inst_15801);

(statearr_15807_15828[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15806 === (1))){
var inst_15785 = init;
var state_15805__$1 = (function (){var statearr_15808 = state_15805;
(statearr_15808[(7)] = inst_15785);

return statearr_15808;
})();
var statearr_15809_15829 = state_15805__$1;
(statearr_15809_15829[(2)] = null);

(statearr_15809_15829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15806 === (4))){
var inst_15788 = (state_15805[(8)]);
var inst_15788__$1 = (state_15805[(2)]);
var inst_15789 = (inst_15788__$1 == null);
var state_15805__$1 = (function (){var statearr_15810 = state_15805;
(statearr_15810[(8)] = inst_15788__$1);

return statearr_15810;
})();
if(cljs.core.truth_(inst_15789)){
var statearr_15811_15830 = state_15805__$1;
(statearr_15811_15830[(1)] = (5));

} else {
var statearr_15812_15831 = state_15805__$1;
(statearr_15812_15831[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15806 === (6))){
var inst_15792 = (state_15805[(9)]);
var inst_15788 = (state_15805[(8)]);
var inst_15785 = (state_15805[(7)]);
var inst_15792__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15785,inst_15788) : f.call(null,inst_15785,inst_15788));
var inst_15793 = cljs.core.reduced_QMARK_(inst_15792__$1);
var state_15805__$1 = (function (){var statearr_15813 = state_15805;
(statearr_15813[(9)] = inst_15792__$1);

return statearr_15813;
})();
if(inst_15793){
var statearr_15814_15832 = state_15805__$1;
(statearr_15814_15832[(1)] = (8));

} else {
var statearr_15815_15833 = state_15805__$1;
(statearr_15815_15833[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15806 === (3))){
var inst_15803 = (state_15805[(2)]);
var state_15805__$1 = state_15805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15805__$1,inst_15803);
} else {
if((state_val_15806 === (2))){
var state_15805__$1 = state_15805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15805__$1,(4),ch);
} else {
if((state_val_15806 === (9))){
var inst_15792 = (state_15805[(9)]);
var inst_15785 = inst_15792;
var state_15805__$1 = (function (){var statearr_15816 = state_15805;
(statearr_15816[(7)] = inst_15785);

return statearr_15816;
})();
var statearr_15817_15834 = state_15805__$1;
(statearr_15817_15834[(2)] = null);

(statearr_15817_15834[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15806 === (5))){
var inst_15785 = (state_15805[(7)]);
var state_15805__$1 = state_15805;
var statearr_15818_15835 = state_15805__$1;
(statearr_15818_15835[(2)] = inst_15785);

(statearr_15818_15835[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15806 === (10))){
var inst_15799 = (state_15805[(2)]);
var state_15805__$1 = state_15805;
var statearr_15819_15836 = state_15805__$1;
(statearr_15819_15836[(2)] = inst_15799);

(statearr_15819_15836[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15806 === (8))){
var inst_15792 = (state_15805[(9)]);
var inst_15795 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15792) : cljs.core.deref.call(null,inst_15792));
var state_15805__$1 = state_15805;
var statearr_15820_15837 = state_15805__$1;
(statearr_15820_15837[(2)] = inst_15795);

(statearr_15820_15837[(1)] = (10));


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
});})(c__15034__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14911__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14911__auto____0 = (function (){
var statearr_15824 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15824[(0)] = cljs$core$async$reduce_$_state_machine__14911__auto__);

(statearr_15824[(1)] = (1));

return statearr_15824;
});
var cljs$core$async$reduce_$_state_machine__14911__auto____1 = (function (state_15805){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15805);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15825){if((e15825 instanceof Object)){
var ex__14914__auto__ = e15825;
var statearr_15826_15838 = state_15805;
(statearr_15826_15838[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15805);

return cljs.core.cst$kw$recur;
} else {
throw e15825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15839 = state_15805;
state_15805 = G__15839;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14911__auto__ = function(state_15805){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14911__auto____1.call(this,state_15805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14911__auto____0;
cljs$core$async$reduce_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14911__auto____1;
return cljs$core$async$reduce_$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__))
})();
var state__15036__auto__ = (function (){var statearr_15827 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_15827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__))
);

return c__15034__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__,f__$1){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__,f__$1){
return (function (state_15859){
var state_val_15860 = (state_15859[(1)]);
if((state_val_15860 === (1))){
var inst_15854 = cljs.core.async.reduce(f__$1,init,ch);
var state_15859__$1 = state_15859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15859__$1,(2),inst_15854);
} else {
if((state_val_15860 === (2))){
var inst_15856 = (state_15859[(2)]);
var inst_15857 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15856) : f__$1.call(null,inst_15856));
var state_15859__$1 = state_15859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15859__$1,inst_15857);
} else {
return null;
}
}
});})(c__15034__auto__,f__$1))
;
return ((function (switch__14910__auto__,c__15034__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14911__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14911__auto____0 = (function (){
var statearr_15864 = [null,null,null,null,null,null,null];
(statearr_15864[(0)] = cljs$core$async$transduce_$_state_machine__14911__auto__);

(statearr_15864[(1)] = (1));

return statearr_15864;
});
var cljs$core$async$transduce_$_state_machine__14911__auto____1 = (function (state_15859){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15859);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15865){if((e15865 instanceof Object)){
var ex__14914__auto__ = e15865;
var statearr_15866_15868 = state_15859;
(statearr_15866_15868[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15859);

return cljs.core.cst$kw$recur;
} else {
throw e15865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15869 = state_15859;
state_15859 = G__15869;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14911__auto__ = function(state_15859){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14911__auto____1.call(this,state_15859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14911__auto____0;
cljs$core$async$transduce_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14911__auto____1;
return cljs$core$async$transduce_$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__,f__$1))
})();
var state__15036__auto__ = (function (){var statearr_15867 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_15867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__,f__$1))
);

return c__15034__auto__;
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
var args15870 = [];
var len__8106__auto___15922 = arguments.length;
var i__8107__auto___15923 = (0);
while(true){
if((i__8107__auto___15923 < len__8106__auto___15922)){
args15870.push((arguments[i__8107__auto___15923]));

var G__15924 = (i__8107__auto___15923 + (1));
i__8107__auto___15923 = G__15924;
continue;
} else {
}
break;
}

var G__15872 = args15870.length;
switch (G__15872) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15870.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__){
return (function (state_15897){
var state_val_15898 = (state_15897[(1)]);
if((state_val_15898 === (7))){
var inst_15879 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
var statearr_15899_15926 = state_15897__$1;
(statearr_15899_15926[(2)] = inst_15879);

(statearr_15899_15926[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (1))){
var inst_15873 = cljs.core.seq(coll);
var inst_15874 = inst_15873;
var state_15897__$1 = (function (){var statearr_15900 = state_15897;
(statearr_15900[(7)] = inst_15874);

return statearr_15900;
})();
var statearr_15901_15927 = state_15897__$1;
(statearr_15901_15927[(2)] = null);

(statearr_15901_15927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (4))){
var inst_15874 = (state_15897[(7)]);
var inst_15877 = cljs.core.first(inst_15874);
var state_15897__$1 = state_15897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15897__$1,(7),ch,inst_15877);
} else {
if((state_val_15898 === (13))){
var inst_15891 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
var statearr_15902_15928 = state_15897__$1;
(statearr_15902_15928[(2)] = inst_15891);

(statearr_15902_15928[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (6))){
var inst_15882 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
if(cljs.core.truth_(inst_15882)){
var statearr_15903_15929 = state_15897__$1;
(statearr_15903_15929[(1)] = (8));

} else {
var statearr_15904_15930 = state_15897__$1;
(statearr_15904_15930[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (3))){
var inst_15895 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15897__$1,inst_15895);
} else {
if((state_val_15898 === (12))){
var state_15897__$1 = state_15897;
var statearr_15905_15931 = state_15897__$1;
(statearr_15905_15931[(2)] = null);

(statearr_15905_15931[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (2))){
var inst_15874 = (state_15897[(7)]);
var state_15897__$1 = state_15897;
if(cljs.core.truth_(inst_15874)){
var statearr_15906_15932 = state_15897__$1;
(statearr_15906_15932[(1)] = (4));

} else {
var statearr_15907_15933 = state_15897__$1;
(statearr_15907_15933[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (11))){
var inst_15888 = cljs.core.async.close_BANG_(ch);
var state_15897__$1 = state_15897;
var statearr_15908_15934 = state_15897__$1;
(statearr_15908_15934[(2)] = inst_15888);

(statearr_15908_15934[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (9))){
var state_15897__$1 = state_15897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15909_15935 = state_15897__$1;
(statearr_15909_15935[(1)] = (11));

} else {
var statearr_15910_15936 = state_15897__$1;
(statearr_15910_15936[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (5))){
var inst_15874 = (state_15897[(7)]);
var state_15897__$1 = state_15897;
var statearr_15911_15937 = state_15897__$1;
(statearr_15911_15937[(2)] = inst_15874);

(statearr_15911_15937[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (10))){
var inst_15893 = (state_15897[(2)]);
var state_15897__$1 = state_15897;
var statearr_15912_15938 = state_15897__$1;
(statearr_15912_15938[(2)] = inst_15893);

(statearr_15912_15938[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15898 === (8))){
var inst_15874 = (state_15897[(7)]);
var inst_15884 = cljs.core.next(inst_15874);
var inst_15874__$1 = inst_15884;
var state_15897__$1 = (function (){var statearr_15913 = state_15897;
(statearr_15913[(7)] = inst_15874__$1);

return statearr_15913;
})();
var statearr_15914_15939 = state_15897__$1;
(statearr_15914_15939[(2)] = null);

(statearr_15914_15939[(1)] = (2));


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
});})(c__15034__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_15918 = [null,null,null,null,null,null,null,null];
(statearr_15918[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_15918[(1)] = (1));

return statearr_15918;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_15897){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_15897);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e15919){if((e15919 instanceof Object)){
var ex__14914__auto__ = e15919;
var statearr_15920_15940 = state_15897;
(statearr_15920_15940[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15897);

return cljs.core.cst$kw$recur;
} else {
throw e15919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__15941 = state_15897;
state_15897 = G__15941;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_15897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_15897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__))
})();
var state__15036__auto__ = (function (){var statearr_15921 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_15921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_15921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__))
);

return c__15034__auto__;
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
var x__7661__auto__ = (((_ == null))?null:_);
var m__7662__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7662__auto__.call(null,_));
} else {
var m__7662__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7662__auto____$1.call(null,_));
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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7662__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7662__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7662__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7662__auto__.call(null,m,ch));
} else {
var m__7662__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7662__auto____$1.call(null,m,ch));
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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7662__auto__.call(null,m));
} else {
var m__7662__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7662__auto____$1.call(null,m));
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
var cs = (function (){var G__16170 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16170) : cljs.core.atom.call(null,G__16170));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16171 = (function (ch,cs,meta16172){
this.ch = ch;
this.cs = cs;
this.meta16172 = meta16172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16173,meta16172__$1){
var self__ = this;
var _16173__$1 = this;
return (new cljs.core.async.t_cljs$core$async16171(self__.ch,self__.cs,meta16172__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16173){
var self__ = this;
var _16173__$1 = this;
return self__.meta16172;
});})(cs))
;

cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16174_16398 = self__.cs;
var G__16175_16399 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16174_16398,G__16175_16399) : cljs.core.reset_BANG_.call(null,G__16174_16398,G__16175_16399));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16171.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16172], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16171";

cljs.core.async.t_cljs$core$async16171.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async16171");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16171 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16171(ch__$1,cs__$1,meta16172){
return (new cljs.core.async.t_cljs$core$async16171(ch__$1,cs__$1,meta16172));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16171(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15034__auto___16400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___16400,cs,m,dchan,dctr,done){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___16400,cs,m,dchan,dctr,done){
return (function (state_16310){
var state_val_16311 = (state_16310[(1)]);
if((state_val_16311 === (7))){
var inst_16306 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16312_16401 = state_16310__$1;
(statearr_16312_16401[(2)] = inst_16306);

(statearr_16312_16401[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (20))){
var inst_16209 = (state_16310[(7)]);
var inst_16221 = cljs.core.first(inst_16209);
var inst_16222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16221,(0),null);
var inst_16223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16221,(1),null);
var state_16310__$1 = (function (){var statearr_16313 = state_16310;
(statearr_16313[(8)] = inst_16222);

return statearr_16313;
})();
if(cljs.core.truth_(inst_16223)){
var statearr_16314_16402 = state_16310__$1;
(statearr_16314_16402[(1)] = (22));

} else {
var statearr_16315_16403 = state_16310__$1;
(statearr_16315_16403[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (27))){
var inst_16258 = (state_16310[(9)]);
var inst_16178 = (state_16310[(10)]);
var inst_16253 = (state_16310[(11)]);
var inst_16251 = (state_16310[(12)]);
var inst_16258__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16251,inst_16253);
var inst_16259 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16258__$1,inst_16178,done);
var state_16310__$1 = (function (){var statearr_16316 = state_16310;
(statearr_16316[(9)] = inst_16258__$1);

return statearr_16316;
})();
if(cljs.core.truth_(inst_16259)){
var statearr_16317_16404 = state_16310__$1;
(statearr_16317_16404[(1)] = (30));

} else {
var statearr_16318_16405 = state_16310__$1;
(statearr_16318_16405[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (1))){
var state_16310__$1 = state_16310;
var statearr_16319_16406 = state_16310__$1;
(statearr_16319_16406[(2)] = null);

(statearr_16319_16406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (24))){
var inst_16209 = (state_16310[(7)]);
var inst_16228 = (state_16310[(2)]);
var inst_16229 = cljs.core.next(inst_16209);
var inst_16187 = inst_16229;
var inst_16188 = null;
var inst_16189 = (0);
var inst_16190 = (0);
var state_16310__$1 = (function (){var statearr_16320 = state_16310;
(statearr_16320[(13)] = inst_16187);

(statearr_16320[(14)] = inst_16188);

(statearr_16320[(15)] = inst_16228);

(statearr_16320[(16)] = inst_16190);

(statearr_16320[(17)] = inst_16189);

return statearr_16320;
})();
var statearr_16321_16407 = state_16310__$1;
(statearr_16321_16407[(2)] = null);

(statearr_16321_16407[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (39))){
var state_16310__$1 = state_16310;
var statearr_16325_16408 = state_16310__$1;
(statearr_16325_16408[(2)] = null);

(statearr_16325_16408[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (4))){
var inst_16178 = (state_16310[(10)]);
var inst_16178__$1 = (state_16310[(2)]);
var inst_16179 = (inst_16178__$1 == null);
var state_16310__$1 = (function (){var statearr_16326 = state_16310;
(statearr_16326[(10)] = inst_16178__$1);

return statearr_16326;
})();
if(cljs.core.truth_(inst_16179)){
var statearr_16327_16409 = state_16310__$1;
(statearr_16327_16409[(1)] = (5));

} else {
var statearr_16328_16410 = state_16310__$1;
(statearr_16328_16410[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (15))){
var inst_16187 = (state_16310[(13)]);
var inst_16188 = (state_16310[(14)]);
var inst_16190 = (state_16310[(16)]);
var inst_16189 = (state_16310[(17)]);
var inst_16205 = (state_16310[(2)]);
var inst_16206 = (inst_16190 + (1));
var tmp16322 = inst_16187;
var tmp16323 = inst_16188;
var tmp16324 = inst_16189;
var inst_16187__$1 = tmp16322;
var inst_16188__$1 = tmp16323;
var inst_16189__$1 = tmp16324;
var inst_16190__$1 = inst_16206;
var state_16310__$1 = (function (){var statearr_16329 = state_16310;
(statearr_16329[(13)] = inst_16187__$1);

(statearr_16329[(14)] = inst_16188__$1);

(statearr_16329[(18)] = inst_16205);

(statearr_16329[(16)] = inst_16190__$1);

(statearr_16329[(17)] = inst_16189__$1);

return statearr_16329;
})();
var statearr_16330_16411 = state_16310__$1;
(statearr_16330_16411[(2)] = null);

(statearr_16330_16411[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (21))){
var inst_16232 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16334_16412 = state_16310__$1;
(statearr_16334_16412[(2)] = inst_16232);

(statearr_16334_16412[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (31))){
var inst_16258 = (state_16310[(9)]);
var inst_16262 = done(null);
var inst_16263 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16258);
var state_16310__$1 = (function (){var statearr_16335 = state_16310;
(statearr_16335[(19)] = inst_16262);

return statearr_16335;
})();
var statearr_16336_16413 = state_16310__$1;
(statearr_16336_16413[(2)] = inst_16263);

(statearr_16336_16413[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (32))){
var inst_16253 = (state_16310[(11)]);
var inst_16252 = (state_16310[(20)]);
var inst_16251 = (state_16310[(12)]);
var inst_16250 = (state_16310[(21)]);
var inst_16265 = (state_16310[(2)]);
var inst_16266 = (inst_16253 + (1));
var tmp16331 = inst_16252;
var tmp16332 = inst_16251;
var tmp16333 = inst_16250;
var inst_16250__$1 = tmp16333;
var inst_16251__$1 = tmp16332;
var inst_16252__$1 = tmp16331;
var inst_16253__$1 = inst_16266;
var state_16310__$1 = (function (){var statearr_16337 = state_16310;
(statearr_16337[(22)] = inst_16265);

(statearr_16337[(11)] = inst_16253__$1);

(statearr_16337[(20)] = inst_16252__$1);

(statearr_16337[(12)] = inst_16251__$1);

(statearr_16337[(21)] = inst_16250__$1);

return statearr_16337;
})();
var statearr_16338_16414 = state_16310__$1;
(statearr_16338_16414[(2)] = null);

(statearr_16338_16414[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (40))){
var inst_16278 = (state_16310[(23)]);
var inst_16282 = done(null);
var inst_16283 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16278);
var state_16310__$1 = (function (){var statearr_16339 = state_16310;
(statearr_16339[(24)] = inst_16282);

return statearr_16339;
})();
var statearr_16340_16415 = state_16310__$1;
(statearr_16340_16415[(2)] = inst_16283);

(statearr_16340_16415[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (33))){
var inst_16269 = (state_16310[(25)]);
var inst_16271 = cljs.core.chunked_seq_QMARK_(inst_16269);
var state_16310__$1 = state_16310;
if(inst_16271){
var statearr_16341_16416 = state_16310__$1;
(statearr_16341_16416[(1)] = (36));

} else {
var statearr_16342_16417 = state_16310__$1;
(statearr_16342_16417[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (13))){
var inst_16199 = (state_16310[(26)]);
var inst_16202 = cljs.core.async.close_BANG_(inst_16199);
var state_16310__$1 = state_16310;
var statearr_16343_16418 = state_16310__$1;
(statearr_16343_16418[(2)] = inst_16202);

(statearr_16343_16418[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (22))){
var inst_16222 = (state_16310[(8)]);
var inst_16225 = cljs.core.async.close_BANG_(inst_16222);
var state_16310__$1 = state_16310;
var statearr_16344_16419 = state_16310__$1;
(statearr_16344_16419[(2)] = inst_16225);

(statearr_16344_16419[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (36))){
var inst_16269 = (state_16310[(25)]);
var inst_16273 = cljs.core.chunk_first(inst_16269);
var inst_16274 = cljs.core.chunk_rest(inst_16269);
var inst_16275 = cljs.core.count(inst_16273);
var inst_16250 = inst_16274;
var inst_16251 = inst_16273;
var inst_16252 = inst_16275;
var inst_16253 = (0);
var state_16310__$1 = (function (){var statearr_16345 = state_16310;
(statearr_16345[(11)] = inst_16253);

(statearr_16345[(20)] = inst_16252);

(statearr_16345[(12)] = inst_16251);

(statearr_16345[(21)] = inst_16250);

return statearr_16345;
})();
var statearr_16346_16420 = state_16310__$1;
(statearr_16346_16420[(2)] = null);

(statearr_16346_16420[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (41))){
var inst_16269 = (state_16310[(25)]);
var inst_16285 = (state_16310[(2)]);
var inst_16286 = cljs.core.next(inst_16269);
var inst_16250 = inst_16286;
var inst_16251 = null;
var inst_16252 = (0);
var inst_16253 = (0);
var state_16310__$1 = (function (){var statearr_16347 = state_16310;
(statearr_16347[(11)] = inst_16253);

(statearr_16347[(20)] = inst_16252);

(statearr_16347[(27)] = inst_16285);

(statearr_16347[(12)] = inst_16251);

(statearr_16347[(21)] = inst_16250);

return statearr_16347;
})();
var statearr_16348_16421 = state_16310__$1;
(statearr_16348_16421[(2)] = null);

(statearr_16348_16421[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (43))){
var state_16310__$1 = state_16310;
var statearr_16349_16422 = state_16310__$1;
(statearr_16349_16422[(2)] = null);

(statearr_16349_16422[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (29))){
var inst_16294 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16350_16423 = state_16310__$1;
(statearr_16350_16423[(2)] = inst_16294);

(statearr_16350_16423[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (44))){
var inst_16303 = (state_16310[(2)]);
var state_16310__$1 = (function (){var statearr_16351 = state_16310;
(statearr_16351[(28)] = inst_16303);

return statearr_16351;
})();
var statearr_16352_16424 = state_16310__$1;
(statearr_16352_16424[(2)] = null);

(statearr_16352_16424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (6))){
var inst_16242 = (state_16310[(29)]);
var inst_16241 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16242__$1 = cljs.core.keys(inst_16241);
var inst_16243 = cljs.core.count(inst_16242__$1);
var inst_16244 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16243) : cljs.core.reset_BANG_.call(null,dctr,inst_16243));
var inst_16249 = cljs.core.seq(inst_16242__$1);
var inst_16250 = inst_16249;
var inst_16251 = null;
var inst_16252 = (0);
var inst_16253 = (0);
var state_16310__$1 = (function (){var statearr_16353 = state_16310;
(statearr_16353[(29)] = inst_16242__$1);

(statearr_16353[(11)] = inst_16253);

(statearr_16353[(20)] = inst_16252);

(statearr_16353[(30)] = inst_16244);

(statearr_16353[(12)] = inst_16251);

(statearr_16353[(21)] = inst_16250);

return statearr_16353;
})();
var statearr_16354_16425 = state_16310__$1;
(statearr_16354_16425[(2)] = null);

(statearr_16354_16425[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (28))){
var inst_16269 = (state_16310[(25)]);
var inst_16250 = (state_16310[(21)]);
var inst_16269__$1 = cljs.core.seq(inst_16250);
var state_16310__$1 = (function (){var statearr_16355 = state_16310;
(statearr_16355[(25)] = inst_16269__$1);

return statearr_16355;
})();
if(inst_16269__$1){
var statearr_16356_16426 = state_16310__$1;
(statearr_16356_16426[(1)] = (33));

} else {
var statearr_16357_16427 = state_16310__$1;
(statearr_16357_16427[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (25))){
var inst_16253 = (state_16310[(11)]);
var inst_16252 = (state_16310[(20)]);
var inst_16255 = (inst_16253 < inst_16252);
var inst_16256 = inst_16255;
var state_16310__$1 = state_16310;
if(cljs.core.truth_(inst_16256)){
var statearr_16358_16428 = state_16310__$1;
(statearr_16358_16428[(1)] = (27));

} else {
var statearr_16359_16429 = state_16310__$1;
(statearr_16359_16429[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (34))){
var state_16310__$1 = state_16310;
var statearr_16360_16430 = state_16310__$1;
(statearr_16360_16430[(2)] = null);

(statearr_16360_16430[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (17))){
var state_16310__$1 = state_16310;
var statearr_16361_16431 = state_16310__$1;
(statearr_16361_16431[(2)] = null);

(statearr_16361_16431[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (3))){
var inst_16308 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16310__$1,inst_16308);
} else {
if((state_val_16311 === (12))){
var inst_16237 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16362_16432 = state_16310__$1;
(statearr_16362_16432[(2)] = inst_16237);

(statearr_16362_16432[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (2))){
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16310__$1,(4),ch);
} else {
if((state_val_16311 === (23))){
var state_16310__$1 = state_16310;
var statearr_16363_16433 = state_16310__$1;
(statearr_16363_16433[(2)] = null);

(statearr_16363_16433[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (35))){
var inst_16292 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16364_16434 = state_16310__$1;
(statearr_16364_16434[(2)] = inst_16292);

(statearr_16364_16434[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (19))){
var inst_16209 = (state_16310[(7)]);
var inst_16213 = cljs.core.chunk_first(inst_16209);
var inst_16214 = cljs.core.chunk_rest(inst_16209);
var inst_16215 = cljs.core.count(inst_16213);
var inst_16187 = inst_16214;
var inst_16188 = inst_16213;
var inst_16189 = inst_16215;
var inst_16190 = (0);
var state_16310__$1 = (function (){var statearr_16365 = state_16310;
(statearr_16365[(13)] = inst_16187);

(statearr_16365[(14)] = inst_16188);

(statearr_16365[(16)] = inst_16190);

(statearr_16365[(17)] = inst_16189);

return statearr_16365;
})();
var statearr_16366_16435 = state_16310__$1;
(statearr_16366_16435[(2)] = null);

(statearr_16366_16435[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (11))){
var inst_16187 = (state_16310[(13)]);
var inst_16209 = (state_16310[(7)]);
var inst_16209__$1 = cljs.core.seq(inst_16187);
var state_16310__$1 = (function (){var statearr_16367 = state_16310;
(statearr_16367[(7)] = inst_16209__$1);

return statearr_16367;
})();
if(inst_16209__$1){
var statearr_16368_16436 = state_16310__$1;
(statearr_16368_16436[(1)] = (16));

} else {
var statearr_16369_16437 = state_16310__$1;
(statearr_16369_16437[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (9))){
var inst_16239 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16370_16438 = state_16310__$1;
(statearr_16370_16438[(2)] = inst_16239);

(statearr_16370_16438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (5))){
var inst_16185 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16186 = cljs.core.seq(inst_16185);
var inst_16187 = inst_16186;
var inst_16188 = null;
var inst_16189 = (0);
var inst_16190 = (0);
var state_16310__$1 = (function (){var statearr_16371 = state_16310;
(statearr_16371[(13)] = inst_16187);

(statearr_16371[(14)] = inst_16188);

(statearr_16371[(16)] = inst_16190);

(statearr_16371[(17)] = inst_16189);

return statearr_16371;
})();
var statearr_16372_16439 = state_16310__$1;
(statearr_16372_16439[(2)] = null);

(statearr_16372_16439[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (14))){
var state_16310__$1 = state_16310;
var statearr_16373_16440 = state_16310__$1;
(statearr_16373_16440[(2)] = null);

(statearr_16373_16440[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (45))){
var inst_16300 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16374_16441 = state_16310__$1;
(statearr_16374_16441[(2)] = inst_16300);

(statearr_16374_16441[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (26))){
var inst_16242 = (state_16310[(29)]);
var inst_16296 = (state_16310[(2)]);
var inst_16297 = cljs.core.seq(inst_16242);
var state_16310__$1 = (function (){var statearr_16375 = state_16310;
(statearr_16375[(31)] = inst_16296);

return statearr_16375;
})();
if(inst_16297){
var statearr_16376_16442 = state_16310__$1;
(statearr_16376_16442[(1)] = (42));

} else {
var statearr_16377_16443 = state_16310__$1;
(statearr_16377_16443[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (16))){
var inst_16209 = (state_16310[(7)]);
var inst_16211 = cljs.core.chunked_seq_QMARK_(inst_16209);
var state_16310__$1 = state_16310;
if(inst_16211){
var statearr_16378_16444 = state_16310__$1;
(statearr_16378_16444[(1)] = (19));

} else {
var statearr_16379_16445 = state_16310__$1;
(statearr_16379_16445[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (38))){
var inst_16289 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16380_16446 = state_16310__$1;
(statearr_16380_16446[(2)] = inst_16289);

(statearr_16380_16446[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (30))){
var state_16310__$1 = state_16310;
var statearr_16381_16447 = state_16310__$1;
(statearr_16381_16447[(2)] = null);

(statearr_16381_16447[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (10))){
var inst_16188 = (state_16310[(14)]);
var inst_16190 = (state_16310[(16)]);
var inst_16198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16188,inst_16190);
var inst_16199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16198,(0),null);
var inst_16200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16198,(1),null);
var state_16310__$1 = (function (){var statearr_16382 = state_16310;
(statearr_16382[(26)] = inst_16199);

return statearr_16382;
})();
if(cljs.core.truth_(inst_16200)){
var statearr_16383_16448 = state_16310__$1;
(statearr_16383_16448[(1)] = (13));

} else {
var statearr_16384_16449 = state_16310__$1;
(statearr_16384_16449[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (18))){
var inst_16235 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16385_16450 = state_16310__$1;
(statearr_16385_16450[(2)] = inst_16235);

(statearr_16385_16450[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (42))){
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16310__$1,(45),dchan);
} else {
if((state_val_16311 === (37))){
var inst_16269 = (state_16310[(25)]);
var inst_16178 = (state_16310[(10)]);
var inst_16278 = (state_16310[(23)]);
var inst_16278__$1 = cljs.core.first(inst_16269);
var inst_16279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16278__$1,inst_16178,done);
var state_16310__$1 = (function (){var statearr_16386 = state_16310;
(statearr_16386[(23)] = inst_16278__$1);

return statearr_16386;
})();
if(cljs.core.truth_(inst_16279)){
var statearr_16387_16451 = state_16310__$1;
(statearr_16387_16451[(1)] = (39));

} else {
var statearr_16388_16452 = state_16310__$1;
(statearr_16388_16452[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16311 === (8))){
var inst_16190 = (state_16310[(16)]);
var inst_16189 = (state_16310[(17)]);
var inst_16192 = (inst_16190 < inst_16189);
var inst_16193 = inst_16192;
var state_16310__$1 = state_16310;
if(cljs.core.truth_(inst_16193)){
var statearr_16389_16453 = state_16310__$1;
(statearr_16389_16453[(1)] = (10));

} else {
var statearr_16390_16454 = state_16310__$1;
(statearr_16390_16454[(1)] = (11));

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
});})(c__15034__auto___16400,cs,m,dchan,dctr,done))
;
return ((function (switch__14910__auto__,c__15034__auto___16400,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14911__auto__ = null;
var cljs$core$async$mult_$_state_machine__14911__auto____0 = (function (){
var statearr_16394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16394[(0)] = cljs$core$async$mult_$_state_machine__14911__auto__);

(statearr_16394[(1)] = (1));

return statearr_16394;
});
var cljs$core$async$mult_$_state_machine__14911__auto____1 = (function (state_16310){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_16310);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e16395){if((e16395 instanceof Object)){
var ex__14914__auto__ = e16395;
var statearr_16396_16455 = state_16310;
(statearr_16396_16455[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16310);

return cljs.core.cst$kw$recur;
} else {
throw e16395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__16456 = state_16310;
state_16310 = G__16456;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14911__auto__ = function(state_16310){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14911__auto____1.call(this,state_16310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14911__auto____0;
cljs$core$async$mult_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14911__auto____1;
return cljs$core$async$mult_$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___16400,cs,m,dchan,dctr,done))
})();
var state__15036__auto__ = (function (){var statearr_16397 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_16397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___16400);

return statearr_16397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___16400,cs,m,dchan,dctr,done))
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
var args16457 = [];
var len__8106__auto___16460 = arguments.length;
var i__8107__auto___16461 = (0);
while(true){
if((i__8107__auto___16461 < len__8106__auto___16460)){
args16457.push((arguments[i__8107__auto___16461]));

var G__16462 = (i__8107__auto___16461 + (1));
i__8107__auto___16461 = G__16462;
continue;
} else {
}
break;
}

var G__16459 = args16457.length;
switch (G__16459) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16457.length)].join('')));

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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7662__auto__.call(null,m,ch));
} else {
var m__7662__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7662__auto____$1.call(null,m,ch));
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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7662__auto__.call(null,m,ch));
} else {
var m__7662__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7662__auto____$1.call(null,m,ch));
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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7662__auto__.call(null,m));
} else {
var m__7662__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7662__auto____$1.call(null,m));
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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7662__auto__.call(null,m,state_map));
} else {
var m__7662__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7662__auto____$1.call(null,m,state_map));
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
var x__7661__auto__ = (((m == null))?null:m);
var m__7662__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7662__auto__.call(null,m,mode));
} else {
var m__7662__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7662__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8113__auto__ = [];
var len__8106__auto___16474 = arguments.length;
var i__8107__auto___16475 = (0);
while(true){
if((i__8107__auto___16475 < len__8106__auto___16474)){
args__8113__auto__.push((arguments[i__8107__auto___16475]));

var G__16476 = (i__8107__auto___16475 + (1));
i__8107__auto___16475 = G__16476;
continue;
} else {
}
break;
}

var argseq__8114__auto__ = ((((3) < args__8113__auto__.length))?(new cljs.core.IndexedSeq(args__8113__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8114__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16468){
var map__16469 = p__16468;
var map__16469__$1 = ((((!((map__16469 == null)))?((((map__16469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16469):map__16469);
var opts = map__16469__$1;
var statearr_16471_16477 = state;
(statearr_16471_16477[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16469,map__16469__$1,opts){
return (function (val){
var statearr_16472_16478 = state;
(statearr_16472_16478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16469,map__16469__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16473_16479 = state;
(statearr_16473_16479[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16464){
var G__16465 = cljs.core.first(seq16464);
var seq16464__$1 = cljs.core.next(seq16464);
var G__16466 = cljs.core.first(seq16464__$1);
var seq16464__$2 = cljs.core.next(seq16464__$1);
var G__16467 = cljs.core.first(seq16464__$2);
var seq16464__$3 = cljs.core.next(seq16464__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16465,G__16466,G__16467,seq16464__$3);
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
var cs = (function (){var G__16651 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16651) : cljs.core.atom.call(null,G__16651));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__16652 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16652) : cljs.core.atom.call(null,G__16652));
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
if(typeof cljs.core.async.t_cljs$core$async16653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16653 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16654){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16654 = meta16654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16655,meta16654__$1){
var self__ = this;
var _16655__$1 = this;
return (new cljs.core.async.t_cljs$core$async16653(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16654__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16655){
var self__ = this;
var _16655__$1 = this;
return self__.meta16654;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16656_16822 = self__.cs;
var G__16657_16823 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16656_16822,G__16657_16823) : cljs.core.reset_BANG_.call(null,G__16656_16822,G__16657_16823));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16653.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16654], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16653";

cljs.core.async.t_cljs$core$async16653.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async16653");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16653 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16653(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16654){
return (new cljs.core.async.t_cljs$core$async16653(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16654));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16653(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15034__auto___16824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___16824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___16824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16759){
var state_val_16760 = (state_16759[(1)]);
if((state_val_16760 === (7))){
var inst_16674 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16761_16825 = state_16759__$1;
(statearr_16761_16825[(2)] = inst_16674);

(statearr_16761_16825[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (20))){
var inst_16686 = (state_16759[(7)]);
var state_16759__$1 = state_16759;
var statearr_16762_16826 = state_16759__$1;
(statearr_16762_16826[(2)] = inst_16686);

(statearr_16762_16826[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (27))){
var state_16759__$1 = state_16759;
var statearr_16763_16827 = state_16759__$1;
(statearr_16763_16827[(2)] = null);

(statearr_16763_16827[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (1))){
var inst_16661 = (state_16759[(8)]);
var inst_16661__$1 = calc_state();
var inst_16663 = (inst_16661__$1 == null);
var inst_16664 = cljs.core.not(inst_16663);
var state_16759__$1 = (function (){var statearr_16764 = state_16759;
(statearr_16764[(8)] = inst_16661__$1);

return statearr_16764;
})();
if(inst_16664){
var statearr_16765_16828 = state_16759__$1;
(statearr_16765_16828[(1)] = (2));

} else {
var statearr_16766_16829 = state_16759__$1;
(statearr_16766_16829[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (24))){
var inst_16733 = (state_16759[(9)]);
var inst_16719 = (state_16759[(10)]);
var inst_16710 = (state_16759[(11)]);
var inst_16733__$1 = (inst_16710.cljs$core$IFn$_invoke$arity$1 ? inst_16710.cljs$core$IFn$_invoke$arity$1(inst_16719) : inst_16710.call(null,inst_16719));
var state_16759__$1 = (function (){var statearr_16767 = state_16759;
(statearr_16767[(9)] = inst_16733__$1);

return statearr_16767;
})();
if(cljs.core.truth_(inst_16733__$1)){
var statearr_16768_16830 = state_16759__$1;
(statearr_16768_16830[(1)] = (29));

} else {
var statearr_16769_16831 = state_16759__$1;
(statearr_16769_16831[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (4))){
var inst_16677 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16677)){
var statearr_16770_16832 = state_16759__$1;
(statearr_16770_16832[(1)] = (8));

} else {
var statearr_16771_16833 = state_16759__$1;
(statearr_16771_16833[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (15))){
var inst_16704 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16704)){
var statearr_16772_16834 = state_16759__$1;
(statearr_16772_16834[(1)] = (19));

} else {
var statearr_16773_16835 = state_16759__$1;
(statearr_16773_16835[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (21))){
var inst_16709 = (state_16759[(12)]);
var inst_16709__$1 = (state_16759[(2)]);
var inst_16710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16709__$1,cljs.core.cst$kw$solos);
var inst_16711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16709__$1,cljs.core.cst$kw$mutes);
var inst_16712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16709__$1,cljs.core.cst$kw$reads);
var state_16759__$1 = (function (){var statearr_16774 = state_16759;
(statearr_16774[(12)] = inst_16709__$1);

(statearr_16774[(11)] = inst_16710);

(statearr_16774[(13)] = inst_16711);

return statearr_16774;
})();
return cljs.core.async.ioc_alts_BANG_(state_16759__$1,(22),inst_16712);
} else {
if((state_val_16760 === (31))){
var inst_16741 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16741)){
var statearr_16775_16836 = state_16759__$1;
(statearr_16775_16836[(1)] = (32));

} else {
var statearr_16776_16837 = state_16759__$1;
(statearr_16776_16837[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (32))){
var inst_16718 = (state_16759[(14)]);
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16759__$1,(35),out,inst_16718);
} else {
if((state_val_16760 === (33))){
var inst_16709 = (state_16759[(12)]);
var inst_16686 = inst_16709;
var state_16759__$1 = (function (){var statearr_16777 = state_16759;
(statearr_16777[(7)] = inst_16686);

return statearr_16777;
})();
var statearr_16778_16838 = state_16759__$1;
(statearr_16778_16838[(2)] = null);

(statearr_16778_16838[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (13))){
var inst_16686 = (state_16759[(7)]);
var inst_16693 = inst_16686.cljs$lang$protocol_mask$partition0$;
var inst_16694 = (inst_16693 & (64));
var inst_16695 = inst_16686.cljs$core$ISeq$;
var inst_16696 = (cljs.core.PROTOCOL_SENTINEL === inst_16695);
var inst_16697 = (inst_16694) || (inst_16696);
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16697)){
var statearr_16779_16839 = state_16759__$1;
(statearr_16779_16839[(1)] = (16));

} else {
var statearr_16780_16840 = state_16759__$1;
(statearr_16780_16840[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (22))){
var inst_16719 = (state_16759[(10)]);
var inst_16718 = (state_16759[(14)]);
var inst_16717 = (state_16759[(2)]);
var inst_16718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16717,(0),null);
var inst_16719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16717,(1),null);
var inst_16720 = (inst_16718__$1 == null);
var inst_16721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16719__$1,change);
var inst_16722 = (inst_16720) || (inst_16721);
var state_16759__$1 = (function (){var statearr_16781 = state_16759;
(statearr_16781[(10)] = inst_16719__$1);

(statearr_16781[(14)] = inst_16718__$1);

return statearr_16781;
})();
if(cljs.core.truth_(inst_16722)){
var statearr_16782_16841 = state_16759__$1;
(statearr_16782_16841[(1)] = (23));

} else {
var statearr_16783_16842 = state_16759__$1;
(statearr_16783_16842[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (36))){
var inst_16709 = (state_16759[(12)]);
var inst_16686 = inst_16709;
var state_16759__$1 = (function (){var statearr_16784 = state_16759;
(statearr_16784[(7)] = inst_16686);

return statearr_16784;
})();
var statearr_16785_16843 = state_16759__$1;
(statearr_16785_16843[(2)] = null);

(statearr_16785_16843[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (29))){
var inst_16733 = (state_16759[(9)]);
var state_16759__$1 = state_16759;
var statearr_16786_16844 = state_16759__$1;
(statearr_16786_16844[(2)] = inst_16733);

(statearr_16786_16844[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (6))){
var state_16759__$1 = state_16759;
var statearr_16787_16845 = state_16759__$1;
(statearr_16787_16845[(2)] = false);

(statearr_16787_16845[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (28))){
var inst_16729 = (state_16759[(2)]);
var inst_16730 = calc_state();
var inst_16686 = inst_16730;
var state_16759__$1 = (function (){var statearr_16788 = state_16759;
(statearr_16788[(15)] = inst_16729);

(statearr_16788[(7)] = inst_16686);

return statearr_16788;
})();
var statearr_16789_16846 = state_16759__$1;
(statearr_16789_16846[(2)] = null);

(statearr_16789_16846[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (25))){
var inst_16755 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16790_16847 = state_16759__$1;
(statearr_16790_16847[(2)] = inst_16755);

(statearr_16790_16847[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (34))){
var inst_16753 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16791_16848 = state_16759__$1;
(statearr_16791_16848[(2)] = inst_16753);

(statearr_16791_16848[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (17))){
var state_16759__$1 = state_16759;
var statearr_16792_16849 = state_16759__$1;
(statearr_16792_16849[(2)] = false);

(statearr_16792_16849[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (3))){
var state_16759__$1 = state_16759;
var statearr_16793_16850 = state_16759__$1;
(statearr_16793_16850[(2)] = false);

(statearr_16793_16850[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (12))){
var inst_16757 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16759__$1,inst_16757);
} else {
if((state_val_16760 === (2))){
var inst_16661 = (state_16759[(8)]);
var inst_16666 = inst_16661.cljs$lang$protocol_mask$partition0$;
var inst_16667 = (inst_16666 & (64));
var inst_16668 = inst_16661.cljs$core$ISeq$;
var inst_16669 = (cljs.core.PROTOCOL_SENTINEL === inst_16668);
var inst_16670 = (inst_16667) || (inst_16669);
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16670)){
var statearr_16794_16851 = state_16759__$1;
(statearr_16794_16851[(1)] = (5));

} else {
var statearr_16795_16852 = state_16759__$1;
(statearr_16795_16852[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (23))){
var inst_16718 = (state_16759[(14)]);
var inst_16724 = (inst_16718 == null);
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16724)){
var statearr_16796_16853 = state_16759__$1;
(statearr_16796_16853[(1)] = (26));

} else {
var statearr_16797_16854 = state_16759__$1;
(statearr_16797_16854[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (35))){
var inst_16744 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16744)){
var statearr_16798_16855 = state_16759__$1;
(statearr_16798_16855[(1)] = (36));

} else {
var statearr_16799_16856 = state_16759__$1;
(statearr_16799_16856[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (19))){
var inst_16686 = (state_16759[(7)]);
var inst_16706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16686);
var state_16759__$1 = state_16759;
var statearr_16800_16857 = state_16759__$1;
(statearr_16800_16857[(2)] = inst_16706);

(statearr_16800_16857[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (11))){
var inst_16686 = (state_16759[(7)]);
var inst_16690 = (inst_16686 == null);
var inst_16691 = cljs.core.not(inst_16690);
var state_16759__$1 = state_16759;
if(inst_16691){
var statearr_16801_16858 = state_16759__$1;
(statearr_16801_16858[(1)] = (13));

} else {
var statearr_16802_16859 = state_16759__$1;
(statearr_16802_16859[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (9))){
var inst_16661 = (state_16759[(8)]);
var state_16759__$1 = state_16759;
var statearr_16803_16860 = state_16759__$1;
(statearr_16803_16860[(2)] = inst_16661);

(statearr_16803_16860[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (5))){
var state_16759__$1 = state_16759;
var statearr_16804_16861 = state_16759__$1;
(statearr_16804_16861[(2)] = true);

(statearr_16804_16861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (14))){
var state_16759__$1 = state_16759;
var statearr_16805_16862 = state_16759__$1;
(statearr_16805_16862[(2)] = false);

(statearr_16805_16862[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (26))){
var inst_16719 = (state_16759[(10)]);
var inst_16726 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16719);
var state_16759__$1 = state_16759;
var statearr_16806_16863 = state_16759__$1;
(statearr_16806_16863[(2)] = inst_16726);

(statearr_16806_16863[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (16))){
var state_16759__$1 = state_16759;
var statearr_16807_16864 = state_16759__$1;
(statearr_16807_16864[(2)] = true);

(statearr_16807_16864[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (38))){
var inst_16749 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16808_16865 = state_16759__$1;
(statearr_16808_16865[(2)] = inst_16749);

(statearr_16808_16865[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (30))){
var inst_16719 = (state_16759[(10)]);
var inst_16710 = (state_16759[(11)]);
var inst_16711 = (state_16759[(13)]);
var inst_16736 = cljs.core.empty_QMARK_(inst_16710);
var inst_16737 = (inst_16711.cljs$core$IFn$_invoke$arity$1 ? inst_16711.cljs$core$IFn$_invoke$arity$1(inst_16719) : inst_16711.call(null,inst_16719));
var inst_16738 = cljs.core.not(inst_16737);
var inst_16739 = (inst_16736) && (inst_16738);
var state_16759__$1 = state_16759;
var statearr_16809_16866 = state_16759__$1;
(statearr_16809_16866[(2)] = inst_16739);

(statearr_16809_16866[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (10))){
var inst_16661 = (state_16759[(8)]);
var inst_16682 = (state_16759[(2)]);
var inst_16683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16682,cljs.core.cst$kw$solos);
var inst_16684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16682,cljs.core.cst$kw$mutes);
var inst_16685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16682,cljs.core.cst$kw$reads);
var inst_16686 = inst_16661;
var state_16759__$1 = (function (){var statearr_16810 = state_16759;
(statearr_16810[(16)] = inst_16684);

(statearr_16810[(17)] = inst_16685);

(statearr_16810[(7)] = inst_16686);

(statearr_16810[(18)] = inst_16683);

return statearr_16810;
})();
var statearr_16811_16867 = state_16759__$1;
(statearr_16811_16867[(2)] = null);

(statearr_16811_16867[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (18))){
var inst_16701 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16812_16868 = state_16759__$1;
(statearr_16812_16868[(2)] = inst_16701);

(statearr_16812_16868[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (37))){
var state_16759__$1 = state_16759;
var statearr_16813_16869 = state_16759__$1;
(statearr_16813_16869[(2)] = null);

(statearr_16813_16869[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (8))){
var inst_16661 = (state_16759[(8)]);
var inst_16679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16661);
var state_16759__$1 = state_16759;
var statearr_16814_16870 = state_16759__$1;
(statearr_16814_16870[(2)] = inst_16679);

(statearr_16814_16870[(1)] = (10));


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
});})(c__15034__auto___16824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14910__auto__,c__15034__auto___16824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14911__auto__ = null;
var cljs$core$async$mix_$_state_machine__14911__auto____0 = (function (){
var statearr_16818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16818[(0)] = cljs$core$async$mix_$_state_machine__14911__auto__);

(statearr_16818[(1)] = (1));

return statearr_16818;
});
var cljs$core$async$mix_$_state_machine__14911__auto____1 = (function (state_16759){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_16759);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e16819){if((e16819 instanceof Object)){
var ex__14914__auto__ = e16819;
var statearr_16820_16871 = state_16759;
(statearr_16820_16871[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16759);

return cljs.core.cst$kw$recur;
} else {
throw e16819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__16872 = state_16759;
state_16759 = G__16872;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14911__auto__ = function(state_16759){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14911__auto____1.call(this,state_16759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14911__auto____0;
cljs$core$async$mix_$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14911__auto____1;
return cljs$core$async$mix_$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___16824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15036__auto__ = (function (){var statearr_16821 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_16821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___16824);

return statearr_16821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___16824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7661__auto__ = (((p == null))?null:p);
var m__7662__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7662__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7662__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7662__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__7661__auto__ = (((p == null))?null:p);
var m__7662__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7662__auto__.call(null,p,v,ch));
} else {
var m__7662__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7662__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16873 = [];
var len__8106__auto___16876 = arguments.length;
var i__8107__auto___16877 = (0);
while(true){
if((i__8107__auto___16877 < len__8106__auto___16876)){
args16873.push((arguments[i__8107__auto___16877]));

var G__16878 = (i__8107__auto___16877 + (1));
i__8107__auto___16877 = G__16878;
continue;
} else {
}
break;
}

var G__16875 = args16873.length;
switch (G__16875) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16873.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7661__auto__ = (((p == null))?null:p);
var m__7662__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7662__auto__.call(null,p));
} else {
var m__7662__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7662__auto____$1.call(null,p));
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
var x__7661__auto__ = (((p == null))?null:p);
var m__7662__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7661__auto__)]);
if(!((m__7662__auto__ == null))){
return (m__7662__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7662__auto__.call(null,p,v));
} else {
var m__7662__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7662__auto____$1 == null))){
return (m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7662__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7662__auto____$1.call(null,p,v));
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
var args16881 = [];
var len__8106__auto___17009 = arguments.length;
var i__8107__auto___17010 = (0);
while(true){
if((i__8107__auto___17010 < len__8106__auto___17009)){
args16881.push((arguments[i__8107__auto___17010]));

var G__17011 = (i__8107__auto___17010 + (1));
i__8107__auto___17010 = G__17011;
continue;
} else {
}
break;
}

var G__16883 = args16881.length;
switch (G__16883) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16881.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16884 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16884) : cljs.core.atom.call(null,G__16884));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6993__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6993__auto__,mults){
return (function (p1__16880_SHARP_){
if(cljs.core.truth_((p1__16880_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16880_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16880_SHARP_.call(null,topic)))){
return p1__16880_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16880_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6993__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16885 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16886){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16886 = meta16886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16887,meta16886__$1){
var self__ = this;
var _16887__$1 = this;
return (new cljs.core.async.t_cljs$core$async16885(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16886__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16887){
var self__ = this;
var _16887__$1 = this;
return self__.meta16886;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16888 = self__.mults;
var G__16889 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16888,G__16889) : cljs.core.reset_BANG_.call(null,G__16888,G__16889));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16885.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16886], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16885";

cljs.core.async.t_cljs$core$async16885.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async16885");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16885 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16885(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16886){
return (new cljs.core.async.t_cljs$core$async16885(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16886));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16885(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15034__auto___17013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17013,mults,ensure_mult,p){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17013,mults,ensure_mult,p){
return (function (state_16961){
var state_val_16962 = (state_16961[(1)]);
if((state_val_16962 === (7))){
var inst_16957 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16963_17014 = state_16961__$1;
(statearr_16963_17014[(2)] = inst_16957);

(statearr_16963_17014[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (20))){
var state_16961__$1 = state_16961;
var statearr_16964_17015 = state_16961__$1;
(statearr_16964_17015[(2)] = null);

(statearr_16964_17015[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (1))){
var state_16961__$1 = state_16961;
var statearr_16965_17016 = state_16961__$1;
(statearr_16965_17016[(2)] = null);

(statearr_16965_17016[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (24))){
var inst_16940 = (state_16961[(7)]);
var inst_16949 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16940);
var state_16961__$1 = state_16961;
var statearr_16966_17017 = state_16961__$1;
(statearr_16966_17017[(2)] = inst_16949);

(statearr_16966_17017[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (4))){
var inst_16892 = (state_16961[(8)]);
var inst_16892__$1 = (state_16961[(2)]);
var inst_16893 = (inst_16892__$1 == null);
var state_16961__$1 = (function (){var statearr_16967 = state_16961;
(statearr_16967[(8)] = inst_16892__$1);

return statearr_16967;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_16968_17018 = state_16961__$1;
(statearr_16968_17018[(1)] = (5));

} else {
var statearr_16969_17019 = state_16961__$1;
(statearr_16969_17019[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (15))){
var inst_16934 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16970_17020 = state_16961__$1;
(statearr_16970_17020[(2)] = inst_16934);

(statearr_16970_17020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (21))){
var inst_16954 = (state_16961[(2)]);
var state_16961__$1 = (function (){var statearr_16971 = state_16961;
(statearr_16971[(9)] = inst_16954);

return statearr_16971;
})();
var statearr_16972_17021 = state_16961__$1;
(statearr_16972_17021[(2)] = null);

(statearr_16972_17021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (13))){
var inst_16916 = (state_16961[(10)]);
var inst_16918 = cljs.core.chunked_seq_QMARK_(inst_16916);
var state_16961__$1 = state_16961;
if(inst_16918){
var statearr_16973_17022 = state_16961__$1;
(statearr_16973_17022[(1)] = (16));

} else {
var statearr_16974_17023 = state_16961__$1;
(statearr_16974_17023[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (22))){
var inst_16946 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
if(cljs.core.truth_(inst_16946)){
var statearr_16975_17024 = state_16961__$1;
(statearr_16975_17024[(1)] = (23));

} else {
var statearr_16976_17025 = state_16961__$1;
(statearr_16976_17025[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (6))){
var inst_16942 = (state_16961[(11)]);
var inst_16892 = (state_16961[(8)]);
var inst_16940 = (state_16961[(7)]);
var inst_16940__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16892) : topic_fn.call(null,inst_16892));
var inst_16941 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16942__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16941,inst_16940__$1);
var state_16961__$1 = (function (){var statearr_16977 = state_16961;
(statearr_16977[(11)] = inst_16942__$1);

(statearr_16977[(7)] = inst_16940__$1);

return statearr_16977;
})();
if(cljs.core.truth_(inst_16942__$1)){
var statearr_16978_17026 = state_16961__$1;
(statearr_16978_17026[(1)] = (19));

} else {
var statearr_16979_17027 = state_16961__$1;
(statearr_16979_17027[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (25))){
var inst_16951 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16980_17028 = state_16961__$1;
(statearr_16980_17028[(2)] = inst_16951);

(statearr_16980_17028[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (17))){
var inst_16916 = (state_16961[(10)]);
var inst_16925 = cljs.core.first(inst_16916);
var inst_16926 = cljs.core.async.muxch_STAR_(inst_16925);
var inst_16927 = cljs.core.async.close_BANG_(inst_16926);
var inst_16928 = cljs.core.next(inst_16916);
var inst_16902 = inst_16928;
var inst_16903 = null;
var inst_16904 = (0);
var inst_16905 = (0);
var state_16961__$1 = (function (){var statearr_16981 = state_16961;
(statearr_16981[(12)] = inst_16927);

(statearr_16981[(13)] = inst_16905);

(statearr_16981[(14)] = inst_16904);

(statearr_16981[(15)] = inst_16902);

(statearr_16981[(16)] = inst_16903);

return statearr_16981;
})();
var statearr_16982_17029 = state_16961__$1;
(statearr_16982_17029[(2)] = null);

(statearr_16982_17029[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (3))){
var inst_16959 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16961__$1,inst_16959);
} else {
if((state_val_16962 === (12))){
var inst_16936 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16983_17030 = state_16961__$1;
(statearr_16983_17030[(2)] = inst_16936);

(statearr_16983_17030[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (2))){
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16961__$1,(4),ch);
} else {
if((state_val_16962 === (23))){
var state_16961__$1 = state_16961;
var statearr_16984_17031 = state_16961__$1;
(statearr_16984_17031[(2)] = null);

(statearr_16984_17031[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (19))){
var inst_16942 = (state_16961[(11)]);
var inst_16892 = (state_16961[(8)]);
var inst_16944 = cljs.core.async.muxch_STAR_(inst_16942);
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16961__$1,(22),inst_16944,inst_16892);
} else {
if((state_val_16962 === (11))){
var inst_16916 = (state_16961[(10)]);
var inst_16902 = (state_16961[(15)]);
var inst_16916__$1 = cljs.core.seq(inst_16902);
var state_16961__$1 = (function (){var statearr_16985 = state_16961;
(statearr_16985[(10)] = inst_16916__$1);

return statearr_16985;
})();
if(inst_16916__$1){
var statearr_16986_17032 = state_16961__$1;
(statearr_16986_17032[(1)] = (13));

} else {
var statearr_16987_17033 = state_16961__$1;
(statearr_16987_17033[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (9))){
var inst_16938 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16988_17034 = state_16961__$1;
(statearr_16988_17034[(2)] = inst_16938);

(statearr_16988_17034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (5))){
var inst_16899 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16900 = cljs.core.vals(inst_16899);
var inst_16901 = cljs.core.seq(inst_16900);
var inst_16902 = inst_16901;
var inst_16903 = null;
var inst_16904 = (0);
var inst_16905 = (0);
var state_16961__$1 = (function (){var statearr_16989 = state_16961;
(statearr_16989[(13)] = inst_16905);

(statearr_16989[(14)] = inst_16904);

(statearr_16989[(15)] = inst_16902);

(statearr_16989[(16)] = inst_16903);

return statearr_16989;
})();
var statearr_16990_17035 = state_16961__$1;
(statearr_16990_17035[(2)] = null);

(statearr_16990_17035[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (14))){
var state_16961__$1 = state_16961;
var statearr_16994_17036 = state_16961__$1;
(statearr_16994_17036[(2)] = null);

(statearr_16994_17036[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (16))){
var inst_16916 = (state_16961[(10)]);
var inst_16920 = cljs.core.chunk_first(inst_16916);
var inst_16921 = cljs.core.chunk_rest(inst_16916);
var inst_16922 = cljs.core.count(inst_16920);
var inst_16902 = inst_16921;
var inst_16903 = inst_16920;
var inst_16904 = inst_16922;
var inst_16905 = (0);
var state_16961__$1 = (function (){var statearr_16995 = state_16961;
(statearr_16995[(13)] = inst_16905);

(statearr_16995[(14)] = inst_16904);

(statearr_16995[(15)] = inst_16902);

(statearr_16995[(16)] = inst_16903);

return statearr_16995;
})();
var statearr_16996_17037 = state_16961__$1;
(statearr_16996_17037[(2)] = null);

(statearr_16996_17037[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (10))){
var inst_16905 = (state_16961[(13)]);
var inst_16904 = (state_16961[(14)]);
var inst_16902 = (state_16961[(15)]);
var inst_16903 = (state_16961[(16)]);
var inst_16910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16903,inst_16905);
var inst_16911 = cljs.core.async.muxch_STAR_(inst_16910);
var inst_16912 = cljs.core.async.close_BANG_(inst_16911);
var inst_16913 = (inst_16905 + (1));
var tmp16991 = inst_16904;
var tmp16992 = inst_16902;
var tmp16993 = inst_16903;
var inst_16902__$1 = tmp16992;
var inst_16903__$1 = tmp16993;
var inst_16904__$1 = tmp16991;
var inst_16905__$1 = inst_16913;
var state_16961__$1 = (function (){var statearr_16997 = state_16961;
(statearr_16997[(13)] = inst_16905__$1);

(statearr_16997[(17)] = inst_16912);

(statearr_16997[(14)] = inst_16904__$1);

(statearr_16997[(15)] = inst_16902__$1);

(statearr_16997[(16)] = inst_16903__$1);

return statearr_16997;
})();
var statearr_16998_17038 = state_16961__$1;
(statearr_16998_17038[(2)] = null);

(statearr_16998_17038[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (18))){
var inst_16931 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16999_17039 = state_16961__$1;
(statearr_16999_17039[(2)] = inst_16931);

(statearr_16999_17039[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16962 === (8))){
var inst_16905 = (state_16961[(13)]);
var inst_16904 = (state_16961[(14)]);
var inst_16907 = (inst_16905 < inst_16904);
var inst_16908 = inst_16907;
var state_16961__$1 = state_16961;
if(cljs.core.truth_(inst_16908)){
var statearr_17000_17040 = state_16961__$1;
(statearr_17000_17040[(1)] = (10));

} else {
var statearr_17001_17041 = state_16961__$1;
(statearr_17001_17041[(1)] = (11));

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
});})(c__15034__auto___17013,mults,ensure_mult,p))
;
return ((function (switch__14910__auto__,c__15034__auto___17013,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17005[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17005[(1)] = (1));

return statearr_17005;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_16961){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_16961);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17006){if((e17006 instanceof Object)){
var ex__14914__auto__ = e17006;
var statearr_17007_17042 = state_16961;
(statearr_17007_17042[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16961);

return cljs.core.cst$kw$recur;
} else {
throw e17006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17043 = state_16961;
state_16961 = G__17043;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_16961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_16961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17013,mults,ensure_mult,p))
})();
var state__15036__auto__ = (function (){var statearr_17008 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17013);

return statearr_17008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17013,mults,ensure_mult,p))
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
var args17044 = [];
var len__8106__auto___17047 = arguments.length;
var i__8107__auto___17048 = (0);
while(true){
if((i__8107__auto___17048 < len__8106__auto___17047)){
args17044.push((arguments[i__8107__auto___17048]));

var G__17049 = (i__8107__auto___17048 + (1));
i__8107__auto___17048 = G__17049;
continue;
} else {
}
break;
}

var G__17046 = args17044.length;
switch (G__17046) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17044.length)].join('')));

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
var args17051 = [];
var len__8106__auto___17054 = arguments.length;
var i__8107__auto___17055 = (0);
while(true){
if((i__8107__auto___17055 < len__8106__auto___17054)){
args17051.push((arguments[i__8107__auto___17055]));

var G__17056 = (i__8107__auto___17055 + (1));
i__8107__auto___17055 = G__17056;
continue;
} else {
}
break;
}

var G__17053 = args17051.length;
switch (G__17053) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17051.length)].join('')));

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
var args17058 = [];
var len__8106__auto___17129 = arguments.length;
var i__8107__auto___17130 = (0);
while(true){
if((i__8107__auto___17130 < len__8106__auto___17129)){
args17058.push((arguments[i__8107__auto___17130]));

var G__17131 = (i__8107__auto___17130 + (1));
i__8107__auto___17130 = G__17131;
continue;
} else {
}
break;
}

var G__17060 = args17058.length;
switch (G__17060) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17058.length)].join('')));

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
var c__15034__auto___17133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17099){
var state_val_17100 = (state_17099[(1)]);
if((state_val_17100 === (7))){
var state_17099__$1 = state_17099;
var statearr_17101_17134 = state_17099__$1;
(statearr_17101_17134[(2)] = null);

(statearr_17101_17134[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (1))){
var state_17099__$1 = state_17099;
var statearr_17102_17135 = state_17099__$1;
(statearr_17102_17135[(2)] = null);

(statearr_17102_17135[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (4))){
var inst_17063 = (state_17099[(7)]);
var inst_17065 = (inst_17063 < cnt);
var state_17099__$1 = state_17099;
if(cljs.core.truth_(inst_17065)){
var statearr_17103_17136 = state_17099__$1;
(statearr_17103_17136[(1)] = (6));

} else {
var statearr_17104_17137 = state_17099__$1;
(statearr_17104_17137[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (15))){
var inst_17095 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
var statearr_17105_17138 = state_17099__$1;
(statearr_17105_17138[(2)] = inst_17095);

(statearr_17105_17138[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (13))){
var inst_17088 = cljs.core.async.close_BANG_(out);
var state_17099__$1 = state_17099;
var statearr_17106_17139 = state_17099__$1;
(statearr_17106_17139[(2)] = inst_17088);

(statearr_17106_17139[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (6))){
var state_17099__$1 = state_17099;
var statearr_17107_17140 = state_17099__$1;
(statearr_17107_17140[(2)] = null);

(statearr_17107_17140[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (3))){
var inst_17097 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17099__$1,inst_17097);
} else {
if((state_val_17100 === (12))){
var inst_17085 = (state_17099[(8)]);
var inst_17085__$1 = (state_17099[(2)]);
var inst_17086 = cljs.core.some(cljs.core.nil_QMARK_,inst_17085__$1);
var state_17099__$1 = (function (){var statearr_17108 = state_17099;
(statearr_17108[(8)] = inst_17085__$1);

return statearr_17108;
})();
if(cljs.core.truth_(inst_17086)){
var statearr_17109_17141 = state_17099__$1;
(statearr_17109_17141[(1)] = (13));

} else {
var statearr_17110_17142 = state_17099__$1;
(statearr_17110_17142[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (2))){
var inst_17062 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17063 = (0);
var state_17099__$1 = (function (){var statearr_17111 = state_17099;
(statearr_17111[(9)] = inst_17062);

(statearr_17111[(7)] = inst_17063);

return statearr_17111;
})();
var statearr_17112_17143 = state_17099__$1;
(statearr_17112_17143[(2)] = null);

(statearr_17112_17143[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (11))){
var inst_17063 = (state_17099[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17099,(10),Object,null,(9));
var inst_17072 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17063) : chs__$1.call(null,inst_17063));
var inst_17073 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17063) : done.call(null,inst_17063));
var inst_17074 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17072,inst_17073);
var state_17099__$1 = state_17099;
var statearr_17113_17144 = state_17099__$1;
(statearr_17113_17144[(2)] = inst_17074);


cljs.core.async.impl.ioc_helpers.process_exception(state_17099__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (9))){
var inst_17063 = (state_17099[(7)]);
var inst_17076 = (state_17099[(2)]);
var inst_17077 = (inst_17063 + (1));
var inst_17063__$1 = inst_17077;
var state_17099__$1 = (function (){var statearr_17114 = state_17099;
(statearr_17114[(7)] = inst_17063__$1);

(statearr_17114[(10)] = inst_17076);

return statearr_17114;
})();
var statearr_17115_17145 = state_17099__$1;
(statearr_17115_17145[(2)] = null);

(statearr_17115_17145[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (5))){
var inst_17083 = (state_17099[(2)]);
var state_17099__$1 = (function (){var statearr_17116 = state_17099;
(statearr_17116[(11)] = inst_17083);

return statearr_17116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17099__$1,(12),dchan);
} else {
if((state_val_17100 === (14))){
var inst_17085 = (state_17099[(8)]);
var inst_17090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17085);
var state_17099__$1 = state_17099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17099__$1,(16),out,inst_17090);
} else {
if((state_val_17100 === (16))){
var inst_17092 = (state_17099[(2)]);
var state_17099__$1 = (function (){var statearr_17117 = state_17099;
(statearr_17117[(12)] = inst_17092);

return statearr_17117;
})();
var statearr_17118_17146 = state_17099__$1;
(statearr_17118_17146[(2)] = null);

(statearr_17118_17146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (10))){
var inst_17067 = (state_17099[(2)]);
var inst_17068 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17099__$1 = (function (){var statearr_17119 = state_17099;
(statearr_17119[(13)] = inst_17067);

return statearr_17119;
})();
var statearr_17120_17147 = state_17099__$1;
(statearr_17120_17147[(2)] = inst_17068);


cljs.core.async.impl.ioc_helpers.process_exception(state_17099__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17100 === (8))){
var inst_17081 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
var statearr_17121_17148 = state_17099__$1;
(statearr_17121_17148[(2)] = inst_17081);

(statearr_17121_17148[(1)] = (5));


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
});})(c__15034__auto___17133,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14910__auto__,c__15034__auto___17133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17125[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17125[(1)] = (1));

return statearr_17125;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_17099){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17099);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17126){if((e17126 instanceof Object)){
var ex__14914__auto__ = e17126;
var statearr_17127_17149 = state_17099;
(statearr_17127_17149[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17099);

return cljs.core.cst$kw$recur;
} else {
throw e17126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17150 = state_17099;
state_17099 = G__17150;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_17099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_17099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17133,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15036__auto__ = (function (){var statearr_17128 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17133);

return statearr_17128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17133,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17152 = [];
var len__8106__auto___17210 = arguments.length;
var i__8107__auto___17211 = (0);
while(true){
if((i__8107__auto___17211 < len__8106__auto___17210)){
args17152.push((arguments[i__8107__auto___17211]));

var G__17212 = (i__8107__auto___17211 + (1));
i__8107__auto___17211 = G__17212;
continue;
} else {
}
break;
}

var G__17154 = args17152.length;
switch (G__17154) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17152.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15034__auto___17214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17214,out){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17214,out){
return (function (state_17186){
var state_val_17187 = (state_17186[(1)]);
if((state_val_17187 === (7))){
var inst_17165 = (state_17186[(7)]);
var inst_17166 = (state_17186[(8)]);
var inst_17165__$1 = (state_17186[(2)]);
var inst_17166__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17165__$1,(0),null);
var inst_17167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17165__$1,(1),null);
var inst_17168 = (inst_17166__$1 == null);
var state_17186__$1 = (function (){var statearr_17188 = state_17186;
(statearr_17188[(7)] = inst_17165__$1);

(statearr_17188[(8)] = inst_17166__$1);

(statearr_17188[(9)] = inst_17167);

return statearr_17188;
})();
if(cljs.core.truth_(inst_17168)){
var statearr_17189_17215 = state_17186__$1;
(statearr_17189_17215[(1)] = (8));

} else {
var statearr_17190_17216 = state_17186__$1;
(statearr_17190_17216[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17187 === (1))){
var inst_17155 = cljs.core.vec(chs);
var inst_17156 = inst_17155;
var state_17186__$1 = (function (){var statearr_17191 = state_17186;
(statearr_17191[(10)] = inst_17156);

return statearr_17191;
})();
var statearr_17192_17217 = state_17186__$1;
(statearr_17192_17217[(2)] = null);

(statearr_17192_17217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17187 === (4))){
var inst_17156 = (state_17186[(10)]);
var state_17186__$1 = state_17186;
return cljs.core.async.ioc_alts_BANG_(state_17186__$1,(7),inst_17156);
} else {
if((state_val_17187 === (6))){
var inst_17182 = (state_17186[(2)]);
var state_17186__$1 = state_17186;
var statearr_17193_17218 = state_17186__$1;
(statearr_17193_17218[(2)] = inst_17182);

(statearr_17193_17218[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17187 === (3))){
var inst_17184 = (state_17186[(2)]);
var state_17186__$1 = state_17186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17186__$1,inst_17184);
} else {
if((state_val_17187 === (2))){
var inst_17156 = (state_17186[(10)]);
var inst_17158 = cljs.core.count(inst_17156);
var inst_17159 = (inst_17158 > (0));
var state_17186__$1 = state_17186;
if(cljs.core.truth_(inst_17159)){
var statearr_17195_17219 = state_17186__$1;
(statearr_17195_17219[(1)] = (4));

} else {
var statearr_17196_17220 = state_17186__$1;
(statearr_17196_17220[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17187 === (11))){
var inst_17156 = (state_17186[(10)]);
var inst_17175 = (state_17186[(2)]);
var tmp17194 = inst_17156;
var inst_17156__$1 = tmp17194;
var state_17186__$1 = (function (){var statearr_17197 = state_17186;
(statearr_17197[(11)] = inst_17175);

(statearr_17197[(10)] = inst_17156__$1);

return statearr_17197;
})();
var statearr_17198_17221 = state_17186__$1;
(statearr_17198_17221[(2)] = null);

(statearr_17198_17221[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17187 === (9))){
var inst_17166 = (state_17186[(8)]);
var state_17186__$1 = state_17186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17186__$1,(11),out,inst_17166);
} else {
if((state_val_17187 === (5))){
var inst_17180 = cljs.core.async.close_BANG_(out);
var state_17186__$1 = state_17186;
var statearr_17199_17222 = state_17186__$1;
(statearr_17199_17222[(2)] = inst_17180);

(statearr_17199_17222[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17187 === (10))){
var inst_17178 = (state_17186[(2)]);
var state_17186__$1 = state_17186;
var statearr_17200_17223 = state_17186__$1;
(statearr_17200_17223[(2)] = inst_17178);

(statearr_17200_17223[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17187 === (8))){
var inst_17165 = (state_17186[(7)]);
var inst_17156 = (state_17186[(10)]);
var inst_17166 = (state_17186[(8)]);
var inst_17167 = (state_17186[(9)]);
var inst_17170 = (function (){var cs = inst_17156;
var vec__17161 = inst_17165;
var v = inst_17166;
var c = inst_17167;
return ((function (cs,vec__17161,v,c,inst_17165,inst_17156,inst_17166,inst_17167,state_val_17187,c__15034__auto___17214,out){
return (function (p1__17151_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17151_SHARP_);
});
;})(cs,vec__17161,v,c,inst_17165,inst_17156,inst_17166,inst_17167,state_val_17187,c__15034__auto___17214,out))
})();
var inst_17171 = cljs.core.filterv(inst_17170,inst_17156);
var inst_17156__$1 = inst_17171;
var state_17186__$1 = (function (){var statearr_17201 = state_17186;
(statearr_17201[(10)] = inst_17156__$1);

return statearr_17201;
})();
var statearr_17202_17224 = state_17186__$1;
(statearr_17202_17224[(2)] = null);

(statearr_17202_17224[(1)] = (2));


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
});})(c__15034__auto___17214,out))
;
return ((function (switch__14910__auto__,c__15034__auto___17214,out){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17206[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17206[(1)] = (1));

return statearr_17206;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_17186){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17186);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17207){if((e17207 instanceof Object)){
var ex__14914__auto__ = e17207;
var statearr_17208_17225 = state_17186;
(statearr_17208_17225[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17186);

return cljs.core.cst$kw$recur;
} else {
throw e17207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17226 = state_17186;
state_17186 = G__17226;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_17186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_17186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17214,out))
})();
var state__15036__auto__ = (function (){var statearr_17209 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17214);

return statearr_17209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17214,out))
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
var args17227 = [];
var len__8106__auto___17276 = arguments.length;
var i__8107__auto___17277 = (0);
while(true){
if((i__8107__auto___17277 < len__8106__auto___17276)){
args17227.push((arguments[i__8107__auto___17277]));

var G__17278 = (i__8107__auto___17277 + (1));
i__8107__auto___17277 = G__17278;
continue;
} else {
}
break;
}

var G__17229 = args17227.length;
switch (G__17229) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17227.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15034__auto___17280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17280,out){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17280,out){
return (function (state_17253){
var state_val_17254 = (state_17253[(1)]);
if((state_val_17254 === (7))){
var inst_17235 = (state_17253[(7)]);
var inst_17235__$1 = (state_17253[(2)]);
var inst_17236 = (inst_17235__$1 == null);
var inst_17237 = cljs.core.not(inst_17236);
var state_17253__$1 = (function (){var statearr_17255 = state_17253;
(statearr_17255[(7)] = inst_17235__$1);

return statearr_17255;
})();
if(inst_17237){
var statearr_17256_17281 = state_17253__$1;
(statearr_17256_17281[(1)] = (8));

} else {
var statearr_17257_17282 = state_17253__$1;
(statearr_17257_17282[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (1))){
var inst_17230 = (0);
var state_17253__$1 = (function (){var statearr_17258 = state_17253;
(statearr_17258[(8)] = inst_17230);

return statearr_17258;
})();
var statearr_17259_17283 = state_17253__$1;
(statearr_17259_17283[(2)] = null);

(statearr_17259_17283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (4))){
var state_17253__$1 = state_17253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17253__$1,(7),ch);
} else {
if((state_val_17254 === (6))){
var inst_17248 = (state_17253[(2)]);
var state_17253__$1 = state_17253;
var statearr_17260_17284 = state_17253__$1;
(statearr_17260_17284[(2)] = inst_17248);

(statearr_17260_17284[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (3))){
var inst_17250 = (state_17253[(2)]);
var inst_17251 = cljs.core.async.close_BANG_(out);
var state_17253__$1 = (function (){var statearr_17261 = state_17253;
(statearr_17261[(9)] = inst_17250);

return statearr_17261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17253__$1,inst_17251);
} else {
if((state_val_17254 === (2))){
var inst_17230 = (state_17253[(8)]);
var inst_17232 = (inst_17230 < n);
var state_17253__$1 = state_17253;
if(cljs.core.truth_(inst_17232)){
var statearr_17262_17285 = state_17253__$1;
(statearr_17262_17285[(1)] = (4));

} else {
var statearr_17263_17286 = state_17253__$1;
(statearr_17263_17286[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (11))){
var inst_17230 = (state_17253[(8)]);
var inst_17240 = (state_17253[(2)]);
var inst_17241 = (inst_17230 + (1));
var inst_17230__$1 = inst_17241;
var state_17253__$1 = (function (){var statearr_17264 = state_17253;
(statearr_17264[(10)] = inst_17240);

(statearr_17264[(8)] = inst_17230__$1);

return statearr_17264;
})();
var statearr_17265_17287 = state_17253__$1;
(statearr_17265_17287[(2)] = null);

(statearr_17265_17287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (9))){
var state_17253__$1 = state_17253;
var statearr_17266_17288 = state_17253__$1;
(statearr_17266_17288[(2)] = null);

(statearr_17266_17288[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (5))){
var state_17253__$1 = state_17253;
var statearr_17267_17289 = state_17253__$1;
(statearr_17267_17289[(2)] = null);

(statearr_17267_17289[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (10))){
var inst_17245 = (state_17253[(2)]);
var state_17253__$1 = state_17253;
var statearr_17268_17290 = state_17253__$1;
(statearr_17268_17290[(2)] = inst_17245);

(statearr_17268_17290[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17254 === (8))){
var inst_17235 = (state_17253[(7)]);
var state_17253__$1 = state_17253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17253__$1,(11),out,inst_17235);
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
});})(c__15034__auto___17280,out))
;
return ((function (switch__14910__auto__,c__15034__auto___17280,out){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17272[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17272[(1)] = (1));

return statearr_17272;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_17253){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17253);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17273){if((e17273 instanceof Object)){
var ex__14914__auto__ = e17273;
var statearr_17274_17291 = state_17253;
(statearr_17274_17291[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17253);

return cljs.core.cst$kw$recur;
} else {
throw e17273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17292 = state_17253;
state_17253 = G__17292;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_17253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_17253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17280,out))
})();
var state__15036__auto__ = (function (){var statearr_17275 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17280);

return statearr_17275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17280,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17302 = (function (f,ch,meta17303){
this.f = f;
this.ch = ch;
this.meta17303 = meta17303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17304,meta17303__$1){
var self__ = this;
var _17304__$1 = this;
return (new cljs.core.async.t_cljs$core$async17302(self__.f,self__.ch,meta17303__$1));
});

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17304){
var self__ = this;
var _17304__$1 = this;
return self__.meta17303;
});

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17305 = (function (f,ch,meta17303,_,fn1,meta17306){
this.f = f;
this.ch = ch;
this.meta17303 = meta17303;
this._ = _;
this.fn1 = fn1;
this.meta17306 = meta17306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17307,meta17306__$1){
var self__ = this;
var _17307__$1 = this;
return (new cljs.core.async.t_cljs$core$async17305(self__.f,self__.ch,self__.meta17303,self__._,self__.fn1,meta17306__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17307){
var self__ = this;
var _17307__$1 = this;
return self__.meta17306;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17293_SHARP_){
var G__17308 = (((p1__17293_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17293_SHARP_) : self__.f.call(null,p1__17293_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17308) : f1.call(null,G__17308));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17305.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17303,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17302], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17306], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17305";

cljs.core.async.t_cljs$core$async17305.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async17305");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17305 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17305(f__$1,ch__$1,meta17303__$1,___$2,fn1__$1,meta17306){
return (new cljs.core.async.t_cljs$core$async17305(f__$1,ch__$1,meta17303__$1,___$2,fn1__$1,meta17306));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17305(self__.f,self__.ch,self__.meta17303,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6981__auto__ = ret;
if(cljs.core.truth_(and__6981__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6981__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17309 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17309) : self__.f.call(null,G__17309));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17303], null);
});

cljs.core.async.t_cljs$core$async17302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17302";

cljs.core.async.t_cljs$core$async17302.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async17302");
});

cljs.core.async.__GT_t_cljs$core$async17302 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17302(f__$1,ch__$1,meta17303){
return (new cljs.core.async.t_cljs$core$async17302(f__$1,ch__$1,meta17303));
});

}

return (new cljs.core.async.t_cljs$core$async17302(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17313 = (function (f,ch,meta17314){
this.f = f;
this.ch = ch;
this.meta17314 = meta17314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17315,meta17314__$1){
var self__ = this;
var _17315__$1 = this;
return (new cljs.core.async.t_cljs$core$async17313(self__.f,self__.ch,meta17314__$1));
});

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17315){
var self__ = this;
var _17315__$1 = this;
return self__.meta17314;
});

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17314], null);
});

cljs.core.async.t_cljs$core$async17313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17313";

cljs.core.async.t_cljs$core$async17313.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async17313");
});

cljs.core.async.__GT_t_cljs$core$async17313 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17313(f__$1,ch__$1,meta17314){
return (new cljs.core.async.t_cljs$core$async17313(f__$1,ch__$1,meta17314));
});

}

return (new cljs.core.async.t_cljs$core$async17313(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17319 = (function (p,ch,meta17320){
this.p = p;
this.ch = ch;
this.meta17320 = meta17320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17321,meta17320__$1){
var self__ = this;
var _17321__$1 = this;
return (new cljs.core.async.t_cljs$core$async17319(self__.p,self__.ch,meta17320__$1));
});

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17321){
var self__ = this;
var _17321__$1 = this;
return self__.meta17320;
});

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17320], null);
});

cljs.core.async.t_cljs$core$async17319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17319";

cljs.core.async.t_cljs$core$async17319.cljs$lang$ctorPrWriter = (function (this__7604__auto__,writer__7605__auto__,opt__7606__auto__){
return cljs.core._write(writer__7605__auto__,"cljs.core.async/t_cljs$core$async17319");
});

cljs.core.async.__GT_t_cljs$core$async17319 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17319(p__$1,ch__$1,meta17320){
return (new cljs.core.async.t_cljs$core$async17319(p__$1,ch__$1,meta17320));
});

}

return (new cljs.core.async.t_cljs$core$async17319(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args17322 = [];
var len__8106__auto___17366 = arguments.length;
var i__8107__auto___17367 = (0);
while(true){
if((i__8107__auto___17367 < len__8106__auto___17366)){
args17322.push((arguments[i__8107__auto___17367]));

var G__17368 = (i__8107__auto___17367 + (1));
i__8107__auto___17367 = G__17368;
continue;
} else {
}
break;
}

var G__17324 = args17322.length;
switch (G__17324) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17322.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15034__auto___17370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17370,out){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17370,out){
return (function (state_17345){
var state_val_17346 = (state_17345[(1)]);
if((state_val_17346 === (7))){
var inst_17341 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17347_17371 = state_17345__$1;
(statearr_17347_17371[(2)] = inst_17341);

(statearr_17347_17371[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (1))){
var state_17345__$1 = state_17345;
var statearr_17348_17372 = state_17345__$1;
(statearr_17348_17372[(2)] = null);

(statearr_17348_17372[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (4))){
var inst_17327 = (state_17345[(7)]);
var inst_17327__$1 = (state_17345[(2)]);
var inst_17328 = (inst_17327__$1 == null);
var state_17345__$1 = (function (){var statearr_17349 = state_17345;
(statearr_17349[(7)] = inst_17327__$1);

return statearr_17349;
})();
if(cljs.core.truth_(inst_17328)){
var statearr_17350_17373 = state_17345__$1;
(statearr_17350_17373[(1)] = (5));

} else {
var statearr_17351_17374 = state_17345__$1;
(statearr_17351_17374[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (6))){
var inst_17327 = (state_17345[(7)]);
var inst_17332 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17327) : p.call(null,inst_17327));
var state_17345__$1 = state_17345;
if(cljs.core.truth_(inst_17332)){
var statearr_17352_17375 = state_17345__$1;
(statearr_17352_17375[(1)] = (8));

} else {
var statearr_17353_17376 = state_17345__$1;
(statearr_17353_17376[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (3))){
var inst_17343 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17345__$1,inst_17343);
} else {
if((state_val_17346 === (2))){
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17345__$1,(4),ch);
} else {
if((state_val_17346 === (11))){
var inst_17335 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17354_17377 = state_17345__$1;
(statearr_17354_17377[(2)] = inst_17335);

(statearr_17354_17377[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (9))){
var state_17345__$1 = state_17345;
var statearr_17355_17378 = state_17345__$1;
(statearr_17355_17378[(2)] = null);

(statearr_17355_17378[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (5))){
var inst_17330 = cljs.core.async.close_BANG_(out);
var state_17345__$1 = state_17345;
var statearr_17356_17379 = state_17345__$1;
(statearr_17356_17379[(2)] = inst_17330);

(statearr_17356_17379[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (10))){
var inst_17338 = (state_17345[(2)]);
var state_17345__$1 = (function (){var statearr_17357 = state_17345;
(statearr_17357[(8)] = inst_17338);

return statearr_17357;
})();
var statearr_17358_17380 = state_17345__$1;
(statearr_17358_17380[(2)] = null);

(statearr_17358_17380[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17346 === (8))){
var inst_17327 = (state_17345[(7)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17345__$1,(11),out,inst_17327);
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
});})(c__15034__auto___17370,out))
;
return ((function (switch__14910__auto__,c__15034__auto___17370,out){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17362 = [null,null,null,null,null,null,null,null,null];
(statearr_17362[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17362[(1)] = (1));

return statearr_17362;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_17345){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17345);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17363){if((e17363 instanceof Object)){
var ex__14914__auto__ = e17363;
var statearr_17364_17381 = state_17345;
(statearr_17364_17381[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17345);

return cljs.core.cst$kw$recur;
} else {
throw e17363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17382 = state_17345;
state_17345 = G__17382;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_17345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_17345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17370,out))
})();
var state__15036__auto__ = (function (){var statearr_17365 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17370);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17370,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17383 = [];
var len__8106__auto___17386 = arguments.length;
var i__8107__auto___17387 = (0);
while(true){
if((i__8107__auto___17387 < len__8106__auto___17386)){
args17383.push((arguments[i__8107__auto___17387]));

var G__17388 = (i__8107__auto___17387 + (1));
i__8107__auto___17387 = G__17388;
continue;
} else {
}
break;
}

var G__17385 = args17383.length;
switch (G__17385) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17383.length)].join('')));

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
var c__15034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto__){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto__){
return (function (state_17555){
var state_val_17556 = (state_17555[(1)]);
if((state_val_17556 === (7))){
var inst_17551 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17557_17598 = state_17555__$1;
(statearr_17557_17598[(2)] = inst_17551);

(statearr_17557_17598[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (20))){
var inst_17521 = (state_17555[(7)]);
var inst_17532 = (state_17555[(2)]);
var inst_17533 = cljs.core.next(inst_17521);
var inst_17507 = inst_17533;
var inst_17508 = null;
var inst_17509 = (0);
var inst_17510 = (0);
var state_17555__$1 = (function (){var statearr_17558 = state_17555;
(statearr_17558[(8)] = inst_17507);

(statearr_17558[(9)] = inst_17510);

(statearr_17558[(10)] = inst_17532);

(statearr_17558[(11)] = inst_17508);

(statearr_17558[(12)] = inst_17509);

return statearr_17558;
})();
var statearr_17559_17599 = state_17555__$1;
(statearr_17559_17599[(2)] = null);

(statearr_17559_17599[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (1))){
var state_17555__$1 = state_17555;
var statearr_17560_17600 = state_17555__$1;
(statearr_17560_17600[(2)] = null);

(statearr_17560_17600[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (4))){
var inst_17496 = (state_17555[(13)]);
var inst_17496__$1 = (state_17555[(2)]);
var inst_17497 = (inst_17496__$1 == null);
var state_17555__$1 = (function (){var statearr_17561 = state_17555;
(statearr_17561[(13)] = inst_17496__$1);

return statearr_17561;
})();
if(cljs.core.truth_(inst_17497)){
var statearr_17562_17601 = state_17555__$1;
(statearr_17562_17601[(1)] = (5));

} else {
var statearr_17563_17602 = state_17555__$1;
(statearr_17563_17602[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (15))){
var state_17555__$1 = state_17555;
var statearr_17567_17603 = state_17555__$1;
(statearr_17567_17603[(2)] = null);

(statearr_17567_17603[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (21))){
var state_17555__$1 = state_17555;
var statearr_17568_17604 = state_17555__$1;
(statearr_17568_17604[(2)] = null);

(statearr_17568_17604[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (13))){
var inst_17507 = (state_17555[(8)]);
var inst_17510 = (state_17555[(9)]);
var inst_17508 = (state_17555[(11)]);
var inst_17509 = (state_17555[(12)]);
var inst_17517 = (state_17555[(2)]);
var inst_17518 = (inst_17510 + (1));
var tmp17564 = inst_17507;
var tmp17565 = inst_17508;
var tmp17566 = inst_17509;
var inst_17507__$1 = tmp17564;
var inst_17508__$1 = tmp17565;
var inst_17509__$1 = tmp17566;
var inst_17510__$1 = inst_17518;
var state_17555__$1 = (function (){var statearr_17569 = state_17555;
(statearr_17569[(14)] = inst_17517);

(statearr_17569[(8)] = inst_17507__$1);

(statearr_17569[(9)] = inst_17510__$1);

(statearr_17569[(11)] = inst_17508__$1);

(statearr_17569[(12)] = inst_17509__$1);

return statearr_17569;
})();
var statearr_17570_17605 = state_17555__$1;
(statearr_17570_17605[(2)] = null);

(statearr_17570_17605[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (22))){
var state_17555__$1 = state_17555;
var statearr_17571_17606 = state_17555__$1;
(statearr_17571_17606[(2)] = null);

(statearr_17571_17606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (6))){
var inst_17496 = (state_17555[(13)]);
var inst_17505 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17496) : f.call(null,inst_17496));
var inst_17506 = cljs.core.seq(inst_17505);
var inst_17507 = inst_17506;
var inst_17508 = null;
var inst_17509 = (0);
var inst_17510 = (0);
var state_17555__$1 = (function (){var statearr_17572 = state_17555;
(statearr_17572[(8)] = inst_17507);

(statearr_17572[(9)] = inst_17510);

(statearr_17572[(11)] = inst_17508);

(statearr_17572[(12)] = inst_17509);

return statearr_17572;
})();
var statearr_17573_17607 = state_17555__$1;
(statearr_17573_17607[(2)] = null);

(statearr_17573_17607[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (17))){
var inst_17521 = (state_17555[(7)]);
var inst_17525 = cljs.core.chunk_first(inst_17521);
var inst_17526 = cljs.core.chunk_rest(inst_17521);
var inst_17527 = cljs.core.count(inst_17525);
var inst_17507 = inst_17526;
var inst_17508 = inst_17525;
var inst_17509 = inst_17527;
var inst_17510 = (0);
var state_17555__$1 = (function (){var statearr_17574 = state_17555;
(statearr_17574[(8)] = inst_17507);

(statearr_17574[(9)] = inst_17510);

(statearr_17574[(11)] = inst_17508);

(statearr_17574[(12)] = inst_17509);

return statearr_17574;
})();
var statearr_17575_17608 = state_17555__$1;
(statearr_17575_17608[(2)] = null);

(statearr_17575_17608[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (3))){
var inst_17553 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17555__$1,inst_17553);
} else {
if((state_val_17556 === (12))){
var inst_17541 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17576_17609 = state_17555__$1;
(statearr_17576_17609[(2)] = inst_17541);

(statearr_17576_17609[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (2))){
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17555__$1,(4),in$);
} else {
if((state_val_17556 === (23))){
var inst_17549 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17577_17610 = state_17555__$1;
(statearr_17577_17610[(2)] = inst_17549);

(statearr_17577_17610[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (19))){
var inst_17536 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17578_17611 = state_17555__$1;
(statearr_17578_17611[(2)] = inst_17536);

(statearr_17578_17611[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (11))){
var inst_17507 = (state_17555[(8)]);
var inst_17521 = (state_17555[(7)]);
var inst_17521__$1 = cljs.core.seq(inst_17507);
var state_17555__$1 = (function (){var statearr_17579 = state_17555;
(statearr_17579[(7)] = inst_17521__$1);

return statearr_17579;
})();
if(inst_17521__$1){
var statearr_17580_17612 = state_17555__$1;
(statearr_17580_17612[(1)] = (14));

} else {
var statearr_17581_17613 = state_17555__$1;
(statearr_17581_17613[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (9))){
var inst_17543 = (state_17555[(2)]);
var inst_17544 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17555__$1 = (function (){var statearr_17582 = state_17555;
(statearr_17582[(15)] = inst_17543);

return statearr_17582;
})();
if(cljs.core.truth_(inst_17544)){
var statearr_17583_17614 = state_17555__$1;
(statearr_17583_17614[(1)] = (21));

} else {
var statearr_17584_17615 = state_17555__$1;
(statearr_17584_17615[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (5))){
var inst_17499 = cljs.core.async.close_BANG_(out);
var state_17555__$1 = state_17555;
var statearr_17585_17616 = state_17555__$1;
(statearr_17585_17616[(2)] = inst_17499);

(statearr_17585_17616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (14))){
var inst_17521 = (state_17555[(7)]);
var inst_17523 = cljs.core.chunked_seq_QMARK_(inst_17521);
var state_17555__$1 = state_17555;
if(inst_17523){
var statearr_17586_17617 = state_17555__$1;
(statearr_17586_17617[(1)] = (17));

} else {
var statearr_17587_17618 = state_17555__$1;
(statearr_17587_17618[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (16))){
var inst_17539 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17588_17619 = state_17555__$1;
(statearr_17588_17619[(2)] = inst_17539);

(statearr_17588_17619[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17556 === (10))){
var inst_17510 = (state_17555[(9)]);
var inst_17508 = (state_17555[(11)]);
var inst_17515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17508,inst_17510);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17555__$1,(13),out,inst_17515);
} else {
if((state_val_17556 === (18))){
var inst_17521 = (state_17555[(7)]);
var inst_17530 = cljs.core.first(inst_17521);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17555__$1,(20),out,inst_17530);
} else {
if((state_val_17556 === (8))){
var inst_17510 = (state_17555[(9)]);
var inst_17509 = (state_17555[(12)]);
var inst_17512 = (inst_17510 < inst_17509);
var inst_17513 = inst_17512;
var state_17555__$1 = state_17555;
if(cljs.core.truth_(inst_17513)){
var statearr_17589_17620 = state_17555__$1;
(statearr_17589_17620[(1)] = (10));

} else {
var statearr_17590_17621 = state_17555__$1;
(statearr_17590_17621[(1)] = (11));

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
});})(c__15034__auto__))
;
return ((function (switch__14910__auto__,c__15034__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14911__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14911__auto____0 = (function (){
var statearr_17594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17594[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14911__auto__);

(statearr_17594[(1)] = (1));

return statearr_17594;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14911__auto____1 = (function (state_17555){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17555);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17595){if((e17595 instanceof Object)){
var ex__14914__auto__ = e17595;
var statearr_17596_17622 = state_17555;
(statearr_17596_17622[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17555);

return cljs.core.cst$kw$recur;
} else {
throw e17595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17623 = state_17555;
state_17555 = G__17623;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14911__auto__ = function(state_17555){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14911__auto____1.call(this,state_17555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14911__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14911__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto__))
})();
var state__15036__auto__ = (function (){var statearr_17597 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto__);

return statearr_17597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto__))
);

return c__15034__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17624 = [];
var len__8106__auto___17627 = arguments.length;
var i__8107__auto___17628 = (0);
while(true){
if((i__8107__auto___17628 < len__8106__auto___17627)){
args17624.push((arguments[i__8107__auto___17628]));

var G__17629 = (i__8107__auto___17628 + (1));
i__8107__auto___17628 = G__17629;
continue;
} else {
}
break;
}

var G__17626 = args17624.length;
switch (G__17626) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17624.length)].join('')));

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
var args17631 = [];
var len__8106__auto___17634 = arguments.length;
var i__8107__auto___17635 = (0);
while(true){
if((i__8107__auto___17635 < len__8106__auto___17634)){
args17631.push((arguments[i__8107__auto___17635]));

var G__17636 = (i__8107__auto___17635 + (1));
i__8107__auto___17635 = G__17636;
continue;
} else {
}
break;
}

var G__17633 = args17631.length;
switch (G__17633) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17631.length)].join('')));

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
var args17638 = [];
var len__8106__auto___17689 = arguments.length;
var i__8107__auto___17690 = (0);
while(true){
if((i__8107__auto___17690 < len__8106__auto___17689)){
args17638.push((arguments[i__8107__auto___17690]));

var G__17691 = (i__8107__auto___17690 + (1));
i__8107__auto___17690 = G__17691;
continue;
} else {
}
break;
}

var G__17640 = args17638.length;
switch (G__17640) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17638.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15034__auto___17693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17693,out){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17693,out){
return (function (state_17664){
var state_val_17665 = (state_17664[(1)]);
if((state_val_17665 === (7))){
var inst_17659 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
var statearr_17666_17694 = state_17664__$1;
(statearr_17666_17694[(2)] = inst_17659);

(statearr_17666_17694[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17665 === (1))){
var inst_17641 = null;
var state_17664__$1 = (function (){var statearr_17667 = state_17664;
(statearr_17667[(7)] = inst_17641);

return statearr_17667;
})();
var statearr_17668_17695 = state_17664__$1;
(statearr_17668_17695[(2)] = null);

(statearr_17668_17695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17665 === (4))){
var inst_17644 = (state_17664[(8)]);
var inst_17644__$1 = (state_17664[(2)]);
var inst_17645 = (inst_17644__$1 == null);
var inst_17646 = cljs.core.not(inst_17645);
var state_17664__$1 = (function (){var statearr_17669 = state_17664;
(statearr_17669[(8)] = inst_17644__$1);

return statearr_17669;
})();
if(inst_17646){
var statearr_17670_17696 = state_17664__$1;
(statearr_17670_17696[(1)] = (5));

} else {
var statearr_17671_17697 = state_17664__$1;
(statearr_17671_17697[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17665 === (6))){
var state_17664__$1 = state_17664;
var statearr_17672_17698 = state_17664__$1;
(statearr_17672_17698[(2)] = null);

(statearr_17672_17698[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17665 === (3))){
var inst_17661 = (state_17664[(2)]);
var inst_17662 = cljs.core.async.close_BANG_(out);
var state_17664__$1 = (function (){var statearr_17673 = state_17664;
(statearr_17673[(9)] = inst_17661);

return statearr_17673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17664__$1,inst_17662);
} else {
if((state_val_17665 === (2))){
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17664__$1,(4),ch);
} else {
if((state_val_17665 === (11))){
var inst_17644 = (state_17664[(8)]);
var inst_17653 = (state_17664[(2)]);
var inst_17641 = inst_17644;
var state_17664__$1 = (function (){var statearr_17674 = state_17664;
(statearr_17674[(10)] = inst_17653);

(statearr_17674[(7)] = inst_17641);

return statearr_17674;
})();
var statearr_17675_17699 = state_17664__$1;
(statearr_17675_17699[(2)] = null);

(statearr_17675_17699[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17665 === (9))){
var inst_17644 = (state_17664[(8)]);
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17664__$1,(11),out,inst_17644);
} else {
if((state_val_17665 === (5))){
var inst_17644 = (state_17664[(8)]);
var inst_17641 = (state_17664[(7)]);
var inst_17648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17644,inst_17641);
var state_17664__$1 = state_17664;
if(inst_17648){
var statearr_17677_17700 = state_17664__$1;
(statearr_17677_17700[(1)] = (8));

} else {
var statearr_17678_17701 = state_17664__$1;
(statearr_17678_17701[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17665 === (10))){
var inst_17656 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
var statearr_17679_17702 = state_17664__$1;
(statearr_17679_17702[(2)] = inst_17656);

(statearr_17679_17702[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17665 === (8))){
var inst_17641 = (state_17664[(7)]);
var tmp17676 = inst_17641;
var inst_17641__$1 = tmp17676;
var state_17664__$1 = (function (){var statearr_17680 = state_17664;
(statearr_17680[(7)] = inst_17641__$1);

return statearr_17680;
})();
var statearr_17681_17703 = state_17664__$1;
(statearr_17681_17703[(2)] = null);

(statearr_17681_17703[(1)] = (2));


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
});})(c__15034__auto___17693,out))
;
return ((function (switch__14910__auto__,c__15034__auto___17693,out){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17685[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17685[(1)] = (1));

return statearr_17685;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_17664){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17664);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17686){if((e17686 instanceof Object)){
var ex__14914__auto__ = e17686;
var statearr_17687_17704 = state_17664;
(statearr_17687_17704[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17664);

return cljs.core.cst$kw$recur;
} else {
throw e17686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17705 = state_17664;
state_17664 = G__17705;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_17664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_17664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17693,out))
})();
var state__15036__auto__ = (function (){var statearr_17688 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17693);

return statearr_17688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17693,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17706 = [];
var len__8106__auto___17776 = arguments.length;
var i__8107__auto___17777 = (0);
while(true){
if((i__8107__auto___17777 < len__8106__auto___17776)){
args17706.push((arguments[i__8107__auto___17777]));

var G__17778 = (i__8107__auto___17777 + (1));
i__8107__auto___17777 = G__17778;
continue;
} else {
}
break;
}

var G__17708 = args17706.length;
switch (G__17708) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17706.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15034__auto___17780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17780,out){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17780,out){
return (function (state_17746){
var state_val_17747 = (state_17746[(1)]);
if((state_val_17747 === (7))){
var inst_17742 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
var statearr_17748_17781 = state_17746__$1;
(statearr_17748_17781[(2)] = inst_17742);

(statearr_17748_17781[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (1))){
var inst_17709 = (new Array(n));
var inst_17710 = inst_17709;
var inst_17711 = (0);
var state_17746__$1 = (function (){var statearr_17749 = state_17746;
(statearr_17749[(7)] = inst_17711);

(statearr_17749[(8)] = inst_17710);

return statearr_17749;
})();
var statearr_17750_17782 = state_17746__$1;
(statearr_17750_17782[(2)] = null);

(statearr_17750_17782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (4))){
var inst_17714 = (state_17746[(9)]);
var inst_17714__$1 = (state_17746[(2)]);
var inst_17715 = (inst_17714__$1 == null);
var inst_17716 = cljs.core.not(inst_17715);
var state_17746__$1 = (function (){var statearr_17751 = state_17746;
(statearr_17751[(9)] = inst_17714__$1);

return statearr_17751;
})();
if(inst_17716){
var statearr_17752_17783 = state_17746__$1;
(statearr_17752_17783[(1)] = (5));

} else {
var statearr_17753_17784 = state_17746__$1;
(statearr_17753_17784[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (15))){
var inst_17736 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
var statearr_17754_17785 = state_17746__$1;
(statearr_17754_17785[(2)] = inst_17736);

(statearr_17754_17785[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (13))){
var state_17746__$1 = state_17746;
var statearr_17755_17786 = state_17746__$1;
(statearr_17755_17786[(2)] = null);

(statearr_17755_17786[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (6))){
var inst_17711 = (state_17746[(7)]);
var inst_17732 = (inst_17711 > (0));
var state_17746__$1 = state_17746;
if(cljs.core.truth_(inst_17732)){
var statearr_17756_17787 = state_17746__$1;
(statearr_17756_17787[(1)] = (12));

} else {
var statearr_17757_17788 = state_17746__$1;
(statearr_17757_17788[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (3))){
var inst_17744 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17746__$1,inst_17744);
} else {
if((state_val_17747 === (12))){
var inst_17710 = (state_17746[(8)]);
var inst_17734 = cljs.core.vec(inst_17710);
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17746__$1,(15),out,inst_17734);
} else {
if((state_val_17747 === (2))){
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17746__$1,(4),ch);
} else {
if((state_val_17747 === (11))){
var inst_17726 = (state_17746[(2)]);
var inst_17727 = (new Array(n));
var inst_17710 = inst_17727;
var inst_17711 = (0);
var state_17746__$1 = (function (){var statearr_17758 = state_17746;
(statearr_17758[(10)] = inst_17726);

(statearr_17758[(7)] = inst_17711);

(statearr_17758[(8)] = inst_17710);

return statearr_17758;
})();
var statearr_17759_17789 = state_17746__$1;
(statearr_17759_17789[(2)] = null);

(statearr_17759_17789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (9))){
var inst_17710 = (state_17746[(8)]);
var inst_17724 = cljs.core.vec(inst_17710);
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17746__$1,(11),out,inst_17724);
} else {
if((state_val_17747 === (5))){
var inst_17711 = (state_17746[(7)]);
var inst_17714 = (state_17746[(9)]);
var inst_17710 = (state_17746[(8)]);
var inst_17719 = (state_17746[(11)]);
var inst_17718 = (inst_17710[inst_17711] = inst_17714);
var inst_17719__$1 = (inst_17711 + (1));
var inst_17720 = (inst_17719__$1 < n);
var state_17746__$1 = (function (){var statearr_17760 = state_17746;
(statearr_17760[(11)] = inst_17719__$1);

(statearr_17760[(12)] = inst_17718);

return statearr_17760;
})();
if(cljs.core.truth_(inst_17720)){
var statearr_17761_17790 = state_17746__$1;
(statearr_17761_17790[(1)] = (8));

} else {
var statearr_17762_17791 = state_17746__$1;
(statearr_17762_17791[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (14))){
var inst_17739 = (state_17746[(2)]);
var inst_17740 = cljs.core.async.close_BANG_(out);
var state_17746__$1 = (function (){var statearr_17764 = state_17746;
(statearr_17764[(13)] = inst_17739);

return statearr_17764;
})();
var statearr_17765_17792 = state_17746__$1;
(statearr_17765_17792[(2)] = inst_17740);

(statearr_17765_17792[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (10))){
var inst_17730 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
var statearr_17766_17793 = state_17746__$1;
(statearr_17766_17793[(2)] = inst_17730);

(statearr_17766_17793[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17747 === (8))){
var inst_17710 = (state_17746[(8)]);
var inst_17719 = (state_17746[(11)]);
var tmp17763 = inst_17710;
var inst_17710__$1 = tmp17763;
var inst_17711 = inst_17719;
var state_17746__$1 = (function (){var statearr_17767 = state_17746;
(statearr_17767[(7)] = inst_17711);

(statearr_17767[(8)] = inst_17710__$1);

return statearr_17767;
})();
var statearr_17768_17794 = state_17746__$1;
(statearr_17768_17794[(2)] = null);

(statearr_17768_17794[(1)] = (2));


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
});})(c__15034__auto___17780,out))
;
return ((function (switch__14910__auto__,c__15034__auto___17780,out){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17772[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17772[(1)] = (1));

return statearr_17772;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_17746){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17746);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17773){if((e17773 instanceof Object)){
var ex__14914__auto__ = e17773;
var statearr_17774_17795 = state_17746;
(statearr_17774_17795[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17746);

return cljs.core.cst$kw$recur;
} else {
throw e17773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17796 = state_17746;
state_17746 = G__17796;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_17746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_17746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17780,out))
})();
var state__15036__auto__ = (function (){var statearr_17775 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17780);

return statearr_17775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17780,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17797 = [];
var len__8106__auto___17871 = arguments.length;
var i__8107__auto___17872 = (0);
while(true){
if((i__8107__auto___17872 < len__8106__auto___17871)){
args17797.push((arguments[i__8107__auto___17872]));

var G__17873 = (i__8107__auto___17872 + (1));
i__8107__auto___17872 = G__17873;
continue;
} else {
}
break;
}

var G__17799 = args17797.length;
switch (G__17799) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17797.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15034__auto___17875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15034__auto___17875,out){
return (function (){
var f__15035__auto__ = (function (){var switch__14910__auto__ = ((function (c__15034__auto___17875,out){
return (function (state_17841){
var state_val_17842 = (state_17841[(1)]);
if((state_val_17842 === (7))){
var inst_17837 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
var statearr_17843_17876 = state_17841__$1;
(statearr_17843_17876[(2)] = inst_17837);

(statearr_17843_17876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (1))){
var inst_17800 = [];
var inst_17801 = inst_17800;
var inst_17802 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17841__$1 = (function (){var statearr_17844 = state_17841;
(statearr_17844[(7)] = inst_17802);

(statearr_17844[(8)] = inst_17801);

return statearr_17844;
})();
var statearr_17845_17877 = state_17841__$1;
(statearr_17845_17877[(2)] = null);

(statearr_17845_17877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (4))){
var inst_17805 = (state_17841[(9)]);
var inst_17805__$1 = (state_17841[(2)]);
var inst_17806 = (inst_17805__$1 == null);
var inst_17807 = cljs.core.not(inst_17806);
var state_17841__$1 = (function (){var statearr_17846 = state_17841;
(statearr_17846[(9)] = inst_17805__$1);

return statearr_17846;
})();
if(inst_17807){
var statearr_17847_17878 = state_17841__$1;
(statearr_17847_17878[(1)] = (5));

} else {
var statearr_17848_17879 = state_17841__$1;
(statearr_17848_17879[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (15))){
var inst_17831 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
var statearr_17849_17880 = state_17841__$1;
(statearr_17849_17880[(2)] = inst_17831);

(statearr_17849_17880[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (13))){
var state_17841__$1 = state_17841;
var statearr_17850_17881 = state_17841__$1;
(statearr_17850_17881[(2)] = null);

(statearr_17850_17881[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (6))){
var inst_17801 = (state_17841[(8)]);
var inst_17826 = inst_17801.length;
var inst_17827 = (inst_17826 > (0));
var state_17841__$1 = state_17841;
if(cljs.core.truth_(inst_17827)){
var statearr_17851_17882 = state_17841__$1;
(statearr_17851_17882[(1)] = (12));

} else {
var statearr_17852_17883 = state_17841__$1;
(statearr_17852_17883[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (3))){
var inst_17839 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17841__$1,inst_17839);
} else {
if((state_val_17842 === (12))){
var inst_17801 = (state_17841[(8)]);
var inst_17829 = cljs.core.vec(inst_17801);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17841__$1,(15),out,inst_17829);
} else {
if((state_val_17842 === (2))){
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17841__$1,(4),ch);
} else {
if((state_val_17842 === (11))){
var inst_17805 = (state_17841[(9)]);
var inst_17809 = (state_17841[(10)]);
var inst_17819 = (state_17841[(2)]);
var inst_17820 = [];
var inst_17821 = inst_17820.push(inst_17805);
var inst_17801 = inst_17820;
var inst_17802 = inst_17809;
var state_17841__$1 = (function (){var statearr_17853 = state_17841;
(statearr_17853[(11)] = inst_17821);

(statearr_17853[(12)] = inst_17819);

(statearr_17853[(7)] = inst_17802);

(statearr_17853[(8)] = inst_17801);

return statearr_17853;
})();
var statearr_17854_17884 = state_17841__$1;
(statearr_17854_17884[(2)] = null);

(statearr_17854_17884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (9))){
var inst_17801 = (state_17841[(8)]);
var inst_17817 = cljs.core.vec(inst_17801);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17841__$1,(11),out,inst_17817);
} else {
if((state_val_17842 === (5))){
var inst_17802 = (state_17841[(7)]);
var inst_17805 = (state_17841[(9)]);
var inst_17809 = (state_17841[(10)]);
var inst_17809__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17805) : f.call(null,inst_17805));
var inst_17810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17809__$1,inst_17802);
var inst_17811 = cljs.core.keyword_identical_QMARK_(inst_17802,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17812 = (inst_17810) || (inst_17811);
var state_17841__$1 = (function (){var statearr_17855 = state_17841;
(statearr_17855[(10)] = inst_17809__$1);

return statearr_17855;
})();
if(cljs.core.truth_(inst_17812)){
var statearr_17856_17885 = state_17841__$1;
(statearr_17856_17885[(1)] = (8));

} else {
var statearr_17857_17886 = state_17841__$1;
(statearr_17857_17886[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (14))){
var inst_17834 = (state_17841[(2)]);
var inst_17835 = cljs.core.async.close_BANG_(out);
var state_17841__$1 = (function (){var statearr_17859 = state_17841;
(statearr_17859[(13)] = inst_17834);

return statearr_17859;
})();
var statearr_17860_17887 = state_17841__$1;
(statearr_17860_17887[(2)] = inst_17835);

(statearr_17860_17887[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (10))){
var inst_17824 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
var statearr_17861_17888 = state_17841__$1;
(statearr_17861_17888[(2)] = inst_17824);

(statearr_17861_17888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17842 === (8))){
var inst_17805 = (state_17841[(9)]);
var inst_17801 = (state_17841[(8)]);
var inst_17809 = (state_17841[(10)]);
var inst_17814 = inst_17801.push(inst_17805);
var tmp17858 = inst_17801;
var inst_17801__$1 = tmp17858;
var inst_17802 = inst_17809;
var state_17841__$1 = (function (){var statearr_17862 = state_17841;
(statearr_17862[(7)] = inst_17802);

(statearr_17862[(8)] = inst_17801__$1);

(statearr_17862[(14)] = inst_17814);

return statearr_17862;
})();
var statearr_17863_17889 = state_17841__$1;
(statearr_17863_17889[(2)] = null);

(statearr_17863_17889[(1)] = (2));


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
});})(c__15034__auto___17875,out))
;
return ((function (switch__14910__auto__,c__15034__auto___17875,out){
return (function() {
var cljs$core$async$state_machine__14911__auto__ = null;
var cljs$core$async$state_machine__14911__auto____0 = (function (){
var statearr_17867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17867[(0)] = cljs$core$async$state_machine__14911__auto__);

(statearr_17867[(1)] = (1));

return statearr_17867;
});
var cljs$core$async$state_machine__14911__auto____1 = (function (state_17841){
while(true){
var ret_value__14912__auto__ = (function (){try{while(true){
var result__14913__auto__ = switch__14910__auto__(state_17841);
if(cljs.core.keyword_identical_QMARK_(result__14913__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14913__auto__;
}
break;
}
}catch (e17868){if((e17868 instanceof Object)){
var ex__14914__auto__ = e17868;
var statearr_17869_17890 = state_17841;
(statearr_17869_17890[(5)] = ex__14914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17841);

return cljs.core.cst$kw$recur;
} else {
throw e17868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14912__auto__,cljs.core.cst$kw$recur)){
var G__17891 = state_17841;
state_17841 = G__17891;
continue;
} else {
return ret_value__14912__auto__;
}
break;
}
});
cljs$core$async$state_machine__14911__auto__ = function(state_17841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14911__auto____1.call(this,state_17841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14911__auto____0;
cljs$core$async$state_machine__14911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14911__auto____1;
return cljs$core$async$state_machine__14911__auto__;
})()
;})(switch__14910__auto__,c__15034__auto___17875,out))
})();
var state__15036__auto__ = (function (){var statearr_17870 = (f__15035__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15035__auto__.cljs$core$IFn$_invoke$arity$0() : f__15035__auto__.call(null));
(statearr_17870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15034__auto___17875);

return statearr_17870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15036__auto__);
});})(c__15034__auto___17875,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

