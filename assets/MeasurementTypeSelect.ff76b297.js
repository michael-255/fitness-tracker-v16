import{Q as u}from"./QSelect.c54da541.js";import{d as i,s as d,ad as y,H as m,ai as c,ae as f,o as v,c as T,u as n}from"./index.3bb17302.js";import{b as I}from"./validators.51e7c766.js";import"./QChip.1015c209.js";import"./QItemSection.22a6a7ee.js";import"./QMenu.a33633d0.js";import"./selection.7371cec7.js";import"./format.3e32b8d9.js";const V=i({__name:"MeasurementTypeSelect",setup(g){const{log:l}=d(),e=y(),o=m(null),s=m([]);c(async()=>{try{s.value=Object.values(f),e.temporaryItem.measurementType=s.value[0],e.validateItem.measurementType=!0}catch(t){l.error("MeasurementTypeSelect:onMounted",t)}});function p(){var t;e.validateItem.measurementType=!!((t=o==null?void 0:o.value)!=null&&t.validate())}return(t,r)=>(v(),T(n(u),{modelValue:n(e).temporaryItem.measurementType,"onUpdate:modelValue":r[0]||(r[0]=a=>n(e).temporaryItem.measurementType=a),ref_key:"inputRef",ref:o,label:"Type",options:s.value,rules:[a=>n(I)(a)||"* Required"],"emit-value":"","map-options":"","options-dense":"",dense:"",outlined:"",color:"primary",class:"q-mb-xs",onBlur:r[1]||(r[1]=a=>p())},null,8,["modelValue","options","rules"]))}});export{V as default};