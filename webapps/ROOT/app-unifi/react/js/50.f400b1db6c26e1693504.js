(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[50],{1774:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(3),i=a(2),r=a(1780),E=a.n(r),o=a(1259),s=a(493),m=a(494);const d=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null,leaveButtonText:r="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:_="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:p="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:g="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const b=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),h=Object(m.a)(t),T=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),N=Object(n.useCallback)(e=>(e={},t={})=>h(e,t)&&T(e,t),[h,T]);return!!e&&l.a.createElement(E.a,{when:N(t)},({onCancel:e,onConfirm:t})=>l.a.createElement(o.a,{actions:[{type:"button",text:l.a.createElement(i.c,{id:_}),onClick:()=>c?c(e):e()},{type:"button",text:l.a.createElement(i.c,{id:r}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:b,parentSelector:s.b,title:l.a.createElement(i.c,{id:p}),onRequestClose:()=>c?c(e):e()},l.a.createElement(d,null,l.a.createElement(i.c,{id:g}))))}},2290:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(30),i=a(40),r=a(7),E=a(2),o=a(5),s=a(2429),m=a(14),d=a(28),_=a(16),p=256,g=30,b=8,h=32,T=a(74),N=T.a.object().shape({enabled:T.a.boolean(),community:T.a.string().when("enabled",{is:!0,then:T.a.string().label("SETTINGS_GATEWAY_SNMP_LABEL_COMMUNITY_STRING").required().max(p)}),enabledV3:T.a.boolean(),username:T.a.string().when("enabledV3",{is:!0,then:T.a.string().label("SETTINGS_GATEWAY_SNMP_LABEL_USERNAME").required().max(g)}),x_password:T.a.string().when("enabledV3",{is:!0,then:T.a.string().label("SETTINGS_GATEWAY_SNMP_LABEL_PASSWORD").required().min(b).max(h)})}),S=a(2763),u=a(36),A=a(3),x=a(1763),G=a(1761),O=a(1762),I=a(724),R=a(67),C=a(38),f=a(2612),w=a(136),L=a(4);const j=Object(A.c)(f.a)`
  margin-left: ${({theme:e})=>e.spacing["spacing-l"]};
  > div > svg {
    margin-bottom: 4px;
  }
`;var D=()=>{const{values:e}=Object(u.e)(),t=Object(o.useSelector)(I.t),a=Object(n.useMemo)(()=>Object(S.a)(t.filter(e=>e.adopted&&!Object(R.n)(e)&&!Object(R.m)(e)),"model"),[t]);return Object(i.g)([Object(L.fetchDevices)(void 0,{crudCacheStrategy:{type:r.a.CACHE}})],l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,null,l.a.createElement(G.a,null,l.a.createElement(w.SearchableGridLabel,{htmlFor:"enabled",alignWith:"toggleSmall",label:l.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_ENABLE_SNMP1_2"}),description:l.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_ENABLE_SNMP1_2_DESCRIPTION"})}),l.a.createElement(O.a,{column:!0},l.a.createElement(C.Field,{type:"checkbox",name:"enabled"}))),l.a.createElement(G.a,{disabled:!e.enabled},l.a.createElement(w.SearchableGridLabel,{htmlFor:"community",alignWith:"input",label:l.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_COMMUNITY_STRING"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_COMMUNITY_STRING_SEARCH_TEXT"}),l.a.createElement(O.a,{column:!0},l.a.createElement(C.Field,{disabled:!e.enabled,name:"community",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_COMMUNITY_PLACEHOLDER"})))),l.a.createElement(x.a,null,l.a.createElement(G.a,null,l.a.createElement(w.SearchableGridLabel,{htmlFor:"enabledV3",alignWith:"toggleSmall",label:l.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_ENABLE_SNMP3"})}),l.a.createElement(O.a,{column:!0},l.a.createElement(m.g,{alignItems:"center"},l.a.createElement(C.Field,{type:"checkbox",name:"enabledV3"}),a.length>0&&l.a.createElement(j,{description:"SETTINGS_INTERNET_GENERAL_ADV_GW_UNSUPPORTED_DEVICE_DESCRIPTION",devices:a,tooltipWidth:196,portal:!0})))),l.a.createElement(G.a,{disabled:!e.enabledV3},l.a.createElement(w.SearchableGridLabel,{htmlFor:"username",alignWith:"input",label:l.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_USER_NAME"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_USER_NAME_SEARCH_TEXT"}),l.a.createElement(O.a,{column:!0},l.a.createElement(C.Field,{disabled:!e.enabledV3,name:"username",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_USER_NAME_PLACEHOLDER"}))),l.a.createElement(G.a,{disabled:!e.enabledV3},l.a.createElement(w.SearchableGridLabel,{htmlFor:"x_password",alignWith:"input",label:l.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PASSWORD"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_PASSWORD_SEARCH_TEXT"}),l.a.createElement(O.a,{column:!0},l.a.createElement(C.Field,{disabled:!e.enabledV3,name:"x_password",type:"password",passwordToggle:!0,placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PASSWORD_PLACEHOLDER"}))))))};var V=e=>{const{onBack:t}=e,a=Object(o.useSelector)(c.selectSnmpSettings),i=Object(o.useDispatch)(),r=Object(n.useContext)(m.l),p=Object(n.useCallback)((e,{setSubmitting:a})=>{const{enabledV3:n,...l}=e;n||(delete l.username,delete l.x_password),i(Object(c.saveSettings)({...l,enabledV3:n})).then(()=>{i(Object(d.c)({icon:_.a.success,message:"SETTINGS_INTERNET_GENERAL_ADV_GW_SAVE_SUCCESS"})),t()}).catch(e=>{i(Object(d.c)({errorMessage:e.msg,errorValues:e,icon:_.a.danger,message:"SETTINGS_INTERNET_GENERAL_ADV_GW_SAVE_ERROR"})),a(!1)})},[i,t]);return l.a.createElement(s.b,{onSubmit:p,title:{component:l.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_SNMP"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_SNMP"},initialValues:a,isEdit:!1,isView:r,onEscClicked:t,validationSchema:N,showBack:!0,goBack:t},l.a.createElement(D,null))};t.default=()=>{const e=Object(i.i)();return Object(i.g)([Object(c.fetchSettings)({type:r.a.CACHE})],l.a.createElement(V,{onBack:e}))}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return R})),a.d(t,"a",(function(){return S}));var n=a(0),l=a.n(n),c=a(3),i=a(2),r=a(36),E=a(2838),o=a(2760),s=a(1774),m=a(867),d=a(14),_=a(10),p=a(42);const g=Object(c.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,b=Object(c.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,h=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,T=Object(c.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,N=Object(c.c)(p.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var S=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:i})=>l.a.createElement(b,{flex:"none",height:"65px"},l.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},l.a.createElement(g,{alignItems:"center",flex:"1",height:"100%"},t&&l.a.createElement(T,{legacy:!1,name:"backButton",type:"button",onClick:a},l.a.createElement(_.g,{size:"original"}))),l.a.createElement(h,null,l.a.createElement(N,{weight:"bold"},e.component)),l.a.createElement(g,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&l.a.createElement(T,{legacy:!1,name:"closeButton",type:"button",onClick:n},l.a.createElement(_.A,{size:"original"})))));const u=Object(c.c)(d.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,A=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,x=Object(c.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,G=Object(c.c)(E.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,O=Object(c.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,I=Object(c.c)(d.k)`
  height: 100%;
  width: 100%;
`;var R=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:E,showBack:m,title:_,unsavedChangesModalIgnoredPaths:p,onEscClicked:g,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:h=!1,customFooterButtons:T,hidddenHeader:N,className:R,...C})=>l.a.createElement(r.c,Object.assign({enableReinitialize:!0},C),({dirty:c,handleReset:r,handleSubmit:C,isSubmitting:f})=>l.a.createElement(A,{autoComplete:"off",onSubmit:C,className:R},l.a.createElement(I,{vertical:!0},!N&&l.a.createElement(S,{goBack:a,hideClose:n,showBack:m,title:_,onEscClicked:g,ignoredPaths:p}),l.a.createElement(O,{flex:"1"},l.a.createElement(u,{flex:"none",flexDirection:"column"},e)),!t&&!E&&l.a.createElement(s.a,{ignoredPaths:p,when:c&&!f}),(!E||h)&&l.a.createElement(G,{active:c||h},l.a.createElement(d.g,{justifyContent:T?"space-between":"flex-end",width:"100%",alignItems:"center"},T&&l.a.createElement(x,null,T(f)),!E&&l.a.createElement(d.g,null,l.a.createElement(o.a,{disabled:!c||f,type:"button",variant:"default",onClick:r},l.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),l.a.createElement(o.a,{disabled:!c||f,type:"submit",variant:"primary"},l.a.createElement(i.c,{id:b}))))))))},2612:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(3),i=a(2),r=a(10),E=a(42),o=a(568),s=a(41),m=a(40),d=a(92),_=a(9);const p=Object(c.c)(_.a,{shouldForwardProp:e=>"paddingTop"!==e})`
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`,g=Object(c.c)(E.a,{shouldForwardProp:e=>"paddingLeft"!==e&&"paddingTop"!==e})`
  ${({paddingLeft:e})=>e?`padding-left: ${e};`:""}
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`;t.a=({description:e,title:t,className:a,descriptionValues:n={},devices:c=[],height:b,tooltipWidth:h=400,width:T,wrapperStyle:N,...S})=>{const u=Object(m.n)(),A=c.map((e,t)=>l.a.createElement(p,{alignItems:"center",key:e._id,paddingTop:0===t?"8px":void 0},l.a.createElement(d.c,{device:e}),l.a.createElement(g,{color:"tertiary",paddingLeft:"8px"},Object(s.a)(e)))),x=l.a.createElement(_.a,{flexDirection:"column"},t&&l.a.createElement(E.a,{size:"body",uppercase:!0,weight:"bold"},l.a.createElement(i.c,{id:t})),l.a.createElement(g,{color:"secondary",paddingTop:t?"8px":void 0},l.a.createElement(i.c,{id:e,values:n})),A);return l.a.createElement("div",{className:a,style:N},l.a.createElement(o.a,Object.assign({message:x,width:h},S),l.a.createElement(r.ab,{color:u.motifPalette.warning,width:T,height:b})))}}}]);
//# sourceMappingURL=50.f400b1db6c26e1693504.js.map