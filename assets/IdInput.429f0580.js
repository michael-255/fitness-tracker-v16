import{d as u,h as p,x as I,r as c,z as l,o as f,c as g,w as v,a as x,f as y,u as o,I as b,af as k}from"./index.04684acb.js";import{g as B}from"./validators.13905387.js";const w=u({__name:"IdInput",setup(V){var s;const{log:d}=p(),e=I(),n=c(null);try{e.temporaryItem.id=(s=e.selectedItem)!=null&&s.id?e.selectedItem.id:l(),e.validateItem.id=!0}catch(a){d.error("IdInput:Setup",a)}function i(){e.temporaryItem.id=l(),e.validateItem.id=!0}function m(){var a;e.validateItem.id=!!((a=n==null?void 0:n.value)!=null&&a.validate())}return(a,t)=>(f(),g(o(k),{modelValue:o(e).temporaryItem.id,"onUpdate:modelValue":t[1]||(t[1]=r=>o(e).temporaryItem.id=r),ref_key:"inputRef",ref:n,label:"Id",rules:[r=>o(B)(r)||"Id must be between 1 and 40 characters"],maxlength:40,dense:"",outlined:"",color:"primary",class:"q-mb-xs",onBlur:t[2]||(t[2]=r=>m())},{after:v(()=>[x(y,{icon:o(b).RENEW,color:"primary",class:"q-ml-xs q-px-sm",onClick:t[0]||(t[0]=r=>i())},null,8,["icon"])]),_:1},8,["modelValue","rules"]))}});export{w as default};
