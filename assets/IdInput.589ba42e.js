import{d as m,s as p,ad as I,H as c,y as l,o as f,c as y,w as g,a as v,g as x,u as o,I as b,$ as k}from"./index.3bb17302.js";import{d as B}from"./validators.51e7c766.js";const w=m({__name:"IdInput",setup(V){var s;const{log:d}=p(),e=I(),n=c(null);try{e.temporaryItem.id=(s=e.selected)!=null&&s.id?e.selectedItem.id:l(),e.validateItem.id=!0}catch(a){d.error("IdInput:Setup",a)}function i(){e.temporaryItem.id=l(),e.validateItem.id=!0}function u(){var a;e.validateItem.id=!!((a=n==null?void 0:n.value)!=null&&a.validate())}return(a,t)=>(f(),y(o(k),{modelValue:o(e).temporaryItem.id,"onUpdate:modelValue":t[1]||(t[1]=r=>o(e).temporaryItem.id=r),ref_key:"inputRef",ref:n,label:"Id",rules:[r=>o(B)(r)||"Id must be between 1 and 40 characters"],maxlength:40,dense:"",outlined:"",color:"primary",class:"q-mb-xs",onBlur:t[2]||(t[2]=r=>u())},{after:g(()=>[v(x,{icon:o(b).RENEW,color:"primary",class:"q-ml-xs q-px-sm",onClick:t[0]||(t[0]=r=>i())},null,8,["icon"])]),_:1},8,["modelValue","rules"]))}});export{w as default};
