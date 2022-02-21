(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[45],{1774:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(3),r=a(2),c=a(1780),o=a.n(c),s=a(1259),d=a(493),m=a(494);const _=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null,leaveButtonText:c="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:E="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:p="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:u="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const O=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),g=Object(m.a)(t),b=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),S=Object(n.useCallback)(e=>(e={},t={})=>g(e,t)&&b(e,t),[g,b]);return!!e&&l.a.createElement(o.a,{when:S(t)},({onCancel:e,onConfirm:t})=>l.a.createElement(s.a,{actions:[{type:"button",text:l.a.createElement(r.c,{id:E}),onClick:()=>i?i(e):e()},{type:"button",text:l.a.createElement(r.c,{id:c}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:O,parentSelector:d.b,title:l.a.createElement(r.c,{id:p}),onRequestClose:()=>i?i(e):e()},l.a.createElement(_,null,l.a.createElement(r.c,{id:u}))))}},1784:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=({condition:e,wrapper:t,children:a})=>e?t(a):l.a.createElement(l.a.Fragment,null,a)},2277:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(23),r=a(5),c=a(40),o=a(7),s=a(34),d=a(190),m=a(215),_=a(2),E=a(54),p=a(73),u=a(168),O=a(18),g=a(2429),b=a(2442),S=a(251),T=a(36),f=a(1763),I=a(879),h=a(3),v=a(2379),C=a(1761),L=a(1762),N=a(38),R=a(6),F=a(4),w=a(67),P=a(42),x=a(353),M=a(2612),D=a(1784);const k=Object(h.c)("div")`
  align-self: flex-start;
  width: 100%;
`,A=Object(h.c)(M.a,{shouldForwardProp:e=>"visible"!==e&&"hasLabelMargin"!==e})`
  align-self: center;
  margin-left: -36px;
  margin-right: 16px;
  text-align: left;
  visibility: ${e=>e.visible?"visible":"hidden"};
  > div > svg {
    ${({hasLabelMargin:e})=>e&&"margin-bottom: 2px"};
  }
`,j=Object(h.c)("div",{shouldForwardProp:e=>"newGrid"!==e})`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: ${({newGrid:e})=>e?"100%":"initial"};
`,W=Object(h.c)("div")`
  margin-left: 44px;
  width: 40px;
`,y=({cap:e,children:t,childrenWrapperClassName:a,tooltipClassName:n,unsupportedDevices:i,newGrid:r,hasLabelMargin:c=!1,hasLabelWrapper:o=!1})=>{const s=!!x.f[e];return l.a.createElement(D.a,{condition:o,wrapper:e=>l.a.createElement(W,null,e)},l.a.createElement(j,{newGrid:r},l.a.createElement(A,{className:n,hasLabelMargin:c,description:"SETTINGS_UNSUPPORTED_DEVICE_CAP_WARNING_DESCRIPTION",descriptionValues:{cap:l.a.createElement(P.a,{motif:"dark"},s&&l.a.createElement(_.c,{id:"COMMON_SELECTED"})," ",l.a.createElement(P.a,{motif:"dark",weight:"bold"},l.a.createElement(_.c,{id:"COMMON_DEVICE_CAP_"+(s?"PORTSPEED":e)})))},devices:i,position:r?"right":"left",visible:i.length>0,width:20}),l.a.createElement(k,{className:a},t)))};y.defaultProps={cap:null,children:null,childrenWrapperClassName:null,tooltipClassName:null,unsupportedDevices:[],newGrid:!1};var G=y;const V=Object(R.a)(F.selectDevicesData,(e,{cap:t})=>t,(e,t)=>e.filter(e=>e.adopted&&!Object(w.o)(e,t)&&!Object(w.i)(e,t)));var H=Object(r.connect)((e,t)=>({unsupportedDevices:V(e,t)}))(G),B=a(14);const U=[d.Dot1xCtrls.AUTO,d.Dot1xCtrls.FORCE_AUTHORIZED,d.Dot1xCtrls.FORCE_UNAUTHORIZED,d.Dot1xCtrls.MAC_BASED,d.Dot1xCtrls.MULTI_HOST].map(e=>({label:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_DOT1X_CTRL_OPTION_"+e.toUpperCase(),value:e})),$=Object(h.c)(v.a)`
  flex: 0 0 40px;
  padding-left: ${({theme:e})=>e.spacing["spacing-m"]};
`;var K=({isView:e})=>{const{values:{dot1x_ctrl:t}}=Object(T.e)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"dot1x_ctrl",alignWith:"dropdown",label:l.a.createElement(B.g,{alignItems:"center"},l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_DOT1X_CTRL_LABEL"}),l.a.createElement(H,{cap:"SWITCH_CAP_DOT1X",newGrid:!0,hasLabelWrapper:!0,hasLabelMargin:!0}))}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{name:"dot1x_ctrl",options:U,type:"dropdown",full:!0,translateOptions:!0,disabled:e}))),t===d.Dot1xCtrls.MAC_BASED&&l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"dot1x_idle_timeout",alignWith:"input",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_IDLE_TIMEOUT_LABEL"})}),l.a.createElement(L.a,{column:!0},l.a.createElement(N.Field,{disabled:e,name:"dot1x_idle_timeout",type:"number",min:d.DOT1X_IDLE_TIMEOUT.MIN,max:d.DOT1X_IDLE_TIMEOUT.MAX,full:!0})),l.a.createElement($,{alignWith:"input",htmlFor:"dot1x_idle_timeout",label:l.a.createElement(_.c,{id:"COMMON_UNIT_SECONDS"})})))},z=a(2433),X=a(575);const Y=h.a`
  white-space: nowrap;
`,q=Object(h.c)("div")`
  display: inline-block;
  margin-right: 8px;
  vertical-align: -6px;
  width: calc(67% - 8px);
`,J=Object(h.c)("div")`
  display: inline-block;
  vertical-align: middle;
  width: 33%;
`,Z=Object(h.c)("div")`
  margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
`;var Q=Object(T.d)(({formik:{values:e},isView:t})=>l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"egress_rate_limit_kbps_enabled",alignWith:"toggle",label:l.a.createElement(B.g,{alignItems:"center"},l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_EGRESS_RATE_LIMIT_LABEL"}),l.a.createElement(H,{cap:"SWITCH_CAP_EGRESS_RATE_LIMIT",newGrid:!0,hasLabelWrapper:!0,hasLabelMargin:!0}))}),l.a.createElement(L.a,{column:!0},l.a.createElement(N.Field,{name:"egress_rate_limit_kbps_enabled",type:"checkbox",disabled:t}),l.a.createElement(z.a,{in:e.egress_rate_limit_kbps_enabled},l.a.createElement(Z,null,l.a.createElement(q,null,l.a.createElement(N.Field,{full:!0,label:"COMMON_UNIT_BPS",labelValues:{prefix:e.egressRateLimitUnit},name:"egress_rate_limit_kbps",type:"number",validationMessageClassName:Y,disabled:t})),l.a.createElement(J,null,l.a.createElement(N.Field,{name:"egressRateLimitUnit",options:X.a,translateOptions:!0,type:"dropdown",disabled:t,full:!0})))))));var ee=({isView:e})=>l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"isolation",alignWith:"toggle",label:l.a.createElement(B.g,{alignItems:"center"},l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_ISOLATION_LABEL"}),l.a.createElement(H,{cap:"SWITCH_CAP_PORT_ISOLATION",newGrid:!0,hasLabelWrapper:!0,hasLabelMargin:!0}))}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{name:"isolation",type:"checkbox",disabled:e}))),te=a(270);var ae=Object(T.d)(({formik:{errors:e,setFieldTouched:t,submitCount:a,touched:n,values:i},isView:r})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{className:e.lldpmed_enabled?te.c:null},l.a.createElement(v.a,{htmlFor:"lldpmed_enabled",alignWith:"toggle",label:l.a.createElement(B.g,{alignItems:"center"},l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_LLDP_MED_LABEL"}),l.a.createElement(H,{cap:"SWITCH_CAP_LLDP_MED",newGrid:!0,hasLabelWrapper:!0,hasLabelMargin:!0}))}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{afterChange:()=>t("lldpmed_enabled"),name:"lldpmed_enabled",type:"checkbox",disabled:r}),e.lldpmed_enabled&&l.a.createElement(N.FormikValidationMessage,{errors:e,field:"lldpmed_enabled",submitCount:a,touched:n}))),l.a.createElement(z.a,{in:i.lldpmed_enabled},l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"lldpmed_notify_enabled",alignWith:"toggle",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_LLDPMED_NOTIFY_ENABLED_LABEL"})}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{name:"lldpmed_notify_enabled",type:"checkbox",disabled:r}))))));var ne=({isView:e})=>l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"name",alignWith:"input",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_NAME_LABEL"})}),l.a.createElement(L.a,{column:!0},l.a.createElement(N.Field,{autoFocus:!e,full:!0,name:"name",disabled:e}))),le=a(127),ie=a.n(le),re=a(233),ce=a.n(re);function oe(e,t){return t.intl}var se=Object(R.a)(oe,s.selectNativeNetworks,(function(e,t){return[{label:e.formatMessage({id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_NATIVE_NETWORKCONF_ID_OPTION_NONE"}),value:""}].concat(ce()(t.map((function(e){var t=e._id,a=e.name,n=e.vlan;return{label:Object(s.formatNetworkNameWithVlan)({name:a,vlan:n}),value:t}}))))})),de=Object(R.a)(oe,(function(e){return Object.entries(m.c).sort((function(e,t){var a=ie()(e,2)[1],n=ie()(t,2)[1];return n.autoneg-a.autoneg||n.speed-a.speed||n.full_duplex-a.full_duplex})).map((function(t){var a=ie()(t,2),n=a[0],l=a[1],i=l.autoneg,r=l.full_duplex,c=l.speed,o=l.translation;return{label:i?o:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_PORT_SPEED_OPTION_SPEED",value:n,values:i?void 0:{duplex:r?"F":"H",speed:c<1e3?c:c/1e3,unit:e.formatMessage({id:"COMMON_UNIT_BPS"},{prefix:c<1e3?"M":"G"})}}}))})),me=Object(R.a)((function(e,t){return t.formik}),oe,s.selectNativeNetworks,(function(e,t){return t.savedTaggedNetworkConfIds}),(function(e,t,a,n){var l=e.values.native_networkconf_id,i=a.filter((function(e){return e._id!==l})),r=i.length===n.length;return[{label:t.formatMessage({id:r?"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_OPTION_DESELECT_ALL":"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_OPTION_SELECT_ALL"}),value:r?"Deselect All":"Select All"}].concat(ce()(i.map((function(e){var t=e._id,a=e.name,n=e.vlan;return{label:Object(s.formatNetworkNameWithVlan)({name:a,vlan:n}),value:t}}))))})),_e=Object(R.a)(oe,s.selectNativeNetworks,(function(e,t){return[{label:e.formatMessage({id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_VOICE_NETWORKCONF_ID_OPTION_NONE"}),value:""}].concat(ce()(t.map((function(e){var t=e._id,a=e.name,n=e.vlan;return{label:Object(s.formatNetworkNameWithVlan)({name:a,vlan:n}),value:t}}))))}));var Ee=Object(_.f)(({intl:e,isView:t})=>{const a=Object(r.useSelector)(t=>se(t,{intl:e}));return l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"native_networkconf_id",alignWith:"dropdown",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_NATIVE_NETWORKCONF_ID_LABEL"})}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{name:"native_networkconf_id",options:a,type:"dropdown",full:!0,disabled:t})))});const pe=[m.d.OFF,m.d.PASSIVE_24V,m.d.AUTO,m.d.PASSTHROUGH].map(e=>({label:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_POE_MODE_OPTION_"+(e||"none").toUpperCase(),value:e}));var ue=({isView:e})=>l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"poe_mode",alignWith:"dropdown",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_POE_MODE_LABEL"})}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{type:"dropdown",name:"poe_mode",options:pe,translateOptions:!0,full:!0,disabled:e}))),Oe=a(35);var ge=Object(Oe.compose)(_.f,T.d)(({formik:{setFieldValue:e,values:t},intl:a,isView:i})=>{const c=Object(r.useSelector)(e=>de(e,{intl:a}));return Object(n.useEffect)(()=>{e("autoneg",m.c[t.portSpeed].autoneg),e("full_duplex",m.c[t.portSpeed].full_duplex),e("speed",m.c[t.portSpeed].speed)},[e,t.portSpeed]),l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"portSpeed",alignWith:"dropdown",label:l.a.createElement(B.g,{alignItems:"center"},l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_PORT_SPEED_LABEL"}),l.a.createElement(H,{cap:t.portSpeed,newGrid:!0,hasLabelWrapper:!0,hasLabelMargin:!0}))}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{name:"portSpeed",options:c,translateOptions:!0,type:"dropdown",full:!0,disabled:i})))});const be=Object(h.c)("div")`
  padding-top: 36px;
  padding-bottom: 36px;
  margin-top: ${({theme:e})=>e.spacing["spacing-m"]};
  margin-bottom: 36px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Se=Object(h.c)("div")`
  width: 100%;
  margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
`;var Te=Object(T.d)(({formik:{values:e},isView:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(B.g,{alignItems:"center"},l.a.createElement(P.a,{weight:"bold",size:"body"},l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STORMCTRL_LABEL"})),l.a.createElement(H,{cap:"SWITCH_CAP_STORM_CONTROL",newGrid:!0,hasLabelWrapper:!0})),l.a.createElement(be,null,["ucast","mcast","bcast"].map(a=>{const n=`SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STORMCTRL_${a.toUpperCase()}_LABEL`,i=`stormctrl_${a}_enabled`,r=`stormctrl_${a}_rate`;return l.a.createElement(C.a,{key:a},l.a.createElement(v.a,{alignWith:"toggleSmall",htmlFor:i,label:l.a.createElement(_.c,{id:n})}),l.a.createElement(L.a,{column:!0},l.a.createElement(N.Field,{name:i,type:"checkbox",disabled:t}),l.a.createElement(Se,null,l.a.createElement(z.a,{in:e[i]},l.a.createElement(N.Field,{full:!0,label:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STORMCTRL_UNIT",name:r,type:"number",disabled:t})))))}))));const fe=Object(h.c)(v.a)`
  padding-right: 12px !important;
`;var Ie=({isView:e})=>l.a.createElement(C.a,null,l.a.createElement(fe,{htmlFor:"stp_port_mode",alignWith:"toggle",label:l.a.createElement(B.g,{alignItems:"baseline"},l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STP_PORT_MODE_LABEL"}),l.a.createElement(H,{cap:"SWITCH_CAP_PORT_ISOLATION",newGrid:!0,hasLabelWrapper:!0,hasLabelMargin:!0}))}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{name:"stp_port_mode",type:"checkbox",disabled:e}))),he=a(1179);const ve="tagged_networkconf_ids";var Ce=Object(Oe.compose)(_.f,T.d)(({intl:e,formik:t,isView:a})=>{const{setFieldValue:i,values:c}=t,o=Object(r.useSelector)(a=>me(a,{formik:t,intl:e,savedTaggedNetworkConfIds:c.tagged_networkconf_ids}));Object(n.useEffect)(()=>{c.tagged_networkconf_ids.includes(c.native_networkconf_id)&&i(ve,c.tagged_networkconf_ids.filter(e=>e!==c.native_networkconf_id))},[i,c]);return l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:ve,alignWith:"input",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_LABEL"})}),l.a.createElement(L.a,null,l.a.createElement(he.a,{id:ve,placeholder:e.formatMessage({id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_OPTION_SELECT_ALL"}),value:c.tagged_networkconf_ids,options:o,multi:!0,onChange:(e,t)=>{let a=t;"Select All"===e.value&&(a=o.reduce((e,t)=>("Deselect All"!==t.value&&"Select All"!==t.value&&e.push(t.value),e),[])),"Deselect All"===e.value&&(a=[]),i(ve,a)},disabled:a,width:"100%"})))});var Le=Object(_.f)(({intl:e,isView:t})=>{const a=Object(r.useSelector)(t=>_e(t,{intl:e}));return l.a.createElement(C.a,null,l.a.createElement(v.a,{htmlFor:"voice_networkconf_id",alignWith:"dropdown",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_VOICE_NETWORKCONF_ID_LABEL"})}),l.a.createElement(L.a,null,l.a.createElement(N.Field,{name:"voice_networkconf_id",options:a,type:"dropdown",full:!0,disabled:t})))});var Ne=Object(T.d)(({formik:{errors:e,values:t},isView:a})=>{const i=Object(n.useRef)(null);return Object(c.h)(i,e),l.a.createElement("div",{ref:i},l.a.createElement(f.a,null,l.a.createElement(ne,{isView:a}),Object(E.a)(t,"op_mode")===d.OpMode.SWITCH&&l.a.createElement(ue,{isView:a}),l.a.createElement(Ee,{isView:a}),l.a.createElement(Ce,{isView:a}),l.a.createElement(Le,{isView:a})),l.a.createElement(I.a,{items:[{id:"advanced",label:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_ACCORDION_PANEL_ADVANCED"}),description:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_ACCORDION_PANEL_ADVANCED_DESCRIPTION"}),renderContent:()=>l.a.createElement(f.a,{padding:"none"},l.a.createElement(K,{isView:a}),l.a.createElement(ge,{isView:a}),l.a.createElement(ee,{isView:a}),l.a.createElement(Te,{isView:a}),l.a.createElement(Ie,{isView:a}),l.a.createElement(ae,{isView:a}),l.a.createElement(Q,{isView:a}))}],motif:"dark"}))});const Re=Object(p.a)((function(e,t){const a="All"===e.attr_hidden_id,n=!e._id,l=t.find(({attr_hidden_id:e,attr_no_delete:t})=>"LAN"===e&&t)||{},i=(a||n?l._id:e.native_networkconf_id)||"",{egressRateLimitUnit:r,egressRateLimitKbps:c}=!e.egress_rate_limit_kbps_enabled||e.egress_rate_limit_kbps%1e3>0?{egressRateLimitUnit:"k",egressRateLimitKbps:e.egress_rate_limit_kbps||""}:{egressRateLimitUnit:"M",egressRateLimitKbps:e.egress_rate_limit_kbps/1e3};if(n)return{...m.a,egressRateLimitUnit:r,egress_rate_limit_kbps:c,native_networkconf_id:i};const o=e.op_mode,s=e.tagged_networkconf_ids||(a?t.filter(({attr_hidden_id:e})=>"LAN"!==e).map(({_id:e})=>e):[]),d=(Object.entries(m.c).find(([,{autoneg:t,full_duplex:a,speed:n}])=>t===e.autoneg&&a===e.full_duplex&&n===e.speed)||["PORTSPEED_AUTO_NEG"]).shift();return{...m.a,...e,egressRateLimitUnit:r,egress_rate_limit_kbps:c,native_networkconf_id:i,op_mode:o,portSpeed:d,tagged_networkconf_ids:s}}));var Fe=e=>{const{onBack:t,initialValues:a}=e,i=Object(r.useDispatch)(),o=Object(r.useSelector)(s.selectNativeNetworks),p=Object(r.useSelector)(O.x),T=!!Object(E.a)(a,"attr_no_edit",!1),f=!!Object(E.a)(a,"_id",!1),I=Object(n.useCallback)(Object(b.c)(e)(async e=>{const{egressRateLimitUnit:t,egress_rate_limit_kbps:a,poe_mode:n,portSpeed:l,stormctrl_bcast_rate:r,stormctrl_mcast_rate:c,stormctrl_ucast_rate:o,...s}=e,m={...s,...n?{poe_mode:n}:void 0,...e.egress_rate_limit_kbps_enabled?{egress_rate_limit_kbps:"k"===t?a:1e3*a}:void 0,...e.stormctrl_bcast_enabled?{stormctrl_bcast_rate:r}:void 0,...e.stormctrl_mcast_enabled?{stormctrl_mcast_rate:c}:void 0,...e.stormctrl_ucast_enabled?{stormctrl_ucast_rate:o}:void 0,forward:e.native_networkconf_id&&!e.tagged_networkconf_ids.length?"native":"customize"};return i(Object(d.savePortConf)(m))}),[i,a,d.savePortConf]),h=Object(c.o)({component:l.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_CREATE_TITLE"}),message:"SETTINGS_PROFILES_SWITCH_PORTS_CREATE_TITLE"},p?"SETTINGS_PROFILES_SWITCH_PORTS_VIEW_TITLE":"SETTINGS_PROFILES_SWITCH_PORTS_EDIT_TITLE",a._id?a.name:void 0),v=Object(n.useCallback)(()=>{i(Object(S.b)({name:a.name,onConfirm:()=>i(Object(d.removePortConf)(a)).then(t())}))},[i,a,t]);return l.a.createElement(g.b,{goBack:t,initialValues:Re(a,o),isEdit:f,isView:p||T,showBack:!0,title:h,validationSchema:m.f,onEscClicked:t,onSubmit:I,footerActiveOverride:!!(null==a?void 0:a._id)&&!a.attr_no_delete&&!p,customFooterButtons:e=>(null==a?void 0:a._id)&&!a.attr_no_delete&&!p&&l.a.createElement(u.a,{disabled:e,type:"button",variant:"tertiary",color:"danger",onClick:v},l.a.createElement(_.c,{id:"COMMON_ACTION_REMOVE"}))},l.a.createElement(Ne,{isView:p||T}))};t.default=()=>{const{profileId:e}=Object(i.m)(),t=Object(r.useSelector)(d.selectPortConf),a=t&&t.find(({_id:t})=>t===e),_=Object(c.i)(),E=Object(n.useMemo)(()=>(null==a?void 0:a._id)?{...m.a,...a}:{...m.a},[a]);return Object(c.g)([Object(s.fetchNetworks)(void 0,{crudCacheStrategy:{type:o.a.CACHE}}),Object(d.fetchPortConf)(void 0,{crudCacheStrategy:{type:o.a.CACHE}})],l.a.createElement(Fe,{initialValues:E,onBack:_}))}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return N})),a.d(t,"a",(function(){return T}));var n=a(0),l=a.n(n),i=a(3),r=a(2),c=a(36),o=a(2838),s=a(2760),d=a(1774),m=a(867),_=a(14),E=a(10),p=a(42);const u=Object(i.c)(_.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,O=Object(i.c)(_.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,g=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,b=Object(i.c)(_.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,S=Object(i.c)(p.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var T=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:r})=>l.a.createElement(O,{flex:"none",height:"65px"},l.a.createElement(_.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},l.a.createElement(u,{alignItems:"center",flex:"1",height:"100%"},t&&l.a.createElement(b,{legacy:!1,name:"backButton",type:"button",onClick:a},l.a.createElement(E.g,{size:"original"}))),l.a.createElement(g,null,l.a.createElement(S,{weight:"bold"},e.component)),l.a.createElement(u,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&l.a.createElement(b,{legacy:!1,name:"closeButton",type:"button",onClick:n},l.a.createElement(E.A,{size:"original"})))));const f=Object(i.c)(_.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,I=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,h=Object(i.c)(_.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,v=Object(i.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,C=Object(i.c)(_.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,L=Object(i.c)(_.k)`
  height: 100%;
  width: 100%;
`;var N=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:m,title:E,unsavedChangesModalIgnoredPaths:p,onEscClicked:u,submitText:O="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:g=!1,customFooterButtons:b,hidddenHeader:S,className:N,...R})=>l.a.createElement(c.c,Object.assign({enableReinitialize:!0},R),({dirty:i,handleReset:c,handleSubmit:R,isSubmitting:F})=>l.a.createElement(I,{autoComplete:"off",onSubmit:R,className:N},l.a.createElement(L,{vertical:!0},!S&&l.a.createElement(T,{goBack:a,hideClose:n,showBack:m,title:E,onEscClicked:u,ignoredPaths:p}),l.a.createElement(C,{flex:"1"},l.a.createElement(f,{flex:"none",flexDirection:"column"},e)),!t&&!o&&l.a.createElement(d.a,{ignoredPaths:p,when:i&&!F}),(!o||g)&&l.a.createElement(v,{active:i||g},l.a.createElement(_.g,{justifyContent:b?"space-between":"flex-end",width:"100%",alignItems:"center"},b&&l.a.createElement(h,null,b(F)),!o&&l.a.createElement(_.g,null,l.a.createElement(s.a,{disabled:!i||F,type:"button",variant:"default",onClick:c},l.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),l.a.createElement(s.a,{disabled:!i||F,type:"submit",variant:"primary"},l.a.createElement(r.c,{id:O}))))))))},2433:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(2312),r=a(3);const c=(e,t)=>r.a`
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
`;t.a=l.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:r="0 0 32px",wrap:o=!1,children:s,...d})=>{const m=Object(n.useMemo)(()=>l.a.Children.map(s,(n,r)=>l.a.createElement(i.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,void 0),mountOnEnter:!0},d),null===n?l.a.createElement("div",null):n)),[s,a,t,d,e]);return o?l.a.createElement(i.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,r),mountOnEnter:!0},d),l.a.createElement("div",null,s)):l.a.createElement(l.a.Fragment,null,m)})},2442:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o}));var n=a(16),l=function(e,t){var a=t.successMessage,n=t.failureMessage;if((a||n)&&!e.createToast)throw new Error("formSubmit util requires createToast action as a prop. Please add it to mapDispatchToProps")},i=function(e){return function(t){return function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,c){var o=c.props||t;l(o,i);var s=o.createToast,d="function"==typeof i?i(r):i,m=d.msgValues,_=d.successMessage,E=d.failureMessage;a(r,o,c).then((function(){return _&&s({icon:n.a.success,message:_,values:m}),e(c,t)})).catch((function(e){E&&s({icon:n.a.danger,message:E,values:m,errorMessage:e.msg,errorValues:e}),c.setSubmitting(!1)}))}}}},r=i((function(e){return e.setStatus({isSubmitted:!0})}))(),c=i((function(e){return e.setStatus({isSubmitted:!0})})),o=(i((function(e){return e.props.onClose()}))(),i((function(e,t){return t.onBack()})))},2612:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(3),r=a(2),c=a(10),o=a(42),s=a(568),d=a(41),m=a(40),_=a(92),E=a(9);const p=Object(i.c)(E.a,{shouldForwardProp:e=>"paddingTop"!==e})`
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`,u=Object(i.c)(o.a,{shouldForwardProp:e=>"paddingLeft"!==e&&"paddingTop"!==e})`
  ${({paddingLeft:e})=>e?`padding-left: ${e};`:""}
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`;t.a=({description:e,title:t,className:a,descriptionValues:n={},devices:i=[],height:O,tooltipWidth:g=400,width:b,wrapperStyle:S,...T})=>{const f=Object(m.n)(),I=i.map((e,t)=>l.a.createElement(p,{alignItems:"center",key:e._id,paddingTop:0===t?"8px":void 0},l.a.createElement(_.c,{device:e}),l.a.createElement(u,{color:"tertiary",paddingLeft:"8px"},Object(d.a)(e)))),h=l.a.createElement(E.a,{flexDirection:"column"},t&&l.a.createElement(o.a,{size:"body",uppercase:!0,weight:"bold"},l.a.createElement(r.c,{id:t})),l.a.createElement(u,{color:"secondary",paddingTop:t?"8px":void 0},l.a.createElement(r.c,{id:e,values:n})),I);return l.a.createElement("div",{className:a,style:S},l.a.createElement(s.a,Object.assign({message:h,width:g},T),l.a.createElement(c.ab,{color:f.motifPalette.warning,width:b,height:O})))}},575:function(e,t,a){"use strict";var n=a(720);const l=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=l},720:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))}}]);
//# sourceMappingURL=45.f400b1db6c26e1693504.js.map