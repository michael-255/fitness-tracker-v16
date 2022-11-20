import{Q as f}from"./QSelect.1cbf4097.js";import{d as v,s as b,ab as g,G as u,ah as y,aX as D,D as S,bx as P,o as T,c as _,u as p}from"./index.66b77c2e.js";import{b as k}from"./validators.13905387.js";import"./QChip.c7c0f1c4.js";import"./QItemSection.a17054bd.js";import"./QMenu.66a83f1b.js";import"./selection.d4051259.js";import"./format.3e32b8d9.js";const A=v({__name:"ParentIdSelect",setup(x){const{log:i}=b(),e=g(),o=u(null),l=u([]);y(async()=>{var n,a,r,d;try{const s=D.getParentTable(e.table);if(s){const c=(await S.getAll(s)).sort((t,m)=>t.name.localeCompare(m.name));if(l.value=c.map(t=>({value:t.id,label:`${t.name} (${P(t.id,4,"*")})`})),(n=e.selectedItem)!=null&&n.parentId){const t=(r=(a=l.value)==null?void 0:a.find(m=>m.value===e.selectedItem.parentId))==null?void 0:r.value;t?(e.temporaryItem.parentId=t,e.validateItem.parentId=!0):(e.temporaryItem.parentId=null,e.validateItem.parentId=!1)}else((d=l.value)==null?void 0:d.length)>0?(e.temporaryItem.parentId=l.value[0].value,e.validateItem.parentId=!0):(e.temporaryItem.parentId=null,e.validateItem.parentId=!1)}else i.error("No parent table to make selection",{name:"ParentIdSelect:MissingParentTable"})}catch(s){i.error("ParentIdSelect:onMounted",s)}});function I(){var n;e.validateItem.parentId=!!((n=o==null?void 0:o.value)!=null&&n.validate())}return(n,a)=>(T(),_(p(f),{modelValue:p(e).temporaryItem.parentId,"onUpdate:modelValue":a[0]||(a[0]=r=>p(e).temporaryItem.parentId=r),ref_key:"inputRef",ref:o,label:"Parent",options:l.value,rules:[r=>p(k)(r)||"* Required"],"emit-value":"","map-options":"","options-dense":"",dense:"",outlined:"",color:"primary",class:"q-mb-xs",onBlur:a[1]||(a[1]=r=>I())},null,8,["modelValue","options","rules"]))}});export{A as default};
