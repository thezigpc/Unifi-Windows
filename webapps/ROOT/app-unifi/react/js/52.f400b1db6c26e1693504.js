(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[52],{1774:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(3),i=a(2),r=a(1780),o=a.n(r),s=a(1259),_=a(493),p=a(494);const E=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null,leaveButtonText:r="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:d="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:m="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:u="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const b=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),N=Object(p.a)(t),h=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),T=Object(n.useCallback)(e=>(e={},t={})=>N(e,t)&&h(e,t),[N,h]);return!!e&&l.a.createElement(o.a,{when:T(t)},({onCancel:e,onConfirm:t})=>l.a.createElement(s.a,{actions:[{type:"button",text:l.a.createElement(i.c,{id:d}),onClick:()=>c?c(e):e()},{type:"button",text:l.a.createElement(i.c,{id:r}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:b,parentSelector:_.b,title:l.a.createElement(i.c,{id:m}),onRequestClose:()=>c?c(e):e()},l.a.createElement(E,null,l.a.createElement(i.c,{id:u}))))}},2294:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),i=a(30),r=a(40),o=a(7),s=a(2),_=a(14),p=a(2429),E=a(28),d=a(16),m=a(34),u=a(19),b=u.a.object().shape({upnp_enabled:u.a.boolean(),upnp_nat_pmp_enabled:u.a.boolean(),upnp_secure_mode:u.a.boolean(),upnp_wan_interface:u.a.string().when("upnp_enabled",{is:!0,then:u.a.string().label("SETTINGS_GATEWAY_UPNP_LABEL_WAN_NETWORK_GROUP").required()})}),N=a(1763),h=a(1761),T=a(1762),g=a(38),S=a(36),O=a(136);var A=({wanNetworkGroupOptions:e})=>{const{values:t,setFieldValue:a}=Object(S.e)();return Object(r.g)([Object(m.fetchNetworks)(void 0,{crudCacheStrategy:{type:o.a.CACHE}})],l.a.createElement(N.a,null,l.a.createElement(h.a,null,l.a.createElement(O.SearchableGridLabel,{htmlFor:"upnp_enabled",alignWith:"toggleSmall",label:l.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"}),description:l.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_DESCRIPTION"})}),l.a.createElement(T.a,{column:!0},l.a.createElement(g.Field,{type:"checkbox",name:"upnp_enabled"}))),l.a.createElement(h.a,{disabled:!t.upnp_enabled},l.a.createElement(O.SearchableGridLabel,{htmlFor:"upnp_wan_interface",alignWith:"dropdown",label:l.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_INTERNET_NETWORK_GROUP"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_INTERNET_NETWORK_GROUP_SEARCH_TEXT"}),l.a.createElement(T.a,{column:!0},l.a.createElement(g.Field,{disabled:!t.upnp_enabled,full:!0,type:"dropdown",name:"upnp_wan_interface",options:e,translateOptions:!0}))),l.a.createElement(h.a,{disabled:!t.upnp_enabled},l.a.createElement(O.SearchableGridLabel,{htmlFor:"upnp_nat_pmp_enabled",alignWith:"toggleSmall",label:l.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NAT_PORT_MAPPING_PROTOCOL"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NAT_PORT_MAPPING_PROTOCOL_SEARCH_TEXT"}),l.a.createElement(T.a,{column:!0},l.a.createElement(g.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_nat_pmp_enabled"}))),l.a.createElement(h.a,{disabled:!t.upnp_enabled},l.a.createElement(O.SearchableGridLabel,{htmlFor:"upnp_secure_mode",alignWith:"toggleSmall",label:l.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_SECURE_MODE"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_SECURE_MODE_SEARCH_TEXT"}),l.a.createElement(T.a,{column:!0},l.a.createElement(g.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_secure_mode"}))),Object.values(t.upnpNetworks).map(e=>l.a.createElement(h.a,{disabled:!t.upnp_enabled,key:e._id},l.a.createElement(O.SearchableGridLabel,{htmlFor:"upnp_lan_enabled_"+e._id,alignWith:"toggleSmall",label:l.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NETWORKS",values:{network:e.name}})}),l.a.createElement(T.a,{column:!0},l.a.createElement(g.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_lan_enabled_"+e._id,value:e.upnp_lan_enabled,onChange:n=>{const l={...e,upnp_lan_enabled:n.currentTarget.checked};a("upnpNetworks",{...t.upnpNetworks,[e._id]:l})}}))))))};const x={upnp_enabled:!1,upnp_wan_interface:"",upnp_nat_pmp_enabled:!1,upnp_secure_mode:!1};var G=e=>{const{initialValues:t,onBack:a}=e,r=Object(c.useDispatch)(),o=Object(n.useContext)(_.l),u=Object(c.useSelector)(m.selectNetworksData),N=Object(c.useSelector)(m.selectCorporateAndGuestNetworks),h=Object(n.useMemo)(()=>u.filter(e=>Object(m.isWanNetwork)(e)&&e.attr_hidden_id!==m.NetworkHiddenId.WAN_LTE_FAILOVER).map(({wan_networkgroup:e})=>({label:`SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_${e}_OPTION`,value:e})).sort((e,t)=>e.label<t.label?-1:1),[u]),T=Object(n.useMemo)(()=>({...x,...t,upnp_wan_interface:t.upnp_wan_interface||(h.length?h[0].value:x.upnp_wan_interface),upnpNetworks:N.reduce((e,t)=>({...e,[t._id]:{...t,upnp_lan_enabled:t.upnp_lan_enabled||!1}}),{})}),[t,N,h]),g=Object(n.useCallback)(({upnpNetworks:e,...t},{setSubmitting:n})=>{const l=Object.values(e).filter(({_id:e,upnp_lan_enabled:t})=>t!==(N.find(t=>e===t._id)||{}).upnp_lan_enabled);return r(Object(i.saveSettings)({...t})).then(()=>Promise.all(l.map(e=>r(Object(m.updateNetwork)(e,{},{}))))).then(()=>{r(Object(E.c)({icon:d.a.success,message:"SETTINGS_GATEWAY_UPNP_SAVE_SUCCESS"})),a()}).catch(e=>{r(Object(E.c)({errorMessage:e.msg,errorValues:e,icon:d.a.danger,message:"SETTINGS_GATEWAY_UPNP_SAVE_ERROR"})),n(!1)})},[r,N,a]);return l.a.createElement(p.b,{onSubmit:g,title:{component:l.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"},initialValues:T,isEdit:!1,isView:o,onEscClicked:a,validationSchema:b,showBack:!0,goBack:a},l.a.createElement(A,{wanNetworkGroupOptions:h}))};const w={};t.default=()=>{const e=Object(c.useSelector)(i.selectUsgSettings),t=Object(r.i)();return Object(r.g)([Object(i.fetchSettings)({type:o.a.CACHE})],l.a.createElement(G,{initialValues:e||w,onBack:t}))}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return g}));var n=a(0),l=a.n(n),c=a(3),i=a(2),r=a(36),o=a(2838),s=a(2760),_=a(1774),p=a(867),E=a(14),d=a(10),m=a(42);const u=Object(c.c)(E.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,b=Object(c.c)(E.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,N=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,h=Object(c.c)(E.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,T=Object(c.c)(m.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var g=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:i})=>l.a.createElement(b,{flex:"none",height:"65px"},l.a.createElement(E.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},l.a.createElement(u,{alignItems:"center",flex:"1",height:"100%"},t&&l.a.createElement(h,{legacy:!1,name:"backButton",type:"button",onClick:a},l.a.createElement(d.g,{size:"original"}))),l.a.createElement(N,null,l.a.createElement(T,{weight:"bold"},e.component)),l.a.createElement(u,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&l.a.createElement(h,{legacy:!1,name:"closeButton",type:"button",onClick:n},l.a.createElement(d.A,{size:"original"})))));const S=Object(c.c)(E.g)`
  width: 100%;
  max-width: ${p.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,O=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,A=Object(c.c)(E.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,x=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${p.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,G=Object(c.c)(E.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,w=Object(c.c)(E.k)`
  height: 100%;
  width: 100%;
`;var f=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:p,title:d,unsavedChangesModalIgnoredPaths:m,onEscClicked:u,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:N=!1,customFooterButtons:h,hidddenHeader:T,className:f,...C})=>l.a.createElement(r.c,Object.assign({enableReinitialize:!0},C),({dirty:c,handleReset:r,handleSubmit:C,isSubmitting:P})=>l.a.createElement(O,{autoComplete:"off",onSubmit:C,className:f},l.a.createElement(w,{vertical:!0},!T&&l.a.createElement(g,{goBack:a,hideClose:n,showBack:p,title:d,onEscClicked:u,ignoredPaths:m}),l.a.createElement(G,{flex:"1"},l.a.createElement(S,{flex:"none",flexDirection:"column"},e)),!t&&!o&&l.a.createElement(_.a,{ignoredPaths:m,when:c&&!P}),(!o||N)&&l.a.createElement(x,{active:c||N},l.a.createElement(E.g,{justifyContent:h?"space-between":"flex-end",width:"100%",alignItems:"center"},h&&l.a.createElement(A,null,h(P)),!o&&l.a.createElement(E.g,null,l.a.createElement(s.a,{disabled:!c||P,type:"button",variant:"default",onClick:r},l.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),l.a.createElement(s.a,{disabled:!c||P,type:"submit",variant:"primary"},l.a.createElement(i.c,{id:b}))))))))}}]);
//# sourceMappingURL=52.f400b1db6c26e1693504.js.map