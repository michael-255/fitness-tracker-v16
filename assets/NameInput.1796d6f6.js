import{d as u,s as p,ad as d,H as i,o as c,c as f,u as n,$ as I}from"./index.3bb17302.js";import{c as g}from"./validators.51e7c766.js";const N=u({__name:"NameInput",setup(v){var m;const{log:l}=p(),e=d(),t=i(null);try{e.temporaryItem.name=(m=e.selected)!=null&&m.name?e.selectedItem.name:"Example Name",e.validateItem.name=!0}catch(a){l.error("NameInput:Setup",a)}function s(){var a;e.validateItem.name=!!((a=t==null?void 0:t.value)!=null&&a.validate())}return(a,r)=>(c(),f(n(I),{modelValue:n(e).temporaryItem.name,"onUpdate:modelValue":r[0]||(r[0]=o=>n(e).temporaryItem.name=o),ref_key:"inputRef",ref:t,label:"Name",rules:[o=>n(g)(o)||"Name must be between 1 and 40 characters"],maxlength:40,dense:"",outlined:"",color:"primary",class:"q-mb-xs",onBlur:r[1]||(r[1]=o=>s())},null,8,["modelValue","rules"]))}});export{N as default};
