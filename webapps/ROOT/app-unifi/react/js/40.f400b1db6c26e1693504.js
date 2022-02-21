(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[40],{1261:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return _})),a.d(t,"c",(function(){return m}));var n,i=a(0),l=a.n(i),r=a(3),c=a(393),s=a(42),o=a(14);!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(n||(n={}));const _=Object(r.c)(o.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,m=Object(r.c)(o.g)`
  * {
    line-height: 1.4 !important;
  }
`,E=Object(r.c)(c.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,status:i})=>l.a.createElement(l.a.Fragment,null,(()=>{switch(t){default:case n.BASIC:return e;case n.CONFIGURED:return l.a.createElement(m,{alignItems:"center"},e);case n.STATUS:return l.a.createElement(m,{alignItems:"center"},l.a.createElement(E,{variant:i}),l.a.createElement(_,{flex:"1",flexDirection:"column"},e,a&&l.a.createElement(s.a,null,a)));case n.UNCONFIGURED:return l.a.createElement(m,{alignItems:"center"},l.a.createElement(o.g,{flex:"0 1 128px",flexDirection:"column"},e,l.a.createElement(s.a,null,a)))}})())},1774:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(3),r=a(2),c=a(1780),s=a.n(c),o=a(1259),_=a(493),m=a(494);const E=Object(l.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:l=null,leaveButtonText:c="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:d="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:u="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:h="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const A=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),p=Object(m.a)(t),S=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),I=Object(n.useCallback)(e=>(e={},t={})=>p(e,t)&&S(e,t),[p,S]);return!!e&&i.a.createElement(s.a,{when:I(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(o.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:d}),onClick:()=>l?l(e):e()},{type:"button",text:i.a.createElement(r.c,{id:c}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:A,parentSelector:_.b,title:i.a.createElement(r.c,{id:u}),onRequestClose:()=>l?l(e):e()},i.a.createElement(E,null,i.a.createElement(r.c,{id:h}))))}},1775:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1776:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return _.d})),a.d(t,"c",(function(){return _.a}));var n=a(0),i=a.n(n),l=a(3),r=a(10),c=a(14);const s=Object(l.c)(c.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var o=({children:e,...t})=>i.a.createElement(s,Object.assign({alignItems:"center"},t),e,i.a.createElement(r.h,null)),_=a(1261)},1777:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return J})),a.d(t,"d",(function(){return K.a})),a.d(t,"f",(function(){return K.c})),a.d(t,"h",(function(){return K.e})),a.d(t,"g",(function(){return K.d})),a.d(t,"i",(function(){return te}));var n=a(1776);var i=a(0),l=a.n(i),r=a(3);var c=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...c})=>{const s=a?12:i,o=a?0:n;return l.a.createElement("div",Object.assign({className:Object(r.b)("col-"+s,"offset-"+o,t)},c),e)};var s,o=({children:e="",offset:t=0,size:a=2})=>l.a.createElement("div",{className:Object(r.b)("col-"+a,"offset-"+t)},e),_=a(2),m=a(559),E=a.n(m),d=a(14),u=a(1783),h=a.n(u),A=a(126),p=a.n(A),S=a(106);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(s||(s={}));const I=p.a.bind(h.a);var b=({className:e=null,status:t=s.NEUTRAL,...a})=>l.a.createElement(S.a,Object.assign({},a,{className:I("ubntStatusText","ubntStatusText--"+t,e)})),O=a(256),g=a(1779);const R=Object(r.c)(d.g)`
  border: 1px solid ${O.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,D=Object(r.c)(b)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var T=({state:e,className:t=null,...a})=>l.a.createElement(R,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),l.a.createElement(D,{message:g.b[e],status:s.WARNING})),N=a(136),L=a(75),f=a(5),v=a(26),C=a(40),x=a(54);const P={BORDER_WIDTH:2},M={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},F=({type:e,size:t,width:a,height:n})=>{switch(e){case N.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:l}=M;return{top:l,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function y({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:l,width:c,height:s}){const o=Object(f.useSelector)(N.selectHighlight),[_,m]=Object(C.c)(0),[E,d]=Object(C.c)(!1),u=Object(i.useRef)(null),h=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(r.a)({"&::before":{border:`${P.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:v.a["blue-light-3"],show:E,style:{...F({type:e,size:l,width:c,height:s}),...a}}),[E,e,a,l,c,s]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>_)m(_+1);else if(u.current&&t===o.id&&o.type===e){window.getComputedStyle(u.current).border,window.getComputedStyle(u.current).boxShadow;let t=u.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:l}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:l}=t.current.getBoundingClientRect();switch(a){case N.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=M,r=l+Object(x.a)(n,"top",a),c=r+i+Object(x.a)(n,"paddingBottom",e)+Object(x.a)(n,"paddingTop",t)+2*P.BORDER_WIDTH;return{bottom:c,height:c-r,top:r}}}})({height:s,highlightRef:u,type:e,highlightStyle:a}),{bottom:r,height:c,top:o}=n.getBoundingClientRect(),_=t>r,m=i>c,E=15;l<o||m?n.scrollTo({behavior:"smooth",top:n.scrollTop-o+l-E}):_&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-r+E})}d(!0)}},[s,_]),Object(i.useEffect)(()=>{E||o.id!==t||m(e=>e+1),E&&o.id!==t&&d(!1)},[o.id,E]),{highlightClassName:h,highlightRef:u}}const j=Object(r.c)(E.a)`
  color: ${L.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,w=Object(r.c)(E.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,U=r.a`
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
`;var V=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:c=!1,highlightDelay:s=null,highlightStyle:o=null,htmlFor:m=null,offset:E=0,size:d=5,useHtml:u=!1})=>{const{highlightClassName:h,highlightRef:A}=y({type:N.SearchHighlightType.FIELD,forId:m,highlightStyle:o,highlightDelay:s,size:d}),p=!(!n&&!a),S={["col-"+d]:!0,["offset-"+E]:E>0},I=u?_.b:_.c;return l.a.createElement("div",{className:Object(r.b)(S,U,h),ref:A},l.a.createElement("div",{className:"mb-1"},l.a.createElement(w,{className:"settingsGridLabel",htmlFor:m,primary:!0},c?e:l.a.createElement(_.c,{id:e})),t&&l.a.createElement(T,{state:t})),p&&l.a.createElement("div",null,l.a.createElement(j,{className:"settingsGridDescription",htmlFor:m,secondary:!0},n?l.a.createElement(I,{id:n,values:i}):a)))};const G=r.a`
  max-width: 960px;
`,B=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:c=!1})=>{const s=n?4:i;return l.a.createElement("div",{className:Object(r.b)("row","mt-"+s,c?null:G,t),ref:a},e)};var $=l.a.forwardRef((e,t)=>l.a.createElement(B,Object.assign({forwardedRef:t},e)));var k=e=>l.a.createElement("div",{className:"mt-2 mb-6"},l.a.createElement(S.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(r.c)("div")`
  flex: 0 1 480px;
`,W=Object(r.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var z=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:c=null})=>{const s=O.b.sectionColors.common;return l.a.createElement($,{className:t,marginTop:0},l.a.createElement(H,null,l.a.createElement(W,{className:Object(r.b)("mt-8","type-larger"),style:{color:s}},l.a.createElement(_.c,{id:e})),a&&l.a.createElement(S.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const X=Object(r.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>l.a.createElement(X,{className:Object(r.b)("container","px-8",t),noDivider:n},l.a.createElement("div",{className:Object(r.b)({"pb-8":!a})},e));q.Content=c,q.Icon=o,q.Label=V,q.Row=$,q.SectionHeader=k,q.Subheader=z;var Y=a(268);const Q=Object(r.c)(Y.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var J=e=>l.a.createElement(Q,Object.assign({},e)),K=a(719),Z=a(188),ee=a(9);const te=({lastQuery:e=0})=>{const t=Object(f.useSelector)(Z.B);return e>0?l.a.createElement(ee.a,{alignItems:"center"},l.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",l.a.createElement(_.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):l.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1774)},1779:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2289:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(252),r=a(40),c=a(7),s=a(2),o=a(5),_=a(23),m=a(168),E=a(18),d=a(2429),u=a(251),h=a(28),A=a(16),p=a(3),S=a(36),I=a(1188),b=a(227),O=a.n(b),g=a(1761),R=a(1763),D=a(2379),T=a(1762),N=a(42),L=a(101),f=a(30),v=a(1777),C=a(2433),x=a(38),P=a(19),M=a(2568);const F=Object(p.c)(g.a)`
  height: 100%;
  margin-bottom: 0 !important;
`,y=[{id:"ip",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS"}),renderCell:({ip:e})=>e,sortable:!1,minWidth:120},{id:"port",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT"}),renderCell:({port:e})=>e,sortable:!1,minWidth:80},{id:"x_secret",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"}),renderCell:({x_secret:e})=>e.replace(/./g,"•"),sortable:!1,minWidth:180}],j=[{id:"ip",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS"}),renderCell:({ip:e})=>e,sortable:!1,minWidth:120},{id:"port",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT"}),renderCell:({port:e})=>e,sortable:!1,minWidth:80},{id:"x_secret",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"}),renderCell:({x_secret:e})=>e.replace(/./g,"•"),sortable:!1,minWidth:180}],w={authIp:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS",authPort:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT",authX_secret:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"},U={acctIp:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS",acctPort:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT",acctX_secret:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"},V=Object(I.a)(e=>[{inline:!0,name:"auth_server"===e?"authIp":"acctIp",placeholder:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS",type:"text",validated:!0,autoComplete:"disabled"},{inline:!0,name:"auth_server"===e?"authPort":"acctPort",placeholder:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT",type:"text",validated:!0},{inline:!0,name:"auth_server"===e?"authX_secret":"acctX_secret",placeholder:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD",type:"password",validated:!0}]),G=P.a.object().shape({editActive:P.a.bool(),ip:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").when("editActive",{is:!1,then:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(L.i,{message:i.a.createElement(s.c,{id:"COMMON_VALIDATION_VALID_IPV4"})})}).when("auth_servers",{is:[],then:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(L.i,{message:i.a.createElement(s.c,{id:"COMMON_VALIDATION_VALID_IPV4"})})}),port:P.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").when("editActive",{is:!1,then:P.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(l.RADIUS_LIMITS.MIN_PORT).max(l.RADIUS_LIMITS.MAX_PORT).required()}),x_secret:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").when("editActive",{is:!1,then:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),auth_servers:P.a.array().of(M.c)}),B=P.a.object().shape({editActive:P.a.bool(),accounting_enabled:P.a.bool(),ip:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").when("editActive",{is:!1,then:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(L.i,{message:i.a.createElement(s.c,{id:"COMMON_VALIDATION_VALID_IPV4"})})}),port:P.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").when("editActive",{is:!1,then:P.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(l.RADIUS_LIMITS.MIN_PORT).max(l.RADIUS_LIMITS.MAX_PORT)}),x_secret:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").when("editActive",{is:!1,then:P.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),acct_servers:P.a.array().of(M.c)}),$=Object(I.a)((e,t)=>({editActive:!1,authIp:"",authPort:t.auth_port,authX_secret:"",auth_servers:e.auth_servers})),k=Object(I.a)((e,t)=>({editActive:!1,acctIp:"",acctPort:t.acct_port,acctX_secret:"",acct_servers:e.acct_servers,accounting_enabled:e.accounting_enabled}));var H=({authError:e,acctError:t})=>{const a=Object(S.e)(),{setFieldValue:l,values:r}=a,c=Object(o.useSelector)(f.selectRadiusSettings),_=Object(n.useCallback)(e=>{l("auth_servers",(e.auth_servers||[]).concat({ip:e.authIp,port:e.authPort,x_secret:e.authX_secret,id:O()()}))},[l]),m=Object(n.useCallback)(e=>{l("acct_servers",(e.acct_servers||[]).concat({ip:e.acctIp,port:e.acctPort,x_secret:e.acctX_secret,id:O()()}))},[l]),E=Object(n.useCallback)((e,t)=>l(t,[...e]),[l]),d=Object(n.useCallback)((e,t)=>l(t,r[t].filter(({id:t})=>t!==e.id)),[l,r]);return i.a.createElement(R.a,{padding:"none"},e&&!r.auth_servers.length&&i.a.createElement(F,null,i.a.createElement(D.a,null),i.a.createElement(T.a,{wrap:!0},i.a.createElement(N.a,{color:"danger"},e)," ")),i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"auth_servers",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_AUTH_SERVERS"})}),i.a.createElement(T.a,{wrap:!0},i.a.createElement(v.d,{fieldName:"auth_servers",columns:y,fieldLabels:w,initialValues:$(r,c),items:r.auth_servers||[],newFields:V("auth_server"),validationSchema:G,onAddItem:e=>_(e),onEditSubmit:e=>E(e,"auth_servers"),onRemoveItem:e=>d(e,"auth_servers"),max:4}))),i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"accounting_enabled",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_ACCOUNTING"})}),i.a.createElement(T.a,null,i.a.createElement(x.Field,{name:"accounting_enabled",type:"checkbox"}))),r.accounting_enabled&&t&&!r.acct_servers.length&&i.a.createElement(F,null,i.a.createElement(D.a,null),i.a.createElement(T.a,{wrap:!0},i.a.createElement(N.a,{color:"danger"},t)," ")),i.a.createElement(C.a,{in:r.accounting_enabled},i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"acct_servers",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_ACCOUNTING_SERVERS"})}),i.a.createElement(T.a,{wrap:!0},i.a.createElement(v.d,{fieldName:"acct_servers",columns:j,fieldLabels:U,initialValues:k(r,c),items:r.acct_servers||[],newFields:V("acct_server"),validationSchema:B,onAddItem:e=>m(e),onEditSubmit:e=>E(e,"acct_servers"),onRemoveItem:e=>d(e,"acct_servers"),max:4})))),i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"interim_update_enabled",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_INTERIM_UPDATE"})}),i.a.createElement(T.a,null,i.a.createElement(x.Field,{name:"interim_update_enabled",type:"checkbox"}))),i.a.createElement(C.a,{in:r.interim_update_enabled},i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"interim_update_interval",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_INTERIM_UPDATE_INTERVAL"})}),i.a.createElement(T.a,{column:!0},i.a.createElement(x.Field,{type:"number",full:!0,name:"interim_update_interval"})))))};const W=e=>e.map(({id:e,...t})=>({...t}));var z=a(879);var X=()=>i.a.createElement(R.a,null,i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"name",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_NAME"})}),i.a.createElement(T.a,{column:!0},i.a.createElement(x.Field,{name:"name",type:"input",full:!0}))),i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"vlan_enabled",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_WIRED"}),description:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_DESCRIPTION_ENABLE_WIRED"})}),i.a.createElement(T.a,null,i.a.createElement(x.Field,{name:"vlan_enabled",type:"checkbox"}))),i.a.createElement(g.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"vlan_wlan_mode",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_WIRELESS"}),description:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_DESCRIPTION_ENABLE_WIRELESS"})}),i.a.createElement(T.a,null,i.a.createElement(x.Field,{name:"vlan_wlan_mode",type:"checkbox"}))));var q=({items:e,openAccordions:t,setOpenAccordions:a})=>{const l=Object(n.useRef)(null),{errors:c}=Object(S.e)();return Object(r.h)(l,c),i.a.createElement("div",{ref:l},i.a.createElement(X,null),i.a.createElement(z.a,{items:e,openPanelIds:t,onClickPanel:e=>a(e)}))};const Y=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t];var Q=Object(s.f)(({intl:e})=>{const{profileId:t}=Object(_.m)(),a=Object(o.useDispatch)(),c=Object(o.useSelector)(E.x),p=Object(o.useSelector)(l.selectRadiusProfile)(t),[S,I]=Object(n.useReducer)(Y,[]),[b,g]=Object(n.useState)(),[R,D]=Object(n.useState)(),T=Object(n.useMemo)(()=>(e=>({attr_no_delete:!1,attr_hidden_id:"",name:"",use_usg_auth_server:!1,auth_servers:[],acct_servers:[],vlan_enabled:!1,vlan_wlan_mode:!1,accounting_enabled:!1,interim_update_enabled:!1,interim_update_interval:"3600",...e?{...e,auth_servers:e.auth_servers.map(e=>({...e,id:O()()})),acct_servers:e.acct_servers.map(e=>({...e,id:O()()})),vlan_wlan_mode:e.vlan_wlan_mode===l.RADIUS_VLAN_OPTIONS.ENABLED}:{}}))(p),[p]),N=Object(r.i)(),L=Object(r.o)({component:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_TITLE"}),message:"radius-profile"},"radius-profile",(null==p?void 0:p._id)?p.name:void 0),f=Object(n.useCallback)((t,{setSubmitting:n})=>{if(!t.auth_servers.length||t.accounting_enabled&&!t.acct_servers.length)return S.includes("radius-profile-settings")||I("radius-profile-settings"),!t.auth_servers.length&&g(e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_SERVER_ERROR"},{name:e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_AUTH_SERVER"})})),t.accounting_enabled&&!t.acct_servers.length&&D(e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_SERVER_ERROR"},{name:e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_ACCOUNTING_SERVER"})})),void n(!1);const i={...t,vlan_wlan_mode:t.vlan_wlan_mode?l.RADIUS_VLAN_OPTIONS.ENABLED:l.RADIUS_VLAN_OPTIONS.DISABLED,auth_servers:W(t.auth_servers),acct_servers:t.accounting_enabled?W(t.acct_servers):[]};a(Object(l.saveRadiusProfile)(i)).then(()=>{a(Object(h.c)({icon:A.a.success,message:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_TOAST_SAVE_SUCCESS"})),N()}).catch(e=>{a(Object(h.c)({errorMessage:e.msg,errorValues:e,icon:A.a.danger,message:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_TOAST_SAVE_FAILURE"})),n(!1)})},[a,N,e,S]),v=Object(n.useMemo)(()=>[{id:"radius-profile-settings",label:i.a.createElement(s.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_LABEL_RADIUS_SETTINGS"}),renderContent:()=>i.a.createElement(H,{authError:b,acctError:R})}],[R,b]),C=Object(n.useCallback)(()=>a(Object(u.b)({name:T.name,onConfirm:()=>a(Object(l.removeRadiusProfile)(T._id,T.name)).then(N())})),[a,N,T._id,T.name]);return i.a.createElement(d.b,{initialValues:T,isEdit:!0,isView:c,title:L,validationSchema:M.a,goBack:N,showBack:!0,onEscClicked:N,onSubmit:f,footerActiveOverride:!!(null==T?void 0:T._id),customFooterButtons:e=>(null==T?void 0:T._id)&&i.a.createElement(m.a,{disabled:e,type:"button",variant:"tertiary",color:"danger",onClick:C},i.a.createElement(s.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(q,{items:v,openAccordions:S,setOpenAccordions:I}))});t.default=()=>Object(r.g)([Object(l.fetchRadiusProfiles)(void 0,{crudCacheStrategy:{type:c.a.CACHE}})],i.a.createElement(Q,null))},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return b}));var n=a(0),i=a.n(n),l=a(3),r=a(2),c=a(36),s=a(2838),o=a(2760),_=a(1774),m=a(867),E=a(14),d=a(10),u=a(42);const h=Object(l.c)(E.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,A=Object(l.c)(E.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,p=Object(l.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,S=Object(l.c)(E.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,I=Object(l.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var b=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:l,ignoredPaths:r})=>i.a.createElement(A,{flex:"none",height:"65px"},i.a.createElement(E.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(h,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(S,{legacy:!1,name:"backButton",type:"button",onClick:a},i.a.createElement(d.g,{size:"original"}))),i.a.createElement(p,null,i.a.createElement(I,{weight:"bold"},e.component)),i.a.createElement(h,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!l&&i.a.createElement(S,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(d.A,{size:"original"})))));const O=Object(l.c)(E.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,g=Object(l.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,R=Object(l.c)(E.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,D=Object(l.c)(s.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,T=Object(l.c)(E.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,N=Object(l.c)(E.k)`
  height: 100%;
  width: 100%;
`;var L=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:l,isView:s,showBack:m,title:d,unsavedChangesModalIgnoredPaths:u,onEscClicked:h,submitText:A="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:p=!1,customFooterButtons:S,hidddenHeader:I,className:L,...f})=>i.a.createElement(c.c,Object.assign({enableReinitialize:!0},f),({dirty:l,handleReset:c,handleSubmit:f,isSubmitting:v})=>i.a.createElement(g,{autoComplete:"off",onSubmit:f,className:L},i.a.createElement(N,{vertical:!0},!I&&i.a.createElement(b,{goBack:a,hideClose:n,showBack:m,title:d,onEscClicked:h,ignoredPaths:u}),i.a.createElement(T,{flex:"1"},i.a.createElement(O,{flex:"none",flexDirection:"column"},e)),!t&&!s&&i.a.createElement(_.a,{ignoredPaths:u,when:l&&!v}),(!s||p)&&i.a.createElement(D,{active:l||p},i.a.createElement(E.g,{justifyContent:S?"space-between":"flex-end",width:"100%",alignItems:"center"},S&&i.a.createElement(R,null,S(v)),!s&&i.a.createElement(E.g,null,i.a.createElement(o.a,{disabled:!l||v,type:"button",variant:"default",onClick:c},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(o.a,{disabled:!l||v,type:"submit",variant:"primary"},i.a.createElement(r.c,{id:A}))))))))},2433:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(2312),r=a(3);const c=(e,t)=>r.a`
  &-appear,
  &-enter {
    opacity: 0;
    display: flex !important;
    transform: translateY(-10px);
  }
  &-appear-active,
  &-enter-active {
    display: flex !important;
    ${e&&`flex-direction: ${e};`}
    ${t&&`padding: ${t};`}
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 150ms ease-in-out, transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-appear-done,
  &-enter-done {
    display: flex !important;
    ${e&&`flex-direction: ${e};`}
    ${t&&`padding: ${t};`}
    opacity: 1;
  }
  &-exit {
    display: flex !important;
    opacity: 0;
    height: 0;
    box-sizing: border-box;
    margin: 10px 0 0 !important;
    & > * {
      display: none;
    }
  }
  &-exit-active {
    display: flex !important;
    margin: 0 !important;
    transition: margin 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit-done {
    display: none;
  }
`;t.a=i.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:r="0 0 32px",wrap:s=!1,children:o,..._})=>{const m=Object(n.useMemo)(()=>i.a.Children.map(o,(n,r)=>i.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,void 0),mountOnEnter:!0},_),null===n?i.a.createElement("div",null):n)),[o,a,t,_,e]);return s?i.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,r),mountOnEnter:!0},_),i.a.createElement("div",null,o)):i.a.createElement(i.a.Fragment,null,m)})},2568:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return _})),a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n),l=a(2),r=a(101),c=a(252),s=a(19);const o=s.a.object().shape({enabled:s.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SERVER"),x_secret:s.a.string().when("enabled",{is:!0,then:s.a.string().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SECRET").required()}),auth_port:s.a.number().when("enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_AUTHENTICATION_PORT").required().min(c.RADIUS_LIMITS.MIN_PORT).max(c.RADIUS_LIMITS.MAX_PORT)}),acct_port:s.a.number().when("enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_PORT").required().min(c.RADIUS_LIMITS.MIN_PORT).max(c.RADIUS_LIMITS.MAX_PORT)}),interim_update_interval:s.a.number().when("enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_INTERIM_INTERVAL").required().min(c.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(c.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),tunneled_reply:s.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_TUNNELED_REPLY")}),_=s.a.object().shape({ip:s.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(r.i,{message:i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IPV4"})}),port:s.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(c.RADIUS_LIMITS.MIN_PORT).max(c.RADIUS_LIMITS.MAX_PORT),x_secret:s.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),m=s.a.object().shape({name:s.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_NAME").required(),auth_servers:s.a.array().of(_),accounting_enabled:s.a.bool(),interim_update_enabled:s.a.bool(),interim_update_interval:s.a.number().when("interim_update_enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_INTERIM_UPDATE_INTERVAL").required().min(c.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(c.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),acct_servers:s.a.array().when("accounting_enabled",{is:!0,then:s.a.array().of(_)})})},719:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return E})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return S.a})),a.d(t,"a",(function(){return w}));var n=a(0),i=a.n(n),l=a(3),r=a(363),c=a(804),s=a(214);const o=Object(l.c)(s.a)`
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
`,Object(l.c)(s.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),m=Object(l.c)(c.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,E=e=>i.a.createElement(_,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),d=e=>i.a.createElement(o,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1895),h=a(293);const A=Object(l.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,p=e=>l.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(h.b)(({theme:e,...t})=>i.a.createElement(A,Object.assign({headerRowClassName:p(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var S=a(1775),I=a(577),b=a(1770),O=a(2),g=a(19),R=a(10),D=a(2399),T=a(36),N=a(14),L=a(38);const f=Object(l.c)("div")`
  display: flex;
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,v=Object(l.c)(N.c)`
  > * {
    vertical-align: middle;
  }
`,C=Object(l.c)("div",{shouldForwardProp:e=>"useInitialPositionAddButton"!==e})`
  position: absolute;
  right: -65px;
  top: 12px;
  ${({useInitialPositionAddButton:e})=>e&&"margin: 12px 0 0 16px; position: initial;"}
`,x=Object(l.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,P=Object(l.c)(N.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,M=Object(l.c)(N.g,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,F=Object(l.c)(N.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,y=Object(l.c)(N.c)`
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
`;var w=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:l,onRemoveItem:r,validationSchema:c,initialValues:s,onEditSubmit:o,customEditFunction:_,useValuesInSchema:m=!1,max:E,useWindowTable:d=!1,addButtonText:h="COMMON_ACTION_ADD",invalid:A,useInitialPositionAddButton:p,children:S,...w}){const U=Object(n.useContext)(N.l),[V,G]=Object(n.useState)(!0),B=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(N.g,{alignItems:"center",marginRight:8,marginBottom:1},i.a.createElement(v,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{G(!1),r(t),await Promise.resolve(),G(!0)}},i.a.createElement(O.c,{id:"COMMON_ACTION_REMOVE"}))),[e,G,r]),$=Object(n.useMemo)(()=>d?D.a:u.a,[d]);return i.a.createElement(T.c,{enableReinitialize:!0,onSubmit:t=>{o(t[e])},initialValues:s,validationSchema:()=>m?g.a.lazy(e=>c(e)):c},({values:n,errors:c,setFieldValue:o,handleSubmit:m,handleReset:d,setTouched:u,dirty:g,touched:D,submitCount:T})=>i.a.createElement(i.a.Fragment,null,t.map((a,r)=>i.a.createElement(f,{inline:a.inline,isLast:r===t.length-1,key:a.name},i.a.createElement(N.g,{flexDirection:"column",width:"100%",marginBottom:a.hasTwoLineError&&D[a.name]&&c[a.name]?48:16},i.a.createElement(L.Field,Object.assign({disabled:n.editActive||n[e].length>=E,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:void 0!==n[a.name]?D[a.name]&&c[a.name]:A,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!U&&l&&r===t.length-1&&i.a.createElement(C,{useInitialPositionAddButton:p},i.a.createElement(v,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),G(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await u(a,!0);t.find(e=>i[e.name])||l(n),G(!0)},Icon:R.Db,disabled:n.editActive||n[e].length>=E||!g},i.a.createElement(O.c,{id:h}))))),S,n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,l)=>i.a.createElement(P,{key:n.id,width:"100%"},w.columns.map((n,r)=>t[r]?i.a.createElement(M,{key:n.id,isLast:r===w.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(L.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${l}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),i.a.createElement(F,{justifyContent:"flex-end",width:"100%"},i.a.createElement(y,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{d(),o("editActive",!1)}},i.a.createElement(O.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(N.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:m,disabled:Object(I.a)(Object(b.a)(n,"editActive"),Object(b.a)(s,"editActive"))},i.a.createElement(O.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(f,null,i.a.createElement(x,null,i.a.createElement(v,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{d(),_?_():o("editActive",!0)},Icon:R.Cb},i.a.createElement(O.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&V&&i.a.createElement(j,null,i.a.createElement($,{columns:w.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderHoverContent:r?B:void 0})))))}}}]);
//# sourceMappingURL=40.f400b1db6c26e1693504.js.map