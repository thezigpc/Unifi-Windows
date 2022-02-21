(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[51],{1774:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(3),l=a(2),o=a(1780),s=a.n(o),r=a(1259),m=a(493),d=a(494);const E=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null,leaveButtonText:o="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:g="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:h="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:p="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const u=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),b=Object(d.a)(t),x=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),S=Object(n.useCallback)(e=>(e={},t={})=>b(e,t)&&x(e,t),[b,x]);return!!e&&c.a.createElement(s.a,{when:S(t)},({onCancel:e,onConfirm:t})=>c.a.createElement(r.a,{actions:[{type:"button",text:c.a.createElement(l.c,{id:g}),onClick:()=>i?i(e):e()},{type:"button",text:c.a.createElement(l.c,{id:o}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:u,parentSelector:m.b,title:c.a.createElement(l.c,{id:h}),onRequestClose:()=>i?i(e):e()},c.a.createElement(E,null,c.a.createElement(l.c,{id:p}))))}},2297:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(5),l=a(34),o=a(30),s=a(40),r=a(7),m=a(2),d=a(1763),E=a(1761),g=a(1762),h=a(2429),p=a(28),u=a(14),b=a(38),x=a(136),S=a(16),_=a(19),N=_.a.object().shape({mdns_enabled:_.a.boolean()});var O=e=>{const{initialValues:t,onBack:a}=e,l=Object(i.useDispatch)(),s=Object(n.useContext)(u.l),r=Object(n.useCallback)((e,{setSubmitting:t})=>l(Object(o.saveSettings)(e)).then(()=>{l(Object(p.c)({icon:S.a.success,message:"SETTINGS_GATEWAY_MDNS_SAVE_SUCCESS"})),a()}).catch(e=>{l(Object(p.c)({errorMessage:e.msg,errorValues:e,icon:S.a.danger,message:"SETTINGS_GATEWAY_MDNS_SAVE_ERROR"})),t(!1)}),[l,a]),_=Object(n.useMemo)(()=>({mdns_enabled:!1,...t}),[t]);return c.a.createElement(h.b,{onSubmit:r,title:{component:c.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"},initialValues:_,isEdit:!1,isView:s,onEscClicked:a,validationSchema:N,showBack:!0,goBack:a},c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement(x.SearchableGridLabel,{htmlFor:"mdns_enabled",alignWith:"toggle",label:c.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"}),description:c.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS_DESCRIPTION"})}),c.a.createElement(g.a,{column:!0},c.a.createElement(b.Field,{type:"checkbox",name:"mdns_enabled"})))))};const C={};t.default=()=>{const e=Object(i.useSelector)(o.selectUsgSettings),t=Object(s.i)();return Object(s.g)([Object(o.fetchSettings)({type:r.a.CACHE}),Object(l.fetchNetworks)(void 0,{crudCacheStrategy:{type:r.a.CACHE}})],c.a.createElement(O,{initialValues:e||C,onBack:t}))}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return w})),a.d(t,"a",(function(){return _}));var n=a(0),c=a.n(n),i=a(3),l=a(2),o=a(36),s=a(2838),r=a(2760),m=a(1774),d=a(867),E=a(14),g=a(10),h=a(42);const p=Object(i.c)(E.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,u=Object(i.c)(E.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,b=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,x=Object(i.c)(E.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,S=Object(i.c)(h.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var _=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:l})=>c.a.createElement(u,{flex:"none",height:"65px"},c.a.createElement(E.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},c.a.createElement(p,{alignItems:"center",flex:"1",height:"100%"},t&&c.a.createElement(x,{legacy:!1,name:"backButton",type:"button",onClick:a},c.a.createElement(g.g,{size:"original"}))),c.a.createElement(b,null,c.a.createElement(S,{weight:"bold"},e.component)),c.a.createElement(p,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&c.a.createElement(x,{legacy:!1,name:"closeButton",type:"button",onClick:n},c.a.createElement(g.A,{size:"original"})))));const N=Object(i.c)(E.g)`
  width: 100%;
  max-width: ${d.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,O=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,C=Object(i.c)(E.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,f=Object(i.c)(s.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${d.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,T=Object(i.c)(E.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,A=Object(i.c)(E.k)`
  height: 100%;
  width: 100%;
`;var w=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:s,showBack:d,title:g,unsavedChangesModalIgnoredPaths:h,onEscClicked:p,submitText:u="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:b=!1,customFooterButtons:x,hidddenHeader:S,className:w,...j})=>c.a.createElement(o.c,Object.assign({enableReinitialize:!0},j),({dirty:i,handleReset:o,handleSubmit:j,isSubmitting:k})=>c.a.createElement(O,{autoComplete:"off",onSubmit:j,className:w},c.a.createElement(A,{vertical:!0},!S&&c.a.createElement(_,{goBack:a,hideClose:n,showBack:d,title:g,onEscClicked:p,ignoredPaths:h}),c.a.createElement(T,{flex:"1"},c.a.createElement(N,{flex:"none",flexDirection:"column"},e)),!t&&!s&&c.a.createElement(m.a,{ignoredPaths:h,when:i&&!k}),(!s||b)&&c.a.createElement(f,{active:i||b},c.a.createElement(E.g,{justifyContent:x?"space-between":"flex-end",width:"100%",alignItems:"center"},x&&c.a.createElement(C,null,x(k)),!s&&c.a.createElement(E.g,null,c.a.createElement(r.a,{disabled:!i||k,type:"button",variant:"default",onClick:o},c.a.createElement(l.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(r.a,{disabled:!i||k,type:"submit",variant:"primary"},c.a.createElement(l.c,{id:u}))))))))}}]);
//# sourceMappingURL=51.f400b1db6c26e1693504.js.map