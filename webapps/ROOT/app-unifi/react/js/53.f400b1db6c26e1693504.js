(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[53],{1774:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(3),l=a(2),E=a(1780),r=a.n(E),s=a(1259),o=a(493),_=a(494);const N=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null,leaveButtonText:E="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:T="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:O="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:d="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const S=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),m=Object(_.a)(t),C=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),I=Object(n.useCallback)(e=>(e={},t={})=>m(e,t)&&C(e,t),[m,C]);return!!e&&i.a.createElement(r.a,{when:I(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(l.c,{id:T}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(l.c,{id:E}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:S,parentSelector:o.b,title:i.a.createElement(l.c,{id:O}),onRequestClose:()=>c?c(e):e()},i.a.createElement(N,null,i.a.createElement(l.c,{id:d}))))}},2282:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(40),l=a(3),E=a(5),r=a(18),s=a(7);const o="alert/setting",_="/v2/api/site/{site}/"+o;var N=a(579),T=a(2843);const O=(e,t)=>Object(s.t)(o,_,"alertSetting",e,t),d=e=>Object(s.D)(o,"alertSetting",_,(e=>{const t=Object(N.a)(e.alert_type_settings);return Object.keys(t).forEach(e=>{Object(T.a)(t,[e,"label"]),Object(T.a)(t,[e,"level"]),Object(T.a)(t,[e,"description"])}),{...e,alert_type_settings:t}})(e),{},{extend:!0,mergeAndOverrideKeys:[]});var S=a(6);const m=Object(S.a)(e=>Object(s.w)(O(),e.models),e=>{var t;return null!==(t=null==e?void 0:e.data)&&void 0!==t?t:{}});var C,I,g;!function(e){e.AUTO="AUTO",e.CUSTOM="CUSTOM",e.OFF="OFF"}(C||(C={})),function(e){e.BASIC="BASIC",e.ADVANCED="ADVANCED"}(I||(I={})),function(e){e.DEVICE_CONNECTION="DEVICE_CONNECTION",e.BACKUP_CONNECTION_IN_USE="BACKUP_CONNECTION_IN_USE",e.CLIENT_WIFI_CONNECTION_ISSUE="CLIENT_WIFI_CONNECTION_ISSUE",e.FIRMWARE_UPDATE="FIRMWARE_UPDATE",e.CLIENT_CONNECTION="CLIENT_CONNECTION",e.VPN_CLIENT_CONNECTION="VPN_CLIENT_CONNECTION",e.HOTSPOT_CLIENT_CONNECTION="HOTSPOT_CLIENT_CONNECTION",e.UNASSIGNED_DEVICE_IP_ADDRESS="UNASSIGNED_DEVICE_IP_ADDRESS",e.ROGUE_ACCESS_POINT="ROGUE_ACCESS_POINT",e.AP_CHANNEL_CHANGE="AP_CHANNEL_CHANGE",e.BLOCKED_CLIENT_CONNECTION_ATTEMPT="BLOCKED_CLIENT_CONNECTION_ATTEMPT",e.RADIUS_SERVER_ISSUE="RADIUS_SERVER_ISSUE",e.AP_RADAR_DETECTION="AP_RADAR_DETECTION",e.DNS_SERVER_ISSUE="DNS_SERVER_ISSUE",e.THREAT_DETECTION_AND_PREVENTION="THREAT_DETECTION_AND_PREVENTION"}(g||(g={}));var h=a(2429),p=a(28),A=a(16),u=a(2),b=a(1763),x=a(2891),f=a(2822),R=a(2892),D=a(42),M=a(2881),F=a(36),j=a(10);const v=Object(l.c)(b.a)`
  padding: 32px 0px !important;
  max-width: none;
`,P=Object(l.c)(x.a)`
  > div:last-child:empty {
    margin-top: 0;
  }
`;var k=Object(u.f)(({intl:e})=>{const{values:t,setValues:a}=Object(F.e)(),{alert_type_settings:n,setting_preference:c}=t;return i.a.createElement(v,null,i.a.createElement(P,{headerCaption:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_HEADER_CAPTION"}),headerContent:i.a.createElement(f.a,{direction:"row",noWrap:!0,items:[{id:"off",children:i.a.createElement(u.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_OFF"}),onChange:()=>a({...t,setting_preference:C.OFF}),checked:c===C.OFF},{id:"auto",children:i.a.createElement(u.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_DEFAULT"}),onChange:()=>a({...t,setting_preference:C.AUTO}),checked:c===C.AUTO},{id:"custom",children:i.a.createElement(u.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_CUSTOM"}),onChange:()=>a({...t,setting_preference:C.CUSTOM}),checked:c===C.CUSTOM}],variant:"boxed"}),headerIcon:i.a.createElement(j.mc,{width:28,height:28}),headerTitle:e.formatMessage({id:"COMMON_NETWORK"})},c===C.AUTO&&i.a.createElement(R.a,null,i.a.createElement(D.a,{size:"body"},i.a.createElement(u.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_DESCRIPTION"}))),c===C.CUSTOM&&i.a.createElement(i.a.Fragment,null,Object.keys(n).map(c=>n[c].level===I.ADVANCED?null:i.a.createElement(M.a,{key:c,label:n[c].label,caption:n[c].description,onChange:(e,i,l)=>{a({...t,alert_type_settings:{...t.alert_type_settings,[c]:{...n[c],[i]:l}}})},toggles:[{id:"send_mobile_push_notification",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_PUSH_NOTIFICATIONS"}),checked:n[c].send_mobile_push_notification},{id:"send_email",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_EMAIL_NOTIFICATIONS"}),checked:n[c].send_email}]})),i.a.createElement(D.a,{size:"header-s",style:{marginTop:"32px",marginBottom:"16px"}},i.a.createElement(u.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_ADVANCED_NOTIFICATIONS_LABEL"})),Object.keys(n).map(c=>n[c].level===I.BASIC?null:i.a.createElement(M.a,{key:c,label:n[c].label,caption:n[c].description,onChange:(e,i,l)=>{a({...t,alert_type_settings:{...t.alert_type_settings,[c]:{...n[c],[i]:l}}})},toggles:[{id:"show_in_alert_page",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_NOTIFICATION_PAGE"}),checked:n[c].show_in_alert_page},{id:"send_mobile_push_notification",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_PUSH_NOTIFICATIONS"}),checked:n[c].send_mobile_push_notification},{id:"send_email",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_EMAIL_NOTIFICATIONS"}),checked:n[c].send_email}]})))))});const U=Object(l.c)(h.b)`
  > div > div {
    margin-right: 0;
    > div {
      padding: 32px 0;
    }
  }
`,w={isSubmitted:!1};var y=({onBack:e})=>{const t=Object(E.useDispatch)(),a=Object(E.useSelector)(m),l=Object(E.useSelector)(r.x),o=Object(n.useMemo)(()=>({...a}),[a]),_=Object(n.useCallback)((e,{setStatus:a,setSubmitting:n})=>t(d(e)).then(()=>{t(Object(p.c)({icon:A.a.success,message:"SETTINGS_SYSTEM_NOTIFICATIONS_SAVE_SUCCESS"})),a({isSubmitted:!0})}).then(()=>t(O())).catch(e=>{t(Object(p.c)({errorMessage:e.msg,errorValues:e,icon:A.a.danger,message:"SETTINGS_SYSTEM_NOTIFICATIONS_SAVE_ERROR"})),n(!1)}),[t]);return Object(c.g)([O(void 0,{crudCacheStrategy:{type:s.a.CACHE}})],i.a.createElement(U,{hidddenHeader:!0,goBack:e,hideClose:!0,initialStatus:w,initialValues:o,isEdit:!l,isView:l,validationSchema:void 0,onEscClicked:e,onSubmit:_},i.a.createElement(k,null)))};t.default=()=>{const e=Object(c.i)();return i.a.createElement(y,{onBack:e})}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return g}));var n=a(0),i=a.n(n),c=a(3),l=a(2),E=a(36),r=a(2838),s=a(2760),o=a(1774),_=a(867),N=a(14),T=a(10),O=a(42);const d=Object(c.c)(N.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,S=Object(c.c)(N.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,m=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,C=Object(c.c)(N.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,I=Object(c.c)(O.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var g=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:l})=>i.a.createElement(S,{flex:"none",height:"65px"},i.a.createElement(N.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(d,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(C,{legacy:!1,name:"backButton",type:"button",onClick:a},i.a.createElement(T.g,{size:"original"}))),i.a.createElement(m,null,i.a.createElement(I,{weight:"bold"},e.component)),i.a.createElement(d,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&i.a.createElement(C,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(T.A,{size:"original"})))));const h=Object(c.c)(N.g)`
  width: 100%;
  max-width: ${_.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,p=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,A=Object(c.c)(N.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,u=Object(c.c)(r.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${_.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,b=Object(c.c)(N.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,x=Object(c.c)(N.k)`
  height: 100%;
  width: 100%;
`;var f=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:r,showBack:_,title:T,unsavedChangesModalIgnoredPaths:O,onEscClicked:d,submitText:S="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:m=!1,customFooterButtons:C,hidddenHeader:I,className:f,...R})=>i.a.createElement(E.c,Object.assign({enableReinitialize:!0},R),({dirty:c,handleReset:E,handleSubmit:R,isSubmitting:D})=>i.a.createElement(p,{autoComplete:"off",onSubmit:R,className:f},i.a.createElement(x,{vertical:!0},!I&&i.a.createElement(g,{goBack:a,hideClose:n,showBack:_,title:T,onEscClicked:d,ignoredPaths:O}),i.a.createElement(b,{flex:"1"},i.a.createElement(h,{flex:"none",flexDirection:"column"},e)),!t&&!r&&i.a.createElement(o.a,{ignoredPaths:O,when:c&&!D}),(!r||m)&&i.a.createElement(u,{active:c||m},i.a.createElement(N.g,{justifyContent:C?"space-between":"flex-end",width:"100%",alignItems:"center"},C&&i.a.createElement(A,null,C(D)),!r&&i.a.createElement(N.g,null,i.a.createElement(s.a,{disabled:!c||D,type:"button",variant:"default",onClick:E},i.a.createElement(l.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!c||D,type:"submit",variant:"primary"},i.a.createElement(l.c,{id:S}))))))))}}]);
//# sourceMappingURL=53.f400b1db6c26e1693504.js.map