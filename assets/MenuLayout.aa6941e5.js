import{i as $e,b6 as Ne,a1 as Re,b8 as Ie,a3 as Le,ao as Qe,j as Ee,k as te,l as He,H as q,m as i,ba as Pe,bu as We,ak as d,aH as fe,ai as Ve,ar as Ue,aw as O,n as W,a5 as ve,q as ze,r as Fe,bv as Ge,aa as je,d as Ke,bw as Xe,bm as Ze,o as T,c as A,w as n,a as o,u as t,bn as Je,bo as Ye,g as me,I as B,bp as ea,e as k,t as aa,A as ta,R as D,aZ as la,b as I,a7 as L,bq as ua,bs as oa}from"./index.3bb17302.js";import{T as le}from"./TouchPan.cae2ad0a.js";import{b as V}from"./format.3e32b8d9.js";import{Q as na}from"./QList.82403697.js";import{a as x,Q as h}from"./QItemSection.22a6a7ee.js";import"./touch.70a9dd44.js";import"./selection.7371cec7.js";const he=150,ra=$e({name:"QDrawer",inheritAttrs:!1,props:{...Ne,...Re,side:{type:String,default:"left",validator:a=>["left","right"].includes(a)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:a=>["default","desktop","mobile"].includes(a),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ie,"on-layout","mini-state"],setup(a,{slots:_,emit:w,attrs:U}){const f=Fe(),{proxy:{$q:b}}=f,Q=Le(a,b),{preventBodyScroll:z}=Ge(),{registerTimeout:ue,removeTimeout:be}=Qe(),l=Ee(He,te);if(l===te)return console.error("QDrawer needs to be child of QLayout"),te;let F,G,p;const s=q(a.behavior==="mobile"||a.behavior!=="desktop"&&l.totalWidth.value<=a.breakpoint),$=i(()=>a.mini===!0&&s.value!==!0),v=i(()=>$.value===!0?a.miniWidth:a.width),r=q(a.showIfAbove===!0&&s.value===!1?!0:a.modelValue===!0),oe=i(()=>a.persistent!==!0&&(s.value===!0||_e.value===!0));function ne(e,u){if(we(),e!==!1&&l.animate(),m(0),s.value===!0){const c=l.instances[H.value];c!==void 0&&c.belowBreakpoint===!0&&c.hide(!1),g(1),l.isContainer.value!==!0&&z(!0)}else g(0),e!==!1&&Y(!1);ue(()=>{e!==!1&&Y(!0),u!==!0&&w("show",e)},he)}function re(e,u){ye(),e!==!1&&l.animate(),g(0),m(M.value*v.value),ee(),u!==!0?ue(()=>{w("hide",e)},he):be()}const{show:j,hide:N}=Pe({showing:r,hideOnRouteChange:oe,handleShow:ne,handleHide:re}),{addToHistory:we,removeFromHistory:ye}=We(r,N,oe),E={belowBreakpoint:s,hide:N},y=i(()=>a.side==="right"),M=i(()=>(b.lang.rtl===!0?-1:1)*(y.value===!0?1:-1)),ie=q(0),C=q(!1),K=q(!1),se=q(v.value*M.value),H=i(()=>y.value===!0?"left":"right"),X=i(()=>r.value===!0&&s.value===!1&&a.overlay===!1?a.miniToOverlay===!0?a.miniWidth:v.value:0),Z=i(()=>a.overlay===!0||a.miniToOverlay===!0||l.view.value.indexOf(y.value?"R":"L")>-1||b.platform.is.ios===!0&&l.isContainer.value===!0),R=i(()=>a.overlay===!1&&r.value===!0&&s.value===!1),_e=i(()=>a.overlay===!0&&r.value===!0&&s.value===!1),ge=i(()=>"fullscreen q-drawer__backdrop"+(r.value===!1&&C.value===!1?" hidden":"")),Se=i(()=>({backgroundColor:`rgba(0,0,0,${ie.value*.4})`})),de=i(()=>y.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),ke=i(()=>y.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Te=i(()=>{const e={};return l.header.space===!0&&de.value===!1&&(Z.value===!0?e.top=`${l.header.offset}px`:l.header.space===!0&&(e.top=`${l.header.size}px`)),l.footer.space===!0&&ke.value===!1&&(Z.value===!0?e.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(e.bottom=`${l.footer.size}px`)),e}),Ae=i(()=>{const e={width:`${v.value}px`,transform:`translateX(${se.value}px)`};return s.value===!0?e:Object.assign(e,Te.value)}),Be=i(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),De=i(()=>`q-drawer q-drawer--${a.side}`+(K.value===!0?" q-drawer--mini-animate":"")+(a.bordered===!0?" q-drawer--bordered":"")+(Q.value===!0?" q-drawer--dark q-dark":"")+(C.value===!0?" no-transition":r.value===!0?"":" q-layout--prevent-focus")+(s.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(Z.value===!0||R.value!==!0?" fixed":"")+(a.overlay===!0||a.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),xe=i(()=>{const e=b.lang.rtl===!0?a.side:H.value;return[[le,Oe,void 0,{[e]:!0,mouse:!0}]]}),Me=i(()=>{const e=b.lang.rtl===!0?H.value:a.side;return[[le,ce,void 0,{[e]:!0,mouse:!0}]]}),Ce=i(()=>{const e=b.lang.rtl===!0?H.value:a.side;return[[le,ce,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function J(){pe(s,a.behavior==="mobile"||a.behavior!=="desktop"&&l.totalWidth.value<=a.breakpoint)}d(s,e=>{e===!0?(F=r.value,r.value===!0&&N(!1)):a.overlay===!1&&a.behavior!=="mobile"&&F!==!1&&(r.value===!0?(m(0),g(0),ee()):j(!1))}),d(()=>a.side,(e,u)=>{l.instances[u]===E&&(l.instances[u]=void 0,l[u].space=!1,l[u].offset=0),l.instances[e]=E,l[e].size=v.value,l[e].space=R.value,l[e].offset=X.value}),d(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&J()}),d(()=>a.behavior+a.breakpoint,J),d(l.isContainer,e=>{r.value===!0&&z(e!==!0),e===!0&&J()}),d(l.scrollbarWidth,()=>{m(r.value===!0?0:void 0)}),d(X,e=>{S("offset",e)}),d(R,e=>{w("on-layout",e),S("space",e)}),d(y,()=>{m()}),d(v,e=>{m(),ae(a.miniToOverlay,e)}),d(()=>a.miniToOverlay,e=>{ae(e,v.value)}),d(()=>b.lang.rtl,()=>{m()}),d(()=>a.mini,()=>{a.modelValue===!0&&(qe(),l.animate())}),d($,e=>{w("mini-state",e)});function m(e){e===void 0?fe(()=>{e=r.value===!0?0:v.value,m(M.value*e)}):(l.isContainer.value===!0&&y.value===!0&&(s.value===!0||Math.abs(e)===v.value)&&(e+=M.value*l.scrollbarWidth.value),se.value=e)}function g(e){ie.value=e}function Y(e){const u=e===!0?"remove":l.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function qe(){clearTimeout(G),f.proxy&&f.proxy.$el&&f.proxy.$el.classList.add("q-drawer--mini-animate"),K.value=!0,G=setTimeout(()=>{K.value=!1,f&&f.proxy&&f.proxy.$el&&f.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Oe(e){if(r.value!==!1)return;const u=v.value,c=V(e.distance.x,0,u);if(e.isFinal===!0){c>=Math.min(75,u)===!0?j():(l.animate(),g(0),m(M.value*u)),C.value=!1;return}m((b.lang.rtl===!0?y.value!==!0:y.value)?Math.max(u-c,0):Math.min(0,c-u)),g(V(c/u,0,1)),e.isFirst===!0&&(C.value=!0)}function ce(e){if(r.value!==!0)return;const u=v.value,c=e.direction===a.side,P=(b.lang.rtl===!0?c!==!0:c)?V(e.distance.x,0,u):0;if(e.isFinal===!0){Math.abs(P)<Math.min(75,u)===!0?(l.animate(),g(1),m(0)):N(),C.value=!1;return}m(M.value*P),g(V(1-P/u,0,1)),e.isFirst===!0&&(C.value=!0)}function ee(){z(!1),Y(!0)}function S(e,u){l.update(a.side,e,u)}function pe(e,u){e.value!==u&&(e.value=u)}function ae(e,u){S("size",e===!0?a.miniWidth:u)}return l.instances[a.side]=E,ae(a.miniToOverlay,v.value),S("space",R.value),S("offset",X.value),a.showIfAbove===!0&&a.modelValue!==!0&&r.value===!0&&a["onUpdate:modelValue"]!==void 0&&w("update:modelValue",!0),Ve(()=>{w("on-layout",R.value),w("mini-state",$.value),F=a.showIfAbove===!0;const e=()=>{(r.value===!0?ne:re)(!1,!0)};if(l.totalWidth.value!==0){fe(e);return}p=d(l.totalWidth,()=>{p(),p=void 0,r.value===!1&&a.showIfAbove===!0&&s.value===!1?j(!1):e()})}),Ue(()=>{p!==void 0&&p(),clearTimeout(G),r.value===!0&&ee(),l.instances[a.side]===E&&(l.instances[a.side]=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const e=[];s.value===!0&&(a.noSwipeOpen===!1&&e.push(O(W("div",{key:"open",class:`q-drawer__opener fixed-${a.side}`,"aria-hidden":"true"}),xe.value)),e.push(ve("div",{ref:"backdrop",class:ge.value,style:Se.value,"aria-hidden":"true",onClick:N},void 0,"backdrop",a.noSwipeBackdrop!==!0&&r.value===!0,()=>Ce.value)));const u=$.value===!0&&_.mini!==void 0,c=[W("div",{...U,key:""+u,class:[Be.value,U.class]},u===!0?_.mini():ze(_.default))];return a.elevated===!0&&r.value===!0&&c.push(W("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(ve("aside",{ref:"content",class:De.value,style:Ae.value},c,"contentclose",a.noSwipeClose!==!0&&s.value===!0,()=>Me.value)),W("div",{class:"q-drawer-container"},e)}}}),ia=je({id:"main-menu",state:()=>({drawer:!1})}),sa=ia,ya=Ke({__name:"MenuLayout",setup(a){const _=sa(),w=Xe();return(U,f)=>{const b=Ze("router-view");return T(),A(t(oa),{view:"hHh LpR lff"},{default:n(()=>[o(t(Je),{elevated:""},{default:n(()=>[o(t(Ye),null,{default:n(()=>[o(t(me),{dense:"",flat:"",round:"",icon:t(B).MENU,onClick:f[0]||(f[0]=Q=>t(_).drawer=!t(_).drawer)},null,8,["icon"]),o(t(ea),null,{default:n(()=>[k(aa(t(ta).APP_NAME),1)]),_:1}),t(w).name!==t(D).DASHBOARD?(T(),A(t(me),{key:0,flat:"",dense:"",to:{name:t(D).DASHBOARD},icon:t(B).RETURN_TO_DASHBOARD},null,8,["to","icon"])):la("",!0)]),_:1})]),_:1}),o(t(ra),{modelValue:t(_).drawer,"onUpdate:modelValue":f[1]||(f[1]=Q=>t(_).drawer=Q),width:250,"show-if-above":"",side:"left",bordered:""},{default:n(()=>[o(t(na),null,{default:n(()=>[o(t(x),null,{default:n(()=>[o(t(h),{class:"text-h6"},{default:n(()=>[k("Menu")]),_:1})]),_:1}),O((T(),A(t(x),{clickable:"",to:{name:t(D).DASHBOARD}},{default:n(()=>[o(t(h),{avatar:""},{default:n(()=>[o(t(I),{color:"primary",name:t(B).DASHBOARD},null,8,["name"])]),_:1}),o(t(h),null,{default:n(()=>[k("Dashboard")]),_:1})]),_:1},8,["to"])),[[L]]),O((T(),A(t(x),{clickable:"",to:{name:t(D).SETTINGS}},{default:n(()=>[o(t(h),{avatar:""},{default:n(()=>[o(t(I),{color:"primary",name:t(B).SETTINGS},null,8,["name"])]),_:1}),o(t(h),null,{default:n(()=>[k("Settings")]),_:1})]),_:1},8,["to"])),[[L]]),O((T(),A(t(x),{clickable:"",to:{name:t(D).ABOUT}},{default:n(()=>[o(t(h),{avatar:""},{default:n(()=>[o(t(I),{color:"primary",name:t(B).INFO},null,8,["name"])]),_:1}),o(t(h),null,{default:n(()=>[k("About")]),_:1})]),_:1},8,["to"])),[[L]]),o(t(x),null,{default:n(()=>[o(t(h),{class:"text-h6"},{default:n(()=>[k("Data Tables")]),_:1})]),_:1}),O((T(),A(t(x),{clickable:"",to:{name:t(D).LOGS_AND_SETTINGS_DATA}},{default:n(()=>[o(t(h),{avatar:""},{default:n(()=>[o(t(I),{color:"primary",name:t(B).LOGS},null,8,["name"])]),_:1}),o(t(h),null,{default:n(()=>[k("Logs & Settings")]),_:1})]),_:1},8,["to"])),[[L]]),O((T(),A(t(x),{clickable:"",to:{name:t(D).MEASUREMENTS_DATA}},{default:n(()=>[o(t(h),{avatar:""},{default:n(()=>[o(t(I),{color:"primary",name:t(B).MEASUREMENTS},null,8,["name"])]),_:1}),o(t(h),null,{default:n(()=>[k("Measurements")]),_:1})]),_:1},8,["to"])),[[L]])]),_:1})]),_:1},8,["modelValue"]),o(t(ua),null,{default:n(()=>[o(b)]),_:1})]),_:1})}}});export{ya as default};