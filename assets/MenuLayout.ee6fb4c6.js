import{G as Re,ba as Ee,ah as Ie,bc as $e,aj as Ne,at as Le,H as Qe,J as te,K as We,r as R,M as i,be as Pe,bx as He,X as c,aM as fe,m as Ve,aw as Ue,aB as M,P as H,al as ve,S as ze,T as Fe,by as Ge,v as Ke,d as Xe,bz as je,bp as Je,o as S,c as T,w as n,a as o,u as a,bq as Ye,br as Ze,f as me,I as k,bs as ea,e as y,t as aa,A as ta,R as g,s as la,b as O,an as C,bt as ua,bv as oa}from"./index.9af118fa.js";import{T as le}from"./TouchPan.7cb8f502.js";import{b as V}from"./format.3e32b8d9.js";import{Q as na}from"./QList.befa412f.js";import{a as A,Q as d}from"./QItemSection.fc109ee5.js";import"./touch.70a9dd44.js";import"./selection.7faee8f5.js";const he=150,ra=Re({name:"QDrawer",inheritAttrs:!1,props:{...Ee,...Ie,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...$e,"on-layout","mini-state"],setup(t,{slots:D,emit:w,attrs:U}){const v=Fe(),{proxy:{$q:b}}=v,L=Ne(t,b),{preventBodyScroll:z}=Ge(),{registerTimeout:ue,removeTimeout:be}=Le(),l=Qe(We,te);if(l===te)return console.error("QDrawer needs to be child of QLayout"),te;let F,G,E;const s=R(t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint),I=i(()=>t.mini===!0&&s.value!==!0),m=i(()=>I.value===!0?t.miniWidth:t.width),r=R(t.showIfAbove===!0&&s.value===!1?!0:t.modelValue===!0),oe=i(()=>t.persistent!==!0&&(s.value===!0||_e.value===!0));function ne(e,u){if(ye(),e!==!1&&l.animate(),h(0),s.value===!0){const f=l.instances[W.value];f!==void 0&&f.belowBreakpoint===!0&&f.hide(!1),B(1),l.isContainer.value!==!0&&z(!0)}else B(0),e!==!1&&Z(!1);ue(()=>{e!==!1&&Z(!0),u!==!0&&w("show",e)},he)}function re(e,u){we(),e!==!1&&l.animate(),B(0),h(q.value*m.value),ee(),u!==!0?ue(()=>{w("hide",e)},he):be()}const{show:K,hide:$}=Pe({showing:r,hideOnRouteChange:oe,handleShow:ne,handleHide:re}),{addToHistory:ye,removeFromHistory:we}=He(r,$,oe),Q={belowBreakpoint:s,hide:$},_=i(()=>t.side==="right"),q=i(()=>(b.lang.rtl===!0?-1:1)*(_.value===!0?1:-1)),ie=R(0),p=R(!1),X=R(!1),se=R(m.value*q.value),W=i(()=>_.value===!0?"left":"right"),j=i(()=>r.value===!0&&s.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:m.value:0),J=i(()=>t.overlay===!0||t.miniToOverlay===!0||l.view.value.indexOf(_.value?"R":"L")>-1||b.platform.is.ios===!0&&l.isContainer.value===!0),N=i(()=>t.overlay===!1&&r.value===!0&&s.value===!1),_e=i(()=>t.overlay===!0&&r.value===!0&&s.value===!1),Se=i(()=>"fullscreen q-drawer__backdrop"+(r.value===!1&&p.value===!1?" hidden":"")),Te=i(()=>({backgroundColor:`rgba(0,0,0,${ie.value*.4})`})),de=i(()=>_.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),ke=i(()=>_.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),ge=i(()=>{const e={};return l.header.space===!0&&de.value===!1&&(J.value===!0?e.top=`${l.header.offset}px`:l.header.space===!0&&(e.top=`${l.header.size}px`)),l.footer.space===!0&&ke.value===!1&&(J.value===!0?e.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(e.bottom=`${l.footer.size}px`)),e}),Ae=i(()=>{const e={width:`${m.value}px`,transform:`translateX(${se.value}px)`};return s.value===!0?e:Object.assign(e,ge.value)}),De=i(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Be=i(()=>`q-drawer q-drawer--${t.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(L.value===!0?" q-drawer--dark q-dark":"")+(p.value===!0?" no-transition":r.value===!0?"":" q-layout--prevent-focus")+(s.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${I.value===!0?"mini":"standard"}`+(J.value===!0||N.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),xe=i(()=>{const e=b.lang.rtl===!0?t.side:W.value;return[[le,qe,void 0,{[e]:!0,mouse:!0}]]}),Me=i(()=>{const e=b.lang.rtl===!0?W.value:t.side;return[[le,ce,void 0,{[e]:!0,mouse:!0}]]}),Oe=i(()=>{const e=b.lang.rtl===!0?W.value:t.side;return[[le,ce,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function Y(){pe(s,t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint)}c(s,e=>{e===!0?(F=r.value,r.value===!0&&$(!1)):t.overlay===!1&&t.behavior!=="mobile"&&F!==!1&&(r.value===!0?(h(0),B(0),ee()):K(!1))}),c(()=>t.side,(e,u)=>{l.instances[u]===Q&&(l.instances[u]=void 0,l[u].space=!1,l[u].offset=0),l.instances[e]=Q,l[e].size=m.value,l[e].space=N.value,l[e].offset=j.value}),c(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&Y()}),c(()=>t.behavior+t.breakpoint,Y),c(l.isContainer,e=>{r.value===!0&&z(e!==!0),e===!0&&Y()}),c(l.scrollbarWidth,()=>{h(r.value===!0?0:void 0)}),c(j,e=>{x("offset",e)}),c(N,e=>{w("on-layout",e),x("space",e)}),c(_,()=>{h()}),c(m,e=>{h(),ae(t.miniToOverlay,e)}),c(()=>t.miniToOverlay,e=>{ae(e,m.value)}),c(()=>b.lang.rtl,()=>{h()}),c(()=>t.mini,()=>{t.modelValue===!0&&(Ce(),l.animate())}),c(I,e=>{w("mini-state",e)});function h(e){e===void 0?fe(()=>{e=r.value===!0?0:m.value,h(q.value*e)}):(l.isContainer.value===!0&&_.value===!0&&(s.value===!0||Math.abs(e)===m.value)&&(e+=q.value*l.scrollbarWidth.value),se.value=e)}function B(e){ie.value=e}function Z(e){const u=e===!0?"remove":l.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Ce(){clearTimeout(G),v.proxy&&v.proxy.$el&&v.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,G=setTimeout(()=>{X.value=!1,v&&v.proxy&&v.proxy.$el&&v.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function qe(e){if(r.value!==!1)return;const u=m.value,f=V(e.distance.x,0,u);if(e.isFinal===!0){f>=Math.min(75,u)===!0?K():(l.animate(),B(0),h(q.value*u)),p.value=!1;return}h((b.lang.rtl===!0?_.value!==!0:_.value)?Math.max(u-f,0):Math.min(0,f-u)),B(V(f/u,0,1)),e.isFirst===!0&&(p.value=!0)}function ce(e){if(r.value!==!0)return;const u=m.value,f=e.direction===t.side,P=(b.lang.rtl===!0?f!==!0:f)?V(e.distance.x,0,u):0;if(e.isFinal===!0){Math.abs(P)<Math.min(75,u)===!0?(l.animate(),B(1),h(0)):$(),p.value=!1;return}h(q.value*P),B(V(1-P/u,0,1)),e.isFirst===!0&&(p.value=!0)}function ee(){z(!1),Z(!0)}function x(e,u){l.update(t.side,e,u)}function pe(e,u){e.value!==u&&(e.value=u)}function ae(e,u){x("size",e===!0?t.miniWidth:u)}return l.instances[t.side]=Q,ae(t.miniToOverlay,m.value),x("space",N.value),x("offset",j.value),t.showIfAbove===!0&&t.modelValue!==!0&&r.value===!0&&t["onUpdate:modelValue"]!==void 0&&w("update:modelValue",!0),Ve(()=>{w("on-layout",N.value),w("mini-state",I.value),F=t.showIfAbove===!0;const e=()=>{(r.value===!0?ne:re)(!1,!0)};if(l.totalWidth.value!==0){fe(e);return}E=c(l.totalWidth,()=>{E(),E=void 0,r.value===!1&&t.showIfAbove===!0&&s.value===!1?K(!1):e()})}),Ue(()=>{E!==void 0&&E(),clearTimeout(G),r.value===!0&&ee(),l.instances[t.side]===Q&&(l.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const e=[];s.value===!0&&(t.noSwipeOpen===!1&&e.push(M(H("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),xe.value)),e.push(ve("div",{ref:"backdrop",class:Se.value,style:Te.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",t.noSwipeBackdrop!==!0&&r.value===!0,()=>Oe.value)));const u=I.value===!0&&D.mini!==void 0,f=[H("div",{...U,key:""+u,class:[De.value,U.class]},u===!0?D.mini():ze(D.default))];return t.elevated===!0&&r.value===!0&&f.push(H("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(ve("aside",{ref:"content",class:Be.value,style:Ae.value},f,"contentclose",t.noSwipeClose!==!0&&s.value===!0,()=>Me.value)),H("div",{class:"q-drawer-container"},e)}}}),ia=Ke({id:"main-menu",state:()=>({drawer:!1})}),sa=ia,wa=Xe({__name:"MenuLayout",setup(t){const D=sa(),w=je();return(U,v)=>{const b=Je("router-view");return S(),T(a(oa),{view:"hHh LpR lff"},{default:n(()=>[o(a(Ye),{elevated:""},{default:n(()=>[o(a(Ze),null,{default:n(()=>[o(a(me),{dense:"",flat:"",round:"",icon:a(k).MENU,onClick:v[0]||(v[0]=L=>a(D).drawer=!a(D).drawer)},null,8,["icon"]),o(a(ea),null,{default:n(()=>[y(aa(a(ta).APP_NAME),1)]),_:1}),a(w).name!==a(g).DASHBOARD?(S(),T(a(me),{key:0,flat:"",dense:"",to:{name:a(g).DASHBOARD},icon:a(k).RETURN_TO_DASHBOARD},null,8,["to","icon"])):la("",!0)]),_:1})]),_:1}),o(a(ra),{modelValue:a(D).drawer,"onUpdate:modelValue":v[1]||(v[1]=L=>a(D).drawer=L),width:250,"show-if-above":"",side:"left",bordered:""},{default:n(()=>[o(a(na),null,{default:n(()=>[o(a(A),null,{default:n(()=>[o(a(d),{class:"text-h6"},{default:n(()=>[y("Menu")]),_:1})]),_:1}),M((S(),T(a(A),{clickable:"",to:{name:a(g).DASHBOARD}},{default:n(()=>[o(a(d),{avatar:""},{default:n(()=>[o(a(O),{color:"primary",name:a(k).DASHBOARD},null,8,["name"])]),_:1}),o(a(d),null,{default:n(()=>[y("Dashboard")]),_:1})]),_:1},8,["to"])),[[C]]),M((S(),T(a(A),{clickable:"",to:{name:a(g).SETTINGS}},{default:n(()=>[o(a(d),{avatar:""},{default:n(()=>[o(a(O),{color:"primary",name:a(k).SETTINGS},null,8,["name"])]),_:1}),o(a(d),null,{default:n(()=>[y("Settings")]),_:1})]),_:1},8,["to"])),[[C]]),M((S(),T(a(A),{clickable:"",to:{name:a(g).ABOUT}},{default:n(()=>[o(a(d),{avatar:""},{default:n(()=>[o(a(O),{color:"primary",name:a(k).INFO},null,8,["name"])]),_:1}),o(a(d),null,{default:n(()=>[y("About")]),_:1})]),_:1},8,["to"])),[[C]]),o(a(A),null,{default:n(()=>[o(a(d),{class:"text-h6"},{default:n(()=>[y("Data Tables")]),_:1})]),_:1}),M((S(),T(a(A),{clickable:"",to:{name:a(g).LOGS_AND_SETTINGS_DATA}},{default:n(()=>[o(a(d),{avatar:""},{default:n(()=>[o(a(O),{color:"primary",name:a(k).LOGS},null,8,["name"])]),_:1}),o(a(d),null,{default:n(()=>[y("Logs & Settings")]),_:1})]),_:1},8,["to"])),[[C]]),M((S(),T(a(A),{clickable:"",to:{name:a(g).MEASUREMENTS_DATA}},{default:n(()=>[o(a(d),{avatar:""},{default:n(()=>[o(a(O),{color:"primary",name:a(k).MEASUREMENTS},null,8,["name"])]),_:1}),o(a(d),null,{default:n(()=>[y("Measurements")]),_:1})]),_:1},8,["to"])),[[C]]),M((S(),T(a(A),{clickable:"",to:{name:a(g).EXERCISES_DATA}},{default:n(()=>[o(a(d),{avatar:""},{default:n(()=>[o(a(O),{color:"primary",name:a(k).EXERCISES},null,8,["name"])]),_:1}),o(a(d),null,{default:n(()=>[y("Exercises")]),_:1})]),_:1},8,["to"])),[[C]]),M((S(),T(a(A),{clickable:"",to:{name:a(g).WORKOUTS_DATA}},{default:n(()=>[o(a(d),{avatar:""},{default:n(()=>[o(a(O),{color:"primary",name:a(k).WORKOUTS},null,8,["name"])]),_:1}),o(a(d),null,{default:n(()=>[y("Workouts")]),_:1})]),_:1},8,["to"])),[[C]])]),_:1})]),_:1},8,["modelValue"]),o(a(ua),null,{default:n(()=>[o(b)]),_:1})]),_:1})}}});export{wa as default};