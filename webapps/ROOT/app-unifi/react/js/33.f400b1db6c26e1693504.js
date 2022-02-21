(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[33],{117:function(e,t,a){"use strict";a.d(t,"g",(function(){return C})),a.d(t,"f",(function(){return I})),a.d(t,"h",(function(){return v})),a.d(t,"c",(function(){return R})),a.d(t,"d",(function(){return j})),a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return G})),a.d(t,"e",(function(){return L}));var n=a(0),i=a.n(n),c=a(3),r=a(2),l=a(10),o=a(5),s=a(23),d=a(42),E=a(168),_=a(14),u=a(569),m=a(1778),p=a(92);const O=Object(c.c)("div")`
  display: inline-block;
  margin-left: 8px;
`,b=({device:e})=>{const{model_in_eol:t}=e;return t?i.a.createElement(O,null,i.a.createElement(l.gc,null)):null};var h=a(41),T=a(39),g=a(57),N=a(40),A=a(4);const S=Object(c.c)(_.g)`
  margin-left: ${({theme:e})=>e.space[2]}px;
`,D=Object(c.c)(u.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
`,f=Object(c.c)("div")`
  margin-left: ${({theme:e})=>e.space[3]}px;
  width: 14px;
`,C=Object(c.c)("div")`
  width: 100%;
  height: 100%;
  > div > div > div > div {
    /* This is Tile */
    border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
    border-radius: 8px;
    > div {
      width: 100% !important; // first container is image container
    }
  }
`,I=Object(c.c)(l.zc)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`,v=e=>"deviceState"in e&&[A.DeviceState.PENDING,A.DeviceState.MANAGED_BY_OTHER,A.DeviceState.ADOPTION_FAILED].includes(e.deviceState),R=({device:e,children:t})=>i.a.createElement(_.g,{width:v(e)?"auto":"100%"},t),j=({device:e,showUnifiCareBadge:t,isNotNetworkController:a=!1})=>{const{status:n,statusPulse:c,...r}=e,l=Object(A.hasActiveUnifiCare)(r);return i.a.createElement(_.g,{alignItems:"center"},i.a.createElement(m.a,{status:n,statusPulse:c,marginLeft:5,marginRight:12}),i.a.createElement(S,{width:25,height:25,alignItems:"center",justifyContent:"center"},a?i.a.createElement(_.d,{client:e}):i.a.createElement(p.c,{device:e})),t&&(l?i.a.createElement(D,{width:14,height:14}):i.a.createElement(f,null)))},y=Object(r.f)(({device:e,intl:t})=>{const a=Object(A.getDeviceState)(e);return[A.DeviceState.CONNECTED,A.DeviceState.PROVISIONING,A.DeviceState.UPGRADING,A.DeviceState.RESTARTING,A.DeviceState.RFSCANNING,A.DeviceState.ISOLATED,A.DeviceState.DELETING,A.DeviceState.UNKNOWN,A.DeviceState.FIRMWARE_MISMATCH,A.DeviceState.PENDING,A.DeviceState.ADOPTING,A.DeviceState.ADOPTION_FAILED,A.DeviceState.MANAGED_BY_OTHER,A.DeviceState.HEARTBEAT_MISSED,A.DeviceState.DISCONNECTED].includes(a)?i.a.createElement(d.a,{truncate:!0,size:"body",color:"secondary"},Object(A.getDeviceStateString)(e,a,t)):i.a.createElement(r.c,{id:"COMMON_HYPHEN"})}),G=({device:e})=>i.a.createElement(d.a,{size:"body",truncate:!0},Object(h.d)(e),i.a.createElement(b,{device:e})),P=Object(c.c)(E.a)`
  padding: 0;
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
  border: 0;
  line-height: 1.6;
`,x=Object(c.c)(d.a)`
  max-width: 220px;
`,L=({device:e})=>{var t,a;const c=Object(s.k)(),l=Object(o.useDispatch)(),d=Object(N.a)("/devices/properties/:mac/overview"),E=Object(n.useCallback)(t=>{var a,n,i;(null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.uplink_mac)&&(null===(n=null==t?void 0:t.preventDefault)||void 0===n||n.call(t),null===(i=null==t?void 0:t.stopPropagation)||void 0===i||i.call(t),c.push(d.replace(":mac",e.uplink.uplink_mac)),l(Object(T.g)({type:g.b.DEVICE,mac:e.uplink.uplink_mac})))},[l,c,d,null===(t=null==e?void 0:e.uplink)||void 0===t?void 0:t.uplink_mac]);return(null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.uplink_device_name)?i.a.createElement(P,{size:"small",variant:"link",onClick:E},i.a.createElement(x,{size:"body",color:"info",truncate:!0,weight:"bold"},Object(A.getDeviceUplinkPortName)(e))):i.a.createElement(r.c,{id:"COMMON_HYPHEN"})}},1261:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return E}));var n,i=a(0),c=a.n(i),r=a(3),l=a(393),o=a(42),s=a(14);!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(n||(n={}));const d=Object(r.c)(s.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,E=Object(r.c)(s.g)`
  * {
    line-height: 1.4 !important;
  }
`,_=Object(r.c)(l.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,status:i})=>c.a.createElement(c.a.Fragment,null,(()=>{switch(t){default:case n.BASIC:return e;case n.CONFIGURED:return c.a.createElement(E,{alignItems:"center"},e);case n.STATUS:return c.a.createElement(E,{alignItems:"center"},c.a.createElement(_,{variant:i}),c.a.createElement(d,{flex:"1",flexDirection:"column"},e,a&&c.a.createElement(o.a,null,a)));case n.UNCONFIGURED:return c.a.createElement(E,{alignItems:"center"},c.a.createElement(s.g,{flex:"0 1 128px",flexDirection:"column"},e,c.a.createElement(o.a,null,a)))}})())},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"t",(function(){return b})),a.d(t,"k",(function(){return T})),a.d(t,"o",(function(){return N})),a.d(t,"l",(function(){return A})),a.d(t,"d",(function(){return S})),a.d(t,"j",(function(){return f})),a.d(t,"w",(function(){return C})),a.d(t,"n",(function(){return I})),a.d(t,"i",(function(){return v})),a.d(t,"m",(function(){return R})),a.d(t,"p",(function(){return j})),a.d(t,"q",(function(){return y})),a.d(t,"r",(function(){return G})),a.d(t,"s",(function(){return P})),a.d(t,"g",(function(){return L})),a.d(t,"h",(function(){return H})),a.d(t,"u",(function(){return M})),a.d(t,"v",(function(){return W})),a.d(t,"f",(function(){return k})),a.d(t,"x",(function(){return Y})),a.d(t,"y",(function(){return $})),a.d(t,"e",(function(){return B})),a.d(t,"c",(function(){return F}));var n=a(84);const i=e=>(t,a,i,c,r)=>Object(n.d)(e(i,t,r),e(c,a,r)),c=e=>t=>{const a=(e=>t=>e.formatMessage({id:t}))(e);return(e,n,i,c)=>{const[r,l]=[t(e,i),t(n,c)].map(a);return r.localeCompare(l)}};var r=a(2378),l=a(68),o=a(4),s=a(133),d=a(41),E=a(558),_=a(427),u=a(88),m=a(117),p=a(69);const O={udm:1,ugw:2,usw:3,uap:4},b=(e,t,a,i)=>{const c=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(a)],r=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(i)];if(a.type===i.type){if(c===r){if(a.adopted===i.adopted){const e=a.name,t=i.name;return e&&t?Object(n.d)(e,t):e?-1:t?1:Object(n.d)(a.modelName,i.modelName)}return Object(n.d)(a.adopted?1:2,i.adopted?1:2)}return Object(n.d)(c,r)}return((e,t)=>{const a=e.type,i=t.type;return a===i?Object(n.d)(Object(d.a)(e),Object(d.a)(t)):Object(n.d)(O[a],O[i])})(a,i)},h=(e,t)=>Object(m.h)(e)?Object(p.b)(t):(null==e?void 0:e.upgradable)||(null==e?void 0:e.displayable_version)?!(null==e?void 0:e.upgradable)&&(null==e?void 0:e.displayable_version)?0:1:-1,T=(e,t,a,i,c)=>{const r=null==a?void 0:a.displayable_version,l=null==i?void 0:i.displayable_version,o=h(a,c),s=h(i,c);return r&&l?Object(_.compare)(r,l):o!==s?o<s?-1:1:Object(n.d)(o,s)},g=(e,t)=>Object(m.h)(e)?Object(p.c)(t):Object(d.a)(e),N=(e,t,a,i,c)=>Object(n.d)(g(a,c),g(i,c)),A=(e,t,a,i,c)=>{const r=Object(m.h)(a)?Object(p.b)(c):Object(s.d)(Object(o.getDeviceIp)(a))||Object(p.e)(c),l=Object(m.h)(i)?Object(p.b)(c):Object(s.d)(Object(o.getDeviceIp)(i))||Object(p.e)(c);return Object(n.d)(r,l)},S=(e,t)=>{const{satisfactionByRadio:a}=e;if(Object(m.h)(e))return Object(p.b)(t);if(!u.deviceModels[e.model])return Object(p.a)(p.f,t);const{deviceCapabilities:n}=u.deviceModels[e.model];switch(!0){case n.includes(u.DeviceCapability.ACCESS_POINT):case n.includes(u.DeviceCapability.BUILDING_BRIDGE):{const{averageSatisfaction:e,naNumSta:n,ngNumSta:i}=a;return 0!==n+i&&e?e*p.i:Object(p.a)(p.g,t)}case n.includes(u.DeviceCapability.GATEWAY):case n.includes(u.DeviceCapability.SWITCH):{const{speed:a=0}=Object(o.getUplinkAttrs)(e)||{};return a>0?Object(r.a)(a,1)*p.h:Object(p.a)(p.f,t)}default:return Object(p.a)(p.f,t)}},D=(e,t)=>{if("device_type"in e&&(null==e?void 0:e.device_type)===E.a.MANAGED)return S(e,t);if("is_wired"in e&&(null==e?void 0:e.is_wired)){const{wired_speed_megabits_per_second:t}=e;return t*p.h}const{satisfaction:a}=e;return a?Math.max(1,a)*p.i:p.f},f=(e,t,a,i,c)=>{const r=D(a,c),l=D(i,c);return Object(n.d)(r,l)},C=(e,t,a,i,c)=>Object(n.d)((()=>{const e=Object(o.getDeviceUplinkPortName)(a);return Object(m.h)(a)?Object(p.c)(c):"-"===e?Object(p.d)(c):e})(),(()=>{const e=Object(o.getDeviceUplinkPortName)(i);return Object(m.h)(i)?Object(p.c)(c):"-"===e?Object(p.d)(c):e})()),I=(e,t,a,i,c)=>{const r=Object(m.h)(a)?Object(p.b)(c):Object(o.getDeviceMemoryUsage)(a)||Object(p.e)(c),l=Object(m.h)(i)?Object(p.b)(c):Object(o.getDeviceMemoryUsage)(i)||Object(p.e)(c);return Object(n.d)(r,l)},v=(e,t,a,i,c)=>{var r,l;const o=Object(m.h)(a)?Object(p.b)(c):(null===(r=null==a?void 0:a["system-stats"])||void 0===r?void 0:r.cpu)||Object(p.e)(c),s=Object(m.h)(i)?Object(p.b)(c):(null===(l=null==i?void 0:i["system-stats"])||void 0===l?void 0:l.cpu)||Object(p.e)(c);return Object(n.d)(o,s)},R=(e,t,a,i,c)=>{var r,l,o,s;const d=Object(m.h)(a)?Object(p.b)(c):null!==(l=null===(r=null==a?void 0:a.sys_stats)||void 0===r?void 0:r.loadavg_1)&&void 0!==l?l:Object(p.e)(c),E=Object(m.h)(i)?Object(p.b)(c):null!==(s=null===(o=null==i?void 0:i.sys_stats)||void 0===o?void 0:o.loadavg_1)&&void 0!==s?s:Object(p.e)(c);return Object(n.d)(d,E)},j=(e,t,a)=>{const i=Object(o.getRadioByType)(e,a),c=Object(o.getRadioByType)(t,a),r=i?Object(o.getRadioStatsByName)(e,i.name):null,l=c?Object(o.getRadioStatsByName)(t,c.name):null;if(i&&c&&r&&l){let a,s;const d=(e,t)=>e&&t?Object(n.d)(e,t):(e?-1:t&&1)||0;return a=("auto"===i.channel?0:i.channel)||0,s=("auto"===c.channel?0:c.channel)||0,d(a,s)?d(a,s):(a=Object(o.getRadioStatsBindedChannel)(e,r)||i.channel||0,s=Object(o.getRadioStatsBindedChannel)(t,l)||c.channel||0,d(a,s)?d(a,s):(a=parseInt(Object(o.getRadioHt)(i),10),s=parseInt(Object(o.getRadioHt)(c),10),d(a,s)?d(a,s):(a=Object(o.getRadioStatsPrimaryChannel)(r)||i.channel||0,s=Object(o.getRadioStatsPrimaryChannel)(l)||i.channel||0,d(a,s)?d(a,s):(a=Object(o.getRadioStatsTransmitPower)(r),s=Object(o.getRadioStatsTransmitPower)(l),d(a,s)?d(a,s):0))))}if(i&&c){if(r)return 1;if(l)return-1}return i?1:c?-1:0},y=(e,t,a,n)=>j(a,n,l.b.RADIO_NG),G=(e,t,a,n)=>j(a,n,l.b.RADIO_NA),P=(e,t,a,n)=>j(a,n,l.b.RADIO_6E),x=(e,t,a)=>{var n;if(!(null===(n=e.radio_table_stats)||void 0===n?void 0:n.length))return Object(p.e)(a);return Object(o.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.num_sta||0,0)},L=(e,t,a,i,c)=>{const r=Object(m.h)(a)?Object(p.b)(c):x(a,l.b.RADIO_NG,c),o=Object(m.h)(i)?Object(p.b)(c):x(i,l.b.RADIO_NG,c);return Object(n.d)(r,o)},H=(e,t,a,i,c)=>{const r=Object(m.h)(a)?Object(p.b)(c):x(a,l.b.RADIO_NA,c),o=Object(m.h)(i)?Object(p.b)(c):x(i,l.b.RADIO_NA,c);return Object(n.d)(r,o)},w=(e,t,a)=>{if(Object(m.h)(e))return Object(p.b)(a);const n=Object(o.getRadioStatsByType)(e,t);return n.length?n.reduce((e,t)=>e+(t.ast_be_xmit||0)+(t.tx_packets||0),0):Object(p.e)(a)},M=(e,t,a,i,c)=>{const r=w(a,l.b.RADIO_NG,c),o=w(i,l.b.RADIO_NG,c);return Object(n.d)(r,o)},W=(e,t,a,i,c)=>{const r=w(a,l.b.RADIO_NA,c),o=w(i,l.b.RADIO_NA,c);return Object(n.d)(r,o)},k=(e,t,a,i,c)=>{const r=Object(m.h)(a)?Object(p.b)(c):Object(o.getChannelValue)(a,c),l=Object(m.h)(i)?Object(p.b)(c):Object(o.getChannelValue)(i,c);return Object(n.d)(r,l)},V=(e,t,a)=>{const n=Object(o.getRadioStatsByType)(e,t);return 0===n.length?Object(p.e)(a):n.reduce((e,t)=>e+t.cu_total||0,0)},Y=(e,t,a,i,c)=>{const r=Object(m.h)(a)?Object(p.b)(c):V(a,l.b.RADIO_NG,c),o=Object(m.h)(i)?Object(p.b)(c):V(i,l.b.RADIO_NG,c);return Object(n.d)(r,o)},$=(e,t,a,i,c)=>{const r=Object(m.h)(a)?Object(p.b)(c):V(a,l.b.RADIO_NA,c),o=Object(m.h)(i)?Object(p.b)(c):V(i,l.b.RADIO_NA,c);return Object(n.d)(r,o)},B=e=>{const{total:t,totalActivePorts:a}=null==e?void 0:e.portsUtilization;return t&&0!==t&&a?a/t:0},F=e=>{const t=Object(o.getRadioStats)(e),a=t.reduce((e,t)=>e+t.cu_total||0,0);return 0!==a&&t.length>0?a/t.length/100:0}},1774:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(3),r=a(2),l=a(1780),o=a.n(l),s=a(1259),d=a(493),E=a(494);const _=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null,leaveButtonText:l="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:u="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:m="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:p="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const O=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),b=Object(E.a)(t),h=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),T=Object(n.useCallback)(e=>(e={},t={})=>b(e,t)&&h(e,t),[b,h]);return!!e&&i.a.createElement(o.a,{when:T(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:u}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(r.c,{id:l}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:O,parentSelector:d.b,title:i.a.createElement(r.c,{id:m}),onRequestClose:()=>c?c(e):e()},i.a.createElement(_,null,i.a.createElement(r.c,{id:p}))))}},1775:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1776:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d.d})),a.d(t,"c",(function(){return d.a}));var n=a(0),i=a.n(n),c=a(3),r=a(10),l=a(14);const o=Object(c.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(r.h,null)),d=a(1261)},1777:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return q})),a.d(t,"d",(function(){return Q.a})),a.d(t,"f",(function(){return Q.c})),a.d(t,"h",(function(){return Q.e})),a.d(t,"g",(function(){return Q.d})),a.d(t,"i",(function(){return te}));var n=a(1776);var i=a(0),c=a.n(i),r=a(3);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...l})=>{const o=a?12:i,s=a?0:n;return c.a.createElement("div",Object.assign({className:Object(r.b)("col-"+o,"offset-"+s,t)},l),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(r.b)("col-"+a,"offset-"+t)},e),d=a(2),E=a(559),_=a.n(E),u=a(14),m=a(1783),p=a.n(m),O=a(126),b=a.n(O),h=a(106);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const T=b.a.bind(p.a);var g=({className:e=null,status:t=o.NEUTRAL,...a})=>c.a.createElement(h.a,Object.assign({},a,{className:T("ubntStatusText","ubntStatusText--"+t,e)})),N=a(256),A=a(1779);const S=Object(r.c)(u.g)`
  border: 1px solid ${N.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,D=Object(r.c)(g)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var f=({state:e,className:t=null,...a})=>c.a.createElement(S,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(D,{message:A.b[e],status:o.WARNING})),C=a(136),I=a(75),v=a(5),R=a(26),j=a(40),y=a(54);const G={BORDER_WIDTH:2},P={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},x=({type:e,size:t,width:a,height:n})=>{switch(e){case C.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:c}=P;return{top:c,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function L({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:l,height:o}){const s=Object(v.useSelector)(C.selectHighlight),[d,E]=Object(j.c)(0),[_,u]=Object(j.c)(!1),m=Object(i.useRef)(null),p=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(r.a)({"&::before":{border:`${G.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:R.a["blue-light-3"],show:_,style:{...x({type:e,size:c,width:l,height:o}),...a}}),[_,e,a,c,l,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>d)E(d+1);else if(m.current&&t===s.id&&s.type===e){window.getComputedStyle(m.current).border,window.getComputedStyle(m.current).boxShadow;let t=m.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:c}=t.current.getBoundingClientRect();switch(a){case C.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=P,r=c+Object(y.a)(n,"top",a),l=r+i+Object(y.a)(n,"paddingBottom",e)+Object(y.a)(n,"paddingTop",t)+2*G.BORDER_WIDTH;return{bottom:l,height:l-r,top:r}}}})({height:o,highlightRef:m,type:e,highlightStyle:a}),{bottom:r,height:l,top:s}=n.getBoundingClientRect(),d=t>r,E=i>l,_=15;c<s||E?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+c-_}):d&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-r+_})}u(!0)}},[o,d]),Object(i.useEffect)(()=>{_||s.id!==t||E(e=>e+1),_&&s.id!==t&&u(!1)},[s.id,_]),{highlightClassName:p,highlightRef:m}}const H=Object(r.c)(_.a)`
  color: ${I.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,w=Object(r.c)(_.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=r.a`
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
`;var W=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:E=null,offset:_=0,size:u=5,useHtml:m=!1})=>{const{highlightClassName:p,highlightRef:O}=L({type:C.SearchHighlightType.FIELD,forId:E,highlightStyle:s,highlightDelay:o,size:u}),b=!(!n&&!a),h={["col-"+u]:!0,["offset-"+_]:_>0},T=m?d.b:d.c;return c.a.createElement("div",{className:Object(r.b)(h,M,p),ref:O},c.a.createElement("div",{className:"mb-1"},c.a.createElement(w,{className:"settingsGridLabel",htmlFor:E,primary:!0},l?e:c.a.createElement(d.c,{id:e})),t&&c.a.createElement(f,{state:t})),b&&c.a.createElement("div",null,c.a.createElement(H,{className:"settingsGridDescription",htmlFor:E,secondary:!0},n?c.a.createElement(T,{id:n,values:i}):a)))};const k=r.a`
  max-width: 960px;
`,V=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:l=!1})=>{const o=n?4:i;return c.a.createElement("div",{className:Object(r.b)("row","mt-"+o,l?null:k,t),ref:a},e)};var Y=c.a.forwardRef((e,t)=>c.a.createElement(V,Object.assign({forwardedRef:t},e)));var $=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(h.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const B=Object(r.c)("div")`
  flex: 0 1 480px;
`,F=Object(r.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var U=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:l=null})=>{const o=N.b.sectionColors.common;return c.a.createElement(Y,{className:t,marginTop:0},c.a.createElement(B,null,c.a.createElement(F,{className:Object(r.b)("mt-8","type-larger"),style:{color:o}},c.a.createElement(d.c,{id:e})),a&&c.a.createElement(h.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const z=Object(r.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,X=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement(z,{className:Object(r.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(r.b)({"pb-8":!a})},e));X.Content=l,X.Icon=s,X.Label=W,X.Row=Y,X.SectionHeader=$,X.Subheader=U;var Z=a(268);const K=Object(r.c)(Z.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var q=e=>c.a.createElement(K,Object.assign({},e)),Q=a(719),J=a(188),ee=a(9);const te=({lastQuery:e=0})=>{const t=Object(v.useSelector)(J.B);return e>0?c.a.createElement(ee.a,{alignItems:"center"},c.a.createElement(d.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(d.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(d.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1774)},1778:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(3),r=a(187),l=a.n(r),o=a(393),s=a(75);const d=Object(c.c)(o.a,{shouldForwardProp:e=>!["marginLeft","marginRight","statusSize"].includes(e)})`
  ${({statusSize:e=6})=>`\n    width: ${e}px;\n    height: ${e}px;\n  `}
  ${({marginLeft:e})=>e&&`margin-left: ${e}px;`}
  ${({marginRight:e})=>e&&`margin-right: ${e}px;`}
`,E=e=>c.a`
  animation: ${(e=>{const t=l()(s.n[e]).alpha(0).css(),a=l()(s.n[e]).alpha(.3).css();return c.e`
      0% {
        box-shadow: 0 0 0 4px ${t};
      }
      50% {
        box-shadow: 0 0 0 4px ${a};
      }
      100% {
        box-shadow: 0 0 0 4px ${t};
      }
    `})(e)} 1.2s ease-in-out 0s infinite;
`;t.a=({status:e,statusPulse:t,marginLeft:a,marginRight:n,statusSize:c})=>i.a.createElement(d,{variant:e,className:t?E(e):"",marginLeft:a,marginRight:n,statusSize:c})},1779:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1781:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return _})),a.d(t,"saveDhcpOption",(function(){return u})),a.d(t,"removeDhcpOption",(function(){return m})),a.d(t,"DHCP_OPTIONS",(function(){return c})),a.d(t,"typeOptions",(function(){return r})),a.d(t,"integerOptions",(function(){return l})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return o})),a.d(t,"DHCP_CODE",(function(){return s})),a.d(t,"MODEL",(function(){return d})),a.d(t,"PATH",(function(){return E})),a.d(t,"selectDhcpOptions",(function(){return O})),a.d(t,"selectDhcpOptionsData",(function(){return b})),a.d(t,"selectDhcpOptionsCodes",(function(){return h})),a.d(t,"DhcpOptionTypes",(function(){return T})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return g}));var n=a(25),i=a(7);const c={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},r=[{value:c.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:c.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:c.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:c.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:c.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:c.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],l=[8,16,32].map(e=>({value:e,label:e})),o="dhcpd_user_option_",s={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},d="dhcpOptions",E="/api/s/{site}/rest/dhcpoption",_=(e={})=>Object(i.q)(d,E,void 0,{...e,idField:"_id"}),u=e=>{const{_id:t}=e;return t?Object(i.D)(d,t,`${E}/${t}`,e):Object(i.i)(d,E,e)},m=({_id:e,name:t})=>Object(i.n)(d,e,`${E}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var p=a(6);const O=Object(i.A)(_()),b=Object(p.a)(O,n.c),h=Object(p.a)(b,e=>e.map(({code:e})=>e));var T;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(T||(T={}));const g=(e,t,a,n)=>{let i;switch(a){case T.BOOLEAN:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case T.HEX_ARRAY:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case T.INTEGER:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case T.IP_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case T.MAC_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case T.TEXT:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:i="COMMON_UNKNOWN"}const c=e.formatMessage({id:i});return"integer"!==a?c:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},2284:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(30),r=a(1781),l=a(40),o=a(7),s=a(5),d=a(2),E=a(73),_=a(23),u=a(14),m=a(2429),p=a(2456),O=a(28),b=a(136),h=a(16),T=a(1763),g=a(1761),N=a(1762),A=a(72),S=a(38),D=a(19),f=a(101);const C={minHopCount:1,minDhcpRelayMaxSize:64,minDhcpRelayPort:1,maxDhcpRelayPort:65536,maxHopCount:255,maxDhcpRelayMaxSize:1400,relayAgentOptionsHandling:[{value:"",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_DEFAULT"},{value:"append",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_APPEND"},{value:"discard",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_DISCARD"},{value:"forward",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_FORWARD"},{value:"replace",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_REPLACE"}]},I=()=>D.a.string().label("SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_SERVER").matches(f.i,{message:i.a.createElement(d.c,{id:"COMMON_VALIDATION_VALID_IPV4"})}),v=D.a.object().shape({dhcp_relay_servers:D.a.array().of(I().required()),dhcp_relay_hop_count:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT").min(C.minHopCount).max(C.maxHopCount),dhcp_relay_max_size:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE").min(C.minDhcpRelayMaxSize).max(C.maxDhcpRelayMaxSize),dhcp_relay_port:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT").min(C.minDhcpRelayPort).max(C.maxDhcpRelayPort)}),R=e=>{const t={arrayFieldName:"dhcp_relay_servers",stringFieldName:"dhcp_relay_server",errorMessage:i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_SERVER_UNIQUE"})};return D.a.object().shape({editActive:D.a.bool(),new_dhcp_relay_server:I().isIPUnique({formValues:null,...t}),dhcp_relay_servers:D.a.array().of(D.a.object().shape({dhcp_relay_server:I().isIPUnique({formValues:e,...t}).required()}))})},j={key:"usg",dhcpd_hostfile_update:!0,dhcpd_use_dnsmasq:!1,dhcp_relay_servers:[],dhcp_relay_hop_count:1,dhcp_relay_max_size:64,dhcp_relay_port:1,dhcp_relay_agents_packets:""};var y=a(36),G=a(1777);const P=[{id:"dhcp_relay_server",label:i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_LABEL_SERVER_IP"}),sortable:!1}],x={dhcp_relay_server:"SETTINGS_GATEWAY_DHCP_LABEL_SERVER_IP"},L=[{name:"new_dhcp_relay_server",placeholder:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_SERVER"}],H=({dhcp_relay_servers:e})=>Array.from(e,(e,t)=>({id:"dhcp_relay_server-"+t,dhcp_relay_server:e}));var w=()=>{const{values:e,setFieldValue:t,handleSubmit:a}=Object(y.e)(),c=Object(n.useMemo)(()=>({editActive:!1,dhcp_relay_servers:H(e)}),[e]),r=Object(n.useMemo)(()=>H(e),[e]),l=Object(n.useCallback)(e=>{t("dhcp_relay_servers",e),t("serverOnly",!0),a()},[t,a]),o=Object(n.useCallback)(({new_dhcp_relay_server:e,dhcp_relay_servers:t})=>{e&&l([...t.map(({dhcp_relay_server:e})=>e),e])},[l]),s=Object(n.useCallback)(({dhcp_relay_server:t})=>{l(e.dhcp_relay_servers.filter(e=>e!==t))},[l,e]),d=Object(n.useCallback)(e=>{l([...e.map(({dhcp_relay_server:e})=>e)])},[l]);return i.a.createElement(G.d,{fieldName:"dhcp_relay_servers",items:r,columns:P,fieldLabels:x,newFields:L,onAddItem:o,onRemoveItem:s,onEditSubmit:d,initialValues:c,validationSchema:R,useValuesInSchema:!0,max:5})};var M=()=>{const e=Object(s.useSelector)(A.m);return i.a.createElement(T.a,{padding:"none"},i.a.createElement(g.a,null,i.a.createElement(b.SearchableGridLabel,{htmlFor:"new_dhcp_relay_server",alignWith:"input",label:i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_LABEL_SERVERS"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY"}),i.a.createElement(g.a,null,i.a.createElement(N.a,{wrap:!0},i.a.createElement(w,null)))),!e&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,null,i.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_hop_count",alignWith:"input",label:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT"}),description:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT_DESCRIPTION"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT_SEARCH_TEXT"}),i.a.createElement(N.a,{column:!0},i.a.createElement(S.Field,{name:"dhcp_relay_hop_count",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT",type:"number",full:!0}))),i.a.createElement(g.a,null,i.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_max_size",alignWith:"input",label:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE"}),description:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE_DESCRIPTION"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE_SEARCH_TEXT"}),i.a.createElement(N.a,{column:!0},i.a.createElement(S.Field,{full:!0,name:"dhcp_relay_max_size",type:"number",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE"}))),i.a.createElement(g.a,null,i.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_port",alignWith:"input",label:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT"}),description:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT_DESCRIPTION"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT_SEARCH_TEXT"}),i.a.createElement(N.a,{column:!0},i.a.createElement(S.Field,{full:!0,name:"dhcp_relay_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT"}))),i.a.createElement(g.a,null,i.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_agents_packets",alignWith:"select",label:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_RELAY_AGENT_OPTIONS_HANDLING"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_RELAY_AGENT_OPTIONS_HANDLING_SEARCH_TEXT"}),i.a.createElement(N.a,{column:!0},i.a.createElement(S.Field,{type:"dropdown",name:"dhcp_relay_agents_packets",options:C.relayAgentOptionsHandling,translateOptions:!0,full:!0})))))},W=a(3),k=a(2379),V=a(1895),Y=a(10),$=a(148);const B=e=>[{compare:Object($.a)(({name:e})=>e.toLowerCase()),id:"dhcp-option-name",label:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_TABLE_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:100,maxWidth:120},{compare:Object($.a)(({code:e})=>e),id:"dhcp-option-code",label:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_TABLE_CODE"}),renderCell:({code:e})=>e,sortable:!0,minWidth:40,maxWidth:60},{compare:Object($.a)(({signed:t,type:a,width:n})=>Object(r.getDhcpOptionTypeDisplayText)(e,t,a,n)),id:"dhcp-option-type",label:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_TABLE_TYPE"}),renderCell:({signed:t,type:a,width:n})=>i.a.createElement("div",null,Object(r.getDhcpOptionTypeDisplayText)(e,t,a,n)),minWidth:100}];var F=a(2486),U=a(251);const z=Object(W.c)(F.a,{shouldForwardProp:e=>"isEdit"!==e})`
  ${({isEdit:e})=>e&&"width: 525px;\n    & > footer > div {\n      width: 100%;\n\n      & > div:first-child {\n        margin-right: auto;\n      }\n    }"}
`,X=Object(W.c)("div")`
  width: 100%;
  display: flex;
`,Z=Object(W.c)("div")`
  display: flex;
  flex-direction: column;
  > span {
    color: ${({theme:e})=>e.motifPalette.text02};
    margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`,K=Object(W.c)("div")`
  display: flex;
  flex-direction: column;
  span {
    color: ${({theme:e})=>e.motifPalette.text02};
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,q=Object(W.c)("div")`
  display: flex;
  > * {
    margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
    &:last-child {
      margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
    }
  }
`;var Q=({defaultValues:e,isEdit:t,...a})=>{const{values:c,handleSubmit:o,isValid:E,dirty:u,isSubmitting:m,initialValues:p}=Object(y.e)(),O=Object(_.k)(),b=Object(l.j)("advanced/gateway"),h=Object(s.useDispatch)(),A=Object(n.useCallback)(()=>O.push(b+"/dhcp/form"),[O,b]),D=Object(n.useCallback)(()=>{E&&(o(),A())},[E,o,A]),f=Object(n.useCallback)(()=>{h(Object(U.b)({name:p.name,onConfirm:()=>h(Object(r.removeDhcpOption)(p)).then(A())}))},[h,A,p]);return i.a.createElement(z,Object.assign({},a,{title:i.a.createElement(d.c,{id:t?"SETTINGS_GATEWAY_DHCP_EDIT_HEADER":"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"}),actions:[t&&{disabled:m,text:i.a.createElement(d.c,{id:"COMMON_ACTION_REMOVE"}),type:"button",variant:"default",onClick:f},{text:i.a.createElement(d.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",onClick:A},{text:i.a.createElement(d.c,{id:t?"SETTINGS_GATEWAY_DHCP_EDIT_HEADER":"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"}),type:"button",variant:"primary",onClick:D,disabled:!u}],onRequestClose:A,isEdit:t}),i.a.createElement(T.a,{padding:"none"},i.a.createElement(g.a,null,i.a.createElement(N.a,{column:!0,unlimitedWidth:!0},i.a.createElement(S.Field,{name:"name",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_NAME",placeholder:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_NAME",full:!0}))),i.a.createElement(g.a,null,i.a.createElement(S.Field,{name:"type",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_DHCP_TYPE",placeholder:"COMMON_ACTION_CHOOSE_AN_OPTION",options:r.typeOptions,type:"dropdown",translateOptions:!0,translateLabel:!0,full:!0})),i.a.createElement(g.a,null,i.a.createElement(N.a,{column:!0,unlimitedWidth:!0},i.a.createElement(S.Field,{name:"code",label:"SETTINGS_GATEWAY_DHCP_TABLE_HEADER_CODE",placeholder:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_CODE",type:"number",min:r.DHCP_CODE.MIN,max:r.DHCP_CODE.MAX,full:!0}))),c.type===r.DHCP_OPTIONS.INTEGER&&i.a.createElement(g.a,null,i.a.createElement(X,null,i.a.createElement(Z,null,i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_CREATE_OPTION_LABEL_INTEGER_TYPE"}),i.a.createElement(q,null,r.integerOptions.map(({value:e})=>i.a.createElement(S.Field,{key:e,value:e,type:"togglebox",toggleboxType:"radio",name:"width",inModal:!0},e)))),i.a.createElement(K,null,i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_SIGNED"}),i.a.createElement(S.Field,{name:"signed",type:"checkbox"}))))))},J=a(864);const ee=Object(W.c)(u.c)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xl"]};
  span {
    display: flex;
    &:not(:first-child) {
      margin: auto 0 auto ${({theme:e})=>e.spacing["spacing-s"]};
    }
  }
`,te=Object(W.c)("div")`
  width: 100%;
`,ae=Object(W.c)(k.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xl"]};
`,ne={};var ie=Object(d.f)(({intl:e})=>{const{id:t}=Object(_.m)(),a=Object(s.useSelector)(r.selectDhcpOptionsData),c=Object(s.useDispatch)(),o=Object(l.j)("advanced/gateway"),E=Object(n.useMemo)(()=>o+"/dhcp/form",[o]),u=Object(_.k)(),m=Object(n.useCallback)((e,{setSubmitting:t})=>c(Object(r.saveDhcpOption)({...e,code:Number(e.code),width:Number(e.width)})).then(()=>{c(Object(O.c)({icon:h.a.success,message:"SETTINGS_GATEWAY_DHCP_OPTION_SAVE_SUCCESS"}))}).catch(e=>{c(Object(O.c)({errorMessage:e.msg,errorValues:e,icon:h.a.danger,message:"SETTINGS_GATEWAY_DHCP_OPTION_SAVE_ERROR"})),t(!1)}),[c]),p=Object(s.useSelector)(r.selectDhcpOptionsData).find(e=>e._id===t)||ne,b=!!p._id,A=Object(s.useSelector)(r.selectDhcpOptionsCodes),S=(e=>{const t=new Set([...e,...r.DHCP_CODE.DISALLOWED_CODES]);let a=Object(J.a)(224,r.DHCP_CODE.MAX).find(e=>!t.has(e));return a||(a=Object(J.a)(r.DHCP_CODE.MIN,224).find(e=>!t.has(e))),{name:"",code:a,type:r.DhcpOptionTypes.TEXT,width:8,signed:!1}})(A),f=Object(n.useMemo)(()=>({...S,...p}),[S,p]),C=Object(n.useMemo)(()=>{return e=b?A.filter(e=>String(e)!==String(p.code)):A,D.a.object().shape({name:D.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_NAME").matches(/^[A-Za-z0-9-_]+$|^$/,{message:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_NAME_VALIDATION"})}).required(),code:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_CODE").min(r.DHCP_CODE.MIN).max(r.DHCP_CODE.MAX).notOneOf([...e,...r.DHCP_CODE.DISALLOWED_CODES],i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_CODE_VALIDATION"})),type:D.a.string(),width:D.a.number(),signed:D.a.boolean()});var e},[A,p,b]),I=Object(n.useCallback)(e=>u.push(`${E}/${e}`),[u,E]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{padding:"none"},i.a.createElement(g.a,null,i.a.createElement(ae,{label:i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"})}),i.a.createElement(N.a,null,i.a.createElement(te,null,a.length?i.a.createElement(V.a,{idField:"_id",disableSelection:!0,disableTextPointer:!0,columns:B(e),items:a,disableColumnFilters:!0,onRowClick:({_id:e})=>I(e)}):null,i.a.createElement(ee,{legacy:!1,name:"dhcp-option-add",type:"button",variant:"inline",onClick:()=>u.push(E+"/new"),Icon:Y.Db},i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"})))))),t?i.a.createElement(y.c,{onSubmit:m,validationSchema:C,initialValues:f},i.a.createElement(Q,{isEdit:b,defaultValues:S})):null)});const ce=Object(E.a)(e=>{const t=Object(p.d)(e,"dhcp_relay_server_"),a=Object(p.c)(e,"dhcp_relay_server_");return{...j,...a,dhcp_relay_servers:t}});var re=({onBack:e})=>{const{id:t}=Object(_.m)(),a=Object(s.useDispatch)(),r=Object(n.useContext)(u.l),l=Object(s.useSelector)(c.selectUsgSettings),o=Object(n.useCallback)((e,{setSubmitting:t})=>{const n=ce(l);return a(Object(c.saveSettings)({...(e=>Object(p.c)(e,"dhcp_relay_servers"))(e.serverOnly?n:e),...(e=>Object(p.a)(e.dhcp_relay_servers,"dhcp_relay_server_",Object(p.b)(l,"dhcp_relay_server_")))(e)})).then(()=>{a(Object(O.c)({icon:h.a.success,message:"SETTINGS_GATEWAY_DHCP_SAVE_SUCCESS"}))}).catch(e=>{a(Object(O.c)({errorMessage:e.msg,errorValues:e,icon:h.a.danger,message:"SETTINGS_GATEWAY_DHCP_SAVE_ERROR"})),t(!1)})},[a,l]),E=!!l._id;return i.a.createElement(m.b,{onSubmit:o,title:{component:i.a.createElement(d.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP"},initialValues:ce(l),isEdit:E,isView:r,validationSchema:v,unsavedChangesModalIgnoredPaths:/\/dhcp\/form(\/[\w_-]*\/?)?$/,showBack:!0,goBack:e,onEscClicked:e},i.a.createElement(b.SearchableAccordion,{multiOpen:!0,items:[{id:1,openByDefault:!1,label:i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_HEADER_RELAY"}),renderContent:()=>i.a.createElement(M,null)},{id:2,openByDefault:!!t,label:i.a.createElement(d.c,{id:"SETTINGS_GATEWAY_DHCP_HEADER_OPTIONS"}),renderContent:()=>i.a.createElement(ie,null)}]}))};t.default=()=>{const e=Object(l.i)();return Object(l.g)([Object(c.fetchSettings)({type:o.a.CACHE}),Object(r.fetchDhcpOptions)({crudCacheStrategy:{type:o.a.CACHE}})],i.a.createElement(re,{onBack:e}))}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return I})),a.d(t,"a",(function(){return g}));var n=a(0),i=a.n(n),c=a(3),r=a(2),l=a(36),o=a(2838),s=a(2760),d=a(1774),E=a(867),_=a(14),u=a(10),m=a(42);const p=Object(c.c)(_.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,O=Object(c.c)(_.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,b=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,h=Object(c.c)(_.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,T=Object(c.c)(m.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var g=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:r})=>i.a.createElement(O,{flex:"none",height:"65px"},i.a.createElement(_.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(p,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(h,{legacy:!1,name:"backButton",type:"button",onClick:a},i.a.createElement(u.g,{size:"original"}))),i.a.createElement(b,null,i.a.createElement(T,{weight:"bold"},e.component)),i.a.createElement(p,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&i.a.createElement(h,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(u.A,{size:"original"})))));const N=Object(c.c)(_.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,A=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,S=Object(c.c)(_.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,D=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,f=Object(c.c)(_.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,C=Object(c.c)(_.k)`
  height: 100%;
  width: 100%;
`;var I=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:E,title:u,unsavedChangesModalIgnoredPaths:m,onEscClicked:p,submitText:O="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:b=!1,customFooterButtons:h,hidddenHeader:T,className:I,...v})=>i.a.createElement(l.c,Object.assign({enableReinitialize:!0},v),({dirty:c,handleReset:l,handleSubmit:v,isSubmitting:R})=>i.a.createElement(A,{autoComplete:"off",onSubmit:v,className:I},i.a.createElement(C,{vertical:!0},!T&&i.a.createElement(g,{goBack:a,hideClose:n,showBack:E,title:u,onEscClicked:p,ignoredPaths:m}),i.a.createElement(f,{flex:"1"},i.a.createElement(N,{flex:"none",flexDirection:"column"},e)),!t&&!o&&i.a.createElement(d.a,{ignoredPaths:m,when:c&&!R}),(!o||b)&&i.a.createElement(D,{active:c||b},i.a.createElement(_.g,{justifyContent:h?"space-between":"flex-end",width:"100%",alignItems:"center"},h&&i.a.createElement(S,null,h(R)),!o&&i.a.createElement(_.g,null,i.a.createElement(s.a,{disabled:!c||R,type:"button",variant:"default",onClick:l},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!c||R,type:"submit",variant:"primary"},i.a.createElement(r.c,{id:O}))))))))},2456:function(e,t,a){"use strict";a.d(t,"d",(function(){return _})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"e",(function(){return O}));var n=a(20),i=a.n(n),c=a(233),r=a.n(c),l=a(127),o=a.n(l),s=a(416);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e,t){return Object.entries(e||{}).reduce((function(e,a){var n=o()(a,2),i=n[0],c=n[1];return i.startsWith(t)&&c?[].concat(r()(e),[c]):e}),[])},u=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=a>e.length?Array.from(Array(a),(function(t,a){return a<e.length?e[a]:n})):e;return i.reduce((function(e,a,n){return e[t+(n+1)]=a,e}),{})},m=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Object.entries(e||{}).reduce((function(e,t){var n=o()(t,2),i=n[0],c=n[1];return a.find((function(e){return i.startsWith(e)}))||(e[i]=c),e}),{})},p=function(e,t){return Object.keys(e).reduce((function(e,a){return a.startsWith(t)?e+1:e}),0)},O=function(e,t){return E(E({},e),Object.entries(Object(s.a)(e,t)).reduce((function(e,t){var a=o()(t,2),n=a[0],c=a[1];return E(E({},e),{},i()({},n,null===c?"":c))}),{}))}},2486:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(3),r=a(87);const l=Object(c.c)(r.a)`
  width: 385px;

  header {
    > div {
      margin-bottom: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    }
  }

  > div {
    border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui07};
    padding: 0 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    margin: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  }

  footer {
    margin-top: 0;
    button {
      padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    }
  }
`;t.a=e=>i.a.createElement(l,Object.assign({flushContent:!0},e))},558:function(e,t,a){"use strict";var n,i,c,r;a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return r})),function(e){e.MANAGED="MANAGED",e.CLIENT="CLIENT"}(n||(n={})),function(e){e.UP_TO_DATE="UP_TO_DATE",e.UPDATE_AVAILABLE="UPDATE_AVAILABLE",e.UNKNOWN="UNKNOWN"}(i||(i={})),function(e){e.NETWORK="NETWORK",e.TALK="TALK",e.PROTECT="PROTECT",e.ACCESS="ACCESS",e.CONNECT="CONNECT"}(c||(c={})),function(e){e.ACCESS_DEVICES="access_devices",e.NETWORK_DEVICES="network_devices",e.PROTECT_DEVICES="protect_devices",e.TALK_DEVICES="talk_devices",e.CONNECT_DEVICES="connect_devices"}(r||(r={}))},569:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=({width:e,height:t,...a})=>i.a.createElement("svg",Object.assign({viewBox:"0 0 14 15",width:e,height:t},a),i.a.createElement("defs",null,i.a.createElement("radialGradient",{cx:"100%",cy:"12.7067462%",fx:"100%",fy:"12.7067462%",r:"123.069205%",gradientTransform:"translate(1.000000,0.127067),scale(1.000000,0.880952),rotate(90.000000),translate(-1.000000,-0.127067)",id:"radialGradient-1"},i.a.createElement("stop",{stopColor:"#1D52FD",offset:"0%"}),i.a.createElement("stop",{stopColor:"#140E56",offset:"100%"})),i.a.createElement("linearGradient",{x1:"55.6991393%",y1:"31.7278611%",x2:"66.6494713%",y2:"50%",id:"linearGradient-2"},i.a.createElement("stop",{stopColor:"#DDDEE1",offset:"0%"}),i.a.createElement("stop",{stopColor:"#A5A8B7",offset:"100%"})),i.a.createElement("radialGradient",{cx:"50%",cy:"50%",fx:"50%",fy:"50%",r:"100%",gradientTransform:"translate(0.500000,0.500000),scale(0.945946,1.000000),rotate(90.000000),translate(-0.500000,-0.500000)",id:"radialGradient-3"},i.a.createElement("stop",{stopColor:"#FFFFFF",offset:"0%"}),i.a.createElement("stop",{stopColor:"#FFFFFF",stopOpacity:"0",offset:"100%"})),i.a.createElement("path",{d:"M8.69999985,6.04980458 L8.5694504,6.45058583 C8.50219769,6.65468741 8.41912077,6.83745106 8.32021964,6.99887683 C8.22131851,7.16030261 8.10461528,7.30039053 7.97010975,7.4191405 C7.83560423,7.53789047 7.68428555,7.63530258 7.51615372,7.71137682 C7.34802188,7.78745107 7.1630768,7.84218737 6.96131856,7.8755858 C6.97714277,7.79765612 6.9890109,7.71787099 6.99692296,7.63623034 C7.00483502,7.55458969 7.00879109,7.47480456 7.00879109,7.39687487 L7.00879109,4.37988274 C7.00879109,4.11640621 7.09978007,3.87148434 7.28175812,3.64511713 C7.46373617,3.41874991 7.93648335,3.30556635 8.69999985,3.30556635 L8.69999985,6.04980458 Z M4.3147252,3.61728509 L4.3147252,3.92900384 L4.65296695,3.92900384 L4.65296695,3.61728509 L4.3147252,3.61728509 Z M4.65296695,4.09042962 L4.99120871,4.09042962 L4.99120871,4.40214836 L4.65296695,4.40214836 L4.65296695,4.09042962 Z M4.3147252,4.48564445 L4.64703289,4.48564445 L4.64703289,4.7973632 L4.3147252,4.7973632 L4.3147252,4.48564445 Z M3.97648345,4.95322257 L4.30879114,4.95322257 L4.30879114,5.27050772 L3.97648345,5.27050772 L3.97648345,4.95322257 Z M3.29999994,3.29999994 L3.29999994,3.61728509 L3.6382417,3.61728509 L3.6382417,3.29999994 L3.29999994,3.29999994 Z M3.97648345,5.58222647 L4.3147252,5.58222647 L4.3147252,6.27802724 L4.65296695,6.27802724 L4.65296695,5.10908194 L4.99120871,5.10908194 L4.99120871,7.39130847 C4.99120871,7.66220693 5.04362626,7.89877919 5.14846145,8.10102525 C5.25329664,8.30327131 5.36901093,8.47119126 5.4956043,8.60478501 C5.62219768,8.73837876 5.73791196,8.83764631 5.84274715,8.90258774 L5.9999999,8.99999985 C5.57670323,8.99999985 5.19791197,8.94340802 4.86362629,8.83022446 C4.52934061,8.7170409 4.24648344,8.559326 4.01505488,8.35707994 C3.78362631,8.15483387 3.60659338,7.91640609 3.48395598,7.64179674 C3.36131859,7.3671874 3.29999994,7.07031235 3.29999994,6.75117176 L3.29999994,4.1683593 L3.6382417,4.1683593 L3.6382417,5.89394521 L3.97648345,5.89394521 L3.97648345,5.58222647 Z M6.23736253,8.04814439 C6.54989003,8.05927721 6.83670318,8.03701158 7.09780208,7.98134752 C7.35890097,7.92568346 7.59329657,7.83383776 7.80098888,7.70581042 C8.00868118,7.57778307 8.1876922,7.41264633 8.33802184,7.21040027 C8.48835147,7.00815421 8.60901087,6.76601554 8.69999985,6.48398426 L8.69999985,6.75117176 C8.69999985,7.05546866 8.64560422,7.33842761 8.53681304,7.6000487 C8.42802186,7.86166979 8.26879104,8.09174788 8.05912074,8.29028306 C7.84945045,8.48881824 7.59428562,8.64931626 7.29362625,8.77177719 C6.99296688,8.89423813 6.65076915,8.96660141 6.26703286,8.98886703 L6.06527462,8.88867172 C6.04945042,8.87753891 5.91890097,8.7801268 5.67362628,8.5964354 C5.42835159,8.412744 5.26021966,8.13535145 5.16923068,7.76425768 C5.3037362,7.84218737 5.45901087,7.90620104 5.63505485,7.95629869 C5.81109883,8.00639635 6.01186803,8.03701158 6.23736253,8.04814439 Z M3.97648345,3.93457025 L4.30879114,3.93457025 L4.30879114,4.24628899 L3.97648345,4.24628899 L3.97648345,3.93457025 Z",id:"path-4"}),i.a.createElement("filter",{x:"-18.5%",y:"-17.5%",width:"137.0%",height:"135.1%",filterUnits:"objectBoundingBox",id:"filter-5"},i.a.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),i.a.createElement("feOffset",{dx:"0",dy:"1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),i.a.createElement("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),i.a.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0",type:"matrix",in:"shadowInnerInner1"}))),i.a.createElement("g",{id:"Archive",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.a.createElement("g",{id:"04",transform:"translate(-88.000000, -411.000000)"},i.a.createElement("g",{id:"Group-10",transform:"translate(89.000000, 412.000000)"},i.a.createElement("path",{d:"M5.85092345,0.317412198 C6.1980451,0.221309165 8.04643021,0.55173872 11.3999998,1.30703061 C11.3999998,7.54829898 9.54787088,11.4117569 5.84361303,12.8974043 L5.85299999,12.893 L5.85347361,12.8999998 L5.84599999,12.896 L5.84361303,12.8974043 L5.84299999,12.895 L5.61464275,12.7996269 C2.07154758,11.2434847 0.299999995,7.41261924 0.299999995,1.30703061 C3.67284298,0.547397962 5.52315079,0.217525157 5.85092345,0.317412198 Z",id:"Combined-Shape-Copy",fill:"url(#radialGradient-1)",opacity:"0.29"}),i.a.createElement("path",{d:"M5.85092345,0.317412198 C6.1980451,0.221309165 8.04643021,0.55173872 11.3999998,1.30703061 C11.3999998,7.54829898 9.54787088,11.4117569 5.84361303,12.8974043 L5.85299999,12.893 L5.85347361,12.8999998 L5.84599999,12.896 L5.84361303,12.8974043 L5.84299999,12.895 L5.61464275,12.7996269 C2.07154758,11.2434847 0.299999995,7.41261924 0.299999995,1.30703061 C3.67284298,0.547397962 5.52315079,0.217525157 5.85092345,0.317412198 Z",id:"Combined-Shape-Copy-2",fill:"url(#radialGradient-1)"}),i.a.createElement("path",{d:"M6,0.00479241185 L5.94519876,0.00479241185 C5.30990938,-0.034415149 3.52023054,0.29826201 0.289002914,1.0237344 L0,1.08862108 L0,1.3796117 C0,7.75711246 1.90475569,11.7856095 5.7458791,13.3891512 L5.85061016,13.4319183 L5.85178208,13.4324547 C5.92981231,13.4557877 5.99741934,13.4783028 6.05460316,13.5 C6.14245335,13.4831115 6.22747069,13.4125393 6.27419823,13.3891512 C6.30534993,13.3735591 6.37291273,13.3400549 6.47688666,13.2886384 C10.1696649,11.6228494 12,7.62963141 12,1.3796117 L12,1.08862108 L10.9344861,0.850874262 C8.08839473,0.223243992 6.53633446,-0.0396173518 6,0.00479241185 Z M7.61270039,0.916959046 L7.95529914,0.979692923 C8.70778845,1.1206949 9.66778771,1.31993602 10.8346726,1.57733089 L11.2545846,1.67047648 L11.2539888,1.74367411 C11.1850999,7.58354714 9.44595352,11.2024752 6.06535572,12.6699064 L5.99553662,12.6995788 L5.92934527,12.6714149 C2.58685557,11.2181495 0.849791932,7.65583474 0.748576354,1.9182126 L0.745229202,1.67029395 L1.43092263,1.51896728 C2.58207027,1.26699659 3.52036992,1.07484818 4.24516184,0.94261207 L4.40863114,0.913159618 C5.26323394,0.761222049 5.80963133,0.70355947 5.89153866,0.728118784 C5.92536503,0.728423446 5.96151878,0.728423446 5.9999999,0.728118784 C6.03848102,0.727814121 6.07677091,0.727224737 6.11486957,0.726350631 C6.20217559,0.703701933 6.75009177,0.763040646 7.61270039,0.916959046 Z",id:"Combined-Shape-Copy-3",stroke:"url(#linearGradient-2)",strokeWidth:"0.5",fill:"#FFFFFF",fillRule:"nonzero"}),i.a.createElement("path",{d:"M11.3999998,1.53863173 C7.08761659,4.35505368 4.32159096,7.44217643 3.10192291,10.8 C2.11221232,9.50559552 1.37761714,8.13153309 0.89813737,6.67781269 L0.299999995,1.53863173 L5.36134786,0.299999995 L11.3999998,1.53863173 Z",id:"Path-3-Copy",fill:"url(#radialGradient-3)",opacity:"0.275320871"}),i.a.createElement("g",null,i.a.createElement("use",{fill:"#1D136A",fillRule:"evenodd",xlinkHref:"#path-4"}),i.a.createElement("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-5)",xlinkHref:"#path-4"}))))))},719:function(e,t,a){"use strict";a.d(t,"e",(function(){return E})),a.d(t,"d",(function(){return _})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return h.a})),a.d(t,"a",(function(){return w}));var n=a(0),i=a.n(n),c=a(3),r=a(363),l=a(804),o=a(214);const s=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,d=(Object(c.c)(r.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(c.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),E=Object(c.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,_=e=>i.a.createElement(d,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),u=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var m=a(1895),p=a(293);const O=Object(c.c)(m.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,b=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(p.b)(({theme:e,...t})=>i.a.createElement(O,Object.assign({headerRowClassName:b(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var h=a(1775),T=a(577),g=a(1770),N=a(2),A=a(19),S=a(10),D=a(2399),f=a(36),C=a(14),I=a(38);const v=Object(c.c)("div")`
  display: flex;
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,R=Object(c.c)(C.c)`
  > * {
    vertical-align: middle;
  }
`,j=Object(c.c)("div",{shouldForwardProp:e=>"useInitialPositionAddButton"!==e})`
  position: absolute;
  right: -65px;
  top: 12px;
  ${({useInitialPositionAddButton:e})=>e&&"margin: 12px 0 0 16px; position: initial;"}
`,y=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,G=Object(c.c)(C.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,P=Object(c.c)(C.g,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,x=Object(c.c)(C.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,L=Object(c.c)(C.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,H=Object(c.c)("div")`
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
`;var w=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:r,validationSchema:l,initialValues:o,onEditSubmit:s,customEditFunction:d,useValuesInSchema:E=!1,max:_,useWindowTable:u=!1,addButtonText:p="COMMON_ACTION_ADD",invalid:O,useInitialPositionAddButton:b,children:h,...w}){const M=Object(n.useContext)(C.l),[W,k]=Object(n.useState)(!0),V=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(C.g,{alignItems:"center",marginRight:8,marginBottom:1},i.a.createElement(R,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{k(!1),r(t),await Promise.resolve(),k(!0)}},i.a.createElement(N.c,{id:"COMMON_ACTION_REMOVE"}))),[e,k,r]),Y=Object(n.useMemo)(()=>u?D.a:m.a,[u]);return i.a.createElement(f.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>E?A.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:E,handleReset:u,setTouched:m,dirty:A,touched:D,submitCount:f})=>i.a.createElement(i.a.Fragment,null,t.map((a,r)=>i.a.createElement(v,{inline:a.inline,isLast:r===t.length-1,key:a.name},i.a.createElement(C.g,{flexDirection:"column",width:"100%",marginBottom:a.hasTwoLineError&&D[a.name]&&l[a.name]?48:16},i.a.createElement(I.Field,Object.assign({disabled:n.editActive||n[e].length>=_,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:void 0!==n[a.name]?D[a.name]&&l[a.name]:O,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!M&&c&&r===t.length-1&&i.a.createElement(j,{useInitialPositionAddButton:b},i.a.createElement(R,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),k(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await m(a,!0);t.find(e=>i[e.name])||c(n),k(!0)},Icon:S.Db,disabled:n.editActive||n[e].length>=_||!A},i.a.createElement(N.c,{id:p}))))),h,n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement(G,{key:n.id,width:"100%"},w.columns.map((n,r)=>t[r]?i.a.createElement(P,{key:n.id,isLast:r===w.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(I.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),i.a.createElement(x,{justifyContent:"flex-end",width:"100%"},i.a.createElement(L,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{u(),s("editActive",!1)}},i.a.createElement(N.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(C.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:E,disabled:Object(T.a)(Object(g.a)(n,"editActive"),Object(g.a)(o,"editActive"))},i.a.createElement(N.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(v,null,i.a.createElement(y,null,i.a.createElement(R,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{u(),d?d():s("editActive",!0)},Icon:S.Cb},i.a.createElement(N.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&W&&i.a.createElement(H,null,i.a.createElement(Y,{columns:w.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderHoverContent:r?V:void 0})))))}}}]);
//# sourceMappingURL=33.f400b1db6c26e1693504.js.map