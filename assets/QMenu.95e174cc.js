import{r as w,aD as ge,ad as j,aN as xe,aJ as K,X as y,m as be,ax as P,T as J,aM as ye,aU as S,b9 as N,a4 as Te,ba as we,G as pe,bb as ke,ah as Ce,bc as Ee,bd as Me,M as b,aj as He,at as Se,au as We,be as Pe,bf as qe,bg as Le,bh as Be,aL as Oe,bi as ze,bj as Q,aT as Ae,P as V,S as Fe,aO as $e,bk as Re,bl as De,bm as je,bn as Ke,a3 as Ne}from"./index.8e362174.js";import{c as Qe}from"./selection.79bb437b.js";const Ve={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ie({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:o,proxy:l,emit:c}=J(),n=w(null);let f;function d(i){return n.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const r={};a===void 0&&(Object.assign(r,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){ge(i,13)===!0&&r.toggle(i)},contextClick(i){l.hide(i),j(i),xe(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:j,mobileTouch(i){if(r.mobileCleanup(i),d(i)!==!0)return;l.hide(i),n.value.classList.add("non-selectable");const h=i.target;K(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){n.value.classList.remove("non-selectable"),clearTimeout(f),e.value===!0&&i!==void 0&&Qe()}}),a=function(i=o.contextMenu){if(o.noParentEvent===!0||n.value===null)return;let h;i===!0?l.$q.platform.is.mobile===!0?h=[[n.value,"touchstart","mobileTouch","passive"]]:h=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:h=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],K(r,"anchor",h)});function s(){ye(r,"anchor")}function v(i){for(n.value=i;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;a()}function m(){if(o.target===!1||o.target===""||l.$el.parentNode===null)n.value=null;else if(o.target===!0)v(l.$el.parentNode);else{let i=o.target;if(typeof o.target=="string")try{i=document.querySelector(o.target)}catch{i=void 0}i!=null?(n.value=i.$el||i,a()):(n.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return y(()=>o.contextMenu,i=>{n.value!==null&&(s(),a(i))}),y(()=>o.target,()=>{n.value!==null&&s(),m()}),y(()=>o.noParentEvent,i=>{n.value!==null&&(i===!0?s():a())}),be(()=>{m(),t!==!0&&o.modelValue===!0&&n.value===null&&c("update:modelValue",!1)}),P(()=>{clearTimeout(f),s()}),{anchorEl:n,canShow:d,anchorEvents:r}}function Ue(e,t){const a=w(null);let o;function l(f,d){const r=`${d!==void 0?"add":"remove"}EventListener`,s=d!==void 0?d:o;f!==window&&f[r]("scroll",s,S.passive),window[r]("scroll",s,S.passive),o=d}function c(){a.value!==null&&(l(a.value),a.value=null)}const n=y(()=>e.noParentEvent,()=>{a.value!==null&&(c(),t())});return P(n),{localScrollTarget:a,unconfigureScrollTarget:c,changeScrollEvent:l}}let Y;const{notPassiveCapture:p}=S,g=[];function k(e){clearTimeout(Y);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=N.length-1;for(;a>=0;){const o=N[a].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;a--}for(let o=g.length-1;o>=0;o--){const l=g[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Xe(e){g.push(e),g.length===1&&(document.addEventListener("mousedown",k,p),document.addEventListener("touchstart",k,p))}function I(e){const t=g.findIndex(a=>a===e);t>-1&&(g.splice(t,1),g.length===0&&(clearTimeout(Y),document.removeEventListener("mousedown",k,p),document.removeEventListener("touchstart",k,p)))}let U,X;function _(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function _e(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const W={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{W[`${e}#ltr`]=e,W[`${e}#rtl`]=e});function G(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:W[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function Ge(e,t){let{top:a,left:o,right:l,bottom:c,width:n,height:f}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],o-=t[0],c+=t[1],l+=t[0],n+=t[0],f+=t[1]),{top:a,left:o,right:l,bottom:c,width:n,height:f,middle:o+(l-o)/2,center:a+(c-a)/2}}function Je(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Ye(e){if(Te.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:d,offsetTop:r}=window.visualViewport;d!==U&&(f.setProperty("--q-pe-left",d+"px"),U=d),r!==X&&(f.setProperty("--q-pe-top",r+"px"),X=r)}let t;const{scrollLeft:a,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)t=Ge(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:f,left:d}=e.anchorEl.getBoundingClientRect(),r=f+e.absoluteOffset.top,s=d+e.absoluteOffset.left;t={top:r,left:s,width:1,height:1,right:s+1,center:r,middle:s,bottom:r+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const c=Je(e.el),n={top:t[e.anchorOrigin.vertical]-c[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-c[e.selfOrigin.horizontal]};Ze(n,t,c,e.anchorOrigin,e.selfOrigin),l={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(l.maxHeight=n.maxHeight+"px",t.height>n.maxHeight&&(l.minHeight=l.maxHeight)),n.maxWidth!==void 0&&(l.maxWidth=n.maxWidth+"px",t.width>n.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function Ze(e,t,a,o,l){const c=a.bottom,n=a.right,f=we(),d=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+c>d)if(l.vertical==="center")e.top=t[o.vertical]>d/2?Math.max(0,d-c):0,e.maxHeight=Math.min(c,d);else if(t[o.vertical]>d/2){const s=Math.min(d,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,s),e.top=Math.max(0,s-c)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,d-e.top);if(e.left<0||e.left+n>r)if(e.maxWidth=Math.min(n,r),l.horizontal==="middle")e.left=t[o.horizontal]>r/2?Math.max(0,r-n):0;else if(t[o.horizontal]>r/2){const s=Math.min(r,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(n,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(n,r-e.left)}const nt=pe({name:"QMenu",inheritAttrs:!1,props:{...Ve,...ke,...Ce,...Ee,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:_},self:{type:String,validator:_},offset:{type:Array,validator:_e},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Me,"click","escape-key"],setup(e,{slots:t,emit:a,attrs:o}){let l=null,c,n,f;const d=J(),{proxy:r}=d,{$q:s}=r,v=w(null),m=w(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=He(e,s),{registerTick:Z,removeTick:ee}=Se(),{registerTimeout:q}=We(),{transition:te,transitionStyle:ne}=Pe(e,m),{localScrollTarget:L,changeScrollEvent:oe,unconfigureScrollTarget:le}=Ue(e,R),{anchorEl:x,canShow:ie}=Ie({showing:m}),{hide:B}=qe({showing:m,canShow:ie,handleShow:ce,handleHide:de,hideOnRouteChange:i,processOnMount:!0}),{showPortal:O,hidePortal:z,renderPortal:ae}=Le(d,v,he),C={anchorEl:x,innerRef:v,onClickOutside(u){if(e.persistent!==!0&&m.value===!0)return B(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ne(u),!0}},A=b(()=>G(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),ue=b(()=>e.cover===!0?A.value:G(e.self||"top start",s.lang.rtl)),re=b(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),se=b(()=>e.autoClose===!0?{onClick:fe}:{}),F=b(()=>m.value===!0&&e.persistent!==!0);y(F,u=>{u===!0?(Re(M),Xe(C)):(Q(M),I(C))});function E(){De(()=>{let u=v.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function ce(u){if(l=e.noRefocus===!1?document.activeElement:null,Be(D),O(),R(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const H=Oe(u);if(H.left!==void 0){const{top:me,left:ve}=x.value.getBoundingClientRect();c={left:H.left-ve,top:H.top-me}}}n===void 0&&(n=y(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,T)),e.noFocus!==!0&&document.activeElement.blur(),Z(()=>{T(),e.noFocus!==!0&&E()}),q(()=>{s.platform.is.ios===!0&&(f=e.autoClose,v.value.click()),T(),O(!0),a("show",u)},e.transitionDuration)}function de(u){ee(),z(),$(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(l.focus(),l=null),q(()=>{z(!0),a("hide",u)},e.transitionDuration)}function $(u){c=void 0,n!==void 0&&(n(),n=void 0),(u===!0||m.value===!0)&&(ze(D),le(),I(C),Q(M)),u!==!0&&(l=null)}function R(){(x.value!==null||e.scrollTarget!==void 0)&&(L.value=Ae(x.value,e.scrollTarget),oe(L.value,T))}function fe(u){f!==!0?(je(r,u),a("click",u)):f=!1}function D(u){F.value===!0&&e.noFocus!==!0&&Ke(v.value,u.target)!==!0&&E()}function M(u){a("escape-key"),B(u)}function T(){const u=v.value;u===null||x.value===null||Ye({el:u,offset:e.offset,anchorEl:x.value,anchorOrigin:A.value,selfOrigin:ue.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function he(){return V($e,{name:te.value,appear:!0},()=>m.value===!0?V("div",{role:"menu",...o,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+re.value,o.class],style:[o.style,ne.value],...se.value},Fe(t.default)):null)}return P($),Object.assign(r,{focus:E,updatePosition:T}),ae}});export{nt as Q,Ie as a,Ve as u};