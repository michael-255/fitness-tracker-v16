import{at as Ot,T as rt,r as O,M as S,X as ge,b1 as _t,aQ as Ft,aw as Et,ax as Bt,av as st,aL as G,P as C,G as Ne,a5 as $e,a7 as ct,ab as dt,a8 as ft,S as Lt,a6 as Ht,a9 as Rt,b2 as Tt,k as Pt,ad as Pe,b as Dt,aD as Ae,aB as Nt,a2 as me,aC as $t,a3 as Se,b3 as Qt,ac as nt,U as jt,b4 as Kt}from"./index.04684acb.js";import{Q as Ut}from"./QChip.82e66fa8.js";import{Q as Wt,a as Xt}from"./QItemSection.52d30a96.js";import{Q as Yt}from"./QMenu.1ac4d333.js";import{n as ot}from"./format.3e32b8d9.js";let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const $=1e3,Gt=["start","center","end","start-force","center-force","end-force"],vt=Array.prototype.filter,Jt=window.getComputedStyle(document.body).overflowAnchor===void 0?Ot:function(e,r){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const i=e.children||[];vt.call(i,I=>I.dataset&&I.dataset.qVsAnchor!==void 0).forEach(I=>{delete I.dataset.qVsAnchor});const w=i[r];w&&w.dataset&&(w.dataset.qVsAnchor="")}))};function he(e,r){return e+r}function De(e,r,i,w,I,a,_,b){const h=e===window?document.scrollingElement||document.documentElement:e,F=I===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-_-b,scrollMaxSize:0,offsetStart:-_,offsetEnd:-b};if(I===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=h.scrollLeft,c.scrollViewSize+=h.clientWidth),c.scrollMaxSize=h.scrollWidth,a===!0&&(c.scrollStart=(Ee===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=h.scrollTop,c.scrollViewSize+=h.clientHeight),c.scrollMaxSize=h.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=k[F]);if(w!==null)for(let k=w.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=k[F]);if(r!==e){const k=h.getBoundingClientRect(),z=r.getBoundingClientRect();I===!0?(c.offsetStart+=z.left-k.left,c.offsetEnd-=z.width):(c.offsetStart+=z.top-k.top,c.offsetEnd-=z.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function at(e,r,i,w){r==="end"&&(r=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(w===!0&&(r=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):i===!0?(w===!0&&(r=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function Ie(e,r,i,w){if(i>=w)return 0;const I=r.length,a=Math.floor(i/$),_=Math.floor((w-1)/$)+1;let b=e.slice(a,_).reduce(he,0);return i%$!==0&&(b-=r.slice(a*$,i).reduce(he,0)),w%$!==0&&w!==I&&(b-=r.slice(w,_*$).reduce(he,0)),b}const mt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},cl=Object.keys(mt),Zt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...mt};function el({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:i,virtualScrollItemSizeComputed:w}){const I=rt(),{props:a,emit:_,proxy:b}=I,{$q:h}=b;let F,c,k,z=[],y;const P=O(0),H=O(0),K=O({}),X=O(null),T=O(null),U=O(null),q=O({from:0,to:0}),M=S(()=>a.tableColspan!==void 0?a.tableColspan:100);w===void 0&&(w=S(()=>a.virtualScrollItemSize));const W=S(()=>w.value+";"+a.virtualScrollHorizontal),ye=S(()=>W.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(W,ue);function ue(){Z(c,!0)}function be(n){Z(n===void 0?c:n)}function J(n,s){const f=r();if(f==null||f.nodeType===8)return;const x=De(f,i(),X.value,T.value,a.virtualScrollHorizontal,h.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);k!==x.scrollViewSize&&Y(x.scrollViewSize),ne(f,x,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,Gt.indexOf(s)>-1?s:c>-1&&n>c?"end":"start")}function Q(){const n=r();if(n==null||n.nodeType===8)return;const s=De(n,i(),X.value,T.value,a.virtualScrollHorizontal,h.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,x=s.scrollMaxSize-s.offsetStart-s.offsetEnd-H.value;if(F===s.scrollStart)return;if(s.scrollMaxSize<=0){ne(n,s,0,0);return}k!==s.scrollViewSize&&Y(s.scrollViewSize),we(q.value.from);const E=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(y[f],s.scrollViewSize/2));if(E>0&&Math.ceil(s.scrollStart)>=E){ne(n,s,f,s.scrollMaxSize-s.offsetEnd-z.reduce(he,0));return}let g=0,v=s.scrollStart-s.offsetStart,L=v;if(v<=x&&v+s.scrollViewSize>=P.value)v-=P.value,g=q.value.from,L=v;else for(let m=0;v>=z[m]&&g<f;m++)v-=z[m],g+=$;for(;v>0&&g<f;)v-=y[g],v>-s.scrollViewSize?(g++,L=v):L=y[g]+v;ne(n,s,g,L)}function ne(n,s,f,x,E){const g=typeof E=="string"&&E.indexOf("-force")>-1,v=g===!0?E.replace("-force",""):E,L=v!==void 0?v:"start";let m=Math.max(0,f-K.value[L]),D=m+K.value.total;D>e.value&&(D=e.value,m=Math.max(0,D-K.value.total)),F=s.scrollStart;const ee=m!==q.value.from||D!==q.value.to;if(ee===!1&&v===void 0){Ce(f);return}const{activeElement:pe}=document,j=U.value;ee===!0&&j!==null&&j!==pe&&j.contains(pe)===!0&&(j.addEventListener("focusout",Ve),setTimeout(()=>{j!==null&&j.removeEventListener("focusout",Ve)})),Jt(j,f-m);const Me=v!==void 0?y.slice(m,f).reduce(he,0):0;if(ee===!0){const ae=D>=q.value.from&&m<=q.value.to?q.value.to:D;q.value={from:m,to:ae},P.value=Ie(z,y,0,m),H.value=Ie(z,y,D,e.value),requestAnimationFrame(()=>{q.value.to!==D&&F===s.scrollStart&&(q.value={from:q.value.from,to:D},H.value=Ie(z,y,D,e.value))})}requestAnimationFrame(()=>{if(F!==s.scrollStart)return;ee===!0&&we(m);const ae=y.slice(m,f).reduce(he,0),ie=ae+s.offsetStart+P.value,qe=ie+y[f];let xe=ie+x;if(v!==void 0){const N=ae-Me,B=s.scrollStart+N;xe=g!==!0&&B<ie&&qe<B+s.scrollViewSize?B:v==="end"?qe-s.scrollViewSize:ie-(v==="start"?0:Math.round((s.scrollViewSize-y[f])/2))}F=xe,at(n,xe,a.virtualScrollHorizontal,h.lang.rtl),Ce(f)})}function we(n){const s=U.value;if(s){const f=vt.call(s.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),x=f.length,E=a.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let g=n,v,L;for(let m=0;m<x;){for(v=E(f[m]),m++;m<x&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=E(f[m]),m++;L=v-y[g],L!==0&&(y[g]+=L,z[Math.floor(g/$)]+=L),g++}}}function Ve(){U.value!==null&&U.value!==void 0&&U.value.focus()}function Z(n,s){const f=1*w.value;(s===!0||Array.isArray(y)===!1)&&(y=[]);const x=y.length;y.length=e.value;for(let g=e.value-1;g>=x;g--)y[g]=f;const E=Math.floor((e.value-1)/$);z=[];for(let g=0;g<=E;g++){let v=0;const L=Math.min((g+1)*$,e.value);for(let m=g*$;m<L;m++)v+=y[m];z.push(v)}c=-1,F=void 0,P.value=Ie(z,y,0,q.value.from),H.value=Ie(z,y,q.value.to,e.value),n>=0?(we(q.value.from),G(()=>{J(n)})):oe()}function Y(n){if(n===void 0&&typeof window<"u"){const v=r();v!=null&&v.nodeType!==8&&(n=De(v,i(),X.value,T.value,a.virtualScrollHorizontal,h.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const s=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,x=1+s+f,E=n===void 0||n<=0?1:Math.ceil(n/w.value),g=Math.max(1,E,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/x));K.value={total:Math.ceil(g*x),start:Math.ceil(g*s),center:Math.ceil(g*(.5+s)),end:Math.ceil(g*(1+s)),view:E}}function ze(n,s){const f=a.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+f]:w.value+"px"};return[n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X},[C("tr",[C("td",{style:{[f]:`${P.value}px`,...x},colspan:M.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:{[f]:`${P.value}px`,...x}}),C(n,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},s.flat()),n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T},[C("tr",[C("td",{style:{[f]:`${H.value}px`,...x},colspan:M.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T,style:{[f]:`${H.value}px`,...x}})]}function Ce(n){c!==n&&(a.onVirtualScroll!==void 0&&_("virtual-scroll",{index:n,from:q.value.from,to:q.value.to-1,direction:n<c?"decrease":"increase",ref:b}),c=n)}Y();const oe=_t(Q,h.platform.is.ios===!0?120:35);Ft(()=>{Y()});let o=!1;return Et(()=>{o=!0}),Bt(()=>{if(o!==!0)return;const n=r();F!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?at(n,F,a.virtualScrollHorizontal,h.lang.rtl):J(c)}),st(()=>{oe.cancel()}),Object.assign(b,{scrollTo:J,reset:ue,refresh:be}),{virtualScrollSliceRange:q,virtualScrollSliceSizeComputed:K,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:ze,scrollTo:J,reset:ue,refresh:be}}const tl=Ne({name:"QField",inheritAttrs:!1,props:$e,emits:ct,setup(){return dt(ft())}}),ll=Ne({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:r}){const i=S(()=>parseInt(e.lines,10)),w=S(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),I=S(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>C("div",{style:I.value,class:w.value},Lt(r.default))}}),it=e=>["add","add-unique","toggle"].includes(e),ul=".*+?^${}()|[]\\",nl=Object.keys($e),dl=Ne({name:"QSelect",inheritAttrs:!1,props:{...Zt,...Ht,...$e,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:it},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...ct,"add","remove","input-value","new-value","keyup","keypress","keydown","filter-abort"],setup(e,{slots:r,emit:i}){const{proxy:w}=rt(),{$q:I}=w,a=O(!1),_=O(!1),b=O(-1),h=O(""),F=O(!1),c=O(!1);let k,z,y,P,H,K,X,T,U;const q=O(null),M=O(null),W=O(null),ye=O(null),ue=O(null),be=Rt(e),J=Kt(Ze),Q=S(()=>Array.isArray(e.options)?e.options.length:0),ne=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:ze,scrollTo:Ce,setVirtualScrollSize:oe}=el({virtualScrollLength:Q,getVirtualScrollTarget:yt,getVirtualScrollEl:Ge,virtualScrollItemSizeComputed:ne}),o=ft(),n=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],d=u.map(p=>ht(p,l));return e.modelValue===null&&t===!0?d.filter(p=>p!==null):d}return u}),s=S(()=>{const t={};return nl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=S(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),x=S(()=>nt(n.value)),E=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),g=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=S(()=>Q.value===0),L=S(()=>n.value.map(t=>B.value(t)).join(", ")),m=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),D=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(m.value))),ee=S(()=>o.focused.value===!0?e.tabindex:-1),pe=S(()=>({tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-owns":`${o.targetUid.value}_lb`,"aria-controls":`${o.targetUid.value}_lb`})),j=S(()=>{const t={id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"};return b.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${b.value}`),t}),Me=S(()=>n.value.map((t,u)=>({index:u,opt:t,html:m.value(t),selected:!0,removeAtIndex:gt,toggleOption:te,tabindex:ee.value}))),ae=S(()=>{if(Q.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const p=re.value(l)===!0,V=t+d,A={clickable:!0,active:!1,activeClass:xe.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${o.targetUid.value}_${V}`,onClick:()=>{te(l)}};return p!==!0&&(He(l)===!0&&(A.active=!0),b.value===V&&(A.focused=!0),A["aria-selected"]=A.active===!0?"true":"false",I.platform.is.desktop===!0&&(A.onMousemove=()=>{a.value===!0&&se(V)})),{index:V,opt:l,html:m.value(l),label:B.value(l),selected:A.active,focused:A.focused,toggleOption:te,setOptionIndex:se,itemProps:A}})}),ie=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:I.iconSet.arrow.dropdown),qe=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),xe=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),N=S(()=>Le(e.optionValue,"value")),B=S(()=>Le(e.optionLabel,"label")),re=S(()=>Le(e.optionDisable,"disable")),Oe=S(()=>n.value.map(t=>N.value(t))),St=S(()=>{const t={onInput:Ze,onChange:J,onKeydown:Ye,onKeyup:We,onKeypress:Xe,onFocus:Ke,onClick(u){y===!0&&me(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(_.value!==!0&&a.value!==!0||x.value!==!0)&&(P!==!0&&ve(),(_.value===!0||a.value===!0)&&ce(""))},{immediate:!0}),ge(()=>e.fillInput,ve),ge(a,Re),ge(Q,qt);function Qe(t){return e.emitValue===!0?N.value(t):t}function Be(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function gt(t){Be(t),o.focus()}function je(t,u){const l=Qe(t);if(e.multiple!==!0){e.fillInput===!0&&ke(B.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(o.editable.value!==!0||t===void 0||re.value(t)===!0)return;const l=N.value(t);if(e.multiple!==!0){u!==!0&&(ke(e.fillInput===!0?B.value(t):"",!0,!0),le()),M.value!==null&&M.value.focus(),(n.value.length===0||Ae(N.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((y!==!0||F.value===!0)&&o.focus(),Ke(),n.value.length===0){const V=e.emitValue===!0?l:t;i("add",{index:0,value:V}),i("update:modelValue",e.multiple===!0?[V]:V);return}const d=e.modelValue.slice(),p=Oe.value.findIndex(V=>Ae(V,l));if(p>-1)i("remove",{index:p,value:d.splice(p,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const V=e.emitValue===!0?l:t;i("add",{index:d.length,value:V}),d.push(V)}i("update:modelValue",d)}function se(t){if(I.platform.is.desktop!==!0)return;const u=t>-1&&t<Q.value?t:-1;b.value!==u&&(b.value=u)}function _e(t=1,u){if(a.value===!0){let l=b.value;do l=ot(l+t,-1,Q.value-1);while(l!==-1&&l!==b.value&&re.value(e.options[l])===!0);b.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(l>=0?B.value(e.options[l]):K))}}function ht(t,u){const l=d=>Ae(N.value(d),t);return e.options.find(l)||u.find(l)||t}function Le(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function He(t){const u=N.value(t);return Oe.value.find(l=>Ae(l,u))!==void 0}function Ke(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===L.value)&&M.value.select()}function Ue(t){Nt(t,27)===!0&&a.value===!0&&(me(t),le(),ve()),i("keyup",t)}function We(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ue(t);return}if(t.target.value="",clearTimeout(k),ve(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),d=V=>{const A=e.options.find(R=>V.value(R).toLocaleLowerCase()===l);return A===void 0?!1:(n.value.indexOf(A)===-1?te(A):le(),!0)},p=V=>{d(N)!==!0&&(d(B)===!0||V===!0||ce(u,!0,()=>p(!0)))};p()}else o.clearValue(t)}function Xe(t){i("keypress",t)}function Ye(t){if(i("keydown",t),$t(t)===!0)return;const u=h.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(b.value>-1||u===!0);if(t.keyCode===27){Pe(t);return}if(t.keyCode===9&&l===!1){de();return}if(t.target===void 0||t.target.id!==o.targetUid.value)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){Se(t),fe();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Be(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(Se(t),b.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(Se(t),b.value=Math.max(-1,Math.min(Q.value,b.value+(t.keyCode===33?-1:1)*Ve.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Se(t),_e(t.keyCode===38?-1:1,e.multiple));const d=Q.value;if((T===void 0||U<Date.now())&&(T=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===t.ctrlKey&&(t.keyCode!==32||T.length>0)){a.value!==!0&&fe(t);const p=t.key.toLocaleLowerCase(),V=T.length===1&&T[0]===p;U=Date.now()+1500,V===!1&&(Se(t),T+=p);const A=new RegExp("^"+T.split("").map(Te=>ul.indexOf(Te)>-1?"\\"+Te:Te).join(".*"),"i");let R=b.value;if(V===!0||R<0||A.test(B.value(e.options[R]))!==!0)do R=ot(R+1,-1,d-1);while(R!==b.value&&(re.value(e.options[R])===!0||A.test(B.value(e.options[R]))!==!0));b.value!==R&&G(()=>{se(R),Ce(R),R>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(B.value(e.options[R]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&Se(t),b.value>-1&&b.value<d){te(e.options[b.value]);return}if(u===!0){const p=(V,A)=>{if(A){if(it(A)!==!0)return}else A=e.newValueMode;if(V==null)return;ke("",e.multiple!==!0,!0),(A==="toggle"?te:je)(V,A==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),le())};if(e.onNewValue!==void 0?i("new-value",h.value,p):p(h.value),e.multiple!==!0)return}a.value===!0?de():o.innerLoading.value!==!0&&fe()}}function Ge(){return y===!0?ue.value:W.value!==null&&W.value.__qPortalInnerRef.value!==null?W.value.__qPortalInnerRef.value:void 0}function yt(){return Ge()}function bt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?Me.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?Me.value.map((t,u)=>C(Ut,{key:"option-"+u,removable:o.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ee.value,onRemove(){t.removeAtIndex(u)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:B.value(t.opt)}))):[C("span",{[D.value===!0?"innerHTML":"textContent"]:e.displayValue!==void 0?e.displayValue:L.value})]}function Je(){if(v.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:h.value}):void 0;const t=r.option!==void 0?r.option:l=>C(Xt,{key:l.index,...l.itemProps},()=>C(Wt,()=>C(ll,()=>C("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ae.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),jt(r["after-options"],u)}function wt(t,u){const l=u===!0?{...pe.value,...o.splitAttrs.attributes.value}:void 0,d={ref:u===!0?M:void 0,key:"i_t",class:E.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...St.value};return t!==!0&&y===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),C("input",d)}function Ze(t){clearTimeout(k),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),P=!0,K=h.value,o.focused.value!==!0&&(y!==!0||F.value===!0)&&o.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{ce(h.value)},e.inputDebounce)))}function Fe(t){h.value!==t&&(h.value=t,i("input-value",t))}function ke(t,u,l){P=l!==!0,e.useInput===!0&&(Fe(t),(u===!0||l!==!0)&&(K=t),u!==!0&&ce(t))}function ce(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?i("filter-abort"):(o.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&P!==!0&&t===B.value(n.value[0])&&(t="");const d=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);clearTimeout(H),H=d,i("filter",t,(p,V)=>{(u===!0||o.focused.value===!0)&&H===d&&(clearTimeout(H),typeof p=="function"&&p(),c.value=!1,G(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&le():a.value===!0?Re(!0):a.value=!0),typeof V=="function"&&G(()=>{V(w)}),typeof l=="function"&&G(()=>{l(w)})}))},()=>{o.focused.value===!0&&H===d&&(clearTimeout(H),o.innerLoading.value=!1,c.value=!1),a.value===!0&&(a.value=!1)})}function Vt(){return C(Yt,{ref:W,class:g.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...j.value,onScrollPassive:ze,onBeforeShow:tt,onBeforeHide:Ct,onShow:pt},Je)}function Ct(t){lt(t),de()}function pt(){oe()}function xt(t){me(t),M.value!==null&&M.value.focus(),F.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function kt(t){me(t),G(()=>{F.value=!1})}function At(){const t=[C(tl,{class:`col-auto ${o.fieldClass.value}`,...s.value,for:o.targetUid.value,dark:f.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:h.value.length>0,...o.splitAttrs.listeners.value,onFocus:xt,onBlur:kt},{...r,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(C("div",{ref:ue,class:g.value+" scroll",style:e.popupContentStyle,...j.value,onClick:Pe,onScrollPassive:ze},Je())),C(Qt,{ref:ye,modelValue:_.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:tt,onBeforeHide:It,onHide:zt,onShow:Mt},()=>C("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(F.value===!0?" q-select__dialog--focused":"")},t))}function It(t){lt(t),ye.value!==null&&ye.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function zt(t){le(),o.focused.value===!1&&i("blur",t),ve()}function Mt(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),oe()}function de(){_.value!==!0&&(b.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(clearTimeout(H),H=void 0,o.innerLoading.value===!0&&(i("filter-abort"),o.innerLoading.value=!1,c.value=!1)))}function fe(t){o.editable.value===!0&&(y===!0?(o.onControlFocusin(t),_.value=!0,G(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?ce(h.value):(v.value!==!0||r["no-option"]!==void 0)&&(a.value=!0))}function le(){_.value=!1,de()}function ve(){e.useInput===!0&&ke(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&B.value(n.value[0])||"",!0,!0)}function Re(t){let u=-1;if(t===!0){if(n.value.length>0){const l=N.value(n.value[0]);u=e.options.findIndex(d=>Ae(N.value(d),l))}Z(u)}se(u)}function qt(t,u){a.value===!0&&o.innerLoading.value===!1&&(Z(-1,!0),G(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?Z():Re(!0))}))}function et(){_.value===!1&&W.value!==null&&W.value.updatePosition()}function tt(t){t!==void 0&&me(t),i("popup-show",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function lt(t){t!==void 0&&me(t),i("popup-hide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function ut(){y=I.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),X=I.platform.is.ios===!0&&y===!0&&e.useInput===!0?"fade":e.transitionShow}return Tt(ut),Pt(et),ut(),st(()=>{clearTimeout(k)}),Object.assign(w,{showPopup:fe,hidePopup:le,removeAtIndex:Be,add:je,toggleOption:te,getOptionIndex:()=>b.value,setOptionIndex:se,moveOptionSelection:_e,filter:ce,updateMenuPosition:et,updateInputValue:ke,isOptionSelected:He,getEmittingOptionValue:Qe,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>N.value.apply(null,t),getOptionLabel:(...t)=>B.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:q,targetRef:M,hasValue:x,showPopup:fe,floatingLabel:S(()=>e.hideSelected!==!0&&x.value===!0||typeof h.value=="number"||h.value.length>0||nt(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(_.value===!0||v.value!==!0||r["no-option"]!==void 0))return y===!0?At():Vt();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if(Pe(t),y!==!0&&a.value===!0){de(),M.value!==null&&M.value.focus();return}fe(t)}},getControl:t=>{const u=bt(),l=t===!0||_.value!==!0||y!==!0;if(e.useInput===!0)u.push(wt(t,l));else if(o.editable.value===!0){const p=l===!0?pe.value:void 0;u.push(C("input",{ref:l===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,readonly:!0,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,...p,onKeydown:Ye,onKeyup:Ue,onKeypress:Xe})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:We}))}if(be.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const p=Oe.value.map(V=>C("option",{value:V,selected:!0}));u.push(C("select",{class:"hidden",name:be.value,multiple:e.multiple},p))}const d=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...d},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[C(Dt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:ie.value})]:null}),dt(o)}});export{dl as Q,el as a,cl as c,Ee as r,Zt as u};
