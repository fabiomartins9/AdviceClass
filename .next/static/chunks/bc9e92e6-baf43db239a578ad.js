"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{35002:function(e,t,n){n.d(t,{$q:function(){return lq},AK:function(){return l9},Ab:function(){return ut},B$:function(){return ob},Bt:function(){return l7},Cf:function(){return of},EK:function(){return U},ET:function(){return lX},Eo:function(){return oT},F8:function(){return oQ},Fc:function(){return oL},GL:function(){return l1},IO:function(){return lg},IX:function(){return oN},Ix:function(){return oO},JU:function(){return oE},Jj:function(){return oG},K9:function(){return S},Ky:function(){return Q},L$:function(){return oB},Lx:function(){return lC},Lz:function(){return oK},Me:function(){return e2},Mx:function(){return oP},PL:function(){return lQ},PU:function(){return l4},Pb:function(){return oU},QT:function(){return lz},ST:function(){return oM},TF:function(){return oq},TQ:function(){return lx},UQ:function(){return lj},Ub:function(){return v},W:function(){return lU},WA:function(){return D},Wi:function(){return ou},Wu:function(){return lN},Xb:function(){return $},Xk:function(){return l$},Xo:function(){return lI},ar:function(){return ly},at:function(){return oy},b9:function(){return lb},cf:function(){return lZ},e0:function(){return lS},fH:function(){return oV},hJ:function(){return o_},i3:function(){return l6},iE:function(){return oS},kl:function(){return lK},l7:function(){return tn},my:function(){return ov},nP:function(){return un},oe:function(){return lJ},pl:function(){return lY},qK:function(){return lB},qY:function(){return oA},r7:function(){return lH},sc:function(){return l0},u7:function(){return lV},vh:function(){return lE},vr:function(){return ue},xU:function(){return lO},yq:function(){return b},zN:function(){return lW}});var r,i,s,a,o=n(99279),l=n(42680),u=n(19053),c=n(71028),h=n(54565),d=n(20357),f=n(9109).lW;let m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p="10.11.0",y=new u.Yd("@firebase/firestore");function w(){return y.logLevel}function v(e){y.setLogLevel(e)}function I(e,...t){if(y.logLevel<=u.in.DEBUG){let n=t.map(E);y.debug(`Firestore (${p}): ${e}`,...n)}}function _(e,...t){if(y.logLevel<=u.in.ERROR){let n=t.map(E);y.error(`Firestore (${p}): ${e}`,...n)}}function b(e,...t){if(y.logLevel<=u.in.WARN){let n=t.map(E);y.warn(`Firestore (${p}): ${e}`,...n)}}function E(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){let t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw _(t),Error(t)}function S(e,t){e||T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(g.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class R{constructor(e){this.t=e,this.currentUser=g.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new C;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new C,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new C)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||T(),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||T(),new g(e)}}class M{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=g.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new M(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(g.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||T(),this.R=e.token,new F(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function O(e,t){return e<t?-1:e>t?1:0}function q(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new D(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new D(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return U.fromMillis(Date.now())}static fromDate(e){return U.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new U(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new U(0,0))}static max(){return new B(new U(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&T(),void 0===n?n=e.length-t:n>e.length-t&&T(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class G extends z{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new D(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new G(t)}static emptyPath(){return new G([])}}let K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends z{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new D(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new D(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new D(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new D(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(G.fromString(e))}static fromName(e){return new Q(G.fromString(e).popFirst(5))}static empty(){return new Q(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===G.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new G(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function W(e){return e.fields.find(e=>2===e.kind)}function Y(e){return e.fields.filter(e=>2!==e.kind)}j.UNKNOWN_ID=-1;class H{constructor(e,t){this.fieldPath=e,this.kind=t}}class J{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new J(0,ee.min())}}function X(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new ee(B.fromTimestamp(1e9===r?new U(n+1,0):new U(n,r)),Q.empty(),t)}function Z(e){return new ee(e.readTime,e.key,-1)}class ee{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ee(B.min(),Q.empty(),-1)}static max(){return new ee(B.max(),Q.empty(),-1)}}function et(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=Q.comparator(e.documentKey,t.documentKey))?n:O(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==en)throw e;I("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new es((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof es?t:es.resolve(t)}catch(e){return es.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):es.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):es.reject(t)}static resolve(e){return new es((t,n)=>{t(e)})}static reject(e){return new es((t,n)=>{n(e)})}static waitFor(e){return new es((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=es.resolve(!1);for(let n of e)t=t.next(e=>e?es.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new es((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new es((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new C,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new eu(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=em(t.target.error);this.V.reject(new eu(e,n))}}static open(e,t,n,r){try{return new ea(t,e.transaction(r,n))}catch(e){throw new eu(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(I("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new eh(this.transaction.objectStore(e))}}class eo{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===eo.S((0,c.z$)())&&_("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return I("SimpleDb","Removing database:",e),ed(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.hl)())return!1;if(eo.C())return!0;let e=(0,c.z$)(),t=eo.S(e),n=eo.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==d&&"YES"===(null===(e=d.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(I("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new eu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new D(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new D(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new eu(e,r))},r.onupgradeneeded=e=>{I("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next(()=>{I("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=ea.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),es.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(I("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class el{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ed(this.k.delete())}}class eu extends D{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ec(e){return"IndexedDbTransactionError"===e.name}class eh{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(I("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(I("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ed(n)}add(e){return I("SimpleDb","ADD",this.store.name,e,e),ed(this.store.add(e))}get(e){return ed(this.store.get(e)).next(t=>(void 0===t&&(t=null),I("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return I("SimpleDb","DELETE",this.store.name,e),ed(this.store.delete(e))}count(){return I("SimpleDb","COUNT",this.store.name),ed(this.store.count())}W(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new es((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new es((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){I("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let r=this.cursor(n);return this.G(r,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.G(r,t)}Z(e){let t=this.cursor({});return new es((n,r)=>{t.onerror=e=>{r(em(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}G(e,t){let n=[];return new es((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new el(i),a=t(i.primaryKey,i.value,s);if(a instanceof es){let e=a.catch(e=>(s.done(),es.reject(e)));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}}).next(()=>es.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ed(e){return new es((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(em(e.target.error))}})}let ef=!1;function em(e){let t=eo.S((0,c.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ef||(ef=!0,setTimeout(()=>{throw e},0)),e}}return e}class eg{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ee(e){I("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{I("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(e){ec(e)?I("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await ei(e)}await this.ee(6e4)})}}class ep{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){let n=new Set,r=t,i=!0;return es.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return I("IndexBackfiller",`Processing collection: ${t}`),this.re(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}re(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.ie(r,n)).next(n=>(I("IndexBackfiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}ie(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=Z(t);et(r,n)>0&&(n=r)}),new ee(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function ew(e){return null==e}function ev(e){return 0===e&&1/e==-1/0}function eI(e){return"number"==typeof e&&Number.isInteger(e)&&!ev(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"}function eb(e){let t=e.length;if(t>=2||T(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||T(),G.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&T(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\0";break;case"\x11":i+=e.substring(s,t+1);break;default:T()}s=t+2}return new G(r)}ey._e=-1;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eE=["userId","batchId"],eT={},eS=["prefixPath","collectionGroup","readTime","documentId"],ex=["prefixPath","collectionGroup","documentId"],eD=["collectionGroup","readTime","prefixPath","documentId"],eC=["canonicalId","targetId"],eN=["targetId","path"],ek=["path","targetId"],eA=["collectionId","parent"],eR=["indexId","uid"],eM=["uid","sequenceNumber"],eV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eF=["indexId","uid","orderedDocumentKey"],eL=["userId","collectionPath","documentId"],eP=["userId","collectionPath","largestBatchId"],eO=["userId","collectionGroup","largestBatchId"],eq=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eU=[...eq,"documentOverlays"],eB=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ez=[...eB,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG extends er{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function eK(e,t){return eo.M(e.ae,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eQ(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ej(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e,t){this.comparator=e,this.root=t||eH.EMPTY}insert(e,t){return new eW(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eH.BLACK,null,null))}remove(e){return new eW(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eH.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eY(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eY(this.root,e,this.comparator,!1)}getReverseIterator(){return new eY(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eY(this.root,e,this.comparator,!0)}}class eY{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eH{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eH.RED,this.left=null!=r?r:eH.EMPTY,this.right=null!=i?i:eH.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eH(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eH.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eH.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eH.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eH.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();let e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}eH.EMPTY=null,eH.RED=!0,eH.BLACK=!1,eH.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eH(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e){this.comparator=e,this.data=new eW(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eX(this.data.getIterator())}getIteratorFrom(e){return new eX(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eJ)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eJ(this.comparator);return t.data=e,t}}class eX{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eZ(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.fields=e,e.sort($.comparator)}static empty(){return new e0([])}unionWith(e){let t=new eJ($.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new e0(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return q(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.binaryString=e}static fromBase64String(e){return new e5(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new e1("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new e5(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}e5.EMPTY_BYTE_STRING=new e5("");let e4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e8(e){if(e||T(),"string"==typeof e){let t=0,n=e4.exec(e);if(n||T(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:e3(e.seconds),nanos:e3(e.nanos)}}function e3(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function e6(e){return"string"==typeof e?e5.fromBase64String(e):e5.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e9(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function e7(e){let t=e.mapValue.fields.__previous_value__;return e9(t)?e7(t):t}function te(e){let t=e8(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class tn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new tn("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof tn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ti={nullValue:"NULL_VALUE"};function ts(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?e9(e)?4:tw(e)?9007199254740991:10:T()}function ta(e,t){if(e===t)return!0;let n=ts(e);if(n!==ts(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return te(e).isEqual(te(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e8(e.timestampValue),r=e8(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return e6(e.bytesValue).isEqual(e6(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e3(e.geoPointValue.latitude)===e3(t.geoPointValue.latitude)&&e3(e.geoPointValue.longitude)===e3(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e3(e.integerValue)===e3(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e3(e.doubleValue),r=e3(t.doubleValue);return n===r?ev(n)===ev(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return q(e.arrayValue.values||[],t.arrayValue.values||[],ta);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(e$(n)!==e$(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ta(n[e],r[e])))return!1;return!0}(e,t);default:return T()}}function to(e,t){return void 0!==(e.values||[]).find(e=>ta(e,t))}function tl(e,t){if(e===t)return 0;let n=ts(e),r=ts(t);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e3(e.integerValue||e.doubleValue),r=e3(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return tu(e.timestampValue,t.timestampValue);case 4:return tu(te(e),te(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(e,t){let n=e6(e),r=e6(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=O(n[e],r[e]);if(0!==t)return t}return O(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=O(e3(e.latitude),e3(t.latitude));return 0!==n?n:O(e3(e.longitude),e3(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=tl(n[e],r[e]);if(t)return t}return O(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===tr.mapValue&&t===tr.mapValue)return 0;if(e===tr.mapValue)return 1;if(t===tr.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=O(r[e],s[e]);if(0!==t)return t;let a=tl(n[r[e]],i[s[e]]);if(0!==a)return a}return O(r.length,s.length)}(e.mapValue,t.mapValue);default:throw T()}}function tu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return O(e,t);let n=e8(e),r=e8(t),i=O(n.seconds,r.seconds);return 0!==i?i:O(n.nanos,r.nanos)}function tc(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e8(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?e6(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,Q.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=tc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${tc(e.fields[i])}`;return n+"}"}(e.mapValue):T()}function th(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function td(e){return!!e&&"integerValue"in e}function tf(e){return!!e&&"arrayValue"in e}function tm(e){return!!e&&"nullValue"in e}function tg(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tp(e){return!!e&&"mapValue"in e}function ty(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eQ(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ty(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ty(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tw(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tv(e,t){let n=tl(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function tI(e,t){let n=tl(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.value=e}static empty(){return new t_({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!tp(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ty(t)}setAll(e){let t=$.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ty(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());tp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ta(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tp(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eQ(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new t_(ty(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tb(e,0,B.min(),B.min(),B.min(),t_.empty(),0)}static newFoundDocument(e,t,n,r){return new tb(e,1,t,B.min(),n,r,0)}static newNoDocument(e,t){return new tb(e,2,t,B.min(),B.min(),t_.empty(),0)}static newUnknownDocument(e,t){return new tb(e,3,t,B.min(),B.min(),t_.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(B.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=t_.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=t_.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tb(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.position=e,this.inclusive=t}}function tT(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Q.comparator(Q.fromName(a.referenceValue),n.key):tl(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tS(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ta(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{}class tC extends tD{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tF(e,t,n):"array-contains"===t?new tq(e,n):"in"===t?new tU(e,n):"not-in"===t?new tB(e,n):"array-contains-any"===t?new tz(e,n):new tC(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tL(e,n):new tP(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(tl(t,this.value)):null!==t&&ts(this.value)===ts(t)&&this.matchesComparison(tl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tN extends tD{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new tN(e,t)}matches(e){return tk(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function tk(e){return"and"===e.op}function tA(e){return"or"===e.op}function tR(e){return tM(e)&&tk(e)}function tM(e){for(let t of e.filters)if(t instanceof tN)return!1;return!0}function tV(e,t){let n=e.filters.concat(t);return tN.create(n,e.op)}class tF extends tC{constructor(e,t,n){super(e,t,n),this.key=Q.fromName(n.referenceValue)}matches(e){let t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class tL extends tC{constructor(e,t){super(e,"in",t),this.keys=tO("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tP extends tC{constructor(e,t){super(e,"not-in",t),this.keys=tO("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tO(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>Q.fromName(e.referenceValue))}class tq extends tC{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return tf(t)&&to(t.arrayValue,this.value)}}class tU extends tC{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&to(this.value.arrayValue,t)}}class tB extends tC{constructor(e,t){super(e,"not-in",t)}matches(e){if(to(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!to(this.value.arrayValue,t)}}class tz extends tC{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!tf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>to(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function tK(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tG(e,t,n,r,i,s,a)}function t$(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tC)return t.field.canonicalString()+t.op.toString()+tc(t.value);if(tR(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),ew(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>tc(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>tc(e)).join(",")),e.ce=t}return e.ce}function tQ(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tC?n instanceof tC&&t.op===n.op&&t.field.isEqual(n.field)&&ta(t.value,n.value):t instanceof tN?n instanceof tN&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void T()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tS(e.startAt,t.startAt)&&tS(e.endAt,t.endAt)}function tj(e){return Q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tW(e,t){return e.filters.filter(e=>e instanceof tC&&e.field.isEqual(t))}function tY(e,t,n){let r=ti,i=!0;for(let n of tW(e,t)){let e=ti,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?ti:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?th(tn.empty(),Q.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:T();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=ti}0>tv({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>tv({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tH(e,t,n){let r=tr,i=!0;for(let n of tW(e,t)){let e=tr,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?th(tn.empty(),Q.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?tr:T(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=tr}tI({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];tI({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function tX(e){return new tJ(e)}function tZ(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function t0(e){return null!==e.collectionGroup}function t1(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new eJ($.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new tx(t,r))}),n.has($.keyField().canonicalString())||e.le.push(new tx($.keyField(),r))}return e.le}function t2(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return tK(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new tx(e.field,t)});let n=e.endAt?new tE(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tE(e.startAt.position,e.startAt.inclusive):null;return tK(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,t1(e))),e.he}function t5(e,t){let n=e.filters.concat([t]);return new tJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function t4(e,t,n){return new tJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t8(e,t){return tQ(t2(e),t2(t))&&e.limitType===t.limitType}function t3(e){return`${t$(t2(e))}|lt:${e.limitType}`}function t6(e){var t;let n;return`Query(target=${n=(t=t2(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tC?`${t.field.canonicalString()} ${t.op} ${tc(t.value)}`:t instanceof tN?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),ew(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>tc(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>tc(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function t9(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Q.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of t1(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tT(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,t1(e),t))&&(!e.endAt||!!function(e,t,n){let r=tT(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,t1(e),t))}function t7(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ne(e){return(t,n)=>{let r=!1;for(let i of t1(e)){let e=function(e,t,n){let r=e.field.isKeyField()?Q.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?tl(r,i):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return T()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eQ(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return ej(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn=new eW(Q.comparator),nr=new eW(Q.comparator);function ni(...e){let t=nr;for(let n of e)t=t.insert(n.key,n);return t}function ns(e){let t=nr;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function na(){return new nt(e=>e.toString(),(e,t)=>e.isEqual(t))}let no=new eW(Q.comparator),nl=new eJ(Q.comparator);function nu(...e){let t=nl;for(let n of e)t=t.add(n);return t}let nc=new eJ(O);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ev(t)?"-0":t}}function nd(e){return{integerValue:""+e}}function nf(e,t){return eI(t)?nd(t):nh(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this._=void 0}}function ng(e,t){return e instanceof n_?td(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class np extends nm{}class ny extends nm{constructor(e){super(),this.elements=e}}function nw(e,t){let n=nE(t);for(let t of e.elements)n.some(e=>ta(e,t))||n.push(t);return{arrayValue:{values:n}}}class nv extends nm{constructor(e){super(),this.elements=e}}function nI(e,t){let n=nE(t);for(let t of e.elements)n=n.filter(e=>!ta(e,t));return{arrayValue:{values:n}}}class n_ extends nm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function nb(e){return e3(e.integerValue||e.doubleValue)}function nE(e){return tf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t){this.field=e,this.transform=t}}class nS{constructor(e,t){this.version=e,this.transformResults=t}}class nx{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nx}static exists(e){return new nx(void 0,e)}static updateTime(e){return new nx(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nD(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nC{}function nN(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nP(e.key,nx.none()):new nR(e.key,e.data,nx.none());{let n=e.data,r=t_.empty(),i=new eJ($.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nM(e.key,r,new e0(i.toArray()),nx.none())}}function nk(e,t,n,r){return e instanceof nR?function(e,t,n,r){if(!nD(e.precondition,t))return n;let i=e.value.clone(),s=nL(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nM?function(e,t,n,r){if(!nD(e.precondition,t))return n;let i=nL(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nV(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):nD(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nA(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&q(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ny&&r instanceof ny||n instanceof nv&&r instanceof nv?q(n.elements,r.elements,ta):n instanceof n_&&r instanceof n_?ta(n.Ie,r.Ie):n instanceof np&&r instanceof np)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nR extends nC{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nM extends nC{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nV(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nF(e,t,n){var r;let i=new Map;e.length===n.length||T();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof ny?nw(o,l):o instanceof nv?nI(o,l):r))}return i}function nL(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof np?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&e9(t)&&(t=e7(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof ny?nw(e,s):e instanceof nv?nI(e,s):function(e,t){let n=ng(e,t),r=nb(n)+nb(e.Ie);return td(n)&&td(e.Ie)?nd(r):nh(e.serializer,r)}(e,s))}return r}class nP extends nC{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nO extends nC{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nR?function(e,t,n){let r=e.value.clone(),i=nF(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nM?function(e,t,n){if(!nD(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nF(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nV(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=nk(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=nk(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=na();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=nN(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nu())}isEqual(e){return this.batchId===e.batchId&&q(this.mutations,e.mutations,(e,t)=>nA(e,t))&&q(this.baseMutations,e.baseMutations,(e,t)=>nA(e,t))}}class nU{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||T();let r=no,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nU(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e,t){this.count=e,this.unchangedNames=t}}function nG(e){switch(e){default:return T();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function nK(e){if(void 0===e)return _("GRPC error has no .code"),x.UNKNOWN;switch(e){case r.OK:return x.OK;case r.CANCELLED:return x.CANCELLED;case r.UNKNOWN:return x.UNKNOWN;case r.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case r.INTERNAL:return x.INTERNAL;case r.UNAVAILABLE:return x.UNAVAILABLE;case r.UNAUTHENTICATED:return x.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case r.NOT_FOUND:return x.NOT_FOUND;case r.ALREADY_EXISTS:return x.ALREADY_EXISTS;case r.PERMISSION_DENIED:return x.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case r.ABORTED:return x.ABORTED;case r.OUT_OF_RANGE:return x.OUT_OF_RANGE;case r.UNIMPLEMENTED:return x.UNIMPLEMENTED;case r.DATA_LOSS:return x.DATA_LOSS;default:return T()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n$(){return new TextEncoder}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nQ=new h.z8([4294967295,4294967295],0);function nj(e){let t=n$().encode(e),n=new h.V8;return n.update(t),new Uint8Array(n.digest())}function nW(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new h.z8([n,r],0),new h.z8([i,s],0)]}class nY{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nH(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nH(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nH(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=h.z8.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(h.z8.fromNumber(n)));return 1===r.compare(nQ)&&(r=new h.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=nW(nj(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ae(r))return!1}return!0}static create(e,t,n){let r=new nY(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=nW(nj(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Re(r)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nH extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nX.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nJ(B.min(),r,new eW(O),nn,nu())}}class nX{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nX(n,t,nu(),nu(),nu())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class n0{constructor(e,t){this.targetId=e,this.fe=t}}class n1{constructor(e,t,n=e5.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class n2{constructor(){this.ge=0,this.pe=n8(),this.ye=e5.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=nu(),t=nu(),n=nu();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:T()}}),new nX(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=n8()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||T()}Le(){this.Se=!0,this.we=!0}}class n5{constructor(e){this.Be=e,this.ke=new Map,this.qe=nn,this.Qe=n4(),this.Ke=new eW(O)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(tj(i)){if(0===n){let e=new Q(i.path);this.We(t,e,tb.newNoDocument(e,B.min()))}else 1===n||T()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=e6(i).toUint8Array()}catch(e){if(e instanceof e1)return b("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new nY(t,s,a)}catch(e){return b(e instanceof nH?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Be.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&tj(i.target)){let t=new Q(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,tb.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=nu();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new nJ(e,t,this.Ke,this.qe,n);return this.qe=nn,this.Qe=n4(),this.Ke=new eW(O),r}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new n2,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new eJ(O),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||I("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new n2),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function n4(){return new eW(Q.comparator)}function n8(){return new eW(Q.comparator)}let n3={asc:"ASCENDING",desc:"DESCENDING"},n6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n9={and:"AND",or:"OR"};class n7{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function re(e,t){return e.useProto3Json||ew(t)?t:{value:t}}function rt(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rn(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function rr(e){return e||T(),B.fromTimestamp(function(e){let t=e8(e);return new U(t.seconds,t.nanos)}(e))}function ri(e,t){return rs(e,t).canonicalString()}function rs(e,t){let n=new G(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function ra(e){let t=G.fromString(e);return rb(t)||T(),t}function ro(e,t){return ri(e.databaseId,t.path)}function rl(e,t){let n=ra(t);if(n.get(1)!==e.databaseId.projectId)throw new D(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new D(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Q(rd(n))}function ru(e,t){return ri(e.databaseId,t)}function rc(e){let t=ra(e);return 4===t.length?G.emptyPath():rd(t)}function rh(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rd(e){return e.length>4&&"documents"===e.get(4)||T(),e.popFirst(5)}function rf(e,t,n){return{name:ro(e,t),fields:n.value.mapValue.fields}}function rm(e,t,n){let r=rl(e,t.name),i=rr(t.updateTime),s=t.createTime?rr(t.createTime):B.min(),a=new t_({mapValue:{fields:t.fields}}),o=tb.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rg(e,t){var n;let r;if(t instanceof nR)r={update:rf(e,t.key,t.value)};else if(t instanceof nP)r={delete:ro(e,t.key)};else if(t instanceof nM)r={update:rf(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nO))return T();r={verify:ro(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof np)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ny)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof nv)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof n_)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw T()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:rt(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:T()),r}function rp(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nx.updateTime(rr(n.updateTime)):void 0!==n.exists?nx.exists(n.exists):nx.none():nx.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{let n;return n=null,"setToServerValue"in t?("REQUEST_TIME"===t.setToServerValue||T(),n=new np):"appendMissingElements"in t?n=new ny(t.appendMissingElements.values||[]):"removeAllFromArray"in t?n=new nv(t.removeAllFromArray.values||[]):"increment"in t?n=new n_(e,t.increment):T(),new nT($.fromServerFormat(t.fieldPath),n)}):[];if(t.update){t.update.name;let n=rl(e,t.update.name),s=new t_({mapValue:{fields:t.update.fields}});return t.updateMask?new nM(n,s,new e0((t.updateMask.fieldPaths||[]).map(e=>$.fromServerFormat(e))),r,i):new nR(n,s,r,i)}return t.delete?new nP(rl(e,t.delete),r):t.verify?new nO(rl(e,t.verify),r):T()}function ry(e,t){return{documents:[ru(e,t.path)]}}function rw(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=ru(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof tC?function(e){if("=="===e.op){if(tg(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NAN"}};if(tm(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(tg(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NOT_NAN"}};if(tm(e.value))return{unaryFilter:{field:rI(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rI(e.field),op:n6[e.op],value:e.value}}}(t):t instanceof tN?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:n9[t.op],filters:n}}}(t):T()}(tN.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:rI(e.field),direction:n3[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=re(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ut:s,parent:i}}function rv(e){var t;let n,r=rc(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||T();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=r_(e.unaryFilter.field);return tC.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=r_(e.unaryFilter.field);return tC.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=r_(e.unaryFilter.field);return tC.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=r_(e.unaryFilter.field);return tC.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(t):void 0!==t.fieldFilter?tC.create(r_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tN.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op)):T()}(e);return t instanceof tN&&tR(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new tx(r_(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=ew(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new tE(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new tE(e.values||[],t)}(i.endAt)),new tJ(r,a,l,o,u,"F",c,h)}function rI(e){return{fieldPath:e.canonicalString()}}function r_(e){return $.fromServerFormat(e.fieldPath)}function rb(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,n,r,i=B.min(),s=B.min(),a=e5.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rE(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rE(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rE(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rE(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.ct=e}}function rS(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rx(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:ro(i=e.ct,t.key),fields:t.data.value.mapValue.fields,updateTime:rt(i,t.version.toTimestamp()),createTime:rt(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rD(t.version)};else{if(!t.isUnknownDocument())return T();r.unknownDocument={path:n.path.toArray(),version:rD(t.version)}}return r}function rx(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rD(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rC(e){let t=new U(e.seconds,e.nanoseconds);return B.fromTimestamp(t)}function rN(e,t){let n=(t.baseMutations||[]).map(t=>rp(e.ct,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rp(e.ct,t)),i=U.fromMillis(t.localWriteTimeMs);return new nq(t.batchId,i,n,r)}function rk(e){var t;let n=rC(e.readTime),r=void 0!==e.lastLimboFreeSnapshotVersion?rC(e.lastLimboFreeSnapshotVersion):B.min();return new rE(void 0!==e.query.documents?(1===(t=e.query).documents.length||T(),t2(tX(rc(t.documents[0])))):t2(rv(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,n,r,e5.fromBase64String(e.resumeToken))}function rA(e,t){let n;let r=rD(t.snapshotVersion),i=rD(t.lastLimboFreeSnapshotVersion);n=tj(t.target)?ry(e.ct,t.target):rw(e.ct,t.target).ut;let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:t$(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function rR(e){let t=rv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?t4(t,t.limit,"L"):t}function rM(e,t){return new nB(t.largestBatchId,rp(e.ct,t.overlayMutation))}function rV(e,t){let n=t.path.lastSegment();return[e,e_(t.path.popLast()),n]}function rF(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:rD(r.readTime),documentKey:e_(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{getBundleMetadata(e,t){return rP(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rC(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rP(e).put({bundleId:t.id,createTime:rD(rr(t.createTime)),version:t.version})}getNamedQuery(e,t){return rO(e).get(t).next(e=>{if(e)return{name:e.name,query:rR(e.bundledQuery),readTime:rC(e.readTime)}})}saveNamedQuery(e,t){return rO(e).put({name:t.name,readTime:rD(rr(t.readTime)),bundledQuery:t.bundledQuery})}}function rP(e){return eK(e,"bundles")}function rO(e){return eK(e,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){return new rq(e,t.uid||"")}getOverlay(e,t){return rU(e).get(rV(this.userId,t)).next(e=>e?rM(this.serializer,e):null)}getOverlays(e,t){let n=na();return es.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new nB(t,i);r.push(this.ht(e,s))}),es.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(e_(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(rU(e).H("collectionPathOverlayIndex",r))}),es.waitFor(i)}getOverlaysForCollection(e,t,n){let r=na(),i=e_(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rU(e).W("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rM(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=na(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rU(e).Y({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rM(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}ht(e,t){return rU(e).put(function(e,t,n){let[r,i,s]=rV(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:rg(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function rU(e){return eK(e,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(e3(e.integerValue));else if("doubleValue"in e){let n=e3(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),ev(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n&&(n=e8(n)),t.At(`${n.seconds||""}`),t.dt(n.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(e6(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?tw(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):T()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),Q.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}function rz(e){return Math.ceil((64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e))/8)}rB.bt=new rB;class rG{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ct(n.value),n=t.next();this.vt()}Ft(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Mt(n.value),n=t.next();this.xt()}Ot(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Ct(e);else if(e<2048)this.Ct(960|e>>>6),this.Ct(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ct(480|e>>>12),this.Ct(128|63&e>>>6),this.Ct(128|63&e);else{let e=t.codePointAt(0);this.Ct(240|e>>>18),this.Ct(128|63&e>>>12),this.Ct(128|63&e>>>6),this.Ct(128|63&e)}}this.vt()}Nt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Mt(e);else if(e<2048)this.Mt(960|e>>>6),this.Mt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Mt(480|e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e);else{let e=t.codePointAt(0);this.Mt(240|e>>>18),this.Mt(128|63&e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e)}}this.xt()}Lt(e){let t=this.Bt(e),n=rz(t);this.kt(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}qt(e){let t=this.Bt(e),n=rz(t);this.kt(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ct(e){let t=255&e;0===t?(this.Kt(0),this.Kt(255)):255===t?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){let t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rK{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class r${constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class rQ{constructor(){this.Gt=new rG,this.zt=new rK(this.Gt),this.jt=new r$(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return 0===e?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Jt(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rj(this.indexId,this.documentKey,this.arrayValue,n)}}function rW(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rY(e.arrayValue,t.arrayValue))?n:0!==(n=rY(e.directionalValue,t.directionalValue))?n:Q.comparator(e.documentKey,t.documentKey)}function rY(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rH{constructor(e){for(let t of(this.Yt=new eJ((e,t)=>$.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[],e.filters))t.isInequality()?this.Yt=this.Yt.add(t):this.Xt.push(t)}get en(){return this.Yt.size>1}tn(e){if(e.collectionGroup===this.collectionId||T(),this.en)return!1;let t=W(e);if(void 0!==t&&!this.nn(t))return!1;let n=Y(e),r=new Set,i=0,s=0;for(;i<n.length&&this.nn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Yt.size>0){let e=this.Yt.getIterator().getNext();if(!r.has(e.field.canonicalString())){let t=n[i];if(!this.rn(e,t)||!this.sn(this.Zt[s++],t))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Zt.length||!this.sn(this.Zt[s++],e))return!1}return!0}on(){if(this.en)return null;let e=new eJ($.comparator),t=[];for(let n of this.Xt)if(!n.field.isKeyField()){if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new H(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new H(n.field,0))}}for(let n of this.Zt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new H(n.field,"asc"===n.dir?0:1)));return new j(j.UNKNOWN_ID,this.collectionId,t,J.empty())}nn(e){for(let t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rJ(e){return e instanceof tC}function rX(e){return e instanceof tN&&tR(e)}function rZ(e){return rJ(e)||rX(e)||function(e){if(e instanceof tN&&tA(e)){for(let t of e.getFilters())if(!rJ(t)&&!rX(t))return!1;return!0}return!1}(e)}function r0(e,t){return e instanceof tC||e instanceof tN||T(),t instanceof tC||t instanceof tN||T(),r2(e instanceof tC?t instanceof tC?tN.create([e,t],"and"):r1(e,t):t instanceof tC?r1(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||T(),tk(e)&&tk(t))return tV(e,t.getFilters());let n=tA(e)?e:t,r=tA(e)?t:e,i=n.filters.map(e=>r0(e,r));return tN.create(i,"or")}(e,t))}function r1(e,t){if(tk(t))return tV(t,e.getFilters());{let n=t.filters.map(t=>r0(e,t));return tN.create(n,"or")}}function r2(e){if(e instanceof tC||e instanceof tN||T(),e instanceof tC)return e;let t=e.getFilters();if(1===t.length)return r2(t[0]);if(tM(e))return e;let n=t.map(e=>r2(e)),r=[];return n.forEach(t=>{t instanceof tC?r.push(t):t instanceof tN&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:tN.create(r,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(){this._n=new r4}addToCollectionParentIndex(e,t){return this._n.add(t),es.resolve()}getCollectionParents(e,t){return es.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return es.resolve()}deleteFieldIndex(e,t){return es.resolve()}deleteAllFieldIndexes(e){return es.resolve()}createTargetIndexes(e,t){return es.resolve()}getDocumentsMatchingTarget(e,t){return es.resolve(null)}getIndexType(e,t){return es.resolve(0)}getFieldIndexes(e,t){return es.resolve([])}getNextCollectionGroupToUpdate(e){return es.resolve(null)}getMinOffset(e,t){return es.resolve(ee.min())}getMinOffsetFromCollectionGroup(e,t){return es.resolve(ee.min())}updateCollectionGroup(e,t,n){return es.resolve()}updateIndexEntries(e,t){return es.resolve()}}class r4{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eJ(G.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eJ(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r8=new Uint8Array(0);class r3{constructor(e,t){this.databaseId=t,this.an=new r4,this.un=new nt(e=>t$(e),(e,t)=>tQ(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.an.add(t)});let i={collectionId:n,parent:e_(r)};return r6(e).put(i)}return es.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return r6(e).W(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(eb(r.parent))}return n})}addFieldIndex(e,t){let n=r7(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=ie(e);return i.next(e=>{n.put(rF(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=r7(e),r=ie(e),i=r9(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=r7(e),n=r9(e),r=ie(e);return t.H().next(()=>n.H()).next(()=>r.H())}createTargetIndexes(e,t){return es.forEach(this.cn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){let n=new rH(t).on();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){let n=r9(e),r=!0,i=new Map;return es.forEach(this.cn(t),t=>this.ln(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=nu(),r=[];return es.forEach(i,(i,s)=>{I("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${t$(t)}`);let a=function(e,t){let n=W(t);if(void 0===n)return null;for(let t of tW(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of Y(t))for(let t of tW(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of Y(t)){let t=0===i.kind?tY(e,i.fieldPath,e.startAt):tH(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tE(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of Y(t)){let t=0===i.kind?tH(e,i.fieldPath,e.endAt):tY(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tE(n,r)}(s,i),c=this.hn(i,s,l),h=this.hn(i,s,u),d=this.Pn(i,s,o),f=this.In(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return es.forEach(f,i=>n.j(i,t.limit).next(t=>{t.forEach(t=>{let n=Q.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return es.resolve(null)})}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tC||t instanceof tN||T(),t instanceof tC)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=tN.create(n,t.op);return rZ(r=r2(r))?r:(r instanceof tN||T(),tk(r)||T(),r.filters.length>1||T(),r.filters.reduce((e,t)=>r0(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){var n,r;if(t instanceof tC||t instanceof tN||T(),t instanceof tC){if(t instanceof tU){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tC.create(t.field,"==",e)))||[];return tN.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return tN.create(i,t.op)}(e));return rZ(t)||T(),rJ(t)||rX(t)?[t]:t.getFilters()})(tN.create(e.filters,"and")).map(t=>tK(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t)),t}In(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.Tn(t[c/l]):r8,h=this.En(e,o,n[c%l],r),d=this.dn(e,o,i[c%l],s),f=a.map(t=>this.En(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}En(e,t,n,r){let i=new rj(e,Q.empty(),t,n);return r?i:i.Jt()}dn(e,t,n,r){let i=new rj(e,Q.empty(),t,n);return r?i.Jt():i}ln(e,t){let n=new rH(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.cn(t);return es.forEach(r,t=>this.ln(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eJ($.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}An(e,t){let n=new rQ;for(let r of Y(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.Ht(r.kind);rB.bt.Pt(e,i)}return n.Wt()}Tn(e){let t=new rQ;return rB.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){let n=new rQ;return rB.bt.Pt(th(this.databaseId,t),n.Ht(function(e){let t=Y(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Wt()}Pn(e,t,n){if(null===n)return[];let r=[];r.push(new rQ);let i=0;for(let s of Y(e)){let e=n[i++];for(let n of r)if(this.Vn(t,s.fieldPath)&&tf(e))r=this.mn(r,s,e);else{let t=n.Ht(s.kind);rB.bt.Pt(e,t)}}return this.fn(r)}hn(e,t,n){return this.Pn(e,t,n.position)}fn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Wt();return t}mn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rQ;r.seed(n.Wt()),rB.bt.Pt(e,r.Ht(t.kind)),i.push(r)}return i}Vn(e,t){return!!e.filters.find(e=>e instanceof tC&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=r7(e),r=ie(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{let t=[];return es.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new J(t.sequenceNumber,new ee(rC(t.readTime),new Q(eb(t.documentKey)),t.largestBatchId)):J.empty(),r=e.fields.map(([e,t])=>new H($.fromServerFormat(e),t));return new j(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:O(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=r7(e),i=ie(e);return this.gn(e).next(e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>es.forEach(t,t=>i.put(rF(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){let n=new Map;return es.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?es.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),es.forEach(i,n=>this.pn(e,t,n).next(t=>{let i=this.yn(r,n);return t.isEqual(i)?es.resolve():this.wn(e,r,n,t,i)}))))})}Sn(e,t,n,r){return r9(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.Rn(n,t.key),documentKey:t.key.path.toArray()})}bn(e,t,n,r){return r9(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.Rn(n,t.key),t.key.path.toArray()])}pn(e,t,n){let r=r9(e),i=new eJ(rW);return r.Y({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Rn(n,t)])},(e,r)=>{i=i.add(new rj(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}yn(e,t){let n=new eJ(rW),r=this.An(t,e);if(null==r)return n;let i=W(t);if(null!=i){let s=e.data.field(i.fieldPath);if(tf(s))for(let i of s.arrayValue.values||[])n=n.add(new rj(t.indexId,e.key,this.Tn(i),r))}else n=n.add(new rj(t.indexId,e.key,r8,r));return n}wn(e,t,n,r,i){I("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=eZ(s),l=eZ(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=eZ(a)):t?(i(o),o=eZ(s)):(o=eZ(s),l=eZ(a))}}(r,i,rW,r=>{s.push(this.Sn(e,t,n,r))},r=>{s.push(this.bn(e,t,n,r))}),es.waitFor(s)}gn(e){let t=1;return ie(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rW(e,t)).filter((e,t,n)=>!t||0!==rW(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rW(i,e),s=rW(i,t);if(0===n)r[0]=e.Jt();else if(n>0&&s<0)r.push(i),r.push(i.Jt());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Dn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,r8,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,r8,[]];i.push(IDBKeyRange.bound(t,n))}return i}Dn(e,t){return rW(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(it)}getMinOffset(e,t){return es.mapArray(this.cn(t),t=>this.ln(e,t).next(e=>e||T())).next(it)}}function r6(e){return eK(e,"collectionParents")}function r9(e){return eK(e,"indexEntries")}function r7(e){return eK(e,"indexConfiguration")}function ie(e){return eK(e,"indexState")}function it(e){0!==e.length||T();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>et(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ee(t.readTime,t.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ii{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ii(e,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.Y({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||T()}));let u=[];for(let e of n.mutations){var c,h;let r=(c=e.key.path,h=n.batchId,[t,e_(c),h]);s.push(i.delete(r)),u.push(e.key)}return es.waitFor(s).next(()=>u)}function ia(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw T();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.DEFAULT_COLLECTION_PERCENTILE=10,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ii.DEFAULT=new ii(41943040,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ii.DISABLED=new ii(-1,0,0);class io{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Cn={}}static lt(e,t,n,r){return""!==e.uid||T(),new io(e.isAuthenticated()?e.uid:"",t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return iu(e).Y({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=ic(e),s=iu(e);return s.add({}).next(a=>{"number"==typeof a||T();let o=new nq(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>rg(e.ct,t)),i=n.mutations.map(t=>rg(e.ct,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],c=new eJ((e,t)=>O(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,e_(e.key.path),a];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,eT))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Cn[a]=o.keys()}),es.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return iu(e).get(t).next(e=>e?(e.userId===this.userId||T(),rN(this.serializer,e)):null)}vn(e,t){return this.Cn[t]?es.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.Cn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return iu(e).Y({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||T(),i=rN(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return iu(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return iu(e).W("userMutationsIndex",t).next(e=>e.map(e=>rN(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,e_(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return ic(e).Y({range:r},(n,r,s)=>{let[a,o,l]=n,u=eb(o);if(a===this.userId&&t.path.isEqual(u))return iu(e).get(l).next(e=>{if(!e)throw T();e.userId===this.userId||T(),i.push(rN(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eJ(O),r=[];return t.forEach(t=>{let i=[this.userId,e_(t.path)],s=IDBKeyRange.lowerBound(i),a=ic(e).Y({range:s},(e,r,i)=>{let[s,a,o]=e,l=eb(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),es.waitFor(r).next(()=>this.Fn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,e_(n)],s=IDBKeyRange.lowerBound(i),a=new eJ(O);return ic(e).Y({range:s},(e,t,i)=>{let[s,o,l]=e,u=eb(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.Fn(e,a))}Fn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(iu(e).get(t).next(e=>{if(null===e)throw T();e.userId===this.userId||T(),n.push(rN(this.serializer,e))}))}),es.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return is(e.ae,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Mn(t.batchId)}),es.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return es.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return ic(e).Y({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=eb(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||T()})})}containsKey(e,t){return il(e,this.userId,t)}xn(e){return ih(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function il(e,t,n){let r=[t,e_(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return ic(e).Y({range:s,J:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function iu(e){return eK(e,"mutations")}function ic(e){return eK(e,"documentMutations")}function ih(e){return eK(e,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new id(0)}static Ln(){return new id(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{let n=new id(t.highestTargetId);return t.highestTargetId=n.next(),this.kn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(e=>B.fromTimestamp(new U(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Bn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.kn(e,r)))}addTargetData(e,t){return this.qn(e,t).next(()=>this.Bn(e).next(n=>(n.targetCount+=1,this.Qn(t,n),this.kn(e,n))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ig(e).delete(t.targetId)).next(()=>this.Bn(e)).next(t=>(t.targetCount>0||T(),t.targetCount-=1,this.kn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return ig(e).Y((s,a)=>{let o=rk(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>es.waitFor(i)).next(()=>r)}forEachTarget(e,t){return ig(e).Y((e,n)=>{t(rk(n))})}Bn(e){return ip(e).get("targetGlobalKey").next(e=>(null!==e||T(),e))}kn(e,t){return ip(e).put("targetGlobalKey",t)}qn(e,t){return ig(e).put(rA(this.serializer,t))}Qn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Bn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=t$(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return ig(e).Y({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rk(n);tQ(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=iy(e);return t.forEach(t=>{let s=e_(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),es.waitFor(r)}removeMatchingKeys(e,t,n){let r=iy(e);return es.forEach(t,t=>{let i=e_(t.path);return es.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=iy(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=iy(e),i=nu();return r.Y({range:n,J:!0},(e,t,n)=>{let r=new Q(eb(e[1]));i=i.add(r)}).next(()=>i)}containsKey(e,t){let n=e_(t.path),r=IDBKeyRange.bound([n],[n+"\0"],!1,!0),i=0;return iy(e).Y({index:"documentTargetsIndex",J:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}_t(e,t){return ig(e).get(t).next(e=>e?rk(e):null)}}function ig(e){return eK(e,"targets")}function ip(e){return eK(e,"targetGlobal")}function iy(e){return eK(e,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw([e,t],[n,r]){let i=O(e,n);return 0===i?O(t,r):i}class iv{constructor(e){this.Kn=e,this.buffer=new eJ(iw),this.$n=0}Un(){return++this.$n}Wn(e){let t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>iw(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}zn(e){I("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ec(e)?I("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ei(e)}await this.zn(3e5)})}}class i_{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return es.resolve(ey._e);let n=new iv(t);return this.jn.forEachTarget(e,e=>n.Wn(e.sequenceNumber)).next(()=>this.jn.Jn(e,e=>n.Wn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector","Garbage collection skipped; disabled"),es.resolve(ir)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ir):this.Yn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let n,r,i,s,a,o,l;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),w()<=u.in.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-c}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-c}ms`),es.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.db=e,this.garbageCollector=new i_(this,t)}Hn(e){let t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Zn(e){let t=0;return this.Jn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,(e,n)=>t(n))}addReference(e,t,n){return iE(e,n)}removeReference(e,t,n){return iE(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return iE(e,t)}er(e,t){let n;return n=!1,ih(e).Z(r=>il(e,r,t).next(e=>(e&&(n=!0),es.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Xn(e,(s,a)=>{if(a<=t){let t=this.er(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,B.min()),iy(e).delete([0,e_(s.path)])))});r.push(t)}}).next(()=>es.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return iE(e,t)}Xn(e,t){let n=iy(e),r,i=ey._e;return n.Y({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==ey._e&&t(new Q(eb(r)),i),i=a,r=s):i=ey._e}).next(()=>{i!==ey._e&&t(new Q(eb(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function iE(e,t){var n;return iy(e).put((n=e.currentSequenceNumber,{targetId:0,path:e_(t.path),sequenceNumber:n}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.changes=new nt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?es.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return iC(e).put(n)}removeEntry(e,t,n){return iC(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rx(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.tr(e,n)))}getEntry(e,t){let n=tb.newInvalidDocument(t);return iC(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(iN(t))},(e,r)=>{n=this.nr(t,r)}).next(()=>n)}rr(e,t){let n={size:0,document:tb.newInvalidDocument(t)};return iC(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(iN(t))},(e,r)=>{n={document:this.nr(t,r),size:ia(r)}}).next(()=>n)}getEntries(e,t){let n=nn;return this.ir(e,t,(e,t)=>{let r=this.nr(e,t);n=n.insert(e,r)}).next(()=>n)}sr(e,t){let n=nn,r=new eW(Q.comparator);return this.ir(e,t,(e,t)=>{let i=this.nr(e,t);n=n.insert(e,i),r=r.insert(e,ia(t))}).next(()=>({documents:n,_r:r}))}ir(e,t,n){if(t.isEmpty())return es.resolve();let r=new eJ(iA);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(iN(r.first()),iN(r.last())),s=r.getIterator(),a=s.getNext();return iC(e).Y({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=Q.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>iA(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.U(iN(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){let s=t.path,a=[s.popLast().toArray(),s.lastSegment(),rx(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return iC(e).W(IDBKeyRange.bound(a,o,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let n=nn;for(let i of e){let e=this.nr(Q.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(t9(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=nn,s=ik(t,n),a=ik(t,ee.max());return iC(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.nr(Q.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new ix(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return iD(e).get("remoteDocumentGlobalKey").next(e=>(e||T(),e))}tr(e,t){return iD(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){let e=function(e,t){let n;if(t.document)n=rm(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=Q.fromSegments(t.noDocument.path),r=rC(t.noDocument.readTime);n=tb.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return T();{let e=Q.fromSegments(t.unknownDocument.path),r=rC(t.unknownDocument.version);n=tb.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new U(e[0],e[1]);return B.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(B.min())))return e}return tb.newInvalidDocument(e)}}class ix extends iT{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new nt(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eJ((e,t)=>O(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.ur.get(i);if(t.push(this.ar.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rS(this.ar.serializer,s);r=r.add(i.path.popLast());let l=ia(o);n+=l-a.size,t.push(this.ar.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rS(this.ar.serializer,s.convertToNoDocument(B.min()));t.push(this.ar.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.ar.updateMetadata(e,n)),es.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next(e=>(this.ur.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.ar.sr(e,t).next(({documents:e,_r:t})=>(t.forEach((t,n)=>{this.ur.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function iD(e){return eK(e,"remoteDocumentGlobal")}function iC(e){return eK(e,"remoteDocumentsV14")}function iN(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ik(e,t){let n=t.documentKey.path.toArray();return[e,rx(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function iA(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=O(n[e],r[e]))return i;return(i=O(n.length,r.length))||(i=O(n[n.length-2],r[r.length-2]))||O(n[n.length-1],r[r.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&nk(n.mutation,e,e0.empty(),U.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nu()).next(()=>t))}getLocalViewOfDocuments(e,t,n=nu()){let r=na();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ni();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=na();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nu()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=nn,s=na(),a=na();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nM)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nk(a.mutation,t,a.mutation.getFieldMask(),U.now())):s.set(t.key,e0.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iR(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=na(),r=new eW((e,t)=>e-t),i=nu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||e0.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||nu()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=na();l.forEach(e=>{if(!i.has(e)){let r=nN(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return es.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return Q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):t0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):es.resolve(na()),a=-1,o=i;return s.next(t=>es.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?es.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,nu())).next(e=>({batchId:a,changes:ns(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(e=>{let t=ni();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=ni();return this.indexManager.getCollectionParents(e,i).next(a=>es.forEach(a,a=>{let o=new tJ(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tb.newInvalidDocument(r)))});let n=ni();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&nk(s.mutation,r,e0.empty(),U.now()),t9(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return es.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:rr(t.createTime)}),es.resolve()}getNamedQuery(e,t){return es.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:rR(t.bundledQuery),readTime:rr(t.readTime)}),es.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(){this.overlays=new eW(Q.comparator),this.hr=new Map}getOverlay(e,t){return es.resolve(this.overlays.get(t))}getOverlays(e,t){let n=na();return es.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),es.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),es.resolve()}getOverlaysForCollection(e,t,n){let r=na(),i=t.length+1,s=new Q(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return es.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eW((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=na(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=na(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return es.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nB(t,n));let i=this.hr.get(t);void 0===i&&(i=nu(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){this.Pr=new eJ(iP.Ir),this.Tr=new eJ(iP.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new iP(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new iP(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new Q(new G([])),n=new iP(t,e),r=new iP(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new Q(new G([])),n=new iP(t,e),r=new iP(t,e+1),i=nu();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iP(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class iP{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Q.comparator(e.key,t.key)||O(e.pr,t.pr)}static Er(e,t){return O(e.pr,t.pr)||Q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new eJ(iP.Ir)}checkEmpty(e){return es.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nq(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new iP(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return es.resolve(s)}lookupMutationBatch(e,t){return es.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return es.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return es.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return es.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new iP(t,0),r=new iP(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t)}),es.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eJ(O);return t.forEach(e=>{let t=new iP(e,0),r=new iP(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr)})}),es.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;Q.isDocumentKey(i)||(i=i.child(""));let s=new iP(new Q(i),0),a=new eJ(O);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)},s),es.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||T(),this.mutationQueue.shift();let n=this.wr;return es.forEach(t.mutations,r=>{let i=new iP(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new iP(t,0),r=this.wr.firstAfterOrEqual(n);return es.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,es.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e){this.vr=e,this.docs=new eW(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return es.resolve(n?n.document.mutableCopy():tb.newInvalidDocument(t))}getEntries(e,t){let n=nn;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tb.newInvalidDocument(e))}),es.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=nn,s=t.path,a=new Q(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=et(Z(a),n)||(r.has(a.key)||t9(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return es.resolve(i)}getAllFromCollectionGroup(e,t,n,r){T()}Fr(e,t){return es.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iU(this)}getSize(e){return es.resolve(this.size)}}class iU extends iT{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)}),es.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e){this.persistence=e,this.Mr=new nt(e=>t$(e),tQ),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new iL,this.targetCount=0,this.Lr=id.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),es.resolve()}getLastRemoteSnapshotVersion(e){return es.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return es.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),es.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),es.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new id(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,es.resolve()}updateTargetData(e,t){return this.qn(t),es.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,es.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),es.waitFor(i).next(()=>r)}getTargetCount(e){return es.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return es.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),es.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),es.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),es.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return es.resolve(n)}containsKey(e,t){return es.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(e,t){this.Br={},this.overlays={},this.kr=new ey(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new iB(this),this.indexManager=new r5,this.remoteDocumentCache=new iq(e=>this.referenceDelegate.Kr(e)),this.serializer=new rT(t),this.$r=new iV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iF,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new iO(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){I("MemoryPersistence","Starting transaction:",e);let r=new iG(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gr(e,t){return es.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class iG extends er{constructor(e){super(),this.currentSequenceNumber=e}}class iK{constructor(e){this.persistence=e,this.zr=new iL,this.jr=null}static Hr(e){return new iK(e)}get Jr(){if(this.jr)return this.jr;throw T()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),es.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),es.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),es.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return es.forEach(this.Jr,n=>{let r=Q.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,B.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return es.or([()=>es.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e){this.serializer=e}N(e,t,n,r){let i=new ea("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eE,{unique:!0}),e.createObjectStore("documentMutations"),iQ(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=es.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iQ(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").W().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eE,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return es.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Xr(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.ei(i)))),n<7&&r>=7&&(s=s.next(()=>this.ti(i))),n<8&&r>=8&&(s=s.next(()=>this.ni(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.ri(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eL});t.createIndex("collectionPathOverlayIndex",eP,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eO,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:eS});t.createIndex("documentKeyIndex",ex),t.createIndex("collectionGroupIndex",eD)})(e)).next(()=>this.ii(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.si(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eR}).createIndex("sequenceNumberIndex",eM,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:eV}).createIndex("documentKeyIndex",eF,{unique:!1})})),n<16&&r>=16&&(s=s.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),s}ei(e){let t=0;return e.store("remoteDocuments").Y((e,n)=>{t+=ia(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Xr(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>es.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>es.forEach(n,n=>{n.userId===t.userId||T();let r=rN(this.serializer,n);return is(e,t.userId,r).next(()=>{})}))}))}ti(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Y((n,i)=>{let s=new G(n),a=[0,e_(s)];r.push(t.get(a).next(n=>n?es.resolve():t.put({targetId:0,path:e_(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>es.waitFor(r))})}ni(e,t){e.createObjectStore("collectionParents",{keyPath:eA});let n=t.store("collectionParents"),r=new r4,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:e_(r)})}};return t.store("remoteDocuments").Y({J:!0},(e,t)=>i(new G(e).popLast())).next(()=>t.store("documentMutations").Y({J:!0},([e,t,n],r)=>i(eb(t).popLast())))}ri(e){let t=e.store("targets");return t.Y((e,n)=>{let r=rk(n),i=rA(this.serializer,r);return t.put(i)})}ii(e,t){let n=t.store("remoteDocuments"),r=[];return n.Y((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new Q(G.fromString(n.document.name).popFirst(5)):n.noDocument?Q.fromSegments(n.noDocument.path):n.unknownDocument?Q.fromSegments(n.unknownDocument.path):T()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>es.waitFor(r))}si(e,t){let n=t.store("mutations"),r=new iS(this.serializer),i=new iz(iK.Hr,this.serializer.ct);return n.W().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:nu();rN(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),es.forEach(n,(e,n)=>{let s=new g(n),a=rq.lt(this.serializer,s),o=i.getIndexManager(s);return new iM(r,io.lt(s,this.serializer,o,i.referenceDelegate),a,o).recalculateAndSaveOverlaysForDocumentKeys(new eG(t,ey._e),e).next()})})}}function iQ(e){e.createObjectStore("targetDocuments",{keyPath:eN}).createIndex("documentTargetsIndex",ek,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eC,{unique:!0}),e.createObjectStore("targetGlobal")}let ij="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iW{constructor(e,t,n,r,i,s,a,o,l,u,c=16){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.oi=i,this.window=s,this.document=a,this._i=l,this.ai=u,this.ui=c,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=e=>Promise.resolve(),!iW.D())throw new D(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ib(this,r),this.Ti=t+"main",this.serializer=new rT(o),this.Ei=new eo(this.Ti,this.ui,new i$(this.serializer)),this.Qr=new im(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new iS(this.serializer),this.$r=new rL,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,!1===u&&_("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(x.FAILED_PRECONDITION,ij);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new ey(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iH(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(e=>{e||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(t=>this.isPrimary&&!t?this.yi(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(ec(e))return I("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return I("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return iY(e).get("owner").next(e=>es.resolve(this.Si(e)))}bi(e){return iH(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=eK(e,"clientMetadata");return t.W().next(e=>{let n=this.vi(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return es.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.di)for(let t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?es.resolve(!0):iY(e).get("owner").next(t=>{if(null!==t&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new D(x.FAILED_PRECONDITION,ij);return!1}}return!(!this.networkEnabled||!this.inForeground)||iH(e).W().next(e=>void 0===this.vi(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&I("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eG(e,ey._e);return this.yi(t).next(()=>this.bi(t))}),this.Ei.close(),this.Li()}vi(e,t){return e.filter(e=>this.Ci(e.updateTimeMs,t)&&!this.Mi(e.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>iH(e).W().next(e=>this.vi(e,18e5).map(e=>e.clientId)))}get started(){return this.qr}getMutationQueue(e,t){return io.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new r3(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return rq.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,n){var r;let i;I("IndexedDbPersistence","Starting transaction:",e);let s=16===(r=this.ui)?ez:15===r?ez:14===r?eB:13===r?eB:12===r?eU:11===r?eq:void T();return this.Ei.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,r=>(i=new eG(r,this.kr?this.kr.next():ey._e),"readwrite-primary"===t?this.gi(i).next(e=>!!e||this.pi(i)).next(t=>{if(!t)throw _(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new D(x.FAILED_PRECONDITION,en);return n(i)}).next(e=>this.wi(i).next(()=>e)):this.ki(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}ki(e){return iY(e).get("owner").next(e=>{if(null!==e&&this.Ci(e.leaseTimestampMs,5e3)&&!this.Mi(e.ownerId)&&!this.Si(e)&&!(this.ai||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(x.FAILED_PRECONDITION,ij)})}wi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iY(e).put("owner",t)}static D(){return eo.D()}yi(e){let t=iY(e);return t.get("owner").next(e=>this.Si(e)?(I("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):es.resolve())}Ci(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(_(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground="visible"===this.document.visibilityState)}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();let e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{let n=null!==(null===(t=this.di)||void 0===t?void 0:t.getItem(this.Fi(e)));return I("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return _("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){_("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch(e){}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iY(e){return eK(e,"owner")}function iH(e){return eK(e,"clientMetadata")}function iJ(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=nu(),r=nu();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iX(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,c.G6)()?8:eo.v((0,c.z$)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Hi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new iZ;return this.Ji(e,t,n).next(r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)})}).next(()=>i.result)}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(w()<=u.in.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",t6(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),es.resolve()):(w()<=u.in.DEBUG&&I("QueryEngine","Query:",t6(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(w()<=u.in.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",t6(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,t2(t))):es.resolve())}ji(e,t){if(tZ(t))return es.resolve(null);let n=t2(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=t2(t=t4(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=nu(...r);return this.zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,t4(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,r){return tZ(t)||r.isEqual(B.min())?es.resolve(null):this.zi.getDocuments(e,n).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,n,r)?es.resolve(null):(w()<=u.in.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),t6(t)),this.es(e,s,t,X(r,-1)).next(e=>e))})}Zi(e,t){let n=new eJ(ne(e));return t.forEach((t,r)=>{t9(e,r)&&(n=n.add(r))}),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return w()<=u.in.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",t6(t)),this.zi.getDocumentsMatchingQuery(e,t,ee.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new eW(O),this.rs=new nt(e=>t$(e),tQ),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iM(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function i2(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=nu();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}))})})}function i5(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function i4(e,t,n){let r=nu(),i=nu();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=nn;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(B.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):I("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{cs:r,ls:i}})}function i8(e,t){return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Qr.getTargetData(n,t).next(i=>i?(r=i,es.resolve(r)):e.Qr.allocateTargetId(n).next(i=>(r=new rE(t,i,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,r).next(()=>r))))}).then(n=>{let r=e.ns.get(n.targetId);return(null===r||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function i3(e,t,n){let r=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!ec(e))throw e;I("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(r.target)}function i6(e,t,n){let r=B.min(),i=nu();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.rs.get(n);return void 0!==r?es.resolve(e.ns.get(r)):e.Qr.getTargetData(t,n)})(e,s,t2(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?r:B.min(),n?i:nu())).next(n=>(se(e,t7(t),n),{documents:n,hs:i})))}function i9(e,t){let n=e.Qr,r=e.ns.get(t);return r?Promise.resolve(r.target):e.persistence.runTransaction("Get target data","readonly",e=>n._t(e,t).next(e=>e?e.target:null))}function i7(e,t){let n=e.ss.get(t)||B.min();return e.persistence.runTransaction("Get new document changes","readonly",r=>e.os.getAllFromCollectionGroup(r,t,X(n,-1),Number.MAX_SAFE_INTEGER)).then(n=>(se(e,t,n),n))}function se(e,t,n){let r=e.ss.get(t)||B.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.ss.set(t,r)}async function st(e,t,n,r){let i=nu(),s=nn;for(let e of n){let n=t.Ps(e.metadata.name);e.document&&(i=i.add(n));let r=t.Is(e);r.setReadTime(t.Ts(e.metadata.readTime)),s=s.insert(n,r)}let a=e.os.newChangeBuffer({trackRemovals:!0}),o=await i8(e,t2(tX(G.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>i4(t,a,s).next(e=>(a.apply(t),e)).next(n=>e.Qr.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Qr.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.cs,n.ls)).next(()=>n.cs)))}async function sn(e,t,n=nu()){let r=await i8(e,t2(rR(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=rr(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return e.$r.saveNamedQuery(i,t);let a=r.withResumeToken(e5.EMPTY_BYTE_STRING,s);return e.ns=e.ns.insert(a.targetId,a),e.Qr.updateTargetData(i,a).next(()=>e.Qr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>e.Qr.addMatchingKeys(i,n,r.targetId)).next(()=>e.$r.saveNamedQuery(i,t))})}function sr(e,t){return`firestore_clients_${e}_${t}`}function si(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function ss(e,t){return`firestore_targets_${e}_${t}`}class sa{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Es(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new D(r.error.code,r.error.message)),s?new sa(e,t,r.state,i):(_("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ds(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class so{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Es(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new D(n.error.code,n.error.message)),i?new so(e,n.state,r):(_("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ds(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=nc;for(let e=0;r&&e<n.activeTargetIds.length;++e)r=eI(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new sl(e,i):(_("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class su{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new su(t.clientId,t.onlineState):(_("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sc{constructor(){this.activeTargetIds=nc}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sh{constructor(e,t,n,r,i){var s,a,o;this.window=e,this.oi=t,this.persistenceKey=n,this.Vs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new eW(O),this.started=!1,this.ys=[];let l=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ws=sr(this.persistenceKey,this.Vs),this.Ss=(s=this.persistenceKey,`firestore_sequence_number_${s}`),this.ps=this.ps.insert(this.Vs,new sc),this.bs=RegExp(`^firestore_clients_${l}_([^_]*)$`),this.Ds=RegExp(`^firestore_mutations_${l}_(\\d+)(?:_(.*))?$`),this.Cs=RegExp(`^firestore_targets_${l}_(\\d+)$`),this.vs=(a=this.persistenceKey,`firestore_online_state_${a}`),this.Fs=(o=this.persistenceKey,`firestore_bundle_loaded_v2_${o}`),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){for(let e of(await this.syncEngine.Bi())){if(e===this.Vs)continue;let t=this.getItem(sr(this.persistenceKey,e));if(t){let n=sl.Es(e,t);n&&(this.ps=this.ps.insert(n.clientId,n))}}this.Ms();let e=this.storage.getItem(this.vs);if(e){let t=this.xs(e);t&&this.Os(t)}for(let e of this.ys)this.gs(e);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let t=!1;return this.ps.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,n){this.Ls(e,t,n),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(ss(this.persistenceKey,e));if(n){let r=so.Es(e,n);r&&(t=r.state)}}return this.ks.As(e),this.Ms(),t}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ss(this.persistenceKey,e))}updateQueryState(e,t,n){this.qs(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Bs(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return I("SharedClientState","READ",e,t),t}setItem(e,t){I("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){I("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){if(e.storageArea===this.storage){if(I("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ws)return void _("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.bs.test(e.key)){if(null==e.newValue){let t=this.$s(e.key);return this.Us(t,null)}{let t=this.Ws(e.key,e.newValue);if(t)return this.Us(t.clientId,t)}}else if(this.Ds.test(e.key)){if(null!==e.newValue){let t=this.Gs(e.key,e.newValue);if(t)return this.zs(t)}}else if(this.Cs.test(e.key)){if(null!==e.newValue){let t=this.js(e.key,e.newValue);if(t)return this.Hs(t)}}else if(e.key===this.vs){if(null!==e.newValue){let t=this.xs(e.newValue);if(t)return this.Os(t)}}else if(e.key===this.Ss){let t=function(e){let t=ey._e;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||T(),t=n}catch(e){_("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==ey._e&&this.sequenceNumberHandler(t)}else if(e.key===this.Fs){let t=this.Js(e.newValue);await Promise.all(t.map(e=>this.syncEngine.Ys(e)))}}}else this.ys.push(e)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,t,n){let r=new sa(this.currentUser,e,t,n),i=si(this.persistenceKey,this.currentUser,e);this.setItem(i,r.ds())}Bs(e){let t=si(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Qs(e){let t={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(t))}qs(e,t,n){let r=ss(this.persistenceKey,e),i=new so(e,t,n);this.setItem(r,i.ds())}Ks(e){let t=JSON.stringify(Array.from(e));this.setItem(this.Fs,t)}$s(e){let t=this.bs.exec(e);return t?t[1]:null}Ws(e,t){let n=this.$s(e);return sl.Es(n,t)}Gs(e,t){let n=this.Ds.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return sa.Es(new g(i),r,t)}js(e,t){let n=Number(this.Cs.exec(e)[1]);return so.Es(n,t)}xs(e){return su.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);I("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,t){let n=t?this.ps.insert(e,t):this.ps.remove(e),r=this.Ns(this.ps),i=this.Ns(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.eo(s,a).then(()=>{this.ps=n})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let t=nc;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class sd{constructor(){this.no=new sc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new sc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(I("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sg=null;function sp(){return null===sg?sg=268435456+Math.round(2147483648*Math.random()):sg++,"0x"+sg.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sv="WebChannelConnection";class sI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){let s=sp(),a=this.bo(e,t.toUriEncodedString());I("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(o,r,i),this.Co(e,a,o,n).then(t=>(I("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw b("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+p}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=sy[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){let i=sp();return new Promise((s,a)=>{let o=new h.JJ;o.setWithCredentials(!0),o.listenOnce(h.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case h.jK.NO_ERROR:let t=o.getResponseJson();I(sv,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case h.jK.TIMEOUT:I(sv,`RPC '${e}' ${i} timed out`),a(new D(x.DEADLINE_EXCEEDED,"Request time out"));break;case h.jK.HTTP_ERROR:let n=o.getStatus();if(I(sv,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(t)>=0?t:x.UNKNOWN}(t.status);a(new D(e,t.message))}else a(new D(x.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new D(x.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{I(sv,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);I(sv,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Fo(e,t,n){let i=sp(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,h.UE)(),o=(0,h.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let c=s.join("");I(sv,`Creating RPC '${e}' stream ${i}: ${c}`,l);let d=a.createWebChannel(c,l),f=!1,m=!1,g=new sw({lo:t=>{m?I(sv,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(I(sv,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),I(sv,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},ho:()=>d.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(d,h.ii.EventType.OPEN,()=>{m||I(sv,`RPC '${e}' stream ${i} transport opened.`)}),p(d,h.ii.EventType.CLOSE,()=>{m||(m=!0,I(sv,`RPC '${e}' stream ${i} transport closed`),g.Vo())}),p(d,h.ii.EventType.ERROR,t=>{m||(m=!0,b(sv,`RPC '${e}' stream ${i} transport errored:`,t),g.Vo(new D(x.UNAVAILABLE,"The operation could not be completed")))}),p(d,h.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||T();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){I(sv,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nK(t)}(t),s=a.message;void 0===n&&(n=x.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.Vo(new D(n,s)),d.close()}else I(sv,`RPC '${e}' stream ${i} received:`,s),g.mo(s)}}),p(o,h.ju.STAT_EVENT,t=>{t.stat===h.kN.PROXY?I(sv,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===h.kN.NOPROXY&&I(sv,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return"undefined"!=typeof window?window:null}function sb(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){return new n7(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,n,r,i,s,a,o){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new sT(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(_(t.toString()),_("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Wo===t&&this.o_(e,n)},t=>{e(()=>{let e=new D(x.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{n(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{n(()=>this.__(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sx extends sS{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:T(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||T(),e5.fromBase64String(i||"")):(void 0===i||i instanceof f||i instanceof Uint8Array||T(),e5.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new n1(s,a,o,l&&new D(void 0===l.code?x.UNKNOWN:nK(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=rl(e,r.document.name),s=rr(r.document.updateTime),a=r.document.createTime?rr(r.document.createTime):B.min(),o=new t_({mapValue:{fields:r.document.fields}}),l=tb.newFoundDocument(i,s,a,o);n=new nZ(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=rl(e,r.document),s=r.readTime?rr(r.readTime):B.min(),a=tb.newNoDocument(i,s);n=new nZ([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=rl(e,r.document);n=new nZ([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return T();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nz(r,i);n=new n0(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return B.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?B.min():t.readTime?rr(t.readTime):B.min()}(e);return this.listener.u_(t,n)}c_(e){let t={};t.database=rh(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tj(r)?{documents:ry(e,r)}:{query:rw(e,r).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rn(e,t.resumeToken);let r=re(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(B.min())>0){n.readTime=rt(e,t.snapshotVersion.toTimestamp());let r=re(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){let t={};t.database=rh(this.serializer),t.removeTarget=e,this.t_(t)}}class sD extends sS{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||T(),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||T(),t.map(e=>{let t;return(t=e.updateTime?rr(e.updateTime):rr(n)).isEqual(B.min())&&(t=rr(n)),new nS(t,e.transformResults||[])})):[]),i=rr(e.commitTime);return this.listener.T_(i,r)}return e.writeResults&&0!==e.writeResults.length&&T(),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=rh(this.serializer),this.t_(e)}I_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>rg(this.serializer,e))};this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new D(x.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,rs(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new D(x.UNKNOWN,e.toString())})}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,rs(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new D(x.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class sN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(_(t),this.g_=!1):I("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(e=>{n.enqueueAndForget(async()=>{sq(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await sR(e),e.x_.set("Unknown"),e.v_.delete(4),await sA(e)}(this))})}),this.x_=new sN(n,r)}}async function sA(e){if(sq(e))for(let t of e.F_)await t(!0)}async function sR(e){for(let t of e.F_)await t(!1)}function sM(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),sO(e)?sP(e):s0(e).Jo()&&sF(e,t))}function sV(e,t){let n=s0(e);e.C_.delete(t),n.Jo()&&sL(e,t),0===e.C_.size&&(n.Jo()?n.Xo():sq(e)&&e.x_.set("Unknown"))}function sF(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}s0(e).c_(t)}function sL(e,t){e.O_.Oe(t),s0(e).l_(t)}function sP(e){e.O_=new n5({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),s0(e).start(),e.x_.p_()}function sO(e){return sq(e)&&!s0(e).Ho()&&e.C_.size>0}function sq(e){return 0===e.v_.size}async function sU(e){e.C_.forEach((t,n)=>{sF(e,t)})}async function sB(e,t){e.O_=void 0,sO(e)?(e.x_.S_(t),sP(e)):e.x_.set("Unknown")}async function sz(e,t,n){if(e.x_.set("Online"),t instanceof n1&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){I("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sG(e,n)}else if(t instanceof nZ?e.O_.$e(t):t instanceof n0?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(B.min()))try{let t=await i5(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.O_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(e5.EMPTY_BYTE_STRING,r.snapshotVersion)),sL(e,t);let i=new rE(r.target,t,n,r.sequenceNumber);sF(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){I("RemoteStore","Failed to raise snapshot:",t),await sG(e,t)}}async function sG(e,t,n){if(!ec(t))throw t;e.v_.add(1),await sR(e),e.x_.set("Offline"),n||(n=()=>i5(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await sA(e)})}function sK(e,t){return t().catch(n=>sG(e,n,t))}async function s$(e){let t=s1(e),n=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;sq(e)&&e.D_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.D_.length&&t.Xo();break}n=r.batchId,function(e,t){e.D_.push(t);let n=s1(e);n.Jo()&&n.P_&&n.I_(t.mutations)}(e,r)}catch(t){await sG(e,t)}sQ(e)&&sj(e)}function sQ(e){return sq(e)&&!s1(e).Ho()&&e.D_.length>0}function sj(e){s1(e).start()}async function sW(e){s1(e).d_()}async function sY(e){let t=s1(e);for(let n of e.D_)t.I_(n.mutations)}async function sH(e,t,n){let r=e.D_.shift(),i=nU.from(r,t,n);await sK(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await s$(e)}async function sJ(e,t){t&&s1(e).P_&&await async function(e,t){var n;if(nG(n=t.code)&&n!==x.ABORTED){let n=e.D_.shift();s1(e).Zo(),await sK(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await s$(e)}}(e,t),sQ(e)&&sj(e)}async function sX(e,t){e.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");let n=sq(e);e.v_.add(3),await sR(e),n&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await sA(e)}async function sZ(e,t){t?(e.v_.delete(2),await sA(e)):t||(e.v_.add(2),await sR(e),e.x_.set("Unknown"))}function s0(e){var t,n,r;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,r={Po:sU.bind(null,e),To:sB.bind(null,e),u_:sz.bind(null,e)},t.R_(),new sx(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.N_.Zo(),sO(e)?sP(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}function s1(e){var t,n,r;return e.L_||(e.L_=(t=e.datastore,n=e.asyncQueue,r={Po:sW.bind(null,e),To:sJ.bind(null,e),E_:sY.bind(null,e),T_:sH.bind(null,e)},t.R_(),new sD(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.L_.Zo(),await s$(e)):(await e.L_.stop(),e.D_.length>0&&(I("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new s2(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new D(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s5(e,t){if(_("AsyncQueue",`${t}: ${e}`),ec(e))return new D(x.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Q.comparator(t.key,n.key):(e,t)=>Q.comparator(e.key,t.key),this.keyedMap=ni(),this.sortedSet=new eW(this.comparator)}static emptySet(e){return new s4(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s4)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s4;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(){this.B_=new eW(Q.comparator)}track(e){let t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):T():this.B_=this.B_.insert(t,e)}k_(){let e=[];return this.B_.inorderTraversal((t,n)=>{e.push(n)}),e}}class s3{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new s3(e,t,s4.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&t8(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class s9{constructor(){this.queries=new nt(e=>t3(e),t8),this.onlineState="Unknown",this.W_=new Set}}async function s7(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.K_()&&t.U_()&&(n=2):(i=new s6,n=t.U_()?0:1);try{switch(n){case 0:i.q_=await e.onListen(r,!0);break;case 1:i.q_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=s5(n,`Initialization of query '${t6(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.Q_.push(t),t.G_(e.onlineState),i.q_&&t.z_(i.q_)&&ar(e)}async function ae(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.Q_.indexOf(t);e>=0&&(i.Q_.splice(e,1),0===i.Q_.length?r=t.U_()?0:1:!i.K_()&&t.U_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function at(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Q_)e.z_(r)&&(n=!0);i.q_=r}}n&&ar(e)}function an(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Q_)e.onError(n);e.queries.delete(t)}function ar(e){e.W_.forEach(e=>{e.next()})}(a=s||(s={})).j_="default",a.Cache="cache";class ai{constructor(e,t,n){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=n||{}}z_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new s3(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){return!(e.fromCache&&this.U_())||(!this.options.ta||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Z_(e){if(e.docChanges.length>0)return!0;let t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ea(e){e=s3.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.na=e,this.byteLength=t}ra(){return"metadata"in this.na}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.serializer=e}Ps(e){return rl(this.serializer,e)}Is(e){return e.metadata.exists?rm(this.serializer,e.document,!1):tb.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return rr(e)}}class ao{constructor(e,t,n){this.ia=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=al(e)}sa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.na.namedQuery)this.queries.push(e.na.namedQuery);else if(e.na.documentMetadata){this.documents.push({metadata:e.na.documentMetadata}),e.na.documentMetadata.exists||++t;let n=G.fromString(e.na.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.na.document&&(this.documents[this.documents.length-1].document=e.na.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}oa(e){let t=new Map,n=new aa(this.serializer);for(let r of e)if(r.metadata.queries){let e=n.Ps(r.metadata.name);for(let n of r.metadata.queries){let r=(t.get(n)||nu()).add(e);t.set(n,r)}}return t}async complete(){let e=await st(this.localStore,new aa(this.serializer),this.documents,this.ia.id),t=this.oa(this.documents);for(let e of this.queries)await sn(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,_a:this.collectionGroups,aa:e}}}function al(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.key=e}}class ac{constructor(e){this.key=e}}class ah{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=nu(),this.mutatedKeys=nu(),this.ha=ne(e),this.Pa=new s4(this.ha)}get Ia(){return this.ua}Ta(e,t){let n=t?t.Ea:new s8,r=t?t.Pa:this.Pa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=t9(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.da(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.ha(c,o)>0||l&&0>this.ha(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Pa:s,Ea:n,Xi:a,mutatedKeys:i}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;let s=e.Ea.k_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return n(e)-n(t)})(e.type,t.type)||this.ha(e.doc,t.doc)),this.Aa(n),r=null!=r&&r;let a=t&&!r?this.Ra():[],o=0===this.la.size&&this.current&&!r?1:0,l=o!==this.ca;return(this.ca=o,0!==s.length||l)?{snapshot:new s3(this.query,e.Pa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new s8,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=e.current)}Ra(){if(!this.current)return[];let e=this.la;this.la=nu(),this.Pa.forEach(e=>{this.ma(e.key)&&(this.la=this.la.add(e.key))});let t=[];return e.forEach(e=>{this.la.has(e)||t.push(new ac(e))}),this.la.forEach(n=>{e.has(n)||t.push(new au(n))}),t}fa(e){this.ua=e.hs,this.la=nu();let t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return s3.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,0===this.ca,this.hasCachedResults)}}class ad{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class af{constructor(e){this.key=e,this.pa=!1}}class am{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ya={},this.wa=new nt(e=>t3(e),t8),this.Sa=new Map,this.ba=new Set,this.Da=new eW(Q.comparator),this.Ca=new Map,this.va=new iL,this.Fa={},this.Ma=new Map,this.xa=id.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return!0===this.Oa}}async function ag(e,t,n=!0){let r;let i=aQ(e),s=i.wa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ga()):r=await ay(i,t,n,!0),r}async function ap(e,t){let n=aQ(e);await ay(n,t,!0,!1)}async function ay(e,t,n,r){let i;let s=await i8(e.localStore,t2(t)),a=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(a):"not-current";return r&&(i=await aw(e,t,a,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&sM(e.remoteStore,s),i}async function aw(e,t,n,r,i){e.Na=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Ta(n);i.Xi&&(i=await i6(e.localStore,t.query,!1).then(({documents:e})=>t.view.Ta(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return aR(e,t.targetId,o.Va),o.snapshot})(e,t,n,r);let s=await i6(e.localStore,t,!0),a=new ah(t,s.hs),o=a.Ta(s.documents),l=nX.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);aR(e,n,u.Va);let c=new ad(t,n,a);return e.wa.set(t,c),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),u.snapshot}async function av(e,t,n){let r=e.wa.get(t),i=e.Sa.get(r.targetId);if(i.length>1)return e.Sa.set(r.targetId,i.filter(e=>!t8(e,t))),void e.wa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await i3(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&sV(e.remoteStore,r.targetId),ak(e,r.targetId)}).catch(ei)):(ak(e,r.targetId),await i3(e.localStore,r.targetId,!0))}async function aI(e,t){let n=e.wa.get(t),r=e.Sa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),sV(e.remoteStore,n.targetId))}async function a_(e,t,n){let r=aj(e);try{var i;let e;let s=await function(e,t){let n,r;let i=U.now(),s=t.reduce((e,t)=>e.add(t.key),nu());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=nn,l=nu();return e.os.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=ng(r.transform,e||null);null!=i&&(null===n&&(n=t_.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nM(e.key,t,function e(t){let n=[];return eQ(t.fields,(t,r)=>{let i=new $([t]);if(tp(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new e0(n)}(t.value.mapValue),nx.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ns(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.Fa[r.currentUser.toKey()])||(e=new eW(O)),e=e.insert(i,n),r.Fa[r.currentUser.toKey()]=e,await aV(r,s.changes),await s$(r.remoteStore)}catch(t){let e=s5(t,"Failed to persist write");n.reject(e)}}async function ab(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.os.newChangeBuffer({trackRemovals:!0});r=e.ns;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=r.get(o);if(!u)return;a.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(e5.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.Qr.updateTargetData(i,c))});let o=nn,l=nu();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),a.push(i4(i,s,t.documentUpdates).next(e=>{o=e.cs,l=e.ls})),!n.isEqual(B.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(t)}return es.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.ns=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Ca.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||T(),t.addedDocuments.size>0?r.pa=!0:t.modifiedDocuments.size>0?r.pa||T():t.removedDocuments.size>0&&(r.pa||T(),r.pa=!1))}),await aV(e,n,t)}catch(e){await ei(e)}}function aE(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.wa.forEach((e,n)=>{let r=n.view.G_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Q_)e.G_(t)&&(n=!0)}),n&&ar(r),i.length&&e.ya.u_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function aT(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Ca.get(t),i=r&&r.key;if(i){let n=new eW(Q.comparator);n=n.insert(i,tb.newNoDocument(i,B.min()));let r=nu().add(i),s=new nJ(B.min(),new Map,new eW(O),n,r);await ab(e,s),e.Da=e.Da.remove(i),e.Ca.delete(t),aM(e)}else await i3(e.localStore,t,!1).then(()=>ak(e,t,n)).catch(ei)}async function aS(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=es.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||T(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});aN(e,r,null),aC(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aV(e,i)}catch(e){await ei(e)}}async function ax(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||T(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});aN(e,t,n),aC(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aV(e,i)}catch(e){await ei(e)}}async function aD(e,t){var n;sq(e.remoteStore)||I("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await (n=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>n.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===r)return void t.resolve();let i=e.Ma.get(r)||[];i.push(t),e.Ma.set(r,i)}catch(n){let e=s5(n,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aC(e,t){(e.Ma.get(t)||[]).forEach(e=>{e.resolve()}),e.Ma.delete(t)}function aN(e,t,n){let r=e.Fa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Fa[e.currentUser.toKey()]=r}}function ak(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Sa.get(t)))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(t=>{e.va.containsKey(t)||aA(e,t)})}function aA(e,t){e.ba.delete(t.path.canonicalString());let n=e.Da.get(t);null!==n&&(sV(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),aM(e))}function aR(e,t,n){for(let r of n)r instanceof au?(e.va.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(I("SyncEngine","New document in limbo: "+n),e.ba.add(r),aM(e))}(e,r)):r instanceof ac?(I("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||aA(e,r.key)):T()}function aM(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){let t=e.ba.values().next().value;e.ba.delete(t);let n=new Q(G.fromString(t)),r=e.xa.next();e.Ca.set(r,new af(n)),e.Da=e.Da.insert(n,r),sM(e.remoteStore,new rE(t2(tX(n.path)),r,"TargetPurposeLimboResolution",ey._e))}}async function aV(e,t,n){let r=[],i=[],s=[];e.wa.isEmpty()||(e.wa.forEach((a,o)=>{s.push(e.Na(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iX.Ki(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.ya.u_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>es.forEach(t,t=>es.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>es.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!ec(e))throw e;I("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ns=e.ns.insert(t,i)}}}(e.localStore,i))}async function aF(e,t){var n;if(!e.currentUser.isEqual(t)){I("SyncEngine","User change. New user:",t.toKey());let r=await i2(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ma.forEach(e=>{e.forEach(e=>{e.reject(new D(x.CANCELLED,n))})}),e.Ma.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aV(e,r.us)}}function aL(e,t){let n=e.Ca.get(t);if(n&&n.pa)return nu().add(n.key);{let n=nu(),r=e.Sa.get(t);if(!r)return n;for(let t of r){let r=e.wa.get(t);n=n.unionWith(r.view.Ia)}return n}}async function aP(e,t){let n=await i6(e.localStore,t.query,!0),r=t.view.fa(n);return e.isPrimaryClient&&aR(e,t.targetId,r.Va),r}async function aO(e,t){return i7(e.localStore,t).then(t=>aV(e,t))}async function aq(e,t,n,r){let i=await function(e,t){let n=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",r=>n.vn(r,t).next(t=>t?e.localDocuments.getDocuments(r,t):es.resolve(null)))}(e.localStore,t);null!==i?("pending"===n?await s$(e.remoteStore):"acknowledged"===n||"rejected"===n?(aN(e,t,r||null),aC(e,t),function(e,t){e.mutationQueue.Mn(t)}(e.localStore,t)):T(),await aV(e,i)):I("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aU(e,t){if(aQ(e),aj(e),!0===t&&!0!==e.Oa){let t=e.sharedClientState.getAllActiveQueryTargets(),n=await aB(e,t.toArray());for(let t of(e.Oa=!0,await sZ(e.remoteStore,!0),n))sM(e.remoteStore,t)}else if(!1===t&&!1!==e.Oa){let t=[],n=Promise.resolve();e.Sa.forEach((r,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):n=n.then(()=>(ak(e,i),i3(e.localStore,i,!0))),sV(e.remoteStore,i)}),await n,await aB(e,t),e.Ca.forEach((t,n)=>{sV(e.remoteStore,n)}),e.va.mr(),e.Ca=new Map,e.Da=new eW(Q.comparator),e.Oa=!1,await sZ(e.remoteStore,!1)}}async function aB(e,t,n){let r=[],i=[];for(let n of t){let t;let s=e.Sa.get(n);if(s&&0!==s.length)for(let n of(t=await i8(e.localStore,t2(s[0])),s)){let t=e.wa.get(n),r=await aP(e,t);r.snapshot&&i.push(r.snapshot)}else{let r=await i9(e.localStore,n);t=await i8(e.localStore,r),await aw(e,az(r),n,!1,t.resumeToken)}r.push(t)}return e.ya.u_(i),r}function az(e){var t,n,r,i;return t=e.path,n=e.collectionGroup,r=e.orderBy,i=e.filters,new tJ(t,n,r,i,e.limit,"F",e.startAt,e.endAt)}function aG(e){return e.localStore.persistence.Bi()}async function aK(e,t,n,r){if(e.Oa)return void I("SyncEngine","Ignoring unexpected query state notification.");let i=e.Sa.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{let r=await i7(e.localStore,t7(i[0])),s=nJ.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,e5.EMPTY_BYTE_STRING);await aV(e,r,s);break}case"rejected":await i3(e.localStore,t,!0),ak(e,t,r);break;default:T()}}async function a$(e,t,n){let r=aQ(e);if(r.Oa){for(let e of t){if(r.Sa.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){I("SyncEngine","Adding an already active target "+e);continue}let t=await i9(r.localStore,e),n=await i8(r.localStore,t);await aw(r,az(t),n.targetId,!1,n.resumeToken),sM(r.remoteStore,n)}for(let e of n)r.Sa.has(e)&&await i3(r.localStore,e,!1).then(()=>{sV(r.remoteStore,e),ak(r,e)}).catch(ei)}}function aQ(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aT.bind(null,e),e.ya.u_=at.bind(null,e.eventManager),e.ya.La=an.bind(null,e.eventManager),e}function aj(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=aS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ax.bind(null,e),e}class aW{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sE(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new i1(t,new i0,e.initialUser,this.serializer)}createPersistence(e){return new iz(iK.Hr,this.serializer)}createSharedClientState(e){return new sd}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aY extends aW{constructor(e,t,n){super(),this.ka=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ka.initialize(this,e),await aj(this.ka.syncEngine),await s$(this.ka.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t;return t=this.persistence,new i1(t,new i0,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){return new iI(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new ep(t,this.persistence);return new eg(e.asyncQueue,n)}createPersistence(e){let t=iJ(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ii.withCacheSize(this.cacheSizeBytes):ii.DEFAULT;return new iW(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,s_(),sb(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new sd}}class aH extends aY{constructor(e,t){super(e,t,!1),this.ka=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.ka.syncEngine;this.sharedClientState instanceof sh&&(this.sharedClientState.syncEngine={Zs:aq.bind(null,t),Xs:aK.bind(null,t),eo:a$.bind(null,t),Bi:aG.bind(null,t),Ys:aO.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi(async e=>{await aU(this.ka.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){let t=s_();if(!sh.D(t))throw new D(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=iJ(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class aJ{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>aE(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aF.bind(null,this.syncEngine),await sZ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s9}createDatastore(e){let t=sE(e.databaseInfo.databaseId),n=new sI(e.databaseInfo);return new sC(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new sk(t,this.datastore,e.asyncQueue,e=>aE(this.syncEngine,e,0),sm.D()?new sm:new sf)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new am(e,t,n,r,i,s);return a&&(o.Oa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){I("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await sR(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aX(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aZ{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):_("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t){this.Ka=e,this.serializer=t,this.metadata=new C,this.buffer=new Uint8Array,this.$a=new TextDecoder("utf-8"),this.Ua().then(e=>{e&&e.ra()?this.metadata.resolve(e.na.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.na)}`))},e=>this.metadata.reject(e))}close(){return this.Ka.cancel()}async getMetadata(){return this.metadata.promise}async Ba(){return await this.getMetadata(),this.Ua()}async Ua(){let e=await this.Wa();if(null===e)return null;let t=this.$a.decode(e),n=Number(t);return isNaN(n)&&this.Ga(`length string (${t}) is not valid number`),new as(JSON.parse(await this.za(n)),e.length+n)}ja(){return this.buffer.findIndex(e=>123===e)}async Wa(){for(;0>this.ja()&&!await this.Ha(););if(0===this.buffer.length)return null;let e=this.ja();e<0&&this.Ga("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async za(e){for(;this.buffer.length<e;)await this.Ha()&&this.Ga("Reached the end of bundle when more is expected.");let t=this.$a.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ga(e){throw this.Ka.cancel(),Error(`Invalid bundle format: ${e}`)}async Ha(){let e=await this.Ka.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(e,t){let n={documents:t.map(t=>ro(e.serializer,t))},r=await e.vo("BatchGetDocuments",e.serializer.databaseId,G.emptyPath(),n,t.length),i=new Map;r.forEach(t=>{var n;let r=(n=e.serializer,"found"in t?function(e,t){t.found||T(),t.found.name,t.found.updateTime;let n=rl(e,t.found.name),r=rr(t.found.updateTime),i=t.found.createTime?rr(t.found.createTime):B.min(),s=new t_({mapValue:{fields:t.found.fields}});return tb.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){t.missing||T(),t.readTime||T();let n=rl(e,t.missing),r=rr(t.readTime);return tb.newNoDocument(n,r)}(n,t):T());i.set(r.key.toString(),r)});let s=[];return t.forEach(e=>{let t=i.get(e.toString());t||T(),s.push(t)}),s}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nP(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=Q.fromPath(t);this.mutations.push(new nO(n,this.precondition(n)))}),await async function(e,t){let n={writes:t.map(t=>rg(e.serializer,t))};await e.So("Commit",e.serializer.databaseId,G.emptyPath(),n)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=B.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new D(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?nx.exists(!1):nx.updateTime(t):nx.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new D(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nx.updateTime(t)}return nx.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Ja=n.maxAttempts,this.jo=new sT(this.asyncQueue,"transaction_retry")}Ya(){this.Ja-=1,this.Za()}Za(){this.jo.qo(async()=>{let e=new a1(this.datastore),t=this.Xa(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.eu(e)}))}).catch(e=>{this.eu(e)})})}Xa(e){try{let t=this.updateFunction(e);return!ew(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}eu(e){this.Ja>0&&this.tu(e)?(this.Ja-=1,this.asyncQueue.enqueueAndForget(()=>(this.Za(),Promise.resolve()))):this.deferred.reject(e)}tu(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nG(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=g.UNAUTHENTICATED,this.clientId=P.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{I("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(I("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s5(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function a4(e,t){e.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await i2(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function a8(e,t){e.asyncQueue.verifyOperationInProgress();let n=await a6(e);I("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>sX(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sX(t.remoteStore,n)),e._onlineComponents=t}function a3(e){return"FirebaseError"===e.name?e.code===x.FAILED_PRECONDITION||e.code===x.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function a6(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await a4(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!a3(t))throw t;b("Error using user provided cache. Falling back to memory cache: "+t),await a4(e,new aW)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await a4(e,new aW)}return e._offlineComponents}async function a9(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await a8(e,e._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await a8(e,new aJ))),e._onlineComponents}function a7(e){return a6(e).then(e=>e.persistence)}function oe(e){return a6(e).then(e=>e.localStore)}function ot(e){return a9(e).then(e=>e.remoteStore)}function on(e){return a9(e).then(e=>e.syncEngine)}async function or(e){let t=await a9(e),n=t.eventManager;return n.onListen=ag.bind(null,t.syncEngine),n.onUnlisten=av.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ap.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=aI.bind(null,t.syncEngine),n}function oi(e,t,n={}){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aZ({next:s=>{t.enqueueAndForget(()=>ae(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new D(x.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new D(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ai(tX(n.path),s,{includeMetadataChanges:!0,ta:!0});return s7(e,a)})(await or(e),e.asyncQueue,t,n,r)),r.promise}function os(e,t,n={}){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new ai(n,new aZ({next:n=>{t.enqueueAndForget(()=>ae(e,s)),n.fromCache&&"server"===r.source?i.reject(new D(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,ta:!0});return s7(e,s)})(await or(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e,t,n){if(!n)throw new D(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ou(e,t,n,r){if(!0===t&&!0===r)throw new D(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function oc(e){if(!Q.isDocumentKey(e))throw new D(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oh(e){if(Q.isDocumentKey(e))throw new D(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function od(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":T()}function of(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new D(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=od(e);throw new D(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function om(e,t){if(t<=0)throw new D(x.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new D(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new D(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ou("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oa(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class op{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new og({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new D(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new og(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new V(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new D(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oo.get(e);t&&(I("ComponentProvider","Removing Datastore"),oo.delete(e),t.terminate())}(this),Promise.resolve()}}function oy(e,t,n,r={}){var i;let s=(e=of(e,op))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&b("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=g.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new D(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new g(s)}e._authCredentials=new A(new N(t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ow(this.firestore,e,this._query)}}class ov{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oI(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ov(this.firestore,e,this._key)}}class oI extends ow{constructor(e,t,n){super(e,t,tX(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ov(this.firestore,null,new Q(e))}withConverter(e){return new oI(this.firestore,e,this._path)}}function o_(e,t,...n){if(e=(0,c.m9)(e),ol("collection","path",t),e instanceof op){let r=G.fromString(t,...n);return oh(r),new oI(e,null,r)}{if(!(e instanceof ov||e instanceof oI))throw new D(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(G.fromString(t,...n));return oh(r),new oI(e.firestore,null,r)}}function ob(e,t){if(e=of(e,op),ol("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new D(x.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ow(e,null,new tJ(G.emptyPath(),t))}function oE(e,t,...n){if(e=(0,c.m9)(e),1==arguments.length&&(t=P.newId()),ol("doc","path",t),e instanceof op){let r=G.fromString(t,...n);return oc(r),new ov(e,null,new Q(r))}{if(!(e instanceof ov||e instanceof oI))throw new D(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(G.fromString(t,...n));return oc(r),new ov(e.firestore,e instanceof oI?e.converter:null,new Q(r))}}function oT(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof ov||e instanceof oI)&&(t instanceof ov||t instanceof oI)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function oS(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof ow&&t instanceof ow&&e.firestore===t.firestore&&t8(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new sT(this,"async_queue_retry"),this.cu=()=>{let e=sb();e&&I("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=sb();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;let t=sb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});let t=new C;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(0!==this.ru.length){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!ec(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){let t=this.nu.then(()=>(this._u=!0,e().catch(e=>{let t;throw this.ou=e,this._u=!1,_("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this._u=!1,e))));return this.nu=t,t}enqueueAfterDelay(e,t,n){this.lu(),this.uu.indexOf(e)>-1&&(t=0);let r=s2.createAndSchedule(this,e,t,n,e=>this.Iu(e));return this.su.push(r),r}lu(){this.ou&&T()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(let t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{for(let t of(this.su.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.su))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){let t=this.su.indexOf(e);this.su.splice(t,1)}}function oD(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class oC{constructor(){this._progressObserver={},this._taskCompletionResolver=new C,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oN=-1;class ok extends op{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ox,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oR(this),this._firestoreClient.terminate()}}function oA(e){return e._firestoreClient||oR(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oR(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new tt(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oa(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new a5(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function oM(e,t){oz(e=of(e,ok));let n=oA(e);if(n._uninitializedComponentsProvider)throw new D(x.FAILED_PRECONDITION,"SDK cache is already specified.");b("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings(),i=new aJ;return oF(n,i,new aY(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function oV(e){oz(e=of(e,ok));let t=oA(e);if(t._uninitializedComponentsProvider)throw new D(x.FAILED_PRECONDITION,"SDK cache is already specified.");b("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let n=e._freezeSettings(),r=new aJ;return oF(t,r,new aH(r,n.cacheSizeBytes))}function oF(e,t,n){let r=new C;return e.asyncQueue.enqueue(async()=>{try{await a4(e,n),await a8(e,t),r.resolve()}catch(e){if(!a3(e))throw e;b("Error enabling indexeddb cache. Falling back to memory cache: "+e),r.reject(e)}}).then(()=>r.promise)}function oL(e){if(e._initialized&&!e._terminated)throw new D(x.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new C;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!eo.D())return Promise.resolve();await eo.delete(e+"main")}(iJ(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function oP(e){return function(e){let t=new C;return e.asyncQueue.enqueueAndForget(async()=>aD(await on(e),t)),t.promise}(oA(e=of(e,ok)))}function oO(e){var t;return(t=oA(e=of(e,ok))).asyncQueue.enqueue(async()=>{let e=await a7(t),n=await ot(t);return e.setNetworkEnabled(!0),n.v_.delete(0),sA(n)})}function oq(e){var t;return(t=oA(e=of(e,ok))).asyncQueue.enqueue(async()=>{let e=await a7(t),n=await ot(t);return e.setNetworkEnabled(!1),async function(e){e.v_.add(0),await sR(e),e.x_.set("Offline")}(n)})}function oU(e,t){let n=oA(e=of(e,ok)),r=new oC;return function(e,t,n,r){var i;let s=(i=sE(t),new a0(function(e,t){if(e instanceof Uint8Array)return aX(e,void 0);if(e instanceof ArrayBuffer)return aX(new Uint8Array(e),void 0);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?n$().encode(n):n),i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){(async function(e,t,n){try{var r;let i=await t.getMetadata();if(await function(e,t){let n=rr(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.$r.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(n)>=0)}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);n._updateProgress(al(i));let s=new ao(i,e.localStore,t.serializer),a=await t.Ba();for(;a;){let e=await s.sa(a);e&&n._updateProgress(e),a=await t.Ba()}let o=await s.complete();return await aV(e,o.aa,void 0),await (r=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>r.$r.saveBundleMetadata(e,i)),n._completeWith(o.progress),Promise.resolve(o._a)}catch(e){return b("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await on(e),s,r)})}(n,e._databaseId,t,r),r}function oB(e,t){var n;return(n=oA(e=of(e,ok))).asyncQueue.enqueue(async()=>{var e;return(e=await oe(n)).persistence.runTransaction("Get named query","readonly",n=>e.$r.getNamedQuery(n,t))}).then(t=>t?new ow(e,null,t.query):null)}function oz(e){if(e._initialized||e._terminated)throw new D(x.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oG(e5.fromBase64String(e))}catch(e){throw new D(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oG(e5.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oK{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new D(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oQ{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oj=/^__.*__$/;class oW{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nM(e,this.data,this.fieldMask,t,this.fieldTransforms):new nR(e,this.data,t,this.fieldTransforms)}}class oY{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nM(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oH(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class oJ{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new oJ(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.pu(e),r}yu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.Ru(),r}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return lo(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(0===e.length)throw this.Su("Document fields must not be empty");if(oH(this.Vu)&&oj.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class oX{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sE(e)}Cu(e,t,n,r=!1){return new oJ({Vu:e,methodName:t,Du:n,path:$.emptyPath(),gu:!1,bu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oZ(e){let t=e._freezeSettings(),n=sE(e._databaseId);return new oX(e._databaseId,!!t.ignoreUndefinedProperties,n)}function o0(e,t,n,r,i,s={}){let a,o;let l=e.Cu(s.merge||s.mergeFields?2:0,t,n,i);lr("Data must be an object, but it was:",l,r);let u=lt(r,l);if(s.merge)a=new e0(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=li(t,r,n);if(!l.contains(i))throw new D(x.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ll(e,i)||e.push(i)}a=new e0(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new oW(new t_(u),a,o)}class o1 extends o${_toFieldTransform(e){if(2!==e.Vu)throw 1===e.Vu?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof o1}}function o2(e,t,n){return new oJ({Vu:3,Du:t.settings.Du,methodName:e._methodName,gu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class o5 extends o${_toFieldTransform(e){return new nT(e.path,new np)}isEqual(e){return e instanceof o5}}class o4 extends o${constructor(e,t){super(e),this.vu=t}_toFieldTransform(e){let t=o2(this,e,!0),n=new ny(this.vu.map(e=>le(e,t)));return new nT(e.path,n)}isEqual(e){return e instanceof o4&&(0,c.vZ)(this.vu,e.vu)}}class o8 extends o${constructor(e,t){super(e),this.vu=t}_toFieldTransform(e){let t=o2(this,e,!0),n=new nv(this.vu.map(e=>le(e,t)));return new nT(e.path,n)}isEqual(e){return e instanceof o8&&(0,c.vZ)(this.vu,e.vu)}}class o3 extends o${constructor(e,t){super(e),this.Fu=t}_toFieldTransform(e){let t=new n_(e.serializer,nf(e.serializer,this.Fu));return new nT(e.path,t)}isEqual(e){return e instanceof o3&&this.Fu===e.Fu}}function o6(e,t,n,r){let i=e.Cu(1,t,n);lr("Data must be an object, but it was:",i,r);let s=[],a=t_.empty();return eQ(r,(e,r)=>{let o=la(t,e,n);r=(0,c.m9)(r);let l=i.yu(o);if(r instanceof o1)s.push(o);else{let e=le(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new oY(a,new e0(s),i.fieldTransforms)}function o9(e,t,n,r,i,s){let a=e.Cu(1,t,n),o=[li(t,r,n)],l=[i];if(s.length%2!=0)throw new D(x.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(li(t,s[e])),l.push(s[e+1]);let u=[],h=t_.empty();for(let e=o.length-1;e>=0;--e)if(!ll(u,o[e])){let t=o[e],n=l[e];n=(0,c.m9)(n);let r=a.yu(t);if(n instanceof o1)u.push(t);else{let e=le(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new oY(h,new e0(u),a.fieldTransforms)}function o7(e,t,n,r=!1){return le(n,e.Cu(r?4:3,t))}function le(e,t){if(ln(e=(0,c.m9)(e)))return lr("Unsupported field value:",t,e),lt(e,t);if(e instanceof o$)return function(e,t){if(!oH(t.Vu))throw t.Su(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Su(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&4!==t.Vu)throw t.Su("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=le(i,t.wu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nf(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=U.fromDate(e);return{timestampValue:rt(t.serializer,n)}}if(e instanceof U){let n=new U(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rt(t.serializer,n)}}if(e instanceof oQ)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oG)return{bytesValue:rn(t.serializer,e._byteString)};if(e instanceof ov){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Su(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ri(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Su(`Unsupported field value: ${od(e)}`)}(e,t)}function lt(e,t){let n={};return ej(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eQ(e,(e,r)=>{let i=le(r,t.fu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function ln(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof U||e instanceof oQ||e instanceof oG||e instanceof ov||e instanceof o$)}function lr(e,t,n){if(!ln(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=od(n);throw"an object"===r?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function li(e,t,n){if((t=(0,c.m9)(t))instanceof oK)return t._internalPath;if("string"==typeof t)return la(e,t);throw lo("Field path arguments must be of type string or ",e,!1,void 0,n)}let ls=RegExp("[~\\*/\\[\\]]");function la(e,t,n){if(t.search(ls)>=0)throw lo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oK(...t.split("."))._internalPath}catch(r){throw lo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lo(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new D(x.INVALID_ARGUMENT,o+e+l)}function ll(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ov(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lc extends lu{data(){return super.data()}}function lh(e,t){return"string"==typeof t?la(e,t):t instanceof oK?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new D(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lf{}class lm extends lf{}function lg(e,t,...n){let r=[];for(let i of(t instanceof lf&&r.push(t),function(e){let t=e.filter(e=>e instanceof lw).length,n=e.filter(e=>e instanceof lp).length;if(t>1||t>0&&n>0)throw new D(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class lp extends lm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lp(e,t,n)}_apply(e){let t=this._parse(e);return lM(e._query,t),new ow(e.firestore,e.converter,t5(e._query,t))}_parse(e){let t=oZ(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new D(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lR(a,s);let t=[];for(let n of a)t.push(lA(r,e,n));o={arrayValue:{values:t}}}else o=lA(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lR(a,s),o=o7(n,t,a,"in"===s||"not-in"===s);return tC.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ly(e,t,n){let r=lh("where",e);return lp._create(r,t,n)}class lw extends lf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lw(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:tN.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())lM(n,e),n=t5(n,e)}(e._query,t),new ow(e.firestore,e.converter,t5(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lv extends lm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lv(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new D(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new D(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tx(t,n)}(e._query,this._field,this._direction);return new ow(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tJ(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lI(e,t="asc"){let n=lh("orderBy",e);return lv._create(n,t)}class l_ extends lm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new l_(e,t,n)}_apply(e){return new ow(e.firestore,e.converter,t4(e._query,this._limit,this._limitType))}}function lb(e){return om("limit",e),l_._create("limit",e,"F")}function lE(e){return om("limitToLast",e),l_._create("limitToLast",e,"L")}class lT extends lm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lT(e,t,n)}_apply(e){var t;let n=lk(e,this.type,this._docOrFields,this._inclusive);return new ow(e.firestore,e.converter,new tJ((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt))}}function lS(...e){return lT._create("startAt",e,!0)}function lx(...e){return lT._create("startAfter",e,!1)}class lD extends lm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lD(e,t,n)}_apply(e){var t;let n=lk(e,this.type,this._docOrFields,this._inclusive);return new ow(e.firestore,e.converter,new tJ((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n))}}function lC(...e){return lD._create("endBefore",e,!1)}function lN(...e){return lD._create("endAt",e,!0)}function lk(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof lu)return function(e,t,n,r,i){if(!r)throw new D(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of t1(e))if(n.field.isKeyField())s.push(th(t,r.key));else{let e=r.data.field(n.field);if(e9(e))throw new D(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new D(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new tE(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=oZ(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new D(x.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new D(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!t0(e)&&-1!==l.indexOf("/"))throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(G.fromString(l));if(!Q.isDocumentKey(n))throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new Q(n);o.push(th(t,i))}else{let e=o7(n,r,l);o.push(e)}}return new tE(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function lA(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new D(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t0(t)&&-1!==n.indexOf("/"))throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(G.fromString(n));if(!Q.isDocumentKey(r))throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return th(e,new Q(r))}if(n instanceof ov)return th(e,n._key);throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${od(n)}.`)}function lR(e,t){if(!Array.isArray(e)||0===e.length)throw new D(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lM(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new D(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class lV{convertValue(e,t="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e3(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(e6(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eQ(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oQ(e3(e.latitude),e3(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=e7(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(te(e));default:return null}}convertTimestamp(e){let t=e8(e);return new U(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=G.fromString(e);rb(n)||T();let r=new tn(n.get(1),n.get(3)),i=new Q(n.popFirst(5));return r.isEqual(t)||_(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class lL extends lV{constructor(e){super(),this.firestore=e}convertBytes(e){return new oG(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ov(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lO extends lu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lq(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(lh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lq extends lO{data(e={}){return super.data(e)}}class lU{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lP(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lq(this._firestore,this._userDataWriter,n.key,n,new lP(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lq(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lP(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lq(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lP(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lB(e,t){return e instanceof lO&&t instanceof lO?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lU&&t instanceof lU&&e._firestore===t._firestore&&oS(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lz(e){e=of(e,ov);let t=of(e.firestore,ok);return oi(oA(t),e._key).then(n=>l2(t,e,n))}class lG extends lV{constructor(e){super(),this.firestore=e}convertBytes(e){return new oG(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ov(this.firestore,null,t)}}function lK(e){e=of(e,ov);let t=of(e.firestore,ok),n=oA(t),r=new lG(t);return(function(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t));r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new D(x.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){let e=s5(r,`Failed to get document '${t} from cache`);n.reject(e)}})(await oe(e),t,n)),n.promise})(n,e._key).then(n=>new lO(t,r,e._key,n,new lP(null!==n&&n.hasLocalMutations,!0),e.converter))}function l$(e){e=of(e,ov);let t=of(e.firestore,ok);return oi(oA(t),e._key,{source:"server"}).then(n=>l2(t,e,n))}function lQ(e){e=of(e,ow);let t=of(e.firestore,ok),n=oA(t),r=new lG(t);return ld(e._query),os(n,e._query).then(n=>new lU(t,r,e,n))}function lj(e){e=of(e,ow);let t=of(e.firestore,ok),n=oA(t),r=new lG(t);return(function(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await i6(e,t,!0),i=new ah(t,r.hs),s=i.Ta(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(r){let e=s5(r,`Failed to execute query '${t} against cache`);n.reject(e)}})(await oe(e),t,n)),n.promise})(n,e._query).then(n=>new lU(t,r,e,n))}function lW(e){e=of(e,ow);let t=of(e.firestore,ok),n=oA(t),r=new lG(t);return os(n,e._query,{source:"server"}).then(n=>new lU(t,r,e,n))}function lY(e,t,n){e=of(e,ov);let r=of(e.firestore,ok),i=lF(e.converter,t,n);return l1(r,[o0(oZ(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,nx.none())])}function lH(e,t,n,...r){e=of(e,ov);let i=of(e.firestore,ok),s=oZ(i);return l1(i,[("string"==typeof(t=(0,c.m9)(t))||t instanceof oK?o9(s,"updateDoc",e._key,t,n,r):o6(s,"updateDoc",e._key,t)).toMutation(e._key,nx.exists(!0))])}function lJ(e){return l1(of(e.firestore,ok),[new nP(e._key,nx.none())])}function lX(e,t){let n=of(e.firestore,ok),r=oE(e),i=lF(e.converter,t);return l1(n,[o0(oZ(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,nx.exists(!1))]).then(()=>r)}function lZ(e,...t){var n,r,i;let s,a,o;e=(0,c.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||oD(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(oD(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof ov)a=of(e.firestore,ok),o=tX(e._key.path),s={next:n=>{t[u]&&t[u](l2(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=of(e,ow);a=of(n.firestore,ok),o=n._query;let r=new lG(a);s={next:e=>{t[u]&&t[u](new lU(a,r,n,e))},error:t[u+1],complete:t[u+2]},ld(e._query)}return function(e,t,n,r){let i=new aZ(r),s=new ai(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>s7(await or(e),s)),()=>{i.Qa(),e.asyncQueue.enqueueAndForget(async()=>ae(await or(e),s))}}(oA(a),o,h,s)}function l0(e,t){return function(e,t){let n=new aZ(t);return e.asyncQueue.enqueueAndForget(async()=>{(await or(e)).W_.add(n),n.next()}),()=>{n.Qa(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.W_.delete(t)})(await or(e),n))}}(oA(e=of(e,ok)),oD(t)?t:{next:t})}function l1(e,t){return function(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>a_(await on(e),t,n)),n.promise}(oA(e),t)}function l2(e,t,n){let r=n.docs.get(t._key),i=new lG(e);return new lO(e,i,t._key,r,new lP(n.hasPendingWrites,n.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l5={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oZ(e)}set(e,t,n){this._verifyNotCommitted();let r=l8(e,this._firestore),i=lF(r.converter,t,n),s=o0(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,nx.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=l8(e,this._firestore);return i="string"==typeof(t=(0,c.m9)(t))||t instanceof oK?o9(this._dataReader,"WriteBatch.update",s._key,t,n,r):o6(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nx.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=l8(e,this._firestore);return this._mutations=this._mutations.concat(new nP(t._key,nx.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function l8(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new D(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oZ(e)}get(e){let t=l8(e,this._firestore),n=new lL(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return T();let r=e[0];if(r.isFoundDocument())return new lu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new lu(this._firestore,n,t._key,null,t.converter);throw T()})}set(e,t,n){let r=l8(e,this._firestore),i=lF(r.converter,t,n),s=o0(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i;let s=l8(e,this._firestore);return i="string"==typeof(t=(0,c.m9)(t))||t instanceof oK?o9(this._dataReader,"Transaction.update",s._key,t,n,r):o6(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=l8(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=l8(e,this._firestore),n=new lG(this._firestore);return super.get(e).then(e=>new lO(this._firestore,n,t._key,e._document,new lP(!1,!1),t.converter))}}function l6(e,t,n){e=of(e,ok);let r=Object.assign(Object.assign({},l5),n);return!function(e){if(e.maxAttempts<1)throw new D(x.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>{let i=await a9(e).then(e=>e.datastore);new a2(e.asyncQueue,i,n,t,r).Ya()}),r.promise}(oA(e),n=>t(new l3(e,n)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l9(){return new o1("deleteField")}function l7(){return new o5("serverTimestamp")}function ue(...e){return new o4("arrayUnion",e)}function ut(...e){return new o8("arrayRemove",e)}function un(e){return new o3("increment",e)}new WeakMap,function(e=!0){p=o.SDK_VERSION,(0,o._registerComponent)(new l.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new ok(new R(t.getProvider("auth-internal")),new L(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new D(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,o.registerVersion)(m,"4.6.0",void 0),(0,o.registerVersion)(m,"4.6.0","esm2017")}()}}]);