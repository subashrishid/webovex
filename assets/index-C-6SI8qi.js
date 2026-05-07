(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function oS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ph={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function lS(){if(q_)return Oo;q_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=t,Oo.jsx=i,Oo.jsxs=i,Oo}var j_;function cS(){return j_||(j_=1,ph.exports=lS()),ph.exports}var ot=cS(),mh={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function uS(){if(Y_)return ee;Y_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function v(L,K,ht){this.props=L,this.context=K,this.refs=M,this.updater=ht||E}v.prototype.isReactComponent={},v.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function N(){}N.prototype=v.prototype;function U(L,K,ht){this.props=L,this.context=K,this.refs=M,this.updater=ht||E}var D=U.prototype=new N;D.constructor=U,b(D,v.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function w(L,K,ht){var W=ht.ref;return{$$typeof:o,type:L,key:K,ref:W!==void 0?W:null,props:ht}}function R(L,K){return w(L.type,K,L.props)}function F(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function et(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ht){return K[ht]})}var at=/\/+/g;function ut(L,K){return typeof L=="object"&&L!==null&&L.key!=null?et(""+L.key):K.toString(36)}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,K,ht,W,ct){var Mt=typeof L;(Mt==="undefined"||Mt==="boolean")&&(L=null);var Et=!1;if(L===null)Et=!0;else switch(Mt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(L.$$typeof){case o:case t:Et=!0;break;case g:return Et=L._init,P(Et(L._payload),K,ht,W,ct)}}if(Et)return ct=ct(L),Et=W===""?"."+ut(L,0):W,G(ct)?(ht="",Et!=null&&(ht=Et.replace(at,"$&/")+"/"),P(ct,K,ht,"",function(ne){return ne})):ct!=null&&(F(ct)&&(ct=R(ct,ht+(ct.key==null||L&&L.key===ct.key?"":(""+ct.key).replace(at,"$&/")+"/")+Et)),K.push(ct)),1;Et=0;var Ot=W===""?".":W+":";if(G(L))for(var Ht=0;Ht<L.length;Ht++)W=L[Ht],Mt=Ot+ut(W,Ht),Et+=P(W,K,ht,Mt,ct);else if(Ht=S(L),typeof Ht=="function")for(L=Ht.call(L),Ht=0;!(W=L.next()).done;)W=W.value,Mt=Ot+ut(W,Ht++),Et+=P(W,K,ht,Mt,ct);else if(Mt==="object"){if(typeof L.then=="function")return P(mt(L),K,ht,W,ct);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Et}function J(L,K,ht){if(L==null)return L;var W=[],ct=0;return P(L,W,"","",function(Mt){return K.call(ht,Mt,ct++)}),W}function Q(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(ht){(L._status===0||L._status===-1)&&(L._status=1,L._result=ht)},function(ht){(L._status===0||L._status===-1)&&(L._status=2,L._result=ht)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var Tt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},pt={map:J,forEach:function(L,K,ht){J(L,function(){K.apply(this,arguments)},ht)},count:function(L){var K=0;return J(L,function(){K++}),K},toArray:function(L){return J(L,function(K){return K})||[]},only:function(L){if(!F(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ee.Activity=_,ee.Children=pt,ee.Component=v,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=U,ee.StrictMode=s,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ee.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},ee.cache=function(L){return function(){return L.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(L,K,ht){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var W=b({},L.props),ct=L.key;if(K!=null)for(Mt in K.key!==void 0&&(ct=""+K.key),K)!H.call(K,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&K.ref===void 0||(W[Mt]=K[Mt]);var Mt=arguments.length-2;if(Mt===1)W.children=ht;else if(1<Mt){for(var Et=Array(Mt),Ot=0;Ot<Mt;Ot++)Et[Ot]=arguments[Ot+2];W.children=Et}return w(L.type,ct,W)},ee.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ee.createElement=function(L,K,ht){var W,ct={},Mt=null;if(K!=null)for(W in K.key!==void 0&&(Mt=""+K.key),K)H.call(K,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ct[W]=K[W]);var Et=arguments.length-2;if(Et===1)ct.children=ht;else if(1<Et){for(var Ot=Array(Et),Ht=0;Ht<Et;Ht++)Ot[Ht]=arguments[Ht+2];ct.children=Ot}if(L&&L.defaultProps)for(W in Et=L.defaultProps,Et)ct[W]===void 0&&(ct[W]=Et[W]);return w(L,Mt,ct)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(L){return{$$typeof:d,render:L}},ee.isValidElement=F,ee.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Q}},ee.memo=function(L,K){return{$$typeof:p,type:L,compare:K===void 0?null:K}},ee.startTransition=function(L){var K=z.T,ht={};z.T=ht;try{var W=L(),ct=z.S;ct!==null&&ct(ht,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(B,Tt)}catch(Mt){Tt(Mt)}finally{K!==null&&ht.types!==null&&(K.types=ht.types),z.T=K}},ee.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ee.use=function(L){return z.H.use(L)},ee.useActionState=function(L,K,ht){return z.H.useActionState(L,K,ht)},ee.useCallback=function(L,K){return z.H.useCallback(L,K)},ee.useContext=function(L){return z.H.useContext(L)},ee.useDebugValue=function(){},ee.useDeferredValue=function(L,K){return z.H.useDeferredValue(L,K)},ee.useEffect=function(L,K){return z.H.useEffect(L,K)},ee.useEffectEvent=function(L){return z.H.useEffectEvent(L)},ee.useId=function(){return z.H.useId()},ee.useImperativeHandle=function(L,K,ht){return z.H.useImperativeHandle(L,K,ht)},ee.useInsertionEffect=function(L,K){return z.H.useInsertionEffect(L,K)},ee.useLayoutEffect=function(L,K){return z.H.useLayoutEffect(L,K)},ee.useMemo=function(L,K){return z.H.useMemo(L,K)},ee.useOptimistic=function(L,K){return z.H.useOptimistic(L,K)},ee.useReducer=function(L,K,ht){return z.H.useReducer(L,K,ht)},ee.useRef=function(L){return z.H.useRef(L)},ee.useState=function(L){return z.H.useState(L)},ee.useSyncExternalStore=function(L,K,ht){return z.H.useSyncExternalStore(L,K,ht)},ee.useTransition=function(){return z.H.useTransition()},ee.version="19.2.6",ee}var Z_;function Kd(){return Z_||(Z_=1,mh.exports=uS()),mh.exports}var oa=Kd();const fS=oS(oa);var gh={exports:{}},zo={},_h={exports:{}},vh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function hS(){return K_||(K_=1,(function(o){function t(P,J){var Q=P.length;P.push(J);t:for(;0<Q;){var Tt=Q-1>>>1,pt=P[Tt];if(0<l(pt,J))P[Tt]=J,P[Q]=pt,Q=Tt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var J=P[0],Q=P.pop();if(Q!==J){P[0]=Q;t:for(var Tt=0,pt=P.length,L=pt>>>1;Tt<L;){var K=2*(Tt+1)-1,ht=P[K],W=K+1,ct=P[W];if(0>l(ht,Q))W<pt&&0>l(ct,ht)?(P[Tt]=ct,P[W]=Q,Tt=W):(P[Tt]=ht,P[K]=Q,Tt=K);else if(W<pt&&0>l(ct,Q))P[Tt]=ct,P[W]=Q,Tt=W;else break t}}return J}function l(P,J){var Q=P.sortIndex-J.sortIndex;return Q!==0?Q:P.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,S=!1,E=!1,b=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var J=i(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=P)s(p),J.sortIndex=J.expirationTime,t(m,J);else break;J=i(p)}}function G(P){if(b=!1,D(P),!E)if(i(m)!==null)E=!0,B||(B=!0,et());else{var J=i(p);J!==null&&mt(G,J.startTime-P)}}var B=!1,z=-1,H=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<H)}function F(){if(M=!1,B){var P=o.unstable_now();w=P;var J=!0;try{t:{E=!1,b&&(b=!1,N(z),z=-1),S=!0;var Q=x;try{e:{for(D(P),_=i(m);_!==null&&!(_.expirationTime>P&&R());){var Tt=_.callback;if(typeof Tt=="function"){_.callback=null,x=_.priorityLevel;var pt=Tt(_.expirationTime<=P);if(P=o.unstable_now(),typeof pt=="function"){_.callback=pt,D(P),J=!0;break e}_===i(m)&&s(m),D(P)}else s(m);_=i(m)}if(_!==null)J=!0;else{var L=i(p);L!==null&&mt(G,L.startTime-P),J=!1}}break t}finally{_=null,x=Q,S=!1}J=void 0}}finally{J?et():B=!1}}}var et;if(typeof U=="function")et=function(){U(F)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ut=at.port2;at.port1.onmessage=F,et=function(){ut.postMessage(null)}}else et=function(){v(F,0)};function mt(P,J){z=v(function(){P(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var Q=x;x=J;try{return P()}finally{x=Q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,J){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=x;x=P;try{return J()}finally{x=Q}},o.unstable_scheduleCallback=function(P,J,Q){var Tt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Tt+Q:Tt):Q=Tt,P){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=Q+pt,P={id:g++,callback:J,priorityLevel:P,startTime:Q,expirationTime:pt,sortIndex:-1},Q>Tt?(P.sortIndex=Q,t(p,P),i(m)===null&&P===i(p)&&(b?(N(z),z=-1):b=!0,mt(G,Q-Tt))):(P.sortIndex=pt,t(m,P),E||S||(E=!0,B||(B=!0,et()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var J=x;return function(){var Q=x;x=J;try{return P.apply(this,arguments)}finally{x=Q}}}})(vh)),vh}var Q_;function dS(){return Q_||(Q_=1,_h.exports=hS()),_h.exports}var yh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function pS(){if(J_)return Dn;J_=1;var o=Kd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.6",Dn}var $_;function mS(){if($_)return yh.exports;$_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),yh.exports=pS(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function gS(){if(t0)return zo;t0=1;var o=dS(),t=Kd(),i=mS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var y=!1,T=u.child;T;){if(T===a){y=!0,a=u,r=f;break}if(T===r){y=!0,r=u,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,r=u;break}if(T===r){y=!0,r=f,a=u;break}T=T.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var mt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Tt=[],pt=-1;function L(e){return{current:e}}function K(e){0>pt||(e.current=Tt[pt],Tt[pt]=null,pt--)}function ht(e,n){pt++,Tt[pt]=e.current,e.current=n}var W=L(null),ct=L(null),Mt=L(null),Et=L(null);function Ot(e,n){switch(ht(Mt,n),ht(ct,e),ht(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?m_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=m_(n),e=g_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(W),ht(W,e)}function Ht(){K(W),K(ct),K(Mt)}function ne(e){e.memoizedState!==null&&ht(Et,e);var n=W.current,a=g_(n,e.type);n!==a&&(ht(ct,e),ht(W,a))}function Ne(e){ct.current===e&&(K(W),K(ct)),Et.current===e&&(K(Et),Do._currentValue=Q)}var fe,je;function V(e){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",je=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+e+je}var Cn=!1;function ue(e,n){if(!e||Cn)return"";Cn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(lt){var nt=lt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(lt){nt=lt}e.call(yt.prototype)}}else{try{throw Error()}catch(lt){nt=lt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(lt){if(lt&&nt&&typeof lt.stack=="string")return[lt.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var I=y.split(`
`),tt=T.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===tt.length)for(r=I.length-1,u=tt.length-1;1<=r&&0<=u&&I[r]!==tt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==tt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==tt[u]){var dt=`
`+I[r].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=r&&0<=u);break}}}finally{Cn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?V(a):""}function _e(e,n){switch(e.tag){case 26:case 27:case 5:return V(e.type);case 16:return V("Lazy");case 13:return e.child!==n&&n!==null?V("Suspense Fallback"):V("Suspense");case 19:return V("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return V("Activity");default:return""}}function qt(e){try{var n="",a=null;do n+=_e(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,Wt=o.unstable_scheduleCallback,O=o.unstable_cancelCallback,A=o.unstable_shouldYield,it=o.unstable_requestPaint,gt=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,vt=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,ve=o.unstable_IdlePriority,At=o.log,It=o.unstable_setDisableYieldValue,jt=null,Xt=null;function Nt(e){if(typeof At=="function"&&It(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(jt,e)}catch{}}var Jt=Math.clz32?Math.clz32:q,ae=Math.log,Oe=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(ae(e)/Oe|0)|0}var Rt=256,ft=262144,xt=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=Ct(r):(y&=T,y!==0?u=Ct(y):a||(a=T&~e,a!==0&&(u=Ct(a))))):(T=r&~f,T!==0?u=Ct(T):y!==0?u=Ct(y):a||(a=r&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ye(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function un(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function yn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,r,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=y&~a;0<a;){var dt=31-Jt(a),yt=1<<dt;T[dt]=0,I[dt]=-1;var nt=tt[dt];if(nt!==null)for(tt[dt]=null,dt=0;dt<nt.length;dt++){var lt=nt[dt];lt!==null&&(lt.lane&=-536870913)}a&=~yt}r!==0&&Vr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Vr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Jt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Jt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function bi(e,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xr(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:F_(e.type))}function Za(e,n){var a=J.p;try{return J.p=e,n()}finally{J.p=a}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,xn="__reactProps$"+mi,zi="__reactContainer$"+mi,Wr="__reactEvents$"+mi,ou="__reactListeners$"+mi,lu="__reactHandles$"+mi,$o="__reactResources$"+mi,Ka="__reactMarker$"+mi;function C(e){delete e[Ke],delete e[xn],delete e[Wr],delete e[ou],delete e[lu]}function j(e){var n=e[Ke];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=E_(e);e!==null;){if(a=e[Ke])return a;e=E_(e)}return n}e=a,a=e.parentNode}return null}function st(e){if(e=e[Ke]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Y(e){var n=e[$o];return n||(n=e[$o]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[Ka]=!0}var Ut=new Set,Pt={};function zt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Pt[e]=n,e=0;e<n.length;e++)Ut.add(n[e])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yt={},ye={};function Te(e){return De.call(ye,e)?!0:De.call(Yt,e)?!1:te.test(e)?ye[e]=!0:(Yt[e]=!0,!1)}function Xe(e,n,a){if(Te(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ge(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function se(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function an(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nn(e){if(!e._valueTracker){var n=an(e)?"checked":"value";e._valueTracker=be(e,n,""+e[n])}}function Pi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=an(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qa=/[\n"\\]/g;function he(e){return e.replace(Qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wn(e,n,a,r,u,f,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gt(n)):e.value!==""+Gt(n)&&(e.value=""+Gt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?fn(e,y,Gt(n)):a!=null?fn(e,y,Gt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Gt(T):e.removeAttribute("name")}function On(e,n,a,r,u,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Nn(e);return}a=a!=null?""+Gt(a):"",n=n!=null?""+Gt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Nn(e)}function fn(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Gt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ws(e,n,a){if(n!=null&&(n=""+Gt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Gt(a):""}function Ai(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(mt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Gt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Nn(e)}function Ds(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ny=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hp(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ny.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function dp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&hp(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&hp(e,f,n[f])}function cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return ay.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var uu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ls=null;function pp(e){var n=st(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(wn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[xn]||null;if(!u)throw Error(s(90));wn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Pi(r)}break t;case"textarea":ws(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var hu=!1;function mp(e,n,a){if(hu)return e(n,a);hu=!0;try{var r=e(n);return r}finally{if(hu=!1,(Us!==null||Ls!==null)&&(Gl(),Us&&(n=Us,e=Ls,Ls=Us=null,pp(n),e)))for(n=0;n<e.length;n++)pp(e[n])}}function qr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Ii)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){du=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{du=!1}var ha=null,pu=null,el=null;function gp(){if(el)return el;var e,n=pu,a=n.length,r,u="value"in ha?ha.value:ha.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===u[f-r];r++);return el=u.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function _p(){return!1}function Fn(e){function n(a,r,u,f,y){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:_p,this.isPropagationStopped=_p,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Fn(Ja),Yr=_({},Ja,{view:0,detail:0}),sy=Fn(Yr),mu,gu,Zr,sl=_({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(mu=e.screenX-Zr.screenX,gu=e.screenY-Zr.screenY):gu=mu=0,Zr=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),vp=Fn(sl),ry=_({},sl,{dataTransfer:0}),oy=Fn(ry),ly=_({},Yr,{relatedTarget:0}),_u=Fn(ly),cy=_({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=Fn(cy),fy=_({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hy=Fn(fy),dy=_({},Ja,{data:0}),yp=Fn(dy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gy[e])?!!n[e]:!1}function vu(){return _y}var vy=_({},Yr,{key:function(e){if(e.key){var n=py[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yy=Fn(vy),xy=_({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Fn(xy),Sy=_({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),My=Fn(Sy),Ey=_({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Fn(Ey),by=_({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=Fn(by),Ry=_({},Ja,{newState:0,oldState:0}),Cy=Fn(Ry),wy=[9,13,27,32],yu=Ii&&"CompositionEvent"in window,Kr=null;Ii&&"documentMode"in document&&(Kr=document.documentMode);var Dy=Ii&&"TextEvent"in window&&!Kr,Sp=Ii&&(!yu||Kr&&8<Kr&&11>=Kr),Mp=" ",Ep=!1;function Tp(e,n){switch(e){case"keyup":return wy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function Uy(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Ep=!0,Mp);case"textInput":return e=n.data,e===Mp&&Ep?null:e;default:return null}}function Ly(e,n){if(Ns)return e==="compositionend"||!yu&&Tp(e,n)?(e=gp(),el=pu=ha=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sp&&n.locale!=="ko"?null:n.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ny[e.type]:n==="textarea"}function Rp(e,n,a,r){Us?Ls?Ls.push(r):Ls=[r]:Us=r,n=Yl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Qr=null,Jr=null;function Oy(e){c_(e,0)}function rl(e){var n=rt(e);if(Pi(n))return e}function Cp(e,n){if(e==="change")return n}var wp=!1;if(Ii){var xu;if(Ii){var Su="oninput"in document;if(!Su){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Su=typeof Dp.oninput=="function"}xu=Su}else xu=!1;wp=xu&&(!document.documentMode||9<document.documentMode)}function Up(){Qr&&(Qr.detachEvent("onpropertychange",Lp),Jr=Qr=null)}function Lp(e){if(e.propertyName==="value"&&rl(Jr)){var n=[];Rp(n,Jr,e,fu(e)),mp(Oy,n)}}function zy(e,n,a){e==="focusin"?(Up(),Qr=n,Jr=a,Qr.attachEvent("onpropertychange",Lp)):e==="focusout"&&Up()}function Py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Jr)}function By(e,n){if(e==="click")return rl(n)}function Iy(e,n){if(e==="input"||e==="change")return rl(n)}function Fy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Fy;function $r(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!De.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Op(e,n){var a=Np(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Np(a)}}function zp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Hy=Ii&&"documentMode"in document&&11>=document.documentMode,Os=null,Eu=null,to=null,Tu=!1;function Bp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||Os==null||Os!==mn(r)||(r=Os,"selectionStart"in r&&Mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&$r(to,r)||(to=r,r=Yl(Eu,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Os)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},bu={},Ip={};Ii&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function ts(e){if(bu[e])return bu[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ip)return bu[e]=n[a];return e}var Fp=ts("animationend"),Hp=ts("animationiteration"),Gp=ts("animationstart"),Gy=ts("transitionrun"),Vy=ts("transitionstart"),ky=ts("transitioncancel"),Vp=ts("transitionend"),kp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function gi(e,n){kp.set(e,n),zt(n,[e])}var ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Ps=0,Ru=0;function ll(){for(var e=Ps,n=Ru=Ps=0;n<e;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&u!==null){var y=r.pending;y===null?u.next=u:(u.next=y.next,y.next=u),r.pending=u}f!==0&&Xp(a,u,f)}}function cl(e,n,a,r){ii[Ps++]=e,ii[Ps++]=n,ii[Ps++]=a,ii[Ps++]=r,Ru|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Cu(e,n,a,r){return cl(e,n,a,r),ul(e)}function es(e,n){return cl(e,null,null,n),ul(e)}function Xp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Jt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<Eo)throw Eo=0,If=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Bs={};function Xy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,r){return new Xy(e,n,a,r)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,r,u,f){var y=0;if(r=e,typeof e=="function")wu(e)&&(y=1);else if(typeof e=="string")y=Zx(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=jn(31,a,n,u),e.elementType=w,e.lanes=f,e;case b:return ns(a.children,u,f,n);case M:y=8,u|=24;break;case v:return e=jn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case G:return e=jn(13,a,n,u),e.elementType=G,e.lanes=f,e;case B:return e=jn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case N:y=9;break t;case D:y=11;break t;case z:y=14;break t;case H:y=16,r=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=jn(y,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ns(e,n,a,r){return e=jn(7,e,r,n),e.lanes=a,e}function Du(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function qp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function Uu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var jp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qt(n)},jp.set(e,n),n)}return{value:e,source:n,stack:qt(n)}}var Is=[],Fs=0,hl=null,eo=0,si=[],ri=0,da=null,Ri=1,Ci="";function Hi(e,n){Is[Fs++]=eo,Is[Fs++]=hl,hl=e,eo=n}function Yp(e,n,a){si[ri++]=Ri,si[ri++]=Ci,si[ri++]=da,da=e;var r=Ri;e=Ci;var u=32-Jt(r)-1;r&=~(1<<u),a+=1;var f=32-Jt(n)+u;if(30<f){var y=u-u%5;f=(r&(1<<y)-1).toString(32),r>>=y,u-=y,Ri=1<<32-Jt(n)+u|a<<u|r,Ci=f+e}else Ri=1<<f|a<<u|r,Ci=e}function Lu(e){e.return!==null&&(Hi(e,1),Yp(e,1,0))}function Nu(e){for(;e===hl;)hl=Is[--Fs],Is[Fs]=null,eo=Is[--Fs],Is[Fs]=null;for(;e===da;)da=si[--ri],si[ri]=null,Ci=si[--ri],si[ri]=null,Ri=si[--ri],si[ri]=null}function Zp(e,n){si[ri++]=Ri,si[ri++]=Ci,si[ri++]=da,Ri=n.id,Ci=n.overflow,da=e}var Sn=null,We=null,Me=!1,pa=null,oi=!1,Ou=Error(s(519));function ma(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(ai(n,e)),Ou}function Kp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Ke]=e,n[xn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)pe(bo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),On(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Ai(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||d_(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||ma(e,!0)}function Qp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Sn=Sn.return}}function Hs(e){if(e!==Sn)return!1;if(!Me)return Qp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$f(e.type,e.memoizedProps)),a=!a),a&&We&&ma(e),Qp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=M_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=M_(e)}else n===27?(n=We,wa(e.type)?(e=ah,ah=null,We=e):We=n):We=Sn?ci(e.stateNode.nextSibling):null;return!0}function is(){We=Sn=null,Me=!1}function zu(){var e=pa;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),pa=null),e}function no(e){pa===null?pa=[e]:pa.push(e)}var Pu=L(null),as=null,Gi=null;function ga(e,n,a){ht(Pu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=Pu.current,K(Pu)}function Bu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Iu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Bu(f.return,a,e),r||(y=null);break t}f=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Bu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Gs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var T=u.type;qn(u.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(u===Et.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}u=u.return}e!==null&&Iu(n,e,a,r),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Jp(as,e)}function pl(e,n){return as===null&&ss(e),Jp(e,n)}function Jp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var Wy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qy=o.unstable_scheduleCallback,jy=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new Wy,data:new Map,refCount:0}}function io(e){e.refCount--,e.refCount===0&&qy(jy,function(){e.controller.abort()})}var ao=null,Hu=0,Vs=0,ks=null;function Yy(e,n){if(ao===null){var a=ao=[];Hu=0,Vs=Xf(),ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Hu++,n.then($p,$p),n}function $p(){if(--Hu===0&&ao!==null){ks!==null&&(ks.status="fulfilled");var e=ao;ao=null,Vs=0,ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Zy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var tm=P.S;P.S=function(e,n){Bg=gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yy(e,n),tm!==null&&tm(e,n)};var rs=L(null);function Gu(){var e=rs.current;return e!==null?e:Ve.pooledCache}function ml(e,n){n===null?ht(rs,rs.current):ht(rs,n.pool)}function em(){var e=Gu();return e===null?null:{parent:sn._currentValue,pool:e}}var Xs=Error(s(460)),Vu=Error(s(474)),gl=Error(s(542)),_l={then:function(){}};function nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function im(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,sm(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,sm(e),e}throw ls=n,Xs}}function os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ls=a,Xs):a}}var ls=null;function am(){if(ls===null)throw Error(s(459));var e=ls;return ls=null,e}function sm(e){if(e===Xs||e===gl)throw Error(s(483))}var Ws=null,so=0;function vl(e){var n=so;return so+=1,Ws===null&&(Ws=[]),im(Ws,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rm(e){function n(Z,k){if(e){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Fi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function y(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,k,$,_t){return k===null||k.tag!==6?(k=Du($,Z.mode,_t),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function I(Z,k,$,_t){var Zt=$.type;return Zt===b?dt(Z,k,$.props.children,_t,$.key):k!==null&&(k.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===H&&os(Zt)===k.type)?(k=u(k,$.props),ro(k,$),k.return=Z,k):(k=fl($.type,$.key,$.props,null,Z.mode,_t),ro(k,$),k.return=Z,k)}function tt(Z,k,$,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Uu($,Z.mode,_t),k.return=Z,k):(k=u(k,$.children||[]),k.return=Z,k)}function dt(Z,k,$,_t,Zt){return k===null||k.tag!==7?(k=ns($,Z.mode,_t,Zt),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function yt(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Du(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return $=fl(k.type,k.key,k.props,null,Z.mode,$),ro($,k),$.return=Z,$;case E:return k=Uu(k,Z.mode,$),k.return=Z,k;case H:return k=os(k),yt(Z,k,$)}if(mt(k)||et(k))return k=ns(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return yt(Z,vl(k),$);if(k.$$typeof===U)return yt(Z,pl(Z,k),$);yl(Z,k)}return null}function nt(Z,k,$,_t){var Zt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Zt!==null?null:T(Z,k,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===Zt?I(Z,k,$,_t):null;case E:return $.key===Zt?tt(Z,k,$,_t):null;case H:return $=os($),nt(Z,k,$,_t)}if(mt($)||et($))return Zt!==null?null:dt(Z,k,$,_t,null);if(typeof $.then=="function")return nt(Z,k,vl($),_t);if($.$$typeof===U)return nt(Z,k,pl(Z,$),_t);yl(Z,$)}return null}function lt(Z,k,$,_t,Zt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get($)||null,T(k,Z,""+_t,Zt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case S:return Z=Z.get(_t.key===null?$:_t.key)||null,I(k,Z,_t,Zt);case E:return Z=Z.get(_t.key===null?$:_t.key)||null,tt(k,Z,_t,Zt);case H:return _t=os(_t),lt(Z,k,$,_t,Zt)}if(mt(_t)||et(_t))return Z=Z.get($)||null,dt(k,Z,_t,Zt,null);if(typeof _t.then=="function")return lt(Z,k,$,vl(_t),Zt);if(_t.$$typeof===U)return lt(Z,k,$,pl(k,_t),Zt);yl(k,_t)}return null}function Ft(Z,k,$,_t){for(var Zt=null,Ae=null,Vt=k,oe=k=0,Se=null;Vt!==null&&oe<$.length;oe++){Vt.index>oe?(Se=Vt,Vt=null):Se=Vt.sibling;var Re=nt(Z,Vt,$[oe],_t);if(Re===null){Vt===null&&(Vt=Se);break}e&&Vt&&Re.alternate===null&&n(Z,Vt),k=f(Re,k,oe),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re,Vt=Se}if(oe===$.length)return a(Z,Vt),Me&&Hi(Z,oe),Zt;if(Vt===null){for(;oe<$.length;oe++)Vt=yt(Z,$[oe],_t),Vt!==null&&(k=f(Vt,k,oe),Ae===null?Zt=Vt:Ae.sibling=Vt,Ae=Vt);return Me&&Hi(Z,oe),Zt}for(Vt=r(Vt);oe<$.length;oe++)Se=lt(Vt,Z,oe,$[oe],_t),Se!==null&&(e&&Se.alternate!==null&&Vt.delete(Se.key===null?oe:Se.key),k=f(Se,k,oe),Ae===null?Zt=Se:Ae.sibling=Se,Ae=Se);return e&&Vt.forEach(function(Oa){return n(Z,Oa)}),Me&&Hi(Z,oe),Zt}function Qt(Z,k,$,_t){if($==null)throw Error(s(151));for(var Zt=null,Ae=null,Vt=k,oe=k=0,Se=null,Re=$.next();Vt!==null&&!Re.done;oe++,Re=$.next()){Vt.index>oe?(Se=Vt,Vt=null):Se=Vt.sibling;var Oa=nt(Z,Vt,Re.value,_t);if(Oa===null){Vt===null&&(Vt=Se);break}e&&Vt&&Oa.alternate===null&&n(Z,Vt),k=f(Oa,k,oe),Ae===null?Zt=Oa:Ae.sibling=Oa,Ae=Oa,Vt=Se}if(Re.done)return a(Z,Vt),Me&&Hi(Z,oe),Zt;if(Vt===null){for(;!Re.done;oe++,Re=$.next())Re=yt(Z,Re.value,_t),Re!==null&&(k=f(Re,k,oe),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re);return Me&&Hi(Z,oe),Zt}for(Vt=r(Vt);!Re.done;oe++,Re=$.next())Re=lt(Vt,Z,oe,Re.value,_t),Re!==null&&(e&&Re.alternate!==null&&Vt.delete(Re.key===null?oe:Re.key),k=f(Re,k,oe),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re);return e&&Vt.forEach(function(rS){return n(Z,rS)}),Me&&Hi(Z,oe),Zt}function Be(Z,k,$,_t){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var Zt=$.key;k!==null;){if(k.key===Zt){if(Zt=$.type,Zt===b){if(k.tag===7){a(Z,k.sibling),_t=u(k,$.props.children),_t.return=Z,Z=_t;break t}}else if(k.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===H&&os(Zt)===k.type){a(Z,k.sibling),_t=u(k,$.props),ro(_t,$),_t.return=Z,Z=_t;break t}a(Z,k);break}else n(Z,k);k=k.sibling}$.type===b?(_t=ns($.props.children,Z.mode,_t,$.key),_t.return=Z,Z=_t):(_t=fl($.type,$.key,$.props,null,Z.mode,_t),ro(_t,$),_t.return=Z,Z=_t)}return y(Z);case E:t:{for(Zt=$.key;k!==null;){if(k.key===Zt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Z,k.sibling),_t=u(k,$.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}_t=Uu($,Z.mode,_t),_t.return=Z,Z=_t}return y(Z);case H:return $=os($),Be(Z,k,$,_t)}if(mt($))return Ft(Z,k,$,_t);if(et($)){if(Zt=et($),typeof Zt!="function")throw Error(s(150));return $=Zt.call($),Qt(Z,k,$,_t)}if(typeof $.then=="function")return Be(Z,k,vl($),_t);if($.$$typeof===U)return Be(Z,k,pl(Z,$),_t);yl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Z,k.sibling),_t=u(k,$),_t.return=Z,Z=_t):(a(Z,k),_t=Du($,Z.mode,_t),_t.return=Z,Z=_t),y(Z)):a(Z,k)}return function(Z,k,$,_t){try{so=0;var Zt=Be(Z,k,$,_t);return Ws=null,Zt}catch(Vt){if(Vt===Xs||Vt===gl)throw Vt;var Ae=jn(29,Vt,null,Z.mode);return Ae.lanes=_t,Ae.return=Z,Ae}finally{}}}var cs=rm(!0),om=rm(!1),_a=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ul(e),Xp(e,null,a),n}return cl(e,r,n,a),ul(e)}function oo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,kr(e,a)}}function Wu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function lo(){if(qu){var e=ks;if(e!==null)throw e}}function co(e,n,a,r){qu=!1;var u=e.updateQueue;_a=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,tt=I.next;I.next=null,y===null?f=tt:y.next=tt,y=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==y&&(T===null?dt.firstBaseUpdate=tt:T.next=tt,dt.lastBaseUpdate=I))}if(f!==null){var yt=u.baseState;y=0,dt=tt=I=null,T=f;do{var nt=T.lane&-536870913,lt=nt!==T.lane;if(lt?(xe&nt)===nt:(r&nt)===nt){nt!==0&&nt===Vs&&(qu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ft=e,Qt=T;nt=n;var Be=a;switch(Qt.tag){case 1:if(Ft=Qt.payload,typeof Ft=="function"){yt=Ft.call(Be,yt,nt);break t}yt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Qt.payload,nt=typeof Ft=="function"?Ft.call(Be,yt,nt):Ft,nt==null)break t;yt=_({},yt,nt);break t;case 2:_a=!0}}nt=T.callback,nt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[nt]:lt.push(nt))}else lt={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(tt=dt=lt,I=yt):dt=dt.next=lt,y|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(I=yt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ta|=y,e.lanes=y,e.memoizedState=yt}}function lm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function cm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)lm(a[e],n)}var qs=L(null),xl=L(0);function um(e,n){e=Qi,ht(xl,e),ht(qs,n),Qi=e|n.baseLanes}function ju(){ht(xl,Qi),ht(qs,qs.current)}function Yu(){Qi=xl.current,K(qs),K(xl)}var Yn=L(null),li=null;function xa(e){var n=e.alternate;ht(en,en.current&1),ht(Yn,e),li===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(li=e)}function Zu(e){ht(en,en.current),ht(Yn,e),li===null&&(li=e)}function fm(e){e.tag===22?(ht(en,en.current),ht(Yn,e),li===null&&(li=e)):Sa()}function Sa(){ht(en,en.current),ht(Yn,Yn.current)}function Zn(e){K(Yn),li===e&&(li=null),K(en)}var en=L(0);function Sl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nh(a)||ih(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,re=null,ze=null,rn=null,Ml=!1,js=!1,us=!1,El=0,uo=0,Ys=null,Ky=0;function Qe(){throw Error(s(321))}function Ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Qu(e,n,a,r,u,f){return ki=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Ym:df,us=!1,f=a(r,u),us=!1,js&&(f=dm(n,a,r,u)),hm(e),f}function hm(e){P.H=po;var n=ze!==null&&ze.next!==null;if(ki=0,rn=ze=re=null,Ml=!1,uo=0,Ys=null,n)throw Error(s(300));e===null||on||(e=e.dependencies,e!==null&&dl(e)&&(on=!0))}function dm(e,n,a,r){re=e;var u=0;do{if(js&&(Ys=null),uo=0,js=!1,25<=u)throw Error(s(301));if(u+=1,rn=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Zm,f=n(a,r)}while(js);return f}function Qy(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?fo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(re.flags|=1024),n}function Ju(){var e=El!==0;return El=0,e}function $u(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function tf(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}ki=0,rn=ze=re=null,js=!1,uo=El=0,Ys=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?re.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(ze===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=rn===null?re.memoizedState:rn.next;if(n!==null)rn=n,ze=e;else{if(e===null)throw re.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},rn===null?re.memoizedState=rn=e:rn=rn.next=e}return rn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var n=uo;return uo+=1,Ys===null&&(Ys=[]),e=im(Ys,e,n),n=re,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Ym:df),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===U)return Mn(e)}throw Error(s(438,String(e)))}function ef(e){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=nn();return nf(n,ze,e)}function nf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=y=null,I=null,tt=n,dt=!1;do{var yt=tt.lane&-536870913;if(yt!==tt.lane?(xe&yt)===yt:(ki&yt)===yt){var nt=tt.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),yt===Vs&&(dt=!0);else if((ki&nt)===nt){tt=tt.next,nt===Vs&&(dt=!0);continue}else yt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=yt,y=f):I=I.next=yt,re.lanes|=nt,Ta|=nt;yt=tt.action,us&&a(f,yt),f=tt.hasEagerState?tt.eagerState:a(f,yt)}else nt={lane:yt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=nt,y=f):I=I.next=nt,re.lanes|=yt,Ta|=yt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?y=f:I.next=T,!qn(f,e.memoizedState)&&(on=!0,dt&&(a=ks,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function af(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);qn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function pm(e,n,a){var r=re,u=nn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!qn((ze||u).memoizedState,a);if(y&&(u.memoizedState=a,on=!0),u=u.queue,of(_m.bind(null,r,u,e),[e]),u.getSnapshot!==n||y||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,Zs(9,{destroy:void 0},gm.bind(null,r,u,a,n),null),Ve===null)throw Error(s(349));f||(ki&127)!==0||mm(r,n,a)}return a}function mm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=Tl(),re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function gm(e,n,a,r){n.value=a,n.getSnapshot=r,vm(n)&&ym(e)}function _m(e,n,a){return a(function(){vm(n)&&ym(e)})}function vm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function ym(e){var n=es(e,2);n!==null&&Xn(n,e,2)}function sf(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),us){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function xm(e,n,a,r){return e.baseState=a,nf(e,ze,typeof r=="function"?r:Xi)}function Jy(e,n,a,r,u){if(wl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=P.T,y={};P.T=y;try{var T=a(u,r),I=P.S;I!==null&&I(y,T),Mm(e,n,T)}catch(tt){rf(e,n,tt)}finally{f!==null&&y.types!==null&&(f.types=y.types),P.T=f}}else try{f=a(u,r),Mm(e,n,f)}catch(tt){rf(e,n,tt)}}function Mm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Em(e,n,r)},function(r){return rf(e,n,r)}):Em(e,n,a)}function Em(e,n,a){n.status="fulfilled",n.value=a,Tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Sm(e,a)))}function rf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==r)}e.action=null}function Tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function bm(e,n){return n}function Am(e,n){if(Me){var a=Ve.formState;if(a!==null){t:{var r=re;if(Me){if(We){e:{for(var u=We,f=oi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=ci(u.nextSibling),r=u.data==="F!";break t}}ma(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},a.queue=r,a=Wm.bind(null,re,r),r.dispatch=a,r=sf(!1),f=hf.bind(null,re,!1,r.queue),r=zn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Jy.bind(null,re,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Rm(e){var n=nn();return Cm(n,ze,e)}function Cm(e,n,a){if(n=nf(e,n,bm)[0],e=Al(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=fo(n)}catch(y){throw y===Xs?gl:y}else r=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Zs(9,{destroy:void 0},$y.bind(null,u,a),null)),[r,f,e]}function $y(e,n){e.action=n}function wm(e){var n=nn(),a=ze;if(a!==null)return Cm(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Zs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=re.updateQueue,n===null&&(n=Tl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Dm(){return nn().memoizedState}function Rl(e,n,a,r){var u=zn();re.flags|=e,u.memoizedState=Zs(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cl(e,n,a,r){var u=nn();r=r===void 0?null:r;var f=u.memoizedState.inst;ze!==null&&r!==null&&Ku(r,ze.memoizedState.deps)?u.memoizedState=Zs(n,f,a,r):(re.flags|=e,u.memoizedState=Zs(1|n,f,a,r))}function Um(e,n){Rl(8390656,8,e,n)}function of(e,n){Cl(2048,8,e,n)}function tx(e){re.flags|=4;var n=re.updateQueue;if(n===null)n=Tl(),re.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Lm(e){var n=nn().memoizedState;return tx({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Nm(e,n){return Cl(4,2,e,n)}function Om(e,n){return Cl(4,4,e,n)}function zm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pm(e,n,a){a=a!=null?a.concat([e]):null,Cl(4,4,zm.bind(null,n,e),a)}function lf(){}function Bm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ku(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Im(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ku(n,r[1]))return r[0];if(r=e(),us){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[r,n],r}function cf(e,n,a){return a===void 0||(ki&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Fg(),re.lanes|=e,Ta|=e,a)}function Fm(e,n,a,r){return qn(a,n)?a:qs.current!==null?(e=cf(e,a,r),qn(e,n)||(on=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(xe&261930)===0?(on=!0,e.memoizedState=a):(e=Fg(),re.lanes|=e,Ta|=e,n)}function Hm(e,n,a,r,u){var f=J.p;J.p=f!==0&&8>f?f:8;var y=P.T,T={};P.T=T,hf(e,!1,n,a);try{var I=u(),tt=P.S;if(tt!==null&&tt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=Zy(I,r);ho(e,n,dt,Jn(e))}else ho(e,n,r,Jn(e))}catch(yt){ho(e,n,{then:function(){},status:"rejected",reason:yt},Jn())}finally{J.p=f,y!==null&&T.types!==null&&(y.types=T.types),P.T=y}}function ex(){}function uf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Gm(e).queue;Hm(e,u,n,Q,a===null?ex:function(){return Vm(e),a(r)})}function Gm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Vm(e){var n=Gm(e);n.next===null&&(n=e.alternate.memoizedState),ho(e,n.next.queue,{},Jn())}function ff(){return Mn(Do)}function km(){return nn().memoizedState}function Xm(){return nn().memoizedState}function nx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=va(a);var r=ya(n,e,a);r!==null&&(Xn(r,n,a),oo(r,n,a)),n={cache:Fu()},e.payload=n;return}n=n.return}}function ix(e,n,a){var r=Jn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?qm(n,a):(a=Cu(e,n,a,r),a!==null&&(Xn(a,e,r),jm(a,n,r)))}function Wm(e,n,a){var r=Jn();ho(e,n,a,r)}function ho(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))qm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,y))return cl(e,n,u,0),Ve===null&&ll(),!1}catch{}finally{}if(a=Cu(e,n,u,r),a!==null)return Xn(a,e,r),jm(a,n,r),!0}return!1}function hf(e,n,a,r){if(r={lane:2,revertLane:Xf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(s(479))}else n=Cu(e,a,r,2),n!==null&&Xn(n,e,2)}function wl(e){var n=e.alternate;return e===re||n!==null&&n===re}function qm(e,n){js=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,kr(e,a)}}var po={readContext:Mn,use:bl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};po.useEffectEvent=Qe;var Ym={readContext:Mn,use:bl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,zm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var r=e();if(us){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=zn();if(a!==void 0){var u=a(n);if(us){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=ix.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=sf(e);var n=e.queue,a=Wm.bind(null,re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(e,n){var a=zn();return cf(a,e,n)},useTransition:function(){var e=sf(!1);return e=Hm.bind(null,re,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=re,u=zn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(xe&127)!==0||mm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Um(_m.bind(null,r,f,e),[e]),r.flags|=2048,Zs(9,{destroy:void 0},gm.bind(null,r,f,a,n),null),a},useId:function(){var e=zn(),n=Ve.identifierPrefix;if(Me){var a=Ci,r=Ri;a=(r&~(1<<32-Jt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ky++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ff,useFormState:Am,useActionState:Am,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hf.bind(null,re,!0,a),a.dispatch=n,[e,n]},useMemoCache:ef,useCacheRefresh:function(){return zn().memoizedState=nx.bind(null,re)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},df={readContext:Mn,use:bl,useCallback:Bm,useContext:Mn,useEffect:of,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Im,useReducer:Al,useRef:Dm,useState:function(){return Al(Xi)},useDebugValue:lf,useDeferredValue:function(e,n){var a=nn();return Fm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Al(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:ff,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,n){var a=nn();return xm(a,ze,e,n)},useMemoCache:ef,useCacheRefresh:Xm};df.useEffectEvent=Lm;var Zm={readContext:Mn,use:bl,useCallback:Bm,useContext:Mn,useEffect:of,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Im,useReducer:af,useRef:Dm,useState:function(){return af(Xi)},useDebugValue:lf,useDeferredValue:function(e,n){var a=nn();return ze===null?cf(a,e,n):Fm(a,ze.memoizedState,e,n)},useTransition:function(){var e=af(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:ff,useFormState:wm,useActionState:wm,useOptimistic:function(e,n){var a=nn();return ze!==null?xm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Xm};Zm.useEffectEvent=Lm;function pf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var mf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Jn(),u=va(r);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,r),n!==null&&(Xn(n,e,r),oo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Jn(),u=va(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,r),n!==null&&(Xn(n,e,r),oo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),r=va(a);r.tag=2,n!=null&&(r.callback=n),n=ya(e,r,a),n!==null&&(Xn(n,e,a),oo(n,e,a))}};function Km(e,n,a,r,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!$r(a,r)||!$r(u,f):!0}function Qm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&mf.enqueueReplaceState(n,n.state,null)}function fs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Jm(e){ol(e)}function $m(e){console.error(e)}function tg(e){ol(e)}function Dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function eg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function gf(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(e,n)},a}function ng(e){return e=va(e),e.tag=3,e}function ig(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){eg(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){eg(n,a,r),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function ax(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Vl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Gf(e,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Gf(e,r,u)),!1}throw Error(s(435,a.tag))}return Gf(e,r,u),Vl(),!1}if(Me)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Ou&&(e=Error(s(422),{cause:r}),no(ai(e,a)))):(r!==Ou&&(n=Error(s(423),{cause:r}),no(ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ai(r,a),u=gf(e.stateNode,r,u),Wu(e,u),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),Mo===null?Mo=[f]:Mo.push(f),Je!==4&&(Je=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=gf(a.stateNode,r,e),Wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ng(u),ig(u,e,a,r),Wu(a,u),!1}a=a.return}while(a!==null);return!1}var _f=Error(s(461)),on=!1;function En(e,n,a,r){n.child=e===null?om(n,null,a,r):cs(n,e.child,a,r)}function ag(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var T in r)T!=="ref"&&(y[T]=r[T])}else y=r;return ss(n),r=Qu(e,n,a,y,f,u),T=Ju(),e!==null&&!on?($u(e,n,u),Wi(e,n,u)):(Me&&T&&Lu(n),n.flags|=1,En(e,n,r,u),n.child)}function sg(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,rg(e,n,f,r,u)):(e=fl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!bf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:$r,a(y,r)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Fi(f,r),e.ref=n.ref,e.return=n,n.child=e}function rg(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if($r(f,r)&&e.ref===n.ref)if(on=!1,n.pendingProps=r=f,bf(e,u))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return vf(e,n,a,r,u)}function og(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return lg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?um(n,f):ju(),fm(n);else return r=n.lanes=536870912,lg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ml(n,f.cachePool),um(n,f),Sa(),n.memoizedState=null):(e!==null&&ml(n,null),ju(),Sa());return En(e,n,u,a),n.child}function mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lg(e,n,a,r,u){var f=Gu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ml(n,null),ju(),fm(n),e!==null&&Gs(e,n,r,!0),n.childLanes=u,null}function Ul(e,n){return n=Nl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function cg(e,n,a){return cs(n,e.child,null,a),e=Ul(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function sx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(r.mode==="hidden")return e=Ul(n,r),n.lanes=536870912,mo(null,e);if(Zu(n),(e=We)?(e=S_(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=qp(e),a.return=n,n.child=a,Sn=n,We=null)):e=null,e===null)throw ma(n);return n.lanes=536870912,null}return Ul(n,r)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Zu(n),u)if(n.flags&256)n.flags&=-257,n=cg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||Gs(e,n,a,!1),u=(a&e.childLanes)!==0,on||u){if(r=Ve,r!==null&&(y=bi(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,es(e,y),Xn(r,e,y),_f;Vl(),n=cg(e,n,a)}else e=f.treeContext,We=ci(y.nextSibling),Sn=n,Me=!0,pa=null,oi=!1,e!==null&&Zp(n,e),n=Ul(n,r),n.flags|=4096;return n}return e=Fi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function vf(e,n,a,r,u){return ss(n),a=Qu(e,n,a,r,void 0,u),r=Ju(),e!==null&&!on?($u(e,n,u),Wi(e,n,u)):(Me&&r&&Lu(n),n.flags|=1,En(e,n,a,u),n.child)}function ug(e,n,a,r,u,f){return ss(n),n.updateQueue=null,a=dm(n,r,a,u),hm(e),r=Ju(),e!==null&&!on?($u(e,n,f),Wi(e,n,f)):(Me&&r&&Lu(n),n.flags|=1,En(e,n,a,f),n.child)}function fg(e,n,a,r,u){if(ss(n),n.stateNode===null){var f=Bs,y=a.contextType;typeof y=="object"&&y!==null&&(f=Mn(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},ku(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Mn(y):Bs,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(pf(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&mf.enqueueReplaceState(f,f.state,null),co(n,r,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=fs(a,T);f.props=I;var tt=f.context,dt=a.contextType;y=Bs,typeof dt=="object"&&dt!==null&&(y=Mn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==y)&&Qm(n,f,r,y),_a=!1;var nt=n.memoizedState;f.state=nt,co(n,r,f,u),lo(),tt=n.memoizedState,T||nt!==tt||_a?(typeof yt=="function"&&(pf(n,a,yt,r),tt=n.memoizedState),(I=_a||Km(n,a,I,r,nt,tt,y))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=y,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Xu(e,n),y=n.memoizedProps,dt=fs(a,y),f.props=dt,yt=n.pendingProps,nt=f.context,tt=a.contextType,I=Bs,typeof tt=="object"&&tt!==null&&(I=Mn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==yt||nt!==I)&&Qm(n,f,r,I),_a=!1,nt=n.memoizedState,f.state=nt,co(n,r,f,u),lo();var lt=n.memoizedState;y!==yt||nt!==lt||_a||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof T=="function"&&(pf(n,a,T,r),lt=n.memoizedState),(dt=_a||Km(n,a,dt,r,nt,lt,I)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=I,r=dt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ll(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=cs(n,e.child,null,u),n.child=cs(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Wi(e,n,u),e}function hg(e,n,a,r){return is(),n.flags|=256,En(e,n,a,r),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:em()}}function Sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function dg(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?xa(n):Sa(),(e=We)?(e=S_(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=qp(e),a.return=n,n.child=a,Sn=n,We=null)):e=null,e===null)throw ma(n);return ih(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,u?(Sa(),u=n.mode,T=Nl({mode:"hidden",children:T},u),r=ns(r,u,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=xf(a),r.childLanes=Sf(e,y,a),n.memoizedState=yf,mo(null,r)):(xa(n),Mf(n,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=Ef(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),T=r.fallback,u=n.mode,r=Nl({mode:"visible",children:r.children},u),T=ns(T,u,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,cs(n,e.child,null,a),r=n.child,r.memoizedState=xf(a),r.childLanes=Sf(e,y,a),n.memoizedState=yf,n=mo(null,r));else if(xa(n),ih(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var tt=y.dgst;y=tt,r=Error(s(419)),r.stack="",r.digest=y,no({value:r,source:null,stack:null}),n=Ef(e,n,a)}else if(on||Gs(e,n,a,!1),y=(a&e.childLanes)!==0,on||y){if(y=Ve,y!==null&&(r=bi(y,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,es(e,r),Xn(y,e,r),_f;nh(T)||Vl(),n=Ef(e,n,a)}else nh(T)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,We=ci(T.nextSibling),Sn=n,Me=!0,pa=null,oi=!1,e!==null&&Zp(n,e),n=Mf(n,r.children),n.flags|=4096);return n}return u?(Sa(),T=r.fallback,u=n.mode,I=e.child,tt=I.sibling,r=Fi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,tt!==null?T=Fi(tt,T):(T=ns(T,u,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,mo(null,r),r=n.child,T=e.child.memoizedState,T===null?T=xf(a):(u=T.cachePool,u!==null?(I=sn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=em(),T={baseLanes:T.baseLanes|a,cachePool:u}),r.memoizedState=T,r.childLanes=Sf(e,y,a),n.memoizedState=yf,mo(e.child,r)):(xa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Mf(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function Ef(e,n,a){return cs(n,e.child,null,a),e=Mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Bu(e.return,n,a)}function Tf(e,n,a,r,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function mg(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var y=en.current,T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,ht(en,y),En(e,n,r,a),r=Me?eo:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pg(e,a,n);else if(e.tag===19)pg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Sl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Sl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,f,r);break;case"together":Tf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function rx(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),ga(n,sn,e.memoizedState.cache),is();break;case 27:case 5:ne(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?dg(e,n,a):(xa(n),e=Wi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Gs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return mg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(en,en.current),r)break;return null;case 22:return n.lanes=0,og(e,n,a,n.pendingProps);case 24:ga(n,sn,e.memoizedState.cache)}return Wi(e,n,a)}function gg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!bf(e,a)&&(n.flags&128)===0)return on=!1,rx(e,n,a);on=(e.flags&131072)!==0}else on=!1,Me&&(n.flags&1048576)!==0&&Yp(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=os(n.elementType),n.type=e,typeof e=="function")wu(e)?(r=fs(e,r),n.tag=1,n=fg(null,n,e,r,a)):(n.tag=0,n=vf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=ag(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=sg(null,n,e,r,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return vf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=fs(r,n.pendingProps),fg(e,n,r,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Xu(e,n),co(n,r,null,a);var y=n.memoizedState;if(r=y.cache,ga(n,sn,r),r!==f.cache&&Iu(n,[sn],a,!0),lo(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=hg(e,n,r,a);break t}else if(r!==u){u=ai(Error(s(424)),n),no(u),n=hg(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=ci(e.firstChild),Sn=n,Me=!0,pa=null,oi=!0,a=om(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(is(),r===u){n=Wi(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,r=Zl(Mt.current).createElement(a),r[Ke]=n,r[xn]=e,Tn(r,a,e),St(r),n.stateNode=r):n.memoizedState=R_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&Me&&(r=n.stateNode=T_(n.type,n.pendingProps,Mt.current),Sn=n,oi=!0,u=We,wa(n.type)?(ah=u,We=ci(r.firstChild)):We=u),En(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=r=We)&&(r=Px(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,Sn=n,We=ci(r.firstChild),oi=!1,u=!0):u=!1),u||ma(n)),ne(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,$f(u,f)?r=null:y!==null&&$f(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Qu(e,n,Qy,null,null,a),Do._currentValue=u),Ll(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Me&&((e=a=We)&&(a=Bx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Sn=n,We=null,e=!0):e=!1),e||ma(n)),null;case 13:return dg(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=cs(n,null,r,a):En(e,n,r,a),n.child;case 11:return ag(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ga(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ss(n),u=Mn(u),r=r(u),n.flags|=1,En(e,n,r,a),n.child;case 14:return sg(e,n,n.type,n.pendingProps,a);case 15:return rg(e,n,n.type,n.pendingProps,a);case 19:return mg(e,n,a);case 31:return sx(e,n,a);case 22:return og(e,n,a,n.pendingProps);case 24:return ss(n),r=Mn(sn),e===null?(u=Gu(),u===null&&(u=Ve,f=Fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},ku(n),ga(n,sn,u)):((e.lanes&a)!==0&&(Xu(e,n),co(n,null,null,a),lo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,sn,r)):(r=f.cache,ga(n,sn,r),r!==u.cache&&Iu(n,[sn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function qi(e){e.flags|=4}function Af(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(kg())e.flags|=8192;else throw ls=_l,Vu}else e.flags&=-16777217}function _g(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!L_(n))if(kg())e.flags|=8192;else throw ls=_l,Vu}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?un():536870912,e.lanes|=n,$s|=n)}function go(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function ox(e,n,a){var r=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(sn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(qi(n),f!==null?(qe(n),_g(n,f)):(qe(n),Af(n,u,null,r,a))):f?f!==e.memoizedState?(qi(n),qe(n),_g(n,f)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&qi(n),qe(n),Af(n,u,e,r,a)),null;case 27:if(Ne(n),a=Mt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=W.current,Hs(n)?Kp(n):(e=T_(u,r,a),n.stateNode=e,qi(n))}return qe(n),null;case 5:if(Ne(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=W.current,Hs(n))Kp(n);else{var y=Zl(Mt.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(u,{is:r.is}):y.createElement(u)}}f[Ke]=n,f[xn]=r;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Tn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&qi(n)}}return qe(n),Af(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Mt.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[Ke]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||d_(e.nodeValue,a)),e||ma(n,!0)}else e=Zl(e).createTextNode(r),e[Ke]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Hs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ke]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Hs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Ke]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),qe(n),null);case 4:return Ht(),e===null&&Yf(n.stateNode.containerInfo),qe(n),null;case 10:return Vi(n.type),qe(n),null;case 19:if(K(en),r=n.memoizedState,r===null)return qe(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)go(r,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Sl(e),f!==null){for(n.flags|=128,go(r,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Wp(a,e),a=a.sibling;return ht(en,en.current&1|2),Me&&Hi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&gt()>Fl&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304)}else{if(!u)if(e=Sl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return qe(n),null}else 2*gt()-r.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,u=!0,go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=gt(),e.sibling=null,a=en.current,ht(en,u?a&1|2:a&1),Me&&Hi(n,r.treeForkCount),e):(qe(n),null);case 22:case 23:return Zn(n),Yu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&K(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function lx(e,n){switch(Nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(sn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(en),null;case 4:return Ht(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Yu(),e!==null&&K(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(sn),null;case 25:return null;default:return null}}function vg(e,n){switch(Nu(n),n.tag){case 3:Vi(sn),Ht();break;case 26:case 27:case 5:Ne(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:K(en);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Yu(),e!==null&&K(rs);break;case 24:Vi(sn)}}function _o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==u)}}catch(T){Le(n,n.return,T)}}function Ma(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var y=r.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var I=a,tt=T;try{tt()}catch(dt){Le(u,I,dt)}}}r=r.next}while(r!==f)}}catch(dt){Le(n,n.return,dt)}}function yg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{cm(n,a)}catch(r){Le(e,e.return,r)}}}function xg(e,n,a){a.props=fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Le(e,n,r)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Le(e,n,u)}}function wi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Le(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Le(e,n,u)}else a.current=null}function Sg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Le(e,e.return,u)}}function Rf(e,n,a){try{var r=e.stateNode;Dx(r,e.type,a,n),r[xn]=n}catch(u){Le(e,e.return,u)}}function Mg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Mg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(r!==4&&(r===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(wf(e,n,a),e=e.sibling;e!==null;)wf(e,n,a),e=e.sibling}function zl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function Eg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,r,a),n[Ke]=e,n[xn]=a}catch(f){Le(e,e.return,f)}}var ji=!1,ln=!1,Df=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function cx(e,n){if(e=e.containerInfo,Qf=nc,e=Pp(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,T=-1,I=-1,tt=0,dt=0,yt=e,nt=null;e:for(;;){for(var lt;yt!==a||u!==0&&yt.nodeType!==3||(T=y+u),yt!==f||r!==0&&yt.nodeType!==3||(I=y+r),yt.nodeType===3&&(y+=yt.nodeValue.length),(lt=yt.firstChild)!==null;)nt=yt,yt=lt;for(;;){if(yt===e)break e;if(nt===a&&++tt===u&&(T=y),nt===f&&++dt===r&&(I=y),(lt=yt.nextSibling)!==null)break;yt=nt,nt=yt.parentNode}yt=lt}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},nc=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=fs(a.type,u);e=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)eh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function bg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),r&4&&_o(5,a);break;case 1:if(Zi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Le(a,a.return,y)}else{var u=fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Le(a,a.return,y)}}r&64&&yg(a),r&512&&vo(a,a.return);break;case 3:if(Zi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cm(e,n)}catch(y){Le(a,a.return,y)}}break;case 27:n===null&&r&4&&Eg(a);case 26:case 5:Zi(e,a),n===null&&r&4&&Sg(a),r&512&&vo(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),r&4&&Cg(e,a);break;case 13:Zi(e,a),r&4&&wg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vx.bind(null,a),Ix(e,a))));break;case 22:if(r=a.memoizedState!==null||ji,!r){n=n!==null&&n.memoizedState!==null||ln,u=ji;var f=ln;ji=r,(ln=n)&&!f?Ki(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),ji=u,ln=f}break;case 30:break;default:Zi(e,a)}}function Ag(e){var n=e.alternate;n!==null&&(e.alternate=null,Ag(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&C(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Hn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Rg(e,n,a),a=a.sibling}function Rg(e,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:ln||wi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||wi(a,n);var r=Ze,u=Hn;wa(a.type)&&(Ze=a.stateNode,Hn=!1),Yi(e,n,a),Ro(a.stateNode),Ze=r,Hn=u;break;case 5:ln||wi(a,n);case 6:if(r=Ze,u=Hn,Ze=null,Yi(e,n,a),Ze=r,Hn=u,Ze!==null)if(Hn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:Ze!==null&&(Hn?(e=Ze,y_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),or(e)):y_(Ze,a.stateNode));break;case 4:r=Ze,u=Hn,Ze=a.stateNode.containerInfo,Hn=!0,Yi(e,n,a),Ze=r,Hn=u;break;case 0:case 11:case 14:case 15:Ma(2,a,n),ln||Ma(4,a,n),Yi(e,n,a);break;case 1:ln||(wi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&xg(a,n,r)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:ln=(r=ln)||a.memoizedState!==null,Yi(e,n,a),ln=r;break;default:Yi(e,n,a)}}function Cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{or(e)}catch(a){Le(n,n.return,a)}}}function wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{or(e)}catch(a){Le(n,n.return,a)}}function ux(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Tg),n;default:throw Error(s(435,e.tag))}}function Pl(e,n){var a=ux(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=yx.bind(null,e,r);r.then(u,u)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,y=n,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(wa(T.type)){Ze=T.stateNode,Hn=!1;break t}break;case 5:Ze=T.stateNode,Hn=!1;break t;case 3:case 4:Ze=T.stateNode.containerInfo,Hn=!0;break t}T=T.return}if(Ze===null)throw Error(s(160));Rg(f,y,u),Ze=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Dg(n,e),n=n.sibling}var _i=null;function Dg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),r&4&&(Ma(3,e,e.return),_o(3,e),Ma(5,e,e.return));break;case 1:Gn(n,e),Vn(e),r&512&&(ln||a===null||wi(a,a.return)),r&64&&ji&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=_i;if(Gn(n,e),Vn(e),r&512&&(ln||a===null||wi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ka]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,r,a),f[Ke]=e,St(f),r=f;break t;case"link":var y=D_("link","href",u).get(r+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(f=y[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;case"meta":if(y=D_("meta","content",u).get(r+(a.content||""))){for(T=0;T<y.length;T++)if(f=y[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ke]=e,St(f),r=f}e.stateNode=r}else U_(u,e.type,e.stateNode);else e.stateNode=w_(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?U_(u,e.type,e.stateNode):w_(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),r&512&&(ln||a===null||wi(a,a.return)),a!==null&&r&4&&Rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),r&512&&(ln||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{Ds(u,"")}catch(Ft){Le(e,e.return,Ft)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Rf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Df=!0);break;case 6:if(Gn(n,e),Vn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ft){Le(e,e.return,Ft)}}break;case 3:if(Jl=null,u=_i,_i=Kl(n.containerInfo),Gn(n,e),_i=u,Vn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(Ft){Le(e,e.return,Ft)}Df&&(Df=!1,Ug(e));break;case 4:r=_i,_i=Kl(e.stateNode.containerInfo),Gn(n,e),Vn(e),_i=r;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=gt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=ji,dt=ln;if(ji=tt||u,ln=dt||I,Gn(n,e),ln=dt,ji=tt,Vn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ji||ln||hs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=I.stateNode;var yt=I.memoizedProps.style,nt=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ft){Le(I,I.return,Ft)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Ft){Le(I,I.return,Ft)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;u?x_(lt,!0):x_(I.stateNode,!1)}catch(Ft){Le(I,I.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(e,a))));break;case 19:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Mg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Cf(e);zl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ds(y,""),a.flags&=-33);var T=Cf(e);zl(e,T,y);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=Cf(e);wf(e,tt,I);break;default:throw Error(s(161))}}catch(dt){Le(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bg(e,n.alternate,n),n=n.sibling}function hs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),hs(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xg(n,n.return,a),hs(n);break;case 27:Ro(n.stateNode);case 26:case 5:wi(n,n.return),hs(n);break;case 22:n.memoizedState===null&&hs(n);break;case 30:hs(n);break;default:hs(n)}e=e.sibling}}function Ki(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(u,f,a),_o(4,f);break;case 1:if(Ki(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Le(r,r.return,tt)}if(r=f,u=r.updateQueue,u!==null){var T=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)lm(I[u],T)}catch(tt){Le(r,r.return,tt)}}a&&y&64&&yg(f),vo(f,f.return);break;case 27:Eg(f);case 26:case 5:Ki(u,f,a),a&&r===null&&y&4&&Sg(f),vo(f,f.return);break;case 12:Ki(u,f,a);break;case 31:Ki(u,f,a),a&&y&4&&Cg(u,f);break;case 13:Ki(u,f,a),a&&y&4&&wg(u,f);break;case 22:f.memoizedState===null&&Ki(u,f,a),vo(f,f.return);break;case 30:break;default:Ki(u,f,a)}n=n.sibling}}function Uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&io(a))}function Lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e))}function vi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lg(e,n,a,r),n=n.sibling}function Lg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,r),u&2048&&_o(9,n);break;case 1:vi(e,n,a,r);break;case 3:vi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e)));break;case 12:if(u&2048){vi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,T=f.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Le(n,n.return,I)}}else vi(e,n,a,r);break;case 31:vi(e,n,a,r);break;case 13:vi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?vi(e,n,a,r):yo(e,n):f._visibility&2?vi(e,n,a,r):(f._visibility|=2,Ks(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Uf(y,n);break;case 24:vi(e,n,a,r),u&2048&&Lf(n.alternate,n);break;default:vi(e,n,a,r)}}function Ks(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,T=a,I=r,tt=y.flags;switch(y.tag){case 0:case 11:case 15:Ks(f,y,T,I,u),_o(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?Ks(f,y,T,I,u):yo(f,y):(dt._visibility|=2,Ks(f,y,T,I,u)),u&&tt&2048&&Uf(y.alternate,y);break;case 24:Ks(f,y,T,I,u),u&&tt&2048&&Lf(y.alternate,y);break;default:Ks(f,y,T,I,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:yo(a,r),u&2048&&Uf(r.alternate,r);break;case 24:yo(a,r),u&2048&&Lf(r.alternate,r);break;default:yo(a,r)}n=n.sibling}}var xo=8192;function Qs(e,n,a){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)Ng(e,n,a),e=e.sibling}function Ng(e,n,a){switch(e.tag){case 26:Qs(e,n,a),e.flags&xo&&e.memoizedState!==null&&Kx(a,_i,e.memoizedState,e.memoizedProps);break;case 5:Qs(e,n,a);break;case 3:case 4:var r=_i;_i=Kl(e.stateNode.containerInfo),Qs(e,n,a),_i=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xo,xo=16777216,Qs(e,n,a),xo=r):Qs(e,n,a));break;default:Qs(e,n,a)}}function Og(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,Pg(r,e)}Og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zg(e),e=e.sibling}function zg(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bl(e)):So(e);break;default:So(e)}}function Bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,Pg(r,e)}Og(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}e=e.sibling}}function Pg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:io(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,gn=r;else t:for(a=e;gn!==null;){r=gn;var u=r.sibling,f=r.return;if(Ag(r),r===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var fx={getCacheForType:function(e){var n=Mn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},hx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,de=null,xe=0,Ue=0,Kn=null,Ea=!1,Js=!1,Nf=!1,Qi=0,Je=0,Ta=0,ds=0,Of=0,Qn=0,$s=0,Mo=null,kn=null,zf=!1,Il=0,Bg=0,Fl=1/0,Hl=null,ba=null,hn=0,Aa=null,tr=null,Ji=0,Pf=0,Bf=null,Ig=null,Eo=0,If=null;function Jn(){return(we&2)!==0&&xe!==0?xe&-xe:P.T!==null?Xf():Xr()}function Fg(){if(Qn===0)if((xe&536870912)===0||Me){var e=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),Qn=e}else Qn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Qn}function Xn(e,n,a){(e===Ve&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(er(e,0),Ra(e,xe,Qn,!1)),yn(e,a),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(ds|=a),Je===4&&Ra(e,xe,Qn,!1)),Di(e))}function Hg(e,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||$t(e,n),u=r?mx(e,n):Hf(e,n,!0),f=r;do{if(u===0){Js&&!r&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!dx(a)){u=Hf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;u=Mo;var I=T.current.memoizedState.isDehydrated;if(I&&(er(T,y).flags|=256),y=Hf(T,y,!1),y!==2){if(Nf&&!I){T.errorRecoveryDisabledLanes|=f,ds|=f,u=4;break t}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){er(e,0),Ra(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(r,n,Qn,!Ea);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Il+300-gt(),10<u)){if(Ra(r,n,Qn,!Ea),Dt(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=__(Gg.bind(null,r,a,kn,Hl,zf,n,Qn,ds,$s,Ea,f,"Throttled",-0,0),u);break t}Gg(r,a,kn,Hl,zf,n,Qn,ds,$s,Ea,f,null,-0,0)}}break}while(!0);Di(e)}function Gg(e,n,a,r,u,f,y,T,I,tt,dt,yt,nt,lt){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Ng(n,f,yt);var Ft=(f&62914560)===f?Il-gt():(f&4194048)===f?Bg-gt():0;if(Ft=Qx(yt,Ft),Ft!==null){Ji=f,e.cancelPendingCommit=Ft(Zg.bind(null,e,n,f,a,r,u,y,T,I,dt,yt,null,nt,lt)),Ra(e,f,y,!tt);return}}Zg(e,n,f,a,r,u,y,T,I)}function dx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,r){n&=~Of,n&=~ds,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Jt(u),y=1<<f;r[f]=-1,u&=~y}a!==0&&Vr(e,a,n)}function Gl(){return(we&6)===0?(To(0),!1):!0}function Ff(){if(de!==null){if(Ue===0)var e=de.return;else e=de,Gi=as=null,tf(e),Ws=null,so=0,e=de;for(;e!==null;)vg(e.alternate,e),e=e.return;de=null}}function er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Nx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ji=0,Ff(),Ve=e,de=a=Fi(e.current,null),xe=n,Ue=0,Kn=null,Ea=!1,Js=$t(e,n),Nf=!1,$s=Qn=Of=ds=Ta=Je=0,kn=Mo=null,zf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Jt(r),f=1<<u;n|=e[u],r&=~f}return Qi=n,ll(),a}function Vg(e,n){re=null,P.H=po,n===Xs||n===gl?(n=am(),Ue=3):n===Vu?(n=am(),Ue=4):Ue=n===_f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,de===null&&(Je=1,Dl(e,ai(n,e.current)))}function kg(){var e=Yn.current;return e===null?!0:(xe&4194048)===xe?li===null:(xe&62914560)===xe||(xe&536870912)!==0?e===li:!1}function Xg(){var e=P.H;return P.H=po,e===null?po:e}function Wg(){var e=P.A;return P.A=fx,e}function Vl(){Je=4,Ea||(xe&4194048)!==xe&&Yn.current!==null||(Js=!0),(Ta&134217727)===0&&(ds&134217727)===0||Ve===null||Ra(Ve,xe,Qn,!1)}function Hf(e,n,a){var r=we;we|=2;var u=Xg(),f=Wg();(Ve!==e||xe!==n)&&(Hl=null,er(e,n)),n=!1;var y=Je;t:do try{if(Ue!==0&&de!==null){var T=de,I=Kn;switch(Ue){case 8:Ff(),y=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var tt=Ue;if(Ue=0,Kn=null,nr(e,T,I,tt),a&&Js){y=0;break t}break;default:tt=Ue,Ue=0,Kn=null,nr(e,T,I,tt)}}px(),y=Je;break}catch(dt){Vg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Gi=as=null,we=r,P.H=u,P.A=f,de===null&&(Ve=null,xe=0,ll()),y}function px(){for(;de!==null;)qg(de)}function mx(e,n){var a=we;we|=2;var r=Xg(),u=Wg();Ve!==e||xe!==n?(Hl=null,Fl=gt()+500,er(e,n)):Js=$t(e,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,nr(e,n,f,1);break;case 2:case 9:if(nm(f)){Ue=0,Kn=null,jg(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==e||(Ue=7),Di(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:nm(f)?(Ue=0,Kn=null,jg(n)):(Ue=0,Kn=null,nr(e,n,f,7));break;case 5:var y=null;switch(de.tag){case 26:y=de.memoizedState;case 5:case 27:var T=de;if(y?L_(y):T.stateNode.complete){Ue=0,Kn=null;var I=T.sibling;if(I!==null)de=I;else{var tt=T.return;tt!==null?(de=tt,kl(tt)):de=null}break e}}Ue=0,Kn=null,nr(e,n,f,5);break;case 6:Ue=0,Kn=null,nr(e,n,f,6);break;case 8:Ff(),Je=6;break t;default:throw Error(s(462))}}gx();break}catch(dt){Vg(e,dt)}while(!0);return Gi=as=null,P.H=r,P.A=u,we=a,de!==null?0:(Ve=null,xe=0,ll(),Je)}function gx(){for(;de!==null&&!A();)qg(de)}function qg(e){var n=gg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?kl(e):de=n}function jg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ug(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=ug(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:tf(n);default:vg(a,n),n=de=Wp(n,Qi),n=gg(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?kl(e):de=n}function nr(e,n,a,r){Gi=as=null,tf(n),Ws=null,so=0;var u=n.return;try{if(ax(e,u,n,a,xe)){Je=1,Dl(e,ai(a,e.current)),de=null;return}}catch(f){if(u!==null)throw de=u,f;Je=1,Dl(e,ai(a,e.current)),de=null;return}n.flags&32768?(Me||r===1?e=!0:Js||(xe&536870912)!==0?e=!1:(Ea=e=!0,(r===2||r===9||r===3||r===6)&&(r=Yn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Yg(n,Ea);return}e=n.return;var a=ox(n.alternate,n,Qi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Je===0&&(Je=5)}function Yg(e,n){do{var a=lx(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Je=6,de=null}function Zg(e,n,a,r,u,f,y,T,I){e.cancelPendingCommit=null;do Xl();while(hn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ru,pi(e,a,f,y,T,I),e===Ve&&(de=Ve=null,xe=0),tr=n,Aa=e,Ji=a,Pf=f,Bf=u,Ig=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xx(wt,function(){return t_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=J.p,J.p=2,y=we,we|=4;try{cx(e,n,a)}finally{we=y,J.p=u,P.T=r}}hn=1,Kg(),Qg(),Jg()}}function Kg(){if(hn===1){hn=0;var e=Aa,n=tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=J.p;J.p=2;var u=we;we|=4;try{Dg(n,e);var f=Jf,y=Pp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(y!==T&&T&&T.ownerDocument&&zp(T.ownerDocument.documentElement,T)){if(I!==null&&Mu(T)){var tt=I.start,dt=I.end;if(dt===void 0&&(dt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(dt,T.value.length);else{var yt=T.ownerDocument||document,nt=yt&&yt.defaultView||window;if(nt.getSelection){var lt=nt.getSelection(),Ft=T.textContent.length,Qt=Math.min(I.start,Ft),Be=I.end===void 0?Qt:Math.min(I.end,Ft);!lt.extend&&Qt>Be&&(y=Be,Be=Qt,Qt=y);var Z=Op(T,Qt),k=Op(T,Be);if(Z&&k&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=yt.createRange();$.setStart(Z.node,Z.offset),lt.removeAllRanges(),Qt>Be?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(yt=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&yt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<yt.length;T++){var _t=yt[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}nc=!!Qf,Jf=Qf=null}finally{we=u,J.p=r,P.T=a}}e.current=n,hn=2}}function Qg(){if(hn===2){hn=0;var e=Aa,n=tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=J.p;J.p=2;var u=we;we|=4;try{bg(e,n.alternate,n)}finally{we=u,J.p=r,P.T=a}}hn=3}}function Jg(){if(hn===4||hn===3){hn=0,it();var e=Aa,n=tr,a=Ji,r=Ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,tr=Aa=null,$g(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),Cs(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=J.p,J.p=2,P.T=null;try{for(var f=e.onRecoverableError,y=0;y<r.length;y++){var T=r[y];f(T.value,{componentStack:T.stack})}}finally{P.T=n,J.p=u}}(Ji&3)!==0&&Xl(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===If?Eo++:(Eo=0,If=e):Eo=0,To(0)}}function $g(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,io(n)))}function Xl(){return Kg(),Qg(),Jg(),t_()}function t_(){if(hn!==5)return!1;var e=Aa,n=Pf;Pf=0;var a=Cs(Ji),r=P.T,u=J.p;try{J.p=32>a?32:a,P.T=null,a=Bf,Bf=null;var f=Aa,y=Ji;if(hn=0,tr=Aa=null,Ji=0,(we&6)!==0)throw Error(s(331));var T=we;if(we|=4,zg(f.current),Lg(f,f.current,y,a),we=T,To(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{J.p=u,P.T=r,$g(e,n)}}function e_(e,n,a){n=ai(a,n),n=gf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(yn(e,2),Di(e))}function Le(e,n,a){if(e.tag===3)e_(e,e,a);else for(;n!==null;){if(n.tag===3){e_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ba===null||!ba.has(r))){e=ai(a,e),a=ng(2),r=ya(n,a,2),r!==null&&(ig(a,r,n,e),yn(r,2),Di(r));break}}n=n.return}}function Gf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new hx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Nf=!0,u.add(a),e=_x.bind(null,e,n,a),n.then(e,e))}function _x(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(xe&a)===a&&(Je===4||Je===3&&(xe&62914560)===xe&&300>gt()-Il?(we&2)===0&&er(e,0):Of|=a,$s===xe&&($s=0)),Di(e)}function n_(e,n){n===0&&(n=un()),e=es(e,n),e!==null&&(yn(e,n),Di(e))}function vx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),n_(e,a)}function yx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),n_(e,a)}function xx(e,n){return Wt(e,n)}var Wl=null,ir=null,Vf=!1,ql=!1,kf=!1,Ca=0;function Di(e){e!==ir&&e.next===null&&(ir===null?Wl=ir=e:ir=ir.next=e),ql=!0,Vf||(Vf=!0,Mx())}function To(e,n){if(!kf&&ql){kf=!0;do for(var a=!1,r=Wl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var y=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Jt(42|e)+1)-1,f&=u&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,r_(r,f))}else f=xe,f=Dt(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||$t(r,f)||(a=!0,r_(r,f));r=r.next}while(a);kf=!1}}function Sx(){i_()}function i_(){ql=Vf=!1;var e=0;Ca!==0&&Lx()&&(e=Ca);for(var n=gt(),a=null,r=Wl;r!==null;){var u=r.next,f=a_(r,n);f===0?(r.next=null,a===null?Wl=u:a.next=u,u===null&&(ir=a)):(a=r,(e!==0||(f&3)!==0)&&(ql=!0)),r=u}hn!==0&&hn!==5||To(e),Ca!==0&&(Ca=0)}function a_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Jt(f),T=1<<y,I=u[y];I===-1?((T&a)===0||(T&r)!==0)&&(u[y]=Ye(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ve,a=xe,a=Dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&O(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&O(r),Cs(a)){case 2:case 8:a=kt;break;case 32:a=wt;break;case 268435456:a=ve;break;default:a=wt}return r=s_.bind(null,e),a=Wt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&O(r),e.callbackPriority=2,e.callbackNode=null,2}function s_(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var r=xe;return r=Dt(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Hg(e,r,n),a_(e,gt()),e.callbackNode!=null&&e.callbackNode===a?s_.bind(null,e):null)}function r_(e,n){if(Xl())return null;Hg(e,n,!0)}function Mx(){Ox(function(){(we&6)!==0?Wt(vt,Sx):i_()})}function Xf(){if(Ca===0){var e=Vs;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ca=e}return Ca}function o_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function l_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ex(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=o_((u[xn]||null).action),y=r.submitter;y&&(n=(n=y[xn]||null)?o_(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new al("action","action",null,r,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ca!==0){var I=y?l_(u,y):new FormData(u);uf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=y?l_(u,y):new FormData(u),uf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Wf=0;Wf<Au.length;Wf++){var qf=Au[Wf],Tx=qf.toLowerCase(),bx=qf[0].toUpperCase()+qf.slice(1);gi(Tx,"on"+bx)}gi(Fp,"onAnimationEnd"),gi(Hp,"onAnimationIteration"),gi(Gp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Gy,"onTransitionRun"),gi(Vy,"onTransitionStart"),gi(ky,"onTransitionCancel"),gi(Vp,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function c_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var T=r[y],I=T.instance,tt=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(dt){ol(dt)}u.currentTarget=null,f=I}else for(y=0;y<r.length;y++){if(T=r[y],I=T.instance,tt=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(dt){ol(dt)}u.currentTarget=null,f=I}}}}function pe(e,n){var a=n[Wr];a===void 0&&(a=n[Wr]=new Set);var r=e+"__bubble";a.has(r)||(u_(n,e,2,!1),a.add(r))}function jf(e,n,a){var r=0;n&&(r|=4),u_(a,e,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[jl]){e[jl]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(Ax.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,jf("selectionchange",!1,n))}}function u_(e,n,a,r){switch(F_(n)){case 2:var u=tS;break;case 8:u=eS;break;default:u=ch}a=u.bind(null,n,a,e),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Zf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var T=r.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=r.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=j(T),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){r=f=y;continue t}T=T.parentNode}}r=r.return}mp(function(){var tt=f,dt=fu(a),yt=[];t:{var nt=kp.get(e);if(nt!==void 0){var lt=al,Ft=e;switch(e){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":lt=yy;break;case"focusin":Ft="focus",lt=_u;break;case"focusout":Ft="blur",lt=_u;break;case"beforeblur":case"afterblur":lt=_u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=My;break;case Fp:case Hp:case Gp:lt=uy;break;case Vp:lt=Ty;break;case"scroll":case"scrollend":lt=sy;break;case"wheel":lt=Ay;break;case"copy":case"cut":case"paste":lt=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=xp;break;case"toggle":case"beforetoggle":lt=Cy}var Qt=(n&4)!==0,Be=!Qt&&(e==="scroll"||e==="scrollend"),Z=Qt?nt!==null?nt+"Capture":null:nt;Qt=[];for(var k=tt,$;k!==null;){var _t=k;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||Z===null||(_t=qr(k,Z),_t!=null&&Qt.push(Ao(k,_t,$))),Be)break;k=k.return}0<Qt.length&&(nt=new lt(nt,Ft,null,a,dt),yt.push({event:nt,listeners:Qt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",nt&&a!==uu&&(Ft=a.relatedTarget||a.fromElement)&&(j(Ft)||Ft[zi]))break t;if((lt||nt)&&(nt=dt.window===dt?dt:(nt=dt.ownerDocument)?nt.defaultView||nt.parentWindow:window,lt?(Ft=a.relatedTarget||a.toElement,lt=tt,Ft=Ft?j(Ft):null,Ft!==null&&(Be=c(Ft),Qt=Ft.tag,Ft!==Be||Qt!==5&&Qt!==27&&Qt!==6)&&(Ft=null)):(lt=null,Ft=tt),lt!==Ft)){if(Qt=vp,_t="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=xp,_t="onPointerLeave",Z="onPointerEnter",k="pointer"),Be=lt==null?nt:rt(lt),$=Ft==null?nt:rt(Ft),nt=new Qt(_t,k+"leave",lt,a,dt),nt.target=Be,nt.relatedTarget=$,_t=null,j(dt)===tt&&(Qt=new Qt(Z,k+"enter",Ft,a,dt),Qt.target=$,Qt.relatedTarget=Be,_t=Qt),Be=_t,lt&&Ft)e:{for(Qt=Rx,Z=lt,k=Ft,$=0,_t=Z;_t;_t=Qt(_t))$++;_t=0;for(var Zt=k;Zt;Zt=Qt(Zt))_t++;for(;0<$-_t;)Z=Qt(Z),$--;for(;0<_t-$;)k=Qt(k),_t--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){Qt=Z;break e}Z=Qt(Z),k=Qt(k)}Qt=null}else Qt=null;lt!==null&&f_(yt,nt,lt,Qt,!1),Ft!==null&&Be!==null&&f_(yt,Be,Ft,Qt,!0)}}t:{if(nt=tt?rt(tt):window,lt=nt.nodeName&&nt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&nt.type==="file")var Ae=Cp;else if(Ap(nt))if(wp)Ae=Iy;else{Ae=Py;var Vt=zy}else lt=nt.nodeName,!lt||lt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&cu(tt.elementType)&&(Ae=Cp):Ae=By;if(Ae&&(Ae=Ae(e,tt))){Rp(yt,Ae,a,dt);break t}Vt&&Vt(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&fn(nt,"number",nt.value)}switch(Vt=tt?rt(tt):window,e){case"focusin":(Ap(Vt)||Vt.contentEditable==="true")&&(Os=Vt,Eu=tt,to=null);break;case"focusout":to=Eu=Os=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Bp(yt,a,dt);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":Bp(yt,a,dt)}var oe;if(yu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Ns?Tp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Sp&&a.locale!=="ko"&&(Ns||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ns&&(oe=gp()):(ha=dt,pu="value"in ha?ha.value:ha.textContent,Ns=!0)),Vt=Yl(tt,Se),0<Vt.length&&(Se=new yp(Se,e,null,a,dt),yt.push({event:Se,listeners:Vt}),oe?Se.data=oe:(oe=bp(a),oe!==null&&(Se.data=oe)))),(oe=Dy?Uy(e,a):Ly(e,a))&&(Se=Yl(tt,"onBeforeInput"),0<Se.length&&(Vt=new yp("onBeforeInput","beforeinput",null,a,dt),yt.push({event:Vt,listeners:Se}),Vt.data=oe)),Ex(yt,e,tt,a,dt)}c_(yt,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qr(e,a),u!=null&&r.unshift(Ao(e,u,f)),u=qr(e,n),u!=null&&r.push(Ao(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Rx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function f_(e,n,a,r,u){for(var f=n._reactName,y=[];a!==null&&a!==r;){var T=a,I=T.alternate,tt=T.stateNode;if(T=T.tag,I!==null&&I===r)break;T!==5&&T!==26&&T!==27||tt===null||(I=tt,u?(tt=qr(a,f),tt!=null&&y.unshift(Ao(a,tt,I))):u||(tt=qr(a,f),tt!=null&&y.push(Ao(a,tt,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Cx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function h_(e){return(typeof e=="string"?e:""+e).replace(Cx,`
`).replace(wx,"")}function d_(e,n){return n=h_(n),h_(e)===n}function Pe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ds(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ds(e,""+r);break;case"className":Ge(e,"class",r);break;case"tabIndex":Ge(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(e,a,r);break;case"style":dp(e,r,f);break;case"data":if(n!=="object"){Ge(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Xe(e,"popover",r);break;case"xlinkActuate":se(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":se(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":se(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":se(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":se(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":se(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":se(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":se(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":se(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=iy.get(a)||a,Xe(e,a,r))}}function Kf(e,n,a,r,u,f){switch(a){case"style":dp(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ds(e,r):(typeof r=="number"||typeof r=="bigint")&&Ds(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xe(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,f,y,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),r&&Pe(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var T=f=y=u=null,I=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":u=dt;break;case"type":y=dt;break;case"checked":I=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Pe(e,n,r,dt,a,null)}}On(e,f,T,I,tt,y,u,!1);return;case"select":pe("invalid",e),r=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":r=T;default:Pe(e,n,u,T,a,null)}n=f,a=y,e.multiple=!!r,n!=null?tn(e,!!r,n,!1):a!=null&&tn(e,!!r,a,!0);return;case"textarea":pe("invalid",e),f=u=r=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Pe(e,n,y,T,a,null)}Ai(e,r,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(e,n,I,r,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<bo.length;r++)pe(bo[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,tt,r,a,null)}return;default:if(cu(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Kf(e,n,dt,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Pe(e,n,T,r,a,null))}function Dx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,T=null,I=null,tt=null,dt=null;for(lt in a){var yt=a[lt];if(a.hasOwnProperty(lt)&&yt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=yt;default:r.hasOwnProperty(lt)||Pe(e,n,lt,null,r,yt)}}for(var nt in r){var lt=r[nt];if(yt=a[nt],r.hasOwnProperty(nt)&&(lt!=null||yt!=null))switch(nt){case"type":f=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":dt=lt;break;case"value":y=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==yt&&Pe(e,n,nt,lt,r,yt)}}wn(e,y,T,I,tt,dt,f,u);return;case"select":lt=y=T=nt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:r.hasOwnProperty(f)||Pe(e,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":y=f;default:f!==I&&Pe(e,n,u,f,r,I)}n=T,a=y,r=lt,nt!=null?tn(e,!!a,nt,!1):!!r!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":lt=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(e,n,T,null,r,u)}for(y in r)if(u=r[y],f=a[y],r.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":nt=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Pe(e,n,y,u,r,f)}ws(e,nt,lt);return;case"option":for(var Ft in a)if(nt=a[Ft],a.hasOwnProperty(Ft)&&nt!=null&&!r.hasOwnProperty(Ft))switch(Ft){case"selected":e.selected=!1;break;default:Pe(e,n,Ft,null,r,nt)}for(I in r)if(nt=r[I],lt=a[I],r.hasOwnProperty(I)&&nt!==lt&&(nt!=null||lt!=null))switch(I){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,I,nt,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)nt=a[Qt],a.hasOwnProperty(Qt)&&nt!=null&&!r.hasOwnProperty(Qt)&&Pe(e,n,Qt,null,r,nt);for(tt in r)if(nt=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&nt!==lt&&(nt!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Pe(e,n,tt,nt,r,lt)}return;default:if(cu(n)){for(var Be in a)nt=a[Be],a.hasOwnProperty(Be)&&nt!==void 0&&!r.hasOwnProperty(Be)&&Kf(e,n,Be,void 0,r,nt);for(dt in r)nt=r[dt],lt=a[dt],!r.hasOwnProperty(dt)||nt===lt||nt===void 0&&lt===void 0||Kf(e,n,dt,nt,r,lt);return}}for(var Z in a)nt=a[Z],a.hasOwnProperty(Z)&&nt!=null&&!r.hasOwnProperty(Z)&&Pe(e,n,Z,null,r,nt);for(yt in r)nt=r[yt],lt=a[yt],!r.hasOwnProperty(yt)||nt===lt||nt==null&&lt==null||Pe(e,n,yt,nt,r,lt)}function p_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ux(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,y=u.initiatorType,T=u.duration;if(f&&T&&p_(y)){for(y=0,T=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],tt=I.startTime;if(tt>T)break;var dt=I.transferSize,yt=I.initiatorType;dt&&p_(yt)&&(I=I.responseEnd,y+=dt*(I<T?1:(T-tt)/(I-tt)))}if(--r,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qf=null,Jf=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function m_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $f(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var th=null;function Lx(){var e=window.event;return e&&e.type==="popstate"?e===th?!1:(th=e,!0):(th=null,!1)}var __=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,v_=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof v_<"u"?function(e){return v_.resolve(null).then(e).catch(zx)}:__;function zx(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function y_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),or(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var y=f.nextSibling,T=f.nodeName;f[Ka]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);or(n)}function x_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function eh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Px(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function Bx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function S_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function nh(e){return e.data==="$?"||e.data==="$~"}function ih(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ix(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ah=null;function M_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function E_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function T_(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);C(e)}var ui=new Map,b_=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=J.d;J.d={f:Fx,r:Hx,D:Gx,C:Vx,L:kx,m:Xx,X:qx,S:Wx,M:jx};function Fx(){var e=$i.f(),n=Gl();return e||n}function Hx(e){var n=st(e);n!==null&&n.tag===5&&n.type==="form"?Vm(n):$i.r(e)}var ar=typeof document>"u"?null:document;function A_(e,n,a){var r=ar;if(r&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),b_.has(u)||(b_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Tn(n,"link",e),St(n),r.head.appendChild(n)))}}function Gx(e){$i.D(e),A_("dns-prefetch",e,null)}function Vx(e,n){$i.C(e,n),A_("preconnect",e,n)}function kx(e,n,a){$i.L(e,n,a);var r=ar;if(r&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var f=u;switch(n){case"style":f=sr(e);break;case"script":f=rr(e)}ui.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Co(f))||n==="script"&&r.querySelector(wo(f))||(n=r.createElement("link"),Tn(n,"link",e),St(n),r.head.appendChild(n)))}}function Xx(e,n){$i.m(e,n);var a=ar;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(r)+'"][href="'+he(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(e)}if(!ui.has(f)&&(e=_({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}r=a.createElement("link"),Tn(r,"link",e),St(r),a.head.appendChild(r)}}}function Wx(e,n,a){$i.S(e,n,a);var r=ar;if(r&&e){var u=Y(r).hoistableStyles,f=sr(e);n=n||"default";var y=u.get(f);if(!y){var T={loading:0,preload:null};if(y=r.querySelector(Co(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&sh(e,a);var I=y=r.createElement("link");St(I),Tn(I,"link",e),I._p=new Promise(function(tt,dt){I.onload=tt,I.onerror=dt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ql(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(f,y)}}}function qx(e,n){$i.X(e,n);var a=ar;if(a&&e){var r=Y(a).hoistableScripts,u=rr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=_({src:e,async:!0},n),(n=ui.get(u))&&rh(e,n),f=a.createElement("script"),St(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function jx(e,n){$i.M(e,n);var a=ar;if(a&&e){var r=Y(a).hoistableScripts,u=rr(e),f=r.get(u);f||(f=a.querySelector(wo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&rh(e,n),f=a.createElement("script"),St(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function R_(e,n,a,r){var u=(u=Mt.current)?Kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=Y(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var f=Y(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Co(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||Yx(u,e,a,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=Y(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+he(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function C_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Yx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),St(n),e.head.appendChild(n))}function rr(e){return'[src="'+he(e)+'"]'}function wo(e){return"script[async]"+e}function w_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(r)return n.instance=r,St(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),St(r),Tn(r,"style",u),Ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=sr(a.href);var f=e.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,St(f),f;r=C_(a),(u=ui.get(u))&&sh(r,u),f=(e.ownerDocument||e).createElement("link"),St(f);var y=f;return y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),Tn(f,"link",r),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=rr(a.src),(u=e.querySelector(wo(f)))?(n.instance=u,St(u),u):(r=a,(u=ui.get(f))&&(r=_({},a),rh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Tn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ql(r,a.precedence,e));return n.instance}function Ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,y=0;y<r.length;y++){var T=r[y];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function D_(e,n,a){if(Jl===null){var r=new Map,u=Jl=new Map;u.set(a,r)}else u=Jl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ka]||f[Ke]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var T=r.get(y);T?T.push(f):r.set(y,[f])}}return r}function U_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function L_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kx(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=sr(r.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,St(f);return}f=n.ownerDocument||n,r=C_(r),(u=ui.get(u))&&sh(r,u),f=f.createElement("link"),St(f);var y=f;y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),Tn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var oh=0;function Qx(e,n){return e.stylesheets&&e.count===0&&ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&oh===0&&(oh=62500*Ux());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>oh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tc=null;function ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tc=new Map,n.forEach(Jx,e),tc=null,$l.call(e))}function Jx(e,n){if(!(n.state.loading&4)){var a=tc.get(e);if(a)var r=a.get(null);else{a=new Map,tc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,u),a.set(y,u),this.count++,r=$l.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:U,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function $x(e,n,a,r,u,f,y,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function N_(e,n,a,r,u,f,y,T,I,tt,dt,yt){return e=new $x(e,n,a,y,I,tt,dt,yt,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},ku(f),e}function O_(e){return e?(e=Bs,e):Bs}function z_(e,n,a,r,u,f){u=O_(u),r.context===null?r.context=u:r.pendingContext=u,r=va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ya(e,r,n),a!==null&&(Xn(a,e,n),oo(a,e,n))}function P_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function lh(e,n){P_(e,n),(e=e.alternate)&&P_(e,n)}function B_(e){if(e.tag===13||e.tag===31){var n=es(e,67108864);n!==null&&Xn(n,e,67108864),lh(e,67108864)}}function I_(e){if(e.tag===13||e.tag===31){var n=Jn();n=Ya(n);var a=es(e,n);a!==null&&Xn(a,e,n),lh(e,n)}}var nc=!0;function tS(e,n,a,r){var u=P.T;P.T=null;var f=J.p;try{J.p=2,ch(e,n,a,r)}finally{J.p=f,P.T=u}}function eS(e,n,a,r){var u=P.T;P.T=null;var f=J.p;try{J.p=8,ch(e,n,a,r)}finally{J.p=f,P.T=u}}function ch(e,n,a,r){if(nc){var u=uh(r);if(u===null)Zf(e,n,r,ic,a),H_(e,r);else if(iS(u,e,n,a,r))r.stopPropagation();else if(H_(e,r),n&4&&-1<nS.indexOf(e)){for(;u!==null;){var f=st(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ct(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var I=1<<31-Jt(y);T.entanglements[1]|=I,y&=~I}Di(f),(we&6)===0&&(Fl=gt()+500,To(0))}}break;case 31:case 13:T=es(f,2),T!==null&&Xn(T,f,2),Gl(),lh(f,2)}if(f=uh(r),f===null&&Zf(e,n,r,ic,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Zf(e,n,r,null,a)}}function uh(e){return e=fu(e),fh(e)}var ic=null;function fh(e){if(ic=null,e=j(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function F_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case vt:return 2;case kt:return 8;case wt:case Bt:return 32;case ve:return 268435456;default:return 32}default:return 32}}var hh=!1,Da=null,Ua=null,La=null,Uo=new Map,Lo=new Map,Na=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=st(n),n!==null&&B_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function iS(e,n,a,r,u){switch(n){case"focusin":return Da=No(Da,e,n,a,r,u),!0;case"dragenter":return Ua=No(Ua,e,n,a,r,u),!0;case"mouseover":return La=No(La,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,e,n,a,r,u)),!0}return!1}function G_(e){var n=j(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Za(e.priority,function(){I_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Za(e.priority,function(){I_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=uh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);uu=r,a.target.dispatchEvent(r),uu=null}else return n=st(a),n!==null&&B_(n),e.blockedOn=a,!1;n.shift()}return!0}function V_(e,n,a){ac(e)&&a.delete(n)}function aS(){hh=!1,Da!==null&&ac(Da)&&(Da=null),Ua!==null&&ac(Ua)&&(Ua=null),La!==null&&ac(La)&&(La=null),Uo.forEach(V_),Lo.forEach(V_)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,hh||(hh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,aS)))}var rc=null;function k_(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(fh(r||a)===null)continue;break}var f=st(a);f!==null&&(e.splice(n,3),n-=3,uf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function or(e){function n(I){return sc(I,e)}Da!==null&&sc(Da,e),Ua!==null&&sc(Ua,e),La!==null&&sc(La,e),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Na.length;a++){var r=Na[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)G_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],y=u[xn]||null;if(typeof f=="function")y||k_(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[xn]||null)T=y.formAction;else if(fh(u)!==null)continue}else T=y.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),k_(a)}}}function X_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function dh(e){this._internalRoot=e}oc.prototype.render=dh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();z_(a,r,e,n,null,null)},oc.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;z_(e.current,2,null,e,null,null),Gl(),n[zi]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&G_(e)}};var W_=t.version;if(W_!=="19.2.6")throw Error(s(527,W_,"19.2.6"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var sS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{jt=lc.inject(sS),Xt=lc}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Jm,f=$m,y=tg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=N_(e,1,!1,null,null,a,r,null,u,f,y,X_),e[zi]=n.current,Yf(e),new dh(n)},zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Jm,y=$m,T=tg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=N_(e,1,!0,n,a??null,r,u,I,f,y,T,X_),n.context=O_(null),a=n.current,r=Jn(),r=Ya(r),u=va(r),u.callback=null,ya(a,u,r),a=r,n.current.lanes=a,yn(n,a),Di(n),e[zi]=n.current,Yf(e),new oc(n)},zo.version="19.2.6",zo}var e0;function _S(){if(e0)return gh.exports;e0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),gh.exports=gS(),gh.exports}var vS=_S();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="171",yS=0,n0=1,xS=2,hv=1,SS=2,sa=3,Wa=0,Wn=1,ra=2,Va=0,Cr=1,i0=2,a0=3,s0=4,MS=5,Ms=100,ES=101,TS=102,bS=103,AS=104,RS=200,CS=201,wS=202,DS=203,sd=204,rd=205,US=206,LS=207,NS=208,OS=209,zS=210,PS=211,BS=212,IS=213,FS=214,od=0,ld=1,cd=2,Lr=3,ud=4,fd=5,hd=6,dd=7,dv=0,HS=1,GS=2,ka=0,VS=1,kS=2,XS=3,WS=4,qS=5,jS=6,YS=7,pv=300,Nr=301,Or=302,pd=303,md=304,au=306,gd=1e3,Ts=1001,_d=1002,Ti=1003,ZS=1004,cc=1005,Ni=1006,xh=1007,bs=1008,fa=1009,mv=1010,gv=1011,jo=1012,Jd=1013,As=1014,la=1015,Yo=1016,$d=1017,tp=1018,zr=1020,_v=35902,vv=1021,yv=1022,Ei=1023,xv=1024,Sv=1025,wr=1026,Pr=1027,Mv=1028,ep=1029,Ev=1030,np=1031,ip=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,vd=35840,yd=35841,xd=35842,Sd=35843,Md=36196,Ed=37492,Td=37496,bd=37808,Ad=37809,Rd=37810,Cd=37811,wd=37812,Dd=37813,Ud=37814,Ld=37815,Nd=37816,Od=37817,zd=37818,Pd=37819,Bd=37820,Id=37821,jc=36492,Fd=36494,Hd=36495,Tv=36283,Gd=36284,Vd=36285,kd=36286,KS=3200,QS=3201,bv=0,JS=1,Ga="",hi="srgb",Br="srgb-linear",Qc="linear",Ie="srgb",lr=7680,r0=519,$S=512,tM=513,eM=514,Av=515,nM=516,iM=517,aM=518,sM=519,Xd=35044,o0="300 es",ca=2e3,Jc=2001;class Fr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Wd=180/Math.PI;function Xa(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function me(o,t,i){return Math.max(t,Math.min(i,o))}function rM(o,t){return(o%t+t)%t}function Sh(o,t,i){return(1-i)*o+i*t}function Li(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ie{constructor(t=0,i=0){ie.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,s,l,c,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],S=s[5],E=s[8],b=l[0],M=l[3],v=l[6],N=l[1],U=l[4],D=l[7],G=l[2],B=l[5],z=l[8];return c[0]=h*b+d*N+m*G,c[3]=h*M+d*U+m*B,c[6]=h*v+d*D+m*z,c[1]=p*b+g*N+_*G,c[4]=p*M+g*U+_*B,c[7]=p*v+g*D+_*z,c[2]=x*b+S*N+E*G,c[5]=x*M+S*U+E*B,c[8]=x*v+S*D+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*c,S=p*c-h*m,E=i*_+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*p-g*s)*b,t[2]=(d*s-l*h)*b,t[3]=x*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Mh.makeScale(t,i)),this}rotate(t){return this.premultiply(Mh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Mh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new le;function Rv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function $c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oM(){const o=$c("canvas");return o.style.display="block",o}const l0={};function Ar(o){o in l0||(l0[o]=!0,console.warn(o))}function lM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function cM(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uM(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const c0=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u0=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const o={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Qc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Br]:{primaries:t,whitePoint:s,transfer:Qc,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ce=fM();function ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cr;class hM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cr===void 0&&(cr=$c("canvas")),cr.width=t.width,cr.height=t.height;const s=cr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=cr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=$c("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ua(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dM=0;class Cv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Xa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pM=0;class In extends Fr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=Ts,l=Ts,c=Ni,h=bs,d=Ei,m=fa,p=In.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Xa(),this.name="",this.source=new Cv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gd:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case _d:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gd:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case _d:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=pv;In.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],S=m[5],E=m[9],b=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(S+1)/2,G=(v+1)/2,B=(g+x)/4,z=(_+b)/4,H=(E+M)/4;return U>D&&U>G?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=B/s,c=z/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=H/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=H/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-E)*(M-E)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(_-b)/N,this.z=(x-g)/N,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends Fr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new In(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Cv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends mM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class wv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(_!==b||m!==x||p!==S||g!==E){let M=1-d;const v=m*x+p*S+g*E+_*b,N=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const G=Math.sqrt(U),B=Math.atan2(G,v*N);M=Math.sin(M*B)/G,d=Math.sin(d*B)/G}const D=d*N;if(m=m*M+x*D,p=p*M+S*D,g=g*M+E*D,_=_*M+b*D,M===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=G,p*=G,g*=G,_*=G}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+g*_+m*S-p*x,t[i+1]=m*E+g*x+p*_-d*S,t[i+2]=p*E+g*S+d*x-m*_,t[i+3]=g*E-d*_-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"YZX":this._x=x*g*_+p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_-x*S*E;break;case"XZY":this._x=x*g*_-p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,i=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(f0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(f0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Th.copy(this).projectOnVector(t),this.sub(Th)}reflect(t){return this.sub(Th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Th=new X,f0=new Zo;class Ko{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,yi):yi.fromBufferAttribute(c,h),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uc.copy(s.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),fc.subVectors(this.max,Po),ur.subVectors(t.a,Po),fr.subVectors(t.b,Po),hr.subVectors(t.c,Po),za.subVectors(fr,ur),Pa.subVectors(hr,fr),ps.subVectors(ur,hr);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-ps.z,ps.y,za.z,0,-za.x,Pa.z,0,-Pa.x,ps.z,0,-ps.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-ps.y,ps.x,0];return!bh(i,ur,fr,hr,fc)||(i=[1,0,0,0,1,0,0,0,1],!bh(i,ur,fr,hr,fc))?!1:(hc.crossVectors(za,Pa),i=[hc.x,hc.y,hc.z],bh(i,ur,fr,hr,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new X,new X,new X,new X,new X,new X,new X,new X],yi=new X,uc=new Ko,ur=new X,fr=new X,hr=new X,za=new X,Pa=new X,ps=new X,Po=new X,fc=new X,hc=new X,ms=new X;function bh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){ms.fromArray(o,c);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),p=i.dot(ms),g=s.dot(ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const _M=new Ko,Bo=new X,Ah=new X;class Qo{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):_M.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Ah)),this.expandByPoint(Bo.copy(t.center).sub(Ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new X,Rh=new X,dc=new X,Ba=new X,Ch=new X,pc=new X,wh=new X;class ap{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Rh.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(Rh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(dc),d=Ba.dot(this.direction),m=-Ba.dot(dc),p=Ba.lengthSq(),g=Math.abs(1-h*h);let _,x,S,E;if(g>0)if(_=h*m-d,x=h*d-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const b=1/g;_*=b,x*=b,S=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),S=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Rh).addScaledVector(dc,x),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,s,l,c){Ch.subVectors(i,t),pc.subVectors(s,t),wh.crossVectors(Ch,pc);let h=this.direction.dot(wh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(pc.crossVectors(Ba,pc));if(m<0)return null;const p=d*this.direction.dot(Ch.cross(Ba));if(p<0||m+p>h)return null;const g=-d*Ba.dot(wh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,i,s,l,c,h,d,m,p,g,_,x,S,E,b,M){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,x,S,E,b,M)}set(t,i,s,l,c,h,d,m,p,g,_,x,S,E,b,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=b,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/dr.setFromMatrixColumn(t,0).length(),c=1/dr.setFromMatrixColumn(t,1).length(),h=1/dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,S=h*_,E=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+E*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,S=m*_,E=p*g,b=p*_;i[0]=x+b*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=S*d-E,i[6]=b+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,S=m*_,E=p*g,b=p*_;i[0]=x-b*d,i[4]=-h*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*g,i[9]=b-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,S=h*_,E=d*g,b=d*_;i[0]=m*g,i[4]=E*p-S,i[8]=x*p+b,i[1]=m*_,i[5]=b*p+x,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-x*_,i[8]=E*_+S,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+E,i[10]=x-b*_}else if(t.order==="XZY"){const x=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+b,i[5]=h*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=b*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vM,t,yM)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ia.crossVectors(s,$n),Ia.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ia.crossVectors(s,$n)),Ia.normalize(),mc.crossVectors($n,Ia),l[0]=Ia.x,l[4]=mc.x,l[8]=$n.x,l[1]=Ia.y,l[5]=mc.y,l[9]=$n.y,l[2]=Ia.z,l[6]=mc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],S=s[13],E=s[2],b=s[6],M=s[10],v=s[14],N=s[3],U=s[7],D=s[11],G=s[15],B=l[0],z=l[4],H=l[8],w=l[12],R=l[1],F=l[5],et=l[9],at=l[13],ut=l[2],mt=l[6],P=l[10],J=l[14],Q=l[3],Tt=l[7],pt=l[11],L=l[15];return c[0]=h*B+d*R+m*ut+p*Q,c[4]=h*z+d*F+m*mt+p*Tt,c[8]=h*H+d*et+m*P+p*pt,c[12]=h*w+d*at+m*J+p*L,c[1]=g*B+_*R+x*ut+S*Q,c[5]=g*z+_*F+x*mt+S*Tt,c[9]=g*H+_*et+x*P+S*pt,c[13]=g*w+_*at+x*J+S*L,c[2]=E*B+b*R+M*ut+v*Q,c[6]=E*z+b*F+M*mt+v*Tt,c[10]=E*H+b*et+M*P+v*pt,c[14]=E*w+b*at+M*J+v*L,c[3]=N*B+U*R+D*ut+G*Q,c[7]=N*z+U*F+D*mt+G*Tt,c[11]=N*H+U*et+D*P+G*pt,c[15]=N*w+U*at+D*J+G*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],S=t[14],E=t[3],b=t[7],M=t[11],v=t[15];return E*(+c*m*_-l*p*_-c*d*x+s*p*x+l*d*S-s*m*S)+b*(+i*m*S-i*p*x+c*h*x-l*h*S+l*p*g-c*m*g)+M*(+i*p*_-i*d*S-c*h*_+s*h*S+c*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*h*_-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],S=t[11],E=t[12],b=t[13],M=t[14],v=t[15],N=_*M*p-b*x*p+b*m*S-d*M*S-_*m*v+d*x*v,U=E*x*p-g*M*p-E*m*S+h*M*S+g*m*v-h*x*v,D=g*b*p-E*_*p+E*d*S-h*b*S-g*d*v+h*_*v,G=E*_*m-g*b*m-E*d*x+h*b*x+g*d*M-h*_*M,B=i*N+s*U+l*D+c*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=N*z,t[1]=(b*x*c-_*M*c-b*l*S+s*M*S+_*l*v-s*x*v)*z,t[2]=(d*M*c-b*m*c+b*l*p-s*M*p-d*l*v+s*m*v)*z,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*S-s*m*S)*z,t[4]=U*z,t[5]=(g*M*c-E*x*c+E*l*S-i*M*S-g*l*v+i*x*v)*z,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*v-i*m*v)*z,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*S+i*m*S)*z,t[8]=D*z,t[9]=(E*_*c-g*b*c-E*s*S+i*b*S+g*s*v-i*_*v)*z,t[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*v+i*d*v)*z,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*S-i*d*S)*z,t[12]=G*z,t[13]=(g*b*l-E*_*l+E*s*x-i*b*x-g*s*M+i*_*M)*z,t[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*M-i*d*M)*z,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*x+i*d*x)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,S=c*g,E=c*_,b=h*g,M=h*_,v=d*_,N=m*p,U=m*g,D=m*_,G=s.x,B=s.y,z=s.z;return l[0]=(1-(b+v))*G,l[1]=(S+D)*G,l[2]=(E-U)*G,l[3]=0,l[4]=(S-D)*B,l[5]=(1-(x+v))*B,l[6]=(M+N)*B,l[7]=0,l[8]=(E+U)*z,l[9]=(M-N)*z,l[10]=(1-(x+b))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=dr.set(l[0],l[1],l[2]).length();const h=dr.set(l[4],l[5],l[6]).length(),d=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,g=1/h,_=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ca){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),x=(s+l)/(s-l);let S,E;if(d===ca)S=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Jc)S=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ca){const m=this.elements,p=1/(i-t),g=1/(s-l),_=1/(h-c),x=(i+t)*p,S=(s+l)*g;let E,b;if(d===ca)E=(h+c)*_,b=-2*_;else if(d===Jc)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const dr=new X,xi=new ke,vM=new X(0,0,0),yM=new X(1,1,1),Ia=new X,mc=new X,$n=new X,h0=new ke,d0=new Zo;class Oi{constructor(t=0,i=0,s=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return h0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(h0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return d0.setFromEuler(this),this.setFromQuaternion(d0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xM=0;const p0=new X,pr=new Zo,na=new ke,gc=new X,Io=new X,SM=new X,MM=new Zo,m0=new X(1,0,0),g0=new X(0,1,0),_0=new X(0,0,1),v0={type:"added"},EM={type:"removed"},mr={type:"childadded",child:null},Dh={type:"childremoved",child:null};class Rn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new X,i=new Oi,s=new Zo,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new le}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(m0,t)}rotateY(t){return this.rotateOnAxis(g0,t)}rotateZ(t){return this.rotateOnAxis(_0,t)}translateOnAxis(t,i){return p0.copy(t).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(m0,t)}translateY(t){return this.translateOnAxis(g0,t)}translateZ(t){return this.translateOnAxis(_0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Io,gc,this.up):na.lookAt(gc,Io,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),pr.setFromRotationMatrix(na),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(v0),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(EM),Dh.child=t,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(v0),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,SM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,MM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new X(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new X,ia=new X,Uh=new X,aa=new X,gr=new X,_r=new X,y0=new X,Lh=new X,Nh=new X,Oh=new X,zh=new He,Ph=new He,Bh=new He;class ni{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Si.subVectors(l,i),ia.subVectors(s,i),Uh.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(ia),m=Si.dot(Uh),p=ia.dot(ia),g=ia.dot(Uh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(p*m-d*g)*x,E=(h*g-d*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return zh.setScalar(0),Ph.setScalar(0),Bh.setScalar(0),zh.fromBufferAttribute(t,i),Ph.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(zh,c.x),h.addScaledVector(Ph,c.y),h.addScaledVector(Bh,c.z),h}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),ia.subVectors(t,i),Si.cross(ia).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Si.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ni.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ni.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;gr.subVectors(l,s),_r.subVectors(c,s),Lh.subVectors(t,s);const m=gr.dot(Lh),p=_r.dot(Lh);if(m<=0&&p<=0)return i.copy(s);Nh.subVectors(t,l);const g=gr.dot(Nh),_=_r.dot(Nh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(gr,h);Oh.subVectors(t,c);const S=gr.dot(Oh),E=_r.dot(Oh);if(E>=0&&S<=E)return i.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(_r,d);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return y0.subVectors(c,l),d=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(y0,d);const v=1/(M+b+x);return h=b*v,d=x*v,i.copy(s).addScaledVector(gr,h).addScaledVector(_r,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Ih(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=rM(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ih(h,c,t+1/3),this.g=Ih(h,c,t),this.b=Ih(h,c,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=hi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=Uv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ce.fromWorkingColorSpace(Ln.copy(this),t),Math.round(me(Ln.r*255,0,255))*65536+Math.round(me(Ln.g*255,0,255))*256+Math.round(me(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){Ce.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(_c);const s=Sh(Fa.h,_c.h,i),l=Sh(Fa.s,_c.s,i),c=Sh(Fa.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new ge;ge.NAMES=Uv;let TM=0;class ja extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Cr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sd&&(s.blendSrc=this.blendSrc),this.blendDst!==rd&&(s.blendDst=this.blendDst),this.blendEquation!==Ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ur extends ja{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new X,vc=new ie;class di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Xd,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Li(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Li(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Li(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Li(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Li(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xd&&(t.usage=this.usage),t}}class Lv extends di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Nv extends di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $e extends di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let bM=0;const fi=new ke,Fh=new Rn,vr=new X,ti=new Ko,Fo=new Ko,_n=new X;class vn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rv(t)?Nv:Lv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new le().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return Fh.lookAt(t),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $e(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ti.min,Fo.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Fo.max),ti.expandByPoint(_n)):(ti.expandByPoint(Fo.min),ti.expandByPoint(Fo.max))}ti.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(vr.fromBufferAttribute(t,p),_n.add(vr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let H=0;H<s.count;H++)d[H]=new X,m[H]=new X;const p=new X,g=new X,_=new X,x=new ie,S=new ie,E=new ie,b=new X,M=new X;function v(H,w,R){p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,R),x.fromBufferAttribute(c,H),S.fromBufferAttribute(c,w),E.fromBufferAttribute(c,R),g.sub(p),_.sub(p),S.sub(x),E.sub(x);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(F),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(F),d[H].add(b),d[w].add(b),d[R].add(b),m[H].add(M),m[w].add(M),m[R].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let H=0,w=N.length;H<w;++H){const R=N[H],F=R.start,et=R.count;for(let at=F,ut=F+et;at<ut;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const U=new X,D=new X,G=new X,B=new X;function z(H){G.fromBufferAttribute(l,H),B.copy(G);const w=d[H];U.copy(w),U.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(B,w);const F=D.dot(m[H])<0?-1:1;h.setXYZW(H,U.x,U.y,U.z,F)}for(let H=0,w=N.length;H<w;++H){const R=N[H],F=R.start,et=R.count;for(let at=F,ut=F+et;at<ut;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new X,c=new X,h=new X,d=new X,m=new X,p=new X,g=new X,_=new X;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),b=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let S=0,E=0;for(let b=0,M=m.length;b<M;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*g;for(let v=0;v<g;v++)x[E++]=p[S++]}return new di(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new vn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=t(x,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new ke,gs=new ap,yc=new Qo,S0=new X,xc=new X,Sc=new X,Mc=new X,Hh=new X,Ec=new X,M0=new X,Tc=new X;class bn extends Rn{constructor(t=new vn,i=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ec.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Hh.fromBufferAttribute(_,t),h?Ec.addScaledVector(Hh,g):Ec.addScaledVector(Hh.sub(i),g))}i.add(Ec)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(yc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(yc,S0)===null||gs.origin.distanceToSquared(S0)>(t.far-t.near)**2))&&(x0.copy(c).invert(),gs.copy(t.ray).applyMatrix4(x0),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,gs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=N,G=U;D<G;D+=3){const B=d.getX(D),z=d.getX(D+1),H=d.getX(D+2);l=bc(this,v,t,s,p,g,_,B,z,H),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,v=b;M<v;M+=3){const N=d.getX(M),U=d.getX(M+1),D=d.getX(M+2);l=bc(this,h,t,s,p,g,_,N,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=N,G=U;D<G;D+=3){const B=D,z=D+1,H=D+2;l=bc(this,v,t,s,p,g,_,B,z,H),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let M=E,v=b;M<v;M+=3){const N=M,U=M+1,D=M+2;l=bc(this,h,t,s,p,g,_,N,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function AM(o,t,i,s,l,c,h,d){let m;if(t.side===Wn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Wa,d),m===null)return null;Tc.copy(d),Tc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:o}}function bc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,Mc);const g=AM(o,t,i,s,xc,Sc,Mc,M0);if(g){const _=new X;ni.getBarycoord(M0,xc,Sc,Mc,_),l&&(g.uv=ni.getInterpolatedAttribute(l,d,m,p,_,new ie)),c&&(g.uv1=ni.getInterpolatedAttribute(c,d,m,p,_,new ie)),h&&(g.normal=ni.getInterpolatedAttribute(h,d,m,p,_,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new X,materialIndex:0};ni.getNormal(xc,Sc,Mc,x.normal),g.face=x,g.barycoord=_}return g}class Hr extends vn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(_,2));function E(b,M,v,N,U,D,G,B,z,H,w){const R=D/z,F=G/H,et=D/2,at=G/2,ut=B/2,mt=z+1,P=H+1;let J=0,Q=0;const Tt=new X;for(let pt=0;pt<P;pt++){const L=pt*F-at;for(let K=0;K<mt;K++){const ht=K*R-et;Tt[b]=ht*N,Tt[M]=L*U,Tt[v]=ut,p.push(Tt.x,Tt.y,Tt.z),Tt[b]=0,Tt[M]=0,Tt[v]=B>0?1:-1,g.push(Tt.x,Tt.y,Tt.z),_.push(K/z),_.push(1-pt/H),J+=1}}for(let pt=0;pt<H;pt++)for(let L=0;L<z;L++){const K=x+L+mt*pt,ht=x+L+mt*(pt+1),W=x+(L+1)+mt*(pt+1),ct=x+(L+1)+mt*pt;m.push(K,ht,ct),m.push(ht,W,ct),Q+=6}d.addGroup(S,Q,w),S+=Q,x+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ir(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Bn(o){const t={};for(let i=0;i<o.length;i++){const s=Ir(o[i]);for(const l in s)t[l]=s[l]}return t}function RM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ov(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const CM={clone:Ir,merge:Bn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends ja{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=RM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class zv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=ca}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new X,E0=new ie,T0=new ie;class ei extends zv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,E0,T0),i.subVectors(T0,E0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const yr=-90,xr=1;class UM extends Rn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(yr,xr,t,i);l.layers=this.layers,this.add(l);const c=new ei(yr,xr,t,i);c.layers=this.layers,this.add(c);const h=new ei(yr,xr,t,i);h.layers=this.layers,this.add(h);const d=new ei(yr,xr,t,i);d.layers=this.layers,this.add(d);const m=new ei(yr,xr,t,i);m.layers=this.layers,this.add(m);const p=new ei(yr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Pv extends In{constructor(t,i,s,l,c,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Nr,super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class LM extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Pv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Hr(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Ir(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Va});c.uniforms.tEquirect.value=i;const h=new bn(l,c),d=i.minFilter;return i.minFilter===bs&&(i.minFilter=Ni),new UM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class NM extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class OM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Xd,this.updateRanges=[],this.version=0,this.uuid=Xa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new X;class tu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Li(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Li(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Li(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Li(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Li(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new di(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new tu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bv extends ja{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Sr;const Ho=new X,Mr=new X,Er=new X,Tr=new ie,Go=new ie,Iv=new ke,Ac=new X,Vo=new X,Rc=new X,b0=new ie,Gh=new ie,A0=new ie;class zM extends Rn{constructor(t=new Bv){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new vn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new OM(i,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new tu(s,3,0,!1)),Sr.setAttribute("uv",new tu(s,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new ie(.5,.5)}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Iv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-Er.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Cc(Ac.set(-.5,-.5,0),Er,h,Mr,l,c),Cc(Vo.set(.5,-.5,0),Er,h,Mr,l,c),Cc(Rc.set(.5,.5,0),Er,h,Mr,l,c),b0.set(0,0),Gh.set(1,0),A0.set(1,1);let d=t.ray.intersectTriangle(Ac,Vo,Rc,!1,Ho);if(d===null&&(Cc(Vo.set(-.5,.5,0),Er,h,Mr,l,c),Gh.set(0,1),d=t.ray.intersectTriangle(Ac,Rc,Vo,!1,Ho),d===null))return;const m=t.ray.origin.distanceTo(Ho);m<t.near||m>t.far||i.push({distance:m,point:Ho.clone(),uv:ni.getInterpolation(Ho,Ac,Vo,Rc,b0,Gh,A0,new ie),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cc(o,t,i,s,l,c){Tr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Go.x=c*Tr.x-l*Tr.y,Go.y=l*Tr.x+c*Tr.y):Go.copy(Tr),o.copy(t),o.x+=Go.x,o.y+=Go.y,o.applyMatrix4(Iv)}const Vh=new X,PM=new X,BM=new le;class xs{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Vh.subVectors(s,i).cross(PM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||BM.getNormalMatrix(t),l=this.coplanarPoint(Vh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Qo,wc=new X;class sp{constructor(t=new xs,i=new xs,s=new xs,l=new xs,c=new xs,h=new xs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ca){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],x=l[7],S=l[8],E=l[9],b=l[10],M=l[11],v=l[12],N=l[13],U=l[14],D=l[15];if(s[0].setComponents(m-c,x-p,M-S,D-v).normalize(),s[1].setComponents(m+c,x+p,M+S,D+v).normalize(),s[2].setComponents(m+h,x+g,M+E,D+N).normalize(),s[3].setComponents(m-h,x-g,M-E,D-N).normalize(),s[4].setComponents(m-d,x-_,M-b,D-U).normalize(),i===ca)s[5].setComponents(m+d,x+_,M+b,D+U).normalize();else if(i===Jc)s[5].setComponents(d,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zc extends ja{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eu=new X,nu=new X,R0=new ke,ko=new ap,Dc=new Qo,kh=new X,C0=new X;class qd extends Rn{constructor(t=new vn,i=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)eu.fromBufferAttribute(i,l-1),nu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=eu.distanceTo(nu);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,t.ray.intersectsSphere(Dc)===!1)return;R0.copy(l).invert(),ko.copy(t.ray).applyMatrix4(R0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const S=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const v=g.getX(b),N=g.getX(b+1),U=Uc(this,t,ko,m,v,N);U&&i.push(U)}if(this.isLineLoop){const b=g.getX(E-1),M=g.getX(S),v=Uc(this,t,ko,m,b,M);v&&i.push(v)}}else{const S=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const v=Uc(this,t,ko,m,b,b+1);v&&i.push(v)}if(this.isLineLoop){const b=Uc(this,t,ko,m,E-1,S);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Uc(o,t,i,s,l,c){const h=o.geometry.attributes.position;if(eu.fromBufferAttribute(h,l),nu.fromBufferAttribute(h,c),i.distanceSqToSegment(eu,nu,kh,C0)>s)return;kh.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(kh);if(!(m<t.near||m>t.far))return{distance:m,point:C0.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}const w0=new X,D0=new X;class IM extends qd{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)w0.fromBufferAttribute(i,l),D0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+w0.distanceTo(D0);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fv extends ja{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const U0=new ke,jd=new ap,Lc=new Qo,Nc=new X;class FM extends Rn{constructor(t=new vn,i=new Fv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,t.ray.intersectsSphere(Lc)===!1)return;U0.copy(l).invert(),jd.copy(t.ray).applyMatrix4(U0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let E=x,b=S;E<b;E++){const M=p.getX(E);Nc.fromBufferAttribute(_,M),L0(Nc,M,m,l,t,i,this)}}else{const x=Math.max(0,h.start),S=Math.min(_.count,h.start+h.count);for(let E=x,b=S;E<b;E++)Nc.fromBufferAttribute(_,E),L0(Nc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function L0(o,t,i,s,l,c,h){const d=jd.distanceSqToPoint(o);if(d<i){const m=new X;jd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Mi extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class HM extends In{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hv extends In{constructor(t,i,s,l,c,h,d,m,p,g=wr){if(g!==wr&&g!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===wr&&(s=As),s===void 0&&g===Pr&&(s=zr),super(null,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class GM{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const g=s[l],x=s[l+1]-g,S=(h-g)/x;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new ie:new X);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i){const s=new X,l=[],c=[],h=[],d=new X,m=new ke;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new X)}c[0]=new X,h[0]=new X;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),x<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(me(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function rp(){let o=0,t=0,i=0,s=0;function l(c,h,d,m){o=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,g,_){let x=(h-c)/p-(d-c)/(p+g)+(d-h)/g,S=(d-h)/g-(m-h)/(g+_)+(m-d)/_;x*=g,S*=g,l(h,d,x,S)},calc:function(c){const h=c*c,d=h*c;return o+t*c+i*h+s*d}}}const Oc=new X,Xh=new rp,Wh=new rp,qh=new rp;class VM extends GM{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new X){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Oc.subVectors(l[0],l[1]).add(l[0]),p=Oc);const _=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Oc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),b=Math.pow(_.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(g),S);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),Xh.initNonuniformCatmullRom(p.x,_.x,x.x,g.x,E,b,M),Wh.initNonuniformCatmullRom(p.y,_.y,x.y,g.y,E,b,M),qh.initNonuniformCatmullRom(p.z,_.z,x.z,g.z,E,b,M)}else this.curveType==="catmullrom"&&(Xh.initCatmullRom(p.x,_.x,x.x,g.x,this.tension),Wh.initCatmullRom(p.y,_.y,x.y,g.y,this.tension),qh.initCatmullRom(p.z,_.z,x.z,g.z,this.tension));return s.set(Xh.calc(m),Wh.calc(m),qh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new X().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class op extends vn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],S=[];let E=0;const b=[],M=s/2;let v=0;N(),h===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(S,2));function N(){const D=new X,G=new X;let B=0;const z=(i-t)/s;for(let H=0;H<=c;H++){const w=[],R=H/c,F=R*(i-t)+t;for(let et=0;et<=l;et++){const at=et/l,ut=at*m+d,mt=Math.sin(ut),P=Math.cos(ut);G.x=F*mt,G.y=-R*s+M,G.z=F*P,_.push(G.x,G.y,G.z),D.set(mt,z,P).normalize(),x.push(D.x,D.y,D.z),S.push(at,1-R),w.push(E++)}b.push(w)}for(let H=0;H<l;H++)for(let w=0;w<c;w++){const R=b[w][H],F=b[w+1][H],et=b[w+1][H+1],at=b[w][H+1];(t>0||w!==0)&&(g.push(R,F,at),B+=3),(i>0||w!==c-1)&&(g.push(F,et,at),B+=3)}p.addGroup(v,B,0),v+=B}function U(D){const G=E,B=new ie,z=new X;let H=0;const w=D===!0?t:i,R=D===!0?1:-1;for(let et=1;et<=l;et++)_.push(0,M*R,0),x.push(0,R,0),S.push(.5,.5),E++;const F=E;for(let et=0;et<=l;et++){const ut=et/l*m+d,mt=Math.cos(ut),P=Math.sin(ut);z.x=w*P,z.y=M*R,z.z=w*mt,_.push(z.x,z.y,z.z),x.push(0,R,0),B.x=mt*.5+.5,B.y=P*.5*R+.5,S.push(B.x,B.y),E++}for(let et=0;et<l;et++){const at=G+et,ut=F+et;D===!0?g.push(ut,ut+1,at):g.push(ut+1,ut,at),H+=3}p.addGroup(v,H,D===!0?1:2),v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lp extends vn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),g(),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(c.slice(),3)),this.setAttribute("uv",new $e(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const U=new X,D=new X,G=new X;for(let B=0;B<i.length;B+=3)S(i[B+0],U),S(i[B+1],D),S(i[B+2],G),m(U,D,G,N)}function m(N,U,D,G){const B=G+1,z=[];for(let H=0;H<=B;H++){z[H]=[];const w=N.clone().lerp(D,H/B),R=U.clone().lerp(D,H/B),F=B-H;for(let et=0;et<=F;et++)et===0&&H===B?z[H][et]=w:z[H][et]=w.clone().lerp(R,et/F)}for(let H=0;H<B;H++)for(let w=0;w<2*(B-H)-1;w++){const R=Math.floor(w/2);w%2===0?(x(z[H][R+1]),x(z[H+1][R]),x(z[H][R])):(x(z[H][R+1]),x(z[H+1][R+1]),x(z[H+1][R]))}}function p(N){const U=new X;for(let D=0;D<c.length;D+=3)U.x=c[D+0],U.y=c[D+1],U.z=c[D+2],U.normalize().multiplyScalar(N),c[D+0]=U.x,c[D+1]=U.y,c[D+2]=U.z}function g(){const N=new X;for(let U=0;U<c.length;U+=3){N.x=c[U+0],N.y=c[U+1],N.z=c[U+2];const D=M(N)/2/Math.PI+.5,G=v(N)/Math.PI+.5;h.push(D,1-G)}E(),_()}function _(){for(let N=0;N<h.length;N+=6){const U=h[N+0],D=h[N+2],G=h[N+4],B=Math.max(U,D,G),z=Math.min(U,D,G);B>.9&&z<.1&&(U<.2&&(h[N+0]+=1),D<.2&&(h[N+2]+=1),G<.2&&(h[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function S(N,U){const D=N*3;U.x=t[D+0],U.y=t[D+1],U.z=t[D+2]}function E(){const N=new X,U=new X,D=new X,G=new X,B=new ie,z=new ie,H=new ie;for(let w=0,R=0;w<c.length;w+=9,R+=6){N.set(c[w+0],c[w+1],c[w+2]),U.set(c[w+3],c[w+4],c[w+5]),D.set(c[w+6],c[w+7],c[w+8]),B.set(h[R+0],h[R+1]),z.set(h[R+2],h[R+3]),H.set(h[R+4],h[R+5]),G.copy(N).add(U).add(D).divideScalar(3);const F=M(G);b(B,R+0,N,F),b(z,R+2,U,F),b(H,R+4,D,F)}}function b(N,U,D,G){G<0&&N.x===1&&(h[U]=N.x-1),D.x===0&&D.z===0&&(h[U]=G/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function v(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lp(t.vertices,t.indices,t.radius,t.details)}}const zc=new X,Pc=new X,jh=new X,Bc=new ni;class kM extends vn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Yc*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],g=["a","b","c"],_=new Array(3),x={},S=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:b,b:M,c:v}=Bc;if(b.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Bc.getNormal(jh),_[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,_[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,_[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let N=0;N<3;N++){const U=(N+1)%3,D=_[N],G=_[U],B=Bc[g[N]],z=Bc[g[U]],H=`${D}_${G}`,w=`${G}_${D}`;w in x&&x[w]?(jh.dot(x[w].normal)<=c&&(S.push(B.x,B.y,B.z),S.push(z.x,z.y,z.z)),x[w]=null):H in x||(x[H]={index0:p[N],index1:p[U],normal:jh.clone()})}}for(const E in x)if(x[E]){const{index0:b,index1:M}=x[E];zc.fromBufferAttribute(d,b),Pc.fromBufferAttribute(d,M),S.push(zc.x,zc.y,zc.z),S.push(Pc.x,Pc.y,Pc.z)}this.setAttribute("position",new $e(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class iu extends lp{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new iu(t.radius,t.detail)}}class su extends vn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,S=[],E=[],b=[],M=[];for(let v=0;v<g;v++){const N=v*x-h;for(let U=0;U<p;U++){const D=U*_-c;E.push(D,-N,0),b.push(0,0,1),M.push(U/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const U=N+p*v,D=N+p*(v+1),G=N+1+p*(v+1),B=N+1+p*v;S.push(U,D,B),S.push(D,G,B)}this.setIndex(S),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.width,t.height,t.widthSegments,t.heightSegments)}}class qo extends vn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new X,x=new X,S=[],E=[],b=[],M=[];for(let v=0;v<=s;v++){const N=[],U=v/s;let D=0;v===0&&h===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let G=0;G<=i;G++){const B=G/i;_.x=-t*Math.cos(l+B*c)*Math.sin(h+U*d),_.y=t*Math.cos(h+U*d),_.z=t*Math.sin(l+B*c)*Math.sin(h+U*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),b.push(x.x,x.y,x.z),M.push(B+D,1-U),N.push(p++)}g.push(N)}for(let v=0;v<s;v++)for(let N=0;N<i;N++){const U=g[v][N+1],D=g[v][N],G=g[v+1][N],B=g[v+1][N+1];(v!==0||h>0)&&S.push(U,D,B),(v!==s-1||m<Math.PI)&&S.push(D,G,B)}this.setIndex(S),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cp extends vn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],g=new X,_=new X,x=new X;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const b=E/l*c,M=S/s*Math.PI*2;_.x=(t+i*Math.cos(M))*Math.cos(b),_.y=(t+i*Math.cos(M))*Math.sin(b),_.z=i*Math.sin(M),d.push(_.x,_.y,_.z),g.x=t*Math.cos(b),g.y=t*Math.sin(b),x.subVectors(_,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const b=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,v=(l+1)*(S-1)+E,N=(l+1)*S+E;h.push(b,M,N),h.push(M,v,N)}this.setIndex(h),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(m,3)),this.setAttribute("uv",new $e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ic extends ja{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bv,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class XM extends ja{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WM extends ja{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gv extends Rn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Yh=new ke,N0=new X,O0=new X;class qM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sp,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;N0.setFromMatrixPosition(t.matrixWorld),i.position.copy(N0),O0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(O0),i.updateMatrixWorld(),Yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const z0=new ke,Xo=new X,Zh=new X;class jM extends qM{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Xo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Xo),Zh.copy(s.position),Zh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Zh),s.updateMatrixWorld(),l.makeTranslation(-Xo.x,-Xo.y,-Xo.z),z0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z0)}}class P0 extends Gv{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new jM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class YM extends zv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZM extends Gv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class KM extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class QM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=B0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=B0();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function B0(){return performance.now()}function I0(o,t,i,s){const l=JM(s);switch(i){case vv:return o*t;case xv:return o*t;case Sv:return o*t*2;case Mv:return o*t/l.components*l.byteLength;case ep:return o*t/l.components*l.byteLength;case Ev:return o*t*2/l.components*l.byteLength;case np:return o*t*2/l.components*l.byteLength;case yv:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case ip:return o*t*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case yd:case Sd:return Math.max(o,16)*Math.max(t,8)/4;case vd:case xd:return Math.max(o,8)*Math.max(t,8)/2;case Md:case Ed:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Td:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case wd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Od:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case jc:case Fd:case Hd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Tv:case Gd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vd:case kd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JM(o){switch(o){case fa:case mv:return{byteLength:1,components:1};case jo:case gv:case Yo:return{byteLength:2,components:1};case $d:case tp:return{byteLength:2,components:4};case As:case Jd:case la:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function $M(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],b=_[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,_[x]=b)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const b=_[S];o.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_T=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ET=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ub=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:tE,alphahash_pars_fragment:eE,alphamap_fragment:nE,alphamap_pars_fragment:iE,alphatest_fragment:aE,alphatest_pars_fragment:sE,aomap_fragment:rE,aomap_pars_fragment:oE,batching_pars_vertex:lE,batching_vertex:cE,begin_vertex:uE,beginnormal_vertex:fE,bsdfs:hE,iridescence_fragment:dE,bumpmap_pars_fragment:pE,clipping_planes_fragment:mE,clipping_planes_pars_fragment:gE,clipping_planes_pars_vertex:_E,clipping_planes_vertex:vE,color_fragment:yE,color_pars_fragment:xE,color_pars_vertex:SE,color_vertex:ME,common:EE,cube_uv_reflection_fragment:TE,defaultnormal_vertex:bE,displacementmap_pars_vertex:AE,displacementmap_vertex:RE,emissivemap_fragment:CE,emissivemap_pars_fragment:wE,colorspace_fragment:DE,colorspace_pars_fragment:UE,envmap_fragment:LE,envmap_common_pars_fragment:NE,envmap_pars_fragment:OE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:qE,envmap_vertex:PE,fog_vertex:BE,fog_pars_vertex:IE,fog_fragment:FE,fog_pars_fragment:HE,gradientmap_pars_fragment:GE,lightmap_pars_fragment:VE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:XE,lights_pars_begin:WE,lights_toon_fragment:jE,lights_toon_pars_fragment:YE,lights_phong_fragment:ZE,lights_phong_pars_fragment:KE,lights_physical_fragment:QE,lights_physical_pars_fragment:JE,lights_fragment_begin:$E,lights_fragment_maps:tT,lights_fragment_end:eT,logdepthbuf_fragment:nT,logdepthbuf_pars_fragment:iT,logdepthbuf_pars_vertex:aT,logdepthbuf_vertex:sT,map_fragment:rT,map_pars_fragment:oT,map_particle_fragment:lT,map_particle_pars_fragment:cT,metalnessmap_fragment:uT,metalnessmap_pars_fragment:fT,morphinstance_vertex:hT,morphcolor_vertex:dT,morphnormal_vertex:pT,morphtarget_pars_vertex:mT,morphtarget_vertex:gT,normal_fragment_begin:_T,normal_fragment_maps:vT,normal_pars_fragment:yT,normal_pars_vertex:xT,normal_vertex:ST,normalmap_pars_fragment:MT,clearcoat_normal_fragment_begin:ET,clearcoat_normal_fragment_maps:TT,clearcoat_pars_fragment:bT,iridescence_pars_fragment:AT,opaque_fragment:RT,packing:CT,premultiplied_alpha_fragment:wT,project_vertex:DT,dithering_fragment:UT,dithering_pars_fragment:LT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:OT,shadowmap_pars_fragment:zT,shadowmap_pars_vertex:PT,shadowmap_vertex:BT,shadowmask_pars_fragment:IT,skinbase_vertex:FT,skinning_pars_vertex:HT,skinning_vertex:GT,skinnormal_vertex:VT,specularmap_fragment:kT,specularmap_pars_fragment:XT,tonemapping_fragment:WT,tonemapping_pars_fragment:qT,transmission_fragment:jT,transmission_pars_fragment:YT,uv_pars_fragment:ZT,uv_pars_vertex:KT,uv_vertex:QT,worldpos_vertex:JT,background_vert:$T,background_frag:tb,backgroundCube_vert:eb,backgroundCube_frag:nb,cube_vert:ib,cube_frag:ab,depth_vert:sb,depth_frag:rb,distanceRGBA_vert:ob,distanceRGBA_frag:lb,equirect_vert:cb,equirect_frag:ub,linedashed_vert:fb,linedashed_frag:hb,meshbasic_vert:db,meshbasic_frag:pb,meshlambert_vert:mb,meshlambert_frag:gb,meshmatcap_vert:_b,meshmatcap_frag:vb,meshnormal_vert:yb,meshnormal_frag:xb,meshphong_vert:Sb,meshphong_frag:Mb,meshphysical_vert:Eb,meshphysical_frag:Tb,meshtoon_vert:bb,meshtoon_frag:Ab,points_vert:Rb,points_frag:Cb,shadow_vert:wb,shadow_frag:Db,sprite_vert:Ub,sprite_frag:Lb},Lt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ui={basic:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Bn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Bn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ge(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Bn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Bn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Bn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Bn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Bn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Bn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Bn([Lt.common,Lt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Bn([Lt.lights,Lt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ui.physical={uniforms:Bn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Fc={r:0,b:0,g:0},vs=new Oi,Nb=new ke;function Ob(o,t,i,s,l,c,h){const d=new ge(0);let m=c===!0?0:1,p,g,_=null,x=0,S=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function b(U){let D=!1;const G=E(U);G===null?v(d,m):G&&G.isColor&&(v(G,1),D=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,D){const G=E(D);G&&(G.isCubeTexture||G.mapping===au)?(g===void 0&&(g=new bn(new Hr(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Ir(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vs.copy(D.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(vs)),g.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ie,(_!==G||x!==G.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,_=G,x=G.version,S=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new bn(new su(2,2),new qa({name:"BackgroundMaterial",uniforms:Ir(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ie,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||x!==G.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,_=G,x=G.version,S=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,D){U.getRGB(Fc,Ov(o)),s.buffers.color.setClear(Fc.r,Fc.g,Fc.b,D,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:b,addToRenderList:M,dispose:N}}function zb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(R,F,et,at,ut){let mt=!1;const P=_(at,et,F);c!==P&&(c=P,p(c.object)),mt=S(R,at,et,ut),mt&&E(R,at,et,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,D(R,F,et,at),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function _(R,F,et){const at=et.wireframe===!0;let ut=s[R.id];ut===void 0&&(ut={},s[R.id]=ut);let mt=ut[F.id];mt===void 0&&(mt={},ut[F.id]=mt);let P=mt[at];return P===void 0&&(P=x(m()),mt[at]=P),P}function x(R){const F=[],et=[],at=[];for(let ut=0;ut<i;ut++)F[ut]=0,et[ut]=0,at[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:et,attributeDivisors:at,object:R,attributes:{},index:null}}function S(R,F,et,at){const ut=c.attributes,mt=F.attributes;let P=0;const J=et.getAttributes();for(const Q in J)if(J[Q].location>=0){const pt=ut[Q];let L=mt[Q];if(L===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),pt===void 0||pt.attribute!==L||L&&pt.data!==L.data)return!0;P++}return c.attributesNum!==P||c.index!==at}function E(R,F,et,at){const ut={},mt=F.attributes;let P=0;const J=et.getAttributes();for(const Q in J)if(J[Q].location>=0){let pt=mt[Q];pt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor));const L={};L.attribute=pt,pt&&pt.data&&(L.data=pt.data),ut[Q]=L,P++}c.attributes=ut,c.attributesNum=P,c.index=at}function b(){const R=c.newAttributes;for(let F=0,et=R.length;F<et;F++)R[F]=0}function M(R){v(R,0)}function v(R,F){const et=c.newAttributes,at=c.enabledAttributes,ut=c.attributeDivisors;et[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),ut[R]!==F&&(o.vertexAttribDivisor(R,F),ut[R]=F)}function N(){const R=c.newAttributes,F=c.enabledAttributes;for(let et=0,at=F.length;et<at;et++)F[et]!==R[et]&&(o.disableVertexAttribArray(et),F[et]=0)}function U(R,F,et,at,ut,mt,P){P===!0?o.vertexAttribIPointer(R,F,et,ut,mt):o.vertexAttribPointer(R,F,et,at,ut,mt)}function D(R,F,et,at){b();const ut=at.attributes,mt=et.getAttributes(),P=F.defaultAttributeValues;for(const J in mt){const Q=mt[J];if(Q.location>=0){let Tt=ut[J];if(Tt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor)),Tt!==void 0){const pt=Tt.normalized,L=Tt.itemSize,K=t.get(Tt);if(K===void 0)continue;const ht=K.buffer,W=K.type,ct=K.bytesPerElement,Mt=W===o.INT||W===o.UNSIGNED_INT||Tt.gpuType===Jd;if(Tt.isInterleavedBufferAttribute){const Et=Tt.data,Ot=Et.stride,Ht=Tt.offset;if(Et.isInstancedInterleavedBuffer){for(let ne=0;ne<Q.locationSize;ne++)v(Q.location+ne,Et.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let ne=0;ne<Q.locationSize;ne++)M(Q.location+ne);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let ne=0;ne<Q.locationSize;ne++)U(Q.location+ne,L/Q.locationSize,W,pt,Ot*ct,(Ht+L/Q.locationSize*ne)*ct,Mt)}else{if(Tt.isInstancedBufferAttribute){for(let Et=0;Et<Q.locationSize;Et++)v(Q.location+Et,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Et=0;Et<Q.locationSize;Et++)M(Q.location+Et);o.bindBuffer(o.ARRAY_BUFFER,ht);for(let Et=0;Et<Q.locationSize;Et++)U(Q.location+Et,L/Q.locationSize,W,pt,L*ct,L/Q.locationSize*Et*ct,Mt)}}else if(P!==void 0){const pt=P[J];if(pt!==void 0)switch(pt.length){case 2:o.vertexAttrib2fv(Q.location,pt);break;case 3:o.vertexAttrib3fv(Q.location,pt);break;case 4:o.vertexAttrib4fv(Q.location,pt);break;default:o.vertexAttrib1fv(Q.location,pt)}}}}N()}function G(){H();for(const R in s){const F=s[R];for(const et in F){const at=F[et];for(const ut in at)g(at[ut].object),delete at[ut];delete F[et]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const F=s[R.id];for(const et in F){const at=F[et];for(const ut in at)g(at[ut].object),delete at[ut];delete F[et]}delete s[R.id]}function z(R){for(const F in s){const et=s[F];if(et[R.id]===void 0)continue;const at=et[R.id];for(const ut in at)g(at[ut].object),delete at[ut];delete et[R.id]}}function H(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:M,disableUnusedAttributes:N}}function Pb(o,t,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,s,1)}function m(p,g,_,x){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Bb(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ei&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const H=z===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==fa&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==la&&!H)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:G,maxSamples:B}}function Ib(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new xs,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const N=c?0:s,U=N*4;let D=v.clippingState||null;m.value=D,D=g(E,x,U,S);for(let G=0;G!==U;++G)D[G]=i[G];v.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,S,E){const b=_!==null?_.length:0;let M=null;if(b!==0){if(M=m.value,E!==!0||M===null){const v=S+b*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,D=S;U!==b;++U,D+=4)h.copy(_[U]).applyMatrix4(N,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function Fb(o){let t=new WeakMap;function i(h,d){return d===pd?h.mapping=Nr:d===md&&(h.mapping=Or),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===pd||d===md)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new LM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Rr=4,F0=[.125,.215,.35,.446,.526,.582],Es=20,Kh=new YM,H0=new ge;let Qh=null,Jh=0,$h=0,td=!1;const Ss=(1+Math.sqrt(5))/2,br=1/Ss,G0=[new X(-Ss,br,0),new X(Ss,br,0),new X(-br,0,Ss),new X(br,0,Ss),new X(0,Ss,-br),new X(0,Ss,br),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class V0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qh,Jh,$h),this._renderer.xr.enabled=td,t.scissorTest=!1,Hc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Nr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Yo,format:Ei,colorSpace:Br,depthBuffer:!1},l=k0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(c)),this._blurMaterial=Gb(c,t,i)}return l}_compileMaterial(t){const i=new bn(this._lodPlanes[0],t);this._renderer.compile(i,Kh)}_sceneToCubeUV(t,i,s,l){const d=new ei(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(H0),g.toneMapping=ka,g.autoClear=!1;const S=new Ur({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),E=new bn(new Hr,S);let b=!1;const M=t.background;M?M.isColor&&(S.color.copy(M),t.background=null,b=!0):(S.color.copy(H0),b=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):N===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const U=this._cubeSize;Hc(l,N*U,v>2?U:0,U,U),g.setRenderTarget(l),b&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=_,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Nr||t.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=W0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new bn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Hc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Kh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=G0[(l-c-1)%G0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new bn(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Es-1),b=c/E,M=isFinite(c)?1+Math.floor(g*b):Es;M>Es&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Es}`);const v=[];let N=0;for(let z=0;z<Es;++z){const H=z/b,w=Math.exp(-H*H/2);v.push(w),z===0?N+=w:z<M&&(N+=2*w)}for(let z=0;z<v.length;z++)v[z]=v[z]/N;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const D=this._sizeLods[l],G=3*D*(l>U-Rr?l-U+Rr:0),B=4*(this._cubeSize-D);Hc(i,G,B,3*D,2*D),m.setRenderTarget(i),m.render(_,Kh)}}function Hb(o){const t=[],i=[],s=[];let l=o;const c=o-Rr+1+F0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Rr?m=F0[h-o+Rr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,b=3,M=2,v=1,N=new Float32Array(b*E*S),U=new Float32Array(M*E*S),D=new Float32Array(v*E*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,H=B>2?0:-1,w=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];N.set(w,b*E*B),U.set(x,M*E*B);const R=[B,B,B,B,B,B];D.set(R,v*E*B)}const G=new vn;G.setAttribute("position",new di(N,b)),G.setAttribute("uv",new di(U,M)),G.setAttribute("faceIndex",new di(D,v)),t.push(G),l>Rr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function k0(o,t,i){const s=new Rs(o,t,i);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function Gb(o,t,i){const s=new Float32Array(Es),l=new X(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function X0(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function W0(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vb(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===pd||m===md,g=m===Nr||m===Or;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new V0(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new V0(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function kb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ar("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Xb(o,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)t.update(x[S],o.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,E=_.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let U=0,D=N.length;U<D;U+=3){const G=N[U+0],B=N[U+1],z=N[U+2];x.push(G,B,B,z,z,G)}}else if(E!==void 0){const N=E.array;b=E.version;for(let U=0,D=N.length/3-1;U<D;U+=3){const G=U+0,B=U+1,z=U+2;x.push(G,B,B,z,z,G)}}else return;const M=new(Rv(x)?Nv:Lv)(x,1);M.version=b;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function Wb(o,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,S){o.drawElements(s,S,c,x*h),i.update(S,s,1)}function p(x,S,E){E!==0&&(o.drawElementsInstanced(s,S,c,x*h,E),i.update(S,s,E))}function g(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=S[v];i.update(M,s,1)}function _(x,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,S[v],b[v]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,b,0,E);let v=0;for(let N=0;N<E;N++)v+=S[N]*b[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function qb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function jb(o,t,i){const s=new WeakMap,l=new He;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let R=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),M===!0&&(D=3);let G=d.attributes.position.count*D,B=1;G>t.maxTextureSize&&(B=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*B*4*_),H=new wv(z,G,B,_);H.type=la,H.needsUpdate=!0;const w=D*4;for(let F=0;F<_;F++){const et=v[F],at=N[F],ut=U[F],mt=G*B*4*F;for(let P=0;P<et.count;P++){const J=P*w;E===!0&&(l.fromBufferAttribute(et,P),z[mt+J+0]=l.x,z[mt+J+1]=l.y,z[mt+J+2]=l.z,z[mt+J+3]=0),b===!0&&(l.fromBufferAttribute(at,P),z[mt+J+4]=l.x,z[mt+J+5]=l.y,z[mt+J+6]=l.z,z[mt+J+7]=0),M===!0&&(l.fromBufferAttribute(ut,P),z[mt+J+8]=l.x,z[mt+J+9]=l.y,z[mt+J+10]=l.z,z[mt+J+11]=ut.itemSize===4?l.w:1)}}x={count:_,texture:H,size:new ie(G,B)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function Yb(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const kv=new In,q0=new Hv(1,1),Xv=new wv,Wv=new gM,qv=new Pv,j0=[],Y0=[],Z0=new Float32Array(16),K0=new Float32Array(9),Q0=new Float32Array(4);function Gr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=j0[l];if(c===void 0&&(c=new Float32Array(l),j0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function dn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function ru(o,t){let i=Y0[t];i===void 0&&(i=new Int32Array(t),Y0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Zb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function Qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function Jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function $b(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(dn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,s))return;Q0.set(s),o.uniformMatrix2fv(this.addr,!1,Q0),pn(i,s)}}function t1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(dn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,s))return;K0.set(s),o.uniformMatrix3fv(this.addr,!1,K0),pn(i,s)}}function e1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(dn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,s))return;Z0.set(s),o.uniformMatrix4fv(this.addr,!1,Z0),pn(i,s)}}function n1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function i1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function a1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function s1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function r1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function o1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function l1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function c1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function u1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(q0.compareFunction=Av,c=q0):c=kv,i.setTexture2D(t||c,l)}function f1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Wv,l)}function h1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||qv,l)}function d1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Xv,l)}function p1(o){switch(o){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return a1;case 35669:case 35673:return s1;case 5125:return r1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(o,t){o.uniform1fv(this.addr,t)}function g1(o,t){const i=Gr(t,this.size,2);o.uniform2fv(this.addr,i)}function _1(o,t){const i=Gr(t,this.size,3);o.uniform3fv(this.addr,i)}function v1(o,t){const i=Gr(t,this.size,4);o.uniform4fv(this.addr,i)}function y1(o,t){const i=Gr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function x1(o,t){const i=Gr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function S1(o,t){const i=Gr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function M1(o,t){o.uniform1iv(this.addr,t)}function E1(o,t){o.uniform2iv(this.addr,t)}function T1(o,t){o.uniform3iv(this.addr,t)}function b1(o,t){o.uniform4iv(this.addr,t)}function A1(o,t){o.uniform1uiv(this.addr,t)}function R1(o,t){o.uniform2uiv(this.addr,t)}function C1(o,t){o.uniform3uiv(this.addr,t)}function w1(o,t){o.uniform4uiv(this.addr,t)}function D1(o,t,i){const s=this.cache,l=t.length,c=ru(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||kv,c[h])}function U1(o,t,i){const s=this.cache,l=t.length,c=ru(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Wv,c[h])}function L1(o,t,i){const s=this.cache,l=t.length,c=ru(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||qv,c[h])}function N1(o,t,i){const s=this.cache,l=t.length,c=ru(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Xv,c[h])}function O1(o){switch(o){case 5126:return m1;case 35664:return g1;case 35665:return _1;case 35666:return v1;case 35674:return y1;case 35675:return x1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return E1;case 35668:case 35672:return T1;case 35669:case 35673:return b1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return N1}}class z1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=p1(i.type)}}class P1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=O1(i.type)}}class B1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function J0(o,t){o.seq.push(t),o.map[t.id]=t}function I1(o,t,i){const s=o.name,l=s.length;for(ed.lastIndex=0;;){const c=ed.exec(s),h=ed.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){J0(i,p===void 0?new z1(d,o,t):new P1(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new B1(d),J0(i,_)),i=_}}}class Kc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);I1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function $0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const F1=37297;let H1=0;function G1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const tv=new le;function V1(o){Ce._getMatrix(tv,Ce.workingColorSpace,o);const t=`mat3( ${tv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Qc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ev(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+G1(o.getShaderSource(t),h)}else return l}function k1(o,t){const i=V1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function X1(o,t){let i;switch(t){case VS:i="Linear";break;case kS:i="Reinhard";break;case XS:i="Cineon";break;case WS:i="ACESFilmic";break;case jS:i="AgX";break;case YS:i="Neutral";break;case qS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new X;function W1(){Ce.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function j1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Y1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Wo(o){return o!==""}function nv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(o){return o.replace(Z1,Q1)}const K1=new Map;function Q1(o,t){let i=ce[t];if(i===void 0){const s=K1.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Yd(i)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(o){return o.replace(J1,$1)}function $1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===hv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===SS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function eA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Nr:case Or:t="ENVMAP_TYPE_CUBE";break;case au:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Or:t="ENVMAP_MODE_REFRACTION";break}return t}function iA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dv:t="ENVMAP_BLENDING_MULTIPLY";break;case HS:t="ENVMAP_BLENDING_MIX";break;case GS:t="ENVMAP_BLENDING_ADD";break}return t}function aA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function sA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=tA(i),p=eA(i),g=nA(i),_=iA(i),x=aA(i),S=q1(i),E=j1(c),b=l.createProgram();let M,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),v.length>0&&(v+=`
`)):(M=[sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),v=[sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ce.tonemapping_pars_fragment:"",i.toneMapping!==ka?X1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,k1("linearToOutputTexel",i.outputColorSpace),W1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),h=Yd(h),h=nv(h,i),h=iv(h,i),d=Yd(d),d=nv(d,i),d=iv(d,i),h=av(h),d=av(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===o0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===o0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=N+M+h,D=N+v+d,G=$0(l,l.VERTEX_SHADER,U),B=$0(l,l.FRAGMENT_SHADER,D);l.attachShader(b,G),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(F){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(b).trim(),at=l.getShaderInfoLog(G).trim(),ut=l.getShaderInfoLog(B).trim();let mt=!0,P=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(mt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,G,B);else{const J=ev(l,G,"vertex"),Q=ev(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+et+`
`+J+`
`+Q)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(at===""||ut==="")&&(P=!1);P&&(F.diagnostics={runnable:mt,programLog:et,vertexShader:{log:at,prefix:M},fragmentShader:{log:ut,prefix:v}})}l.deleteShader(G),l.deleteShader(B),H=new Kc(l,b),w=Y1(l,b)}let H;this.getUniforms=function(){return H===void 0&&z(this),H};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(b,F1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=H1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=G,this.fragmentShader=B,this}let rA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new lA(t),i.set(t,s)),s}}class lA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function cA(o,t,i,s,l,c,h){const d=new Dv,m=new oA,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,F,et,at){const ut=et.fog,mt=at.geometry,P=w.isMeshStandardMaterial?et.environment:null,J=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),Q=J&&J.mapping===au?J.image.height:null,Tt=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const pt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,L=pt!==void 0?pt.length:0;let K=0;mt.morphAttributes.position!==void 0&&(K=1),mt.morphAttributes.normal!==void 0&&(K=2),mt.morphAttributes.color!==void 0&&(K=3);let ht,W,ct,Mt;if(Tt){const Ee=Ui[Tt];ht=Ee.vertexShader,W=Ee.fragmentShader}else ht=w.vertexShader,W=w.fragmentShader,m.update(w),ct=m.getVertexShaderID(w),Mt=m.getFragmentShaderID(w);const Et=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),Ht=at.isInstancedMesh===!0,ne=at.isBatchedMesh===!0,Ne=!!w.map,fe=!!w.matcap,je=!!J,V=!!w.aoMap,Cn=!!w.lightMap,ue=!!w.bumpMap,_e=!!w.normalMap,qt=!!w.displacementMap,De=!!w.emissiveMap,Wt=!!w.metalnessMap,O=!!w.roughnessMap,A=w.anisotropy>0,it=w.clearcoat>0,gt=w.dispersion>0,bt=w.iridescence>0,vt=w.sheen>0,kt=w.transmission>0,wt=A&&!!w.anisotropyMap,Bt=it&&!!w.clearcoatMap,ve=it&&!!w.clearcoatNormalMap,At=it&&!!w.clearcoatRoughnessMap,It=bt&&!!w.iridescenceMap,jt=bt&&!!w.iridescenceThicknessMap,Xt=vt&&!!w.sheenColorMap,Nt=vt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,ae=!!w.specularColorMap,Oe=!!w.specularIntensityMap,q=kt&&!!w.transmissionMap,Rt=kt&&!!w.thicknessMap,ft=!!w.gradientMap,xt=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,$t=!!w.extensions;let Ye=ka;w.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ye=o.toneMapping);const un={shaderID:Tt,shaderType:w.type,shaderName:w.name,vertexShader:ht,fragmentShader:W,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:ne,batchingColor:ne&&at._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&at.instanceColor!==null,instancingMorph:Ht&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Br,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:fe,envMap:je,envMapMode:je&&J.mapping,envMapCubeUVHeight:Q,aoMap:V,lightMap:Cn,bumpMap:ue,normalMap:_e,displacementMap:x&&qt,emissiveMap:De,normalMapObjectSpace:_e&&w.normalMapType===JS,normalMapTangentSpace:_e&&w.normalMapType===bv,metalnessMap:Wt,roughnessMap:O,anisotropy:A,anisotropyMap:wt,clearcoat:it,clearcoatMap:Bt,clearcoatNormalMap:ve,clearcoatRoughnessMap:At,dispersion:gt,iridescence:bt,iridescenceMap:It,iridescenceThicknessMap:jt,sheen:vt,sheenColorMap:Xt,sheenRoughnessMap:Nt,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Oe,transmission:kt,transmissionMap:q,thicknessMap:Rt,gradientMap:ft,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Ne&&b(w.map.channel),aoMapUv:V&&b(w.aoMap.channel),lightMapUv:Cn&&b(w.lightMap.channel),bumpMapUv:ue&&b(w.bumpMap.channel),normalMapUv:_e&&b(w.normalMap.channel),displacementMapUv:qt&&b(w.displacementMap.channel),emissiveMapUv:De&&b(w.emissiveMap.channel),metalnessMapUv:Wt&&b(w.metalnessMap.channel),roughnessMapUv:O&&b(w.roughnessMap.channel),anisotropyMapUv:wt&&b(w.anisotropyMap.channel),clearcoatMapUv:Bt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(w.sheenRoughnessMap.channel),specularMapUv:Jt&&b(w.specularMap.channel),specularColorMapUv:ae&&b(w.specularColorMap.channel),specularIntensityMapUv:Oe&&b(w.specularIntensityMap.channel),transmissionMapUv:q&&b(w.transmissionMap.channel),thicknessMapUv:Rt&&b(w.thicknessMap.channel),alphaMapUv:xt&&b(w.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(_e||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!mt.attributes.uv&&(Ne||xt),fog:!!ut,useFog:w.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ot,skinning:at.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:K,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Ie,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ra,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return un.vertexUv1s=p.has(1),un.vertexUv2s=p.has(2),un.vertexUv3s=p.has(3),p.clear(),un}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)R.push(F),R.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(N(R,w),U(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=E[w.type];let F;if(R){const et=Ui[R];F=CM.clone(et.uniforms)}else F=w.uniforms;return F}function G(w,R){let F;for(let et=0,at=g.length;et<at;et++){const ut=g[et];if(ut.cacheKey===R){F=ut,++F.usedTimes;break}}return F===void 0&&(F=new sA(o,R,w,c),g.push(F)),F}function B(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function z(w){m.remove(w)}function H(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:G,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:H}}function uA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function fA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function rv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ov(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,S,E,b,M){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:b,group:M},o[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=b,v.group=M),t++,v}function d(_,x,S,E,b,M){const v=h(_,x,S,E,b,M);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,x,S,E,b,M){const v=h(_,x,S,E,b,M);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||fA),s.length>1&&s.sort(x||rv),l.length>1&&l.sort(x||rv)}function g(){for(let _=t,x=o.length;_<x;_++){const S=o[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function hA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new ov,o.set(s,[h])):l>=c.length?(h=new ov,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function dA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new ge};break;case"SpotLight":i={position:new X,direction:new X,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new X,halfWidth:new X,halfHeight:new X};break}return o[t.id]=i,i}}}function pA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let mA=0;function gA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _A(o){const t=new dA,i=pA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const l=new X,c=new ke,h=new ke;function d(p){let g=0,_=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,E=0,b=0,M=0,v=0,N=0,U=0,D=0,G=0,B=0,z=0;p.sort(gA);for(let w=0,R=p.length;w<R;w++){const F=p[w],et=F.color,at=F.intensity,ut=F.distance,mt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=et.r*at,_+=et.g*at,x+=et.b*at;else if(F.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(F.sh.coefficients[P],at);z++}else if(F.isDirectionalLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,Q=i.get(F);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[S]=Q,s.directionalShadowMap[S]=mt,s.directionalShadowMatrix[S]=F.shadow.matrix,N++}s.directional[S]=P,S++}else if(F.isSpotLight){const P=t.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(et).multiplyScalar(at),P.distance=ut,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,s.spot[b]=P;const J=F.shadow;if(F.map&&(s.spotLightMap[G]=F.map,G++,J.updateMatrices(F),F.castShadow&&B++),s.spotLightMatrix[b]=J.matrix,F.castShadow){const Q=i.get(F);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[b]=Q,s.spotShadowMap[b]=mt,D++}b++}else if(F.isRectAreaLight){const P=t.get(F);P.color.copy(et).multiplyScalar(at),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=P,M++}else if(F.isPointLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const J=F.shadow,Q=i.get(F);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[E]=Q,s.pointShadowMap[E]=mt,s.pointShadowMatrix[E]=F.shadow.matrix,U++}s.point[E]=P,E++}else if(F.isHemisphereLight){const P=t.get(F);P.skyColor.copy(F.color).multiplyScalar(at),P.groundColor.copy(F.groundColor).multiplyScalar(at),s.hemi[v]=P,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const H=s.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==b||H.rectAreaLength!==M||H.hemiLength!==v||H.numDirectionalShadows!==N||H.numPointShadows!==U||H.numSpotShadows!==D||H.numSpotMaps!==G||H.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,H.directionalLength=S,H.pointLength=E,H.spotLength=b,H.rectAreaLength=M,H.hemiLength=v,H.numDirectionalShadows=N,H.numPointShadows=U,H.numSpotShadows=D,H.numSpotMaps=G,H.numLightProbes=z,s.version=mA++)}function m(p,g){let _=0,x=0,S=0,E=0,b=0;const M=g.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const U=p[v];if(U.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(U.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),b++}}}return{setup:d,setupView:m,state:s}}function lv(o){const t=new _A(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function vA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new lv(o),t.set(l,[d])):c>=h.length?(d=new lv(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(o,t,i){let s=new sp;const l=new ie,c=new ie,h=new He,d=new XM({depthPacking:QS}),m=new WM,p={},g=i.maxTextureSize,_={[Wa]:Wn,[Wn]:Wa,[ra]:ra},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:yA,fragmentShader:xA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new vn;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new bn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let v=this.type;this.render=function(B,z,H){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),et=o.state;et.setBlending(Va),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const at=v!==sa&&this.type===sa,ut=v===sa&&this.type!==sa;for(let mt=0,P=B.length;mt<P;mt++){const J=B[mt],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const Tt=Q.getFrameExtents();if(l.multiply(Tt),c.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Tt.x),l.x=c.x*Tt.x,Q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Tt.y),l.y=c.y*Tt.y,Q.mapSize.y=c.y)),Q.map===null||at===!0||ut===!0){const L=this.type!==sa?{minFilter:Ti,magFilter:Ti}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Rs(l.x,l.y,L),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const pt=Q.getViewportCount();for(let L=0;L<pt;L++){const K=Q.getViewport(L);h.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),et.viewport(h),Q.updateMatrices(J,L),s=Q.getFrustum(),D(z,H,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===sa&&N(Q,H),Q.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,F)};function N(B,z){const H=t.update(b);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Rs(l.x,l.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,H,x,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,H,S,b,null)}function U(B,z,H,w){let R=null;const F=H.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)R=F;else if(R=H.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const et=R.uuid,at=z.uuid;let ut=p[et];ut===void 0&&(ut={},p[et]=ut);let mt=ut[at];mt===void 0&&(mt=R.clone(),ut[at]=mt,z.addEventListener("dispose",G)),R=mt}if(R.visible=z.visible,R.wireframe=z.wireframe,w===sa?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:_[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const et=o.properties.get(R);et.light=H}return R}function D(B,z,H,w,R){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===sa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,B.matrixWorld);const at=t.update(B),ut=B.material;if(Array.isArray(ut)){const mt=at.groups;for(let P=0,J=mt.length;P<J;P++){const Q=mt[P],Tt=ut[Q.materialIndex];if(Tt&&Tt.visible){const pt=U(B,Tt,w,R);B.onBeforeShadow(o,B,z,H,at,pt,Q),o.renderBufferDirect(H,null,at,pt,B,Q),B.onAfterShadow(o,B,z,H,at,pt,Q)}}}else if(ut.visible){const mt=U(B,ut,w,R);B.onBeforeShadow(o,B,z,H,at,mt,null),o.renderBufferDirect(H,null,at,mt,B,null),B.onAfterShadow(o,B,z,H,at,mt,null)}}const et=B.children;for(let at=0,ut=et.length;at<ut;at++)D(et[at],z,H,w,R)}function G(B){B.target.removeEventListener("dispose",G);for(const H in p){const w=p[H],R=B.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const MA={[od]:ld,[cd]:hd,[ud]:dd,[Lr]:fd,[ld]:od,[hd]:cd,[dd]:ud,[fd]:Lr};function EA(o,t){function i(){let q=!1;const Rt=new He;let ft=null;const xt=new He(0,0,0,0);return{setMask:function(Ct){ft!==Ct&&!q&&(o.colorMask(Ct,Ct,Ct,Ct),ft=Ct)},setLocked:function(Ct){q=Ct},setClear:function(Ct,Dt,$t,Ye,un){un===!0&&(Ct*=Ye,Dt*=Ye,$t*=Ye),Rt.set(Ct,Dt,$t,Ye),xt.equals(Rt)===!1&&(o.clearColor(Ct,Dt,$t,Ye),xt.copy(Rt))},reset:function(){q=!1,ft=null,xt.set(-1,0,0,0)}}}function s(){let q=!1,Rt=!1,ft=null,xt=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const $t=t.get("EXT_clip_control");Rt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Ye=Ct;Ct=null,this.setClear(Ye)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?Et(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(Dt){ft!==Dt&&!q&&(o.depthMask(Dt),ft=Dt)},setFunc:function(Dt){if(Rt&&(Dt=MA[Dt]),xt!==Dt){switch(Dt){case od:o.depthFunc(o.NEVER);break;case ld:o.depthFunc(o.ALWAYS);break;case cd:o.depthFunc(o.LESS);break;case Lr:o.depthFunc(o.LEQUAL);break;case ud:o.depthFunc(o.EQUAL);break;case fd:o.depthFunc(o.GEQUAL);break;case hd:o.depthFunc(o.GREATER);break;case dd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=Dt}},setLocked:function(Dt){q=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){q=!1,ft=null,xt=null,Ct=null,Rt=!1}}}function l(){let q=!1,Rt=null,ft=null,xt=null,Ct=null,Dt=null,$t=null,Ye=null,un=null;return{setTest:function(Ee){q||(Ee?Et(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!q&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,yn,pi){(ft!==Ee||xt!==yn||Ct!==pi)&&(o.stencilFunc(Ee,yn,pi),ft=Ee,xt=yn,Ct=pi)},setOp:function(Ee,yn,pi){(Dt!==Ee||$t!==yn||Ye!==pi)&&(o.stencilOp(Ee,yn,pi),Dt=Ee,$t=yn,Ye=pi)},setLocked:function(Ee){q=Ee},setClear:function(Ee){un!==Ee&&(o.clearStencil(Ee),un=Ee)},reset:function(){q=!1,Rt=null,ft=null,xt=null,Ct=null,Dt=null,$t=null,Ye=null,un=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,b=!1,M=null,v=null,N=null,U=null,D=null,G=null,B=null,z=new ge(0,0,0),H=0,w=!1,R=null,F=null,et=null,at=null,ut=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,J=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),P=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),P=J>=2);let Tt=null,pt={};const L=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),ht=new He().fromArray(L),W=new He().fromArray(K);function ct(q,Rt,ft,xt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(q,Dt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ft;$t++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,xt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const Mt={};Mt[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),h.setFunc(Lr),ue(!1),_e(n0),Et(o.CULL_FACE),V(Va);function Et(q){g[q]!==!0&&(o.enable(q),g[q]=!0)}function Ot(q){g[q]!==!1&&(o.disable(q),g[q]=!1)}function Ht(q,Rt){return _[q]!==Rt?(o.bindFramebuffer(q,Rt),_[q]=Rt,q===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Rt),q===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ne(q,Rt){let ft=S,xt=!1;if(q){ft=x.get(Rt),ft===void 0&&(ft=[],x.set(Rt,ft));const Ct=q.textures;if(ft.length!==Ct.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)ft[Dt]=o.COLOR_ATTACHMENT0+Dt;ft.length=Ct.length,xt=!0}}else ft[0]!==o.BACK&&(ft[0]=o.BACK,xt=!0);xt&&o.drawBuffers(ft)}function Ne(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const fe={[Ms]:o.FUNC_ADD,[ES]:o.FUNC_SUBTRACT,[TS]:o.FUNC_REVERSE_SUBTRACT};fe[bS]=o.MIN,fe[AS]=o.MAX;const je={[RS]:o.ZERO,[CS]:o.ONE,[wS]:o.SRC_COLOR,[sd]:o.SRC_ALPHA,[zS]:o.SRC_ALPHA_SATURATE,[NS]:o.DST_COLOR,[US]:o.DST_ALPHA,[DS]:o.ONE_MINUS_SRC_COLOR,[rd]:o.ONE_MINUS_SRC_ALPHA,[OS]:o.ONE_MINUS_DST_COLOR,[LS]:o.ONE_MINUS_DST_ALPHA,[PS]:o.CONSTANT_COLOR,[BS]:o.ONE_MINUS_CONSTANT_COLOR,[IS]:o.CONSTANT_ALPHA,[FS]:o.ONE_MINUS_CONSTANT_ALPHA};function V(q,Rt,ft,xt,Ct,Dt,$t,Ye,un,Ee){if(q===Va){b===!0&&(Ot(o.BLEND),b=!1);return}if(b===!1&&(Et(o.BLEND),b=!0),q!==MS){if(q!==M||Ee!==w){if((v!==Ms||D!==Ms)&&(o.blendEquation(o.FUNC_ADD),v=Ms,D=Ms),Ee)switch(q){case Cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case i0:o.blendFunc(o.ONE,o.ONE);break;case a0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case s0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case i0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case a0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case s0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,U=null,G=null,B=null,z.set(0,0,0),H=0,M=q,w=Ee}return}Ct=Ct||Rt,Dt=Dt||ft,$t=$t||xt,(Rt!==v||Ct!==D)&&(o.blendEquationSeparate(fe[Rt],fe[Ct]),v=Rt,D=Ct),(ft!==N||xt!==U||Dt!==G||$t!==B)&&(o.blendFuncSeparate(je[ft],je[xt],je[Dt],je[$t]),N=ft,U=xt,G=Dt,B=$t),(Ye.equals(z)===!1||un!==H)&&(o.blendColor(Ye.r,Ye.g,Ye.b,un),z.copy(Ye),H=un),M=q,w=!1}function Cn(q,Rt){q.side===ra?Ot(o.CULL_FACE):Et(o.CULL_FACE);let ft=q.side===Wn;Rt&&(ft=!ft),ue(ft),q.blending===Cr&&q.transparent===!1?V(Va):V(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const xt=q.stencilWrite;d.setTest(xt),xt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),De(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function _e(q){q!==yS?(Et(o.CULL_FACE),q!==F&&(q===n0?o.cullFace(o.BACK):q===xS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),F=q}function qt(q){q!==et&&(P&&o.lineWidth(q),et=q)}function De(q,Rt,ft){q?(Et(o.POLYGON_OFFSET_FILL),(at!==Rt||ut!==ft)&&(o.polygonOffset(Rt,ft),at=Rt,ut=ft)):Ot(o.POLYGON_OFFSET_FILL)}function Wt(q){q?Et(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function O(q){q===void 0&&(q=o.TEXTURE0+mt-1),Tt!==q&&(o.activeTexture(q),Tt=q)}function A(q,Rt,ft){ft===void 0&&(Tt===null?ft=o.TEXTURE0+mt-1:ft=Tt);let xt=pt[ft];xt===void 0&&(xt={type:void 0,texture:void 0},pt[ft]=xt),(xt.type!==q||xt.texture!==Rt)&&(Tt!==ft&&(o.activeTexture(ft),Tt=ft),o.bindTexture(q,Rt||Mt[q]),xt.type=q,xt.texture=Rt)}function it(){const q=pt[Tt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function gt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{o.texSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(){try{o.texSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{o.texStorage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{o.texImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(q){ht.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),ht.copy(q))}function Nt(q){W.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),W.copy(q))}function Jt(q,Rt){let ft=p.get(Rt);ft===void 0&&(ft=new WeakMap,p.set(Rt,ft));let xt=ft.get(q);xt===void 0&&(xt=o.getUniformBlockIndex(Rt,q.name),ft.set(q,xt))}function ae(q,Rt){const xt=p.get(Rt).get(q);m.get(Rt)!==xt&&(o.uniformBlockBinding(Rt,xt,q.__bindingPointIndex),m.set(Rt,xt))}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Tt=null,pt={},_={},x=new WeakMap,S=[],E=null,b=!1,M=null,v=null,N=null,U=null,D=null,G=null,B=null,z=new ge(0,0,0),H=0,w=!1,R=null,F=null,et=null,at=null,ut=null,ht.set(0,0,o.canvas.width,o.canvas.height),W.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Et,disable:Ot,bindFramebuffer:Ht,drawBuffers:ne,useProgram:Ne,setBlending:V,setMaterial:Cn,setFlipSided:ue,setCullFace:_e,setLineWidth:qt,setPolygonOffset:De,setScissorTest:Wt,activeTexture:O,bindTexture:A,unbindTexture:it,compressedTexImage2D:gt,compressedTexImage3D:bt,texImage2D:It,texImage3D:jt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:ve,texStorage3D:At,texSubImage2D:vt,texSubImage3D:kt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Bt,scissor:Xt,viewport:Nt,reset:Oe}}function TA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ie,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return S?new OffscreenCanvas(O,A):$c("canvas")}function b(O,A,it){let gt=1;const bt=Wt(O);if((bt.width>it||bt.height>it)&&(gt=it/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const vt=Math.floor(gt*bt.width),kt=Math.floor(gt*bt.height);_===void 0&&(_=E(vt,kt));const wt=A?E(vt,kt):_;return wt.width=vt,wt.height=kt,wt.getContext("2d").drawImage(O,0,0,vt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+vt+"x"+kt+")."),wt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,A,it,gt,bt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let vt=A;if(A===o.RED&&(it===o.FLOAT&&(vt=o.R32F),it===o.HALF_FLOAT&&(vt=o.R16F),it===o.UNSIGNED_BYTE&&(vt=o.R8)),A===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.R8UI),it===o.UNSIGNED_SHORT&&(vt=o.R16UI),it===o.UNSIGNED_INT&&(vt=o.R32UI),it===o.BYTE&&(vt=o.R8I),it===o.SHORT&&(vt=o.R16I),it===o.INT&&(vt=o.R32I)),A===o.RG&&(it===o.FLOAT&&(vt=o.RG32F),it===o.HALF_FLOAT&&(vt=o.RG16F),it===o.UNSIGNED_BYTE&&(vt=o.RG8)),A===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.RG8UI),it===o.UNSIGNED_SHORT&&(vt=o.RG16UI),it===o.UNSIGNED_INT&&(vt=o.RG32UI),it===o.BYTE&&(vt=o.RG8I),it===o.SHORT&&(vt=o.RG16I),it===o.INT&&(vt=o.RG32I)),A===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),it===o.UNSIGNED_INT&&(vt=o.RGB32UI),it===o.BYTE&&(vt=o.RGB8I),it===o.SHORT&&(vt=o.RGB16I),it===o.INT&&(vt=o.RGB32I)),A===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),it===o.UNSIGNED_INT&&(vt=o.RGBA32UI),it===o.BYTE&&(vt=o.RGBA8I),it===o.SHORT&&(vt=o.RGBA16I),it===o.INT&&(vt=o.RGBA32I)),A===o.RGB&&it===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),A===o.RGBA){const kt=bt?Qc:Ce.getTransfer(gt);it===o.FLOAT&&(vt=o.RGBA32F),it===o.HALF_FLOAT&&(vt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(vt=kt===Ie?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function D(O,A){let it;return O?A===null||A===As||A===zr?it=o.DEPTH24_STENCIL8:A===la?it=o.DEPTH32F_STENCIL8:A===jo&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===As||A===zr?it=o.DEPTH_COMPONENT24:A===la?it=o.DEPTH_COMPONENT32F:A===jo&&(it=o.DEPTH_COMPONENT16),it}function G(O,A){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ti&&O.minFilter!==Ni?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function B(O){const A=O.target;A.removeEventListener("dispose",B),H(A),A.isVideoTexture&&g.delete(A)}function z(O){const A=O.target;A.removeEventListener("dispose",z),R(A)}function H(O){const A=s.get(O);if(A.__webglInit===void 0)return;const it=O.source,gt=x.get(it);if(gt){const bt=gt[A.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&w(O),Object.keys(gt).length===0&&x.delete(it)}s.remove(O)}function w(O){const A=s.get(O);o.deleteTexture(A.__webglTexture);const it=O.source,gt=x.get(it);delete gt[A.__cacheKey],h.memory.textures--}function R(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(A.__webglFramebuffer[gt]))for(let bt=0;bt<A.__webglFramebuffer[gt].length;bt++)o.deleteFramebuffer(A.__webglFramebuffer[gt][bt]);else o.deleteFramebuffer(A.__webglFramebuffer[gt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[gt])}else{if(Array.isArray(A.__webglFramebuffer))for(let gt=0;gt<A.__webglFramebuffer.length;gt++)o.deleteFramebuffer(A.__webglFramebuffer[gt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let gt=0;gt<A.__webglColorRenderbuffer.length;gt++)A.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[gt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const it=O.textures;for(let gt=0,bt=it.length;gt<bt;gt++){const vt=s.get(it[gt]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),h.memory.textures--),s.remove(it[gt])}s.remove(O)}let F=0;function et(){F=0}function at(){const O=F;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function ut(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function mt(O,A){const it=s.get(O);if(O.isVideoTexture&&qt(O),O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){const gt=O.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(it,O,A);return}}i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+A)}function P(O,A){const it=s.get(O);if(O.version>0&&it.__version!==O.version){W(it,O,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+A)}function J(O,A){const it=s.get(O);if(O.version>0&&it.__version!==O.version){W(it,O,A);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+A)}function Q(O,A){const it=s.get(O);if(O.version>0&&it.__version!==O.version){ct(it,O,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+A)}const Tt={[gd]:o.REPEAT,[Ts]:o.CLAMP_TO_EDGE,[_d]:o.MIRRORED_REPEAT},pt={[Ti]:o.NEAREST,[ZS]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},L={[$S]:o.NEVER,[sM]:o.ALWAYS,[tM]:o.LESS,[Av]:o.LEQUAL,[eM]:o.EQUAL,[aM]:o.GEQUAL,[nM]:o.GREATER,[iM]:o.NOTEQUAL};function K(O,A){if(A.type===la&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ni||A.magFilter===xh||A.magFilter===cc||A.magFilter===bs||A.minFilter===Ni||A.minFilter===xh||A.minFilter===cc||A.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Tt[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Tt[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Tt[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,pt[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,pt[A.minFilter]),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,L[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ti||A.minFilter!==cc&&A.minFilter!==bs||A.type===la&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function ht(O,A){let it=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",B));const gt=A.source;let bt=x.get(gt);bt===void 0&&(bt={},x.set(gt,bt));const vt=ut(A);if(vt!==O.__cacheKey){bt[vt]===void 0&&(bt[vt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),bt[vt].usedTimes++;const kt=bt[O.__cacheKey];kt!==void 0&&(bt[O.__cacheKey].usedTimes--,kt.usedTimes===0&&w(A)),O.__cacheKey=vt,O.__webglTexture=bt[vt].texture}return it}function W(O,A,it){let gt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=o.TEXTURE_3D);const bt=ht(O,A),vt=A.source;i.bindTexture(gt,O.__webglTexture,o.TEXTURE0+it);const kt=s.get(vt);if(vt.version!==kt.__version||bt===!0){i.activeTexture(o.TEXTURE0+it);const wt=Ce.getPrimaries(Ce.workingColorSpace),Bt=A.colorSpace===Ga?null:Ce.getPrimaries(A.colorSpace),ve=A.colorSpace===Ga||wt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let At=b(A.image,!1,l.maxTextureSize);At=De(A,At);const It=c.convert(A.format,A.colorSpace),jt=c.convert(A.type);let Xt=U(A.internalFormat,It,jt,A.colorSpace,A.isVideoTexture);K(gt,A);let Nt;const Jt=A.mipmaps,ae=A.isVideoTexture!==!0,Oe=kt.__version===void 0||bt===!0,q=vt.dataReady,Rt=G(A,At);if(A.isDepthTexture)Xt=D(A.format===Pr,A.type),Oe&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Xt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,It,jt,null));else if(A.isDataTexture)if(Jt.length>0){ae&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Xt,Jt[0].width,Jt[0].height);for(let ft=0,xt=Jt.length;ft<xt;ft++)Nt=Jt[ft],ae?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,It,jt,Nt.data):i.texImage2D(o.TEXTURE_2D,ft,Xt,Nt.width,Nt.height,0,It,jt,Nt.data);A.generateMipmaps=!1}else ae?(Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Xt,At.width,At.height),q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,It,jt,At.data)):i.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,It,jt,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Xt,Jt[0].width,Jt[0].height,At.depth);for(let ft=0,xt=Jt.length;ft<xt;ft++)if(Nt=Jt[ft],A.format!==Ei)if(It!==null)if(ae){if(q)if(A.layerUpdates.size>0){const Ct=I0(Nt.width,Nt.height,A.format,A.type);for(const Dt of A.layerUpdates){const $t=Nt.data.subarray(Dt*Ct/Nt.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,Dt,Nt.width,Nt.height,1,It,$t)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Nt.width,Nt.height,At.depth,It,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,Xt,Nt.width,Nt.height,At.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Nt.width,Nt.height,At.depth,It,jt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ft,Xt,Nt.width,Nt.height,At.depth,0,It,jt,Nt.data)}else{ae&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,Xt,Jt[0].width,Jt[0].height);for(let ft=0,xt=Jt.length;ft<xt;ft++)Nt=Jt[ft],A.format!==Ei?It!==null?ae?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,It,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,ft,Xt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Nt.width,Nt.height,It,jt,Nt.data):i.texImage2D(o.TEXTURE_2D,ft,Xt,Nt.width,Nt.height,0,It,jt,Nt.data)}else if(A.isDataArrayTexture)if(ae){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Xt,At.width,At.height,At.depth),q)if(A.layerUpdates.size>0){const ft=I0(At.width,At.height,A.format,A.type);for(const xt of A.layerUpdates){const Ct=At.data.subarray(xt*ft/At.data.BYTES_PER_ELEMENT,(xt+1)*ft/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,It,jt,Ct)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,It,jt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,At.width,At.height,At.depth,0,It,jt,At.data);else if(A.isData3DTexture)ae?(Oe&&i.texStorage3D(o.TEXTURE_3D,Rt,Xt,At.width,At.height,At.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,It,jt,At.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,At.width,At.height,At.depth,0,It,jt,At.data);else if(A.isFramebufferTexture){if(Oe)if(ae)i.texStorage2D(o.TEXTURE_2D,Rt,Xt,At.width,At.height);else{let ft=At.width,xt=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Xt,ft,xt,0,It,jt,null),ft>>=1,xt>>=1}}else if(Jt.length>0){if(ae&&Oe){const ft=Wt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Xt,ft.width,ft.height)}for(let ft=0,xt=Jt.length;ft<xt;ft++)Nt=Jt[ft],ae?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,It,jt,Nt):i.texImage2D(o.TEXTURE_2D,ft,Xt,It,jt,Nt);A.generateMipmaps=!1}else if(ae){if(Oe){const ft=Wt(At);i.texStorage2D(o.TEXTURE_2D,Rt,Xt,ft.width,ft.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,jt,At)}else i.texImage2D(o.TEXTURE_2D,0,Xt,It,jt,At);M(A)&&v(gt),kt.__version=vt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ct(O,A,it){if(A.image.length!==6)return;const gt=ht(O,A),bt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+it);const vt=s.get(bt);if(bt.version!==vt.__version||gt===!0){i.activeTexture(o.TEXTURE0+it);const kt=Ce.getPrimaries(Ce.workingColorSpace),wt=A.colorSpace===Ga?null:Ce.getPrimaries(A.colorSpace),Bt=A.colorSpace===Ga||kt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ve=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,It=[];for(let xt=0;xt<6;xt++)!ve&&!At?It[xt]=b(A.image[xt],!0,l.maxCubemapSize):It[xt]=At?A.image[xt].image:A.image[xt],It[xt]=De(A,It[xt]);const jt=It[0],Xt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),Jt=U(A.internalFormat,Xt,Nt,A.colorSpace),ae=A.isVideoTexture!==!0,Oe=vt.__version===void 0||gt===!0,q=bt.dataReady;let Rt=G(A,jt);K(o.TEXTURE_CUBE_MAP,A);let ft;if(ve){ae&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,jt.width,jt.height);for(let xt=0;xt<6;xt++){ft=It[xt].mipmaps;for(let Ct=0;Ct<ft.length;Ct++){const Dt=ft[Ct];A.format!==Ei?Xt!==null?ae?q&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,Dt.width,Dt.height,Xt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,Dt.width,Dt.height,Xt,Nt,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,Jt,Dt.width,Dt.height,0,Xt,Nt,Dt.data)}}}else{if(ft=A.mipmaps,ae&&Oe){ft.length>0&&Rt++;const xt=Wt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){ae?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,It[xt].width,It[xt].height,Xt,Nt,It[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Jt,It[xt].width,It[xt].height,0,Xt,Nt,It[xt].data);for(let Ct=0;Ct<ft.length;Ct++){const $t=ft[Ct].image[xt].image;ae?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,$t.width,$t.height,Xt,Nt,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,Jt,$t.width,$t.height,0,Xt,Nt,$t.data)}}else{ae?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Xt,Nt,It[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Jt,Xt,Nt,It[xt]);for(let Ct=0;Ct<ft.length;Ct++){const Dt=ft[Ct];ae?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Xt,Nt,Dt.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,Jt,Xt,Nt,Dt.image[xt])}}}M(A)&&v(o.TEXTURE_CUBE_MAP),vt.__version=bt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Mt(O,A,it,gt,bt,vt){const kt=c.convert(it.format,it.colorSpace),wt=c.convert(it.type),Bt=U(it.internalFormat,kt,wt,it.colorSpace),ve=s.get(A),At=s.get(it);if(At.__renderTarget=A,!ve.__hasExternalTextures){const It=Math.max(1,A.width>>vt),jt=Math.max(1,A.height>>vt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,vt,Bt,It,jt,A.depth,0,kt,wt,null):i.texImage2D(bt,vt,Bt,It,jt,0,kt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),_e(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,bt,At.__webglTexture,0,ue(A)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,bt,At.__webglTexture,vt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(O,A,it){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer){const gt=A.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,vt=D(A.stencilBuffer,bt),kt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ue(A);_e(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,vt,A.width,A.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,vt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,vt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,O)}else{const gt=A.textures;for(let bt=0;bt<gt.length;bt++){const vt=gt[bt],kt=c.convert(vt.format,vt.colorSpace),wt=c.convert(vt.type),Bt=U(vt.internalFormat,kt,wt,vt.colorSpace),ve=ue(A);it&&_e(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,Bt,A.width,A.height):_e(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,Bt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(A.depthTexture);gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),mt(A.depthTexture,0);const bt=gt.__webglTexture,vt=ue(A);if(A.depthTexture.format===wr)_e(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0);else if(A.depthTexture.format===Pr)_e(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0,vt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function Ht(O){const A=s.get(O),it=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const gt=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){const bt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),A.__depthDisposeCallback=bt}A.__boundDepthTexture=gt}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Ot(A.__webglFramebuffer,O)}else if(it){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=o.createRenderbuffer(),Et(A.__webglDepthbuffer[gt],O,!1);else{const bt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,vt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Et(A.__webglDepthbuffer,O,!1);else{const gt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,bt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(O,A,it){const gt=s.get(O);A!==void 0&&Mt(gt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Ht(O)}function Ne(O){const A=O.texture,it=s.get(O),gt=s.get(A);O.addEventListener("dispose",z);const bt=O.textures,vt=O.isWebGLCubeRenderTarget===!0,kt=bt.length>1;if(kt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=A.version,h.memory.textures++),vt){it.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer[wt]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)it.__webglFramebuffer[wt][Bt]=o.createFramebuffer()}else it.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)it.__webglFramebuffer[wt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(kt)for(let wt=0,Bt=bt.length;wt<Bt;wt++){const ve=s.get(bt[wt]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&_e(O)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let wt=0;wt<bt.length;wt++){const Bt=bt[wt];it.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[wt]);const ve=c.convert(Bt.format,Bt.colorSpace),At=c.convert(Bt.type),It=U(Bt.internalFormat,ve,At,Bt.colorSpace,O.isXRRenderTarget===!0),jt=ue(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,It,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,it.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Et(it.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(vt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),K(o.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)Mt(it.__webglFramebuffer[wt][Bt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Bt);else Mt(it.__webglFramebuffer[wt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(A)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let wt=0,Bt=bt.length;wt<Bt;wt++){const ve=bt[wt],At=s.get(ve);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),K(o.TEXTURE_2D,ve),Mt(it.__webglFramebuffer,O,ve,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(ve)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),K(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)Mt(it.__webglFramebuffer[Bt],O,A,o.COLOR_ATTACHMENT0,wt,Bt);else Mt(it.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,wt,0);M(A)&&v(wt),i.unbindTexture()}O.depthBuffer&&Ht(O)}function fe(O){const A=O.textures;for(let it=0,gt=A.length;it<gt;it++){const bt=A[it];if(M(bt)){const vt=N(O),kt=s.get(bt).__webglTexture;i.bindTexture(vt,kt),v(vt),i.unbindTexture()}}}const je=[],V=[];function Cn(O){if(O.samples>0){if(_e(O)===!1){const A=O.textures,it=O.width,gt=O.height;let bt=o.COLOR_BUFFER_BIT;const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(O),wt=A.length>1;if(wt)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Bt]);const ve=s.get(A[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ve,0)}o.blitFramebuffer(0,0,it,gt,0,0,it,gt,bt,o.NEAREST),m===!0&&(je.length=0,V.length=0,je.push(o.COLOR_ATTACHMENT0+Bt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(je.push(vt),V.push(vt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,je))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Bt]);const ve=s.get(A[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,ve,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const A=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function ue(O){return Math.min(l.maxSamples,O.samples)}function _e(O){const A=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qt(O){const A=h.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function De(O,A){const it=O.colorSpace,gt=O.format,bt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||it!==Br&&it!==Ga&&(Ce.getTransfer(it)===Ie?(gt!==Ei||bt!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),A}function Wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=et,this.setTexture2D=mt,this.setTexture2DArray=P,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=ne,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=_e}function bA(o,t){function i(s,l=Ga){let c;const h=Ce.getTransfer(l);if(s===fa)return o.UNSIGNED_BYTE;if(s===$d)return o.UNSIGNED_SHORT_4_4_4_4;if(s===tp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===_v)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===mv)return o.BYTE;if(s===gv)return o.SHORT;if(s===jo)return o.UNSIGNED_SHORT;if(s===Jd)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===la)return o.FLOAT;if(s===Yo)return o.HALF_FLOAT;if(s===vv)return o.ALPHA;if(s===yv)return o.RGB;if(s===Ei)return o.RGBA;if(s===xv)return o.LUMINANCE;if(s===Sv)return o.LUMINANCE_ALPHA;if(s===wr)return o.DEPTH_COMPONENT;if(s===Pr)return o.DEPTH_STENCIL;if(s===Mv)return o.RED;if(s===ep)return o.RED_INTEGER;if(s===Ev)return o.RG;if(s===np)return o.RG_INTEGER;if(s===ip)return o.RGBA_INTEGER;if(s===kc||s===Xc||s===Wc||s===qc)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vd||s===yd||s===xd||s===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Md||s===Ed||s===Td)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Md||s===Ed)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Td)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bd||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===zd||s===Pd||s===Bd||s===Id)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===Fd||s===Hd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===jc)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tv||s===Gd||s===Vd||s===kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const AA={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),v=this._getHandJoint(p,b);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Mi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new In,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:RA,fragmentShader:CA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DA extends Fr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,S=null,E=null;const b=new wA,M=i.getContextAttributes();let v=null,N=null;const U=[],D=[],G=new ie;let B=null;const z=new ei;z.viewport=new He;const H=new ei;H.viewport=new He;const w=[z,H],R=new KM;let F=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ct=U[W];return ct===void 0&&(ct=new nd,U[W]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(W){let ct=U[W];return ct===void 0&&(ct=new nd,U[W]=ct),ct.getGripSpace()},this.getHand=function(W){let ct=U[W];return ct===void 0&&(ct=new nd,U[W]=ct),ct.getHandSpace()};function at(W){const ct=D.indexOf(W.inputSource);if(ct===-1)return;const Mt=U[ct];Mt!==void 0&&(Mt.update(W.inputSource,W.frame,p||h),Mt.dispatchEvent({type:W.type,data:W.inputSource}))}function ut(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",mt);for(let W=0;W<U.length;W++){const ct=D[W];ct!==null&&(D[W]=null,U[W].disconnect(ct))}F=null,et=null,b.reset(),t.setRenderTarget(v),S=null,x=null,_=null,l=null,N=null,ht.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",mt),M.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(G),l.renderState.layers===void 0){const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Rs(S.framebufferWidth,S.framebufferHeight,{format:Ei,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ct=null,Mt=null,Et=null;M.depth&&(Et=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=M.stencil?Pr:wr,Mt=M.stencil?zr:As);const Ot={colorFormat:i.RGBA8,depthFormat:Et,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(Ot),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new Rs(x.textureWidth,x.textureHeight,{format:Ei,type:fa,depthTexture:new Hv(x.textureWidth,x.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ht.setContext(l),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function mt(W){for(let ct=0;ct<W.removed.length;ct++){const Mt=W.removed[ct],Et=D.indexOf(Mt);Et>=0&&(D[Et]=null,U[Et].disconnect(Mt))}for(let ct=0;ct<W.added.length;ct++){const Mt=W.added[ct];let Et=D.indexOf(Mt);if(Et===-1){for(let Ht=0;Ht<U.length;Ht++)if(Ht>=D.length){D.push(Mt),Et=Ht;break}else if(D[Ht]===null){D[Ht]=Mt,Et=Ht;break}if(Et===-1)break}const Ot=U[Et];Ot&&Ot.connect(Mt)}}const P=new X,J=new X;function Q(W,ct,Mt){P.setFromMatrixPosition(ct.matrixWorld),J.setFromMatrixPosition(Mt.matrixWorld);const Et=P.distanceTo(J),Ot=ct.projectionMatrix.elements,Ht=Mt.projectionMatrix.elements,ne=Ot[14]/(Ot[10]-1),Ne=Ot[14]/(Ot[10]+1),fe=(Ot[9]+1)/Ot[5],je=(Ot[9]-1)/Ot[5],V=(Ot[8]-1)/Ot[0],Cn=(Ht[8]+1)/Ht[0],ue=ne*V,_e=ne*Cn,qt=Et/(-V+Cn),De=qt*-V;if(ct.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(qt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ot[10]===-1)W.projectionMatrix.copy(ct.projectionMatrix),W.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Wt=ne+qt,O=Ne+qt,A=ue-De,it=_e+(Et-De),gt=fe*Ne/O*Wt,bt=je*Ne/O*Wt;W.projectionMatrix.makePerspective(A,it,gt,bt,Wt,O),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Tt(W,ct){ct===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ct.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let ct=W.near,Mt=W.far;b.texture!==null&&(b.depthNear>0&&(ct=b.depthNear),b.depthFar>0&&(Mt=b.depthFar)),R.near=H.near=z.near=ct,R.far=H.far=z.far=Mt,(F!==R.near||et!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,et=R.far),z.layers.mask=W.layers.mask|2,H.layers.mask=W.layers.mask|4,R.layers.mask=z.layers.mask|H.layers.mask;const Et=W.parent,Ot=R.cameras;Tt(R,Et);for(let Ht=0;Ht<Ot.length;Ht++)Tt(Ot[Ht],Et);Ot.length===2?Q(R,z,H):R.projectionMatrix.copy(z.projectionMatrix),pt(W,R,Et)};function pt(W,ct,Mt){Mt===null?W.matrix.copy(ct.matrixWorld):(W.matrix.copy(Mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ct.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ct.projectionMatrix),W.projectionMatrixInverse.copy(ct.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(W){m=W,x!==null&&(x.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let L=null;function K(W,ct){if(g=ct.getViewerPose(p||h),E=ct,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let Et=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,Et=!0);for(let Ht=0;Ht<Mt.length;Ht++){const ne=Mt[Ht];let Ne=null;if(S!==null)Ne=S.getViewport(ne);else{const je=_.getViewSubImage(x,ne);Ne=je.viewport,Ht===0&&(t.setRenderTargetTextures(N,je.colorTexture,x.ignoreDepthValues?void 0:je.depthStencilTexture),t.setRenderTarget(N))}let fe=w[Ht];fe===void 0&&(fe=new ei,fe.layers.enable(Ht),fe.viewport=new He,w[Ht]=fe),fe.matrix.fromArray(ne.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ne.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ht===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Et===!0&&R.cameras.push(fe)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ht=_.getDepthInformation(Mt[0]);Ht&&Ht.isValid&&Ht.texture&&b.init(t,Ht,l.renderState)}}for(let Mt=0;Mt<U.length;Mt++){const Et=D[Mt],Ot=U[Mt];Et!==null&&Ot!==void 0&&Ot.update(Et,ct,p||h)}L&&L(W,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),E=null}const ht=new Vv;ht.setAnimationLoop(K),this.setAnimationLoop=function(W){L=W},this.dispose=function(){}}}const ys=new Oi,UA=new ke;function LA(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Ov(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,N,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&S(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),b(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,N,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Wn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Wn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const N=t.get(v),U=N.envMap,D=N.envMapRotation;U&&(M.envMap.value=U,ys.copy(D),ys.x*=-1,ys.y*=-1,ys.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),M.envMapRotation.value.setFromMatrix4(UA.makeRotationFromEuler(ys)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,N,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*N,M.scale.value=U*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,N){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function b(M,v){const N=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function NA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const D=U.program;s.uniformBlockBinding(N,D)}function p(N,U){let D=l[N.id];D===void 0&&(E(N),D=g(N),l[N.id]=D,N.addEventListener("dispose",M));const G=U.program;s.updateUBOMapping(N,G);const B=t.render.frame;c[N.id]!==B&&(x(N),c[N.id]=B)}function g(N){const U=_();N.__bindingPointIndex=U;const D=o.createBuffer(),G=N.__size,B=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const U=l[N.id],D=N.uniforms,G=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let B=0,z=D.length;B<z;B++){const H=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,R=H.length;w<R;w++){const F=H[w];if(S(F,B,w,G)===!0){const et=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let ut=0;for(let mt=0;mt<at.length;mt++){const P=at[mt],J=b(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,et+ut,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,ut),ut+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(N,U,D,G){const B=N.value,z=U+"_"+D;if(G[z]===void 0)return typeof B=="number"||typeof B=="boolean"?G[z]=B:G[z]=B.clone(),!0;{const H=G[z];if(typeof B=="number"||typeof B=="boolean"){if(H!==B)return G[z]=B,!0}else if(H.equals(B)===!1)return H.copy(B),!0}return!1}function E(N){const U=N.uniforms;let D=0;const G=16;for(let z=0,H=U.length;z<H;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let R=0,F=w.length;R<F;R++){const et=w[R],at=Array.isArray(et.value)?et.value:[et.value];for(let ut=0,mt=at.length;ut<mt;ut++){const P=at[ut],J=b(P),Q=D%G,Tt=Q%J.boundary,pt=Q+Tt;D+=Tt,pt!==0&&G-pt<J.storage&&(D+=G-pt),et.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=J.storage}}}const B=D%G;return B>0&&(D+=G-B),N.__size=D,N.__cache={},this}function b(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function M(N){const U=N.target;U.removeEventListener("dispose",M);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class OA{constructor(t={}){const{canvas:i=oM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,v=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=ka,this.toneMappingExposure=1;const D=this;let G=!1,B=0,z=0,H=null,w=-1,R=null;const F=new He,et=new He;let at=null;const ut=new ge(0);let mt=0,P=i.width,J=i.height,Q=1,Tt=null,pt=null;const L=new He(0,0,P,J),K=new He(0,0,P,J);let ht=!1;const W=new sp;let ct=!1,Mt=!1;const Et=new ke,Ot=new ke,Ht=new X,ne=new He,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function je(){return H===null?Q:1}let V=s;function Cn(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qd}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const j="webgl2";if(V=Cn(j,C),V===null)throw Cn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,_e,qt,De,Wt,O,A,it,gt,bt,vt,kt,wt,Bt,ve,At,It,jt,Xt,Nt,Jt,ae,Oe,q;function Rt(){ue=new kb(V),ue.init(),ae=new bA(V,ue),_e=new Bb(V,ue,t,ae),qt=new EA(V,ue),_e.reverseDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),De=new qb(V),Wt=new uA,O=new TA(V,ue,qt,Wt,_e,ae,De),A=new Fb(D),it=new Vb(D),gt=new $M(V),Oe=new zb(V,gt),bt=new Xb(V,gt,De,Oe),vt=new Yb(V,bt,gt,De),Xt=new jb(V,_e,O),At=new Ib(Wt),kt=new cA(D,A,it,ue,_e,Oe,At),wt=new LA(D,Wt),Bt=new hA,ve=new vA(ue),jt=new Ob(D,A,it,qt,vt,S,m),It=new SA(D,vt,_e),q=new NA(V,De,_e,qt),Nt=new Pb(V,ue,De),Jt=new Wb(V,ue,De),De.programs=kt.programs,D.capabilities=_e,D.extensions=ue,D.properties=Wt,D.renderLists=Bt,D.shadowMap=It,D.state=qt,D.info=De}Rt();const ft=new DA(D,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(P,J,!1))},this.getSize=function(C){return C.set(P,J)},this.setSize=function(C,j,st=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,J=j,i.width=Math.floor(C*Q),i.height=Math.floor(j*Q),st===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(P*Q,J*Q).floor()},this.setDrawingBufferSize=function(C,j,st){P=C,J=j,Q=st,i.width=Math.floor(C*st),i.height=Math.floor(j*st),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,j,st,rt){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,j,st,rt),qt.viewport(F.copy(L).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,j,st,rt){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,j,st,rt),qt.scissor(et.copy(K).multiplyScalar(Q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){qt.setScissorTest(ht=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){pt=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(C=!0,j=!0,st=!0){let rt=0;if(C){let Y=!1;if(H!==null){const St=H.texture.format;Y=St===ip||St===np||St===ep}if(Y){const St=H.texture.type,Ut=St===fa||St===As||St===jo||St===zr||St===$d||St===tp,Pt=jt.getClearColor(),zt=jt.getClearAlpha(),Kt=Pt.r,te=Pt.g,Yt=Pt.b;Ut?(E[0]=Kt,E[1]=te,E[2]=Yt,E[3]=zt,V.clearBufferuiv(V.COLOR,0,E)):(b[0]=Kt,b[1]=te,b[2]=Yt,b[3]=zt,V.clearBufferiv(V.COLOR,0,b))}else rt|=V.COLOR_BUFFER_BIT}j&&(rt|=V.DEPTH_BUFFER_BIT),st&&(rt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),jt.dispose(),Bt.dispose(),ve.dispose(),Wt.dispose(),A.dispose(),it.dispose(),vt.dispose(),Oe.dispose(),q.dispose(),kt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Vr),ft.removeEventListener("sessionend",kr),bi.stop()};function xt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=De.autoReset,j=It.enabled,st=It.autoUpdate,rt=It.needsUpdate,Y=It.type;Rt(),De.autoReset=C,It.enabled=j,It.autoUpdate=st,It.needsUpdate=rt,It.type=Y}function Dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $t(C){const j=C.target;j.removeEventListener("dispose",$t),Ye(j)}function Ye(C){un(C),Wt.remove(C)}function un(C){const j=Wt.get(C).programs;j!==void 0&&(j.forEach(function(st){kt.releaseProgram(st)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,st,rt,Y,St){j===null&&(j=Ne);const Ut=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=Wr(C,j,st,rt,Y);qt.setMaterial(rt,Ut);let zt=st.index,Kt=1;if(rt.wireframe===!0){if(zt=bt.getWireframeAttribute(st),zt===void 0)return;Kt=2}const te=st.drawRange,Yt=st.attributes.position;let ye=te.start*Kt,Te=(te.start+te.count)*Kt;St!==null&&(ye=Math.max(ye,St.start*Kt),Te=Math.min(Te,(St.start+St.count)*Kt)),zt!==null?(ye=Math.max(ye,0),Te=Math.min(Te,zt.count)):Yt!=null&&(ye=Math.max(ye,0),Te=Math.min(Te,Yt.count));const Xe=Te-ye;if(Xe<0||Xe===1/0)return;Oe.setup(Y,rt,Pt,st,zt);let Ge,se=Nt;if(zt!==null&&(Ge=gt.get(zt),se=Jt,se.setIndex(Ge)),Y.isMesh)rt.wireframe===!0?(qt.setLineWidth(rt.wireframeLinewidth*je()),se.setMode(V.LINES)):se.setMode(V.TRIANGLES);else if(Y.isLine){let Gt=rt.linewidth;Gt===void 0&&(Gt=1),qt.setLineWidth(Gt*je()),Y.isLineSegments?se.setMode(V.LINES):Y.isLineLoop?se.setMode(V.LINE_LOOP):se.setMode(V.LINE_STRIP)}else Y.isPoints?se.setMode(V.POINTS):Y.isSprite&&se.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)se.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))se.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,an=Y._multiDrawCounts,be=Y._multiDrawCount,Nn=zt?gt.get(zt).bytesPerElement:1,Pi=Wt.get(rt).currentProgram.getUniforms();for(let mn=0;mn<be;mn++)Pi.setValue(V,"_gl_DrawID",mn),se.render(Gt[mn]/Nn,an[mn])}else if(Y.isInstancedMesh)se.renderInstances(ye,Xe,Y.count);else if(st.isInstancedBufferGeometry){const Gt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,an=Math.min(st.instanceCount,Gt);se.renderInstances(ye,Xe,an)}else se.render(ye,Xe)};function Ee(C,j,st){C.transparent===!0&&C.side===ra&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ke(C,j,st),C.side=Wa,C.needsUpdate=!0,Ke(C,j,st),C.side=ra):Ke(C,j,st)}this.compile=function(C,j,st=null){st===null&&(st=C),v=ve.get(st),v.init(j),U.push(v),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),C!==st&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const rt=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const St=Y.material;if(St)if(Array.isArray(St))for(let Ut=0;Ut<St.length;Ut++){const Pt=St[Ut];Ee(Pt,st,Y),rt.add(Pt)}else Ee(St,st,Y),rt.add(St)}),U.pop(),v=null,rt},this.compileAsync=function(C,j,st=null){const rt=this.compile(C,j,st);return new Promise(Y=>{function St(){if(rt.forEach(function(Ut){Wt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){Y(C);return}setTimeout(St,10)}ue.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let yn=null;function pi(C){yn&&yn(C)}function Vr(){bi.stop()}function kr(){bi.start()}const bi=new Vv;bi.setAnimationLoop(pi),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(C){yn=C,ft.setAnimationLoop(C),C===null?bi.stop():bi.start()},ft.addEventListener("sessionstart",Vr),ft.addEventListener("sessionend",kr),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(j),j=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,j,H),v=ve.get(C,U.length),v.init(j),U.push(v),Ot.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W.setFromProjectionMatrix(Ot),Mt=this.localClippingEnabled,ct=At.init(this.clippingPlanes,Mt),M=Bt.get(C,N.length),M.init(),N.push(M),ft.enabled===!0&&ft.isPresenting===!0){const St=D.xr.getDepthSensingMesh();St!==null&&Ya(St,j,-1/0,D.sortObjects)}Ya(C,j,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Tt,pt),fe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,fe&&jt.addToRenderList(M,C),this.info.render.frame++,ct===!0&&At.beginShadows();const st=v.state.shadowsArray;It.render(st,C,j),ct===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Y=M.transmissive;if(v.setupLights(),j.isArrayCamera){const St=j.cameras;if(Y.length>0)for(let Ut=0,Pt=St.length;Ut<Pt;Ut++){const zt=St[Ut];Xr(rt,Y,C,zt)}fe&&jt.render(C);for(let Ut=0,Pt=St.length;Ut<Pt;Ut++){const zt=St[Ut];Cs(M,C,zt,zt.viewport)}}else Y.length>0&&Xr(rt,Y,C,j),fe&&jt.render(C),Cs(M,C,j);H!==null&&(O.updateMultisampleRenderTarget(H),O.updateRenderTargetMipmap(H)),C.isScene===!0&&C.onAfterRender(D,C,j),Oe.resetDefaultState(),w=-1,R=null,U.pop(),U.length>0?(v=U[U.length-1],ct===!0&&At.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function Ya(C,j,st,rt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){rt&&ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ot);const Ut=vt.update(C),Pt=C.material;Pt.visible&&M.push(C,Ut,Pt,st,ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Ut=vt.update(C),Pt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ne.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ne.copy(Ut.boundingSphere.center)),ne.applyMatrix4(C.matrixWorld).applyMatrix4(Ot)),Array.isArray(Pt)){const zt=Ut.groups;for(let Kt=0,te=zt.length;Kt<te;Kt++){const Yt=zt[Kt],ye=Pt[Yt.materialIndex];ye&&ye.visible&&M.push(C,Ut,ye,st,ne.z,Yt)}}else Pt.visible&&M.push(C,Ut,Pt,st,ne.z,null)}}const St=C.children;for(let Ut=0,Pt=St.length;Ut<Pt;Ut++)Ya(St[Ut],j,st,rt)}function Cs(C,j,st,rt){const Y=C.opaque,St=C.transmissive,Ut=C.transparent;v.setupLightsView(st),ct===!0&&At.setGlobalState(D.clippingPlanes,st),rt&&qt.viewport(F.copy(rt)),Y.length>0&&Za(Y,j,st),St.length>0&&Za(St,j,st),Ut.length>0&&Za(Ut,j,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Xr(C,j,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new Rs(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Yo:fa,minFilter:bs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const St=v.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||F;St.setSize(Ut.z,Ut.w);const Pt=D.getRenderTarget();D.setRenderTarget(St),D.getClearColor(ut),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),fe&&jt.render(st);const zt=D.toneMapping;D.toneMapping=ka;const Kt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),ct===!0&&At.setGlobalState(D.clippingPlanes,rt),Za(C,st,rt),O.updateMultisampleRenderTarget(St),O.updateRenderTargetMipmap(St),ue.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,ye=j.length;Yt<ye;Yt++){const Te=j[Yt],Xe=Te.object,Ge=Te.geometry,se=Te.material,Gt=Te.group;if(se.side===ra&&Xe.layers.test(rt.layers)){const an=se.side;se.side=Wn,se.needsUpdate=!0,mi(Xe,st,rt,Ge,se,Gt),se.side=an,se.needsUpdate=!0,te=!0}}te===!0&&(O.updateMultisampleRenderTarget(St),O.updateRenderTargetMipmap(St))}D.setRenderTarget(Pt),D.setClearColor(ut,mt),Kt!==void 0&&(rt.viewport=Kt),D.toneMapping=zt}function Za(C,j,st){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,St=C.length;Y<St;Y++){const Ut=C[Y],Pt=Ut.object,zt=Ut.geometry,Kt=rt===null?Ut.material:rt,te=Ut.group;Pt.layers.test(st.layers)&&mi(Pt,j,st,zt,Kt,te)}}function mi(C,j,st,rt,Y,St){C.onBeforeRender(D,j,st,rt,Y,St),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(D,j,st,rt,C,St),Y.transparent===!0&&Y.side===ra&&Y.forceSinglePass===!1?(Y.side=Wn,Y.needsUpdate=!0,D.renderBufferDirect(st,j,rt,Y,C,St),Y.side=Wa,Y.needsUpdate=!0,D.renderBufferDirect(st,j,rt,Y,C,St),Y.side=ra):D.renderBufferDirect(st,j,rt,Y,C,St),C.onAfterRender(D,j,st,rt,Y,St)}function Ke(C,j,st){j.isScene!==!0&&(j=Ne);const rt=Wt.get(C),Y=v.state.lights,St=v.state.shadowsArray,Ut=Y.state.version,Pt=kt.getParameters(C,Y.state,St,j,st),zt=kt.getProgramCacheKey(Pt);let Kt=rt.programs;rt.environment=C.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(C.isMeshStandardMaterial?it:A).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Kt===void 0&&(C.addEventListener("dispose",$t),Kt=new Map,rt.programs=Kt);let te=Kt.get(zt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return zi(C,Pt),te}else Pt.uniforms=kt.getUniforms(C),C.onBeforeCompile(Pt,D),te=kt.acquireProgram(Pt,zt),Kt.set(zt,te),rt.uniforms=Pt.uniforms;const Yt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=At.uniform),zi(C,Pt),rt.needsLights=lu(C),rt.lightsStateVersion=Ut,rt.needsLights&&(Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMap.value=Y.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotShadowMap.value=Y.state.spotShadowMap,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMap.value=Y.state.pointShadowMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function xn(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Kc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function zi(C,j){const st=Wt.get(C);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function Wr(C,j,st,rt,Y){j.isScene!==!0&&(j=Ne),O.resetTextureUnits();const St=j.fog,Ut=rt.isMeshStandardMaterial?j.environment:null,Pt=H===null?D.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Br,zt=(rt.isMeshStandardMaterial?it:A).get(rt.envMap||Ut),Kt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,te=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Yt=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,Te=!!st.morphAttributes.color;let Xe=ka;rt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const Ge=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,se=Ge!==void 0?Ge.length:0,Gt=Wt.get(rt),an=v.state.lights;if(ct===!0&&(Mt===!0||C!==R)){const fn=C===R&&rt.id===w;At.setState(rt,C,fn)}let be=!1;rt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==an.state.version||Gt.outputColorSpace!==Pt||Y.isBatchedMesh&&Gt.batching===!1||!Y.isBatchedMesh&&Gt.batching===!0||Y.isBatchedMesh&&Gt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Gt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Gt.instancing===!1||!Y.isInstancedMesh&&Gt.instancing===!0||Y.isSkinnedMesh&&Gt.skinning===!1||!Y.isSkinnedMesh&&Gt.skinning===!0||Y.isInstancedMesh&&Gt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Gt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Gt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Gt.instancingMorph===!1&&Y.morphTexture!==null||Gt.envMap!==zt||rt.fog===!0&&Gt.fog!==St||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==At.numPlanes||Gt.numIntersection!==At.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==te||Gt.morphTargets!==Yt||Gt.morphNormals!==ye||Gt.morphColors!==Te||Gt.toneMapping!==Xe||Gt.morphTargetsCount!==se)&&(be=!0):(be=!0,Gt.__version=rt.version);let Nn=Gt.currentProgram;be===!0&&(Nn=Ke(rt,j,Y));let Pi=!1,mn=!1,Qa=!1;const he=Nn.getUniforms(),wn=Gt.uniforms;if(qt.useProgram(Nn.program)&&(Pi=!0,mn=!0,Qa=!0),rt.id!==w&&(w=rt.id,mn=!0),Pi||R!==C){qt.buffers.depth.getReversed()?(Et.copy(C.projectionMatrix),cM(Et),uM(Et),he.setValue(V,"projectionMatrix",Et)):he.setValue(V,"projectionMatrix",C.projectionMatrix),he.setValue(V,"viewMatrix",C.matrixWorldInverse);const tn=he.map.cameraPosition;tn!==void 0&&tn.setValue(V,Ht.setFromMatrixPosition(C.matrixWorld)),_e.logarithmicDepthBuffer&&he.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&he.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,mn=!0,Qa=!0)}if(Y.isSkinnedMesh){he.setOptional(V,Y,"bindMatrix"),he.setOptional(V,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),he.setValue(V,"boneTexture",fn.boneTexture,O))}Y.isBatchedMesh&&(he.setOptional(V,Y,"batchingTexture"),he.setValue(V,"batchingTexture",Y._matricesTexture,O),he.setOptional(V,Y,"batchingIdTexture"),he.setValue(V,"batchingIdTexture",Y._indirectTexture,O),he.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&he.setValue(V,"batchingColorTexture",Y._colorsTexture,O));const On=st.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Xt.update(Y,st,Nn),(mn||Gt.receiveShadow!==Y.receiveShadow)&&(Gt.receiveShadow=Y.receiveShadow,he.setValue(V,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(wn.envMap.value=zt,wn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(wn.envMapIntensity.value=j.environmentIntensity),mn&&(he.setValue(V,"toneMappingExposure",D.toneMappingExposure),Gt.needsLights&&ou(wn,Qa),St&&rt.fog===!0&&wt.refreshFogUniforms(wn,St),wt.refreshMaterialUniforms(wn,rt,Q,J,v.state.transmissionRenderTarget[C.id]),Kc.upload(V,xn(Gt),wn,O)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Kc.upload(V,xn(Gt),wn,O),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&he.setValue(V,"center",Y.center),he.setValue(V,"modelViewMatrix",Y.modelViewMatrix),he.setValue(V,"normalMatrix",Y.normalMatrix),he.setValue(V,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const fn=rt.uniformsGroups;for(let tn=0,ws=fn.length;tn<ws;tn++){const Ai=fn[tn];q.update(Ai,Nn),q.bind(Ai,Nn)}}return Nn}function ou(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function lu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,j,st){Wt.get(C.texture).__webglTexture=j,Wt.get(C.depthTexture).__webglTexture=st;const rt=Wt.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const st=Wt.get(C);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,st=0){H=C,B=j,z=st;let rt=!0,Y=null,St=!1,Ut=!1;if(C){const zt=Wt.get(C);if(zt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(V.FRAMEBUFFER,null),rt=!1;else if(zt.__webglFramebuffer===void 0)O.setupRenderTarget(C);else if(zt.__hasExternalTextures)O.rebindTextures(C,Wt.get(C.texture).__webglTexture,Wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(zt.__boundDepthTexture!==Yt){if(Yt!==null&&Wt.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const te=Wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[j])?Y=te[j][st]:Y=te[j],St=!0):C.samples>0&&O.useMultisampledRTT(C)===!1?Y=Wt.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[st]:Y=te,F.copy(C.viewport),et.copy(C.scissor),at=C.scissorTest}else F.copy(L).multiplyScalar(Q).floor(),et.copy(K).multiplyScalar(Q).floor(),at=ht;if(qt.bindFramebuffer(V.FRAMEBUFFER,Y)&&rt&&qt.drawBuffers(C,Y),qt.viewport(F),qt.scissor(et),qt.setScissorTest(at),St){const zt=Wt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,st)}else if(Ut){const zt=Wt.get(C.texture),Kt=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.__webglTexture,st||0,Kt)}w=-1},this.readRenderTargetPixels=function(C,j,st,rt,Y,St,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt){qt.bindFramebuffer(V.FRAMEBUFFER,Pt);try{const zt=C.texture,Kt=zt.format,te=zt.type;if(!_e.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-rt&&st>=0&&st<=C.height-Y&&V.readPixels(j,st,rt,Y,ae.convert(Kt),ae.convert(te),St)}finally{const zt=H!==null?Wt.get(H).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,j,st,rt,Y,St,Ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt){const zt=C.texture,Kt=zt.format,te=zt.type;if(!_e.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-rt&&st>=0&&st<=C.height-Y){qt.bindFramebuffer(V.FRAMEBUFFER,Pt);const Yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Yt),V.bufferData(V.PIXEL_PACK_BUFFER,St.byteLength,V.STREAM_READ),V.readPixels(j,st,rt,Y,ae.convert(Kt),ae.convert(te),0);const ye=H!==null?Wt.get(H).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,ye);const Te=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await lM(V,Te,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,St),V.deleteBuffer(Yt),V.deleteSync(Te),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,st=0){C.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const rt=Math.pow(2,-st),Y=Math.floor(C.image.width*rt),St=Math.floor(C.image.height*rt),Ut=j!==null?j.x:0,Pt=j!==null?j.y:0;O.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Ut,Pt,Y,St),qt.unbindTexture()};const $o=V.createFramebuffer(),Ka=V.createFramebuffer();this.copyTextureToTexture=function(C,j,st=null,rt=null,Y=0,St=null){C.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,C=arguments[1],j=arguments[2],St=arguments[3]||0,st=null),St===null&&(Y!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=Y,Y=0):St=0);let Ut,Pt,zt,Kt,te,Yt,ye,Te,Xe;const Ge=C.isCompressedTexture?C.mipmaps[St]:C.image;if(st!==null)Ut=st.max.x-st.min.x,Pt=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,Kt=st.min.x,te=st.min.y,Yt=st.isBox3?st.min.z:0;else{const On=Math.pow(2,-Y);Ut=Math.floor(Ge.width*On),Pt=Math.floor(Ge.height*On),C.isDataArrayTexture?zt=Ge.depth:C.isData3DTexture?zt=Math.floor(Ge.depth*On):zt=1,Kt=0,te=0,Yt=0}rt!==null?(ye=rt.x,Te=rt.y,Xe=rt.z):(ye=0,Te=0,Xe=0);const se=ae.convert(j.format),Gt=ae.convert(j.type);let an;j.isData3DTexture?(O.setTexture3D(j,0),an=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),an=V.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),an=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const be=V.getParameter(V.UNPACK_ROW_LENGTH),Nn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Pi=V.getParameter(V.UNPACK_SKIP_PIXELS),mn=V.getParameter(V.UNPACK_SKIP_ROWS),Qa=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ge.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ge.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Yt);const he=C.isDataArrayTexture||C.isData3DTexture,wn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const On=Wt.get(C),fn=Wt.get(j),tn=Wt.get(On.__renderTarget),ws=Wt.get(fn.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,tn.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let Ai=0;Ai<zt;Ai++)he&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(C).__webglTexture,Y,Yt+Ai),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(j).__webglTexture,St,Xe+Ai)),V.blitFramebuffer(Kt,te,Ut,Pt,ye,Te,Ut,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Wt.has(C)){const On=Wt.get(C),fn=Wt.get(j);qt.bindFramebuffer(V.READ_FRAMEBUFFER,$o),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ka);for(let tn=0;tn<zt;tn++)he?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,Y,Yt+tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,Y),wn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,fn.__webglTexture,St,Xe+tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fn.__webglTexture,St),Y!==0?V.blitFramebuffer(Kt,te,Ut,Pt,ye,Te,Ut,Pt,V.COLOR_BUFFER_BIT,V.NEAREST):wn?V.copyTexSubImage3D(an,St,ye,Te,Xe+tn,Kt,te,Ut,Pt):V.copyTexSubImage2D(an,St,ye,Te,Kt,te,Ut,Pt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else wn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(an,St,ye,Te,Xe,Ut,Pt,zt,se,Gt,Ge.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(an,St,ye,Te,Xe,Ut,Pt,zt,se,Ge.data):V.texSubImage3D(an,St,ye,Te,Xe,Ut,Pt,zt,se,Gt,Ge):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,St,ye,Te,Ut,Pt,se,Gt,Ge.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,St,ye,Te,Ge.width,Ge.height,se,Ge.data):V.texSubImage2D(V.TEXTURE_2D,St,ye,Te,Ut,Pt,se,Gt,Ge);V.pixelStorei(V.UNPACK_ROW_LENGTH,be),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Pi),V.pixelStorei(V.UNPACK_SKIP_ROWS,mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qa),St===0&&j.generateMipmaps&&V.generateMipmap(an),qt.unbindTexture()},this.copyTextureToTexture3D=function(C,j,st=null,rt=null,Y=0){return C.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,rt=arguments[1]||null,C=arguments[2],j=arguments[3],Y=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,st,rt,Y)},this.initRenderTarget=function(C){Wt.get(C).__webglFramebuffer===void 0&&O.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){B=0,z=0,H=null,qt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}class Jo{constructor(t=0,i="Network Error"){this.status=t,this.text=i}}const zA=()=>{if(!(typeof localStorage>"u"))return{get:o=>Promise.resolve(localStorage.getItem(o)),set:(o,t)=>Promise.resolve(localStorage.setItem(o,t)),remove:o=>Promise.resolve(localStorage.removeItem(o))}},An={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:zA()},fp=o=>o?typeof o=="string"?{publicKey:o}:o.toString()==="[object Object]"?o:{}:{},PA=(o,t="https://api.emailjs.com")=>{if(!o)return;const i=fp(o);An.publicKey=i.publicKey,An.blockHeadless=i.blockHeadless,An.storageProvider=i.storageProvider,An.blockList=i.blockList,An.limitRate=i.limitRate,An.origin=i.origin||t},jv=async(o,t,i={})=>{const s=await fetch(An.origin+o,{method:"POST",headers:i,body:t}),l=await s.text(),c=new Jo(s.status,l);if(s.ok)return c;throw c},Yv=(o,t,i)=>{if(!o||typeof o!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},BA=o=>{if(o&&o.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Zv=o=>o.webdriver||!o.languages||o.languages.length===0,Kv=()=>new Jo(451,"Unavailable For Headless Browser"),IA=(o,t)=>{if(!Array.isArray(o))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},FA=o=>{var t;return!((t=o.list)!=null&&t.length)||!o.watchVariable},HA=(o,t)=>o instanceof FormData?o.get(t):o[t],Qv=(o,t)=>{if(FA(o))return!1;IA(o.list,o.watchVariable);const i=HA(t,o.watchVariable);return typeof i!="string"?!1:o.list.includes(i)},Jv=()=>new Jo(403,"Forbidden"),GA=(o,t)=>{if(typeof o!="number"||o<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},VA=async(o,t,i)=>{const s=Number(await i.get(o)||0);return t-Date.now()+s},$v=async(o,t,i)=>{if(!t.throttle||!i)return!1;GA(t.throttle,t.id);const s=t.id||o;return await VA(s,t.throttle,i)>0?!0:(await i.set(s,Date.now().toString()),!1)},ty=()=>new Jo(429,"Too Many Requests"),kA=async(o,t,i,s)=>{const l=fp(s),c=l.publicKey||An.publicKey,h=l.blockHeadless||An.blockHeadless,d=l.storageProvider||An.storageProvider,m={...An.blockList,...l.blockList},p={...An.limitRate,...l.limitRate};return h&&Zv(navigator)?Promise.reject(Kv()):(Yv(c,o,t),BA(i),i&&Qv(m,i)?Promise.reject(Jv()):await $v(location.pathname,p,d)?Promise.reject(ty()):jv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:o,template_id:t,template_params:i}),{"Content-type":"application/json"}))},XA=o=>{if(!o||o.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},WA=o=>typeof o=="string"?document.querySelector(o):o,qA=async(o,t,i,s)=>{const l=fp(s),c=l.publicKey||An.publicKey,h=l.blockHeadless||An.blockHeadless,d=An.storageProvider||l.storageProvider,m={...An.blockList,...l.blockList},p={...An.limitRate,...l.limitRate};if(h&&Zv(navigator))return Promise.reject(Kv());const g=WA(i);Yv(c,o,t),XA(g);const _=new FormData(g);return Qv(m,_)?Promise.reject(Jv()):await $v(location.pathname,p,d)?Promise.reject(ty()):(_.append("lib_version","4.4.1"),_.append("service_id",o),_.append("template_id",t),_.append("user_id",c),jv("/api/v1.0/email/send-form",_))},id={init:PA,send:kA,sendForm:qA,EmailJSResponseStatus:Jo},cv="service_q9r9259",uv="template_7mtemk4",jA="kZS3jYfnudOKH8as5",fv="subashrishid@gmail.com",Zd=[{name:"Web Apps",detail:"React interfaces, dashboards, portals",color:"#61dafb"},{name:"Django",detail:"Python systems, admin workflows, RBAC",color:"#6ee7b7"},{name:"DevOps",detail:"Docker, Nginx, SSL, deploy pipelines",color:"#facc15"},{name:"Security",detail:"JWT, encryption, hardening, validation",color:"#f472b6"},{name:"E-Commerce",detail:"Catalogs, carts, payments, admin tools",color:"#a78bfa"},{name:"APIs",detail:"REST contracts, integrations, webhooks",color:"#93c5fd"},{name:"Cloud",detail:"AWS-ready systems and production handoff",color:"#86efac"}],YA=[{title:"Enterprise Platform",type:"Compliance, renewal and workflow automation",value:"Automates reminders, secure records, team workflows and production deployment.",stack:["React","Node.js","PostgreSQL","Docker","Nginx","JWT","AES-256"]},{title:"Enterprise IT Ticket Tool",type:"Helpdesk and ticket management system",value:"Organizes IT support, role access, file handling, SMTP alerts and audit-friendly workflows.",stack:["Django","Python","SQLite","Bootstrap","Waitress","WhiteNoise"]}],ey=["Discover","Design","Build","Secure","Deploy"],ZA=["React","Node.js","Express","PostgreSQL","Django","Python","Docker","Nginx","AWS","JWT","REST APIs","Security"];function ad(o,t){const i=document.createElement("canvas"),s=i.getContext("2d"),l=2;i.width=320*l,i.height=88*l,s.scale(l,l),s.font="700 20px Space Grotesk, Inter, sans-serif";const c=Math.min(286,s.measureText(o).width+48),h=(320-c)/2;s.fillStyle="rgba(8, 10, 20, 0.72)",s.strokeStyle="rgba(255, 255, 255, 0.14)",s.lineWidth=1,s.beginPath(),s.roundRect(h,20,c,42,16),s.fill(),s.stroke(),s.shadowColor=t,s.shadowBlur=12,s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(o,160,41);const d=new HM(i),m=new zM(new Bv({map:d,transparent:!0,depthWrite:!1}));return m.scale.set(1.9,.52,1),m}function KA(o,t=.18){return new Ur({color:o,transparent:!0,opacity:t,depthWrite:!1})}function QA(){const o=oa.useRef(null),t=oa.useRef(null);return oa.useEffect(()=>{const i=o.current,s=t.current;if(!i)return;const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=window.matchMedia("(max-width: 760px)").matches||navigator.hardwareConcurrency<=4;let d;try{d=new OA({antialias:!h,alpha:!0,powerPreference:h?"low-power":"high-performance"})}catch{s==null||s.classList.add("visible");return}d.setPixelRatio(Math.min(window.devicePixelRatio||1,h?1.25:1.8)),d.setClearColor(0,0),i.appendChild(d.domElement);const m=new NM,p=new ei(43,1,.1,100);p.position.set(0,.25,8.2);const g=new ZM(12573951,.76),_=new P0(8141549,4.2,24),x=new P0(440020,3.8,22);_.position.set(-4,5,5),x.position.set(4,-2,4),m.add(g,_,x);const S=new Mi;m.add(S);const E=new Mi,b=new bn(new iu(1.05,4),new Ic({color:1120300,metalness:.76,roughness:.2,emissive:2232410,emissiveIntensity:.36})),M=new bn(new iu(1.1,2),new Ur({color:6809849,wireframe:!0,transparent:!0,opacity:.28}));E.add(b,M),S.add(E);const v=[1.7,2.35,3.05].map((pt,L)=>{const K=new bn(new cp(pt,.01,12,190),new Ur({color:L===1?440020:8141549,transparent:!0,opacity:.35}));return K.rotation.set(Math.PI/2+L*.28,L*.34,L*.1),S.add(K),K}),N=Zd.map((pt,L)=>{const K=new ge(pt.color),ht=new Mi,W=new bn(new qo(.14,28,28),new Ic({color:K,emissive:K,emissiveIntensity:.58,roughness:.32,metalness:.36})),ct=new bn(new qo(.32,28,28),KA(K,.13)),Mt=ad(pt.name,pt.color);return Mt.position.y=.48,ht.add(W,ct,Mt),ht.userData={angle:L/Zd.length*Math.PI*2,radius:2.65+L%2*.36,baseY:(L%3-1)*.36},S.add(ht),ht}),U=new Mi,D=[];ey.forEach((pt,L)=>{const K=new ge(["#67e8f9","#a78bfa","#6ee7b7","#f472b6","#facc15"][L]),ht=new Mi,W=new bn(new Hr(.92,.5,.92),new Ic({color:1054759,metalness:.52,roughness:.24,emissive:K,emissiveIntensity:.1})),ct=new IM(new kM(W.geometry),new Zc({color:K,transparent:!0,opacity:.75})),Mt=ad(pt,`#${K.getHexString()}`);Mt.position.y=.64;const Et=-2.35+L*1.18,Ot=L%2?.48:-.38;ht.position.set(Et,Ot,Math.sin(L)*.46),ht.userData.baseY=Ot,ht.userData.phase=L*.72,ht.add(W,ct,Mt),U.add(ht),D.push(ht.position.clone())});const G=new VM(D);U.add(new qd(new vn().setFromPoints(G.getPoints(90)),new Zc({color:6809849,transparent:!0,opacity:.4})));const B=Array.from({length:h?5:9},(pt,L)=>{const K=new bn(new qo(.055,16,16),new Ur({color:L%2?8141549:440020}));return K.userData.offset=L/(h?5:9),U.add(K),K});U.visible=!1,S.add(U);const z=new Mi;["Client","API","Data","Secure","Cloud"].forEach((pt,L)=>{const K=["#93c5fd","#a78bfa","#67e8f9","#facc15","#86efac"][L],ht=new Mi,W=new bn(new op(.36,.36,.22,6),new Ic({color:1120295,emissive:new ge(K),emissiveIntensity:.16,metalness:.58,roughness:.28})),ct=ad(pt,K);if(ct.position.y=.58,ht.add(W,ct),ht.position.set(-2.25+L*1.12,Math.sin(L*1.3)*.32,0),z.add(ht),L>0){const Mt=[new X(-2.25+(L-1)*1.12,Math.sin((L-1)*1.3)*.32,0),ht.position.clone()];z.add(new qd(new vn().setFromPoints(Mt),new Zc({color:16777215,transparent:!0,opacity:.22})))}}),z.visible=!1,S.add(z);const w=h?100:240,R=new vn,F=new Float32Array(w*3);for(let pt=0;pt<w;pt+=1)F[pt*3]=(Math.random()-.5)*10,F[pt*3+1]=(Math.random()-.5)*7,F[pt*3+2]=(Math.random()-.5)*6;R.setAttribute("position",new di(F,3));const et=new FM(R,new Fv({color:9163775,size:.024,transparent:!0,opacity:.52}));m.add(et);const at={hero:{camera:[0,.15,8.1],root:[-.18,.48,0],scale:1,mode:"core"},about:{camera:[-.65,.25,7.5],root:[-.06,.96,0],scale:.95,mode:"core"},services:{camera:[.25,.2,6.7],root:[-.18,1.55,0],scale:1.1,mode:"core"},projects:{camera:[-.3,.25,6.4],root:[-.38,2.15,0],scale:.98,mode:"pipeline"},process:{camera:[.15,.28,6.2],root:[-.28,2.78,0],scale:1.08,mode:"pipeline"},architecture:{camera:[0,.18,6.7],root:[-.12,3.15,0],scale:1.12,mode:"architecture"},contact:{camera:[0,.12,8.6],root:[-.08,4.05,0],scale:.84,mode:"core"}};let ut=at.hero;const mt=()=>{const pt=["hero","about","services","projects","process","architecture","contact"];let L="hero",K=-1/0;pt.forEach(W=>{const ct=document.getElementById(W);if(!ct)return;const Mt=ct.getBoundingClientRect(),Ot=-Math.abs(Mt.top+Mt.height*.45-window.innerHeight*.5);Ot>K&&(K=Ot,L=W)}),ut=at[L];const ht=ut.mode;U.visible=ht==="pipeline",z.visible=ht==="architecture",E.visible=ht!=="pipeline"&&ht!=="architecture",v.forEach(W=>{W.visible=ht==="core"}),N.forEach(W=>{W.visible=ht==="core"})},P=()=>{const pt=window.innerWidth,L=window.innerHeight;d.setSize(pt,L,!1),p.aspect=pt/L,p.updateProjectionMatrix(),mt()},J=new QM;let Q=0;const Tt=()=>{const pt=J.getElapsedTime();p.position.lerp(new X(...ut.camera),l?1:.055),S.rotation.x+=(ut.root[0]-S.rotation.x)*.055,S.rotation.y+=(ut.root[1]-S.rotation.y)*.055,S.rotation.z+=(ut.root[2]-S.rotation.z)*.055,S.scale.lerp(new X(ut.scale,ut.scale,ut.scale),.05),l||(E.rotation.y=pt*.34,E.rotation.x=Math.sin(pt*.35)*.08,v.forEach((L,K)=>{L.rotation.z=pt*(.11+K*.03),L.rotation.y+=.0015+K*5e-4}),N.forEach((L,K)=>{const ht=L.userData.angle+pt*(.22+K*.012);L.position.set(Math.cos(ht)*L.userData.radius,L.userData.baseY+Math.sin(pt*1.1+K)*.16,Math.sin(ht)*L.userData.radius*.58)}),U.children.forEach(L=>{L.userData.baseY!==void 0&&(L.position.y=L.userData.baseY+Math.sin(pt*1.7+L.userData.phase)*.06)}),B.forEach(L=>L.position.copy(G.getPoint((pt*.16+L.userData.offset)%1))),z.rotation.y=Math.sin(pt*.35)*.18,et.rotation.y=pt*.025),p.lookAt(0,0,0),d.render(m,p),Q=requestAnimationFrame(Tt)};return window.addEventListener("resize",P,{passive:!0}),window.addEventListener("scroll",mt,{passive:!0}),P(),Tt(),()=>{cancelAnimationFrame(Q),window.removeEventListener("resize",P),window.removeEventListener("scroll",mt),d.dispose(),i.removeChild(d.domElement)}},[]),ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{className:"webgl-layer",ref:o,"aria-hidden":"true"}),ot.jsx("div",{className:"webgl-fallback",ref:t,children:"Webovex platform core: secure full-stack systems from interface to cloud."})]})}function JA(){const[o,t]=oa.useState(!1),i=[["#hero","Home"],["#about","About"],["#projects","Projects"],["#skills","Skills"],["#services","Services"],["#contact","Contact"]];return ot.jsxs(ot.Fragment,{children:[ot.jsxs("nav",{className:"nav",children:[ot.jsxs("a",{className:"brand",href:"#hero",onClick:()=>t(!1),children:[ot.jsx("span",{className:"brand-mark",children:"W"}),ot.jsx("span",{children:"Webovex"})]}),ot.jsx("div",{className:"nav-links",children:i.map(([s,l])=>ot.jsx("a",{href:s,children:l},s))}),ot.jsx("a",{className:"nav-cta",href:"#contact",children:"Start a Project"}),ot.jsxs("button",{className:"menu-btn",type:"button","aria-label":"Toggle menu","aria-expanded":o,onClick:()=>t(s=>!s),children:[ot.jsx("span",{}),ot.jsx("span",{}),ot.jsx("span",{})]})]}),ot.jsxs("div",{className:`mobile-menu ${o?"open":""}`,children:[i.map(([s,l])=>ot.jsx("a",{href:s,onClick:()=>t(!1),children:l},s)),ot.jsx("a",{href:"#contact",onClick:()=>t(!1),children:"Start a Project"})]})]})}function $A(){return ot.jsxs("section",{id:"hero",className:"hero panel",children:[ot.jsxs("div",{className:"hero-copy",children:[ot.jsx("span",{className:"eyebrow",children:"Full-stack development studio in Chennai"}),ot.jsx("h1",{children:"Webovex builds secure full-stack platforms for growing businesses"}),ot.jsx("p",{className:"lead",children:"From polished React frontends to Django and PERN backends, payments, dashboards, deployment, and security architecture. One studio to design, build, ship, and support your system."}),ot.jsx("p",{className:"brand-proof",children:"Webovex.com is the official website of Webovex, a full-stack development studio in Chennai building modern web apps, Django systems, e-commerce platforms, and secure enterprise software."}),ot.jsxs("div",{className:"hero-actions",children:[ot.jsx("a",{className:"button primary",href:"#contact",children:"Start a Project"}),ot.jsx("a",{className:"button secondary",href:"#services",children:"View Systems"})]}),ot.jsxs("div",{className:"trust-grid","aria-label":"Trust metrics",children:[ot.jsx(Vc,{value:"5+",label:"Core stacks"}),ot.jsx(Vc,{value:"35+",label:"Production tools"}),ot.jsx(Vc,{value:"2",label:"Enterprise systems"}),ot.jsx(Vc,{value:"24h",label:"Reply window"})]})]}),ot.jsxs("div",{className:"scene-caption",children:[ot.jsx("span",{children:"Scroll journey"}),ot.jsx("strong",{children:"Webovex platform core"})]})]})}function Vc({value:o,label:t}){return ot.jsxs("div",{className:"metric",children:[ot.jsx("strong",{children:o}),ot.jsx("span",{children:t})]})}function tR(){return ot.jsxs("section",{id:"about",className:"panel split-panel",children:[ot.jsxs("div",{children:[ot.jsx("span",{className:"eyebrow",children:"About Webovex"}),ot.jsx("h2",{children:"Built for clients who need real software, not just a screen."})]}),ot.jsxs("div",{className:"glass-copy",children:[ot.jsx("p",{children:"I'm Subash N, a full-stack developer and system architect from Chennai. Webovex focuses on secure web apps, Django systems, e-commerce platforms, IT workflow tools, and production deployment paths that make sense for growing businesses."}),ot.jsxs("div",{className:"proof-list",children:[ot.jsx("span",{children:"System design before code"}),ot.jsx("span",{children:"Security-first backend logic"}),ot.jsx("span",{children:"Cloud-ready deployment handoff"})]})]})]})}function eR(){return ot.jsxs("section",{id:"services",className:"panel",children:[ot.jsxs("div",{className:"section-head",children:[ot.jsx("span",{className:"eyebrow",children:"Services"}),ot.jsx("h2",{children:"Client outcomes Webovex can build."}),ot.jsx("p",{children:"Each service connects to the same platform core: interface, API, data, security, deployment, and support."})]}),ot.jsx("div",{className:"card-grid services-grid",children:Zd.map(o=>ot.jsxs("article",{className:"service-card",style:{"--accent":o.color},children:[ot.jsx("span",{className:"service-line"}),ot.jsx("h3",{children:o.name}),ot.jsx("p",{children:o.detail}),ot.jsx("strong",{children:"Deliverable-ready architecture"})]},o.name))})]})}function nR(){return ot.jsxs("section",{id:"projects",className:"panel",children:[ot.jsxs("div",{className:"section-head",children:[ot.jsx("span",{className:"eyebrow",children:"Featured Work"}),ot.jsx("h2",{children:"Case studies that prove the stack."}),ot.jsx("p",{children:"These are shaped like product systems: business problem, engineering value, and deployment path."})]}),ot.jsx("div",{className:"project-stack",children:YA.map(o=>ot.jsxs("article",{className:"project-card",children:[ot.jsxs("div",{children:[ot.jsx("span",{className:"project-type",children:o.type}),ot.jsx("h3",{children:o.title}),ot.jsx("p",{children:o.value})]}),ot.jsx("div",{className:"stack-row",children:o.stack.map(t=>ot.jsx("span",{children:t},t))})]},o.title))})]})}function iR(){return ot.jsxs("section",{id:"process",className:"panel",children:[ot.jsxs("div",{className:"section-head",children:[ot.jsx("span",{className:"eyebrow",children:"Process"}),ot.jsx("h2",{children:"A polished build pipeline from idea to launch."}),ot.jsx("p",{children:"Discovery first, architecture second, then development, hardening, deployment, and post-launch support."})]}),ot.jsx("div",{className:"pipeline-list",children:ey.map((o,t)=>ot.jsxs("article",{className:"pipeline-card",children:[ot.jsx("span",{children:String(t+1).padStart(2,"0")}),ot.jsx("h3",{children:o}),ot.jsx("p",{children:["Clarify the goal, user flow, scope, and release path.","Plan architecture, database models, APIs, and security boundaries.","Build frontend, backend, integrations, validation, and workflows.","Harden authentication, data handling, headers, and operational risks.","Package, deploy, verify, and hand over a stable production system."][t]})]},o))})]})}function aR(){return ot.jsxs("section",{id:"architecture",className:"panel split-panel",children:[ot.jsxs("div",{children:[ot.jsx("span",{className:"eyebrow",children:"Architecture"}),ot.jsx("h2",{children:"Systems designed for real business workflows."})]}),ot.jsx("div",{className:"architecture-card",children:["Client UI","API Layer","Database","Security","Cloud"].map(o=>ot.jsx("span",{children:o},o))})]})}function sR(){return ot.jsxs("section",{id:"skills",className:"panel compact-panel",children:[ot.jsx("span",{className:"eyebrow",children:"Skills"}),ot.jsx("h2",{children:"Production stack coverage."}),ot.jsx("div",{className:"skills-row",children:ZA.map(o=>ot.jsx("span",{children:o},o))})]})}function rR(){const[o,t]=oa.useState(null),[i,s]=oa.useState({}),[l,c]=oa.useState(!1);oa.useEffect(()=>{id.init(jA)},[]);const h=(m,p=!1)=>{t({message:m,error:p}),window.setTimeout(()=>t(null),5e3)},d=async m=>{m.preventDefault();const p=m.currentTarget,g=new FormData(p),_={},x=String(g.get("name")||"").trim(),S=String(g.get("email")||"").trim(),E=String(g.get("subject")||""),b=String(g.get("message")||"").trim()||"(No message provided)",M=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;if(x.length<2&&(_.name=!0),M.test(S)||(_.email=!0),E||(_.subject=!0),s(_),Object.keys(_).length)return;const v=p.elements.subject,N=v.options[v.selectedIndex].text;c(!0);try{await id.send(cv,uv,{to_name:"Subash",to_email:fv,service:N,message:`From: ${x}
Email: ${S}
Service: ${N}
Message: ${b}`,from_name:"Webovex Contact Form",reply_to:S});try{await id.send(cv,uv,{to_name:x,to_email:S,service:N,message:b,from_name:"Subash N - Webovex",reply_to:fv})}catch(U){console.warn("Confirmation email failed:",U)}p.reset(),h("Successfully submitted.")}catch(U){console.error("Form submission error:",U),h(`Error: ${U.text||"Network error. Please try again or email subashrishid@gmail.com"}`,!0)}finally{c(!1)}};return ot.jsxs("section",{id:"contact",className:"panel contact-panel",children:[ot.jsxs("div",{className:"contact-copy",children:[ot.jsx("span",{className:"eyebrow",children:"Project Inquiry"}),ot.jsx("h2",{children:"Start your build with Webovex."}),ot.jsx("p",{children:"Share the goal, deadline, and must-have features. I will reply with a practical next step, build path, and the right stack for your project."}),ot.jsxs("div",{className:"contact-details",children:[ot.jsx("span",{children:"subashrishid@gmail.com"}),ot.jsx("span",{children:"9952019436"}),ot.jsx("span",{children:"Chennai, Tamil Nadu"})]})]}),ot.jsxs("form",{className:"contact-form",id:"cForm",noValidate:!0,onSubmit:d,children:[ot.jsx("label",{htmlFor:"fName",children:"Name"}),ot.jsx("input",{id:"fName",name:"name",className:i.name?"error":"",placeholder:"Your name"}),ot.jsx("span",{className:i.name?"field-error show":"field-error",children:"Please enter your name."}),ot.jsx("label",{htmlFor:"fEmail",children:"Email"}),ot.jsx("input",{id:"fEmail",name:"email",className:i.email?"error":"",placeholder:"you@company.com"}),ot.jsx("span",{className:i.email?"field-error show":"field-error",children:"Please enter a valid email."}),ot.jsx("label",{htmlFor:"fSubject",children:"Project Type"}),ot.jsxs("select",{id:"fSubject",name:"subject",className:i.subject?"error":"",defaultValue:"",children:[ot.jsx("option",{value:"",children:"Select a project type"}),ot.jsx("option",{value:"web-app",children:"Web App Development"}),ot.jsx("option",{value:"ecommerce",children:"E-Commerce Website"}),ot.jsx("option",{value:"django",children:"Django System"}),ot.jsx("option",{value:"devops",children:"DevOps Setup"}),ot.jsx("option",{value:"security",children:"Security Audit"}),ot.jsx("option",{value:"api",children:"API Integration"}),ot.jsx("option",{value:"other",children:"Other"})]}),ot.jsx("span",{className:i.subject?"field-error show":"field-error",children:"Please select a project type."}),ot.jsx("label",{htmlFor:"fMsg",children:"Message"}),ot.jsx("textarea",{id:"fMsg",name:"message",placeholder:"Tell me about your project"}),ot.jsx("button",{className:"button primary submit-btn",type:"submit",disabled:l,children:l?"Sending...":"Send Message"})]}),o&&ot.jsx("div",{className:`toast ${o.error?"error":""}`,children:o.message})]})}function oR(){return ot.jsxs(ot.Fragment,{children:[ot.jsx(QA,{}),ot.jsx(JA,{}),ot.jsxs("main",{children:[ot.jsx($A,{}),ot.jsx(tR,{}),ot.jsx(eR,{}),ot.jsx(nR,{}),ot.jsx(iR,{}),ot.jsx(aR,{}),ot.jsx(sR,{}),ot.jsx(rR,{})]}),ot.jsxs("footer",{className:"footer",children:[ot.jsx("strong",{children:"Webovex"}),ot.jsx("span",{children:"Full-Stack Development Studio - Chennai, Tamil Nadu"}),ot.jsx("span",{children:"Copyright 2026 Subash N - Webovex"})]})]})}vS.createRoot(document.getElementById("root")).render(ot.jsx(fS.StrictMode,{children:ot.jsx(oR,{})}));
