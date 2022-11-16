import{i as I,j as N,k as b,l as k,H as g,bk as L,m as c,ak as f,ar as O,ac as P,n as w,au as M,r as $,d as E,bl as j,bm as U,o as K,c as G,w as d,a as l,u as o,bn as J,bo as V,bp as W,e as X,t as x,A as Y,g as Z,R as ee,I as B,bq as te,br as C,b as ae,f as oe,bs as ne}from"./index.3bb17302.js";import{b as le}from"./index.02e29e81.js";const ue=I({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:_,emit:m}){const{proxy:{$q:s}}=$(),t=N(k,b);if(t===b)return console.error("QFooter needs to be child of QLayout"),b;const i=g(parseInt(a.heightHint,10)),u=g(!0),y=g(L.value===!0||t.isContainer.value===!0?0:window.innerHeight),h=c(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||s.platform.is.ios&&t.isContainer.value===!0),p=c(()=>t.isContainer.value===!0?t.containerHeight.value:y.value),Q=c(()=>{if(a.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?i.value:0;const e=t.scroll.value.position+p.value+i.value-t.height.value;return e>0?e:0}),R=c(()=>a.modelValue!==!0||h.value===!0&&u.value!==!0),T=c(()=>a.modelValue===!0&&R.value===!0&&a.reveal===!0),q=c(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(R.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),z=c(()=>{const e=t.rows.value.bottom,n={};return e[0]==="l"&&t.left.space===!0&&(n[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(n[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),n});function r(e,n){t.update("footer",e,n)}function v(e,n){e.value!==n&&(e.value=n)}function A({height:e}){v(i,e),r("size",e)}function D(){if(a.reveal!==!0)return;const{direction:e,position:n,inflectionPoint:S}=t.scroll.value;v(u,e==="up"||n-S<100||t.height.value-p.value-n-i.value<300)}function F(e){T.value===!0&&v(u,!0),m("focusin",e)}f(()=>a.modelValue,e=>{r("space",e),v(u,!0),t.animate()}),f(Q,e=>{r("offset",e)}),f(()=>a.reveal,e=>{e===!1&&v(u,a.modelValue)}),f(u,e=>{t.animate(),m("reveal",e)}),f([i,t.scroll,t.height],D),f(()=>s.screen.height,e=>{t.isContainer.value!==!0&&v(y,e)});const H={};return t.instances.footer=H,a.modelValue===!0&&r("size",i.value),r("space",a.modelValue),r("offset",Q.value),O(()=>{t.instances.footer===H&&(t.instances.footer=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=P(_.default,[w(M,{debounce:0,onResize:A})]);return a.elevated===!0&&e.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:q.value,style:z.value,onFocusin:F},e)}}}),re={class:"text-h6"},ce=E({__name:"ActiveLayout",setup(a){const _=le(1e3),m=new Date().getTime(),s=g("-");return f(_,()=>{const t=new Date().getTime();s.value=j(t-m)}),(t,i)=>{const u=U("router-view");return K(),G(o(ne),{elevated:"",view:"hHh LpR lff"},{default:d(()=>[l(o(J),{elevated:""},{default:d(()=>[l(o(V),null,{default:d(()=>[l(o(W),null,{default:d(()=>[X(x(o(Y).APP_NAME),1)]),_:1}),l(Z,{flat:"",dense:"",to:{name:o(ee).DASHBOARD},icon:o(B).RETURN_TO_DASHBOARD},null,8,["to","icon"])]),_:1})]),_:1}),l(o(te),null,{default:d(()=>[l(u)]),_:1}),l(o(ue),{class:"bg-dark"},{default:d(()=>[l(o(V),null,{default:d(()=>[l(o(C)),l(o(ae),{name:o(B).TIMER,size:"sm",class:"q-mr-sm"},null,8,["name"]),oe("div",re,x(s.value),1),l(o(C))]),_:1})]),_:1})]),_:1})}}});export{ce as default};