import{G as L,H as N,J as y,K as M,r as g,bo as U,M as d,X as v,aw as K,U as P,P as w,az as $,T as E,d as j,h as G,m as J,D as Q,l as V,F as X,y as k,bp as Y,o as Z,c as W,w as f,a as u,u as n,bq as ee,br as F,bs as te,e as ae,t as H,f as oe,R as ne,I as R,bt as le,bu as x,b as ue,p as se,bv as re}from"./index.9af118fa.js";import{b as ie}from"./index.c8e43231.js";const ce=L({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(o,{slots:b,emit:_}){const{proxy:{$q:i}}=E(),t=N(M,y);if(t===y)return console.error("QFooter needs to be child of QLayout"),y;const s=g(parseInt(o.heightHint,10)),a=g(!0),c=g(U.value===!0||t.isContainer.value===!0?0:window.innerHeight),m=d(()=>o.reveal===!0||t.view.value.indexOf("F")>-1||i.platform.is.ios&&t.isContainer.value===!0),p=d(()=>t.isContainer.value===!0?t.containerHeight.value:c.value),T=d(()=>{if(o.modelValue!==!0)return 0;if(m.value===!0)return a.value===!0?s.value:0;const e=t.scroll.value.position+p.value+s.value-t.height.value;return e>0?e:0}),B=d(()=>o.modelValue!==!0||m.value===!0&&a.value!==!0),C=d(()=>o.modelValue===!0&&B.value===!0&&o.reveal===!0),I=d(()=>"q-footer q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-bottom"+(o.bordered===!0?" q-footer--bordered":"")+(B.value===!0?" q-footer--hidden":"")+(o.modelValue!==!0?" q-layout--prevent-focus"+(m.value!==!0?" hidden":""):"")),z=d(()=>{const e=t.rows.value.bottom,l={};return e[0]==="l"&&t.left.space===!0&&(l[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(l[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),l});function r(e,l){t.update("footer",e,l)}function h(e,l){e.value!==l&&(e.value=l)}function O({height:e}){h(s,e),r("size",e)}function q(){if(o.reveal!==!0)return;const{direction:e,position:l,inflectionPoint:S}=t.scroll.value;h(a,e==="up"||l-S<100||t.height.value-p.value-l-s.value<300)}function A(e){C.value===!0&&h(a,!0),_("focusin",e)}v(()=>o.modelValue,e=>{r("space",e),h(a,!0),t.animate()}),v(T,e=>{r("offset",e)}),v(()=>o.reveal,e=>{e===!1&&h(a,o.modelValue)}),v(a,e=>{t.animate(),_("reveal",e)}),v([s,t.scroll,t.height],q),v(()=>i.screen.height,e=>{t.isContainer.value!==!0&&h(c,e)});const D={};return t.instances.footer=D,o.modelValue===!0&&r("size",s.value),r("space",o.modelValue),r("offset",T.value),K(()=>{t.instances.footer===D&&(t.instances.footer=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=P(b.default,[w($,{debounce:0,onResize:O})]);return o.elevated===!0&&e.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:I.value,style:z.value,onFocusin:A},e)}}}),de={class:"text-h6"},me=j({__name:"ActiveLayout",setup(o){const{log:b}=G(),_=ie(1e3),i=g(0),t=g("-"),s=g("");return J(async()=>{try{const a=(await Q.getAll(V.ACTIVE_WORKOUTS))[0];if(a!=null&&a.parentId){const c=await Q.getFirstByField(V.WORKOUTS,X.ID,a==null?void 0:a.parentId);s.value=c==null?void 0:c.name,i.value=new Date(a.createdDate).getTime()}}catch(a){b.error("ActiveLayout:onMounted",a)}}),v(_,()=>{const a=new Date().getTime();t.value=k(a-i.value)}),(a,c)=>{const m=Y("router-view");return Z(),W(n(re),{elevated:"",view:"hHh LpR lff"},{default:f(()=>[u(n(ee),{elevated:""},{default:f(()=>[u(n(F),null,{default:f(()=>[u(n(te),null,{default:f(()=>[ae(H(s.value),1)]),_:1}),u(oe,{flat:"",dense:"",to:{name:n(ne).DASHBOARD},icon:n(R).RETURN_TO_DASHBOARD},null,8,["to","icon"])]),_:1})]),_:1}),u(n(le),null,{default:f(()=>[u(m)]),_:1}),u(n(ce),{class:"bg-dark"},{default:f(()=>[u(n(F),null,{default:f(()=>[u(n(x)),u(n(ue),{name:n(R).TIMER,size:"sm",class:"q-mr-sm"},null,8,["name"]),se("div",de,H(t.value),1),u(n(x))]),_:1})]),_:1})]),_:1})}}});export{me as default};