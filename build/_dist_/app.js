function it(s){for(var t=s.split(/([#.])/),e="",i="",o=[],n=0;n<t.length;n++){var r=t[n];r==="#"?i=t[++n]:r==="."?o.push(t[++n]):r.length&&(e=r)}return{tag:e||"div",id:i,className:o.join(" ")}}function ot(s,t){var e=it(s),i=e.tag,o=e.id,n=e.className,r=t?document.createElementNS(t,i):document.createElement(i);return o&&(r.id=o),n&&(t?r.setAttribute("class",n):r.className=n),r}function P(s,t){var e=m(s),i=m(t);return t===i&&i.__redom_view&&(t=i.__redom_view),i.parentNode&&(M(t,i,e),e.removeChild(i)),t}function M(s,t,e){var i=t.__redom_lifecycle;if(V(i)){t.__redom_lifecycle={};return}var o=e;for(t.__redom_mounted&&b(t,"onunmount");o;){var n=o.__redom_lifecycle||{};for(var r in i)n[r]&&(n[r]-=i[r]);V(n)&&(o.__redom_lifecycle=null),o=o.parentNode}}function V(s){if(s==null)return!0;for(var t in s)if(s[t])return!1;return!0}var nt=["onmount","onremount","onunmount"],rt=typeof window!="undefined"&&"ShadowRoot"in window;function u(s,t,e,i){var o=m(s),n=m(t);t===n&&n.__redom_view&&(t=n.__redom_view),t!==n&&(n.__redom_view=t);var r=n.__redom_mounted,h=n.parentNode;return r&&h!==o&&M(t,n,h),e!=null?i?o.replaceChild(n,m(e)):o.insertBefore(n,m(e)):o.appendChild(n),ht(t,n,o,h),t}function b(s,t){t==="onmount"||t==="onremount"?s.__redom_mounted=!0:t==="onunmount"&&(s.__redom_mounted=!1);var e=s.__redom_lifecycle;if(!!e){var i=s.__redom_view,o=0;i&&i[t]&&i[t]();for(var n in e)n&&o++;if(o)for(var r=s.firstChild;r;){var h=r.nextSibling;b(r,t),r=h}}}function ht(s,t,e,i){for(var o=t.__redom_lifecycle||(t.__redom_lifecycle={}),n=e===i,r=!1,h=0,c=nt;h<c.length;h+=1){var p=c[h];n||s!==t&&p in s&&(o[p]=(o[p]||0)+1),o[p]&&(r=!0)}if(!r){t.__redom_lifecycle={};return}var a=e,v=!1;for((n||a&&a.__redom_mounted)&&(b(t,n?"onremount":"onmount"),v=!0);a;){var l=a.parentNode,w=a.__redom_lifecycle||(a.__redom_lifecycle={});for(var f in o)w[f]=(w[f]||0)+o[f];if(v)break;(a.nodeType===Node.DOCUMENT_NODE||rt&&a instanceof ShadowRoot||l&&l.__redom_mounted)&&(b(a,n?"onremount":"onmount"),v=!0),a=l}}function at(s,t,e){var i=m(s);if(typeof t=="object")for(var o in t)z(i,o,t[o]);else z(i,t,e)}function z(s,t,e){e==null?s.style[t]="":s.style[t]=e}var F="http://www.w3.org/1999/xlink";function $(s,t,e,i){var o=m(s),n=typeof t=="object";if(n)for(var r in t)$(o,r,t[r],i);else{var h=o instanceof SVGElement,c=typeof e=="function";if(t==="style"&&typeof e=="object")at(o,e);else if(h&&c)o[t]=e;else if(t==="dataset")G(o,e);else if(!h&&(t in o||c)&&t!=="list")o[t]=e;else{if(h&&t==="xlink"){q(o,e);return}i&&t==="class"&&(e=o.className+" "+e),e==null?o.removeAttribute(t):o.setAttribute(t,e)}}}function q(s,t,e){if(typeof t=="object")for(var i in t)q(s,i,t[i]);else e!=null?s.setAttributeNS(F,t,e):s.removeAttributeNS(F,t,e)}function G(s,t,e){if(typeof t=="object")for(var i in t)G(s,i,t[i]);else e!=null?s.dataset[t]=e:delete s.dataset[t]}function lt(s){return document.createTextNode(s??"")}function K(s,t,e){for(var i=0,o=t;i<o.length;i+=1){var n=o[i];if(!(n!==0&&!n)){var r=typeof n;r==="function"?n(s):r==="string"||r==="number"?s.appendChild(lt(n)):E(m(n))?u(s,n):n.length?K(s,n,e):r==="object"&&$(s,n,null,e)}}}function ct(s){return typeof s=="string"?x(s):m(s)}function m(s){return s.nodeType&&s||!s.el&&s||m(s.el)}function E(s){return s&&s.nodeType}var Q={};function x(s){for(var t=[],e=arguments.length-1;e-- >0;)t[e]=arguments[e+1];var i,o=typeof s;if(o==="string")i=W(s).cloneNode(!1);else if(E(s))i=s.cloneNode(!1);else if(o==="function"){var n=s;i=new(Function.prototype.bind.apply(n,[null].concat(t)))}else throw new Error("At least one argument required");return K(m(i),t,!0),i}var d=x;x.extend=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];var o=W(t);return x.bind.apply(x,[this,o].concat(e))};function W(s){return Q[s]||(Q[s]=ot(s))}function B(s){for(var t=[],e=arguments.length-1;e-- >0;)t[e]=arguments[e+1];for(var i=m(s),o=X(s,t,i.firstChild);o;){var n=o.nextSibling;P(s,o),o=n}}function X(s,t,e){for(var i=e,o=new Array(t.length),n=0;n<t.length;n++)o[n]=t[n]&&m(t[n]);for(var r=0;r<t.length;r++){var h=t[r];if(!!h){var c=o[r];if(c===i){i=i.nextSibling;continue}if(E(c)){var p=i&&i.nextSibling,a=h.__redom_index!=null,v=a&&p===o[r+1];u(s,h,i,v),v&&(i=p);continue}h.length!=null&&(i=X(s,h,i))}}return i}var H=function(t,e,i){this.View=t,this.initData=i,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],e!=null&&(this.key=typeof e=="function"?e:ut(e))};H.prototype.update=function(t,e){for(var i=this,o=i.View,n=i.key,r=i.initData,h=n!=null,c=this.lookup,p={},a=new Array(t.length),v=this.views,l=0;l<t.length;l++){var w=t[l],f=void 0;if(h){var y=n(w);f=c[y]||new o(r,w,l,t),p[y]=f,f.__redom_id=y}else f=v[l]||new o(r,w,l,t);f.update&&f.update(w,l,t,e);var st=m(f.el);st.__redom_view=f,a[l]=f}this.oldViews=v,this.views=a,this.oldLookup=c,this.lookup=p};function ut(s){return function(t){return t[s]}}var C=function(t,e,i,o){this.View=e,this.initData=o,this.views=[],this.pool=new H(e,i,o),this.el=ct(t),this.keySet=i!=null};C.prototype.update=function(t,e){t===void 0&&(t=[]);var i=this,o=i.keySet,n=this.views;this.pool.update(t,e);var r=this.pool,h=r.views,c=r.lookup;if(o)for(var p=0;p<n.length;p++){var a=n[p],v=a.__redom_id;c[v]==null&&(a.__redom_index=null,P(this,a))}for(var l=0;l<h.length;l++){var w=h[l];w.__redom_index=l}B(this,h),o&&(this.lookup=c),this.views=h};C.extend=function(t,e,i,o){return C.bind(C,t,e,i,o)};var J;(function(s){s[s.noDevice=0]="noDevice",s[s.requestingDevice=1]="requestingDevice",s[s.idle=2]="idle",s[s.starting=3]="starting",s[s.recording=4]="recording",s[s.closing=5]="closing",s[s.error=6]="error"})(J||(J={}));var R=class{constructor(t,e){this.handler=t,this.recordLength=e,this.el=d("button","Enable input device"),this.recordBtnEvent=this.recordBtnEvent.bind(this),this.recordBtnDown=this.recordBtnDown.bind(this),this.recordBtnUp=this.recordBtnUp.bind(this),this.stopRecording=this.stopRecording.bind(this),this.setError=this.setError.bind(this),this.setRecordingReady=this.setRecordingReady.bind(this),this.el.addEventListener("click",this.recordBtnEvent),this.state=0,this.mediaTracks=[],this.recordingTimeout=0}reset(){this.error=void 0,this.state=0,this.el.removeEventListener("mousedown",this.recordBtnDown),this.el.removeEventListener("touchstart",this.recordBtnDown),this.el.removeEventListener("mouseup",this.recordBtnUp),this.el.removeEventListener("mouseleave",this.recordBtnUp),this.el.removeEventListener("touchend",this.recordBtnUp),this.handler.reloadContext()}setError(t){this.state=6,this.error=t,this.enable("Reload context"),this.mediaTracks.forEach(e=>e.stop()),this.mediaTracks.length=0,this.handler.onError()}setRecordingReady(){this.state=2,this.enable("Hold down to record")}requestDevice(){navigator.mediaDevices.getUserMedia({audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1},video:!1}).then(t=>(this.mediaTracks.push(...t.getAudioTracks()),this.handler.handleStream(t))).then(this.setRecordingReady).catch(this.setError)}disable(t){this.el.textContent=t,this.el.disabled=!0}enable(t){this.el.textContent=t,this.el.disabled=!1}stopRecording(){clearTimeout(this.recordingTimeout),this.state===4&&(this.state=5,this.disable("Stopping..."),this.handler.stopRecording().then(this.setRecordingReady).catch(this.setError))}recordBtnDown(t){t.preventDefault(),t.stopPropagation(),this.state===2&&(this.state=3,this.disable("Starting..."),this.handler.startRecording().then(()=>{this.enable("Release to stop recording"),this.state=4,this.recordingTimeout=window.setTimeout(this.stopRecording,this.recordLength*1e3)}).catch(this.setError))}recordBtnUp(t){t.preventDefault(),t.stopPropagation(),this.stopRecording()}recordBtnEvent(){switch(this.state){case 0:this.state=1,this.disable("Loading..."),this.requestDevice(),this.el.addEventListener("mousedown",this.recordBtnDown),this.el.addEventListener("touchstart",this.recordBtnDown),this.el.addEventListener("mouseup",this.recordBtnUp),this.el.addEventListener("mouseleave",this.recordBtnUp),this.el.addEventListener("touchend",this.recordBtnUp);break;case 6:this.reset();break}}getError(){return this.error}};var Y;(function(s){s[s.preparing=0]="preparing",s[s.recording=1]="recording",s[s.idle=2]="idle"})(Y||(Y={}));var k=class{constructor(t,e,i,o){this.sampleRate=t,this.maxLength=e,this.chunkSize=i,this.handler=o,this.state=2,this.bufferSize=this.sampleRate*this.maxLength,this.recordingLength=0,this.buffer=new Float32Array(this.bufferSize),this.onChunk=this.onChunk.bind(this),this.prepCounter=0}record(){this.isRecording()||(this.recordingLength=0,this.state=1)}onChunk(t){if(this.state===0){this.prepCounter>10?(this.state=1,this.prepCounter=0):this.prepCounter+=1;return}t[0]===0&&t[1]===0&&t[2]===0||(this.buffer.set(t,this.recordingLength),this.recordingLength+=t.length)}stopRecord(){!this.isRecording()||(this.state=2,this.recordingLength-=this.chunkSize,this.handler.onRecorded(this.buffer.subarray(0,this.recordingLength)))}isRecording(){return this.state===1||this.state===0}};var Z;(function(s){s[s.notStarted=0]="notStarted",s[s.paused=1]="paused",s[s.playing=2]="playing"})(Z||(Z={}));var N=class{constructor(t,e){this.core=t,this.channels=e,this.samples=[]}joinEnds(t){let e=~~(this.core.context.sampleRate*.05);for(let i=0;i<e;i++)t[i]=t[i]*i/e,t[t.length-1-i]=t[t.length-1-i]*i/e}create(t){this.joinEnds(t);let e=this.core.context.createBuffer(this.channels,t.length,this.core.context.sampleRate),i=this.core.context.createBufferSource();e.copyToChannel(t,0),i.buffer=e,i.loop=!0;let o=this.samples.length;this.samples.push({label:`Sample ${new Date().toUTCString()}`,node:i,state:0}),this.core.onSampleAdd(o)}play(t){if(this.samples[t].state===2)return;let e=this.samples[t].state===0;this.samples[t].state=2,e&&this.samples[t].node.start()}pause(t){this.samples[t].state!==1&&(this.samples[t].state=1)}setLabel(t,e){this.samples[t].label=e,this.core.onLabelChange(t)}setPlaybackSpeed(t,e){this.samples[t].node.playbackRate.linearRampToValueAtTime(e,this.core.context.currentTime+10)}node(t){return this.samples[t].node}label(t){return this.samples[t].label}};var L=class{constructor(t){this.handler=t,this.el=d("div.sampleSelect"),this.handleClick=this.handleClick.bind(this),this.elements=[],this.selectedIndex=-1}handleClick(t){t!==this.selectedIndex&&(this.selectedIndex>-1&&this.elements[this.selectedIndex].classList.remove("selected"),this.elements[t].classList.add("selected"),this.handler.onSampleSelected(t,this.selectedIndex>-1?this.selectedIndex:void 0),this.selectedIndex=t)}add(t,e){let i=d("div.sampleItem",e);i.addEventListener("click",o=>{o.preventDefault(),this.handleClick(t)}),this.elements.push(i),u(this.el,i)}};var T=class{constructor(t,e,i){this.id=t,this.inputNode=e,this.outputNode=i,this.isExt=!0}isExtension(t){return"isExt"in t&&t.isExt}setInput(t){if(this.inputNode)throw Error(`Input node already set for ${this.id}`);this.inputNode=t}setOutput(t){if(this.outputNode)throw Error(`Output node already set for ${this.id}`);this.outputNode=t}input(){if(!this.inputNode)throw Error(`No input node set for ${this.id}`);return this.inputNode}output(){if(!this.outputNode)throw Error(`No output node set for ${this.id}`);return this.outputNode}connectInput(t){this.isExtension(t)?t.output().connect(this.input()):t.connect(this.input())}disconnectInput(t){this.isExtension(t)?t.output().disconnect(this.input()):t.disconnect(this.input())}connectOutput(t){this.isExtension(t)?this.output().connect(t.input()):this.output().connect(t)}disconnectOutput(t){this.isExtension(t)?this.output().disconnect(t.input()):this.output().disconnect(t)}};var g=class extends T{constructor(t,e,i="min"){super(t);this.core=e;let o=typeof i=="number"?i:i==="max"?101:i==="mid"?51:1;this.el=d("input",{type:"range",value:o,min:1,max:101,step:1e-4}),this.debounceOnChange=this.debounceOnChange.bind(this),this.el.addEventListener("input",this.debounceOnChange),this.debounce=0,this.debounceCount=0}logRange(t,e,i,o){if(i<=e)return e;let n=1,r=101,h=e<0&&i<0,c=h?e*-1+1:e<=0?-1*e+1:e+1,p=h?i*-1+1:e<=0?i+c:i+1,a=Math.log(c),l=(Math.log(p)-a)/(r-n);return o?(Math.log(t/(h?-1:1)+(h||e>0?1:c))-a)/l+n:(Math.exp(a+l*(t-n))-(h||e>0?1:c))*(h?-1:1)}debounceOnChange(){this.debounceCount+=1,clearTimeout(this.debounce),this.debounceCount>=50&&(this.debounceCount=0,this.onChange(parseFloat(this.el.value))),this.debounce=window.setTimeout(()=>this.onChange(parseFloat(this.el.value)),30)}onChange(t){throw Error(`Override on change, output value is ${t}`)}ramp(t,e){t.linearRampToValueAtTime(e,this.core.context.currentTime+.5)}};var I=class extends g{constructor(t){super("Compressor",t);this.gain=this.core.context.createGain(),this.node=this.core.context.createDynamicsCompressor(),this.gain.connect(this.node),this.setInput(this.gain),this.setOutput(this.node),this.gain.gain.setValueAtTime(-1,this.core.context.currentTime),this.node.threshold.setValueAtTime(-10,this.core.context.currentTime),this.node.knee.setValueAtTime(4,this.core.context.currentTime),this.node.ratio.setValueAtTime(2,this.core.context.currentTime),this.node.attack.setValueAtTime(0,this.core.context.currentTime),this.node.release.setValueAtTime(.1,this.core.context.currentTime)}onChange(t){this.ramp(this.gain.gain,this.logRange(t,-1,-1)),this.ramp(this.node.threshold,0-this.logRange(t,10,100)),this.ramp(this.node.knee,this.logRange(t,4,40)),this.ramp(this.node.ratio,this.logRange(t,2,20)),this.ramp(this.node.release,Math.pow(20,-1*this.logRange(t,1,1e3)))}};var j=class extends g{constructor(t){super("Distortion",t);this.node=this.core.context.createWaveShaper(),this.setInput(this.node),this.setOutput(this.node),this.node.oversample="4x",this.curveData=new Float32Array(this.core.context.sampleRate),this.curve(0),this.node.curve=this.curveData}curve(t){let e=typeof t=="number"?t:50,i=Math.PI/180,o=0;for(let n=0;n<this.core.context.sampleRate;++n)o=n*2/this.core.context.sampleRate-1,this.curveData[n]=(10+e)*o*50*i/(Math.PI+e*Math.abs(o))}onChange(t){this.curve(~~this.logRange(t,0,1e4)),this.node.curve=this.curveData}};var S=class extends g{constructor(t){super("Lowpass",t);this.node=this.core.context.createBiquadFilter(),this.setInput(this.node),this.setOutput(this.node),this.node.frequency.value=6e3,this.node.type="lowpass"}onChange(t){this.ramp(this.node.frequency,6e3-this.logRange(t,0,5950*.005)*200)}};var tt;(function(s){s[s.playing=0]="playing",s[s.paused=1]="paused"})(tt||(tt={}));var D=class{constructor(t){this.handler=t,this.el=d("button","Play audio"),this.state=1,this.playBtnEvent=this.playBtnEvent.bind(this),this.el.addEventListener("click",this.playBtnEvent)}playBtnEvent(){switch(this.state){case 1:this.state=0,this.el.textContent="Pause audio",this.handler.onPlay();break;case 0:this.pause();break}}pause(){this.state!==1&&(this.state=1,this.el.textContent="Play audio",this.handler.onPause())}};var A=class extends g{constructor(t,e){super("Speed",t);this.node=e,this.setInput(this.node),this.setOutput(this.node),this.el.value=`${this.logRange(1,.1,3,!0)}`}onChange(t){this.ramp(this.node.playbackRate,this.logRange(t,.1,3))}};var U=class extends g{constructor(t){super("Volume",t,"mid");this.node=this.core.context.createGain(),this.setInput(this.node),this.setOutput(this.node),this.node.gain.setValueAtTime(this.logRange(51,0,3),this.core.context.currentTime)}onChange(t){this.ramp(this.node.gain,this.logRange(t,0,3))}};var et;(function(s){s[s.visible=0]="visible",s[s.hidden=1]="hidden"})(et||(et={}));var O=class{constructor(t,e,i){this.core=t,this.bufferNode=e,this.nodeIndex=i,this.el=d("div.hidden"),this.playBtn=new D(this),this.volumeCtrl=new U(this.core),this.volumeCtrl.connectOutput(this.core.context.destination),this.lowpassCtrl=new S(this.core),this.lowpassCtrl.connectOutput(this.volumeCtrl),this.distortionCtrl=new j(this.core),this.distortionCtrl.connectOutput(this.lowpassCtrl),this.compressorCtrl=new I(this.core),this.compressorCtrl.connectOutput(this.distortionCtrl),this.speedCtrl=new A(this.core,this.bufferNode),u(this.el,this.wrap(this.playBtn)),u(this.el,this.wrap(this.compressorCtrl,"Slide to control compressor")),u(this.el,this.wrap(this.distortionCtrl,"Slide to control distortion")),u(this.el,this.wrap(this.lowpassCtrl,"Slide to control filter")),u(this.el,this.wrap(this.volumeCtrl,"Slide to control volume")),u(this.el,this.wrap(this.speedCtrl,"Slide to control speed")),this.state=1}wrap(t,e){let i=d("div");if(e){let o=d("p",e);u(i,o)}return u(i,t),i}show(){this.state!==0&&(this.state=0,this.el.classList.remove("hidden"))}hide(){this.state!==1&&(this.state=1,this.el.classList.add("hidden"))}async onPlay(){this.compressorCtrl.connectInput(this.bufferNode),this.core.onPlaySample(this.nodeIndex)}async onPause(){this.compressorCtrl.disconnectInput(this.bufferNode),this.core.onPauseSample(this.nodeIndex)}};var _=class{static init(){new _}constructor(){this.baseEl=this.getElOrThrow("#root");let t=window.AudioContext||window.webkitAudioContext;this.context=new t,this.context.suspend();let e=10,i=4096;this.recordBtn=new R(this,e),this.recordBuff=new k(this.context.sampleRate,e,i,this),this.processorNode=this.context.createScriptProcessor(i,1,1),this.processChunk=this.processChunk.bind(this),this.processorNode.addEventListener("audioprocess",this.processChunk),this.sampleBank=new N(this,1),this.sampleBlocks=[],this.samplesMount=d("div.samplesMount"),this.sampleList=new L(this),this.setUI()}getElOrThrow(t){let e=document.querySelector(t);if(!e)throw Error(`Couldn't find element ${t}`);return e}wrap(t,e,i){let o=d(`div${i?`.${i}`:""}`);if(e){let n=d("p",e);u(o,n)}return Array.isArray(t)?B(o,t):u(o,t),o}setUI(){u(this.baseEl,this.wrap([this.wrap(this.recordBtn),this.samplesMount],void 0,"controls")),u(this.baseEl,this.sampleList)}processChunk(t){this.recordBuff.isRecording()&&this.recordBuff.onChunk(t.inputBuffer.getChannelData(0))}onRecorded(t){this.sampleBank.create(t)}async handleStream(t){this.context.resume(),this.sourceNode=this.context.createMediaStreamSource(t)}onError(){this.context.suspend(),console.error(this.recordBtn.getError())}async startRecording(){this.sourceNode?.connect(this.processorNode),this.processorNode.connect(this.context.destination),this.recordBuff.record()}async stopRecording(){this.recordBuff.stopRecord(),this.processorNode.disconnect(this.context.destination),this.sourceNode?.disconnect(this.processorNode)}async reloadContext(){this.context.resume()}async onPlaySample(t){this.sampleBank.play(t)}async onPauseSample(t){this.sampleBank.pause(t)}onSampleAdd(t){let e=new O(this,this.sampleBank.node(t),t);this.sampleBlocks.push(e),u(this.samplesMount,e),this.sampleList.add(t,this.sampleBank.label(t))}onLabelChange(){}onSampleSelected(t,e){e!==void 0&&this.sampleBlocks[e].hide(),this.sampleBlocks[t].show()}};_.init();
