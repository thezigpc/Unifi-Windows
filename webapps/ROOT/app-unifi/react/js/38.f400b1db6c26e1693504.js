(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[38],{1261:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return m}));var n,i=a(0),l=a.n(i),c=a(3),r=a(393),s=a(42),o=a(14);!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(n||(n={}));const u=Object(c.c)(o.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,m=Object(c.c)(o.g)`
  * {
    line-height: 1.4 !important;
  }
`,d=Object(c.c)(r.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,status:i})=>l.a.createElement(l.a.Fragment,null,(()=>{switch(t){default:case n.BASIC:return e;case n.CONFIGURED:return l.a.createElement(m,{alignItems:"center"},e);case n.STATUS:return l.a.createElement(m,{alignItems:"center"},l.a.createElement(d,{variant:i}),l.a.createElement(u,{flex:"1",flexDirection:"column"},e,a&&l.a.createElement(s.a,null,a)));case n.UNCONFIGURED:return l.a.createElement(m,{alignItems:"center"},l.a.createElement(o.g,{flex:"0 1 128px",flexDirection:"column"},e,l.a.createElement(s.a,null,a)))}})())},1774:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(3),c=a(2),r=a(1780),s=a.n(r),o=a(1259),u=a(493),m=a(494);const d=Object(l.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:l=null,leaveButtonText:r="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:E="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:b="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:p="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const h=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),g=Object(m.a)(t),O=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),S=Object(n.useCallback)(e=>(e={},t={})=>g(e,t)&&O(e,t),[g,O]);return!!e&&i.a.createElement(s.a,{when:S(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(o.a,{actions:[{type:"button",text:i.a.createElement(c.c,{id:E}),onClick:()=>l?l(e):e()},{type:"button",text:i.a.createElement(c.c,{id:r}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:h,parentSelector:u.b,title:i.a.createElement(c.c,{id:b}),onRequestClose:()=>l?l(e):e()},i.a.createElement(d,null,i.a.createElement(c.c,{id:p}))))}},1775:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1776:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u.d})),a.d(t,"c",(function(){return u.a}));var n=a(0),i=a.n(n),l=a(3),c=a(10),r=a(14);const s=Object(l.c)(r.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var o=({children:e,...t})=>i.a.createElement(s,Object.assign({alignItems:"center"},t),e,i.a.createElement(c.h,null)),u=a(1261)},1777:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return J})),a.d(t,"d",(function(){return X.a})),a.d(t,"f",(function(){return X.c})),a.d(t,"h",(function(){return X.e})),a.d(t,"g",(function(){return X.d})),a.d(t,"i",(function(){return te}));var n=a(1776);var i=a(0),l=a.n(i),c=a(3);var r=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...r})=>{const s=a?12:i,o=a?0:n;return l.a.createElement("div",Object.assign({className:Object(c.b)("col-"+s,"offset-"+o,t)},r),e)};var s,o=({children:e="",offset:t=0,size:a=2})=>l.a.createElement("div",{className:Object(c.b)("col-"+a,"offset-"+t)},e),u=a(2),m=a(559),d=a.n(m),E=a(14),b=a(1783),p=a.n(b),h=a(126),g=a.n(h),O=a(106);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(s||(s={}));const S=g.a.bind(p.a);var _=({className:e=null,status:t=s.NEUTRAL,...a})=>l.a.createElement(O.a,Object.assign({},a,{className:S("ubntStatusText","ubntStatusText--"+t,e)})),T=a(256),f=a(1779);const N=Object(c.c)(E.g)`
  border: 1px solid ${T.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,I=Object(c.c)(_)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var A=({state:e,className:t=null,...a})=>l.a.createElement(N,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),l.a.createElement(I,{message:f.b[e],status:s.WARNING})),j=a(136),y=a(75),v=a(5),C=a(26),M=a(40),D=a(54);const R={BORDER_WIDTH:2},x={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},w=({type:e,size:t,width:a,height:n})=>{switch(e){case j.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:l}=x;return{top:l,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function L({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:l,width:r,height:s}){const o=Object(v.useSelector)(j.selectHighlight),[u,m]=Object(M.c)(0),[d,E]=Object(M.c)(!1),b=Object(i.useRef)(null),p=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(c.a)({"&::before":{border:`${R.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:C.a["blue-light-3"],show:d,style:{...w({type:e,size:l,width:r,height:s}),...a}}),[d,e,a,l,r,s]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>u)m(u+1);else if(b.current&&t===o.id&&o.type===e){window.getComputedStyle(b.current).border,window.getComputedStyle(b.current).boxShadow;let t=b.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:l}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:l}=t.current.getBoundingClientRect();switch(a){case j.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=x,c=l+Object(D.a)(n,"top",a),r=c+i+Object(D.a)(n,"paddingBottom",e)+Object(D.a)(n,"paddingTop",t)+2*R.BORDER_WIDTH;return{bottom:r,height:r-c,top:c}}}})({height:s,highlightRef:b,type:e,highlightStyle:a}),{bottom:c,height:r,top:o}=n.getBoundingClientRect(),u=t>c,m=i>r,d=15;l<o||m?n.scrollTo({behavior:"smooth",top:n.scrollTop-o+l-d}):u&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-c+d})}E(!0)}},[s,u]),Object(i.useEffect)(()=>{d||o.id!==t||m(e=>e+1),d&&o.id!==t&&E(!1)},[o.id,d]),{highlightClassName:p,highlightRef:b}}const F=Object(c.c)(d.a)`
  color: ${y.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,G=Object(c.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,P=c.a`
  cursor: pointer;
  user-select: none;

  &:hover {
    // Made the class plain text instead of \${StyledDescription} because TypeScript compiler breaks the interpolation
    .settingsGridDescription {
      opacity: 1;
    }

    // Same here
    .settingsGridLabel {
      color: white;
      opacity: 1;
    }
  }
`;var B=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:r=!1,highlightDelay:s=null,highlightStyle:o=null,htmlFor:m=null,offset:d=0,size:E=5,useHtml:b=!1})=>{const{highlightClassName:p,highlightRef:h}=L({type:j.SearchHighlightType.FIELD,forId:m,highlightStyle:o,highlightDelay:s,size:E}),g=!(!n&&!a),O={["col-"+E]:!0,["offset-"+d]:d>0},S=b?u.b:u.c;return l.a.createElement("div",{className:Object(c.b)(O,P,p),ref:h},l.a.createElement("div",{className:"mb-1"},l.a.createElement(G,{className:"settingsGridLabel",htmlFor:m,primary:!0},r?e:l.a.createElement(u.c,{id:e})),t&&l.a.createElement(A,{state:t})),g&&l.a.createElement("div",null,l.a.createElement(F,{className:"settingsGridDescription",htmlFor:m,secondary:!0},n?l.a.createElement(S,{id:n,values:i}):a)))};const k=c.a`
  max-width: 960px;
`,H=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:r=!1})=>{const s=n?4:i;return l.a.createElement("div",{className:Object(c.b)("row","mt-"+s,r?null:k,t),ref:a},e)};var U=l.a.forwardRef((e,t)=>l.a.createElement(H,Object.assign({forwardedRef:t},e)));var $=e=>l.a.createElement("div",{className:"mt-2 mb-6"},l.a.createElement(O.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const Y=Object(c.c)("div")`
  flex: 0 1 480px;
`,z=Object(c.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var W=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:r=null})=>{const s=T.b.sectionColors.common;return l.a.createElement(U,{className:t,marginTop:0},l.a.createElement(Y,null,l.a.createElement(z,{className:Object(c.b)("mt-8","type-larger"),style:{color:s}},l.a.createElement(u.c,{id:e})),a&&l.a.createElement(O.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const V=Object(c.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>l.a.createElement(V,{className:Object(c.b)("container","px-8",t),noDivider:n},l.a.createElement("div",{className:Object(c.b)({"pb-8":!a})},e));q.Content=r,q.Icon=o,q.Label=B,q.Row=U,q.SectionHeader=$,q.Subheader=W;var K=a(268);const Q=Object(c.c)(K.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var J=e=>l.a.createElement(Q,Object.assign({},e)),X=a(719),Z=a(188),ee=a(9);const te=({lastQuery:e=0})=>{const t=Object(v.useSelector)(Z.B);return e>0?l.a.createElement(ee.a,{alignItems:"center"},l.a.createElement(u.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",l.a.createElement(u.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):l.a.createElement(u.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1774)},1779:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2287:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(5),c=a(2582),r=a(18),s=a(30),o=a(2504),u=a(1777),m=a(14),d=a(40),E=a(37),b=a(7),p=a(227);const h=a.n(p)()(),g=[{value:"en",label:"English"},{value:"ca",label:"Català"},{value:"cs",label:"Český"},{value:"de_DE",label:"Deutsch"},{value:"da",label:"Dansk"},{value:"el",label:"ελληνικά"},{value:"es_ES",label:"Español"},{value:"fr",label:"Français"},{value:"ja",label:"日本語"},{value:"nl",label:"Nederlands"},{value:"pl",label:"Polski"},{value:"pt_PT",label:"Português"},{value:"ru",label:"Русский"},{value:"sv",label:"Svenska"},{value:"tr",label:"Türkçe"},{value:"zh_CN",label:"中文"}],O=[{label:"12",value:"12"},{label:"24",value:"24"}];var S=a(2),_=a(23),T=a(2842),f=a(1776);var N=()=>{const e=Object(l.useSelector)(E.m),t=Object(_.k)(),a=Object(n.useCallback)(()=>t.push("system/administration"),[t]),c=Object(n.useCallback)(()=>t.push("system/controller"),[t]),r=Object(n.useCallback)(()=>t.push("system/maintenance"),[t]);return i.a.createElement("div",null,i.a.createElement(m.o,{padding:"none"},i.a.createElement(T.a,{headerButton:i.a.createElement(f.a,null),headerTitle:i.a.createElement(f.b,{label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_BUBBLE_MAINTENANCE_LABEL"}),type:f.c.BASIC}),onClick:r})),i.a.createElement(m.o,{padding:"none"},i.a.createElement(T.a,{headerButton:i.a.createElement(f.a,null),headerTitle:i.a.createElement(f.b,{label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_BUBBLE_CONTROLLER_CONFIGURATION_LABEL"}),type:f.c.BASIC}),onClick:c})),e.isStandalone&&i.a.createElement(m.o,{padding:"none"},i.a.createElement(T.a,{headerButton:i.a.createElement(f.a,null),headerTitle:i.a.createElement(f.b,{label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_BUBBLE_ADMINISTRATION_LABEL"}),type:f.c.BASIC}),onClick:a})))},I=a(3),A=a(2671),j=a(36),y=a(818),v=a(1761),C=a(1762),M=a(1758),D=a(319),R=a(570),x=a(1774),w=a(28),L=a(38),F=a(136),G=a(16),P=a(184),B=a(2584),k=a(73),H=a(19);const U=Object(k.a)(e=>H.a.object().shape({siteName:H.a.string().label("SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_LABEL").required(),...e?{super_identity:H.a.object().shape({name:H.a.string().label("SETTINGS_SYSTEM_MAIN_FORM_SUPER_IDENTITY_NAME_LABEL").required()})}:{}}));var $=a(114),Y=a.n($),z=a(2838),W=a(2760),V=a(867);const q=Object(I.c)(z.a)`
  background-color: ${({theme:e})=>e.motifPalette.uiBase} !important;
  padding: 0 ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */

  > :first-child {
    max-width: ${V.a};
    margin: 0 auto;
    position: relative;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: calc(100% - ${({theme:e})=>e.scrollBarWidth}px);
    right: ${({theme:e})=>e.scrollBarWidth/2}px;
  }
`;var K=({dirty:e,isSubmitting:t,handleReset:a,parentElementId:l,setStatus:c,setSubmitting:r,values:s,onSubmit:o})=>{const u=document.getElementById(l),m=Object(n.useCallback)(()=>{r(!0),o(s,{setStatus:c,setSubmitting:r})},[c,r,s,o]);return u?Y.a.createPortal(i.a.createElement(q,{active:e,align:"right"},i.a.createElement(W.a,{disabled:!e||t,type:"reset",variant:"default",onClick:a},i.a.createElement(S.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(W.a,{disabled:!e||t,type:"button",variant:"primary",onClick:m},i.a.createElement(S.c,{id:"COMMON_ACTION_APPLY_CHANGES"}))),u):null},Q=a(1259),J=a(493),X=a(95);const Z=Object(I.c)("span")`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  line-height: 1.5;
`;var ee=({display:e,handleClose:t})=>{const a=Object(l.useSelector)(E.b),c=Object(l.useSelector)(E.f),s=Object(l.useSelector)(E.e),o=Object(l.useSelector)(r.P),u=Object(l.useSelector)(r.O),m=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),d=Object(l.useDispatch)(),b=Object(n.useCallback)(()=>{t(!1)},[t]),p=Object(n.useCallback)(()=>{d(Object(r.l)({...o,preferences:{...u,enableNewUI:!1}})).then(()=>{d(Object(w.c)({icon:G.a.success,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_SUCCESS"}))}).then(()=>{let e=a;c&&!s&&(e=`${e.replace(/\/$/,"")}${window.location.search}`),Object(X.g)(!1,c,s,a),window.location.href=e}).catch(e=>{d(Object(w.c)({errorMessage:e.msg,errorValues:e,icon:G.a.danger,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_ERROR"})),t(!1)})},[u,t,a,d,s,c,o]);return e&&i.a.createElement(Q.a,{actions:[{type:"button",text:i.a.createElement(S.c,{id:"COMMON_ACTION_CANCEL"}),onClick:b},{type:"button",text:i.a.createElement(S.c,{id:"COMMON_ACTION_DEACTIVATE"}),onClick:p,variant:"danger"}],isOpen:!0,size:"small",style:m,parentSelector:J.b,title:i.a.createElement(S.c,{id:"SETTINGS_MODAL_DEACTIVATE_NEW_USER_INTERFACE_TITLE"})},i.a.createElement(Z,null,i.a.createElement(S.c,{id:"SETTINGS_MODAL_DEACTIVATE_NEW_USER_INTERFACE_DESCRIPTION"})))};const te=Object(I.c)("button")`
  border: none !important;
  height: 0;
  margin: 0;
  padding: 0 !important;
  outline: none;
  overflow: hidden !important;
  pointer-events: none;
  visibility: hidden;
  width: 0;
`,ae=({initialStatus:e,initialValues:t})=>{const{resetForm:a,status:i}=Object(j.e)();return Object(n.useEffect)(()=>{i.isSubmitted&&a({values:t,status:e})},[i.isSubmitted]),null};var ne=()=>{const e=Object(l.useDispatch)(),[t,a]=Object(n.useState)(!1),u=Object(l.useSelector)(D.selectActiveSiteDesc),p=Object(l.useSelector)(c.b),_=Object(l.useSelector)(s.selectCountrySettings),T=Object(l.useSelector)(r.y),f=Object(l.useSelector)(s.selectLocaleSettings),N=Object(l.useSelector)(D.selectSites),I=Object(l.useSelector)(s.selectSuperIdentitySettings),k=Object(l.useSelector)(E.f),H=Object(l.useSelector)(o.b),$=Object(l.useSelector)(r.P),Y=Object(l.useSelector)(r.O),z=Object(l.useSelector)(s.selectMgmtSettings),W=Object(l.useSelector)(R.h),V=Object(l.useSelector)(Object(P.d)(P.a.LEGACY_UI_SUPPORTED)),q=Object(n.useMemo)(()=>({isSubmitted:!1}),[]),Q=Object(n.useMemo)(()=>({country:{..._},locale:{...f},siteName:u,super_identity:{...I},ui_settings:{...$,preferences:{...Y}},mgmt_settings:z}),[u,_,f,I,$,Y,z]),J=Object(n.useCallback)((t,{setStatus:a,setSubmitting:n})=>{const i=[];Object(y.a)(Object(A.diff)(Q.country,t.country))||i.push(Object(s.saveSettings)(t.country)),Object(y.a)(Object(A.diff)(Q.locale,t.locale))||i.push(Object(s.saveSettings)(t.locale)),Q.siteName!==t.siteName&&i.push(Object(D.updateSiteName)(t.siteName)),Object(y.a)(Object(A.diff)(Q.super_identity,t.super_identity))||i.push(Object(s.saveSettings)(t.super_identity)),Object(y.a)(Object(A.diff)(Q.ui_settings,t.ui_settings))||i.push(Object(r.l)(t.ui_settings)),Object(y.a)(Object(A.diff)(Q.mgmt_settings,t.mgmt_settings))||i.push(Object(s.saveSettings)(t.mgmt_settings)),Object(y.a)(Object(A.diff)(Q.country,t.country))||i.push(Object(B.a)()),Promise.all(i.map(t=>e(t))).then(()=>{a({isSubmitted:!0}),e(Object(w.c)({icon:G.a.success,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_SUCCESS"}))}).catch(t=>{n(!1),e(Object(w.c)({errorMessage:t.msg,errorValues:t,icon:G.a.danger,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_ERROR"}))})},[e,Q.country,Q.locale,Q.mgmt_settings,Q.siteName,Q.super_identity,Q.ui_settings]),X=Object(n.useCallback)(()=>a(!0),[a]);return Object(d.g)([Object(P.c)(void 0,{crudCacheStrategy:{type:b.a.CACHE}})],i.a.createElement(m.o,{highlightType:"none",padding:"none"},i.a.createElement(j.c,{initialStatus:q,initialValues:Q,validationSchema:U(T),onSubmit:J},({dirty:e,handleBlur:n,handleSubmit:l,handleReset:c,isSubmitting:r,setFieldValue:s,setStatus:o,setSubmitting:u,values:d})=>i.a.createElement("form",{autoComplete:"off",onSubmit:l},i.a.createElement(m.p,null,k&&i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"input",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SUPER_IDENTITY_NAME_DESCRIPTION"}),htmlFor:"super_identity.name",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SUPER_IDENTITY_NAME_LABEL"}),searchIsApplicable:"isStandalone"}),i.a.createElement(C.a,{column:!0},i.a.createElement(L.Field,{full:!0,name:"super_identity.name"})))),(null==N?void 0:N.length)>1&&i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"input",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_DESCRIPTION"}),htmlFor:"siteName",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_LABEL"}),searchIsApplicable:"hasMoreThanOneSite"}),i.a.createElement(C.a,{column:!0},i.a.createElement(L.Field,{full:!0,name:"siteName",placeholder:"SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_PLACEHOLDER"}))),i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_COUNTRY_CODE_DESCRIPTION"}),htmlFor:"country.code",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_COUNTRY_CODE_LABEL"})}),i.a.createElement(C.a,null,i.a.createElement(L.Field,{full:!0,name:"country.code",options:p,type:"dropdown",searchable:!0}))),i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_PREFERRED_LANGUAGE_DESCRIPTION"}),htmlFor:"ui_settings.preferredLanguage",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_PREFERRED_LANGUAGE_LABEL"})}),i.a.createElement(C.a,null,i.a.createElement(L.Field,{allowReadOnly:!0,full:!0,name:"ui_settings.preferredLanguage",options:g,type:"dropdown",searchable:!0}))),k&&i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_LOCALE_TIMEZONE_DESCRIPTION"}),htmlFor:"locale.timezone",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_LOCALE_TIMEZONE_LABEL"})}),i.a.createElement(C.a,null,i.a.createElement(L.Field,{full:!0,name:"locale.timezone",options:H,type:"dropdown",searchable:!0}))),i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_TIME_FORMAT_DESCRIPTION"}),htmlFor:"ui_settings.preferences.use24HourTime",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_TIME_FORMAT_LABEL"})}),i.a.createElement(C.a,null,i.a.createElement(L.Field,{allowReadOnly:!0,field:{name:"ui_settings.preferences.use24HourTime",value:d.ui_settings.preferences.use24HourTime?"24":"12",onBlur:n},full:!0,name:"ui_settings.preferences.use24HourTime",options:O,type:"dropdown",onChange:(e,t)=>{s("ui_settings.preferences.use24HourTime","24"===t),s("ui_settings.preferences.timeFormat","24"===t?"H:mm":"h:mm a")}}))),V&&i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"toggleSmall",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_ENABLE_NEW_UI_DESCRIPTION"}),htmlFor:"ui_settings.preferences.enableNewUI",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_ENABLE_NEW_UI_LABEL"}),searchTags:["CLASSIC_UI","OLD_UI"],searchIsApplicable:"isLegacyUISupported"}),i.a.createElement(C.a,null,i.a.createElement(M.a,{name:"ui_settings.preferences.enableNewUI",checked:!0,onChange:X}))),i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"toggleSmall",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_IS_APP_DARK_DESCRIPTION"}),htmlFor:"ui_settings.preferences.isAppDark",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_IS_APP_DARK_LABEL"}),searchTags:["DARK_MODE","DARK_MOTIF","DARK_THEME","LIGHT_MODE","LIGHT_MOTIF","LIGHT_THEME"]}),i.a.createElement(C.a,null,i.a.createElement(L.Field,{allowReadOnly:!0,name:"ui_settings.preferences.isAppDark",type:"checkbox"}))),W&&i.a.createElement(v.a,null,i.a.createElement(F.SearchableGridLabel,{alignWith:"toggleSmall",description:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_WIFIMAN_ENABLED_DESCRIPTION"}),htmlFor:"mgmt_settings.wifiman_enabled",label:i.a.createElement(S.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_WIFIMAN_ENABLED_LABEL"}),searchTags:["WIFIMAN_ENABLED","WIFIMAN_DISABLED"]}),i.a.createElement(C.a,null,i.a.createElement(L.Field,{name:"mgmt_settings.wifiman_enabled",type:"checkbox"}))),i.a.createElement(K,{dirty:e,handleReset:c,isSubmitting:r,parentElementId:h,setStatus:o,setSubmitting:u,values:d,onSubmit:J}),i.a.createElement(te,{disabled:r,type:"submit",tabIndex:-1}),i.a.createElement(ae,{initialStatus:q,initialValues:Q}),i.a.createElement(x.a,{when:e&&!r}),i.a.createElement(ee,{display:t,handleClose:a})))))};t.default=Object(l.connect)(e=>({swaiProps:Object(E.m)(e)}))(()=>{const e=Object(n.useCallback)(()=>i.a.createElement("div",{id:h}),[]);return Object(d.g)([Object(c.a)(void 0,{crudCacheStrategy:{type:b.a.CACHE}}),Object(r.h)({crudCacheStrategy:{type:b.a.CACHE}}),Object(s.fetchSettings)({type:b.a.CACHE}),Object(o.a)(void 0,{crudCacheStrategy:{type:b.a.CACHE}})],i.a.createElement(m.j,{renderFooter:e},i.a.createElement(u.e,{scrollable:!0},i.a.createElement(ne,null),i.a.createElement(N,null))))})},2504:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return E}));var n=a(20),i=a.n(n),l=a(7),c="/v2/api/timezones";function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.q)("timezones",c,e,s({idField:"timezone"},t))},u=a(54),m=a(6),d=Object(l.A)(o()),E=Object(m.a)((function(e){return Object(u.a)(d(e),"data",[])}),(function(e){return e.map((function(e){return{label:"(UTC".concat(e.offset,") ").concat(e.timezone.replace(/_/g," ")),value:e.timezone}}))}))},2582:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return b}));var n=a(20),i=a.n(n),l=a(7),c="/api/s/{site}/stat/ccode";function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.q)("country",c,e,s({idField:"key"},t))},u=a(54),m=a(6),d=Object(l.A)(o()),E=function(e){return Object(u.a)(d(e),"data",[])},b=Object(m.a)(E,(function(e){return e.map((function(e){return{label:e.name,value:e.code}}))}));Object(m.a)(E,(function(e){return e.map((function(e){return{label:e.name,value:e.key}}))}))},2584:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o}));var n=a(7);const i=(e,t)=>Object(n.q)("radioAiStats","/api/s/{site}/stat/widget/radio-ai-data",e,{idField:({frequency:e,radio:t})=>e+t,...t});var l=a(54),c=Object(n.A)(i()),r=function(e){return function(t){return Object(l.a)(c(t),"data",[]).filter((function(t){return t.frequency===e})).some((function(e){return e.scan_data_available}))}},s=r("daily"),o=r("weekly")},570:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return d})),a.d(t,"d",(function(){return E})),a.d(t,"e",(function(){return b})),a.d(t,"h",(function(){return p})),a.d(t,"g",(function(){return h})),a.d(t,"a",(function(){return g}));var n=a(7);const i=(e,t)=>Object(n.q)("wifiman","/v2/api/site/{site}/wifiman",e,{idField:"id",...t}),l=i(void 0,{crudCacheStrategy:{type:n.a.COMBINED,interval:5e3}});var c=a(6),r=a(2411),s=a(25),o=a(30),u=a(4);const m=Object(n.A)(i()),d=Object(c.a)(m,s.c),E=Object(c.a)(d,e=>Object(r.a)(e,({report_timestamp:e})=>-e)[0]),b=e=>Object(c.a)(d,t=>t.find(t=>t.id===e)),p=Object(c.a)(u.selectIsUbiOS,e=>e),h=Object(c.a)(o.selectMgmtSettings,u.selectIsUbiOS,(e,t)=>(null==e?void 0:e.wifiman_enabled)&&t);var g;!function(e){e.INTERNET="INTERNET",e.LOCAL_DEVICE="LOCAL_DEVICE",e.LOCAL_CLIENT="LOCAL_CLIENT"}(g||(g={}))},719:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return G}));var n=a(0),i=a.n(n),l=a(3),c=a(363),r=a(804),s=a(214);const o=Object(l.c)(s.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,u=(Object(l.c)(c.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(l.c)(s.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),m=Object(l.c)(r.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>i.a.createElement(u,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),E=e=>i.a.createElement(o,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var b=a(1895),p=a(293);const h=Object(l.c)(b.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,g=e=>l.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(p.b)(({theme:e,...t})=>i.a.createElement(h,Object.assign({headerRowClassName:g(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(1775),S=a(577),_=a(1770),T=a(2),f=a(19),N=a(10),I=a(2399),A=a(36),j=a(14),y=a(38);const v=Object(l.c)("div")`
  display: flex;
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,C=Object(l.c)(j.c)`
  > * {
    vertical-align: middle;
  }
`,M=Object(l.c)("div",{shouldForwardProp:e=>"useInitialPositionAddButton"!==e})`
  position: absolute;
  right: -65px;
  top: 12px;
  ${({useInitialPositionAddButton:e})=>e&&"margin: 12px 0 0 16px; position: initial;"}
`,D=Object(l.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,R=Object(l.c)(j.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,x=Object(l.c)(j.g,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,w=Object(l.c)(j.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,L=Object(l.c)(j.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,F=Object(l.c)("div")`
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
`;var G=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:l,onRemoveItem:c,validationSchema:r,initialValues:s,onEditSubmit:o,customEditFunction:u,useValuesInSchema:m=!1,max:d,useWindowTable:E=!1,addButtonText:p="COMMON_ACTION_ADD",invalid:h,useInitialPositionAddButton:g,children:O,...G}){const P=Object(n.useContext)(j.l),[B,k]=Object(n.useState)(!0),H=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(j.g,{alignItems:"center",marginRight:8,marginBottom:1},i.a.createElement(C,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{k(!1),c(t),await Promise.resolve(),k(!0)}},i.a.createElement(T.c,{id:"COMMON_ACTION_REMOVE"}))),[e,k,c]),U=Object(n.useMemo)(()=>E?I.a:b.a,[E]);return i.a.createElement(A.c,{enableReinitialize:!0,onSubmit:t=>{o(t[e])},initialValues:s,validationSchema:()=>m?f.a.lazy(e=>r(e)):r},({values:n,errors:r,setFieldValue:o,handleSubmit:m,handleReset:E,setTouched:b,dirty:f,touched:I,submitCount:A})=>i.a.createElement(i.a.Fragment,null,t.map((a,c)=>i.a.createElement(v,{inline:a.inline,isLast:c===t.length-1,key:a.name},i.a.createElement(j.g,{flexDirection:"column",width:"100%",marginBottom:a.hasTwoLineError&&I[a.name]&&r[a.name]?48:16},i.a.createElement(y.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:void 0!==n[a.name]?I[a.name]&&r[a.name]:h,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!P&&l&&c===t.length-1&&i.a.createElement(M,{useInitialPositionAddButton:g},i.a.createElement(C,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),k(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await b(a,!0);t.find(e=>i[e.name])||l(n),k(!0)},Icon:N.Db,disabled:n.editActive||n[e].length>=d||!f},i.a.createElement(T.c,{id:p}))))),O,n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,l)=>i.a.createElement(R,{key:n.id,width:"100%"},G.columns.map((n,c)=>t[c]?i.a.createElement(x,{key:n.id,isLast:c===G.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(y.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${l}][${n.id}]`,type:t[c].type,fast:!0},"dropdown"!==t[c].type?{}:{options:t[c].options,translateLabel:!0,translateOptions:t[c].translateOptions,translatePlaceholder:!0,type:t[c].type,validated:t[c].validated}))):null))),i.a.createElement(w,{justifyContent:"flex-end",width:"100%"},i.a.createElement(L,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{E(),o("editActive",!1)}},i.a.createElement(T.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(j.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:m,disabled:Object(S.a)(Object(_.a)(n,"editActive"),Object(_.a)(s,"editActive"))},i.a.createElement(T.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(v,null,i.a.createElement(D,null,i.a.createElement(C,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{E(),u?u():o("editActive",!0)},Icon:N.Cb},i.a.createElement(T.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&B&&i.a.createElement(F,null,i.a.createElement(U,{columns:G.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderHoverContent:c?H:void 0})))))}}}]);
//# sourceMappingURL=38.f400b1db6c26e1693504.js.map