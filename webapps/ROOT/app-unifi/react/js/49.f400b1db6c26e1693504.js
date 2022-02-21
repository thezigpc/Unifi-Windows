(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[49],{1774:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(3),c=a(2),i=a(1780),E=a.n(i),o=a(1259),_=a(493),s=a(494);const T=Object(l.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:l=null,leaveButtonText:i="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:m="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:d="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:R="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const N=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),O=Object(s.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),u=Object(n.useCallback)(e=>(e={},t={})=>O(e,t)&&p(e,t),[O,p]);return!!e&&r.a.createElement(E.a,{when:u(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(o.a,{actions:[{type:"button",text:r.a.createElement(c.c,{id:m}),onClick:()=>l?l(e):e()},{type:"button",text:r.a.createElement(c.c,{id:i}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:N,parentSelector:_.b,title:r.a.createElement(c.c,{id:d}),onRequestClose:()=>l?l(e):e()},r.a.createElement(T,null,r.a.createElement(c.c,{id:R}))))}},1900:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a(5),i=a(4),E=a(34),o=a(819),_=a(40),s=a(7),T=a(2467);const m={};t.default=()=>{const{id:e}=Object(l.m)(),t=Object(c.useSelector)(o.selectPortForwardData).find(t=>t._id===e),a=Object(_.i)();return Object(_.g)([Object(o.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:s.a.CACHE}}),Object(i.fetchSiteGateway)(),Object(E.fetchNetworks)(void 0,{crudCacheStrategy:{type:s.a.CACHE}})],r.a.createElement(T.a,{initialValues:t||m,onBack:a}))}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return A}));var n=a(0),r=a.n(n),l=a(3),c=a(2),i=a(36),E=a(2838),o=a(2760),_=a(1774),s=a(867),T=a(14),m=a(10),d=a(42);const R=Object(l.c)(T.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,N=Object(l.c)(T.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,O=Object(l.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,p=Object(l.c)(T.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,u=Object(l.c)(d.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var A=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:l,ignoredPaths:c})=>r.a.createElement(N,{flex:"none",height:"65px"},r.a.createElement(T.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(R,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(p,{legacy:!1,name:"backButton",type:"button",onClick:a},r.a.createElement(m.g,{size:"original"}))),r.a.createElement(O,null,r.a.createElement(u,{weight:"bold"},e.component)),r.a.createElement(R,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!l&&r.a.createElement(p,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(m.A,{size:"original"})))));const I=Object(l.c)(T.g)`
  width: 100%;
  max-width: ${s.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,g=Object(l.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,b=Object(l.c)(T.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,G=Object(l.c)(E.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${s.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,S=Object(l.c)(T.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,f=Object(l.c)(T.k)`
  height: 100%;
  width: 100%;
`;var h=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:l,isView:E,showBack:s,title:m,unsavedChangesModalIgnoredPaths:d,onEscClicked:R,submitText:N="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:O=!1,customFooterButtons:p,hidddenHeader:u,className:h,...D})=>r.a.createElement(i.c,Object.assign({enableReinitialize:!0},D),({dirty:l,handleReset:i,handleSubmit:D,isSubmitting:W})=>r.a.createElement(g,{autoComplete:"off",onSubmit:D,className:h},r.a.createElement(f,{vertical:!0},!u&&r.a.createElement(A,{goBack:a,hideClose:n,showBack:s,title:m,onEscClicked:R,ignoredPaths:d}),r.a.createElement(S,{flex:"1"},r.a.createElement(I,{flex:"none",flexDirection:"column"},e)),!t&&!E&&r.a.createElement(_.a,{ignoredPaths:d,when:l&&!W}),(!E||O)&&r.a.createElement(G,{active:l||O},r.a.createElement(T.g,{justifyContent:p?"space-between":"flex-end",width:"100%",alignItems:"center"},p&&r.a.createElement(b,null,p(W)),!E&&r.a.createElement(T.g,null,r.a.createElement(o.a,{disabled:!l||W,type:"button",variant:"default",onClick:i},r.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(o.a,{disabled:!l||W,type:"submit",variant:"primary"},r.a.createElement(c.c,{id:N}))))))))},2433:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2312),c=a(3);const i=(e,t)=>c.a`
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
`;t.a=r.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:c="0 0 32px",wrap:E=!1,children:o,..._})=>{const s=Object(n.useMemo)(()=>r.a.Children.map(o,(n,c)=>r.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:i(a,void 0),mountOnEnter:!0},_),null===n?r.a.createElement("div",null):n)),[o,a,t,_,e]);return E?r.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:i(a,c),mountOnEnter:!0},_),r.a.createElement("div",null,o)):r.a.createElement(r.a.Fragment,null,s)})},2467:function(e,t,a){"use strict";var n,r=a(0),l=a.n(r),c=a(5),i=a(2),E=a(73),o=a(168),_=a(2429),s=a(34),T=a(18),m=a(819),d=a(251),R=a(40),N=a(2416),O=a(19),p=a(101),u=[500,4500];!function(e){e.ANY="any",e.LIMITED="limited"}(n||(n={}));const A=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_ANY",value:n.ANY},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_LIMITED",value:n.LIMITED}],I=e=>!/^[0-9]*$/.test(e),g=e=>function(t){return!e||(t||"").trim().split(",").every(e=>{if(e.includes("-")){const[t,a]=e.split("-").map(e=>Number(e.trim()));return u.every(e=>!Object(N.a)(e,t,a+1))}return!u.includes(parseInt(e,10))})};var b=Object(E.a)(e=>O.a.object().shape({name:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME").required(),srcType:O.a.string(),src:O.a.string().when("srcType",{is:n.LIMITED,then:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE").required().unifiIpv4Range(l.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_IP_SUBNET_RANGE",values:{name:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}}))}),dst_port:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT").unifiPortRange(l.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("port-fwd-overlaps-ipsec",l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_PORT_FWD_OVERLAPS_IPSEC"}),g(e)).required(),fwd:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP").matches(p.i,{message:l.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_IPV4"})}).required(),fwd_port:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT").unifiPortRange(l.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("incorrect-multiport-fwd-port",l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_INCORRECT_MULTIPORT_FWD_PORT"}),(function(e){const{dst_port:t}=this.parent;return!(I(t)||I(e))||(t||"").trim()===(e||"").trim()})).required(),pfwd_interface:O.a.string().oneOf([...Object.values(m.PortForwardInterface)]).required()})),G=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_BOTH",value:"tcp_udp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_TCP",value:"tcp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_UDP",value:"udp"}],S={name:"",enabled:!1,pfwd_interface:m.PortForwardInterface.WAN,srcType:n.ANY,src:"",dst_port:"",fwd:"",fwd_port:"",proto:G[0].value,log:!1},f=a(568),h=a(1763),D=a(1761),W=a(2379),P=a(1762),F=a(3),w=a(36),x=a(10),L=a(4),C=a(14),V=a(2433),v=a(38),y=a(42),j=a(873);const k=Object(F.c)("label")`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,M=Object(F.c)("div")`
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-right: 0;
  }
`,$=Object(F.c)("div")`
  min-width: 100%;
  flex: 1 0;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-bottom: 0;
  }
`;var B=Object(i.f)(({intl:e})=>{const t=Object(c.useSelector)(s.selectWanNetworks),a=Object(c.useSelector)(j.K),{values:n,setFieldValue:E}=Object(w.e)(),{destination_ip:o,pfwd_interface:_}=n,T=_===m.PortForwardInterface.BOTH?[m.PortForwardInterface.WAN,m.PortForwardInterface.WAN2]:[_],d=Object(r.useMemo)(()=>T.map(e=>t.find(({wan_networkgroup:t})=>(null==t?void 0:t.toLowerCase())===e.toLowerCase())),[_]),R=Object(r.useMemo)(()=>d.reduce((t,a)=>{const{wan_ip:n,wan_ip_aliases:r=[],wan_networkgroup:c,wan_type:E,_id:o}=null!=a?a:{},T=[n,...r].reduce((e,t)=>{const a=null==t?void 0:t.replace(/\/\d{1,2}/,"");return a?[...e,{label:a,value:a}]:e},[{label:e.formatMessage({id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP_AUTO_DEFINED"}),value:"any"}]);let d;switch(T.length>2?_!==m.PortForwardInterface.BOTH&&(d="dropdown"):E===s.IpV4ConnectionType.STATIC&&(d="text"),d){case"dropdown":return[...t,l.a.createElement($,{key:o},l.a.createElement(k,null,l.a.createElement(v.Field,{full:!0,label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+c,name:"destination_ip",options:T,translateLabel:!0,type:"dropdown"})))];case"text":{const e=null!=n?n:E===s.IpV4ConnectionType.DHCP?"DHCP":"PPPoE";return[...t,l.a.createElement(M,{key:o},l.a.createElement(k,null,l.a.createElement(y.a,{color:"tertiary",size:"label"},l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+c}))),l.a.createElement(y.a,null,e))]}default:return t}},[]),[_,e]);return Object(r.useEffect)(()=>{_===m.PortForwardInterface.BOTH&&"any"!==o&&E("destination_ip","any")},[o,_,E]),a?R.length===T.length&&l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"destination_ip",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP"})}),l.a.createElement(P.a,null,l.a.createElement(C.g,{flexWrap:"wrap",width:"100%"},R))):null});const U=Object(F.c)(f.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
`,H=Object(F.c)(v.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`,Y=Object(F.c)(o.a)`
  margin-top: 8px;
  padding: 0;
  font-size: 12px;
`;var z=()=>{const{values:e,errors:t,setFieldValue:a}=Object(w.e)(),E=Object(c.useSelector)(L.selectWanInterfaceOptions);Object(r.useEffect)(()=>{e.srcType===n.LIMITED&&e.src===n.ANY&&a("src","")},[a,e.src,e.srcType]);return l.a.createElement(h.a,null,l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"name",alignWith:"input",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME",fast:!0}))),l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"enabled",alignWith:"toggle",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_ENABLE"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{type:"checkbox",name:"enabled",fast:!0}))),E.length>1&&l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"pfwd_interface",alignWith:"input",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE"})}),l.a.createElement(P.a,null,E.map(({label:e,value:t})=>l.a.createElement(H,{value:m.PortForwardInterface[e],type:"togglebox",toggleboxType:"radio",name:"pfwd_interface",key:"pfwd-interface-"+t},l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+e}))),l.a.createElement(H,{value:m.PortForwardInterface.BOTH,type:"togglebox",toggleboxType:"radio",name:"pfwd_interface"},l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_BOTH"})))),l.a.createElement(B,null),l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"srcType",alignWith:"dropdown",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{type:"dropdown",name:"srcType",full:!0,translateOptions:!0,options:A}))),l.a.createElement(V.a,{in:e.srcType===n.LIMITED},l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"src",alignWith:"input",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{name:"src",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE",full:!0})))),l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"dst_port",alignWith:"input",label:l.a.createElement(C.g,null,l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT"}),l.a.createElement(U,{message:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT_TOOLTIP"}),position:"bottom",width:140},l.a.createElement(x.ab,{isActive:!0})))}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{full:!0,name:"dst_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT",fast:!0}),!t.dst_port&&e.dst_port&&e.dst_port!==e.fwd_port&&l.a.createElement(Y,{name:"port-forward-update-forward-port",size:"small",variant:"link",onClick:()=>{a("fwd_port",e.dst_port,!0)}},l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_UPDATE_FORWARD_PORT"})))),l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"fwd",alignWith:"input",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{full:!0,name:"fwd",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP",fast:!0}))),l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"fwd_port",alignWith:"input",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{full:!0,name:"fwd_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"}))),l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"proto",alignWith:"dropdown",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{full:!0,name:"proto",type:"dropdown",translateOptions:!0,options:G,fast:!0}))),l.a.createElement(D.a,null,l.a.createElement(W.a,{htmlFor:"log",alignWith:"toggle",label:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING"}),description:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING_DESCRIPTION"})}),l.a.createElement(P.a,{column:!0},l.a.createElement(v.Field,{type:"checkbox",name:"log",fast:!0}))))};const q=Object(E.a)(e=>{const t={...S,...e},a=t.src&&t.src!==n.ANY?n.LIMITED:n.ANY;return{...t,srcType:a}});t.a=e=>{const t=Object(c.useSelector)(s.selectIsIpsecInUse),a=Object(c.useDispatch)(),E=Object(c.useSelector)(T.x),{initialValues:N,onBack:O}=e,p=!!N._id,u=Object(r.useCallback)((e,{setSubmitting:t})=>{const{srcType:r,...l}=e,c=r===n.ANY?{...l,src:n.ANY}:l;return a(Object(m.savePortForwardRule)(c)).then(()=>O()).catch(()=>t(!1))},[a,O]),A=Object(R.o)({component:l.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_BUTTON"},E?"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_EDIT",N._id?N.name:void 0),I=Object(r.useCallback)(()=>{a(Object(d.b)({name:N.name,onConfirm:()=>a(Object(m.removePortForwardRule)(N)).then(O())}))},[a,N,O]);return l.a.createElement(_.b,{onSubmit:u,title:A,initialValues:q(N),isEdit:p,isView:E,onEscClicked:O,validationSchema:b(t),showBack:!0,goBack:O,footerActiveOverride:!!(null==N?void 0:N._id),customFooterButtons:e=>(null==N?void 0:N._id)&&l.a.createElement(o.a,{disabled:e,type:"button",variant:"tertiary",color:"danger",onClick:I},l.a.createElement(i.c,{id:"COMMON_ACTION_REMOVE"}))},l.a.createElement(z,null))}},819:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchPortForwardRules",(function(){return i})),a.d(t,"fetchPortForwardRule",(function(){return E})),a.d(t,"savePortForwardRule",(function(){return o})),a.d(t,"removePortForwardRule",(function(){return _})),a.d(t,"MODEL",(function(){return r})),a.d(t,"PATH",(function(){return l})),a.d(t,"selectPortForwardRules",(function(){return m})),a.d(t,"selectPortForwardData",(function(){return d})),a.d(t,"selectPortForwardRecord",(function(){return R})),a.d(t,"PortForwardInterface",(function(){return N}));var n=a(7),r="portforward",l="/api/s/{site}/rest/".concat(r),c=a(25);const i=(e={},t={})=>Object(n.q)(r,l,e,{idField:"_id",...t}),E=e=>Object(n.t)(r,l,e),o=e=>{const t=Object(c.a)("SETTINGS_GATEWAY_PORT_FORWARD_CREATE_ERROR","SETTINGS_GATEWAY_PORT_FORWARD_CREATE_SUCCESS"),{_id:a}=e;return a?Object(n.D)(r,a,`${l}/${a}`,e,{},t):Object(n.i)(r,l,e,{},t)},_=({_id:e,name:t})=>Object(n.n)(r,e,`${l}/${e}`,{},Object(c.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_SUCCESS_TOAST",{name:t}));var s=a(54),T=a(6);const m=Object(n.A)(i()),d=Object(T.a)(m,c.c),R=e=>t=>{const a=Object(n.w)(E(e),t.models);return Object(s.a)(a,"data",{})};var N;!function(e){e.WAN="wan",e.WAN2="wan2",e.BOTH="both"}(N||(N={}))}}]);
//# sourceMappingURL=49.f400b1db6c26e1693504.js.map