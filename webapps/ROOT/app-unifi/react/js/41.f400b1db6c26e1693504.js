(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[41],{1774:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(3),r=a(2),c=a(1780),o=a.n(c),s=a(1259),_=a(493),d=a(494);const E=Object(l.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:l=null,leaveButtonText:c="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:m="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:T="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:u="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const p=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),I=Object(d.a)(t),R=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),A=Object(n.useCallback)(e=>(e={},t={})=>I(e,t)&&R(e,t),[I,R]);return!!e&&i.a.createElement(o.a,{when:A(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:m}),onClick:()=>l?l(e):e()},{type:"button",text:i.a.createElement(r.c,{id:c}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:p,parentSelector:_.b,title:i.a.createElement(r.c,{id:T}),onRequestClose:()=>l?l(e):e()},i.a.createElement(E,null,i.a.createElement(r.c,{id:u}))))}},1775:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},2292:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(2),r=a(5),c=a(23),o=a(168),s=a(2460),_=a(18),d=a(2429),E=a(251),m=a(28),T=a(40),u=a(16),p=a(32),I=a(34),R=a(2473),A=a(36),b=a(3),O=a(42),S=a(1763),C=a(1761),g=a(2379),h=a(1762),N=a(38),L=a(14),f=a(7),F=a(1772),v=a(786),M=a(10),G=a(719),x=a(2472),P=a(2563),U=a(2840),j=a(2381),D=a(87);const w=Object(b.c)(L.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 42px 16px 67px 16px;
  margin: 0 8px;

  textarea {
    line-height: 20px;
    padding: 10px 16px 18px 16px;
    resize: none;
  }
`,y=Object(b.c)(U.a)`
  margin-top: 24px;
  svg {
    margin-right: 6px;
  }
`,H=Object(b.c)(D.a)`
  width: 431px;
  header > div {
    font-size: 18px;
    line-height: 20px;
    padding-top: 10px;
  }
  footer {
    padding: 32px 40px;
    button {
      height: 32px;
    }
    > div {
      div:last-child button {
        width: 137px;
      }
    }
  }
`,Y=Object(l.f)(({onClose:e,intl:t})=>{const a=Object(r.useDispatch)(),{values:n,errors:c,setFieldValue:o,submitCount:s,handleSubmit:_}=Object(A.e)();return i.a.createElement(H,{size:"small",isOpen:!0,title:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_BATCH_ADD_MODAL_HEADER"}),actions:[{text:i.a.createElement(l.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",variant:"default",onClick:e},{text:i.a.createElement(l.c,{id:"COMMON_ACTION_ADD"}),type:"button",variant:"primary",onClick:()=>_()}]},i.a.createElement(w,{flexDirection:"column"},i.a.createElement(j.a,{rows:7,name:"batchIpAddresses",value:n.batchIpAddresses,onChange:(e,t)=>o("batchIpAddresses",t),placeholder:t.formatMessage({id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_BATCH_ADD_MODAL_PLACEHOLDER"}),full:!0}),!!(null==c?void 0:c.batchIpAddresses)&&s>0&&i.a.createElement(F.a,null,null==c?void 0:c.batchIpAddresses),i.a.createElement(y,{accept:"text/plain",variant:"inline",Icon:M.Db,onChange:async(e,t)=>{var n;const i="current"in t&&(null===(n=t.current)||void 0===n?void 0:n.files[0]),l=await((e,t)=>new Promise((a,n)=>{const i=new FileReader;i.onerror=function(){n(),t(Object(m.c)({icon:u.a.warning,message:"COMMON_NOTICE_UPLOAD_ERROR"}))},i.onload=function(){a(i.result)},i.readAsText(e)}))(i,a);o("batchIpAddresses",l)}},i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_BATCH_ADD_MODAL_IMPORT_BUTTON"}))))}),k={batchIpAddresses:""};var $=({onClose:e,setParentFieldValue:t,combinedIpAddresses:a})=>{const l=Object(n.useCallback)(n=>{const i=Object(x.f)(n.batchIpAddresses);t("combinedIpAddresses",[...a,...i.map(e=>{var t;const a=(null===(t=e.port)||void 0===t?void 0:t.split(",").filter(Boolean))||[],n=a.filter(e=>!e.includes("-")),i=a.filter(e=>e.includes("-"));return{ip_or_subnet:e.ip,ports:n.map(Number),port_ranges:i.map(e=>({port_start:Number(e.split("-")[0]),port_stop:Number(e.split("-")[1])}))}})]),e()},[e,t,a]);return i.a.createElement(A.c,{enableReinitialize:!0,initialValues:k,validationSchema:Object(R.c)(a.map(e=>"ip_or_subnet"in e&&e.ip_or_subnet)),onSubmit:l},i.a.createElement(Y,{onClose:e}))},B=a(2316),V=a(1895);const W=Object(b.c)(L.g)`
  padding: 0 16px 67px 16px;
  margin: 0 8px;

  textarea {
    line-height: 20px;
    padding: 10px 16px 18px 16px;
    resize: none;
  }

  table {
    margin-top: 14px;
    th {
      color: ${({theme:e})=>e.motifPalette.text02};
    }
    tr {
      background-color: transparent !important;
      height: 33px;
      svg {
        color: ${({theme:e})=>e.motifPalette.text00} !important;
      }
    }
  }
`,z=Object(b.c)(D.a)`
  width: 549px;
  height: 459px;
  header > div {
    font-size: 18px;
    line-height: 20px;
    padding: 22px 0;
    margin-bottom: 6px;
  }
  footer {
    padding: 32px 40px;
    button {
      height: 32px;
    }
    > div {
      div:last-child button {
        width: 137px;
      }
    }
  }
`;var K=Object(l.f)(({onClose:e,combinedIpAddresses:t,setParentFieldValue:a,intl:r})=>{const[c,o]=Object(n.useState)(""),[s,_]=Object(n.useState)(t.map(e=>e.id)),d=Object(n.useMemo)(()=>t.filter(e=>Object(x.a)(e,!0).includes(c)),[t,c]),E=Object(n.useCallback)(()=>{a("combinedIpAddresses",t.filter(e=>s.includes(e.id))),e()},[t,s,a,e]);return i.a.createElement(z,{size:"small",isOpen:!0,title:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_EDIT_MODAL_HEADER"}),actions:[{text:i.a.createElement(l.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",variant:"default",onClick:e},{text:i.a.createElement(l.c,{id:"COMMON_ACTION_APPLY_CHANGES"}),type:"button",variant:"primary",disabled:t.length===s.length,onClick:E}]},i.a.createElement(W,{flexDirection:"column"},i.a.createElement(B.a,{iconBefore:i.a.createElement(M.Rb,{size:"small"}),label:r.formatMessage({id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_EDIT_MODAL_SEARCH_LABEL"}),onChange:(e,t)=>o(t),onClear:()=>o(""),value:c,full:!0}),i.a.createElement(V.a,{columns:Object(R.d)(!1),items:d,disableColumnFilters:!0,multiSelectMode:!0,initialSelectedIds:s,onChangeSelection:e=>{_(e)}})))});const q=(e,t)=>e.map(e=>({id:Object(x.d)(e),showPortColumn:t,...e})),J=Object(b.c)("div")`
  margin-bottom: 18px;
  span {
    font-weight: 400;
  }
  button {
    &:first-child {
      margin-right: 4px;
    }
    background-color: ${({theme:e})=>e.motifPalette.disabledInteractive02};
  }
  button[class*='tab-selected'] {
    background-color: ${({theme:e})=>e.motifPalette.activeUi09};
  }
`,Q=Object(b.c)(o.a)`
  margin: 18px 0 12px 0;
  svg {
    margin-right: 6px;
  }
`,X=Object(b.c)(F.a)`
  position: absolute;
  bottom: 0;
`,Z=Object(b.c)(h.a,{shouldForwardProp:e=>"activeTabIsIpRange"!==e})`
  th {
    color: ${({theme:e})=>e.motifPalette.text02};
  }
  ${({activeTabIsIpRange:e})=>e&&"\n      > div:nth-child(1) {\n        flex: 0 0 129px;\n      }\n      > div:nth-child(2) {\n        flex: 1; \n      }\n  "}
`;function ee(){const{values:e,values:{combinedIpAddresses:t},setFieldValue:a,errors:r,submitCount:c}=Object(A.e)(),o=Object(n.useRef)(null),[s,_]=Object(n.useState)(P.b.IP),[d,E]=Object(n.useState)(!1),[m,u]=Object(n.useState)(!1),p={new_ip_or_subnet_address:r.combinedIpAddresses||{},...r};Object(T.h)(o,p);const I=Object(n.useMemo)(()=>({editActive:!1,combinedIpAddresses:q(t,s===P.b.IP),new_ip_or_subnet_address:"",new_ports:"",new_ip_or_subnet_address_start:"",new_ip_or_subnet_address_stop:""}),[t,s]),b=Object(n.useMemo)(()=>s===P.b.IP?[{name:"new_ip_or_subnet_address",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_PLACEHOLDER",inline:!0,hasTwoLineError:!0},{name:"new_ports",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_PORT",inline:!0,hasTwoLineError:!0}]:[{name:"new_ip_or_subnet_address_start",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_PLACEHOLDER",label:"COMMON_START",inline:!0,hasTwoLineError:!0},{name:"new_ip_or_subnet_address_stop",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_PLACEHOLDER",label:"COMMON_STOP",inline:!0,hasTwoLineError:!0}],[s]),S=Object(n.useMemo)(()=>Object(R.d)(s===P.b.IP),[s]),N=Object(n.useCallback)(e=>{a("combinedIpAddresses",e.map(e=>({...e,showPortColumn:s===P.b.IP})))},[a,s]),L=Object(n.useCallback)(({combinedIpAddresses:e,new_ip_or_subnet_address:t,new_ports:a,new_ip_or_subnet_address_start:n,new_ip_or_subnet_address_stop:i})=>{if(s===P.b.IP){const n=a.split(",").filter(Boolean),i=n.filter(e=>!e.includes("-")),l=n.filter(e=>e.includes("-"));N([...e,{ip_or_subnet:t,ports:i.length?i.map(Number):[],port_ranges:l.map(e=>({port_start:Number(e.split("-")[0]),port_stop:Number(e.split("-")[1])}))}])}else N([...e,{ip_start:n,ip_stop:i}])},[s,N]),f=Object(n.useCallback)(({id:e})=>{N(t.filter(t=>Object(x.d)(t)!==e))},[N,t]);return i.a.createElement(C.a,null,d&&i.a.createElement($,{onClose:()=>E(!1),setParentFieldValue:a,combinedIpAddresses:t}),m&&i.a.createElement(K,{onClose:()=>u(!1),combinedIpAddresses:I.combinedIpAddresses,setParentFieldValue:a}),i.a.createElement(g.a,{alignWith:0,htmlFor:"combinedIpAddresses",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_LABEL"}),description:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_DESCRIPTION"})}),i.a.createElement(h.a,{wrap:!0},i.a.createElement(J,null,i.a.createElement(v.a,{tabs:R.j,selectedTab:s,onSelectTab:({id:t})=>{_(t),a("combinedIpAddresses",e.combinedIpAddresses.map(e=>({...e,showPortColumn:t===P.b.IP})))},variant:"tertiary"})),i.a.createElement(Z,{wrap:!0,activeTabIsIpRange:s===P.b.IP_RANGE},i.a.createElement(G.a,{fieldName:"combinedIpAddresses",columns:S,newFields:b,onAddItem:L,customEditFunction:()=>u(!0),onRemoveItem:f,initialValues:I,validationSchema:e=>Object(R.i)(e,s),useValuesInSchema:!0,useInitialPositionAddButton:!0},i.a.createElement(O.a,{color:"tertiary"},i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_EXAMPLE"})),s===P.b.IP&&i.a.createElement(Q,{type:"button",variant:"inline",Icon:M.Db,onClick:()=>E(!0)},i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_BATCH_ADD_BUTTON"})),!!(null==r?void 0:r.combinedIpAddresses)&&c>0&&i.a.createElement(X,null,null==r?void 0:r.combinedIpAddresses)))))}const te=Object(b.c)(O.a)`
  width: 100%;
  padding: 8px 24px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,ae=Object(b.c)("li")`
  height: 68px;
  padding-left: 32px;
  svg {
    margin-right: 24px !important;
  }
  img {
    margin-right: 24px !important;
  }
`,ne=Object(b.c)(N.Field)`
  div[class*='selectedValueImage'] {
    margin-bottom: 0;
  }
`,ie=({id:e,onClick:t,className:a,isSelected:n,option:{isGroup:r=!1,label:c,image:o,secondaryLabel:_,value:d,showDevicesLabel:E}})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,{key:`${e}-${c}`,id:e,onClick:t,className:a,"aria-selected":n,role:"option",isGroup:r},i.a.createElement(L.g,{alignItems:"center",justifyContent:"center",maxWidth:"33px"},o),i.a.createElement(L.g,{flexDirection:"column",justifyContent:"center"},c,i.a.createElement(O.a,{color:"tertiary",size:"caption"},_))),d===s.c.ALL_CLIENTS&&i.a.createElement(te,{size:"body"},i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TARGET_DEVICES_OPTIONS_GROUP_DEVICES"})),E&&i.a.createElement(te,{size:"body"},i.a.createElement(l.c,{id:"COMMON_DEVICES"}))),le=({id:e,onClick:t,className:a,isSelected:n,option:{isGroup:r=!1,label:c,secondaryLabel:o,image:s,value:_}})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,{key:`${e}-${c}`,id:e,onClick:t,className:a,"aria-selected":n,role:"option",isGroup:r},i.a.createElement(L.g,{alignItems:"center"},s,i.a.createElement(L.g,{flexDirection:"column",justifyContent:"center"},c,i.a.createElement(O.a,{color:"tertiary",size:"caption"},o)))),"All"===_&&i.a.createElement(te,{size:"body"},i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_LOCAL_NETWORKS_OPTIONS_LABEL_NETWORKS"})));var re=Object(l.f)(({intl:e})=>{const{setFieldValue:t,values:a}=Object(A.e)(),c=Object(r.useSelector)(p.selectCombinedClientsData),o=Object(r.useSelector)(I.selectLocalNetworks),_=Object(n.useMemo)(()=>Object(R.g)(e),[e]),d=Object(n.useMemo)(()=>Object(R.h)(e),[e]),E=Object(n.useMemo)(()=>Object(R.f)(e,c,o,a),[e,c,o,a]),m=Object(n.useMemo)(()=>Object(R.e)(e,o),[e,o]);Object(n.useEffect)(()=>{a.matching_target===s.b.LOCAL_NETWORK&&(a.traffic_direction===s.d.FROM||a.traffic_direction===s.d.FROM_AND_TO)&&t("target_devices",[...a.target_devices.filter(e=>!c.find(t=>"mac"in t&&t.mac===e))])},[t,a.matching_target,a.traffic_direction,c]);const u=Object(n.useCallback)((e,n)=>{a[n].includes(e.value)?t(n,e.isGroup?[]:[...a[n].filter(t=>t!==e.value&&!e.isGroup)]):e.isGroup?t(n,[e.value]):t(n,[...a[n].filter(e=>"All"!==e&&e!==s.c.ALL_CLIENTS),e.value])},[a,t]);return Object(T.g)([Object(s.e)(void 0,{crudCacheStrategy:{type:f.a.CACHE}})],i.a.createElement(S.a,null,i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"toggleSmall",htmlFor:"enabled",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_ENABLED_LABEL"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(N.Field,{name:"enabled",type:"checkbox",fast:!0}))),i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"input",htmlFor:"description",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_DESCRIPTION_LABEL"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(N.Field,{name:"description",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_DESCRIPTION_PLACEHOLDER",fast:!0}))),i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"toggle",htmlFor:"action",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_ACTION_LABEL"})}),i.a.createElement(h.a,null,i.a.createElement(N.Field,{multiline:!0,name:"action",toggleboxType:"radio",type:"togglebox",value:s.a.ALLOW,fast:!0},i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_ACTION_ALLOW"})),i.a.createElement(N.Field,{multiline:!0,name:"action",toggleboxType:"radio",type:"togglebox",value:s.a.BLOCK,fast:!0},i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_ACTION_BLOCK"})))),i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"dropdown",htmlFor:"matching_target",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_LABEL"}),description:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_DESCRIPTION"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(ne,{name:"matching_target",type:"dropdown",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_PLACEHOLDER",options:R.l,maxHeight:170,translateOptions:!0,translatePlaceholder:!0,validated:!0,full:!0,fast:!0}))),a.matching_target===s.b.APP&&i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"dropdown",htmlFor:"app_ids",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_APP_LABEL"}),description:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_APP_DESCRIPTION"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(N.Field,{name:"app_ids",type:"dropdown",options:_,full:!0,multi:!0,fast:!0,validated:!0,searchable:!0,placeholder:" ",onChange:e=>u(e,"app_ids")}))),a.matching_target===s.b.APP_CATEGORY&&i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"dropdown",htmlFor:"app_category_ids",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_APP_CATEGORY_LABEL"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(N.Field,{name:"app_category_ids",type:"dropdown",options:d,full:!0,multi:!0,fast:!0,validated:!0,onChange:e=>u(e,"app_category_ids")}))),a.matching_target===s.b.IP&&i.a.createElement(ee,null),a.matching_target===s.b.LOCAL_NETWORK&&i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"dropdown",htmlFor:"network_ids",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_LOCAL_NETWORK_LABEL"}),description:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_LOCAL_NETWORK_DESCRIPTION"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(N.Field,{name:"network_ids",type:"dropdown",options:m,multi:!0,full:!0,fast:!0,validated:!0,maxHeight:600,onChange:e=>u(e,"network_ids"),renderOption:le}))),a.matching_target===s.b.LOCAL_NETWORK&&i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"dropdown",htmlFor:"traffic_direction",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_TRAFFIC_LABEL"}),description:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_TRAFFIC_DESCRIPTION"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(N.Field,{name:"traffic_direction",type:"dropdown",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_TRAFFIC_PLACEHOLDER",options:R.k,translateOptions:!0,translatePlaceholder:!0,validated:!0,full:!0,fast:!0}))),i.a.createElement(C.a,null,i.a.createElement(g.a,{alignWith:"dropdown",htmlFor:"target_devices",label:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TARGET_DEVICES_LABEL"}),description:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TARGET_DEVICES_DESCRIPTION"})}),i.a.createElement(h.a,{column:!0},i.a.createElement(N.Field,{name:"target_devices",options:E,type:"dropdown",placeholder:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TARGET_DEVICES_PLACEHOLDER",translatePlaceholder:!0,validated:!0,multi:!0,full:!0,maxHeight:600,onChange:e=>u(e,"target_devices"),renderOption:ie,searchable:!0})))))});t.default=Object(l.f)(({intl:e})=>{const{ruleId:t}=Object(c.m)(),a=Object(r.useDispatch)(),A=Object(T.i)({openTrafficRulesAccordion:!0}),b=Object(r.useSelector)(p.selectCombinedClientsData),O=Object(r.useSelector)(I.selectLocalNetworks),S=Object(r.useSelector)(s.h),C=Object(r.useSelector)(_.x),g=S.find(e=>e._id===t),h=Object(n.useMemo)(()=>Object(R.e)(e,O),[e,O]),N=Object(n.useMemo)(()=>Object(x.c)(h,g),[g,h]);let L=Object(T.o)({component:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TITLE_NEW"}),message:"traffic-rule"},"traffic-rule",(null==g?void 0:g._id)?null==g?void 0:g.description:void 0);(null==g?void 0:g._id)&&!(null==g?void 0:g.description)&&(L={component:i.a.createElement(l.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TITLE_EDIT"}),message:"traffic-rule"});const f=Object(n.useCallback)((t,{setSubmitting:n})=>{const i=Object(R.f)(e,b,O,t);a(Object(s.g)(Object(x.g)(t,i,h))).then(()=>{a(Object(m.c)({icon:u.a.success,message:"SETTINGS_SECURITY_TRAFFIC_RULES_TOAST_SAVE_SUCCESS"})),A()}).catch(e=>{a(Object(m.c)({errorMessage:e.msg,errorValues:e,icon:u.a.danger,message:"SETTINGS_SECURITY_TRAFFIC_RULES_TOAST_SAVE_FAILURE"})),n(!1)})},[a,A,h,O,b,e]),F=Object(n.useCallback)(()=>{a(Object(E.b)({name:N.description||e.formatMessage({id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TITLE_REMOVE_FALLBACK"}),onConfirm:()=>a(Object(s.f)({id:N._id,description:N.description})).then(()=>{A()})}))},[a,N,A,e]);return i.a.createElement(d.b,{goBack:A,initialValues:N,isView:C,showBack:!0,title:L,validationSchema:R.m,onEscClicked:A,onSubmit:f,footerActiveOverride:!!(null==N?void 0:N._id),submitText:(null==N?void 0:N._id)?"COMMON_ACTION_APPLY_CHANGES":"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_BITTON_ADD_NEW",customFooterButtons:e=>(null==N?void 0:N._id)&&!C&&i.a.createElement(o.a,{disabled:e,type:"button",variant:"tertiary",color:"danger",onClick:F},i.a.createElement(l.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(re,null))})},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return b}));var n=a(0),i=a.n(n),l=a(3),r=a(2),c=a(36),o=a(2838),s=a(2760),_=a(1774),d=a(867),E=a(14),m=a(10),T=a(42);const u=Object(l.c)(E.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,p=Object(l.c)(E.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(l.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,R=Object(l.c)(E.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,A=Object(l.c)(T.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var b=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:l,ignoredPaths:r})=>i.a.createElement(p,{flex:"none",height:"65px"},i.a.createElement(E.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(u,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(R,{legacy:!1,name:"backButton",type:"button",onClick:a},i.a.createElement(m.g,{size:"original"}))),i.a.createElement(I,null,i.a.createElement(A,{weight:"bold"},e.component)),i.a.createElement(u,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!l&&i.a.createElement(R,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(m.A,{size:"original"})))));const O=Object(l.c)(E.g)`
  width: 100%;
  max-width: ${d.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,S=Object(l.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,C=Object(l.c)(E.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,g=Object(l.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${d.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,h=Object(l.c)(E.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,N=Object(l.c)(E.k)`
  height: 100%;
  width: 100%;
`;var L=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:l,isView:o,showBack:d,title:m,unsavedChangesModalIgnoredPaths:T,onEscClicked:u,submitText:p="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:I=!1,customFooterButtons:R,hidddenHeader:A,className:L,...f})=>i.a.createElement(c.c,Object.assign({enableReinitialize:!0},f),({dirty:l,handleReset:c,handleSubmit:f,isSubmitting:F})=>i.a.createElement(S,{autoComplete:"off",onSubmit:f,className:L},i.a.createElement(N,{vertical:!0},!A&&i.a.createElement(b,{goBack:a,hideClose:n,showBack:d,title:m,onEscClicked:u,ignoredPaths:T}),i.a.createElement(h,{flex:"1"},i.a.createElement(O,{flex:"none",flexDirection:"column"},e)),!t&&!o&&i.a.createElement(_.a,{ignoredPaths:T,when:l&&!F}),(!o||I)&&i.a.createElement(g,{active:l||I},i.a.createElement(E.g,{justifyContent:R?"space-between":"flex-end",width:"100%",alignItems:"center"},R&&i.a.createElement(C,null,R(F)),!o&&i.a.createElement(E.g,null,i.a.createElement(s.a,{disabled:!l||F,type:"button",variant:"default",onClick:c},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!l||F,type:"submit",variant:"primary"},i.a.createElement(r.c,{id:p}))))))))},2438:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return s}));var n=function(e){return e.toString().substring(1).split(/\/([^/]*)$/)},i=function(e,t){var a=n(e),i=a[0],l=a[1];return new RegExp(t.call(t,i),l)},l=function(e){return i(e,(function(e){var t="^"===e.substring(0,1),a="$"===e.substring(e.length-1);if(!t&&!a)throw new Error("Unable to modify - regex does not contain modifiers to remove");return e.substring(t?1:0,e.length-(a?1:0))}))},r=function(e){return n(e)[0]},c=function(e){return i(e,(function(e){if("^"===e.substring(0,1)||"$"===e.substring(e.length-1))throw new Error("Unable to modify - regex already contains one or more modifiers");return"^".concat(e,"$")}))},o=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("Unable to combine - missing source regexes");var a=e.map((function(e){return"(".concat(n(e)[0],")")})).join("|");return new RegExp(a,t)},s=function(e,t,a,i){return new RegExp((e||"")+n(t)[0]+(a||""),i)}},2460:function(e,t,a){"use strict";a.d(t,"e",(function(){return c})),a.d(t,"g",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"h",(function(){return E})),a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return T})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return p}));var n=a(7);const i="trafficrules",l="/v2/api/site/{site}/"+i;var r=a(25);const c=(e,t)=>Object(n.q)(i,l,e,{idField:"_id",...t}),o=(e,t,a)=>e._id?Object(n.D)(i,e._id,`${l}/${e._id}`,e):Object(n.i)(i,l,e,t,{idField:"_id",...a,fetchConfig:{getAllPostData:!0}}),s=({id:e,description:t})=>Object(n.n)(i,e,`${l}/${e}`,{},Object(r.a)("SETTINGS_SECURITY_TRAFFIC_RULES_TOAST_REMOVE_FAILURE","SETTINGS_SECURITY_TRAFFIC_RULES_TOAST_REMOVE_SUCCESS",{name:t}));var _=a(6);const d=Object(n.A)(c()),E=Object(_.a)(d,r.c);var m,T,u,p;!function(e){e.ALLOW="ALLOW",e.BLOCK="BLOCK"}(m||(m={})),function(e){e.APP="APP",e.APP_CATEGORY="APP_CATEGORY",e.INTERNET="INTERNET",e.IP="IP",e.LOCAL_NETWORK="LOCAL_NETWORK"}(T||(T={})),function(e){e.ALL_CLIENTS="ALL_CLIENTS",e.CLIENT="CLIENT",e.NETWORK="NETWORK"}(u||(u={})),function(e){e.FROM="FROM",e.TO="TO",e.FROM_AND_TO="FROM_AND_TO"}(p||(p={}))},2472:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"g",(function(){return _})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return E})),a.d(t,"a",(function(){return m})),a.d(t,"f",(function(){return T}));var n=a(2460),i=a(124),l=a(2438),r=a(101),c=a(2473);const o=(e=[],t)=>(t?e.length===c.b.length:e.length===c.a.length)?["All"]:e,s=(e,t)=>{var a;const i=(null===(a=null==t?void 0:t.network_ids)||void 0===a?void 0:a.length)===e.length-1?["All"]:null==t?void 0:t.network_ids;return{enabled:!0,description:"",action:n.a.ALLOW,traffic_direction:void 0,...t,app_ids:o(null==t?void 0:t.app_ids),app_category_ids:o(null==t?void 0:t.app_category_ids,!0),target_devices:(null==t?void 0:t.target_devices.map(e=>e.client_mac||e.network_id||n.c.ALL_CLIENTS))||[],network_ids:i||[],combinedIpAddresses:[...(null==t?void 0:t.ip_addresses)||[],...(null==t?void 0:t.ip_ranges)||[]]}},_=(e,t,a)=>{var l,r;const{combinedIpAddresses:o,...s}=e;let _=[...e.network_ids];return"All"===_[0]&&(_=a.filter(e=>"All"!==e.value).map(e=>e.value)),{...s,target_devices:e.target_devices.map(e=>{const a=t.find(t=>t.value===e);return e===n.c.ALL_CLIENTS?{type:n.c.ALL_CLIENTS}:a.type===n.c.NETWORK?{type:a.type,network_id:a.value}:{type:a.type,client_mac:a.value}}),app_ids:"All"===(null===(l=e.app_ids)||void 0===l?void 0:l[0])?c.a:e.app_ids,app_category_ids:"All"===(null===(r=e.app_category_ids)||void 0===r?void 0:r[0])?c.b:e.app_category_ids,ip_addresses:e.combinedIpAddresses.filter(e=>!!e.ip_or_subnet).map(e=>({...e,ip_version:Object(i.isValidIpv6)(e.ip_or_subnet)?"v6":"v4"})),ip_ranges:e.combinedIpAddresses.filter(e=>!!e.ip_start).map(e=>({...e,ip_version:Object(i.isValidIpv6)(e.ip_start)?"v6":"v4"})),network_ids:_}},d=e=>e.ip_or_subnet||`${e.ip_start}-${e.ip_stop}`,E=e=>{var t,a;return`${(null===(t=e.ports)||void 0===t?void 0:t.length)>0?""+e.ports.map((t,a)=>`${t}${a===e.ports.length?",":""}`):""}${(null===(a=e.port_ranges)||void 0===a?void 0:a.length)>0?""+e.port_ranges.map((t,a)=>`${t.port_start}-${t.port_stop}${a===e.port_ranges.length?",":""}`):""}`},m=(e,t)=>e.ip_or_subnet?`${e.ip_or_subnet}${t&&E(e)?":"+E(e):""}`:`${e.ip_start}-${e.ip_stop}`,T=e=>{var t;return null===(t=null==e?void 0:e.split(/;|\n/))||void 0===t?void 0:t.map(e=>e.trim()).filter(Boolean).map(e=>(e=>{let t,a=e;return e.includes("[")&&e.includes("]")&&(a=e.split("]")[0].replace("[",""),[,t]=e.split("]")),Object(l.e)([r.i,r.k]).test(e.split(":")[0])&&([a,t]=e.split(":")),{ip:a,port:t}})(e))}},2473:function(e,t,a){"use strict";a.d(t,"l",(function(){return b})),a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return S})),a.d(t,"g",(function(){return C})),a.d(t,"h",(function(){return g})),a.d(t,"f",(function(){return h})),a.d(t,"e",(function(){return N})),a.d(t,"k",(function(){return L})),a.d(t,"m",(function(){return f})),a.d(t,"i",(function(){return v})),a.d(t,"c",(function(){return G})),a.d(t,"j",(function(){return x})),a.d(t,"d",(function(){return P}));var n=a(0),i=a.n(n),l=a(10),r=a(2),c=a(3),o=a(2438),s=a(74),_=a(2460),d=a(179),E=a(696),m=a(32),T=a(294),u=a(101),p=a(1282),I=a(2563),R=a(2472);const A=Object(c.c)(l.Dc)`
  margin-left: 2px;
`,b=[{label:"SETTINGS_SECURITY_TRAFFIC_RULES_"+_.b.APP,value:_.b.APP,image:l.fb},{label:"SETTINGS_SECURITY_TRAFFIC_RULES_"+_.b.APP_CATEGORY,value:_.b.APP_CATEGORY,image:l.e},{label:"SETTINGS_SECURITY_TRAFFIC_RULES_"+_.b.IP,value:_.b.IP,image:l.db},{label:"SETTINGS_SECURITY_TRAFFIC_RULES_"+_.b.INTERNET,value:_.b.INTERNET,image:l.V},{label:"SETTINGS_SECURITY_TRAFFIC_RULES_"+_.b.LOCAL_NETWORK,value:_.b.LOCAL_NETWORK,image:l.ib}],O=[1572867,1573022,1114174,106,41,107,262276,1572874,262256,1572881,1572882,1,2,9,19,27,39,83,65538,65648,196614,196629,196640,196649,196680,196692,196738,196746,196758,196763,196772,196774,262148,262145,262149,262154,262155,262156,262163,262164,262175,262186,262187,262194,262207,262274,262275,262305,262333,327714,327775,327780,327786,393217,393220,393238,458755,458767,655363,720951,720991,786456,851975,851976,851978,851980,851981,851982,851984,851985,851989,851990,851991,851992,851993,851996,851997,851998,852006,852007,852052,852102,852116,852119,852128,852131,852147,852168,852170,852171,852177,852189,852192,852193,852197,852198,852200,852201,852202,852203,852206,852211,852212,852213,852214,852215,852218,852220,852240,852241,917514,917518,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917536,1114144,1114188,1114366,1572868,1572872,1572873,1572876,1572884,1572885,1572892,1572893,1572894,1572895,1572913,1573013,1573016,1573026].filter(e=>d.dpiApps[e]),S=[24,8,0,1,6,3,4,5,13,11,7,17],C=e=>[{label:e.formatMessage({id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_APP_OPTION_ALL"}),value:I.a.ALL,isGroup:!0,image:l.fb},...O.map(e=>({label:d.dpiApps[e].name,value:e,image:i.a.createElement(E.a,{name:d.dpiApps[e].name,iconFileName:d.dpiApps[e].iconFileName})}))],g=e=>[{label:e.formatMessage({id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_APP_CATEGORY_OPTION_ALL"}),value:I.a.ALL,isGroup:!0,image:i.a.createElement(l.e,{height:22,width:22})},...S.map(t=>({label:e.formatMessage({id:d.DPI_CATEGORIES_TRANSLATIONS[t]}),value:t}))],h=(e,t,a,n)=>{var r;const c=t.filter(e=>"mac"in e),o=n.matching_target===_.b.LOCAL_NETWORK&&(n.traffic_direction===_.d.FROM||n.traffic_direction===_.d.FROM_AND_TO),s=[];"All"!==(null===(r=n.network_ids)||void 0===r?void 0:r[0])&&a.forEach((l,r)=>{var c;const d=t.filter(e=>e.network_id===l._id);(null===(c=n.network_ids)||void 0===c?void 0:c.find(e=>e===l._id))||s.push({label:l.name,secondaryLabel:e.formatMessage({id:"COMMON_DEVICE_COUNT"},{count:d.length}),value:l._id,type:_.c.NETWORK,image:i.a.createElement(A,{height:19,width:19}),showDevicesLabel:!o&&r+1===a.length})});const d=o?[]:c.map(e=>({label:Object(m.getClientName)(e)||"-",secondaryLabel:e.ip||"-",value:e.mac,type:_.c.CLIENT,image:i.a.createElement(T.a,{client:e})}));return[{label:e.formatMessage({id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TARGET_DEVICES_OPTIONS_ALL_DEVICES"}),value:_.c.ALL_CLIENTS,image:i.a.createElement(l.G,{height:19,width:19}),isGroup:!0},...s,...d]},N=(e,t)=>[{label:e.formatMessage({id:"SETTINGS_SECURITY_TRAFFIC_RULES_LOCAL_NETWORKS_OPTIONS_ALL_NETWORKS"}),value:"All",image:i.a.createElement(A,{height:19,width:19}),isGroup:!0},...t.map(e=>({value:e._id,label:e.name,secondaryLabel:e.ip_subnet,image:i.a.createElement(A,{height:19,width:19})}))],L=(_.d.FROM_AND_TO,_.d.FROM,_.d.TO,[{label:"SETTINGS_SECURITY_TRAFFIC_RULES_LOCAL_NETWORK_TRAFFIC_OPTION_FROM_AND_TO",value:_.d.FROM_AND_TO},{label:"SETTINGS_SECURITY_TRAFFIC_RULES_LOCAL_NETWORK_TRAFFIC_OPTION_FROM",value:_.d.FROM},{label:"SETTINGS_SECURITY_TRAFFIC_RULES_LOCAL_NETWORK_TRAFFIC_OPTION_TO",value:_.d.TO}]),f=s.a.object().shape({enabled:s.a.boolean().required(),action:s.a.string().required(),description:s.a.string(),matching_target:s.a.string().oneOf([...Object.values(_.b)]).label("SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_LABEL").required(),target_devices:s.a.array().of(s.a.string()).min(1,i.a.createElement(r.c,{id:"COMMON_VALIDATION_MIN",values:{name:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_TARGET_DEVICES_LABEL"}),min:1}})),app_ids:s.a.array().when("matching_target",{is:_.b.APP,then:s.a.array().of(s.a.string()).min(1,i.a.createElement(r.c,{id:"COMMON_VALIDATION_MIN",values:{name:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_APP_LABEL"}),min:1}}))}),app_category_ids:s.a.array().when("matching_target",{is:_.b.APP_CATEGORY,then:s.a.array().of(s.a.string()).min(1,i.a.createElement(r.c,{id:"COMMON_VALIDATION_MIN",values:{name:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_APP_CATEGORY_LABEL"}),min:1}}))}),combinedIpAddresses:s.a.array().when("matching_target",{is:_.b.IP,then:s.a.array().label("SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_LABEL").required()}),network_ids:s.a.array().when("matching_target",{is:_.b.LOCAL_NETWORK,then:s.a.array().of(s.a.string()).min(1,i.a.createElement(r.c,{id:"COMMON_VALIDATION_MIN",values:{name:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_LOCAL_NETWORK_LABEL"}),min:1}}))}),traffic_direction:s.a.string().when("matching_target",{is:e=>e===_.b.LOCAL_NETWORK,then:s.a.string().oneOf([...Object.values(_.d)]).label("SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_TRAFFIC_LABEL").required()})}),F=()=>s.a.string().label("SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_LABEL").matches(Object(o.e)([u.i,u.l]),{message:i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_IP"})}),v=(e,t)=>{const a={arrayFieldName:"combinedIpAddresses",stringFieldName:"ip_or_subnet",errorMessage:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_UNIQUE_ERROR"})};return s.a.object().shape({...t===I.b.IP_RANGE?{new_ip_or_subnet_address_start:F().isIPUnique({formValues:null,...a}).required(),new_ip_or_subnet_address_stop:F().isIPUnique({formValues:null,...a}).required()}:{new_ip_or_subnet_address:s.a.string().label("SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_LABEL").matches(Object(o.e)([u.i,u.l,u.k,u.n]),{message:i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_IP"})}).isIPUnique({formValues:null,...a}).required(),new_ports:s.a.string().label("SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_PORT").unifiPortRange(i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"}))},combinedIpAddresses:s.a.array().required(),editActive:s.a.bool()})},M=Object(p.a)(!1),G=e=>s.a.object().shape({batchIpAddresses:s.a.string().label("SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_BATCH_ADD_MODAL_THIS_FIELD").required().test("isValidList",i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"}),(function(e){if(!e)return!0;const t=Object(R.f)(e);return null==t?void 0:t.every(e=>{const t=!e.port||M(e.port);return Object(o.e)([u.i,u.l,u.k,u.n]).test(e.ip)&&t})})).test("hasDuplicates",i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_UNIQUE_ERROR"}),(function(t){if(!t)return!0;const a=Object(R.f)(t),n=[...e,...null==a?void 0:a.map(e=>e.ip)];return n.length===new Set(n).size}))}),x=[{id:I.b.IP,label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_IP_TAB"})},{id:I.b.IP_RANGE,label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_IP_RANGE_TAB"})}],P=(i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_LABEL"}),e=>[{id:"id",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_LABEL"}),sortable:!1,renderCell:e=>Object(R.a)(e,!e.showPortColumn),minWidth:160},...e?[{id:"port",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_TRAFFIC_RULES_FORM_MATCHING_TARGET_IP_ADDRESS_PORT"}),sortable:!1,renderCell:e=>e.showPortColumn&&(Object(R.b)(e)||"-"),minWidth:120}]:[]])},2563:function(e,t,a){"use strict";var n,i;a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i})),function(e){e.IP="ip",e.IP_RANGE="ipRange"}(n||(n={})),function(e){e.ALL="All"}(i||(i={}))},696:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(3),r=a(10);var c=a(40);const o=Object(l.c)("img")`
  height: 22px;
  width: 22px;
  margin-right: 4px;
`,s=Object(l.c)(r.V)`
  margin: 0 9px 0 1px;
  color: #c2c4ce;
`;t.a=({name:e,iconFileName:t})=>{const[a,l]=Object(n.useState)(null),r=Object(n.useCallback)(()=>"this.style.display='none'",[]),_=Object(c.f)();return Object(n.useEffect)(()=>{const a=new Image,n=t&&encodeURI("https://static.ubnt.com/dpi/"+t)||null;_.current&&l(i.a.createElement(s,{width:18,height:18})),a.onload=()=>_.current&&l(i.a.createElement(o,{src:n,alt:"Application "+e,onError:r})),a.onerror=()=>l(i.a.createElement(s,{width:18,height:18})),a.src=n},[e,t,r,_]),a}},719:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return E})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return R.a})),a.d(t,"a",(function(){return D}));var n=a(0),i=a.n(n),l=a(3),r=a(363),c=a(804),o=a(214);const s=Object(l.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,_=(Object(l.c)(r.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(l.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),d=Object(l.c)(c.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,E=e=>i.a.createElement(_,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),m=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var T=a(1895),u=a(293);const p=Object(l.c)(T.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,I=e=>l.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(u.b)(({theme:e,...t})=>i.a.createElement(p,Object.assign({headerRowClassName:I(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var R=a(1775),A=a(577),b=a(1770),O=a(2),S=a(19),C=a(10),g=a(2399),h=a(36),N=a(14),L=a(38);const f=Object(l.c)("div")`
  display: flex;
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,F=Object(l.c)(N.c)`
  > * {
    vertical-align: middle;
  }
`,v=Object(l.c)("div",{shouldForwardProp:e=>"useInitialPositionAddButton"!==e})`
  position: absolute;
  right: -65px;
  top: 12px;
  ${({useInitialPositionAddButton:e})=>e&&"margin: 12px 0 0 16px; position: initial;"}
`,M=Object(l.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,G=Object(l.c)(N.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,x=Object(l.c)(N.g,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,P=Object(l.c)(N.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,U=Object(l.c)(N.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,j=Object(l.c)("div")`
  width: 100%;
  table {
    td {
      max-width: 170px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;var D=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:l,onRemoveItem:r,validationSchema:c,initialValues:o,onEditSubmit:s,customEditFunction:_,useValuesInSchema:d=!1,max:E,useWindowTable:m=!1,addButtonText:u="COMMON_ACTION_ADD",invalid:p,useInitialPositionAddButton:I,children:R,...D}){const w=Object(n.useContext)(N.l),[y,H]=Object(n.useState)(!0),Y=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(N.g,{alignItems:"center",marginRight:8,marginBottom:1},i.a.createElement(F,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{H(!1),r(t),await Promise.resolve(),H(!0)}},i.a.createElement(O.c,{id:"COMMON_ACTION_REMOVE"}))),[e,H,r]),k=Object(n.useMemo)(()=>m?g.a:T.a,[m]);return i.a.createElement(h.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>d?S.a.lazy(e=>c(e)):c},({values:n,errors:c,setFieldValue:s,handleSubmit:d,handleReset:m,setTouched:T,dirty:S,touched:g,submitCount:h})=>i.a.createElement(i.a.Fragment,null,t.map((a,r)=>i.a.createElement(f,{inline:a.inline,isLast:r===t.length-1,key:a.name},i.a.createElement(N.g,{flexDirection:"column",width:"100%",marginBottom:a.hasTwoLineError&&g[a.name]&&c[a.name]?48:16},i.a.createElement(L.Field,Object.assign({disabled:n.editActive||n[e].length>=E,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:void 0!==n[a.name]?g[a.name]&&c[a.name]:p,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!w&&l&&r===t.length-1&&i.a.createElement(v,{useInitialPositionAddButton:I},i.a.createElement(F,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),H(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await T(a,!0);t.find(e=>i[e.name])||l(n),H(!0)},Icon:C.Db,disabled:n.editActive||n[e].length>=E||!S},i.a.createElement(O.c,{id:u}))))),R,n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,l)=>i.a.createElement(G,{key:n.id,width:"100%"},D.columns.map((n,r)=>t[r]?i.a.createElement(x,{key:n.id,isLast:r===D.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(L.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${l}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),i.a.createElement(P,{justifyContent:"flex-end",width:"100%"},i.a.createElement(U,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),s("editActive",!1)}},i.a.createElement(O.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(N.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:d,disabled:Object(A.a)(Object(b.a)(n,"editActive"),Object(b.a)(o,"editActive"))},i.a.createElement(O.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(f,null,i.a.createElement(M,null,i.a.createElement(F,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),_?_():s("editActive",!0)},Icon:C.Cb},i.a.createElement(O.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&y&&i.a.createElement(j,null,i.a.createElement(k,{columns:D.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderHoverContent:r?Y:void 0})))))}}}]);
//# sourceMappingURL=41.f400b1db6c26e1693504.js.map