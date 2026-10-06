(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(c){if(c.ep)return;c.ep=!0;const u=n(c);fetch(c.href,u)}})();function ny(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lc={exports:{}},yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function ry(){if($f)return yi;$f=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(r,c,u){var m=null;if(u!==void 0&&(m=""+u),c.key!==void 0&&(m=""+c.key),"key"in c){u={};for(var g in c)g!=="key"&&(u[g]=c[g])}else u=c;return c=u.ref,{$$typeof:t,type:r,key:m,ref:c!==void 0?c:null,props:u}}return yi.Fragment=s,yi.jsx=n,yi.jsxs=n,yi}var Zf;function ly(){return Zf||(Zf=1,lc.exports=ry()),lc.exports}var y=ly(),dc={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function dy(){if(Jf)return te;Jf=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),x=Symbol.iterator;function E(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,N={};function j(A,k,G){this.props=A,this.context=k,this.refs=N,this.updater=G||D}j.prototype.isReactComponent={},j.prototype.setState=function(A,k){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,k,"setState")},j.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function F(){}F.prototype=j.prototype;function B(A,k,G){this.props=A,this.context=k,this.refs=N,this.updater=G||D}var Q=B.prototype=new F;Q.constructor=B,M(Q,j.prototype),Q.isPureReactComponent=!0;var I=Array.isArray;function ae(){}var Y={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ve(A,k,G){var $=G.ref;return{$$typeof:t,type:A,key:k,ref:$!==void 0?$:null,props:G}}function Re(A,k){return ve(A.type,k,A.props)}function Ge(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function Qe(A){var k={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(G){return k[G]})}var Da=/\/+/g;function na(A,k){return typeof A=="object"&&A!==null&&A.key!=null?Qe(""+A.key):k.toString(36)}function Ve(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ae,ae):(A.status="pending",A.then(function(k){A.status==="pending"&&(A.status="fulfilled",A.value=k)},function(k){A.status==="pending"&&(A.status="rejected",A.reason=k)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function U(A,k,G,$,se){var re=typeof A;(re==="undefined"||re==="boolean")&&(A=null);var qe=!1;if(A===null)qe=!0;else switch(re){case"bigint":case"string":case"number":qe=!0;break;case"object":switch(A.$$typeof){case t:case s:qe=!0;break;case v:return qe=A._init,U(qe(A._payload),k,G,$,se)}}if(qe)return se=se(A),qe=$===""?"."+na(A,0):$,I(se)?(G="",qe!=null&&(G=qe.replace(Da,"$&/")+"/"),U(se,k,G,"",function(Ps){return Ps})):se!=null&&(Ge(se)&&(se=Re(se,G+(se.key==null||A&&A.key===se.key?"":(""+se.key).replace(Da,"$&/")+"/")+qe)),k.push(se)),1;qe=0;var ra=$===""?".":$+":";if(I(A))for(var Ue=0;Ue<A.length;Ue++)$=A[Ue],re=ra+na($,Ue),qe+=U($,k,G,re,se);else if(Ue=E(A),typeof Ue=="function")for(A=Ue.call(A),Ue=0;!($=A.next()).done;)$=$.value,re=ra+na($,Ue++),qe+=U($,k,G,re,se);else if(re==="object"){if(typeof A.then=="function")return U(Ve(A),k,G,$,se);throw k=String(A),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return qe}function _(A,k,G){if(A==null)return A;var $=[],se=0;return U(A,$,"","",function(re){return k.call(G,re,se++)}),$}function Z(A){if(A._status===-1){var k=A._result;k=k(),k.then(function(G){(A._status===0||A._status===-1)&&(A._status=1,A._result=G)},function(G){(A._status===0||A._status===-1)&&(A._status=2,A._result=G)}),A._status===-1&&(A._status=0,A._result=k)}if(A._status===1)return A._result.default;throw A._result}var ce=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},ge={map:_,forEach:function(A,k,G){_(A,function(){k.apply(this,arguments)},G)},count:function(A){var k=0;return _(A,function(){k++}),k},toArray:function(A){return _(A,function(k){return k})||[]},only:function(A){if(!Ge(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return te.Activity=q,te.Children=ge,te.Component=j,te.Fragment=n,te.Profiler=c,te.PureComponent=B,te.StrictMode=r,te.Suspense=h,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,te.__COMPILER_RUNTIME={__proto__:null,c:function(A){return Y.H.useMemoCache(A)}},te.cache=function(A){return function(){return A.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(A,k,G){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var $=M({},A.props),se=A.key;if(k!=null)for(re in k.key!==void 0&&(se=""+k.key),k)!W.call(k,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&k.ref===void 0||($[re]=k[re]);var re=arguments.length-2;if(re===1)$.children=G;else if(1<re){for(var qe=Array(re),ra=0;ra<re;ra++)qe[ra]=arguments[ra+2];$.children=qe}return ve(A.type,se,$)},te.createContext=function(A){return A={$$typeof:m,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},te.createElement=function(A,k,G){var $,se={},re=null;if(k!=null)for($ in k.key!==void 0&&(re=""+k.key),k)W.call(k,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(se[$]=k[$]);var qe=arguments.length-2;if(qe===1)se.children=G;else if(1<qe){for(var ra=Array(qe),Ue=0;Ue<qe;Ue++)ra[Ue]=arguments[Ue+2];se.children=ra}if(A&&A.defaultProps)for($ in qe=A.defaultProps,qe)se[$]===void 0&&(se[$]=qe[$]);return ve(A,re,se)},te.createRef=function(){return{current:null}},te.forwardRef=function(A){return{$$typeof:g,render:A}},te.isValidElement=Ge,te.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:Z}},te.memo=function(A,k){return{$$typeof:f,type:A,compare:k===void 0?null:k}},te.startTransition=function(A){var k=Y.T,G={};Y.T=G;try{var $=A(),se=Y.S;se!==null&&se(G,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(ae,ce)}catch(re){ce(re)}finally{k!==null&&G.types!==null&&(k.types=G.types),Y.T=k}},te.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},te.use=function(A){return Y.H.use(A)},te.useActionState=function(A,k,G){return Y.H.useActionState(A,k,G)},te.useCallback=function(A,k){return Y.H.useCallback(A,k)},te.useContext=function(A){return Y.H.useContext(A)},te.useDebugValue=function(){},te.useDeferredValue=function(A,k){return Y.H.useDeferredValue(A,k)},te.useEffect=function(A,k){return Y.H.useEffect(A,k)},te.useEffectEvent=function(A){return Y.H.useEffectEvent(A)},te.useId=function(){return Y.H.useId()},te.useImperativeHandle=function(A,k,G){return Y.H.useImperativeHandle(A,k,G)},te.useInsertionEffect=function(A,k){return Y.H.useInsertionEffect(A,k)},te.useLayoutEffect=function(A,k){return Y.H.useLayoutEffect(A,k)},te.useMemo=function(A,k){return Y.H.useMemo(A,k)},te.useOptimistic=function(A,k){return Y.H.useOptimistic(A,k)},te.useReducer=function(A,k,G){return Y.H.useReducer(A,k,G)},te.useRef=function(A){return Y.H.useRef(A)},te.useState=function(A){return Y.H.useState(A)},te.useSyncExternalStore=function(A,k,G){return Y.H.useSyncExternalStore(A,k,G)},te.useTransition=function(){return Y.H.useTransition()},te.version="19.2.4",te}var Wf;function lu(){return Wf||(Wf=1,dc.exports=dy()),dc.exports}var z=lu();const cy=ny(z);var cc={exports:{}},xi={},uc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function uy(){return eh||(eh=1,(function(t){function s(U,_){var Z=U.length;U.push(_);e:for(;0<Z;){var ce=Z-1>>>1,ge=U[ce];if(0<c(ge,_))U[ce]=_,U[Z]=ge,Z=ce;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var _=U[0],Z=U.pop();if(Z!==_){U[0]=Z;e:for(var ce=0,ge=U.length,A=ge>>>1;ce<A;){var k=2*(ce+1)-1,G=U[k],$=k+1,se=U[$];if(0>c(G,Z))$<ge&&0>c(se,G)?(U[ce]=se,U[$]=Z,ce=$):(U[ce]=G,U[k]=Z,ce=k);else if($<ge&&0>c(se,Z))U[ce]=se,U[$]=Z,ce=$;else break e}}return _}function c(U,_){var Z=U.sortIndex-_.sortIndex;return Z!==0?Z:U.id-_.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var m=Date,g=m.now();t.unstable_now=function(){return m.now()-g}}var h=[],f=[],v=1,q=null,x=3,E=!1,D=!1,M=!1,N=!1,j=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function Q(U){for(var _=n(f);_!==null;){if(_.callback===null)r(f);else if(_.startTime<=U)r(f),_.sortIndex=_.expirationTime,s(h,_);else break;_=n(f)}}function I(U){if(M=!1,Q(U),!D)if(n(h)!==null)D=!0,ae||(ae=!0,Qe());else{var _=n(f);_!==null&&Ve(I,_.startTime-U)}}var ae=!1,Y=-1,W=5,ve=-1;function Re(){return N?!0:!(t.unstable_now()-ve<W)}function Ge(){if(N=!1,ae){var U=t.unstable_now();ve=U;var _=!0;try{e:{D=!1,M&&(M=!1,F(Y),Y=-1),E=!0;var Z=x;try{a:{for(Q(U),q=n(h);q!==null&&!(q.expirationTime>U&&Re());){var ce=q.callback;if(typeof ce=="function"){q.callback=null,x=q.priorityLevel;var ge=ce(q.expirationTime<=U);if(U=t.unstable_now(),typeof ge=="function"){q.callback=ge,Q(U),_=!0;break a}q===n(h)&&r(h),Q(U)}else r(h);q=n(h)}if(q!==null)_=!0;else{var A=n(f);A!==null&&Ve(I,A.startTime-U),_=!1}}break e}finally{q=null,x=Z,E=!1}_=void 0}}finally{_?Qe():ae=!1}}}var Qe;if(typeof B=="function")Qe=function(){B(Ge)};else if(typeof MessageChannel<"u"){var Da=new MessageChannel,na=Da.port2;Da.port1.onmessage=Ge,Qe=function(){na.postMessage(null)}}else Qe=function(){j(Ge,0)};function Ve(U,_){Y=j(function(){U(t.unstable_now())},_)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(U){switch(x){case 1:case 2:case 3:var _=3;break;default:_=x}var Z=x;x=_;try{return U()}finally{x=Z}},t.unstable_requestPaint=function(){N=!0},t.unstable_runWithPriority=function(U,_){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=x;x=U;try{return _()}finally{x=Z}},t.unstable_scheduleCallback=function(U,_,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,U){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Z+ge,U={id:v++,callback:_,priorityLevel:U,startTime:Z,expirationTime:ge,sortIndex:-1},Z>ce?(U.sortIndex=Z,s(f,U),n(h)===null&&U===n(f)&&(M?(F(Y),Y=-1):M=!0,Ve(I,Z-ce))):(U.sortIndex=ge,s(h,U),D||E||(D=!0,ae||(ae=!0,Qe()))),U},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(U){var _=x;return function(){var Z=x;x=_;try{return U.apply(this,arguments)}finally{x=Z}}}})(mc)),mc}var ah;function my(){return ah||(ah=1,uc.exports=uy()),uc.exports}var pc={exports:{}},ta={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function py(){if(oh)return ta;oh=1;var t=lu();function s(h){var f="https://react.dev/errors/"+h;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)f+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(s(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(h,f,v){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:q==null?null:""+q,children:h,containerInfo:f,implementation:v}}var m=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,f){if(h==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return ta.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ta.createPortal=function(h,f){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(s(299));return u(h,f,null,v)},ta.flushSync=function(h){var f=m.T,v=r.p;try{if(m.T=null,r.p=2,h)return h()}finally{m.T=f,r.p=v,r.d.f()}},ta.preconnect=function(h,f){typeof h=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,r.d.C(h,f))},ta.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},ta.preinit=function(h,f){if(typeof h=="string"&&f&&typeof f.as=="string"){var v=f.as,q=g(v,f.crossOrigin),x=typeof f.integrity=="string"?f.integrity:void 0,E=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;v==="style"?r.d.S(h,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:q,integrity:x,fetchPriority:E}):v==="script"&&r.d.X(h,{crossOrigin:q,integrity:x,fetchPriority:E,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},ta.preinitModule=function(h,f){if(typeof h=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var v=g(f.as,f.crossOrigin);r.d.M(h,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&r.d.M(h)},ta.preload=function(h,f){if(typeof h=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var v=f.as,q=g(v,f.crossOrigin);r.d.L(h,v,{crossOrigin:q,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},ta.preloadModule=function(h,f){if(typeof h=="string")if(f){var v=g(f.as,f.crossOrigin);r.d.m(h,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else r.d.m(h)},ta.requestFormReset=function(h){r.d.r(h)},ta.unstable_batchedUpdates=function(h,f){return h(f)},ta.useFormState=function(h,f,v){return m.H.useFormState(h,f,v)},ta.useFormStatus=function(){return m.H.useHostTransitionStatus()},ta.version="19.2.4",ta}var th;function gy(){if(th)return pc.exports;th=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(s){console.error(s)}}return t(),pc.exports=py(),pc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function fy(){if(sh)return xi;sh=1;var t=my(),s=lu(),n=gy();function r(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var a=e,o=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(o=a.return),e=a.return;while(e)}return a.tag===3?o:null}function m(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function f(e){var a=e.alternate;if(!a){if(a=u(e),a===null)throw Error(r(188));return a!==e?null:e}for(var o=e,i=a;;){var l=o.return;if(l===null)break;var d=l.alternate;if(d===null){if(i=l.return,i!==null){o=i;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===o)return h(l),e;if(d===i)return h(l),a;d=d.sibling}throw Error(r(188))}if(o.return!==i.return)o=l,i=d;else{for(var p=!1,b=l.child;b;){if(b===o){p=!0,o=l,i=d;break}if(b===i){p=!0,i=l,o=d;break}b=b.sibling}if(!p){for(b=d.child;b;){if(b===o){p=!0,o=d,i=l;break}if(b===i){p=!0,i=d,o=l;break}b=b.sibling}if(!p)throw Error(r(189))}}if(o.alternate!==i)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?e:a}function v(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=v(e),a!==null)return a;e=e.sibling}return null}var q=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),Re=Symbol.for("react.memo_cache_sentinel"),Ge=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=Ge&&e[Ge]||e["@@iterator"],typeof e=="function"?e:null)}var Da=Symbol.for("react.client.reference");function na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Da?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case j:return"Profiler";case N:return"StrictMode";case I:return"Suspense";case ae:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case B:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case Q:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return a=e.displayName||null,a!==null?a:na(e.type)||"Memo";case W:a=e._payload,e=e._init;try{return na(e(a))}catch{}}return null}var Ve=Array.isArray,U=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ce=[],ge=-1;function A(e){return{current:e}}function k(e){0>ge||(e.current=ce[ge],ce[ge]=null,ge--)}function G(e,a){ge++,ce[ge]=e.current,e.current=a}var $=A(null),se=A(null),re=A(null),qe=A(null);function ra(e,a){switch(G(re,a),G(se,e),G($,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?qf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=qf(a),e=yf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k($),G($,e)}function Ue(){k($),k(se),k(re)}function Ps(e){e.memoizedState!==null&&G(qe,e);var a=$.current,o=yf(a,e.type);a!==o&&(G(se,e),G($,o))}function Ii(e){se.current===e&&(k($),k(se)),qe.current===e&&(k(qe),hi._currentValue=Z)}var Ir,Yu;function nt(e){if(Ir===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);Ir=a&&a[1]||"",Yu=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ir+e+Yu}var Gr=!1;function Qr(e,a){if(!e||Gr)return"";Gr=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(O){var V=O}Reflect.construct(e,[],X)}else{try{X.call()}catch(O){V=O}e.call(X.prototype)}}else{try{throw Error()}catch(O){V=O}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(O){if(O&&V&&typeof O.stack=="string")return[O.stack,V.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),p=d[0],b=d[1];if(p&&b){var C=p.split(`
`),R=b.split(`
`);for(l=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(i===C.length||l===R.length)for(i=C.length-1,l=R.length-1;1<=i&&0<=l&&C[i]!==R[l];)l--;for(;1<=i&&0<=l;i--,l--)if(C[i]!==R[l]){if(i!==1||l!==1)do if(i--,l--,0>l||C[i]!==R[l]){var w=`
`+C[i].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=i&&0<=l);break}}}finally{Gr=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?nt(o):""}function Ub(e,a){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return e.child!==a&&a!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return Qr(e.type,!1);case 11:return Qr(e.type.render,!1);case 1:return Qr(e.type,!0);case 31:return nt("Activity");default:return""}}function Ku(e){try{var a="",o=null;do a+=Ub(e,o),o=e,e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Hr=Object.prototype.hasOwnProperty,Yr=t.unstable_scheduleCallback,Kr=t.unstable_cancelCallback,Lb=t.unstable_shouldYield,Bb=t.unstable_requestPaint,ba=t.unstable_now,Xb=t.unstable_getCurrentPriorityLevel,$u=t.unstable_ImmediatePriority,Zu=t.unstable_UserBlockingPriority,Gi=t.unstable_NormalPriority,kb=t.unstable_LowPriority,Ju=t.unstable_IdlePriority,Fb=t.log,_b=t.unstable_setDisableYieldValue,Ds=null,qa=null;function Ro(e){if(typeof Fb=="function"&&_b(e),qa&&typeof qa.setStrictMode=="function")try{qa.setStrictMode(Ds,e)}catch{}}var ya=Math.clz32?Math.clz32:Qb,Ib=Math.log,Gb=Math.LN2;function Qb(e){return e>>>=0,e===0?32:31-(Ib(e)/Gb|0)|0}var Qi=256,Hi=262144,Yi=4194304;function rt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,a,o){var i=e.pendingLanes;if(i===0)return 0;var l=0,d=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~d,i!==0?l=rt(i):(p&=b,p!==0?l=rt(p):o||(o=b&~e,o!==0&&(l=rt(o))))):(b=i&~d,b!==0?l=rt(b):p!==0?l=rt(p):o||(o=i&~e,o!==0&&(l=rt(o)))),l===0?0:a!==0&&a!==l&&(a&d)===0&&(d=l&-l,o=a&-a,d>=o||d===32&&(o&4194048)!==0)?a:l}function Ts(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Hb(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wu(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function $r(e){for(var a=[],o=0;31>o;o++)a.push(e);return a}function Rs(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yb(e,a,o,i,l,d){var p=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var b=e.entanglements,C=e.expirationTimes,R=e.hiddenUpdates;for(o=p&~o;0<o;){var w=31-ya(o),X=1<<w;b[w]=0,C[w]=-1;var V=R[w];if(V!==null)for(R[w]=null,w=0;w<V.length;w++){var O=V[w];O!==null&&(O.lane&=-536870913)}o&=~X}i!==0&&em(e,i,0),d!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=d&~(p&~a))}function em(e,a,o){e.pendingLanes|=a,e.suspendedLanes&=~a;var i=31-ya(a);e.entangledLanes|=a,e.entanglements[i]=e.entanglements[i]|1073741824|o&261930}function am(e,a){var o=e.entangledLanes|=a;for(e=e.entanglements;o;){var i=31-ya(o),l=1<<i;l&a|e[i]&a&&(e[i]|=a),o&=~l}}function om(e,a){var o=a&-a;return o=(o&42)!==0?1:Zr(o),(o&(e.suspendedLanes|a))!==0?0:o}function Zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tm(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:_f(e.type))}function sm(e,a){var o=_.p;try{return _.p=e,a()}finally{_.p=o}}var Vo=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Vo,ua="__reactProps$"+Vo,Rt="__reactContainer$"+Vo,Wr="__reactEvents$"+Vo,Kb="__reactListeners$"+Vo,$b="__reactHandles$"+Vo,im="__reactResources$"+Vo,Vs="__reactMarker$"+Vo;function el(e){delete e[Ze],delete e[ua],delete e[Wr],delete e[Kb],delete e[$b]}function Vt(e){var a=e[Ze];if(a)return a;for(var o=e.parentNode;o;){if(a=o[Rt]||o[Ze]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(e=Pf(e);e!==null;){if(o=e[Ze])return o;e=Pf(e)}return a}e=o,o=e.parentNode}return null}function jt(e){if(e=e[Ze]||e[Rt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function js(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(r(33))}function Mt(e){var a=e[im];return a||(a=e[im]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ke(e){e[Vs]=!0}var nm=new Set,rm={};function lt(e,a){Ot(e,a),Ot(e+"Capture",a)}function Ot(e,a){for(rm[e]=a,e=0;e<a.length;e++)nm.add(a[e])}var Zb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lm={},dm={};function Jb(e){return Hr.call(dm,e)?!0:Hr.call(lm,e)?!1:Zb.test(e)?dm[e]=!0:(lm[e]=!0,!1)}function $i(e,a,o){if(Jb(a))if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+o)}}function Zi(e,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+o)}}function ro(e,a,o,i){if(i===null)e.removeAttribute(o);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(a,o,""+i)}}function Ta(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cm(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Wb(e,a,o){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,d=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(p){o=""+p,d.call(this,p)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function al(e){if(!e._valueTracker){var a=cm(e)?"checked":"value";e._valueTracker=Wb(e,a,""+e[a])}}function um(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var o=a.getValue(),i="";return e&&(i=cm(e)?e.checked?"true":"false":e.value),e=i,e!==o?(a.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var e2=/[\n"\\]/g;function Ra(e){return e.replace(e2,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ol(e,a,o,i,l,d,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),a!=null?p==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ta(a)):e.value!==""+Ta(a)&&(e.value=""+Ta(a)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),a!=null?tl(e,p,Ta(a)):o!=null?tl(e,p,Ta(o)):i!=null&&e.removeAttribute("value"),l==null&&d!=null&&(e.defaultChecked=!!d),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ta(b):e.removeAttribute("name")}function mm(e,a,o,i,l,d,p,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),a!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||a!=null)){al(e);return}o=o!=null?""+Ta(o):"",a=a!=null?""+Ta(a):o,b||a===e.value||(e.value=a),e.defaultValue=a}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),al(e)}function tl(e,a,o){a==="number"&&Ji(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Nt(e,a,o,i){if(e=e.options,a){a={};for(var l=0;l<o.length;l++)a["$"+o[l]]=!0;for(o=0;o<e.length;o++)l=a.hasOwnProperty("$"+e[o].value),e[o].selected!==l&&(e[o].selected=l),l&&i&&(e[o].defaultSelected=!0)}else{for(o=""+Ta(o),a=null,l=0;l<e.length;l++){if(e[l].value===o){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function pm(e,a,o){if(a!=null&&(a=""+Ta(a),a!==e.value&&(e.value=a),o==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=o!=null?""+Ta(o):""}function gm(e,a,o,i){if(a==null){if(i!=null){if(o!=null)throw Error(r(92));if(Ve(i)){if(1<i.length)throw Error(r(93));i=i[0]}o=i}o==null&&(o=""),a=o}o=Ta(a),e.defaultValue=o,i=e.textContent,i===o&&i!==""&&i!==null&&(e.value=i),al(e)}function wt(e,a){if(a){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=a;return}}e.textContent=a}var a2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(e,a,o){var i=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?i?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":i?e.setProperty(a,o):typeof o!="number"||o===0||a2.has(a)?a==="float"?e.cssFloat=o:e[a]=(""+o).trim():e[a]=o+"px"}function hm(e,a,o){if(a!=null&&typeof a!="object")throw Error(r(62));if(e=e.style,o!=null){for(var i in o)!o.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in a)i=a[l],a.hasOwnProperty(l)&&o[l]!==i&&fm(e,l,i)}else for(var d in a)a.hasOwnProperty(d)&&fm(e,d,a[d])}function sl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(e){return t2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function lo(){}var il=null;function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ut=null,Lt=null;function vm(e){var a=jt(e);if(a&&(e=a.stateNode)){var o=e[ua]||null;e:switch(e=a.stateNode,a.type){case"input":if(ol(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ra(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var i=o[a];if(i!==e&&i.form===e.form){var l=i[ua]||null;if(!l)throw Error(r(90));ol(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<o.length;a++)i=o[a],i.form===e.form&&um(i)}break e;case"textarea":pm(e,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Nt(e,!!o.multiple,a,!1)}}}var rl=!1;function bm(e,a,o){if(rl)return e(a,o);rl=!0;try{var i=e(a);return i}finally{if(rl=!1,(Ut!==null||Lt!==null)&&(kn(),Ut&&(a=Ut,e=Lt,Lt=Ut=null,vm(a),e)))for(a=0;a<e.length;a++)vm(e[a])}}function Ms(e,a){var o=e.stateNode;if(o===null)return null;var i=o[ua]||null;if(i===null)return null;o=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(r(231,a,typeof o));return o}var co=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=!1;if(co)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){ll=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{ll=!1}var jo=null,dl=null,en=null;function qm(){if(en)return en;var e,a=dl,o=a.length,i,l="value"in jo?jo.value:jo.textContent,d=l.length;for(e=0;e<o&&a[e]===l[e];e++);var p=o-e;for(i=1;i<=p&&a[o-i]===l[d-i];i++);return en=l.slice(e,1<i?1-i:void 0)}function an(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function on(){return!0}function ym(){return!1}function ma(e){function a(o,i,l,d,p){this._reactName=o,this._targetInst=l,this.type=i,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(o=e[b],this[b]=o?o(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?on:ym,this.isPropagationStopped=ym,this}return q(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=on)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=on)},persist:function(){},isPersistent:on}),a}var dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tn=ma(dt),Ns=q({},dt,{view:0,detail:0}),s2=ma(Ns),cl,ul,ws,sn=q({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ws&&(ws&&e.type==="mousemove"?(cl=e.screenX-ws.screenX,ul=e.screenY-ws.screenY):ul=cl=0,ws=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),xm=ma(sn),i2=q({},sn,{dataTransfer:0}),n2=ma(i2),r2=q({},Ns,{relatedTarget:0}),ml=ma(r2),l2=q({},dt,{animationName:0,elapsedTime:0,pseudoElement:0}),d2=ma(l2),c2=q({},dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u2=ma(c2),m2=q({},dt,{data:0}),Cm=ma(m2),p2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h2(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=f2[e])?!!a[e]:!1}function pl(){return h2}var v2=q({},Ns,{key:function(e){if(e.key){var a=p2[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=an(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?an(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?an(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b2=ma(v2),q2=q({},sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=ma(q2),y2=q({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),x2=ma(y2),C2=q({},dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),S2=ma(C2),E2=q({},sn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A2=ma(E2),z2=q({},dt,{newState:0,oldState:0}),P2=ma(z2),D2=[9,13,27,32],gl=co&&"CompositionEvent"in window,Us=null;co&&"documentMode"in document&&(Us=document.documentMode);var T2=co&&"TextEvent"in window&&!Us,Em=co&&(!gl||Us&&8<Us&&11>=Us),Am=" ",zm=!1;function Pm(e,a){switch(e){case"keyup":return D2.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function R2(e,a){switch(e){case"compositionend":return Dm(a);case"keypress":return a.which!==32?null:(zm=!0,Am);case"textInput":return e=a.data,e===Am&&zm?null:e;default:return null}}function V2(e,a){if(Bt)return e==="compositionend"||!gl&&Pm(e,a)?(e=qm(),en=dl=jo=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Em&&a.locale!=="ko"?null:a.data;default:return null}}var j2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!j2[e.type]:a==="textarea"}function Rm(e,a,o,i){Ut?Lt?Lt.push(i):Lt=[i]:Ut=i,a=Yn(a,"onChange"),0<a.length&&(o=new tn("onChange","change",null,o,i),e.push({event:o,listeners:a}))}var Ls=null,Bs=null;function M2(e){pf(e,0)}function nn(e){var a=js(e);if(um(a))return e}function Vm(e,a){if(e==="change")return a}var jm=!1;if(co){var fl;if(co){var hl="oninput"in document;if(!hl){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),hl=typeof Mm.oninput=="function"}fl=hl}else fl=!1;jm=fl&&(!document.documentMode||9<document.documentMode)}function Om(){Ls&&(Ls.detachEvent("onpropertychange",Nm),Bs=Ls=null)}function Nm(e){if(e.propertyName==="value"&&nn(Bs)){var a=[];Rm(a,Bs,e,nl(e)),bm(M2,a)}}function O2(e,a,o){e==="focusin"?(Om(),Ls=a,Bs=o,Ls.attachEvent("onpropertychange",Nm)):e==="focusout"&&Om()}function N2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nn(Bs)}function w2(e,a){if(e==="click")return nn(a)}function U2(e,a){if(e==="input"||e==="change")return nn(a)}function L2(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var xa=typeof Object.is=="function"?Object.is:L2;function Xs(e,a){if(xa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var o=Object.keys(e),i=Object.keys(a);if(o.length!==i.length)return!1;for(i=0;i<o.length;i++){var l=o[i];if(!Hr.call(a,l)||!xa(e[l],a[l]))return!1}return!0}function wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Um(e,a){var o=wm(e);e=0;for(var i;o;){if(o.nodeType===3){if(i=e+o.textContent.length,e<=a&&i>=a)return{node:o,offset:a-e};e=i}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=wm(o)}}function Lm(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Lm(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ji(e.document);a instanceof e.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)e=a.contentWindow;else break;a=Ji(e.document)}return a}function vl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var B2=co&&"documentMode"in document&&11>=document.documentMode,Xt=null,bl=null,ks=null,ql=!1;function Xm(e,a,o){var i=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ql||Xt==null||Xt!==Ji(i)||(i=Xt,"selectionStart"in i&&vl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ks&&Xs(ks,i)||(ks=i,i=Yn(bl,"onSelect"),0<i.length&&(a=new tn("onSelect","select",null,a,o),e.push({event:a,listeners:i}),a.target=Xt)))}function ct(e,a){var o={};return o[e.toLowerCase()]=a.toLowerCase(),o["Webkit"+e]="webkit"+a,o["Moz"+e]="moz"+a,o}var kt={animationend:ct("Animation","AnimationEnd"),animationiteration:ct("Animation","AnimationIteration"),animationstart:ct("Animation","AnimationStart"),transitionrun:ct("Transition","TransitionRun"),transitionstart:ct("Transition","TransitionStart"),transitioncancel:ct("Transition","TransitionCancel"),transitionend:ct("Transition","TransitionEnd")},yl={},km={};co&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function ut(e){if(yl[e])return yl[e];if(!kt[e])return e;var a=kt[e],o;for(o in a)if(a.hasOwnProperty(o)&&o in km)return yl[e]=a[o];return e}var Fm=ut("animationend"),_m=ut("animationiteration"),Im=ut("animationstart"),X2=ut("transitionrun"),k2=ut("transitionstart"),F2=ut("transitioncancel"),Gm=ut("transitionend"),Qm=new Map,xl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xl.push("scrollEnd");function _a(e,a){Qm.set(e,a),lt(a,[e])}var rn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Va=[],Ft=0,Cl=0;function ln(){for(var e=Ft,a=Cl=Ft=0;a<e;){var o=Va[a];Va[a++]=null;var i=Va[a];Va[a++]=null;var l=Va[a];Va[a++]=null;var d=Va[a];if(Va[a++]=null,i!==null&&l!==null){var p=i.pending;p===null?l.next=l:(l.next=p.next,p.next=l),i.pending=l}d!==0&&Hm(o,l,d)}}function dn(e,a,o,i){Va[Ft++]=e,Va[Ft++]=a,Va[Ft++]=o,Va[Ft++]=i,Cl|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Sl(e,a,o,i){return dn(e,a,o,i),cn(e)}function mt(e,a){return dn(e,null,null,a),cn(e)}function Hm(e,a,o){e.lanes|=o;var i=e.alternate;i!==null&&(i.lanes|=o);for(var l=!1,d=e.return;d!==null;)d.childLanes|=o,i=d.alternate,i!==null&&(i.childLanes|=o),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(l=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,l&&a!==null&&(l=31-ya(o),e=d.hiddenUpdates,i=e[l],i===null?e[l]=[a]:i.push(a),a.lane=o|536870912),d):null}function cn(e){if(50<di)throw di=0,jd=null,Error(r(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var _t={};function _2(e,a,o,i){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ca(e,a,o,i){return new _2(e,a,o,i)}function El(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uo(e,a){var o=e.alternate;return o===null?(o=Ca(e.tag,a,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=a,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,a=e.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Ym(e,a){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,a=o.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function un(e,a,o,i,l,d){var p=0;if(i=e,typeof e=="function")El(e)&&(p=1);else if(typeof e=="string")p=Yq(e,o,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=Ca(31,o,a,l),e.elementType=ve,e.lanes=d,e;case M:return pt(o.children,l,d,a);case N:p=8,l|=24;break;case j:return e=Ca(12,o,a,l|2),e.elementType=j,e.lanes=d,e;case I:return e=Ca(13,o,a,l),e.elementType=I,e.lanes=d,e;case ae:return e=Ca(19,o,a,l),e.elementType=ae,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:p=10;break e;case F:p=9;break e;case Q:p=11;break e;case Y:p=14;break e;case W:p=16,i=null;break e}p=29,o=Error(r(130,e===null?"null":typeof e,"")),i=null}return a=Ca(p,o,a,l),a.elementType=e,a.type=i,a.lanes=d,a}function pt(e,a,o,i){return e=Ca(7,e,i,a),e.lanes=o,e}function Al(e,a,o){return e=Ca(6,e,null,a),e.lanes=o,e}function Km(e){var a=Ca(18,null,null,0);return a.stateNode=e,a}function zl(e,a,o){return a=Ca(4,e.children!==null?e.children:[],e.key,a),a.lanes=o,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var $m=new WeakMap;function ja(e,a){if(typeof e=="object"&&e!==null){var o=$m.get(e);return o!==void 0?o:(a={value:e,source:a,stack:Ku(a)},$m.set(e,a),a)}return{value:e,source:a,stack:Ku(a)}}var It=[],Gt=0,mn=null,Fs=0,Ma=[],Oa=0,Mo=null,eo=1,ao="";function mo(e,a){It[Gt++]=Fs,It[Gt++]=mn,mn=e,Fs=a}function Zm(e,a,o){Ma[Oa++]=eo,Ma[Oa++]=ao,Ma[Oa++]=Mo,Mo=e;var i=eo;e=ao;var l=32-ya(i)-1;i&=~(1<<l),o+=1;var d=32-ya(a)+l;if(30<d){var p=l-l%5;d=(i&(1<<p)-1).toString(32),i>>=p,l-=p,eo=1<<32-ya(a)+l|o<<l|i,ao=d+e}else eo=1<<d|o<<l|i,ao=e}function Pl(e){e.return!==null&&(mo(e,1),Zm(e,1,0))}function Dl(e){for(;e===mn;)mn=It[--Gt],It[Gt]=null,Fs=It[--Gt],It[Gt]=null;for(;e===Mo;)Mo=Ma[--Oa],Ma[Oa]=null,ao=Ma[--Oa],Ma[Oa]=null,eo=Ma[--Oa],Ma[Oa]=null}function Jm(e,a){Ma[Oa++]=eo,Ma[Oa++]=ao,Ma[Oa++]=Mo,eo=a.id,ao=a.overflow,Mo=e}var Je=null,Pe=null,pe=!1,Oo=null,Na=!1,Tl=Error(r(519));function No(e){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _s(ja(a,e)),Tl}function Wm(e){var a=e.stateNode,o=e.type,i=e.memoizedProps;switch(a[Ze]=e,a[ua]=i,o){case"dialog":de("cancel",a),de("close",a);break;case"iframe":case"object":case"embed":de("load",a);break;case"video":case"audio":for(o=0;o<ui.length;o++)de(ui[o],a);break;case"source":de("error",a);break;case"img":case"image":case"link":de("error",a),de("load",a);break;case"details":de("toggle",a);break;case"input":de("invalid",a),mm(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",a);break;case"textarea":de("invalid",a),gm(a,i.value,i.defaultValue,i.children)}o=i.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||i.suppressHydrationWarning===!0||vf(a.textContent,o)?(i.popover!=null&&(de("beforetoggle",a),de("toggle",a)),i.onScroll!=null&&de("scroll",a),i.onScrollEnd!=null&&de("scrollend",a),i.onClick!=null&&(a.onclick=lo),a=!0):a=!1,a||No(e,!0)}function ep(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Na=!1;return;case 27:case 3:Na=!0;return;default:Je=Je.return}}function Qt(e){if(e!==Je)return!1;if(!pe)return ep(e),pe=!0,!1;var a=e.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||Hd(e.type,e.memoizedProps)),o=!o),o&&Pe&&No(e),ep(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Pe=zf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Pe=zf(e)}else a===27?(a=Pe,Ko(e.type)?(e=Jd,Jd=null,Pe=e):Pe=a):Pe=Je?Ua(e.stateNode.nextSibling):null;return!0}function gt(){Pe=Je=null,pe=!1}function Rl(){var e=Oo;return e!==null&&(ha===null?ha=e:ha.push.apply(ha,e),Oo=null),e}function _s(e){Oo===null?Oo=[e]:Oo.push(e)}var Vl=A(null),ft=null,po=null;function wo(e,a,o){G(Vl,a._currentValue),a._currentValue=o}function go(e){e._currentValue=Vl.current,k(Vl)}function jl(e,a,o){for(;e!==null;){var i=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),e===o)break;e=e.return}}function Ml(e,a,o,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var d=l.dependencies;if(d!==null){var p=l.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=l;for(var C=0;C<a.length;C++)if(b.context===a[C]){d.lanes|=o,b=d.alternate,b!==null&&(b.lanes|=o),jl(d.return,o,e),i||(p=null);break e}d=b.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(r(341));p.lanes|=o,d=p.alternate,d!==null&&(d.lanes|=o),jl(p,o,e),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===e){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Ht(e,a,o,i){e=null;for(var l=a,d=!1;l!==null;){if(!d){if((l.flags&524288)!==0)d=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var b=l.type;xa(l.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(l===qe.current){if(p=l.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}l=l.return}e!==null&&Ml(a,e,o,i),a.flags|=262144}function pn(e){for(e=e.firstContext;e!==null;){if(!xa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ht(e){ft=e,po=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return ap(ft,e)}function gn(e,a){return ft===null&&ht(e),ap(e,a)}function ap(e,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},po===null){if(e===null)throw Error(r(308));po=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else po=po.next=a;return o}var I2=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(o,i){e.push(i)}};this.abort=function(){a.aborted=!0,e.forEach(function(o){return o()})}},G2=t.unstable_scheduleCallback,Q2=t.unstable_NormalPriority,Xe={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ol(){return{controller:new I2,data:new Map,refCount:0}}function Is(e){e.refCount--,e.refCount===0&&G2(Q2,function(){e.controller.abort()})}var Gs=null,Nl=0,Yt=0,Kt=null;function H2(e,a){if(Gs===null){var o=Gs=[];Nl=0,Yt=Ld(),Kt={status:"pending",value:void 0,then:function(i){o.push(i)}}}return Nl++,a.then(op,op),a}function op(){if(--Nl===0&&Gs!==null){Kt!==null&&(Kt.status="fulfilled");var e=Gs;Gs=null,Yt=0,Kt=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Y2(e,a){var o=[],i={status:"pending",value:null,reason:null,then:function(l){o.push(l)}};return e.then(function(){i.status="fulfilled",i.value=a;for(var l=0;l<o.length;l++)(0,o[l])(a)},function(l){for(i.status="rejected",i.reason=l,l=0;l<o.length;l++)(0,o[l])(void 0)}),i}var tp=U.S;U.S=function(e,a){Xg=ba(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&H2(e,a),tp!==null&&tp(e,a)};var vt=A(null);function wl(){var e=vt.current;return e!==null?e:Ae.pooledCache}function fn(e,a){a===null?G(vt,vt.current):G(vt,a.pool)}function sp(){var e=wl();return e===null?null:{parent:Xe._currentValue,pool:e}}var $t=Error(r(460)),Ul=Error(r(474)),hn=Error(r(542)),vn={then:function(){}};function ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function np(e,a,o){switch(o=e[o],o===void 0?e.push(a):o!==a&&(a.then(lo,lo),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,lp(e),e;default:if(typeof a.status=="string")a.then(lo,lo);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=a,e.status="pending",e.then(function(i){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=i}},function(i){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,lp(e),e}throw qt=a,$t}}function bt(e){try{var a=e._init;return a(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(qt=o,$t):o}}var qt=null;function rp(){if(qt===null)throw Error(r(459));var e=qt;return qt=null,e}function lp(e){if(e===$t||e===hn)throw Error(r(483))}var Zt=null,Qs=0;function bn(e){var a=Qs;return Qs+=1,Zt===null&&(Zt=[]),np(Zt,e,a)}function Hs(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function qn(e,a){throw a.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(a),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function dp(e){function a(P,S){if(e){var T=P.deletions;T===null?(P.deletions=[S],P.flags|=16):T.push(S)}}function o(P,S){if(!e)return null;for(;S!==null;)a(P,S),S=S.sibling;return null}function i(P){for(var S=new Map;P!==null;)P.key!==null?S.set(P.key,P):S.set(P.index,P),P=P.sibling;return S}function l(P,S){return P=uo(P,S),P.index=0,P.sibling=null,P}function d(P,S,T){return P.index=T,e?(T=P.alternate,T!==null?(T=T.index,T<S?(P.flags|=67108866,S):T):(P.flags|=67108866,S)):(P.flags|=1048576,S)}function p(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function b(P,S,T,L){return S===null||S.tag!==6?(S=Al(T,P.mode,L),S.return=P,S):(S=l(S,T),S.return=P,S)}function C(P,S,T,L){var ee=T.type;return ee===M?w(P,S,T.props.children,L,T.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===W&&bt(ee)===S.type)?(S=l(S,T.props),Hs(S,T),S.return=P,S):(S=un(T.type,T.key,T.props,null,P.mode,L),Hs(S,T),S.return=P,S)}function R(P,S,T,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=zl(T,P.mode,L),S.return=P,S):(S=l(S,T.children||[]),S.return=P,S)}function w(P,S,T,L,ee){return S===null||S.tag!==7?(S=pt(T,P.mode,L,ee),S.return=P,S):(S=l(S,T),S.return=P,S)}function X(P,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Al(""+S,P.mode,T),S.return=P,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case E:return T=un(S.type,S.key,S.props,null,P.mode,T),Hs(T,S),T.return=P,T;case D:return S=zl(S,P.mode,T),S.return=P,S;case W:return S=bt(S),X(P,S,T)}if(Ve(S)||Qe(S))return S=pt(S,P.mode,T,null),S.return=P,S;if(typeof S.then=="function")return X(P,bn(S),T);if(S.$$typeof===B)return X(P,gn(P,S),T);qn(P,S)}return null}function V(P,S,T,L){var ee=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return ee!==null?null:b(P,S,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case E:return T.key===ee?C(P,S,T,L):null;case D:return T.key===ee?R(P,S,T,L):null;case W:return T=bt(T),V(P,S,T,L)}if(Ve(T)||Qe(T))return ee!==null?null:w(P,S,T,L,null);if(typeof T.then=="function")return V(P,S,bn(T),L);if(T.$$typeof===B)return V(P,S,gn(P,T),L);qn(P,T)}return null}function O(P,S,T,L,ee){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return P=P.get(T)||null,b(S,P,""+L,ee);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case E:return P=P.get(L.key===null?T:L.key)||null,C(S,P,L,ee);case D:return P=P.get(L.key===null?T:L.key)||null,R(S,P,L,ee);case W:return L=bt(L),O(P,S,T,L,ee)}if(Ve(L)||Qe(L))return P=P.get(T)||null,w(S,P,L,ee,null);if(typeof L.then=="function")return O(P,S,T,bn(L),ee);if(L.$$typeof===B)return O(P,S,T,gn(S,L),ee);qn(S,L)}return null}function H(P,S,T,L){for(var ee=null,fe=null,J=S,ne=S=0,me=null;J!==null&&ne<T.length;ne++){J.index>ne?(me=J,J=null):me=J.sibling;var he=V(P,J,T[ne],L);if(he===null){J===null&&(J=me);break}e&&J&&he.alternate===null&&a(P,J),S=d(he,S,ne),fe===null?ee=he:fe.sibling=he,fe=he,J=me}if(ne===T.length)return o(P,J),pe&&mo(P,ne),ee;if(J===null){for(;ne<T.length;ne++)J=X(P,T[ne],L),J!==null&&(S=d(J,S,ne),fe===null?ee=J:fe.sibling=J,fe=J);return pe&&mo(P,ne),ee}for(J=i(J);ne<T.length;ne++)me=O(J,P,ne,T[ne],L),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?ne:me.key),S=d(me,S,ne),fe===null?ee=me:fe.sibling=me,fe=me);return e&&J.forEach(function(et){return a(P,et)}),pe&&mo(P,ne),ee}function oe(P,S,T,L){if(T==null)throw Error(r(151));for(var ee=null,fe=null,J=S,ne=S=0,me=null,he=T.next();J!==null&&!he.done;ne++,he=T.next()){J.index>ne?(me=J,J=null):me=J.sibling;var et=V(P,J,he.value,L);if(et===null){J===null&&(J=me);break}e&&J&&et.alternate===null&&a(P,J),S=d(et,S,ne),fe===null?ee=et:fe.sibling=et,fe=et,J=me}if(he.done)return o(P,J),pe&&mo(P,ne),ee;if(J===null){for(;!he.done;ne++,he=T.next())he=X(P,he.value,L),he!==null&&(S=d(he,S,ne),fe===null?ee=he:fe.sibling=he,fe=he);return pe&&mo(P,ne),ee}for(J=i(J);!he.done;ne++,he=T.next())he=O(J,P,ne,he.value,L),he!==null&&(e&&he.alternate!==null&&J.delete(he.key===null?ne:he.key),S=d(he,S,ne),fe===null?ee=he:fe.sibling=he,fe=he);return e&&J.forEach(function(iy){return a(P,iy)}),pe&&mo(P,ne),ee}function Ee(P,S,T,L){if(typeof T=="object"&&T!==null&&T.type===M&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case E:e:{for(var ee=T.key;S!==null;){if(S.key===ee){if(ee=T.type,ee===M){if(S.tag===7){o(P,S.sibling),L=l(S,T.props.children),L.return=P,P=L;break e}}else if(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===W&&bt(ee)===S.type){o(P,S.sibling),L=l(S,T.props),Hs(L,T),L.return=P,P=L;break e}o(P,S);break}else a(P,S);S=S.sibling}T.type===M?(L=pt(T.props.children,P.mode,L,T.key),L.return=P,P=L):(L=un(T.type,T.key,T.props,null,P.mode,L),Hs(L,T),L.return=P,P=L)}return p(P);case D:e:{for(ee=T.key;S!==null;){if(S.key===ee)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(P,S.sibling),L=l(S,T.children||[]),L.return=P,P=L;break e}else{o(P,S);break}else a(P,S);S=S.sibling}L=zl(T,P.mode,L),L.return=P,P=L}return p(P);case W:return T=bt(T),Ee(P,S,T,L)}if(Ve(T))return H(P,S,T,L);if(Qe(T)){if(ee=Qe(T),typeof ee!="function")throw Error(r(150));return T=ee.call(T),oe(P,S,T,L)}if(typeof T.then=="function")return Ee(P,S,bn(T),L);if(T.$$typeof===B)return Ee(P,S,gn(P,T),L);qn(P,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(o(P,S.sibling),L=l(S,T),L.return=P,P=L):(o(P,S),L=Al(T,P.mode,L),L.return=P,P=L),p(P)):o(P,S)}return function(P,S,T,L){try{Qs=0;var ee=Ee(P,S,T,L);return Zt=null,ee}catch(J){if(J===$t||J===hn)throw J;var fe=Ca(29,J,null,P.mode);return fe.lanes=L,fe.return=P,fe}finally{}}}var yt=dp(!0),cp=dp(!1),Uo=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bl(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Lo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Bo(e,a,o){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var l=i.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),i.pending=a,a=cn(e),Hm(e,null,o),a}return dn(e,i,a,o),cn(e)}function Ys(e,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var i=a.lanes;i&=e.pendingLanes,o|=i,a.lanes=o,am(e,o)}}function Xl(e,a){var o=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,o===i)){var l=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var p={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?l=d=p:d=d.next=p,o=o.next}while(o!==null);d===null?l=d=a:d=d.next=a}else l=d=a;o={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=a:e.next=a,o.lastBaseUpdate=a}var kl=!1;function Ks(){if(kl){var e=Kt;if(e!==null)throw e}}function $s(e,a,o,i){kl=!1;var l=e.updateQueue;Uo=!1;var d=l.firstBaseUpdate,p=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var C=b,R=C.next;C.next=null,p===null?d=R:p.next=R,p=C;var w=e.alternate;w!==null&&(w=w.updateQueue,b=w.lastBaseUpdate,b!==p&&(b===null?w.firstBaseUpdate=R:b.next=R,w.lastBaseUpdate=C))}if(d!==null){var X=l.baseState;p=0,w=R=C=null,b=d;do{var V=b.lane&-536870913,O=V!==b.lane;if(O?(ue&V)===V:(i&V)===V){V!==0&&V===Yt&&(kl=!0),w!==null&&(w=w.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var H=e,oe=b;V=a;var Ee=o;switch(oe.tag){case 1:if(H=oe.payload,typeof H=="function"){X=H.call(Ee,X,V);break e}X=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=oe.payload,V=typeof H=="function"?H.call(Ee,X,V):H,V==null)break e;X=q({},X,V);break e;case 2:Uo=!0}}V=b.callback,V!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[V]:O.push(V))}else O={lane:V,tag:b.tag,payload:b.payload,callback:b.callback,next:null},w===null?(R=w=O,C=X):w=w.next=O,p|=V;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;O=b,b=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);w===null&&(C=X),l.baseState=C,l.firstBaseUpdate=R,l.lastBaseUpdate=w,d===null&&(l.shared.lanes=0),Io|=p,e.lanes=p,e.memoizedState=X}}function up(e,a){if(typeof e!="function")throw Error(r(191,e));e.call(a)}function mp(e,a){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)up(o[e],a)}var Jt=A(null),yn=A(0);function pp(e,a){e=So,G(yn,e),G(Jt,a),So=e|a.baseLanes}function Fl(){G(yn,So),G(Jt,Jt.current)}function _l(){So=yn.current,k(Jt),k(yn)}var Sa=A(null),wa=null;function Xo(e){var a=e.alternate;G(Le,Le.current&1),G(Sa,e),wa===null&&(a===null||Jt.current!==null||a.memoizedState!==null)&&(wa=e)}function Il(e){G(Le,Le.current),G(Sa,e),wa===null&&(wa=e)}function gp(e){e.tag===22?(G(Le,Le.current),G(Sa,e),wa===null&&(wa=e)):ko()}function ko(){G(Le,Le.current),G(Sa,Sa.current)}function Ea(e){k(Sa),wa===e&&(wa=null),k(Le)}var Le=A(0);function xn(e){for(var a=e;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||$d(o)||Zd(o)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var fo=0,ie=null,Ce=null,ke=null,Cn=!1,Wt=!1,xt=!1,Sn=0,Zs=0,es=null,K2=0;function Oe(){throw Error(r(321))}function Gl(e,a){if(a===null)return!1;for(var o=0;o<a.length&&o<e.length;o++)if(!xa(e[o],a[o]))return!1;return!0}function Ql(e,a,o,i,l,d){return fo=d,ie=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=e===null||e.memoizedState===null?Zp:rd,xt=!1,d=o(i,l),xt=!1,Wt&&(d=hp(a,o,i,l)),fp(e),d}function fp(e){U.H=ei;var a=Ce!==null&&Ce.next!==null;if(fo=0,ke=Ce=ie=null,Cn=!1,Zs=0,es=null,a)throw Error(r(300));e===null||Fe||(e=e.dependencies,e!==null&&pn(e)&&(Fe=!0))}function hp(e,a,o,i){ie=e;var l=0;do{if(Wt&&(es=null),Zs=0,Wt=!1,25<=l)throw Error(r(301));if(l+=1,ke=Ce=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=Jp,d=a(o,i)}while(Wt);return d}function $2(){var e=U.H,a=e.useState()[0];return a=typeof a.then=="function"?Js(a):a,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ie.flags|=1024),a}function Hl(){var e=Sn!==0;return Sn=0,e}function Yl(e,a,o){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o}function Kl(e){if(Cn){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Cn=!1}fo=0,ke=Ce=ie=null,Wt=!1,Zs=Sn=0,es=null}function la(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ie.memoizedState=ke=e:ke=ke.next=e,ke}function Be(){if(Ce===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var a=ke===null?ie.memoizedState:ke.next;if(a!==null)ke=a,Ce=e;else{if(e===null)throw ie.alternate===null?Error(r(467)):Error(r(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},ke===null?ie.memoizedState=ke=e:ke=ke.next=e}return ke}function En(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Js(e){var a=Zs;return Zs+=1,es===null&&(es=[]),e=np(es,e,a),a=ie,(ke===null?a.memoizedState:ke.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?Zp:rd),e}function An(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Js(e);if(e.$$typeof===B)return We(e)}throw Error(r(438,String(e)))}function $l(e){var a=null,o=ie.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var i=ie.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=En(),ie.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(e),i=0;i<e;i++)o[i]=Re;return a.index++,o}function ho(e,a){return typeof a=="function"?a(e):a}function zn(e){var a=Be();return Zl(a,Ce,e)}function Zl(e,a,o){var i=e.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=o;var l=e.baseQueue,d=i.pending;if(d!==null){if(l!==null){var p=l.next;l.next=d.next,d.next=p}a.baseQueue=l=d,i.pending=null}if(d=e.baseState,l===null)e.memoizedState=d;else{a=l.next;var b=p=null,C=null,R=a,w=!1;do{var X=R.lane&-536870913;if(X!==R.lane?(ue&X)===X:(fo&X)===X){var V=R.revertLane;if(V===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),X===Yt&&(w=!0);else if((fo&V)===V){R=R.next,V===Yt&&(w=!0);continue}else X={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},C===null?(b=C=X,p=d):C=C.next=X,ie.lanes|=V,Io|=V;X=R.action,xt&&o(d,X),d=R.hasEagerState?R.eagerState:o(d,X)}else V={lane:X,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},C===null?(b=C=V,p=d):C=C.next=V,ie.lanes|=X,Io|=X;R=R.next}while(R!==null&&R!==a);if(C===null?p=d:C.next=b,!xa(d,e.memoizedState)&&(Fe=!0,w&&(o=Kt,o!==null)))throw o;e.memoizedState=d,e.baseState=p,e.baseQueue=C,i.lastRenderedState=d}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Jl(e){var a=Be(),o=a.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=e;var i=o.dispatch,l=o.pending,d=a.memoizedState;if(l!==null){o.pending=null;var p=l=l.next;do d=e(d,p.action),p=p.next;while(p!==l);xa(d,a.memoizedState)||(Fe=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),o.lastRenderedState=d}return[d,i]}function vp(e,a,o){var i=ie,l=Be(),d=pe;if(d){if(o===void 0)throw Error(r(407));o=o()}else o=a();var p=!xa((Ce||l).memoizedState,o);if(p&&(l.memoizedState=o,Fe=!0),l=l.queue,ad(yp.bind(null,i,l,e),[e]),l.getSnapshot!==a||p||ke!==null&&ke.memoizedState.tag&1){if(i.flags|=2048,as(9,{destroy:void 0},qp.bind(null,i,l,o,a),null),Ae===null)throw Error(r(349));d||(fo&127)!==0||bp(i,a,o)}return o}function bp(e,a,o){e.flags|=16384,e={getSnapshot:a,value:o},a=ie.updateQueue,a===null?(a=En(),ie.updateQueue=a,a.stores=[e]):(o=a.stores,o===null?a.stores=[e]:o.push(e))}function qp(e,a,o,i){a.value=o,a.getSnapshot=i,xp(a)&&Cp(e)}function yp(e,a,o){return o(function(){xp(a)&&Cp(e)})}function xp(e){var a=e.getSnapshot;e=e.value;try{var o=a();return!xa(e,o)}catch{return!0}}function Cp(e){var a=mt(e,2);a!==null&&va(a,e,2)}function Wl(e){var a=la();if(typeof e=="function"){var o=e;if(e=o(),xt){Ro(!0);try{o()}finally{Ro(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},a}function Sp(e,a,o,i){return e.baseState=o,Zl(e,Ce,typeof i=="function"?i:ho)}function Z2(e,a,o,i,l){if(Tn(e))throw Error(r(485));if(e=a.action,e!==null){var d={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){d.listeners.push(p)}};U.T!==null?o(!0):d.isTransition=!1,i(d),o=a.pending,o===null?(d.next=a.pending=d,Ep(a,d)):(d.next=o.next,a.pending=o.next=d)}}function Ep(e,a){var o=a.action,i=a.payload,l=e.state;if(a.isTransition){var d=U.T,p={};U.T=p;try{var b=o(l,i),C=U.S;C!==null&&C(p,b),Ap(e,a,b)}catch(R){ed(e,a,R)}finally{d!==null&&p.types!==null&&(d.types=p.types),U.T=d}}else try{d=o(l,i),Ap(e,a,d)}catch(R){ed(e,a,R)}}function Ap(e,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(i){zp(e,a,i)},function(i){return ed(e,a,i)}):zp(e,a,o)}function zp(e,a,o){a.status="fulfilled",a.value=o,Pp(a),e.state=o,a=e.pending,a!==null&&(o=a.next,o===a?e.pending=null:(o=o.next,a.next=o,Ep(e,o)))}function ed(e,a,o){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=o,Pp(a),a=a.next;while(a!==i)}e.action=null}function Pp(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Dp(e,a){return a}function Tp(e,a){if(pe){var o=Ae.formState;if(o!==null){e:{var i=ie;if(pe){if(Pe){a:{for(var l=Pe,d=Na;l.nodeType!==8;){if(!d){l=null;break a}if(l=Ua(l.nextSibling),l===null){l=null;break a}}d=l.data,l=d==="F!"||d==="F"?l:null}if(l){Pe=Ua(l.nextSibling),i=l.data==="F!";break e}}No(i)}i=!1}i&&(a=o[0])}}return o=la(),o.memoizedState=o.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dp,lastRenderedState:a},o.queue=i,o=Yp.bind(null,ie,i),i.dispatch=o,i=Wl(!1),d=nd.bind(null,ie,!1,i.queue),i=la(),l={state:a,dispatch:null,action:e,pending:null},i.queue=l,o=Z2.bind(null,ie,l,d,o),l.dispatch=o,i.memoizedState=e,[a,o,!1]}function Rp(e){var a=Be();return Vp(a,Ce,e)}function Vp(e,a,o){if(a=Zl(e,a,Dp)[0],e=zn(ho)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=Js(a)}catch(p){throw p===$t?hn:p}else i=a;a=Be();var l=a.queue,d=l.dispatch;return o!==a.memoizedState&&(ie.flags|=2048,as(9,{destroy:void 0},J2.bind(null,l,o),null)),[i,d,e]}function J2(e,a){e.action=a}function jp(e){var a=Be(),o=Ce;if(o!==null)return Vp(a,o,e);Be(),a=a.memoizedState,o=Be();var i=o.queue.dispatch;return o.memoizedState=e,[a,i,!1]}function as(e,a,o,i){return e={tag:e,create:o,deps:i,inst:a,next:null},a=ie.updateQueue,a===null&&(a=En(),ie.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=e.next=e:(i=o.next,o.next=e,e.next=i,a.lastEffect=e),e}function Mp(){return Be().memoizedState}function Pn(e,a,o,i){var l=la();ie.flags|=e,l.memoizedState=as(1|a,{destroy:void 0},o,i===void 0?null:i)}function Dn(e,a,o,i){var l=Be();i=i===void 0?null:i;var d=l.memoizedState.inst;Ce!==null&&i!==null&&Gl(i,Ce.memoizedState.deps)?l.memoizedState=as(a,d,o,i):(ie.flags|=e,l.memoizedState=as(1|a,d,o,i))}function Op(e,a){Pn(8390656,8,e,a)}function ad(e,a){Dn(2048,8,e,a)}function W2(e){ie.flags|=4;var a=ie.updateQueue;if(a===null)a=En(),ie.updateQueue=a,a.events=[e];else{var o=a.events;o===null?a.events=[e]:o.push(e)}}function Np(e){var a=Be().memoizedState;return W2({ref:a,nextImpl:e}),function(){if((be&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function wp(e,a){return Dn(4,2,e,a)}function Up(e,a){return Dn(4,4,e,a)}function Lp(e,a){if(typeof a=="function"){e=e();var o=a(e);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Bp(e,a,o){o=o!=null?o.concat([e]):null,Dn(4,4,Lp.bind(null,a,e),o)}function od(){}function Xp(e,a){var o=Be();a=a===void 0?null:a;var i=o.memoizedState;return a!==null&&Gl(a,i[1])?i[0]:(o.memoizedState=[e,a],e)}function kp(e,a){var o=Be();a=a===void 0?null:a;var i=o.memoizedState;if(a!==null&&Gl(a,i[1]))return i[0];if(i=e(),xt){Ro(!0);try{e()}finally{Ro(!1)}}return o.memoizedState=[i,a],i}function td(e,a,o){return o===void 0||(fo&1073741824)!==0&&(ue&261930)===0?e.memoizedState=a:(e.memoizedState=o,e=Fg(),ie.lanes|=e,Io|=e,o)}function Fp(e,a,o,i){return xa(o,a)?o:Jt.current!==null?(e=td(e,o,i),xa(e,a)||(Fe=!0),e):(fo&42)===0||(fo&1073741824)!==0&&(ue&261930)===0?(Fe=!0,e.memoizedState=o):(e=Fg(),ie.lanes|=e,Io|=e,a)}function _p(e,a,o,i,l){var d=_.p;_.p=d!==0&&8>d?d:8;var p=U.T,b={};U.T=b,nd(e,!1,a,o);try{var C=l(),R=U.S;if(R!==null&&R(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var w=Y2(C,i);Ws(e,a,w,Pa(e))}else Ws(e,a,i,Pa(e))}catch(X){Ws(e,a,{then:function(){},status:"rejected",reason:X},Pa())}finally{_.p=d,p!==null&&b.types!==null&&(p.types=b.types),U.T=p}}function eq(){}function sd(e,a,o,i){if(e.tag!==5)throw Error(r(476));var l=Ip(e).queue;_p(e,l,a,Z,o===null?eq:function(){return Gp(e),o(i)})}function Ip(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:Z},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:o},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Gp(e){var a=Ip(e);a.next===null&&(a=e.alternate.memoizedState),Ws(e,a.next.queue,{},Pa())}function id(){return We(hi)}function Qp(){return Be().memoizedState}function Hp(){return Be().memoizedState}function aq(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var o=Pa();e=Lo(o);var i=Bo(a,e,o);i!==null&&(va(i,a,o),Ys(i,a,o)),a={cache:Ol()},e.payload=a;return}a=a.return}}function oq(e,a,o){var i=Pa();o={lane:i,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Tn(e)?Kp(a,o):(o=Sl(e,a,o,i),o!==null&&(va(o,e,i),$p(o,a,i)))}function Yp(e,a,o){var i=Pa();Ws(e,a,o,i)}function Ws(e,a,o,i){var l={lane:i,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Tn(e))Kp(a,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var p=a.lastRenderedState,b=d(p,o);if(l.hasEagerState=!0,l.eagerState=b,xa(b,p))return dn(e,a,l,0),Ae===null&&ln(),!1}catch{}finally{}if(o=Sl(e,a,l,i),o!==null)return va(o,e,i),$p(o,a,i),!0}return!1}function nd(e,a,o,i){if(i={lane:2,revertLane:Ld(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Tn(e)){if(a)throw Error(r(479))}else a=Sl(e,o,i,2),a!==null&&va(a,e,2)}function Tn(e){var a=e.alternate;return e===ie||a!==null&&a===ie}function Kp(e,a){Wt=Cn=!0;var o=e.pending;o===null?a.next=a:(a.next=o.next,o.next=a),e.pending=a}function $p(e,a,o){if((o&4194048)!==0){var i=a.lanes;i&=e.pendingLanes,o|=i,a.lanes=o,am(e,o)}}var ei={readContext:We,use:An,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};ei.useEffectEvent=Oe;var Zp={readContext:We,use:An,useCallback:function(e,a){return la().memoizedState=[e,a===void 0?null:a],e},useContext:We,useEffect:Op,useImperativeHandle:function(e,a,o){o=o!=null?o.concat([e]):null,Pn(4194308,4,Lp.bind(null,a,e),o)},useLayoutEffect:function(e,a){return Pn(4194308,4,e,a)},useInsertionEffect:function(e,a){Pn(4,2,e,a)},useMemo:function(e,a){var o=la();a=a===void 0?null:a;var i=e();if(xt){Ro(!0);try{e()}finally{Ro(!1)}}return o.memoizedState=[i,a],i},useReducer:function(e,a,o){var i=la();if(o!==void 0){var l=o(a);if(xt){Ro(!0);try{o(a)}finally{Ro(!1)}}}else l=a;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=oq.bind(null,ie,e),[i.memoizedState,e]},useRef:function(e){var a=la();return e={current:e},a.memoizedState=e},useState:function(e){e=Wl(e);var a=e.queue,o=Yp.bind(null,ie,a);return a.dispatch=o,[e.memoizedState,o]},useDebugValue:od,useDeferredValue:function(e,a){var o=la();return td(o,e,a)},useTransition:function(){var e=Wl(!1);return e=_p.bind(null,ie,e.queue,!0,!1),la().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,o){var i=ie,l=la();if(pe){if(o===void 0)throw Error(r(407));o=o()}else{if(o=a(),Ae===null)throw Error(r(349));(ue&127)!==0||bp(i,a,o)}l.memoizedState=o;var d={value:o,getSnapshot:a};return l.queue=d,Op(yp.bind(null,i,d,e),[e]),i.flags|=2048,as(9,{destroy:void 0},qp.bind(null,i,d,o,a),null),o},useId:function(){var e=la(),a=Ae.identifierPrefix;if(pe){var o=ao,i=eo;o=(i&~(1<<32-ya(i)-1)).toString(32)+o,a="_"+a+"R_"+o,o=Sn++,0<o&&(a+="H"+o.toString(32)),a+="_"}else o=K2++,a="_"+a+"r_"+o.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:id,useFormState:Tp,useActionState:Tp,useOptimistic:function(e){var a=la();a.memoizedState=a.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=nd.bind(null,ie,!0,o),o.dispatch=a,[e,a]},useMemoCache:$l,useCacheRefresh:function(){return la().memoizedState=aq.bind(null,ie)},useEffectEvent:function(e){var a=la(),o={impl:e};return a.memoizedState=o,function(){if((be&2)!==0)throw Error(r(440));return o.impl.apply(void 0,arguments)}}},rd={readContext:We,use:An,useCallback:Xp,useContext:We,useEffect:ad,useImperativeHandle:Bp,useInsertionEffect:wp,useLayoutEffect:Up,useMemo:kp,useReducer:zn,useRef:Mp,useState:function(){return zn(ho)},useDebugValue:od,useDeferredValue:function(e,a){var o=Be();return Fp(o,Ce.memoizedState,e,a)},useTransition:function(){var e=zn(ho)[0],a=Be().memoizedState;return[typeof e=="boolean"?e:Js(e),a]},useSyncExternalStore:vp,useId:Qp,useHostTransitionStatus:id,useFormState:Rp,useActionState:Rp,useOptimistic:function(e,a){var o=Be();return Sp(o,Ce,e,a)},useMemoCache:$l,useCacheRefresh:Hp};rd.useEffectEvent=Np;var Jp={readContext:We,use:An,useCallback:Xp,useContext:We,useEffect:ad,useImperativeHandle:Bp,useInsertionEffect:wp,useLayoutEffect:Up,useMemo:kp,useReducer:Jl,useRef:Mp,useState:function(){return Jl(ho)},useDebugValue:od,useDeferredValue:function(e,a){var o=Be();return Ce===null?td(o,e,a):Fp(o,Ce.memoizedState,e,a)},useTransition:function(){var e=Jl(ho)[0],a=Be().memoizedState;return[typeof e=="boolean"?e:Js(e),a]},useSyncExternalStore:vp,useId:Qp,useHostTransitionStatus:id,useFormState:jp,useActionState:jp,useOptimistic:function(e,a){var o=Be();return Ce!==null?Sp(o,Ce,e,a):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:$l,useCacheRefresh:Hp};Jp.useEffectEvent=Np;function ld(e,a,o,i){a=e.memoizedState,o=o(i,a),o=o==null?a:q({},a,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var dd={enqueueSetState:function(e,a,o){e=e._reactInternals;var i=Pa(),l=Lo(i);l.payload=a,o!=null&&(l.callback=o),a=Bo(e,l,i),a!==null&&(va(a,e,i),Ys(a,e,i))},enqueueReplaceState:function(e,a,o){e=e._reactInternals;var i=Pa(),l=Lo(i);l.tag=1,l.payload=a,o!=null&&(l.callback=o),a=Bo(e,l,i),a!==null&&(va(a,e,i),Ys(a,e,i))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var o=Pa(),i=Lo(o);i.tag=2,a!=null&&(i.callback=a),a=Bo(e,i,o),a!==null&&(va(a,e,o),Ys(a,e,o))}};function Wp(e,a,o,i,l,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,p):a.prototype&&a.prototype.isPureReactComponent?!Xs(o,i)||!Xs(l,d):!0}function eg(e,a,o,i){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,i),a.state!==e&&dd.enqueueReplaceState(a,a.state,null)}function Ct(e,a){var o=a;if("ref"in a){o={};for(var i in a)i!=="ref"&&(o[i]=a[i])}if(e=e.defaultProps){o===a&&(o=q({},o));for(var l in e)o[l]===void 0&&(o[l]=e[l])}return o}function ag(e){rn(e)}function og(e){console.error(e)}function tg(e){rn(e)}function Rn(e,a){try{var o=e.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function sg(e,a,o){try{var i=e.onCaughtError;i(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function cd(e,a,o){return o=Lo(o),o.tag=3,o.payload={element:null},o.callback=function(){Rn(e,a)},o}function ig(e){return e=Lo(e),e.tag=3,e}function ng(e,a,o,i){var l=o.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;e.payload=function(){return l(d)},e.callback=function(){sg(a,o,i)}}var p=o.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){sg(a,o,i),typeof l!="function"&&(Go===null?Go=new Set([this]):Go.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function tq(e,a,o,i,l){if(o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=o.alternate,a!==null&&Ht(a,o,l,!0),o=Sa.current,o!==null){switch(o.tag){case 31:case 13:return wa===null?Fn():o.alternate===null&&Ne===0&&(Ne=3),o.flags&=-257,o.flags|=65536,o.lanes=l,i===vn?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([i]):a.add(i),Nd(e,i,l)),!1;case 22:return o.flags|=65536,i===vn?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([i]):o.add(i)),Nd(e,i,l)),!1}throw Error(r(435,o.tag))}return Nd(e,i,l),Fn(),!1}if(pe)return a=Sa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,i!==Tl&&(e=Error(r(422),{cause:i}),_s(ja(e,o)))):(i!==Tl&&(a=Error(r(423),{cause:i}),_s(ja(a,o))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=ja(i,o),l=cd(e.stateNode,i,l),Xl(e,l),Ne!==4&&(Ne=2)),!1;var d=Error(r(520),{cause:i});if(d=ja(d,o),li===null?li=[d]:li.push(d),Ne!==4&&(Ne=2),a===null)return!0;i=ja(i,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,e=l&-l,o.lanes|=e,e=cd(o.stateNode,i,e),Xl(o,e),!1;case 1:if(a=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Go===null||!Go.has(d))))return o.flags|=65536,l&=-l,o.lanes|=l,l=ig(l),ng(l,e,o,i),Xl(o,l),!1}o=o.return}while(o!==null);return!1}var ud=Error(r(461)),Fe=!1;function ea(e,a,o,i){a.child=e===null?cp(a,null,o,i):yt(a,e.child,o,i)}function rg(e,a,o,i,l){o=o.render;var d=a.ref;if("ref"in i){var p={};for(var b in i)b!=="ref"&&(p[b]=i[b])}else p=i;return ht(a),i=Ql(e,a,o,p,d,l),b=Hl(),e!==null&&!Fe?(Yl(e,a,l),vo(e,a,l)):(pe&&b&&Pl(a),a.flags|=1,ea(e,a,i,l),a.child)}function lg(e,a,o,i,l){if(e===null){var d=o.type;return typeof d=="function"&&!El(d)&&d.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=d,dg(e,a,d,i,l)):(e=un(o.type,null,i,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,!qd(e,l)){var p=d.memoizedProps;if(o=o.compare,o=o!==null?o:Xs,o(p,i)&&e.ref===a.ref)return vo(e,a,l)}return a.flags|=1,e=uo(d,i),e.ref=a.ref,e.return=a,a.child=e}function dg(e,a,o,i,l){if(e!==null){var d=e.memoizedProps;if(Xs(d,i)&&e.ref===a.ref)if(Fe=!1,a.pendingProps=i=d,qd(e,l))(e.flags&131072)!==0&&(Fe=!0);else return a.lanes=e.lanes,vo(e,a,l)}return md(e,a,o,i,l)}function cg(e,a,o,i){var l=i.children,d=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(d=d!==null?d.baseLanes|o:o,e!==null){for(i=a.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~d}else i=0,a.child=null;return ug(e,a,d,o,i)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&fn(a,d!==null?d.cachePool:null),d!==null?pp(a,d):Fl(),gp(a);else return i=a.lanes=536870912,ug(e,a,d!==null?d.baseLanes|o:o,o,i)}else d!==null?(fn(a,d.cachePool),pp(a,d),ko(),a.memoizedState=null):(e!==null&&fn(a,null),Fl(),ko());return ea(e,a,l,o),a.child}function ai(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function ug(e,a,o,i,l){var d=wl();return d=d===null?null:{parent:Xe._currentValue,pool:d},a.memoizedState={baseLanes:o,cachePool:d},e!==null&&fn(a,null),Fl(),gp(a),e!==null&&Ht(e,a,i,!0),a.childLanes=l,null}function Vn(e,a){return a=Mn({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function mg(e,a,o){return yt(a,e.child,null,o),e=Vn(a,a.pendingProps),e.flags|=2,Ea(a),a.memoizedState=null,e}function sq(e,a,o){var i=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(pe){if(i.mode==="hidden")return e=Vn(a,i),a.lanes=536870912,ai(null,e);if(Il(a),(e=Pe)?(e=Af(e,Na),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Mo!==null?{id:eo,overflow:ao}:null,retryLane:536870912,hydrationErrors:null},o=Km(e),o.return=a,a.child=o,Je=a,Pe=null)):e=null,e===null)throw No(a);return a.lanes=536870912,null}return Vn(a,i)}var d=e.memoizedState;if(d!==null){var p=d.dehydrated;if(Il(a),l)if(a.flags&256)a.flags&=-257,a=mg(e,a,o);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(r(558));else if(Fe||Ht(e,a,o,!1),l=(o&e.childLanes)!==0,Fe||l){if(i=Ae,i!==null&&(p=om(i,o),p!==0&&p!==d.retryLane))throw d.retryLane=p,mt(e,p),va(i,e,p),ud;Fn(),a=mg(e,a,o)}else e=d.treeContext,Pe=Ua(p.nextSibling),Je=a,pe=!0,Oo=null,Na=!1,e!==null&&Jm(a,e),a=Vn(a,i),a.flags|=4096;return a}return e=uo(e.child,{mode:i.mode,children:i.children}),e.ref=a.ref,a.child=e,e.return=a,e}function jn(e,a){var o=a.ref;if(o===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(e===null||e.ref!==o)&&(a.flags|=4194816)}}function md(e,a,o,i,l){return ht(a),o=Ql(e,a,o,i,void 0,l),i=Hl(),e!==null&&!Fe?(Yl(e,a,l),vo(e,a,l)):(pe&&i&&Pl(a),a.flags|=1,ea(e,a,o,l),a.child)}function pg(e,a,o,i,l,d){return ht(a),a.updateQueue=null,o=hp(a,i,o,l),fp(e),i=Hl(),e!==null&&!Fe?(Yl(e,a,d),vo(e,a,d)):(pe&&i&&Pl(a),a.flags|=1,ea(e,a,o,d),a.child)}function gg(e,a,o,i,l){if(ht(a),a.stateNode===null){var d=_t,p=o.contextType;typeof p=="object"&&p!==null&&(d=We(p)),d=new o(i,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=dd,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=i,d.state=a.memoizedState,d.refs={},Ll(a),p=o.contextType,d.context=typeof p=="object"&&p!==null?We(p):_t,d.state=a.memoizedState,p=o.getDerivedStateFromProps,typeof p=="function"&&(ld(a,o,p,i),d.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(p=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),p!==d.state&&dd.enqueueReplaceState(d,d.state,null),$s(a,i,d,l),Ks(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(e===null){d=a.stateNode;var b=a.memoizedProps,C=Ct(o,b);d.props=C;var R=d.context,w=o.contextType;p=_t,typeof w=="object"&&w!==null&&(p=We(w));var X=o.getDerivedStateFromProps;w=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,w||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||R!==p)&&eg(a,d,i,p),Uo=!1;var V=a.memoizedState;d.state=V,$s(a,i,d,l),Ks(),R=a.memoizedState,b||V!==R||Uo?(typeof X=="function"&&(ld(a,o,X,i),R=a.memoizedState),(C=Uo||Wp(a,o,C,i,V,R,p))?(w||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=R),d.props=i,d.state=R,d.context=p,i=C):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{d=a.stateNode,Bl(e,a),p=a.memoizedProps,w=Ct(o,p),d.props=w,X=a.pendingProps,V=d.context,R=o.contextType,C=_t,typeof R=="object"&&R!==null&&(C=We(R)),b=o.getDerivedStateFromProps,(R=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==X||V!==C)&&eg(a,d,i,C),Uo=!1,V=a.memoizedState,d.state=V,$s(a,i,d,l),Ks();var O=a.memoizedState;p!==X||V!==O||Uo||e!==null&&e.dependencies!==null&&pn(e.dependencies)?(typeof b=="function"&&(ld(a,o,b,i),O=a.memoizedState),(w=Uo||Wp(a,o,w,i,V,O,C)||e!==null&&e.dependencies!==null&&pn(e.dependencies))?(R||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,O,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,O,C)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&V===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&V===e.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=O),d.props=i,d.state=O,d.context=C,i=w):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&V===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&V===e.memoizedState||(a.flags|=1024),i=!1)}return d=i,jn(e,a),i=(a.flags&128)!==0,d||i?(d=a.stateNode,o=i&&typeof o.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,e!==null&&i?(a.child=yt(a,e.child,null,l),a.child=yt(a,null,o,l)):ea(e,a,o,l),a.memoizedState=d.state,e=a.child):e=vo(e,a,l),e}function fg(e,a,o,i){return gt(),a.flags|=256,ea(e,a,o,i),a.child}var pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gd(e){return{baseLanes:e,cachePool:sp()}}function fd(e,a,o){return e=e!==null?e.childLanes&~o:0,a&&(e|=za),e}function hg(e,a,o){var i=a.pendingProps,l=!1,d=(a.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),p&&(l=!0,a.flags&=-129),p=(a.flags&32)!==0,a.flags&=-33,e===null){if(pe){if(l?Xo(a):ko(),(e=Pe)?(e=Af(e,Na),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Mo!==null?{id:eo,overflow:ao}:null,retryLane:536870912,hydrationErrors:null},o=Km(e),o.return=a,a.child=o,Je=a,Pe=null)):e=null,e===null)throw No(a);return Zd(e)?a.lanes=32:a.lanes=536870912,null}var b=i.children;return i=i.fallback,l?(ko(),l=a.mode,b=Mn({mode:"hidden",children:b},l),i=pt(i,l,o,null),b.return=a,i.return=a,b.sibling=i,a.child=b,i=a.child,i.memoizedState=gd(o),i.childLanes=fd(e,p,o),a.memoizedState=pd,ai(null,i)):(Xo(a),hd(a,b))}var C=e.memoizedState;if(C!==null&&(b=C.dehydrated,b!==null)){if(d)a.flags&256?(Xo(a),a.flags&=-257,a=vd(e,a,o)):a.memoizedState!==null?(ko(),a.child=e.child,a.flags|=128,a=null):(ko(),b=i.fallback,l=a.mode,i=Mn({mode:"visible",children:i.children},l),b=pt(b,l,o,null),b.flags|=2,i.return=a,b.return=a,i.sibling=b,a.child=i,yt(a,e.child,null,o),i=a.child,i.memoizedState=gd(o),i.childLanes=fd(e,p,o),a.memoizedState=pd,a=ai(null,i));else if(Xo(a),Zd(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var R=p.dgst;p=R,i=Error(r(419)),i.stack="",i.digest=p,_s({value:i,source:null,stack:null}),a=vd(e,a,o)}else if(Fe||Ht(e,a,o,!1),p=(o&e.childLanes)!==0,Fe||p){if(p=Ae,p!==null&&(i=om(p,o),i!==0&&i!==C.retryLane))throw C.retryLane=i,mt(e,i),va(p,e,i),ud;$d(b)||Fn(),a=vd(e,a,o)}else $d(b)?(a.flags|=192,a.child=e.child,a=null):(e=C.treeContext,Pe=Ua(b.nextSibling),Je=a,pe=!0,Oo=null,Na=!1,e!==null&&Jm(a,e),a=hd(a,i.children),a.flags|=4096);return a}return l?(ko(),b=i.fallback,l=a.mode,C=e.child,R=C.sibling,i=uo(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,R!==null?b=uo(R,b):(b=pt(b,l,o,null),b.flags|=2),b.return=a,i.return=a,i.sibling=b,a.child=i,ai(null,i),i=a.child,b=e.child.memoizedState,b===null?b=gd(o):(l=b.cachePool,l!==null?(C=Xe._currentValue,l=l.parent!==C?{parent:C,pool:C}:l):l=sp(),b={baseLanes:b.baseLanes|o,cachePool:l}),i.memoizedState=b,i.childLanes=fd(e,p,o),a.memoizedState=pd,ai(e.child,i)):(Xo(a),o=e.child,e=o.sibling,o=uo(o,{mode:"visible",children:i.children}),o.return=a,o.sibling=null,e!==null&&(p=a.deletions,p===null?(a.deletions=[e],a.flags|=16):p.push(e)),a.child=o,a.memoizedState=null,o)}function hd(e,a){return a=Mn({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Mn(e,a){return e=Ca(22,e,null,a),e.lanes=0,e}function vd(e,a,o){return yt(a,e.child,null,o),e=hd(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function vg(e,a,o){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a),jl(e.return,a,o)}function bd(e,a,o,i,l,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:o,tailMode:l,treeForkCount:d}:(p.isBackwards=a,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=o,p.tailMode=l,p.treeForkCount=d)}function bg(e,a,o){var i=a.pendingProps,l=i.revealOrder,d=i.tail;i=i.children;var p=Le.current,b=(p&2)!==0;if(b?(p=p&1|2,a.flags|=128):p&=1,G(Le,p),ea(e,a,i,o),i=pe?Fs:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,o,a);else if(e.tag===19)vg(e,o,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(o=a.child,l=null;o!==null;)e=o.alternate,e!==null&&xn(e)===null&&(l=o),o=o.sibling;o=l,o===null?(l=a.child,a.child=null):(l=o.sibling,o.sibling=null),bd(a,!1,l,o,d,i);break;case"backwards":case"unstable_legacy-backwards":for(o=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&xn(e)===null){a.child=l;break}e=l.sibling,l.sibling=o,o=l,l=e}bd(a,!0,o,null,d,i);break;case"together":bd(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function vo(e,a,o){if(e!==null&&(a.dependencies=e.dependencies),Io|=a.lanes,(o&a.childLanes)===0)if(e!==null){if(Ht(e,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(r(153));if(a.child!==null){for(e=a.child,o=uo(e,e.pendingProps),a.child=o,o.return=a;e.sibling!==null;)e=e.sibling,o=o.sibling=uo(e,e.pendingProps),o.return=a;o.sibling=null}return a.child}function qd(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&pn(e)))}function iq(e,a,o){switch(a.tag){case 3:ra(a,a.stateNode.containerInfo),wo(a,Xe,e.memoizedState.cache),gt();break;case 27:case 5:Ps(a);break;case 4:ra(a,a.stateNode.containerInfo);break;case 10:wo(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Il(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(Xo(a),a.flags|=128,null):(o&a.child.childLanes)!==0?hg(e,a,o):(Xo(a),e=vo(e,a,o),e!==null?e.sibling:null);Xo(a);break;case 19:var l=(e.flags&128)!==0;if(i=(o&a.childLanes)!==0,i||(Ht(e,a,o,!1),i=(o&a.childLanes)!==0),l){if(i)return bg(e,a,o);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(Le,Le.current),i)break;return null;case 22:return a.lanes=0,cg(e,a,o,a.pendingProps);case 24:wo(a,Xe,e.memoizedState.cache)}return vo(e,a,o)}function qg(e,a,o){if(e!==null)if(e.memoizedProps!==a.pendingProps)Fe=!0;else{if(!qd(e,o)&&(a.flags&128)===0)return Fe=!1,iq(e,a,o);Fe=(e.flags&131072)!==0}else Fe=!1,pe&&(a.flags&1048576)!==0&&Zm(a,Fs,a.index);switch(a.lanes=0,a.tag){case 16:e:{var i=a.pendingProps;if(e=bt(a.elementType),a.type=e,typeof e=="function")El(e)?(i=Ct(e,i),a.tag=1,a=gg(null,a,e,i,o)):(a.tag=0,a=md(null,a,e,i,o));else{if(e!=null){var l=e.$$typeof;if(l===Q){a.tag=11,a=rg(null,a,e,i,o);break e}else if(l===Y){a.tag=14,a=lg(null,a,e,i,o);break e}}throw a=na(e)||e,Error(r(306,a,""))}}return a;case 0:return md(e,a,a.type,a.pendingProps,o);case 1:return i=a.type,l=Ct(i,a.pendingProps),gg(e,a,i,l,o);case 3:e:{if(ra(a,a.stateNode.containerInfo),e===null)throw Error(r(387));i=a.pendingProps;var d=a.memoizedState;l=d.element,Bl(e,a),$s(a,i,null,o);var p=a.memoizedState;if(i=p.cache,wo(a,Xe,i),i!==d.cache&&Ml(a,[Xe],o,!0),Ks(),i=p.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:p.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=fg(e,a,i,o);break e}else if(i!==l){l=ja(Error(r(424)),a),_s(l),a=fg(e,a,i,o);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Pe=Ua(e.firstChild),Je=a,pe=!0,Oo=null,Na=!0,o=cp(a,null,i,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(gt(),i===l){a=vo(e,a,o);break e}ea(e,a,i,o)}a=a.child}return a;case 26:return jn(e,a),e===null?(o=Vf(a.type,null,a.pendingProps,null))?a.memoizedState=o:pe||(o=a.type,e=a.pendingProps,i=Kn(re.current).createElement(o),i[Ze]=a,i[ua]=e,aa(i,o,e),Ke(i),a.stateNode=i):a.memoizedState=Vf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ps(a),e===null&&pe&&(i=a.stateNode=Df(a.type,a.pendingProps,re.current),Je=a,Na=!0,l=Pe,Ko(a.type)?(Jd=l,Pe=Ua(i.firstChild)):Pe=l),ea(e,a,a.pendingProps.children,o),jn(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&pe&&((l=i=Pe)&&(i=Nq(i,a.type,a.pendingProps,Na),i!==null?(a.stateNode=i,Je=a,Pe=Ua(i.firstChild),Na=!1,l=!0):l=!1),l||No(a)),Ps(a),l=a.type,d=a.pendingProps,p=e!==null?e.memoizedProps:null,i=d.children,Hd(l,d)?i=null:p!==null&&Hd(l,p)&&(a.flags|=32),a.memoizedState!==null&&(l=Ql(e,a,$2,null,null,o),hi._currentValue=l),jn(e,a),ea(e,a,i,o),a.child;case 6:return e===null&&pe&&((e=o=Pe)&&(o=wq(o,a.pendingProps,Na),o!==null?(a.stateNode=o,Je=a,Pe=null,e=!0):e=!1),e||No(a)),null;case 13:return hg(e,a,o);case 4:return ra(a,a.stateNode.containerInfo),i=a.pendingProps,e===null?a.child=yt(a,null,i,o):ea(e,a,i,o),a.child;case 11:return rg(e,a,a.type,a.pendingProps,o);case 7:return ea(e,a,a.pendingProps,o),a.child;case 8:return ea(e,a,a.pendingProps.children,o),a.child;case 12:return ea(e,a,a.pendingProps.children,o),a.child;case 10:return i=a.pendingProps,wo(a,a.type,i.value),ea(e,a,i.children,o),a.child;case 9:return l=a.type._context,i=a.pendingProps.children,ht(a),l=We(l),i=i(l),a.flags|=1,ea(e,a,i,o),a.child;case 14:return lg(e,a,a.type,a.pendingProps,o);case 15:return dg(e,a,a.type,a.pendingProps,o);case 19:return bg(e,a,o);case 31:return sq(e,a,o);case 22:return cg(e,a,o,a.pendingProps);case 24:return ht(a),i=We(Xe),e===null?(l=wl(),l===null&&(l=Ae,d=Ol(),l.pooledCache=d,d.refCount++,d!==null&&(l.pooledCacheLanes|=o),l=d),a.memoizedState={parent:i,cache:l},Ll(a),wo(a,Xe,l)):((e.lanes&o)!==0&&(Bl(e,a),$s(a,null,null,o),Ks()),l=e.memoizedState,d=a.memoizedState,l.parent!==i?(l={parent:i,cache:i},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),wo(a,Xe,i)):(i=d.cache,wo(a,Xe,i),i!==l.cache&&Ml(a,[Xe],o,!0))),ea(e,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function bo(e){e.flags|=4}function yd(e,a,o,i,l){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw qt=vn,Ul}else e.flags&=-16777217}function yg(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wf(a))if(Qg())e.flags|=8192;else throw qt=vn,Ul}function On(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Wu():536870912,e.lanes|=a,is|=a)}function oi(e,a){if(!pe)switch(e.tailMode){case"hidden":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var i=null;o!==null;)o.alternate!==null&&(i=o),o=o.sibling;i===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function De(e){var a=e.alternate!==null&&e.alternate.child===e.child,o=0,i=0;if(a)for(var l=e.child;l!==null;)o|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)o|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=o,a}function nq(e,a,o){var i=a.pendingProps;switch(Dl(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(a),null;case 1:return De(a),null;case 3:return o=a.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),go(Xe),Ue(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Qt(a)?bo(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Rl())),De(a),null;case 26:var l=a.type,d=a.memoizedState;return e===null?(bo(a),d!==null?(De(a),yg(a,d)):(De(a),yd(a,l,null,i,o))):d?d!==e.memoizedState?(bo(a),De(a),yg(a,d)):(De(a),a.flags&=-16777217):(e=e.memoizedProps,e!==i&&bo(a),De(a),yd(a,l,e,i,o)),null;case 27:if(Ii(a),o=re.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&bo(a);else{if(!i){if(a.stateNode===null)throw Error(r(166));return De(a),null}e=$.current,Qt(a)?Wm(a):(e=Df(l,i,o),a.stateNode=e,bo(a))}return De(a),null;case 5:if(Ii(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&bo(a);else{if(!i){if(a.stateNode===null)throw Error(r(166));return De(a),null}if(d=$.current,Qt(a))Wm(a);else{var p=Kn(re.current);switch(d){case 1:d=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:d=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":d=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":d=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":d=p.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?p.createElement(l,{is:i.is}):p.createElement(l)}}d[Ze]=a,d[ua]=i;e:for(p=a.child;p!==null;){if(p.tag===5||p.tag===6)d.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===a)break e;for(;p.sibling===null;){if(p.return===null||p.return===a)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}a.stateNode=d;e:switch(aa(d,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&bo(a)}}return De(a),yd(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,o),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==i&&bo(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(r(166));if(e=re.current,Qt(a)){if(e=a.stateNode,o=a.memoizedProps,i=null,l=Je,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[Ze]=a,e=!!(e.nodeValue===o||i!==null&&i.suppressHydrationWarning===!0||vf(e.nodeValue,o)),e||No(a,!0)}else e=Kn(e).createTextNode(i),e[Ze]=a,a.stateNode=e}return De(a),null;case 31:if(o=a.memoizedState,e===null||e.memoizedState!==null){if(i=Qt(a),o!==null){if(e===null){if(!i)throw Error(r(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ze]=a}else gt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;De(a),e=!1}else o=Rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return a.flags&256?(Ea(a),a):(Ea(a),null);if((a.flags&128)!==0)throw Error(r(558))}return De(a),null;case 13:if(i=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Qt(a),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Ze]=a}else gt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;De(a),l=!1}else l=Rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(Ea(a),a):(Ea(a),null)}return Ea(a),(a.flags&128)!==0?(a.lanes=o,a):(o=i!==null,e=e!==null&&e.memoizedState!==null,o&&(i=a.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==l&&(i.flags|=2048)),o!==e&&o&&(a.child.flags|=8192),On(a,a.updateQueue),De(a),null);case 4:return Ue(),e===null&&Fd(a.stateNode.containerInfo),De(a),null;case 10:return go(a.type),De(a),null;case 19:if(k(Le),i=a.memoizedState,i===null)return De(a),null;if(l=(a.flags&128)!==0,d=i.rendering,d===null)if(l)oi(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=xn(e),d!==null){for(a.flags|=128,oi(i,!1),e=d.updateQueue,a.updateQueue=e,On(a,e),a.subtreeFlags=0,e=o,o=a.child;o!==null;)Ym(o,e),o=o.sibling;return G(Le,Le.current&1|2),pe&&mo(a,i.treeForkCount),a.child}e=e.sibling}i.tail!==null&&ba()>Bn&&(a.flags|=128,l=!0,oi(i,!1),a.lanes=4194304)}else{if(!l)if(e=xn(d),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,On(a,e),oi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!pe)return De(a),null}else 2*ba()-i.renderingStartTime>Bn&&o!==536870912&&(a.flags|=128,l=!0,oi(i,!1),a.lanes=4194304);i.isBackwards?(d.sibling=a.child,a.child=d):(e=i.last,e!==null?e.sibling=d:a.child=d,i.last=d)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ba(),e.sibling=null,o=Le.current,G(Le,l?o&1|2:o&1),pe&&mo(a,i.treeForkCount),e):(De(a),null);case 22:case 23:return Ea(a),_l(),i=a.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(o&536870912)!==0&&(a.flags&128)===0&&(De(a),a.subtreeFlags&6&&(a.flags|=8192)):De(a),o=a.updateQueue,o!==null&&On(a,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==o&&(a.flags|=2048),e!==null&&k(vt),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),go(Xe),De(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function rq(e,a){switch(Dl(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return go(Xe),Ue(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ii(a),null;case 31:if(a.memoizedState!==null){if(Ea(a),a.alternate===null)throw Error(r(340));gt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Ea(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(r(340));gt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return k(Le),null;case 4:return Ue(),null;case 10:return go(a.type),null;case 22:case 23:return Ea(a),_l(),e!==null&&k(vt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return go(Xe),null;case 25:return null;default:return null}}function xg(e,a){switch(Dl(a),a.tag){case 3:go(Xe),Ue();break;case 26:case 27:case 5:Ii(a);break;case 4:Ue();break;case 31:a.memoizedState!==null&&Ea(a);break;case 13:Ea(a);break;case 19:k(Le);break;case 10:go(a.type);break;case 22:case 23:Ea(a),_l(),e!==null&&k(vt);break;case 24:go(Xe)}}function ti(e,a){try{var o=a.updateQueue,i=o!==null?o.lastEffect:null;if(i!==null){var l=i.next;o=l;do{if((o.tag&e)===e){i=void 0;var d=o.create,p=o.inst;i=d(),p.destroy=i}o=o.next}while(o!==l)}}catch(b){xe(a,a.return,b)}}function Fo(e,a,o){try{var i=a.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var d=l.next;i=d;do{if((i.tag&e)===e){var p=i.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,l=a;var C=o,R=b;try{R()}catch(w){xe(l,C,w)}}}i=i.next}while(i!==d)}}catch(w){xe(a,a.return,w)}}function Cg(e){var a=e.updateQueue;if(a!==null){var o=e.stateNode;try{mp(a,o)}catch(i){xe(e,e.return,i)}}}function Sg(e,a,o){o.props=Ct(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(i){xe(e,a,i)}}function si(e,a){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof o=="function"?e.refCleanup=o(i):o.current=i}}catch(l){xe(e,a,l)}}function oo(e,a){var o=e.ref,i=e.refCleanup;if(o!==null)if(typeof i=="function")try{i()}catch(l){xe(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(l){xe(e,a,l)}else o.current=null}function Eg(e){var a=e.type,o=e.memoizedProps,i=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&i.focus();break e;case"img":o.src?i.src=o.src:o.srcSet&&(i.srcset=o.srcSet)}}catch(l){xe(e,e.return,l)}}function xd(e,a,o){try{var i=e.stateNode;Tq(i,e.type,o,a),i[ua]=a}catch(l){xe(e,e.return,l)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ko(e.type)||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ko(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sd(e,a,o){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(e),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=lo));else if(i!==4&&(i===27&&Ko(e.type)&&(o=e.stateNode,a=null),e=e.child,e!==null))for(Sd(e,a,o),e=e.sibling;e!==null;)Sd(e,a,o),e=e.sibling}function Nn(e,a,o){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?o.insertBefore(e,a):o.appendChild(e);else if(i!==4&&(i===27&&Ko(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(Nn(e,a,o),e=e.sibling;e!==null;)Nn(e,a,o),e=e.sibling}function zg(e){var a=e.stateNode,o=e.memoizedProps;try{for(var i=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);aa(a,i,o),a[Ze]=e,a[ua]=o}catch(d){xe(e,e.return,d)}}var qo=!1,_e=!1,Ed=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,$e=null;function lq(e,a){if(e=e.containerInfo,Gd=or,e=Bm(e),vl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var i=o.getSelection&&o.getSelection();if(i&&i.rangeCount!==0){o=i.anchorNode;var l=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var p=0,b=-1,C=-1,R=0,w=0,X=e,V=null;a:for(;;){for(var O;X!==o||l!==0&&X.nodeType!==3||(b=p+l),X!==d||i!==0&&X.nodeType!==3||(C=p+i),X.nodeType===3&&(p+=X.nodeValue.length),(O=X.firstChild)!==null;)V=X,X=O;for(;;){if(X===e)break a;if(V===o&&++R===l&&(b=p),V===d&&++w===i&&(C=p),(O=X.nextSibling)!==null)break;X=V,V=X.parentNode}X=O}o=b===-1||C===-1?null:{start:b,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Qd={focusedElem:e,selectionRange:o},or=!1,$e=a;$e!==null;)if(a=$e,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,$e=e;else for(;$e!==null;){switch(a=$e,d=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)l=e[o],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,o=a,l=d.memoizedProps,d=d.memoizedState,i=o.stateNode;try{var H=Ct(o.type,l);e=i.getSnapshotBeforeUpdate(H,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(oe){xe(o,o.return,oe)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,o=e.nodeType,o===9)Kd(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=a.sibling,e!==null){e.return=a.return,$e=e;break}$e=a.return}}function Dg(e,a,o){var i=o.flags;switch(o.tag){case 0:case 11:case 15:xo(e,o),i&4&&ti(5,o);break;case 1:if(xo(e,o),i&4)if(e=o.stateNode,a===null)try{e.componentDidMount()}catch(p){xe(o,o.return,p)}else{var l=Ct(o.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(p){xe(o,o.return,p)}}i&64&&Cg(o),i&512&&si(o,o.return);break;case 3:if(xo(e,o),i&64&&(e=o.updateQueue,e!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{mp(e,a)}catch(p){xe(o,o.return,p)}}break;case 27:a===null&&i&4&&zg(o);case 26:case 5:xo(e,o),a===null&&i&4&&Eg(o),i&512&&si(o,o.return);break;case 12:xo(e,o);break;case 31:xo(e,o),i&4&&Vg(e,o);break;case 13:xo(e,o),i&4&&jg(e,o),i&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=vq.bind(null,o),Uq(e,o))));break;case 22:if(i=o.memoizedState!==null||qo,!i){a=a!==null&&a.memoizedState!==null||_e,l=qo;var d=_e;qo=i,(_e=a)&&!d?Co(e,o,(o.subtreeFlags&8772)!==0):xo(e,o),qo=l,_e=d}break;case 30:break;default:xo(e,o)}}function Tg(e){var a=e.alternate;a!==null&&(e.alternate=null,Tg(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&el(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,pa=!1;function yo(e,a,o){for(o=o.child;o!==null;)Rg(e,a,o),o=o.sibling}function Rg(e,a,o){if(qa&&typeof qa.onCommitFiberUnmount=="function")try{qa.onCommitFiberUnmount(Ds,o)}catch{}switch(o.tag){case 26:_e||oo(o,a),yo(e,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:_e||oo(o,a);var i=Te,l=pa;Ko(o.type)&&(Te=o.stateNode,pa=!1),yo(e,a,o),pi(o.stateNode),Te=i,pa=l;break;case 5:_e||oo(o,a);case 6:if(i=Te,l=pa,Te=null,yo(e,a,o),Te=i,pa=l,Te!==null)if(pa)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(o.stateNode)}catch(d){xe(o,a,d)}else try{Te.removeChild(o.stateNode)}catch(d){xe(o,a,d)}break;case 18:Te!==null&&(pa?(e=Te,Sf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),ps(e)):Sf(Te,o.stateNode));break;case 4:i=Te,l=pa,Te=o.stateNode.containerInfo,pa=!0,yo(e,a,o),Te=i,pa=l;break;case 0:case 11:case 14:case 15:Fo(2,o,a),_e||Fo(4,o,a),yo(e,a,o);break;case 1:_e||(oo(o,a),i=o.stateNode,typeof i.componentWillUnmount=="function"&&Sg(o,a,i)),yo(e,a,o);break;case 21:yo(e,a,o);break;case 22:_e=(i=_e)||o.memoizedState!==null,yo(e,a,o),_e=i;break;default:yo(e,a,o)}}function Vg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ps(e)}catch(o){xe(a,a.return,o)}}}function jg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ps(e)}catch(o){xe(a,a.return,o)}}function dq(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Pg),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Pg),a;default:throw Error(r(435,e.tag))}}function wn(e,a){var o=dq(e);a.forEach(function(i){if(!o.has(i)){o.add(i);var l=bq.bind(null,e,i);i.then(l,l)}})}function ga(e,a){var o=a.deletions;if(o!==null)for(var i=0;i<o.length;i++){var l=o[i],d=e,p=a,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(Ko(b.type)){Te=b.stateNode,pa=!1;break e}break;case 5:Te=b.stateNode,pa=!1;break e;case 3:case 4:Te=b.stateNode.containerInfo,pa=!0;break e}b=b.return}if(Te===null)throw Error(r(160));Rg(d,p,l),Te=null,pa=!1,d=l.alternate,d!==null&&(d.return=null),l.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Mg(a,e),a=a.sibling}var Ia=null;function Mg(e,a){var o=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ga(a,e),fa(e),i&4&&(Fo(3,e,e.return),ti(3,e),Fo(5,e,e.return));break;case 1:ga(a,e),fa(e),i&512&&(_e||o===null||oo(o,o.return)),i&64&&qo&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?i:o.concat(i))));break;case 26:var l=Ia;if(ga(a,e),fa(e),i&512&&(_e||o===null||oo(o,o.return)),i&4){var d=o!==null?o.memoizedState:null;if(i=e.memoizedState,o===null)if(i===null)if(e.stateNode===null){e:{i=e.type,o=e.memoizedProps,l=l.ownerDocument||l;a:switch(i){case"title":d=l.getElementsByTagName("title")[0],(!d||d[Vs]||d[Ze]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=l.createElement(i),l.head.insertBefore(d,l.querySelector("head > title"))),aa(d,i,o),d[Ze]=e,Ke(d),i=d;break e;case"link":var p=Of("link","href",l).get(i+(o.href||""));if(p){for(var b=0;b<p.length;b++)if(d=p[b],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){p.splice(b,1);break a}}d=l.createElement(i),aa(d,i,o),l.head.appendChild(d);break;case"meta":if(p=Of("meta","content",l).get(i+(o.content||""))){for(b=0;b<p.length;b++)if(d=p[b],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){p.splice(b,1);break a}}d=l.createElement(i),aa(d,i,o),l.head.appendChild(d);break;default:throw Error(r(468,i))}d[Ze]=e,Ke(d),i=d}e.stateNode=i}else Nf(l,e.type,e.stateNode);else e.stateNode=Mf(l,i,e.memoizedProps);else d!==i?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,i===null?Nf(l,e.type,e.stateNode):Mf(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xd(e,e.memoizedProps,o.memoizedProps)}break;case 27:ga(a,e),fa(e),i&512&&(_e||o===null||oo(o,o.return)),o!==null&&i&4&&xd(e,e.memoizedProps,o.memoizedProps);break;case 5:if(ga(a,e),fa(e),i&512&&(_e||o===null||oo(o,o.return)),e.flags&32){l=e.stateNode;try{wt(l,"")}catch(H){xe(e,e.return,H)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,xd(e,l,o!==null?o.memoizedProps:l)),i&1024&&(Ed=!0);break;case 6:if(ga(a,e),fa(e),i&4){if(e.stateNode===null)throw Error(r(162));i=e.memoizedProps,o=e.stateNode;try{o.nodeValue=i}catch(H){xe(e,e.return,H)}}break;case 3:if(Jn=null,l=Ia,Ia=$n(a.containerInfo),ga(a,e),Ia=l,fa(e),i&4&&o!==null&&o.memoizedState.isDehydrated)try{ps(a.containerInfo)}catch(H){xe(e,e.return,H)}Ed&&(Ed=!1,Og(e));break;case 4:i=Ia,Ia=$n(e.stateNode.containerInfo),ga(a,e),fa(e),Ia=i;break;case 12:ga(a,e),fa(e);break;case 31:ga(a,e),fa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wn(e,i)));break;case 13:ga(a,e),fa(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ln=ba()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wn(e,i)));break;case 22:l=e.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,R=qo,w=_e;if(qo=R||l,_e=w||C,ga(a,e),_e=w,qo=R,fa(e),i&8192)e:for(a=e.stateNode,a._visibility=l?a._visibility&-2:a._visibility|1,l&&(o===null||C||qo||_e||St(e)),o=null,a=e;;){if(a.tag===5||a.tag===26){if(o===null){C=o=a;try{if(d=C.stateNode,l)p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=C.stateNode;var X=C.memoizedProps.style,V=X!=null&&X.hasOwnProperty("display")?X.display:null;b.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(H){xe(C,C.return,H)}}}else if(a.tag===6){if(o===null){C=a;try{C.stateNode.nodeValue=l?"":C.memoizedProps}catch(H){xe(C,C.return,H)}}}else if(a.tag===18){if(o===null){C=a;try{var O=C.stateNode;l?Ef(O,!0):Ef(C.stateNode,!1)}catch(H){xe(C,C.return,H)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=e.updateQueue,i!==null&&(o=i.retryQueue,o!==null&&(i.retryQueue=null,wn(e,o))));break;case 19:ga(a,e),fa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wn(e,i)));break;case 30:break;case 21:break;default:ga(a,e),fa(e)}}function fa(e){var a=e.flags;if(a&2){try{for(var o,i=e.return;i!==null;){if(Ag(i)){o=i;break}i=i.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var l=o.stateNode,d=Cd(e);Nn(e,d,l);break;case 5:var p=o.stateNode;o.flags&32&&(wt(p,""),o.flags&=-33);var b=Cd(e);Nn(e,b,p);break;case 3:case 4:var C=o.stateNode.containerInfo,R=Cd(e);Sd(e,R,C);break;default:throw Error(r(161))}}catch(w){xe(e,e.return,w)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Og(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function xo(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Dg(e,a.alternate,a),a=a.sibling}function St(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Fo(4,a,a.return),St(a);break;case 1:oo(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&Sg(a,a.return,o),St(a);break;case 27:pi(a.stateNode);case 26:case 5:oo(a,a.return),St(a);break;case 22:a.memoizedState===null&&St(a);break;case 30:St(a);break;default:St(a)}e=e.sibling}}function Co(e,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,l=e,d=a,p=d.flags;switch(d.tag){case 0:case 11:case 15:Co(l,d,o),ti(4,d);break;case 1:if(Co(l,d,o),i=d,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){xe(i,i.return,R)}if(i=d,l=i.updateQueue,l!==null){var b=i.stateNode;try{var C=l.shared.hiddenCallbacks;if(C!==null)for(l.shared.hiddenCallbacks=null,l=0;l<C.length;l++)up(C[l],b)}catch(R){xe(i,i.return,R)}}o&&p&64&&Cg(d),si(d,d.return);break;case 27:zg(d);case 26:case 5:Co(l,d,o),o&&i===null&&p&4&&Eg(d),si(d,d.return);break;case 12:Co(l,d,o);break;case 31:Co(l,d,o),o&&p&4&&Vg(l,d);break;case 13:Co(l,d,o),o&&p&4&&jg(l,d);break;case 22:d.memoizedState===null&&Co(l,d,o),si(d,d.return);break;case 30:break;default:Co(l,d,o)}a=a.sibling}}function Ad(e,a){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&Is(o))}function zd(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Is(e))}function Ga(e,a,o,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Ng(e,a,o,i),a=a.sibling}function Ng(e,a,o,i){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ga(e,a,o,i),l&2048&&ti(9,a);break;case 1:Ga(e,a,o,i);break;case 3:Ga(e,a,o,i),l&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Is(e)));break;case 12:if(l&2048){Ga(e,a,o,i),e=a.stateNode;try{var d=a.memoizedProps,p=d.id,b=d.onPostCommit;typeof b=="function"&&b(p,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){xe(a,a.return,C)}}else Ga(e,a,o,i);break;case 31:Ga(e,a,o,i);break;case 13:Ga(e,a,o,i);break;case 23:break;case 22:d=a.stateNode,p=a.alternate,a.memoizedState!==null?d._visibility&2?Ga(e,a,o,i):ii(e,a):d._visibility&2?Ga(e,a,o,i):(d._visibility|=2,os(e,a,o,i,(a.subtreeFlags&10256)!==0||!1)),l&2048&&Ad(p,a);break;case 24:Ga(e,a,o,i),l&2048&&zd(a.alternate,a);break;default:Ga(e,a,o,i)}}function os(e,a,o,i,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var d=e,p=a,b=o,C=i,R=p.flags;switch(p.tag){case 0:case 11:case 15:os(d,p,b,C,l),ti(8,p);break;case 23:break;case 22:var w=p.stateNode;p.memoizedState!==null?w._visibility&2?os(d,p,b,C,l):ii(d,p):(w._visibility|=2,os(d,p,b,C,l)),l&&R&2048&&Ad(p.alternate,p);break;case 24:os(d,p,b,C,l),l&&R&2048&&zd(p.alternate,p);break;default:os(d,p,b,C,l)}a=a.sibling}}function ii(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=e,i=a,l=i.flags;switch(i.tag){case 22:ii(o,i),l&2048&&Ad(i.alternate,i);break;case 24:ii(o,i),l&2048&&zd(i.alternate,i);break;default:ii(o,i)}a=a.sibling}}var ni=8192;function ts(e,a,o){if(e.subtreeFlags&ni)for(e=e.child;e!==null;)wg(e,a,o),e=e.sibling}function wg(e,a,o){switch(e.tag){case 26:ts(e,a,o),e.flags&ni&&e.memoizedState!==null&&Kq(o,Ia,e.memoizedState,e.memoizedProps);break;case 5:ts(e,a,o);break;case 3:case 4:var i=Ia;Ia=$n(e.stateNode.containerInfo),ts(e,a,o),Ia=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ni,ni=16777216,ts(e,a,o),ni=i):ts(e,a,o));break;default:ts(e,a,o)}}function Ug(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ri(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var i=a[o];$e=i,Bg(i,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lg(e),e=e.sibling}function Lg(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&Fo(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Un(e)):ri(e);break;default:ri(e)}}function Un(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var i=a[o];$e=i,Bg(i,e)}Ug(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Fo(8,a,a.return),Un(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,Un(a));break;default:Un(a)}e=e.sibling}}function Bg(e,a){for(;$e!==null;){var o=$e;switch(o.tag){case 0:case 11:case 15:Fo(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var i=o.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Is(o.memoizedState.cache)}if(i=o.child,i!==null)i.return=o,$e=i;else e:for(o=e;$e!==null;){i=$e;var l=i.sibling,d=i.return;if(Tg(i),i===o){$e=null;break e}if(l!==null){l.return=d,$e=l;break e}$e=d}}}var cq={getCacheForType:function(e){var a=We(Xe),o=a.data.get(e);return o===void 0&&(o=e(),a.data.set(e,o)),o},cacheSignal:function(){return We(Xe).controller.signal}},uq=typeof WeakMap=="function"?WeakMap:Map,be=0,Ae=null,le=null,ue=0,ye=0,Aa=null,_o=!1,ss=!1,Pd=!1,So=0,Ne=0,Io=0,Et=0,Dd=0,za=0,is=0,li=null,ha=null,Td=!1,Ln=0,Xg=0,Bn=1/0,Xn=null,Go=null,He=0,Qo=null,ns=null,Eo=0,Rd=0,Vd=null,kg=null,di=0,jd=null;function Pa(){return(be&2)!==0&&ue!==0?ue&-ue:U.T!==null?Ld():tm()}function Fg(){if(za===0)if((ue&536870912)===0||pe){var e=Hi;Hi<<=1,(Hi&3932160)===0&&(Hi=262144),za=e}else za=536870912;return e=Sa.current,e!==null&&(e.flags|=32),za}function va(e,a,o){(e===Ae&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Ho(e,ue,za,!1)),Rs(e,o),((be&2)===0||e!==Ae)&&(e===Ae&&((be&2)===0&&(Et|=o),Ne===4&&Ho(e,ue,za,!1)),to(e))}function _g(e,a,o){if((be&6)!==0)throw Error(r(327));var i=!o&&(a&127)===0&&(a&e.expiredLanes)===0||Ts(e,a),l=i?gq(e,a):Od(e,a,!0),d=i;do{if(l===0){ss&&!i&&Ho(e,a,0,!1);break}else{if(o=e.current.alternate,d&&!mq(o)){l=Od(e,a,!1),d=!1;continue}if(l===2){if(d=a,e.errorRecoveryDisabledLanes&d)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){a=p;e:{var b=e;l=li;var C=b.current.memoizedState.isDehydrated;if(C&&(rs(b,p).flags|=256),p=Od(b,p,!1),p!==2){if(Pd&&!C){b.errorRecoveryDisabledLanes|=d,Et|=d,l=4;break e}d=ha,ha=l,d!==null&&(ha===null?ha=d:ha.push.apply(ha,d))}l=p}if(d=!1,l!==2)continue}}if(l===1){rs(e,0),Ho(e,a,0,!0);break}e:{switch(i=e,d=l,d){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Ho(i,a,za,!_o);break e;case 2:ha=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(l=Ln+300-ba(),10<l)){if(Ho(i,a,za,!_o),Ki(i,0,!0)!==0)break e;Eo=a,i.timeoutHandle=xf(Ig.bind(null,i,o,ha,Xn,Td,a,za,Et,is,_o,d,"Throttled",-0,0),l);break e}Ig(i,o,ha,Xn,Td,a,za,Et,is,_o,d,null,-0,0)}}break}while(!0);to(e)}function Ig(e,a,o,i,l,d,p,b,C,R,w,X,V,O){if(e.timeoutHandle=-1,X=a.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:lo},wg(a,d,X);var H=(d&62914560)===d?Ln-ba():(d&4194048)===d?Xg-ba():0;if(H=$q(X,H),H!==null){Eo=d,e.cancelPendingCommit=H(Jg.bind(null,e,a,d,o,i,l,p,b,C,w,X,null,V,O)),Ho(e,d,p,!R);return}}Jg(e,a,d,o,i,l,p,b,C)}function mq(e){for(var a=e;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var i=0;i<o.length;i++){var l=o[i],d=l.getSnapshot;l=l.value;try{if(!xa(d(),l))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ho(e,a,o,i){a&=~Dd,a&=~Et,e.suspendedLanes|=a,e.pingedLanes&=~a,i&&(e.warmLanes|=a),i=e.expirationTimes;for(var l=a;0<l;){var d=31-ya(l),p=1<<d;i[d]=-1,l&=~p}o!==0&&em(e,o,a)}function kn(){return(be&6)===0?(ci(0),!1):!0}function Md(){if(le!==null){if(ye===0)var e=le.return;else e=le,po=ft=null,Kl(e),Zt=null,Qs=0,e=le;for(;e!==null;)xg(e.alternate,e),e=e.return;le=null}}function rs(e,a){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,jq(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),Eo=0,Md(),Ae=e,le=o=uo(e.current,null),ue=a,ye=0,Aa=null,_o=!1,ss=Ts(e,a),Pd=!1,is=za=Dd=Et=Io=Ne=0,ha=li=null,Td=!1,(a&8)!==0&&(a|=a&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=a;0<i;){var l=31-ya(i),d=1<<l;a|=e[l],i&=~d}return So=a,ln(),o}function Gg(e,a){ie=null,U.H=ei,a===$t||a===hn?(a=rp(),ye=3):a===Ul?(a=rp(),ye=4):ye=a===ud?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Aa=a,le===null&&(Ne=1,Rn(e,ja(a,e.current)))}function Qg(){var e=Sa.current;return e===null?!0:(ue&4194048)===ue?wa===null:(ue&62914560)===ue||(ue&536870912)!==0?e===wa:!1}function Hg(){var e=U.H;return U.H=ei,e===null?ei:e}function Yg(){var e=U.A;return U.A=cq,e}function Fn(){Ne=4,_o||(ue&4194048)!==ue&&Sa.current!==null||(ss=!0),(Io&134217727)===0&&(Et&134217727)===0||Ae===null||Ho(Ae,ue,za,!1)}function Od(e,a,o){var i=be;be|=2;var l=Hg(),d=Yg();(Ae!==e||ue!==a)&&(Xn=null,rs(e,a)),a=!1;var p=Ne;e:do try{if(ye!==0&&le!==null){var b=le,C=Aa;switch(ye){case 8:Md(),p=6;break e;case 3:case 2:case 9:case 6:Sa.current===null&&(a=!0);var R=ye;if(ye=0,Aa=null,ls(e,b,C,R),o&&ss){p=0;break e}break;default:R=ye,ye=0,Aa=null,ls(e,b,C,R)}}pq(),p=Ne;break}catch(w){Gg(e,w)}while(!0);return a&&e.shellSuspendCounter++,po=ft=null,be=i,U.H=l,U.A=d,le===null&&(Ae=null,ue=0,ln()),p}function pq(){for(;le!==null;)Kg(le)}function gq(e,a){var o=be;be|=2;var i=Hg(),l=Yg();Ae!==e||ue!==a?(Xn=null,Bn=ba()+500,rs(e,a)):ss=Ts(e,a);e:do try{if(ye!==0&&le!==null){a=le;var d=Aa;a:switch(ye){case 1:ye=0,Aa=null,ls(e,a,d,1);break;case 2:case 9:if(ip(d)){ye=0,Aa=null,$g(a);break}a=function(){ye!==2&&ye!==9||Ae!==e||(ye=7),to(e)},d.then(a,a);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:ip(d)?(ye=0,Aa=null,$g(a)):(ye=0,Aa=null,ls(e,a,d,7));break;case 5:var p=null;switch(le.tag){case 26:p=le.memoizedState;case 5:case 27:var b=le;if(p?wf(p):b.stateNode.complete){ye=0,Aa=null;var C=b.sibling;if(C!==null)le=C;else{var R=b.return;R!==null?(le=R,_n(R)):le=null}break a}}ye=0,Aa=null,ls(e,a,d,5);break;case 6:ye=0,Aa=null,ls(e,a,d,6);break;case 8:Md(),Ne=6;break e;default:throw Error(r(462))}}fq();break}catch(w){Gg(e,w)}while(!0);return po=ft=null,U.H=i,U.A=l,be=o,le!==null?0:(Ae=null,ue=0,ln(),Ne)}function fq(){for(;le!==null&&!Lb();)Kg(le)}function Kg(e){var a=qg(e.alternate,e,So);e.memoizedProps=e.pendingProps,a===null?_n(e):le=a}function $g(e){var a=e,o=a.alternate;switch(a.tag){case 15:case 0:a=pg(o,a,a.pendingProps,a.type,void 0,ue);break;case 11:a=pg(o,a,a.pendingProps,a.type.render,a.ref,ue);break;case 5:Kl(a);default:xg(o,a),a=le=Ym(a,So),a=qg(o,a,So)}e.memoizedProps=e.pendingProps,a===null?_n(e):le=a}function ls(e,a,o,i){po=ft=null,Kl(a),Zt=null,Qs=0;var l=a.return;try{if(tq(e,l,a,o,ue)){Ne=1,Rn(e,ja(o,e.current)),le=null;return}}catch(d){if(l!==null)throw le=l,d;Ne=1,Rn(e,ja(o,e.current)),le=null;return}a.flags&32768?(pe||i===1?e=!0:ss||(ue&536870912)!==0?e=!1:(_o=e=!0,(i===2||i===9||i===3||i===6)&&(i=Sa.current,i!==null&&i.tag===13&&(i.flags|=16384))),Zg(a,e)):_n(a)}function _n(e){var a=e;do{if((a.flags&32768)!==0){Zg(a,_o);return}e=a.return;var o=nq(a.alternate,a,So);if(o!==null){le=o;return}if(a=a.sibling,a!==null){le=a;return}le=a=e}while(a!==null);Ne===0&&(Ne=5)}function Zg(e,a){do{var o=rq(e.alternate,e);if(o!==null){o.flags&=32767,le=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(e=e.sibling,e!==null)){le=e;return}le=e=o}while(e!==null);Ne=6,le=null}function Jg(e,a,o,i,l,d,p,b,C){e.cancelPendingCommit=null;do In();while(He!==0);if((be&6)!==0)throw Error(r(327));if(a!==null){if(a===e.current)throw Error(r(177));if(d=a.lanes|a.childLanes,d|=Cl,Yb(e,o,d,p,b,C),e===Ae&&(le=Ae=null,ue=0),ns=a,Qo=e,Eo=o,Rd=d,Vd=l,kg=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qq(Gi,function(){return tf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=U.T,U.T=null,l=_.p,_.p=2,p=be,be|=4;try{lq(e,a,o)}finally{be=p,_.p=l,U.T=i}}He=1,Wg(),ef(),af()}}function Wg(){if(He===1){He=0;var e=Qo,a=ns,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=U.T,U.T=null;var i=_.p;_.p=2;var l=be;be|=4;try{Mg(a,e);var d=Qd,p=Bm(e.containerInfo),b=d.focusedElem,C=d.selectionRange;if(p!==b&&b&&b.ownerDocument&&Lm(b.ownerDocument.documentElement,b)){if(C!==null&&vl(b)){var R=C.start,w=C.end;if(w===void 0&&(w=R),"selectionStart"in b)b.selectionStart=R,b.selectionEnd=Math.min(w,b.value.length);else{var X=b.ownerDocument||document,V=X&&X.defaultView||window;if(V.getSelection){var O=V.getSelection(),H=b.textContent.length,oe=Math.min(C.start,H),Ee=C.end===void 0?oe:Math.min(C.end,H);!O.extend&&oe>Ee&&(p=Ee,Ee=oe,oe=p);var P=Um(b,oe),S=Um(b,Ee);if(P&&S&&(O.rangeCount!==1||O.anchorNode!==P.node||O.anchorOffset!==P.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var T=X.createRange();T.setStart(P.node,P.offset),O.removeAllRanges(),oe>Ee?(O.addRange(T),O.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),O.addRange(T))}}}}for(X=[],O=b;O=O.parentNode;)O.nodeType===1&&X.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<X.length;b++){var L=X[b];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}or=!!Gd,Qd=Gd=null}finally{be=l,_.p=i,U.T=o}}e.current=a,He=2}}function ef(){if(He===2){He=0;var e=Qo,a=ns,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=U.T,U.T=null;var i=_.p;_.p=2;var l=be;be|=4;try{Dg(e,a.alternate,a)}finally{be=l,_.p=i,U.T=o}}He=3}}function af(){if(He===4||He===3){He=0,Bb();var e=Qo,a=ns,o=Eo,i=kg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?He=5:(He=0,ns=Qo=null,of(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Go=null),Jr(o),a=a.stateNode,qa&&typeof qa.onCommitFiberRoot=="function")try{qa.onCommitFiberRoot(Ds,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=U.T,l=_.p,_.p=2,U.T=null;try{for(var d=e.onRecoverableError,p=0;p<i.length;p++){var b=i[p];d(b.value,{componentStack:b.stack})}}finally{U.T=a,_.p=l}}(Eo&3)!==0&&In(),to(e),l=e.pendingLanes,(o&261930)!==0&&(l&42)!==0?e===jd?di++:(di=0,jd=e):di=0,ci(0)}}function of(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Is(a)))}function In(){return Wg(),ef(),af(),tf()}function tf(){if(He!==5)return!1;var e=Qo,a=Rd;Rd=0;var o=Jr(Eo),i=U.T,l=_.p;try{_.p=32>o?32:o,U.T=null,o=Vd,Vd=null;var d=Qo,p=Eo;if(He=0,ns=Qo=null,Eo=0,(be&6)!==0)throw Error(r(331));var b=be;if(be|=4,Lg(d.current),Ng(d,d.current,p,o),be=b,ci(0,!1),qa&&typeof qa.onPostCommitFiberRoot=="function")try{qa.onPostCommitFiberRoot(Ds,d)}catch{}return!0}finally{_.p=l,U.T=i,of(e,a)}}function sf(e,a,o){a=ja(o,a),a=cd(e.stateNode,a,2),e=Bo(e,a,2),e!==null&&(Rs(e,2),to(e))}function xe(e,a,o){if(e.tag===3)sf(e,e,o);else for(;a!==null;){if(a.tag===3){sf(a,e,o);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Go===null||!Go.has(i))){e=ja(o,e),o=ig(2),i=Bo(a,o,2),i!==null&&(ng(o,i,a,e),Rs(i,2),to(i));break}}a=a.return}}function Nd(e,a,o){var i=e.pingCache;if(i===null){i=e.pingCache=new uq;var l=new Set;i.set(a,l)}else l=i.get(a),l===void 0&&(l=new Set,i.set(a,l));l.has(o)||(Pd=!0,l.add(o),e=hq.bind(null,e,a,o),a.then(e,e))}function hq(e,a,o){var i=e.pingCache;i!==null&&i.delete(a),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,Ae===e&&(ue&o)===o&&(Ne===4||Ne===3&&(ue&62914560)===ue&&300>ba()-Ln?(be&2)===0&&rs(e,0):Dd|=o,is===ue&&(is=0)),to(e)}function nf(e,a){a===0&&(a=Wu()),e=mt(e,a),e!==null&&(Rs(e,a),to(e))}function vq(e){var a=e.memoizedState,o=0;a!==null&&(o=a.retryLane),nf(e,o)}function bq(e,a){var o=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(o=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(a),nf(e,o)}function qq(e,a){return Yr(e,a)}var Gn=null,ds=null,wd=!1,Qn=!1,Ud=!1,Yo=0;function to(e){e!==ds&&e.next===null&&(ds===null?Gn=ds=e:ds=ds.next=e),Qn=!0,wd||(wd=!0,xq())}function ci(e,a){if(!Ud&&Qn){Ud=!0;do for(var o=!1,i=Gn;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var d=0;else{var p=i.suspendedLanes,b=i.pingedLanes;d=(1<<31-ya(42|e)+1)-1,d&=l&~(p&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,cf(i,d))}else d=ue,d=Ki(i,i===Ae?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||Ts(i,d)||(o=!0,cf(i,d));i=i.next}while(o);Ud=!1}}function yq(){rf()}function rf(){Qn=wd=!1;var e=0;Yo!==0&&Vq()&&(e=Yo);for(var a=ba(),o=null,i=Gn;i!==null;){var l=i.next,d=lf(i,a);d===0?(i.next=null,o===null?Gn=l:o.next=l,l===null&&(ds=o)):(o=i,(e!==0||(d&3)!==0)&&(Qn=!0)),i=l}He!==0&&He!==5||ci(e),Yo!==0&&(Yo=0)}function lf(e,a){for(var o=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var p=31-ya(d),b=1<<p,C=l[p];C===-1?((b&o)===0||(b&i)!==0)&&(l[p]=Hb(b,a)):C<=a&&(e.expiredLanes|=b),d&=~b}if(a=Ae,o=ue,o=Ki(e,e===a?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,o===0||e===a&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Kr(i),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Ts(e,o)){if(a=o&-o,a===e.callbackPriority)return a;switch(i!==null&&Kr(i),Jr(o)){case 2:case 8:o=Zu;break;case 32:o=Gi;break;case 268435456:o=Ju;break;default:o=Gi}return i=df.bind(null,e),o=Yr(o,i),e.callbackPriority=a,e.callbackNode=o,a}return i!==null&&i!==null&&Kr(i),e.callbackPriority=2,e.callbackNode=null,2}function df(e,a){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(In()&&e.callbackNode!==o)return null;var i=ue;return i=Ki(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(_g(e,i,a),lf(e,ba()),e.callbackNode!=null&&e.callbackNode===o?df.bind(null,e):null)}function cf(e,a){if(In())return null;_g(e,a,!0)}function xq(){Mq(function(){(be&6)!==0?Yr($u,yq):rf()})}function Ld(){if(Yo===0){var e=Yt;e===0&&(e=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),Yo=e}return Yo}function uf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wi(""+e)}function mf(e,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,e.id&&o.setAttribute("form",e.id),a.parentNode.insertBefore(o,a),e=new FormData(e),o.parentNode.removeChild(o),e}function Cq(e,a,o,i,l){if(a==="submit"&&o&&o.stateNode===l){var d=uf((l[ua]||null).action),p=i.submitter;p&&(a=(a=p[ua]||null)?uf(a.formAction):p.getAttribute("formAction"),a!==null&&(d=a,p=null));var b=new tn("action","action",null,i,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Yo!==0){var C=p?mf(l,p):new FormData(l);sd(o,{pending:!0,data:C,method:l.method,action:d},null,C)}}else typeof d=="function"&&(b.preventDefault(),C=p?mf(l,p):new FormData(l),sd(o,{pending:!0,data:C,method:l.method,action:d},d,C))},currentTarget:l}]})}}for(var Bd=0;Bd<xl.length;Bd++){var Xd=xl[Bd],Sq=Xd.toLowerCase(),Eq=Xd[0].toUpperCase()+Xd.slice(1);_a(Sq,"on"+Eq)}_a(Fm,"onAnimationEnd"),_a(_m,"onAnimationIteration"),_a(Im,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(X2,"onTransitionRun"),_a(k2,"onTransitionStart"),_a(F2,"onTransitionCancel"),_a(Gm,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aq=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function pf(e,a){a=(a&4)!==0;for(var o=0;o<e.length;o++){var i=e[o],l=i.event;i=i.listeners;e:{var d=void 0;if(a)for(var p=i.length-1;0<=p;p--){var b=i[p],C=b.instance,R=b.currentTarget;if(b=b.listener,C!==d&&l.isPropagationStopped())break e;d=b,l.currentTarget=R;try{d(l)}catch(w){rn(w)}l.currentTarget=null,d=C}else for(p=0;p<i.length;p++){if(b=i[p],C=b.instance,R=b.currentTarget,b=b.listener,C!==d&&l.isPropagationStopped())break e;d=b,l.currentTarget=R;try{d(l)}catch(w){rn(w)}l.currentTarget=null,d=C}}}}function de(e,a){var o=a[Wr];o===void 0&&(o=a[Wr]=new Set);var i=e+"__bubble";o.has(i)||(gf(a,e,2,!1),o.add(i))}function kd(e,a,o){var i=0;a&&(i|=4),gf(o,e,i,a)}var Hn="_reactListening"+Math.random().toString(36).slice(2);function Fd(e){if(!e[Hn]){e[Hn]=!0,nm.forEach(function(o){o!=="selectionchange"&&(Aq.has(o)||kd(o,!1,e),kd(o,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Hn]||(a[Hn]=!0,kd("selectionchange",!1,a))}}function gf(e,a,o,i){switch(_f(a)){case 2:var l=Wq;break;case 8:l=ey;break;default:l=tc}o=l.bind(null,a,o,e),l=void 0,!ll||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(a,o,{capture:!0,passive:l}):e.addEventListener(a,o,!0):l!==void 0?e.addEventListener(a,o,{passive:l}):e.addEventListener(a,o,!1)}function _d(e,a,o,i,l){var d=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var b=i.stateNode.containerInfo;if(b===l)break;if(p===4)for(p=i.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;b!==null;){if(p=Vt(b),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){i=d=p;continue e}b=b.parentNode}}i=i.return}bm(function(){var R=d,w=nl(o),X=[];e:{var V=Qm.get(e);if(V!==void 0){var O=tn,H=e;switch(e){case"keypress":if(an(o)===0)break e;case"keydown":case"keyup":O=b2;break;case"focusin":H="focus",O=ml;break;case"focusout":H="blur",O=ml;break;case"beforeblur":case"afterblur":O=ml;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=n2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=x2;break;case Fm:case _m:case Im:O=d2;break;case Gm:O=S2;break;case"scroll":case"scrollend":O=s2;break;case"wheel":O=A2;break;case"copy":case"cut":case"paste":O=u2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Sm;break;case"toggle":case"beforetoggle":O=P2}var oe=(a&4)!==0,Ee=!oe&&(e==="scroll"||e==="scrollend"),P=oe?V!==null?V+"Capture":null:V;oe=[];for(var S=R,T;S!==null;){var L=S;if(T=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||T===null||P===null||(L=Ms(S,P),L!=null&&oe.push(mi(S,L,T))),Ee)break;S=S.return}0<oe.length&&(V=new O(V,H,null,o,w),X.push({event:V,listeners:oe}))}}if((a&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",V&&o!==il&&(H=o.relatedTarget||o.fromElement)&&(Vt(H)||H[Rt]))break e;if((O||V)&&(V=w.window===w?w:(V=w.ownerDocument)?V.defaultView||V.parentWindow:window,O?(H=o.relatedTarget||o.toElement,O=R,H=H?Vt(H):null,H!==null&&(Ee=u(H),oe=H.tag,H!==Ee||oe!==5&&oe!==27&&oe!==6)&&(H=null)):(O=null,H=R),O!==H)){if(oe=xm,L="onMouseLeave",P="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Sm,L="onPointerLeave",P="onPointerEnter",S="pointer"),Ee=O==null?V:js(O),T=H==null?V:js(H),V=new oe(L,S+"leave",O,o,w),V.target=Ee,V.relatedTarget=T,L=null,Vt(w)===R&&(oe=new oe(P,S+"enter",H,o,w),oe.target=T,oe.relatedTarget=Ee,L=oe),Ee=L,O&&H)a:{for(oe=zq,P=O,S=H,T=0,L=P;L;L=oe(L))T++;L=0;for(var ee=S;ee;ee=oe(ee))L++;for(;0<T-L;)P=oe(P),T--;for(;0<L-T;)S=oe(S),L--;for(;T--;){if(P===S||S!==null&&P===S.alternate){oe=P;break a}P=oe(P),S=oe(S)}oe=null}else oe=null;O!==null&&ff(X,V,O,oe,!1),H!==null&&Ee!==null&&ff(X,Ee,H,oe,!0)}}e:{if(V=R?js(R):window,O=V.nodeName&&V.nodeName.toLowerCase(),O==="select"||O==="input"&&V.type==="file")var fe=Vm;else if(Tm(V))if(jm)fe=U2;else{fe=N2;var J=O2}else O=V.nodeName,!O||O.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?R&&sl(R.elementType)&&(fe=Vm):fe=w2;if(fe&&(fe=fe(e,R))){Rm(X,fe,o,w);break e}J&&J(e,V,R),e==="focusout"&&R&&V.type==="number"&&R.memoizedProps.value!=null&&tl(V,"number",V.value)}switch(J=R?js(R):window,e){case"focusin":(Tm(J)||J.contentEditable==="true")&&(Xt=J,bl=R,ks=null);break;case"focusout":ks=bl=Xt=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,Xm(X,o,w);break;case"selectionchange":if(B2)break;case"keydown":case"keyup":Xm(X,o,w)}var ne;if(gl)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Bt?Pm(e,o)&&(me="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(me="onCompositionStart");me&&(Em&&o.locale!=="ko"&&(Bt||me!=="onCompositionStart"?me==="onCompositionEnd"&&Bt&&(ne=qm()):(jo=w,dl="value"in jo?jo.value:jo.textContent,Bt=!0)),J=Yn(R,me),0<J.length&&(me=new Cm(me,e,null,o,w),X.push({event:me,listeners:J}),ne?me.data=ne:(ne=Dm(o),ne!==null&&(me.data=ne)))),(ne=T2?R2(e,o):V2(e,o))&&(me=Yn(R,"onBeforeInput"),0<me.length&&(J=new Cm("onBeforeInput","beforeinput",null,o,w),X.push({event:J,listeners:me}),J.data=ne)),Cq(X,e,R,o,w)}pf(X,a)})}function mi(e,a,o){return{instance:e,listener:a,currentTarget:o}}function Yn(e,a){for(var o=a+"Capture",i=[];e!==null;){var l=e,d=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||d===null||(l=Ms(e,o),l!=null&&i.unshift(mi(e,l,d)),l=Ms(e,a),l!=null&&i.push(mi(e,l,d))),e.tag===3)return i;e=e.return}return[]}function zq(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ff(e,a,o,i,l){for(var d=a._reactName,p=[];o!==null&&o!==i;){var b=o,C=b.alternate,R=b.stateNode;if(b=b.tag,C!==null&&C===i)break;b!==5&&b!==26&&b!==27||R===null||(C=R,l?(R=Ms(o,d),R!=null&&p.unshift(mi(o,R,C))):l||(R=Ms(o,d),R!=null&&p.push(mi(o,R,C)))),o=o.return}p.length!==0&&e.push({event:a,listeners:p})}var Pq=/\r\n?/g,Dq=/\u0000|\uFFFD/g;function hf(e){return(typeof e=="string"?e:""+e).replace(Pq,`
`).replace(Dq,"")}function vf(e,a){return a=hf(a),hf(e)===a}function Se(e,a,o,i,l,d){switch(o){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||wt(e,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&wt(e,""+i);break;case"className":Zi(e,"class",i);break;case"tabIndex":Zi(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,o,i);break;case"style":hm(e,i,d);break;case"data":if(a!=="object"){Zi(e,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||o!=="href")){e.removeAttribute(o);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(o);break}i=Wi(""+i),e.setAttribute(o,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(a!=="input"&&Se(e,a,"name",l.name,l,null),Se(e,a,"formEncType",l.formEncType,l,null),Se(e,a,"formMethod",l.formMethod,l,null),Se(e,a,"formTarget",l.formTarget,l,null)):(Se(e,a,"encType",l.encType,l,null),Se(e,a,"method",l.method,l,null),Se(e,a,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(o);break}i=Wi(""+i),e.setAttribute(o,i);break;case"onClick":i!=null&&(e.onclick=lo);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(o=i.__html,o!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=o}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}o=Wi(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(o,""+i):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":i===!0?e.setAttribute(o,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(o,i):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(o,i):e.removeAttribute(o);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(o):e.setAttribute(o,i);break;case"popover":de("beforetoggle",e),de("toggle",e),$i(e,"popover",i);break;case"xlinkActuate":ro(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ro(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ro(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ro(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ro(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ro(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ro(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ro(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ro(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$i(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=o2.get(o)||o,$i(e,o,i))}}function Id(e,a,o,i,l,d){switch(o){case"style":hm(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(o=i.__html,o!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=o}}break;case"children":typeof i=="string"?wt(e,i):(typeof i=="number"||typeof i=="bigint")&&wt(e,""+i);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"onClick":i!=null&&(e.onclick=lo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rm.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(l=o.endsWith("Capture"),a=o.slice(2,l?o.length-7:void 0),d=e[ua]||null,d=d!=null?d[o]:null,typeof d=="function"&&e.removeEventListener(a,d,l),typeof i=="function")){typeof d!="function"&&d!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(a,i,l);break e}o in e?e[o]=i:i===!0?e.setAttribute(o,""):$i(e,o,i)}}}function aa(e,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,l=!1,d;for(d in o)if(o.hasOwnProperty(d)){var p=o[d];if(p!=null)switch(d){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Se(e,a,d,p,o,null)}}l&&Se(e,a,"srcSet",o.srcSet,o,null),i&&Se(e,a,"src",o.src,o,null);return;case"input":de("invalid",e);var b=d=p=l=null,C=null,R=null;for(i in o)if(o.hasOwnProperty(i)){var w=o[i];if(w!=null)switch(i){case"name":l=w;break;case"type":p=w;break;case"checked":C=w;break;case"defaultChecked":R=w;break;case"value":d=w;break;case"defaultValue":b=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,a));break;default:Se(e,a,i,w,o,null)}}mm(e,d,b,C,R,p,l,!1);return;case"select":de("invalid",e),i=p=d=null;for(l in o)if(o.hasOwnProperty(l)&&(b=o[l],b!=null))switch(l){case"value":d=b;break;case"defaultValue":p=b;break;case"multiple":i=b;default:Se(e,a,l,b,o,null)}a=d,o=p,e.multiple=!!i,a!=null?Nt(e,!!i,a,!1):o!=null&&Nt(e,!!i,o,!0);return;case"textarea":de("invalid",e),d=l=i=null;for(p in o)if(o.hasOwnProperty(p)&&(b=o[p],b!=null))switch(p){case"value":i=b;break;case"defaultValue":l=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Se(e,a,p,b,o,null)}gm(e,i,l,d);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(i=o[C],i!=null))switch(C){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Se(e,a,C,i,o,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<ui.length;i++)de(ui[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in o)if(o.hasOwnProperty(R)&&(i=o[R],i!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:Se(e,a,R,i,o,null)}return;default:if(sl(a)){for(w in o)o.hasOwnProperty(w)&&(i=o[w],i!==void 0&&Id(e,a,w,i,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(i=o[b],i!=null&&Se(e,a,b,i,o,null))}function Tq(e,a,o,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,d=null,p=null,b=null,C=null,R=null,w=null;for(O in o){var X=o[O];if(o.hasOwnProperty(O)&&X!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":C=X;default:i.hasOwnProperty(O)||Se(e,a,O,null,i,X)}}for(var V in i){var O=i[V];if(X=o[V],i.hasOwnProperty(V)&&(O!=null||X!=null))switch(V){case"type":d=O;break;case"name":l=O;break;case"checked":R=O;break;case"defaultChecked":w=O;break;case"value":p=O;break;case"defaultValue":b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,a));break;default:O!==X&&Se(e,a,V,O,i,X)}}ol(e,p,b,C,R,w,d,l);return;case"select":O=p=b=V=null;for(d in o)if(C=o[d],o.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":O=C;default:i.hasOwnProperty(d)||Se(e,a,d,null,i,C)}for(l in i)if(d=i[l],C=o[l],i.hasOwnProperty(l)&&(d!=null||C!=null))switch(l){case"value":V=d;break;case"defaultValue":b=d;break;case"multiple":p=d;default:d!==C&&Se(e,a,l,d,i,C)}a=b,o=p,i=O,V!=null?Nt(e,!!o,V,!1):!!i!=!!o&&(a!=null?Nt(e,!!o,a,!0):Nt(e,!!o,o?[]:"",!1));return;case"textarea":O=V=null;for(b in o)if(l=o[b],o.hasOwnProperty(b)&&l!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Se(e,a,b,null,i,l)}for(p in i)if(l=i[p],d=o[p],i.hasOwnProperty(p)&&(l!=null||d!=null))switch(p){case"value":V=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==d&&Se(e,a,p,l,i,d)}pm(e,V,O);return;case"option":for(var H in o)if(V=o[H],o.hasOwnProperty(H)&&V!=null&&!i.hasOwnProperty(H))switch(H){case"selected":e.selected=!1;break;default:Se(e,a,H,null,i,V)}for(C in i)if(V=i[C],O=o[C],i.hasOwnProperty(C)&&V!==O&&(V!=null||O!=null))switch(C){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Se(e,a,C,V,i,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in o)V=o[oe],o.hasOwnProperty(oe)&&V!=null&&!i.hasOwnProperty(oe)&&Se(e,a,oe,null,i,V);for(R in i)if(V=i[R],O=o[R],i.hasOwnProperty(R)&&V!==O&&(V!=null||O!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(r(137,a));break;default:Se(e,a,R,V,i,O)}return;default:if(sl(a)){for(var Ee in o)V=o[Ee],o.hasOwnProperty(Ee)&&V!==void 0&&!i.hasOwnProperty(Ee)&&Id(e,a,Ee,void 0,i,V);for(w in i)V=i[w],O=o[w],!i.hasOwnProperty(w)||V===O||V===void 0&&O===void 0||Id(e,a,w,V,i,O);return}}for(var P in o)V=o[P],o.hasOwnProperty(P)&&V!=null&&!i.hasOwnProperty(P)&&Se(e,a,P,null,i,V);for(X in i)V=i[X],O=o[X],!i.hasOwnProperty(X)||V===O||V==null&&O==null||Se(e,a,X,V,i,O)}function bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rq(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,o=performance.getEntriesByType("resource"),i=0;i<o.length;i++){var l=o[i],d=l.transferSize,p=l.initiatorType,b=l.duration;if(d&&b&&bf(p)){for(p=0,b=l.responseEnd,i+=1;i<o.length;i++){var C=o[i],R=C.startTime;if(R>b)break;var w=C.transferSize,X=C.initiatorType;w&&bf(X)&&(C=C.responseEnd,p+=w*(C<b?1:(b-R)/(C-R)))}if(--i,a+=8*(d+p)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gd=null,Qd=null;function Kn(e){return e.nodeType===9?e:e.ownerDocument}function qf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Hd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Vq(){var e=window.event;return e&&e.type==="popstate"?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var xf=typeof setTimeout=="function"?setTimeout:void 0,jq=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,Mq=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(e){return Cf.resolve(null).then(e).catch(Oq)}:xf;function Oq(e){setTimeout(function(){throw e})}function Ko(e){return e==="head"}function Sf(e,a){var o=a,i=0;do{var l=o.nextSibling;if(e.removeChild(o),l&&l.nodeType===8)if(o=l.data,o==="/$"||o==="/&"){if(i===0){e.removeChild(l),ps(a);return}i--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")i++;else if(o==="html")pi(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,pi(o);for(var d=o.firstChild;d;){var p=d.nextSibling,b=d.nodeName;d[Vs]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||o.removeChild(d),d=p}}else o==="body"&&pi(e.ownerDocument.body);o=l}while(o);ps(a)}function Ef(e,a){var o=e;e=0;do{var i=o.nextSibling;if(o.nodeType===1?a?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(a?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),i&&i.nodeType===8)if(o=i.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=i}while(o)}function Kd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Kd(o),el(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function Nq(e,a,o,i){for(;e.nodeType===1;){var l=o;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Vs])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var d=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ua(e.nextSibling),e===null)break}return null}function wq(e,a,o){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Ua(e.nextSibling),e===null))return null;return e}function Af(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ua(e.nextSibling),e===null))return null;return e}function $d(e){return e.data==="$?"||e.data==="$~"}function Zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uq(e,a){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||o.readyState!=="loading")a();else{var i=function(){a(),o.removeEventListener("DOMContentLoaded",i)};o.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ua(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Jd=null;function zf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(a===0)return Ua(e.nextSibling);a--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||a++}e=e.nextSibling}return null}function Pf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(a===0)return e;a--}else o!=="/$"&&o!=="/&"||a++}e=e.previousSibling}return null}function Df(e,a,o){switch(a=Kn(o),e){case"html":if(e=a.documentElement,!e)throw Error(r(452));return e;case"head":if(e=a.head,!e)throw Error(r(453));return e;case"body":if(e=a.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function pi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);el(e)}var La=new Map,Tf=new Set;function $n(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ao=_.d;_.d={f:Lq,r:Bq,D:Xq,C:kq,L:Fq,m:_q,X:Gq,S:Iq,M:Qq};function Lq(){var e=Ao.f(),a=kn();return e||a}function Bq(e){var a=jt(e);a!==null&&a.tag===5&&a.type==="form"?Gp(a):Ao.r(e)}var cs=typeof document>"u"?null:document;function Rf(e,a,o){var i=cs;if(i&&typeof a=="string"&&a){var l=Ra(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof o=="string"&&(l+='[crossorigin="'+o+'"]'),Tf.has(l)||(Tf.add(l),e={rel:e,crossOrigin:o,href:a},i.querySelector(l)===null&&(a=i.createElement("link"),aa(a,"link",e),Ke(a),i.head.appendChild(a)))}}function Xq(e){Ao.D(e),Rf("dns-prefetch",e,null)}function kq(e,a){Ao.C(e,a),Rf("preconnect",e,a)}function Fq(e,a,o){Ao.L(e,a,o);var i=cs;if(i&&e&&a){var l='link[rel="preload"][as="'+Ra(a)+'"]';a==="image"&&o&&o.imageSrcSet?(l+='[imagesrcset="'+Ra(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(l+='[imagesizes="'+Ra(o.imageSizes)+'"]')):l+='[href="'+Ra(e)+'"]';var d=l;switch(a){case"style":d=us(e);break;case"script":d=ms(e)}La.has(d)||(e=q({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:e,as:a},o),La.set(d,e),i.querySelector(l)!==null||a==="style"&&i.querySelector(gi(d))||a==="script"&&i.querySelector(fi(d))||(a=i.createElement("link"),aa(a,"link",e),Ke(a),i.head.appendChild(a)))}}function _q(e,a){Ao.m(e,a);var o=cs;if(o&&e){var i=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+Ra(i)+'"][href="'+Ra(e)+'"]',d=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ms(e)}if(!La.has(d)&&(e=q({rel:"modulepreload",href:e},a),La.set(d,e),o.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(fi(d)))return}i=o.createElement("link"),aa(i,"link",e),Ke(i),o.head.appendChild(i)}}}function Iq(e,a,o){Ao.S(e,a,o);var i=cs;if(i&&e){var l=Mt(i).hoistableStyles,d=us(e);a=a||"default";var p=l.get(d);if(!p){var b={loading:0,preload:null};if(p=i.querySelector(gi(d)))b.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":a},o),(o=La.get(d))&&Wd(e,o);var C=p=i.createElement("link");Ke(C),aa(C,"link",e),C._p=new Promise(function(R,w){C.onload=R,C.onerror=w}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Zn(p,a,i)}p={type:"stylesheet",instance:p,count:1,state:b},l.set(d,p)}}}function Gq(e,a){Ao.X(e,a);var o=cs;if(o&&e){var i=Mt(o).hoistableScripts,l=ms(e),d=i.get(l);d||(d=o.querySelector(fi(l)),d||(e=q({src:e,async:!0},a),(a=La.get(l))&&ec(e,a),d=o.createElement("script"),Ke(d),aa(d,"link",e),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(l,d))}}function Qq(e,a){Ao.M(e,a);var o=cs;if(o&&e){var i=Mt(o).hoistableScripts,l=ms(e),d=i.get(l);d||(d=o.querySelector(fi(l)),d||(e=q({src:e,async:!0,type:"module"},a),(a=La.get(l))&&ec(e,a),d=o.createElement("script"),Ke(d),aa(d,"link",e),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(l,d))}}function Vf(e,a,o,i){var l=(l=re.current)?$n(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=us(o.href),o=Mt(l).hoistableStyles,i=o.get(a),i||(i={type:"style",instance:null,count:0,state:null},o.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=us(o.href);var d=Mt(l).hoistableStyles,p=d.get(e);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,p),(d=l.querySelector(gi(e)))&&!d._p&&(p.instance=d,p.state.loading=5),La.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},La.set(e,o),d||Hq(l,e,o,p.state))),a&&i===null)throw Error(r(528,""));return p}if(a&&i!==null)throw Error(r(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ms(o),o=Mt(l).hoistableScripts,i=o.get(a),i||(i={type:"script",instance:null,count:0,state:null},o.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Ra(e)+'"'}function gi(e){return'link[rel="stylesheet"]['+e+"]"}function jf(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function Hq(e,a,o,i){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=e.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),aa(a,"link",o),Ke(a),e.head.appendChild(a))}function ms(e){return'[src="'+Ra(e)+'"]'}function fi(e){return"script[async]"+e}function Mf(e,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var i=e.querySelector('style[data-href~="'+Ra(o.href)+'"]');if(i)return a.instance=i,Ke(i),i;var l=q({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ke(i),aa(i,"style",l),Zn(i,o.precedence,e),a.instance=i;case"stylesheet":l=us(o.href);var d=e.querySelector(gi(l));if(d)return a.state.loading|=4,a.instance=d,Ke(d),d;i=jf(o),(l=La.get(l))&&Wd(i,l),d=(e.ownerDocument||e).createElement("link"),Ke(d);var p=d;return p._p=new Promise(function(b,C){p.onload=b,p.onerror=C}),aa(d,"link",i),a.state.loading|=4,Zn(d,o.precedence,e),a.instance=d;case"script":return d=ms(o.src),(l=e.querySelector(fi(d)))?(a.instance=l,Ke(l),l):(i=o,(l=La.get(d))&&(i=q({},o),ec(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ke(l),aa(l,"link",i),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,Zn(i,o.precedence,e));return a.instance}function Zn(e,a,o){for(var i=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,d=l,p=0;p<i.length;p++){var b=i[p];if(b.dataset.precedence===a)d=b;else if(d!==l)break}d?d.parentNode.insertBefore(e,d.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(e,a.firstChild))}function Wd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function ec(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Jn=null;function Of(e,a,o){if(Jn===null){var i=new Map,l=Jn=new Map;l.set(o,i)}else l=Jn,i=l.get(o),i||(i=new Map,l.set(o,i));if(i.has(e))return i;for(i.set(e,null),o=o.getElementsByTagName(e),l=0;l<o.length;l++){var d=o[l];if(!(d[Vs]||d[Ze]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var p=d.getAttribute(a)||"";p=e+p;var b=i.get(p);b?b.push(d):i.set(p,[d])}}return i}function Nf(e,a,o){e=e.ownerDocument||e,e.head.insertBefore(o,a==="title"?e.querySelector("head > title"):null)}function Yq(e,a,o){if(o===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kq(e,a,o,i){if(o.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var l=us(i.href),d=a.querySelector(gi(l));if(d){a=d._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Wn.bind(e),a.then(e,e)),o.state.loading|=4,o.instance=d,Ke(d);return}d=a.ownerDocument||a,i=jf(i),(l=La.get(l))&&Wd(i,l),d=d.createElement("link"),Ke(d);var p=d;p._p=new Promise(function(b,C){p.onload=b,p.onerror=C}),aa(d,"link",i),o.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=Wn.bind(e),a.addEventListener("load",o),a.addEventListener("error",o))}}var ac=0;function $q(e,a){return e.stylesheets&&e.count===0&&ar(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var i=setTimeout(function(){if(e.stylesheets&&ar(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+a);0<e.imgBytes&&ac===0&&(ac=62500*Rq());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ar(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>ac?50:800)+a);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Wn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ar(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var er=null;function ar(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,er=new Map,a.forEach(Zq,e),er=null,Wn.call(e))}function Zq(e,a){if(!(a.state.loading&4)){var o=er.get(e);if(o)var i=o.get(null);else{o=new Map,er.set(e,o);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<l.length;d++){var p=l[d];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(o.set(p.dataset.precedence,p),i=p)}i&&o.set(null,i)}l=a.instance,p=l.getAttribute("data-precedence"),d=o.get(p)||i,d===i&&o.set(null,l),o.set(p,l),this.count++,i=Wn.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),d?d.parentNode.insertBefore(l,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var hi={$$typeof:B,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Jq(e,a,o,i,l,d,p,b,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=d,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Uf(e,a,o,i,l,d,p,b,C,R,w,X){return e=new Jq(e,a,o,p,C,R,w,X,b),a=1,d===!0&&(a|=24),d=Ca(3,null,null,a),e.current=d,d.stateNode=e,a=Ol(),a.refCount++,e.pooledCache=a,a.refCount++,d.memoizedState={element:i,isDehydrated:o,cache:a},Ll(d),e}function Lf(e){return e?(e=_t,e):_t}function Bf(e,a,o,i,l,d){l=Lf(l),i.context===null?i.context=l:i.pendingContext=l,i=Lo(a),i.payload={element:o},d=d===void 0?null:d,d!==null&&(i.callback=d),o=Bo(e,i,a),o!==null&&(va(o,e,a),Ys(o,e,a))}function Xf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<a?o:a}}function oc(e,a){Xf(e,a),(e=e.alternate)&&Xf(e,a)}function kf(e){if(e.tag===13||e.tag===31){var a=mt(e,67108864);a!==null&&va(a,e,67108864),oc(e,67108864)}}function Ff(e){if(e.tag===13||e.tag===31){var a=Pa();a=Zr(a);var o=mt(e,a);o!==null&&va(o,e,a),oc(e,a)}}var or=!0;function Wq(e,a,o,i){var l=U.T;U.T=null;var d=_.p;try{_.p=2,tc(e,a,o,i)}finally{_.p=d,U.T=l}}function ey(e,a,o,i){var l=U.T;U.T=null;var d=_.p;try{_.p=8,tc(e,a,o,i)}finally{_.p=d,U.T=l}}function tc(e,a,o,i){if(or){var l=sc(i);if(l===null)_d(e,a,i,tr,o),If(e,i);else if(oy(l,e,a,o,i))i.stopPropagation();else if(If(e,i),a&4&&-1<ay.indexOf(e)){for(;l!==null;){var d=jt(l);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var p=rt(d.pendingLanes);if(p!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var C=1<<31-ya(p);b.entanglements[1]|=C,p&=~C}to(d),(be&6)===0&&(Bn=ba()+500,ci(0))}}break;case 31:case 13:b=mt(d,2),b!==null&&va(b,d,2),kn(),oc(d,2)}if(d=sc(i),d===null&&_d(e,a,i,tr,o),d===l)break;l=d}l!==null&&i.stopPropagation()}else _d(e,a,i,null,o)}}function sc(e){return e=nl(e),ic(e)}var tr=null;function ic(e){if(tr=null,e=Vt(e),e!==null){var a=u(e);if(a===null)e=null;else{var o=a.tag;if(o===13){if(e=m(a),e!==null)return e;e=null}else if(o===31){if(e=g(a),e!==null)return e;e=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return tr=e,null}function _f(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xb()){case $u:return 2;case Zu:return 8;case Gi:case kb:return 32;case Ju:return 268435456;default:return 32}default:return 32}}var nc=!1,$o=null,Zo=null,Jo=null,vi=new Map,bi=new Map,Wo=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function If(e,a){switch(e){case"focusin":case"focusout":$o=null;break;case"dragenter":case"dragleave":Zo=null;break;case"mouseover":case"mouseout":Jo=null;break;case"pointerover":case"pointerout":vi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(a.pointerId)}}function qi(e,a,o,i,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:o,eventSystemFlags:i,nativeEvent:d,targetContainers:[l]},a!==null&&(a=jt(a),a!==null&&kf(a)),e):(e.eventSystemFlags|=i,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function oy(e,a,o,i,l){switch(a){case"focusin":return $o=qi($o,e,a,o,i,l),!0;case"dragenter":return Zo=qi(Zo,e,a,o,i,l),!0;case"mouseover":return Jo=qi(Jo,e,a,o,i,l),!0;case"pointerover":var d=l.pointerId;return vi.set(d,qi(vi.get(d)||null,e,a,o,i,l)),!0;case"gotpointercapture":return d=l.pointerId,bi.set(d,qi(bi.get(d)||null,e,a,o,i,l)),!0}return!1}function Gf(e){var a=Vt(e.target);if(a!==null){var o=u(a);if(o!==null){if(a=o.tag,a===13){if(a=m(o),a!==null){e.blockedOn=a,sm(e.priority,function(){Ff(o)});return}}else if(a===31){if(a=g(o),a!==null){e.blockedOn=a,sm(e.priority,function(){Ff(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sr(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var o=sc(e.nativeEvent);if(o===null){o=e.nativeEvent;var i=new o.constructor(o.type,o);il=i,o.target.dispatchEvent(i),il=null}else return a=jt(o),a!==null&&kf(a),e.blockedOn=o,!1;a.shift()}return!0}function Qf(e,a,o){sr(e)&&o.delete(a)}function ty(){nc=!1,$o!==null&&sr($o)&&($o=null),Zo!==null&&sr(Zo)&&(Zo=null),Jo!==null&&sr(Jo)&&(Jo=null),vi.forEach(Qf),bi.forEach(Qf)}function ir(e,a){e.blockedOn===a&&(e.blockedOn=null,nc||(nc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,ty)))}var nr=null;function Hf(e){nr!==e&&(nr=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){nr===e&&(nr=null);for(var a=0;a<e.length;a+=3){var o=e[a],i=e[a+1],l=e[a+2];if(typeof i!="function"){if(ic(i||o)===null)continue;break}var d=jt(o);d!==null&&(e.splice(a,3),a-=3,sd(d,{pending:!0,data:l,method:o.method,action:i},i,l))}}))}function ps(e){function a(C){return ir(C,e)}$o!==null&&ir($o,e),Zo!==null&&ir(Zo,e),Jo!==null&&ir(Jo,e),vi.forEach(a),bi.forEach(a);for(var o=0;o<Wo.length;o++){var i=Wo[o];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Wo.length&&(o=Wo[0],o.blockedOn===null);)Gf(o),o.blockedOn===null&&Wo.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(i=0;i<o.length;i+=3){var l=o[i],d=o[i+1],p=l[ua]||null;if(typeof d=="function")p||Hf(o);else if(p){var b=null;if(d&&d.hasAttribute("formAction")){if(l=d,p=d[ua]||null)b=p.formAction;else if(ic(l)!==null)continue}else b=p.action;typeof b=="function"?o[i+1]=b:(o.splice(i,3),i-=3),Hf(o)}}}function Yf(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),i||setTimeout(o,20)}function o(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(o,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function rc(e){this._internalRoot=e}rr.prototype.render=rc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(r(409));var o=a.current,i=Pa();Bf(o,i,e,a,null,null)},rr.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Bf(e.current,2,null,e,null,null),kn(),a[Rt]=null}};function rr(e){this._internalRoot=e}rr.prototype.unstable_scheduleHydration=function(e){if(e){var a=tm();e={blockedOn:null,target:e,priority:a};for(var o=0;o<Wo.length&&a!==0&&a<Wo[o].priority;o++);Wo.splice(o,0,e),o===0&&Gf(e)}};var Kf=s.version;if(Kf!=="19.2.4")throw Error(r(527,Kf,"19.2.4"));_.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=f(a),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lr.isDisabled&&lr.supportsFiber)try{Ds=lr.inject(sy),qa=lr}catch{}}return xi.createRoot=function(e,a){if(!c(e))throw Error(r(299));var o=!1,i="",l=ag,d=og,p=tg;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError)),a=Uf(e,1,!1,null,null,o,i,null,l,d,p,Yf),e[Rt]=a.current,Fd(e),new rc(a)},xi.hydrateRoot=function(e,a,o){if(!c(e))throw Error(r(299));var i=!1,l="",d=ag,p=og,b=tg,C=null;return o!=null&&(o.unstable_strictMode===!0&&(i=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(p=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.formState!==void 0&&(C=o.formState)),a=Uf(e,1,!0,a,o??null,i,l,C,d,p,b,Yf),a.context=Lf(null),o=a.current,i=Pa(),i=Zr(i),l=Lo(i),l.callback=null,Bo(o,l,i),o=i,a.current.lanes=o,Rs(a,o),to(a),e[Rt]=a.current,Fd(e),new rr(a)},xi.version="19.2.4",xi}var ih;function hy(){if(ih)return cc.exports;ih=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(s){console.error(s)}}return t(),cc.exports=fy(),cc.exports}var vy=hy();/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var du=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Dv=/^[\\/]{2}/;function by(t,s){return s+t.replace(/\\/g,"/")}var nh="popstate";function rh(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function qy(t={}){function s(r,c){var f;let u=(f=c.state)==null?void 0:f.masked,{pathname:m,search:g,hash:h}=u||r.location;return Nc("",{pathname:m,search:g,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,c){return typeof c=="string"?c:Vi(c)}return xy(s,n,null,t)}function Me(t,s){if(t===!1||t===null||typeof t>"u")throw new Error(s)}function Za(t,s){if(!t){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function yy(){return Math.random().toString(36).substring(2,10)}function lh(t,s){return{usr:t.state,key:t.key,idx:s,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Nc(t,s,n=null,r,c){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof s=="string"?Cs(s):s,state:n,key:s&&s.key||r||yy(),mask:c}}function Vi({pathname:t="/",search:s="",hash:n=""}){return s&&s!=="?"&&(t+=s.charAt(0)==="?"?s:"?"+s),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Cs(t){let s={};if(t){let n=t.indexOf("#");n>=0&&(s.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(s.search=t.substring(r),t=t.substring(0,r)),t&&(s.pathname=t)}return s}function xy(t,s,n,r={}){let{window:c=document.defaultView,v5Compat:u=!1}=r,m=c.history,g="POP",h=null,f=v();f==null&&(f=0,m.replaceState({...m.state,idx:f},""));function v(){return(m.state||{idx:null}).idx}function q(){g="POP";let N=v(),j=N==null?null:N-f;f=N,h&&h({action:g,location:M.location,delta:j})}function x(N,j){g="PUSH";let F=rh(N)?N:Nc(M.location,N,j);f=v()+1;let B=lh(F,f),Q=M.createHref(F.mask||F);try{m.pushState(B,"",Q)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;c.location.assign(Q)}u&&h&&h({action:g,location:M.location,delta:1})}function E(N,j){g="REPLACE";let F=rh(N)?N:Nc(M.location,N,j);f=v();let B=lh(F,f),Q=M.createHref(F.mask||F);m.replaceState(B,"",Q),u&&h&&h({action:g,location:M.location,delta:0})}function D(N){return Cy(c,N)}let M={get action(){return g},get location(){return t(c,m)},listen(N){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(nh,q),h=N,()=>{c.removeEventListener(nh,q),h=null}},createHref(N){return s(c,N)},createURL:D,encodeLocation(N){let j=D(N);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:x,replace:E,go(N){return m.go(N)}};return M}function Cy(t,s,n=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),Me(r,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Vi(s);return c=c.replace(/ $/,"%20"),!n&&Dv.test(c)&&(c=r+c),new URL(c,r)}function Tv(t,s,n="/"){return Sy(t,s,n,!1)}function Sy(t,s,n,r,c){let u=typeof s=="string"?Cs(s):s,m=Do(u.pathname||"/",n);if(m==null)return null;let g=Ey(t),h=null,f=Ny(m);for(let v=0;h==null&&v<g.length;++v)h=Oy(g[v],f,r);return h}function Ey(t){let s=Rv(t);return Ay(s),s}function Rv(t,s=[],n=[],r="",c=!1){let u=(m,g,h=c,f)=>{let v={relativePath:f===void 0?m.path||"":f,caseSensitive:m.caseSensitive===!0,childrenIndex:g,route:m};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&h)return;Me(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let q=Ya([r,v.relativePath]),x=n.concat(v);m.children&&m.children.length>0&&(Me(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${q}".`),Rv(m.children,s,x,q,h)),!(m.path==null&&!m.index)&&s.push({path:q,score:jy(q,m.index),routesMeta:x.map((E,D)=>{let[M,N]=Mv(E.relativePath,E.caseSensitive,D===x.length-1);return{...E,matcher:M,compiledParams:N}})})};return t.forEach((m,g)=>{var h;if(m.path===""||!((h=m.path)!=null&&h.includes("?")))u(m,g);else for(let f of Vv(m.path))u(m,g,!0,f)}),s}function Vv(t){let s=t.split("/");if(s.length===0)return[];let[n,...r]=s,c=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return c?[u,""]:[u];let m=Vv(r.join("/")),g=[];return g.push(...m.map(h=>h===""?u:[u,h].join("/"))),c&&g.push(...m),g.map(h=>t.startsWith("/")&&h===""?"/":h)}function Ay(t){t.sort((s,n)=>s.score!==n.score?n.score-s.score:My(s.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var zy=/^:[\w-]+$/,Py=3,Dy=2,Ty=1,Ry=10,Vy=-2,dh=t=>t==="*";function jy(t,s){let n=t.split("/"),r=n.length;return n.some(dh)&&(r+=Vy),s&&(r+=Dy),n.filter(c=>!dh(c)).reduce((c,u)=>c+(zy.test(u)?Py:u===""?Ty:Ry),r)}function My(t,s){return t.length===s.length&&t.slice(0,-1).every((r,c)=>r===s[c])?t[t.length-1]-s[s.length-1]:0}function Oy(t,s,n=!1){let{routesMeta:r}=t,c={},u="/",m=[];for(let g=0;g<r.length;++g){let h=r[g],f=g===r.length-1,v=u==="/"?s:s.slice(u.length)||"/",q={path:h.relativePath,caseSensitive:h.caseSensitive,end:f},x=h.matcher&&h.compiledParams?jv(q,v,h.matcher,h.compiledParams):Pr(q,v),E=h.route;if(!x&&f&&n&&!r[r.length-1].route.index&&(x=Pr({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!x)return null;Object.assign(c,x.params),m.push({params:c,pathname:Ya([u,x.pathname]),pathnameBase:Ly(Ya([u,x.pathnameBase])),route:E}),x.pathnameBase!=="/"&&(u=Ya([u,x.pathnameBase]))}return m}function Pr(t,s){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Mv(t.path,t.caseSensitive,t.end);return jv(t,s,n,r)}function jv(t,s,n,r){let c=s.match(n);if(!c)return null;let u=c[0],m=u.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:r.reduce((f,{paramName:v,isOptional:q},x)=>{if(v==="*"){let D=g[x]||"";m=u.slice(0,u.length-D.length).replace(/(.)\/+$/,"$1")}const E=g[x];return q&&!E?f[v]=void 0:f[v]=(E||"").replace(/%2F/g,"/"),f},{}),pathname:u,pathnameBase:m,pattern:t}}function Mv(t,s=!1,n=!0){Za(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,g,h,f,v)=>{if(r.push({paramName:g,isOptional:h!=null}),h){let q=v.charAt(f+m.length);return q&&q!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,s?void 0:"i"),r]}function Ny(t){try{return t.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Za(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),t}}function Do(t,s){if(s==="/")return t;if(!t.toLowerCase().startsWith(s.toLowerCase()))return null;let n=s.endsWith("/")?s.length-1:s.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wy(t,s="/"){let{pathname:n,search:r="",hash:c=""}=typeof t=="string"?Cs(t):t,u;return n?(n=Nv(n),n.startsWith("/")?u=ch(n.substring(1),"/"):u=ch(n,s)):u=s,{pathname:u,search:By(r),hash:Xy(c)}}function ch(t,s){let n=Dr(s).split("/");return t.split("/").forEach(c=>{c===".."?n.length>1&&n.pop():c!=="."&&n.push(c)}),n.length>1?n.join("/"):"/"}function gc(t,s,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${s}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uy(t){return t.filter((s,n)=>n===0||s.route.path&&s.route.path.length>0)}function Ov(t){let s=Uy(t);return s.map((n,r)=>r===s.length-1?n.pathname:n.pathnameBase)}function cu(t,s,n,r=!1){let c;typeof t=="string"?c=Cs(t):(c={...t},Me(!c.pathname||!c.pathname.includes("?"),gc("?","pathname","search",c)),Me(!c.pathname||!c.pathname.includes("#"),gc("#","pathname","hash",c)),Me(!c.search||!c.search.includes("#"),gc("#","search","hash",c)));let u=t===""||c.pathname==="",m=u?"/":c.pathname,g;if(m==null)g=n;else{let q=s.length-1;if(!r&&m.startsWith("..")){let x=m.split("/");for(;x[0]==="..";)x.shift(),q-=1;c.pathname=x.join("/")}g=q>=0?s[q]:"/"}let h=wy(c,g),f=m&&m!=="/"&&m.endsWith("/"),v=(u||m===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(f||v)&&(h.pathname+="/"),h}var Nv=t=>t.replace(/[\\/]{2,}/g,"/"),Ya=t=>Nv(t.join("/")),Dr=t=>t.replace(/\/+$/,""),Ly=t=>Dr(t).replace(/^\/*/,"/"),By=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Xy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,ky=class{constructor(t,s,n,r=!1){this.status=t,this.statusText=s||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Fy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function _y(t){let s=t.map(n=>n.route.path).filter(Boolean);return Ya(s)||"/"}var wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Uv(t,s){let n=t;if(typeof n!="string"||!du.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,c=!1;if(wv)try{let u=new URL(window.location.href),m=Dv.test(n)?new URL(by(n,u.protocol)):new URL(n),g=Do(m.pathname,s);m.origin===u.origin&&g!=null?n=g+m.search+m.hash:c=!0}catch{Za(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Lv=["POST","PUT","PATCH","DELETE"];new Set(Lv);var Iy=["GET",...Lv];new Set(Iy);var Gy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Qy(t){try{return Gy.includes(new URL(t).protocol)}catch{return!1}}var Ss=z.createContext(null);Ss.displayName="DataRouter";var Lr=z.createContext(null);Lr.displayName="DataRouterState";var Bv=z.createContext(!1);function Hy(){return z.useContext(Bv)}var Xv=z.createContext({isTransitioning:!1});Xv.displayName="ViewTransition";var Yy=z.createContext(new Map);Yy.displayName="Fetchers";var Ky=z.createContext(null);Ky.displayName="Await";var Fa=z.createContext(null);Fa.displayName="Navigation";var Ui=z.createContext(null);Ui.displayName="Location";var Ja=z.createContext({outlet:null,matches:[],isDataRoute:!1});Ja.displayName="Route";var uu=z.createContext(null);uu.displayName="RouteError";var kv="REACT_ROUTER_ERROR",$y="REDIRECT",Zy="ROUTE_ERROR_RESPONSE";function Jy(t){if(t.startsWith(`${kv}:${$y}:{`))try{let s=JSON.parse(t.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function Wy(t){if(t.startsWith(`${kv}:${Zy}:{`))try{let s=JSON.parse(t.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new ky(s.status,s.statusText,s.data)}catch{}}function ex(t,{relative:s}={}){Me(Li(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=z.useContext(Fa),{hash:c,pathname:u,search:m}=Bi(t,{relative:s}),g=u;return n!=="/"&&(g=u==="/"?n:Ya([n,u])),r.createHref({pathname:g,search:m,hash:c})}function Li(){return z.useContext(Ui)!=null}function Wa(){return Me(Li(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Ui).location}var Fv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _v(t){z.useContext(Fa).static||z.useLayoutEffect(t)}function mu(){let{isDataRoute:t}=z.useContext(Ja);return t?hx():ax()}function ax(){Me(Li(),"useNavigate() may be used only in the context of a <Router> component.");let t=z.useContext(Ss),{basename:s,navigator:n}=z.useContext(Fa),{matches:r}=z.useContext(Ja),{pathname:c}=Wa(),u=JSON.stringify(Ov(r)),m=z.useRef(!1);return _v(()=>{m.current=!0}),z.useCallback((h,f={})=>{if(Za(m.current,Fv),!m.current)return;if(typeof h=="number"){n.go(h);return}let v=cu(h,JSON.parse(u),c,f.relative==="path");t==null&&s!=="/"&&(v.pathname=v.pathname==="/"?s:Ya([s,v.pathname])),(f.replace?n.replace:n.push)(v,f.state,f)},[s,n,u,c,t])}var ox=z.createContext(null);function tx(t){let s=z.useContext(Ja).outlet;return z.useMemo(()=>s&&z.createElement(ox.Provider,{value:t},s),[s,t])}function sx(){let{matches:t}=z.useContext(Ja),s=t[t.length-1];return(s==null?void 0:s.params)??{}}function Bi(t,{relative:s}={}){let{matches:n}=z.useContext(Ja),{pathname:r}=Wa(),c=JSON.stringify(Ov(n));return z.useMemo(()=>cu(t,JSON.parse(c),r,s==="path"),[t,c,r,s])}function ix(t,s){return Iv(t,s)}function Iv(t,s,n){var N;Me(Li(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=z.useContext(Fa),{matches:c}=z.useContext(Ja),u=c[c.length-1],m=u?u.params:{},g=u?u.pathname:"/",h=u?u.pathnameBase:"/",f=u&&u.route;{let j=f&&f.path||"";Qv(g,!f||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let v=Wa(),q;if(s){let j=typeof s=="string"?Cs(s):s;Me(h==="/"||((N=j.pathname)==null?void 0:N.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${j.pathname}" was given in the \`location\` prop.`),q=j}else q=v;let x=q.pathname||"/",E=x;if(h!=="/"){let j=h.replace(/^\//,"").split("/");E="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let D=n&&n.state.matches.length?n.state.matches.map(j=>Object.assign(j,{route:n.manifest[j.route.id]||j.route})):Tv(t,{pathname:E});Za(f||D!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),Za(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=cx(D&&D.map(j=>Object.assign({},j,{params:Object.assign({},m,j.params),pathname:Ya([h,r.encodeLocation?r.encodeLocation(j.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?h:Ya([h,r.encodeLocation?r.encodeLocation(j.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),c,n);return s&&M?z.createElement(Ui.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...q},navigationType:"POP"}},M):M}function nx(){let t=fx(),s=Fy(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},m=null;return console.error("Error handled by React Router default ErrorBoundary:",t),m=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:u},"ErrorBoundary")," or"," ",z.createElement("code",{style:u},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},s),n?z.createElement("pre",{style:c},n):null,m)}var rx=z.createElement(nx,null),Gv=class extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,s){return s.location!==t.location||s.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:s.error,location:s.location,revalidation:t.revalidation||s.revalidation}}componentDidCatch(t,s){this.props.onError?this.props.onError(t,s):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=Wy(t.digest);n&&(t=n)}let s=t!==void 0?z.createElement(Ja.Provider,{value:this.props.routeContext},z.createElement(uu.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?z.createElement(lx,{error:t},s):s}};Gv.contextType=Bv;var fc=new WeakMap;function lx({children:t,error:s}){let{basename:n}=z.useContext(Fa);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let r=Jy(s.digest);if(r){let c=fc.get(s);if(c)throw c;let u=Uv(r.location,n),m=u.absoluteURL||u.to;if(Qy(m))throw new Error("Invalid redirect location");if(wv&&!fc.get(s))if(u.isExternal||r.reloadDocument)window.location.href=m;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw fc.set(s,g),g}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m}`})}}return t}function dx({routeContext:t,match:s,children:n}){let r=z.useContext(Ss);return r&&r.static&&r.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=s.route.id),z.createElement(Ja.Provider,{value:t},n)}function cx(t,s=[],n){let r=n==null?void 0:n.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(s.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let c=t,u=r==null?void 0:r.errors;if(u!=null){let v=c.findIndex(q=>q.route.id&&(u==null?void 0:u[q.route.id])!==void 0);Me(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let m=!1,g=-1;if(n&&r){m=r.renderFallback;for(let v=0;v<c.length;v++){let q=c[v];if((q.route.HydrateFallback||q.route.hydrateFallbackElement)&&(g=v),q.route.id){let{loaderData:x,errors:E}=r,D=q.route.loader&&!x.hasOwnProperty(q.route.id)&&(!E||E[q.route.id]===void 0);if(q.route.lazy||D){n.isStatic&&(m=!0),g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}}let h=n==null?void 0:n.onError,f=r&&h?(v,q)=>{var x,E;h(v,{location:r.location,params:((E=(x=r.matches)==null?void 0:x[0])==null?void 0:E.params)??{},pattern:_y(r.matches),errorInfo:q})}:void 0;return c.reduceRight((v,q,x)=>{let E,D=!1,M=null,N=null;r&&(E=u&&q.route.id?u[q.route.id]:void 0,M=q.route.errorElement||rx,m&&(g<0&&x===0?(Qv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,N=null):g===x&&(D=!0,N=q.route.hydrateFallbackElement||null)));let j=s.concat(c.slice(0,x+1)),F=()=>{let B;return E?B=M:D?B=N:q.route.Component?B=z.createElement(q.route.Component,null):q.route.element?B=q.route.element:B=v,z.createElement(dx,{match:q,routeContext:{outlet:v,matches:j,isDataRoute:r!=null},children:B})};return r&&(q.route.ErrorBoundary||q.route.errorElement||x===0)?z.createElement(Gv,{location:r.location,revalidation:r.revalidation,component:M,error:E,children:F(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:f}):F()},null)}function pu(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ux(t){let s=z.useContext(Ss);return Me(s,pu(t)),s}function mx(t){let s=z.useContext(Lr);return Me(s,pu(t)),s}function px(t){let s=z.useContext(Ja);return Me(s,pu(t)),s}function gu(t){let s=px(t),n=s.matches[s.matches.length-1];return Me(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function gx(){return gu("useRouteId")}function fx(){var r;let t=z.useContext(uu),s=mx("useRouteError"),n=gu("useRouteError");return t!==void 0?t:(r=s.errors)==null?void 0:r[n]}function hx(){let{router:t}=ux("useNavigate"),s=gu("useNavigate"),n=z.useRef(!1);return _v(()=>{n.current=!0}),z.useCallback(async(c,u={})=>{Za(n.current,Fv),n.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:s,...u}))},[t,s])}var uh={};function Qv(t,s,n){!s&&!uh[t]&&(uh[t]=!0,Za(!1,n))}z.memo(vx);function vx({routes:t,manifest:s,future:n,state:r,isStatic:c,onError:u}){return Iv(t,void 0,{manifest:s,state:r,isStatic:c,onError:u})}function bx(t){return tx(t.context)}function Ei(t){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qx({basename:t="/",children:s=null,location:n,navigationType:r="POP",navigator:c,static:u=!1,useTransitions:m}){Me(!Li(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=t.replace(/^\/*/,"/"),h=z.useMemo(()=>({basename:g,navigator:c,static:u,useTransitions:m,future:{}}),[g,c,u,m]);typeof n=="string"&&(n=Cs(n));let{pathname:f="/",search:v="",hash:q="",state:x=null,key:E="default",mask:D}=n,M=z.useMemo(()=>{let N=Do(f,g);return N==null?null:{location:{pathname:N,search:v,hash:q,state:x,key:E,mask:D},navigationType:r}},[g,f,v,q,x,E,r,D]);return Za(M!=null,`<Router basename="${g}"> is not able to match the URL "${f}${v}${q}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:z.createElement(Fa.Provider,{value:h},z.createElement(Ui.Provider,{children:s,value:M}))}function yx({children:t,location:s}){return ix(wc(t),s)}function wc(t,s=[]){let n=[];return z.Children.forEach(t,(r,c)=>{if(!z.isValidElement(r))return;let u=[...s,c];if(r.type===z.Fragment){n.push.apply(n,wc(r.props.children,u));return}Me(r.type===Ei,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!r.props.index||!r.props.children,"An index route cannot have child routes.");let m={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(m.children=wc(r.props.children,u)),n.push(m)}),n}var vr="get",br="application/x-www-form-urlencoded";function Br(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function xx(t){return Br(t)&&t.tagName.toLowerCase()==="button"}function Cx(t){return Br(t)&&t.tagName.toLowerCase()==="form"}function Sx(t){return Br(t)&&t.tagName.toLowerCase()==="input"}function Ex(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ax(t,s){return t.button===0&&(!s||s==="_self")&&!Ex(t)}function Uc(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((s,n)=>{let r=t[n];return s.concat(Array.isArray(r)?r.map(c=>[n,c]):[[n,r]])},[]))}function zx(t,s){let n=Uc(t);return s&&s.forEach((r,c)=>{n.has(c)||s.getAll(c).forEach(u=>{n.append(c,u)})}),n}var dr=null;function Px(){if(dr===null)try{new FormData(document.createElement("form"),0),dr=!1}catch{dr=!0}return dr}var Dx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hc(t){return t!=null&&!Dx.has(t)?(Za(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${br}"`),null):t}function Tx(t,s){let n,r,c,u,m;if(Cx(t)){let g=t.getAttribute("action");r=g?Do(g,s):null,n=t.getAttribute("method")||vr,c=hc(t.getAttribute("enctype"))||br,u=new FormData(t)}else if(xx(t)||Sx(t)&&(t.type==="submit"||t.type==="image")){let g=t.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||g.getAttribute("action");if(r=h?Do(h,s):null,n=t.getAttribute("formmethod")||g.getAttribute("method")||vr,c=hc(t.getAttribute("formenctype"))||hc(g.getAttribute("enctype"))||br,u=new FormData(g,t),!Px()){let{name:f,type:v,value:q}=t;if(v==="image"){let x=f?`${f}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else f&&u.append(f,q)}}else{if(Br(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vr,r=null,c=br,m=t}return u&&c==="text/plain"&&(m=u,u=void 0),{action:r,method:n.toLowerCase(),encType:c,formData:u,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fu(t,s){if(t===!1||t===null||typeof t>"u")throw new Error(s)}function Hv(t,s,n,r){let c=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${r}`:c.pathname=`${c.pathname}.${r}`:c.pathname==="/"?c.pathname=`_root.${r}`:s&&Do(c.pathname,s)==="/"?c.pathname=`${Dr(s)}/_root.${r}`:c.pathname=`${Dr(c.pathname)}.${r}`,c}async function Rx(t,s){if(t.id in s)return s[t.id];try{let n=await import(t.module);return s[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vx(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function jx(t,s,n){let r=await Promise.all(t.map(async c=>{let u=s.routes[c.route.id];if(u){let m=await Rx(u,n);return m.links?m.links():[]}return[]}));return wx(r.flat(1).filter(Vx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function mh(t,s,n,r,c,u){let m=(h,f)=>n[f]?h.route.id!==n[f].route.id:!0,g=(h,f)=>{var v;return n[f].pathname!==h.pathname||((v=n[f].route.path)==null?void 0:v.endsWith("*"))&&n[f].params["*"]!==h.params["*"]};return u==="assets"?s.filter((h,f)=>m(h,f)||g(h,f)):u==="data"?s.filter((h,f)=>{var q;let v=r.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(m(h,f)||g(h,f))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((q=n[0])==null?void 0:q.params)||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Mx(t,s,{includeHydrateFallback:n}={}){return Ox(t.map(r=>{let c=s.routes[r.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),n&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function Ox(t){return[...new Set(t)]}function Nx(t){let s={},n=Object.keys(t).sort();for(let r of n)s[r]=t[r];return s}function wx(t,s){let n=new Set;return new Set(s),t.reduce((r,c)=>{let u=JSON.stringify(Nx(c));return n.has(u)||(n.add(u),r.push({key:u,link:c})),r},[])}function hu(){let t=z.useContext(Ss);return fu(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ux(){let t=z.useContext(Lr);return fu(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var vu=z.createContext(void 0);vu.displayName="FrameworkContext";function Xr(){let t=z.useContext(vu);return fu(t,"You must render this element inside a <HydratedRouter> element"),t}function Lx(t,s){let n=z.useContext(vu),[r,c]=z.useState(!1),[u,m]=z.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:f,onMouseLeave:v,onTouchStart:q}=s,x=z.useRef(null);z.useEffect(()=>{if(t==="render"&&m(!0),t==="viewport"){let M=j=>{j.forEach(F=>{m(F.isIntersecting)})},N=new IntersectionObserver(M,{threshold:.5});return x.current&&N.observe(x.current),()=>{N.disconnect()}}},[t]),z.useEffect(()=>{if(r){let M=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(M)}}},[r]);let E=()=>{c(!0)},D=()=>{c(!1),m(!1)};return n?t!=="intent"?[u,x,{}]:[u,x,{onFocus:Ci(g,E),onBlur:Ci(h,D),onMouseEnter:Ci(f,E),onMouseLeave:Ci(v,D),onTouchStart:Ci(q,E)}]:[!1,x,{}]}function Ci(t,s){return n=>{t&&t(n),n.defaultPrevented||s(n)}}function Bx({page:t,...s}){let n=Hy(),{nonce:r}=Xr(),{router:c}=hu(),u=z.useMemo(()=>Tv(c.routes,t,c.basename),[c.routes,t,c.basename]);return u?(s.nonce==null&&r&&(s={...s,nonce:r}),n?z.createElement(kx,{page:t,matches:u,...s}):z.createElement(Fx,{page:t,matches:u,...s})):null}function Xx(t){let{manifest:s,routeModules:n}=Xr(),[r,c]=z.useState([]);return z.useEffect(()=>{let u=!1;return jx(t,s,n).then(m=>{u||c(m)}),()=>{u=!0}},[t,s,n]),r}function kx({page:t,matches:s,...n}){let r=Wa(),{future:c}=Xr(),{basename:u}=hu(),m=z.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let g=Hv(t,u,c.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,f=[];for(let v of s)typeof v.route.shouldRevalidate=="function"?h=!0:f.push(v.route.id);return h&&f.length>0&&g.searchParams.set("_routes",f.join(",")),[g.pathname+g.search]},[u,c.v8_trailingSlashAwareDataRequests,t,r,s]);return z.createElement(z.Fragment,null,m.map(g=>z.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})))}function Fx({page:t,matches:s,...n}){let r=Wa(),{future:c,manifest:u,routeModules:m}=Xr(),{basename:g}=hu(),{loaderData:h,matches:f}=Ux(),v=z.useMemo(()=>mh(t,s,f,u,r,"data"),[t,s,f,u,r]),q=z.useMemo(()=>mh(t,s,f,u,r,"assets"),[t,s,f,u,r]),x=z.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let M=new Set,N=!1;if(s.forEach(F=>{var Q;let B=u.routes[F.route.id];!B||!B.hasLoader||(!v.some(I=>I.route.id===F.route.id)&&F.route.id in h&&((Q=m[F.route.id])!=null&&Q.shouldRevalidate)||B.hasClientLoader?N=!0:M.add(F.route.id))}),M.size===0)return[];let j=Hv(t,g,c.v8_trailingSlashAwareDataRequests,"data");return N&&M.size>0&&j.searchParams.set("_routes",s.filter(F=>M.has(F.route.id)).map(F=>F.route.id).join(",")),[j.pathname+j.search]},[g,c.v8_trailingSlashAwareDataRequests,h,r,u,v,s,t,m]),E=z.useMemo(()=>Mx(q,u),[q,u]),D=Xx(q);return z.createElement(z.Fragment,null,x.map(M=>z.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),E.map(M=>z.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),D.map(({key:M,link:N})=>z.createElement("link",{key:M,nonce:n.nonce,...N,crossOrigin:N.crossOrigin??n.crossOrigin})))}function _x(...t){return s=>{t.forEach(n=>{typeof n=="function"?n(s):n!=null&&(n.current=s)})}}var Ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ix&&(window.__reactRouterVersion="7.18.1")}catch{}function Gx({basename:t,children:s,useTransitions:n,window:r}){let c=z.useRef();c.current==null&&(c.current=qy({window:r,v5Compat:!0}));let u=c.current,[m,g]=z.useState({action:u.action,location:u.location}),h=z.useCallback(f=>{n===!1?g(f):z.startTransition(()=>g(f))},[n]);return z.useLayoutEffect(()=>u.listen(h),[u,h]),z.createElement(qx,{basename:t,children:s,location:m.location,navigationType:m.action,navigator:u,useTransitions:n})}var Ba=z.forwardRef(function({onClick:s,discover:n="render",prefetch:r="none",relative:c,reloadDocument:u,replace:m,mask:g,state:h,target:f,to:v,preventScrollReset:q,viewTransition:x,defaultShouldRevalidate:E,...D},M){let{basename:N,navigator:j,useTransitions:F}=z.useContext(Fa),B=typeof v=="string"&&du.test(v),Q=Uv(v,N);v=Q.to;let I=ex(v,{relative:c}),ae=Wa(),Y=null;if(g){let Ve=cu(g,[],ae.mask?ae.mask.pathname:"/",!0);N!=="/"&&(Ve.pathname=Ve.pathname==="/"?N:Ya([N,Ve.pathname])),Y=j.createHref(Ve)}let[W,ve,Re]=Lx(r,D),Ge=Kx(v,{replace:m,mask:g,state:h,target:f,preventScrollReset:q,relative:c,viewTransition:x,defaultShouldRevalidate:E,useTransitions:F});function Qe(Ve){s&&s(Ve),Ve.defaultPrevented||Ge(Ve)}let Da=!(Q.isExternal||u),na=z.createElement("a",{...D,...Re,href:(Da?Y:void 0)||Q.absoluteURL||I,onClick:Da?Qe:s,ref:_x(M,ve),target:f,"data-discover":!B&&n==="render"?"true":void 0});return W&&!B?z.createElement(z.Fragment,null,na,z.createElement(Bx,{page:I})):na});Ba.displayName="Link";var Qx=z.forwardRef(function({"aria-current":s="page",caseSensitive:n=!1,className:r="",end:c=!1,style:u,to:m,viewTransition:g,children:h,...f},v){let q=Bi(m,{relative:f.relative}),x=Wa(),E=z.useContext(Lr),{navigator:D,basename:M}=z.useContext(Fa),N=E!=null&&aC(q)&&g===!0,j=D.encodeLocation?D.encodeLocation(q).pathname:q.pathname,F=x.pathname,B=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;n||(F=F.toLowerCase(),B=B?B.toLowerCase():null,j=j.toLowerCase()),B&&M&&(B=Do(B,M)||B);const Q=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let I=F===j||!c&&F.startsWith(j)&&F.charAt(Q)==="/",ae=B!=null&&(B===j||!c&&B.startsWith(j)&&B.charAt(j.length)==="/"),Y={isActive:I,isPending:ae,isTransitioning:N},W=I?s:void 0,ve;typeof r=="function"?ve=r(Y):ve=[r,I?"active":null,ae?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let Re=typeof u=="function"?u(Y):u;return z.createElement(Ba,{...f,"aria-current":W,className:ve,ref:v,style:Re,to:m,viewTransition:g},typeof h=="function"?h(Y):h)});Qx.displayName="NavLink";var Hx=z.forwardRef(({discover:t="render",fetcherKey:s,navigate:n,reloadDocument:r,replace:c,state:u,method:m=vr,action:g,onSubmit:h,relative:f,preventScrollReset:v,viewTransition:q,defaultShouldRevalidate:x,...E},D)=>{let{useTransitions:M}=z.useContext(Fa),N=Wx(),j=eC(g,{relative:f}),F=m.toLowerCase()==="get"?"get":"post",B=typeof g=="string"&&du.test(g),Q=I=>{if(h&&h(I),I.defaultPrevented)return;I.preventDefault();let ae=I.nativeEvent.submitter,Y=(ae==null?void 0:ae.getAttribute("formmethod"))||m,W=()=>N(ae||I.currentTarget,{fetcherKey:s,method:Y,navigate:n,replace:c,state:u,relative:f,preventScrollReset:v,viewTransition:q,defaultShouldRevalidate:x});M&&n!==!1?z.startTransition(()=>W()):W()};return z.createElement("form",{ref:D,method:F,action:j,onSubmit:r?h:Q,...E,"data-discover":!B&&t==="render"?"true":void 0})});Hx.displayName="Form";function Yx(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yv(t){let s=z.useContext(Ss);return Me(s,Yx(t)),s}function Kx(t,{target:s,replace:n,mask:r,state:c,preventScrollReset:u,relative:m,viewTransition:g,defaultShouldRevalidate:h,useTransitions:f}={}){let v=mu(),q=Wa(),x=Bi(t,{relative:m});return z.useCallback(E=>{if(Ax(E,s)){E.preventDefault();let D=n!==void 0?n:Vi(q)===Vi(x),M=()=>v(t,{replace:D,mask:r,state:c,preventScrollReset:u,relative:m,viewTransition:g,defaultShouldRevalidate:h});f?z.startTransition(()=>M()):M()}},[q,v,x,n,r,c,s,t,u,m,g,h,f])}function $x(t){Za(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=z.useRef(Uc(t)),n=z.useRef(!1),r=Wa(),c=z.useMemo(()=>zx(r.search,n.current?null:s.current),[r.search]),u=mu(),m=z.useCallback((g,h)=>{const f=Uc(typeof g=="function"?g(new URLSearchParams(c)):g);n.current=!0,u("?"+f,h)},[u,c]);return[c,m]}var Zx=0,Jx=()=>`__${String(++Zx)}__`;function Wx(){let{router:t}=Yv("useSubmit"),{basename:s}=z.useContext(Fa),n=gx(),r=t.fetch,c=t.navigate;return z.useCallback(async(u,m={})=>{let{action:g,method:h,encType:f,formData:v,body:q}=Tx(u,s);if(m.navigate===!1){let x=m.fetcherKey||Jx();await r(x,n,m.action||g,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:v,body:q,formMethod:m.method||h,formEncType:m.encType||f,flushSync:m.flushSync})}else await c(m.action||g,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:v,body:q,formMethod:m.method||h,formEncType:m.encType||f,replace:m.replace,state:m.state,fromRouteId:n,flushSync:m.flushSync,viewTransition:m.viewTransition})},[r,c,s,n])}function eC(t,{relative:s}={}){let{basename:n}=z.useContext(Fa),r=z.useContext(Ja);Me(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),u={...Bi(t||".",{relative:s})},m=Wa();if(t==null){u.search=m.search;let g=new URLSearchParams(u.search),h=g.getAll("index");if(h.some(v=>v==="")){g.delete("index"),h.filter(q=>q).forEach(q=>g.append("index",q));let v=g.toString();u.search=v?`?${v}`:""}}return(!t||t===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Ya([n,u.pathname])),Vi(u)}function aC(t,{relative:s}={}){let n=z.useContext(Xv);Me(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Yv("useViewTransitionState"),c=Bi(t,{relative:s});if(!n.isTransitioning)return!1;let u=Do(n.currentLocation.pathname,r)||n.currentLocation.pathname,m=Do(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Pr(c.pathname,m)!=null||Pr(c.pathname,u)!=null}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,n,r)=>r?r.toUpperCase():n.toLowerCase()),ph=t=>{const s=tC(t);return s.charAt(0).toUpperCase()+s.slice(1)},Kv=(...t)=>t.filter((s,n,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===n).join(" ").trim(),sC=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=z.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:c="",children:u,iconNode:m,...g},h)=>z.createElement("svg",{ref:h,...iC,width:s,height:s,stroke:t,strokeWidth:r?Number(n)*24/Number(s):n,className:Kv("lucide",c),...!u&&!sC(g)&&{"aria-hidden":"true"},...g},[...m.map(([f,v])=>z.createElement(f,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=(t,s)=>{const n=z.forwardRef(({className:r,...c},u)=>z.createElement(nC,{ref:u,iconNode:s,className:Kv(`lucide-${oC(ph(t))}`,`lucide-${t}`,r),...c}));return n.displayName=ph(t),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qr=ia("arrow-right",rC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],dC=ia("bike",lC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],uC=ia("calendar",cC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],pC=ia("chart-column",mC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],fC=ia("chevron-left",gC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Tr=ia("chevron-right",hC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Po=ia("circle-check",vC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$v=ia("clock",bC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],yC=ia("dollar-sign",qC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],CC=ia("layers",xC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],EC=ia("package",SC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zC=ia("search",AC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],DC=ia("shield-check",PC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],RC=ia("shopping-cart",TC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],jC=ia("tag",VC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],OC=ia("zap",MC),Zv=z.createContext({});function NC(t){const s=z.useRef(null);return s.current===null&&(s.current=t()),s.current}const Jv=typeof window<"u",wC=Jv?z.useLayoutEffect:z.useEffect,bu=z.createContext(null);function qu(t,s){t.indexOf(s)===-1&&t.push(s)}function Rr(t,s){const n=t.indexOf(s);n>-1&&t.splice(n,1)}const no=(t,s,n)=>n>s?s:n<t?t:n;let yu=()=>{};const To={},Wv=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function e0(t){return typeof t=="object"&&t!==null}const a0=t=>/^0[^.\s]+$/u.test(t);function o0(t){let s;return()=>(s===void 0&&(s=t()),s)}const ka=t=>t,UC=(t,s)=>n=>s(t(n)),Xi=(...t)=>t.reduce(UC),ji=(t,s,n)=>{const r=s-t;return r===0?1:(n-t)/r};class xu{constructor(){this.subscriptions=[]}add(s){return qu(this.subscriptions,s),()=>Rr(this.subscriptions,s)}notify(s,n,r){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](s,n,r);else for(let u=0;u<c;u++){const m=this.subscriptions[u];m&&m(s,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ka=t=>t*1e3,Xa=t=>t/1e3;function t0(t,s){return s?t*(1e3/s):0}const s0=(t,s,n)=>(((1-3*n+3*s)*t+(3*n-6*s))*t+3*s)*t,LC=1e-7,BC=12;function XC(t,s,n,r,c){let u,m,g=0;do m=s+(n-s)/2,u=s0(m,r,c)-t,u>0?n=m:s=m;while(Math.abs(u)>LC&&++g<BC);return m}function ki(t,s,n,r){if(t===s&&n===r)return ka;const c=u=>XC(u,0,1,t,n);return u=>u===0||u===1?u:s0(c(u),s,r)}const i0=t=>s=>s<=.5?t(2*s)/2:(2-t(2*(1-s)))/2,n0=t=>s=>1-t(1-s),r0=ki(.33,1.53,.69,.99),Cu=n0(r0),l0=i0(Cu),d0=t=>(t*=2)<1?.5*Cu(t):.5*(2-Math.pow(2,-10*(t-1))),Su=t=>1-Math.sin(Math.acos(t)),c0=n0(Su),u0=i0(Su),kC=ki(.42,0,1,1),FC=ki(0,0,.58,1),m0=ki(.42,0,.58,1),_C=t=>Array.isArray(t)&&typeof t[0]!="number",p0=t=>Array.isArray(t)&&typeof t[0]=="number",IC={linear:ka,easeIn:kC,easeInOut:m0,easeOut:FC,circIn:Su,circInOut:u0,circOut:c0,backIn:Cu,backInOut:l0,backOut:r0,anticipate:d0},GC=t=>typeof t=="string",gh=t=>{if(p0(t)){yu(t.length===4);const[s,n,r,c]=t;return ki(s,n,r,c)}else if(GC(t))return IC[t];return t},cr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function QC(t,s){let n=new Set,r=new Set,c=!1,u=!1;const m=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function h(v){m.has(v)&&(f.schedule(v),t()),v(g)}const f={schedule:(v,q=!1,x=!1)=>{const D=x&&c?n:r;return q&&m.add(v),D.has(v)||D.add(v),v},cancel:v=>{r.delete(v),m.delete(v)},process:v=>{if(g=v,c){u=!0;return}c=!0,[n,r]=[r,n],n.forEach(h),n.clear(),c=!1,u&&(u=!1,f.process(v))}};return f}const HC=40;function g0(t,s){let n=!1,r=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>n=!0,m=cr.reduce((B,Q)=>(B[Q]=QC(u),B),{}),{setup:g,read:h,resolveKeyframes:f,preUpdate:v,update:q,preRender:x,render:E,postRender:D}=m,M=()=>{const B=To.useManualTiming?c.timestamp:performance.now();n=!1,To.useManualTiming||(c.delta=r?1e3/60:Math.max(Math.min(B-c.timestamp,HC),1)),c.timestamp=B,c.isProcessing=!0,g.process(c),h.process(c),f.process(c),v.process(c),q.process(c),x.process(c),E.process(c),D.process(c),c.isProcessing=!1,n&&s&&(r=!1,t(M))},N=()=>{n=!0,r=!0,c.isProcessing||t(M)};return{schedule:cr.reduce((B,Q)=>{const I=m[Q];return B[Q]=(ae,Y=!1,W=!1)=>(n||N(),I.schedule(ae,Y,W)),B},{}),cancel:B=>{for(let Q=0;Q<cr.length;Q++)m[cr[Q]].cancel(B)},state:c,steps:m}}const{schedule:ze,cancel:st,state:oa,steps:vc}=g0(typeof requestAnimationFrame<"u"?requestAnimationFrame:ka,!0);let yr;function YC(){yr=void 0}const da={now:()=>(yr===void 0&&da.set(oa.isProcessing||To.useManualTiming?oa.timestamp:performance.now()),yr),set:t=>{yr=t,queueMicrotask(YC)}},f0=t=>s=>typeof s=="string"&&s.startsWith(t),h0=f0("--"),KC=f0("var(--"),Eu=t=>KC(t)?$C.test(t.split("/*")[0].trim()):!1,$C=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function fh(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Es={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Mi={...Es,transform:t=>no(0,1,t)},ur={...Es,default:1},zi=t=>Math.round(t*1e5)/1e5,Au=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZC(t){return t==null}const JC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,zu=(t,s)=>n=>!!(typeof n=="string"&&JC.test(n)&&n.startsWith(t)||s&&!ZC(n)&&Object.prototype.hasOwnProperty.call(n,s)),v0=(t,s,n)=>r=>{if(typeof r!="string")return r;const[c,u,m,g]=r.match(Au);return{[t]:parseFloat(c),[s]:parseFloat(u),[n]:parseFloat(m),alpha:g!==void 0?parseFloat(g):1}},WC=t=>no(0,255,t),bc={...Es,transform:t=>Math.round(WC(t))},Pt={test:zu("rgb","red"),parse:v0("red","green","blue"),transform:({red:t,green:s,blue:n,alpha:r=1})=>"rgba("+bc.transform(t)+", "+bc.transform(s)+", "+bc.transform(n)+", "+zi(Mi.transform(r))+")"};function e1(t){let s="",n="",r="",c="";return t.length>5?(s=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),c=t.substring(7,9)):(s=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),c=t.substring(4,5),s+=s,n+=n,r+=r,c+=c),{red:parseInt(s,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:c?parseInt(c,16)/255:1}}const Lc={test:zu("#"),parse:e1,transform:Pt.transform},Fi=t=>({test:s=>typeof s=="string"&&s.endsWith(t)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${t}`}),at=Fi("deg"),io=Fi("%"),K=Fi("px"),a1=Fi("vh"),o1=Fi("vw"),hh={...io,parse:t=>io.parse(t)/100,transform:t=>io.transform(t*100)},fs={test:zu("hsl","hue"),parse:v0("hue","saturation","lightness"),transform:({hue:t,saturation:s,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+io.transform(zi(s))+", "+io.transform(zi(n))+", "+zi(Mi.transform(r))+")"},Ie={test:t=>Pt.test(t)||Lc.test(t)||fs.test(t),parse:t=>Pt.test(t)?Pt.parse(t):fs.test(t)?fs.parse(t):Lc.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Pt.transform(t):fs.transform(t),getAnimatableNone:t=>{const s=Ie.parse(t);return s.alpha=0,Ie.transform(s)}},t1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s1(t){var s,n;return isNaN(t)&&typeof t=="string"&&(((s=t.match(Au))==null?void 0:s.length)||0)+(((n=t.match(t1))==null?void 0:n.length)||0)>0}const b0="number",q0="color",i1="var",n1="var(",vh="${}",r1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Oi(t){const s=t.toString(),n=[],r={color:[],number:[],var:[]},c=[];let u=0;const g=s.replace(r1,h=>(Ie.test(h)?(r.color.push(u),c.push(q0),n.push(Ie.parse(h))):h.startsWith(n1)?(r.var.push(u),c.push(i1),n.push(h)):(r.number.push(u),c.push(b0),n.push(parseFloat(h))),++u,vh)).split(vh);return{values:n,split:g,indexes:r,types:c}}function y0(t){return Oi(t).values}function x0(t){const{split:s,types:n}=Oi(t),r=s.length;return c=>{let u="";for(let m=0;m<r;m++)if(u+=s[m],c[m]!==void 0){const g=n[m];g===b0?u+=zi(c[m]):g===q0?u+=Ie.transform(c[m]):u+=c[m]}return u}}const l1=t=>typeof t=="number"?0:Ie.test(t)?Ie.getAnimatableNone(t):t;function d1(t){const s=y0(t);return x0(t)(s.map(l1))}const $a={test:s1,parse:y0,createTransformer:x0,getAnimatableNone:d1};function qc(t,s,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(s-t)*6*n:n<1/2?s:n<2/3?t+(s-t)*(2/3-n)*6:t}function c1({hue:t,saturation:s,lightness:n,alpha:r}){t/=360,s/=100,n/=100;let c=0,u=0,m=0;if(!s)c=u=m=n;else{const g=n<.5?n*(1+s):n+s-n*s,h=2*n-g;c=qc(h,g,t+1/3),u=qc(h,g,t),m=qc(h,g,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(m*255),alpha:r}}function Vr(t,s){return n=>n>0?s:t}const je=(t,s,n)=>t+(s-t)*n,yc=(t,s,n)=>{const r=t*t,c=n*(s*s-r)+r;return c<0?0:Math.sqrt(c)},u1=[Lc,Pt,fs],m1=t=>u1.find(s=>s.test(t));function bh(t){const s=m1(t);if(!s)return!1;let n=s.parse(t);return s===fs&&(n=c1(n)),n}const qh=(t,s)=>{const n=bh(t),r=bh(s);if(!n||!r)return Vr(t,s);const c={...n};return u=>(c.red=yc(n.red,r.red,u),c.green=yc(n.green,r.green,u),c.blue=yc(n.blue,r.blue,u),c.alpha=je(n.alpha,r.alpha,u),Pt.transform(c))},Bc=new Set(["none","hidden"]);function p1(t,s){return Bc.has(t)?n=>n<=0?t:s:n=>n>=1?s:t}function g1(t,s){return n=>je(t,s,n)}function Pu(t){return typeof t=="number"?g1:typeof t=="string"?Eu(t)?Vr:Ie.test(t)?qh:v1:Array.isArray(t)?C0:typeof t=="object"?Ie.test(t)?qh:f1:Vr}function C0(t,s){const n=[...t],r=n.length,c=t.map((u,m)=>Pu(u)(u,s[m]));return u=>{for(let m=0;m<r;m++)n[m]=c[m](u);return n}}function f1(t,s){const n={...t,...s},r={};for(const c in n)t[c]!==void 0&&s[c]!==void 0&&(r[c]=Pu(t[c])(t[c],s[c]));return c=>{for(const u in r)n[u]=r[u](c);return n}}function h1(t,s){const n=[],r={color:0,var:0,number:0};for(let c=0;c<s.values.length;c++){const u=s.types[c],m=t.indexes[u][r[u]],g=t.values[m]??0;n[c]=g,r[u]++}return n}const v1=(t,s)=>{const n=$a.createTransformer(s),r=Oi(t),c=Oi(s);return r.indexes.var.length===c.indexes.var.length&&r.indexes.color.length===c.indexes.color.length&&r.indexes.number.length>=c.indexes.number.length?Bc.has(t)&&!c.values.length||Bc.has(s)&&!r.values.length?p1(t,s):Xi(C0(h1(r,c),c.values),n):Vr(t,s)};function S0(t,s,n){return typeof t=="number"&&typeof s=="number"&&typeof n=="number"?je(t,s,n):Pu(t)(t,s)}const b1=t=>{const s=({timestamp:n})=>t(n);return{start:(n=!0)=>ze.update(s,n),stop:()=>st(s),now:()=>oa.isProcessing?oa.timestamp:da.now()}},E0=(t,s,n=10)=>{let r="";const c=Math.max(Math.round(s/n),2);for(let u=0;u<c;u++)r+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},jr=2e4;function Du(t){let s=0;const n=50;let r=t.next(s);for(;!r.done&&s<jr;)s+=n,r=t.next(s);return s>=jr?1/0:s}function q1(t,s=100,n){const r=n({...t,keyframes:[0,s]}),c=Math.min(Du(r),jr);return{type:"keyframes",ease:u=>r.next(c*u).value/s,duration:Xa(c)}}const y1=5;function A0(t,s,n){const r=Math.max(s-y1,0);return t0(n-t(r),s-r)}const we={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xc=.001;function x1({duration:t=we.duration,bounce:s=we.bounce,velocity:n=we.velocity,mass:r=we.mass}){let c,u,m=1-s;m=no(we.minDamping,we.maxDamping,m),t=no(we.minDuration,we.maxDuration,Xa(t)),m<1?(c=f=>{const v=f*m,q=v*t,x=v-n,E=Xc(f,m),D=Math.exp(-q);return xc-x/E*D},u=f=>{const q=f*m*t,x=q*n+n,E=Math.pow(m,2)*Math.pow(f,2)*t,D=Math.exp(-q),M=Xc(Math.pow(f,2),m);return(-c(f)+xc>0?-1:1)*((x-E)*D)/M}):(c=f=>{const v=Math.exp(-f*t),q=(f-n)*t+1;return-xc+v*q},u=f=>{const v=Math.exp(-f*t),q=(n-f)*(t*t);return v*q});const g=5/t,h=S1(c,u,g);if(t=Ka(t),isNaN(h))return{stiffness:we.stiffness,damping:we.damping,duration:t};{const f=Math.pow(h,2)*r;return{stiffness:f,damping:m*2*Math.sqrt(r*f),duration:t}}}const C1=12;function S1(t,s,n){let r=n;for(let c=1;c<C1;c++)r=r-t(r)/s(r);return r}function Xc(t,s){return t*Math.sqrt(1-s*s)}const E1=["duration","bounce"],A1=["stiffness","damping","mass"];function yh(t,s){return s.some(n=>t[n]!==void 0)}function z1(t){let s={velocity:we.velocity,stiffness:we.stiffness,damping:we.damping,mass:we.mass,isResolvedFromDuration:!1,...t};if(!yh(t,A1)&&yh(t,E1))if(s.velocity=0,t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),c=r*r,u=2*no(.05,1,1-(t.bounce||0))*Math.sqrt(c);s={...s,mass:we.mass,stiffness:c,damping:u}}else{const n=x1({...t,velocity:0});s={...s,...n,mass:we.mass},s.isResolvedFromDuration=!0}return s}function Mr(t=we.visualDuration,s=we.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:s}:t;let{restSpeed:r,restDelta:c}=n;const u=n.keyframes[0],m=n.keyframes[n.keyframes.length-1],g={done:!1,value:u},{stiffness:h,damping:f,mass:v,duration:q,velocity:x,isResolvedFromDuration:E}=z1({...n,velocity:-Xa(n.velocity||0)}),D=x||0,M=f/(2*Math.sqrt(h*v)),N=m-u,j=Xa(Math.sqrt(h/v)),F=Math.abs(N)<5;r||(r=F?we.restSpeed.granular:we.restSpeed.default),c||(c=F?we.restDelta.granular:we.restDelta.default);let B;if(M<1){const I=Xc(j,M);B=ae=>{const Y=Math.exp(-M*j*ae);return m-Y*((D+M*j*N)/I*Math.sin(I*ae)+N*Math.cos(I*ae))}}else if(M===1)B=I=>m-Math.exp(-j*I)*(N+(D+j*N)*I);else{const I=j*Math.sqrt(M*M-1);B=ae=>{const Y=Math.exp(-M*j*ae),W=Math.min(I*ae,300);return m-Y*((D+M*j*N)*Math.sinh(W)+I*N*Math.cosh(W))/I}}const Q={calculatedDuration:E&&q||null,next:I=>{const ae=B(I);if(E)g.done=I>=q;else{let Y=I===0?D:0;M<1&&(Y=I===0?Ka(D):A0(B,I,ae));const W=Math.abs(Y)<=r,ve=Math.abs(m-ae)<=c;g.done=W&&ve}return g.value=g.done?m:ae,g},toString:()=>{const I=Math.min(Du(Q),jr),ae=E0(Y=>Q.next(I*Y).value,I,30);return I+"ms "+ae},toTransition:()=>{}};return Q}Mr.applyToOptions=t=>{const s=q1(t,100,Mr);return t.ease=s.ease,t.duration=Ka(s.duration),t.type="keyframes",t};function kc({keyframes:t,velocity:s=0,power:n=.8,timeConstant:r=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:m,min:g,max:h,restDelta:f=.5,restSpeed:v}){const q=t[0],x={done:!1,value:q},E=W=>g!==void 0&&W<g||h!==void 0&&W>h,D=W=>g===void 0?h:h===void 0||Math.abs(g-W)<Math.abs(h-W)?g:h;let M=n*s;const N=q+M,j=m===void 0?N:m(N);j!==N&&(M=j-q);const F=W=>-M*Math.exp(-W/r),B=W=>j+F(W),Q=W=>{const ve=F(W),Re=B(W);x.done=Math.abs(ve)<=f,x.value=x.done?j:Re};let I,ae;const Y=W=>{E(x.value)&&(I=W,ae=Mr({keyframes:[x.value,D(x.value)],velocity:A0(B,W,x.value),damping:c,stiffness:u,restDelta:f,restSpeed:v}))};return Y(0),{calculatedDuration:null,next:W=>{let ve=!1;return!ae&&I===void 0&&(ve=!0,Q(W),Y(W)),I!==void 0&&W>=I?ae.next(W-I):(!ve&&Q(W),x)}}}function P1(t,s,n){const r=[],c=n||To.mix||S0,u=t.length-1;for(let m=0;m<u;m++){let g=c(t[m],t[m+1]);if(s){const h=Array.isArray(s)?s[m]||ka:s;g=Xi(h,g)}r.push(g)}return r}function D1(t,s,{clamp:n=!0,ease:r,mixer:c}={}){const u=t.length;if(yu(u===s.length),u===1)return()=>s[0];if(u===2&&s[0]===s[1])return()=>s[1];const m=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),s=[...s].reverse());const g=P1(s,r,c),h=g.length,f=v=>{if(m&&v<t[0])return s[0];let q=0;if(h>1)for(;q<t.length-2&&!(v<t[q+1]);q++);const x=ji(t[q],t[q+1],v);return g[q](x)};return n?v=>f(no(t[0],t[u-1],v)):f}function T1(t,s){const n=t[t.length-1];for(let r=1;r<=s;r++){const c=ji(0,s,r);t.push(je(n,1,c))}}function R1(t){const s=[0];return T1(s,t.length-1),s}function V1(t,s){return t.map(n=>n*s)}function j1(t,s){return t.map(()=>s||m0).splice(0,t.length-1)}function Pi({duration:t=300,keyframes:s,times:n,ease:r="easeInOut"}){const c=_C(r)?r.map(gh):gh(r),u={done:!1,value:s[0]},m=V1(n&&n.length===s.length?n:R1(s),t),g=D1(m,s,{ease:Array.isArray(c)?c:j1(s,c)});return{calculatedDuration:t,next:h=>(u.value=g(h),u.done=h>=t,u)}}const M1=t=>t!==null;function Tu(t,{repeat:s,repeatType:n="loop"},r,c=1){const u=t.filter(M1),g=c<0||s&&n!=="loop"&&s%2===1?0:u.length-1;return!g||r===void 0?u[g]:r}const O1={decay:kc,inertia:kc,tween:Pi,keyframes:Pi,spring:Mr};function z0(t){typeof t.type=="string"&&(t.type=O1[t.type])}class Ru{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,n){return this.finished.then(s,n)}}const N1=t=>t/100;class Vu extends Ru{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,c;const{motionValue:n}=this.options;n&&n.updatedAt!==da.now()&&this.tick(da.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(r=this.options).onStop)==null||c.call(r))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;z0(s);const{type:n=Pi,repeat:r=0,repeatDelay:c=0,repeatType:u,velocity:m=0}=s;let{keyframes:g}=s;const h=n||Pi;h!==Pi&&typeof g[0]!="number"&&(this.mixKeyframes=Xi(N1,S0(g[0],g[1])),g=[0,100]);const f=h({...s,keyframes:g});u==="mirror"&&(this.mirroredGenerator=h({...s,keyframes:[...g].reverse(),velocity:-m})),f.calculatedDuration===null&&(f.calculatedDuration=Du(f));const{calculatedDuration:v}=f;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(r+1)-c,this.generator=f}updateTime(s){const n=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(s,n=!1){const{generator:r,totalDuration:c,mixKeyframes:u,mirroredGenerator:m,resolvedDuration:g,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:f=0,keyframes:v,repeat:q,repeatType:x,repeatDelay:E,type:D,onUpdate:M,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-c/this.speed,this.startTime)),n?this.currentTime=s:this.updateTime(s);const j=this.currentTime-f*(this.playbackSpeed>=0?1:-1),F=this.playbackSpeed>=0?j<0:j>c;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let B=this.currentTime,Q=r;if(q){const W=Math.min(this.currentTime,c)/g;let ve=Math.floor(W),Re=W%1;!Re&&W>=1&&(Re=1),Re===1&&ve--,ve=Math.min(ve,q+1),!!(ve%2)&&(x==="reverse"?(Re=1-Re,E&&(Re-=E/g)):x==="mirror"&&(Q=m)),B=no(0,1,Re)*g}const I=F?{done:!1,value:v[0]}:Q.next(B);u&&(I.value=u(I.value));let{done:ae}=I;!F&&h!==null&&(ae=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Y=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ae);return Y&&D!==kc&&(I.value=Tu(v,this.options,N,this.speed)),M&&M(I.value),Y&&this.finish(),I}then(s,n){return this.finished.then(s,n)}get duration(){return Xa(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Xa(s)}get time(){return Xa(this.currentTime)}set time(s){var n;s=Ka(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(da.now());const n=this.playbackSpeed!==s;this.playbackSpeed=s,n&&(this.time=Xa(this.currentTime))}play(){var c,u;if(this.isStopped)return;const{driver:s=b1,startTime:n}=this.options;this.driver||(this.driver=s(m=>this.tick(m))),(u=(c=this.options).onPlay)==null||u.call(c);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(da.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(s=this.options).onComplete)==null||n.call(s)}cancel(){var s,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(s=this.options).onCancel)==null||n.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),s.observe(this)}}function w1(t){for(let s=1;s<t.length;s++)t[s]??(t[s]=t[s-1])}const Dt=t=>t*180/Math.PI,Fc=t=>{const s=Dt(Math.atan2(t[1],t[0]));return _c(s)},U1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Fc,rotateZ:Fc,skewX:t=>Dt(Math.atan(t[1])),skewY:t=>Dt(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},_c=t=>(t=t%360,t<0&&(t+=360),t),xh=Fc,Ch=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Sh=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),L1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ch,scaleY:Sh,scale:t=>(Ch(t)+Sh(t))/2,rotateX:t=>_c(Dt(Math.atan2(t[6],t[5]))),rotateY:t=>_c(Dt(Math.atan2(-t[2],t[0]))),rotateZ:xh,rotate:xh,skewX:t=>Dt(Math.atan(t[4])),skewY:t=>Dt(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ic(t){return t.includes("scale")?1:0}function Gc(t,s){if(!t||t==="none")return Ic(s);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,c;if(n)r=L1,c=n;else{const g=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=U1,c=g}if(!c)return Ic(s);const u=r[s],m=c[1].split(",").map(X1);return typeof u=="function"?u(m):m[u]}const B1=(t,s)=>{const{transform:n="none"}=getComputedStyle(t);return Gc(n,s)};function X1(t){return parseFloat(t.trim())}const As=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zs=new Set(As),Eh=t=>t===Es||t===K,k1=new Set(["x","y","z"]),F1=As.filter(t=>!k1.has(t));function _1(t){const s=[];return F1.forEach(n=>{const r=t.getValue(n);r!==void 0&&(s.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),s}const tt={width:({x:t},{paddingLeft:s="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(s)-parseFloat(n),height:({y:t},{paddingTop:s="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(s)-parseFloat(n),top:(t,{top:s})=>parseFloat(s),left:(t,{left:s})=>parseFloat(s),bottom:({y:t},{top:s})=>parseFloat(s)+(t.max-t.min),right:({x:t},{left:s})=>parseFloat(s)+(t.max-t.min),x:(t,{transform:s})=>Gc(s,"x"),y:(t,{transform:s})=>Gc(s,"y")};tt.translateX=tt.x;tt.translateY=tt.y;const Tt=new Set;let Qc=!1,Hc=!1,Yc=!1;function P0(){if(Hc){const t=Array.from(Tt).filter(r=>r.needsMeasurement),s=new Set(t.map(r=>r.element)),n=new Map;s.forEach(r=>{const c=_1(r);c.length&&(n.set(r,c),r.render())}),t.forEach(r=>r.measureInitialState()),s.forEach(r=>{r.render();const c=n.get(r);c&&c.forEach(([u,m])=>{var g;(g=r.getValue(u))==null||g.set(m)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Hc=!1,Qc=!1,Tt.forEach(t=>t.complete(Yc)),Tt.clear()}function D0(){Tt.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Hc=!0)})}function I1(){Yc=!0,D0(),P0(),Yc=!1}class ju{constructor(s,n,r,c,u,m=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=n,this.name=r,this.motionValue=c,this.element=u,this.isAsync=m}scheduleResolve(){this.state="scheduled",this.isAsync?(Tt.add(this),Qc||(Qc=!0,ze.read(D0),ze.resolveKeyframes(P0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:n,element:r,motionValue:c}=this;if(s[0]===null){const u=c==null?void 0:c.get(),m=s[s.length-1];if(u!==void 0)s[0]=u;else if(r&&n){const g=r.readValue(n,m);g!=null&&(s[0]=g)}s[0]===void 0&&(s[0]=m),c&&u===void 0&&c.set(s[0])}w1(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Tt.delete(this)}cancel(){this.state==="scheduled"&&(Tt.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const G1=t=>t.startsWith("--");function Q1(t,s,n){G1(s)?t.style.setProperty(s,n):t.style[s]=n}const H1={};function T0(t,s){const n=o0(t);return()=>H1[s]??n()}const Y1=T0(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),R0=T0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ai=([t,s,n,r])=>`cubic-bezier(${t}, ${s}, ${n}, ${r})`,Ah={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ai([0,.65,.55,1]),circOut:Ai([.55,0,1,.45]),backIn:Ai([.31,.01,.66,-.59]),backOut:Ai([.33,1.53,.69,.99])};function V0(t,s){if(t)return typeof t=="function"?R0()?E0(t,s):"ease-out":p0(t)?Ai(t):Array.isArray(t)?t.map(n=>V0(n,s)||Ah.easeOut):Ah[t]}function K1(t,s,n,{delay:r=0,duration:c=300,repeat:u=0,repeatType:m="loop",ease:g="easeOut",times:h}={},f=void 0){const v={[s]:n};h&&(v.offset=h);const q=V0(g,c);Array.isArray(q)&&(v.easing=q);const x={delay:r,duration:c,easing:Array.isArray(q)?"linear":q,fill:"both",iterations:u+1,direction:m==="reverse"?"alternate":"normal"};return f&&(x.pseudoElement=f),t.animate(v,x)}function j0(t){return typeof t=="function"&&"applyToOptions"in t}function $1({type:t,...s}){return j0(t)&&R0()?t.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class M0 extends Ru{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:n,name:r,keyframes:c,pseudoElement:u,allowFlatten:m=!1,finalKeyframe:g,onComplete:h}=s;this.isPseudoElement=!!u,this.allowFlatten=m,this.options=s,yu(typeof s.type!="string");const f=$1(s);this.animation=K1(n,r,c,f,u),f.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const v=Tu(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(v):Q1(n,r,v),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,n;(n=(s=this.animation).finish)==null||n.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,c;const s=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(s!=null&&s.isConnected)&&((c=(r=this.animation).commitStyles)==null||c.call(r))}get duration(){var n,r;const s=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Xa(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Xa(s)}get time(){return Xa(Number(this.animation.currentTime)||0)}set time(s){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ka(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&Y1()?(this.animation.timeline=s,ka):n(this)}}const O0={anticipate:d0,backInOut:l0,circInOut:u0};function Z1(t){return t in O0}function J1(t){typeof t.ease=="string"&&Z1(t.ease)&&(t.ease=O0[t.ease])}const Cc=10;class W1 extends M0{constructor(s){J1(s),z0(s),super(s),s.startTime!==void 0&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:n,onUpdate:r,onComplete:c,element:u,...m}=this.options;if(!n)return;if(s!==void 0){n.set(s);return}const g=new Vu({...m,autoplay:!1}),h=Math.max(Cc,da.now()-this.startTime),f=no(0,Cc,h-Cc);n.setWithVelocity(g.sample(Math.max(0,h-f)).value,g.sample(h).value,f),g.stop()}}const zh=(t,s)=>s==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&($a.test(t)||t==="0")&&!t.startsWith("url("));function eS(t){const s=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==s)return!0}function aS(t,s,n,r){const c=t[0];if(c===null)return!1;if(s==="display"||s==="visibility")return!0;const u=t[t.length-1],m=zh(c,s),g=zh(u,s);return!m||!g?!1:eS(t)||(n==="spring"||j0(n))&&r}function Kc(t){t.duration=0,t.type="keyframes"}const oS=new Set(["opacity","clipPath","filter","transform"]),tS=o0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sS(t){var v;const{motionValue:s,name:n,repeatDelay:r,repeatType:c,damping:u,type:m}=t;if(!(((v=s==null?void 0:s.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:f}=s.owner.getProps();return tS()&&n&&oS.has(n)&&(n!=="transform"||!f)&&!h&&!r&&c!=="mirror"&&u!==0&&m!=="inertia"}const iS=40;class nS extends Ru{constructor({autoplay:s=!0,delay:n=0,type:r="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:m="loop",keyframes:g,name:h,motionValue:f,element:v,...q}){var D;super(),this.stop=()=>{var M,N;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(N=this.keyframeResolver)==null||N.cancel()},this.createdAt=da.now();const x={autoplay:s,delay:n,type:r,repeat:c,repeatDelay:u,repeatType:m,name:h,motionValue:f,element:v,...q},E=(v==null?void 0:v.KeyframeResolver)||ju;this.keyframeResolver=new E(g,(M,N,j)=>this.onKeyframesResolved(M,N,x,!j),h,f,v),(D=this.keyframeResolver)==null||D.scheduleResolve()}onKeyframesResolved(s,n,r,c){var N,j;this.keyframeResolver=void 0;const{name:u,type:m,velocity:g,delay:h,isHandoff:f,onUpdate:v}=r;this.resolvedAt=da.now(),aS(s,u,m,g)||((To.instantAnimations||!h)&&(v==null||v(Tu(s,r,n))),s[0]=s[s.length-1],Kc(r),r.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>iS?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:s},E=!f&&sS(x),D=(j=(N=x.motionValue)==null?void 0:N.owner)==null?void 0:j.current,M=E?new W1({...x,element:D}):new Vu(x);M.finished.then(()=>{this.notifyFinished()}).catch(ka),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(s,n){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),I1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function N0(t,s,n,r=0,c=1){const u=Array.from(t).sort((f,v)=>f.sortNodePosition(v)).indexOf(s),m=t.size,g=(m-1)*r;return typeof n=="function"?n(u,m):c===1?u*r:g-u*r}const rS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function lS(t){const s=rS.exec(t);if(!s)return[,];const[,n,r,c]=s;return[`--${n??r}`,c]}function w0(t,s,n=1){const[r,c]=lS(t);if(!r)return;const u=window.getComputedStyle(s).getPropertyValue(r);if(u){const m=u.trim();return Wv(m)?parseFloat(m):m}return Eu(c)?w0(c,s,n+1):c}const dS={type:"spring",stiffness:500,damping:25,restSpeed:10},cS=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),uS={type:"keyframes",duration:.8},mS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pS=(t,{keyframes:s})=>s.length>2?uS:zs.has(t)?t.startsWith("scale")?cS(s[1]):dS:mS,gS=t=>t!==null;function fS(t,{repeat:s,repeatType:n="loop"},r){const c=t.filter(gS),u=s&&n!=="loop"&&s%2===1?0:c.length-1;return c[u]}function U0(t,s){if(t!=null&&t.inherit&&s){const{inherit:n,...r}=t;return{...s,...r}}return t}function Mu(t,s){const n=(t==null?void 0:t[s])??(t==null?void 0:t.default)??t;return n!==t?U0(n,t):n}function hS({when:t,delay:s,delayChildren:n,staggerChildren:r,staggerDirection:c,repeat:u,repeatType:m,repeatDelay:g,from:h,elapsed:f,...v}){return!!Object.keys(v).length}const Ou=(t,s,n,r={},c,u)=>m=>{const g=Mu(r,t)||{},h=g.delay||r.delay||0;let{elapsed:f=0}=r;f=f-Ka(h);const v={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:s.getVelocity(),...g,delay:-f,onUpdate:x=>{s.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{m(),g.onComplete&&g.onComplete()},name:t,motionValue:s,element:u?void 0:c};hS(g)||Object.assign(v,pS(t,v)),v.duration&&(v.duration=Ka(v.duration)),v.repeatDelay&&(v.repeatDelay=Ka(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let q=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(Kc(v),v.delay===0&&(q=!0)),(To.instantAnimations||To.skipAnimations||c!=null&&c.shouldSkipAnimations)&&(q=!0,Kc(v),v.delay=0),v.allowFlatten=!g.type&&!g.ease,q&&!u&&s.get()!==void 0){const x=fS(v.keyframes,g);if(x!==void 0){ze.update(()=>{v.onUpdate(x),v.onComplete()});return}}return g.isSync?new Vu(v):new nS(v)};function Ph(t){const s=[{},{}];return t==null||t.values.forEach((n,r)=>{s[0][r]=n.get(),s[1][r]=n.getVelocity()}),s}function Nu(t,s,n,r){if(typeof s=="function"){const[c,u]=Ph(r);s=s(n!==void 0?n:t.custom,c,u)}if(typeof s=="string"&&(s=t.variants&&t.variants[s]),typeof s=="function"){const[c,u]=Ph(r);s=s(n!==void 0?n:t.custom,c,u)}return s}function ys(t,s,n){const r=t.getProps();return Nu(r,s,n!==void 0?n:r.custom,t)}const L0=new Set(["width","height","top","left","right","bottom",...As]),Dh=30,vS=t=>!isNaN(parseFloat(t));class bS{constructor(s,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var u;const c=da.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=n.owner}setCurrent(s){this.current=s,this.updatedAt=da.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=vS(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,n){this.events[s]||(this.events[s]=new xu);const r=this.events[s].add(n);return s==="change"?()=>{r(),ze.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,n){this.passiveEffect=s,this.stopPassiveEffect=n}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-r}jump(s,n=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=da.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>Dh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Dh);return t0(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(s){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=s(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,n;(s=this.dependents)==null||s.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xs(t,s){return new bS(t,s)}const $c=t=>Array.isArray(t);function qS(t,s,n){t.hasValue(s)?t.getValue(s).set(n):t.addValue(s,xs(n))}function yS(t){return $c(t)?t[t.length-1]||0:t}function xS(t,s){const n=ys(t,s);let{transitionEnd:r={},transition:c={},...u}=n||{};u={...u,...r};for(const m in u){const g=yS(u[m]);qS(t,m,g)}}const sa=t=>!!(t&&t.getVelocity);function CS(t){return!!(sa(t)&&t.add)}function Zc(t,s){const n=t.getValue("willChange");if(CS(n))return n.add(s);if(!n&&To.WillChange){const r=new To.WillChange("auto");t.addValue("willChange",r),r.add(s)}}function wu(t){return t.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const SS="framerAppearId",B0="data-"+wu(SS);function X0(t){return t.props[B0]}function ES({protectedKeys:t,needsAnimating:s},n){const r=t.hasOwnProperty(n)&&s[n]!==!0;return s[n]=!1,r}function k0(t,s,{delay:n=0,transitionOverride:r,type:c}={}){let{transition:u,transitionEnd:m,...g}=s;const h=t.getDefaultTransition();u=u?U0(u,h):h;const f=u==null?void 0:u.reduceMotion;r&&(u=r);const v=[],q=c&&t.animationState&&t.animationState.getState()[c];for(const x in g){const E=t.getValue(x,t.latestValues[x]??null),D=g[x];if(D===void 0||q&&ES(q,x))continue;const M={delay:n,...Mu(u||{},x)},N=E.get();if(N!==void 0&&!E.isAnimating&&!Array.isArray(D)&&D===N&&!M.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const Q=X0(t);if(Q){const I=window.MotionHandoffAnimation(Q,x,ze);I!==null&&(M.startTime=I,j=!0)}}Zc(t,x);const F=f??t.shouldReduceMotion;E.start(Ou(x,E,D,F&&L0.has(x)?{type:!1}:M,t,j));const B=E.animation;B&&v.push(B)}if(m){const x=()=>ze.update(()=>{m&&xS(t,m)});v.length?Promise.all(v).then(x):x()}return v}function Jc(t,s,n={}){var h;const r=ys(t,s,n.type==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(c=n.transitionOverride);const u=r?()=>Promise.all(k0(t,r,n)):()=>Promise.resolve(),m=t.variantChildren&&t.variantChildren.size?(f=0)=>{const{delayChildren:v=0,staggerChildren:q,staggerDirection:x}=c;return AS(t,s,f,v,q,x,n)}:()=>Promise.resolve(),{when:g}=c;if(g){const[f,v]=g==="beforeChildren"?[u,m]:[m,u];return f().then(()=>v())}else return Promise.all([u(),m(n.delay)])}function AS(t,s,n=0,r=0,c=0,u=1,m){const g=[];for(const h of t.variantChildren)h.notify("AnimationStart",s),g.push(Jc(h,s,{...m,delay:n+(typeof r=="function"?0:r)+N0(t.variantChildren,h,r,c,u)}).then(()=>h.notify("AnimationComplete",s)));return Promise.all(g)}function zS(t,s,n={}){t.notify("AnimationStart",s);let r;if(Array.isArray(s)){const c=s.map(u=>Jc(t,u,n));r=Promise.all(c)}else if(typeof s=="string")r=Jc(t,s,n);else{const c=typeof s=="function"?ys(t,s,n.custom):s;r=Promise.all(k0(t,c,n))}return r.then(()=>{t.notify("AnimationComplete",s)})}const PS={test:t=>t==="auto",parse:t=>t},F0=t=>s=>s.test(t),_0=[Es,K,io,at,o1,a1,PS],Th=t=>_0.find(F0(t));function DS(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||a0(t):!0}const TS=new Set(["brightness","contrast","saturate","opacity"]);function RS(t){const[s,n]=t.slice(0,-1).split("(");if(s==="drop-shadow")return t;const[r]=n.match(Au)||[];if(!r)return t;const c=n.replace(r,"");let u=TS.has(s)?1:0;return r!==n&&(u*=100),s+"("+u+c+")"}const VS=/\b([a-z-]*)\(.*?\)/gu,Wc={...$a,getAnimatableNone:t=>{const s=t.match(VS);return s?s.map(RS).join(" "):t}},eu={...$a,getAnimatableNone:t=>{const s=$a.parse(t);return $a.createTransformer(t)(s.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Rh={...Es,transform:Math.round},jS={rotate:at,rotateX:at,rotateY:at,rotateZ:at,scale:ur,scaleX:ur,scaleY:ur,scaleZ:ur,skew:at,skewX:at,skewY:at,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:Mi,originX:hh,originY:hh,originZ:K},Uu={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,inset:K,insetBlock:K,insetBlockStart:K,insetBlockEnd:K,insetInline:K,insetInlineStart:K,insetInlineEnd:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,paddingBlock:K,paddingBlockStart:K,paddingBlockEnd:K,paddingInline:K,paddingInlineStart:K,paddingInlineEnd:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,marginBlock:K,marginBlockStart:K,marginBlockEnd:K,marginInline:K,marginInlineStart:K,marginInlineEnd:K,fontSize:K,backgroundPositionX:K,backgroundPositionY:K,...jS,zIndex:Rh,fillOpacity:Mi,strokeOpacity:Mi,numOctaves:Rh},MS={...Uu,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:Wc,WebkitFilter:Wc,mask:eu,WebkitMask:eu},I0=t=>MS[t],OS=new Set([Wc,eu]);function G0(t,s){let n=I0(t);return OS.has(n)||(n=$a),n.getAnimatableNone?n.getAnimatableNone(s):void 0}const NS=new Set(["auto","none","0"]);function wS(t,s,n){let r=0,c;for(;r<t.length&&!c;){const u=t[r];typeof u=="string"&&!NS.has(u)&&Oi(u).values.length&&(c=t[r]),r++}if(c&&n)for(const u of s)t[u]=G0(n,c)}class US extends ju{constructor(s,n,r,c,u){super(s,n,r,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let v=0;v<s.length;v++){let q=s[v];if(typeof q=="string"&&(q=q.trim(),Eu(q))){const x=w0(q,n.current);x!==void 0&&(s[v]=x),v===s.length-1&&(this.finalKeyframe=q)}}if(this.resolveNoneKeyframes(),!L0.has(r)||s.length!==2)return;const[c,u]=s,m=Th(c),g=Th(u),h=fh(c),f=fh(u);if(h!==f&&tt[r]){this.needsMeasurement=!0;return}if(m!==g)if(Eh(m)&&Eh(g))for(let v=0;v<s.length;v++){const q=s[v];typeof q=="string"&&(s[v]=parseFloat(q))}else tt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:n}=this,r=[];for(let c=0;c<s.length;c++)(s[c]===null||DS(s[c]))&&r.push(c);r.length&&wS(s,r,n)}measureInitialState(){const{element:s,unresolvedKeyframes:n,name:r}=this;if(!s||!s.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=tt[r](s.measureViewportBox(),window.getComputedStyle(s.current)),n[0]=this.measuredOrigin;const c=n[n.length-1];c!==void 0&&s.getValue(r,c).jump(c,!1)}measureEndState(){var g;const{element:s,name:n,unresolvedKeyframes:r}=this;if(!s||!s.current)return;const c=s.getValue(n);c&&c.jump(this.measuredOrigin,!1);const u=r.length-1,m=r[u];r[u]=tt[n](s.measureViewportBox(),window.getComputedStyle(s.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),(g=this.removedTransforms)!=null&&g.length&&this.removedTransforms.forEach(([h,f])=>{s.getValue(h).set(f)}),this.resolveNoneKeyframes()}}const LS=new Set(["opacity","clipPath","filter","transform"]);function Q0(t,s,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const c=(n==null?void 0:n[t])??r.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t).filter(r=>r!=null)}const H0=(t,s)=>s&&typeof t=="number"?s.transform(t):t;function BS(t){return e0(t)&&"offsetHeight"in t}const{schedule:Lu}=g0(queueMicrotask,!1),Ha={x:!1,y:!1};function Y0(){return Ha.x||Ha.y}function XS(t){return t==="x"||t==="y"?Ha[t]?null:(Ha[t]=!0,()=>{Ha[t]=!1}):Ha.x||Ha.y?null:(Ha.x=Ha.y=!0,()=>{Ha.x=Ha.y=!1})}function K0(t,s){const n=Q0(t),r=new AbortController,c={passive:!0,...s,signal:r.signal};return[n,c,()=>r.abort()]}function kS(t){return!(t.pointerType==="touch"||Y0())}function FS(t,s,n={}){const[r,c,u]=K0(t,n);return r.forEach(m=>{let g=!1,h=!1,f;const v=()=>{m.removeEventListener("pointerleave",D)},q=N=>{f&&(f(N),f=void 0),v()},x=N=>{g=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),h&&(h=!1,q(N))},E=()=>{g=!0,window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",x,c)},D=N=>{if(N.pointerType!=="touch"){if(g){h=!0;return}q(N)}},M=N=>{if(!kS(N))return;h=!1;const j=s(m,N);typeof j=="function"&&(f=j,m.addEventListener("pointerleave",D,c))};m.addEventListener("pointerenter",M,c),m.addEventListener("pointerdown",E,c)}),u}const $0=(t,s)=>s?t===s?!0:$0(t,s.parentElement):!1,Bu=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,_S=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function IS(t){return _S.has(t.tagName)||t.isContentEditable===!0}const GS=new Set(["INPUT","SELECT","TEXTAREA"]);function QS(t){return GS.has(t.tagName)||t.isContentEditable===!0}const xr=new WeakSet;function Vh(t){return s=>{s.key==="Enter"&&t(s)}}function Sc(t,s){t.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const HS=(t,s)=>{const n=t.currentTarget;if(!n)return;const r=Vh(()=>{if(xr.has(n))return;Sc(n,"down");const c=Vh(()=>{Sc(n,"up")}),u=()=>Sc(n,"cancel");n.addEventListener("keyup",c,s),n.addEventListener("blur",u,s)});n.addEventListener("keydown",r,s),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),s)};function jh(t){return Bu(t)&&!Y0()}const Mh=new WeakSet;function YS(t,s,n={}){const[r,c,u]=K0(t,n),m=g=>{const h=g.currentTarget;if(!jh(g)||Mh.has(g))return;xr.add(h),n.stopPropagation&&Mh.add(g);const f=s(h,g),v=(E,D)=>{window.removeEventListener("pointerup",q),window.removeEventListener("pointercancel",x),xr.has(h)&&xr.delete(h),jh(E)&&typeof f=="function"&&f(E,{success:D})},q=E=>{v(E,h===window||h===document||n.useGlobalTarget||$0(h,E.target))},x=E=>{v(E,!1)};window.addEventListener("pointerup",q,c),window.addEventListener("pointercancel",x,c)};return r.forEach(g=>{(n.useGlobalTarget?window:g).addEventListener("pointerdown",m,c),BS(g)&&(g.addEventListener("focus",f=>HS(f,c)),!IS(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),u}function Xu(t){return e0(t)&&"ownerSVGElement"in t}const Cr=new WeakMap;let ot;const Z0=(t,s,n)=>(r,c)=>c&&c[0]?c[0][t+"Size"]:Xu(r)&&"getBBox"in r?r.getBBox()[s]:r[n],KS=Z0("inline","width","offsetWidth"),$S=Z0("block","height","offsetHeight");function ZS({target:t,borderBoxSize:s}){var n;(n=Cr.get(t))==null||n.forEach(r=>{r(t,{get width(){return KS(t,s)},get height(){return $S(t,s)}})})}function JS(t){t.forEach(ZS)}function WS(){typeof ResizeObserver>"u"||(ot=new ResizeObserver(JS))}function eE(t,s){ot||WS();const n=Q0(t);return n.forEach(r=>{let c=Cr.get(r);c||(c=new Set,Cr.set(r,c)),c.add(s),ot==null||ot.observe(r)}),()=>{n.forEach(r=>{const c=Cr.get(r);c==null||c.delete(s),c!=null&&c.size||ot==null||ot.unobserve(r)})}}const Sr=new Set;let hs;function aE(){hs=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Sr.forEach(s=>s(t))},window.addEventListener("resize",hs)}function oE(t){return Sr.add(t),hs||aE(),()=>{Sr.delete(t),!Sr.size&&typeof hs=="function"&&(window.removeEventListener("resize",hs),hs=void 0)}}function Oh(t,s){return typeof t=="function"?oE(t):eE(t,s)}function tE(t){return Xu(t)&&t.tagName==="svg"}const sE=[..._0,Ie,$a],iE=t=>sE.find(F0(t)),Nh=()=>({translate:0,scale:1,origin:0,originPoint:0}),vs=()=>({x:Nh(),y:Nh()}),wh=()=>({min:0,max:0}),Ye=()=>({x:wh(),y:wh()}),nE=new WeakMap;function kr(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ni(t){return typeof t=="string"||Array.isArray(t)}const ku=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fu=["initial",...ku];function Fr(t){return kr(t.animate)||Fu.some(s=>Ni(t[s]))}function J0(t){return!!(Fr(t)||t.variants)}function rE(t,s,n){for(const r in s){const c=s[r],u=n[r];if(sa(c))t.addValue(r,c);else if(sa(u))t.addValue(r,xs(c,{owner:t}));else if(u!==c)if(t.hasValue(r)){const m=t.getValue(r);m.liveStyle===!0?m.jump(c):m.hasAnimated||m.set(c)}else{const m=t.getStaticValue(r);t.addValue(r,xs(m!==void 0?m:c,{owner:t}))}}for(const r in n)s[r]===void 0&&t.removeValue(r);return s}const au={current:null},W0={current:!1},lE=typeof window<"u";function dE(){if(W0.current=!0,!!lE)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),s=()=>au.current=t.matches;t.addEventListener("change",s),s()}else au.current=!1}const Uh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Or={};function eb(t){Or=t}function cE(){return Or}class uE{scrapeMotionValuesFromProps(s,n,r){return{}}constructor({parent:s,props:n,presenceContext:r,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:m,visualState:g},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ju,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=da.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,ze.render(this.render,!1,!0))};const{latestValues:f,renderState:v}=g;this.latestValues=f,this.baseTarget={...f},this.initialValues=n.initial?{...f}:{},this.renderState=v,this.parent=s,this.props=n,this.presenceContext=r,this.depth=s?s.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=h,this.blockInitialAnimation=!!m,this.isControllingVariants=Fr(n),this.isVariantNode=J0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:q,...x}=this.scrapeMotionValuesFromProps(n,{},this);for(const E in x){const D=x[E];f[E]!==void 0&&sa(D)&&D.set(f[E])}}mount(s){var n,r;if(this.hasBeenMounted)for(const c in this.initialValues)(n=this.values.get(c))==null||n.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=s,nE.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,u)=>this.bindToMotionValue(u,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(W0.current||dE(),this.shouldReduceMotion=au.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var s;this.projection&&this.projection.unmount(),st(this.notifyUpdate),st(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,n){if(this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)(),n.accelerate&&LS.has(s)&&this.current instanceof HTMLElement){const{factory:m,keyframes:g,times:h,ease:f,duration:v}=n.accelerate,q=new M0({element:this.current,name:s,keyframes:g,times:h,ease:f,duration:Ka(v)}),x=m(q);this.valueSubscriptions.set(s,()=>{x(),q.cancel()});return}const r=zs.has(s);r&&this.onBindTransform&&this.onBindTransform();const c=n.on("change",m=>{this.latestValues[s]=m,this.props.onUpdate&&ze.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,s,n)),this.valueSubscriptions.set(s,()=>{c(),u&&u(),n.owner&&n.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in Or){const n=Or[s];if(!n)continue;const{isEnabled:r,Feature:c}=n;if(!this.features[s]&&c&&r(this.props)&&(this.features[s]=new c(this)),this.features[s]){const u=this.features[s];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ye()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,n){this.latestValues[s]=n}update(s,n){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Uh.length;r++){const c=Uh[r];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,m=s[u];m&&(this.propEventSubscriptions[c]=this.on(c,m))}this.prevMotionValues=rE(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(s),()=>n.variantChildren.delete(s)}addValue(s,n){const r=this.values.get(s);n!==r&&(r&&this.removeValue(s),this.bindToMotionValue(s,n),this.values.set(s,n),this.latestValues[s]=n.get())}removeValue(s){this.values.delete(s);const n=this.valueSubscriptions.get(s);n&&(n(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,n){if(this.props.values&&this.props.values[s])return this.props.values[s];let r=this.values.get(s);return r===void 0&&n!==void 0&&(r=xs(n===null?void 0:n,{owner:this}),this.addValue(s,r)),r}readValue(s,n){let r=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return r!=null&&(typeof r=="string"&&(Wv(r)||a0(r))?r=parseFloat(r):!iE(r)&&$a.test(n)&&(r=G0(s,n)),this.setBaseTarget(s,sa(r)?r.get():r)),sa(r)?r.get():r}setBaseTarget(s,n){this.baseTarget[s]=n}getBaseTarget(s){var u;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const m=Nu(this.props,n,(u=this.presenceContext)==null?void 0:u.custom);m&&(r=m[s])}if(n&&r!==void 0)return r;const c=this.getBaseTargetFromProps(this.props,s);return c!==void 0&&!sa(c)?c:this.initialValues[s]!==void 0&&r===void 0?void 0:this.baseTarget[s]}on(s,n){return this.events[s]||(this.events[s]=new xu),this.events[s].add(n)}notify(s,...n){this.events[s]&&this.events[s].notify(...n)}scheduleRenderMicrotask(){Lu.render(this.render)}}class ab extends uE{constructor(){super(...arguments),this.KeyframeResolver=US}sortInstanceNodePosition(s,n){return s.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(s,n){const r=s.style;return r?r[n]:void 0}removeValueFromRenderState(s,{vars:n,style:r}){delete n[s],delete r[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;sa(s)&&(this.childSubscription=s.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class it{constructor(s){this.isMounted=!1,this.node=s}update(){}}function ob({top:t,left:s,right:n,bottom:r}){return{x:{min:s,max:n},y:{min:t,max:r}}}function mE({x:t,y:s}){return{top:s.min,right:t.max,bottom:s.max,left:t.min}}function pE(t,s){if(!s)return t;const n=s({x:t.left,y:t.top}),r=s({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ec(t){return t===void 0||t===1}function ou({scale:t,scaleX:s,scaleY:n}){return!Ec(t)||!Ec(s)||!Ec(n)}function zt(t){return ou(t)||tb(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function tb(t){return Lh(t.x)||Lh(t.y)}function Lh(t){return t&&t!=="0%"}function Nr(t,s,n){const r=t-n,c=s*r;return n+c}function Bh(t,s,n,r,c){return c!==void 0&&(t=Nr(t,c,r)),Nr(t,n,r)+s}function tu(t,s=0,n=1,r,c){t.min=Bh(t.min,s,n,r,c),t.max=Bh(t.max,s,n,r,c)}function sb(t,{x:s,y:n}){tu(t.x,s.translate,s.scale,s.originPoint),tu(t.y,n.translate,n.scale,n.originPoint)}const Xh=.999999999999,kh=1.0000000000001;function gE(t,s,n,r=!1){const c=n.length;if(!c)return;s.x=s.y=1;let u,m;for(let g=0;g<c;g++){u=n[g],m=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&u.options.layoutScroll&&u.scroll&&u!==u.root&&qs(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),m&&(s.x*=m.x.scale,s.y*=m.y.scale,sb(t,m)),r&&zt(u.latestValues)&&qs(t,u.latestValues))}s.x<kh&&s.x>Xh&&(s.x=1),s.y<kh&&s.y>Xh&&(s.y=1)}function bs(t,s){t.min=t.min+s,t.max=t.max+s}function Fh(t,s,n,r,c=.5){const u=je(t.min,t.max,c);tu(t,s,n,u,r)}function qs(t,s){Fh(t.x,s.x,s.scaleX,s.scale,s.originX),Fh(t.y,s.y,s.scaleY,s.scale,s.originY)}function ib(t,s){return ob(pE(t.getBoundingClientRect(),s))}function fE(t,s,n){const r=ib(t,n),{scroll:c}=s;return c&&(bs(r.x,c.offset.x),bs(r.y,c.offset.y)),r}const hE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vE=As.length;function bE(t,s,n){let r="",c=!0;for(let u=0;u<vE;u++){const m=As[u],g=t[m];if(g===void 0)continue;let h=!0;if(typeof g=="number")h=g===(m.startsWith("scale")?1:0);else{const f=parseFloat(g);h=m.startsWith("scale")?f===1:f===0}if(!h||n){const f=H0(g,Uu[m]);if(!h){c=!1;const v=hE[m]||m;r+=`${v}(${f}) `}n&&(s[m]=f)}}return r=r.trim(),n?r=n(s,c?"":r):c&&(r="none"),r}function _u(t,s,n){const{style:r,vars:c,transformOrigin:u}=t;let m=!1,g=!1;for(const h in s){const f=s[h];if(zs.has(h)){m=!0;continue}else if(h0(h)){c[h]=f;continue}else{const v=H0(f,Uu[h]);h.startsWith("origin")?(g=!0,u[h]=v):r[h]=v}}if(s.transform||(m||n?r.transform=bE(s,t.transform,n):r.transform&&(r.transform="none")),g){const{originX:h="50%",originY:f="50%",originZ:v=0}=u;r.transformOrigin=`${h} ${f} ${v}`}}function nb(t,{style:s,vars:n},r,c){const u=t.style;let m;for(m in s)u[m]=s[m];c==null||c.applyProjectionStyles(u,r);for(m in n)u.setProperty(m,n[m])}function _h(t,s){return s.max===s.min?0:t/(s.max-s.min)*100}const Si={correct:(t,s)=>{if(!s.target)return t;if(typeof t=="string")if(K.test(t))t=parseFloat(t);else return t;const n=_h(t,s.target.x),r=_h(t,s.target.y);return`${n}% ${r}%`}},qE={correct:(t,{treeScale:s,projectionDelta:n})=>{const r=t,c=$a.parse(t);if(c.length>5)return r;const u=$a.createTransformer(t),m=typeof c[0]!="number"?1:0,g=n.x.scale*s.x,h=n.y.scale*s.y;c[0+m]/=g,c[1+m]/=h;const f=je(g,h,.5);return typeof c[2+m]=="number"&&(c[2+m]/=f),typeof c[3+m]=="number"&&(c[3+m]/=f),u(c)}},su={borderRadius:{...Si,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Si,borderTopRightRadius:Si,borderBottomLeftRadius:Si,borderBottomRightRadius:Si,boxShadow:qE};function rb(t,{layout:s,layoutId:n}){return zs.has(t)||t.startsWith("origin")||(s||n!==void 0)&&(!!su[t]||t==="opacity")}function Iu(t,s,n){var m;const r=t.style,c=s==null?void 0:s.style,u={};if(!r)return u;for(const g in r)(sa(r[g])||c&&sa(c[g])||rb(g,t)||((m=n==null?void 0:n.getValue(g))==null?void 0:m.liveStyle)!==void 0)&&(u[g]=r[g]);return u}function yE(t){return window.getComputedStyle(t)}class xE extends ab{constructor(){super(...arguments),this.type="html",this.renderInstance=nb}readValueFromInstance(s,n){var r;if(zs.has(n))return(r=this.projection)!=null&&r.isProjecting?Ic(n):B1(s,n);{const c=yE(s),u=(h0(n)?c.getPropertyValue(n):c[n])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(s,{transformPagePoint:n}){return ib(s,n)}build(s,n,r){_u(s,n,r.transformTemplate)}scrapeMotionValuesFromProps(s,n,r){return Iu(s,n,r)}}const CE={offset:"stroke-dashoffset",array:"stroke-dasharray"},SE={offset:"strokeDashoffset",array:"strokeDasharray"};function EE(t,s,n=1,r=0,c=!0){t.pathLength=1;const u=c?CE:SE;t[u.offset]=`${-r}`,t[u.array]=`${s} ${n}`}const AE=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function lb(t,{attrX:s,attrY:n,attrScale:r,pathLength:c,pathSpacing:u=1,pathOffset:m=0,...g},h,f,v){if(_u(t,g,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:q,style:x}=t;q.transform&&(x.transform=q.transform,delete q.transform),(x.transform||q.transformOrigin)&&(x.transformOrigin=q.transformOrigin??"50% 50%",delete q.transformOrigin),x.transform&&(x.transformBox=(v==null?void 0:v.transformBox)??"fill-box",delete q.transformBox);for(const E of AE)q[E]!==void 0&&(x[E]=q[E],delete q[E]);s!==void 0&&(q.x=s),n!==void 0&&(q.y=n),r!==void 0&&(q.scale=r),c!==void 0&&EE(q,c,u,m,!1)}const db=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),cb=t=>typeof t=="string"&&t.toLowerCase()==="svg";function zE(t,s,n,r){nb(t,s,void 0,r);for(const c in s.attrs)t.setAttribute(db.has(c)?c:wu(c),s.attrs[c])}function ub(t,s,n){const r=Iu(t,s,n);for(const c in t)if(sa(t[c])||sa(s[c])){const u=As.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;r[u]=t[c]}return r}class PE extends ab{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ye}getBaseTargetFromProps(s,n){return s[n]}readValueFromInstance(s,n){if(zs.has(n)){const r=I0(n);return r&&r.default||0}return n=db.has(n)?n:wu(n),s.getAttribute(n)}scrapeMotionValuesFromProps(s,n,r){return ub(s,n,r)}build(s,n,r){lb(s,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(s,n,r,c){zE(s,n,r,c)}mount(s){this.isSVGTag=cb(s.tagName),super.mount(s)}}const DE=Fu.length;function mb(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?mb(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const s={};for(let n=0;n<DE;n++){const r=Fu[n],c=t.props[r];(Ni(c)||c===!1)&&(s[r]=c)}return s}function pb(t,s){if(!Array.isArray(s))return!1;const n=s.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(s[r]!==t[r])return!1;return!0}const TE=[...ku].reverse(),RE=ku.length;function VE(t){return s=>Promise.all(s.map(({animation:n,options:r})=>zS(t,n,r)))}function jE(t){let s=VE(t),n=Ih(),r=!0;const c=h=>(f,v)=>{var x;const q=ys(t,v,h==="exit"?(x=t.presenceContext)==null?void 0:x.custom:void 0);if(q){const{transition:E,transitionEnd:D,...M}=q;f={...f,...M,...D}}return f};function u(h){s=h(t)}function m(h){const{props:f}=t,v=mb(t.parent)||{},q=[],x=new Set;let E={},D=1/0;for(let N=0;N<RE;N++){const j=TE[N],F=n[j],B=f[j]!==void 0?f[j]:v[j],Q=Ni(B),I=j===h?F.isActive:null;I===!1&&(D=N);let ae=B===v[j]&&B!==f[j]&&Q;if(ae&&r&&t.manuallyAnimateOnMount&&(ae=!1),F.protectedKeys={...E},!F.isActive&&I===null||!B&&!F.prevProp||kr(B)||typeof B=="boolean")continue;if(j==="exit"&&F.isActive&&I!==!0){F.prevResolvedValues&&(E={...E,...F.prevResolvedValues});continue}const Y=ME(F.prevProp,B);let W=Y||j===h&&F.isActive&&!ae&&Q||N>D&&Q,ve=!1;const Re=Array.isArray(B)?B:[B];let Ge=Re.reduce(c(j),{});I===!1&&(Ge={});const{prevResolvedValues:Qe={}}=F,Da={...Qe,...Ge},na=_=>{W=!0,x.has(_)&&(ve=!0,x.delete(_)),F.needsAnimating[_]=!0;const Z=t.getValue(_);Z&&(Z.liveStyle=!1)};for(const _ in Da){const Z=Ge[_],ce=Qe[_];if(E.hasOwnProperty(_))continue;let ge=!1;$c(Z)&&$c(ce)?ge=!pb(Z,ce):ge=Z!==ce,ge?Z!=null?na(_):x.add(_):Z!==void 0&&x.has(_)?na(_):F.protectedKeys[_]=!0}F.prevProp=B,F.prevResolvedValues=Ge,F.isActive&&(E={...E,...Ge}),r&&t.blockInitialAnimation&&(W=!1);const Ve=ae&&Y;W&&(!Ve||ve)&&q.push(...Re.map(_=>{const Z={type:j};if(typeof _=="string"&&r&&!Ve&&t.manuallyAnimateOnMount&&t.parent){const{parent:ce}=t,ge=ys(ce,_);if(ce.enteringChildren&&ge){const{delayChildren:A}=ge.transition||{};Z.delay=N0(ce.enteringChildren,t,A)}}return{animation:_,options:Z}}))}if(x.size){const N={};if(typeof f.initial!="boolean"){const j=ys(t,Array.isArray(f.initial)?f.initial[0]:f.initial);j&&j.transition&&(N.transition=j.transition)}x.forEach(j=>{const F=t.getBaseTarget(j),B=t.getValue(j);B&&(B.liveStyle=!0),N[j]=F??null}),q.push({animation:N})}let M=!!q.length;return r&&(f.initial===!1||f.initial===f.animate)&&!t.manuallyAnimateOnMount&&(M=!1),r=!1,M?s(q):Promise.resolve()}function g(h,f){var q;if(n[h].isActive===f)return Promise.resolve();(q=t.variantChildren)==null||q.forEach(x=>{var E;return(E=x.animationState)==null?void 0:E.setActive(h,f)}),n[h].isActive=f;const v=m(h);for(const x in n)n[x].protectedKeys={};return v}return{animateChanges:m,setActive:g,setAnimateFunction:u,getState:()=>n,reset:()=>{n=Ih()}}}function ME(t,s){return typeof s=="string"?s!==t:Array.isArray(s)?!pb(s,t):!1}function At(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ih(){return{animate:At(!0),whileInView:At(),whileHover:At(),whileTap:At(),whileDrag:At(),whileFocus:At(),exit:At()}}function Gh(t,s){t.min=s.min,t.max=s.max}function Qa(t,s){Gh(t.x,s.x),Gh(t.y,s.y)}function Qh(t,s){t.translate=s.translate,t.scale=s.scale,t.originPoint=s.originPoint,t.origin=s.origin}const gb=1e-4,OE=1-gb,NE=1+gb,fb=.01,wE=0-fb,UE=0+fb;function ca(t){return t.max-t.min}function LE(t,s,n){return Math.abs(t-s)<=n}function Hh(t,s,n,r=.5){t.origin=r,t.originPoint=je(s.min,s.max,t.origin),t.scale=ca(n)/ca(s),t.translate=je(n.min,n.max,t.origin)-t.originPoint,(t.scale>=OE&&t.scale<=NE||isNaN(t.scale))&&(t.scale=1),(t.translate>=wE&&t.translate<=UE||isNaN(t.translate))&&(t.translate=0)}function Di(t,s,n,r){Hh(t.x,s.x,n.x,r?r.originX:void 0),Hh(t.y,s.y,n.y,r?r.originY:void 0)}function Yh(t,s,n){t.min=n.min+s.min,t.max=t.min+ca(s)}function BE(t,s,n){Yh(t.x,s.x,n.x),Yh(t.y,s.y,n.y)}function Kh(t,s,n){t.min=s.min-n.min,t.max=t.min+ca(s)}function wr(t,s,n){Kh(t.x,s.x,n.x),Kh(t.y,s.y,n.y)}function $h(t,s,n,r,c){return t-=s,t=Nr(t,1/n,r),c!==void 0&&(t=Nr(t,1/c,r)),t}function XE(t,s=0,n=1,r=.5,c,u=t,m=t){if(io.test(s)&&(s=parseFloat(s),s=je(m.min,m.max,s/100)-m.min),typeof s!="number")return;let g=je(u.min,u.max,r);t===u&&(g-=s),t.min=$h(t.min,s,n,g,c),t.max=$h(t.max,s,n,g,c)}function Zh(t,s,[n,r,c],u,m){XE(t,s[n],s[r],s[c],s.scale,u,m)}const kE=["x","scaleX","originX"],FE=["y","scaleY","originY"];function Jh(t,s,n,r){Zh(t.x,s,kE,n?n.x:void 0,r?r.x:void 0),Zh(t.y,s,FE,n?n.y:void 0,r?r.y:void 0)}function Wh(t){return t.translate===0&&t.scale===1}function hb(t){return Wh(t.x)&&Wh(t.y)}function ev(t,s){return t.min===s.min&&t.max===s.max}function _E(t,s){return ev(t.x,s.x)&&ev(t.y,s.y)}function av(t,s){return Math.round(t.min)===Math.round(s.min)&&Math.round(t.max)===Math.round(s.max)}function vb(t,s){return av(t.x,s.x)&&av(t.y,s.y)}function ov(t){return ca(t.x)/ca(t.y)}function tv(t,s){return t.translate===s.translate&&t.scale===s.scale&&t.originPoint===s.originPoint}function so(t){return[t("x"),t("y")]}function IE(t,s,n){let r="";const c=t.x.translate/s.x,u=t.y.translate/s.y,m=(n==null?void 0:n.z)||0;if((c||u||m)&&(r=`translate3d(${c}px, ${u}px, ${m}px) `),(s.x!==1||s.y!==1)&&(r+=`scale(${1/s.x}, ${1/s.y}) `),n){const{transformPerspective:f,rotate:v,rotateX:q,rotateY:x,skewX:E,skewY:D}=n;f&&(r=`perspective(${f}px) ${r}`),v&&(r+=`rotate(${v}deg) `),q&&(r+=`rotateX(${q}deg) `),x&&(r+=`rotateY(${x}deg) `),E&&(r+=`skewX(${E}deg) `),D&&(r+=`skewY(${D}deg) `)}const g=t.x.scale*s.x,h=t.y.scale*s.y;return(g!==1||h!==1)&&(r+=`scale(${g}, ${h})`),r||"none"}const bb=["TopLeft","TopRight","BottomLeft","BottomRight"],GE=bb.length,sv=t=>typeof t=="string"?parseFloat(t):t,iv=t=>typeof t=="number"||K.test(t);function QE(t,s,n,r,c,u){c?(t.opacity=je(0,n.opacity??1,HE(r)),t.opacityExit=je(s.opacity??1,0,YE(r))):u&&(t.opacity=je(s.opacity??1,n.opacity??1,r));for(let m=0;m<GE;m++){const g=`border${bb[m]}Radius`;let h=nv(s,g),f=nv(n,g);if(h===void 0&&f===void 0)continue;h||(h=0),f||(f=0),h===0||f===0||iv(h)===iv(f)?(t[g]=Math.max(je(sv(h),sv(f),r),0),(io.test(f)||io.test(h))&&(t[g]+="%")):t[g]=f}(s.rotate||n.rotate)&&(t.rotate=je(s.rotate||0,n.rotate||0,r))}function nv(t,s){return t[s]!==void 0?t[s]:t.borderRadius}const HE=qb(0,.5,c0),YE=qb(.5,.95,ka);function qb(t,s,n){return r=>r<t?0:r>s?1:n(ji(t,s,r))}function KE(t,s,n){const r=sa(t)?t:xs(t);return r.start(Ou("",r,s,n)),r.animation}function wi(t,s,n,r={passive:!0}){return t.addEventListener(s,n,r),()=>t.removeEventListener(s,n)}const $E=(t,s)=>t.depth-s.depth;class ZE{constructor(){this.children=[],this.isDirty=!1}add(s){qu(this.children,s),this.isDirty=!0}remove(s){Rr(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort($E),this.isDirty=!1,this.children.forEach(s)}}function JE(t,s){const n=da.now(),r=({timestamp:c})=>{const u=c-n;u>=s&&(st(r),t(u-s))};return ze.setup(r,!0),()=>st(r)}function Er(t){return sa(t)?t.get():t}class WE{constructor(){this.members=[]}add(s){qu(this.members,s);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===s||r===this.lead||r===this.prevLead)continue;const c=r.instance;c&&c.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&Rr(this.members,r)}s.scheduleRender()}remove(s){if(Rr(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(s){const n=this.members.findIndex(c=>s===c);if(n===0)return!1;let r;for(let c=n;c>=0;c--){const u=this.members[c],m=u.instance;if(u.isPresent!==!1&&(!m||m.isConnected!==!1)){r=u;break}}return r?(this.promote(r),!0):!1}promote(s,n){const r=this.lead;if(s!==r&&(this.prevLead=r,this.lead=s,s.show(),r)){r.instance&&r.scheduleRender(),s.scheduleRender();const c=r.options.layoutDependency,u=s.options.layoutDependency;if(!(c!==void 0&&u!==void 0&&c===u)){const h=r.instance;h&&h.isConnected===!1&&!r.snapshot||(s.resumeFrom=r,n&&(s.resumeFrom.preserveOpacity=!0),r.snapshot&&(s.snapshot=r.snapshot,s.snapshot.latestValues=r.animationValues||r.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0))}const{crossfade:g}=s.options;g===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:n,resumingFrom:r}=s;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Ar={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ac=["","X","Y","Z"],eA=1e3;let aA=0;function zc(t,s,n,r){const{latestValues:c}=s;c[t]&&(n[t]=c[t],s.setStaticValue(t,0),r&&(r[t]=0))}function yb(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:s}=t.options;if(!s)return;const n=X0(s);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ze,!(c||u))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&yb(r)}function xb({attachResizeListener:t,defaultParent:s,measureScroll:n,checkIsScrollRoot:r,resetTransform:c}){return class{constructor(m={},g=s==null?void 0:s()){this.id=aA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sA),this.nodes.forEach(lA),this.nodes.forEach(dA),this.nodes.forEach(iA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=m,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new ZE)}addEventListener(m,g){return this.eventHandlers.has(m)||this.eventHandlers.set(m,new xu),this.eventHandlers.get(m).add(g)}notifyListeners(m,...g){const h=this.eventHandlers.get(m);h&&h.notify(...g)}hasListeners(m){return this.eventHandlers.has(m)}mount(m){if(this.instance)return;this.isSVG=Xu(m)&&!tE(m),this.instance=m;const{layoutId:g,layout:h,visualElement:f}=this.options;if(f&&!f.current&&f.mount(m),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||g)&&(this.isLayoutDirty=!0),t){let v,q=0;const x=()=>this.root.updateBlockedByResize=!1;ze.read(()=>{q=window.innerWidth}),t(m,()=>{const E=window.innerWidth;E!==q&&(q=E,this.root.updateBlockedByResize=!0,v&&v(),v=JE(x,250),Ar.hasAnimatedSinceResize&&(Ar.hasAnimatedSinceResize=!1,this.nodes.forEach(dv)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&f&&(g||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:q,hasRelativeLayoutChanged:x,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const D=this.options.transition||f.getDefaultTransition()||gA,{onLayoutAnimationStart:M,onLayoutAnimationComplete:N}=f.getProps(),j=!this.targetLayout||!vb(this.targetLayout,E),F=!q&&x;if(this.options.layoutRoot||this.resumeFrom||F||q&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...Mu(D,"layout"),onPlay:M,onComplete:N};(f.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(v,F)}else q||dv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const m=this.getStack();m&&m.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),st(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cA),this.animationId++)}getTransformTemplate(){const{visualElement:m}=this.options;return m&&m.getProps().transformTemplate}willUpdate(m=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&yb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const q=this.path[v];q.shouldResetTransform=!0,q.updateScroll("snapshot"),q.options.layoutRoot&&q.willUpdate(!1)}const{layoutId:g,layout:h}=this.options;if(g===void 0&&!h)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),m&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(rv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(lv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(rA),this.nodes.forEach(oA),this.nodes.forEach(tA)):this.nodes.forEach(lv),this.clearAllSnapshots();const g=da.now();oa.delta=no(0,1e3/60,g-oa.timestamp),oa.timestamp=g,oa.isProcessing=!0,vc.update.process(oa),vc.preRender.process(oa),vc.render.process(oa),oa.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nA),this.sharedNodes.forEach(uA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ca(this.snapshot.measuredBox.x)&&!ca(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const m=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ye(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,m?m.layoutBox:void 0)}updateScroll(m="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===m&&(g=!1),g&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:m,isRoot:h,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const m=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!hb(this.projectionDelta),h=this.getTransformTemplate(),f=h?h(this.latestValues,""):void 0,v=f!==this.prevTransformTemplateValue;m&&this.instance&&(g||zt(this.latestValues)||v)&&(c(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(m=!0){const g=this.measurePageBox();let h=this.removeElementScroll(g);return m&&(h=this.removeTransform(h)),fA(h),{animationId:this.root.animationId,measuredBox:g,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:m}=this.options;if(!m)return Ye();const g=m.measureViewportBox();if(!(((f=this.scroll)==null?void 0:f.wasRoot)||this.path.some(hA))){const{scroll:v}=this.root;v&&(bs(g.x,v.offset.x),bs(g.y,v.offset.y))}return g}removeElementScroll(m){var h;const g=Ye();if(Qa(g,m),(h=this.scroll)!=null&&h.wasRoot)return g;for(let f=0;f<this.path.length;f++){const v=this.path[f],{scroll:q,options:x}=v;v!==this.root&&q&&x.layoutScroll&&(q.wasRoot&&Qa(g,m),bs(g.x,q.offset.x),bs(g.y,q.offset.y))}return g}applyTransform(m,g=!1){const h=Ye();Qa(h,m);for(let f=0;f<this.path.length;f++){const v=this.path[f];!g&&v.options.layoutScroll&&v.scroll&&v!==v.root&&qs(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),zt(v.latestValues)&&qs(h,v.latestValues)}return zt(this.latestValues)&&qs(h,this.latestValues),h}removeTransform(m){const g=Ye();Qa(g,m);for(let h=0;h<this.path.length;h++){const f=this.path[h];if(!f.instance||!zt(f.latestValues))continue;ou(f.latestValues)&&f.updateSnapshot();const v=Ye(),q=f.measurePageBox();Qa(v,q),Jh(g,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,v)}return zt(this.latestValues)&&Jh(g,this.latestValues),g}setTargetDelta(m){this.targetDelta=m,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(m){this.options={...this.options,...m,crossfade:m.crossfade!==void 0?m.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==oa.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(m=!1){var E;const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==g;if(!(m||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:q}=this.options;if(!this.layout||!(v||q))return;this.resolvedRelativeTargetAt=oa.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ye(),this.targetWithTransforms=Ye()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),BE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qa(this.target,this.layout.layoutBox),sb(this.target,this.targetDelta)):Qa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ou(this.parent.latestValues)||tb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(m,g,h){this.relativeParent=m,this.linkedParentVersion=m.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ye(),this.relativeTargetOrigin=Ye(),wr(this.relativeTargetOrigin,g,h),Qa(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var D;const m=this.getLead(),g=!!this.resumingFrom||this!==m;let h=!0;if((this.isProjectionDirty||(D=this.parent)!=null&&D.isProjectionDirty)&&(h=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===oa.timestamp&&(h=!1),h)return;const{layout:f,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||v))return;Qa(this.layoutCorrected,this.layout.layoutBox);const q=this.treeScale.x,x=this.treeScale.y;gE(this.layoutCorrected,this.treeScale,this.path,g),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=Ye());const{target:E}=m;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Qh(this.prevProjectionDelta.x,this.projectionDelta.x),Qh(this.prevProjectionDelta.y,this.projectionDelta.y)),Di(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==q||this.treeScale.y!==x||!tv(this.projectionDelta.x,this.prevProjectionDelta.x)||!tv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(m=!0){var g;if((g=this.options.visualElement)==null||g.scheduleRender(),m){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vs(),this.projectionDelta=vs(),this.projectionDeltaWithTransform=vs()}setAnimationOrigin(m,g=!1){const h=this.snapshot,f=h?h.latestValues:{},v={...this.latestValues},q=vs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=Ye(),E=h?h.source:void 0,D=this.layout?this.layout.source:void 0,M=E!==D,N=this.getStack(),j=!N||N.members.length<=1,F=!!(M&&!j&&this.options.crossfade===!0&&!this.path.some(pA));this.animationProgress=0;let B;this.mixTargetDelta=Q=>{const I=Q/1e3;cv(q.x,m.x,I),cv(q.y,m.y,I),this.setTargetDelta(q),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wr(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mA(this.relativeTarget,this.relativeTargetOrigin,x,I),B&&_E(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=Ye()),Qa(B,this.relativeTarget)),M&&(this.animationValues=v,QE(v,f,this.latestValues,I,F,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(m){var g,h,f;this.notifyListeners("animationStart"),(g=this.currentAnimation)==null||g.stop(),(f=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||f.stop(),this.pendingAnimation&&(st(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ze.update(()=>{Ar.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=xs(0)),this.motionValue.jump(0,!1),this.currentAnimation=KE(this.motionValue,[0,1e3],{...m,velocity:0,isSync:!0,onUpdate:v=>{this.mixTargetDelta(v),m.onUpdate&&m.onUpdate(v)},onStop:()=>{},onComplete:()=>{m.onComplete&&m.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const m=this.getStack();m&&m.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(eA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const m=this.getLead();let{targetWithTransforms:g,target:h,layout:f,latestValues:v}=m;if(!(!g||!h||!f)){if(this!==m&&this.layout&&f&&Cb(this.options.animationType,this.layout.layoutBox,f.layoutBox)){h=this.target||Ye();const q=ca(this.layout.layoutBox.x);h.x.min=m.target.x.min,h.x.max=h.x.min+q;const x=ca(this.layout.layoutBox.y);h.y.min=m.target.y.min,h.y.max=h.y.min+x}Qa(g,h),qs(g,v),Di(this.projectionDeltaWithTransform,this.layoutCorrected,g,v)}}registerSharedNode(m,g){this.sharedNodes.has(m)||this.sharedNodes.set(m,new WE),this.sharedNodes.get(m).add(g);const f=g.options.initialPromotionConfig;g.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(g):void 0})}isLead(){const m=this.getStack();return m?m.lead===this:!0}getLead(){var g;const{layoutId:m}=this.options;return m?((g=this.getStack())==null?void 0:g.lead)||this:this}getPrevLead(){var g;const{layoutId:m}=this.options;return m?(g=this.getStack())==null?void 0:g.prevLead:void 0}getStack(){const{layoutId:m}=this.options;if(m)return this.root.sharedNodes.get(m)}promote({needsReset:m,transition:g,preserveFollowOpacity:h}={}){const f=this.getStack();f&&f.promote(this,h),m&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const m=this.getStack();return m?m.relegate(this):!1}resetSkewAndRotation(){const{visualElement:m}=this.options;if(!m)return;let g=!1;const{latestValues:h}=m;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(g=!0),!g)return;const f={};h.z&&zc("z",m,f,this.animationValues);for(let v=0;v<Ac.length;v++)zc(`rotate${Ac[v]}`,m,f,this.animationValues),zc(`skew${Ac[v]}`,m,f,this.animationValues);m.render();for(const v in f)m.setStaticValue(v,f[v]),this.animationValues&&(this.animationValues[v]=f[v]);m.scheduleRender()}applyProjectionStyles(m,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){m.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,m.visibility="",m.opacity="",m.pointerEvents=Er(g==null?void 0:g.pointerEvents)||"",m.transform=h?h(this.latestValues,""):"none";return}const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=Er(g==null?void 0:g.pointerEvents)||""),this.hasProjected&&!zt(this.latestValues)&&(m.transform=h?h({},""):"none",this.hasProjected=!1);return}m.visibility="";const v=f.animationValues||f.latestValues;this.applyTransformsToTarget();let q=IE(this.projectionDeltaWithTransform,this.treeScale,v);h&&(q=h(v,q)),m.transform=q;const{x,y:E}=this.projectionDelta;m.transformOrigin=`${x.origin*100}% ${E.origin*100}% 0`,f.animationValues?m.opacity=f===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:m.opacity=f===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const D in su){if(v[D]===void 0)continue;const{correct:M,applyTo:N,isCSSVariable:j}=su[D],F=q==="none"?v[D]:M(v[D],f);if(N){const B=N.length;for(let Q=0;Q<B;Q++)m[N[Q]]=F}else j?this.options.visualElement.renderState.vars[D]=F:m[D]=F}this.options.layoutId&&(m.pointerEvents=f===this?Er(g==null?void 0:g.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(m=>{var g;return(g=m.currentAnimation)==null?void 0:g.stop()}),this.root.nodes.forEach(rv),this.root.sharedNodes.clear()}}}function oA(t){t.updateLayout()}function tA(t){var n;const s=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&s&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:c}=t.layout,{animationType:u}=t.options,m=s.source!==t.layout.source;u==="size"?so(q=>{const x=m?s.measuredBox[q]:s.layoutBox[q],E=ca(x);x.min=r[q].min,x.max=x.min+E}):Cb(u,s.layoutBox,r)&&so(q=>{const x=m?s.measuredBox[q]:s.layoutBox[q],E=ca(r[q]);x.max=x.min+E,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[q].max=t.relativeTarget[q].min+E)});const g=vs();Di(g,r,s.layoutBox);const h=vs();m?Di(h,t.applyTransform(c,!0),s.measuredBox):Di(h,r,s.layoutBox);const f=!hb(g);let v=!1;if(!t.resumeFrom){const q=t.getClosestProjectingParent();if(q&&!q.resumeFrom){const{snapshot:x,layout:E}=q;if(x&&E){const D=Ye();wr(D,s.layoutBox,x.layoutBox);const M=Ye();wr(M,r,E.layoutBox),vb(D,M)||(v=!0),q.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=D,t.relativeParent=q)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:s,delta:h,layoutDelta:g,hasLayoutChanged:f,hasRelativeLayoutChanged:v})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function sA(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function iA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function nA(t){t.clearSnapshot()}function rv(t){t.clearMeasurements()}function lv(t){t.isLayoutDirty=!1}function rA(t){const{visualElement:s}=t.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),t.resetTransform()}function dv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function lA(t){t.resolveTargetDelta()}function dA(t){t.calcProjection()}function cA(t){t.resetSkewAndRotation()}function uA(t){t.removeLeadSnapshot()}function cv(t,s,n){t.translate=je(s.translate,0,n),t.scale=je(s.scale,1,n),t.origin=s.origin,t.originPoint=s.originPoint}function uv(t,s,n,r){t.min=je(s.min,n.min,r),t.max=je(s.max,n.max,r)}function mA(t,s,n,r){uv(t.x,s.x,n.x,r),uv(t.y,s.y,n.y,r)}function pA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const gA={duration:.45,ease:[.4,0,.1,1]},mv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),pv=mv("applewebkit/")&&!mv("chrome/")?Math.round:ka;function gv(t){t.min=pv(t.min),t.max=pv(t.max)}function fA(t){gv(t.x),gv(t.y)}function Cb(t,s,n){return t==="position"||t==="preserve-aspect"&&!LE(ov(s),ov(n),.2)}function hA(t){var s;return t!==t.root&&((s=t.scroll)==null?void 0:s.wasRoot)}const vA=xb({attachResizeListener:(t,s)=>wi(t,"resize",s),measureScroll:()=>{var t,s;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((s=document.body)==null?void 0:s.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Pc={current:void 0},Sb=xb({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Pc.current){const t=new vA({});t.mount(window),t.setOptions({layoutScroll:!0}),Pc.current=t}return Pc.current},resetTransform:(t,s)=>{t.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Eb=z.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function bA(t=!0){const s=z.useContext(bu);if(s===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:c}=s,u=z.useId();z.useEffect(()=>{if(t)return c(u)},[t]);const m=z.useCallback(()=>t&&r&&r(u),[u,r,t]);return!n&&r?[!1,m]:[!0]}const Ab=z.createContext({strict:!1}),fv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let hv=!1;function qA(){if(hv)return;const t={};for(const s in fv)t[s]={isEnabled:n=>fv[s].some(r=>!!n[r])};eb(t),hv=!0}function zb(){return qA(),cE()}function yA(t){const s=zb();for(const n in t)s[n]={...s[n],...t[n]};eb(s)}const xA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ur(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||xA.has(t)}let Pb=t=>!Ur(t);function CA(t){typeof t=="function"&&(Pb=s=>s.startsWith("on")?!Ur(s):t(s))}try{CA(require("@emotion/is-prop-valid").default)}catch{}function SA(t,s,n){const r={};for(const c in t)c==="values"&&typeof t.values=="object"||(Pb(c)||n===!0&&Ur(c)||!s&&!Ur(c)||t.draggable&&c.startsWith("onDrag"))&&(r[c]=t[c]);return r}const _r=z.createContext({});function EA(t,s){if(Fr(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Ni(n)?n:void 0,animate:Ni(r)?r:void 0}}return t.inherit!==!1?s:{}}function AA(t){const{initial:s,animate:n}=EA(t,z.useContext(_r));return z.useMemo(()=>({initial:s,animate:n}),[vv(s),vv(n)])}function vv(t){return Array.isArray(t)?t.join(" "):t}const Gu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Db(t,s,n){for(const r in s)!sa(s[r])&&!rb(r,n)&&(t[r]=s[r])}function zA({transformTemplate:t},s){return z.useMemo(()=>{const n=Gu();return _u(n,s,t),Object.assign({},n.vars,n.style)},[s])}function PA(t,s){const n=t.style||{},r={};return Db(r,n,t),Object.assign(r,zA(t,s)),r}function DA(t,s){const n={},r=PA(t,s);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const Tb=()=>({...Gu(),attrs:{}});function TA(t,s,n,r){const c=z.useMemo(()=>{const u=Tb();return lb(u,s,cb(r),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[s]);if(t.style){const u={};Db(u,t.style,t),c.style={...u,...c.style}}return c}const RA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qu(t){return typeof t!="string"||t.includes("-")?!1:!!(RA.indexOf(t)>-1||/[A-Z]/u.test(t))}function VA(t,s,n,{latestValues:r},c,u=!1,m){const h=(m??Qu(t)?TA:DA)(s,r,c,t),f=SA(s,typeof t=="string",u),v=t!==z.Fragment?{...f,...h,ref:n}:{},{children:q}=s,x=z.useMemo(()=>sa(q)?q.get():q,[q]);return z.createElement(t,{...v,children:x})}function jA({scrapeMotionValuesFromProps:t,createRenderState:s},n,r,c){return{latestValues:MA(n,r,c,t),renderState:s()}}function MA(t,s,n,r){const c={},u=r(t,{});for(const x in u)c[x]=Er(u[x]);let{initial:m,animate:g}=t;const h=Fr(t),f=J0(t);s&&f&&!h&&t.inherit!==!1&&(m===void 0&&(m=s.initial),g===void 0&&(g=s.animate));let v=n?n.initial===!1:!1;v=v||m===!1;const q=v?g:m;if(q&&typeof q!="boolean"&&!kr(q)){const x=Array.isArray(q)?q:[q];for(let E=0;E<x.length;E++){const D=Nu(t,x[E]);if(D){const{transitionEnd:M,transition:N,...j}=D;for(const F in j){let B=j[F];if(Array.isArray(B)){const Q=v?B.length-1:0;B=B[Q]}B!==null&&(c[F]=B)}for(const F in M)c[F]=M[F]}}}return c}const Rb=t=>(s,n)=>{const r=z.useContext(_r),c=z.useContext(bu),u=()=>jA(t,s,r,c);return n?u():NC(u)},OA=Rb({scrapeMotionValuesFromProps:Iu,createRenderState:Gu}),NA=Rb({scrapeMotionValuesFromProps:ub,createRenderState:Tb}),wA=Symbol.for("motionComponentSymbol");function UA(t,s,n){const r=z.useRef(n);z.useInsertionEffect(()=>{r.current=n});const c=z.useRef(null);return z.useCallback(u=>{var g;u&&((g=t.onMount)==null||g.call(t,u)),s&&(u?s.mount(u):s.unmount());const m=r.current;if(typeof m=="function")if(u){const h=m(u);typeof h=="function"&&(c.current=h)}else c.current?(c.current(),c.current=null):m(u);else m&&(m.current=u)},[s])}const Vb=z.createContext({});function gs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function LA(t,s,n,r,c,u){var B,Q;const{visualElement:m}=z.useContext(_r),g=z.useContext(Ab),h=z.useContext(bu),f=z.useContext(Eb),v=f.reducedMotion,q=f.skipAnimations,x=z.useRef(null),E=z.useRef(!1);r=r||g.renderer,!x.current&&r&&(x.current=r(t,{visualState:s,parent:m,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:v,skipAnimations:q,isSVG:u}),E.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const D=x.current,M=z.useContext(Vb);D&&!D.projection&&c&&(D.type==="html"||D.type==="svg")&&BA(x.current,n,c,M);const N=z.useRef(!1);z.useInsertionEffect(()=>{D&&N.current&&D.update(n,h)});const j=n[B0],F=z.useRef(!!j&&!((B=window.MotionHandoffIsComplete)!=null&&B.call(window,j))&&((Q=window.MotionHasOptimisedAnimation)==null?void 0:Q.call(window,j)));return wC(()=>{E.current=!0,D&&(N.current=!0,window.MotionIsMounted=!0,D.updateFeatures(),D.scheduleRenderMicrotask(),F.current&&D.animationState&&D.animationState.animateChanges())}),z.useEffect(()=>{D&&(!F.current&&D.animationState&&D.animationState.animateChanges(),F.current&&(queueMicrotask(()=>{var I;(I=window.MotionHandoffMarkAsComplete)==null||I.call(window,j)}),F.current=!1),D.enteringChildren=void 0)}),D}function BA(t,s,n,r){const{layoutId:c,layout:u,drag:m,dragConstraints:g,layoutScroll:h,layoutRoot:f,layoutCrossfade:v}=s;t.projection=new n(t.latestValues,s["data-framer-portal-id"]?void 0:jb(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!m||g&&gs(g),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:h,layoutRoot:f})}function jb(t){if(t)return t.options.allowProjection!==!1?t.projection:jb(t.parent)}function Dc(t,{forwardMotionProps:s=!1,type:n}={},r,c){r&&yA(r);const u=n?n==="svg":Qu(t),m=u?NA:OA;function g(f,v){let q;const x={...z.useContext(Eb),...f,layoutId:XA(f)},{isStatic:E}=x,D=AA(f),M=m(f,E);if(!E&&Jv){kA();const N=FA(x);q=N.MeasureLayout,D.visualElement=LA(t,M,x,c,N.ProjectionNode,u)}return y.jsxs(_r.Provider,{value:D,children:[q&&D.visualElement?y.jsx(q,{visualElement:D.visualElement,...x}):null,VA(t,f,UA(M,D.visualElement,v),M,E,s,u)]})}g.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const h=z.forwardRef(g);return h[wA]=t,h}function XA({layoutId:t}){const s=z.useContext(Zv).id;return s&&t!==void 0?s+"-"+t:t}function kA(t,s){z.useContext(Ab).strict}function FA(t){const s=zb(),{drag:n,layout:r}=s;if(!n&&!r)return{};const c={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(t)||r!=null&&r.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function _A(t,s){if(typeof Proxy>"u")return Dc;const n=new Map,r=(u,m)=>Dc(u,m,t,s),c=(u,m)=>r(u,m);return new Proxy(c,{get:(u,m)=>m==="create"?r:(n.has(m)||n.set(m,Dc(m,void 0,t,s)),n.get(m))})}const IA=(t,s)=>s.isSVG??Qu(t)?new PE(s):new xE(s,{allowProjection:t!==z.Fragment});class GA extends it{constructor(s){super(s),s.animationState||(s.animationState=jE(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();kr(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:n}=this.node.prevProps||{};s!==n&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let QA=0;class HA extends it{constructor(){super(...arguments),this.id=QA++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===r)return;const c=this.node.animationState.setActive("exit",!s);n&&!s&&c.then(()=>{n(this.id)})}mount(){const{register:s,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const YA={animation:{Feature:GA},exit:{Feature:HA}};function _i(t){return{point:{x:t.pageX,y:t.pageY}}}const KA=t=>s=>Bu(s)&&t(s,_i(s));function Ti(t,s,n,r){return wi(t,s,KA(n),r)}const Mb=({current:t})=>t?t.ownerDocument.defaultView:null,bv=(t,s)=>Math.abs(t-s);function $A(t,s){const n=bv(t.x,s.x),r=bv(t.y,s.y);return Math.sqrt(n**2+r**2)}const qv=new Set(["auto","scroll"]);class Ob{constructor(s,n,{transformPagePoint:r,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:m=3,element:g}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=E=>{this.handleScroll(E.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=Rc(this.lastMoveEventInfo,this.history),D=this.startEvent!==null,M=$A(E.offset,{x:0,y:0})>=this.distanceThreshold;if(!D&&!M)return;const{point:N}=E,{timestamp:j}=oa;this.history.push({...N,timestamp:j});const{onStart:F,onMove:B}=this.handlers;D||(F&&F(this.lastMoveEvent,E),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,E)},this.handlePointerMove=(E,D)=>{this.lastMoveEvent=E,this.lastMoveEventInfo=Tc(D,this.transformPagePoint),ze.update(this.updatePoint,!0)},this.handlePointerUp=(E,D)=>{this.end();const{onEnd:M,onSessionEnd:N,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const F=Rc(E.type==="pointercancel"?this.lastMoveEventInfo:Tc(D,this.transformPagePoint),this.history);this.startEvent&&M&&M(E,F),N&&N(E,F)},!Bu(s))return;this.dragSnapToOrigin=u,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=m,this.contextWindow=c||window;const h=_i(s),f=Tc(h,this.transformPagePoint),{point:v}=f,{timestamp:q}=oa;this.history=[{...v,timestamp:q}];const{onSessionStart:x}=n;x&&x(s,Rc(f,this.history)),this.removeListeners=Xi(Ti(this.contextWindow,"pointermove",this.handlePointerMove),Ti(this.contextWindow,"pointerup",this.handlePointerUp),Ti(this.contextWindow,"pointercancel",this.handlePointerUp)),g&&this.startScrollTracking(g)}startScrollTracking(s){let n=s.parentElement;for(;n;){const r=getComputedStyle(n);(qv.has(r.overflowX)||qv.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const n=this.scrollPositions.get(s);if(!n)return;const r=s===window,c=r?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},u={x:c.x-n.x,y:c.y-n.y};u.x===0&&u.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(s,c),ze.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),st(this.updatePoint)}}function Tc(t,s){return s?{point:s(t.point)}:t}function yv(t,s){return{x:t.x-s.x,y:t.y-s.y}}function Rc({point:t},s){return{point:t,delta:yv(t,Nb(s)),offset:yv(t,ZA(s)),velocity:JA(s,.1)}}function ZA(t){return t[0]}function Nb(t){return t[t.length-1]}function JA(t,s){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const c=Nb(t);for(;n>=0&&(r=t[n],!(c.timestamp-r.timestamp>Ka(s)));)n--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&c.timestamp-r.timestamp>Ka(s)*2&&(r=t[1]);const u=Xa(c.timestamp-r.timestamp);if(u===0)return{x:0,y:0};const m={x:(c.x-r.x)/u,y:(c.y-r.y)/u};return m.x===1/0&&(m.x=0),m.y===1/0&&(m.y=0),m}function WA(t,{min:s,max:n},r){return s!==void 0&&t<s?t=r?je(s,t,r.min):Math.max(t,s):n!==void 0&&t>n&&(t=r?je(n,t,r.max):Math.min(t,n)),t}function xv(t,s,n){return{min:s!==void 0?t.min+s:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function ez(t,{top:s,left:n,bottom:r,right:c}){return{x:xv(t.x,n,c),y:xv(t.y,s,r)}}function Cv(t,s){let n=s.min-t.min,r=s.max-t.max;return s.max-s.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function az(t,s){return{x:Cv(t.x,s.x),y:Cv(t.y,s.y)}}function oz(t,s){let n=.5;const r=ca(t),c=ca(s);return c>r?n=ji(s.min,s.max-r,t.min):r>c&&(n=ji(t.min,t.max-c,s.min)),no(0,1,n)}function tz(t,s){const n={};return s.min!==void 0&&(n.min=s.min-t.min),s.max!==void 0&&(n.max=s.max-t.min),n}const iu=.35;function sz(t=iu){return t===!1?t=0:t===!0&&(t=iu),{x:Sv(t,"left","right"),y:Sv(t,"top","bottom")}}function Sv(t,s,n){return{min:Ev(t,s),max:Ev(t,n)}}function Ev(t,s){return typeof t=="number"?t:t[s]||0}const iz=new WeakMap;class nz{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ye(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=q=>{n&&this.snapToCursor(_i(q).point),this.stopAnimation()},m=(q,x)=>{const{drag:E,dragPropagation:D,onDragStart:M}=this.getProps();if(E&&!D&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XS(E),!this.openDragLock))return;this.latestPointerEvent=q,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),so(j=>{let F=this.getAxisMotionValue(j).get()||0;if(io.test(F)){const{projection:B}=this.visualElement;if(B&&B.layout){const Q=B.layout.layoutBox[j];Q&&(F=ca(Q)*(parseFloat(F)/100))}}this.originPoint[j]=F}),M&&ze.update(()=>M(q,x),!1,!0),Zc(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},g=(q,x)=>{this.latestPointerEvent=q,this.latestPanInfo=x;const{dragPropagation:E,dragDirectionLock:D,onDirectionLock:M,onDrag:N}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:j}=x;if(D&&this.currentDirection===null){this.currentDirection=lz(j),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",x.point,j),this.updateAxis("y",x.point,j),this.visualElement.render(),N&&ze.update(()=>N(q,x),!1,!0)},h=(q,x)=>{this.latestPointerEvent=q,this.latestPanInfo=x,this.stop(q,x),this.latestPointerEvent=null,this.latestPanInfo=null},f=()=>{const{dragSnapToOrigin:q}=this.getProps();(q||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:v}=this.getProps();this.panSession=new Ob(s,{onSessionStart:u,onStart:m,onMove:g,onSessionEnd:h,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:r,contextWindow:Mb(this.visualElement),element:this.visualElement.current})}stop(s,n){const r=s||this.latestPointerEvent,c=n||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!r)return;const{velocity:m}=c;this.startAnimation(m);const{onDragEnd:g}=this.getProps();g&&ze.postRender(()=>g(r,c))}cancel(){this.isDragging=!1;const{projection:s,animationState:n}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(s,n,r){const{drag:c}=this.getProps();if(!r||!mr(s,c,this.currentDirection))return;const u=this.getAxisMotionValue(s);let m=this.originPoint[s]+r[s];this.constraints&&this.constraints[s]&&(m=WA(m,this.constraints[s],this.elastic[s])),u.set(m)}resolveConstraints(){var u;const{dragConstraints:s,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,c=this.constraints;s&&gs(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&r?this.constraints=ez(r.layoutBox,s):this.constraints=!1,this.elastic=sz(n),c!==this.constraints&&!gs(s)&&r&&this.constraints&&!this.hasMutatedConstraints&&so(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=tz(r.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:n}=this.getProps();if(!s||!gs(s))return!1;const r=s.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=fE(r,c.root,this.visualElement.getTransformPagePoint());let m=az(c.layout.layoutBox,u);if(n){const g=n(mE(m));this.hasMutatedConstraints=!!g,g&&(m=ob(g))}return m}startAnimation(s){const{drag:n,dragMomentum:r,dragElastic:c,dragTransition:u,dragSnapToOrigin:m,onDragTransitionEnd:g}=this.getProps(),h=this.constraints||{},f=so(v=>{if(!mr(v,n,this.currentDirection))return;let q=h&&h[v]||{};m&&(q={min:0,max:0});const x=c?200:1e6,E=c?40:1e7,D={type:"inertia",velocity:r?s[v]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...u,...q};return this.startAxisValueAnimation(v,D)});return Promise.all(f).then(g)}startAxisValueAnimation(s,n){const r=this.getAxisMotionValue(s);return Zc(this.visualElement,s),r.start(Ou(s,r,0,n,this.visualElement,!1))}stopAnimation(){so(s=>this.getAxisMotionValue(s).stop())}getAxisMotionValue(s){const n=`_drag${s.toUpperCase()}`,r=this.visualElement.getProps(),c=r[n];return c||this.visualElement.getValue(s,(r.initial?r.initial[s]:void 0)||0)}snapToCursor(s){so(n=>{const{drag:r}=this.getProps();if(!mr(n,r,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(n);if(c&&c.layout){const{min:m,max:g}=c.layout.layoutBox[n],h=u.get()||0;u.set(s[n]-je(m,g,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!gs(n)||!r||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};so(m=>{const g=this.getAxisMotionValue(m);if(g&&this.constraints!==!1){const h=g.get();c[m]=oz({min:h,max:h},this.constraints[m])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),so(m=>{if(!mr(m,s,null))return;const g=this.getAxisMotionValue(m),{min:h,max:f}=this.constraints[m];g.set(je(h,f,c[m]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;iz.set(this.visualElement,this);const s=this.visualElement.current,n=Ti(s,"pointerdown",f=>{const{drag:v,dragListener:q=!0}=this.getProps(),x=f.target,E=x!==s&&QS(x);v&&q&&!E&&this.start(f)});let r;const c=()=>{const{dragConstraints:f}=this.getProps();gs(f)&&f.current&&(this.constraints=this.resolveRefConstraints(),r||(r=rz(s,f.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,m=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ze.read(c);const g=wi(window,"resize",()=>this.scalePositionWithinConstraints()),h=u.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:v})=>{this.isDragging&&v&&(so(q=>{const x=this.getAxisMotionValue(q);x&&(this.originPoint[q]+=f[q].translate,x.set(x.get()+f[q].translate))}),this.visualElement.render())}));return()=>{g(),n(),m(),h&&h(),r&&r()}}getProps(){const s=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:m=iu,dragMomentum:g=!0}=s;return{...s,drag:n,dragDirectionLock:r,dragPropagation:c,dragConstraints:u,dragElastic:m,dragMomentum:g}}}function Av(t){let s=!0;return()=>{if(s){s=!1;return}t()}}function rz(t,s,n){const r=Oh(t,Av(n)),c=Oh(s,Av(n));return()=>{r(),c()}}function mr(t,s,n){return(s===!0||s===t)&&(n===null||n===t)}function lz(t,s=10){let n=null;return Math.abs(t.y)>s?n="y":Math.abs(t.x)>s&&(n="x"),n}class dz extends it{constructor(s){super(s),this.removeGroupControls=ka,this.removeListeners=ka,this.controls=new nz(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ka}update(){const{dragControls:s}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};s!==n&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Vc=t=>(s,n)=>{t&&ze.update(()=>t(s,n),!1,!0)};class cz extends it{constructor(){super(...arguments),this.removePointerDownListener=ka}onPointerDown(s){this.session=new Ob(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Mb(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:n,onPan:r,onPanEnd:c}=this.node.getProps();return{onSessionStart:Vc(s),onStart:Vc(n),onMove:Vc(r),onEnd:(u,m)=>{delete this.session,c&&ze.postRender(()=>c(u,m))}}}mount(){this.removePointerDownListener=Ti(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let jc=!1;class uz extends z.Component{componentDidMount(){const{visualElement:s,layoutGroup:n,switchLayoutGroup:r,layoutId:c}=this.props,{projection:u}=s;u&&(n.group&&n.group.add(u),r&&r.register&&c&&r.register(u),jc&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ar.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:n,visualElement:r,drag:c,isPresent:u}=this.props,{projection:m}=r;return m&&(m.isPresent=u,s.layoutDependency!==n&&m.setOptions({...m.options,layoutDependency:n}),jc=!0,c||s.layoutDependency!==n||n===void 0||s.isPresent!==u?m.willUpdate():this.safeToRemove(),s.isPresent!==u&&(u?m.promote():m.relegate()||ze.postRender(()=>{const g=m.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),Lu.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:c}=s;jc=!0,c&&(c.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(c),r&&r.deregister&&r.deregister(c))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function wb(t){const[s,n]=bA(),r=z.useContext(Zv);return y.jsx(uz,{...t,layoutGroup:r,switchLayoutGroup:z.useContext(Vb),isPresent:s,safeToRemove:n})}const mz={pan:{Feature:cz},drag:{Feature:dz,ProjectionNode:Sb,MeasureLayout:wb}};function zv(t,s,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const c="onHover"+n,u=r[c];u&&ze.postRender(()=>u(s,_i(s)))}class pz extends it{mount(){const{current:s}=this.node;s&&(this.unmount=FS(s,(n,r)=>(zv(this.node,r,"Start"),c=>zv(this.node,c,"End"))))}unmount(){}}class gz extends it{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xi(wi(this.node.current,"focus",()=>this.onFocus()),wi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Pv(t,s,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const c="onTap"+(n==="End"?"":n),u=r[c];u&&ze.postRender(()=>u(s,_i(s)))}class fz extends it{mount(){const{current:s}=this.node;if(!s)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=YS(s,(c,u)=>(Pv(this.node,u,"Start"),(m,{success:g})=>Pv(this.node,m,g?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const nu=new WeakMap,Mc=new WeakMap,hz=t=>{const s=nu.get(t.target);s&&s(t)},vz=t=>{t.forEach(hz)};function bz({root:t,...s}){const n=t||document;Mc.has(n)||Mc.set(n,{});const r=Mc.get(n),c=JSON.stringify(s);return r[c]||(r[c]=new IntersectionObserver(vz,{root:t,...s})),r[c]}function qz(t,s,n){const r=bz(s);return nu.set(t,n),r.observe(t),()=>{nu.delete(t),r.unobserve(t)}}const yz={some:0,all:1};class xz extends it{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:n,margin:r,amount:c="some",once:u}=s,m={root:n?n.current:void 0,rootMargin:r,threshold:typeof c=="number"?c:yz[c]},g=h=>{const{isIntersecting:f}=h;if(this.isInView===f||(this.isInView=f,u&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:v,onViewportLeave:q}=this.node.getProps(),x=f?v:q;x&&x(h)};return qz(this.node.current,m,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:n}=this.node;["amount","margin","root"].some(Cz(s,n))&&this.startObserver()}unmount(){}}function Cz({viewport:t={}},{viewport:s={}}={}){return n=>t[n]!==s[n]}const Sz={inView:{Feature:xz},tap:{Feature:fz},focus:{Feature:gz},hover:{Feature:pz}},Ez={layout:{ProjectionNode:Sb,MeasureLayout:wb}},Az={...YA,...Sz,...mz,...Ez},zr=_A(Az,IA);function zz(){return Wa().pathname,y.jsxs("div",{className:"min-h-screen font-sans bg-white",children:[y.jsx("header",{className:"sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100",children:y.jsxs("div",{className:"max-w-6xl mx-auto px-4 h-16 flex items-center justify-between",children:[y.jsxs(Ba,{to:"/",className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm",children:"V"}),y.jsx("span",{className:"text-xl font-bold tracking-tight text-slate-900",children:"VendaPX"}),y.jsx("span",{className:"text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full ml-1",children:"Blog"})]}),y.jsxs("nav",{className:"flex items-center gap-6 text-sm font-medium text-slate-600",children:[y.jsx(Ba,{to:"/blog",className:"hover:text-indigo-600 transition-colors",children:"Artigos"}),y.jsx(Ba,{to:"/",className:"hover:text-indigo-600 transition-colors",children:"Site Principal"})]})]})}),y.jsx("main",{children:y.jsx(bx,{})}),y.jsx("footer",{className:"bg-slate-900 text-white py-12 mt-16",children:y.jsxs("div",{className:"max-w-6xl mx-auto px-4 text-center",children:[y.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[y.jsx("div",{className:"w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm",children:"V"}),y.jsx("span",{className:"text-xl font-bold",children:"VendaPX"})]}),y.jsx("p",{className:"text-slate-400 text-sm mb-6",children:"Ecossistema completo de gestão: Estoque, Financeiro e PDV integrados."}),y.jsxs("div",{className:"flex items-center justify-center gap-6 text-sm text-slate-400",children:[y.jsx(Ba,{to:"/blog",className:"hover:text-white transition-colors",children:"Blog"}),y.jsx(Ba,{to:"/",className:"hover:text-white transition-colors",children:"Site Principal"}),y.jsx("a",{href:"https://vendapx.com.br",className:"hover:text-white transition-colors",children:"vendapx.com.br"})]}),y.jsxs("p",{className:"text-slate-500 text-xs mt-8",children:["© ",new Date().getFullYear()," VendaPX - Gestão Inteligente. Todos os direitos reservados."]})]})})]})}const Pz=[{slug:"como-controlar-estoque-de-forma-eficiente",title:"Como Controlar Estoque de Forma Eficiente no Seu Negócio",description:"Aprenda técnicas comprovadas para controlar estoque, reduzir perdas e otimizar a gestão do seu estoque com ferramentas modernas e práticas do dia a dia.",category:"estoque",date:"2025-01-10",readTime:8,keywords:["controle de estoque","gestão de estoque","gestão eficiente","reduzir perdas","estoque otimizado","sistema de estoque","controle de estoque eficiente","gestão de inventário"],content:`
      <h2>Como Controlar Estoque de Forma Eficiente no Seu Negócio</h2>
      <p>O <strong>controle de estoque</strong> é um dos pilares fundamentais para a sobrevivência e crescimento de qualquer negócio, especialmente para pequenas e médias empresas que operam com margens apertadas. Estoque parado significa dinheiro imobilizado, enquanto estoque insuficiente significa vendas perdidas e clientes insatisfeitos. Encontrar o equilíbrio perfeito entre esses extremos é o que separa empresas lucrativas daquelas que lutam para se manter no mercado.</p>

      <p>Neste guia completo, você vai aprender as melhores práticas de <strong>gestão de estoque</strong> que são aplicáveis ao dia a dia do seu negócio, independentemente do segmento. Vamos abordar desde os conceitos básicos até estratégias avançadas que vão transformar a forma como você gerencia seus produtos.</p>

      <h2>Por Que o Controle de Estoque É Tão Importante?</h2>
      <p>Muitos empresários subestimam a importância de um <strong>controle de estoque adequado</strong>. No entanto, a realidade mostra que problemas com estoque são uma das principais causas de prejuízo em pequenos negócios. Veja os principais motivos:</p>

      <ul>
        <li><strong>Redução de perdas:</strong> Produtos vencidos, danificados ou obsoletos representam prejuízo direto. Um bom controle minimiza essas perdas significativamente.</li>
        <li><strong>Melhoria do fluxo de caixa:</strong> Quando você não tem excesso de estoque, seu capital circula melhor e pode ser investido em outras áreas do negócio.</li>
        <li><strong>Satisfação do cliente:</strong> Ter o produto disponível quando o cliente precisa é essencial para fidelizar e conquistar novos consumidores.</li>
        <li><strong>Tomada de decisão:</strong> Dados precisos sobre estoque permitem decisões mais inteligentes sobre compras, promoções e descontinuação de produtos.</li>
        <li><strong>Competitividade:</strong> Empresas com gestão de estoque eficiente conseguem oferecer preços mais competitivos sem prejudicar a margem de lucro.</li>
      </ul>

      <blockquote>
        <p>"O estoque não é apenas mercadoria guardada. É capital investido que precisa trabalhar para o seu negócio. Controlar bem o estoque é controlar a saúde financeira da sua empresa."</p>
      </blockquote>

      <h2>Princípios Básicos de Controle de Estoque</h2>
      <h3>1. Inventário Periódico</h3>
      <p>O <strong>inventário periódico</strong> consiste em realizar contagens físicas regulares do estoque para comparar com os registros do sistema. Esse processo permite identificar divergências como furtos, erros de cadastro e perdas não registradas. O ideal é que essa contagem seja feita mensalmente para produtos de maior valor e trimestralmente para itens de menor giro.</p>

      <h3>2. Método PEPS (Primeiro que Entra, Primeiro que Sai)</h3>
      <p>O método <strong>PEPS</strong>, também conhecido como FIFO (First In, First Out), é essencial para produtos com validade ou que sofrem desvalorização com o tempo. Nele, os produtos que chegam primeiro são os primeiros a serem vendidos. Isso é fundamental em segmentos como:</p>
      <ul>
        <li>Alimentos e bebidas</li>
        <li>Produtos farmacêuticos</li>
        <li>Cosméticos e higiene pessoal</li>
        <li>Produtos eletrônicos com atualizações frequentes</li>
      </ul>

      <h3>3. Classificação ABC</h3>
      <p>A <strong>classificação ABC</strong> é uma técnica que divide os produtos em três categorias baseadas no seu valor de consumo:</p>
      <ul>
        <li><strong>Classe A:</strong> Produtos que representam cerca de 80% do valor total do estoque, mas apenas 20% dos itens. Recebem controle mais rigoroso.</li>
        <li><strong>Classe B:</strong> Produtos intermediários, com 15% do valor e 30% dos itens. Recebem controle moderado.</li>
        <li><strong>Classe C:</strong> Produtos de menor valor, representando 5% do valor total com 50% dos itens. Controle mais simples.</li>
      </ul>

      <h2>Estratégias Práticas para Melhorar o Controle</h2>
      <h3>Implemente um Sistema de Gestão</h3>
      <p>A planilha Excel pode funcionar no início, mas à medida que o negócio cresce, a necessidade de um <strong>sistema de gestão de estoque</strong> se torna inevitável. Um sistema como o <strong>Controle de Estoque VendaPX</strong> oferece vantagens como:</p>
      <ul>
        <li>Registro automático de entradas e saídas</li>
        <li>Alertas de estoque baixo configuráveis</li>
        <li>Relatórios de giro de estoque e rentabilidade</li>
        <li>Rastreabilidade completa dos produtos</li>
        <li>Integração com o sistema financeiro e PDV</li>
      </ul>

      <h3>Defina Ponto de Pedido</h3>
      <p>O <strong>ponto de pedido</strong> é a quantidade mínima de um produto que, ao ser atingida, deve disparar uma nova compra. Para calculá-lo, considere:</p>
      <ul>
        <li>A demanda média diária ou semanal do produto</li>
        <li>O tempo de entrega do fornecedor</li>
        <li>A margem de segurança desejada</li>
      </ul>
      <p>Um exemplo prático: se um produto tem demanda de 10 unidades por dia, o fornecedor leva 5 dias para entregar e você quer 3 dias de segurança, o ponto de pedido seria: (10 × 5) + (10 × 3) = 80 unidades.</p>

      <h3>Realize Análise de Giro de Estoque</h3>
      <p>O <strong>giro de estoque</strong> indica quantas vezes o estoque é renovado em um período. Quanto maior o giro, mais eficiente é a gestão. Para calcular:</p>
      <p><strong>Giro de Estoque = Custo da Mercadoria Vendida / Estoque Médio</strong></p>
      <p>Produtos com giro alto devem ter estoque sempre disponível, enquanto produtos com giro baixo podem ser encomendados sob demanda para evitar capital parado.</p>

      <h2>Erros Comuns que Devem Ser Evitados</h2>
      <p>Muitos empresários cometem erros simples que comprometem todo o <strong>controle de estoque</strong>. Conheça os mais comuns e como evitá-los:</p>

      <ul>
        <li><strong>Falta de padronização:</strong> Use códigos de barras ou códigos únicos para cada produto. Evite cadastrar o mesmo item duas vezes com nomes diferentes.</li>
        <li><strong>Não fazer inventário físico:</strong> Acreditar que o estoque do sistema está sempre correto é um erro grave. Divergências sempre acontecem.</li>
        <li><strong>Estoque excessivo por medo:</strong> Ter "muita coisa guardada por precaução" imobiliza capital e aumenta custos de armazenamento.</li>
        <li><strong>Ignorar produtos parados:</strong> Produtos que não giram há mais de 90 dias precisam de atenção urgente. Considere promoções ou devoluções ao fornecedor.</li>
        <li><strong>Falta de treinamento:</strong> Toda a equipe que manuseia estoque precisa estar treinada nos procedimentos corretos de entrada, saída e armazenamento.</li>
      </ul>

      <h2>Como o VendaPX Pode Ajudar no Controle de Estoque</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> foi desenvolvido especificamente para atender às necessidades de pequenos e médios negócios brasileiros. Com ele, você tem acesso a:</p>
      <ul>
        <li><strong>Painel de controle intuitivo:</strong> Visualize em tempo real o status de todo o seu estoque.</li>
        <li><strong>Alertas automáticos:</strong> Receba notificações quando produtos atingirem o estoque mínimo.</li>
        <li><strong>Relatórios detalhados:</strong> Acesse dados sobre giro, rentabilidade e sazonalidade dos seus produtos.</li>
        <li><strong>Integração completa:</strong> O estoque se comunica automaticamente com o Sistema Financeiro e o PDV.</li>
        <li><strong>Custo acessível:</strong> Por apenas R$20/mês, você tem acesso a uma ferramenta profissional que antes só grandes empresas podiam ter.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Controlar estoque de forma eficiente não é uma tarefa difícil, mas exige <strong>disciplina, organização e as ferramentas certas</strong>. Comece implementando as práticas básicas que mencionamos e, conforme o negócio cresce, vá aprimorando suas estratégias. Lembre-se: cada produto no seu estoque representa dinheiro investido. Quanto melhor você gerenciar esse investimento, mais saudável será o seu negócio.</p>

      <p>Se você ainda não tem um sistema de controle de estoque, que tal experimentar o <strong>VendaPX</strong>? Com apenas R$20/mês, você ganha controle total sobre seus produtos e pode focar no que realmente importa: vender e crescer.</p>
    `},{slug:"curva-abc-como-aplicar-no-seu-negocio",title:"Curva ABC: Como Aplicar no Seu Negócio Praticamente",description:"Descubra como usar a curva ABC para classificar seus produtos, priorizar o que realmente importa e otimizar a gestão do estoque do seu negócio.",category:"estoque",date:"2025-01-25",readTime:9,keywords:["curva ABC","classificação de produtos","gestão de estoque","priorização de estoque","análise de estoque","classificação ABC","gestão de produtos","otimização de estoque"],content:`
      <h2>Curva ABC: Como Aplicar no Seu Negócio Praticamente</h2>
      <p>A <strong>curva ABC</strong> é uma das ferramentas mais poderosas e simples para gestão de estoque, amplamente utilizada por empresas de todos os portes. Desenvolvida a partir do Princípio de Pareto (80/20), essa técnica permite classificar seus produtos de acordo com sua importância para o negócio, focando os esforços de gestão onde realmente faz diferença.</p>

      <p>Se você sente que não dá para cuidar de tudo igualmente, ou se quer saber exatamente quais produtos merecem mais atenção, a <strong>curva ABC</strong> é a resposta. Neste artigo, vamos explicar como funciona, como calcular e como aplicar na prática no seu dia a dia.</p>

      <h2>O Que é a Curva ABC?</h2>
      <p>A <strong>curva ABC</strong> é um método de classificação que divide os itens de estoque em três categorias, baseado no princípio de que nem todos os produtos têm o mesmo impacto no resultado do negócio:</p>

      <ul>
        <li><strong>Classe A (Alto Impacto):</strong> Geralmente 20% dos itens que representam 80% do valor de consumo ou movimentação financeira. São os produtos mais importantes para o negócio.</li>
        <li><strong>Classe B (Médio Impacto):</strong> Cerca de 30% dos itens que representam 15% do valor. São produtos intermediários que precisam de atenção moderada.</li>
        <li><strong>Classe C (Baixo Impacto):</strong> Aproximadamente 50% dos itens que representam apenas 5% do valor. São os produtos de menor importância estratégica.</li>
      </ul>

      <p>Essa classificação não é baseada apenas em preço unitário, mas sim no <strong>valor total de consumo</strong> (preço unitário × quantidade consumida em um período). Isso significa que um produto barato, mas que é vendido em grande quantidade, pode pertencer à Classe A.</p>

      <h2>Como Calcular a Curva ABC</h2>
      <h3>Passo 1: Colete os Dados</h3>
      <p>Primeiro, você precisa ter os dados de <strong>consumo ou saída de estoque</strong> de todos os seus produtos em um período específico (geralmente 6 a 12 meses). Para cada produto, calcule:</p>
      <p><strong>Valor de Consumo = Preço Unitário × Quantidade Consumida no Período</strong></p>

      <h3>Passo 2: Ordene do Maior para o Menor</h3>
      <p>Organize todos os produtos em ordem decrescente de valor de consumo. Isso vai mostrar quais itens geram maior impacto financeiro no seu estoque.</p>

      <h3>Passo 3: Calcule o Percentual Acumulado</h3>
      <p>Para cada produto, calcule o percentual do valor total e vá acumulando. Os itens que somam até 80% do valor total são Classe A, de 80% a 95% são Classe B, e o restante é Classe C.</p>

      <h3>Passo 4: Classifique e Aja</h3>
      <p>Com a classificação pronta, defina estratégias diferenciadas para cada classe. Veja um exemplo prático:</p>

      <blockquote>
        <p><strong>Exemplo:</strong> Uma loja de materiais de escritório tem 500 produtos. A Classe A pode ter apenas 100 itens (20%), mas são responsáveis por 80% do faturamento do estoque. Esses 100 itens devem ter controle rigoroso, contagens frequentes e reposição automática.</p>
      </blockquote>

      <h2>Estratégias para Cada Classe</h2>
      <h3>Classe A — Controle Rigoroso</h3>
      <ul>
        <li><strong>Inventário frequente:</strong> Contagem física pelo menos mensal ou quinzenal.</li>
        <li><strong>Pedido mais frequentes:</strong> Compras menores e mais regulares para evitar capital parado.</li>
        <li><strong>Fornecedores confiáveis:</strong> Priorize fornecedores com prazo de entrega curto e confiável.</li>
        <li><strong>Monitoramento constante:</strong> Acompanhe vendas, tendências e sazonalidade semanalmente.</li>
        <li><strong>Segurança:</strong> Considere manter uma margem de segurança maior para não perder vendas.</li>
      </ul>

      <h3>Classe B — Controle Moderado</h3>
      <ul>
        <li><strong>Inventário mensal ou bimestral:</strong> Contagem menos frequente que a Classe A.</li>
        <li><strong>Pedidos regulares:</strong> Compras com frequência intermediária.</li>
        <li><strong>Revisão trimestral:</strong> Analise se algum produto deve subir ou descer de classe.</li>
        <li><strong>Equilíbrio:</strong> Mantenha estoque suficiente sem exagero.</li>
      </ul>

      <h3>Classe C — Controle Simplificado</h3>
      <ul>
        <li><strong>Inventário semestral ou anual:</strong> Contagem menos frequente, pois o impacto financeiro é baixo.</li>
        <li><strong>Compra sob demanda:</strong> Quando possível, compre apenas quando o cliente encomendar.</li>
        <li><strong>Consolide fornecedores:</strong> Agrupe pedidos de itens Classe C para reduzir custos de frete.</li>
        <li><strong>Reavalie periodicamente:</strong> Alguns produtos Classe C podem estar obsoletos e devem ser descontinuados.</li>
      </ul>

      <h2>Benefícios da Curva ABC para Pequenos Negócios</h2>
      <p>Para <strong>pequenos e médios negócios</strong>, a curva ABC é especialmente valiosa porque:</p>

      <ul>
        <li><strong>Capital limitado:</strong> Com pouco dinheiro para investir em estoque, é crucial saber onde aplicar cada real.</li>
        <li><strong>Tempo limitado:</strong> O empresário não pode dedicar o mesmo tempo a todos os 500 produtos. A curva ABC diz onde focar.</li>
        <li><strong>Redução de desperdício:</strong> Ao priorizar o controle dos itens mais importantes, você reduz perdas significativas.</li>
        <li><strong>Melhor relacionamento com fornecedores:</strong> Ao saber exatamente o que precisa, você negocia melhores prazos e preços.</li>
      </ul>

      <h2>Como Implementar a Curva ABC com o VendaPX</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> facilita enormemente a aplicação da curva ABC no seu negócio. Com o sistema, você pode:</p>
      <ul>
        <li><strong>Gerar relatórios de consumo:</strong> Extraia dados precisos de saída de estoque por período.</li>
        <li><strong>Visualizar classificação:</strong> O sistema pode ajudar a identificar automaticamente os produtos de maior impacto.</li>
        <li><strong>Configurar alertas diferenciados:</strong> Produtos Classe A podem ter alertas mais frequentes.</li>
        <li><strong>Análise de rentabilidade:</strong> Cruze dados de estoque com o Sistema Financeiro para uma visão completa.</li>
      </ul>

      <p>Por apenas <strong>R$20/mês</strong>, você terá uma ferramenta que muitas grandes empresas pagam fortunas para ter. A curva ABC, quando bem aplicada, pode reduzir em até 30% os custos com estoque e aumentar significativamente a disponibilidade dos produtos mais importantes.</p>

      <h2>Erros Comuns ao Aplicar a Curva ABC</h2>
      <ul>
        <li><strong>Classificar apenas pelo preço unitário:</strong> Um produto barato pode gerar alto consumo total. Sempre analise o valor total.</li>
        <li><strong>Não atualizar periodicamente:</strong> A curva ABC precisa ser recalculada a cada trimestre ou semestre, pois o comportamento de vendas muda.</li>
        <li><strong>Ignorar a Classe C completamente:</strong> Embora tenha menor impacto, a Classe C não pode ser abandonada — clientes compram produtos de todas as classes.</li>
        <li><strong>Não integrar com vendas:</strong> A curva ABC deve ser cruzada com dados de vendas e previsão de demanda para ser realmente eficaz.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>curva ABC</strong> é uma ferramenta simples, mas extremamente eficaz para otimizar a gestão de estoque. Ao classificar seus produtos por impacto, você consegue direcionar esforços, tempo e capital onde realmente faz diferença. Comece a aplicar essa técnica hoje mesmo e observe uma transformação na eficiência do seu negócio.</p>
    `},{slug:"gestao-de-multiplos-depositos",title:"Gestão de Múltiplos Depósitos: Organize Suas Filiais",description:"Saiba como gerenciar estoque em múltiplos depósitos e filiais de forma integrada, evitando perdas e otimizando a distribuição dos seus produtos.",category:"estoque",date:"2025-02-08",readTime:10,keywords:["gestão de depósitos","múltiplos depósitos","filiais","estoque integrado","transferência entre depósitos","controle de filiais","gestão de armazéns","distribuição de estoque"],content:`
      <h2>Gestão de Múltiplos Depósitos: Organize Suas Filiais</h2>
      <p>Gerenciar <strong>estoque em múltiplos depósitos</strong> é um dos maiores desafios para empresas que crescem e abrem novas filiais ou pontos de venda. O que antes era simples com um único estoque, agora se torna complexo: cada local tem suas necessidades, sua demanda e seus problemas. Sem uma gestão integrada, é comum ter excesso em um depósito e falta em outro, gerando prejuízo e insatisfação do cliente.</p>

      <p>Neste artigo, vamos apresentar estratégias e boas práticas para gerenciar múltiplos depósitos de forma eficiente, garantindo que cada local tenha o estoque certo, na quantidade certa, no momento certo.</p>

      <h2>Desafios da Gestão com Múltiplos Depósitos</h2>
      <p>Antes de resolver, é importante entender os principais <strong>desafios</strong> que essa configuração apresenta:</p>

      <ul>
        <li><strong>Falta de visão consolidada:</strong> Sem uma ferramenta integrada, é difícil saber o estoque total da empresa em tempo real.</li>
        <li><strong>Transferências inadequadas:</strong> Mover produtos entre depósitos sem planejamento gera custos de frete e tempo perdido.</li>
        <li><strong>Divergências de inventário:</strong> Cada depósito pode ter suas próprias contagens, dificultando a identificação de perdas.</li>
        <li><strong>Dificuldade na reposição:</strong> Sem dados centralizados, é complicado decidir de qual depósito repor um produto.</li>
        <li><strong>Falta de padronização:</strong> Cada filial pode usar processos diferentes, gerando inconsistências.</li>
      </ul>

      <h2>Estratégias para Gestão Eficiente</h2>
      <h3>1. Centralize as Informações</h3>
      <p>O primeiro passo é ter um <strong>sistema centralizado</strong> que permita visualizar o estoque de todos os depósitos em um único lugar. Isso elimina a necessidade de planilhas separadas e reduz erros de digitação. Com um sistema como o <strong>Controle de Estoque VendaPX</strong>, você pode acessar em tempo real a situação do estoque em cada local, de qualquer dispositivo com acesso à internet.</p>

      <h3>2. Padronize Processos</h3>
      <p>Todos os depósitos devem seguir os <strong>mesmos procedimentos</strong> de entrada, saída, armazenamento e inventário. Isso inclui:</p>
      <ul>
        <li>Utilizar os mesmos códigos de produto em todos os locais</li>
        <li>Seguir o mesmo método de avaliação de estoque (PEPS, Custo Médio, etc.)</li>
        <li>Realizar inventário físico na mesma periodicidade</li>
        <li>Usar as mesmas ferramentas e formulários</li>
      </ul>

      <h3>3. Implemente Transferências Planejadas</h3>
      <p>Transferir produtos entre depósitos deve ser uma decisão <strong>planejada, não reativa</strong>. Para isso:</p>
      <ul>
        <li>Analise a demanda de cada local antes de decidir a transferência</li>
        <li>Calcule o custo do frete e compare com o benefício</li>
        <li>Registre todas as transferências no sistema para manter rastreabilidade</li>
        <li>Considere a sazonalidade e promoções em cada filial</li>
      </ul>

      <blockquote>
        <p><strong>Dica:</strong> Antes de transferir um produto, verifique se outro depósito tem estoque disponível para atender a demanda. Isso evita movimentações desnecessárias.</p>
      </blockquote>

      <h3>4. Defina Estoque Mínimo por Depósito</h3>
      <p>Cada depósito deve ter seus próprios <strong>níveis mínimos e máximos</strong> de estoque, baseados na sua demanda específica. Um produto pode ter estoque mínimo de 50 unidades na filial A e apenas 10 na filial B, dependendo do volume de vendas de cada local.</p>

      <h2>Vantagens da Gestão Integrada</h2>
      <p>Quando a gestão de múltiplos depósitos é feita de forma integrada, os benefícios são significativos:</p>

      <ul>
        <li><strong>Visão 360°:</strong> Saiba exatamente quanto estoque você tem em toda a empresa, sem surpresas.</li>
        <li><strong>Redução de custos:</strong> Menos transferências desnecessárias e menor necessidade de estoque de segurança em cada local.</li>
        <li><strong>Melhor atendimento:</strong> Quando um depósito fica sem estoque, você pode rapidamente direcionar o cliente para outro local ou transferir o produto.</li>
        <li><strong>Decisões baseadas em dados:</strong> Relatórios consolidados permitem análises de performance por depósito e identificação de oportunidades.</li>
        <li><strong>Controle de perdas:</strong> Com inventário integrado, é mais fácil identificar onde estão ocorrendo perdas e tomar providências.</li>
      </ul>

      <h2>Como o VendaPX Facilita a Gestão de Múltiplos Depósitos</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> foi projetado para atender empresas com um ou múltiplos depósitos. Com ele, você pode:</p>
      <ul>
        <li><strong>Cadastrar vários depósitos:</strong> Crie depósitos virtuais para cada filial, almoxarifado ou ponto de venda.</li>
        <li><strong>Transferências integradas:</strong> Registre transferências entre depósitos com registro automático em todos os envolvidos.</li>
        <li><strong>Relatórios por depósito:</strong> Acesse relatórios consolidados ou filtrados por local específico.</li>
        <li><strong>Alertas personalizados:</strong> Configure alertas de estoque baixo diferentes para cada depósito.</li>
        <li><strong>Integração com PDV e Financeiro:</strong> As saídas do PDV atualizam o estoque do depósito correto automaticamente.</li>
      </ul>

      <h2>Casos de Uso Práticos</h2>
      <h3>Loja com Filiais</h3>
      <p>Uma rede de lojas com 3 filiais pode usar o VendaPX para monitorar o estoque de cada uma. Quando a filial A fica sem um produto que a filial B tem em excesso, uma transferência simples resolve o problema sem precisar comprar do fornecedor.</p>

      <h3>Depósito Central + PDV</h3>
      <p>Uma empresa que tem um depósito central e vários pontos de venda pode usar o sistema para controlar o estoque no depósito e nos PDVs separadamente. As saídas do PDV são registradas automaticamente e o estoque do depósito é atualizado quando ocorrem reposições.</p>

      <h2>Conclusão</h2>
      <p>A <strong>gestão de múltiplos depósitos</strong> não precisa ser um pesadelo. Com processos padronizados, dados centralizados e a ferramenta certa, você pode ter controle total sobre o estoque da sua empresa, independentemente do número de locais. Comece hoje a organizar seus depósitos e veja a diferença nos resultados.</p>
    `},{slug:"alertas-de-estoque-baixo-configuracao",title:"Alertas de Estoque Baixo: Como Configurar e Usar",description:"Aprenda a configurar alertas de estoque baixo para nunca mais ficar sem produto disponível e evitar perdas de vendas no seu negócio.",category:"estoque",date:"2025-02-22",readTime:7,keywords:["alerta de estoque baixo","estoque mínimo","notificação de estoque","reposição automática","controle de estoque","alertas automáticos","estoque mínimo configurável","gestão de compras"],content:`
      <h2>Alertas de Estoque Baixo: Como Configurar e Usar</h2>
      <p>Ficar com <strong>estoque baixo</strong> de um produto que gera vendas constantes é um dos piores cenários para qualquer negócio. É dinheiro que deixa de entrar, cliente que fica frustrado e imagem que pode ser comprometida. A boa notícia é que com <strong>alertas de estoque baixo</strong> configurados corretamente, você pode evitar completamente essa situação.</p>

      <p>Neste artigo, vamos mostrar como configurar alertas inteligentes que avisa no momento certo para fazer a reposição, sem excesso e sem falta.</p>

      <h2>O Que São Alertas de Estoque Baixo?</h2>
      <p>Um <strong>alerta de estoque baixo</strong> é uma notificação automática que é disparada quando a quantidade de um produto atinge um nível pré-definido. Esse nível é chamado de <strong>estoque mínimo</strong> e serve como sinal para que uma nova compra seja feita.</p>

      <p>Na prática, funciona assim:</p>
      <ul>
        <li>Você configura o estoque mínimo de cada produto (ex: 20 unidades)</li>
        <li>Quando o estoque atinge 20 unidades ou menos, o sistema emite um alerta</li>
        <li>Você recebe a notificação por e-mail, WhatsApp ou dentro do próprio sistema</li>
        <li>Com base no alerta, você realiza a compra necessária antes que o estoque acabe</li>
      </ul>

      <h2>Como Definir o Estoque Mínimo Ideal</h2>
      <p>Definir o <strong>estoque mínimo</strong> não é chute. É um cálculo baseado em dados reais. Veja como fazer:</p>

      <h3>Fórmula Básica</h3>
      <p><strong>Estoque Mínimo = (Demanda Média Diária × Tempo de Entrega do Fornecedor) + Margem de Segurança</strong></p>

      <p>Exemplo prático:</p>
      <ul>
        <li>Demanda média: 5 unidades/dia</li>
        <li>Tempo de entrega: 7 dias</li>
        <li>Margem de segurança: 10 unidades</li>
        <li><strong>Estoque mínimo = (5 × 7) + 10 = 45 unidades</strong></li>
      </ul>

      <h3>Considerações Importantes</h3>
      <ul>
        <li><strong>Sazonalidade:</strong> Aumente o estoque mínimo em períodos de alta demanda (Natal, Dia das Mães, etc.)</li>
        <li><strong>Fornecedores:</strong> Se o fornecedor é pouco confiável, aumente a margem de segurança</li>
        <li><strong>Lead time:</strong> Considere o tempo real de entrega, não o prometido</li>
        <li><strong>Produto estratégico:</strong> Para produtos que não podem faltar, mantenha margem de segurança maior</li>
      </ul>

      <h2>Tipos de Alertas</h2>
      <h3>Alerta por Quantidade</h3>
      <p>É o tipo mais comum. O alerta dispara quando a <strong>quantidade em estoque</strong> atinge o mínimo definido. É simples e eficaz para a maioria dos negócios.</p>

      <h3>Alerta por Período</h3>
      <p>Considera o <strong>tempo de reposição</strong>. Se um produto demora 30 dias para chegar, o alerta dispara 30 dias antes de o estoque acabar, baseado na velocidade de saída.</p>

      <h3>Alerta por Valor</h3>
      <p>Dispara quando o <strong>valor monetário</strong> do estoque de um produto atinge um limite. Útil para itens de alto valor unitário.</p>

      <blockquote>
        <p><strong>Dica VendaPX:</strong> No Controle de Estoque VendaPX, você pode configurar diferentes tipos de alerta para cada produto, personalizando completamente a notificação de acordo com a necessidade do seu negócio.</p>
      </blockquote>

      <h2>Erros Comuns ao Configurar Alertas</h2>
      <ul>
        <li><strong>Estoque mínimo muito baixo:</strong> Se o estoque mínimo é 5 unidades e a demanda é de 3/dia, você só tem menos de 2 dias para repor. Isso é arriscado.</li>
        <li><strong>Estoque mínimo muito alto:</strong> Configurar estoque mínimo muito acima do necessário imobiliza capital desnecessariamente.</li>
        <li><strong>Não atualizar periodicamente:</strong> A demanda muda ao longo do tempo. Reavalie os estoques mínimos trimestralmente.</li>
        <li><strong>Ignorar os alertas:</strong> Configurar alertas e não agir é inútil. Defina responsáveis e processos para cada notificação.</li>
        <li><strong>Não considerar promoções:</strong> Se você vai fazer uma promoção, aumente o estoque mínimo temporariamente para não acabar no meio da campanha.</li>
      </ul>

      <h2>Como Automatizar com o VendaPX</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> oferece um sistema completo de alertas que se adapta ao seu negócio:</p>

      <ul>
        <li><strong>Configuração por produto:</strong> Defina estoque mínimo diferente para cada item do seu catálogo.</li>
        <li><strong>Notificações automáticas:</strong> Receba alertas por e-mail ou diretamente no painel do sistema.</li>
        <li><strong>Relatório de reposição:</strong> Gere automaticamente a lista de produtos que precisam ser comprados.</li>
        <li><strong>Integração com compras:</strong> Os alertas podem alimentar diretamente o módulo de compras, agilizando todo o processo.</li>
        <li><strong>Histórico de alertas:</strong> Acompanhe quais produtos disparam mais alertas e ajuste conforme necessário.</li>
      </ul>

      <h2>Bônus: Lista de Compras Automática</h2>
      <p>Uma das funcionalidades mais úteis é a <strong>geração automática da lista de compras</strong> baseada nos alertas. Quando o estoque de vários produtos atinge o mínimo, o sistema pode gerar um relatório consolidado com:</p>
      <ul>
        <li>Nome do produto</li>
        <li>Quantidade atual em estoque</li>
        <li>Quantidade a ser comprada (para atingir o estoque ideal)</li>
        <li>Fornecedor do produto</li>
        <li>Valor estimado da compra</li>
      </ul>

      <p>Isso economiza horas de trabalho e evita esquecimentos que poderiam causar falta de estoque.</p>

      <h2>Conclusão</h2>
      <p>Configurar <strong>alertas de estoque baixo</strong> é uma das ações mais simples e eficazes que você pode tomar para melhorar a gestão do seu negócio. Com dados precisos e o sistema certo, você nunca mais vai perder vendas por falta de estoque. Comece a configurar seus alertas hoje e tenha a tranquilidade de saber que seu estoque está sempre no nível ideal.</p>
    `},{slug:"entrada-de-estoque-via-xml-nfe",title:"Entrada de Estoque via XML da NF-e: Guia Completo",description:"Saiba como realizar a entrada de estoque automaticamente a partir do XML da Nota Fiscal Eletrônica, agilizando processos e evitando erros.",category:"estoque",date:"2025-03-08",readTime:9,keywords:["entrada de estoque","XML NF-e","nota fiscal eletrônica","automatização de entrada","gestão de notas fiscais","cadastro de produtos","recebimento de mercadoria","estoque automático"],content:`
      <h2>Entrada de Estoque via XML da NF-e: Guia Completo</h2>
      <p>A <strong>entrada de estoque</strong> é um dos processos mais críticos na gestão de um negócio. Cada produto que chega ao depósito precisa ser corretamente registrado, com os dados certos, preços corretos e quantidades exatas. Ainda hoje, muitas empresas fazem isso de forma manual, digitando item por item, o que gera erros, demora e retrabalho.</p>

      <p>A boa notícia é que com o <strong>XML da Nota Fiscal Eletrônica (NF-e)</strong>, é possível automatizar toda a entrada de estoque, garantindo precisão e agilidade. Neste guia, vamos mostrar como fazer isso na prática.</p>

      <h2>O Que é o XML da NF-e?</h2>
      <p>O <strong>XML da NF-e</strong> é o arquivo eletrônico que contém todas as informações de uma nota fiscal. Ele é gerado pelo emitente (fornecedor) e enviado eletronicamente para a SEFAZ (Secretaria da Fazenda). Esse arquivo contém dados como:</p>

      <ul>
        <li><strong>Dados do emitente:</strong> CNPJ, razão social, endereço</li>
        <li><strong>Dados do destinatário:</strong> CNPJ/CPF, razão social, endereço</li>
        <li><strong>Produtos:</strong> Código, descrição, NCM, quantidade, valor unitário, valor total</li>
        <li><strong>Tributos:</strong> ICMS, IPI, PIS, COFINS e outros impostos incidentes</li>
        <li><strong>Valores:</strong> Base de cálculo, valor do frete, valor do seguro, descontos</li>
        <li><strong>Dados de transporte:</strong> Transportadora, peso, volume</li>
      </ul>

      <h2>Por Que Usar o XML para Entrada de Estoque?</h2>
      <p>A utilização do XML para entrada de estoque oferece <strong>vantagens significativas</strong> em comparação com o método manual:</p>

      <ul>
        <li><strong>Precisão:</strong> Elimina erros de digitação. Os dados vêm diretamente da nota fiscal, garantindo exatidão.</li>
        <li><strong>Velocidade:</strong> Uma nota fiscal com 50 itens pode ser processada em segundos, quando antes levava minutos ou horas.</li>
        <li><strong>Conformidade fiscal:</strong> Os dados tributários são importados corretamente, evitando problemas com a Receita Federal.</li>
        <li><strong>Rastreabilidade:</strong> Cada entrada fica vinculada ao XML original, facilitando auditorias e consulta futura.</li>
        <li><strong>Redução de custos:</strong> Menos mão de obra dedicada ao lançamento de notas permite focar em atividades mais estratégicas.</li>
      </ul>

      <h2>Passo a Passo: Como Importar o XML</h2>
      <h3>Passo 1: Obtenha o XML</h3>
      <p>O XML pode ser obtido de diversas formas:</p>
      <ul>
        <li>Baixar do portal da SEFAZ usando a chave de acesso</li>
        <li>Receber por e-mail do fornecedor</li>
        <li>Baixar diretamente do sistema do fornecedor</li>
        <li>Importar do e-mail da empresa (se o sistema tiver integração)</li>
      </ul>

      <h3>Passo 2: Importe no Sistema</h3>
      <p>No <strong>Controle de Estoque VendaPX</strong>, o processo é simples:</p>
      <ul>
        <li>Acesse o módulo de entradas de estoque</li>
        <li>Clique em "Importar NF-e"</li>
        <li>Selecione o arquivo XML ou cole a chave de acesso</li>
        <li>O sistema automaticamente lerá todos os dados da nota</li>
        <li>Confira os itens, quantidades e valores exibidos</li>
        <li>Confirme a importação</li>
      </ul>

      <h3>Passo 3: Valide as Informações</h3>
      <p>Embora o processo seja automático, é fundamental <strong>conferir</strong> algumas informações antes de confirmar:</p>
      <ul>
        <li>As quantidades conferem com o que foi recebido fisicamente?</li>
        <li>Os preços estão corretos conforme combinado com o fornecedor?</li>
        <li>Todos os produtos já estão cadastrados no sistema?</li>
        <li>Os códigos de barras estão corretos?</li>
      </ul>

      <blockquote>
        <p><strong>Importante:</strong> Sempre faça a conferência física da mercadoria antes de confirmar a entrada no sistema. O XML pode estar correto, mas o que foi entregue pode divergir (itens trocados, faltando, etc.).</p>
      </blockquote>

      <h2>Produtos Novos: Cadastro Automático</h2>
      <p>Uma das grandes vantagens de importar o XML é a possibilidade de <strong>criar automaticamente</strong> cadastros de produtos novos. Quando um item da nota fiscal não existe no sistema, o VendaPX pode:</p>

      <ul>
        <li>Cadastrar o produto com os dados do XML (descrição, NCM, unidade)</li>
        <li>Sugerir o código de barras a partir do XML</li>
        <li>Definir o preço de custo com base no valor unitário da nota</li>
        <li>Solicitar apenas informações complementares (categoria, local de armazenamento)</li>
      </ul>

      <h2>Erros Comuns e Como Evitá-los</h2>
      <ul>
        <li><strong>XML corrompido:</strong> Se o arquivo não for lido, baixe novamente do portal da SEFAZ.</li>
        <li><strong>Produto sem cadastro:</strong> Cadastre o produto antes de importar, ou deixe o sistema cadastrar automaticamente.</li>
        <li><strong>CFOP incorreto:</strong> Verifique se o CFOP da nota é de entrada (1xxx para compras estaduais, 2xxx para interestaduais).</li>
        <li><strong>Divergência de valores:</strong> Se o valor do XML não confere com a nota fiscal impressa, entre em contato com o fornecedor.</li>
        <li><strong>Duplicidade:</strong> Nunca importe o mesmo XML duas vezes. O sistema deve prevenir isso, mas fique atento.</li>
      </ul>

      <h2>Vantagens da Integração com o Sistema Financeiro</h2>
      <p>Quando o estoque está integrado ao <strong>Sistema Financeiro VendaPX</strong>, a importação do XML pode automaticamente:</p>
      <ul>
        <li>Gerar o registro da conta a pagar ao fornecedor</li>
        <li>Atualizar o fluxo de caixa com a previsão de pagamento</li>
        <li>Registrar os custos com impostos para cálculo de rentabilidade</li>
        <li>Alimentar o DRE (Demonstração do Resultado do Exercício) com os custos de mercadoria</li>
      </ul>

      <p>Essa integração elimina retrabalho e garante que os dados financeiros estejam sempre alinhados com a realidade do estoque.</p>

      <h2>Conclusão</h2>
      <p>Importar a <strong>entrada de estoque via XML da NF-e</strong> é uma prática que todo negócio deveria adotar. É mais rápido, mais preciso e mais seguro do que o método manual. Com o <strong>Controle de Estoque VendaPX</strong>, esse processo é ainda mais simples e está disponível por apenas R$20/mês. Comece a automatizar suas entradas de estoque e economize tempo e dinheiro.</p>
    `},{slug:"inventario-fisico-como-realizar",title:"Inventário Físico: Como Realizar sem Dor de Cabeça",description:"Aprenda a realizar o inventário físico do seu estoque de forma organizada, identificando divergências e garantindo a acuracidade dos seus dados.",category:"estoque",date:"2025-03-22",readTime:8,keywords:["inventário físico","contagem de estoque","conferência de estoque","acuracidade de estoque","divergência de estoque","contagem cíclica","gestão de estoque","fisico de estoque"],content:`
      <h2>Inventário Físico: Como Realizar sem Dor de Cabeça</h2>
      <p>O <strong>inventário físico</strong> é o processo de contagem e conferência de todos os produtos existentes fisicamente no depósito, comparando com os registros do sistema. É a única forma de garantir que os dados do seu estoque estejam corretos. Sem ele, você está apenas adivinhando quanto estoque tem.</p>

      <p>Muitos empresários evitam fazer o inventário porque acham trabalhoso, demorado ou desnecessário. Mas a verdade é que o inventário é <strong>indispensável</strong> para identificar perdas, furtos, erros de cadastro e desperdícios. Neste guia, você vai aprender a realizar o inventário de forma organizada e eficiente.</p>

      <h2>Tipos de Inventário</h2>
      <h3>1. Inventário Anual (Geral)</h3>
      <p>É a contagem de <strong>todos os itens</strong> do estoque em um único período. Geralmente é feito no final do ano fiscal para fins contábeis. É o mais completo, mas também o mais trabalhoso e que causa mais interrupção nas operações.</p>

      <h3>2. Inventário Rotativo (Contagem Cíclica)</h3>
      <p>Nesse método, a contagem é feita <strong>de forma contínua</strong>, ao longo do tempo. Em vez de parar tudo para contar, você seleciona grupos de produtos periodicamente (semanalmente, por exemplo) e vai contando ao longo do mês. As principais vantagens são:</p>
      <ul>
        <li>Não interrompe as operações do negócio</li>
        <li>Permite identificar problemas mais cedo</li>
        <li>Reduz a sobrecarga de trabalho em um único período</li>
        <li>Aumenta a acuracidade ao longo do tempo</li>
      </ul>

      <h3>3. Inventário por Amostragem</h3>
      <p>Utilizado quando se tem um estoque muito grande e não é possível contar tudo. Seleciona-se uma <strong>amostra representativa</strong> de produtos e, com base nos resultados, estima-se a situação do estoque como um todo.</p>

      <h2>Passo a Passo para Realizar o Inventário</h2>
      <h3>1. Planejamento</h3>
      <p>Antes de começar, é essencial planejar:</p>
      <ul>
        <li>Defina a data e horário da contagem (preferencialmente em período de menor movimentação)</li>
        <li>Organize a equipe de contagem e defina responsáveis por áreas</li>
        <li>Prepare os materiais necessários (tablets, planilhas, etiquetas, canetas)</li>
        <li>Comunique aos fornecedores que não haverá recebimentos durante a contagem</li>
        <li>Bloqueie entradas e saídas no sistema durante o período de contagem</li>
      </ul>

      <h3>2. Preparação do Depósito</h3>
      <ul>
        <li>Organize os produtos por localização (estante, prateleira, gaveta)</li>
        <li>Verifique se todos os produtos estão devidamente identificados</li>
        <li>Isole produtos danificados, devoluções ou aguardando conferência</li>
        <li>Garanta boa iluminação em todas as áreas de armazenamento</li>
      </ul>

      <h3>3. Contagem</h3>
      <ul>
        <li>Cada equipe deve contar uma área específica, sem sobrepor</li>
        <li>Use código de barras sempre que possível para agilizar</li>
        <li>Registre a contagem imediatamente no formulário ou sistema</li>
        <li>Se houver dúvida, conte novamente antes de registrar</li>
        <li>Marque os itens já contados para evitar repetição ou esquecimento</li>
      </ul>

      <h3>4. Conferência e Ajustes</h3>
      <p>Após a contagem, compare os resultados com o estoque registrado no sistema:</p>
      <ul>
        <li><strong>Sobra:</strong> Produto encontrado fisicamente mas não registrado. Verifique se houve entrada não lançada.</li>
        <li><strong>Falta:</strong> Produto registrado mas não encontrado. Verifique saídas não registradas, furtos ou avarias.</li>
        <li><strong>Divergência de quantidade:</strong> Ajuste o estoque no sistema com base na contagem física.</li>
      </ul>

      <blockquote>
        <p><strong>Dica:</strong> Todas as divergências devem ser documentadas com justificativa. Isso é importante para auditorias futuras e para identificar padrões de perda.</p>
      </blockquote>

      <h2>Erros Comuns no Inventário</h2>
      <ul>
        <li><strong>Contar sem preparar:</strong> O depósito desorganizado leva a erros de contagem e muito retrabalho.</li>
        <li><strong>Não bloquear movimentações:</strong> Se produtos estão sendo retirados durante a contagem, os números nunca vão bater.</li>
        <li><strong>Uma única pessoa contando tudo:</strong> O cansaço leva a erros. Divida o trabalho entre várias pessoas.</li>
        <li><strong>Não documentar divergências:</strong> Sem justificativa, é impossível saber a causa real dos problemas.</li>
        <li><strong>Fazer inventário apenas uma vez por ano:</strong> Problemas acumulados durante 12 meses podem ser enormes. Prefira inventários rotativos.</li>
      </ul>

      <h2>Melhorando a Acuracidade</h2>
      <p><strong>Acuracidade de estoque</strong> é a porcentagem de itens cuja contagem física confere com o registro do sistema. O ideal é manter acuracidade acima de 95%. Para isso:</p>

      <ul>
        <li>Implemente contagens cíclicas regulares</li>
        <li>Treine toda a equipe sobre procedimentos de entrada e saída</li>
        <li>Use o código de barras para registrar movimentações</li>
        <li>Realize inventário surpresa em itens de alto valor</li>
        <li>Acompanhe indicadores de perdas mensalmente</li>
      </ul>

      <h2>Como o VendaPX Auxilia no Inventário</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> facilita todo o processo de inventário:</p>
      <ul>
        <li><strong>Leitura por código de barras:</strong> Acelere a contagem usando o leitor integrado</li>
        <li><strong>Comparação automática:</strong> O sistema compara a contagem física com o estoque registrado e lista automaticamente as divergências</li>
        <li><strong>Ajuste rápido:</strong> Com um clique, ajuste o estoque com base na contagem</li>
        <li><strong>Histórico de inventários:</strong> Mantenha registro de todas as contagens para auditoria</li>
        <li><strong>Relatórios de divergência:</strong> Identifique os produtos com mais problemas e tome providências</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O <strong>inventário físico</strong> é um processo necessário e que traz benefícios concretos para o negócio. Com planejamento adequado e ferramentas como o <strong>VendaPX</strong>, o processo se torna ágil, preciso e menos trabalhoso. Não espere o final do ano para contar seus produtos. Comece a implementar inventários regulares hoje mesmo.</p>
    `},{slug:"estoque-minimo-vs-estoque-seguranca",title:"Estoque Mínimo vs Estoque de Segurança: Qual a Diferença?",description:"Entenda a diferença entre estoque mínimo e estoque de segurança, como calcular cada um e quando usar essa estratégia no seu negócio.",category:"estoque",date:"2025-04-05",readTime:7,keywords:["estoque mínimo","estoque de segurança","diferença estoque mínimo segurança","gestão de estoque","nível de estoque","cálculo de estoque","ponto de pedido","planejamento de compras"],content:`
      <h2>Estoque Mínimo vs Estoque de Segurança: Qual a Diferença?</h2>
      <p>Quando falamos em <strong>gestão de estoque</strong>, dois termos surgem constantemente: <strong>estoque mínimo</strong> e <strong>estoque de segurança</strong>. Muitos empresários confundem os dois, mas eles têm funções e cálculos diferentes. Entender essa diferença é essencial para tomar decisões de compra mais inteligentes e evitar tanto a falta quanto o excesso de produtos.</p>

      <p>Neste artigo, vamos esclarecer cada conceito, mostrar como calcular e explicar quando usar cada uma das estratégias.</p>

      <h2>O Que é Estoque Mínimo?</h2>
      <p>O <strong>estoque mínimo</strong> é a quantidade menor de um produto que deve estar disponível no depósito antes que uma nova compra seja feita. Ele funciona como um <strong>gatilho de reposição</strong>: quando o estoque atinge esse nível, é hora de pedir mais ao fornecedor.</p>

      <h3>Como Calcular</h3>
      <p>A fórmula mais utilizada é:</p>
      <p><strong>Estoque Mínimo = (Demanda Média Diária × Lead Time do Fornecedor)</strong></p>
      <p>Onde:</p>
      <ul>
        <li><strong>Demanda Média Diária:</strong> Quantidade média vendida ou consumida por dia</li>
        <li><strong>Lead Time:</strong> Tempo em dias entre o pedido e a entrega do fornecedor</li>
      </ul>

      <p>Exemplo: Se você vende 10 unidades por dia e o fornecedor entrega em 5 dias:</p>
      <p><strong>Estoque Mínimo = 10 × 5 = 50 unidades</strong></p>

      <h2>O Que é Estoque de Segurança?</h2>
      <p>O <strong>estoque de segurança</strong> é uma quantidade extra de produto mantida como <strong>colchão de proteção</strong> contra imprevistos. Ele não deve ser confundido com o estoque mínimo. Enquanto o estoque mínimo indica quando comprar, o estoque de segurança protege contra:</p>

      <ul>
        <li><strong>Aumento repentino da demanda:</strong> Uma promoção que vendeu mais que o esperado</li>
        <li><strong>Atraso na entrega do fornecedor:</strong> O fornecedor prometeu 5 dias e entregou em 10</li>
        <li><strong>Problemas de qualidade:</strong> Um lote veio com defeito e precisou ser devolvido</li>
        <li><strong>Greves ou intempéries:</strong> Situações fora do controle que interrompem o fornecimento</li>
      </ul>

      <h3>Como Calcular</h3>
      <p>Existem várias fórmulas, mas a mais simples é:</p>
      <p><strong>Estoque de Segurança = (Maior Demanda Diária × Maior Lead Time) − (Demanda Média × Lead Time Médio)</strong></p>
      <p>Uma abordagem mais prática para pequenos negócios é simplesmente manter uma <strong>margem de 20% a 30%</strong> sobre o estoque mínimo.</p>

      <h2>Diferença Prática</h2>
      <p>Para facilitar o entendimento, veja a diferença lado a lado:</p>

      <blockquote>
        <p><strong>Estoque Mínimo:</strong> "Quando chegar em 50 unidades, faça um novo pedido."<br/>
        <strong>Estoque de Segurança:</strong> "Mesmo tendo 50 unidades para pedido, mantenha sempre 15 extras para imprevistos."</p>
      </blockquote>

      <p>Na prática, o <strong>ponto de pedido</strong> (quando você deve comprar) é:</p>
      <p><strong>Ponto de Pedido = Estoque Mínimo + Estoque de Segurança</strong></p>
      <p>No exemplo acima: 50 + 15 = 65 unidades. Quando o estoque chegar a 65 unidades, é hora de comprar.</p>

      <h2>Quando Usar Cada Estratégia</h2>
      <h3>Use Estoque Mínimo Quando:</h3>
      <ul>
        <li>O fornecedor é <strong>confiável e com prazo previsível</strong></li>
        <li>A demanda do produto é <strong>estável e previsível</strong></li>
        <li>O produto não é <strong>crítico</strong> para o negócio (se faltar 1 dia, não é problema grave)</li>
        <li>O custo de armazenamento é <strong>elevado</strong></li>
      </ul>

      <h3>Use Estoque de Segurança Quando:</h3>
      <ul>
        <li>O fornecedor tem <strong>prazo irregular</strong></li>
        <li>A demanda é <strong>flutuante ou sazonal</strong></li>
        <li>O produto é <strong>estratégico</strong> (falta gera perda de cliente)</li>
        <li>O lead time é <strong>longo</strong> (importação, por exemplo)</li>
        <li>O custo de não ter o produto é <strong>muito maior</strong> que o custo de armazenar</li>
      </ul>

      <h2>Erros Comuns</h2>
      <ul>
        <li><strong>Confundir os dois conceitos:</strong> Muitos acreditam que estoque mínimo já inclui a segurança. Não necessariamente.</li>
        <li><strong>Não recalcular:</strong> Os números mudam com o tempo. Recalcule trimestralmente.</li>
        <li><strong>Estoque de segurança excessivo:</strong> Proteger demais imobiliza capital. Use dados, não medo.</li>
        <li><strong>Ignorar a sazonalidade:</strong> Em épocas de alta demanda, aumente temporariamente o estoque de segurança.</li>
      </ul>

      <h2>Como o VendaPX Ajuda</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> permite configurar tanto o estoque mínimo quanto o estoque de segurança para cada produto. Com isso, você pode:</p>
      <ul>
        <li>Definir alertas diferentes para cada nível</li>
        <li>Gerar relatórios de produtos abaixo do estoque de segurança</li>
        <li>Visualizar a cobertura de estoque em dias</li>
        <li>Planejar compras com base em dados reais de demanda</li>
      </ul>

      <h2>Conclusão</h2>
      <p><strong>Estoque mínimo e estoque de segurança</strong> são complementares, não sinônimos. Um define quando comprar, o outro protege contra imprevistos. Dominar ambos os conceitos e configurá-los corretamente no seu sistema é essencial para uma gestão de estoque eficiente e lucrativa.</p>
    `},{slug:"como-reduzir-perdas-e-avarias-no-estoque",title:"Como Reduzir Perdas e Avarias no Estoque",description:"Conheça as principais causas de perdas e avarias no estoque e aprenda estratégias eficazes para minimizar essas perdas no seu negócio.",category:"estoque",date:"2025-04-19",readTime:8,keywords:["perdas de estoque","avarias no estoque","reduzir perdas","gestão de perdas","produtos vencidos","estoque danificado","controle de perdas","rentabilidade de estoque"],content:`
      <h2>Como Reduzir Perdas e Avarias no Estoque</h2>
      <p>Todo empresário sabe que <strong>perdas com estoque</strong> acontecem. Produtos vencidos, itens danificados, furtos e erros de processamento fazem parte da realidade. Mas a questão não é se perdas acontecem, mas sim <strong>quanto você está perdendo</strong> e se pode reduzir essas perdas. Pequenas empresas podem perder entre 2% e 5% do faturamento apenas com problemas de estoque — um valor que faz diferença no lucro final.</p>

      <p>Neste artigo, vamos identificar as principais causas de perdas e avarias e apresentar estratégias práticas para minimizá-las.</p>

      <h2>Principais Causas de Perdas</h2>
      <h3>1. Produtos Vencidos</h3>
      <p>Em segmentos como alimentos, farmácia e cosméticos, o <strong>vencimento</strong> é uma das maiores causas de perda. Produtos que ficam parados no estoque por muito tempo perdem validade e precisam ser descartados. Para evitar isso:</p>
      <ul>
        <li>Implemente o método <strong>PEPS (Primeiro que Entra, Primeiro que Sai)</strong></li>
        <li>Configure alertas de validade no sistema</li>
        <li>Realize promoções preventivas para produtos próximos ao vencimento</li>
        <li>Negocie com fornecedores a devolução de produtos vencidos</li>
      </ul>

      <h3>2. Danos Durante o Manuseio</h3>
      <p>Produtos quebrados, amassados ou contaminados durante o recebimento, armazenamento ou expedição representam perda direta. Principais causas:</p>
      <ul>
        <li>Armazenamento inadequado (peso excessivo em prateleiras, exposição ao sol)</li>
        <li>Manuseio sem cuidado (quedas, arranhões)</li>
        <li>Embalagens frágeis sem proteção adequada</li>
        <li>Empilhamento incorreto de caixas</li>
      </ul>

      <h3>3. Furtos e Desaparecimentos</h3>
      <p>Infelizmente, <strong>furtos internos e externos</strong> são uma realidade. Produtos que somem do estoque sem registro de saída representam perda financeira direta. Para mitigar:</p>
      <ul>
        <li>Instale câmeras de segurança nas áreas de estoque</li>
        <li>Implemente controle de acesso ao depósito</li>
        <li>Realize inventários surpresa regularmente</li>
        <li>Monitore divergências entre estoque físico e sistema</li>
      </ul>

      <h3>4. Erros de Processo</h3>
      <p>Erros humanos como <strong>baixa indevida, entrada com quantidade errada, transferência não registrada</strong> geram divergências que, quando acumuladas, representam perdas significativas.</p>

      <h2>Estratégias para Reduzir Perdas</h2>
      <h3>Implemente Controle de Validade</h3>
      <p>Para produtos perecíveis, o <strong>controle de validade</strong> é obrigatório. Use o sistema para:</p>
      <ul>
        <li>Registrar a validade de cada lote na entrada</li>
        <li>Configurar alertas 30, 60 e 90 dias antes do vencimento</li>
        <li>Priorizar a saída de lotes mais antigos</li>
        <li>Gerar relatórios de produtos próximos ao vencimento</li>
      </ul>

      <h3>Melhore o Armazenamento</h3>
      <p>Um depósito bem organizado reduz perdas significativamente:</p>
      <ul>
        <li>Produtos pesados nas partes inferiores das prateleiras</li>
        <li>Produtos sensíveis à luz e umidade em locais protegidos</li>
        <li>Organização por categoria para facilitar a localização</li>
        <li>Iluminação adequada em todas as áreas</li>
        <li>Limpeza periódica para evitar pragas e contaminação</li>
      </ul>

      <h3>Treine Sua Equipe</h3>
      <p>A maioria das perdas por avaria e erro de processo pode ser evitada com <strong>treinamento adequado</strong>:</p>
      <ul>
        <li>Treine funcionários sobre o manuseio correto de cada tipo de produto</li>
        <li>Estabeleça procedimentos padronizados de entrada, armazenamento e expedição</li>
        <li>Responsabilize cada pessoa por sua área</li>
        <li>Realize reuniões periódicas para discutir problemas e soluções</li>
      </ul>

      <blockquote>
        <p>"A prevenção é sempre mais barata que o conserto. Investir em treinamento e organização reduz perdas muito mais do que esperar o problema acontecer."</p>
      </blockquote>

      <h3>Monitore Indicadores</h3>
      <p>Para gerenciar perdas, você precisa <strong>medir</strong>. Acompanhe mensalmente:</p>
      <ul>
        <li><strong>Taxa de perda:</strong> (Valor das perdas / Valor total do estoque) × 100</li>
        <li><strong>Produtos com maior taxa de perda:</strong> Identifique os itens problemáticos</li>
        <li><strong>Motivos das perdas:</strong> Vencimento, avaria, furto, erro — cada motivo exige uma solução diferente</li>
        <li><strong>Tendência temporal:</strong> As perdas estão aumentando ou diminuindo?</li>
      </ul>

      <h2>O Impacto das Perdas no Lucro</h2>
      <p>Considere um negócio com faturamento mensal de R$50.000 e margem de lucro de 15% (R$7.500). Se as perdas de estoque representam 3% do faturamento (R$1.500), isso equivale a <strong>20% do seu lucro líquido</strong>. Reduzir as perdas de 3% para 1% significa um ganho de R$1.000 por mês — R$12.000 por ano.</p>

      <h2>Como o VendaPX Auxilia na Redução de Perdas</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> oferece ferramentas para minimizar perdas:</p>
      <ul>
        <li><strong>Controle de validade:</strong> Registre validades e receba alertas automáticos</li>
        <li><strong>Rastreabilidade:</strong> Acompanhe cada lote desde a entrada até a saída</li>
        <li><strong>Relatórios de divergência:</strong> Identifique onde estão as maiores perdas</li>
        <li><strong>Inventário facilitado:</strong> Realize contagens regulares com facilidade</li>
        <li><strong>Integração com PDV:</strong> Todas as saídas são registradas automaticamente, reduzindo erros</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Reduzir <strong>perdas e avarias no estoque</strong> é uma das formas mais diretas de aumentar a lucratividade do seu negócio. Com processos organizados, equipe treinada e ferramentas adequadas, é possível reduzir significativamente essas perdas. Comece monitorando suas perdas atuais e implemente as estratégias apresentadas neste artigo passo a passo.</p>
    `},{slug:"planejamento-de-compras-evitar-excesso",title:"Planejamento de Compras: Como Evitar Excesso de Estoque",description:"Aprenda a planejar suas compras de forma inteligente, evitando estoque excessivo que imobiliza capital e gera custos desnecessários.",category:"estoque",date:"2025-05-03",readTime:9,keywords:["planejamento de compras","compra inteligente","evitar excesso de estoque","gestão de compras","compras planejadas","estoque ideal","compras para pequenos negócios","reduzir estoque parado"],content:`
      <h2>Planejamento de Compras: Como Evitar Excesso de Estoque</h2>
      <p>O <strong>excesso de estoque</strong> é um dos maiores inimigos da saúde financeira de um pequeno negócio. Quando você compra mais do que vende, o capital fica preso em mercadoria que não gera retorno. Além disso, estoque excessivo gera custos adicionais como armazenamento, seguros e risco de deterioração. O segredo para evitar isso é um <strong>bom planejamento de compras</strong>.</p>

      <p>Neste artigo, vamos mostrar como planejar suas compras de forma estratégica, comprando a quantidade certa, no momento certo, para o preço certo.</p>

      <h2>Por Que Ocorre Excesso de Estoque?</h2>
      <p>Antes de resolver, é importante entender as <strong>causas</strong> do excesso de estoque:</p>

      <ul>
        <li><strong>Compras por impulso:</strong> "Estava em promoção, comprei mais." Promocões são boas, mas apenas se você tem demanda para revender.</li>
        <li><strong>Falta de dados:</strong> Comprar sem saber a demanda real é receita para o desastre.</li>
        <li><strong>Medo de ficar sem:</strong> O "quanto mais, melhor" gera estoque parado.</li>
        <li><strong>Previsão de demanda incorreta:</strong> Superestimar vendas leva a compras excessivas.</li>
        <li><strong>Descontinuação sem aviso:</strong> Fornecedor descontinua produto e você fica com estoque sem saída.</li>
      </ul>

      <h2>Como Planejar Compras Inteligentemente</h2>
      <h3>1. Analise a Demanda Histórica</h3>
      <p>O passado é o melhor indicador do futuro. Analise as <strong>vendas dos últimos 6 a 12 meses</strong> para cada produto e identifique:</p>
      <ul>
        <li>Média mensal de vendas</li>
        <li>Sazonalidade (meses de alta e baixa demanda)</li>
        <li>Tendência (vendas estão crescendo, estáveis ou caindo?)</li>
        <li>Produtos com giro rápido vs. giro lento</li>
      </ul>

      <h3>2. Use a Fórmula de Ponto de Pedido</h3>
      <p>O <strong>ponto de pedido</strong> diz exatamente quando comprar:</p>
      <p><strong>Ponto de Pedido = (Demanda Média × Lead Time) + Estoque de Segurança − Estoque Disponível</strong></p>

      <h3>3. Aplique a Curva ABC</h3>
      <p>Use a curva ABC para priorizar as compras. Produtos da <strong>Classe A</strong> devem ter compras mais frequentes e controle mais rigoroso. Produtos da <strong>Classe C</strong> podem ser comprados em quantidades maiores e com menos frequência.</p>

      <h3>4. Negocie Condições com Fornecedores</h3>
      <p>Antes de fechar uma compra, negocie:</p>
      <ul>
        <li><strong>Quantidade mínima:</strong> Nem sempre o lote mínimo é o ideal para você</li>
        <li><strong>Prazo de pagamento:</strong> Quanto maior o prazo, melhor para o fluxo de caixa</li>
        <li><strong>Desconto por volume:</strong> Avalie se o desconto compensa o capital imobilizado</li>
        <li><strong>Política de devolução:</strong> Negociar devolução de excesso é sempre uma opção</li>
      </ul>

      <h3>5. Considere a Sazonalidade</h3>
      <p>Diferentes segmentos têm <strong>picos de demanda</strong> em diferentes épocas:</p>
      <ul>
        <li><strong>Varejo:</strong> Natal, Dia das Mães, Dia dos Namorados, volta às aulas</li>
        <li><strong>Alimentos:</strong> Festas juninas, Natal, Páscoa</li>
        <li><strong>Construção:</strong> Primavera, verão (reformas)</li>
        <li><strong>Escritório:</strong> Início do ano letivo, início do ano fiscal</li>
      </ul>

      <blockquote>
        <p><strong>Dica:</strong> Aumente o estoque 30 a 60 dias antes dos picos de demanda, e reduza nos períodos de baixa. Isso otimiza o capital investido.</p>
      </blockquote>

      <h2>Estratégias para Evitar Excesso</h2>
      <h3>Compra sob Demanda</h3>
      <p>Para produtos de <strong>giro lento</strong>, considere comprar apenas quando o cliente encomendar. Isso elimina o risco de estoque parado.</p>

      <h3>Acordo com Fornecedor</h3>
      <p>Negocie acordos de <strong>entrega programada</strong> onde o fornecedor envia quantidades menores em intervalos regulares, em vez de uma entrega grande.</p>

      <h3>Promoções Estratégicas</h3>
      <p>Se identificar que estoque de um produto está acumulando, faça uma <strong>promoção preventiva</strong> antes que vence. É melhor vender com desconto do que descartar.</p>

      <h3>Descontinuação Inteligente</h3>
      <p>Produtos que não giram há mais de 90 dias devem ser <strong>avaliados seriamente</strong>. Considere:</p>
      <ul>
        <li>Promoção agressiva para esvaziar estoque</li>
        <li>Devolução ao fornecedor (se houver acordo)</li>
        <li>Doação (pode gerar benefício fiscal)</li>
        <li>Descarte como última opção</li>
      </ul>

      <h2>Como o VendaPX Auxilia no Planejamento</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> oferece ferramentas que facilitam o planejamento de compras:</p>
      <ul>
        <li><strong>Relatórios de giro:</strong> Identifique rapidamente os produtos que mais e menos giram</li>
        <li><strong>Histórico de compras:</strong> Analise padrões de compra anteriores</li>
        <li><strong>Alertas de excesso:</strong> Configure alertas quando o estoque ultrapassar o nível máximo</li>
        <li><strong>Previsão de demanda:</strong> Use dados históricos para estimar vendas futuras</li>
        <li><strong>Integração financeira:</strong> Veja o impacto de cada compra no fluxo de caixa</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O <strong>planejamento de compras</strong> é uma habilidade que separa negócios lucrativos daqueles que lutam para sobreviver. Com dados, disciplina e as ferramentas certas, você pode comprar o necessário, evitar excessos e manter seu capital trabalhando de forma eficiente. Comece hoje a planejar suas compras com base em dados reais.</p>
    `},{slug:"gestao-de-lotes-e-validade",title:"Gestão de Lotes e Validade: Controle Total",description:"Aprenda a gerenciar lotes e validades dos seus produtos, garantindo conformidade legal e reduzindo perdas por vencimento no seu estoque.",category:"estoque",date:"2025-05-17",readTime:8,keywords:["gestão de lotes","controle de validade","rastreabilidade de lotes","produtos perecíveis","lote e validade","estoque com validade","gestão de perecíveis","conformidade de lotes"],content:`
      <h2>Gestão de Lotes e Validade: Controle Total</h2>
      <p>Para empresas que trabalham com <strong>produtos perecíveis</strong> ou que possuem exigências regulatórias, a <strong>gestão de lotes e validade</strong> é não apenas uma boa prática, mas muitas vezes uma obrigação legal. Farmácias, supermercados, padarias, distribuidoras de alimentos e muitos outros segmentos precisam saber exatamente qual lote de produto está em cada lugar, para poder rastrear, recall ou simplesmente evitar que produtos vencidos sejam vendidos.</p>

      <p>Neste artigo, vamos mostrar como implementar uma gestão eficiente de lotes e validades no seu negócio.</p>

      <h2>Por Que Gerenciar Lotes e Validades?</h2>
      <ul>
        <li><strong>Obrigação legal:</strong> A ANVISA, por exemplo, exige rastreabilidade de lotes para produtos farmacêuticos e alimentícios.</li>
        <li><strong>Segurança do consumidor:</strong> Em caso de problema com um produto, é preciso identificar rapidamente quais consumidores foram afetados.</li>
        <li><strong>Redução de perdas:</strong> Saber a validade de cada lote permite priorizar a saída dos mais antigos.</li>
        <li><strong>Controle de qualidade:</strong> Se um lote vem com defeito, você pode isolar e devolver apenas aquele lote específico.</li>
        <li><strong>Confiabilidade:</strong> Demonstra profissionalismo e cuidado com o produto.</li>
      </ul>

      <h2>Conceitos Fundamentais</h2>
      <h3>O Que é um Lote?</h3>
      <p>Um <strong>lote</strong> é um conjunto de produtos que foram fabricados, embalados ou recebidos juntos, sob as mesmas condições. Cada lote possui um <strong>identificador único</strong> (número de lote) que permite rastrear sua origem e histórico.</p>

      <h3>Validade vs Validade de Abrertura</h3>
      <ul>
        <li><strong>Validade:</strong> Data até a qual o produto é considerado seguro e eficaz quando armazenado na embalagem original e nas condições recomendadas.</li>
        <li><strong>Validade de abertura:</strong> Após abrir o produto, ele tem uma nova validade (geralmente menor). Exemplo: "Validade: 24 meses. Após abertura: usar em 30 dias."</li>
      </ul>

      <h2>Como Implementar a Gestão de Lotes</h2>
      <h3>1. Cadastro na Entrada</h3>
      <p>Ao receber um produto, registre <strong>obrigatoriamente</strong> o número do lote e a data de validade. No <strong>Controle de Estoque VendaPX</strong>, isso é feito de forma simples durante a importação da NF-e ou no cadastro manual da entrada.</p>

      <h3>2. Armazenamento por Lote</h3>
      <p>Organize o depósito para que cada lote esteja <strong>claramente identificado</strong> e separado:</p>
      <ul>
        <li>Use etiquetas com número do lote e validade visíveis</li>
        <li>Posicione lotes mais antigos na frente (método PEPS)</li>
        <li>Mantenha lotes diferentes do mesmo produto em áreas distintas, se possível</li>
      </ul>

      <h3>3. Saída por Lote</h3>
      <p>Ao vender ou movimentar um produto, registre <strong>qual lote está sendo utilizado</strong>. Isso permite rastreabilidade completa e é essencial em caso de recall.</p>

      <h3>4. Monitoramento de Validade</h3>
      <p>Configure o sistema para emitir <strong>alertas automáticos</strong> de validade:</p>
      <ul>
        <li>90 dias antes do vencimento: sinal de atenção</li>
        <li>60 dias antes do vencimento: considerar promoção</li>
        <li>30 dias antes do vencimento: ação urgente (promoção agressiva, devolução ou doação)</li>
        <li>Na data de vencimento: bloqueio de venda e descarte</li>
      </ul>

      <blockquote>
        <p><strong>Importante:</strong> Em muitos segmentos, é proibido vender produtos após o vencimento. Multas e sanções podem ser aplicadas pela vigilância sanitária.</p>
      </blockquote>

      <h2>Estratégias para Reduzir Perdas por Validade</h2>
      <ul>
        <li><strong>Promoção preventiva:</strong> Desconto de 20-30% para produtos com validade próxima</li>
        <li><strong>Doação:</strong> Doe produtos ainda válidos para instituições de caridade (verifique a legislação local)</li>
        <li><strong>Devolução ao fornecedor:</strong> Negocie acordos de devolução para produtos não vendidos</li>
        <li><strong>Compra sob demanda:</strong> Para produtos de giro lento, compre apenas quando houver encomenda</li>
        <li><strong>Análise de giro:</strong> Identifique produtos que não giram antes que vencam</li>
      </ul>

      <h2>Como o VendaPX Gerencia Lotes</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> foi projetado para facilitar a gestão de lotes:</p>
      <ul>
        <li><strong>Cadastro de lote na entrada:</strong> Registre número do lote e validade facilmente</li>
        <li><strong>Rastreabilidade completa:</strong> Saiba em qual lote cada unidade foi vendida</li>
        <li><strong>Alertas de validade:</strong> Configure alertas personalizados para cada estágio</li>
        <li><strong>Relatório de lotes próximos ao vencimento:</strong> Visualize rapidamente o que precisa de ação</li>
        <li><strong>PEPS automático:</strong> O sistema prioriza a saída de lotes mais antigos</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>gestão de lotes e validade</strong> é essencial para qualquer negócio que trabalhe com produtos perecíveis ou que exija rastreabilidade. Com o processo certo e o sistema adequado, você garante conformidade legal, reduz perdas e aumenta a confiança dos seus clientes. Implemente essa gestão hoje mesmo.</p>
    `},{slug:"kpis-de-estoque-para-gestores",title:"KPIs de Estoque: Indicadores Essenciais para Gestores",description:"Conheça os principais KPIs de estoque que todo gestor deve acompanhar para tomar decisões inteligentes e melhorar a rentabilidade do negócio.",category:"estoque",date:"2025-06-07",readTime:10,keywords:["KPIs de estoque","indicadores de estoque","métricas de gestão","giro de estoque","acuracidade de estoque","cobertura de estoque","gestão por indicadores","análise de estoque"],content:`
      <h2>KPIs de Estoque: Indicadores Essenciais para Gestores</h2>
      <p>Na <strong>gestão de estoque</strong>, o que não é medido não pode ser gerenciado. Os <strong>KPIs (Key Performance Indicators)</strong> ou indicadores-chave de desempenho são ferramentas fundamentais para entender a saúde do seu estoque, identificar problemas e tomar decisões baseadas em dados. Sem eles, o gestor está apenas no escuro, tentando adivinhar o que fazer.</p>

      <p>Neste artigo, vamos apresentar os KPIs mais importantes de estoque, como calculá-los e o que eles significam para o seu negócio.</p>

      <h2>1. Giro de Estoque</h2>
      <p>O <strong>giro de estoque</strong> é talvez o indicador mais importante. Ele mostra quantas vezes o estoque é renovado em um período. Quanto maior o giro, mais eficiente é a gestão.</p>

      <h3>Fórmula</h3>
      <p><strong>Giro de Estoque = Custo da Mercadoria Vendida (CMV) / Estoque Médio</strong></p>

      <h3>Interpretação</h3>
      <ul>
        <li>Giro alto: Estoques menores, capital mais líquido, menor risco de obsolescência</li>
        <li>Giro baixo: Estoques grandes, capital imobilizado, maior risco de perdas</li>
      </ul>

      <p>Exemplo: Se o CMV mensal é R$100.000 e o estoque médio é R$25.000, o giro é <strong>4 vezes por mês</strong>.</p>

      <h2>2. Cobertura de Estoque</h2>
      <p>A <strong>cobertura de estoque</strong> indica quantos dias o estoque atual consegue suprir a demanda. É o inverso do giro, expresso em dias.</p>

      <h3>Fórmula</h3>
      <p><strong>Cobertura = (Estoque Médio / CMV) × 30 dias</strong></p>

      <p>Exemplo: Se o estoque médio é R$25.000 e o CMV é R$100.000/mês, a cobertura é <strong>7,5 dias</strong>.</p>

      <h3>O que é ideal?</h3>
      <p>Varia por segmento. Varejo de alimentos pode ter cobertura de 7-15 dias. Produtos importados podem ter 30-60 dias. O importante é comparar com a média do seu setor.</p>

      <h2>3. Acuracidade de Estoque</h2>
      <p>A <strong>acuracidade</strong> mede a porcentagem de itens cuja contagem física confere com o registro do sistema. É um indicador de qualidade da gestão.</p>

      <h3>Fórmula</h3>
      <p><strong>Acuracidade = (Itens Conferidos Corretamente / Total de Itens Contados) × 100</strong></p>

      <h3>Meta</h3>
      <ul>
        <li>Acima de 98%: Excelente</li>
        <li>95% a 98%: Bom, com espaço para melhoria</li>
        <li>Abaixo de 95%: Problemas sérios que precisam de ação imediata</li>
      </ul>

      <h2>4. Taxa de Perda</h2>
      <p>A <strong>taxa de perda</strong> mede o valor dos produtos perdidos em relação ao estoque total. Inclui vencimentos, avarias, furtos e erros.</p>

      <h3>Fórmula</h3>
      <p><strong>Taxa de Perda = (Valor das Perdas / Valor Total do Estoque) × 100</strong></p>

      <h3>Benchmark</h3>
      <p>Para varejo, uma taxa de perda saudável está entre <strong>0,5% e 2%</strong>. Acima disso, há problemas que precisam ser endereçados.</p>

      <h2>5. Dias de Estoque</h2>
      <p>Indica quantos dias um produto específico permanece em estoque antes de ser vendido. É muito útil para identificar <strong>estoque parado</strong>.</p>

      <h3>Fórmula</h3>
      <p><strong>Dias de Estoque = (Estoque Disponível / Saída Média Diária)</strong></p>

      <p>Produtos com mais de 90 dias de estoque precisam de atenção urgente.</p>

      <h2>6. Estoque Morto</h2>
      <p>O <strong>estoque morto</strong> representa a porcentagem de produtos que não tiveram nenhuma movimentação em um período (geralmente 90 dias ou mais). Quanto menor, melhor.</p>

      <h2>7. Nível de Serviço</h2>
      <p>O <strong>nível de serviço</strong> mede a porcentagem de pedidos que foram atendidos completamente com estoque disponível. Indica a capacidade de satisfazer a demanda dos clientes.</p>

      <blockquote>
        <p><strong>Meta ideal:</strong> Nível de serviço acima de 95%. Isso significa que 95 dos 100 clientes que procuram um produto conseguem comprá-lo imediatamente.</p>
      </blockquote>

      <h2>8. Curva ABC Atualizada</h2>
      <p>A <strong>curva ABC</strong> não é estática. Ela deve ser recalculada periodicamente (trimestral ou semestralmente) para refletir mudanças no padrão de vendas. Produtos que mudam de classe devem ter suas estratégias de gestão ajustadas.</p>

      <h2>Como Acompanhar os KPIs</h2>
      <ul>
        <li><strong>Painel de controle:</strong> Um bom sistema deve exibir os principais KPIs em um dashboard visual</li>
        <li><strong>Relatórios periódicos:</strong> Gere relatórios semanais ou mensais para acompanhar tendências</li>
        <li><strong>Reuniões de gestão:</strong> Discuta os indicadores com a equipe regularmente</li>
        <li><strong>Metas:</strong> Defina metas claras para cada KPI e acompanhe o progresso</li>
      </ul>

      <h2>Como o VendaPX Auxilia no Acompanhamento</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> calcula automaticamente muitos desses indicadores:</p>
      <ul>
        <li><strong>Dashboard visual:</strong> Veja os principais KPIs em um painel centralizado</li>
        <li><strong>Relatórios detalhados:</strong> Acesse dados de giro, cobertura, acuracidade e mais</li>
        <li><strong>Análise por produto:</strong> Veja KPIs individuais para cada item do estoque</li>
        <li><strong>Histórico:</strong> Compare indicadores ao longo do tempo para identificar tendências</li>
        <li><strong>Integração:</strong> KPIs de estoque cruzados com dados financeiros para uma visão completa</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Acompanhar os <strong>KPIs de estoque</strong> é essencial para qualquer gestor que quer resultados. Esses indicadores revelam oportunidades de melhoria, alertam para problemas e guiam decisões mais inteligentes. Comece a medir hoje e transforme dados em ações concretas para o seu negócio.</p>
    `},{slug:"picking-e-packing-no-deposito",title:"Picking e Packing no Depósito: Organize a Expedição",description:"Otimize os processos de picking e packing no seu depósito para agilizar expedições, reduzir erros e aumentar a satisfação dos seus clientes.",category:"estoque",date:"2025-06-21",readTime:8,keywords:["picking e packing","expedição de pedidos","organização de depósito","separação de pedidos","embalagem de produtos","logística de depósito","efficiência de expedição","gestão de armazém"],content:`
      <h2>Picking e Packing no Depósito: Organize a Expedição</h2>
      <p><strong>Picking</strong> (separação de pedidos) e <strong>Packing</strong> (embalagem) são processos críticos na operação de qualquer negócio que vende produtos. A rapidez e a precisão com que os pedidos são separados e embalados impactam diretamente a satisfação do cliente e a eficiência do negócio. Erros nessa etapa geram devoluções, custos adicionais e clientes insatisfeitos.</p>

      <p>Neste artigo, vamos mostrar como otimizar os processos de picking e packing para tornar a operação do seu depósito mais eficiente e confiável.</p>

      <h2>O Que é Picking?</h2>
      <p><strong>Picking</strong> é o processo de localizar e retirar os itens corretos do estoque para atender um pedido. É geralmente a etapa que consome mais tempo e mão de obra no depósito — pode representar até <strong>55% dos custos operacionais</strong> de um armazém.</p>

      <h3>Tipos de Picking</h3>
      <ul>
        <li><strong>Picking por Pedido:</strong> O separador pega todos os itens de um único pedido. Simples, mas pode ser ineficiente se houver muitos pedidos.</li>
        <li><strong>Picking por Onda (Wave Picking):</strong> Vários pedidos são agrupados e separados ao mesmo tempo. Mais eficiente para alto volume.</li>
        <li><strong>Picking por Zona:</strong> Cada separador é responsável por uma área específica do depósito. Reduz deslocamento.</li>
        <li><strong>Picking em Lote:</strong> Itens idênticos de vários pedidos são separados de uma vez. Ideal para quando há muitos pedidos com o mesmo produto.</li>
      </ul>

      <h2>O Que é Packing?</h2>
      <p><strong>Packing</strong> é a etapa seguinte ao picking, onde os itens são embalados para envio. Uma boa embalagem deve:</p>
      <ul>
        <li><strong>Proteger o produto:</strong> Evitar danos durante o transporte</li>
        <li><strong>Ser adequada ao tamanho:</strong> Não usar caixa grande demais para poucos itens</li>
        <li><strong>Incluir acessórios:</strong> Nota fiscal, manual, brindes, cartão de agradecimento</li>
        <li><strong>Ser sustentável:</strong> Usar materiais recicláveis quando possível</li>
        <li><strong>Ser rápida de montar:</strong> Processo de embalagem padronizado agiliza o trabalho</li>
      </ul>

      <h2>Estratégias para Melhorar o Picking</h2>
      <h3>1. Organize o Depósito por Frequência</h3>
      <p>Produtos que mais saem devem estar mais <strong>acessíveis</strong> (perto da área de expedição, na altura ideal). Produtos de menor giro podem ficar em prateleiras mais altas ou mais distantes.</p>

      <h3>2. Use Código de Barras</h3>
      <p>O <strong>código de barras</strong> elimina erros de separação. O separador escaneia o item e o sistema confirma se é o produto certo. Isso reduz erros em até 99%.</p>

      <h3>3. Implemente Listas de Separação</h3>
      <p>Cada pedido deve gerar uma <strong>lista de separação</strong> clara com:</p>
      <ul>
        <li>Localização exata do produto (corredor, prateleira, gaveta)</li>
        <li>Código e descrição do produto</li>
        <li>Quantidade a ser separada</li>
        <li>Validade do lote (se aplicável)</li>
      </ul>

      <h3>4. Minimize Deslocamentos</h3>
      <p>O tempo gasto caminhando pelo depósito é tempo perdido. Organize o layout para <strong>minimizar deslocamentos</strong>:</p>
      <ul>
        <li>Produtos frequentes perto da área de expedição</li>
        <li>Sequência lógica de percorrer o depósito</li>
        <li>Evitar cruzamento de rotas entre separadores</li>
      </ul>

      <blockquote>
        <p><strong>Dica:</strong> Mapeie o tempo gasto em cada etapa do picking. Identificar gargalos é o primeiro passo para eliminá-los.</p>
      </blockquote>

      <h2>Estratégias para Melhorar o Packing</h2>
      <ul>
        <li><strong>Padronize embalagens:</strong> Tenha 3-4 tamanhos de caixa que atendam 80% dos pedidos</li>
        <li><strong>Estação de montagem organizada:</strong> Material de embalagem sempre à mão, sem necessidade de se deslocar</li>
        <li><strong>Conferência antes de fechar:</strong> Um segundo olhar antes de lacrar a caixa evita erros</li>
        <li><strong>Etiquetas automáticas:</strong> Gere e imprima etiquetas de envio diretamente do sistema</li>
        <li><strong>Checklist de embalagem:</strong> Itens que devem estar em toda encomenda (nota fiscal, cartão, manual)</li>
      </ul>

      <h2>Indicadores de Performance</h2>
      <p>Acompanhe os seguintes KPIs de picking e packing:</p>
      <ul>
        <li><strong>Itens separados por hora:</strong> Mede a produtividade do separador</li>
        <li><strong>Taxa de erro:</strong> Porcentagem de pedidos com erro de separação ou embalagem</li>
        <li><strong>Tempo médio de picking:</strong> Quanto tempo leva para separar um pedido</li>
        <li><strong>Pedidos expedidos por dia:</strong> Capacidade total da operação</li>
      </ul>

      <h2>Como o VendaPX Auxilia no Picking e Packing</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> suporta processos eficientes de expedição:</p>
      <ul>
        <li><strong>Listas de separação automáticas:</strong> Gere listas detalhadas a partir dos pedidos</li>
        <li><strong>Localização de produtos:</strong> Cadastre a localização de cada item para agilizar a busca</li>
        <li><strong>Leitura por código de barras:</strong> Confirme a separação correta de cada item</li>
        <li><strong>Atualização automática:</strong> Ao confirmar a expedição, o estoque é atualizado automaticamente</li>
        <li><strong>Relatórios de performance:</strong> Acompanhe produtividade e erros por separador</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Otimizar <strong>picking e packing</strong> é essencial para operações que buscam eficiência e satisfação do cliente. Com processos organizados, tecnologia adequada e equipe treinada, você pode reduzir erros, agilizar expedições e reduzir custos. Comece avaliando seus processos atuais e implemente as melhorias sugeridas neste artigo.</p>
    `},{slug:"estoque-parado-como-identificar",title:"Estoque Parado: Como Identificar e O Que Fazer",description:"Saiba como identificar estoque parado no seu depósito, entender as causas e tomar as decisões certas para recuperar esse capital investido.",category:"estoque",date:"2025-07-05",readTime:7,keywords:["estoque parado","estoque obsoleto","produtos sem giro","identificar estoque morto","recuperar estoque","reduzir estoque parado","giro de estoque","gestão de estoque"],content:`
      <h2>Estoque Parado: Como Identificar e O Que Fazer</h2>
      <p>O <strong>estoque parado</strong> é um dos maiores vilões da saúde financeira de um negócio. São produtos que ficam no depósito sem girar, ocupando espaço, consumindo recursos e representando dinheiro que poderia estar trabalhando em outra coisa. Identificar e resolver o problema do estoque parado é essencial para qualquer empresa que quer ser lucrativa.</p>

      <p>Neste artigo, vamos mostrar como identificar estoque parado, quais são as causas mais comuns e o que fazer para recuperar esse capital.</p>

      <h2>O Que é Estoque Parado?</h2>
      <p>Estoque parado (também chamado de <strong>estoque morto ou estoque obsoleto</strong>) são produtos que permanecem sem movimentação por um período prolongado. O critério pode variar por segmento, mas como regra geral:</p>

      <ul>
        <li><strong>Até 30 dias sem saída:</strong> Atenção — pode ser normal para produtos de giro lento</li>
        <li><strong>30 a 60 dias sem saída:</strong> Sinal de alerta — investigue a causa</li>
        <li><strong>60 a 90 dias sem saída:</strong> Estoque parado — aja rapidamente</li>
        <li><strong>Acima de 90 dias sem saída:</strong> Estoque morto — decisões urgentes necessárias</li>
      </ul>

      <h2>Como Identificar</h2>
      <h3>1. Relatório de Giro por Produto</h3>
      <p>O primeiro passo é gerar um <strong>relatório de giro de estoque</strong> que mostre a quantidade de dias que cada produto está parado. No <strong>Controle de Estoque VendaPX</strong>, esse relatório é gerado automaticamente.</p>

      <h3>2. Análise de Curva ABC Invertida</h3>
      <p>Identifique os produtos da <strong>Classe C</strong> (menor valor de giro) que não tiveram saída nos últimos 90 dias. Esses são os principais candidatos a estoque parado.</p>

      <h3>3. Visualização no Depósito</h3>
      <p>Produtos empoeirados, em locais de difícil acesso ou cobertos com proteção provavelmente são estoque parado. Uma caminhada pelo depósito pode revelar muito.</p>

      <h2>Causas do Estoque Parado</h2>
      <ul>
        <li><strong>Compra excessiva:</strong> Comprar mais do que a demanda real</li>
        <li><strong>Produto desatualizado:</strong> Modelo ou versão que saiu de moda</li>
        <li><strong>Preço alto:</strong> O produto é mais caro que a concorrência</li>
        <li><strong>Falta de divulgação:</strong> O produto existe, mas ninguém sabe</li>
        <li><strong>Sazonalidade:</strong> Produto de época que passou a temporada</li>
        <li><strong>Problema de qualidade:</strong> Produto com reclamações que ninguém mais quer</li>
        <li><strong>Erro de cadastro:</strong> Produto cadastrado com preço ou descrição errada</li>
      </ul>

      <h2>O Que Fazer com Estoque Parado?</h2>
      <h3>Estratégia 1: Promoção Agressiva</h3>
      <p>Ofereça <strong>descontos significativos</strong> (30-70%) para esvaziar o estoque. É melhor recuperar algum capital do que não recuperar nada.</p>

      <h3>Estratégia 2: Cross-selling</h3>
      <p>Combine o produto parado com itens que giram bem. "Compre X e ganhe Y com 50% de desconto."</p>

      <h3>Estratégia 3: Devolução ao Fornecedor</h3>
      <p>Se houver acordo, devolva produtos não vendidos. Alguns fornecedores aceitam troca por outros itens.</p>

      <h3>Estratégia 4: Doação</h3>
      <p>Doe produtos válidos para instituições de caridade. Além de ajudar quem precisa, você pode ter <strong>benefício fiscal</strong>.</p>

      <h3>Estratégia 5: Marketplace</h3>
      <p>Leve os produtos para <strong>marketplaces</strong> como Mercado Livre, Amazon ou Shopee. Pode ser que em outro canal haja demanda.</p>

      <h3>Estratégia 6: Descarte</h3>
      <p>Como última opção, descarte produtos sem valor. Documente o descarte para fins contábeis e fiscais.</p>

      <blockquote>
        <p><strong>Regra de ouro:</strong> Nunca deixe estoque parado acumular. Quanto mais tempo ficar, menor será o valor recuperável. Aja em até 60 dias.</p>
      </blockquote>

      <h2>Como Prevenir</h2>
      <ul>
        <li><strong>Compre com base em dados:</strong> Não compre no "feeling"</li>
        <li><strong>Monitore regularmente:</strong> Verifique relatórios de giro semanalmente</li>
        <li><strong>Defina limites:</strong> Estoque máximo para cada produto</li>
        <li><strong>Teste antes de comprar muito:</strong> Para produtos novos, comece com quantidades pequenas</li>
        <li><strong>Reavalie periodicamente:</strong> Revise todo o catálogo trimestralmente</li>
      </ul>

      <h2>Como o VendaPX Ajuda</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> oferece ferramentas para identificar e gerenciar estoque parado:</p>
      <ul>
        <li><strong>Relatório de produtos sem giro:</strong> Veja instantaneamente quais produtos estão parados</li>
        <li><strong>Alertas de obsolescência:</strong> Receba notificação quando um produto atingir o limite de dias sem saída</li>
        <li><strong>Análise de cobertura:</strong> Saiba quantos dias de estoque restam para cada item</li>
        <li><strong>Histórico de movimentação:</strong> Acompanhe o padrão de saída ao longo do tempo</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O <strong>estoque parado</strong> é dinheiro que poderia estar trabalhando para o seu negócio. Identificar, agir e prevenir são etapas essenciais para manter um estoque saudável e um fluxo de caixa equilibrado. Comece hoje a revisar seus produtos e recupere o capital investido em estoque ocioso.</p>
    `},{slug:"rastreamento-de-produtos-fornecedor-cliente",title:"Rastreamento de Produtos: Do Fornecedor ao Cliente",description:"Implemente rastreabilidade completa dos seus produtos, desde a entrada do fornecedor até a entrega ao cliente, garantindo qualidade e confiança.",category:"estoque",date:"2025-07-19",readTime:9,keywords:["rastreamento de produtos","rastreabilidade","rastreabilidade de estoque","rastreabilidade de fornecedor","cadeia de suprimentos","controle de lotes","rastreamento de entrega","gestão de rastreabilidade"],content:`
      <h2>Rastreamento de Produtos: Do Fornecedor ao Cliente</h2>
      <p>A <strong>rastreabilidade de produtos</strong> é a capacidade de acompanhar a jornada completa de um item, desde sua origem no fornecedor até a entrega final ao consumidor. Em um mercado cada vez mais exigente, onde segurança, qualidade e transparência são prioridades, implementar rastreabilidade não é mais diferencial — é <strong>necessidade</strong>.</p>

      <p>Neste artigo, vamos mostrar por que a rastreabilidade é importante, como implementá-la e como o VendaPX pode ser seu aliado nesse processo.</p>

      <h2>Por Que Rastrear Produtos?</h2>
      <ul>
        <li><strong>Segurança do consumidor:</strong> Em caso de problema com um lote, é possível identificar rapidamente todos os clientes afetados</li>
        <li><strong>Conformidade legal:</strong> Muitos setores exigem rastreabilidade obrigatória (ANVISA, MAPA, etc.)</li>
        <li><strong>Gestão de recalls:</strong> Permite isolar apenas os lotes afetados, minimizando o impacto financeiro</li>
        <li><strong>Controle de qualidade:</strong> Saber de onde veio cada produto facilita a identificação de problemas</li>
        <li><strong>Confiança do cliente:</strong> Consumidores valorizam empresas que podem comprovar a origem dos produtos</li>
        <li><strong>Combate a falsificação:</strong> Rastreabilidade dificulta a entrada de produtos ilegais na cadeia</li>
      </ul>

      <h2>O Que Rastrear?</h2>
      <h3>Dados de Entrada</h3>
      <ul>
        <li><strong>Fornecedor:</strong> CNPJ, razão social, contato</li>
        <li><strong>NF-e:</strong> Número da nota, chave de acesso, data de emissão</li>
        <li><strong>Lote:</strong> Número do lote do fabricante</li>
        <li><strong>Validade:</strong> Data de validade do produto</li>
        <li><strong>Quantidade:</strong> Quantidade recebida</li>
        <li><strong>Condição:</strong> Estado do produto na chegada (bom, avariado, etc.)</li>
      </ul>

      <h3>Dados de Armazenamento</h3>
      <ul>
        <li><strong>Localização:</strong> Corredor, prateleira, gaveta onde está armazenado</li>
        <li><strong>Temperatura:</strong> Para produtos que exigem controle térmico</li>
        <li><strong>Movimentações:</strong> Transferências entre depósitos ou áreas</li>
      </ul>

      <h3>Dados de Saída</h3>
      <ul>
        <li><strong>Cliente:</strong> Nome, CNPJ/CPF, endereço</li>
        <li><strong>Pedido:</strong> Número do pedido, data da venda</li>
        <li><strong>Lote vendido:</strong> Qual lote específico foi entregue</li>
        <li><strong>Data de entrega:</strong> Quando o cliente recebeu</li>
        <li><strong>Condição de entrega:</strong> Estado do produto na entrega</li>
      </ul>

      <h2>Como Implementar Rastreabilidade</h2>
      <h3>1. Cadastro Completo na Entrada</h3>
      <p>Toda vez que um produto entrar no depósito, registre <strong>todos os dados de rastreabilidade</strong>. No <strong>Controle de Estoque VendaPX</strong>, a importação da NF-e já traz muitos desses dados automaticamente.</p>

      <h3>2. Identificação por Lote</h3>
      <p>Cada unidade ou embalagem deve estar <strong>identificada com o número do lote</strong>. Isso permite rastrear exatamente qual lote foi vendido para cada cliente.</p>

      <h3>3. Registro na Saída</h3>
      <p>Ao expedir um pedido, registre <strong>qual lote</strong> está sendo enviado. Se o pedido contiver múltiplas unidades, registre o lote de cada uma.</p>

      <h3>4. Sistema Integrado</h3>
      <p>O ideal é que a rastreabilidade seja <strong>automatizada</strong> por um sistema. Processos manuais são lentos, propensos a erros e difíceis de consultar.</p>

      <blockquote>
        <p><strong>Exemplo prático:</strong> Se um cliente reclama de um produto com defeito, você pode instantaneamente saber: de qual fornecedor veio, qual lote, quando chegou, quando foi vendido, e se outros clientes compraram do mesmo lote.</p>
      </blockquote>

      <h2>Tecnologias de Rastreabilidade</h2>
      <ul>
        <li><strong>Código de barras:</strong> Tecnologia simples e eficaz para a maioria dos negócios</li>
        <li><strong>QR Code:</strong> Permite armazenar mais informações e pode ser lido com smartphones</li>
        <li><strong>RFID:</strong> Identificação por radiofrequência, permite leitura em lote (mais caro)</li>
        <li><strong>NFC:</strong> Comunicação por proximidade, útil para validação de autenticidade</li>
      </ul>

      <h2>Benefícios para o Negócio</h2>
      <ul>
        <li><strong>Redução de perdas:</strong> Identificação precisa de lotes com problemas</li>
        <li><strong>Agilidade em recalls:</strong> Ação rápida minimiza impacto financeiro e reputacional</li>
        <li><strong>Melhor relacionamento com fornecedores:</strong> Dados objetivos para discutir qualidade</li>
        <li><strong>Conformidade regulatória:</strong> Evita multas e sanções</li>
        <li><strong>Vantagem competitiva:</strong> Clientes preferem empresas transparentes</li>
      </ul>

      <h2>Como o VendaPX Implementa Rastreabilidade</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> oferece ferramentas completas de rastreabilidade:</p>
      <ul>
        <li><strong>Registro de lote na entrada:</strong> Cadastro automático via NF-e ou manual</li>
        <li><strong>Rastreabilidade na saída:</strong> Registre qual lote foi vendido para cada cliente</li>
        <li><strong>Consulta rápida:</strong> Em segundos, descubra todo o histórico de um produto</li>
        <li><strong>Relatório de lote:</strong> Veja todos os clientes que receberam um determinado lote</li>
        <li><strong>Integração:</strong> Dados de rastreabilidade integrados com financeiro e PDV</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>rastreabilidade de produtos</strong> é uma prática essencial para qualquer negócio que valoriza qualidade, segurança e confiança. Com ferramentas como o <strong>VendaPX</strong>, implementar rastreabilidade completa é simples e acessível. Comece hoje a rastrear seus produtos e ofereça mais segurança e transparência aos seus clientes.</p>
    `},{slug:"estoque-just-in-time-pequenos-negocios",title:"Estoque Just in Time para Pequenos Negócios",description:"Descubra como aplicar o método Just in Time no seu pequeno negócio, reduzindo estoque e custos sem perder vendas oportunidades.",category:"estoque",date:"2025-08-02",readTime:9,keywords:["just in time","estoque mínimo","redução de estoque","JIT","gestão enxuta","lean estoque","compra sob demanda","custos de estoque"],content:`
      <h2>Estoque Just in Time para Pequenos Negócios</h2>
      <p>O método <strong>Just in Time (JIT)</strong> é uma filosofia de gestão que visa receber produtos <strong>exatamente quando são necessários</strong>, eliminando a necessidade de estoque grande. Originalmente desenvolvido pela Toyota no Japão, o JIT revolucionou a indústria mundial e pode ser adaptado para pequenos negócios brasileiros com resultados impressionantes.</p>

      <p>A ideia é simples: em vez de comprar grandes quantidades e armazenar, você compra apenas o que vai vender, quando vai vender. Isso reduz custos de armazenamento, minimiza perdas e libera capital para investir em outras áreas.</p>

      <h2>Como Funciona o JIT?</h2>
      <p>O JIT baseia-se em <strong>três pilares fundamentais</strong>:</p>

      <ul>
        <li><strong>Demanda puxada:</strong> A compra é iniciada pela demanda real do cliente, não pela previsão do fornecedor</li>
        <li><strong>Fornecedores confiáveis:</strong> Entregas rápidas e confiáveis são essenciais para o método funcionar</li>
        <li><strong>Eliminação de desperdício:</strong> Todo estoque desnecessário é considerado desperdício</li>
      </ul>

      <h2>Vantagens do JIT para Pequenos Negócios</h2>
      <ul>
        <li><strong>Redução de capital imobilizado:</strong> Menos dinheiro preso em estoque</li>
        <li><strong>Menor espaço de armazenamento:</strong> Precisa de depósito menor</li>
        <li><strong>Redução de perdas:</strong> Menos produtos vencidos ou danificados</li>
        <li><strong>Maior giro:</strong> Estoque mais enxuto e eficiente</li>
        <li><strong>Flexibilidade:</strong> Mais fácil adaptar-se a mudanças de demanda</li>
        <li><strong>Menor risco de obsolescência:</strong> Não fica com produtos desatualizados</li>
      </ul>

      <h2>Desafios do JIT</h2>
      <p>O JIT não é perfeito e apresenta <strong>desafios reais</strong>:</p>

      <ul>
        <li><strong>Dependência de fornecedores:</strong> Se o fornecedor atrasa, você fica sem estoque</li>
        <li><strong>Maior frequência de pedidos:</strong> Mais trabalho administrativo e possíveis custos de frete</li>
        <li><strong>Risco de ruptura:</strong> Se a demanda superar a previsão, pode faltar produto</li>
        <li><strong>Necessidade de dados precisos:</strong> Sem dados históricos confiáveis, o JIT falha</li>
      </ul>

      <h2>Como Implementar JIT no Seu Negócio</h2>
      <h3>1. Conheça Sua Demanda</h3>
      <p>O JIT só funciona com <strong>dados precisos</strong>. Analise suas vendas dos últimos 12 meses e identifique:</p>
      <ul>
        <li>Média mensal de cada produto</li>
        <li>Sazonalidade e tendências</li>
        <li>Produtos que podem ser aplicados JIT (giro alto, fornecedor confiável)</li>
      </ul>

      <h3>2. Escolha os Produtos Certos</h3>
      <p>Nem todos os produtos se encaixam no JIT. Priorize:</p>
      <ul>
        <li><strong>Produtos de giro alto:</strong> Que vendem constantemente e previsivelmente</li>
        <li><strong>Fornecedores próximos:</strong> Com entrega rápida (1-3 dias)</li>
        <li><strong>Produtos padronizados:</strong> Menor risco de falta</li>
      </ul>

      <h3>3. Negocie com Fornecedores</h3>
      <p>O JIT exige <strong>parceria forte</strong> com fornecedores. Negocie:</p>
      <ul>
        <li>Entregas frequentes em quantidades menores</li>
        <li>Prazos de pagamento que permitam revender antes de pagar</li>
        <li>Acordos de reposição rápida em caso de necessidade</li>
      </ul>

      <h3>4. Use o Sistema Correto</h3>
      <p>Para o JIT funcionar, você precisa de um <strong>sistema que permita</strong>:</p>
      <ul>
        <li>Acompanhar vendas em tempo real</li>
        <li>Configurar alertas de estoque baixo precisos</li>
        <li>Gerar pedidos de compra rapidamente</li>
        <li>Monitorar cobertura de estoque em dias</li>
      </ul>

      <blockquote>
        <p><strong>Dica:</strong> Comece aplicando JIT apenas em 20-30% dos produtos (Classe A da curva ABC). Conforme ganhar confiança, expanda para outros itens.</p>
      </blockquote>

      <h2>JIT Adaptado para o Brasil</h2>
      <p>No contexto brasileiro, o JIT puro pode ser difícil devido a:</p>
      <ul>
        <li><strong>Distâncias grandes:</strong> Fornecedores distantes aumentam o lead time</li>
        <li><strong>Infraestrutura logística:</strong> Atrasos são mais frequentes</li>
        <li><strong>Variações de demanda:</strong> Economia instável gera incertezas</li>
      </ul>

      <p>Por isso, o ideal é adotar um <strong>JIT adaptado</strong>, com estoque de segurança maior que o modelo japonês original, mas ainda muito menor que o modelo tradicional brasileiro de "comprar tudo de uma vez".</p>

      <h2>Como o VendaPX Suporta o JIT</h2>
      <p>O <strong>Controle de Estoque VendaPX</strong> é ideal para empresas que querem adotar o JIT:</p>
      <ul>
        <li><strong>Alertas precisos:</strong> Configure alertas baseados em dias de cobertura, não apenas quantidade</li>
        <li><strong>Relatórios de giro:</strong> Identifique os produtos mais adequados para JIT</li>
        <li><strong>Histórico de vendas:</strong> Use dados reais para planejar compras</li>
        <li><strong>Integração com financeiro:</strong> Veja o impacto de compras frequentes no fluxo de caixa</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O <strong>Just in Time</strong> não é uma solução mágica, mas quando implementado corretamente, pode transformar a gestão de estoque de um pequeno negócio. O segredo é começar devagar, escolher os produtos certos e ter fornecedores confiáveis. Com dados e tecnologia, o JIT se torna uma ferramenta poderosa para reduzir custos e aumentar a eficiência.</p>
    `},{slug:"fluxo-de-caixa-como-fazer-na-pratica",title:"Fluxo de Caixa: Como Fazer na Prática",description:"Aprenda a montar e controlar o fluxo de caixa do seu negócio na prática, com dicas, modelos e ferramentas para nunca mais ficar no vermelho.",category:"financeiro",date:"2025-08-16",readTime:10,keywords:["fluxo de caixa","controle financeiro","gestão financeira","saída de caixa","entrada de caixa","fluxo de caixa mensal","saúde financeira","planejamento financeiro"],content:`
      <h2>Fluxo de Caixa: Como Fazer na Prática</h2>
      <p>O <strong>fluxo de caixa</strong> é a ferramenta financeira mais importante para qualquer negócio. É ele que mostra se o dinheiro está entrando mais do que saindo, se você consegue pagar suas contas no prazo e se o negócio é viável a longo prazo. Muitas empresas lucrativas falham porque não controlam o fluxo de caixa — têm dinheiro no papel, mas não na conta bancária.</p>

      <p>Neste guia prático, você vai aprender a montar, controlar e interpretar o fluxo de caixa do seu negócio, mesmo que não tenha formação em contabilidade.</p>

      <h2>O Que é Fluxo de Caixa?</h2>
      <p>O <strong>fluxo de caixa</strong> é um registro de todas as <strong>entradas e saídas de dinheiro</strong> do seu negócio em um período determinado. Ele responde a perguntas simples:</p>

      <ul>
        <li>Quanto dinheiro entra por mês?</li>
        <li>Quanto dinheiro sai por mês?</li>
        <li>Sobra ou falta dinheiro no final do mês?</li>
        <li>Em quais dias posso ficar sem dinheiro?</li>
        <li>Posso investir em estoque extra este mês?</li>
      </ul>

      <h2>Como Montar um Fluxo de Caixa</h2>
      <h3>Passo 1: Liste Todas as Entradas</h3>
      <p>Registre <strong>tudo que entra de dinheiro</strong>:</p>
      <ul>
        <li>Vendas à vista (DIN, PIX, cartão de débito)</li>
        <li>Vendas parceladas (considere apenas o valor que entra no mês)</li>
        <li>Recebimentos de boletos</li>
        <li>Empréstimos ou financiamentos recebidos</li>
        <li>Outras receitas (aluguel de espaço, juros, etc.)</li>
      </ul>

      <h3>Passo 2: Liste Todas as Saídas</h3>
      <p>Registre <strong>tudo que sai de dinheiro</strong>:</p>
      <ul>
        <li>Aluguel e condomínio</li>
        <li>Salários e encargos</li>
        <li>Contas fixas (luz, água, internet, telefone)</li>
        <li>Pagamentos a fornecedores</li>
        <li>Impostos e taxas</li>
        <li>Despesas variáveis (frete, embalagens, etc.)</li>
        <li>Investimentos e compras de estoque</li>
      </ul>

      <h3>Passo 3: Registre por Data</h3>
      <p>O segredo do fluxo de caixa é a <strong>data</strong>. Uma entrada de R$10.000 no dia 5 e uma saída de R$10.000 no dia 3 geram problema, mesmo que o saldo mensal seja zero. Registre sempre a <strong>data prevista</strong> de cada entrada e saída.</p>

      <h3>Passo 4: Calcule o Saldo</h3>
      <p>Para cada dia, calcule:</p>
      <p><strong>Saldo = Saldo Anterior + Entradas − Saídas</strong></p>

      <p>Se o saldo ficar negativo em algum dia, você precisa se planejar (antecipar recebimentos, adiar pagamentos ou buscar capital).</p>

      <blockquote>
        <p><strong>Importante:</strong> O fluxo de caixa é diferente do lucro. Uma empresa pode ser lucrativa e ficar sem caixa se os recebimentos atrasarem e os pagamentos estiverem em dia.</p>
      </blockquote>

      <h2>Exemplo Prático</h2>
      <p>Imagine uma loja com os seguintes dados no mês:</p>

      <ul>
        <li><strong>Entradas:</strong> R$45.000 (vendas) + R$5.000 (empréstimo) = R$50.000</li>
        <li><strong>Saídas:</strong> R$15.000 (fornecedores) + R$8.000 (aluguel) + R$12.000 (salários) + R$5.000 (contas) + R$7.000 (impostos) = R$47.000</li>
        <li><strong>Saldo do mês:</strong> R$50.000 − R$47.000 = R$3.000</li>
      </ul>

      <p>Parece bom, certo? Mas e se o empréstimo de R$5.000 entra no dia 28 e os fornecedores precisam ser pagos no dia 5? Sem o fluxo de caixa, você só descobriria o problema quando o cheque fosse devolvido.</p>

      <h2>Dicas para um Bom Fluxo de Caixa</h2>
      <ul>
        <li><strong>Atualize diariamente:</strong> Um fluxo de caixa desatualizado é inútil. Registre entradas e saídas no dia em que acontecem.</li>
        <li><strong>Considere atrasos:</strong> Nem todo cliente paga no dia. Use prazos realistas de recebimento.</li>
        <li><strong>Faça projeções:</strong> Olhe para os próximos 30, 60 e 90 dias para se antecipar a problemas.</li>
        <li><strong>Reserve para impostos:</strong> Separe mensalmente o valor dos impostos para não ser pego de surpresa.</li>
        <li><strong>Tenha reserva:</strong> Mantenha pelo menos 1 a 3 meses de despesas fixas em conta.</li>
      </ul>

      <h2>Erros Comuns</h2>
      <ul>
        <li><strong>Confundir lucro com caixa:</strong> Venda parcelada gera lucro, mas o dinheiro entra aos poucos.</li>
        <li><strong>Não considerar impostos:</strong> IPTU, ISS, PIS/COFINS e outras taxas precisam estar no fluxo.</li>
        <li><strong>Esquecer investimentos:</strong> Compra de equipamentos, reformas e marketing também são saídas.</li>
        <li><strong>Não projetar o futuro:</strong> Olhar apenas para o passado não ajuda a se preparar.</li>
      </ul>

      <h2>Como o VendaPX Auxilia no Fluxo de Caixa</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> oferece ferramentas para facilitar o controle do fluxo de caixa:</p>
      <ul>
        <li><strong>Registro automático:</strong> Entradas e saídas do PDV e estoque atualizam o fluxo automaticamente</li>
        <li><strong>Projeção:</strong> Veja o saldo previsto para os próximos dias</li>
        <li><strong>Relatórios:</strong> Acesse demonstrativos de entradas e saídas por período</li>
        <li><strong>Alertas:</strong> Receba notificação quando o saldo previsto ficar negativo</li>
        <li><strong>Integração:</strong> Fluxo de caixa alimentado por todas as operações do negócio</li>
      </ul>

      <p>Por apenas <strong>R$20/mês</strong>, você terá controle total do seu fluxo de caixa, algo que grandes empresas pagam fortunas para ter.</p>

      <h2>Conclusão</h2>
      <p>O <strong>fluxo de caixa</strong> é o termômetro da saúde financeira do seu negócio. Montá-lo e acompanhar diariamente é uma das ações mais importantes que você pode tomar. Comece hoje, mesmo que de forma simples, e evolua conforme o negócio cresce. Lembre-se: dinheiro que não é controlado é dinheiro que acaba.</p>
    `},{slug:"contas-a-pagar-e-receber-organizar",title:"Contas a Pagar e Receber: Como Organizar",description:"Organize suas contas a pagar e receber de forma eficiente, evitando multas, juros e perda de receita por atrasos no seu negócio.",category:"financeiro",date:"2025-08-30",readTime:8,keywords:["contas a pagar","contas a receber","organização financeira","gestão de pagamentos","recebimentos","fluxo de caixa","multas e juros","controle financeiro"],content:`
      <h2>Contas a Pagar e Receber: Como Organizar</h2>
      <p>Manter as <strong>contas a pagar e receber</strong> organizadas é fundamental para a sobrevivência de qualquer negócio. Muitas empresas lucrativas acabam em dificuldades financeiras porque não gerenciam adequadamente seus compromissos. Pagar multas por atraso, perder receita por esquecimento de cobrança ou não ter dinheiro para honrar um compromisso são situações que podem ser evitadas com organização.</p>

      <p>Neste artigo, vamos apresentar estratégias práticas para organizar suas contas a pagar e receber, garantindo que o dinheiro circule de forma saudável no seu negócio.</p>

      <h2>Por Que a Organização É Tão Importante?</h2>
      <ul>
        <li><strong>Evita multas e juros:</strong> Pagamentos atrasados geram custos adicionais que afetam diretamente o lucro</li>
        <li><strong>Mantém crédito saudável:</strong> Empresas que pagam em dia têm acesso a melhores condições de crédito</li>
        <li><strong>Evita interrupção de fornecimento:</strong> Fornecedores podem cortar fornecimento de empresas inadimplentes</li>
        <li><strong>Recupera receita:</strong> Cobranças em dia aumentam a taxa de recebimento</li>
        <li><strong>Planejamento:</strong> Saber o que vem pela frente permite se preparar financeiramente</li>
      </ul>

      <h2>Organizando as Contas a Pagar</h2>
      <h3>1. Cadastre Todos os Compromissos</h3>
      <p>Crie uma lista completa de <strong>todas as contas fixas e variáveis</strong> que sua empresa possui:</p>
      <ul>
        <li><strong>Fixas:</strong> Aluguel, salários, encargos, condomínio, internet, telefone</li>
        <li><strong>Variáveis:</strong> Fornecedores, frete, embalagens, manutenção</li>
        <li><strong>Periódicas:</strong> Impostos (DAS, ISS, ICMS), seguros, licenças</li>
      </ul>

      <h3>2. Defina Datas de Pagamento</h3>
      <p>Cada conta deve ter uma <strong>data fixa de pagamento</strong>. Organize o calendário:</p>
      <ul>
        <li>Dia 5: Fornecedores com prazo de 30 dias</li>
        <li>Dia 10: Aluguel e condomínio</li>
        <li>Dia 15: Salários e encargos</li>
        <li>Dia 20: Contas de consumo (luz, água)</li>
        <li>Dia 25: DAS e outros impostos</li>
      </ul>

      <h3>3. Negocie Prazos com Fornecedores</h3>
      <p>Quanto maior o prazo de pagamento, melhor para o seu <strong>fluxo de caixa</strong>. Negocie prazos que permitam vender o produto antes de precisar pagá-lo. Idealmente, o prazo de pagamento ao fornecedor deve ser maior que o prazo de recebimento dos clientes.</p>

      <h2>Organizando as Contas a Receber</h2>
      <h3>1. Registre Todos os Recebimentos</h3>
      <p>Cada venda parcelada ou a prazo deve ser registrada com <strong>data prevista de recebimento</strong>. Isso inclui:</p>
      <ul>
        <li>Boletos emitidos</li>
        <li>Parcelamentos no cartão</li>
        <li>Vendas a prazo para outros negócios</li>
        <li>Recebimentos de comissões</li>
      </ul>

      <h3>2. Implemente Cobrança Ativa</h3>
      <p>Não espere o cliente pagar. <strong>Cobre ativamente</strong>:</p>
      <ul>
        <li>Lembrete 3 dias antes do vencimento</li>
        <li>Notificação no dia do vencimento</li>
        <li>Primeiro contato no 1º dia de atraso</li>
        <li>Segunda tentativa no 3º dia de atraso</li>
        <li>Escalada para negociação no 7º dia</li>
      </ul>

      <h3>3. Ofereça Condições de Pagamento</h3>
      <p>Para clientes que pagam à vista, ofereça <strong>descontos</strong>. Exemplo: "5% de desconto no pagamento à vista via PIX." Isso melhora seu fluxo de caixa e fideliza o cliente.</p>

      <blockquote>
        <p><strong>Dica:</strong> Use o Sistema Financeiro VendaPX para automatizar lembretes de cobrança. Configure envio de mensagens automáticas para clientes com pagamentos próximos ao vencimento.</p>
      </blockquote>

      <h2>Ferramentas Essenciais</h2>
      <ul>
        <li><strong>Calendário financeiro:</strong> Visualize todas as entradas e saídas do mês</li>
        <li><strong>Planilha ou sistema:</strong> Registre cada compromisso com valor, data e status</li>
        <li><strong>Alertas automáticos:</strong> Receba notificação antes de cada vencimento</li>
        <li><strong>Relatórios:</strong> Acompanhe inadimplência e atrasos regularmente</li>
      </ul>

      <h2>Como o VendaPX Organiza suas Contas</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> foi projetado para simplificar a gestão de contas a pagar e receber:</p>
      <ul>
        <li><strong>Cadastro completo:</strong> Registre todas as contas com fornecedores, clientes, valores e datas</li>
        <li><strong>Alertas de vencimento:</strong> Receba notificações antes de cada pagamento e recebimento</li>
        <li><strong>Status em tempo real:</strong> Veja o que já foi pago, o que está pendente e o que está atrasado</li>
        <li><strong>Integração com PDV e Estoque:</strong> Vendas e compras alimentam automaticamente as contas</li>
        <li><strong>Relatórios de inadimplência:</strong> Identifique clientes com pagamentos em atraso</li>
        <li><strong>Custo acessível:</strong> Por apenas R$20/mês, você organiza toda a vida financeira do negócio</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Organizar <strong>contas a pagar e receber</strong> é uma das tarefas mais importantes da gestão financeira. Com processos claros, ferramentas adequadas e disciplina, você evita perdas, mantém o crédito saudável e garante que o dinheiro sempre esteja disponível quando precisar. Comece hoje a organizar suas contas e veja a diferença nos resultados.</p>
    `},{slug:"conciliacao-bancaria-passo-a-passo",title:"Conciliação Bancária: Passo a Passo Simples",description:"Aprenda a realizar a conciliação bancária do seu negócio passo a passo, garantindo que seus registros estejam corretos e alinhados com o extrato.",category:"financeiro",date:"2025-09-13",readTime:8,keywords:["conciliação bancária","extrato bancário","conferência bancária","gestão financeira","controle bancário","saldo bancário","conciliação contábil","erros financeiros"],content:`
      <h2>Conciliação Bancária: Passo a Passo Simples</h2>
      <p>A <strong>conciliação bancária</strong> é o processo de comparar os registros financeiros da sua empresa com o extrato do banco para garantir que estejam alinhados. É como um "check-up" financeiro que identifica divergências, erros e movimentações não registradas. Sem ela, você corre o risco de tomar decisões baseadas em dados incorretos.</p>

      <p>Neste artigo, vamos mostrar como fazer a conciliação bancária de forma simples e prática, mesmo que você não tenha formação em contabilidade.</p>

      <h2>Por Que Fazer a Conciliação?</h2>
      <ul>
        <li><strong>Identificar erros:</strong> Lançamentos duplicados, valores incorretos ou esquecidos</li>
        <li><strong>Descobrir movimentações não registradas:</strong> Taxas bancárias, juros, tarifas que aparecem no extrato mas não no sistema</li>
        <li><strong>Garantir precisão:</strong> Ter certeza de que seu saldo real é o que você pensa</li>
        <li><strong>Prevenir fraudes:</strong> Identificar movimentações suspeitas ou não autorizadas</li>
        <li><strong>Conformidade contábil:</strong> Exigência para empresas com obrigações contábeis</li>
      </ul>

      <h2>Passo a Passo da Conciliação</h2>
      <h3>Passo 1: Baixe o Extrato Bancário</h3>
      <p>Acesse o internet banking da sua empresa e baixe o <strong>extrato do período</strong> que deseja conciliar (geralmente mensal). O extrato deve conter todas as movimentações: entradas, saídas, tarifas, juros e outros lançamentos.</p>

      <h3>Passo 2: Extraia os Registros do Sistema</h3>
      <p>No <strong>Sistema Financeiro VendaPX</strong>, gere o relatório de movimentações bancárias do mesmo período. Esse relatório deve conter todos os lançamentos que você registrou: vendas, pagamentos, transferências, etc.</p>

      <h3>Passo 3: Compare Item por Item</h3>
      <p>Comece verificando cada lançamento do extrato e conferindo se ele existe no seu sistema:</p>
      <ul>
        <li><strong>Entrada no extrato + lançamento no sistema:</strong> OK, conferido</li>
        <li><strong>Entrada no extrato sem lançamento no sistema:</strong> Registre o lançamento faltante</li>
        <li><strong>Lançamento no sistema sem entrada no extrato:</strong> Verifique se é um boleto não compensado, transferência pendente, etc.</li>
      </ul>

      <h3>Passo 4: Identifique as Divergências</h3>
      <p>As divergências mais comuns são:</p>
      <ul>
        <li><strong>Tarifas bancárias:</strong> Taxas de manutenção, boleto, TED/DOC que aparecem no extrato</li>
        <li><strong>Juros:</strong> Rendimentos de aplicações ou juros de empréstimos</li>
        <li><strong>Devoltos:</strong> Cheques ou boletos devolvidos</li>
        <li><strong>Duplicidades:</strong> Lançamentos registrados duas vezes no sistema</li>
        <li><strong>Valores incorretos:</strong> Um lançamento com valor diferente do real</li>
      </ul>

      <h3>Passo 5: Ajuste e Registre</h3>
      <p>Corrija todas as divergências encontradas:</p>
      <ul>
        <li>Registre lançamentos que estavam faltando</li>
        <li>Exclua ou ajuste lançamentos duplicados</li>
        <li>Corrija valores incorretos</li>
        <li>Registre tarifas e juros que apareceram no extrato</li>
      </ul>

      <h3>Passo 6: Confirme o Saldo</h3>
      <p>Após todos os ajustes, o <strong>saldo do sistema</strong> deve ser igual ao <strong>saldo do extrato</strong>. Se ainda houver divergência, revise os lançamentos novamente.</p>

      <blockquote>
        <p><strong>Exemplo:</strong> Saldo no extrato: R$15.234,56. Saldo no sistema: R$15.234,56. Conciliação OK!</p>
      </blockquote>

      <h2>Dicas para Facilitar</h2>
      <ul>
        <li><strong>Concilie semanalmente:</strong> Não espere o fim do mês. Quanto mais frequente, menos trabalho</li>
        <li><strong>Use categorias:</strong> Classifique cada lançamento para facilitar a identificação</li>
        <li><strong>Mantenha rotina:</strong> Defina um dia fixo na semana para conciliar</li>
        <li><strong>Automatize quando possível:</strong> Sistemas integrados reduzem digitação e erros</li>
      </ul>

      <h2>Como o VendaPX Facilita a Conciliação</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> torna a conciliação bancária muito mais simples:</p>
      <ul>
        <li><strong>Importação de extratos:</strong> Importe o extrato bancário diretamente no sistema</li>
        <li><strong>Conciliação automática:</strong> O sistema identifica automaticamente lançamentos que conferem</li>
        <li><strong>Destaque de divergências:</strong> Lançamentos sem correspondência são destacados para análise</li>
        <li><strong>Registro rápido:</strong> Registre tarifas e ajustes com poucos cliques</li>
        <li><strong>Histórico:</strong> Mantenha registro de todas as conciliações realizadas</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>conciliação bancária</strong> é uma prática simples que previne grandes problemas. Com uma rotina definida e a ferramenta certa, o processo se torna rápido e confiável. Não deixe para trás — concilie seus bancos regularmente e tenha sempre a certeza de que seus números estão corretos.</p>
    `},{slug:"dre-gerencial-entenda-numeros-financeiros",title:"DRE Gerencial: Entenda os Números do Seu Negócio",description:"Aprenda a montar e interpretar a Demonstração do Resultado do Exercício (DRE) para entender a verdadeira saúde financeira do seu negócio.",category:"financeiro",date:"2025-09-27",readTime:10,keywords:["DRE","demonstração do resultado","demonstração do resultado do exercício","lucro líquido","receita líquida","custos operacionais","despesas administrativas","resultado financeiro"],content:`
      <h2>DRE Gerencial: Entenda os Números do Seu Negócio</h2>
      <p>A <strong>Demonstração do Resultado do Exercício (DRE)</strong> é o relatório financeiro que mostra, de forma clara e objetiva, se sua empresa teve lucro ou prejuízo em um período. Ela parte da receita total e vai deduzindo custos e despesas até chegar ao lucro líquido. É como uma "radiografia financeira" do negócio.</p>

      <p>Muitos empresários olham apenas para o saldo da conta bancária para saber se estão indo bem. Mas o saldo bancário não conta a história toda. A DRE revela a <strong>verdadeira performance</strong> do negócio.</p>

      <h2>Estrutura da DRE</h2>
      <p>Uma DRE típica segue esta estrutura:</p>

      <ul>
        <li><strong>(+) Receita Bruta:</strong> Total de vendas no período, sem descontos</li>
        <li><strong>(−) Impostos sobre Receita:</strong> ICMS, ISS, PIS, COFINS incidentes sobre vendas</li>
        <li><strong>(=) Receita Líquida:</strong> Receita bruta menos impostos</li>
        <li><strong>(−) Custo da Mercadoria Vendida (CMV):</strong> Custo do que foi vendido</li>
        <li><strong>(=) Lucro Bruto:</strong> Receita líquida menos CMV</li>
        <li><strong>(−) Despesas Operacionais:</strong> Administrative, comerciais e financeiras</li>
        <li><strong>(=) Lucro Operacional (EBIT):</strong> Lucro antes de juros e impostos</li>
        <li><strong>(±) Resultado Financeiro:</strong> Juros pagos, rendimentos, variação cambial</li>
        <li><strong>(−) Imposto de Renda e CSLL:</strong> Impostos sobre o lucro</li>
        <li><strong>(=) Lucro Líquido:</strong> O resultado final do período</li>
      </ul>

      <h2>Exemplo Prático</h2>
      <p>Veja uma DRE simplificada para uma loja no mês de março:</p>

      <blockquote>
        <p><strong>Receita Bruta:</strong> R$80.000<br/>
        <strong>(−) Impostos sobre Receita:</strong> R$6.400 (8%)<br/>
        <strong>Receita Líquida:</strong> R$73.600<br/>
        <strong>(−) CMV:</strong> R$44.160 (60% da receita líquida)<br/>
        <strong>Lucro Bruto:</strong> R$29.440<br/>
        <strong>(−) Despesas:</strong> R$18.000 (aluguel R$5.000 + salários R$8.000 + outros R$5.000)<br/>
        <strong>Lucro Operacional:</strong> R$11.440<br/>
        <strong>(−) Impostos sobre lucro:</strong> R$2.288<br/>
        <strong>Lucro Líquido:</strong> R$9.152</p>
      </blockquote>

      <p>Esse negócio teve um <strong>lucro líquido de R$9.152</strong>, ou 11,4% sobre a receita bruta. É um resultado saudável.</p>

      <h2>Como Interpretar a DRE</h2>
      <h3>Margem Bruta</h3>
      <p><strong>Margem Bruta = (Lucro Bruto / Receita Líquida) × 100</strong></p>
      <p>Indica quanto sobra após pagar o custo do produto. Margem bruta de 40% significa que para cada R$1 vendido, R$0,40 fica para cobrir despesas e gerar lucro.</p>

      <h3>Margem Operacional</h3>
      <p><strong>Margem Operacional = (Lucro Operacional / Receita Líquida) × 100</strong></p>
      <p>Mostra a eficiência operacional. Se está caindo, despesas estão crescendo mais que receitas.</p>

      <h3>Margem Líquida</h3>
      <p><strong>Margem Líquida = (Lucro Líquido / Receita Líquida) × 100</strong></p>
      <p>O resultado final. É ele que diz se o negócio é realmente lucrativo.</p>

      <h2>Erros Comuns na DRE</h2>
      <ul>
        <li><strong>Não registrar todos os custos:</strong> Custos ocultos (frete, embalagem, comissões) inflam a margem bruta falsamente</li>
        <li><strong>Confundir custo com despesa:</strong> CMV é custo do produto vendido. Despesa é o custo de operar o negócio.</li>
        <li><strong>Esquecer impostos:</strong> Muitos empresários não consideram todos os impostos na DRE</li>
        <li><strong>Não comparar períodos:</strong> Uma DRE isolada não diz muito. Compare mês a mês para identificar tendências.</li>
      </ul>

      <h2>Como o VendaPX Gera a DRE</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> gera automaticamente a DRE gerencial do seu negócio:</p>
      <ul>
        <li><strong>Dados automáticos:</strong> Receitas do PDV, CMV do estoque e despesas registradas alimentam a DRE</li>
        <li><strong>Períodos flexíveis:</strong> Gere DRE mensal, trimestral ou anual</li>
        <li><strong>Comparativos:</strong> Compare resultados entre períodos para identificar tendências</li>
        <li><strong>Detalhamento:</strong> Clique em cada linha para ver a composição detalhada</li>
        <li><strong>Integração:</strong> A DRE é alimentada automaticamente por todas as operações do negócio</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>DRE</strong> é a ferramenta mais poderosa para entender a saúde financeira do seu negócio. Ela vai além do saldo bancário e revela a verdadeira performance. Comece a montar sua DRE mensalmente e tome decisões baseadas em dados reais. Com o <strong>VendaPX</strong>, esse processo é automático e acessível por apenas R$20/mês.</p>
    `},{slug:"emissao-de-boletos-como-fazer",title:"Emissão de Boletos: Como Fazer Corretamente",description:"Saiba como emitir boletos bancários para seu negócio de forma prática e correta, garantindo recebimentos em dia e reduzindo inadimplência.",category:"financeiro",date:"2025-10-11",readTime:7,keywords:["emissão de boletos","boleto bancário","cobrança","recebimento","inadimplência","boleto para pequenas empresas","sistema de boletos","gestão de cobrança"],content:`
      <h2>Emissão de Boletos: Como Fazer Corretamente</h2>
      <p>O <strong>boleto bancário</strong> continua sendo uma das formas de pagamento mais utilizadas no Brasil, especialmente para vendas B2B (empresa para empresa) e parcelamentos. Emitir boletos de forma correta e organizada é essencial para garantir que os pagamentos entrem em dia e para manter a saúde financeira do negócio.</p>

      <p>Neste artigo, vamos mostrar como emitir boletos, quais são as melhores práticas e como o VendaPX pode simplificar esse processo.</p>

      <h2>Por Que Usar Boletos?</h2>
      <ul>
        <li><strong>Segurança:</strong> O pagamento é registrado no banco com dados completos do pagador</li>
        <li><strong>Rastreabilidade:</strong> É fácil identificar quem pagou e quem está com pendência</li>
        <li><strong>Prazo de recebimento:</strong> Permite parcelar vendas e receber ao longo do tempo</li>
        <li><strong>Facilidade:</strong> O cliente pode pagar em qualquer banco, lotérica ou internet banking</li>
        <li><strong>Barreira de entrada baixa:</strong> Não precisa de máquina de cartão ou gateway de pagamento</li>
      </ul>

      <h2>Como Emitir Boletos</h2>
      <h3>Opção 1: Banco Diretamente</h3>
      <p>A maioria dos bancos oferece a <strong>emissão de boletos</strong> pelo internet banking. É necessário ter conta PJ e solicitar a habilitação do serviço. O processo é gratuito ou tem custo baixo, mas pode ser trabalhoso para grande volume.</p>

      <h3>Opção 2: Sistema de Gestão</h3>
      <p>Sistemas como o <strong>Sistema Financeiro VendaPX</strong> permitem emitir boletos integrados ao controle financeiro. As vantagens são:</p>
      <ul>
        <li>Emissão direta pelo sistema, sem precisar acessar o banco</li>
        <li>Registro automático da conta a receber</li>
        <li>Atualização automática quando o boleto é pago</li>
        <li>Envio por e-mail diretamente do sistema</li>
        <li>Controle de vencimento e alertas de atraso</li>
      </ul>

      <h3>Opção 3: Fintechs de Cobrança</h3>
      <p>Plataformas como Gerencianet (Efí), PagSeguro e Asaas oferecem <strong>emissão de boletos</strong> com funcionalidades avançadas como QR Code PIX, notificações automáticas e conciliação bancária.</p>

      <h2>Boas Práticas na Emissão</h2>
      <ul>
        <li><strong>Descrição clara:</strong> O boleto deve conter a descrição do serviço ou produto</li>
        <li><strong>Valor correto:</strong> Sempre confira o valor antes de emitir</li>
        <li><strong>Vencimento adequado:</strong> Defina prazos que permitam o recebimento antes do pagamento a fornecedores</li>
        <li><strong>Desconto para pagamento antecipado:</strong> Ofereça incentivos para quem paga antes do vencimento</li>
        <li><strong>Multa e juros:</strong> Defina multa de 2% e juros de 1% ao mês para atrasos (conforme CDC)</li>
      </ul>

      <blockquote>
        <p><strong>Dica:</strong> Envie lembretes 3 dias antes do vencimento. Isso reduz significativamente a inadimplência.</p>
      </blockquote>

      <h2>Reduzindo a Inadimplência</h2>
      <p>Emitir o boleto é só o começo. Para garantir o recebimento:</p>
      <ul>
        <li><strong>Envie por diferentes canais:</strong> E-mail, WhatsApp e SMS</li>
        <li><strong>Cobrança ativa:</strong> Entre em contato com o cliente no dia seguinte ao vencimento</li>
        <li><strong>Negocie:</strong> Se o cliente não pode pagar, ofereça parcelamento ou desconto</li>
        <li><strong>Bloqueie serviço:</strong> Para clientes recorrentes com pendência, suspenda o serviço até regularização</li>
        <li><strong>Use o cadastro de inadimplentes:</strong> Como último recurso, registre o nome nos órgãos de proteção</li>
      </ul>

      <h2>Como o VendaPX Emite Boletos</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> integra emissão de boletos com o controle financeiro completo:</p>
      <ul>
        <li><strong>Emissão rápida:</strong> Gere boletos com poucos cliques a partir de uma venda</li>
        <li><strong>Envio automático:</strong> Envie boletos por e-mail diretamente do sistema</li>
        <li><strong>Registro automático:</strong> O boleto emitiido já cria a conta a receber correspondente</li>
        <li><strong>Acompanhamento:</strong> Veja quais boletos foram pagos, pendentes ou atrasados</li>
        <li><strong>Integração:</strong> Quando o cliente paga, o sistema atualiza automaticamente</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>emissão de boletos</strong> é uma prática essencial para qualquer negócio que trabalha com parcelamento ou pagamento a prazo. Com o processo certo e ferramentas adequadas, você reduz inadimplência e melhora o fluxo de caixa. Experimente o <strong>VendaPX</strong> e simplifique sua emissão de boletos.</p>
    `},{slug:"analise-de-rentabilidade-do-negocio",title:"Análise de Rentabilidade: Quem Realmente Dá Lucro?",description:"Aprenda a analisar a rentabilidade do seu negócio, identificando quais produtos, clientes e canais geram mais lucro para sua empresa.",category:"financeiro",date:"2025-10-25",readTime:9,keywords:["análise de rentabilidade","lucro por produto","margem de lucro","rentabilidade do negócio","análise de custos","lucro por cliente","custo de aquisição","margem de contribuição"],content:`
      <h2>Análise de Rentabilidade: Quem Realmente Dá Lucro?</h2>
      <p>Nem todo faturamento gera lucro. Essa é uma verdade que muitos empresários só descobrem quando fazem uma <strong>análise de rentabilidade</strong> detalhada. Um produto pode vender muito e gerar prejuízo. Um cliente pode comprar todo mês, mas com margem tão baixa que não compensa o custo de atendê-lo. A análise de rentabilidade revela essa verdade e permite tomar decisões mais inteligentes.</p>

      <p>Neste artigo, vamos mostrar como analisar a rentabilidade do seu negócio em diferentes níveis: por produto, por cliente e por canal de vendas.</p>

      <h2>Por Que Analisar a Rentabilidade?</h2>
      <ul>
        <li><strong>Identificar produtos lucrativos:</strong> Saiba quais itens geram mais retorno</li>
        <li><strong>Descontinuar produtos não rentáveis:</strong> Pare de vender o que dá prejuízo</li>
        <li><strong> Negociar melhor com fornecedores:</strong> Use dados para obter melhores preços</li>
        <li><strong>Definir preços corretos:</strong> Preço baseado em custo real, não na concorrência</li>
        <li><strong>Alocar recursos:</strong> Invista mais nos canais e produtos que mais lucram</li>
      </ul>

      <h2>Níveis de Análise</h2>
      <h3>1. Rentabilidade por Produto</h3>
      <p>Para cada produto, calcule a <strong>margem de contribuição</strong>:</p>
      <p><strong>Margem de Contribuição = (Preço de Venda − Custo Variável) / Preço de Venda × 100</strong></p>

      <p>Onde o custo variável inclui:</p>
      <ul>
        <li>Custo de aquisição (preço pago ao fornecedor)</li>
        <li>Frete de entrada</li>
        <li>Comissões de vendas</li>
        <li>Impostos sobre a venda</li>
        <li>Embalagem</li>
      </ul>

      <p>Exemplo: Um produto vendido por R$100, com custo variável de R$60, tem margem de contribuição de <strong>40%</strong>.</p>

      <h3>2. Rentabilidade por Cliente</h3>
      <p>Nem todos os clientes são igualmente rentáveis. Considere:</p>
      <ul>
        <li><strong>Volume de compras:</strong> Clientes que compram mais geram mais receita</li>
        <li><strong>Margem praticada:</strong> Descontos dados reduzem a rentabilidade</li>
        <li><strong>Custo de atendimento:</strong> Clientes que exigem muito atendimento consomem mais recursos</li>
        <li><strong>Prazo de pagamento:</strong> Clientes que pagam atrasado geram custo financeiro</li>
      </ul>

      <blockquote>
        <p><strong>Exemplo real:</strong> Cliente A compra R$10.000/mês com margem de 35%. Cliente B compra R$5.000/mês com margem de 50%. Cliente B é mais rentável por unidade, mas Cliente A gera mais lucro total.</p>
      </blockquote>

      <h3>3. Rentabilidade por Canal</h3>
      <p>Se você vende por vários canais (loja física, site, marketplaces), analise a rentabilidade de cada um:</p>
      <ul>
        <li><strong>Loja física:</strong> Receita − (aluguel + energia + funcionários + impostos do local)</li>
        <li><strong>E-commerce:</strong> Receita − (hosting + frete + comissões + marketing digital)</li>
        <li><strong>Marketplace:</strong> Receita − (comissão da plataforma + frete + embalagem)</li>
      </ul>

      <h2>Como Realizar a Análise</h2>
      <h3>Passo 1: Separe Custos Fixos e Variáveis</h3>
      <p><strong>Custos variáveis</strong> mudam com o volume de vendas (comissões, frete, embalagem). <strong>Custos fixos</strong> permanecem iguais independente do volume (aluguel, salários, internet).</p>

      <h3>Passo 2: Calcule o Ponto de Equilíbrio</h3>
      <p>O <strong>ponto de equilíbrio</strong> é o faturamento mínimo necessário para cobrir todos os custos:</p>
      <p><strong>Ponto de Equilíbrio = Custos Fixos / Margem de Contribuição Média</strong></p>

      <h3>Passo 3: Analise Regularmente</h3>
      <p>Realize a análise de rentabilidade <strong>mensalmente</strong> para identificar tendências e tomar ações rapidamente.</p>

      <h2>Como o VendaPX Auxilia na Análise</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> integra dados de estoque, vendas e finanças para facilitar a análise de rentabilidade:</p>
      <ul>
        <li><strong>Custo automático:</strong> O CMV é calculado automaticamente com base nas entradas de estoque</li>
        <li><strong>Margem por produto:</strong> Veja a margem de cada item vendido</li>
        <li><strong>Relatórios por cliente:</strong> Analise a rentabilidade de cada cliente</li>
        <li><strong>Comparativos:</strong> Compare períodos para identificar melhorias ou pioras</li>
        <li><strong>DRE integrada:</strong> A análise de rentabilidade é alimentada pela DRE automática</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>análise de rentabilidade</strong> é essencial para saber se o seu negócio é realmente lucrativo. Não basta vender muito — é preciso vender com margem. Comece a analisar a rentabilidade por produto, cliente e canal e tome decisões baseadas em dados. Com o <strong>VendaPX</strong>, essa análise se torna simples e acessível.</p>
    `},{slug:"controle-financeiro-para-mei",title:"Controle Financeiro para MEI: Guia Completo",description:"Aprenda a organizar as finanças do seu MEI de forma simples e eficiente, separando pessoal do empresarial e mantendo tudo em dia com a Receita.",category:"financeiro",date:"2025-11-08",readTime:8,keywords:["controle financeiro MEI","MEI","microempreendedor individual","finanças pessoais MEI","DAS MEI","separação patrimonial","gestão financeira MEI","obrigações MEI"],content:`
      <h2>Controle Financeiro para MEI: Guia Completo</h2>
      <p>Se você é <strong>microempreendedor individual (MEI)</strong>, manter o controle financeiro organizado é essencial para o sucesso do seu negócio. Muitos MEIs cometem o erro de misturar as finanças pessoais com as do negócio, o que gera confusão, problemas com a Receita Federal e dificuldade para saber se o negócio é realmente lucrativo.</p>

      <p>Neste guia, vou mostrar como organizar as finanças do seu MEI de forma simples, prática e em conformidade com a legislação.</p>

      <h2>Por Que Separar Pessoal do Empresarial?</h2>
      <ul>
        <li><strong>Obrigação legal:</strong> O MEI deve ter conta bancária separada (desde 2019)</li>
        <li><strong>Clareza:</strong> Sabe exatamente quanto o negócio fatura e quanto é lucro pessoal</li>
        <li><strong>Planejamento:</strong> Facilita a projeção de receitas e despesas</li>
        <li><strong>Crédito:</strong> Ter conta PJ facilita acesso a crédito empresarial</li>
        <li><strong>Contabilidade:</strong> Dados organizados facilitam o trabalho do contador</li>
      </ul>

      <h2>Como Organizar as Finanças</h2>
      <h3>1. Abra uma Conta PJ</h3>
      <p>Abra uma <strong>conta bancária exclusiva</strong> para o MEI. Todas as receitas do negócio devem entrar nessa conta. Muitos bancos oferecem contas PJ gratuitas para MEIs.</p>

      <h3>2. Registre Todas as Receitas</h3>
      <p>Cada pagamento recebido deve ser registrado, independentemente da forma:</p>
      <ul>
        <li>Pix</li>
        <li>Transferência bancária</li>
        <li>Dinheiro</li>
        <li>Cartão de crédito/débito</li>
        <li>Boleto</li>
      </ul>

      <h3>3. Registre Todas as Despesas</h3>
      <p>Guarde todos os comprovantes de pagamento:</p>
      <ul>
        <li><strong>DAS mensal:</strong> O principal custo fixo do MEI</li>
        <li><strong>Materias-primas:</strong> Insumos para produção</li>
        <li><strong>Frete:</strong> Entregas de produtos</li>
        <li><strong>Ferramentas:</strong> Equipamentos de trabalho</li>
        <li><strong>Marketing:</strong> Anúncios, cartões de visita, etc.</li>
        <li><strong>Contador:</strong> Obrigatório para o MEI</li>
      </ul>

      <h3>4. Calcule o Lucro Mensal</h3>
      <p><strong>Lucro = Receitas − Despesas − DAS</strong></p>
      <p>Esse valor é o que você realmente faturou como lucro do negócio.</p>

      <h2>Obrigações do MEI</h2>
      <ul>
        <li><strong>DAS mensal:</strong> Pague até o dia 20 de cada mês. O valor é fixo e inclui ICMS, ISS e contribuição previdenciária</li>
        <li><strong>DASN anual:</strong> Declaração Anual do Simples Nacional, entregue até maio</li>
        <li><strong>FGTS (opcional):</strong> Desde 2019, o MEI pode contribuir com o FGTS</li>
        <li><strong>Nota fiscal:</strong> Emita nota quando o cliente for pessoa jurídica ou quando solicitado</li>
      </ul>

      <blockquote>
        <p><strong>Atenção:</strong> O faturamento do MEI não pode ultrapassar R$81.000,00 por ano (80 salários mínimos). Se ultrapassar, o MEI deve se desenquadrar.</p>
      </blockquote>

      <h2>Dicas para o MEI</h2>
      <ul>
        <li><strong>Reserve para o DAS:</strong> Separe mensalmente o valor do DAS para não ser pego de surpresa</li>
        <li><strong>Não gaste tudo que entra:</strong> Retire um valor fixo mensal para suas despesas pessoais</li>
        <li><strong>Use tecnologia:</strong> Apps e sistemas facilitam o registro de receitas e despesas</li>
        <li><strong>Consulte um contador:</strong> Mesmo sendo simples, o MEI tem obrigações que precisam ser cumpridas</li>
      </ul>

      <h2>Como o VendaPX Ajuda o MEI</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> é ideal para MEIs que querem organizar suas finanças:</p>
      <ul>
        <li><strong>Registro simples:</strong> Cadastre receitas e despesas com facilidade</li>
        <li><strong>Categorias:</strong> Organize gastos por tipo (DAS, fornecedor, marketing, etc.)</li>
        <li><strong>Relatórios mensais:</strong> Veja automaticamente o lucro do período</li>
        <li><strong>Alertas de DAS:</strong> Receba lembrete antes da data de pagamento</li>
        <li><strong>Custo acessível:</strong> Por apenas R$20/mês, você tem controle financeiro profissional</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Organizar as <strong>finanças do MEI</strong> não precisa ser complicado. Com disciplina, uma conta separada e ferramentas adequadas, você mantém tudo em ordem e foca no que realmente importa: crescer o seu negócio. Comece hoje a separar pessoal do empresarial e veja a diferença na sua gestão.</p>
    `},{slug:"gestao-de-capital-de-giro",title:"Gestão de Capital de Giro: Mantenha o Negócio Rodando",description:"Aprenda a gerenciar o capital de giro do seu negócio para garantir que o dinheiro sempre esteja disponível quando precisar pagar contas e investir.",category:"financeiro",date:"2025-11-22",readTime:9,keywords:["capital de giro","gestão de capital de giro","capital circulante","saúde financeira","fluxo de caixa","necessidade de capital de giro","financiamento de giro","capital operacional"],content:`
      <h2>Gestão de Capital de Giro: Mantenha o Negócio Rodando</h2>
      <p>O <strong>capital de giro</strong> é o dinheiro disponível para cobrir as operações diárias do negócio: pagar fornecedores, salários, contas e investir em estoque. É o "sangue" que mantém a empresa viva. Uma empresa pode ser lucrativa no papel, mas sem capital de giro suficiente, não consegue honrar seus compromissos e acaba falindo.</p>

      <p>Neste artigo, vamos entender o que é capital de giro, como calculá-lo e como gerenciá-lo de forma eficiente.</p>

      <h2>O Que é Capital de Giro?</h2>
      <p>O <strong>capital de giro</strong> (ou capital circulante líquido) é a diferença entre os ativos circulantes e os passivos circulantes da empresa:</p>
      <p><strong>Capital de Giro = Ativos Circulantes − Passivos Circulantes</strong></p>

      <ul>
        <li><strong>Ativos Circulantes:</strong> Dinheiro em caixa, estoques, contas a receber, aplicações de curto prazo</li>
        <li><strong>Passivos Circulantes:</strong> Fornecedores a pagar, empréstimos de curto prazo, impostos a recolher, despesas acumuladas</li>
      </ul>

      <p>Se o resultado for <strong>positivo</strong>, a empresa tem capital de giro para operar. Se for <strong>negativo</strong>, há risco de insolvência.</p>

      <h2>Por Que o Capital de Giro É Importante?</h2>
      <ul>
        <li><strong>Pagar fornecedores:</strong> Fornecedores precisam ser pagos no prazo para manter o fornecimento</li>
        <li><strong> pagar salários:</strong> Funcionários precisam receber pontualmente</li>
        <li><strong>Cobrir imprevistos:</strong> Despesas inesperadas sempre acontecem</li>
        <li><strong>Aproveitar oportunidades:</strong> Comprar estoque em promoção, investir em marketing, expandir</li>
        <li><strong>Resistir a crises:</strong> Em períodos de baixa, o capital de giro sustenta a operação</li>
      </ul>

      <h2>Como Calcular a Necessidade de Capital de Giro</h2>
      <h3>Método Simples</h3>
      <p>Liste todos os <strong>compromissos de curto prazo</strong> (até 12 meses) e subtraia os recursos disponíveis:</p>

      <blockquote>
        <p><strong>Exemplo:</strong><br/>
        Fornecedores a pagar (30 dias): R$20.000<br/>
        Salários do próximo mês: R$15.000<br/>
        Impostos do próximo mês: R$5.000<br/>
        Despesas fixas: R$8.000<br/>
        <strong>Total de compromissos: R$48.000</strong><br/><br/>
        Estoque disponível para venda: R$30.000<br/>
        Contas a receber (30 dias): R$15.000<br/>
        Dinheiro em caixa: R$5.000<br/>
        <strong>Total de recursos: R$50.000</strong><br/><br/>
        <strong>Capital de Giro = R$50.000 − R$48.000 = R$2.000</strong></p>
      </blockquote>

      <p>Um capital de giro de R$2.000 é muito apertado. O ideal é ter pelo menos <strong>1 a 3 meses de despesas fixas</strong> como reserva.</p>

      <h2>Estratégias para Melhorar o Capital de Giro</h2>
      <h3>1. Acelere Recebimentos</h3>
      <ul>
        <li>Ofereça desconto para pagamento à vista</li>
        <li>Cobre mais rápido (reduza prazo de pagamento dos clientes)</li>
        <li>Use antecipação de recebíveis quando necessário</li>
      </ul>

      <h3>2. Retarde Pagamentos (sem perder prazo)</h3>
      <ul>
        <li>Negocie prazos maiores com fornecedores</li>
        <li>Pague no último dia útil do prazo, não antes</li>
        <li>Use capital de fornecedor (pagar a prazo) quando possível</li>
      </ul>

      <h3>3. Otimize o Estoque</h3>
      <ul>
        <li>Reduza estoque parado (capital ocioso)</li>
        <li>Use o método JIT para itens de giro alto</li>
        <li>Negocie devolução de estoque não vendido</li>
      </ul>

      <h3>4. Reduza Custos Fixos</h3>
      <ul>
        <li>Renegocie aluguéis</li>
        <li>Reduza despesas administrativas</li>
        <li>Use tecnologia para automatizar processos</li>
      </ul>

      <h2>Erros Comuns</h2>
      <ul>
        <li><strong>Investir capital de giro em ativos fixos:</strong> Não use o dinheiro do dia a dia para comprar equipamentos</li>
        <li><strong>Ignorar sazonalidade:</strong> Em meses de baixa, o capital de giro precisa ser maior</li>
        <li><strong>Não ter reserva:</strong> Sem reserva, qualquer imprevisto causa crise</li>
        <li><strong>Crescer rápido demais:</strong> Crescimento sem capital de giro suficiente leva à insolvência</li>
      </ul>

      <h2>Como o VendaPX Auxilia na Gestão</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> oferece ferramentas para monitorar e gerenciar o capital de giro:</p>
      <ul>
        <li><strong>Dashboard financeiro:</strong> Veja em tempo real a situação do caixa e compromissos</li>
        <li><strong>Projeção de caixa:</strong> Antecipe-se a períodos de saldo negativo</li>
        <li><strong>Relatório de fornecedores:</strong> Saiba quanto e quando precisa pagar</li>
        <li><strong>Relatório de clientes:</strong> Acompanhe o que vai entrar</li>
        <li><strong>Integração:</strong> Dados de estoque, vendas e finanças em um só lugar</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>gestão de capital de giro</strong> é uma das habilidades mais importantes para a sobrevivência de qualquer negócio. Com planejamento, disciplina e as ferramentas certas, você garante que o dinheiro sempre esteja disponível quando precisar. Comece hoje a monitorar seu capital de giro e evite surpresas desagradáveis.</p>
    `},{slug:"projecao-de-fluxo-de-caixa",title:"Projeção de Fluxo de Caixa: Antecipe-se aos Problemas",description:"Aprenda a projetar o fluxo de caixa do seu negócio para os próximos meses, antecipando problemas e tomando decisões mais inteligentes.",category:"financeiro",date:"2025-12-06",readTime:9,keywords:["projeção de fluxo de caixa","previsão financeira","fluxo de caixa projetado","planejamento financeiro","antecipação de problemas","saúde financeira","gestão financeira","projeção de receitas"],content:`
      <h2>Projeção de Fluxo de Caixa: Antecipe-se aos Problemas</h2>
      <p>Enquanto o <strong>fluxo de caixa atual</strong> mostra onde você está, a <strong>projeção de fluxo de caixa</strong> mostra onde você estará. Projetar o fluxo de caixa para os próximos 30, 60 ou 90 dias permite antecipar problemas, planejar investimentos e tomar decisões com mais segurança. É como ter um GPS financeiro que mostra o caminho à frente.</p>

      <p>Neste artigo, vamos mostrar como fazer projeções de fluxo de caixa de forma prática e como usar essas informações para melhorar a gestão do seu negócio.</p>

      <h2>O Que é Projeção de Fluxo de Caixa?</h2>
      <p>A <strong>projeção</strong> é uma estimativa de quanto dinheiro entrará e sairá nos próximos períodos, com base em dados históricos e planejamento. Ela responde perguntas como:</p>

      <ul>
        <li>Qual será o saldo da conta bancária no final do próximo mês?</li>
        <li>Em quais dias posso ficar sem dinheiro?</li>
        <li>Posso fazer uma compra grande este mês?</li>
        <li>Quando vou poder contratar um funcionário?</li>
        <li>Meu capital de giro é suficiente para os próximos 3 meses?</li>
      </ul>

      <h2>Como Fazer a Projeção</h2>
      <h3>Passo 1: Analise o Passado</h3>
      <p>Use os <strong>dados dos últimos 6 a 12 meses</strong> para identificar padrões:</p>
      <ul>
        <li>Receita média mensal e tendência (crescendo, estável, caindo)</li>
        <li>Despesas fixas e variáveis</li>
        <li>Sazonalidade (meses de alta e baixa)</li>
        <li>Prazo médio de recebimento e pagamento</li>
      </ul>

      <h3>Passo 2: Registre Compromissos Conhecidos</h3>
      <p>Liste todas as <strong>saídas já comprometidas</strong> para os próximos meses:</p>
      <ul>
        <li>Aluguel e condomínio</li>
        <li>Salários e encargos</li>
        <li>Empréstimos (parcelas fixas)</li>
        <li>Impostos com datas definidas</li>
        <li>Fornecedores com prazos acordados</li>
      </ul>

      <h3>Passo 3: Estime as Receitas</h3>
      <p>Com base no histórico, estime quanto <strong>entrará de dinheiro</strong> nos próximos meses:</p>
      <ul>
        <li>Vendas à vista: estime com base na média e sazonalidade</li>
        <li>Recebimentos parcelados: liste cada parcela e sua data</li>
        <li>Boletos a vencer: consulte os boletos emitidos</li>
        <li>Outras receitas: aluguel de espaço, comissões, etc.</li>
      </ul>

      <h3>Passo 4: Monte a Projeção</h3>
      <p>Crie uma tabela com os <strong>próximos 3 a 6 meses</strong>, registrando para cada mês:</p>
      <ul>
        <li>Saldo inicial (igual ao saldo final do mês anterior)</li>
        <li>(+) Total de entradas previstas</li>
        <li>(−) Total de saídas previstas</li>
        <li>(=) Saldo final previsto</li>
      </ul>

      <blockquote>
        <p><strong>Exemplo:</strong> Saldo inicial: R$10.000. Entradas previstas: R$45.000. Saídas previstas: R$42.000. Saldo final previsto: R$13.000. Se o saldo final for negativo, você precisa se planejar.</p>
      </blockquote>

      <h2>Dicas para Projeções Mais Precisas</h2>
      <ul>
        <li><strong>Seja conservador:</strong> Subestime receitas e supereestimate despesas. É melhor ter sobra do que falta.</li>
        <li><strong>Considere atrasos:</strong> Nem todo cliente paga no dia. Use prazos realistas de recebimento.</li>
        <li><strong>Atualize regularmente:</strong> Refaça a projeção a cada semana ou quinzena com dados reais.</li>
        <li><strong>Considere cenários:</strong> Faça projeção otimista, realista e pessimista.</li>
        <li><strong>Inclua investimentos:</strong> Compra de equipamentos, reformas, marketing devem estar na projeção.</li>
      </ul>

      <h2>Cenários Obrigatórios</h2>
      <h3>Cenário Otimista</h3>
      <p>Vendas 15% acima da média, todos os clientes pagam em dia, sem despesas inesperadas.</p>

      <h3>Cenário Realista</h3>
      <p>Vendas na média, 10% de atraso nos recebimentos, despesas conforme planejado.</p>

      <h3>Cenário Pessimista</h3>
      <p>Vendas 20% abaixo da média, 20% de atraso, despesas inesperadas de emergência.</p>

      <p>Ter os três cenários permite se preparar para qualquer situação.</p>

      <h2>Como o VendaPX Facilita a Projeção</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> oferece ferramentas para facilitar a projeção de fluxo de caixa:</p>
      <ul>
        <li><strong>Projeção automática:</strong> Com base em dados históricos, o sistema projeta os próximos meses</li>
        <li><strong>Compromissos recorrentes:</strong> Despesas fixas são projetadas automaticamente</li>
        <li><strong>Recebimentos previstos:</strong> Boletos e parcelamentos já emitidos entram na projeção</li>
        <li><strong>Alertas:</strong> Receba notificação quando a projeção indicar saldo negativo</li>
        <li><strong>Gráficos visuais:</strong> Visualize a tendência do caixa em formato gráfico</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A <strong>projeção de fluxo de caixa</strong> é uma das ferramentas mais poderosas para a gestão financeira. Ela permite antecipar problemas, planejar investimentos e tomar decisões com confiança. Comece a projetar hoje e tenha controle total do futuro financeiro do seu negócio.</p>
    `},{slug:"despesas-fixas-vs-variaveis",title:"Despesas Fixas vs Variavéis: Entenda a Diferença",description:"Aprenda a diferenciar despesas fixas e variáveis, como calculá-las e por que essa distinção é fundamental para a gestão financeira do seu negócio.",category:"financeiro",date:"2026-01-10",readTime:7,keywords:["despesas fixas","despesas variáveis","custos fixos","custos variáveis","estrutura de custos","gestão de despesas","ponto de equilíbrio","análise de custos"],content:`
      <h2>Despesas Fixas vs Variavéis: Entenda a Diferença</h2>
      <p>Entender a diferença entre <strong>despesas fixas e variáveis</strong> é fundamental para qualquer empresário que quer ter controle financeiro. Essa distinção afeta diretamente a precificação dos produtos, a análise de rentabilidade e a tomada de decisão. Muitos negócios falhem porque não conseguem separar esses dois tipos de despesa e acabam tomando decisões equivocadas.</p>

      <p>Neste artigo, vamos explicar claramente o que são despesas fixas e variáveis, como identificá-las e como usá-las a seu favor.</p>

      <h2>O Que são Despesas Fixas?</h2>
      <p><strong>Despesas fixas</strong> são aquelas que permanecem iguais, independentemente do volume de vendas. Elas existem mesmo se o negócio não vender nada no mês. Exemplos:</p>

      <ul>
        <li><strong>Aluguel:</strong> Valor mensal que não muda com as vendas</li>
        <li><strong>Salários:</strong> Funcionários contratados recebem mesmo em meses de baixa</li>
        <li><strong>Encargos sociais:</strong> INSS, FGTS, 13º proporcional</li>
        <li><strong>Internet e telefone:</strong> Planos mensais</li>
        <li><strong>Seguros:</strong> Seguro do estabelecimento, seguro de equipamentos</li>
        <li><strong>Contador:</strong> Mensalidade do serviço contábil</li>
        <li><strong>Licenças e softwares:</strong> Assinaturas mensais</li>
        <li><strong>Depreciação:</strong> Perda de valor dos equipamentos ao longo do tempo</li>
      </ul>

      <h2>O Que são Despesas Variáveis?</h2>
      <p><strong>Despesas variáveis</strong> mudam de acordo com o volume de vendas ou atividade do negócio. Se vender mais, essas despesas aumentam. Se vender menos, diminuem. Exemplos:</p>

      <ul>
        <li><strong>Materias-primas:</strong> Quanto mais produz, mais precisa comprar</li>
        <li><strong>Comissões de vendas:</strong> Pagas sobre o valor vendido</li>
        <li><strong>Frete:</strong> Cada entrega gera um custo</li>
        <li><strong>Embalagens:</strong> Mais vendas = mais embalagens</li>
        <li><strong>Impostos sobre vendas:</strong> ICMS, ISS, PIS/COFINS incidentes sobre faturamento</li>
        <li><strong>Mão de obra temporária:</strong> Horas extras, trabalhadores contratados para picos</li>
        <li><strong>Taxas de cartão:</strong> Percentual cobrado sobre vendas no cartão</li>
      </ul>

      <h2>Por Que Essa Distinção É Importante?</h2>
      <h3>1. Para Definir Preços</h3>
      <p>O preço de venda precisa cobrir <strong>todas</strong> as despesas (fixas + variáveis) e ainda gerar lucro. Se você considerar apenas as variáveis, pode acabar vendendo abaixo do custo total.</p>

      <h3>2. Para Calcular o Ponto de Equilíbrio</h3>
      <p>O <strong>ponto de equilíbrio</strong> é o faturamento mínimo necessário para cobrir todas as despesas:</p>
      <p><strong>Ponto de Equilíbrio = Despesas Fixas / (1 − % Despesas Variáveis sobre Receita)</strong></p>

      <p>Exemplo: Despesas fixas de R$15.000/mês, despesas variáveis de 40% da receita:</p>
      <p><strong>Ponto de Equilíbrio = R$15.000 / (1 − 0,40) = R$25.000</strong></p>

      <p>Isso significa que você precisa faturar pelo menos R$25.000 por mês para não ter prejuízo.</p>

      <h3>3. Para Analisar a Estrutura do Negócio</h3>
      <p>Negócios com <strong>muitas despesas fixas</strong> são mais arriscados em períodos de baixa (precisam vender mais para cobrir os custos). Negócios com <strong>despesas majoritariamente variáveis</strong> são mais flexíveis.</p>

      <blockquote>
        <p><strong>Exemplo:</strong> Uma fábrica tem 70% de custos fixos (equipamentos, aluguel, pessoal fixo). Em um mês de baixa, ela precisa mesmo assim vender o suficiente para cobrir R$35.000 em custos fixos. Uma loja virtual com 30% de custos fixos tem mais flexibilidade para reduzir despesas quando as vendas caem.</p>
      </blockquote>

      <h2>Como Reduzir Cada Tipo</h2>
      <h3>Reduzindo Despesas Fixas</h3>
      <ul>
        <li>Renegocie aluguéis e contratos</li>
        <li>Considere home office para reduzir espaço físico</li>
        <li>Avalie se todos os funcionários fixos são necessários</li>
        <li>Renegocie planos de internet e telefone</li>
        <li>Compre equipamentos usados quando possível</li>
      </ul>

      <h3>Reduzindo Despesas Variáveis</h3>
      <ul>
        <li>Negocie preços com fornecedores</li>
        <li>Busque alternativas de embalagem mais baratas</li>
        <li>Otimize rotas de entrega para reduzir frete</li>
        <li>Automatize processos para reduzir mão de obra</li>
        <li>Considere PIX para evitar taxas de cartão</li>
      </ul>

      <h2>Como o VendaPX Ajuda na Análise</h2>
      <p>O <strong>Sistema Financeiro VendaPX</strong> permite categorizar despesas e gerar relatórios por tipo:</p>
      <ul>
        <li><strong>Categorias personalizadas:</strong> Classifique cada despesa como fixa ou variável</li>
        <li><strong>Relatórios por tipo:</strong> Veja a proporção de cada tipo de despesa</li>
        <li><strong>Ponto de equilíbrio:</strong> Calcule automaticamente o faturamento mínimo</li>
        <li><strong>Comparativos:</strong> Analise a evolução das despesas ao longo do tempo</li>
        <li><strong>Integração:</strong> Despesas registradas alimentam a DRE e o fluxo de caixa</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Distinguir <strong>despesas fixas e variáveis</strong> é essencial para uma gestão financeira saudável. Essa classificação permite definir preços corretos, calcular o ponto de equilíbrio e tomar decisões mais inteligentes. Comece hoje a categorizar suas despesas e use essas informações para melhorar a rentabilidade do seu negócio.</p>
    `}],Dz=[{slug:"margem-de-lucro-como-calcular-aumentar",title:"Margem de Lucro: Como Calcular e Aumentar seus Resultados",description:"Aprenda a calcular a margem de lucro do seu negócio e descubra estratégias práticas para aumentar a rentabilidade usando dados financeiros precisos.",category:"financeiro",date:"2025-01-15",readTime:9,keywords:["margem de lucro","calcular margem de lucro","rentabilidade","gestão financeira","lucro empresa"],content:`
      <p>Entender a <strong>margem de lucro</strong> é um dos pilares fundamentais para qualquer empreendedor que deseja construir um negócio sustentável. Muitos empresários brasileiros operam durante meses ou até anos sem saber exatamente quanto de lucro líquido cada produto ou serviço gera. Essa falta de visibilidade pode ser catastrófica para a saúde financeira da empresa.</p>

      <h2>O que é Margem de Lucro?</h2>
      <p>A margem de lucro é a relação percentual entre o lucro obtido e a receita total gerada por um período. Ela indica quanto a empresa ganha de lucro a cada real faturado. Existem dois conceitos principais que você precisa dominar:</p>

      <ul>
        <li><strong>Margem de Lucro Bruto:</strong> Calculada subtraindo o custo dos produtos vendidos (CMV) da receita de vendas, dividido pela receita total. Ela mostra a rentabilidade básica das operações antes de despesas operacionais.</li>
        <li><strong>Margem de Lucro Líquido:</strong> Considera todas as despesas fixas e variáveis, impostos, encargos e outros custos. É o indicador mais realista do quanto a empresa efetivamente lucra.</li>
      </ul>

      <h2>Fórmulas para Calcular a Margem de Lucro</h2>
      <p>A fórmula da <strong>margem de lucro bruto</strong> é simples:</p>
      <p><code>(Receita de Vendas - CMV) / Receita de Vendas × 100</code></p>
      <p>Por exemplo, se sua loja faturou R$ 50.000 no mês e o custo dos produtos vendidos foi de R$ 30.000, sua margem bruta é de <strong>40%</strong>.</p>

      <p>Para a <strong>margem de lucro líquido</strong>, a fórmula é:</p>
      <p><code>Lucro Líquido / Receita Total × 100</code></p>
      <p>Se após pagar aluguel, salários, impostos, marketing e outras despesas, seu lucro líquido foi de R$ 5.000 sobre os mesmos R$ 50.000 de receita, sua margem líquida é de <strong>10%</strong>.</p>

      <h2>Por que Tantos Empresários Erram no Cálculo?</h2>
      <p>O erro mais comum é esquecer custos ocultos. Muitos empreendedores consideram apenas o custo de aquisição do produto e esquecem de incluir:</p>
      <ul>
        <li>Frete de entrada e frete para o cliente</li>
        <li>Impostos incidentes sobre a venda (ICMS, PIS, COFINS)</li>
        <li>Descontos concedidos em promoções</li>
        <li>Custos de embalagem e logística reversa</li>
        <li>Devoluções e quebras de estoque</li>
      </ul>
      <p>Esses esquecimentos fazem com que o empresário acredite que está tendo lucro quando na verdade está operando no prejuízo. Um <strong>sistema financeiro integrado</strong> como o do <a href="https://financeiro.vendapx.com.br">VendaPX Financeiro</a> facilita o rastreamento automático desses custos, eliminando cálculos manuais propensos a erros.</p>

      <h2>Quais são as Margens Ideais por Segmento?</h2>
      <p>Não existe uma margem universal ideal — ela varia conforme o setor. No entanto, como referência:</p>
      <ul>
        <li><strong>Comércio varejista:</strong> 20% a 40% de margem bruta é considerado saudável.</li>
        <li><strong>Alimentação (restaurantes, lanchonetes):</strong> 60% a 70% de margem bruta, mas margem líquida costuma ficar entre 5% e 15%.</li>
        <li><strong>Serviços profissionais:</strong> Margem bruta frequentemente acima de 50%, com margem líquida entre 15% e 30%.</li>
        <li><strong>Indústria:</strong> Margens variam enormemente, geralmente entre 10% e 30% de margem líquida.</li>
      </ul>

      <h2>Estratégias Práticas para Aumentar a Margem de Lucro</h2>

      <h3>1. Revise seus Preços de Venda</h3>
      <p>Muitos empresários praticam precificação por "feeling" ou apenas cobrindo o custo sem considerar a margem desejada. Utilize o <strong>método de markup</strong>: multiplique o custo do produto por um fator que cubra todos os custos e gere o lucro desejado. Com dados centralizados no <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a>, você visualiza instantaneamente a margem real de cada item.</p>

      <h3>2. Reduza Custos Operacionais</h3>
      <p>Analisar despesas recorrentes pode revelar gargalos inesperados. Negocie com fornecedores, busque alternativas mais econômicas para frete e revise contratos de serviços. Uma redução de 5% nos custos operacionais pode representar um aumento significativo na margem líquida.</p>

      <h3>3. Foque em Produtos de Maior Margem</h3>
      <p>Nem todos os produtos geram o mesmo retorno. Identifique quais itens do seu catálogo oferecem as maiores margens e direcione seus esforços de venda para eles. Use relatórios de vendas integrados para descobrir quais produtos mais contribuem para o lucro.</p>

      <h3>4. Controle o Estoque com Precisão</h3>
      <p>Produtos parados no estoque representam capital imobilizado. Um controle de estoque eficiente, como o oferecido pelo <a href="https://estoque.vendapx.com.br">VendaPX Controle de Estoque</a>, evita excesso de inventário e reduz perdas por validade ou obsolescência.</p>

      <h3>5. Implemente uma Política de Descontos Inteligente</h3>
      <p>Descontos indiscriminados destroem a margem. Defina regras claras: desconto máximo permitido por produto, períodos de promoção delimitados e condições específicas. No <a href="https://pdv.vendapx.com.br">PDV VendaPX</a>, é possível configurar limites de desconto por vendedor e por produto.</p>

      <h2>Monitore sua Margem Continuamente</h2>
      <p>Calcular a margem de lucro uma vez não basta. O mercado muda, custos flutuam e novos concorrentes surgem. O ideal é monitorar indicadores financeiros semanalmente ou, no mínimo, mensalmente. Dashboards automatizados que consolidam dados de vendas, custos e despesas em tempo real são ferramentas essenciais para isso.</p>
      <p>Com o ecossistema <strong>VendaPX</strong>, os dados do ponto de venda, do estoque e da gestão financeira se integram automaticamente, fornecendo uma visão clara e atualizada da margem de lucro do negócio sem a necessidade de planilhas manuais.</p>

      <h2>Conclusão</h2>
      <p>Saber calcular e monitorar a margem de lucro não é opcional — é uma necessidade para qualquer empresa que queira crescer de forma saudável. Comece revisando seus custos, defina metas de margem para cada linha de produto e utilize ferramentas de gestão que automatizem o processo. Com <strong>R$20/mês</strong>, o ecossistema VendaPX oferece tudo isso de forma integrada e acessível para pequenos negócios brasileiros.</p>
    `},{slug:"fechamento-mensal-rotina-essencial",title:"Fechamento Mensal: A Rotina Essencial para Saúde Financeira",description:"Saiba como montar uma rotina de fechamento mensal eficiente que garante controle financeiro, reduz erros e melhora a tomada de decisão no seu negócio.",category:"financeiro",date:"2025-02-03",readTime:10,keywords:["fechamento mensal","rotina financeira","controle financeiro","encerramento do mês","gestão financeira empresas"],content:`
      <p>O <strong>fechamento mensal</strong> é uma das rotinas mais importantes e, paradoxalmente, mais negligenciadas por pequenos empresários brasileiros. Muitos operam durante todo o mês sem um ponto de parada para validar números, conciliar contas e entender se o negócio realmente foi para frente. Sem essa prática, decisões são tomadas no escuro.</p>

      <h2>O que é o Fechamento Mensal?</h2>
      <p>O fechamento mensal é o processo de consolidação de todas as movimentações financeiras de um período — geralmente um mês calendário — em um resumo que permite ao empresário entender:</p>
      <ul>
        <li>Qual foi a <strong>receita total</strong> do período</li>
        <li>Quais foram os <strong>custos fixos e variáveis</strong></li>
        <li>Qual o <strong>lucro ou prejuízo</strong> apurado</li>
        <li>Se há <strong>contas a pagar ou receber</strong> pendentes</li>
        <li>Como o fluxo de caixa se comportou ao longo do mês</li>
      </ul>

      <h2>Por que Tantos Empresários Evitam o Fechamento?</h2>
      <p>As razões são surpreendentemente comuns:</p>
      <ul>
        <li><strong>Falta de organização:</strong> dados espalhados em planilhas, cadernos e aplicativos diferentes.</li>
        <li><strong>Receio de ver números ruins:</strong> muitos empresários evitam encarar a realidade financeira.</li>
        <li><strong>Achismo de que é muito trabalho:</strong> sem um processo estruturado, o fechamento realmente consome muito tempo.</li>
        <li><strong>Falta de conhecimento:</strong> não saber quais indicadores devem ser analisados.</li>
      </ul>

      <h2>Passo a Passo para um Fechamento Mensal Eficiente</h2>

      <h3>Passo 1: Conciliação Bancária</h3>
      <p>Verifique todas as movimentações da conta bancária da empresa e compare com os registros internos. Identifique discrepancias, pagamentos não registrados ou recebimentos pendentes. Uma <strong>conciliação bancária automatizada</strong>, como a oferecida pelo <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a>, reduz drasticamente o tempo dessa etapa.</p>

      <h3>Passo 2: Análise da Receita</h3>
      <p>Compile todas as fontes de receita: vendas no <a href="https://pdv.vendapx.com.br">PDV</a>, vendas online, prestações de serviço, receitas financeiras. Compare com o mês anterior e com o mesmo período do ano anterior para identificar tendências.</p>

      <h3>Passo 3: Listagem de Despesas Fixas</h3>
      <p>Todas as despesas que se repetem mensalmente devem ser registradas e categorizadas: aluguel, salários, encargos sociais, contas de consumo (água, luz, internet), assinaturas de software e outros.</p>

      <h3>Passo 4: Registro de Despesas Variáveis</h3>
      <p>Inclua compras avulsas, frete, material de escritório, marketing pontual e qualquer despesa não recorrente. Esses itens frequentemente passam despercebidos e comprometem a margem de lucro.</p>

      <h3>Passo 5: Apuração do Lucro Líquido</h3>
      <p>Com receitas e despesas categorizadas, calcule o lucro líquido do período. Se o resultado for negativo, identifique os principais responsáveis pela perda. Um <strong>sistema de gestão integrado</strong> facilita essa análise ao consolidar dados automaticamente.</p>

      <h3>Passo 6: Revisão do Fluxo de Caixa</h3>
      <p>Mesmo empresas com lucro podem ter problemas de fluxo de caixa. Verifique a entrada e saída de dinheiro ao longo do mês, identifique picos e vales, e planeje o próximo período com base nesses dados.</p>

      <h3>Passo 7: Pagamentos e Recebimentos Pendentes</h3>
      <p>Liste todas as contas a pagar que vencem no próximo mês e todos os recebimentos esperados. Isso permite antecipar necessidades de capital de giro e evitar surpresas.</p>

      <h3>Passo 8: Análise Comparativa e Metas</h3>
      <p>Compare os resultados com as metas estabelecidas. Se houve desvios significativos, investigue as causas. Defina metas ajustadas para o próximo mês.</p>

      <h2>Dicas para Automatizar o Fechamento</h2>
      <p>O fechamento mensal não precisa ser um processo doloroso. Com ferramentas adequadas, grande parte do trabalho pode ser automatizada:</p>
      <ul>
        <li>Use um <strong>sistema financeiro</strong> que importe automaticamente movimentações bancárias</li>
        <li>Configure <strong>categorias de despesas</strong> padronizadas para agilizar a classificação</li>
        <li>Gere <strong>relatórios automáticos</strong> que consolidem dados de vendas, estoque e finanças</li>
        <li>Integre o PDV com o sistema financeiro para que as vendas já entrem no fechamento sem digitação manual</li>
      </ul>

      <h2>O Papel do Ecossistema VendaPX no Fechamento Mensal</h2>
      <p>Quando você utiliza o ecossistema <strong>VendaPX</strong>, o fechamento mensal se torna significativamente mais simples. Os dados do <a href="https://pdv.vendapx.com.br">PDV</a> são automaticamente contabilizados no <a href="https://financeiro.vendapx.com.br">Sistema Financeiro</a>, as entradas de estoque e saídas são registradas no <a href="https://estoque.vendapx.com.br">Controle de Estoque</a>, e tudo converge para um painel centralizado. O resultado é um fechamento que leva minutos, não dias.</p>

      <h2>Erros Comuns no Fechamento Mensal</h2>
      <ul>
        <li><strong>Esquecer despesas ocultas:</strong> juros de parcelamentos, taxas de maquininha, custos de embalagem.</li>
        <li><strong>Não conciliar estoque:</strong> diferenças entre estoque físico e sistemas podem indicar perdas ou furtos.</li>
        <li><strong>Ignorar impostos:</strong> o Imposto de Renda e contribuições patronais não podem ser esquecidos.</li>
        <li><strong>Não revisar contratos:</strong> preços de fornecedores podem ter mudado sem aviso prévio.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Estabelecer uma rotina de fechamento mensal é um dos investimentos mais rentáveis que um empresário pode fazer. Com o processo certo e ferramentas integradas, você ganha clareza sobre a saúde financeira do seu negócio e pode tomar decisões embasadas. Por apenas <strong>R$20/mês</strong>, o ecossistema VendaPX automatiza grande parte desse trabalho para você.</p>
    `},{slug:"impostos-para-empresas-entenda-o-basico",title:"Impostos para Empresas: Entenda o Básico para Não Ser Pego de Surpresa",description:"Guia simplificado dos principais impostos que empresas brasileiras precisam pagar, com dicas de como organizar suas finanças para ficar em dia.",category:"financeiro",date:"2025-02-20",readTime:11,keywords:["impostos para empresas","tributos brasileiros","ICMS","PIS","COFINS","simples nacional","obrigações fiscais"],content:`
      <p>Navegar pelo universo dos <strong>impostos brasileiros</strong> é um dos maiores desafios para pequenos empresários. O Brasil é conhecido pela complexidade tributária, e muitos negócios acabam pagando a mais — ou a menos — por falta de conhecimento básico. Entender os principais tributos é essencial para planejar finanças e evitar multas e penalidades.</p>

      <h2>Os Principais Impostos para Pequenas Empresas</h2>
      <p>A carga tributária varia conforme o regime tributário escolhido (Simples Nacional, Lucro Presumido ou Lucro Real). No entanto, alguns impostos são praticamente universais:</p>

      <h3>ICMS (Imposto sobre Circulação de Mercadorias e Serviços)</h3>
      <p>O ICMS incide sobre a <strong>venda de mercadorias</strong> e a prestação de alguns serviços. É um imposto estadual e varia de 4% a 18% dependendo do produto e da operação (interestadual ou estadual). Para empresas do comércio, o ICMS é frequentemente o maior custo tributário. É preciso ficar atento às substituições tributárias, que transferem a responsabilidade do recolhimento para o fabricante ou importador.</p>

      <h3>PIS e COFINS</h3>
      <p>O <strong>PIS</strong> (Programa de Integração Social) e a <strong>COFINS</strong> (Contribuição para Financiamento da Seguridade Social) são contribuições federais que incidem sobre a receita bruta. No Simples Nacional, eles estão diluídos na guia unificada (DAS). No Lucro Presumido e Lucro Real, são calculados separadamente. A alíquota combinada gira em torno de 9,25% no regime não-cumulativo.</p>

      <h3>ISS (Imposto Sobre Serviços)</h3>
      <p>Para empresas que prestam serviços, o ISS é o imposto municipal, com alíquota entre 2% e 5%. Ele incide sobre a receita de prestação de serviços e deve ser recolhido mensalmente à prefeitura.</p>

      <h3>IRPJ e CSLL</h3>
      <p>O <strong>IRPJ</strong> (Imposto de Renda Pessoa Jurídica) e a <strong>CSLL</strong> (Contribuição Social sobre o Lucro Líquido) são impostos federais sobre o lucro da empresa. No Simples Nacional, estão incluídos no DAS. No Lucro Presumido, a base de cálculo é uma porcentagem presumida da receita bruta.</p>

      <h3>INSS Patronal</h3>
      <p>Toda empresa que contrata funcionários precisa recolher a contribuição previdenciária patronal, que varia de 7,5% a 22,5% sobre a folha de pagamento, dependendo do enquadramento e fator Acidentário de Prevenção (FAP).</p>

      <h2>Simples Nacional: A Opção Mais Comum</h2>
      <p>A maioria das pequenas empresas brasileiras é enquadrada no <strong>Simples Nacional</strong>, que unifica vários tributos em uma única guia de pagamento (DAS). As faixas de faturamento vão de 1% a 33% dependendo da receita bruta acumulada e do tipo de atividade.</p>
      <p>Uma das vantagens do Simples é a <strong>simplicidade administrativa</strong>. No entanto, é importante avaliar se o enquadramento é realmente vantajoso, pois em alguns casos o Lucro Presumido pode resultar em carga tributária menor.</p>

      <h2>Como se Organizar para Pagar os Impostos Corretamente</h2>
      <ul>
        <li><strong>Mantenha registros atualizados:</strong> todas as vendas, compras e despesas devem estar devidamente registradas em sistemas confiáveis.</li>
        <li><strong>Atente-se aos vencimentos:</strong> multas por atraso no recolhimento de impostos são pesadas e corrosivas para o caixa.</li>
        <li><strong>Separar o dinheiro dos impostos:</strong> ao receber uma venda, já separe a parcela que corresponde aos tributos em uma conta separada.</li>
        <li><strong>Consulte um contador:</strong> o contador é seu aliado mais importante na questão fiscal.</li>
        <li><strong>Use tecnologia a seu favor:</strong> sistemas integrados de gestão facilitam a geração de informações para obrigações acessórias.</li>
      </ul>

      <h2>O Que Acontece Quem Não Paga ou Paga a Menos?</h2>
      <p>As consequências são severas:</p>
      <ul>
        <li><strong>Multas moratórias:</strong> acréscimos diários sobre o valor devido.</li>
        <li><strong>Juros SELIC:</strong> incidem sobre o valor não pago desde o vencimento.</li>
        <li><strong>Execução fiscal:</strong> a fazenda pode bloquear contas bancárias e penhorar bens.</li>
        <li><strong>Protesto e inscrição em dívida ativa:</strong> compromete a credibilidade e acesso a crédito.</li>
        <li><strong>Responsabilização pessoal:</strong> em casos graves, o sócio pode responder com seus bens pessoais.</li>
      </ul>

      <h2>Dicas Práticas para o Empreendedor</h2>
      <p>A melhor estratégia é <strong>antecipação</strong>. Crie um calendário fiscal com todos os vencimentos de impostos e obrigações acessórias. Mantenha um fundo reserve para impostos e nunca utilize esse dinheiro para outras finalidades. Um sistema financeiro como o <a href="https://financeiro.vendapx.com.br">VendaPX Financeiro</a> permite configurar alertas de vencimento e acompanhar a situação fiscal em tempo real.</p>

      <h2>Conclusão</h2>
      <p>Embora a tributária brasileira seja complexa, entender o básico já coloca o empresário muitos passos à frente. Mantenha seus registros em ordem, conte com um contador de confiança e utilize ferramentas de gestão que automatizem o controle financeiro. O <strong>ecossistema VendaPX</strong>, por apenas <strong>R$20/mês</strong>, ajuda você a manter suas finanças organizadas para que os impostos nunca sejam uma surpresa desagradável.</p>
    `},{slug:"financeiro-vs-contabilidade",title:"Gestão Financeira vs. Contabilidade: Qual a Diferença e Por Que Precisa de Ambas",description:"Entenda a diferença fundamental entre gestão financeira e contabilidade, e como cada uma contribui para a saúde do seu negócio.",category:"financeiro",date:"2025-03-10",readTime:8,keywords:["gestão financeira","contabilidade","diferença financeiro contabilidade","escrituração","analista financeiro"],content:`
      <p>Uma confusão muito comum entre pequenos empresários é achar que <strong>gestão financeira</strong> e <strong>contabilidade</strong> são a mesma coisa. Embora estejam intimamente relacionadas, elas têm objetivos, ferramentas e profissionais distintos. Entender essa diferença é crucial para tomar decisões assertivas.</p>

      <h2>O que é Gestão Financeira?</h2>
      <p>A gestão financeira é o conjunto de práticas e processos que visam <strong>otimizar os recursos financeiros</strong> da empresa no curto, médio e longo prazo. Ela responde perguntas como:</p>
      <ul>
        <li>Estamos tendo lucro este mês?</li>
        <li>Quanto precisamos faturar para cobrir todos os custos?</li>
        <li>Temos caixa suficiente para pagar as contas da próxima semana?</li>
        <li>Vale a pena investir em nova equipe ou equipamento?</li>
      </ul>
      <p>A gestão financeira é <strong>prospectiva e operacional</strong>. Ela olha para o presente e para o futuro, ajudando na tomada de decisão diária.</p>

      <h2>O que é Contabilidade?</h2>
      <p>A contabilidade é a <strong>escrituração formal</strong> de todas as transações financeiras da empresa, seguindo normas técnicas e legais. Seu objetivo principal é:</p>
      <ul>
        <li>Registrar fielmente todas as entradas e saídas financeiras</li>
        <li>Gerar demonstrações contábeis (DRE, Balanço Patrimonial)</li>
        <li>Cumprir obrigações acessórias e fiscais</li>
        <li>Fornecer informações para auditorias e análises tributárias</li>
      </ul>
      <p>A contabilidade é <strong>retrospectiva e documental</strong>. Ela olha para o que já aconteceu e garante que tudo esteja devidamente documentado e em conformidade com a lei.</p>

      <h2>Principais Diferenças na Prática</h2>
      <table>
        <thead>
          <tr><th>Aspecto</th><th>Gestão Financeira</th><th>Contabilidade</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Objetivo</strong></td><td>Planejar e controlar recursos</td><td>Registrar e documentar transações</td></tr>
          <tr><td><strong>Tempo</strong></td><td>Presente e futuro</td><td>Passado</td></tr>
          <tr><td><strong>Frequência</strong></td><td>Diária/semanal</td><td>Mensal/trimestral</td></tr>
          <tr><td><strong>Destinatário</strong></td><td>Gestores e empresários</td><td>Fazenda, banco, auditores</td></tr>
          <tr><td><strong>Flexibilidade</strong></td><td>Alta</td><td>Baixa (normas rígidas)</td></tr>
        </tbody>
      </table>

      <h2>Por Que Precisa de Ambas?</h2>
      <p>A contabilidade garante conformidade legal. A gestão financeira garante sobrevivência e crescimento. Uma empresa pode estar <strong>100% em dia com a receita federal</strong> e ainda assim estar quebrando por falta de controle financeiro do dia a dia. Da mesma forma, ter controle financeiro perfeito mas neglectuar obrigações contábeis pode gerar multas pesadas.</p>

      <h2>Como o Ecossistema VendaPX Facilita Essa Separação?</h2>
      <p>O <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a> foi projetado para fornecer ao empresário <strong>informações gerenciais</strong> que vão além da escrituração contábil. Com ele, você acompanha fluxo de caixa, margens de lucro, despesas por categoria e indicadores de performance — tudo de forma visual e intuitiva.</p>
      <p>Ao mesmo tempo, os dados gerados pelo sistema são facilmente exportáveis para que seu contador realize a escrituração contábil com precisão, garantindo conformidade fiscal sem retrabalho.</p>

      <h2>Quando Contratar Cada Profissional?</h2>
      <ul>
        <li><strong>Contador:</strong> desde o primeiro dia de operação. É obrigação legal ter um contador responsável pela empresa.</li>
        <li><strong>Analista financeiro:</strong> quando o faturamento começa a crescer e as decisões financeiras ficam mais complexas. Até lá, o próprio empresário pode assumir essa função com ajuda de ferramentas como o VendaPX.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Gestão financeira e contabilidade são complementares, não concorrentes. A primeira dá poder de decisão ao empresário; a segunda garante que tudo esteja em conformidade com a lei. Invista em ambas. Com o ecossistema <strong>VendaPX</strong> custando apenas <strong>R$20/mês</strong>, você tem a gestão financeira completa à disposição enquanto seu contador cuida da parte contábil.</p>
    `},{slug:"como-negociar-prazos-com-fornecedores",title:"Como Negociar Prazos com Fornecedores: Guia Prático para Empreendedores",description:"Aprenda técnicas eficazes de negociação com fornecedores para obter melhores prazos de pagamento, descontos e condições que fortaleçam seu fluxo de caixa.",category:"financeiro",date:"2025-04-02",readTime:9,keywords:["negociação com fornecedores","prazos de pagamento","fluxo de caixa","capital de giro","condições comerciais"],content:`
      <p>A relação com fornecedores é uma das mais estratégicas para qualquer empresa. Saber <strong>negociar prazos de pagamento</strong> e condições comerciais pode ser a diferença entre um fluxo de caixa saudável e um aperto financeiro constante.</p>

      <h2>Por Que Negociar Prazos é Essencial?</h2>
      <p>Prazos de pagamento mais longos significam mais tempo para receber dos seus clientes antes de precisar pagar seus fornecedores. Considere o seguinte cenário:</p>
      <ul>
        <li>Se você paga fornecedores em 30 dias mas recebe dos clientes em 30 dias, está equilibrado.</li>
        <li>Se paga em 7 dias mas recebe em 30, precisa de capital de giro para cobrir os 23 dias de diferença.</li>
        <li>Se paga em 30 dias mas recebe em 15, está usando dinheiro do fornecedor para financiar seu negócio — o cenário ideal.</li>
      </ul>

      <h2>Antes de Negociar: Esteja Preparado</h2>
      <p>Os fornecedores avaliam risco. Para obter melhores condições, você precisa demonstrar que é um parceiro confiável:</p>
      <ul>
        <li><strong>Mantenha sua reputação:</strong> pague em dia ou comunique antecipadamente qualquer problema.</li>
        <li><strong>Conheça seus números:</strong> saiba exatamente quanto compra por mês e qual seu histórico de pagamentos.</li>
        <li><strong>Tenha alternativas:</strong> não dependa de um único fornecedor. Ter opções fortalece sua posição.</li>
        <li><strong>Planeje suas compras:</strong> compras programadas permitem negociações melhores do que compras emergenciais.</li>
      </ul>

      <h2>Técnicas de Negociação Comprovadas</h2>

      <h3>1. Negocie em Volume</h3>
      <p>Quanto maior o volume de compra, maior seu poder de barganha. Considere antecipar compras ou agrupar pedidos para atingir patamares que desbloqueiem descontos e prazos estendidos.</p>

      <h3>2. Proponha Pagamento Antecipado com Desconto</h3>
      <p>Se você tem caixa disponível, ofereça pagar antecipadamente em troca de um desconto. Muitos fornecedores aceitam reduções de 2% a 5% por pagamento à vista ou antecipado.</p>

      <h3>3. Use o Prazo como Moeda de Negociação</h3>
      <p>Se não consegue obter desconto, peça prazos maiores. Um prazo de 60 ao invés de 30 dias pode liberar capital de giro significativo.</p>

      <h3>4. Estabeleça Parceria de Longo Prazo</h3>
      <p>Fornecedores valorizam clientes previsíveis. Ofereça fidelidade em troca de condições melhores. Contratos de exclusividade parcial ou metas de compra mensal podem ser moeda de troca.</p>

      <h3>5. Negocie Frete e Condições de Entrega</h3>
      <p>O frete é frequentemente uma despesa oculta. Negociar quem arca com o custo de frete pode representar economia significativa ao longo do tempo.</p>

      <h2>Erros Comuns ao Negociar com Fornecedores</h2>
      <ul>
        <li><strong>Aceitar a primeira proposta sem questionar:</strong> sempre há espaço para alguma melhoria.</li>
        <li><strong>Negociar apenas preço:</strong> prazo, frete, condições de devolução e suporte também têm valor.</li>
        <li><strong>Quebrar acordos:</strong> perder credibilidade pode fechar portas para sempre.</li>
        <li><strong>Não documentar:</strong> sempre formalize as condições acordadas em contrato ou pedido de compra.</li>
      </ul>

      <h2>Como Organizar os Prazos no Dia a Dia</h2>
      <p>Ter bons prazos não adianta se você não gerencia corretamente as datas de vencimento. Utilize um sistema financeiro que permita visualizar todas as contas a pagar organizadas por data de vencimento, com alertas automáticos. O <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a> oferece exatamente isso.</p>

      <h2>Cenários Reais de Negociação</h2>
      <p><strong>Cenário 1 — Padaria:</strong> Uma padaria que compra R$ 8.000 em ingredientes por mês pode negociar com o distribuidor um prazo de 45 dias ao invés de 15, comprometendo-se a manter o volume mensal. Isso libera R$ 8.000 de capital de giro.</p>
      <p><strong>Cenário 2 — Loja de Roupas:</strong> Uma loja que faz compras semestrais pode negociar 3% de desconto por pagamento antecipado. Em uma compra de R$ 50.000, isso representa R$ 1.500 de economia direta.</p>

      <h2>Conclusão</h2>
      <p>Negociar com fornecedores é uma habilidade essencial que impacta diretamente a saúde financeira do seu negócio. Esteja preparado, conheça seus números e nunca pare de buscar melhores condições. Com o <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a> e o <a href="https://estoque.vendapx.com.br">Controle de Estoque VendaPX</a> integrados, você terá dados concretos para sustentar suas negociações. Tudo isso por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"como-escolher-o-melhor-pdv",title:"Como Escolher o Melhor PDV para o Seu Negócio em 2025",description:"Guia completo com os critérios essenciais para escolher o sistema de PDV ideal para sua empresa, comparando funcionalidades, custos e integrações.",category:"pdv",date:"2025-04-18",readTime:10,keywords:["melhor PDV","sistema PDV","ponto de venda","PDV para loja","software PDV Brasil"],content:`
      <p>Escolher o <strong>PDV certo</strong> é uma das decisões mais impactantes para o dia a dia de um comércio. O sistema de ponto de venda é o coração operacional de qualquer loja — é onde as vendas acontecem, os estoques são movimentados e os dados financeiros são gerados. Uma escolha ruim gera frustração, perda de tempo e dinheiro.</p>

      <h2>Por Que a Escolha do PDV Importa Tanto?</h2>
      <p>O PDV não é apenas uma "máquina de vender". Ele é o principal ponto de coleta de dados do seu negócio. Um PDV bem escolhido:</p>
      <ul>
        <li>Agiliza o atendimento ao cliente</li>
        <li>Registra vendas com precisão fiscal</li>
        <li>Controla estoque em tempo real</li>
        <li>Gera relatórios para tomada de decisão</li>
        <li>Se integra com outros sistemas (financeiro, e-commerce)</li>
        <li>Reduz erros humanos e fraudes</li>
      </ul>

      <h2>Critérios Essenciais na Hora da Escolha</h2>

      <h3>1. Tipo de Negócio</h3>
      <p>Cada segmento tem necessidades específicas:</p>
      <ul>
        <li><strong>Lojas de roupa:</strong> precisam de controle por tamanho, cor e referência.</li>
        <li><strong>Alimentação:</strong> necessitam de integração com balança, comandas e delivery.</li>
        <li><strong>Padarias e mercearias:</strong> precisam de emissão de nota fiscal e controle de validade.</li>
        <li><strong>Serviços:</strong> demandam agendamento, controle de atendimentos e comissões.</li>
      </ul>

      <h3>2. Emissão de Nota Fiscal Eletrônica</h3>
      <p>Seu PDV deve ser capaz de emitir notas fiscais eletrônicas diretamente, sem necessidade de sistemas auxiliares. Verifique se ele é homologado pela SEFAZ do seu estado.</p>

      <h3>3. Integração com Outros Sistemas</h3>
      <p>O PDV não pode ser uma ilha. Ele precisa se comunicar com o <strong>controle de estoque</strong> e o <strong>sistema financeiro</strong>. O ecossistema <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> se integra nativamente com o <a href="https://estoque.vendapx.com.br">Controle de Estoque</a> e o <a href="https://financeiro.vendapx.com.br">Sistema Financeiro</a>.</p>

      <h3>4. Usabilidade e Treinamento</h3>
      <p>Um PDV complicado gera erros e lentidão no atendimento. A interface deve ser intuitiva, com botões grandes, layout personalizável e fluxo de venda simples.</p>

      <h3>5. Suporte Técnico</h3>
      <p>Quando o PDV para no meio de uma sexta-feira lotada, você precisa de suporte rápido e eficiente. Verifique os canais de atendimento e o tempo médio de resposta.</p>

      <h3>6. Custo vs. Benefício</h3>
      <p>PDVs caros nem sempre são os melhores. Muitas vezes, soluções com assinatura mensal acessível oferecem todas as funcionalidades necessárias. O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> custa apenas <strong>R$20/mês</strong> e inclui estoque, financeiro e PDV integrados.</p>

      <h3>7. Modo Offline</h3>
      <p>A internet cai. Seu PDV precisa continuar funcionando mesmo offline, sincronizando os dados automaticamente quando a conexão for restabelecida.</p>

      <h3>8. Hardware Compatível</h3>
      <p>Verifique se o PDV funciona com os equipamentos que você já possui: impressora fiscal, balança, leitor de código de barras, maquininha de cartão.</p>

      <h2>Erros Comuns na Escolha de PDV</h2>
      <ul>
        <li><strong>Escolher apenas pelo preço:</strong> um PDV barato sem estoque integrado gera retrabalho.</li>
        <li><strong>Não testar antes de comprar:</strong> sempre solicite um período de teste.</li>
        <li><strong>Ignorar a opinião da equipe:</strong> quem usa o PDV todos os dias tem opinião valiosa.</li>
        <li><strong>Esquecer do suporte:</strong> problemas técnicos são inevitáveis; o que importa é como são resolvidos.</li>
      </ul>

      <h2>Checklist para Avaliar um PDV</h2>
      <ol>
        <li>Emissão de NF-e e NFC-e automatizada?</li>
        <li>Controle de estoque integrado?</li>
        <li>Gestão financeira integrada?</li>
        <li>Funciona offline?</li>
        <li>Relatórios de vendas e indicadores?</li>
        <li>Suporte técnico acessível?</li>
        <li>Custo mensal acessível e previsível?</li>
        <li>Funciona no hardware disponível?</li>
      </ol>

      <h2>Conclusão</h2>
      <p>Escolher o PDV certo exige pesquisa, testes e clareza sobre as necessidades do seu negócio. Avalie a integração, usabilidade e suporte. O <strong>ecossistema VendaPX</strong> oferece um PDV completo integrado a estoque e finanças por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"fechamento-de-caixa-passo-a-passo",title:"Fechamento de Caixa: Passo a Passo para um Controle Impecável",description:"Aprenda o processo correto de fechamento de caixa, desde a contagem do dinheiro até a geração do relatório diário, evitando diferenças e inconsistências.",category:"pdv",date:"2025-05-05",readTime:8,keywords:["fechamento de caixa","contagem de caixa","relatório de caixa","PDV","controle diário"],content:`
      <p>O <strong>fechamento de caixa</strong> é o momento mais crítico do dia para qualquer estabelecimento comercial. É quando se verifica se o dinheiro que entra no caixa bate com o que foi registrado nas vendas. Uma rotina de fechamento bem estruturada evita prejuízos, identifica erros e garante a transparência nas operações.</p>

      <h2>Por Que o Fechamento de Caixa é Tão Importante?</h2>
      <p>Diferenças entre o valor esperado e o valor contado no caixa são mais comuns do que imaginamos. Elas podem indicar:</p>
      <ul>
        <li><strong>Erros de operação:</strong> vendas digitadas erradas, troco mal calculado, descontos não registrados.</li>
        <li><strong>Furtos internos ou externos:</strong> valores subtraídos do caixa sem registro.</li>
        <li><strong>Falhas no sistema:</strong> vendas que não foram salvas corretamente no PDV.</li>
        <li><strong>Problemas com formas de pagamento:</strong> valores de PIX, cartão ou boleto que não conferem.</li>
      </ul>

      <h2>Passo a Passo do Fechamento de Caixa</h2>

      <h3>1. Encerre Todas as Vendas do Dia no PDV</h3>
      <p>Antes de começar a contagem, certifique-se de que nenhuma venda está em aberto. Feche todas as operações pendentes no <a href="https://pdv.vendapx.com.br">PDV</a>.</p>

      <h3>2. Imprima o Relatório de Vendas do Dia</h3>
      <p>O relatório consolidado deve listar: total de vendas por forma de pagamento (dinheiro, PIX, cartão de crédito, cartão de débito), número de transações, descontos aplicados e devoluções realizadas.</p>

      <h3>3. Separe o Dinheiro por Forma de Pagamento</h3>
      <p>Retire o dinheiro do compartilhamento do caixa e separe: dinheiro físico para contagem, comprovantes de PIX, cupons de cartão.</p>

      <h3>4. Conte o Dinheiro Físico</h3>
      <p>Conte o dinheiro duas vezes para garantir. Utilize uma contagem organizada: primeiro cédulas de maior valor, depois as de menor. Some o valor de cada nota e compare com o esperado.</p>

      <h3>5. Calcule o Troco Inicial</h3>
      <p>O caixa começa o dia com um valor de troco pré-definido. Subtraia esse valor do total contado para obter o valor efetivamente arrecadado em dinheiro.</p>

      <h3>6. Registre as Diferenças</h3>
      <p>Se o valor contado for diferente do esperado, registre a diferença (sobra ou falta). Pequenas diferenças de centavos são normais, mas diferenças maiores devem ser investigadas.</p>

      <h3>7. Confirme os Valores Eletrônicos</h3>
      <p>Verifique os totais de PIX, cartão de crédito e débito no sistema. Compare com os comprovantes de transação. Lembre-se de que valores de cartão podem sofrer liquidação com desconto da operadora.</p>

      <h3>8. Gere o Relatório de Fechamento</h3>
      <p>O relatório final deve consolidar: total de vendas, total por forma de pagamento, descontos, devoluções, sobras/faltas e valor total arrecadado.</p>

      <h3>9. Deposite ou Resguarde o Dinheiro</h3>
      <p>Deposite o valor excedente ao troco em conta bancária ou guarde em cofre seguro. Nunca deixe grandes quantias no caixa.</p>

      <h2>Boas Práticas para o Fechamento</h2>
      <ul>
        <li><strong>Defina um horário fixo:</strong> todos os dias, na mesma hora.</li>
        <li><strong>Troque de turno com fechamento parcial:</strong> se houver mais de um caixa.</li>
        <li><strong>Fotografe o fechamento:</strong> mantenha registros visuais como backup.</li>
        <li><strong>Responsabilize o operador:</strong> cada operador deve assinar o relatório de seu turno.</li>
      </ul>

      <h2>Como o PDV VendaPX Automatiza o Fechamento</h2>
      <p>Com o <a href="https://pdv.vendapx.com.br">PDV VendaPX</a>, o relatório de fechamento é gerado automaticamente ao final do dia. Todos os valores por forma de pagamento são consolidados, e os dados são enviados diretamente para o <a href="https://financeiro.vendapx.com.br">Sistema Financeiro</a>.</p>

      <h2>Conclusão</h2>
      <p>Um fechamento de caixa bem feito é a base da confiança e da transparência nas operações comerciais. Siga o passo a passo, utilize um PDV confiável e estabeleça uma rotina consistente. Com o ecossistema <strong>VendaPX</strong>, esse processo se torna simples e confiável por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"multiplas-formas-de-pagamento",title:"Múltiplas Formas de Pagamento: Como Oferecer e Controlar Todas",description:"Descubra como aceitar e gerenciar múltiplas formas de pagamento no seu PDV, desde dinheiro e PIX até cartões e voucher, maximizando suas vendas.",category:"pdv",date:"2025-05-22",readTime:8,keywords:["formas de pagamento","PIX PDV","cartão de crédito","múltiplas formas pagamento","meios de pagamento"],content:`
      <p>Oferecer <strong>múltiplas formas de pagamento</strong> não é mais um diferencial — é uma necessidade. O consumidor brasileiro é exigente e espera poder pagar da forma que preferir. Negócios que limitam as opções de pagamento perdem vendas todos os dias.</p>

      <h2>As Principais Formas de Pagamento no Brasil</h2>
      <ul>
        <li><strong>Dinheiro:</strong> ainda relevante especialmente em negócios menores.</li>
        <li><strong>PIX:</strong> revolucionou o pagamento brasileiro. Instantâneo e sem custo para o receptor na maioria dos casos.</li>
        <li><strong>Cartão de Crédito:</strong> parcelamento em até 12x é essencial para produtos de maior valor.</li>
        <li><strong>Cartão de Débito:</strong> pagamento à vista com liquidação em D+1 ou D+2.</li>
        <li><strong>Boleto Bancário:</strong> ainda usado por clientes que preferem pagamento programado.</li>
        <li><strong>Vouchers e Vale-Compras:</strong> emitidos pela própria loja ou por marketplaces.</li>
      </ul>

      <h2>Como Aceitar Todas Essas Formas no PDV</h2>
      <p>A chave é ter um <strong>PDV que suporte múltiplas formas de pagamento</strong> e que registre corretamente cada transação. O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> permite configurar quantas formas de pagamento desejar e registrar cada venda com a composição exata utilizada pelo cliente.</p>

      <h3>Vendas Combinadas</h3>
      <p>É comum o cliente querer pagar parte em PIX e parte no cartão, ou usar um voucher complementar com dinheiro. Um bom PDV precisa suportar <strong>vendas com múltiplas formas em uma única transação</strong>.</p>

      <h2>Controle e Conciliação</h2>
      <p>Aceitar muitas formas de pagamento sem controle é receita para dor de cabeça. Cada forma tem suas particularidades:</p>
      <ul>
        <li><strong>Dinheiro:</strong> precisa de contagem física rigorosa no fechamento de caixa.</li>
        <li><strong>PIX:</strong> confirmação instantânea, mas é necessário cruzar com o relatório do banco.</li>
        <li><strong>Cartão:</strong> a liquidação vem com desconto da operadora e pode levar dias.</li>
        <li><strong>Boleto:</strong> prazo de compensação de 1 a 3 dias úteis.</li>
      </ul>
      <p>O <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a> registra automaticamente cada entrada de pagamento, facilitando a conciliação diária e mensal.</p>

      <h2>Estratégias para Maximizar as Vendas</h2>

      <h3>Destaque o PIX</h3>
      <p>Como o PIX não gera custo de antecipação para o lojista, incentivá-lo com um pequeno desconto (1% a 3%) pode ser vantajoso.</p>

      <h3>Ofereça Parcelamento Inteligente</h3>
      <p>Para produtos de maior valor, considere absorver o custo do juros até 3x para aumentar a conversão, e repassar juros acima de 3x.</p>

      <h3>Aceite Vouchers de Terceiros</h3>
      <p>Vouchers de marketplace (iFood, Rappi) e vale-refeição podem representar uma fatia significativa das vendas em negócios de alimentação.</p>

      <h2>Erros ao Gerenciar Múltiplas Formas de Pagamento</h2>
      <ul>
        <li><strong>Não conciliar diariamente:</strong> cada forma deve ser conferida todos os dias.</li>
        <li><strong>Esquecer taxas:</strong> cartão de crédito tem taxa que impacta a margem.</li>
        <li><strong>Não treinar a equipe:</strong> erros na digitação da forma de pagamento geram divergências.</li>
        <li><strong>Ignorar relatórios:</strong> sem análise, você não sabe qual forma é mais lucrativa.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Oferecer múltiplas formas de pagamento aumenta suas vendas, mas exige controle rigoroso. Utilize um PDV que suporte todas as formas e se integre ao sistema financeiro. O <strong>ecossistema VendaPX</strong> oferece isso com <strong>estoque, financeiro e PDV integrados por apenas R$20/mês</strong>.</p>
    `},{slug:"pdv-offline-essencial-backup",title:"PDV Offline: Por Que o Modo Sem Internet é Essencial para o Seu Negócio",description:"Conheça a importância do PDV offline, como funciona o backup de dados e por que sua loja não pode parar quando a internet cai.",category:"pdv",date:"2025-06-08",readTime:7,keywords:["PDV offline","backup PDV","PDV sem internet","continuidade operacional","sincronização dados"],content:`
      <p>Toda empresa que depende de um <strong>PDV</strong> já viveu o pesadelo: a internet cai no horário mais movimentado do dia. Filas se formam, clientes ficam irritados e vendas são perdidas. Ter um <strong>PDV com modo offline</strong> não é luxo — é necessidade operacional.</p>

      <h2>Por Que a Internet Cai Tão Frequentemente?</h2>
      <p>No Brasil, a infraestrutura de internet ainda apresenta instabilidade, especialmente em cidades do interior. As causas são diversas:</p>
      <ul>
        <li>Provedores com estrutura precária</li>
        <li>Problemas em cabeamento urbano</li>
        <li>Sobrecarga em horários de pico</li>
        <li>Questões climáticas (chuvas fortes, calor extremo)</li>
        <li>Manutenções não programadas</li>
      </ul>

      <h2>O que é PDV Offline?</h2>
      <p>Um PDV offline é capaz de <strong>continuar registrando vendas mesmo sem conexão com a internet</strong>. Os dados ficam armazenados localmente e são sincronizados automaticamente com os servidores assim que a conexão é restabelecida.</p>

      <h2>O que Funciona e o que Não Funciona no Offline?</h2>
      <ul>
        <li><strong>Funciona:</strong> registro de vendas, emissão de cupom não-fiscal, consulta de preços, abertura de caixa, consulta de estoque local.</li>
        <li><strong>Não funciona:</strong> emissão de NF-e/NFC-e (requer comunicação com a SEFAZ), pagamentos por PIX (necessita rede), consulta a sistemas externos.</li>
      </ul>

      <h2>Como o PDV VendaPX Trabalha com Offline</h2>
      <p>O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> foi projetado para operar em modo offline com sincronização automática. Quando a internet cai, a equipe continua vendendo normalmente. Cada transação é salva localmente com todos os dados. Quando a conexão volta, tudo é sincronizado com o <a href="https://estoque.vendapx.com.br">Controle de Estoque</a> e o <a href="https://financeiro.vendapx.com.br">Sistema Financeiro</a> sem intervenção manual.</p>

      <h2>Preparação para o Modo Offline</h2>
      <ul>
        <li><strong>Mantenha banco de dados local atualizado:</strong> antes de cada dia de operação.</li>
        <li><strong>Treine a equipe:</strong> todos devem saber como o PDV se comporta offline.</li>
        <li><strong>Tenha um plano B para pagamento:</strong> máquininha de cartão com chip que funcione sem internet.</li>
        <li><strong>Verifique a sincronização diariamente:</strong> confirme que os dados foram sincronizados corretamente.</li>
      </ul>

      <h2>Benefícios Além da Continuidade</h2>
      <ul>
        <li><strong>Redução de perdas:</strong> vendas que deixariam de acontecer são registradas normalmente.</li>
        <li><strong>Melhor experiência do cliente:</strong> nenhuma fila parada por "falta de internet".</li>
        <li><strong>Segurança de dados:</strong> backup local garante que nada se perca em queda de conexão.</li>
        <li><strong>Operação em feiras e eventos:</strong> locais sem internet fixa podem operar normalmente.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Um PDV que para quando a internet cai é um PDV que gera prejuízo. Invista em uma solução que opere offline com sincronização automática. O <strong>ecossistema VendaPX</strong> garante continuidade operacional total por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"integracao-com-balanca-como-funciona",title:"Integração com Balança: Como Funciona e Por Que Você Precisa Disso",description:"Entenda como a integração do PDV com balança eletrônica automatiza pesagens, evita erros e agiliza o atendimento em padarias, mercados e açougues.",category:"pdv",date:"2025-06-25",readTime:8,keywords:["integração balança","PDV balança eletrônica","pesagem automática","padaria PDV","açougue sistema"],content:`
      <p>Para negócios que vendem produtos por peso — como <strong>padarias, supermercados, açougues, hortifrutis e confeitarias</strong> — a integração do PDV com balança eletrônica é uma economia de tempo e dinheiro. Sem essa integração, o operador precisa digitar o peso manualmente, gerando erros e lentidão.</p>

      <h2>Como Funciona a Integração?</h2>
      <p>Quando o produto é colocado na balança, o peso é transmitido automaticamente para o <strong>PDV</strong> via conexão serial, USB ou rede. O sistema multiplica o peso pelo preço por kg cadastrado e gera o preço final. O processo leva menos de 2 segundos.</p>
      <ul>
        <li><strong>Conexão serial (RS-232):</strong> a mais tradicional, direta da balança ao computador.</li>
        <li><strong>USB:</strong> moderna e plug-and-play, sem necessidade de configuração complexa.</li>
        <li><strong>Rede (TCP/IP):</strong> para balanças com conectividade de rede, ideal para lojas maiores.</li>
      </ul>

      <h2>Produtos que Mais se Beneficiam</h2>
      <ul>
        <li><strong>Açougues:</strong> carnes com preços diferentes por corte, pesadas no mesmo atendimento.</li>
        <li><strong>Hortifrutis:</strong> frutas e legumes com preços variáveis por safra.</li>
        <li><strong>Padarias:</strong> bolos, pães e recheios vendidos por peso.</li>
        <li><strong>Delicatessens:</strong> queijos, embutidos e conservas pesados sob demanda.</li>
        <li><strong>Supermercados:</strong> produtos a granel e peixes frescos.</li>
      </ul>

      <h2>Erros que a Integração Elimina</h2>
      <ul>
        <li><strong>Erro de digitação:</strong> o peso digitado incorretamente gera cobrança a maior ou menor.</li>
        <li><strong>Produto trocado:</strong> sem integração, é fácil registrar o preço de um produto em vez de outro.</li>
        <li><strong>Lentidão no atendimento:</strong> pesar, anotar, digitar — a integração reduz etapas.</li>
        <li><strong>Divergência de estoque:</strong> peso incorreto gera estoque desatualizado.</li>
      </ul>

      <h2>Balanças Compatíveis com o PDV VendaPX</h2>
      <p>O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> é compatível com as principais marcas de balanças eletrônicas do mercado brasileiro, incluindo Filizola, Toledo, Plomm e Urano. A configuração é feita uma única vez.</p>

      <h2>Configuração Básica</h2>
      <ol>
        <li>Conecte a balança ao computador via cabo serial ou USB.</li>
        <li>Cadastre os produtos com o código PLU (Price Look-Up) correspondente.</li>
        <li>Configure no PDV o modelo e protocolo de comunicação da balança.</li>
        <li>Teste a integração com um produto de teste antes de iniciar as vendas.</li>
      </ol>

      <h2>Benefícios Operacionais</h2>
      <ul>
        <li><strong>Velocidade no atendimento:</strong> redução de 30% a 50% no tempo por venda de produto pesado.</li>
        <li><strong>Exatidão no preço:</strong> zero erros de digitação de peso.</li>
        <li><strong>Controle de perdas:</strong> peso exato registrado no estoque evita desvios.</li>
        <li><strong>Melhor experiência do cliente:</strong> atendimento mais ágil e transparente.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A integração com balança eletrônica transforma a operação de qualquer negócio que vende produtos por peso. Elimina erros, agiliza o atendimento e melhora o controle de estoque. Com o <strong>ecossistema VendaPX</strong>, essa integração é nativa por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"vendas-no-balcao-vs-delivery",title:"Vendas no Balcão vs. Delivery: Como Gerenciar os Dois Canais no PDV",description:"Saiba como equilibrar as operações de venda no balcão e delivery, integrando os dois canais no mesmo PDV para otimizar estoque e financeiro.",category:"pdv",date:"2025-07-10",readTime:9,keywords:["vendas balcão delivery","PDV delivery","canais de venda","gestão multicanal","iFood PDV"],content:`
      <p>O <strong>delivery</strong> cresceu exponencialmente no Brasil e se tornou uma fonte essencial de receita para restaurantes, padarias, farmácias e muitos outros segmentos. Gerenciar vendas no balcão e delivery simultaneamente apresenta desafios operacionais que precisam ser resolvidos com tecnologia e organização.</p>

      <h2>Os Desafios da Operação Multicanal</h2>
      <p>Quando uma loja atende clientes no balcão e por delivery ao mesmo tempo, problemas comuns surgem:</p>
      <ul>
        <li><strong>Estoque insuficiente:</strong> um produto vendido no balcão pode acabar antes de uma encomenda de delivery.</li>
        <li><strong>Tempos de preparo diferentes:</strong> o cliente no balcão espera menos do que o de delivery.</li>
        <li><strong>Priorização de pedidos:</strong> sem regras claras, a equipe pode confundir a ordem de atendimento.</li>
        <li><strong>Relatórios fragmentados:</strong> sem integração, cada canal gera dados isolados.</li>
      </ul>

      <h2>Como Integrar Balcão e Delivery no PDV</h2>
      <p>A solução é ter um <strong>PDV que unifique todos os canais</strong> em uma única plataforma. O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> permite registrar vendas presenciais e de delivery no mesmo sistema, com estoque compartilhado e financeiro consolidado.</p>

      <h3>Integração com Marketplaces de Delivery</h3>
      <p>Plataformas como iFood, Rappi e Uber Eats geram pedidos que precisam entrar automaticamente no PDV. A integração evita a necessidade de digitar o pedido novamente, reduzindo erros e agilizando o fluxo.</p>

      <h3>Controle de Estoque Unificado</h3>
      <p>O estoque deve ser <strong>único e compartilhado</strong> entre todos os canais. Quando um produto é vendido no balcão, o estoque é baixado automaticamente nos canais de delivery. O <a href="https://estoque.vendapx.com.br">Controle de Estoque VendaPX</a> garante essa sincronização em tempo real.</p>

      <h2>Estratégias para Equilibrar os Canais</h2>

      <h3>Defina Regras de Priorização</h3>
      <p>Estabeleça com a equipe regras claras: pedidos de delivery com horário agendado têm prioridade? Clientes no balcão são atendidos primeiro?</p>

      <h3>Controle os Horários de Pico</h3>
      <p>Se delivery e balcão têm picos no mesmo horário, considere reforçar a equipe ou limitar pedidos de delivery nesses períodos.</p>

      <h3>Mantenha Cardápios Sincronizados</h3>
      <p>Alterações de preço ou indisponibilidade devem refletir em todos os canais simultaneamente.</p>

      <h2>Análise de Performance por Canal</h2>
      <p>Um dos maiores benefícios de integrar canais é a capacidade de <strong>analisar a performance de cada um</strong>. Qual canal gera mais receita? Qual tem maior margem? Relatórios consolidados do <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a> respondem essas perguntas com dados reais.</p>

      <h2>Custos por Canal</h2>
      <ul>
        <li><strong>Balcão:</strong> menor custo operacional, mas depende de localização e fluxo de pessoas.</li>
        <li><strong>Delivery próprio:</strong> custo de moto/veículo, entregadores e combustível.</li>
        <li><strong>Marketplace:</strong> comissão de 20% a 35% sobre o valor do pedido.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Operar balcão e delivery ao mesmo tempo é realidade para a maioria dos negócios de alimentação e varejo. A chave é integrar tudo em um único sistema. O <strong>ecossistema VendaPX</strong> oferece integração completa por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"comissao-de-vendedores-como-calcular",title:"Comissão de Vendedores: Como Calcular e Gerenciar no PDV",description:"Aprenda a implementar um sistema transparente de comissão de vendedores, desde o cálculo até o pagamento, usando dados do PDV.",category:"pdv",date:"2025-07-28",readTime:9,keywords:["comissão vendedor","cálculo comissão","gestão de equipe","incentivo vendas","PDV comissão"],content:`
      <p>Um bom sistema de <strong>comissão de vendedores</strong> pode transformar a performance da sua equipe de vendas. Quando o vendedor sabe que seu esforço impacta diretamente seu ganho, a motivação dispara. Mas para que funcione, o cálculo precisa ser justo, transparente e baseado em dados confiáveis.</p>

      <h2>Modelos Comuns de Cálculo de Comissão</h2>
      <ul>
        <li><strong>Percentual sobre a venda:</strong> o mais simples. O vendedor recebe X% sobre o valor total de suas vendas.</li>
        <li><strong>Percentual sobre o lucro:</strong> comissão apenas sobre o lucro gerado, incentivando vendas com maior margem.</li>
        <li><strong>Comissão escalonada:</strong> quanto mais vende, maior o percentual.</li>
        <li><strong>Comissão por produto:</strong> produtos diferentes têm comissões diferentes.</li>
        <li><strong>Meta + Comissão:</strong> o vendedor atinge uma meta mensal para desbloquear a comissão ou ganhar bônus.</li>
      </ul>

      <h2>Como Implementar no PDV</h2>
      <p>A chave é que cada venda registrada no PDV esteja <strong>vinculada ao vendedor</strong>. No <a href="https://pdv.vendapx.com.br">PDV VendaPX</a>, cada operador identifica-se ao iniciar o turno, e todas as vendas são registradas com seu nome. Isso permite calcular a comissão automaticamente.</p>

      <h3>Passos para Configurar</h3>
      <ol>
        <li>Cadastre os vendedores no sistema com seus dados e percentual de comissão.</li>
        <li>Defina as regras: por venda, por lucro, escalonada ou por produto.</li>
        <li>Configure o PDV para vincular cada transação ao vendedor logado.</li>
        <li>Gere relatórios de comissão ao final do período (semanal ou mensal).</li>
        <li>Revise e pague as comissões com base nos dados do relatório.</li>
      </ol>

      <h2>Erros Comuns na Gestão de Comissões</h2>
      <ul>
        <li><strong>Falta de transparência:</strong> se o vendedor não confia no cálculo, a motivação cai.</li>
        <li><strong>Não considerar devoluções:</strong> comissionar uma venda devolvida gera prejuízo.</li>
        <li><strong>Comissão sem meta:</strong> sem uma referência de desempenho, o sistema perde eficácia.</li>
        <li><strong>Cálculo manual:</strong> planilhas manuais são propensas a erros e geram desconfiança.</li>
      </ul>

      <h2>Dicas para um Sistema de Comissão Eficaz</h2>
      <ul>
        <li><strong>Mantenha o cálculo simples e verificável:</strong> o vendedor deve conseguir conferir seu próprio cálculo.</li>
        <li><strong>Pague pontualmente:</strong> atraso no pagamento de comissões destrói a confiança.</li>
        <li><strong>Revise periodicamente:</strong> ajuste os percentuais conforme o mercado e a performance.</li>
        <li><strong>Comunique resultados:</strong> compartilhe rankings e conquistas para fomentar competição saudável.</li>
        <li><strong>Considere bônus especiais:</strong> para vendas de produtos com estoque alto ou margem elevada.</li>
      </ul>

      <h2>Integração com o Sistema Financeiro</h2>
      <p>As comissões são uma despesa operacional que deve ser registrada no <a href="https://financeiro.vendapx.com.br">Sistema Financeiro</a>. Ao gerar relatórios de comissão diretamente do PDV e integrá-los ao financeiro, você mantém a visão completa de custos e margens.</p>

      <h2>Conclusão</h2>
      <p>Um sistema de comissão bem implementado é uma ferramenta poderosa de gestão. Use dados reais do PDV para calcular com precisão e mantenha transparência total. O <strong>ecossistema VendaPX</strong> suporta cálculo e gestão de comissões integrados por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"ticket-medio-como-aumentar-vendas",title:"Ticket Médio: Como Aumentar Suas Vendas sem Aumentar o Tráfego",description:"Descubra estratégias comprovadas para elevar o ticket médio do seu negócio, fazendo cada cliente gastar mais a cada compra.",category:"pdv",date:"2025-08-12",readTime:9,keywords:["ticket médio","aumentar vendas","cross-sell","upsell","estratégias varejo"],content:`
      <p>Aumentar o <strong>ticket médio</strong> é uma das estratégias mais eficientes para crescer a receita sem precisar investir pesado em marketing ou atração de novos clientes. O ticket médio representa o valor médio gasto por cliente em cada transação.</p>

      <h2>Como Calcular o Ticket Médio</h2>
      <p>A fórmula é simples:</p>
      <p><code>Ticket Médio = Receita Total / Número de Transações</code></p>
      <p>Se sua loja faturou R$ 50.000 no mês com 1.000 transações, seu ticket médio é <strong>R$ 50,00</strong>. Elevar esse valor para R$ 60,00 representaria um aumento de R$ 10.000 no faturamento mensal — sem um único cliente novo.</p>

      <h2>Estratégias Comprovadas para Aumentar o Ticket Médio</h2>

      <h3>1. Upsell (Venda Ascendente)</h3>
      <p>Ofereça ao cliente uma versão superior do produto que ele pretende comprar. Exemplos:</p>
      <ul>
        <li>"Você quer o modelo básico? Por R$ 30 a mais, leva o premium com garantia estendida."</li>
        <li>"Essa camisa fica incrível com essa calça que acabou de chegar."</li>
      </ul>

      <h3>2. Cross-sell (Venda Cruzada)</h3>
      <p>Ofereça produtos complementares à compra já realizada:</p>
      <ul>
        <li>"Vai levar o celular? Temos capas e fones com 10% de desconto na compra junto."</li>
        <li>"O bolo já vai sair — quer levar café para acompanhar?"</li>
      </ul>

      <h3>3. Embalagens e Kits</h3>
      <p>Reúna produtos relacionados em kits com preço especial. O cliente percebe economia e você vende mais unidades. No <a href="https://pdv.vendapx.com.br">PDV VendaPX</a>, é possível criar kits e combos aplicados automaticamente.</p>

      <h3>4. Política de Frete Grátis Acima de um Valor</h3>
      <p>Se o ticket médio é R$ 50 e o frete custa R$ 15, ofereça frete grátis acima de R$ 70. Muitos clientes adicionam itens ao carrinho para atingir o valor mínimo.</p>

      <h3>5. Parcelamento sem Juros</h3>
      <p>Produtos parcelados em até 3x sem juros tendem a vender mais e com valor unitário maior.</p>

      <h3>6. Programas de Fidelidade</h3>
      <p>Clientes que acumulam pontos ou benefícios tendem a comprar mais vezes e em maiores quantidades.</p>

      <h2>Como o PDV Ajuda a Elevar o Ticket Médio</h2>
      <p>Um <a href="https://pdv.vendapx.com.br">PDV inteligente</a> pode sugerir produtos complementares automaticamente quando um item é registrado. Lembretes na tela do operador como "Sugira capa para este celular" transformam cada atendimento em oportunidade.</p>

      <h2>Erros ao Tentar Aumentar o Ticket Médio</h2>
      <ul>
        <li><strong>Sobrevender:</strong> se o cliente sentir pressão, pode desistir da compra.</li>
        <li><strong>Oferecer produtos irrelevantes:</strong> a sugestão precisa fazer sentido para o cliente.</li>
        <li><strong>Ignorar a experiência:</strong> o atendimento precisa ser consultivo, não agressivo.</li>
      </ul>

      <h2>Análise de Dados para Otimizar</h2>
      <p>Use relatórios de vendas para identificar: quais produtos têm maior potencial de upsell, quais combinações de cross-sell funcionam melhor. O <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a> consolida esses dados para análise.</p>

      <h2>Conclusão</h2>
      <p>Aumentar o ticket médio é uma das alavancas mais poderosas de crescimento. Com estratégias de upsell, cross-sell e kits, cada transação gera mais receita. O <strong>ecossistema VendaPX</strong> oferece ferramentas para implementar essas estratégias por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"devolucoes-no-pdv-processo-correto",title:"Devoluções no PDV: Como Implementar um Processo Correto e Sem Perdas",description:"Aprenda a gerenciar devoluções no PDV de forma organizada, registrando cada devolução, atualizando estoque e protegendo sua margem de lucro.",category:"pdv",date:"2025-09-01",readTime:8,keywords:["devoluções PDV","processo devolução","gestão devoluções","troca produto","controle devoluções"],content:`
      <p>As <strong>devoluções</strong> fazem parte de qualquer operação comercial. Seja por defeito, insatisfação ou erro na venda, é inevitável que parte dos produtos retorne. O problema não é a devolução em si — é não ter um processo claro para lidar com ela.</p>

      <h2>Por Que Ter um Processo de Devolução?</h2>
      <ul>
        <li><strong>Controle financeiro:</strong> cada devolução impacta a receita e precisa ser registrada corretamente.</li>
        <li><strong>Atualização de estoque:</strong> o produto devolvido precisa voltar ao estoque imediatamente.</li>
        <li><strong>Conformidade legal:</strong> o CDC garante o direito de arrependimento em 7 dias para compras online.</li>
        <li><strong>Análise de qualidade:</strong> se um produto é devolvido frequentemente, pode haver problema.</li>
      </ul>

      <h2>Processo de Devolução no PDV</h2>

      <h3>1. Identifique a Transação Original</h3>
      <p>O operador deve localizar a venda original no <a href="https://pdv.vendapx.com.br">PDV</a>, seja pelo número do cupom, data ou dados do cliente.</p>

      <h3>2. Verifique a Política de Devolução</h3>
      <p>Cada empresa deve ter uma política clara: prazo máximo, condições do produto, necessidade de nota fiscal. Essa política deve estar disponível ao cliente.</p>

      <h3>3. Registre a Devolução no Sistema</h3>
      <p>O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> permite registrar devoluções vinculadas à venda original, garantindo rastreabilidade completa. O registro inclui: motivo, produto(s), valor e forma de estorno.</p>

      <h3>4. Estorne o Pagamento</h3>
      <p>O estorno deve seguir a mesma forma de pagamento original:</p>
      <ul>
        <li><strong>Dinheiro:</strong> devolução em espécie imediata.</li>
        <li><strong>Cartão:</strong> solicitação de estorno à operadora (pode levar 1 a 30 dias).</li>
        <li><strong>PIX:</strong> devolução instantânea para a mesma chave.</li>
      </ul>

      <h3>5. Atualize o Estoque</h3>
      <p>O item devolvido deve retornar ao estoque automaticamente. Se estiver danificado, registre como perda. O <a href="https://estoque.vendapx.com.br">Controle de Estoque VendaPX</a> atualiza automaticamente.</p>

      <h2>Motivos Comuns de Devolução e Como Preveni-los</h2>
      <ul>
        <li><strong>Produto com defeito:</strong> inspecione antes da venda e mantenha garantia.</li>
        <li><strong>Produto não corresponde à expectativa:</strong> melhore descrições e fotos.</li>
        <li><strong>Arrependimento:</strong> inevitável em compras online; aceite e analise padrões.</li>
        <li><strong>Tamanho/medida errada:</strong> ofereça guia de tamanhos e atendimento orientado.</li>
      </ul>

      <h2>Impacto Financeiro das Devoluções</h2>
      <p>Devoluções reduzem a receita real. Monitorar essa taxa mensalmente é essencial. Relatórios do <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a> destacam devoluções e seu impacto na receita líquida.</p>

      <h2>Boas Práticas</h2>
      <ul>
        <li>Torne a política de devolução <strong>clara e acessível</strong>.</li>
        <li>Treine a equipe para <strong>lidar com empatia e profissionalismo</strong>.</li>
        <li>Mantenha um <strong>cadastro de motivos</strong> para análise posterior.</li>
        <li>Revise mensalmente a <strong>taxa de devolução</strong> por produto e por vendedor.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Um processo de devolução bem estruturado protege sua margem, mantém o estoque correto e preserva a relação com o cliente. O <strong>ecossistema VendaPX</strong> gerencia devoluções de forma integrada por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"promocoes-e-descontos-no-sistema",title:"Promoções e Descontos no Sistema: Como Fazer sem Quebrar a Margem",description:"Saiba como configurar promoções e descontos no PDV de forma controlada, protegendo sua margem de lucro e maximizando o volume de vendas.",category:"pdv",date:"2025-09-18",readTime:9,keywords:["promoções PDV","descontos controlados","gestão promoções","margem de lucro","estratégia precificação"],content:`
      <p><strong>Promoções e descontos</strong> são ferramentas poderosas para atrair clientes e movimentar estoque, mas quando mal utilizados, podem destruir a margem de lucro e criar clientes que só compram em promoção. O segredo está na execução controlada e estratégica.</p>

      <h2>Os Riscos de Descontos sem Controle</h2>
      <ul>
        <li><strong>Erosão da margem:</strong> descontos excessivos retiram o lucro de vendas que já eram apertadas.</li>
        <li><strong>Expectativa do cliente:</strong> se o cliente aprende que sempre terá desconto, nunca paga preço cheio.</li>
        <li><strong>Desvalorização da marca:</strong> descontos constantes comunicam que o produto "não vale" o preço original.</li>
        <li><strong>Impacto no estoque:</strong> promoções mal planejadas geram ruptura de itens populares.</li>
      </ul>

      <h2>Tipos de Promoção</h2>

      <h3>Desconto Percentual</h3>
      <p>O mais comum: "20% OFF em todo o estoque". Funciona para limpar estoque antigo ou em datas comemorativas. No <a href="https://pdv.vendapx.com.br">PDV VendaPX</a>, descontos podem ser aplicados por produto, categoria ou na venda total.</p>

      <h3>Desconto por Valor Fixo</h3>
      <p>"R$ 50 de desconto em compras acima de R$ 200". Simples e fácil de comunicar. Funciona bem para elevar o ticket médio.</p>

      <h3>Compre X Leve Y</h3>
      <p>"Leve 3 pague 2" ou "Compre 10 e ganhe 1 grátis". Ideal para produtos de consumo recorrente.</p>

      <h3>Frete Grátis</h3>
      <p>Em vendas online ou delivery, o frete grátis acima de determinado valor é um dos descontos mais eficazes.</p>

      <h3>Cashback</h3>
      <p>Devolva parte do valor em crédito para a próxima compra. Fideliza o cliente e garante uma nova transação.</p>

      <h2>Como Configurar no PDV</h2>
      <p>O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> permite configurar regras de promoção com precisão:</p>
      <ul>
        <li><strong>Período de validade:</strong> a promoção começa e termina automaticamente.</li>
        <li><strong>Limite por cliente:</strong> evita abuso de uma mesma promoção.</li>
        <li><strong>Limite de desconto:</strong> configure o máximo que o vendedor pode aplicar sem autorização do gerente.</li>
        <li><strong>Produtos elegíveis:</strong> defina quais itens participam da promoção.</li>
      </ul>

      <h2>Regras de Ouro para Promoções</h2>
      <ul>
        <li><strong>Defina uma meta clara:</strong> limpar estoque? Atrair novos clientes? Aumentar ticket médio?</li>
        <li><strong>Calcule a margem mínima:</strong> nunca promova abaixo do custo + despesas variáveis.</li>
        <li><strong>Limite a frequência:</strong> promoções constantes perdem o efeito.</li>
        <li><strong>Meça os resultados:</strong> quanto mais vendeu? A margem foi preservada?</li>
        <li><strong>Comunique com antecedência:</strong> planeje campanhas com calendário.</li>
      </ul>

      <h2>Análise Pós-Promoção</h2>
      <p>Após cada campanha, analise no <a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a>: a receita aumentou? A margem líquida foi preservada? Houve aumento no número de transações? Esses dados informam decisões futuras.</p>

      <h2>Conclusão</h2>
      <p>Promoções e descontos são ferramentas valiosas quando usadas com estratégia e controle. Configure regras claras, limite descontos e meça resultados. O <strong>ecossistema VendaPX</strong> permite configurar e gerenciar promoções integradas por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"pdv-fiscal-vs-pdv-comercial",title:"PDV Fiscal vs. PDV Comercial: Entenda a Diferença e a Importância de Cada",description:"Compreenda a diferença entre PDV fiscal e PDV comercial, quando usar cada um e como sua empresa pode se beneficiar dos dois.",category:"pdv",date:"2025-10-05",readTime:8,keywords:["PDV fiscal","PDV comercial","emissão NF-e","controle fiscal","sistema ponto venda"],content:`
      <p>Os termos <strong>PDV fiscal</strong> e <strong>PDV comercial</strong> são frequentemente confundidos por empreendedores, mas descrevem funcionalidades distintas dentro de um mesmo sistema. Entender essa diferença é crucial para manter a empresa em conformidade legal e ter flexibilidade operacional.</p>

      <h2>O que é PDV Fiscal?</h2>
      <p>O PDV fiscal é responsável pela <strong>emissão de documentos fiscais</strong>: Nota Fiscal Eletrônica (NF-e) para vendas B2B, Nota Fiscal ao Consumidor Eletrônica (NFC-e) para vendas ao consumidor final e, quando aplicável, Cupom Fiscal Eletrônico (SAT/CFe). É ele que garante que cada venda esteja registrada perante a Receita Federal.</p>
      <ul>
        <li><strong>Obrigatoriedade:</strong> toda venda ao consumidor final deve gerar um documento fiscal.</li>
        <li><strong>Alcance:</strong> todas as transações B2B exigem NF-e.</li>
        <li><strong>Consequência de não emitir:</strong> multas pesadas, interdição e responsabilização criminal.</li>
      </ul>

      <h2>O que é PDV Comercial?</h2>
      <p>O PDV comercial é a <strong>interface operacional</strong> que o vendedor usa no dia a dia. Ele gerencia preços, promoções, vendedores, relatórios de performance, comissões e fluxo de atendimento. Muitas vezes registra vendas que não necessariamente geram documento fiscal imediato.</p>

      <h2>Quando Usar Cada Um?</h2>
      <ul>
        <li><strong>PDV fiscal:</strong> para toda venda que o cliente solicita nota fiscal e para vendas B2B.</li>
        <li><strong>PDV comercial:</strong> para controle interno, vendas no balcão sem NF, comandas, pedidos de delivery.</li>
      </ul>
      <p>Na prática, a maioria das empresas precisa de <strong>ambos integrados em um mesmo sistema</strong>.</p>

      <h2>Integração no Ecossistema VendaPX</h2>
      <p>O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> opera como um sistema unificado que atua tanto como PDV fiscal quanto comercial. Ao registrar uma venda, o sistema permite emitir NF-e ou NFC-e automaticamente quando solicitado, e registrar vendas internas para controle e relatórios.</p>

      <h2>Diferenças na Prática</h2>
      <table>
        <thead>
          <tr><th>Aspecto</th><th>PDV Fiscal</th><th>PDV Comercial</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Finalidade</strong></td><td>Conformidade legal</td><td>Gestão operacional</td></tr>
          <tr><td><strong>Documentos</strong></td><td>NF-e, NFC-e, SAT</td><td>Cupom não-fiscal, comanda</td></tr>
          <tr><td><strong>Impostos</strong></td><td>Calcula e recolhe</td><td>Gerencia preços</td></tr>
          <tr><td><strong>Relatórios</strong></td><td>EFD, SPED, DAS</td><td>Vendas por vendedor, ticket médio</td></tr>
        </tbody>
      </table>

      <h2>Erros Comuns</h2>
      <ul>
        <li><strong>Usar apenas o PDV comercial sem emissão fiscal:</strong> gera passivo fiscal e risco de multas.</li>
        <li><strong>Ter sistemas separados:</strong> gera retrabalho e dados inconsistentes.</li>
        <li><strong>Não atualizar o software fiscal:</strong> mudanças na legislação exigem atualizações frequentes.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>PDV fiscal e PDV comercial são complementares e essenciais. O primeiro garante legalidade; o segundo garante gestão eficiente. O ideal é ter ambos integrados em um único sistema. O <strong>ecossistema VendaPX</strong> oferece exatamente isso por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"relatorios-de-vendas-o-que-analisar",title:"Relatórios de Vendas: O Que Analisar para Tomar Decisões Melhores",description:"Aprenda a interpretar relatórios de vendas do PDV, identificando os indicadores mais importantes para a saúde do seu negócio.",category:"pdv",date:"2025-10-22",readTime:10,keywords:["relatório de vendas","análise de vendas","indicadores PDV","KPIs vendas","gestão baseada dados"],content:`
      <p>Gerar relatórios é fácil. <strong>Interpretá-los corretamente</strong> é onde está o verdadeiro valor. Muitos empresários recebem relatórios de vendas diariamente mas não sabem o que procurar ou como transformar os dados em ações concretas.</p>

      <h2>Quais Relatórios Você Deve Acompanhar?</h2>

      <h3>Relatório Diário de Vendas</h3>
      <p>O resumo do dia inclui: total de vendas, número de transações, ticket médio, vendas por forma de pagamento e vendas por vendedor.</p>

      <h3>Relatório de Vendas por Produto</h3>
      <p>Mostra quais produtos mais vendem em quantidade e em faturamento. Identifica itens parados e oportunidades de destaque. No <a href="https://pdv.vendapx.com.br">PDV VendaPX</a>, esse relatório é gerado automaticamente com dados do estoque integrado.</p>

      <h3>Relatório de Vendas por Período</h3>
      <p>Compara performance entre dias, semanas, meses ou anos. Identifica tendências sazonais e impacto de promoções.</p>

      <h3>Relatório de Vendas por Vendedor</h3>
      <p>Essencial para gestão de equipe. Mostra quem mais vende, quem tem melhor ticket médio e quem mais aplica descontos.</p>

      <h3>Relatório de Devoluções</h3>
      <p>Alto índice de devoluções em um produto pode indicar problema de qualidade ou expectativa mal gerenciada.</p>

      <h2>Indicadores Essenciais (KPIs)</h2>
      <ul>
        <li><strong>Ticket Médio:</strong> valor médio por transação. Se está caindo, pode indicar que clientes compram menos.</li>
        <li><strong>Ticket Médio por Vendedor:</strong> identifica quem faz upsell com eficiência.</li>
        <li><strong>Taxa de Conversão:</strong> qual porcentagem de visitantes efetivamente compra?</li>
        <li><strong>Produtos Mais Vendidos:</strong> conheça seu portfólio estrela.</li>
        <li><strong>Margem de Lucro por Produto:</strong> o mais vendido é o mais lucrativo?</li>
        <li><strong>Devoluções como % das Vendas:</strong> taxas acima de 3% merecem investigação.</li>
      </ul>

      <h2>Como Usar os Dados para Decisões</h2>
      <ul>
        <li><strong>Reposicionamento de produtos:</strong> mova itens mais vendidos para locais de maior visibilidade.</li>
        <li><strong>Ajuste de preços:</strong> se um produto vende muito mas tem margem baixa, considere reajuste.</li>
        <li><strong>Treinamento de equipe:</strong> vendedores com ticket médio baixo precisam de coaching.</li>
        <li><strong>Planejamento de compras:</strong> use dados históricos para prever demanda e evitar ruptura.</li>
      </ul>

      <h2>Erros ao Analisar Relatórios</h2>
      <ul>
        <li><strong>Analisar sem contexto:</strong> um número isolado não diz nada. Compare com períodos anteriores.</li>
        <li><strong>Ignorar tendências:</strong> uma queda de 5% pode ser normal ou o início de um problema.</li>
        <li><strong>Não agir sobre os dados:</strong> relatório sem ação é papel picado.</li>
      </ul>

      <h2>Como o Ecossistema VendaPX Facilita a Análise</h2>
      <p>Com o <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> integrado ao <a href="https://financeiro.vendapx.com.br">Sistema Financeiro</a> e ao <a href="https://estoque.vendapx.com.br">Controle de Estoque</a>, os relatórios são gerados automaticamente com dados reais e atualizados.</p>

      <h2>Conclusão</h2>
      <p>Relatórios de vendas são a bússola do empresário. Saiba o que analisar, interprete com contexto e tome decisões baseadas em dados. O <strong>ecossistema VendaPX</strong> gera relatórios completos e integrados por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"vendas-por-aplicativo-o-futuro",title:"Vendas por Aplicativo: O Futuro do Varejo Já Começou",description:"Descubra como vender por aplicativo pode expandir seu negócio, aumentar o alcance e oferecer uma experiência moderna aos seus clientes.",category:"pdv",date:"2025-11-08",readTime:9,keywords:["vendas por aplicativo","app de vendas","m-commerce","vendas mobile","comércio celular"],content:`
      <p>Com mais de 170 milhões de smartphones em circulação no Brasil, <strong>vender por aplicativo</strong> não é mais o futuro — é o presente. O comércio móvel representa mais de 40% das transações online no país e cresce a cada ano.</p>

      <h2>Por Que Vender por Aplicativo?</h2>
      <ul>
        <li><strong>Alcance ilimitado:</strong> seu catálogo fica disponível 24h para qualquer pessoa.</li>
        <li><strong>Experiência do cliente:</strong> interfaces modernas, pagamentos integrados e rastreamento de pedidos.</li>
        <li><strong>Redução de custo operacional:</strong> menos atendentes presenciais necessários.</li>
        <li><strong>Dados e personalização:</strong> colete dados de comportamento e personalize ofertas.</li>
        <li><strong>Fidelização:</strong> o aplicativo fica instalado no celular do cliente.</li>
      </ul>

      <h2>Opções para Ter um App de Vendas</h2>

      <h3>Marketplaces (iFood, Rappi, Mercado Livre)</h3>
      <p>A forma mais rápida de começar. Você cadastra seus produtos e ganha acesso à base de clientes da plataforma. A desvantagem são as comissões (20% a 35%).</p>

      <h3>App Próprio</h3>
      <p>Desenvolver um aplicativo próprio dá controle total sobre a experiência, os dados e a marca. Plataformas no-code reduzem o custo de desenvolvimento.</p>

      <h3>WhatsApp Business</h3>
      <p>Nem precisa de app formal. O WhatsApp Business é o "aplicativo" mais usado no Brasil para vendas, com catálogo de produtos e pedidos por mensagem.</p>

      <h2>Integração com o PDV</h2>
      <p>O grande desafio é integrar o aplicativo ao <strong>estoque</strong> e ao <strong>sistema financeiro</strong>. Pedidos feitos no app precisam baixar o estoque automaticamente e gerar entrada financeira. O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> se integra com múltiplos canais, incluindo aplicativos de terceiros.</p>

      <h2>Estratégias para Vendas por App</h2>
      <ul>
        <li><strong>Ofertas exclusivas no app:</strong> incentive o download com descontos disponíveis apenas no aplicativo.</li>
        <li><strong>Notificações push:</strong> avise sobre promoções, novos produtos e status de pedidos.</li>
        <li><strong>Programa de fidelidade integrado:</strong> pontos acumulados a cada compra pelo app.</li>
        <li><strong>Avaliações e reviews:</strong> permita que clientes avaliem produtos.</li>
      </ul>

      <h2>Desafios e Como Superá-los</h2>
      <ul>
        <li><strong>Logística de entrega:</strong> se não tem equipe própria, considere parceiros logísticos.</li>
        <li><strong>Gestão multicanal:</strong> a integração via <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> centraliza tudo.</li>
        <li><strong>Custo de desenvolvimento:</strong> comece com marketplaces e migre para app próprio.</li>
        <li><strong>Segurança de dados:</strong> invista em proteção de dados dos clientes.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Vender por aplicativo é uma necessidade estratégica. Comece pelos marketplaces, migre para seu próprio app e integre tudo ao seu PDV. O <strong>ecossistema VendaPX</strong> suporta operações multicanais integradas por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"como-treinar-equipe-no-novo-pdv",title:"Como Treinar Sua Equipe no Novo PDV: Guia para uma Transição Suave",description:"Um guia passo a passo para treinar funcionários na utilização do novo sistema PDV, minimizando erros e resistência à mudança.",category:"pdv",date:"2025-11-25",readTime:8,keywords:["treinamento PDV","capacitação equipe","implantação PDV","mudança de sistema","adoção tecnologia"],content:`
      <p>Implantar um novo <strong>PDV</strong> é um marco importante para qualquer empresa, mas a transição pode ser turbulenta se o treinamento da equipe não for bem conduzido. Funcionários que não se sentem preparados resistem à mudança e cometem mais erros.</p>

      <h2>Por Que o Treinamento é Tão Crítico?</h2>
      <ul>
        <li><strong>Erros operacionais:</strong> vendas registradas erradas, produtos confundidos, fechamentos que não batem.</li>
        <li><strong>Resistência à mudança:</strong> funcionários acostumados com o sistema antigo podem resistir.</li>
        <li><strong>Perda de produtividade:</strong> a curva de aprendizado impacta a velocidade do atendimento.</li>
        <li><strong>Insatisfação do cliente:</strong> atendimento lento e hesitante frustra o consumidor.</li>
      </ul>

      <h2>Passo a Passo para um Treinamento Eficaz</h2>

      <h3>1. Planeje com Antecedência</h3>
      <p>Não espere o dia da implantação para treinar. Comece pelo menos 2 semanas antes com sessões teóricas e práticas.</p>

      <h3>2. Identifique os Usuários-Chave</h3>
      <p>Treine primeiro os supervisores ou funcionários mais experientes. Eles se tornam multiplicadores.</p>

      <h3>3. Divida em Módulos</h3>
      <p>Não tente ensinar tudo de uma vez. Divida em módulos:</p>
      <ul>
        <li><strong>Módulo 1:</strong> Abertura de caixa e login</li>
        <li><strong>Módulo 2:</strong> Registro de venda (produto, quantidade, desconto)</li>
        <li><strong>Módulo 3:</strong> Formas de pagamento e fechamento de caixa</li>
        <li><strong>Módulo 4:</strong> Consulta de estoque e preços</li>
        <li><strong>Módulo 5:</strong> Devoluções e trocas</li>
        <li><strong>Módulo 6:</strong> Relatórios básicos</li>
      </ul>

      <h3>4. Use o Modo de Treinamento do PDV</h3>
      <p>O <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> permite simular vendas em ambiente de treinamento sem afetar dados reais.</p>

      <h3>5. Crie Materiais de Apoio</h3>
      <p>Folhas de referência rápida (cheat sheets) com os fluxos principais ajudam no dia a dia.</p>

      <h3>6. Treine em Horário de Baixa</h3>
      <p>Realize os treinamentos práticos em horários de menor movimento para que os funcionários possam errar e aprender sem pressão.</p>

      <h3>7. Ofereça Suporte Contínuo</h3>
      <p>Nas primeiras semanas, mantenha um suporte mais próximo. Resolva dúvidas rapidamente e reforce boas práticas.</p>

      <h2>Como Lidar com a Resistência</h2>
      <ul>
        <li><strong>Explique o "porquê":</strong> demonstre os benefícios na prática.</li>
        <li><strong>Envolva a equipe na escolha:</strong> quando possível, inclua funcionários no processo de decisão.</li>
        <li><strong>Destaque ganhos pessoais:</strong> o novo sistema facilita o trabalho deles.</li>
        <li><strong>Reconheça esforços:</strong> elogie quem se destaca no uso do novo sistema.</li>
      </ul>

      <h2>Avaliação Pós-Treinamento</h2>
      <p>Após 30 dias da implantação, avalie: os funcionários estão usando o sistema corretamente? A taxa de erros diminuiu? Use os relatórios do <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> para medir esses indicadores.</p>

      <h2>Conclusão</h2>
      <p>O treinamento é o diferencial entre uma implantação frustrante e uma bem-sucedida. Planeje, divida em módulos, treine na prática e ofereça suporte. O <strong>ecossistema VendaPX</strong> é intuitivo e conta com suporte dedicado por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"gestao-de-filiais-controle-centralizado",title:"Gestão de Filiais: Controle Centralizado para Redes em Expansão",description:"Saiba como gerenciar múltiplas filiais com controle centralizado usando um sistema integrado que unifica dados de todas as unidades.",category:"pdv",date:"2025-12-10",readTime:10,keywords:["gestão filiais","controle centralizado","redes de lojas","múltiplas unidades","PDV rede"],content:`
      <p>Expandir para <strong>múltiplas filiais</strong> é um sinal de crescimento, mas também traz desafios operacionais significativos. Cada loja gera seus próprios dados de vendas, estoque e finanças. Sem um controle centralizado, a gestão se torna caótica.</p>

      <h2>Desafios da Gestão com Múltiplas Filiais</h2>
      <ul>
        <li><strong>Dados fragmentados:</strong> cada loja com seu próprio sistema gera informações isoladas.</li>
        <li><strong>Estoque desarticulado:</strong> uma filial pode ter excesso enquanto outra tem ruptura.</li>
        <li><strong>Dificuldade de consolidação:</strong> juntar dados manualmente é trabalhoso e propenso a erros.</li>
        <li><strong>Falta de padronização:</strong> cada loja praticando preços e regras diferentes.</li>
        <li><strong>Controle financeiro limitado:</strong> sem visão consolidada, o gestor não enxerga a saúde da rede.</li>
      </ul>

      <h2>O que é Controle Centralizado?</h2>
      <p>Controle centralizado significa que <strong>todos os dados de todas as filiais convergem para um único ponto de gestão</strong>. O gestor pode visualizar vendas, estoque e indicadores de cada loja individualmente ou consolidados.</p>

      <h2>Como Implementar com o Ecossistema VendaPX</h2>
      <p>O ecossistema <strong>VendaPX</strong> suporta operações com múltiplas unidades. Cada filial opera com seu próprio PDV, estoque e financeiro, mas tudo é conectado ao gestor central:</p>
      <ul>
        <li><strong><a href="https://pdv.vendapx.com.br">PDV VendaPX</a>:</strong> cada filial com seu ponto de venda, mas com preços e regras padronizadas centralmente.</li>
        <li><strong><a href="https://estoque.vendapx.com.br">Controle de Estoque VendaPX</a>:</strong> visão consolidada do inventário em todas as lojas.</li>
        <li><strong><a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a>:</strong> fluxo de caixa unificado com análise por filial e consolidado.</li>
      </ul>

      <h2>Funcionalidades Essenciais para Redes</h2>

      <h3>Transferência entre Filiais</h3>
      <p>Quando uma filial precisa de produto que outra tem em excesso, a transferência interna evita nova compra ao fornecedor.</p>

      <h3>Preços Padronizados</h3>
      <p>Os preços devem ser definidos centralmente e aplicados automaticamente em todas as filiais.</p>

      <h3>Relatórios Comparativos</h3>
      <p>Compare a performance entre filiais: qual loja fatura mais? Qual tem maior ticket médio? Esses dados orientam decisões de expansão.</p>

      <h3>Controle de Caixa por Filial</h3>
      <p>Cada loja faz seu fechamento de caixa, mas os dados são consolidados automaticamente no sistema central.</p>

      <h2>Estratégias para Gestão Eficiente</h2>
      <ul>
        <li><strong>Estabeleça KPIs padrão:</strong> todas as lojas avaliadas pelos mesmos indicadores.</li>
        <li><strong>Realize reuniões periódicas:</strong> revise dados consolidados com gerentes de cada filial.</li>
        <li><strong>Automatize transferências:</strong> quando estoque atinge nível mínimo, sugira transferência.</li>
        <li><strong>Padronize processos:</strong> manual de operações idêntico em todas as lojas.</li>
      </ul>

      <h2>Escalabilidade</h2>
      <p>O <strong>ecossistema VendaPX</strong> é escalável e mantém a mesma facilidade de uso independentemente do número de unidades. Com custo de apenas <strong>R$20/mês por unidade</strong>, a expansão é financeiramente acessível.</p>

      <h2>Conclusão</h2>
      <p>Gestão de filiais exige controle centralizado, padronização e dados consolidados em tempo real. O <strong>ecossistema VendaPX</strong> oferece uma plataforma integrada e escalável por apenas <strong>R$20/mês por filial</strong>.</p>
    `},{slug:"por-que-integrar-estoque-financeiro-pdv",title:"Por Que Integrar Estoque, Financeiro e PDV? Os Benefícios de um Ecossistema Único",description:"Entenda por que integrar sistemas de estoque, gestão financeira e PDV é essencial para eficiência operacional e crescimento sustentável.",category:"integracao",date:"2026-01-05",readTime:10,keywords:["integração sistemas","estoque financeiro PDV","ecossistema integrado","gestão unificada","sistemas conectados"],content:`
      <p>Muitas empresas brasileiras operam com <strong>sistemas desconectados</strong>: um software para estoque, outro para finanças e um terceiro para o PDV. Essa fragmentação gera retrabalho, erros, dados inconsistentes e perda de tempo. A integração desses três sistemas em um <strong>ecossistema único</strong> transforma radicalmente a eficiência operacional.</p>

      <h2>O Problema dos Sistemas Desconectados</h2>
      <ul>
        <li><strong>Redigitação de dados:</strong> uma venda no PDV precisa ser digitada novamente no financeiro e no estoque.</li>
        <li><strong>Divergência de informações:</strong> o estoque diz uma coisa, o PDV outra e o financeiro uma terceira.</li>
        <li><strong>Atraso na tomada de decisão:</strong> dados consolidados só disponíveis dias depois.</li>
        <li><strong>Erros de conciliação:</strong> manualmente é quase impossível manter três sistemas sincronizados.</li>
      </ul>

      <h2>Os 3 Sistemas que Precisam se Comunicar</h2>

      <h3>Controle de Estoque</h3>
      <p>Gerencia entradas, saídas, níveis mínimos, validades e fornecedores. Sem integração com o PDV, o estoque nunca está 100% atualizado.</p>

      <h3>Sistema Financeiro</h3>
      <p>Registra receitas, despesas, fluxo de caixa e margens. Sem integração com PDV e estoque, informações financeiras ficam incompletas.</p>

      <h3>PDV (Ponto de Venda)</h3>
      <p>Registra vendas, atende clientes e emite documentos fiscais. Sem integração, cada venda gera trabalho manual nos outros sistemas.</p>

      <h2>Como Funciona a Integração no Ecossistema VendaPX</h2>
      <p>Quando uma venda é registrada no <a href="https://pdv.vendapx.com.br">PDV VendaPX</a>, os seguintes processos acontecem automaticamente:</p>
      <ol>
        <li>O <a href="https://estoque.vendapx.com.br">estoque</a> é baixado em tempo real para cada item vendido.</li>
        <li>A receita é registrada no <a href="https://financeiro.vendapx.com.br">sistema financeiro</a> com a forma de pagamento correta.</li>
        <li>Se o estoque atingir o nível mínimo, o sistema gera alerta para reposição.</li>
        <li>Relatórios consolidados são atualizados automaticamente.</li>
      </ol>

      <h2>Benefícios Concretos da Integração</h2>
      <ul>
        <li><strong>Eliminação de retrabalho:</strong> dados digitados uma vez são usados em todos os sistemas.</li>
        <li><strong>Dados em tempo real:</strong> decisões baseadas em informações atualizadas.</li>
        <li><strong>Redução de erros:</strong> sem digitação manual, a chance de erro cai drasticamente.</li>
        <li><strong>Visão 360° do negócio:</strong> um único painel mostra estoque, vendas e finanças.</li>
        <li><strong>Economia de tempo:</strong> horas economizadas por semana em tarefas manuais.</li>
      </ul>

      <h2>Quanto Custa Manter Sistemas Separados?</h2>
      <p>Muitos empresários não percebem o custo real da não-integração. O <strong>ecossistema VendaPX</strong> oferece os três sistemas integrados por apenas <strong>R$20/mês</strong> — uma fração do custo de manter soluções separadas.</p>

      <h2>Casos Reais de Benefício</h2>
      <ul>
        <li><strong>Padaria com 2 filiais:</strong> reduziu 80% do tempo de fechamento mensal após integrar PDV, estoque e financeiro.</li>
        <li><strong>Loja de roupas:</strong> eliminou ruptura de estoque ao sincronizar vendas do PDV com o controle de inventário.</li>
        <li><strong>Supermercado regional:</strong> identificou margem negativa em 15% dos produtos ao integrar dados financeiros com vendas.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Integrar estoque, financeiro e PDV não é luxo — é necessidade competitiva. O <strong>ecossistema VendaPX</strong> oferece integração completa e acessível por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"sincronizacao-em-tempo-real",title:"Sincronização em Tempo Real: Por Que Seus Dados Precisam Estar Atualizados",description:"Entenda a importância da sincronização em tempo real entre sistemas e como ela elimina divergências, erros e atrasos na gestão.",category:"integracao",date:"2026-01-22",readTime:9,keywords:["sincronização tempo real","dados atualizados","integração tempo real","sistemas conectados","gestão eficiente"],content:`
      <p>Em um mundo onde decisões precisam ser tomadas rapidamente, ter dados <strong>desatualizados</strong> é quase tão ruim quanto não ter dados. A <strong>sincronização em tempo real</strong> entre sistemas garante que estoque, finanças e vendas estejam sempre refletindo a situação atual do negócio.</p>

      <h2>O que é Sincronização em Tempo Real?</h2>
      <p>É a capacidade de um sistema atualizar automaticamente os dados em todos os sistemas conectados <strong>no exato momento em que uma alteração ocorre</strong>. Quando um produto é vendido no PDV, o estoque diminui imediatamente e a receita financeira é registrada instantaneamente.</p>

      <h2>Por Que a Sincronização em Tempo Real é Importante?</h2>

      <h3>Evita Ruptura de Estoque</h3>
      <p>Se um produto foi vendido mas o estoque não foi atualizado, outro pedido pode ser aceito para um item que não existe mais.</p>

      <h3>Garante Precisão Financeira</h3>
      <p>Decisões de compra e investimento dependem de dados financeiros atualizados. Se o gestor olha o caixa com um valor que não inclui vendas recentes, a decisão pode ser equivocada.</p>

      <h3>Permite Ação Imediata</h3>
      <p>Com dados em tempo real, o gestor pode identificar problemas e agir no momento: reposição de estoque, ajuste de preços, contenção de despesas.</p>

      <h2>Como o Ecossistema VendaPX Implementa a Sincronização</h2>
      <p>O ecossistema <strong>VendaPX</strong> foi projetado com sincronização em tempo real:</p>
      <ul>
        <li><strong>Venda no PDV → Estoque baixa automaticamente → Financeiro registra receita.</strong></li>
        <li><strong>Compra no estoque → Financeiro registra despesa → PDV atualiza preço se aplicável.</strong></li>
        <li><strong>Pagamento no financeiro → Status atualizado no PDV → Estoque libera reserva.</strong></li>
      </ul>

      <h2>Sincronização vs. Processamento em Lote</h2>
      <table>
        <thead>
          <tr><th>Aspecto</th><th>Tempo Real</th><th>Em Lote</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Velocidade</strong></td><td>Instantâneo</td><td>Horas ou dias</td></tr>
          <tr><td><strong>Precisão</strong></td><td>100% atualizado</td><td>Dados defasados</td></tr>
          <tr><td><strong>Tomada de decisão</strong></td><td>Imediata e informada</td><td>Atrasada e arriscada</td></tr>
          <tr><td><strong>Experiência do cliente</strong></td><td>Consistente</td><td>Inconsistente</td></tr>
        </tbody>
      </table>

      <h2>Benefícios da Sincronização em Tempo Real</h2>
      <ul>
        <li><strong>Eliminação de divergências:</strong> todos os sistemas falam a mesma linguagem.</li>
        <li><strong>Menos trabalho manual:</strong> não precisa atualizar sistemas separadamente.</li>
        <li><strong>Visão consolidada:</strong> dados de todos os sistemas em um único lugar.</li>
        <li><strong>Agilidade operacional:</strong> processos que antes levavam dias acontecem em segundos.</li>
        <li><strong>Segurança:</strong> menos intervenção humana significa menos erros.</li>
      </ul>

      <h2>Quando a Sincronização é Mais Crítica?</h2>
      <ul>
        <li><strong>Horários de pico de vendas:</strong> Black Friday, Natal, datas comemorativas.</li>
        <li><strong>Operações com múltiplos canais:</strong> PDV físico + delivery + online.</li>
        <li><strong>Empresas com múltiplas filiais:</strong> dados centralizados são essenciais.</li>
        <li><strong>Produtos com validade:</strong> o controle preciso evita perdas.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A sincronização em tempo real não é mais diferencial — é padrão esperado. Dados defasados geram decisões ruins. O <strong>ecossistema VendaPX</strong> sincroniza estoque, financeiro e PDV automaticamente por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"eliminacao-de-retrabalho-integracao",title:"Eliminação de Retrabalho: Como a Integração de Sistemas Economiza Horas por Semana",description:"Descubra como a integração entre estoque, financeiro e PDV elimina retrabalho, reduz erros e libera tempo para atividades estratégicas.",category:"integracao",date:"2026-02-15",readTime:8,keywords:["eliminação retrabalho","integração sistemas","eficiência operacional","economia de tempo","automação"],content:`
      <p><strong>Retrabalho</strong> é quando você precisa refazer algo que já foi feito — ou fazer manualmente algo que deveria ser automático. Em empresas com sistemas desconectados, o retrabalho é endêmico e consome horas valiosas de trabalho todos os dias.</p>

      <h2>Quanto Tempo se Perde com Retrabalho?</h2>
      <p>Em uma empresa típica do comércio varejista brasileiro, o retrabalho causado por sistemas desconectados pode consumir:</p>
      <ul>
        <li><strong>2 a 4 horas por dia</strong> redigindo dados de vendas no financeiro.</li>
        <li><strong>1 a 2 horas por dia</strong> atualizando estoque manualmente.</li>
        <li><strong>3 a 5 horas por mês</strong> conciliando dados entre sistemas.</li>
        <li><strong>8 a 16 horas por mês</strong> preparando relatórios consolidados.</li>
      </ul>
      <p>Isso representa entre <strong>20 e 40 horas mensais</strong> — basicamente uma semana inteira de trabalho desperdiçado em tarefas que poderiam ser automáticas.</p>

      <h2>Exemplos Concretos de Retrabalho</h2>

      <h3>Vendas no PDV → Lançamento no Financeiro</h3>
      <p>Sem integração, o vendedor anota as vendas do dia e alguém precisa digitar cada uma no sistema financeiro. Com integração, o <a href="https://pdv.vendapx.com.br">PDV VendaPX</a> envia automaticamente os dados para o <a href="https://financeiro.vendapx.com.br">Sistema Financeiro</a>.</p>

      <h3>Compra de Produtos → Atualização de Estoque</h3>
      <p>Sem integração, alguém precisa registrar cada entrada de produto no estoque. Com o <a href="https://estoque.vendapx.com.br">Controle de Estoque VendaPX</a> integrado, a compra já registrada no financeiro atualiza o estoque automaticamente.</p>

      <h3>Fechamento de Caixa → Relatório Financeiro</h3>
      <p>Sem integração, os dados do fechamento são copiados manualmente para planilhas. Com integração, o relatório já está pronto no sistema financeiro.</p>

      <h2>Como a Integração Elimina o Retrabalho</h2>
      <ul>
        <li><strong>Dados únicos:</strong> cada informação é digitada apenas uma vez.</li>
        <li><strong>Fluxo automático:</strong> dados passam de um sistema para outro sem intervenção humana.</li>
        <li><strong>Consistência garantida:</strong> todos os sistemas refletem exatamente a mesma informação.</li>
        <li><strong>Tempo liberado:</strong> funcionários podem focar em atividades que geram valor.</li>
      </ul>

      <h2>O que Fazer com o Tempo Economizado?</h2>
      <p>Com 20 a 40 horas por mês economizadas, você pode:</p>
      <ul>
        <li>Planejar estratégias de crescimento</li>
        <li>Atender melhor seus clientes</li>
        <li>Desenvolver novos produtos e serviços</li>
        <li>Fortalecer relações com fornecedores</li>
        <li>Treinar e capacitar sua equipe</li>
      </ul>

      <h2>O Ecossistema VendaPX Elimina Retrabalho</h2>
      <p>O ecossistema <strong>VendaPX</strong> foi projetado para que dados fluam automaticamente entre PDV, estoque e financeiro. Quando uma venda é registrada, todos os sistemas são atualizados simultaneamente. Não há redigitação, não há conciliação manual, não há retrabalho.</p>

      <h2>Conclusão</h2>
      <p>Retrabalho é o inimigo silencioso da produtividade. A integração de sistemas é a solução mais eficaz para eliminá-lo. Com o <strong>ecossistema VendaPX</strong>, você recupera dezenas de horas por mês por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"dados-unificados-visao-360",title:"Dados Unificados: Visão 360° do Seu Negócio em Um Único Painel",description:"Como ter uma visão completa e unificada do seu negócio, integrando dados de vendas, estoque e finanças em um painel centralizado.",category:"integracao",date:"2026-04-10",readTime:9,keywords:["dados unificados","visão 360","painel de gestão","integração dados","gestão integrada"],content:`
      <p>Ter <strong>dados unificados</strong> é como ter um mapa completo do seu negócio antes de tomar qualquer decisão. Sem isso, cada decisão é feita com base em pedaços de informação isolados — como tentar montar um quebra-cabeça sem ver a imagem completa.</p>

      <h2>O que é uma Visão 360°?</h2>
      <p>Uma <strong>visão 360°</strong> é a capacidade de ver todas as dimensões do negócio em um único lugar: vendas, estoque, finanças, clientes e desempenho. Em vez de olhar três sistemas diferentes, o empresário acessa um painel centralizado que consolida tudo.</p>

      <h2>Por Que Dados Fragmentados São Perigosos?</h2>
      <ul>
        <li><strong>Decisões incompletas:</strong> você vê que as vendas estão boas, mas não sabe se o estoque está acabando ou se o lucro está evaporando.</li>
        <li><strong>Visão enviesada:</strong> olhar apenas para o financeiro mostra o resultado, mas não as causas.</li>
        <li><strong>Conflito de informações:</strong> cada sistema mostra números diferentes, gerando confusão.</li>
        <li><strong>Tempo desperdiçado:</strong> o gestor gasta horas juntando dados de fontes diferentes.</li>
      </ul>

      <h2>O que uma Visão 360° deve Mostrar?</h2>

      <h3>Dados de Vendas</h3>
      <p>Total de vendas por período, por vendedor, por canal (balcão, delivery, online), ticket médio e tendências.</p>

      <h3>Dados de Estoque</h3>
      <p>Produtos em estoque, itens em nível mínimo, giro de inventário, produtos que mais vendem e que menos vendem.</p>

      <h3>Dados Financeiros</h3>
      <p>Fluxo de caixa, receitas vs. despesas, margem de lucro, contas a pagar e receber, resultado líquido.</p>

      <h3>Dados de Clientes</h3>
      <p>Clientes mais frequentes, ticket médio por cliente, histórico de compras e fidelidade.</p>

      <h2>Como o Ecossistema VendaPX Entrega a Visão 360°</h2>
      <p>O ecossistema <strong>VendaPX</strong> conecta automaticamente os três sistemas:</p>
      <ul>
        <li><strong><a href="https://pdv.vendapx.com.br">PDV VendaPX</a>:</strong> gera dados de vendas, atendimentos e vendedores.</li>
        <li><strong><a href="https://estoque.vendapx.com.br">Controle de Estoque VendaPX</a>:</strong> gera dados de inventário, entradas e saídas.</li>
        <li><strong><a href="https://financeiro.vendapx.com.br">Sistema Financeiro VendaPX</a>:</strong> consolida tudo em indicadores financeiros.</li>
      </ul>
      <p>O resultado é um <strong>painel único</strong> onde o empresário vê tudo o que precisa para tomar decisões informadas.</p>

      <h2>Decisões Baseadas em Dados Completos</h2>
      <ul>
        <li><strong>Comprar ou não comprar:</strong> dados de estoque e vendas juntos respondem essa pergunta.</li>
        <li><strong>Contratar mais gente:</strong> dados de vendas e financeiro mostram se há espaço na folha.</li>
        <li><strong>Abrir nova filial:</strong> dados consolidados mostram se a empresa suporta expansão.</li>
        <li><strong>Investir em marketing:</strong> dados de vendas por canal mostram onde o investimento retorna mais.</li>
        <li><strong>Revisar preços:</strong> dados de margem por produto identificam oportunidades de reajuste.</li>
      </ul>

      <h2>Exemplo Prático</h2>
      <p>Uma loja de materiais de escritório notou que o faturamento estava estável. Ao olhar a visão 360° no <strong>ecossistema VendaPX</strong>, descobriu que:</p>
      <ul>
        <li>As vendas estavam estáveis, mas o <strong>ticket médio estava caindo</strong>.</li>
        <li>Produtos de <strong>maior margem estavam com estoque zerado</strong>.</li>
        <li>As vendas de <strong>delivery estavam crescendo 30%</strong> mas com margem menor por causa das comissões.</li>
      </ul>
      <p>Com essa visão, o gestor ajustou preços, repôs produtos de alta margem e renegociou comissões com marketplaces — tudo em uma semana.</p>

      <h2>Erros ao Construir uma Visão 360°</h2>
      <ul>
        <li><strong>Depender de dados manuais:</strong> planilhas manuais nunca dão visão em tempo real.</li>
        <li><strong>Ignorar uma dimensão:</strong> dados sem financeiro são incompletos, financeiro sem estoque é cego.</li>
        <li><strong>Não atualizar:</strong> dados defasados geram decisões erradas.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Dados unificados dão ao empresário a capacidade de ver e entender seu negócio como um todo. Fragmentação gera cegueira operacional. O <strong>ecossistema VendaPX</strong> oferece visão 360° integrando PDV, estoque e finanças por apenas <strong>R$20/mês</strong>.</p>
    `},{slug:"automacao-de-processos-reduza-erros",title:"Automação de Processos: Como Reduzir Erros e Aumentar a Eficiência",description:"Descubra quais processos do seu negócio podem ser automatizados para reduzir erros humanos, agilizar operações e focar no que realmente importa.",category:"integracao",date:"2026-07-05",readTime:10,keywords:["automação de processos","redução erros","eficiência operacional","automação empresarial","gestão automatizada"],content:`
      <p><strong>Automação de processos</strong> não é privilégio de grandes corporações. Pequenos e médios negócios brasileiros podem — e devem — automatizar tarefas repetitivas para reduzir erros, ganhar tempo e focar em atividades estratégicas. A tecnologia tornou isso acessível para qualquer empresa.</p>

      <h2>O que Pode Ser Automatizado?</h2>
      <p>Na operação diária de um comércio, dezenas de processos podem ser automatizados:</p>
      <ul>
        <li><strong>Registro de vendas:</strong> o PDV registra automaticamente cada transação.</li>
        <li><strong>Baixa de estoque:</strong> quando um item é vendido, o estoque é atualizado sem intervenção.</li>
        <li><strong>Geração de relatórios:</strong> relatórios de vendas, estoque e financeiro prontos automaticamente.</li>
        <li><strong>Emissão de notas fiscais:</strong> NF-e e NFC-e emitidas automaticamente a cada venda.</li>
        <li><strong>Alertas de estoque baixo:</strong> notificação automática quando um produto atinge o nível mínimo.</li>
        <li><strong>Conciliação bancária:</strong> comparação automática entre movimentações bancárias e registros internos.</li>
        <li><strong>Contas a pagar:</strong> alertas automáticos de vencimento de obrigações.</li>
      </ul>

      <h2>Erros que a Automação Elimina</h2>

      <h3>Erro de Digitação</h3>
      <p>Quando dados são digitados manualmente em múltiplos sistemas, a chance de erro é enorme. Um número trocado, um zero a mais — e o estoque ou o financeiro fica desatualizado. A automação garante que dados entram uma vez e se propagam corretamente.</p>

      <h3>Esquecimento</h3>
      <p>Esquecer de baixar estoque, de registrar uma despesa, de emitir uma nota fiscal. Processos automatizados não esquecem — seguem o fluxo programado independentemente da memória humana.</p>

      <h3>Inconsistência</h3>
      <p>Quando cada pessoa registra dados de uma forma diferente, a inconsistência é garantida. Automação padroniza o processo.</p>

      <h2>Como Implementar Automação no Seu Negócio</h2>

      <h3>Passo 1: Mapeie seus Processos</h3>
      <p>Liste todas as tarefas repetitivas que sua equipe faz diariamente. Marque quais são manuais e quais poderiam ser automatizadas.</p>

      <h3>Passo 2: Comece pelos Processos Mais Impactantes</h3>
      <p>Não tente automatizar tudo de uma vez. Comece pelos processos que consomem mais tempo ou geram mais erros.</p>

      <h3>Passo 3: Escolha a Ferramenta Certa</h3>
      <p>O <strong>ecossistema VendaPX</strong> automatiza os três pilares da operação: <a href="https://pdv.vendapx.com.br">PDV</a>, <a href="https://estoque.vendapx.com.br">estoque</a> e <a href="https://financeiro.vendapx.com.br">finanças</a>. Com integração nativa, os processos fluem automaticamente entre os sistemas.</p>

      <h3>Passo 4: Treine a Equipe</h3>
      <p>Automação não elimina pessoas — as liberta para tarefas de maior valor. Treine a equipe para usar as ferramentas e focar em atendimento, estratégia e crescimento.</p>

      <h3>Passo 5: Monitore e Ajuste</h3>
      <p>Após automatizar, monitore os resultados: os erros diminuíram? O tempo economizado está sendo bem utilizado? Ajuste conforme necessário.</p>

      <h2>Exemplos de Automação no Ecossistema VendaPX</h2>
      <ul>
        <li><strong>Venda registrada no PDV → estoque baixa → financeiro registra → relatório atualizado.</strong> Tudo em segundos, sem intervenção humana.</li>
        <li><strong>Compra registrada no financeiro → estoque atualizado → alerta de reposição enviado.</strong> Fluxo completo automatizado.</li>
        <li><strong>Fechamento de caixa → dados enviados ao financeiro → conciliação automática com banco.</strong> Do fechamento ao relatório sem digitação.</li>
      </ul>

      <h2>Retorno sobre o Investimento</h2>
      <p>Se sua equipe gasta 30 horas por mês em tarefas manuais que poderiam ser automatizadas, e o custo hora do funcionário é R$ 30, são <strong>R$ 900/mês</strong> em trabalho desperdiçado. O <strong>ecossistema VendaPX</strong> custa apenas <strong>R$20/mês</strong> e automatiza grande parte dessas tarefas.</p>

      <h2>Benefícios da Automação</h2>
      <ul>
        <li><strong>Redução de erros:</strong> processos automáticos não erram por distração ou fadiga.</li>
        <li><strong>Velocidade:</strong> tarefas que levam horas são feitas em segundos.</li>
        <li><strong>Consistência:</strong> o processo é executado da mesma forma todas as vezes.</li>
        <li><strong>Escalabilidade:</strong> automação permite crescer sem proporcionalmente aumentar a equipe.</li>
        <li><strong>Foco estratégico:</strong> funcionários liberados para atividades de maior valor.</li>
      </ul>

      <h2>O Futuro é Automatizado</h2>
      <p>Empresas que não automatizam ficam para trás. A concorrência está automatizando, os clientes esperam agilidade e precisão, e o mercado premia quem opera com eficiência. Comece sua jornada de automação hoje.</p>

      <h2>Conclusão</h2>
      <p>Automação de processos reduz erros, agiliza operações e libera tempo para o que realmente importa: crescer o negócio. O <strong>ecossistema VendaPX</strong> automatiza estoque, financeiro e PDV de forma integrada por apenas <strong>R$20/mês</strong>. Comece a automatizar agora.</p>
    `}],Tz=[{slug:"integracao-com-ecommerce-conecte-vendas",title:"Integração com E-commerce: Conecte Suas Vendas Online e Offline",description:"Aprenda como integrar seu e-commerce com o sistema de gestão do seu negócio para unificar estoque, financeiro e vendas em uma única plataforma.",category:"integracao",date:"2025-02-01",readTime:10,keywords:["integração e-commerce","vendas online","omnichannel","gestão unificada","VendaPX","loja virtual"],content:`<h2>Por Que Integrar Seu E-commerce Com o Sistema de Gestão?</h2>
<p>No cenário atual, vender apenas em loja física não é mais suficiente. Milhares de pequenos negócios brasileiros já perceberam que estar presente no mundo digital é essencial para crescer. Porém, quando o e-commerce opera de forma isolada do restante do negócio, os problemas começam a surgir: estoque desatualizado, vendas duplicadas, dificuldade de controle financeiro e muito retrabalho.</p>
<p>A integração do e-commerce com o sistema de gestão é o que chamamos de modelo <strong>omnichannel</strong> — uma estratégia que unifica todos os canais de venda em um único ponto de controle. Com o VendaPX, essa integração se torna simples e acessível, custando apenas <strong>R$20 por mês</strong>.</p>

<h2>Os Principais Problemas Sem Integração</h2>
<p>Muitos pequenos empresários começam vendendo pela internet usando planilhas ou sistemas separados para cada canal. Isso gera uma série de dificuldades:</p>
<ul>
<li><strong>Estoque duplicado:</strong> um produto vendido no site ainda aparece como disponível na loja física, gerando vendas impossíveis de cumprir</li>
<li><strong>Controle financeiro fragmentado:</strong> receitas de diferentes canais misturadas sem categorização adequada</li>
<li><strong>Retrabalho constante:</strong> necessidade de atualizar manualmente os dados em múltiplos sistemas</li>
<li><strong>Decisões baseadas em dados incompletos:</strong> sem uma visão consolidada, é impossível saber o desempenho real do negócio</li>
<li><strong>Experiência do cliente prejudicada:</strong> prazos de entrega errados, produtos sem estoque e atendimento inconsistente</li>
</ul>

<h2>Como Funciona a Integração Com o VendaPX</h2>
<p>O <strong>Controle de Estoque do VendaPX</strong> (estoque.vendapx.com.br) funciona como o centro de todas as suas operações. Quando um produto é vendido no e-commerce, o estoque é atualizado automaticamente em todos os canais. Isso significa que se você tem 10 unidades de um produto e vende 3 pela loja virtual, automaticamente restam 7 disponíveis tanto na loja física quanto em qualquer outro canal conectado.</p>

<h3>Fluxo da Integração</h3>
<ol>
<li><strong>Cadastro centralizado:</strong> todos os produtos são cadastrados uma única vez no VendaPX</li>
<li><strong>Sincronização automática:</strong> preços, descrições e imagens são enviados ao e-commerce</li>
<li><strong>Atualização em tempo real:</strong> cada venda, entrada ou devolução atualiza o estoque automaticamente</li>
<li><strong>Conciliação financeira:</strong> as receitas do e-commerce são registradas no <strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br) com a categoria correta</li>
</ol>

<h2>Benefícios Concretos Para o Seu Negócio</h2>
<p>A integração não é apenas uma conveniência tecnológica — ela traz resultados mensuráveis para o seu negócio:</p>
<ul>
<li><strong>Redução de até 80% no tempo gasto</strong> com atualização manual de estoque</li>
<li><strong>Eliminação de vendas impossíveis</strong> por falta de estoque</li>
<li><strong>Visão consolidada das finanças</strong> em um único painel</li>
<li><strong>Decisões mais rápidas e precisas</strong> baseadas em dados reais</li>
<li><strong>Satisfação do cliente aumentada</strong> com entregas mais confiáveis</li>
</ul>

<h2>Passo a Passo Para Começar</h2>
<p>Começar a integrar seu e-commerce com o VendaPX é um processo simples:</p>
<ol>
<li><strong>Cadastre seus produtos</strong> no Controle de Estoque do VendaPX com todas as informações necessárias</li>
<li><strong>Configure a integração</strong> com sua plataforma de e-commerce (loja virtual)</li>
<li><strong>Defina as regras de sincronização</strong> — quais campos serão atualizados automaticamente</li>
<li><strong>Realize um teste</strong> com poucos produtos antes de liberar para todo o catálogo</li>
<li><strong>Monitore os resultados</strong> no painel do VendaPX e ajuste conforme necessário</li>
</ol>

<h2>Casos de Sucesso</h2>
<blockquote>Antes da integração, eu gastava 3 horas por dia atualizando estoque entre a loja física e o site. Hoje, com o VendaPX, isso acontece automaticamente e posso dedicar meu tempo a vender mais. — Maria, dona de loja de roupas em São Paulo</blockquote>
<p>Pequenos negócios que adotaram a integração entre e-commerce e sistema de gestão relatam <strong>aumento de 25% a 40% no faturamento</strong> nos primeiros meses. Isso acontece porque, com mais tempo disponível e dados confiáveis, é possível focar em estratégias de crescimento em vez de tarefas operacionais.</p>

<h2>Dicas Para Uma Integração Bem-Sucedida</h2>
<ul>
<li><strong>Comece pelo básico:</strong> não tente integrar tudo de uma vez. Comece com estoque e preços</li>
<li><strong>Mantenha os dados limpos:</strong> antes de integrar, revise cadastros e elimine duplicidades</li>
<li><strong>Capacite sua equipe:</strong> todos que operam o sistema devem entender o fluxo integrado</li>
<li><strong>Monitore regularmente:</strong> verifique se as sincronizações estão ocorrendo corretamente</li>
<li><strong>Use o suporte:</strong> a equipe do VendaPX está disponível para ajudar em qualquer etapa</li>
</ul>

<h2>Conclusão</h2>
<p>Integrar seu e-commerce com o sistema de gestão não é mais um luxo — é uma necessidade para quem quer crescer de forma organizada. Com o VendaPX, essa integração é acessível, simples e poderosa. Por apenas <strong>R$20 por mês</strong>, você unifica estoque, financeiro e vendas em uma única plataforma, eliminando desperdícios e potencializando resultados. Comece hoje mesmo a transformar a gestão do seu negócio.</p>`},{slug:"apis-e-webhooks-entenda-a-tecnologia",title:"APIs e Webhooks: Entenda a Tecnologia Por Trás da Integração",description:"Descubra como APIs e webhooks funcionam e por que são essenciais para conectar os sistemas do seu negócio de forma automática e eficiente.",category:"integracao",date:"2025-02-15",readTime:8,keywords:["API","webhook","integração de sistemas","automação","tecnologia","VendaPX"],content:`<h2>O Que São APIs e Por Que Elas Importam?</h2>
<p>Se você já ouviu falar em integração de sistemas, provavelmente encontrou os termos <strong>API</strong> e <strong>webhook</strong>. Embora pareçam conceitos técnicos demais para um empresário, eles são a base de toda a tecnologia que conecta os sistemas do seu negócio — e entender como funcionam pode ajudar você a tomar decisões melhores sobre a tecnologia que usa.</p>
<p><strong>API</strong> significa <em>Application Programming Interface</em>, ou Interface de Programação de Aplicações. Em termos simples, é uma ponte que permite que dois softwares se comuniquem entre si. Pense nela como um garçom em um restaurante: você faz um pedido, e o garçom leva esse pedido até a cozinha e traz o resultado de volta.</p>

<h2>Como Funcionam na Prática</h2>
<p>No contexto do VendaPX, as APIs são responsáveis por permitir que o <strong>Controle de Estoque</strong>, o <strong>Sistema Financeiro</strong> e o <strong>PDV</strong> trabalhem juntos de forma integrada. Quando você registra uma venda no PDV (pdv.vendapx.com.br), uma API envia automaticamente essa informação para o estoque e para o financeiro. Tudo acontece em milissegundos, sem que você precise fazer nada manualmente.</p>

<h3>Exemplos Reais de Uso de APIs</h3>
<ul>
<li><strong>Consulta de estoque:</strong> quando um cliente pergunta se um produto está disponível, o sistema consulta o estoque via API e retorna a resposta instantaneamente</li>
<li><strong>Atualização de preços:</strong> ao alterar o preço de um produto, a API propaga essa mudança para todos os canais conectados</li>
<li><strong>Geração de relatórios:</strong> o sistema financeiro puxa dados de vendas do PDV via API para gerar demonstrativos</li>
<li><strong>Integração com e-commerce:</strong> as APIs conectam sua loja virtual ao estoque, garantindo informações sempre atualizadas</li>
</ul>

<h2>O Que São Webhooks?</h2>
<p>Se a API é como fazer uma pergunta e esperar uma resposta, o <strong>webhook</strong> é como se inscrever em uma notificação. É um mecanismo que envia uma mensagem automaticamente quando algo específico acontece. Por exemplo: quando um produto atinge o estoque mínimo, um webhook pode notificar o responsável pela reposição automaticamente.</p>

<h3>Diferença Entre API e Webhook</h3>
<table>
<tr><th>Característica</th><th>API</th><th>Webhook</th></tr>
<tr><td>Quem inicia</td><td>O sistema que consulta</td><td>O sistema que gera o evento</td></tr>
<tr><td>Quando acontece</td><td>Sob demanda</td><td>Automaticamente ao ocorrer um evento</td></tr>
<tr><td>Uso típico</td><td>Consultas, atualizações</td><td>Notificações, alertas</td></tr>
<tr><td>Exemplo no VendaPX</td><td>Consultar estoque de um produto</td><td>Alerta de estoque baixo</td></tr>
</table>

<h2>Por Que Isso É Importante Para o Seu Negócio</h2>
<p>Embora você não precise programar nada, entender esses conceitos ajuda a avaliar a qualidade dos sistemas que utiliza. Um bom sistema de gestão, como o <strong>VendaPX</strong>, já vem com essas integrações prontas. Isso significa que você não precisa contratar desenvolvedores para conectar suas ferramentas — tudo já funciona de forma automática.</p>
<ul>
<li><strong>Eliminação de retrabalho:</strong> dados fluem automaticamente entre os módulos</li>
<li><strong>Redução de erros:</strong> não há digitação manual, que é a principal fonte de inconsistências</li>
<li><strong>Agilidade:</strong> informações estão sempre disponíveis em tempo real</li>
<li><strong>Escalabilidade:</strong> à medida que o negócio cresce, as integrações acompanham</li>
</ul>

<h2>O VendaPX Já Cuida Disso Para Você</h2>
<p>Uma das grandes vantagens do ecossistema VendaPX é que toda a complexidade técnica de APIs e webhooks já foi resolvida por trás dos panos. Quando você usa o <strong>Controle de Estoque</strong> (estoque.vendapx.com.br), o <strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br) e o <strong>PDV</strong> (pdv.vendapx.com.br), esses sistemas se comunicam automaticamente, sem que você precise se preocupar com a tecnologia.</p>

<blockquote>A tecnologia mais poderosa é aquela que você nem percebe que está usando. Com o VendaPX, as integrações acontecem nos bastidores, e você foca no que realmente importa: seu negócio.</blockquote>

<h2>Dicas Para Avaliar Sistemas de Gestão</h2>
<p>Ao escolher um sistema para o seu negócio, verifique se ele oferece:</p>
<ol>
<li><strong>APIs documentadas:</strong> indicam que o sistema é aberto e pode se integrar com outras ferramentas</li>
<li><strong>Webhooks configuráveis:</strong> permitem criar alertas e automações personalizadas</li>
<li><strong>Integrações nativas:</strong> conexões prontas com plataformas populares como e-commerce e marketplaces</li>
<li><strong>Suporte técnico:</strong> ajuda disponível para configurar e resolver problemas de integração</li>
</ol>

<h2>Conclusão</h2>
<p>APIs e webhooks são os pilares da integração moderna de sistemas. Com o VendaPX, você tem acesso a toda essa tecnologia de forma simples e acessível, por apenas <strong>R$20 por mês</strong>. Entender esses conceitos ajuda você a valorizar a tecnologia que usa e a tomar decisões mais inteligentes sobre a gestão do seu negócio.</p>`},{slug:"migracao-de-dados-como-trocar-de-sistema",title:"Migração de Dados: Como Trocar de Sistema Sem Perder Informações",description:"Guia completo para migrar seus dados de um sistema de gestão para outro de forma segura e organizada, sem perder informações importantes.",category:"integracao",date:"2025-03-01",readTime:9,keywords:["migração de dados","troca de sistema","gestão de dados","VendaPX","planejamento","segurança"],content:`<h2>Quando É Hora de Trocar de Sistema?</h2>
<p>Toda empresa, em algum momento, enfrenta a necessidade de trocar seu sistema de gestão. Seja porque o sistema atual não atende mais às necessidades, porque os custos são altos demais, ou porque a empresa cresceu e precisa de algo mais robusto. O desafio, nesses momentos, é a <strong>migração de dados</strong> — transferir todas as informações do sistema antigo para o novo sem perdas.</p>
<p>Se você está pensando em migrar para o <strong>VendaPX</strong>, saiba que o processo pode ser tranquilo com o planejamento correto. O ecossistema VendaPX, com o <strong>Controle de Estoque</strong> (estoque.vendapx.com.br), o <strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br) e o <strong>PDV</strong> (pdv.vendapx.com.br), foi projetado para facilitar essa transição.</p>

<h2>Planejamento: A Chave Para o Sucesso</h2>
<p>Antes de qualquer ação, é essencial planejar a migração. Um plano bem estruturado evita surpresas e garante que nenhum dado importante fique para trás.</p>

<h3>Etapa 1: Inventário dos Dados</h3>
<p>Liste todos os dados que precisam ser migrados:</p>
<ul>
<li><strong>Cadastros de produtos:</strong> nomes, códigos, preços, descrições, categorias</li>
<li><strong>Cadastros de clientes:</strong> nomes, CPF/CNPJ, telefones, endereços, histórico de compras</li>
<li><strong>Cadastros de fornecedores:</strong> dados cadastrais, condições de pagamento, históricos</li>
<li><strong>Estoque atual:</strong> quantidades, localizações, lotes, validades</li>
<li><strong>Dados financeiros:</strong> contas a pagar, contas a receber, fluxo de caixa</li>
<li><strong>Configurações:</strong> parâmetros do sistema, regras de negócio, usuários</li>
</ul>

<h3>Etapa 2: Limpeza dos Dados</h3>
<p>Antes de migrar, aproveite para limpar e organizar suas informações:</p>
<ul>
<li>Elimine cadastros duplicados</li>
<li>Atualize informações desatualizadas (endereços, telefones)</li>
<li>Padronize formatos (ex: CPFs e CNPJs com pontuação correta)</li>
<li>Arquive dados que não serão mais necessários</li>
</ul>

<h3>Etapa 3: Exportação e Formatação</h3>
<p>A maioria dos sistemas permite exportar dados em formatos como <strong>CSV</strong>, <strong>Excel</strong> ou <strong>JSON</strong>. Exporte cada tipo de dado e verifique se as informações estão completas e corretas antes de prosseguir.</p>

<h2>O Processo de Migração</h2>
<p>Com os dados prontos, é hora de importá-los no novo sistema. No caso do VendaPX, o processo é simplificado:</p>
<ol>
<li><strong>Cadastre-se no VendaPX</strong> e configure os parâmetros básicos do sistema</li>
<li><strong>Importe os produtos</strong> usando a ferramenta de importação em massa</li>
<li><strong>Importe clientes e fornecedores</strong> com os dados já padronizados</li>
<li><strong>Registre o estoque inicial</strong> com as quantidades reais verificadas</li>
<li><strong>Configure o financeiro</strong> com os saldos iniciais e pendências</li>
<li><strong>Realize um teste completo</strong> antes de usar o sistema no dia a dia</li>
</ol>

<h2>Erros Comuns e Como Evitá-los</h2>
<ul>
<li><strong>Migrar dados sujos:</strong> sempre limpe e padronize antes de importar</li>
<li><strong>Pular o teste:</strong> sempre faça um período de prova com os dois sistemas rodando em paralelo</li>
<li><strong>Esquecer configurações:</strong> parâmetros como regras de impostos e formas de pagamento precisam ser configurados manualmente no novo sistema</li>
<li><strong>Não capacitar a equipe:</strong> todos os usuários precisam saber usar o novo sistema antes da troca definitiva</li>
<li><strong>Migrar tudo de uma vez:</strong> prefira migrar por etapas para facilitar a identificação de problemas</li>
</ul>

<h2>Período de Transição</h2>
<p>Recomenda-se um período de <strong>2 a 4 semanas</strong> em que ambos os sistemas funcionem simultaneamente. Durante esse tempo, verifique se todos os dados foram migrados corretamente e se os processos estão funcionando como esperado no novo sistema.</p>

<blockquote>A migração de dados é como se mudar de casa: planeje, embale com cuidado, transporte com atenção e só depois desocupe a casa antiga.</blockquote>

<h2>Vantagens de Migrar Para o VendaPX</h2>
<p>O VendaPX oferece vantagens significativas para quem está migrando de outro sistema:</p>
<ul>
<li><strong>Interface intuitiva:</strong> reduz a curva de aprendizado da equipe</li>
<li><strong>Custo acessível:</strong> apenas R$20/mês, muito abaixo da média do mercado</li>
<li><strong>Suporte dedicado:</strong> ajuda disponível durante todo o processo de migração</li>
<li><strong>Integração nativa:</strong> os três módulos já se comunicam entre si, eliminando a necessidade de configurações adicionais</li>
</ul>

<h2>Conclusão</h2>
<p>Migrar de sistema não precisa ser um processo traumático. Com planejamento, organização e o suporte certo, você pode trocar de plataforma sem perder nenhum dado. O VendaPX está pronto para receber seus dados e oferecer a gestão que o seu negócio merece, por apenas <strong>R$20 por mês</strong>.</p>`},{slug:"backup-e-recuperacao-de-dados",title:"Backup e Recuperação de Dados: Proteja as Informações do Seu Negócio",description:"Saiba como implementar uma estratégia de backup eficiente para garantir que os dados do seu negócio estejam sempre seguros e acessíveis.",category:"integracao",date:"2025-03-15",readTime:8,keywords:["backup","recuperação de dados","segurança da informação","VendaPX","contingência","proteção de dados"],content:`<h2>Por Que o Backup É Fundamental?</h2>
<p>Imagine perder todos os dados do seu negócio: cadastros de clientes, histórico de vendas, informações financeiras, estoque. Essa situação, que parece distante, pode acontecer com qualquer empresa — seja por falha de hardware, vírus, erro humano ou até mesmo um desastre natural. O <strong>backup</strong> é a sua rede de segurança contra esses cenários.</p>
<p>Para pequenas empresas, a perda de dados pode ser ainda mais devastadora, pois muitas vezes não há equipe de TI dedicada para recuperar as informações. Por isso, ter uma estratégia de backup eficiente é essencial para a sobrevivência do negócio.</p>

<h2>Princípios Básicos de Backup</h2>
<p>Uma boa estratégia de backup segue três princípios fundamentais:</p>

<h3>1. Regra 3-2-1</h3>
<ul>
<li><strong>3 cópias</strong> dos dados (original + 2 backups)</li>
<li><strong>2 mídias diferentes</strong> (ex: nuvem + disco externo)</li>
<li><strong>1 cópia fora do local</strong> (proteção contra incêndios, furto, etc.)</li>
</ul>

<h3>2. Frequência Adequada</h3>
<p>A frequência do backup depende do volume de dados e da criticidade das informações:</p>
<ul>
<li><strong>Diário:</strong> para negócios com alto volume de transações</li>
<li><strong>Semanal:</strong> para negócios com volume moderado</li>
<li><strong>Mensal:</strong> apenas para dados estáticos ou arquivamento</li>
</ul>

<h3>3. Teste Regular</h3>
<p>Um backup que nunca foi testado é um backup que pode não funcionar quando você mais precisar. Realize testes de recuperação periodicamente.</p>

<h2>Backup no Contexto do VendaPX</h2>
<p>O ecossistema VendaPX, com o <strong>Controle de Estoque</strong> (estoque.vendapx.com.br), o <strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br) e o <strong>PDV</strong> (pdv.vendapx.com.br), trabalha com dados armazenados em ambiente cloud, o que já oferece uma camada significativa de proteção.</p>

<h3>Vantagens do Armazenamento em Nuvem</h3>
<ul>
<li><strong>Proteção contra desastres físicos:</strong> se algo acontecer com o seu computador, os dados continuam seguros na nuvem</li>
<li><strong>Acesso de qualquer lugar:</strong> você pode acessar seus dados de qualquer dispositivo com internet</li>
<li><strong>Atualização automática:</strong> os backups são feitos automaticamente, sem intervenção manual</li>
<li><strong>Escalabilidade:</strong> o espaço de armazenamento cresce conforme suas necessidades</li>
</ul>

<h2>Como Criar Uma Estratégia de Backup Para o Seu Negócio</h2>
<ol>
<li><strong>Identifique os dados críticos:</strong> o que seria impossível recriar se fosse perdido?</li>
<li><strong>Defina a frequência:</strong> com que frequência esses dados são atualizados?</li>
<li><strong>Escolha os métodos:</strong> nuvem, disco externo, ou ambos</li>
<li><strong>Automatize o processo:</strong> use ferramentas que façam backups automaticamente</li>
<li><strong>Documente o processo:</strong> registre como fazer a recuperação em caso de necessidade</li>
<li><strong>Teste regularmente:</strong> verifique se os backups estão funcionando corretamente</li>
</ol>

<h2>Plano de Recuperação de Desastres</h2>
<p>Além do backup, é importante ter um <strong>plano de recuperação de desastres</strong> — um documento que descreve exatamente o que fazer em caso de perda de dados:</p>
<ul>
<li><strong>Quem é responsável</strong> pela recuperação</li>
<li><strong>Quais passos seguir</strong> na ordem correta</li>
<li><strong>Como comunicar</strong> a equipe e os clientes</li>
<li><strong>Qual o prazo esperado</strong> para a recuperação completa</li>
<li><strong>Como prevenir</strong> que o problema se repita</li>
</ul>

<blockquote>O melhor momento para fazer um backup foi ontem. O segundo melhor momento é agora.</blockquote>

<h2>Erros Comuns em Backup</h2>
<ul>
<li><strong>Só backup na mesma máquina:</strong> se o computador queimar, o backup também se perde</li>
<li><strong>Nunca testar a recuperação:</strong> um backup não testado é um falso senso de segurança</li>
<li><strong>Backup manual:</strong> dependência da memória humana é arriscada</li>
<li><strong>Não documentar o processo:</strong> em emergências, ninguém lembra os passos corretos</li>
</ul>

<h2>Conclusão</h2>
<p>Proteger os dados do seu negócio é uma responsabilidade que nenhum empresário pode ignorar. Com uma estratégia de backup adequada e o suporte do <strong>VendaPX</strong>, você garante que suas informações estejam sempre seguras e acessíveis. Invista em segurança da informação hoje para evitar dores de cabeça amanhã — por apenas <strong>R$20 por mês</strong>.</p>`},{slug:"escalabilidade-cresca-sem-mudar-de-sistema",title:"Escalabilidade: Cresça Sem Precisar Mudar de Sistema",description:"Entenda como escolher um sistema de gestão escalável que acompanhe o crescimento do seu negócio sem necessidade de migração.",category:"integracao",date:"2025-04-01",readTime:7,keywords:["escalabilidade","crescimento empresarial","sistema de gestão","VendaPX","futuro","planejamento"],content:`<h2>O Que É Escalabilidade?</h2>
<p>Escalabilidade é a capacidade de um sistema acompanhar o crescimento do seu negócio sem precisar ser substituído. Muitos pequenos empresários escolhem sistemas pensando apenas no momento atual, sem considerar o futuro. Resultado: quando o negócio cresce, precisam migrar para outra plataforma, gastando tempo e dinheiro.</p>
<p>Um sistema escalável é aquele que <strong>cresce junto com você</strong> — adicionando novos usuários, suportando mais transações, integrando novos canais e expandindo funcionalidades, tudo sem necessidade de troca.</p>

<h2>Por Que a Escalabilidade Importa Para PMEs?</h2>
<p>O brasileiro tem uma cultura de empreender com os pés no chão, começando pequeno e crescendo aos poucos. Porém, muitas ferramentas disponíveis no mercado são ou muito simples (e ficam obsoletas rapidamente) ou muito complexas (e sobram funcionalidades que não serão usadas).</p>

<h3>Problemas de Sistemas Não Escaláveis</h3>
<ul>
<li><strong>Limitação de usuários:</strong> quando a equipe cresce, o sistema não suporta mais acessos</li>
<li><strong>Velocidade reduzida:</strong> com mais dados, o sistema fica lento e travado</li>
<li><strong>Falta de integrações:</strong> novos canais de venda não podem ser conectados</li>
<li><strong>Migração forçada:</strong> necessidade de trocar de sistema, perdendo tempo e dados</li>
</ul>

<h2>Como o VendaPX Resolve Isso</h2>
<p>O ecossistema VendaPX foi projetado com escalabilidade em mente. Isso significa que ele acompanha o crescimento do seu negócio de forma natural:</p>

<h3>Controle de Estoque (estoque.vendapx.com.br)</h3>
<ul>
<li>Suporta desde 100 até milhares de produtos</li>
<li>Adiciona novas filiais sem perda de desempenho</li>
<li>Integra com novos canais de venda conforme necessário</li>
</ul>

<h3>Sistema Financeiro (financeiro.vendapx.com.br)</h3>
<ul>
<li>Gerencia desde fluxos simples até operações complexas</li>
<li>Suporta múltiplas formas de pagamento e moedas</li>
<li>Integra com bancos e sistemas de pagamento</li>
</ul>

<h3>PDV (pdv.vendapx.com.br)</h3>
<ul>
<li>Funciona em uma ou múltiplas lojas</li>
<li>Adiciona novos terminais conforme a necessidade</li>
<li>Se conecta com e-commerce e marketplaces</li>
</ul>

<h2>Como Avaliar a Escalabilidade de um Sistema</h2>
<p>Ao escolher uma ferramenta de gestão, pergunte:</p>
<ol>
<li><strong>Quantos usuários simultâneos ele suporta?</strong></li>
<li><strong>Qual o limite de produtos/cadastros?</strong></li>
<li><strong>Consegue operar em múltiplas filiais?</strong></li>
<li><strong>Oferece integrações com novas plataformas?</strong></li>
<li><strong>O custo acompanha o crescimento ou dispara?</strong></li>
</ol>

<blockquote>Pense no futuro do seu negócio quando escolher sua ferramenta de hoje. O VendaPX foi feito para crescer com você.</blockquote>

<h2>Vantagens Econômicas da Escalabilidade</h2>
<p>Além da praticidade, um sistema escalável oferece vantagens financeiras significativas:</p>
<ul>
<li><strong>Eliminação de custos de migração:</strong> não precisa contratar desenvolvedores para trocar de plataforma</li>
<li><strong>Custo previsível:</strong> com o VendaPX a R$20/mês, você sabe exatamente quanto vai gastar</li>
<li><strong>ROI crescente:</strong> quanto mais você usa o sistema, maior o retorno sobre o investimento</li>
<li><strong>Menos tempo ocioso:</strong> a equipe não perde dias aprendendo uma nova plataforma</li>
</ul>

<h2>Cenários de Crescimento</h2>
<p>Veja como o VendaPX acompanha diferentes cenários de crescimento:</p>
<ul>
<li><strong>De 1 para 2 lojas:</strong> adicione a nova filial ao sistema sem configurar nada do zero</li>
<li><strong>De 2 para 10 funcionários:</strong> adicione novos usuários com permissões diferentes</li>
<li><strong>De loja física para omnichannel:</strong> integre e-commerce ao estoque existente</li>
<li><strong>De local para nacional:</strong> expanda operações com o mesmo sistema</li>
</ul>

<h2>Conclusão</h2>
<p>Escolher um sistema escalável é investir no futuro do seu negócio. Com o VendaPX, você tem a tranquilidade de saber que sua ferramenta de gestão acompanhará cada etapa do seu crescimento, sem surpresas nem custos ocultos. Comece hoje com <strong>R$20 por mês</strong> e cresça com confiança.</p>`},{slug:"10-erros-comuns-de-gestao",title:"10 Erros Comuns de Gestão Que Podem Estragar Seu Negócio",description:"Conheça os erros mais frequentes na gestão de pequenos negócios e aprenda como evitá-los para garantir a saúde da sua empresa.",category:"negocios",date:"2025-04-15",readTime:10,keywords:["erros de gestão","gestão empresarial","pequenos negócios","VendaPX","dicas","empreendedorismo"],content:`<h2>Os Erros Que Todo Empreendedor Deve Conhecer</h2>
<p>Gerenciar um pequeno negócio é um desafio constante. Muitos empreendedores cometem erros que, embora pareçam insignificantes no momento, podem ter consequências sérias no futuro. Conhecer esses erros é o primeiro passo para evitá-los.</p>

<h2>1. Não Ter Controle Financeiro Adequado</h2>
<p>Este é, sem dúvida, o erro mais comum e mais perigoso. Muitos pequenos empresários não sabem exatamente quanto ganham, quanto gastam e quanto lucram. Sem um <strong>controle financeiro claro</strong>, é impossível tomar decisões acertadas.</p>
<ul>
<li>Misturar contas pessoais com contas da empresa</li>
<li>Não registrar todas as entradas e saídas</li>
<li>Ignorar relatórios financeiros mensais</li>
</ul>
<p><strong>Solução:</strong> use o <strong>Sistema Financeiro do VendaPX</strong> (financeiro.vendapx.com.br) para ter visibilidade total sobre suas finanças.</p>

<h2>2. Não Controlar o Estoque</h2>
<p>Produtos sem estoque significam vendas perdidas. Excesso de estoque significa dinheiro parado. O <strong>controle de estoque</strong> é essencial para manter o equilíbrio.</p>
<ul>
<li>Não saber quantos produtos estão disponíveis</li>
<li>Comprar demais ou de menos</li>
<li>Perder produtos por validade ou deterioração</li>
</ul>

<h2>3. Ignorar o Cliente</h2>
<p>O cliente é a razão de existir do negócio. Ignorar suas necessidades, reclamações e sugestões é caminho certo para perder espaço no mercado.</p>

<h2>4. Não Planejar</h2>
<p>Empresas que não planejam estão planejando para falhar. Mesmo um planejamento simples, com metas claras e prazos definidos, faz diferença.</p>

<h2>5. Contratar Mal</h2>
<p>A equipe é o ativo mais importante de qualquer negócio. Contratar sem critérios, sem testar competências e sem verificar referências gera problemas de desempenho e conflitos internos.</p>

<h2>6. Não Investir em Marketing</h2>
<p>Muitos acreditam que boca a boca é suficiente. Embora o marketing digital seja uma ferramenta poderosa e acessível, muitos pequenos negócios ignoram completamente sua presença online.</p>

<h2>7. Preço Abaixo do Custo</h2>
<p>Para competir, alguns empreendedores praticam preços abaixo do custo, sem considerar todos os gastos envolvidos. Isso leva à insolvência rapidamente.</p>
<ul>
<li>Não calcular o custo real do produto (incluindo frete, impostos, embalagem)</li>
<li>Ignorar custos fixos na precificação</li>
<li>Praticar descontos excessivos sem análise</li>
</ul>

<h2>8. Não se Atualizar</h2>
<p>O mercado muda constantemente. Empresas que não se atualizam tecnológica e estrategicamente ficam para trás. Investir em ferramentas como o <strong>VendaPX</strong> é uma forma de se manter competitivo.</p>

<h2>9. Fazer Tudo Sozinho</h2>
<p>O empreendedor que tenta fazer tudo sozinho chega ao limite rápido. Delegar é essencial para crescer.</p>

<h2>10. Não Medir Resultados</h2>
<p>O que não é medido, não é gerido. Sem indicadores claros, é impossível saber se o negócio está indo bem ou mal.</p>

<blockquote>Conhecer os erros é o primeiro passo para evitá-los. Use o VendaPX como sua ferramenta de gestão e minimize os riscos.</blockquote>

<h2>Como o VendaPX Ajuda a Evitar Esses Erros</h2>
<p>O ecossistema VendaPX foi projetado justamente para ajudar pequenos negócios a evitar esses problemas:</p>
<ul>
<li><strong>Controle de Estoque</strong> evita perdas por falta ou excesso de produtos</li>
<li><strong>Sistema Financeiro</strong> oferece visibilidade total sobre receitas e despesas</li>
<li><strong>PDV</strong> registra todas as vendas de forma automatizada</li>
</ul>

<h2>Conclusão</h2>
<p>Evitar esses 10 erros pode fazer a diferença entre o sucesso e o fracasso do seu negócio. Comece hoje a usar o <strong>VendaPX</strong> por apenas <strong>R$20 por mês</strong> e tenha as ferramentas certas para uma gestão inteligente e eficiente.</p>`},{slug:"como-organizar-negocio-do-zero",title:"Como Organizar Seu Negócio do Zero: Guia Prático Para Iniciantes",description:"Passo a passo para organizar um novo negócio desde o início, com dicas práticas de gestão, financeiro, estoque e muito mais.",category:"negocios",date:"2025-05-01",readTime:11,keywords:["organizar negócio","do zero","iniciante","gestão básica","VendaPX","empreendedorismo"],content:`<h2>A Importância de Começar Organizado</h2>
<p>Começar um negócio é empolgante, mas também é um período cheio de decisões importantes. Muitos empreendedores cometem o erro de começar desorganizados, achando que depois vão organizar tudo. Na prática, desorganização gera custos, perdas e frustração. Começar organizado desde o primeiro dia é o segredo para crescer com saúde.</p>

<h2>Passo 1: Defina Sua Atividade</h2>
<p>Antes de qualquer coisa, tenha claro:</p>
<ul>
<li><strong>O que você vai vender:</strong> produto ou serviço?</li>
<li><strong>Para quem:</strong> qual é o seu público-alvo?</li>
<li><strong>Onde vai operar:</strong> loja física, online, ou ambos?</li>
<li><strong>Quanto vai investir:</strong> qual o capital disponível?</li>
</ul>

<h2>Passo 2: Regularize Sua Empresa</h2>
<p>Formalize seu negócio com:</p>
<ul>
<li>Cadastro na Junta Comercial</li>
<li>Inscrição Estadual e Municipal</li>
<li>CNPJ ativo na Receita Federal</li>
<li>Inscrição no Cadastro de Contribuintes Mobiliários</li>
</ul>

<h2>Passo 3: Monte Seu Plano de Negócios Simples</h2>
<p>Não precisa ser um documento de 50 páginas. Responda apenas:</p>
<ol>
<li>Qual problema você resolve para seu cliente?</li>
<li>Como vai cobrar por isso?</li>
<li>Quais são seus custos fixos e variáveis?</li>
<li>Quando espera atingir o ponto de equilíbrio?</li>
</ol>

<h2>Passo 4: Escolha Suas Ferramentas</h2>
<p>Todo negócio precisa de ferramentas básicas para funcionar. Com o <strong>VendaPX</strong>, você tem três sistemas essenciais integrados por apenas <strong>R$20 por mês</strong>:</p>
<ul>
<li><strong>Controle de Estoque</strong> (estoque.vendapx.com.br): para gerenciar seus produtos</li>
<li><strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br): para controlar receitas e despesas</li>
<li><strong>PDV</strong> (pdv.vendapx.com.br): para registrar suas vendas</li>
</ul>

<h2>Passo 5: Organize Seu Estoque</h2>
<p>Mesmo que você comece com poucos produtos, organize-os desde o início:</p>
<ul>
<li>Cadastre cada produto com nome, código, preço e quantidade</li>
<li>Defina local de armazenamento para cada item</li>
<li>Estabeleça ponto de reposição (estoque mínimo)</li>
<li>Registre cada entrada e saída no sistema</li>
</ul>

<h2>Passo 6: Controle Suas Finanças</h2>
<p>O financeiro é o sangue do negócio. Desde o primeiro dia:</p>
<ul>
<li>Registre todas as entradas e saídas</li>
<li>Separar contas pessoais da empresa</li>
<li>Defina fluxo de caixa mensal</li>
<li>Reserve uma reserva para imprevistos</li>
</ul>

<h2>Passo 7: Cuidade do Atendimento</h2>
<p>O atendimento ao cliente é o que vai diferenciar você da concorrência. Seja atencioso, responda rapidamente e resolva problemas com educação.</p>

<h2>Passo 8: Comece a Vender</h2>
<p>Com tudo organizado, é hora de ir ao mercado. Comece pelas vendas mais simples e vá expandindo conforme a demanda.</p>

<h2>Passo 9: Meça e Ajuste</h2>
<p>Use os relatórios do VendaPX para entender o que está funcionando e o que precisa melhorar. Ajuste continuamente.</p>

<blockquote>Um negócio organizado do início tem muito mais chance de prosperar do que um negócio bagunçado que tenta se organizar depois.</blockquote>

<h2>Conclusão</h2>
<p>Organizar um negócio do zero não precisa ser complicado. Com os passos certos e as ferramentas adequadas, como o <strong>VendaPX</strong>, você pode começar de forma profissional e eficiente, gastando apenas <strong>R$20 por mês</strong>. Comece hoje e construa um negócio sólido e próspero.</p>`},{slug:"gestao-de-fornecedores-dicas-praticas",title:"Gestão de Fornecedores: Dicas Práticas Para Relacionamento Mais Lucrativo",description:"Aprenda a gerenciar seus fornecedores de forma estratégica para obter melhores condições, preços e prazos de entrega.",category:"negocios",date:"2025-05-15",readTime:9,keywords:["gestão de fornecedores","relacionamento comercial","compras","VendaPX","negociação","estoque"],content:`<h2>Por Que a Gestão de Fornecedores É Tão Importante?</h2>
<p>Os fornecedores são parceiros estratégicos de qualquer negócio. A qualidade dos seus produtos, os preços que pratica e os prazos de entrega dependem diretamente do relacionamento que você mantém com eles. Uma boa gestão de fornecedores pode ser a diferença entre lucrar ou perder dinheiro.</p>

<h2>Princípios da Gestão de Fornecedores</h2>

<h3>1. Diversifique Fornecedores</h3>
<p>Nunca dependa de um único fornecedor para itens essenciais. Tenha pelo menos dois ou três fornecedores para cada produto crítico, reduzindo o risco de parada por falta de insumos.</p>

<h3>2. Negocie Condições</h3>
<p>Negocie prazos de pagamento, descontos por volume e condições especiais. Fornecedores preferem clientes que pagam em dia e compram com frequência.</p>

<h3>3. Mantenha Registro</h3>
<p>Registre todas as negociações, contratos e acordos. Isso evita mal-entendidos e serve como base para futuras negociações.</p>

<h3>4. Avalie Desempenho</h3>
<p>Periodicamente, avalie seus fornecedores com base em:</p>
<ul>
<li><strong>Qualidade:</strong> os produtos chegam como especificado?</li>
<li><strong>Prazo:</strong> entregas são pontuais?</li>
<li><strong>Preço:</strong> são competitivos no mercado?</li>
<li><strong>Atendimento:</strong> resolvem problemas rapidamente?</li>
</ul>

<h2>Como o VendaPX Facilita a Gestão de Fornecedores</h2>
<p>O <strong>Controle de Estoque do VendaPX</strong> (estoque.vendapx.com.br) permite cadastrar seus fornecedores com todos os dados importantes:</p>
<ul>
<li>Dados cadastrais completos</li>
<li>Condições de pagamento</li>
<li>Prazos de entrega</li>
<li>Histórico de compras</li>
</ul>
<p>Além disso, o <strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br) permite controlar as contas a pagar com fornecedores, programando pagamentos e evitando atrasos.</p>

<h2>Estratégias Para Melhorar o Relacionamento</h2>
<ul>
<li><strong>Pague em dia:</strong> fornecedores que recebem pontualmente oferecem melhores condições</li>
<li><strong>Comunique-se:</strong> mantenha contato regular, não apenas quando houver problemas</li>
<li><strong>Seja leal:</strong> preferir um fornecedor que te atende bem gera reciprocidade</li>
<li><strong>Planeje compras:</strong> previsibilidade ajuda o fornecedor a se organizar</li>
<li><strong>Resolva conflitos com diálogo:</strong> evite brigas públicas, resolva na conversa</li>
</ul>

<h2>Gestão de Compras Eficiente</h2>
<p>Uma compra bem planejada economiza dinheiro e evita problemas:</p>
<ol>
<li><strong>Verifique o estoque antes de comprar:</strong> evite compras desnecessárias</li>
<li><strong>Compare preços:</strong> peça orçamentos de pelo menos 3 fornecedores</li>
<li><strong>Considere o custo total:</strong> frete, impostos, armazenamento</li>
<li><strong>Negocie:</strong> sempre tente obter melhores condições</li>
<li><strong>Registre no sistema:</strong> mantenha todas as compras documentadas</li>
</ol>

<blockquote>Um bom relacionamento com fornecedores é como uma boa amizade: baseado em confiança, respeito e reciprocidade.</blockquote>

<h2>Erros Comuns na Gestão de Fornecedores</h2>
<ul>
<li><strong>Não documentar acordos:</strong> sempre registre por escrito</li>
<li><strong>Apenas buscar o menor preço:</strong> qualidade e prazo são igualmente importantes</li>
<li><strong>Não avaliar periodicamente:</strong> o mercado muda, avalie regularmente</li>
<li><strong>Atrasar pagamentos:</strong> isso arruína o relacionamento</li>
</ul>

<h2>Conclusão</h2>
<p>Gerir fornecedores com estratégia é essencial para a saúde do seu negócio. Com o <strong>VendaPX</strong>, você mantém seus fornecedores organizados, controla pagamentos e toma decisões de compra mais inteligentes — tudo por apenas <strong>R$20 por mês</strong>.</p>`},{slug:"como-aumentar-produtividade-da-equipe",title:"Como Aumentar a Produtividade Da Sua Equipe Sem Aumentar Custos",description:"Estratégias práticas e eficazes para aumentar a produtividade dos seus colaboradores com ferramentas e gestão adequada.",category:"negocios",date:"2025-06-01",readTime:9,keywords:["produtividade","equipe","gestão de pessoas","VendaPX","automação","eficiência"],content:`<h2>O Desafio Da Produtividade Nas PMEs</h2>
<p>Pequenas e médias empresas enfrentam um dilema: precisam produzir mais com menos recursos. Diferente de grandes corporações, as PMEs não podem simplesmente contratar mais pessoas. A solução está em <strong>trabalhar de forma mais inteligente</strong>, não necessariamente mais horas.</p>

<h2>Ferramentas Que Aumentam a Produtividade</h2>
<p>A tecnologia é a maior aliada da produtividade. Com o <strong>VendaPX</strong>, por exemplo, várias tarefas manuais são automatizadas:</p>
<ul>
<li><strong>Controle de Estoque</strong> (estoque.vendapx.com.br): atualização automática de estoques a cada venda</li>
<li><strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br): categorização automática de transações</li>
<li><strong>PDV</strong> (pdv.vendapx.com.br): registro automático de vendas e emissão de notas</li>
</ul>

<h3>Quanto Tempo Essas Ferramentas Economizam?</h3>
<ul>
<li><strong>Atualização manual de estoque:</strong> 2-3 horas por dia economizadas com automação</li>
<li><strong>Organização financeira:</strong> 1-2 horas por dia transformadas em minutos</li>
<li><strong>Registro de vendas:</strong> 30 minutos por dia tornados instantâneos</li>
</ul>

<h2>Estratégias Para Aumentar a Produtividade</h2>

<h3>1. Automatize o que puder</h3>
<p>Identifique tarefas repetitivas e automatize-as. Isso libera tempo para atividades de maior valor.</p>

<h3>2. Defina Prioridades</h3>
<p>Nem todas as tarefas têm a mesma importância. Ensine sua equipe a priorizar o que realmente impacta o resultado.</p>

<h3>3. Comunique-se Claramente</h3>
<p>Evite mal-entendidos com instruções claras e objetivas. Reuniões rápidas diárias mantêm todos alinhados.</p>

<h3>4. Ofereça Treinamento</h3>
<p>Uma equipe capacitada trabalha mais rápido e com menos erros. Invista em treinamento contínuo.</p>

<h3>5. Elimine Desperdícios</h3>
<p>Identifique e elimine atividades que não agregam valor: retrabalho, burocracias desnecessárias, reuniões improdutivas.</p>

<h2>Como Medir Produtividade</h2>
<p>Use indicadores simples para acompanhar a produtividade:</p>
<ul>
<li><strong>Vendas por funcionário:</strong> quanto cada pessoa gera de faturamento</li>
<li><strong>Tempo por tarefa:</strong> quanto tempo leva para concluir cada atividade</li>
<li><strong>Índice de erros:</strong> quantos erros ocorrem por período</li>
<li><strong>Satisfação do cliente:</strong> indicador indireto de qualidade</li>
</ul>

<blockquote>Produtividade não é fazer mais coisas, é fazer as coisas certas com menos esforço.</blockquote>

<h2>O Papel Da Liderança</h2>
<p>A produtividade começa pela liderança. Um líder que define expectativas claras, fornece ferramentas adequadas, reconhece bons resultados e ouve feedback da equipe obtém equipes mais produtivas e engajadas.</p>

<h2>Conclusão</h2>
<p>Aumentar a produtividade não exige grandes investimentos. Com as ferramentas certas, como o <strong>VendaPX</strong> por <strong>R$20 por mês</strong>, e boas práticas de gestão, sua equipe pode produzir muito mais com menos esforço. Comece aplicando essas dicas hoje mesmo.</p>`},{slug:"atendimento-ao-cliente-o-que-faz-diferenca",title:"Atendimento ao Cliente: O Que Realmente Faz a Diferença",description:"Descubra os princípios do atendimento excepcional e como aplicá-los no seu negócio para fidelizar clientes e aumentar vendas.",category:"negocios",date:"2025-06-15",readTime:10,keywords:["atendimento ao cliente","satisfação","fidelização","VendaPX","experiência do cliente","vendas"],content:`<h2>Por Que o Atendimento É o Maior Diferencial?</h2>
<p>Em um mercado cada vez mais competitivo, onde produtos e preços são similares, o que diferencia uma empresa da outra é a <strong>qualidade do atendimento</strong>. Estudos mostram que 86% dos clientes estão dispostos a pagar mais por uma experiência de compra superior.</p>

<h2>Os 5 Pilares do Atendimento Excepcional</h2>

<h3>1. Rapidez na Resposta</h3>
<p>Clientes valorizam rapidez. Seja para tirar uma dúvida, fazer um orçamento ou resolver um problema, quanto mais rápido você responder, maior a satisfação.</p>
<ul>
<li>Responda mensagens em até 30 minutos</li>
<li>Telefones sempre disponíveis durante o horário comercial</li>
<li>E-mail com confirmação de recebimento automático</li>
</ul>

<h3>2. Personalização</h3>
<p>Trate cada cliente como único. Lembre-se de nomes, preferências e histórico de compras. O <strong>VendaPX</strong> facilita isso com cadastros detalhados de clientes.</p>

<h3>3. Empatia</h3>
<p>Entenda o problema do cliente antes de tentar resolver. Demonstre que você se importa com a experiência dele, não apenas com a venda.</p>

<h3>4. Resolução Eficiente</h3>
<p>Problemas acontecem, mas o que define a experiência é como são resolvidos. Tenha processos claros para resolver reclamações rapidamente.</p>

<h3>5. Acompanhamento</h3>
<p>Após resolver um problema ou realizar uma venda, entre em contato para verificar se tudo está bem. Esse gesto simples cria fidelidade.</p>

<h2>Como o VendaPX Melhora o Atendimento</h2>
<p>O ecossistema VendaPX oferece recursos que facilitam o atendimento:</p>
<ul>
<li><strong>Cadastro de clientes completo:</strong> histórico de compras, preferências, dados de contato</li>
<li><strong>PDV integrado:</strong> acesso rápido a informações do cliente durante a venda</li>
<li><strong>Estoque em tempo real:</strong> responda com precisão sobre disponibilidade de produtos</li>
<li><strong>Financeiro organizado:</strong> emita boletos e notas rapidamente</li>
</ul>

<h2>Erros Comuns no Atendimento</h2>
<ul>
<li><strong>Demora para responder:</strong> clientes não esperam para sempre</li>
<li><strong>Falta de treinamento:</strong> equipe sem conhecimento causa frustração</li>
<li><strong>Ignorar reclamações:</strong> problemas não resolvidos geram marketing negativo</li>
<li><strong>Atendimento impessoal:</strong> clientes querem ser tratados como pessoas, não como números</li>
<li><strong>Falta de follow-up:</strong> não verificar satisfação pós-venda</li>
</ul>

<h2>Métricas de Atendimento</h2>
<p>Acompanhe indicadores para medir a qualidade do seu atendimento:</p>
<ul>
<li><strong>NPS (Net Promoter Score):</strong> quanto seus clientes indicariam sua empresa?</li>
<li><strong>Taxa de resolução no primeiro contato:</strong> quantos problemas são resolvidos na primeira tentativa?</li>
<li><strong>Tempo médio de resposta:</strong> quanto tempo leva para atender?</li>
<li><strong>Taxa de reclamações:</strong> quantas reclamações por 100 vendas?</li>
</ul>

<blockquote>O cliente não se lembra do preço que pagou, mas se lembra da experiência que teve.</blockquote>

<h2>Casos de Sucesso</h2>
<p>Negócios que investem em atendimento excepcional relatam:</p>
<ul>
<li><strong>Aumento de 35% em vendas recorrentes</strong></li>
<li><strong>Redução de 50% em reclamações</strong></li>
<li><strong>Mais de 70% dos clientes voltam a comprar</strong></li>
</ul>

<h2>Conclusão</h2>
<p>O atendimento ao cliente é o ativo mais valioso do seu negócio. Com o <strong>VendaPX</strong>, você tem ferramentas para oferecer um atendimento rápido, personalizado e eficiente, por apenas <strong>R$20 por mês</strong>. Invista em experiência e colha fidelidade.</p>`},{slug:"marketing-digital-para-pequenos-negocios",title:"Marketing Digital Para Pequenos Negócios: Como Começar Com Pouco",description:"Estratégias acessíveis de marketing digital para pequenas empresas brasileiras que querem crescer online sem gastar muito.",category:"negocios",date:"2025-07-01",readTime:10,keywords:["marketing digital","pequenos negócios","mídia social","VendaPX","presença online","vendas"],content:`<h2>Marketing Digital Não Precisa Ser Caro</h2>
<p>Muitos pequenos empresários acreditam que marketing digital é coisa de grandes empresas com orçamentos milionários. Na verdade, existem diversas estratégias acessíveis que podem gerar resultados significativos para pequenos negócios. O segredo é começar com o básico e ir expandindo conforme os resultados apareçam.</p>

<h2>Canais de Marketing Digital Para PMEs</h2>

<h3>1. Redes Sociais</h3>
<p>Instagram, Facebook e TikTok são plataformas gratuitas que podem trazer clientes qualificados. O segredo é:</p>
<ul>
<li><strong>Poste conteúdo relevante:</strong> dicas, bastidores, produtos em uso</li>
<li><strong>Responda comentários:</strong> engajamento gera mais visibilidade</li>
<li><strong>Use hashtags locais:</strong> alcance clientes da sua região</li>
<li><strong>Publique regularmente:</strong> consistência é mais importante que volume</li>
</ul>

<h3>2. Google Meu Negócio</h3>
<p>Configurar o Google Meu Negócio é essencial para negócios locais. É gratuito e aparece nas buscas do Google Maps. Mantenha sempre atualizado:</p>
<ul>
<li>Endereço correto</li>
<li>Horário de funcionamento</li>
<li>Fotos do estabelecimento</li>
<li>Avaliações de clientes</li>
</ul>

<h3>3. WhatsApp Business</h3>
<p>O WhatsApp é a ferramenta de comunicação preferida dos brasileiros. Use o WhatsApp Business para:</p>
<ul>
<li>Catálogo de produtos</li>
<li>Respostas rápidas automáticas</li>
<li>Etiquetas para organizar conversas</li>
<li>Estatísticas de mensagens</li>
</ul>

<h3>4. E-mail Marketing</h3>
<p>Apesar de parecer antigo, e-mail continua sendo um dos canais com melhor retorno sobre investimento. Comece com:</p>
<ul>
<li>Lista de clientes que já compraram</li>
<li>Newsletters mensais com novidades</li>
<li>Promoções exclusivas para assinantes</li>
</ul>

<h2>Como o VendaPX Complementa Seu Marketing</h2>
<p>Enquanto você foca em atrair clientes, o <strong>VendaPX</strong> cuida da operação:</p>
<ul>
<li><strong>Controle de Estoque</strong> garante que os produtos anunciados estejam disponíveis</li>
<li><strong>Sistema Financeiro</strong> permite acompanhar o retorno de cada campanha</li>
<li><strong>PDV</strong> registra as vendas geradas pelo marketing</li>
</ul>

<h2>Plano de Marketing Simples</h2>
<p>Crie um plano mensal com:</p>
<ol>
<li><strong>Objetivo:</strong> quantos novos clientes quer atrair?</li>
<li><strong>Orçamento:</strong> quanto pode investir? (pode ser apenas seu tempo)</li>
<li><strong>Ações:</strong> quais canais vai usar?</li>
<li><strong>Calendário:</strong> quando vai postar e enviar?</li>
<li><strong>Medição:</strong> como vai avaliar os resultados?</li>
</ol>

<h2>Conteúdo Que Funciona</h2>
<ul>
<li><strong>Educativo:</strong> dicas relacionadas ao seu ramo</li>
<li><strong>Bastidores:</strong> mostre como o produto é feito ou o processo de trabalho</li>
<li><strong>Depoimentos:</strong> clientes satisfeitos são seus melhores vendedores</li>
<li><strong>Promoções:</strong> ofertas especiais geram urgência</li>
</ul>

<blockquote>Marketing digital para pequenos negócios não é sobre gastar mais, é sobre gastar melhor.</blockquote>

<h2>Erros Comuns no Marketing Digital</h2>
<ul>
<li><strong>Não ter consistência:</strong> postar uma vez e sumir por semanas</li>
<li><strong>Focar apenas em vender:</strong> conteúdo 100% comercial afasta seguidores</li>
<li><strong>Não medir resultados:</strong> sem métricas, não sabe o que funciona</li>
<li><strong>Negligenciar o atendimento:</strong> rede social exige respostas rápidas</li>
</ul>

<h2>Conclusão</h2>
<p>Marketing digital para pequenos negócios é possível e acessível. Comece com as ferramentas gratuitas, seja consistente e meça resultados. Com o <strong>VendaPX</strong> cuidando da gestão, você tem mais tempo para cuidar do marketing. Tudo por apenas <strong>R$20 por mês</strong>.</p>`},{slug:"como-lidar-com-sazonalidade",title:"Como Lidar com Sazonalidade No Seu Negócio",description:"Estratégias para equilibrar as flutuações de vendas ao longo do ano e manter o negócio saudável em qualquer estação.",category:"negocios",date:"2025-07-15",readTime:8,keywords:["sazonalidade","flutuação de vendas","gestão financeira","VendaPX","planejamento","estacionalidade"],content:`<h2>O Que É Sazonalidade?</h2>
<p>Sazonalidade são as flutuações naturais de demanda que acontecem ao longo do ano. Lojas de roupas vendem mais no verão, papelarias faturam mais na volta às aulas, e lojas de presentes têm picos em datas comemorativas. Entender e planejar essas flutuações é essencial para a saúde financeira do negócio.</p>

<h2>Por Que a Sazonalidade Aflige Tanto Pequenos Negócios?</h2>
<p>Grandes empresas têm capital para absorver períodos de baixa. Pequenos negócios, não. Por isso, é fundamental:</p>
<ul>
<li><strong>Antecipar os períodos de baixa:</strong> planejar financeiramente</li>
<li><strong>Criar estratégias para aumentar vendas em baixa temporada</strong></li>
<li><strong>Economizar nos períodos de alta:</strong> não gastar tudo que entra</li>
<li><strong>Diversificar ofertas:</strong> não depender de uma única estação</li>
</ul>

<h2>Estratégias Para Mitigar Sazonalidade</h2>

<h3>1. Planeje Financeiramente</h3>
<p>Use o <strong>Sistema Financeiro do VendaPX</strong> (financeiro.vendapx.com.br) para:</p>
<ul>
<li>Identificar padrões de vendas mensais</li>
<li>Criar reserva para meses mais fracos</li>
<li>Programar investimentos para o momento certo</li>
<li>Controlar gastos fixos durante períodos de baixa</li>
</ul>

<h3>2. Diversifique Produtos</h3>
<p>Se vende guarda-chuvas, que tal oferecer protetor solar no verão? Diversificar ajuda a manter vendas o ano todo.</p>

<h3>3. Crie Promoções Estratégicas</h3>
<p>Em períodos de baixa, ofereça promoções que incentivem a compra:</p>
<ul>
<li>Descontos progressivos</li>
<li>Combo de produtos</li>
<li>Programa de fidelidade</li>
<li>Vendas antecipadas para a próxima temporada</li>
</ul>

<h3>4. Explore Novos Canais de Venda</h3>
<p>E-commerce e marketplaces podem trazer vendas mesmo quando a loja física está mais calma.</p>

<h3>5. Invista em Marketing</h3>
<p>Períodos de baixa são ótimos para investir em marketing e atrair clientes para o futuro.</p>

<h2>Como o VendaPX Ajudá a Planejar</h2>
<p>O ecossistema VendaPX oferece dados essenciais para o planejamento sazonal:</p>
<ul>
<li><strong>Relatórios de vendas:</strong> identifique meses mais fortes e fracos</li>
<li><strong>Controle de estoque:</strong> prepare estoque antes dos picos de demanda</li>
<li><strong>Fluxo de caixa:</strong> projeções de receita e despesa por mês</li>
</ul>

<blockquote>Planejar a sazonalidade não é evitar os meses ruins, é se preparar para eles.</blockquote>

<h2>Exemplos Práticos</h2>
<ul>
<li><strong>Loja de roupas:</strong> no inverno, ofereça casacos e agas; no verão, vestidos e bermudas</li>
<li><strong>Loja de material escolar:</strong> além da volta às aulas, ofereça material para escritório</li>
<li><strong>Restaurante:</strong> no verão, saladas e sucos; no inverno, sopas e quentes</li>
</ul>

<h2>Conclusão</h2>
<p>Sazonalidade é um desafio, mas com planejamento e as ferramentas certas, pode ser gerenciada. O <strong>VendaPX</strong>, por <strong>R$20 por mês</strong>, dá a você os dados e o controle necessários para enfrentar qualquer estação com tranquilidade.</p>`},{slug:"gestao-de-pessoas-lideranca-eficaz",title:"Gestão de Pessoas: Liderança Eficaz Para o Sucesso do Seu Negócio",description:"Aprenda técnicas de liderança e gestão de pessoas para motivar sua equipe e alcançar melhores resultados no seu negócio.",category:"negocios",date:"2025-08-01",readTime:11,keywords:["gestão de pessoas","liderança","equipe","motivação","VendaPX","desenvolvimento profissional"],content:`<h2>A Importância Da Gestão de Pessoas</h2>
<p>O capital humano é o ativo mais valioso de qualquer empresa. Uma equipe motivada, capacitada e bem liderada faz a diferença entre o sucesso e o fracasso. No entanto, muitos pequenos empresários investem tempo e dinheiro em estoque, equipamentos e marketing, mas negligenciam suas pessoas.</p>

<h2>Princípios Da Liderança Eficaz</h2>

<h3>1. Comunicação Clara</h3>
<p>Líderes eficazes comunicam de forma clara e frequente:</p>
<ul>
<li><strong>Expectativas:</strong> todos devem saber o que se espera deles</li>
<li><strong>Feedback:</strong> elogie publicamente, corrija em particular</li>
<li><strong>Ouça ativamente:</strong> opiniões da equipe são valiosas</li>
<li><strong>Transparência:</strong> compartilhe informações relevantes sobre o negócio</li>
</ul>

<h3>2. Delegação Inteligente</h3>
<p>Delegar não é abdicar responsabilidade. É confiar na equipe com acompanhamento:</p>
<ul>
<li>Escolha a pessoa certa para cada tarefa</li>
<li>Defina prazos e entregas claras</li>
<li>Disponibilize recursos necessários</li>
<li>Acompanhe sem sufocar</li>
</ul>

<h3>3. Reconhecimento</h3>
<p>Pessoas que se sentem valorizadas trabalham melhor. Reconheça conquistas:</p>
<ul>
<li>Elogios sinceros</li>
<li>Prêmios por performance</li>
<li>Oportunidades de crescimento</li>
<li>Participação nos resultados</li>
</ul>

<h3>4. Desenvolvimento Contínuo</h3>
<p>Invista no crescimento profissional da equipe:</p>
<ul>
<li>Treinamentos periódicos</li>
<li>Mentoria</li>
<li>Cross-training (capacitação em múltiplas funções)</li>
<li>Acesso a ferramentas modernas, como o <strong>VendaPX</strong></li>
</ul>

<h2>Como o VendaPX Facilita a Gestão de Pessoas</h2>
<p>O ecossistema VendaPX contribui para uma gestão mais eficiente:</p>
<ul>
<li><strong>Automação de tarefas:</strong> libera a equipe para atividades de maior valor</li>
<li><strong>Relatórios de desempenho:</strong> permita avaliar resultados individuais</li>
<li><strong>PDV integrado:</strong> simplifica o trabalho do time de vendas</li>
<li><strong>Sistema Financeiro:</strong> permite calcular comissões e bonificações</li>
</ul>

<h2>Conflitos na Equipe</h2>
<p>Conflitos são naturais, mas precisam ser gerenciados:</p>
<ol>
<li><strong>Identifique cedo:</strong> não deixe problemas escalarem</li>
<li><strong>Ouça as duas partes:</strong> entenda os dois lados</li>
<li><strong>Foque no problema, não nas pessoas</strong></li>
<li><strong>Encontre soluções conjuntas</strong></li>
<li><strong>Documente acordos</strong></li>
</ol>

<h2>Indicadores de Gestão de Pessoas</h2>
<ul>
<li><strong>Turnover:</strong> taxa de demissões e pedidos de demissão</li>
<li><strong>Absenteísmo:</strong> frequência de faltas</li>
<li><strong>Satisfação da equipe:</strong> pesquisa interna periódica</li>
<li><strong>Produtividade:</strong> resultados por funcionário</li>
</ul>

<blockquote>O líder não cria seguidores. O líder cria novos líderes.</blockquote>

<h2>Erros Comuns de Liderança</h2>
<ul>
<li><strong>Micromanagement:</strong> controlar demais sufoca a equipe</li>
<li><strong>Falta de feedback:</strong> funcionários não sabem como estão se saindo</li>
<li><strong>Nepotismo:</strong> tratar membros da família de forma diferente</li>
<li><strong>Falta de coerência:</strong> dizer uma coisa e fazer outra</li>
</ul>

<h2>Conclusão</h2>
<p>Gestão de pessoas é uma das habilidades mais importantes para qualquer líder. Com o <strong>VendaPX</strong>, você automatiza tarefas operacionais e libera tempo para focar no que realmente importa: sua equipe. Tudo por apenas <strong>R$20 por mês</strong>.</p>`},{slug:"planejamento-estrategico-para-pmes",title:"Planejamento Estratégico Para PMEs: Como Definir Rumos",description:"Guia prático de planejamento estratégico adaptado para pequenas e médias empresas brasileiras.",category:"negocios",date:"2025-08-15",readTime:10,keywords:["planejamento estratégico","PME","metas","visão de futuro","VendaPX","gestão estratégica"],content:`<h2>Planejamento Estratégico Não É Coisa de Grande Empresa</h2>
<p>Muitos pequenos empresários acham que planejamento estratégico é algo reservado para grandes corporações com departamentos inteiros dedicados ao assunto. Na verdade, o planejamento é ainda mais importante para pequenas empresas, que precisam otimizar cada recurso disponível.</p>

<h2>O Que É Planejamento Estratégico?</h2>
<p>Planejamento estratégico é o processo de definir para onde o negócio vai e como pretende chegar lá. Envolve:</p>
<ul>
<li><strong>Visão:</strong> como você imagina o futuro do seu negócio?</li>
<li><strong>Missão:</strong> qual o propósito da sua empresa?</li>
<li><strong>Valores:</strong> quais princípios guiam suas decisões?</li>
<li><strong>Metas:</strong> o que você quer alcançar em 1, 3 e 5 anos?</li>
<li><strong>Estratégias:</strong> como vai alcançar essas metas?</li>
</ul>

<h2>Passo a Passo Para Planejar</h2>

<h3>1. Analise a Situação Atual</h3>
<p>Antes de planejar o futuro, entenda onde você está. Use os dados do <strong>VendaPX</strong> para:</p>
<ul>
<li>Analisar vendas por período e produto</li>
<li>Identificar produtos mais e menos lucrativos</li>
<li>Avaliar crescimento do faturamento</li>
<li>Compreender custos fixos e variáveis</li>
</ul>

<h3>2. Defina Objetivos Claros</h3>
<p>Use o método <strong>S.M.A.R.T.</strong>:</p>
<ul>
<li><strong>Específico:</strong> o que exatamente quer alcançar?</li>
<li><strong>Mensurável:</strong> como vai medir o progresso?</li>
<li><strong>Alcançável:</strong> é realista com seus recursos?</li>
<li><strong>Relevante:</strong> está alinhado com a visão do negócio?</li>
<li><strong>Temporal:</strong> qual o prazo?</li>
</ul>

<h3>3. Identifique Ações</h3>
<p>Para cada meta, defina ações concretas:</p>
<ol>
<li>O que precisa ser feito?</li>
<li>Quem é responsável?</li>
<li>Quando deve ser concluído?</li>
<li>Quais recursos são necessários?</li>
</ol>

<h3>4. Execute e Acompanhe</h3>
<p>Um plano sem execução é apenas um documento. Estabeleça:</p>
<ul>
<li>Reuniões semanais de acompanhamento</li>
<li>Relatórios mensais de progresso</li>
<li>Revisão trimestral de metas</li>
</ul>

<h2>Ferramentas Para o Planejamento</h2>
<p>O <strong>VendaPX</strong> é uma ferramenta poderosa para o planejamento estratégico:</p>
<ul>
<li><strong>Relatórios financeiros:</strong> dados para decisões baseadas em números</li>
<li><strong>Controle de estoque:</strong> planejamento de compras e estoque</li>
<li><strong>Análise de vendas:</strong> identificação de tendências e oportunidades</li>
</ul>

<h2>Erros Comuns no Planejamento</h2>
<ul>
<li><strong>Metas vagas:</strong> vender mais não é uma meta, aumentar vendas 20% em 6 meses é</li>
<li><strong>Não revisar:</strong> o plano precisa ser atualizado regularmente</li>
<li><strong>Planejar sozinho:</strong> envolva a equipe no processo</li>
<li><strong>Ignorar dados:</strong> decisões baseadas em intuição são arriscadas</li>
</ul>

<blockquote>Planejar não é prever o futuro, é preparar-se para ele.</blockquote>

<h2>Exemplo Prático de Plano</h2>
<p><strong>Meta:</strong> Aumentar faturamento em 30% em 12 meses.</p>
<ul>
<li><strong>Ação 1:</strong> Abrir canal de vendas online (prazo: 3 meses)</li>
<li><strong>Ação 2:</strong> Ampliar catálogo em 50 novos produtos (prazo: 6 meses)</li>
<li><strong>Ação 3:</strong> Contratar 1 vendedor adicional (prazo: 2 meses)</li>
<li><strong>Ação 4:</strong> Investir R$500/mês em marketing digital (prazo: imediato)</li>
</ul>

<h2>Conclusão</h2>
<p>Planejamento estratégico é o mapa que guia o crescimento do seu negócio. Com o <strong>VendaPX</strong>, você tem dados concretos para planejar com inteligência e executar com eficiência. Comece a planejar hoje por apenas <strong>R$20 por mês</strong>.</p>`},{slug:"como-reduzir-custos-sem-perder-qualidade",title:"Como Reduzir Custos Sem Perder Qualidade",description:"Estratégias inteligentes para reduzir despesas no seu negócio sem comprometer a qualidade dos produtos e serviços.",category:"negocios",date:"2025-09-01",readTime:9,keywords:["redução de custos","economia","qualidade","VendaPX","eficiência","gestão financeira"],content:`<h2>O Dilema: Reduzir Custos Sem Perder Qualidade</h2>
<p>Toda empresa quer reduzir custos, mas poucas conseguem fazer isso sem prejudicar a qualidade. O segredo está em identificar onde há desperdício e otimizar processos, sem cortar no que realmente importa para o cliente.</p>

<h2>Áreas Onde É Possível Economizar</h2>

<h3>1. Estoque</h3>
<p>Estoque é dinheiro parado. Com o <strong>Controle de Estoque do VendaPX</strong> (estoque.vendapx.com.br), você pode:</p>
<ul>
<li><strong>Eliminar itens parados:</strong> identifique produtos que não giram e promova saída</li>
<li><strong>Comprar apenas o necessário:</strong> evite compras por impulsão</li>
<li><strong>Negociar com fornecedores:</strong> compras programadas geram descontos</li>
<li><strong>Reduzir perdas:</strong> controle validades e evite deterioração</li>
</ul>

<h3>2. Processos Operacionais</h3>
<p>Muitos processos são mais lentos e custosos do que deveriam:</p>
<ul>
<li><strong>Automatize tarefas repetitivas:</strong> use o VendaPX para automatizar estoque, financeiro e vendas</li>
<li><strong>Elimine retrabalho:</strong> faça certo na primeira vez</li>
<li><strong>Padronize procedimentos:</strong> reduza variações e erros</li>
</ul>

<h3>3. Energia e Infraestrutura</h3>
<ul>
<li>Troque lâmpadas por LED</li>
<li>Desligue equipamentos quando não estiverem em uso</li>
<li>Negocie contratos de energia</li>
<li>Considere trabalho remoto quando possível</li>
</ul>

<h3>4. Marketing</h3>
<p>Marketing digital é mais barato e mensurável que o tradicional:</p>
<ul>
<li>Foque em redes sociais orgânicas</li>
<li>Use WhatsApp para comunicação direta</li>
<li>Invista em conteúdo de valor</li>
<li>Meça o retorno de cada investimento</li>
</ul>

<h3>5. Terceirização</h3>
<p>Algumas atividades são mais baratas quando terceirizadas:</p>
<ul>
<li>Contabilidade</li>
<li>Limpeza</li>
<li>Logística</li>
<li>Marketing digital</li>
</ul>

<h2>O Que NÃO Deve Ser Cortado</h2>
<ul>
<li><strong>Qualidade do produto:</strong> nunca sacrifice a qualidade</li>
<li><strong>Atendimento ao cliente:</strong> é o que fideliza</li>
<li><strong>Treinamento da equipe:</strong> equipe capacitada trabalha melhor</li>
<li><strong>Segurança:</strong> investir em segurança previne prejuízos maiores</li>
</ul>

<h2>Como o VendaPX Ajuda a Reduzir Custos</h2>
<p>O ecossistema VendaPX é em si uma economia significativa:</p>
<ul>
<li><strong>R$20/mês:</strong> muito abaixo do custo de sistemas equivalentes</li>
<li><strong>Três sistemas integrados:</strong> não precisa comprar ferramentas separadas</li>
<li><strong>Automação:</strong> reduz necessidade de mão de obra para tarefas operacionais</li>
<li><strong>Evita erros:</strong> erros de gestão custam caro, e o VendaPX minimiza isso</li>
</ul>

<blockquote>Cortar custos não é gastar menos. É gastar melhor.</blockquote>

<h2>Checklist de Economia</h2>
<ol>
<li>Analisar assinaturas e serviços contratados (cancelar os não utilizados)</li>
<li>Revisar negociações com fornecedores</li>
<li>Identificar processos que podem ser automatizados</li>
<li>Otimizar uso de energia</li>
<li>Avaliar necessidade de terceirização</li>
</ol>

<h2>Conclusão</h2>
<p>Reduzir custos sem perder qualidade é possível com gestão inteligente. O <strong>VendaPX</strong>, por apenas <strong>R$20 por mês</strong>, é a ferramenta ideal para identificar desperdícios e otimizar recursos. Comece hoje a gastar melhor.</p>`},{slug:"negocios-sustentaveis-tendencias",title:"Negócios Sustentáveis: Tendências e Oportunidades Para o Futuro",description:"Descubra como incorporar práticas sustentáveis no seu negócio e aproveitar as oportunidades do mercado verde.",category:"negocios",date:"2025-09-15",readTime:9,keywords:["negócios sustentáveis","sustentabilidade","ESG","VendaPX","economia verde","tendências"],content:`<h2>A Sustentabilidade Não É Mais Opcional</h2>
<p>A sustentabilidade deixou de ser uma tendência para se tornar uma exigência. Consumidores, investidores e reguladores estão cada vez mais atentos ao impacto ambiental e social das empresas. Para pequenos negócios, incorporar práticas sustentáveis não é apenas ético — é estratégico.</p>

<h2>O Que São Negócios Sustentáveis?</h2>
<p>Um negócio sustentável é aquele que opera de forma a minimizar impactos negativos ao meio ambiente e à sociedade, ao mesmo tempo em que gera lucro. Isso envolve três dimensões:</p>
<ul>
<li><strong>Ambiental:</strong> redução de desperdício, uso consciente de recursos, baixa emissão de carbono</li>
<li><strong>Social:</strong> trabalho digno, diversidade, responsabilidade com a comunidade</li>
<li><strong>Econômica:</strong> viabilidade financeira de longo prazo</li>
</ul>

<h2>Tendências para 2025 e Além</h2>

<h3>1. Economia Circular</h3>
<p>Em vez de produzir-usar-descartar, a economia circular promove reutilização, reciclagem e reparo. Negócios que adotam esse modelo reduzem custos com matéria-prima e atraem consumidores conscientes.</p>

<h3>2. Embalagens Sustentáveis</h3>
<p>Consumidores escolhem produtos com embalagens sustentáveis. Mude para materiais recicláveis ou biodegradáveis.</p>

<h3>3. Energia Renovável</h3>
<p>Painéis solares e contratos com fornecedores de energia verde são cada vez mais acessíveis para pequenas empresas.</p>

<h3>4. Transparência</h3>
<p>Consumidores querem saber de onde vem o produto e como é feito. Transparência na cadeia de valor gera confiança.</p>

<h3>5. Certificações</h3>
<p>Certificações como orgânicas, fair trade e selos de sustentabilidade valorizam o produto.</p>

<h2>Como Começar</h2>
<ul>
<li><strong>Auditória de desperdício:</strong> identifique onde o negócio desperdiça mais</li>
<li><strong>Troca de fornecedores:</strong> busque fornecedores com práticas sustentáveis</li>
<li><strong>Redução de plástico:</strong> elimine plástico descartável do negócio</li>
<li><strong>Educação da equipe:</strong> conscientize seus funcionários</li>
<li><strong>Comunicação:</strong> divulgue suas práticas sustentáveis</li>
</ul>

<h2>Benefícios Econômicos</h2>
<ul>
<li><strong>Redução de custos:</strong> menos desperdício = menos gastos</li>
<li><strong>Acesso a novos mercados:</strong> consumidores sustentáveis são fiéis</li>
<li><strong>Incentivos fiscais:</strong> benefícios para empresas sustentáveis</li>
<li><strong>Melhoria da imagem:</strong> reputação positiva atrai clientes</li>
</ul>

<h2>O Papel do VendaPX</h2>
<p>O <strong>VendaPX</strong> ajuda na sustentabilidade ao:</p>
<ul>
<li><strong>Reduzir papel:</strong> gestão 100% digital, sem necessidade de impressões</li>
<li><strong>Otimizar estoque:</strong> menos desperdício de produtos</li>
<li><strong>Controlar energias:</strong> dados para identificar desperdícios</li>
</ul>

<blockquote>Negócios sustentáveis não são apenas o futuro — são o presente. E o VendaPX ajuda você a chegar lá.</blockquote>

<h2>Conclusão</h2>
<p>A sustentabilidade é uma oportunidade de crescimento para pequenos negócios. Com o <strong>VendaPX</strong>, por <strong>R$20 por mês</strong>, você pode gerenciar seu negócio de forma eficiente e sustentável, aproveitando as tendências do mercado.</p>`},{slug:"como-medir-satisfacao-do-cliente",title:"Como Medir a Satisfação do Cliente e Usar os Dados",description:"Métodos práticos para medir a satisfação dos seus clientes e transformar esse conhecimento em ações concretas.",category:"negocios",date:"2025-10-01",readTime:8,keywords:["satisfação do cliente","NPS","pesquisa","VendaPX","melhoria contínua","fidelização"],content:`<h2>Por Que Medir a Satisfação?</h2>
<p>Você não pode melhorar o que não mede. A satisfação do cliente é o melhor indicador de que seu negócio está no caminho certo. Clientes satisfeitos voltam a comprar, indicam sua empresa e perdoam erros ocasionais. Clientes insatisfeitos fogem e espalham reclamações.</p>

<h2>Métodos de Medição</h2>

<h3>1. NPS (Net Promoter Score)</h3>
<p>Uma pergunta simples: De 0 a 10, quanto você indicaria nossa empresa para um amigo?</p>
<ul>
<li><strong>Promotores (9-10):</strong> clientes leais que indicam sua empresa</li>
<li><strong>Neutros (7-8):</strong> satisfeitos, mas vulneráveis à concorrência</li>
<li><strong>Detratores (0-6):</strong> insatisfeitos que podem prejudicar sua reputação</li>
</ul>
<p><strong>Fórmula:</strong> NPS = % Promotores - % Detratores</p>

<h3>2. Pesquisas de Satisfação</h3>
<p>Envie pesquisas periódicas perguntando sobre:</p>
<ul>
<li>Qualidade do produto/serviço</li>
<li>Atendimento ao cliente</li>
<li>Preço vs. valor percebido</li>
<li>Experiência de compra</li>
<li>Probabilidade de recompra</li>
</ul>

<h3>3. Avaliações Online</h3>
<p>Monitore avaliações no Google, Reclame Aqui e redes sociais. Responda todas, positivas e negativas.</p>

<h3>4. Feedback Direto</h3>
<p>Ouça ativamente os clientes durante a interação. Muitas informações valiosas vêm de conversas informais.</p>

<h3>5. Análise de Comportamento</h3>
<p>Observe indicadores como:</p>
<ul>
<li>Taxa de recompra</li>
<li>Ticket médio ao longo do tempo</li>
<li>Frequência de visitas</li>
<li>Reclamações formais</li>
</ul>

<h2>Como o VendaPX Ajudá a Coletar Dados</h2>
<p>O ecossistema VendaPX oferece dados que alimentam a análise de satisfação:</p>
<ul>
<li><strong>PDV:</strong> histórico de compras por cliente</li>
<li><strong>Financeiro:</strong> padrões de pagamento e devoluções</li>
<li><strong>Estoque:</strong> disponibilidade de produtos que clientes procuram</li>
</ul>

<h2>Como Usar os Dados</h2>
<ol>
<li><strong>Identifique padrões:</strong> quais aspectos são mais reclamados?</li>
<li><strong>Priorize melhorias:</strong> foque no que mais impacta a satisfação</li>
<li><strong>Implemente mudanças:</strong> aja rapidamente sobre os feedbacks</li>
<li><strong>Comunique mudanças:</strong> mostre aos clientes que você os ouviu</li>
<li><strong>Meça novamente:</strong> verifique se a satisfação melhorou</li>
</ol>

<blockquote>O cliente mais insatisfeito é a sua maior oportunidade de melhoria.</blockquote>

<h2>Erros Comuns</h2>
<ul>
<li><strong>Não medir:</strong> operar no escuro é arriscado</li>
<li><strong>Medir mas não agir:</strong> dados sem ação são inúteis</li>
<li><strong>Só medir quando há reclamação:</strong> proatividade é essencial</li>
<li><strong>Ignorar clientes neutros:</strong> eles podem ser convertidos em promotores</li>
</ul>

<h2>Conclusão</h2>
<p>Medir a satisfação do cliente é essencial para o crescimento sustentável. Com o <strong>VendaPX</strong>, você tem dados para entender seus clientes e oferecer uma experiência melhor. Comece a medir hoje por apenas <strong>R$20 por mês</strong>.</p>`},{slug:"gestao-de-crises-o-que-fazer",title:"Gestão de Crises: O Que Fazer Quando Tudo Parece Dar Errado",description:"Guia de ação para situações de crise no negócio, desde problemas financeiros até reclamações públicas.",category:"negocios",date:"2025-10-15",readTime:10,keywords:["gestão de crises","resiliência","problemas empresariais","VendaPX","recuperação","contingência"],content:`<h2>Todo Negócio Enfrenta Uma Crise</h2>
<p>Nenhum negócio está imune a crises. Seja uma queda nas vendas, um problema com fornecedor, uma reclamação viral nas redes sociais ou uma emergência financeira, a questão não é se vai acontecer, mas quando. A diferença entre negócios que sobrevivem e os que fecham está na <strong>capacidade de resposta</strong>.</p>

<h2>Tipos Comuns de Crises</h2>
<ul>
<li><strong>Financeira:</strong> falta de caixa, dívidas acumuladas, inadimplência</li>
<li><strong>Operacional:</strong> falhas em produtos, atrasos de entrega, defeitos</li>
<li><strong>Reputacional:</strong> reclamações públicas, crises nas redes sociais</li>
<li><strong>Humana:</strong> saída de funcionário-chave, conflitos internos</li>
<li><strong>Externa:</strong> pandemia, crise econômica, mudanças regulatórias</li>
</ul>

<h2>Plano de Ação Para Crises</h2>

<h3>1. Pare e Avalie</h3>
<p>Em vez de reagir impulsivamente:</p>
<ul>
<li>Identifique a natureza da crise</li>
<li>Avalie a gravidade</li>
<li>Defina quem é responsável pela resposta</li>
</ul>

<h3>2. Comunique</h3>
<p>Comunicação transparente é essencial:</p>
<ul>
<li>Informe a equipe sobre a situação</li>
<li>Responda clientes de forma honesta</li>
<li>Não esconda problemas</li>
<li>Ofereça soluções, não desculpas</li>
</ul>

<h3>3. Aja</h3>
<p>Implemente soluções rapidamente:</p>
<ul>
<li>Priorize o que é urgente e importante</li>
<li>Aloque recursos necessários</li>
<li>Estabeleça prazos curtos</li>
</ul>

<h3>4. Aprenda</h3>
<p>Após resolver a crise:</p>
<ul>
<li>Analise o que aconteceu</li>
<li>Identifique o que pode ser melhorado</li>
<li>Crie planos para evitar recorrência</li>
</ul>

<h2>Como o VendaPX Ajuda em Momentos de Crise</h2>
<p>Em situações difíceis, dados são fundamentais:</p>
<ul>
<li><strong>Sistema Financeiro:</strong> identifique exatamente onde estão os problemas de caixa</li>
<li><strong>Controle de Estoque:</strong> otimize estoque para reduzir custos</li>
<li><strong>PDV:</strong> analise padrões de vendas para encontrar oportunidades</li>
</ul>

<h2>Estratégias Para Crises Financeiras</h2>
<ul>
<li><strong>Renegocie dívidas:</strong> credores preferem receber menos a nada</li>
<li><strong>Corte gastos fixos:</strong> cancele assinaturas não essenciais</li>
<li><strong>Acelere recebimentos:</strong> ofereça desconto para pagamento à vista</li>
<li><strong>Diversifique fontes de renda:</strong> crie novos canais de venda</li>
</ul>

<h2>Estratégias Para Crises de Reputação</h2>
<ul>
<li><strong>Responda rapidamente:</strong> tempo é crucial</li>
<li><strong>Assuma responsabilidade:</strong> se errou, peça desculpas sinceramente</li>
<li><strong>Ofereça compensação:</strong> quando apropriado</li>
<li><strong>Documente tudo:</strong> tenha registro das ações tomadas</li>
</ul>

<blockquote>A crise não escolhe momento. A preparação é o que faz a diferença.</blockquote>

<h2>Prevenção É Melhor Que Cura</h2>
<ul>
<li>Mantenha reserva financeira</li>
<li>Diversifique fornecedores e clientes</li>
<li>Cuide da reputação proativamente</li>
<li>Monitore indicadores regularmente</li>
</ul>

<h2>Conclusão</h2>
<p>Crises são oportunidades para se tornar mais forte. Com planejamento, o <strong>VendaPX</strong> e ação estratégica, você pode superar qualquer adversidade. Mantenha os dados organizados e as decisões baseadas em números. Por apenas <strong>R$20 por mês</strong>, o VendaPX é sua âncora em tempos difíceis.</p>`},{slug:"tendencias-de-gestao-2025",title:"Tendências de Gestão 2025: O Que Mudar no Seu Negócio",description:"As principais tendências de gestão empresarial para 2025 e como implementá-las em pequenos e médios negócios.",category:"negocios",date:"2025-11-01",readTime:10,keywords:["tendências 2025","gestão empresarial","inovação","VendaPX","futuro do negócio","transformação"],content:`<h2>O Que Esperar de 2025?</h2>
<p>O mundo dos negócios está em constante transformação. Em 2025, várias tendências estão moldando a forma como as empresas gerenciam suas operações. Para pequenos e médios negócios, acompanhar essas tendências é essencial para manter competitividade.</p>

<h2>1. Inteligência Artificial na Gestão</h2>
<p>A IA deixou de ser coisa de ficção científica. Em 2025, ferramentas de IA estão acessíveis para pequenas empresas:</p>
<ul>
<li><strong>Análise preditiva:</strong> prever demanda e otimizar estoque</li>
<li><strong>Chatbots:</strong> atendimento automatizado 24/7</li>
<li><strong>Automação:</strong> tarefas repetitivas feitas por máquinas</li>
</ul>
<p>O próprio <strong>VendaPX</strong> já incorpora inteligência artificial em seus módulos, oferecendo insights automáticos para estoque, financeiro e vendas.</p>

<h2>2. Trabalho Híbrido</h2>
<p>O modelo híbrido veio para ficar. Gestores precisam aprender a liderar equipes que trabalham presencial e remotamente:</p>
<ul>
<li>Ferramentas de colaboração</li>
<li>Resultados baseados em entregas, não em horas</li>
<li>Flexibilidade como benefício</li>
</ul>

<h2>3. Sustentabilidade como Estratégia</h2>
<p>Em 2025, sustentabilidade não é marketing — é estratégia. Consumidores escolhem empresas que demonstram compromisso ambiental.</p>

<h2>4. Experiência do Cliente</h2>
<p>Produtos similares competem por experiência. Personalização, rapidez e atendimento excepcional fazem a diferença.</p>

<h2>5. Dados Como Decisão</h2>
<p>Empresas que usam dados para tomar decisões crescem mais rápido. O <strong>VendaPX</strong> oferece relatórios que transformam dados em ações.</p>

<h2>6. Economia Assinatura</h2>
<p>O modelo de assinatura dominou o mercado. Softwares, produtos e serviços por assinatura oferecem receita recorrente previsível.</p>

<h2>7. Automação de Processos</h2>
<p>Automatizar processos reduz custos e erros. O <strong>VendaPX</strong> automatiza estoque, financeiro e vendas, liberando tempo para o que importa.</p>

<h2>8. Segurança Cibernética</h2>
<p>Com mais dados digitais, a segurança é prioridade. Pequenas empresas precisam proteger informações de clientes e do negócio.</p>

<h2>9. Marketing de Conteúdo</h2>
<p>Conteúdo de valor atrai clientes organicamente. Blog, redes sociais e e-mail marketing continuam eficazes.</p>

<h2>10. Personalização</h2>
<p>Consumidores esperam experiências personalizadas. Conhecer o cliente e oferecer o que ele precisa é a nova normalidade.</p>

<h2>Como Implementar Essas Tendências</h2>
<ol>
<li><strong>Comece pelo básico:</strong> automatize processos essenciais primeiro</li>
<li><strong>Use ferramentas acessíveis:</strong> o VendaPX oferece gestão completa por R$20/mês</li>
<li><strong>Capacite sua equipe:</strong> treinamento é essencial para novas ferramentas</li>
<li><strong>Meça resultados:</strong> acompanhe o impacto de cada mudança</li>
<li><strong>Adapte-se:</strong> não copie grandes empresas, adapte as tendências à sua realidade</li>
</ol>

<blockquote>O futuro pertence a quem se prepara para ele hoje.</blockquote>

<h2>Conclusão</h2>
<p>2025 traz oportunidades incríveis para quem se antecipar. Com o <strong>VendaPX</strong>, você já está usando muitas dessas tendências — IA, automação, dados — por apenas <strong>R$20 por mês</strong>. Acompanhe as tendências e faça seu negócio prosperar.</p>`},{slug:"como-comecar-negocio-com-pouco-capital",title:"Como Começar Um Negócio Com Pouco Capital",description:"Estratégias práticas para empreender com pouco dinheiro, minimizando riscos e maximizando chances de sucesso.",category:"negocios",date:"2025-11-15",readTime:10,keywords:["pouco capital","empreendedorismo","negócio pequeno","VendaPX","baixo investimento","começar do zero"],content:`<h2>Empreender Não Precisa de Muito Dinheiro</h2>
<p>Uma das maiores barreiras para quem quer empreender é a crença de que é necessário muito dinheiro. Na verdade, muitos dos negócios mais bem-sucedidos começaram com investimento mínimo. O que se precisa é de <strong>ideia, execução e disciplina</strong>.</p>

<h2>Modelos de Negócio Com Baixo Investimento</h2>

<h3>1. Serviços</h3>
<p>Negócios de serviços exigem menos investimento inicial:</p>
<ul>
<li>Consultoria</li>
<li>Serviços de limpeza</li>
<li>Treinamento e palestras</li>
<li>Serviços de TI e marketing digital</li>
<li>Freelancer de design, redação, programação</li>
</ul>

<h3>2. Revenda</h3>
<p>Compre barato e venda com margem:</p>
<ul>
<li>Revenda de produtos de fornecedores</li>
<li>Dropshipping (venda sem estoque)</li>
<li>Comércio em marketplaces</li>
</ul>

<h3>3. Negócios Digitais</h3>
<p>A internet permite empreender com investimento mínimo:</p>
<ul>
<li>Loja virtual</li>
<li>Infoprodutos (cursos, e-books)</li>
<li>Afiliados</li>
<li>Conteúdo e monetização</li>
</ul>

<h2>Passos Para Começar Com Pouco</h2>
<ol>
<li><strong>Comece como atividade paralela:</strong> não abandone o emprego imediatamente</li>
<li><strong>Valide a ideia antes de investir:</strong> teste com poucos clientes</li>
<li><strong>Comece do mais simples:</strong> não compre equipamentos caros no início</li>
<li><strong>Use tecnologia acessível:</strong> o <strong>VendaPX</strong> por R$20/mês oferece gestão completa</li>
<li><strong>Reinvista no negócio:</strong> use o lucro para crescer</li>
</ol>

<h2>Fontes de Capital</h2>
<ul>
<li><strong>Capital próprio:</strong> economias pessoais</li>
<li><strong>Microcrédito:</strong> linhas de crédito para pequenos negócios</li>
<li><strong>Investidores anjos:</strong> pessoas que investem em ideias promissoras</li>
<li><strong>Accelerators:</strong> programas que financiam e mentoreiam startups</li>
</ul>

<h2>Como o VendaPX Reduz o Custo de Entrada</h2>
<p>O ecossistema VendaPX é projetado para quem começa pequeno:</p>
<ul>
<li><strong>Custo baixo:</strong> apenas R$20/mês para gestão completa</li>
<li><strong>Três sistemas integrados:</strong> não precisa comprar ferramentas separadas</li>
<li><strong>Escalável:</strong> cresce com o negócio</li>
</ul>

<h2>Dicas Para Poupar Dinheiro</h2>
<ul>
<li><strong>Trabalhe de casa:</strong> elimine custos de aluguel</li>
<li><strong>Use ferramentas gratuitas:</strong> Google Workspace, Canva, redes sociais</li>
<li><strong>Negocie com fornecedores:</strong> sempre peça desconto</li>
<li><strong>Evite estoque excessivo:</strong> comece com poucos itens</li>
<li><strong>Terceirize:</strong> contrate freelancers para tarefas pontuais</li>
</ul>

<blockquote>Não é o dinheiro que faz o negócio funcionar. É a gestão.</blockquote>

<h2>Erros Comuns de Quem Começa Com Pouco</h2>
<ul>
<li><strong>Não planejar:</strong> começar sem plano aumenta o risco</li>
<li><strong>Investir em coisas erradas:</strong> mobília bonita não gera vendas</li>
<li><strong>Não controlar gastos:</strong> cada centavo conta</li>
<li><strong>Esquecer do marketing:</strong> sem clientes, não há negócio</li>
</ul>

<h2>Conclusão</h2>
<p>Empreender com pouco capital é possível e tem se tornado cada vez mais comum. Com o <strong>VendaPX</strong>, por apenas <strong>R$20 por mês</strong>, você tem ferramentas profissionais de gestão desde o primeiro dia. Comece pequeno, cresça com consistência e faça seu negócio decolar.</p>`},{slug:"transformacao-digital-para-pequenas-empresas",title:"Transformação Digital Para Pequenas Empresas: Guia Completo",description:"Como implementar a transformação digital no seu negócio de forma progressiva, acessível e eficiente.",category:"tecnologia",date:"2025-12-01",readTime:11,keywords:["transformação digital","tecnologia","pequenas empresas","VendaPX","modernização","inovação"],content:`<h2>O Que É Transformação Digital?</h2>
<p>Transformação digital é o processo de integrar tecnologias digitais em todas as áreas do negócio, mudando a forma como ele opera e entrega valor aos clientes. Não se trata apenas de usar computadores, mas de repensar processos para ser mais eficiente, ágil e competitivo.</p>

<h2>Por Que Pequenas Empresas Precisam se Transformar?</h2>
<p>O mercado exige cada vez mais agilidade. Empresas que não se digitalizam perdem espaço para concorrentes que:</p>
<ul>
<li><strong>Atendem clientes online:</strong> e-commerce, WhatsApp, redes sociais</li>
<li><strong>Automatizam processos:</strong> menos retrabalho, mais produtividade</li>
<li><strong>Usam dados para decidir:</strong> relatórios e indicadores em tempo real</li>
<li><strong>Oferecem experiências modernas:</strong> pagamento digital, nota eletrônica, tracking</li>
</ul>

<h2>As 5 Etapas da Transformação Digital</h2>

<h3>1. Diagnóstico</h3>
<p>Entenda onde o negócio está:</p>
<ul>
<li>Quais processos ainda são manuais?</li>
<li>Onde há desperdício de tempo?</li>
<li>Quais dados não estão sendo usados?</li>
<li>O que clientes esperam da empresa?</li>
</ul>

<h3>2. Planejamento</h3>
<p>Defina o que quer alcançar:</p>
<ul>
<li>Metas claras e mensuráveis</li>
<li>Prazos realistas</li>
<li>Orçamento disponível</li>
<li>Prioridades (começar pelo que gera mais impacto)</li>
</ul>

<h3>3. Escolha das Ferramentas</h3>
<p>Escolha soluções adequadas ao tamanho do negócio:</p>
<ul>
<li><strong>Gestão:</strong> VendaPX (estoque.vendapx.com.br, financeiro.vendapx.com.br, pdv.vendapx.com.br)</li>
<li><strong>Comunicação:</strong> WhatsApp Business, e-mail profissional</li>
<li><strong>Marketing:</strong> redes sociais, Google Meu Negócio</li>
<li><strong>Financeiro:</strong> sistemas de pagamento digital</li>
</ul>

<h3>4. Implementação</h3>
<p>Coloque em prática de forma progressiva:</p>
<ol>
<li>Comece pelo módulo mais urgente</li>
<li>Treine a equipe antes de usar</li>
<li>Faça testes antes de usar no dia a dia</li>
<li>Documente processos</li>
</ol>

<h3>5. Melhoria Contínua</h3>
<p>A transformação digital é um processo contínuo:</p>
<ul>
<li>Avalie resultados regularmente</li>
<li>Peça feedback da equipe e clientes</li>
<li>Adapte-se a novas tecnologias</li>
<li>Mantenha-se atualizado</li>
</ul>

<h2>Benefícios da Transformação Digital</h2>
<ul>
<li><strong>Redução de custos:</strong> menos papel, menos retrabalho, menos desperdício</li>
<li><strong>Maior produtividade:</strong> tarefas automatizadas liberam tempo</li>
<li><strong>Melhor atendimento:</strong> respostas mais rápidas e precisas</li>
<li><strong>Decisões baseadas em dados:</strong> menos intuição, mais estratégia</li>
<li><strong>Competitividade:</strong> acompanhar ou superar concorrentes</li>
</ul>

<h2>Como o VendaPX Facilita a Transformação</h2>
<p>O ecossistema VendaPX é uma solução completa de transformação digital:</p>
<ul>
<li><strong>Controle de Estoque:</strong> gestão digital de produtos</li>
<li><strong>Sistema Financeiro:</strong> controle financeiro automatizado</li>
<li><strong>PDV:</strong> ponto de venda moderno e integrado</li>
</ul>
<p>Tudo isso por apenas <strong>R$20 por mês</strong>, acessível para qualquer tamanho de negócio.</p>

<blockquote>A transformação digital não é um destino, é uma jornada. Comece hoje.</blockquote>

<h2>Erros Comuns</h2>
<ul>
<li><strong>Querer mudar tudo de uma vez:</strong> seja progressivo</li>
<li><strong>Não capacitar a equipe:</strong> tecnologia sem treinamento é desperdício</li>
<li><strong>Ignorar a cultura organizacional:</strong> mudanças exigem adaptação cultural</li>
<li><strong>Escolher ferramentas complexas demais:</strong> simplicidade é importante</li>
</ul>

<h2>Conclusão</h2>
<p>A transformação digital é essencial para a sobrevivência e crescimento de pequenas empresas. Com o <strong>VendaPX</strong>, você dá o primeiro passo de forma simples e acessível, por apenas <strong>R$20 por mês</strong>. Comece sua jornada digital hoje.</p>`},{slug:"cloud-computing-no-seu-negocio",title:"Cloud Computing No Seu Negócio: Por Que Migrar Para a Nuvem",description:"Vantagens da computação em nuvem para pequenas empresas e como começar a usar hoje mesmo.",category:"tecnologia",date:"2025-12-15",readTime:8,keywords:["cloud computing","computação em nuvem","nuvem","VendaPX","armazenamento","acesso remoto"],content:`<h2>O Que É Cloud Computing?</h2>
<p>Cloud computing, ou computação em nuvem, é o armazenamento e processamento de dados pela internet em vez de no computador local. Quando você usa o Gmail, Google Drive ou o <strong>VendaPX</strong>, está usando a nuvem. É simples, seguro e acessível de qualquer lugar.</p>

<h2>Por Que Usar a Nuvem?</h2>

<h3>1. Acesso de Qualquer Lugar</h3>
<p>Com a nuvem, você acessa seus dados de qualquer dispositivo com internet: computador, tablet ou celular. Isso é essencial para quem precisa gerenciar o negócio de diferentes locais.</p>

<h3>2. Segurança</h3>
<p>Contrariando o mito, a nuvem é mais segura que armazenamento local:</p>
<ul>
<li>Dados criptografados</li>
<li>Backup automático</li>
<li>Proteção contra roubo ou destruição física</li>
<li>Atualizações de segurança automáticas</li>
</ul>

<h3>3. Custo Baixo</h3>
<p>Na nuvem, você paga pelo que usa. Não precisa comprar servidores caros nem manter equipe de TI dedicada.</p>

<h3>4. Escalabilidade</h3>
<p>À medida que o negócio cresce, o armazenamento e processamento crescem automaticamente.</p>

<h3>5. Colaboração</h3>
<p>Vários usuários podem acessar os mesmos dados simultaneamente, facilitando o trabalho em equipe.</p>

<h2>Exemplos de Uso da Nuvem</h2>
<ul>
<li><strong>Gestão:</strong> o <strong>VendaPX</strong> armazena estoque, financeiro e vendas na nuvem</li>
<li><strong>E-mail:</strong> Gmail, Outlook</li>
<li><strong>Armazenamento:</strong> Google Drive, OneDrive</li>
<li><strong>Comunicação:</strong> WhatsApp Web, Zoom</li>
<li><strong>Contabilidade:</strong> sistemas contábeis online</li>
</ul>

<h2>Como o VendaPX Usa a Nuvem</h2>
<p>O ecossistema VendaPX é 100% baseado em nuvem:</p>
<ul>
<li><strong>Controle de Estoque</strong> (estoque.vendapx.com.br): dados sempre atualizados e acessíveis</li>
<li><strong>Sistema Financeiro</strong> (financeiro.vendapx.com.br): informações financeiras seguras</li>
<li><strong>PDV</strong> (pdv.vendapx.com.br): vendas registradas em tempo real</li>
</ul>
<p>Tudo por apenas <strong>R$20 por mês</strong>, sem necessidade de infraestrutura complexa.</p>

<h2>Como Começar a Usar a Nuvem</h2>
<ol>
<li><strong>Identifique necessidades:</strong> quais dados precisa acessar remotamente?</li>
<li><strong>Escolha fornecedores confiáveis:</strong> verifique reputação e suporte</li>
<li><strong>Comece pelo básico:</strong> e-mail, armazenamento, gestão</li>
<li><strong>Migre progressivamente:</strong> não mude tudo de uma vez</li>
<li><strong>Treine a equipe:</strong> todos precisam saber usar</li>
</ol>

<h2>Preocupações Comuns (e Respostas)</h2>
<ul>
<li><strong>Meus dados estão seguros?</strong> Sim, com criptografia e backup automático</li>
<li><strong>E se a internet cair?</strong> A maioria dos sistemas funciona offline temporariamente</li>
<li><strong>É caro?</strong> Não, o VendaPX custa apenas R$20/mês</li>
<li><strong>É difícil de usar?</strong> Interfaces modernas são intuitivas</li>
</ul>

<blockquote>A nuvem não é o futuro — é o presente. Negócios que não usam a nuvem estão ficando para trás.</blockquote>

<h2>Conclusão</h2>
<p>Cloud computing é acessível, seguro e essencial para negócios modernos. Com o <strong>VendaPX</strong>, você já está na nuvem, gerenciando estoque, financeiro e vendas de qualquer lugar, por apenas <strong>R$20 por mês</strong>. Comece hoje a aproveitar os benefícios da nuvem.</p>`},{slug:"inteligencia-artificial-na-gestao",title:"Inteligência Artificial na Gestão: Como Usar no Seu Negócio",description:"Descubra como a inteligência artificial pode otimizar processos, reduzir custos e melhorar decisões no seu negócio.",category:"tecnologia",date:"2026-01-01",readTime:10,keywords:["inteligência artificial","IA","gestão","VendaPX","automação","análise de dados"],content:`<h2>IA Não É Mais Ficção Científica</h2>
<p>A inteligência artificial deixou de ser algo de filmes para se tornar uma ferramenta prática e acessível. Em 2026, pequenas empresas já podem usar IA para otimizar estoque, prever vendas, automatizar atendimento e muito mais.</p>

<h2>Como a IA Pode Ajudar o Seu Negócio</h2>

<h3>1. Previsão de Demanda</h3>
<p>Algoritmos de IA analisam dados históricos de vendas e identificam padrões para prever quais produtos terão mais demanda. Isso permite:</p>
<ul>
<li>Comprar estoque no momento certo</li>
<li>Evitar ruptura de estoque</li>
<li>Reduzir excesso de estoque</li>
<li>Otimizar recursos financeiros</li>
</ul>

<h3>2. Automação de Atendimento</h3>
<p>Chatbots inteligentes podem:</p>
<ul>
<li>Responder perguntas frequentes 24/7</li>
<li>Tirar dúvidas sobre produtos</li>
<li>Acompanhar pedidos</li>
<li>Escalar para atendentes humanos quando necessário</li>
</ul>

<h3>3. Análise Financeira</h3>
<p>A IA pode identificar tendências financeiras, alertar sobre gastos anormais e sugerir otimizações no fluxo de caixa.</p>

<h3>4. Personalização</h3>
<p>IA analisa o comportamento de clientes para oferecer recomendações personalizadas, aumentando as vendas.</p>

<h3>5. Detecção de Fraudes</h3>
<p>Algoritmos identificam transações suspeitas, protegendo o negócio de golpes e perdas.</p>

<h2>O VendaPX e a IA</h2>
<p>O ecossistema VendaPX já incorpora inteligência artificial em seus módulos:</p>
<ul>
<li><strong>Controle de Estoque:</strong> sugestões automáticas de reposição baseadas em dados</li>
<li><strong>Sistema Financeiro:</strong> alertas de fluxo de caixa e categorização inteligente</li>
<li><strong>PDV:</strong> análise de vendas e previsão de demanda</li>
</ul>
<p>Tudo isso por apenas <strong>R$20 por mês</strong>.</p>

<h2>Como Começar a Usar IA</h2>
<ol>
<li><strong>Entenda seus dados:</strong> IA precisa de dados para funcionar</li>
<li><strong>Comece pelas ferramentas que já usa:</strong> o VendaPX já tem IA integrada</li>
<li><strong>Foque em um problema específico:</strong> não tente resolver tudo de uma vez</li>
<li><strong>Avalie resultados:</strong> meça o impacto da IA nas suas operações</li>
<li><strong>Evolua:</strong> à medida que se familiariza, expanda o uso</li>
</ol>

<h2>Benefícios Concretos</h2>
<ul>
<li><strong>Redução de 20-30% em custos operacionais</strong></li>
<li><strong>Aumento de 15-25% em produtividade</strong></li>
<li><strong>Decisões mais rápidas e precisas</strong></li>
<li><strong>Experiência do cliente melhorada</strong></li>
</ul>

<blockquote>A IA não substitui o empreendedor. Ela o torna mais poderoso.</blockquote>

<h2>Preocupações Comuns</h2>
<ul>
<li><strong>Vai substituir funcionários?</strong> Não, ela libera pessoas para tarefas de maior valor</li>
<li><strong>É muito complicado?</strong> Ferramentas como o VendaPX são intuitivas</li>
<li><strong>É cara?</strong> Não, o VendaPX custa apenas R$20/mês com IA integrada</li>
</ul>

<h2>Conclusão</h2>
<p>A inteligência artificial não é mais exclusividade de grandes empresas. Com o <strong>VendaPX</strong>, você já tem IA trabalhando para o seu negócio, otimizando estoque, financeiro e vendas. Tudo por apenas <strong>R$20 por mês</strong>. Comece a usar a IA a seu favor hoje.</p>`},{slug:"seguranca-de-dados-proteja-informacoes",title:"Segurança de Dados: Proteja as Informações do Seu Negócio",description:"Guia essencial de segurança da informação para pequenas empresas, com dicas práticas para proteger dados do negócio e dos clientes.",category:"tecnologia",date:"2026-02-01",readTime:9,keywords:["segurança de dados","proteção de informações","LGPD","VendaPX","cibersegurança","privacidade"],content:`<h2>Por Que a Segurança de Dados É Essencial?</h2>
<p>A cada dia que passa, mais dados são coletados e armazenados por empresas de todos os tamanhos. Informações de clientes, dados financeiros, estoque, fornecedores — tudo isso é alvo de ataques cibernéticos. Para pequenas empresas, uma violação de dados pode ser devastadora: multas, perda de clientes e danos à reputação.</p>

<h2>O Que é a LGPD?</h2>
<p>A <strong>Lei Geral de Proteção de Dados</strong> (LGPD) regula o tratamento de dados pessoais no Brasil. Toda empresa que lida com dados de pessoas físicas precisa se adequar, independentemente do tamanho.</p>
<p>Princípios básicos da LGPD:</p>
<ul>
<li><strong>Finalidade:</strong> coletar dados apenas para fins específicos</li>
<li><strong>Adequação:</strong> os dados devem ser compatíveis com a finalidade</li>
<li><strong>Necessidade:</strong> coletar apenas o necessário</li>
<li><strong>Segurança:</strong> proteger dados contra acessos não autorizados</li>
<li><strong>Transparência:</strong> informar ao cliente como seus dados são usados</li>
</ul>

<h2>Ameaças Mais Comuns</h2>
<ul>
<li><strong>Phishing:</strong> e-mails ou mensagens falsas que roubam senhas</li>
<li><strong>Malware:</strong> vírus que danificam ou roubam dados</li>
<li><strong>Ataques de força bruta:</strong> tentativas de adivinhar senhas</li>
<li><strong>Ransomware:</strong> sequestramento de dados com exigência de resgate</li>
<li><strong>Engenharia social:</strong> manipulação para obter informações</li>
</ul>

<h2>Como Proteger Seu Negócio</h2>

<h3>1. Senhas Fortes</h3>
<p>Use senhas complexas e diferentes para cada sistema:</p>
<ul>
<li>Mínimo de 12 caracteres</li>
<li>Combine letras, números e símbolos</li>
<li>Não use dados pessoais (nome, data de nascimento)</li>
<li>Use gerenciadores de senha</li>
</ul>

<h3>2. Autenticação em Duas Etapas</h3>
<p>Ative 2FA (autenticação de dois fatores) sempre que possível. Isso adiciona uma camada extra de segurança mesmo que a senha seja comprometida.</p>

<h3>3. Atualizações</h3>
<p>Mantenha todos os softwares e sistemas atualizados. Atualizações corrigem falhas de segurança conhecidas.</p>

<h3>4. Backup Regular</h3>
<p>Mantenha backups atualizados em local seguro. Em caso de ataque, você pode restaurar os dados sem pagar resgate.</p>

<h3>5. Treinamento da Equipe</h3>
<p>A maioria dos ataques explora erro humano. Treine sua equipe para:</p>
<ul>
<li>Identificar e-mails de phishing</li>
<li>Não clicar em links suspeitos</li>
<li>Não compartilhar senhas</li>
<li>Reportar incidentes imediatamente</li>
</ul>

<h2>Como o VendaPX Protege Seus Dados</h2>
<p>O ecossistema VendaPX leva segurança a sério:</p>
<ul>
<li><strong>Ambiente cloud seguro:</strong> dados criptografados em trânsito e em repouso</li>
<li><strong>Backup automático:</strong> seus dados estão sempre protegidos</li>
<li><strong>Controle de acesso:</strong> cada usuário tem permissões específicas</li>
<li><strong>Atualizações regulares:</strong> o sistema é constantemente atualizado para corrigir vulnerabilidades</li>
</ul>

<blockquote>A segurança não é um luxo, é uma necessidade. Invista nela antes que seja tarde demais.</blockquote>

<h2>Plano Básico de Segurança</h2>
<ol>
<li>Inventarie todos os dados que coleta e armazena</li>
<li>Identifique quem tem acesso a esses dados</li>
<li>Implemente senhas fortes e 2FA</li>
<li>Ative backup automático</li>
<li>Treine a equipe sobre boas práticas</li>
<li>Revise permissões de acesso regularmente</li>
</ol>

<h2>Conclusão</h2>
<p>Segurança de dados é responsabilidade de todas as empresas, independentemente do tamanho. Com o <strong>VendaPX</strong>, seus dados estão protegidos em ambiente seguro, com backup automático e controle de acesso. Invista em segurança por apenas <strong>R$20 por mês</strong> e proteja o que é mais valioso: as informações do seu negócio e dos seus clientes.</p>`},{slug:"automatizacao-de-tarefas-ganhe-tempo",title:"Automação de Tarefas: Ganhe Tempo Para o Que Realmente Importa",description:"Descubra como automatizar tarefas repetitivas no seu negócio para economizar tempo, reduzir erros e aumentar a produtividade.",category:"tecnologia",date:"2026-03-01",readTime:9,keywords:["automação de tarefas","produtividade","eficiência","VendaPX","economia de tempo","tecnologia"],content:`<h2>O Que É Automação de Tarefas?</h2>
<p>Automação de tarefas é o uso de tecnologia para realizar processos que antes eram feitos manualmente. Não se trata de substituir pessoas, mas de liberar o tempo delas para atividades que exigem criatividade, estratégia e contato humano — coisas que máquinas não conseguem fazer bem.</p>

<h2>Quais Tarefas Podem Ser Automatizadas?</h2>
<p>Na maioria dos pequenos negócios, várias tarefas consomem tempo desnecessariamente:</p>
<ul>
<li><strong>Atualização de estoque:</strong> quando um produto é vendido, o estoque deve ser atualizado automaticamente</li>
<li><strong>Registro de vendas:</strong> cada transação deve ser registrada sem digitação manual</li>
<li><strong>Categorização financeira:</strong> entradas e saídas devem ser classificadas automaticamente</li>
<li><strong>Emissão de notas fiscais:</strong> deve acontecer a cada venda, sem intervenção</li>
<li><strong>Alertas de estoque baixo:</strong> o sistema deve avisar quando um produto atingir o ponto de reposição</li>
<li><strong>Relatórios:</strong> devem ser gerados automaticamente, sem compilação manual</li>
</ul>

<h2>Benefícios da Automação</h2>
<ul>
<li><strong>Economia de tempo:</strong> tarefas que levavam horas são feitas em segundos</li>
<li><strong>Redução de erros:</strong> eliminar a digitação manual reduz erros drasticamente</li>
<li><strong>Maior produtividade:</strong> a equipe foca em tarefas de maior valor</li>
<li><strong>Consistência:</strong> processos automatizados seguem sempre o mesmo padrão</li>
<li><strong>Visibilidade:</strong> dados sempre atualizados para decisões melhores</li>
</ul>

<h2>Como o VendaPX Automatiza Seu Negócio</h2>
<p>O ecossistema VendaPX foi projetado para automatizar as tarefas mais trabalhosas da gestão:</p>

<h3>Controle de Estoque (estoque.vendapx.com.br)</h3>
<ul>
<li>Atualização automática a cada venda, devolução ou entrada</li>
<li>Alertas automáticos quando estoque atinge o mínimo</li>
<li>Relatórios de giro de estoque gerados automaticamente</li>
</ul>

<h3>Sistema Financeiro (financeiro.vendapx.com.br)</h3>
<ul>
<li>Categorização automática de transações</li>
<li>Lembrete de vencimento de contas a pagar e receber</li>
<li>Geração automática de fluxo de caixa</li>
</ul>

<h3>PDV (pdv.vendapx.com.br)</h3>
<ul>
<li>Registro instantâneo de vendas</li>
<li>Emissão automática de comprovantes</li>
<li>Sincronização com estoque e financeiro</li>
</ul>

<h2>Exemplos Práticos de Automação</h2>
<ol>
<li><strong>Venda no PDV:</strong> ao registrar uma venda, o estoque é atualizado, o financeiro registra a entrada e o cliente recebe o comprovante — tudo automaticamente</li>
<li><strong>Produto em falta:</strong> quando um produto atinge estoque zero, o sistema gera um alerta automaticamente para o responsável</li>
<li><strong>Fim do mês:</strong> relatórios de vendas, estoque e financeiro são gerados automaticamente para análise</li>
</ol>

<blockquote>A automatização não elimina o trabalho humano. Ela elimina o trabalho repetitivo e libera o humano para o trabalho criativo.</blockquote>

<h2>Quanto Tempo Você Pode Economizar?</h2>
<p>Em um pequeno negócio típico, a automação pode economizar:</p>
<ul>
<li><strong>Atualização de estoque:</strong> 2-3 horas por dia</li>
<li><strong>Organização financeira:</strong> 1-2 horas por dia</li>
<li><strong>Relatórios:</strong> 2-3 horas por semana</li>
<li><strong>Comunicação com clientes:</strong> 1 hora por dia</li>
</ul>
<p>Total: <strong>até 30 horas por semana</strong> economizadas.</p>

<h2>Como Começar a Automatizar</h2>
<ol>
<li><strong>Identifique gargalos:</strong> onde sua equipe perde mais tempo?</li>
<li><strong>Priorize:</strong> automatize primeiro o que mais consome tempo</li>
<li><strong>Escolha a ferramenta certa:</strong> o VendaPX automatiza estoque, financeiro e vendas por R$20/mês</li>
<li><strong>Implemente:</strong> configure e teste antes de usar no dia a dia</li>
<li><strong>Monitore:</strong> acompanhe os resultados e ajuste conforme necessário</li>
</ol>

<h2>Conclusão</h2>
<p>Automação de tarefas é uma das formas mais eficazes de aumentar a produtividade e reduzir custos. Com o <strong>VendaPX</strong>, você automatiza as tarefas mais trabalhosas da gestão do seu negócio por apenas <strong>R$20 por mês</strong>. Ganhe tempo para focar no que realmente importa: crescer seu negócio e cuidar das pessoas.</p>`}],Rz=[{slug:"software-como-servico-saas-vantagens",title:"Software como Serviço (SaaS): Vantagens e Desvantagens",description:"Entenda o modelo SaaS e como ele pode transformar a gestão do seu negócio com ferramentas acessíveis e escaláveis.",category:"tecnologia",date:"2025-02-10",readTime:8,keywords:["SaaS","software como serviço","gestão empresarial","nuvem","VendaPX","tecnologia"],content:`<h2>O Que é SaaS?</h2>
<p><strong>Software como Serviço (SaaS)</strong> é um modelo de distribuição de software em que as aplicações são hospedadas na nuvem e acessadas pela internet. Em vez de comprar licenças caras e instalar programas no computador, você paga uma assinatura mensal e acessa tudo pelo navegador.</p>
<p>O VendaPX é um exemplo perfeito de SaaS para gestão empresarial. Por apenas <strong>R$20 por mês</strong>, você tem acesso a Estoque, Financeiro e PDV integrados, sem precisar se preocupar com servidores, atualizações ou manutenção técnica.</p>

<h2>Vantagens do Modelo SaaS</h2>
<ul>
<li><strong>Baixo custo inicial:</strong> não há necessidade de investir em hardware ou licenças permanentes</li>
<li><strong>Acessibilidade:</strong> acesse de qualquer dispositivo com internet, a qualquer hora</li>
<li><strong>Atualizações automáticas:</strong> o provedor cuida de todas as atualizações sem interrupção</li>
<li><strong>Escalabilidade:</strong> cresça conforme sua demanda sem mudar de plataforma</li>
<li><strong>Segurança profissional:</strong> os provedores investem pesado em segurança de dados</li>
<li><strong>Integração nativa:</strong> ferramentas SaaS modernas se comunicam entre si facilmente</li>
</ul>

<h2>Desvantagens e Como Mitigá-las</h2>
<p>Apesar das vantagens, o modelo SaaS apresenta alguns desafios:</p>
<ul>
<li><strong>Dependência de internet:</strong> a solução é acessada online, mas许多sistemas como o <strong>PDV do VendaPX</strong> oferecem modo offline como backup</li>
<li><strong>Personalização limitada:</strong> comparado a software propio, há menos espaço para customização</li>
<li><strong>Custo recorrente:</strong> o pagamento é mensal, mas geralmente muito mais barato que licenças tradicionais</li>
</ul>

<h2>Como Escolher o SaaS Ideal</h2>
<p>Ao avaliar um software SaaS para o seu negócio, considere:</p>
<ol>
<li><strong>Facilidade de uso:</strong> a interface é intuitiva?</li>
<li><strong>Suporte ao cliente:</strong> há atendimento em português?</li>
<li><strong>Integrações:</strong> o sistema se conecta com suas outras ferramentas?</li>
<li><strong>Relatórios:</strong> oferece dados e indicadores úteis?</li>
<li><strong>Preço:</strong> o custo-benefício atende ao seu orçamento?</li>
</ol>

<blockquote>O SaaS democratizou a tecnologia para pequenas empresas. Antigamente, apenas grandes corporações podiam ter sistemas integrados. Hoje, com soluções como o VendaPX, qualquer negócio pode ter gestão profissional por uma fração do custo.</blockquote>`},{slug:"mobile-first-sistema-no-celular",title:"Mobile First: Por Que Seu Sistema Precisa Funcionar no Celular",description:"Descubra por que ter um sistema de gestão acessível pelo celular é essencial para o sucesso do seu negócio moderno.",category:"tecnologia",date:"2025-03-05",readTime:7,keywords:["mobile first","sistema no celular","gestão mobile","aplicativo","VendaPX","smartphone"],content:`<h2>A Revolução Mobile na Gestão Empresarial</h2>
<p>O smartphone se tornou a ferramenta mais poderosa do empreendedor moderno. São mais de <strong>170 milhões de brasileiros</strong> conectados via celular, e a tendência é que o acesso mobile continue crescendo. Ter um sistema de gestão que funciona bem no celular não é mais luxo — é necessidade.</p>

<h2>Por Que o Mobile First Importa?</h2>
<p>O conceito <strong>Mobile First</strong> significa projetar pensando primeiro no celular, depois no computador. Isso garante que a experiência seja excelente em qualquer tela. Para o dono de um pequeno negócio, isso significa:</p>
<ul>
<li><strong>Ver estoque do celular</strong> enquanto visita um fornecedor</li>
<li><strong>Consultar o financeiro</strong> de qualquer lugar, até em trânsito</li>
<li><strong>Fazer vendas no PDV</strong> pelo tablet no balcão ou em eventos</li>
<li><strong>Acompanhar relatórios</strong> sem precisar estar no escritório</li>
</ul>

<h2>Casos de Uso Reais</h2>
<p>Imagine um lojista que está em uma feira. Com um sistema mobile, ele pode:</p>
<ol>
<li>Consultar estoque disponível antes de levar produtos</li>
<li>Realizar a venda direto no celular com o PDV</li>
<li>Enviar o comprovante por WhatsApp na hora</li>
<li>Ver o faturamento do dia ao final do evento</li>
</ol>

<h2>O VendaPX é Mobile Friendly</h2>
<p>Os três sistemas do ecossistema VendaPX — <strong>Estoque</strong>, <strong>Financeiro</strong> e <strong>PDV</strong> — são acessíveis pelo navegador do celular. Isso significa que você não precisa baixar aplicativos pesados: basta acessar pelo Chrome ou Safari e ter toda a funcionalidade na palma da mão.</p>

<blockquote>Um sistema que não funciona bem no celular é um sistema que seus funcionários não vão usar. Adotar Mobile First é garantir adoção e produtividade.</blockquote>`},{slug:"integracao-whatsapp-business-poder-comunicacao",title:"Integração com WhatsApp Business: O Poder da Comunicação",description:"Como usar o WhatsApp Business integrado ao seu sistema de gestão para automatizar atendimento e vendas.",category:"tecnologia",date:"2025-03-20",readTime:9,keywords:["WhatsApp Business","integração","comunicação","atendimento","automação","VendaPX"],content:`<h2>WhatsApp: O Canal Mais Usado do Brasil</h2>
<p>Com mais de <strong>120 milhões de usuários</strong> no Brasil, o WhatsApp é o canal de comunicação mais popular do país. Para pequenos negócios, ele se tornou a principal ferramenta de atendimento ao cliente, vendas e suporte. Integrar o WhatsApp ao seu sistema de gestão pode transformar a eficiência da sua operação.</p>

<h2>O Que é o WhatsApp Business?</h2>
<p>O <strong>WhatsApp Business</strong> é a versão profissional do WhatsApp, com recursos como:</p>
<ul>
<li><strong>Catálogo de produtos:</strong> exiba seus produtos diretamente no perfil</li>
<li><strong>Mensagens automáticas:</strong> respostas rápidas para perguntas frequentes</li>
<li><strong>Etiquetas:</strong> organize conversas por status (pedido, entregue, etc.)</li>
<li><strong>Estatísticas:</strong> acompanhe métricas de mensagens enviadas e recebidas</li>
</ul>

<h2>Como Integrar com o Sistema de Gestão</h2>
<p>A integração do WhatsApp com um sistema como o VendaPX permite automatizar processos como:</p>
<ol>
<li><strong>Notificações de pedido:</strong> envie confirmações automáticas quando o pedido for processado</li>
<li><strong>Alertas de estoque:</strong> avise quando um produto estiver disponível novamente</li>
<li><strong>Lembretes de pagamento:</strong> envie lembretes de contas a receber</li>
<li><strong>Relatórios por mensagem:</strong> receba resumos diários no WhatsApp</li>
</ol>

<h2>Benefícios Para o Negócio</h2>
<p>A integração entre WhatsApp e sistema de gestão traz resultados concretos:</p>
<ul>
<li><strong>Redução de tempo de atendimento</strong> em até 60%</li>
<li><strong>Maior taxa de resposta</strong> aos clientes</li>
<li><strong>Menos erros manuais</strong> na comunicação</li>
<li><strong>Satisfação do cliente</strong> significativamente maior</li>
</ul>

<blockquote>O WhatsApp deixou de ser apenas um aplicativo de mensagens. Ele se tornou um canal estratégico de negócio. Integrá-lo ao seu sistema de gestão é o próximo passo para a excelência operacional.</blockquote>`},{slug:"big-data-para-pequenos-negocios",title:"Big Data para Pequenos Negócios: É Possível?",description:"Descubra como pequenas empresas podem usar dados para tomar decisões melhores sem gastar fortunas em tecnologia.",category:"tecnologia",date:"2025-04-01",readTime:8,keywords:["big data","dados","análise de dados","pequenos negócios","gestão inteligente","VendaPX"],content:`<h2>Big Data Não é Só Para Grandes Empresas</h2>
<p>O termo <strong>Big Data</strong> costuma assustar pequenos empresários. Afinal, quem tem um comércio de bairro ou uma hamburgueria pode pensar que dados e análises avançadas são coisa de multinacionais. Mas a verdade é que <strong>toda empresa gera dados</strong> — e usá-los a seu favor é uma questão de ferramenta, não de porte.</p>

<h2>Que Dados o Seu Negócio Gera?</h2>
<p>Todo dia, seu negócio produz informações valiosas:</p>
<ul>
<li><strong>Vendas:</strong> quais produtos vendem mais, em que horários, para quem</li>
<li><strong>Estoque:</strong> quanto gira, quais itens param, qual o custo de armazenamento</li>
<li><strong>Financeiro:</strong> fluxo de caixa, margem de lucro, inadimplência</li>
<li><strong>Clientes:</strong> quem compra mais, frequência, ticket médio</li>
</ul>

<h2>Como Usar Esses Dados Na Prática</h2>
<p>Com um sistema integrado como o VendaPX, você pode:</p>
<ol>
<li><strong>Identificar tendências de venda:</strong> saber quais meses vendem mais de cada produto</li>
<li><strong>Otimizar compras:</strong> comprar mais dos produtos que giram e menos dos parados</li>
<li><strong>Prever demanda:</strong> se preparar para épocas de alta demanda</li>
<li><strong>Reduzir desperdício:</strong> identificar perdas e ajustar processos</li>
</ol>

<h2>Ferramentas Acessíveis de Análise</h2>
<p>Você não precisa de um cientista de dados para começar. Os relatórios do próprio sistema já oferecem insights poderosos:</p>
<ul>
<li><strong>Curva ABC</strong> para classificar produtos por importância</li>
<li><strong>Fluxo de caixa projetado</strong> para planejar o futuro</li>
<li><strong>Relatórios de vendas</strong> por período, vendedor ou categoria</li>
</ul>

<blockquote>Dados são o novo petróleo — mas só têm valor quando refinados. Use o poder dos dados do seu negócio para tomar decisões mais inteligentes e estratégicas.</blockquote>`},{slug:"ciberseguranca-basica-empreendedores",title:"Cibersegurança Básica para Empreendedores",description:"Proteja seu negócio de ataques cibernéticos com dicas práticas de segurança digital para pequenas empresas.",category:"tecnologia",date:"2025-04-15",readTime:9,keywords:["cibersegurança","segurança digital","proteção de dados","empreendedor","VendaPX","informações"],content:`<h2>Por Que Pequenos Negócios São Alvos?</h2>
<p>Um erro comum é achar que hackers atacam apenas grandes empresas. Na verdade, <strong>43% dos ataques cibernéticos</strong> são direcionados a pequenas empresas, justamente porque elas investem menos em segurança. Proteger seu negócio digital não precisa ser caro, mas precisa ser uma prioridade.</p>

<h2>Ameaças Mais Comuns</h2>
<ul>
<li><strong>Phishing:</strong> e-mails ou mensagens falsas que tentam roubar senhas e dados</li>
<li><strong>Ransomware:</strong> vírus que criptografam seus arquivos e pedem resgate</li>
<li><strong>Senhas fracas:</strong> a porta de entrada mais fácil para invasores</li>
<li><strong>Wi-Fi inseguro:</strong> redes abertas podem expor dados confidenciais</li>
</ul>

<h2>5 Medidas Essenciais de Proteção</h2>
<ol>
<li><strong>Use senhas fortes e únicas:</strong> combine letras, números e símbolos. Use um gerenciador de senhas</li>
<li><strong>Ative a autenticação de dois fatores (2FA):strong> sempre que disponível, ative essa camada extra de segurança</li>
<li><strong>Mantenha tudo atualizado:</strong> sistemas operacionais, navegadores e aplicativos sempre na versão mais recente</li>
<li><strong>Faça backups regulares:</strong> salve seus dados em nuvem e em um dispositivo externo</li>
<li><strong>Cuidado com e-mails suspeitos:</strong> não clique em links ou abra anexos de remetentes desconhecidos</li>
</ol>

<h2>Segurança nos Sistemas em Nuvem</h2>
<p>Usar sistemas em nuvem como o <strong>VendaPX</strong> já oferece uma camada significativa de segurança. Os dados são criptografados, os servidores são monitorados e as cópias de segurança são automáticas. Isso elimina muitos dos riscos de ter dados apenas no computador local.</p>

<blockquote>Investir em cibersegurança é como ter um alarme na loja: você espera nunca precisar, mas quando precisa, vale cada centavo. Comece com o básico e evolua progressivamente.</blockquote>`},{slug:"loja-roupas-reduziu-perdas-40-porcento",title:"Como uma Loja de Roupas Reduziu Perdas em 40%",description:"Conheça a história de como o controle de estoque integrado transformou a gestão de uma loja de roupas.",category:"cases",date:"2025-05-01",readTime:7,keywords:["caso de sucesso","loja de roupas","controle de estoque","redução de perdas","VendaPX","gestão"],content:`<h2>O Desafio</h2>
<p>A <strong>Moda Express</strong>, uma loja de roupas no centro de uma cidade do Paraná, enfrentava um problema comum no varejo: perdas constantes por falta de controle de estoque. Estoque desatualizado, produtos sumindo sem explicação e compras desenfreadas estavam consumindo a margem de lucro da loja.</p>

<h2>O Que Estava Errado</h2>
<ul>
<li><strong>Estoque manual:</strong> tudo controlado em planilhas desatualizadas</li>
<li><strong>Sem rastreamento:</strong> não sabiam quando ou onde os produtos eram perdidos</li>
<li><strong>Compras por achismo:</strong> compravam demais de uns e de menos de outros</li>
<li><strong>Divergências frequentes:</strong> inventário físico nunca batia com o teórico</li>
</ul>

<h2>A Solução: Estoque Integrado</h2>
<p>Ao adotar o <strong>Controle de Estoque do VendaPX</strong>, a loja passou a:</p>
<ol>
<li><strong>Cadastrar todos os produtos</strong> com código de barras e entrada via XML de NF-e</li>
<li><strong>Controlar cada movimentação</strong> — entrada, saída, devolução, transferência</li>
<li><strong>Receber alertas automáticos</strong> de estoque baixo e produtos parados</li>
<li><strong>Gerar relatórios de inventário</strong> semanalmente</li>
</ol>

<h2>Resultados em 6 Meses</h2>
<ul>
<li><strong>Redução de 40% nas perdas</strong> por extravio e avaria</li>
<li><strong>Compras 30% mais inteligentes</strong> baseadas em dados reais</li>
<li><strong>Tempo de inventário reduzido</strong> de 2 dias para 3 horas</li>
<li><strong>Aumento de 15% no lucro líquido</strong> no primeiro semestre</li>
</ul>

<blockquote>Antes eu achava que sabia o que tinha na loja. Quando vi os números reais, percebi que estava perdendo dinheiro todos os meses sem perceber.</blockquote>`},{slug:"padaria-eficiencia-pdv-integrado",title:"Padaria Conquista Eficiência com PDV Integrado",description:"Veja como uma padaria artesanal otimizou suas vendas e controle financeiro com um sistema PDV integrado.",category:"cases",date:"2025-05-15",readTime:7,keywords:["caso de sucesso","padaria","PDV","integração","gestão financeira","VendaPX"],content:`<h2>O Cenário</h2>
<p>A <strong>Padaria Pão Quente</strong> funcionava há 12 anos usando um caixa eletrônico antigo que apenas registrava vendas. Não havia controle de estoque, os relatórios eram feitos à mão e o fechamento de caixa era uma dor de cabeça diária.</p>

<h2>Os Problemas</h2>
<ul>
<li><strong>Fechamento de caixa sempre diferente:</strong> sobras e faltas sem explicação</li>
<li><strong>Estoque de farinha e ingredientes descontrolado:</strong> compras emergenciais toda semana</li>
<li><strong>Sem relatório de vendas:</strong> não sabiam quais produtos davam mais lucro</li>
<li><strong>Pagamentos confusos:</strong> PIX, cartão, dinheiro misturados sem conciliação</li>
</ul>

<h2>A Mudança</h2>
<p>A padaria adotou o ecossistema <strong>VendaPX</strong> completo: PDV para as vendas no balcão, Estoque para controlar insumos e Financeiro para acompanhar o fluxo de caixa. Tudo integrado e sincronizado em tempo real.</p>

<h2>Resultados Alcançados</h2>
<ol>
<li><strong>Fechamento de caixa impecável:</strong> cada centavo rastreado automaticamente</li>
<li><strong>Compras otimizadas:</strong> alertas automáticos quando insumos atingiam estoque mínimo</li>
<li><strong>Relatórios de lucratividade:</strong> descobriram que croissants tinham margem 3x maior que pão francês</li>
<li><strong>Tempo economizado:</strong> 2 horas por dia antes gastos em controle manual</li>
</ol>

<h2>O Diferencial</h2>
<p>O segredo foi a <strong>integração nativa</strong> entre os sistemas. Quando o padeiro cadastra um produto no PDV, ele já aparece no estoque e no financeiro. Sem retrabalho, sem erros, sem surpresas.</p>

<blockquote>O VendaPX custa menos do que eu pagava por um sistema antigo que não fazia metade do que faz hoje. Melhor investimento que fiz no negócio.</blockquote>`},{slug:"mercado-familiar-elimina-estoque-parado",title:"Mercado Familiar Elimina Estoque Parado",description:"Como um mercado familiar de bairro usou dados de vendas para eliminar produtos parados e aumentar o lucro.",category:"cases",date:"2025-06-01",readTime:8,keywords:["caso de sucesso","mercado","estoque parado","curva ABC","gestão de estoque","VendaPX"],content:`<h2>A Realidade de Muitos Mercados</h2>
<p>O <strong>Mercado Bom Preço</strong>, um mercado familiar com 2 filiais, enfrentava um problema silencioso: <strong>estoque parado</strong>. Prateleiras cheias de produtos que não giravam ocupavam espaço e prendiam capital que poderia ser usado melhor.</p>

<h2>Identificando o Problema</h2>
<p>Ao implementar o <strong>Controle de Estoque do VendaPX</strong> e gerar a <strong>Curva ABC</strong>, o dono do mercado ficou surpreso:</p>
<ul>
<li><strong>25% dos produtos</strong> respondiam por 80% das vendas (Classe A)</li>
<li><strong>30% dos produtos</strong> tinham vendas medianas (Classe B)</li>
<li><strong>45% dos produtos</strong> quase não vendiam (Classe C) — mas ocupavam espaço e capital</li>
</ul>

<h2>As Ações Tomadas</h2>
<ol>
<li><strong>Reclassificação de fornecedores:</strong> priorizar compras dos produtos Classe A</li>
<li><strong>Promoções estratégicas:</strong> limpar estoque de itens Classe C com descontos progressivos</li>
<li><strong>Redução de variedade:</strong> eliminar 120 SKUs que quase não giravam</li>
<li><strong>Reposicionamento:</strong> produtos de maior giro ganharam prateleiras mais visíveis</li>
</ol>

<h2>Impacto nos Números</h2>
<ul>
<li><strong>Capital liberado:</strong> R$ 15.000 que estavam parados em estoque foram reinvestidos</li>
<li><strong>Giro de estoque aumentou 35%</strong> em 3 meses</li>
<li><strong>Área da prateleira otimizada:</strong> mais variedade dos produtos que vendem</li>
<li><strong>Lucro líquido subiu 12%</strong> no trimestre seguinte</li>
</ul>

<blockquote>Eu achava que ter mais produtos significava vender mais. Na verdade, ter os produtos certos é o que faz a diferença. O VendaPX me mostrou isso com dados.</blockquote>`},{slug:"restaurante-aumenta-luco-gestao-financeira",title:"Restaurante Aumenta Lucro com Gestão Financeira",description:"Descubra como um restaurante utilizou controle financeiro integrado para aumentar sua rentabilidade em 25%.",category:"cases",date:"2025-06-15",readTime:8,keywords:["caso de sucesso","restaurante","gestão financeira","fluxo de caixa","lucro","VendaPX"],content:`<h2>O Problema Silencioso</h2>
<p>O <strong>Sabor da Terra</strong> era um restaurante popular que faturava bem, mas o lucro nunca aparecia. O dono trabalhava 14 horas por dia e, no final do mês, sobrava pouco. O problema? <strong>Falta de controle financeiro.</strong></p>

<h2>O Que Estava Acontecendo</h2>
<ul>
<li><strong>Compras descontroladas:</strong> o chef comprava por instinto, sem consultar preços históricos</li>
<li><strong>Desperdício alto:</strong> ingredientes estragavam antes de serem usados</li>
<li><strong>Despesas esquecidas:</strong> pequenos gastos diários que somavam R$ 3.000/mês sem serem percebidos</li>
<li><strong>Sem conciliação:</strong> cartão, PIX e dinheiro misturados sem controle</li>
</ul>

<h2>A Implementação do VendaPX Financeiro</h2>
<p>Ao adotar o <strong>Sistema Financeiro do VendaPX</strong>, o restaurante passou a:</p>
<ol>
<li><strong>Registrar todas as entradas e saídas</strong> categorizadas automaticamente</li>
<li><strong>Visualizar o fluxo de caixa projetado</strong> e se antecipar a meses ruins</li>
<li><strong>Conciliar pagamentos</strong> de cartão, PIX e dinheiro em segundos</li>
<li><strong>Gerar o DRE mensal</strong> para saber exatamente quanto lucra</li>
</ol>

<h2>Resultados em 4 Meses</h2>
<ul>
<li><strong>Desperdício reduzido em 30%</strong> com compras baseadas em dados</li>
<li><strong>Despesas ocultas eliminadas:</strong> R$ 2.800/mês em gastos que não agregavam valor</li>
<li><strong>Margem de lucro subiu de 8% para 10%</strong> — um aumento de 25% relativo</li>
<li><strong>Dono recuperou 3 horas por dia</strong> que antes gastava em planilhas</li>
</ul>

<blockquote>Nunca imaginei que estava perdendo tanto dinheiro em coisas pequenas. O Financeiro do VendaPX me abriu os olhos. Agora sei exatamente para onde vai cada centavo do meu restaurante.</blockquote>`},{slug:"farmacia-otimiza-lotes-controle-validade",title:"Farmácia Otimiza Lotes com Controle de Validade",description:"Veja como uma farmácia reduziu perdas com vencidos usando controle inteligente de lotes e validades.",category:"cases",date:"2025-07-01",readTime:8,keywords:["caso de sucesso","farmácia","controle de validade","lotes","redução de perdas","VendaPX"],content:`<h2>O Desafio Único das Farmácias</h2>
<p>Farmácias lidam com um desafio específico que poucos outros comércios enfrentam: <strong>validade de produtos</strong>. Medicamentos vencidos não podem ser vendidos e geram perdas significativas. A <strong>Farmácia Saúde Total</strong> estava perdendo cerca de R$ 4.000 por mês com produtos vencidos.</p>

<h2>A Solução: Gestão de Lotes</h2>
<p>Ao implementar o <strong>Controle de Estoque do VendaPX</strong> com foco em gestão de lotes e validade, a farmácia ganhou:</p>
<ul>
<li><strong>Alertas automáticos</strong> 90, 60 e 30 dias antes do vencimento</li>
<li><strong>Controle por lote:</strong> cada entrada de produto registrada com número do lote e data de validade</li>
<li><strong>Relatório de proximidade de vencimento:</strong> visão clara do que precisa de ação urgente</li>
<li><strong>PEPS automático:</strong> primeiro a vender, primeiro a sair — garantindo que produtos mais antigos sejam vendidos primeiro</li>
</ul>

<h2>Ações Estratégicas</h2>
<ol>
<li><strong>Promoções preventivas:</strong> produtos a 60 dias do vencimento ganham desconto especial</li>
<li><strong>Troca com fornecedores:</strong> com dados de lotes, foi possível negociar trocas</li>
<li><strong>Compras mais precisas:</strong> compravam volumes menores com mais frequência</li>
</ol>

<h2>Resultados em 6 Meses</h2>
<ul>
<li><strong>Perdas por vencimento reduzidas em 65%</strong></li>
<li><strong>Economia mensal de R$ 2.600</strong> em produtos que antes eram descartados</li>
<li><strong>Conformidade sanitária 100%:</strong> nenhum produto vencido nas prateleiras</li>
<li><strong>Relatórios para ANVISA</strong> gerados em segundos</li>
</ul>

<blockquote>Antes, descartávamos caixas de medicamentos todo mês. Hoje, com controle de lotes, quase não temos perdas. O VendaPX transformou nossa gestão.</blockquote>`},{slug:"petshop-fideliza-clientes-atendimento-integrado",title:"Petshop Fideliza Clientes com Atendimento Integrado",description:"Como um petshop usou integração entre sistemas para criar uma experiência única e fidelizar seus clientes.",category:"cases",date:"2025-07-15",readTime:7,keywords:["caso de sucesso","petshop","fidelização","atendimento","integração","VendaPX"],content:`<h2>O Mercado Pet no Brasil</h2>
<p>O mercado de pets no Brasil movimenta mais de <strong>R$ 50 bilhões por ano</strong> e cresce a cada dia. Com tantas opções de petshops, o diferencial está no <strong>atendimento personalizado</strong>. O <strong>Pet Amigo</strong> descobriu que a integração entre seus sistemas era a chave para fidelizar clientes.</p>

<h2>Os Desafios Anteriores</h2>
<ul>
<li><strong>Clientes repetiam informações:</strong> dados de pets perdidos entre cadastros separados</li>
<li><strong>Vendas sem histórico:</strong> não sabiam o que cada cliente comprava regularmente</li>
<li><strong>Estoque de rações e medicamentos:</strong> faltava produto que mais vendia</li>
<li><strong>Controle financeiro:</strong> serviços e produtos misturados sem categorização</li>
</ul>

<h2>A Integração com VendaPX</h2>
<p>O Pet Amigo adotou o ecossistema completo:</p>
<ol>
<li><strong>PDV:</strong> registrava cada venda com os dados do cliente e do pet</li>
<li><strong>Estoque:</strong> controlava rações, medicamentos e acessórios com alertas automáticos</li>
<li><strong>Financeiro:</strong> separava receitas de banho, tosa, produtos e consultas</li>
</ol>

<h2>O Diferencial: Atendimento Personalizado</h2>
<p>Com dados integrados, o atendente agora consegue:</p>
<ul>
<li><strong>Ver o histórico completo do pet:</strong> última vacina, vermífugo comprado, preferências</li>
<li><strong>Sugerir produtos relevantes:</strong> "A última ração foi comprada há 25 dias, precisa de mais?"</li>
<li><strong>Agendar serviços recorrentes:</strong> banho e tosa mensal com lembrete automático</li>
</ul>

<h2>Resultados</h2>
<ul>
<li><strong>Taxa de retorno do cliente aumentou 45%</strong></li>
<li><strong>Ticket médio subiu 28%</strong> com sugestões personalizadas</li>
<li><strong>Estoque sempre no ponto certo:</strong> zero faltas dos produtos mais vendidos</li>
</ul>

<blockquote>Quando o cliente vê que lembramos do nome do pet e do último serviço feito, ele nunca mais vai a outro petshop. A integração fez isso acontecer.</blockquote>`},{slug:"loja-materiais-construcao-organiza-depositos",title:"Loja de Materiais de Construção Organiza Depósitos",description:"Veja como uma loja de materiais de construção usou controle de estoque multi-depósito para otimizar operação.",category:"cases",date:"2025-08-01",readTime:8,keywords:["caso de sucesso","materiais de construção","depósito","estoque","organização","VendaPX"],content:`<h2>A Complexidade da Construção Civil</h2>
<p>Lojas de materiais de construção enfrentam um desafio logístico enorme: <strong>produtos de tamanhos, pesos e gastos muito diferentes</strong>. A <strong>ConstruMax</strong> tinha 3 depósitos espalhados pela cidade e nenhum controle integrado entre eles.</p>

<h2>O Caos Operacional</h2>
<ul>
<li><strong>Depósitos isolados:</strong> cada um tinha seu controle (ou não tinha nenhum)</li>
<li><strong>Duplicidade de compras:</strong> o mesmo material comprado por dois depósitos diferentes</li>
<li><strong>Clientes insatisfeitos:</strong> iam até a loja e descobriam que o produto não estava lá</li>
<li><strong>Perdas enormes:</strong> materiais encontrados meses depois em depósitos errados</li>
</ul>

<h2>A Solução: Múltiplos Depósitos no VendaPX</h2>
<p>Ao implementar o <strong>Controle de Estoque do VendaPX</strong> com gestão de múltiplos depósitos, a ConstruMax passou a:</p>
<ol>
<li><strong>Visualizar todo o estoque em um único painel</strong> — cada depósito separado mas conectado</li>
<li><strong>Transferir entre depósitos</strong> com registro automático e rastreamento</li>
<li><strong>Consultar disponibilidade em tempo real</strong> antes de confirmar pedido ao cliente</li>
<li><strong>Centralizar compras:</strong> o setor de compras via apenas um painel unificado</li>
</ol>

<h2>Resultados em 8 Meses</h2>
<ul>
<li><strong>Reposição entre depósitos:</strong> transferências inteligentes reduziram faltas em 70%</li>
<li><strong>Compras otimizadas:</strong> eliminação de duplicidade economizou R$ 18.000/mês</li>
<li><strong>Atendimento melhorado:</strong> 95% das consultas respondidas com estoque confirmado</li>
<li><strong>Perdas reduzidas em 50%:</strong> rastreamento total de cada item</li>
</ul>

<blockquote>Antes, tínhamos 3 depósitos funcionando como 3 empresas diferentes. Agora, com o VendaPX, temos uma operação única e integrada. A diferença é brutal.</blockquote>`},{slug:"supermercado-melhora-fechamento-caixa",title:"Supermercado Melhora Fechamento de Caixa",description:"Como um supermercado eliminou divergências no fechamento de caixa com um PDV integrado ao financeiro.",category:"cases",date:"2025-08-15",readTime:7,keywords:["caso de sucesso","supermercado","fechamento de caixa","PDV","financeiro","VendaPX"],content:`<h2>O Problema Clássico do Varejo</h2>
<p>O <strong>Supermercado Família</strong> tinha 8 caixas registradoras e todo dia o fechamento era uma tortura. Sobras e faltas de R$ 50, R$ 100, às vezes mais. Ninguém sabia de onde vinham as divergências e o dono desconfiava que havia algo errado.</p>

<h2>As Causas das Divergências</h2>
<ul>
<li><strong>Formas de pagamento misturadas:</strong> PIX, cartão de crédito, débito e dinheiro tudo junto</li>
<li><strong>Devoluções não registradas:</strong> devoluções no caixa sem desconto no fechamento</li>
<li><strong>Descontos informais:</strong>Some descontos dados sem registro no sistema</li>
<li><strong>Falta de conciliação:</strong> o que o PDV registrava não batia com o que o banco recebia</li>
</ul>

<h2>A Implementação do PDV VendaPX</h2>
<p>Com o <strong>PDV do VendaPX</strong> integrado ao <strong>Sistema Financeiro</strong>, cada operação passou a ser rastreada automaticamente:</p>
<ol>
<li><strong>Cada venda registrada</strong> com forma de pagamento separada</li>
<li><strong>Devoluções integradas:</strong> desconto automático no fechamento</li>
<li><strong>Conciliação bancária:</strong> o sistema compara vendas com recebimentos reais</li>
<li><strong>Relatório de fechamento:</strong> resumo automático por caixa, por turno, por operador</li>
</ol>

<h2>Resultados em 3 Meses</h2>
<ul>
<li><strong>Divergências reduzidas em 95%</strong> — de R$ 300/mês para menos de R$ 15</li>
<li><strong>Tempo de fechamento:</strong> de 45 minutos para 5 minutos por caixa</li>
<li><strong>Transparência total:</strong> cada operador responsável por seu caixa</li>
<li><strong>Detecção de irregularidades:</strong> 2 casos de mau uso identificados e resolvidos</li>
</ul>

<blockquote>O fechamento de caixa que antes causava dor de cabeça agora é automático. Em 5 minutos sei exatamente quanto entrou, de onde veio e para onde foi.</blockquote>`},{slug:"loja-virtual-sincroniza-estoque-fisico",title:"Loja Virtual Sincroniza Estoque com Físico",description:"Conheça como uma loja que vendia online e presencialmente unificou seu estoque com o VendaPX.",category:"cases",date:"2025-09-01",readTime:8,keywords:["caso de sucesso","loja virtual","ecommerce","sincronização","estoque","VendaPX"],content:`<h2>O Desafio Omnichannel</h2>
<p>A <strong>Style Fashion</strong> vendia em loja física há 5 anos e abriu uma loja virtual. O problema? Os dois canais não se comunicavam. Um produto vendido online ainda aparecia como disponível na loja, gerando vendas impossíveis e clientes frustrados.</p>

<h2>Os Problemas Concretos</h2>
<ul>
<li><strong>Vendas de produto sem estoque:</strong> 15% das vendas online tinham que ser canceladas</li>
<li><strong>Estoque duplicado:</strong> compravam mais do que necessário para cobrir ambos os canais</li>
<li><strong>Financeiro fragmentado:</strong> receitas de canais diferentes misturadas</li>
<li><strong>Cliente insatisfeito:</strong> esperava o produto que nunca chegava</li>
</ul>

<h2>A Integração Omnichannel</h2>
<p>Com o <strong>Estoque do VendaPX</strong> como centro de controle, a loja criou um modelo unificado:</p>
<ol>
<li><strong>Cadastro único de produtos</strong> com preços e fotos para ambos os canais</li>
<li><strong>Sincronização em tempo real:</strong> cada venda, entrada ou devolução atualiza tudo</li>
<li><strong>Financeiro integrado:</strong> receitas do online e físico categorizadas separadamente</li>
<li><strong>Relatórios consolidados:</strong> visão 360° de todas as operações</li>
</ol>

<h2>Resultados em 6 Meses</h2>
<ul>
<li><strong>Zero vendas de produto sem estoque</strong> — o problema foi completamente eliminado</li>
<li><strong>Estoque reduzido em 25%</strong> — não precisavam mais manter estoque duplicado</li>
<li><strong>Faturamento aumentou 35%</strong> com a expansão digital eficiente</li>
<li><strong>Satisfação do cliente subiu 40%</strong> — entregas confiáveis e rápidas</li>
</ul>

<blockquote>A integração entre loja física e virtual foi o maior salto que nosso negócio deu. O VendaPX tornou isso possível de forma simples e acessível.</blockquote>`},{slug:"escritorio-contabilidade-economiza-horas-automacao",title:"Escritório de Contabilidade Economiza Horas com Automação",description:"Veja como um escritório de contabilidade usou automação integrada para atender mais clientes com menos esforço.",category:"cases",date:"2025-09-15",readTime:8,keywords:["caso de sucesso","contabilidade","automação","efficiência","gestão","VendaPX"],content:`<h2>A Rotina de um Contador</h2>
<p>Contadores enfrentam uma rotina pesada: reunir dados de múltiplos clientes, conciliar informações, gerar relatórios e cumprir prazos fiscais. O <strong>Escritório Contábil Express</strong> atendia 45 empresas e estava no limite da capacidade.</p>

<h2>Os Gargalos</h2>
<ul>
<li><strong>Dados desorganizados:</strong> cada cliente enviava informações em formatos diferentes</li>
<li><strong>Retrabalho constante:</strong> digitava dados que já existiam em sistemas dos clientes</li>
<li><strong>Prazos apertados:</strong> DAS, DCTF, SPED — tudo com prazos rigorosos</li>
<li><strong>Escalabilidade limitada:</strong> não conseguiam aceitar mais clientes sem contratar mais</li>
</ul>

<h2>A Parceria com o VendaPX</h2>
<p>O escritório passou a orientar seus clientes para usarem o <strong>VendaPX</strong> como sistema de gestão. Isso trouxe benefícios enormes:</p>
<ol>
<li><strong>Dados padronizados:</strong> todos os clientes usando o mesmo formato</li>
<li><strong>Exportação direta:</strong> relatórios financeiros prontos para importar nos sistemas contábeis</li>
<li><strong>Conciliação facilitada:</strong> dados bancários e financeiros já organizados</li>
<li><strong>Visão em tempo real:</strong> acompanhamento sem esperar planilhas mensais</li>
</ol>

<h2>Resultados Concretos</h2>
<ul>
<li><strong>Tempo por cliente reduzido em 40%</strong></li>
<li><strong>Capacidade aumentou de 45 para 70 clientes</strong> sem contratar novos funcionários</li>
<li><strong>Zero atrasos em obrigações fiscais</strong> nos últimos 12 meses</li>
<li><strong>Receita do escritório cresceu 55%</strong> no ano</li>
</ul>

<blockquote>Quando meus clientes começaram a usar o VendaPX, minha vida como contador mudou completamente. Os dados chegam organizados, prontos para trabalhar. Economizo horas por dia.</blockquote>`},{slug:"separar-financas-pessoais-e-empresariais",title:"Separar Finanças Pessoais e Empresariais: Por Que é Essencial",description:"Entenda por que misturar dinheiro pessoal com o do negócio é o erro mais comum entre empreendedores.",category:"financas-pessoais",date:"2025-10-01",readTime:8,keywords:["finanças pessoais","finanças empresariais","separação","empreendedor","controle financeiro","VendaPX"],content:`<h2>O Erro Que Muitos Cometem</h2>
<p>Uma das maiores causas de fracasso em pequenos negócios não é falta de clientes ou produto ruim — é a <strong>confusão financeira</strong>. Muitos empreendedores usam a mesma conta bancária para o negócio e para a vida pessoal, o que gera uma cascata de problemas.</p>

<h2>Por Que Não Misturar?</h2>
<ul>
<li><strong>Visão distorcida:</strong> não sabe se o negócio é lucrativo ou se está vivendo do próprio bolso</li>
<li><strong>Impostos prejudicados:</strong> despesas pessoais deduzidas indevidamente geram problemas com a Receita</li>
<li><strong>Stress financeiro:</strong> sem saber exatamente quanto o negócio rende, a ansiedade aumenta</li>
<li><strong>Dificuldade para crescer:</strong> sem dados claros, não consegue planejar investimentos</li>
</ul>

<h2>Como Fazer a Separação</h2>
<ol>
<li><strong>Abra uma conta PJ:</strong> uma conta bancária exclusiva para o negócio</li>
<li><strong>Pague um salário para si:</strong> defina um valor fixo mensal que transfere para sua conta pessoal</li>
<li><strong>Use um sistema de gestão:</strong> ferramentas como o <strong>VendaPX Financeiro</strong> separam automaticamente receitas e despesas do negócio</li>
<li><strong>Registre tudo:</strong> cada entrada e saída deve ser categorizada corretamente</li>
</ol>

<h2>Os Benefícios da Separação</h2>
<ul>
<li><strong>Clareza total:</strong> saber exatamente quanto o negócio lucra é libertador</li>
<li><strong>Planejamento eficiente:</strong> pode investir, contratar e expandir com confiança</li>
<li><strong>Menos dor de cabeça fiscal:</strong> tudo organizado para o contador</li>
<li><strong>Tranquilidade pessoal:</strong> saber que o negócio não compromete sua vida</li>
</ul>

<blockquote>Separar as finanças não é burocracia — é o primeiro passo para ser um verdadeiro empresário. Quando você sabe quanto ganha e quanto gasta, tanto no negócio quanto na vida, tudo fica mais simples.</blockquote>`},{slug:"reserva-de-emergencia-para-empreendedores",title:"Reserva de Emergência para Empreendedores",description:"Saiba por que todo empreendedor precisa de uma reserva financeira e como criar uma mesmo com um negócio pequeno.",category:"financas-pessoais",date:"2025-10-15",readTime:7,keywords:["reserva de emergência","emergência","empresário","planejamento","segurança financeira","VendaPX"],content:`<h2>O Cenário de Incerteza</h2>
<p>Todo empreendedor enfrenta meses ruins. Uma máquina quebra, um cliente importante perde, uma crise econômica atinge o setor. Ter uma <strong>reserva de emergência</strong> é a diferença entre atravessar a tempestade e afundar nela.</p>

<h2>Quanto Guardar?</h2>
<p>O ideal é ter uma reserva que cubra:</p>
<ul>
<li><strong>6 a 12 meses de despesas fixas</strong> do negócio (aluguel, salários, fornecedores)</li>
<li><strong>6 a 12 meses de despesas pessoais</strong> (moradia, alimentação, transporte)</li>
<li><strong>Fundos para imprevistos</strong> operacionais (manutenções, reposições)</li>
</ul>

<h2>Como Criar a Reserva</h2>
<ol>
<li><strong>Automatize a transferência:</strong> todo mês, transfira uma porcentagem fixa para uma conta separada</li>
<li><strong>Comece pequeno:</strong> 5% do faturamento já é um começo significativo</li>
<li><strong>Use o fluxo de caixa:</strong> o <strong>VendaPX Financeiro</strong> ajuda a projetar quando sobra dinheiro</li>
<li><strong>Não toque na reserva:</strong> exceto em emergências reais — não em oportunidades</li>
</ol>

<h2>Onde Guardar?</h2>
<ul>
<li><strong>Conta com rendimento:</strong> CDB, LCI ou LCA com liquidez diária</li>
<li><strong>Evite investimentos de alto risco:</strong> a reserva precisa ser segura e acessível</li>
<li><strong>Isolada da conta operacional:</strong> para não ter tentação de usar</li>
</ul>

<blockquote>A reserva de emergência não é um luxo — é um seguro. O dia que você precisar, vai agradecer por ter disciplinado esse hábito.</blockquote>`},{slug:"investimentos-para-donos-de-pme",title:"Investimentos para Donos de PME",description:"Dicas práticas de investimento para pequenos e médios empresários que querem fazer o dinheiro render.",category:"financas-pessoais",date:"2025-11-01",readTime:9,keywords:["investimentos","PME","empresário","renda","aplicações financeiras","VendaPX"],content:`<h2>O Desafio do Empreendedor Investidor</h2>
<p>Donos de pequenas e médias empresas frequentemente colocam <strong>todo o dinheiro no negócio</strong>. Embora reinvestir seja importante, não ter investimentos fora do negócio é um risco enorme. Se algo der errado com a empresa, você fica sem nada.</p>

<h2>Regras Básicas</h2>
<ul>
<li><strong>Nunca invista 100% no negócio:</strong> diversifique suas fontes de renda</li>
<li><strong>Pague a si primeiro:</strong> antes de reinvestir no negócio, reserve parte para investimentos pessoais</li>
<li><strong>Reserva primeiro, investimento depois:</strong> tenha sua reserva de emergência antes de investir</li>
<li><strong>Invista consistentemente:</strong> valores pequenos regulares superam investimentos esporádicos</li>
</ul>

<h2>Opções para Empreendedores</h2>
<ol>
<li><strong>Tesouro Direto:</strong> seguro, com rendimento acima da poupança, ideal para reserva</li>
<li><strong>CDBs e LCIs:</strong> boas opções de renda fixa com liquidez</li>
<li><strong>Fundos Imobiliários:</strong> renda passiva mensal isenta de IR para pessoa física</li>
<li><strong>Ações de grandes empresas:</strong> para quem quer investimentos de médio/longo prazo</li>
</ol>

<h2>Quanto Investir?</h2>
<p>Uma boa regra é:</p>
<ul>
<li><strong>10-20% da renda</strong> em investimentos pessoais</li>
<li><strong>5-10% do faturamento</strong> em reservas do negócio</li>
<li><strong>Crescer gradualmente:</strong> aumente conforme o negócio cresce</li>
</ul>

<blockquote>Um empresário que não investe fora do negócio está colocando todos os ovos em uma cesta. Diversificar não é falta de fé no seu negócio — é inteligência financeira.</blockquote>`},{slug:"como-definir-salario-para-si-mesmo",title:"Como Definir Um Salário para Si Mesmo",description:"Guia prático para donos de negócio definirem um salário justo para si mesmos sem prejudicar a empresa.",category:"financas-pessoais",date:"2025-11-15",readTime:8,keywords:["salário","pró-labore","empreendedor","remuneração","finanças pessoais","VendaPX"],content:`<h2>O dilema do Empreendedor</h2>
<p>Muitos donos de negócio não tiram um salário fixo. Retiram dinheiro quando precisam, sem critério. Isso gera caixa desorganizado e dificulta saber se o negócio é realmente lucrativo.</p>

<h2>Por Que Ter Salário Fixo?</h2>
<ul>
<li><strong>Clareza financeira:</strong> saber exatamente quanto o negócio gasta com você</li>
<li><strong>Planejamento:</strong> tanto pessoal quanto empresarial ficam mais fáceis</li>
<li><strong>Controle:</strong> evita retiradas excessivas que comprometem o caixa</li>
<li><strong>Aspecto fiscal:</strong> pró-labore bem definido evita problemas com a Receita</li>
</ul>

<h2>Como Calcular</h2>
<ol>
<li><strong>Analise o fluxo de caixa:</strong> quanto o negócio gera consistentemente? O <strong>VendaPX Financeiro</strong> mostra isso claramente</li>
<li><strong>Calcule as despesas fixas do negócio:</strong> aluguel, fornecedores, impostos, funcionários</li>
<li><strong>Defina o que sobra:</strong> o lucro líquido após todas as despesas operacionais</li>
<li><strong>Retire uma porcentagem:</strong> geralmente entre 30% e 50% do lucro líquido</li>
</ol>

<h2>Erros Comuns</h2>
<ul>
<li><strong>Tirar demais:</strong> compromete o caixa e o crescimento</li>
<li><strong>Tirar de menos:</strong> gera frustração e burnout</li>
<li><strong>Mudar sem critério:</strong> o salário deve ser revisado periodicamente, não arbitrariamente</li>
<li><strong>Ignorar impostos:</strong> o pró-labore é tributado — calcule líquido</li>
</ul>

<blockquote>Definir seu salário não é luxo, é profissionalismo. Quando você se paga como funcionário, o negócio começa a funcionar de verdade.</blockquote>`},{slug:"controle-de-gastos-pessoais-empreendedores",title:"Controle de Gastos Pessoais para Empreendedores",description:"Dicas para empreendedores controlarem seus gastos pessoais e equilibrarem vida e negócio.",category:"financas-pessoais",date:"2025-12-01",readTime:7,keywords:["gastos pessoais","controle","empresário","economia","finanças","VendaPX"],content:`<h2>A Armadilha do Empreendedor</h2>
<p>Quando o negócio vai bem, o empreendedor tends a gastar mais pessoalmente. Quando vai mal, corta tudo — exceto os gastos pessoais. Esse ciclo pode levar ao endividamento e à insatisfação. Controlar gastos pessoais é essencial para a saúde financeira total.</p>

<h2>Por Que é Difícil Controlar?</h2>
<ul>
<li><strong>Confusão mental:</strong> gastos do negócio e pessoais parecem a mesma coisa</li>
<li><strong>Estresse:</strong> o empreendedor gasta por impulso para compensar a pressão</li>
<li><strong>Falta de tempo:</strong> priorizar o negócio e esquecer das finanças pessoais</li>
<li><strong>Modo de vida:</strong> se acostuma a um padrão que não condiz com a realidade</li>
</ul>

<h2>Estratégias Práticas</h2>
<ol>
<li><strong> registre todos os gastos:</strong> use um app ou planilha para anotar cada centavo</li>
<li><strong>Categorize:</strong> moradia, transporte, alimentação, lazer, saúde</li>
<li><strong>Defina orçamento mensal:</strong> quanto pode gastar em cada categoria</li>
<li><strong>Revise mensalmente:</strong> compare o que planejou com o que realmente gastou</li>
<li><strong>Automatize economias:</strong> transfira automaticamente para investimentos antes de gastar</li>
</ol>

<h2>Dicas de Ouro</h2>
<ul>
<li><strong>Regra 50/30/20:</strong> 50% necessidades, 30% desejos, 20% economia/investimento</li>
<li><strong>Evite compras por impulso:</strong> espere 48 horas antes de comprar algo não essencial</li>
<li><strong>Cuide da saúde:</strong> gastos com saúde preventiva evitam despesas maiores no futuro</li>
</ul>

<blockquote>Controle financeiro pessoal não é sobre privação — é sobre liberdade. Quando você sabe para onde vai cada real, pode fazer escolhas conscientes e viver com tranquilidade.</blockquote>`},{slug:"preparacao-para-impostos-evite-surpresas",title:"Preparação para Impostos: Evite Surpresas",description:"Aprenda a se preparar durante o ano para não ter surpresas desagradáveis na hora de pagar impostos.",category:"financas-pessoais",date:"2025-12-15",readTime:9,keywords:["impostos","planejamento tributário","empresário","DAS","IRPF","VendaPX"],content:`<h2>A Surpresa de Muitos Empreendedores</h2>
<p>Todo ano acontece o mesmo: o empreendedor recebe a cobrança de impostos e fica surpreso com o valor. A razão? <strong>Falta de planejamento tributário ao longo do ano.</strong> Guardar para impostos não pode ser algo de último momento.</p>

<h2>Principais Impostos para Pequenos Negócios</h2>
<ul>
<li><strong>DAS (MEI):</strong> pagamento mensal fixo que pode variar conforme faturamento</li>
<li><strong>Simples Nacional:</strong> alíquota progressiva conforme faturamento</li>
<li><strong>IRPF:</strong> imposto sobre a pessoa física, incluindo pró-labore</li>
<li><strong>PIS/COFINS:</strong> para empresas no lucro presumido</li>
</ul>

<h2>Como Se Preparar Durante o Ano</h2>
<ol>
<li><strong>Guarde mensalmente:</strong> reserve 5-10% do faturamento para impostos em conta separada</li>
<li><strong>Acompanhe o faturamento:</strong> saiba sempre quanto faturou e qual será a alíquota</li>
<li><strong>Organize NFS-e e recibos:</strong> tudo deve estar documentado</li>
<li><strong>Consulte um contador:</strong> planejamento tributário anual evita desperdícios</li>
<li><strong>Use o Financeiro do VendaPX:</strong> categorize despesas dedutíveis e acompanhe a situação em tempo real</li>
</ol>

<h2>Dicas para Reduzir Legalmente os Impostos</h2>
<ul>
<li><strong>Deduza despesas válidas:</strong> aluguel, energia, internet, fornecedores</li>
<li><strong>Invista em previdência:</strong> PGBL permite dedução no IRPF</li>
<li><strong>Analise o enquadramento:</strong> às vezes Simples Nacional não é o melhor regime</li>
<li><strong>Aproveite incentivos:</strong> muitos estados oferecem redução de impostos</li>
</ul>

<blockquote>Planejar impostos não é sonegação — é inteligência financeira. O dinheiro que você guarda durante o ano para pagar impostos evita que ele se torne uma bomba no futuro.</blockquote>`},{slug:"planejamento-financeiro-pessoal-empreendedores",title:"Planejamento Financeiro Pessoal para Empreendedores",description:"Guia completo de planejamento financeiro pessoal para quem é dono de negócio e quer organização.",category:"financas-pessoais",date:"2026-01-01",readTime:9,keywords:["planejamento financeiro","pessoal","empreendedor","metas","organização","VendaPX"],content:`<h2>Por Que Planejar?</h2>
<p>Empreendedores costumam ser ótimos planejadores para seus negócios, mas negligenciam as finanças pessoais. <strong>Planejar sua vida financeira pessoal</strong> é tão importante quanto planejar o negócio. Afinal, o objetivo final de trabalhar é ter uma vida melhor.</p>

<h2>Os Pilares do Planejamento</h2>
<ul>
<li><strong>Receita:</strong> quanto você recebe do negócio (pró-labore) e de outras fontes</li>
<li><strong>Despesas fixas:</strong> moradia, escola, saúde, transporte, alimentação</li>
<li><strong>Despesas variáveis:</strong> lazer, viagens, roupas, presentes</li>
<li><strong>Metas de curto prazo:</strong> férias, reforma, curso</li>
<li><strong>Metas de longo prazo:</strong> aposentadoria, educação dos filhos, patrimônio</li>
</ul>

<h2>Passo a Passo</h2>
<ol>
<li><strong>Mapeie todas as suas receitas:</strong> pró-labore, rendimentos de investimentos, aluguéis</li>
<li><strong>Liste todas as despesas:</strong> fixas e variáveis, mês a mês</li>
<li><strong>Identifique desperdícios:</strong> gastos que não agregam valor à sua vida</li>
<li><strong>Defina metas claras:</strong> com prazo e valor definido</li>
<li><strong>Crie um orçamento mensal:</strong> quanto pode gastar em cada categoria</li>
<li><strong>Execute e acompanhe:</strong> revise mensalmente e ajuste conforme necessário</li>
</ol>

<h2>Ferramentas que Ajudam</h2>
<ul>
<li><strong>VendaPX Financeiro:</strong> para controlar as finanças do negócio com clareza</li>
<li><strong>Planilhas ou apps:</strong> para organizar as finanças pessoais</li>
<li><strong>Contador de confiança:</strong> para orientação fiscal e patrimonial</li>
</ul>

<blockquote>Planejar é escolher para onde ir. Sem plano, você chega onde o vento levar. Com plano, você decide seu destino financeiro.</blockquote>`},{slug:"endividamento-pessoal-como-sair",title:"Endividamento Pessoal: Como Sair",description:"Estratégias práticas para empreendedores que se endividaram pessoalmente e querem retomar o controle.",category:"financas-pessoais",date:"2026-02-01",readTime:8,keywords:["endividamento","dívidas","saída de dívidas","negociação","empresário","VendaPX"],content:`<h2>O Ciclo Vicioso</h2>
<p>Muitos empreendedores se endividam pessoalmente para investir no negócio, ou usam o crédito pessoal para cobrir déficits do negócio. O resultado é uma espiral de dívidas que compromete a saúde financeira de ambos.</p>

<h2>Passo 1: Enfrente a Realidade</h2>
<ul>
<li><strong>Liste todas as dívidas:</strong> credor, valor, juros, prazo</li>
<li><strong>Organize por custo:</strong> priorize pagar primeiro as dívidas com juros mais altos</li>
<li><strong>Calcule o total mensal:</strong> quanto sai por mês só de prestações</li>
</ul>

<h2>Passo 2: Negocie</h2>
<ol>
<li><strong>Fale com os credores:</strong> muitos oferecem descontos para pagamento à vista</li>
<li><strong>Consolide dívidas:</strong> junte várias prestações em uma menor</li>
<li><strong>Renegocie prazos:</strong> prazos maiores podem reduzir a parcela mensal</li>
<li><strong>Cuidado com portadores de crédito:</strong> evite trocar dívida por dívida pior</li>
</ol>

<h2>Passo 3: Reequilibre o Orçamento</h2>
<ul>
<li><strong>Corte gastos não essenciais</strong> temporariamente</li>
<li><strong>Aumente a renda:</strong> busque novos clientes, novos canais de venda</li>
<li><strong>Automatize pagamentos:</strong> sempre pague no mínimo as parcelas</li>
<li><strong>Segure novas dívidas:</strong> até equilibrar completamente</li>
</ul>

<h2>Evite Voltar ao Ciclo</h2>
<ul>
<li><strong>Crie reserva de emergência</strong> antes de tudo</li>
<li><strong>Use crédito conscientemente:</strong> apenas para investimentos com retorno</li>
<li><strong>Monitore com o VendaPX Financeiro:</strong> acompanhe fluxo de caixa pessoal e do negócio</li>
</ul>

<blockquote>Sair de dívidas é como uma jornada: longa, mas totalmente possível. O primeiro passo é reconhecer o problema. O segundo é agir. O terceiro é nunca mais voltar.</blockquote>`},{slug:"aposentadoria-do-empreendedor-planeje",title:"Aposentadoria do Empreendedor: Comece a Planejar Agora",description:"Por que todo empreendedor deve pensar na aposentadoria desde o início e como planejar essa transição.",category:"financas-pessoais",date:"2026-03-01",readTime:8,keywords:["aposentadoria","empresário","planejamento","previdência","longo prazo","VendaPX"],content:`<h2>O Mito do Empreendedor Eterno</h2>
<p>Muitos empreendedores acreditam que vão "trabalhar para sempre". Mas a realidade é que chega um momento em que a saúde, a energia ou o interesse diminuem. <strong>Sem planejamento, a aposentadoria pode significar queda de qualidade de vida.</strong></p>

<h2>Por Que Pensar Nisso Agora?</h2>
<ul>
<li><strong>Tempo é o maior aliado:</strong> quanto antes começar, mais tempo o dinheiro tem para render</li>
<li><strong>O negócio pode não ser sua aposentadoria:</strong> não conte com a venda da empresa</li>
<li><strong>Dependência única é perigosa:</strong> ter múltiplas fontes de renda é mais seguro</li>
<li><strong>O custo de vida sobe:</strong> o que hoje custa R$ 3.000 vai custar mais no futuro</li>
</ul>

<h2>Como Planejar</h2>
<ol>
<li><strong>Defina quanto precisa por mês:</strong> para manter o estilo de vida desejado na aposentadoria</li>
<li><strong>Calcule quanto falta:</strong> o tempo restante e a rentabilidade definem o valor mensal a investir</li>
<li><strong>Diversifique investimentos:</strong> previdência privada, fundos imobiliários, renda fixa</li>
<li><strong>Comece mesmo pequeno:</strong> R$ 200/mês investidos por 30 anos a 10% ao mês rendem mais de R$ 400.000</li>
</ol>

<h2>Instrumentos Disponíveis</h2>
<ul>
<li><strong>PGBL/VGBL:</strong> planos de previdência com benefícios fiscais</li>
<li><strong>Fundos Imobiliários:</strong> renda mensal isenta de IR na aposentadoria</li>
<li><strong>Investimentos de Renda Fixa:</strong> segurança e previsibilidade</li>
</ul>

<h2>O VendaPX Pode Ajudar</h2>
<p>Com o <strong>Sistema Financeiro do VendaPX</strong>, você pode projetar fluxos de caixa, definir metas e acompanhar a evolução do seu patrimônio pessoal ao longo do tempo.</p>

<blockquote>A melhor hora para começar a planejar a aposentadoria era 20 anos atrás. A segunda melhor hora é agora. Não adie essa decisão.</blockquote>`},{slug:"saude-financeira-pessoal-saude-do-negocio",title:"Saúde Financeira Pessoal = Saúde do Negócio",description:"Entenda como as finanças pessoais do empreendedor impactam diretamente o sucesso do negócio.",category:"financas-pessoais",date:"2026-04-01",readTime:7,keywords:["saúde financeira","pessoal","negócio","equilíbrio","empreendedor","VendaPX"],content:`<h2>A Conexão Invisível</h2>
<p>Existe uma relação direta entre a <strong>saúde financeira do empreendedor</strong> e a saúde do negócio. Um empresário endividado pessoalmente tende a tomar decisões ruins no negócio — pressa por dinheiro, descontos apressados, investimentos precipitados.</p>

<h2>Como o Pessoal Afeta o Profissional</h2>
<ul>
<li><strong>Estresse financeiro:</strong> afeta a capacidade de liderar e tomar decisões</li>
<li><strong>Pressa por resultados:</strong> faz o empresário aceitar condições ruins em vendas e negociações</li>
<li><strong>Desvio de verba:</strong> a tentação de usar dinheiro do negócio para pagar dívidas pessoais</li>
<li><strong>Falta de foco:</strong> preocupações pessoais consomem energia mental</li>
</ul>

<h2>Como o Profissional Afeta o Pessoal</h2>
<ul>
<li><strong>Lucro inadequado:</strong> se o negócio não gera lucro suficiente, não há como ter vida financeira saudável</li>
<li><strong>Salário irregular:</strong> retiradas sem planejamento geram incerteza pessoal</li>
<li><strong>Dependência total:</strong> quando tudo depende do negócio, qualquer turbulência afeta tudo</li>
</ul>

<h2>O Equilíbrio</h2>
<ol>
<li><strong>Financeiro do VendaPX:</strong> mantenha o negócio organizado e transparente</li>
<li><strong>Salário fixo:</strong> defina um pró-labore e cumpra-o</li>
<li><strong>Reserva pessoal:</strong> tenha uma reserva separada do negócio</li>
<li><strong>Investimentos pessoais:</strong> construa patrimônio fora da empresa</li>
<li><strong>Controle de gastos:</strong> tanto pessoais quanto empresariais</li>
</ol>

<blockquote>Quando o empreendedor está financeiramente saudável, ele lidera melhor, negocia melhor e decide melhor. Cuide de você para cuidar do seu negócio.</blockquote>`}],Hu=[...Pz,...Dz,...Tz,...Rz];function Vz(t){return Hu.find(s=>s.slug===t)}const Ri={estoque:"Controle de Estoque",financeiro:"Gestão Financeira",pdv:"PDV e Vendas",integracao:"Integração de Sistemas",negocios:"Dicas para Negócios",tecnologia:"Tecnologia e Inovação",cases:"Casos de Sucesso","financas-pessoais":"Finanças para Empresários"},ru={estoque:"bg-blue-100 text-blue-700",financeiro:"bg-emerald-100 text-emerald-700",pdv:"bg-orange-100 text-orange-700",integracao:"bg-purple-100 text-purple-700",negocios:"bg-amber-100 text-amber-700",tecnologia:"bg-cyan-100 text-cyan-700",cases:"bg-rose-100 text-rose-700","financas-pessoais":"bg-indigo-100 text-indigo-700"},Oc=12,jz=["todos","estoque","financeiro","pdv","integracao","negocios","tecnologia","cases","financas-pessoais"];function Mz(){const[t,s]=$x(),n=parseInt(t.get("page")||"1",10),r=t.get("cat")||"todos",c=t.get("q")||"",[u,m]=z.useState(c),g=z.useMemo(()=>{let x=[...Hu];if(r!=="todos"&&(x=x.filter(E=>E.category===r)),c){const E=c.toLowerCase();x=x.filter(D=>D.title.toLowerCase().includes(E)||D.description.toLowerCase().includes(E)||D.keywords.some(M=>M.toLowerCase().includes(E)))}return x.sort((E,D)=>new Date(D.date).getTime()-new Date(E.date).getTime())},[r,c]),h=Math.ceil(g.length/Oc),f=g.slice((n-1)*Oc,n*Oc);function v(x,E){const D=new URLSearchParams(t);E&&E!=="todos"&&x!=="q"?D.set(x,E):D.delete(x),x!=="page"&&D.delete("page"),s(D)}function q(x){x.preventDefault(),v("q",u)}return y.jsxs("div",{children:[y.jsx("section",{className:"bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white py-16",children:y.jsxs("div",{className:"max-w-6xl mx-auto px-4 text-center",children:[y.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold mb-4",children:"Blog VendaPX"}),y.jsx("p",{className:"text-indigo-200 text-lg max-w-2xl mx-auto mb-8",children:"Artigos sobre gestão de estoque, finanças, PDV e dicas para seu negócio crescer."}),y.jsxs("form",{onSubmit:q,className:"max-w-lg mx-auto relative",children:[y.jsx("input",{type:"text",value:u,onChange:x=>m(x.target.value),placeholder:"Buscar artigos...",className:"w-full py-3 pl-12 pr-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/40"}),y.jsx(zC,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300"})]})]})}),y.jsx("section",{className:"border-b border-slate-100 bg-white sticky top-16 z-40",children:y.jsx("div",{className:"max-w-6xl mx-auto px-4",children:y.jsx("div",{className:"flex gap-1 overflow-x-auto py-3 scrollbar-hide",children:jz.map(x=>y.jsx("button",{onClick:()=>v("cat",x),className:`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${r===x?"bg-indigo-600 text-white shadow-md":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:x==="todos"?"Todos":Ri[x]},x))})})}),y.jsx("div",{className:"max-w-6xl mx-auto px-4 pt-8 pb-2",children:y.jsxs("p",{className:"text-sm text-slate-500",children:[g.length," artigo",g.length!==1?"s":""," encontrado",g.length!==1?"s":"",r!=="todos"&&y.jsxs("span",{children:[" em ",y.jsx("strong",{children:Ri[r]})]}),c&&y.jsxs("span",{children:[' para "',y.jsx("strong",{children:c}),'"']})]})}),y.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-6",children:[f.length===0?y.jsx("div",{className:"text-center py-20",children:y.jsx("p",{className:"text-slate-400 text-lg",children:"Nenhum artigo encontrado."})}):y.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(x=>y.jsxs(Ba,{to:`/blog/${x.slug}`,className:"group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300",children:[y.jsxs("div",{className:"p-6",children:[y.jsx("div",{className:"flex items-center gap-2 mb-3",children:y.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded-full ${ru[x.category]}`,children:Ri[x.category]})}),y.jsx("h2",{className:"text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2",children:x.title}),y.jsx("p",{className:"text-slate-500 text-sm mb-4 line-clamp-3",children:x.description}),y.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[y.jsxs("div",{className:"flex items-center gap-1",children:[y.jsx($v,{size:14}),y.jsxs("span",{children:[x.readTime," min de leitura"]})]}),y.jsx("span",{children:new Date(x.date).toLocaleDateString("pt-BR")})]})]}),y.jsx("div",{className:"px-6 pb-4",children:y.jsxs("span",{className:"text-sm font-semibold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all",children:["Ler artigo ",y.jsx(Tr,{size:16})]})})]},x.slug))}),h>1&&y.jsxs("div",{className:"flex items-center justify-center gap-2 mt-12",children:[y.jsx("button",{disabled:n<=1,onClick:()=>v("page",String(n-1)),className:"p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed",children:y.jsx(fC,{size:18})}),Array.from({length:h},(x,E)=>E+1).filter(x=>x===1||x===h||Math.abs(x-n)<=2).map((x,E,D)=>y.jsxs(cy.Fragment,{children:[E>0&&D[E-1]!==x-1&&y.jsx("span",{className:"text-slate-300",children:"..."}),y.jsx("button",{onClick:()=>v("page",String(x)),className:`w-10 h-10 rounded-lg text-sm font-medium transition-all ${x===n?"bg-indigo-600 text-white shadow-md":"text-slate-600 hover:bg-slate-100"}`,children:x})]},x)),y.jsx("button",{disabled:n>=h,onClick:()=>v("page",String(n+1)),className:"p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed",children:y.jsx(Tr,{size:18})})]})]})]})}function Oz(){const{slug:t}=sx(),s=mu(),n=t?Vz(t):void 0;if(z.useEffect(()=>{if(!n){s("/blog",{replace:!0});return}window.scrollTo(0,0),document.title=`${n.title} | Blog VendaPX`;const u=document.querySelector('meta[name="description"]');u&&u.setAttribute("content",n.description);const m=document.querySelector('link[rel="canonical"]');m&&m.setAttribute("href",`https://vendapx.com.br/blog/${n.slug}`)},[n,s]),!n)return null;const r=Hu.filter(u=>u.category===n.category&&u.slug!==n.slug).slice(0,3),c={"@context":"https://schema.org","@type":"BlogPosting",headline:n.title,description:n.description,datePublished:n.date,author:{"@type":"Organization",name:"VendaPX",url:"https://vendapx.com.br"},publisher:{"@type":"Organization",name:"VendaPX",url:"https://vendapx.com.br"},mainEntityOfPage:{"@type":"WebPage","@id":`https://vendapx.com.br/blog/${n.slug}`},keywords:n.keywords.join(", "),timeRequired:`PT${n.readTime}M`};return y.jsxs(y.Fragment,{children:[y.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(c)}}),y.jsx("div",{className:"bg-slate-50 border-b border-slate-100",children:y.jsx("div",{className:"max-w-4xl mx-auto px-4 py-3",children:y.jsxs("nav",{className:"flex items-center gap-1 text-xs text-slate-400",children:[y.jsx(Ba,{to:"/",className:"hover:text-indigo-600",children:"Início"}),y.jsx(Tr,{size:12}),y.jsx(Ba,{to:"/blog",className:"hover:text-indigo-600",children:"Blog"}),y.jsx(Tr,{size:12}),y.jsx("span",{className:"text-slate-600 truncate max-w-[200px]",children:n.title})]})})}),y.jsx("header",{className:"pt-12 pb-8",children:y.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[y.jsx("div",{className:"flex items-center gap-3 mb-6",children:y.jsx("span",{className:`text-xs font-bold px-3 py-1.5 rounded-full ${ru[n.category]}`,children:Ri[n.category]})}),y.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6",children:n.title}),y.jsx("p",{className:"text-lg text-slate-500 mb-6",children:n.description}),y.jsxs("div",{className:"flex items-center gap-6 text-sm text-slate-400",children:[y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx(uC,{size:16}),y.jsx("span",{children:new Date(n.date).toLocaleDateString("pt-BR",{year:"numeric",month:"long",day:"numeric"})})]}),y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx($v,{size:16}),y.jsxs("span",{children:[n.readTime," min de leitura"]})]})]})]})}),y.jsxs("article",{className:"max-w-4xl mx-auto px-4 pb-16",children:[y.jsx("div",{className:`prose prose-slate prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600
            prose-strong:text-slate-800
            prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-6
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-table:border prose-table:border-slate-200 prose-th:bg-slate-50`,dangerouslySetInnerHTML:{__html:n.content}}),y.jsx("div",{className:"mt-12 pt-8 border-t border-slate-100",children:y.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[y.jsx(jC,{size:16,className:"text-slate-400"}),n.keywords.map(u=>y.jsx(Ba,{to:`/blog?q=${encodeURIComponent(u)}`,className:"text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors",children:u},u))]})}),y.jsxs("div",{className:"mt-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 text-center text-white",children:[y.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Pronto para organizar seu negócio?"}),y.jsx("p",{className:"text-indigo-200 mb-6",children:"Acesse o ecossistema VendaPX: Estoque, Financeiro e PDV integrados por apenas R$ 20/mês."}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3",children:[y.jsx("a",{href:"https://pay.cakto.com.br/y8mkzes_790947",className:"bg-white text-indigo-700 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors",children:"Começar Agora"}),y.jsx("a",{href:"https://wa.me/5547996361402",target:"_blank",rel:"noopener noreferrer",className:"bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-colors",children:"Falar no WhatsApp"})]})]})]}),r.length>0&&y.jsx("section",{className:"bg-slate-50 py-16",children:y.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[y.jsx("h2",{className:"text-2xl font-bold text-slate-900 mb-8",children:"Artigos Relacionados"}),y.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:r.map(u=>y.jsxs(Ba,{to:`/blog/${u.slug}`,className:"group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all",children:[y.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded-full ${ru[u.category]}`,children:Ri[u.category]}),y.jsx("h3",{className:"text-base font-bold mt-3 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2",children:u.title}),y.jsx("p",{className:"text-sm text-slate-500 line-clamp-2",children:u.description})]},u.slug))})]})})]})}const pr="https://pay.cakto.com.br/y8mkzes_790947",gr="https://wa.me/5547996361402",fr=()=>y.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20",children:[y.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"}),y.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.492a.5.5 0 0 0 .613.608l5.757-1.505A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.002-1.367l-.358-.213-3.714.971.993-3.618-.234-.373A9.818 9.818 0 1 1 12 21.818z"})]}),zo={estoque:{url:"https://estoque.vendapx.com.br/"},financeiro:{url:"https://financeiro.vendapx.com.br/"},pdv:{url:"https://pdv.vendapx.com.br/"},delivery:{url:"https://delivery.vendapx.com.br/"}},hr=({icon:t,title:s,description:n,items:r,link:c,accentColor:u="bg-indigo-50 text-indigo-600",btnColor:m="bg-indigo-600 hover:bg-indigo-700",cardBg:g="bg-white",cardBorder:h="border-slate-100"})=>y.jsxs(zr.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`${g} p-8 rounded-2xl shadow-sm border ${h} hover:shadow-md transition-shadow`,children:[y.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${u}`,children:y.jsx(t,{size:24})}),y.jsx("h3",{className:"text-xl font-bold mb-3",children:s}),y.jsx("p",{className:"text-slate-600 mb-6 leading-relaxed",children:n}),y.jsx("ul",{className:"space-y-3 mb-8",children:r.map((f,v)=>y.jsxs("li",{className:"flex items-start gap-3 text-sm text-slate-600",children:[y.jsx(Po,{size:18,className:"text-emerald-500 shrink-0 mt-0.5"}),y.jsx("span",{children:f})]},v))}),c&&y.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all ${m}`,children:["Acessar Sistema ",y.jsx(qr,{size:16})]})]});function Nz(){return y.jsxs("div",{className:"min-h-screen font-sans",children:[y.jsx("header",{className:"fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-bottom border-slate-100",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 h-20 flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl",children:"V"}),y.jsx("span",{className:"text-2xl font-bold tracking-tight",children:"VendaPX"})]}),y.jsxs("nav",{className:"hidden md:flex items-center gap-8 text-sm font-medium text-slate-600",children:[y.jsx("a",{href:"#sistemas",className:"hover:text-indigo-600 transition-colors",children:"Sistemas"}),y.jsx("a",{href:"#integracao",className:"hover:text-indigo-600 transition-colors",children:"Integração"}),y.jsx("a",{href:"#precos",className:"hover:text-indigo-600 transition-colors",children:"Preços"}),y.jsx("a",{href:"/blog",className:"hover:text-indigo-600 transition-colors",children:"Blog"}),y.jsx("span",{className:"text-slate-200",children:"|"}),y.jsx("a",{href:zo.estoque.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-emerald-600 transition-colors",children:"Estoque"}),y.jsx("a",{href:zo.financeiro.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-indigo-600 transition-colors",children:"Financeiro"}),y.jsx("a",{href:zo.pdv.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-amber-600 transition-colors",children:"PDV"}),y.jsx("a",{href:zo.delivery.url,target:"_blank",rel:"noopener noreferrer",className:"hover:text-rose-600 transition-colors",children:"Delivery"})]}),y.jsx("a",{href:pr,className:"bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200",children:"Começar Agora"})]})}),y.jsx("section",{className:"pt-40 pb-20 px-4",children:y.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[y.jsxs(zr.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[y.jsx("span",{className:"inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6",children:"Ecossistema Completo de Gestão"}),y.jsxs("h1",{className:"text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]",children:["Tudo o que seu negócio precisa ",y.jsx("br",{}),y.jsx("span",{className:"text-indigo-600",children:"em um só lugar."})]}),y.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed",children:"Controle de estoque, financeiro, PDV e delivery integrados nativamente. Aumente sua produtividade e tenha visão total da sua empresa com a VendaPX."}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[y.jsxs("a",{href:pr,className:"w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200",children:["Assinar por R$ 20/mês ",y.jsx(qr,{size:20})]}),y.jsx("a",{href:"#sistemas",className:"w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all",children:"Ver Sistemas"})]})]}),y.jsxs(zr.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2,duration:.8},className:"mt-20 relative",children:[y.jsx("div",{className:"bg-slate-900 rounded-3xl p-2 shadow-2xl overflow-hidden aspect-video max-w-5xl mx-auto border-4 border-slate-800",children:y.jsx("iframe",{className:"w-full h-full rounded-2xl",src:"https://www.youtube.com/embed/hg2nZNz_1Sg",title:"VendaPX - Apresentação",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),y.jsx("div",{className:"mt-8 flex justify-center",children:y.jsxs("a",{href:gr,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200",children:[y.jsx(fr,{})," Ficou com dúvidas? Fale comigo no WhatsApp!"]})}),y.jsx("div",{className:"absolute -top-6 -left-6 md:left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block",children:y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white",children:y.jsx(OC,{size:20})}),y.jsxs("div",{className:"text-left",children:[y.jsx("p",{className:"text-xs text-slate-500 font-bold uppercase",children:"Sincronização"}),y.jsx("p",{className:"text-sm font-bold",children:"Tempo Real"})]})]})}),y.jsx("div",{className:"absolute -bottom-6 -right-6 md:right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block",children:y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white",children:y.jsx(DC,{size:20})}),y.jsxs("div",{className:"text-left",children:[y.jsx("p",{className:"text-xs text-slate-500 font-bold uppercase",children:"Segurança"}),y.jsx("p",{className:"text-sm font-bold",children:"Dados Criptografados"})]})]})})]})]})}),y.jsx("section",{id:"sistemas",className:"py-24 bg-white",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-6",children:"Quatro Sistemas, Uma Só Solução"}),y.jsx("p",{className:"text-slate-600 max-w-2xl mx-auto text-lg",children:"Desenvolvemos ferramentas poderosas que funcionam de forma independente, mas brilham quando usadas em conjunto."})]}),y.jsxs("div",{className:"grid sm:grid-cols-2 xl:grid-cols-4 gap-8",children:[y.jsx(hr,{icon:EC,title:"Controle de Estoque",description:"Gestão completa de entradas, saídas e movimentações com inteligência.",items:["Gestão de múltiplos depósitos","Alertas de estoque baixo","Curva ABC de produtos","Relatórios de inventário","Entrada via XML de NF-e"],link:zo.estoque.url,accentColor:"bg-blue-100 text-blue-600",btnColor:"bg-blue-600 hover:bg-blue-700",cardBg:"bg-blue-50",cardBorder:"border-blue-100"}),y.jsx(hr,{icon:yC,title:"Sistema Financeiro",description:"Controle total do seu fluxo de caixa e saúde financeira da empresa.",items:["Contas a pagar e receber","Fluxo de caixa projetado","Conciliação bancária","DRE Gerencial automático","Emissão de boletos e notas"],link:zo.financeiro.url,accentColor:"bg-emerald-100 text-emerald-600",btnColor:"bg-emerald-600 hover:bg-emerald-700",cardBg:"bg-emerald-50",cardBorder:"border-emerald-100"}),y.jsx(hr,{icon:RC,title:"Sistema PDV",description:"Vendas rápidas e intuitivas para o seu balcão ou frente de loja.",items:["Vendas em poucos cliques","Integração com balanças","Múltiplas formas de pagamento","Fechamento de caixa cego","Funciona offline e online"],link:zo.pdv.url,accentColor:"bg-orange-100 text-orange-500",btnColor:"bg-orange-500 hover:bg-orange-600",cardBg:"bg-orange-50",cardBorder:"border-orange-100"}),y.jsx(hr,{icon:dC,title:"SmartDelivery",description:"Sua loja online no WhatsApp: cardápio, pedidos em tempo real e link próprio da sua marca.",items:["Loja pública com link próprio","Cardápio montado a partir do estoque","Pedidos no painel e no WhatsApp","Status de novo até entregue","Equipe com acesso por perfil"],link:zo.delivery.url,accentColor:"bg-rose-100 text-rose-600",btnColor:"bg-rose-600 hover:bg-rose-700",cardBg:"bg-rose-50",cardBorder:"border-rose-100"})]})]})}),y.jsx("section",{id:"delivery",className:"py-24 bg-slate-900 text-white overflow-hidden",children:y.jsx("div",{className:"max-w-7xl mx-auto px-4",children:y.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-16",children:[y.jsxs("div",{className:"lg:w-1/2",children:[y.jsx("span",{className:"inline-block px-4 py-1.5 bg-rose-500/15 text-rose-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6",children:"SmartDelivery"}),y.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-6 leading-tight",children:["A loja da sua empresa ",y.jsx("br",{}),y.jsx("span",{className:"text-rose-400",children:"no WhatsApp."})]}),y.jsxs("p",{className:"text-slate-300 text-lg mb-8 leading-relaxed",children:["Monte o cardápio a partir do seu estoque, compartilhe o link da loja e receba os pedidos no painel e no WhatsApp do estabelecimento. Acompanhe cada pedido do ",y.jsx("b",{className:"text-white",children:"novo"})," até o ",y.jsx("b",{className:"text-white",children:"entregue"}),"."]}),y.jsx("ul",{className:"space-y-4 mb-10",children:["Loja pública com link próprio da sua marca","Cardápio montado a partir do estoque VendaPX","Pedidos recebidos no painel e disparados no WhatsApp","Status em tempo real: novo, confirmado, preparando, a caminho, entregue","Equipe com acesso por perfil (leitura ou gestão)"].map(t=>y.jsxs("li",{className:"flex items-start gap-3 text-slate-300",children:[y.jsx(Po,{size:20,className:"text-rose-400 shrink-0 mt-0.5"}),y.jsx("span",{children:t})]},t))}),y.jsxs("a",{href:zo.delivery.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-600 transition-all shadow-xl shadow-rose-500/20",children:["Acessar o Delivery ",y.jsx(qr,{size:18})]})]}),y.jsx("div",{className:"lg:w-1/2",children:y.jsxs("div",{className:"bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl",children:[y.jsx("h3",{className:"text-2xl font-bold mb-2",children:"Como acessar"}),y.jsx("p",{className:"text-slate-500 text-sm mb-8",children:"O Delivery é um sistema separado, com endereço e login próprios."}),y.jsx("ol",{className:"space-y-6",children:[{t:"Abra o endereço do sistema",d:"delivery.vendapx.com.br"},{t:"Clique em “Acessar painel”",d:"A tela inicial mostra a apresentação da loja online."},{t:"Entre com e-mail e senha",d:"Use a conta da sua empresa. Esqueceu a senha? Em “Esqueceu sua senha?” enviamos um link por e-mail."},{t:"Configure sua loja",d:"Na aba “Minha loja” monte o cardápio e copie o link da sua vitrine."},{t:"Divulgue a vitrine",d:"O cliente pede sem login em delivery.vendapx.com.br/s/sua-loja e o pedido chega no painel e no WhatsApp."}].map((t,s)=>y.jsxs("li",{className:"flex gap-4",children:[y.jsx("span",{className:"shrink-0 w-8 h-8 rounded-full bg-rose-500 text-white text-sm font-bold flex items-center justify-center",children:s+1}),y.jsxs("span",{children:[y.jsx("b",{className:"block mb-0.5",children:t.t}),y.jsx("span",{className:"text-slate-500 text-sm",children:t.d})]})]},t.t))}),y.jsx("div",{className:"mt-8 pt-6 border-t border-slate-100 text-sm text-slate-500",children:"Dúvidas para liberar um acesso da equipe? Fale com o suporte pelo WhatsApp."})]})})]})})}),y.jsx("section",{id:"integracao",className:"py-24 bg-slate-50 overflow-hidden",children:y.jsx("div",{className:"max-w-7xl mx-auto px-4",children:y.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-16",children:[y.jsxs("div",{className:"lg:w-1/2",children:[y.jsxs("h2",{className:"text-4xl font-bold mb-8 leading-tight",children:["A mágica acontece na ",y.jsx("br",{}),y.jsx("span",{className:"text-indigo-600",children:"integração total."})]}),y.jsxs("div",{className:"space-y-8",children:[y.jsxs("div",{className:"flex gap-4",children:[y.jsx("div",{className:"shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600",children:y.jsx(CC,{size:24})}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-xl font-bold mb-2",children:"Ecossistema Unificado"}),y.jsx("p",{className:"text-slate-600",children:"Ao realizar uma venda no PDV, o estoque é baixado automaticamente e o financeiro é atualizado instantaneamente."})]})]}),y.jsxs("div",{className:"flex gap-4",children:[y.jsx("div",{className:"shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600",children:y.jsx(pC,{size:24})}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-xl font-bold mb-2",children:"Dados que Conversam"}),y.jsx("p",{className:"text-slate-600",children:"Chega de planilhas paralelas. Seus dados financeiros refletem exatamente o que acontece na sua operação de estoque e vendas."})]})]})]})]}),y.jsxs("div",{className:"lg:w-1/2 relative",children:[y.jsx("div",{className:"relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100",children:y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:"p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-center",children:[y.jsx("p",{className:"text-2xl font-bold text-indigo-600",children:"100%"}),y.jsx("p",{className:"text-xs font-bold uppercase text-slate-500",children:"Integrado"})]}),y.jsxs("div",{className:"p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center",children:[y.jsx("p",{className:"text-2xl font-bold text-emerald-600",children:"0"}),y.jsx("p",{className:"text-xs font-bold uppercase text-slate-500",children:"Retrabalho"})]}),y.jsxs("div",{className:"col-span-2 p-6 bg-slate-900 rounded-2xl text-white",children:[y.jsx("p",{className:"text-sm opacity-60 mb-2",children:"Status do Sistema"}),y.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[y.jsx("div",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-pulse"}),y.jsx("p",{className:"text-lg font-mono",children:"Sincronização Ativa"})]}),y.jsx("div",{className:"h-2 bg-slate-800 rounded-full overflow-hidden",children:y.jsx(zr.div,{initial:{width:0},whileInView:{width:"100%"},transition:{duration:2,repeat:1/0},className:"h-full bg-indigo-500"})})]})]})}),y.jsx("div",{className:"absolute -top-12 -right-12 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30"}),y.jsx("div",{className:"absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30"})]})]})})}),y.jsx("section",{id:"precos",className:"py-24 bg-white",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[y.jsx("h2",{className:"text-4xl font-bold mb-6",children:"Preço Simples e Transparente"}),y.jsx("p",{className:"text-slate-600 mb-16 text-lg",children:"Sem taxas escondidas, sem limites de usuários. Acesso total."}),y.jsxs("div",{className:"max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border-2 border-indigo-600 p-12 relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 right-0 bg-indigo-600 text-white px-8 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest",children:"Plano Único"}),y.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Acesso Completo VendaPX"}),y.jsxs("div",{className:"flex items-baseline justify-center gap-2 mb-8",children:[y.jsx("span",{className:"text-2xl font-bold text-slate-400",children:"R$"}),y.jsx("span",{className:"text-7xl font-black text-slate-900",children:"20"}),y.jsx("span",{className:"text-xl font-bold text-slate-400",children:"/mês"})]}),y.jsxs("ul",{className:"text-left space-y-4 mb-10",children:[y.jsxs("li",{className:"flex items-center gap-3 font-medium",children:[y.jsx(Po,{size:20,className:"text-emerald-500"}),"Controle de Estoque Completo"]}),y.jsxs("li",{className:"flex items-center gap-3 font-medium",children:[y.jsx(Po,{size:20,className:"text-emerald-500"}),"Sistema Financeiro Completo"]}),y.jsxs("li",{className:"flex items-center gap-3 font-medium",children:[y.jsx(Po,{size:20,className:"text-emerald-500"}),"Sistema PDV Completo"]}),y.jsxs("li",{className:"flex items-center gap-3 font-medium",children:[y.jsx(Po,{size:20,className:"text-emerald-500"}),"Delivery e loja online no WhatsApp"]}),y.jsxs("li",{className:"flex items-center gap-3 font-medium",children:[y.jsx(Po,{size:20,className:"text-emerald-500"}),"Integração Nativa entre Sistemas"]}),y.jsxs("li",{className:"flex items-center gap-3 font-medium",children:[y.jsx(Po,{size:20,className:"text-emerald-500"}),"Suporte Especializado"]}),y.jsxs("li",{className:"flex items-center gap-3 font-medium",children:[y.jsx(Po,{size:20,className:"text-emerald-500"}),"Atualizações Gratuitas"]})]}),y.jsx("a",{href:pr,className:"block w-full bg-indigo-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200",children:"Assinar Agora"}),y.jsxs("a",{href:gr,target:"_blank",rel:"noopener noreferrer",className:"mt-4 flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-4 rounded-2xl text-base font-bold hover:bg-emerald-600 transition-all",children:[y.jsx(fr,{})," Tirar dúvidas pelo WhatsApp"]}),y.jsx("p",{className:"mt-6 text-sm text-slate-500",children:"Cancelamento fácil a qualquer momento."})]})]})}),y.jsx("section",{className:"py-20 bg-slate-900 text-white",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[y.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-8",children:"Pronto para transformar sua gestão?"}),y.jsx("p",{className:"text-slate-400 text-xl mb-12 max-w-2xl mx-auto",children:"Junte-se a centenas de empresas que já utilizam o ecossistema VendaPX para crescer com organização."}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[y.jsxs("a",{href:pr,className:"inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all",children:["Começar Agora ",y.jsx(qr,{size:24})]}),y.jsxs("a",{href:gr,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-600 transition-all",children:[y.jsx(fr,{})," Falar no WhatsApp"]})]})]})}),y.jsx("footer",{className:"py-12 bg-white border-t border-slate-100",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col md:row items-center justify-between gap-8",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm",children:"V"}),y.jsx("span",{className:"text-xl font-bold tracking-tight",children:"VendaPX"})]}),y.jsxs("p",{className:"text-slate-500 text-sm",children:["© ",new Date().getFullYear()," VendaPX - Gestão Inteligente. Todos os direitos reservados."]}),y.jsxs("div",{className:"flex items-center gap-6 text-sm font-medium text-slate-500",children:[y.jsx("a",{href:"#",className:"hover:text-indigo-600",children:"Termos"}),y.jsx("a",{href:"#",className:"hover:text-indigo-600",children:"Privacidade"}),y.jsx("a",{href:"https://vendapx.com.br",className:"hover:text-indigo-600",children:"vendapx.com.br"})]})]})}),y.jsxs("a",{href:gr,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-emerald-600 transition-all group","aria-label":"Falar no WhatsApp",children:[y.jsx(fr,{}),y.jsx("span",{className:"text-sm font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap",children:"Falar comigo"})]})]})}function wz(){return y.jsxs(yx,{children:[y.jsxs(Ei,{path:"/blog",element:y.jsx(zz,{}),children:[y.jsx(Ei,{index:!0,element:y.jsx(Mz,{})}),y.jsx(Ei,{path:":slug",element:y.jsx(Oz,{})})]}),y.jsx(Ei,{path:"*",element:y.jsx(Nz,{})})]})}vy.createRoot(document.getElementById("root")).render(y.jsx(z.StrictMode,{children:y.jsx(Gx,{children:y.jsx(wz,{})})}));
