(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[15],{2435:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return M})),a.d(t,"b",(function(){return A})),a.d(t,"e",(function(){return G})),a.d(t,"f",(function(){return z})),a.d(t,"g",(function(){return B})),a.d(t,"d",(function(){return K}));var n=a(0),i=a.n(n),r=a(3),l=a(1898),o=a(9);const c=Object(r.c)(o.a)`
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  box-sizing: border-box;
`,s=Object(r.c)(l.a)`
  bottom: -1px;
`;var d=({isLoading:e,children:t,...a})=>i.a.createElement(c,Object.assign({},a,{flex:"none",className:"base-control-panel",position:"relative",alignItems:"center",justifyContent:"space-between",height:50}),t,i.a.createElement(s,{isLoading:e,placement:"bottom"})),m=a(2),u=a(5),b=a(18);const p=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen};var O=a(868),h=a(2382),E=a(2894),g=a(2877),f=a(577),v=a(2823);const j=Object(r.c)(v.a)`
  padding: 24px;
`;var T=({columns:e,columnLabels:t,tableType:a})=>{var r;const l=Object(u.useDispatch)(),o=(null===(r=Object(u.useSelector)(Object(b.I)(a)))||void 0===r?void 0:r.initialColumns)||[],c=Object(n.useMemo)(()=>Object.values(e).every(e=>o.includes(e)),[o]),s=Object(n.useCallback)(()=>{const t=c||(null==o?void 0:o.length)?[]:Object.values(e);l(Object(b.S)(a,{initialColumns:t},!0))},[l,c,a,o]),d=Object(n.useMemo)(()=>[{full:!0,id:"showAllFields",checked:c||!!(null==o?void 0:o.length)&&"mixed",children:i.a.createElement(m.c,{id:"COMMON_COLUMN_VISIBILITY_SHOW_ALL_FIELD"}),onChange:s}].concat(Object.values(e).map(e=>({full:!0,id:e,checked:o.includes(e),children:(null==t?void 0:t[e])?i.a.createElement(m.b,{id:t[e]}):e,onChange:({target:{checked:t}})=>{const n=t?[...o,e]:o.filter(t=>t!==e);l(Object(b.S)(a,{initialColumns:n},!0))}}))),[o,a]);return i.a.createElement(j,{spacing:"flush",items:d,variant:"list"})};const y=Object(r.c)(h.a)`
  width: 258px !important;
`;var x;!function(e){e.COLUMNS="columns",e.FILTERS="filters"}(x||(x={}));var S=({filterTitleLabel:e,isOpen:t,onClose:a,columnTabProps:r,renderFilterDrawerContent:l,footerProps:o})=>{var c;const[s,d]=Object(n.useState)(x.FILTERS),{tableType:p}=r||{tableType:null},O=Object(u.useDispatch)(),h=(null===(c=Object(u.useSelector)(Object(b.I)(p)))||void 0===c?void 0:c.initialColumns)||[],v=o&&s===x.COLUMNS,j=Object(n.useMemo)(()=>{var e,t;return v&&Object(f.a)(null===(t=null===(e=null===b.c||void 0===b.c?void 0:b.c.tables)||void 0===e?void 0:e[p])||void 0===t?void 0:t.initialColumns,h)},[v,p,h]),S=Object(n.useCallback)(()=>{var e,t,a;const n=[...null!==(a=null===(t=null===(e=null===b.c||void 0===b.c?void 0:b.c.tables)||void 0===e?void 0:e[p])||void 0===t?void 0:t.initialColumns)&&void 0!==a?a:[]];O(Object(b.S)(p,{initialColumns:n},!0))},[O,p]),w=Object(n.useCallback)(({id:e})=>d(e),[d]),I=r?i.a.createElement(E.a,{onSelectTab:w,tabs:[{id:x.FILTERS,label:i.a.createElement(m.c,{id:"COMMON_CONTROL_PANEL_FILTERS"}),render:l},{id:x.COLUMNS,label:i.a.createElement(m.c,{id:"COMMON_CONTROL_PANEL_COLUMNS"}),render:()=>i.a.createElement(T,{columns:r.columns,columnLabels:r.columnLabels,tableType:p})}]}):l(),C=Object(n.useMemo)(()=>v?{label:i.a.createElement(m.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_COLUMNS"}),onClick:S,disabled:j}:o,[v,o,j,S]),_=Object(n.useCallback)(()=>{a(),d(x.FILTERS)},[a,d]);return i.a.createElement(y,{in:t,renderHeader:()=>null,onClose:a,side:"left"},t&&i.a.createElement(g.a,{footerProps:C,headerProps:{label:e},onClose:_},I))},w=a(42),I=a(23),C=a(786);var _=({items:e,...t})=>{const{params:a,path:n}=Object(I.n)(),r=Object(I.l)(),l=Object(I.k)(),o=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,r);return i.a.createElement(C.a,Object.assign({tabs:e,selectedTab:null==o?void 0:o.id,onSelectTab:({path:e,params:t={}})=>l.push(Object(I.i)(e,{...a,...t}))},t))};const N=Object(r.c)(_)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var L=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...i})=>({id:e,label:t,disabled:"function"==typeof a?a(i):a,path:n})),[e]);return t?i.a.createElement(N,{selectedTabBold:!0,items:t}):null},k=a(2895);const P=Object(r.c)(k.a)`
  padding: 0 8px;
  z-index: 5;
`;var D=({filterTitleLabel:e,filtersActive:t,items:a})=>{const n=Object(u.useDispatch)();return i.a.createElement(o.a,{height:"100%"},i.a.createElement(P,{title:e,onClick:()=>n(Object(O.b)(!0)),filtersActive:t}),a)};const R=Object(r.c)(w.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;var $=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterTitleLabel:r,filtersActive:l,items:c,title:s})=>{const u=(null==e?void 0:e.length)>1,b=!u&&1===e.length;return i.a.createElement(d,{isLoading:a},!t&&i.a.createElement(D,{filterTitleLabel:r,items:c,filtersActive:l}),u&&i.a.createElement(L,{routes:e}),b&&i.a.createElement(R,{weight:"bold"},e[0].label),s&&i.a.createElement(R,{weight:"bold",hideFilterButton:t},i.a.createElement(m.c,{id:s})),i.a.createElement(o.a,{height:"100%",flex:u||s||b?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var M=Object(m.f)(({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:r,filterFooterProps:l,columnTabProps:o,renderFilterDrawerContent:c,filterTitleLabel:s,filtersActive:d,items:m,title:h,onClose:E,intl:g})=>{var f;const v=Object(u.useDispatch)(),j=Object(u.useSelector)(p),T=(null===(f=Object(u.useSelector)(Object(b.I)(null==o?void 0:o.tableType)))||void 0===f?void 0:f.initialColumns)||[],y=g.formatMessage({id:s||"COMMON_CONTROL_PANEL_FILTER_TITLE"});Object(n.useEffect)(()=>()=>{v(Object(O.b)(!1))},[]);const x=Object(n.useCallback)(()=>{v(Object(O.b)(!1)),null==E||E(),(null==o?void 0:o.tableType)&&v(Object(b.S)(o.tableType,{initialColumns:T}))},[v,E,null==o?void 0:o.tableType,T]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{isOpen:j,filterTitleLabel:y,onClose:x,columnTabProps:o,renderFilterDrawerContent:()=>j&&c,footerProps:l}),i.a.createElement($,{routes:e,hideFilterButton:t,isLoading:a,filterTitleLabel:y,filtersActive:d,items:m,title:h},r))}),F=a(168);var A=Object(r.c)(F.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`,W=a(2425);var G=Object(r.c)(W.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var z=Object(r.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`;const Y=r.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,V=r.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function B(e){return i.a.createElement(C.a,Object.assign({className:Y,tabClassName:V},e))}var H=a(1758);const U=Object(r.c)(w.a)`
  line-height: 24px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,X=Object(r.c)("div",{shouldForwardProp:e=>"toggleStyle"!==e})`
  justify-content: space-between;
  margin-top: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginTop)&&void 0!==t?t:8}}px;
  margin-right: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginRight)&&void 0!==t?t:0}}px;
  margin-bottom: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginBottom)&&void 0!==t?t:0}}px;
  margin-left: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginLeft)&&void 0!==t?t:0}}px;
  width: auto !important;

  label {
    margin-left: 0;
  }
`;var K=({checked:e,disabled:t,id:a,onChange:n,text:r,toggleStyle:l})=>i.a.createElement(X,{toggleStyle:l},i.a.createElement(H.a,{checked:e,id:a,onChange:n,disabled:t},"string"==typeof r?i.a.createElement(U,{size:"body"},i.a.createElement(m.c,{id:r})):r))},2870:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(0),r=a.n(i),l=a(23),o=a(14),c=a(40),s=a(606),d=a(7),m=a(32),u=a(183),b=a(232),p=a(18),O=a(184),h=a(600),E=a(4),g=a(577),f=a(2435),v=a(42),j=a(1757),T=a(2823),y=a(168),x=a(2269),S=a(2),w=a(3),I=a(55),C=a(893),_=a(880),N=a(777),L=a(305);const k=Object(w.c)("div")`
  padding: 24px;
`,P=Object(w.c)(v.a)`
  color: ${({theme:e})=>e.motifPalette.text01};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
  display: block;
`,D=()=>{const e=Object(n.useSelector)(p.M),{showAllDevices:t,showWiredClients:a,show2GClients:l,show5GClients:o,showSSID:c,showWifiExperience:s,showRadioChannel:d,showWifiStandards:m,showWiredPorts:u,showWiredSpeed:b}=e,O=Object(n.useSelector)(N.b),h=Object(n.useDispatch)(),E=c&&s&&d&&m&&b&&u,g=a&&l&&o,v=Object(i.useCallback)(t=>{var a,n;const{id:i}=null!==(a=null==t?void 0:t.target)&&void 0!==a?a:{};if("showAllDescriptions"!==i){if(i){const t=null!==(n=e[i])&&void 0!==n?n:C.b.topologyViewSettings[i];h(Object(p.T)(Object.assign({},e,{[i]:!t})))}}else h(Object(p.T)(Object.assign({},e,{showSSID:!E,showWifiExperience:!E,showRadioChannel:!E,showWifiStandards:!E,showWiredSpeed:!E,showWiredPorts:!E})))},[h,e,E]),y=Object(i.useCallback)(({target:{checked:t}})=>{const a=Object.assign({},e,{showWiredClients:t,show2GClients:t,show5GClients:t});h(Object(p.T)(a))},[h,e]);return r.a.createElement(k,null,r.a.createElement(f.d,{checked:t,onChange:v,id:"showAllDevices",text:"TOPOLOGY_FILTER_SHOW_ALL_DEVICES",toggleStyle:{marginTop:4,marginBottom:16}}),r.a.createElement(j.a,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"clients",openByDefault:!0,label:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_CLIENTS"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(f.d,{checked:g,onChange:y,id:"showAllClients",text:"TOPOLOGY_FILTER_SHOW_ALL_CLIENTS",toggleStyle:{marginBottom:16}}),r.a.createElement(T.a,{spacing:"flush",variant:"list",items:[{full:!0,id:"show2GClients",checked:l,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_2G_CLIENTS"}),onChange:v},{full:!0,id:"show5GClients",checked:o,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_5G_CLIENTS"}),onChange:v},{full:!0,id:"showWiredClients",checked:a,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED"}),onChange:v}]}))},{id:"description",label:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_DESCRIPTION"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(f.d,{checked:E,onChange:v,id:"showAllDescriptions",text:"TOPOLOGY_FILTER_SHOW_ALL_DESCRIPTIONS",toggleStyle:{marginBottom:24}}),r.a.createElement(P,{size:"body",weight:"bold"},r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_CAPTION_WIRELESS"})),r.a.createElement(T.a,{spacing:"flush",variant:"list",items:[{full:!0,id:"showSSID",checked:c,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_SSID"}),onChange:v},{full:!0,id:"showWifiExperience",checked:s,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_WIFI_EXPERIENCE"}),onChange:v},{full:!0,id:"showRadioChannel",checked:d,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_RADIO_CHANNEL"}),onChange:v},{full:!0,id:"showWifiStandards",checked:m,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_WIFI_STANDARDS"}),onChange:v}]}),r.a.createElement(P,{size:"body",weight:"bold",style:{marginTop:20}},r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_CAPTION_WIRED"})),r.a.createElement(T.a,{spacing:"flush",variant:"list",items:[{full:!0,id:"showWiredSpeed",checked:b,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED_SPEED"}),onChange:v},{full:!0,id:"showWiredPorts",checked:u,children:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED_PORTS"}),onChange:v}]}))},{id:"status",openByDefault:!1,label:r.a.createElement(S.c,{id:"TOPOLOGY_FILTER_STATUS"}),renderContent:()=>r.a.createElement(T.a,{spacing:"flush",variant:"list",items:Object.values(L.b).map(t=>{var a;return{id:t,full:!0,checked:null!==(a=e[t])&&void 0!==a?a:C.b.topologyViewSettings[t],onChange:v,children:r.a.createElement(S.b,{id:"TOPOLOGY_FILTER_STATUS_"+t.toUpperCase()}),labelProps:{count:O[t]}}})})}]}))},R=Object(w.c)("div")`
  .base-control-panel {
    position: fixed;
    left: 0;
    right: 0;
    background: ${({theme:e})=>e.motifPalette.uiBase};
    z-index: 11;
  }

  @media ${I.a.VIEWPORT_S_UP} {
    .base-control-panel {
      left: 50px;
    }
  }
`,$=({onIoTButtonClick:e})=>{const t=Object(n.useSelector)(_.selectIsFirstIoTNetwork);return Object(n.useSelector)(Object(O.d)(O.a.VISUAL_PROGRAMMING))&&r.a.createElement(y.a,{variant:"link",onClick:e},r.a.createElement(S.c,{id:t?"TOPOLOGY_CREATE_IOT_NETWORK":"TOPOLOGY_MANAGE_IOT_NETWORK"}))},M=({onIoTButtonClick:e})=>Object(c.g)([Object(_.fetchIoTNetwork)(void 0,{crudCacheStrategy:{type:d.a.CACHE}})],r.a.createElement($,{onIoTButtonClick:e}));var F=e=>{const{routes:t}=e,a=x.a.isSafari?R:r.a.Fragment,o=Object(n.useSelector)(p.M),c=Object(n.useSelector)(_.iotNetworkDataSelector),s=Object(n.useDispatch)(),d=Object(l.k)(),m=Object(l.m)(),u=Object(i.useMemo)(()=>Object(g.a)(o,C.b.topologyViewSettings),[o]),b=Object(i.useCallback)(()=>{s(Object(p.T)(C.b.topologyViewSettings))},[s]),O=Object(i.useCallback)(()=>{s(Object(p.j)())},[s]);return r.a.createElement(a,null,r.a.createElement(f.c,{filterTitleLabel:"TOPOLOGY_FILTER_BUTTON_LABEL",isLoading:!1,routes:t,renderFilterDrawerContent:r.a.createElement(D,null),filterFooterProps:{label:r.a.createElement(S.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_DEFAULTS"}),onClick:b,disabled:u},onClose:O,filtersActive:!u},r.a.createElement(M,{onIoTButtonClick:()=>{s(Object(_.copyToIoTForm)(c)),d.push(Object(l.i)(t[0].path,m)+"/iot")}})))},A=a(45),W=a(121),G=a(125);const z=Object(w.c)("h2")`
  color: ${({theme:e})=>e.motifPalette.text01};
  margin: ${({theme:e})=>`${e.spacing["spacing-m"]} 0 ${e.spacing["spacing-xxl"]}`};
  font-size: 24px;
`,Y=Object(w.c)(v.a)`
  color: ${({theme:e})=>e.motifPalette.text01};
  font-size: ${({theme:e})=>e.fontSize["font-size-l2"]};
  line-height: 1.7;
  text-align: center;

  a {
    text-decoration: underline;
  }
`,V=Object(w.c)("div")`
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
`,B=Object(w.c)("div")`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
`,H=Object(w.c)("img")`
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,U=Object(w.c)("a")`
  font-weight: bold;
`,X=Object(w.c)(o.g)`
  margin-top: ${x.a.isSafari?"50px":"0"};
`;var K=()=>{const e=Object(l.k)(),t=Object(c.j)("system"),{motif:a}=Object(A.a)(),s=Object(n.useSelector)(G.a),d=Object(i.useCallback)(()=>e.push(t),[e,t]);return r.a.createElement(X,{flexDirection:"column",alignItems:"center"},r.a.createElement(V,null,r.a.createElement(B,null,r.a.createElement(H,{src:`${s}/topology/NoFloorplans${"light"===a?"Light":"Dark"}.png`,alt:"No floorplan available"}))),r.a.createElement(z,null,r.a.createElement(S.c,{id:"TOPOLOGY_FLOORPLAN_TITLE"})),r.a.createElement(o.g,{marginBottom:16,flexDirection:"column"},r.a.createElement(Y,null,r.a.createElement(S.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_1"})),r.a.createElement(Y,null,r.a.createElement(S.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_2"})),r.a.createElement(Y,null,r.a.createElement(S.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_3"}),r.a.createElement("a",{href:W.a.uiDesign,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(S.c,{id:"TOPOLOGY_FLOORPLAN_DESIGN_URL"})))),r.a.createElement(o.g,{marginBottom:16},r.a.createElement(y.a,{variant:"primary",onClick:d,motif:"dark"},r.a.createElement(S.c,{id:"TOPOLOGY_FLOORPLAN_SETTINGS_LINK"}))),r.a.createElement(o.g,null,r.a.createElement(U,{href:W.a.uiDesign,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(S.c,{id:"TOPOLOGY_FLOORPLAN_VISIT_LINK"}))))},Z=a(2787),J=a(2818),Q=a(1860),q=a(2376),ee=a(898),te=a(158),ae=a(1797),ne=a(885);const ie=(e,t)=>{const a=t.find(t=>t.downlinkMac===e);return null==a?void 0:a.uplinkMac},re=e=>({id:"invisibleNodeName",name:"invisibleNodeName",mac:"invisibleNodeMac",type:"invisibleNodeType",parentMac:void 0,children:e.map(e=>({...e,parentMac:"invisibleNodeMac"}))}),le=(e,t,a,n,i,r,l,o,c,s)=>{if(t&&a&&i&&r&&l&&o&&c&&s)return e;const{edges:d,vertices:m}=e,[u,b,p]=(e=>e.reduce((e,{type:t,radioBand:a,downlinkMac:n})=>(t===ne.a.WIRELESS?(a===ne.b.GHZ2&&e[0].add(n),a===ne.b.GHZ5&&e[1].add(n)):e[2].add(n),e),[new Set,new Set,new Set]))(d),O=e=>n?!("DEVICE"===(null==e?void 0:e.type)||(null==e?void 0:e.unifiDevice)):"CLIENT"===e.type,h=m.filter(e=>"invisibleNode"===e.type||r&&(e=>{const{deviceState:t}=e;return t===E.DeviceState.CONNECTED||t===E.DeviceState.UPGRADING||t===E.DeviceState.PROVISIONING||t===E.DeviceState.ADOPTING||t===E.DeviceState.DELETING||t===E.DeviceState.RESTARTING||t===E.DeviceState.RFSCANNING||t===E.DeviceState.HEARTBEAT_MISSED})(e)||l&&(e=>{const{deviceState:t}=e;return t===E.DeviceState.DISCONNECTED||t===E.DeviceState.INFORM_ERROR})(e)||o&&(e=>{const{deviceState:t}=e;return t===E.DeviceState.MANAGED_BY_OTHER})(e)||c&&(e=>{const{deviceState:t}=e;return t===E.DeviceState.PENDING||t===E.DeviceState.ADOPTION_REQUIRED||t===E.DeviceState.ADOPTION_FAILED||t===E.DeviceState.FIRMWARE_MISMATCH})(e)||s&&(e=>{const{deviceState:t}=e;return t===E.DeviceState.ISOLATED})(e)||O(e)&&i&&p.has(e.mac)||O(e)&&t&&u.has(e.mac)||O(e)&&a&&b.has(e.mac));return{...e,vertices:h}},oe=()=>Object(l.l)().pathname.endsWith("iot");var ce=a(2845),se=a(2817),de=a(2846),me=a(2844),ue=a(1873),be=a(1220),pe=a(2897),Oe=a(888),he=a(57),Ee=a(39),ge=a(88),fe=a(568),ve=a(26),je=a(10),Te=a(70),ye=a(294),xe=a(92);const Se=Object(w.c)(xe.c,{shouldForwardProp:e=>"isIoTMode"!==e})`
  user-select: none;
  display: block;
  height: ${50}px;
  width: ${120}px;
  object-fit: contain;
  margin: 0 auto;
  opacity: ${({isIoTMode:e})=>e?.55:1};
`,we=Object(w.c)(Se,{shouldForwardProp:e=>"motif"!==e})`
  /*Dark theme we want black, light theme we want white background*/
  filter: ${({motif:e})=>"dark"===e?"brightness(0)":"brightness(100)"};
  position: absolute;
`,Ie=Object(w.c)(ye.a)`
  // !important needed to override default styling of fallback images
  user-select: none;
  display: block;
  height: ${50}px !important;
  width: ${120}px !important;
  object-fit: contain !important;
  margin: 0 auto !important;
  padding: 0 !important;
`,Ce=Object(w.c)(Ie,{shouldForwardProp:e=>"motif"!==e})`
  /*Dark theme we want black, light theme we want white background*/
  filter: ${({motif:e})=>"dark"===e?"brightness(0)":"brightness(100)"};
  position: absolute;
`,_e=Object(w.c)("div")`
  position: fixed;
`,Ne=Object(w.c)("text",{shouldForwardProp:e=>"isHovered"!==e})`
  transition: none !important;
  fill: ${({theme:e,isHovered:t})=>t?e.motifPalette.text02+" !important":e.motifPalette.uBlue06};
`,Le={pointerEvents:"auto",opacity:.55},ke=({nodeData:e})=>{const{data:t}=e,{unifiDevice:a,allowedInVisualProgramming:i}=t,l=oe(),o=Object(n.useSelector)(Object(m.selectClientData)(t.mac)),{motif:c}=Object(A.a)();return!l||i||a?r.a.createElement(Ie,{grid:!0,client:o}):r.a.createElement(fe.a,{portal:!0,position:"top",width:248,isHoverable:!0,isInteractive:!0,message:r.a.createElement(v.a,null,r.a.createElement(S.b,{id:"TOPOLOGY_IOT_CONNECT_DEVICE_TO_USW",values:{link:W.a.iotUswClients}}))},r.a.createElement(_e,null,r.a.createElement(Ce,{grid:!0,client:o,motif:c}),r.a.createElement(Ie,{grid:!0,client:o,style:Le})))},Pe=r.a.memo(({data:e,isIoTMode:t})=>{var a,n,i;const{motif:l}=Object(A.a)();return t?r.a.createElement(_e,{style:{transform:"translate(0, 0) scale(var(--d3-zoom-scale))",transformOrigin:"top left"}},r.a.createElement(we,{motif:l,filesMap:"TOPOLOGY",device:{model:e.model,type:null===(a=ge.deviceModels[e.model])||void 0===a?void 0:a.type}}),r.a.createElement(Se,{filesMap:"TOPOLOGY",device:{model:e.model,type:null===(n=ge.deviceModels[e.model])||void 0===n?void 0:n.type},isIoTMode:t})):r.a.createElement(Se,{filesMap:"TOPOLOGY",device:{model:e.model,type:null===(i=ge.deviceModels[e.model])||void 0===i?void 0:i.type},isIoTMode:t})},(e,t)=>e.isIoTMode===t.isIoTMode&&e.data.model===t.data.model),De=({nodeData:e,isIoTMode:t})=>{const{data:a}=e;return"DEVICE"===a.type?r.a.createElement(Pe,{data:a,isIoTMode:t}):r.a.createElement(ke,{nodeData:e})},Re=Object(w.c)(o.g,{shouldForwardProp:e=>"disableInteraction"!==e})`
  /* Helps with safari bug*/
  position: fixed;
  white-space: nowrap;
  transform: translate(-50%, -100%) scale(var(--d3-zoom-scale));
  transform-origin: bottom center;
  color: ${({theme:e,disableInteraction:t})=>t?e.motifPalette.neutral04:e.motifPalette.neutral07};

  .text-content {
    color: ${({theme:e,disableInteraction:t})=>t?e.motifPalette.neutral04:e.motifPalette.neutral07};
  }
`,$e={transition:"opacity 100ms cubic-bezier(0.65, 0, 0.35, 1), transform 100ms cubic-bezier(0.65, 0, 0.35, 1)",opacity:0,visibility:"hidden"},Me={exiting:{opacity:0,visibility:"initial"},entering:{opacity:1,visibility:"initial"},entered:{opacity:1,visibility:"initial"}},Fe=({wifiRadios:e,isVisible:t,disableInteraction:a})=>r.a.createElement(be.a,{in:t,unmountOnExit:!0,timeout:100},t=>{const n={...$e,...Me[t]};return r.a.createElement("foreignObject",{x:0,y:-33,width:"1",height:"1",style:{overflow:"visible",...n}},r.a.createElement(Re,{alignItems:"center",center:!0,disableInteraction:a},r.a.createElement(je.Nb,{size:"small"}),r.a.createElement(v.a,{style:{marginLeft:4},className:"text-content"},e.map(({protocol:e,channel:t})=>`${t} (${e.toUpperCase()})`).join(", "))))}),Ae=Object(w.c)("g",{shouldForwardProp:e=>"disableInteraction"!==e})`
  pointer-events: none;
  user-select: none;
  cursor: pointer;

  text {
    fill: ${({theme:e,disableInteraction:t})=>t?e.motifPalette.text04:e.motifPalette.uBlue06};
    transition: fill 0.2s linear;
    font-weight: bold;
  }
`,We=Object(w.c)("text",{shouldForwardProp:e=>"experienceState"!==e&&"disableInteraction"!==e})`
  fill: ${({theme:e,experienceState:t,disableInteraction:a})=>a?e.motifPalette.text04:ve.a["color-"+t]} !important;
`;function Ge(e,t=!1){var a,n;const{x:i,y:r,parent:l}=e;if(t){const e=null!==(a=null==l?void 0:l.x)&&void 0!==a?a:0;return`translate(${null!==(n=null==l?void 0:l.y)&&void 0!==n?n:0},${e})`}return`translate(${r},${i})`}const ze=Object(w.c)("g")`
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    filter: drop-shadow(0px 4.4px 4.4px rgba(0, 0, 0, 0.25));
    transform: translateX(-8px) scale(1.1, 1.1);
  }
`,Ye=Object(w.c)("circle")`
  fill: ${({theme:e})=>e.motifPalette.uBlue06};
`,Ve=Object(w.c)("line")`
  stroke: ${({theme:e})=>e.motifPalette.uBlue06};
  stroke-width: 0.6;
  fill: none;
  pointer-events: none;
`,Be=({collapsedNodes:e,data:t,multiUplinkWidth:a,handleChildrenToggle:n})=>{const i=((e,t)=>t.has(e))(t.mac,e)?je.Eb:je.lb;return r.a.createElement("g",null,r.a.createElement(Ve,{x1:0,y1:0,x2:60+a+-4.5,y2:0}),r.a.createElement(ze,{onClick:e=>n(t.id,e)},r.a.createElement(Ye,{cx:60+a,cy:0,r:10}),r.a.createElement(i,{className:"toggle-icon",x:60+a+-4.5,y:-4.5,fill:"white",width:9,height:9})))},He=({percentage:e,isVisible:t,disableInteraction:a})=>r.a.createElement(be.a,{in:t,unmountOnExit:!0,timeout:100},t=>{const n={...$e,...Me[t]};return r.a.createElement(We,{style:n,y:58.5,textAnchor:"middle",disableInteraction:a,experienceState:Object(Te.c)(e)},e," %")}),Ue=({isHovered:e,data:t,multiUplinkWidth:a})=>{const n=Object(i.useRef)(null),l=t.name||t.mac,o=120+2*a;return Object(i.useEffect)(()=>{if(n.current){const e=n.current;let t=e.getComputedTextLength(),a=l.length,i=l;const r=3;let c=100;for(;t>o&&c>0&&i.length>0&&Math.abs(o-t)>r;)i=t>=o?i.slice(0,.15*-a):l.slice(0,1.15*a),e.textContent=i+"...",t=e.getComputedTextLength(),a=i.length,c--}},[l,o]),r.a.createElement(Ne,{innerRef:n,y:42.5,textAnchor:"middle",isHovered:e},l)};var Xe=({nodeData:e,experienceScore:t,handleChildrenToggle:a,handleNodeClick:l,transitionDuration:o,labelWidth:c,collapsedNodes:s,setHoveredNode:d,hoveredNode:m,isIoTMode:u,...b})=>{var O,h,E;const[g]=Object(i.useState)(Ge(e,!0)),[f]=Object(i.useState)({opacity:0}),v=Object(i.useRef)(null),j=Object(i.useRef)(!0),T=Object(i.useRef)(!0),{showWifiExperience:y,showRadioChannel:x}=Object(n.useSelector)(p.M),{x:S,y:w}=e,I=(null===(h=null===(O=null==e?void 0:e.data)||void 0===O?void 0:O.internalChildren)||void 0===h?void 0:h.length)>0,C=e.data.id===m,N=c>0?32:16,L=u&&!(null===(E=e.data)||void 0===E?void 0:E.allowedInVisualProgramming),k=Object(n.useSelector)(Object(_.selectIsIoTNodeSelected)(e.data.mac)),P=(e,t,a=1)=>{Object(me.a)(v.current).transition().duration(t).attr("transform",e).style("opacity",a).on("end",()=>{T.current=!1})};Object(i.useEffect)(()=>{j.current?j.current=!1:P(`translate(${w},${S})`,o,1)},[S,w,o]);return"invisibleNodeType"===e.data.type?null:r.a.createElement(be.a,Object.assign({},b,{timeout:{enter:o,exit:o},onExit:()=>{((e,t)=>{const a=Ge(e,!0);P(a,t,0)})(e,o)},onEnter:()=>{((e,t)=>{const a=Ge(e);P(a,t,1)})(e,o)},unmountOnExit:!0,mountOnEnter:!0}),r.a.createElement("g",{id:e.data.id,ref:v,style:f,transform:g},r.a.createElement(Fe,{disableInteraction:L,wifiRadios:e.data.wifiRadios,isVisible:e.data.wifiRadios&&x&&!C}),I&&r.a.createElement(Be,{handleChildrenToggle:a,multiUplinkWidth:N,data:e.data,collapsedNodes:s}),r.a.createElement("foreignObject",{width:120,height:50,x:-60,y:-25,style:{overflow:"visible",pointerEvents:"none",display:"block"}},r.a.createElement(De,{nodeData:e,isIoTMode:u})),r.a.createElement(Ae,{onClick:()=>l(e),disableInteraction:L},r.a.createElement(Ue,{data:e.data,isHovered:C,multiUplinkWidth:N}),r.a.createElement(He,{percentage:t,disableInteraction:L,isVisible:t&&y&&!C&&!k}))))},Ke=a(176);const Ze=Object(w.c)("path")`
  stroke: ${e=>(({type:e,radioBand:t})=>e===ne.a.WIRELESS&&t===ne.b.GHZ2?ve.a["blue-light-4"]:ve.a["blue-3"])(e)};
  stroke-width: 0.5;
  fill: none;
  pointer-events: none;
  stroke-dasharray: ${({type:e})=>e===ne.a.WIRELESS?5:0};
`,Je=Object(w.c)("span")`
  line-height: 20px;
  color: ${({theme:e})=>e.motifPalette.text03};
`,Qe=Object(w.c)("div")`
  user-select: none;
  align-items: center;
  white-space: nowrap;
  display: inline-flex;
  // This is to help with foreignObject issues in Safari. Without "fixed", the objects will
  // move to the top left of the page. We need the static positioning for LabelCalipers
  // component to measure correctly the label width before layouting the tree.
  position: ${({measuring:e})=>e?"static":"fixed"};
  color: ${({theme:e})=>e.motifPalette.neutral07};
`,qe=Object(w.c)(je.hc)`
  path {
    fill: ${({theme:e})=>e.motifPalette.neutral07} !important;
  }
`,et={transition:"opacity 200ms cubic-bezier(0.65, 0, 0.35, 1), transform 200ms cubic-bezier(0.65, 0, 0.35, 1)",opacity:0,visibility:"hidden"},tt={exiting:{opacity:0,visibility:"initial"},entering:{opacity:1,visibility:"initial"},entered:{opacity:1,visibility:"initial"}},at=({transform:e,children:t,isVisible:a})=>r.a.createElement(be.a,{in:!!a,timeout:200,unmountOnExit:!0},a=>{const n={...et,...tt[a]};return r.a.createElement("g",{transform:e,style:n,pointerEvents:"none"},r.a.createElement("foreignObject",{x:0,y:0,width:"1",height:"1",style:{overflow:"visible"}},t))}),nt=({protocol:e})=>{if(!(e=>e===ne.c.A||e===ne.c.B||e===ne.c.G)(e)){if(e===ne.c.NA||e===ne.c.NG)return r.a.createElement(je.xc,{size:"small"});if(e===ne.c.AC||e===ne.c.AD)return r.a.createElement(je.yc,{size:"small"});if(e===ne.c.AX)return r.a.createElement(je.zc,{size:"small"})}return null},it=({networkData:e,measuring:t=!1})=>{const{protocol:a}=e;return r.a.createElement(Qe,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:t},r.a.createElement(nt,{protocol:a}),r.a.createElement(Je,{style:{marginLeft:4}},a.toUpperCase()))},rt=({networkData:e,target:t,isVisible:a})=>r.a.createElement(at,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:a},e.protocol&&r.a.createElement(it,{networkData:e})),lt=({essid:e,measuring:t=!1})=>{const a=e.length>14?e.substring(0,12).concat("..."):e;return r.a.createElement(Qe,{style:{transform:"translate(-100%,0) scale(var(--d3-zoom-scale))",paddingLeft:16,transformOrigin:"right top"},measuring:t},r.a.createElement(je.Bc,null),r.a.createElement(Je,{style:{marginLeft:4}},a))},ot=({essid:e,target:t,isVisible:a})=>r.a.createElement(at,{transform:`translate(${t.y-60-16}, ${t.x+8})`,isVisible:a},e&&r.a.createElement(lt,{essid:e})),ct=({uplinkPortNumber:e,style:t,measuring:a=!1})=>{const n=null==t?void 0:t.transform;return r.a.createElement(Qe,{style:{...t,transform:n+" scale(var(--d3-zoom-scale))"},measuring:a},r.a.createElement(je.i,{size:"small"}),r.a.createElement(je.K,{size:"small",style:{marginLeft:4,marginRight:4}}),r.a.createElement(Je,null,e))},st=({downlinkPortNumber:e,measuring:t=!1})=>r.a.createElement(Qe,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:t},r.a.createElement(je.j,{size:"small"}),r.a.createElement(je.K,{size:"small",style:{marginLeft:4,marginRight:4}}),r.a.createElement(Je,null,e)),dt=({downlinkPortNumber:e,uplinkPortNumber:t,measuring:a=!1})=>r.a.createElement(Qe,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:a},r.a.createElement(je.i,{size:"small"}),r.a.createElement(je.K,{size:"small",style:{marginLeft:4,marginRight:4}}),r.a.createElement(Je,null,t),r.a.createElement(je.j,{size:"small",style:{marginLeft:10}}),r.a.createElement(je.K,{size:"small",style:{marginLeft:4,marginRight:4}}),r.a.createElement(Je,null,e)),mt=({measuring:e=!1})=>null,ut=({rateMbps:e,measuring:t=!1})=>r.a.createElement(Qe,{style:{transform:"translate(-100%,0) scale(var(--d3-zoom-scale))",paddingRight:16,transformOrigin:"right top"},measuring:t},r.a.createElement(qe,{size:"small"}),r.a.createElement(Je,{style:{marginLeft:4}},Object(Ke.c)(e))),bt=({target:e,rateMbps:t,isVisible:a})=>r.a.createElement(at,{transform:`translate(${e.y-60}, ${e.x+8})`,isVisible:a},r.a.createElement(ut,{rateMbps:t})),pt=({target:e,downlinkPortNumber:t,isVisible:a})=>r.a.createElement(at,{transform:`translate(${e.y-60-16}, ${e.x-8})`,isVisible:a},r.a.createElement(st,{downlinkPortNumber:t})),Ot=({source:e,target:t,networkData:a,isVisible:n})=>{var i;const{uplinkPortNumber:l}=a;if((null===(i=null==e?void 0:e.children)||void 0===i?void 0:i.length)>1){const i=a.downlinkMac===e.children[0].data.mac;return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(at,{transform:`translate(${e.y+60}, ${e.x-8})`,isVisible:n},r.a.createElement(mt,null)),r.a.createElement(at,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:n},r.a.createElement(ct,{uplinkPortNumber:l,style:{transform:"translate(-100%,-100%)",transformOrigin:"bottom right"}})))}return r.a.createElement(at,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:n},r.a.createElement(ct,{uplinkPortNumber:l,style:{transform:"translate(0,-100%)",transformOrigin:"bottom left"}}))},ht=(e,t)=>e.data.id===t,Et=({source:e,target:t,networkData:a,isVisible:n,hoveredNode:i})=>{var l;const{uplinkPortNumber:o,downlinkPortNumber:c}=a;if((null===(l=null==e?void 0:e.children)||void 0===l?void 0:l.length)>1){const l=a.downlinkMac===e.children[0].data.mac;return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(at,{transform:`translate(${e.y+60}, ${e.x-8})`,isVisible:n&&!ht(e,i)},r.a.createElement(mt,null)),r.a.createElement(at,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:n&&!ht(t,i)},r.a.createElement(dt,{downlinkPortNumber:c,uplinkPortNumber:o})))}return r.a.createElement(at,{isVisible:n&&!ht(t,i),transform:`translate(${t.y-60-16}, ${t.x-8})`},r.a.createElement(dt,{downlinkPortNumber:c,uplinkPortNumber:o}))},gt=({source:e,target:t,networkData:a,hoveredNode:i})=>{const{downlinkPortNumber:l,uplinkPortNumber:o,rateMbps:c}=a,{showWiredSpeed:s,showWiredPorts:d}=Object(n.useSelector)(p.M),m=Object(n.useSelector)(Object(_.selectIsIoTNodeSelected)(t.data.mac));return l&&o?r.a.createElement(r.a.Fragment,null,r.a.createElement(Et,{source:e,target:t,networkData:a,isVisible:d&&!m,hoveredNode:i}),r.a.createElement(bt,{rateMbps:c,target:t,isVisible:c&&s&&!m&&!ht(t,i)})):o?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{source:e,target:t,networkData:a,isVisible:d&&!m&&!ht(t,i)}),r.a.createElement(bt,{rateMbps:c,target:t,isVisible:c&&s&&!m&&!ht(t,i)})):l?r.a.createElement(r.a.Fragment,null,r.a.createElement(pt,{target:t,downlinkPortNumber:l,isVisible:d&&!m&&!ht(t,i)}),r.a.createElement(bt,{rateMbps:c,target:t,isVisible:c&&!m&&s&&!ht(t,i)})):null},ft=({networkData:e,target:t,hoveredNode:a})=>{const{essid:i,type:l,channel:o}=e,{showSSID:c,showWifiStandards:s}=Object(n.useSelector)(p.M),d=l===ne.a.WIRELESS,m=Object(n.useSelector)(Object(_.selectIsIoTNodeSelected)(t.data.mac));return r.a.createElement(r.a.Fragment,null,r.a.createElement(rt,{networkData:e,target:t,isVisible:!(!d||!s||m||!o||ht(t,a))}),r.a.createElement(ot,{essid:i,target:t,isVisible:!(!(d&&c&&i)||m||ht(t,a))}))},vt=(e,t,a,n,i)=>{const r=n-t,l=60+(i>0?32:16),o=60+i;return t!==n?`M ${t} ${e}\n          L ${t+l} ${e}\n          C ${t+l+.2*r} ${e},\n            ${n-o-.2*r} ${a},\n            ${n-o} ${a}\n          L ${n} ${a}`:`M ${t} ${e}\n          L ${t} ${e}\n          C ${t} ${e},\n            ${n} ${a},\n            ${n} ${a}\n          L ${n} ${a}`},jt=Object(w.c)("g")`
  opacity: 0;
  pointer-events: none;
`;var Tt=({transitionDuration:e,linkData:t,networkData:a,labelWidth:n,nextNodeListRef:l,prevNodeListRef:o,hoveredNode:c,...s})=>{const d=Object(i.useRef)(null),m=Object(i.useRef)(null),u=Object(i.useRef)(!0),{source:b,target:p}=t;return Object(i.useEffect)(()=>{u.current?u.current=!1:Object(me.a)(m.current).transition().duration(e).attr("d",()=>vt(b.x,b.y,p.x,p.y,n))},[n,b.x,b.y,p.x,p.y,e]),r.a.createElement(be.a,Object.assign({},s,{timeout:{enter:e,exit:e},onExit:()=>{var t;const a=(null===(t=null==l?void 0:l.current)||void 0===t?void 0:t.find(e=>e.data.mac===b.data.mac))||b;Object(me.a)(d.current).transition().duration(e).style("opacity",0),Object(me.a)(m.current).transition().duration(e).attr("d",()=>vt(a.x,a.y,a.x,a.y,n))},onEnter:()=>{var t;const a=(null===(t=null==o?void 0:o.current)||void 0===t?void 0:t.find(e=>e.data.mac===b.data.mac))||b;Object(me.a)(d.current).transition().duration(e).style("opacity",1),Object(me.a)(m.current).attr("d",vt(a.x,a.y,a.x,a.y,n)).transition().duration(e).attr("d",()=>vt(b.x,b.y,p.x,p.y,n))}}),r.a.createElement(jt,{innerRef:d},r.a.createElement(Ze,{innerRef:m,type:a.type,radioBand:a.radioBand}),r.a.createElement(gt,{source:b,target:p,networkData:a,hoveredNode:c}),r.a.createElement(ft,{target:p,networkData:a,hoveredNode:c})))};const yt=Object(w.c)("div")`
  position: fixed;
  bottom: 36px;
  margin-left: 32px;

  .fitToScreenButton {
    border-radius: 4px;

    &:hover {
      box-shadow: 0px 4px 12px 0px rgb(0 0 0 / 15%);
    }
  }

  Button {
    border: 1px solid ${({theme:e})=>e.motifPalette.neutral04};
    width: 36px;
    height: 36px;
    color: ${({theme:e})=>e.motifPalette.neutral08};
    background: ${({theme:e})=>e.motifPalette.neutral00};
    transition: box-shadow 0.2s linear;

    &:focus {
      color: ${({theme:e})=>e.motifPalette.neutral10};
    }

    &:hover {
      box-shadow: 0px 4px 12px 0px rgb(0 0 0 / 15%);
    }
  }

  .plus Button {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .customGroup {
    border-radius: 4px;
    margin-top: 16px;
    position: relative;

    &:hover {
      //box-shadow: 0px 4px 12px 0px rgb(0 0 0 / 15%);

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        transform: translateY(-1px);
      }
    }
  }

  .minus Button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  }
`;var xt=({onZoomInClick:e,onZoomOutClick:t,onResetZoomClick:a})=>r.a.createElement(yt,null,r.a.createElement(y.a,{variant:"tertiary",Icon:je.U,wrapClassName:"fitToScreenButton",onClick:a}),r.a.createElement("div",{className:"customGroup"},r.a.createElement(y.a,{variant:"tertiary",Icon:je.Fb,wrapClassName:"plus",onClick:e}),r.a.createElement(y.a,{variant:"tertiary",Icon:je.mb,wrapClassName:"minus",onClick:t})));const St=(e,t)=>"dark"===e?t.motifPalette.uBlue09:t.motifPalette.uBlue01,wt=["isHovered","motif","disableInteraction","isSelected"],It=Object(w.c)("rect",{shouldForwardProp:e=>wt.indexOf(e)<0})`
  pointer-events: ${({disableInteraction:e})=>e?"none":"auto"};
  cursor: pointer;
  fill: ${({theme:e,isHovered:t,motif:a,isSelected:n})=>n||t?St(a,e):"transparent"};
  stroke: ${({theme:e,isSelected:t})=>t?e.motifPalette.uBlue06:"none"};
  stroke-width: 0.5;

  &:hover {
    fill: ${({theme:e,motif:t})=>St(t,e)};
  }
`;var Ct=({nodeData:e,labelWidth:t,transitionDuration:a,handleNodeClick:l,handleChildrenToggle:o,setHoveredNode:c,hoveredNode:s,isIoTMode:d,...m})=>{var u,b,p;const[O]=Object(i.useState)(Ge(e,!0)),[h]=Object(i.useState)({opacity:0}),E=Object(i.useRef)(null),g=d&&!(null===(u=e.data)||void 0===u?void 0:u.allowedInVisualProgramming),f=Object(i.useRef)(!0),v=Object(i.useRef)(!0),{motif:j}=Object(A.a)(),T=Object(n.useSelector)(Object(_.selectIsIoTNodeSelected)(e.data.mac)),y=e.data.id===s,{x:x,y:S}=e,w=(e,t,a=1)=>{Object(me.a)(E.current).transition().duration(t).attr("transform",e).style("opacity",a).on("end",()=>{v.current=!1})};Object(i.useEffect)(()=>{f.current?f.current=!1:w(`translate(${S},${x})`,a,1)},[x,S,a]);const I=(null===(p=null===(b=null==e?void 0:e.data)||void 0===b?void 0:b.internalChildren)||void 0===p?void 0:p.length)>0;if("invisibleNodeType"===e.data.type)return null;const C=t>0?32:16;return r.a.createElement(be.a,Object.assign({},m,{timeout:{enter:a,exit:a},onExit:()=>{((e,t)=>{const a=Ge(e,!0);w(a,t,0)})(e,a)},onEnter:()=>{((e,t)=>{const a=Ge(e);w(a,t,1)})(e,a)},unmountOnExit:!0,mountOnEnter:!0}),r.a.createElement("g",{id:e.data.id,ref:E,style:h,transform:O,onMouseEnter:()=>c(e.data.id),onMouseLeave:e=>{c(null)}},r.a.createElement(It,{motif:j,onClick:()=>l(e),width:120+2*C,height:102,x:-60-C,y:-51,rx:6,isSelected:d&&T,disableInteraction:g,isHovered:y,onMouseOver:()=>c(e.data.id)}),I&&r.a.createElement("circle",{style:{cursor:"pointer"},cx:60+C,cy:0,r:10,onClick:t=>o(e.data.id,t)})))};const _t=Object(w.c)("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .grab-cursor-wrapper {
    pointer-events: bounding-box;
    cursor: grab !important;

    &:active {
      cursor: grabbing !important;
    }
  }
  /* d3-zoom-scale is used in safari to correctly scale transformed nodes
    inside foreignObject */
  .${"topology-svg-container"} {
    --d3-zoom-scale: 1;
  }
`,Nt=[.3,1],Lt=[.3,2.5],kt=(e,t,a,n,i=Lt)=>{const r=(e=>{const t=e.length-1;return"invisibleNodeType"===e[0].data.type||"invisibleNodeType"===e[t].data.type})(a)?n:0,l=a.reduce((e,t)=>("invisibleNodeType"===t.data.type||(e.minX=Math.min(e.minX,t.x),e.maxX=Math.max(e.maxX,t.x),e.minY=Math.min(e.minY,t.y),e.maxY=Math.max(e.maxY,t.y)),e),{minX:0,maxX:0,minY:0,maxY:0}),o=l.maxX-l.minX+50+45,c=l.maxY-l.minY+120-r,s=Object(Oe.a)().range(i).domain(i).clamp(!0);let d=Math.min(t/o,e/c);d=s(.8*d);return{x:(e-(l.maxY+r)*d)/2,y:Math.max(0,t/2-(l.minX+(o-50)/2)*d),k:d}},Pt=e=>(Array.isArray(e)?e:[e]).map(e=>(e.id=e.mac,(null==e?void 0:e.children)&&e.children.length>0&&(e.children=Pt(e.children),e.internalChildren=e.children),e)),Dt=(e,t)=>Object(se.a)().scaleExtent([e.min,e.max]).on("zoom",t).filter(e=>!e.button&&"dblclick"!==e.type),Rt=e=>{const t=e.attr("stroke");e.attr("stroke","rgba(0,0,0,0)"===t?"rgba(255,255,255,0)":"rgba(0,0,0,0)"),Object(de.a)("nav").style("stroke","rgba(0,0,0,0)"===t?"rgba(255,255,255,0)":"rgba(0,0,0,0)")},$t=(e,t)=>{e.style("--d3-zoom-scale",t.toString())},Mt=(e,t,a)=>Math.min(Math.max(e,t),a),Ft=(e,t,a)=>{const n=""+a.current,i=""+t;e.current.transition("zoom-out").styleTween("--d3-zoom-scale",()=>Object(ue.a)(n,i)).call(()=>Rt(e.current))},At=e=>({transition:`all ${e}ms cubic-bezier(0.25, 0, 0.25, 1)`,opacity:0,position:"absolute",left:"-50px"}),Wt={entered:{opacity:1,left:0}};var Gt=e=>{const{data:t,containerSize:a,nodeSize:o,transform:c,scaleExtent:s,labelWidth:d}=e,m=Object(i.useRef)(!0),u=Object(i.useRef)(!1),b=Object(n.useSelector)(p.M),{showAllDevices:O,show2GClients:h,show5GClients:E,showWiredClients:g,online:f,offline:v,isolated:j,pending_adoption:T,managed_by_another_console:y}=b,S=(({showSSID:e,showWifiExperience:t,showRadioChannel:a,showWifiStandards:n,showWiredSpeed:i})=>e&&t&&a&&n&&i)(b),w=Object(i.useRef)(!1),I=Object(i.useRef)(c),C=Object(i.useRef)(),N=Object(n.useDispatch)(),L=Object(l.k)(),{site:k}=Object(l.m)(),{width:P,height:D}=a,{isSafari:R}=x.a,$=Object(i.useRef)(null),[M,F]=Object(i.useState)(()=>new Set),[A,W]=Object(i.useState)(!1),[G,z]=Object(i.useState)(null),Y=oe(),V=Object(i.useRef)(t);V.current=t,Object(i.useEffect)(()=>{O?(w.current=!0,F(new Set)):F(e=>{if(null==e?void 0:e.size)return e;const t=new Set;let a=0;return function e(n){var i,r;a>50||(a+=1,(null===(i=n.children)||void 0===i?void 0:i.length)&&("invisibleNodeMac"!==n.mac&&t.add(n.mac),null===(r=n.children)||void 0===r||r.forEach(e)))}(V.current),w.current=!0,t})},[O]),Object(i.useEffect)(()=>{w.current=!1},[M.size]),Object(i.useEffect)(()=>{w.current||(M.size?b.showAllDevices&&N(Object(p.T)(Object.assign({},b,{showAllDevices:!1}),!0)):b.showAllDevices||N(Object(p.T)(Object.assign({},b,{showAllDevices:!0}),!0)))},[N,b,M.size]);const B=Pt(t),H=Object(i.useRef)(null),U=Object(i.useRef)(null);Object(i.useEffect)(()=>{((e,t,a,n)=>{const{scaleExtent:i,transform:r}=e;t.current=Object(me.a)(".topology-svg-container");const l=Object(me.a)(".topology-g"),o=Dt(i,({transform:e})=>{a&&(Rt(t.current),$t(t.current,e.k)),n.current=e,l.attr("transform",e.toString())});t.current.call(o).call(o.transform,se.b.translate(r.x,r.y).scale(r.k))})(e,C,R,I)},[]);const X=({source:t,target:a})=>{const{edgeData:n}=e;return n.find(e=>e.uplinkMac===t.data.mac&&e.downlinkMac===a.data.mac)},K=({mac:t})=>{var a;const{edgeData:n}=e;return null===(a=n.find(e=>e.downlinkMac===t))||void 0===a?void 0:a.experienceScore},Z=(t,a)=>{const{transitionDuration:n}=e;if(a.persist(),!u.current){if(M.has(t)){const e=new Set(M);e.delete(t),u.current=!0,F(e)}else{const e=new Set(M);e.add(t),u.current=!0,F(e)}setTimeout(()=>{u.current=!1,R&&Rt(C.current)},n+10)}},{nodes:Q,links:q}=(()=>{const{separation:t,nodeSize:a}=e,n=Object(ce.a)().nodeSize([a.y,a.x]).separation((e,a)=>{var n,i;return(null===(n=null==e?void 0:e.parent)||void 0===n?void 0:n.id)===(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.id)?t.siblings:t.nonSiblings})(Object(J.b)(B[0],e=>e.id&&M.has(e.id)?null:e.internalChildren)),i=n.descendants();m.current||(U.current=[...H.current]),H.current=[...i];return{nodes:i,links:n.links().filter(e=>"invisibleNodeMac"!==e.source.data.mac)}})(),{transitionDuration:ee}=e,te=()=>{const t=kt(P,D,Q,o.x),{scaleExtent:a}=e,n=Object(me.a)(".topology-g"),i=Object(me.a)(".topology-svg-container"),r=Dt(a,({transform:e})=>{n.attr("transform",e.toString()),I.current=e});i.transition().call(r.transform,se.b.translate(t.x,t.y).scale(t.k)).on("end",()=>R&&Rt(C.current)),R&&Ft(C,t.k,I)};Object(i.useEffect)(()=>{m.current||te()},[O,h,E,g,f,v,j,T,y,M.size,S]),Object(i.useEffect)(()=>{R&&Rt(C.current)}),function(e,t,a,n){Object(i.useEffect)(()=>{if(x.a.isSafari){const i=Object(me.a)(".topology-g"),r=Object(me.a)(".topology-svg-container"),l=Dt(a,({transform:a})=>{i.attr("transform",a.toString()),$t(e.current,a.k),Rt(e.current),t.current=a}),o=e=>{e.preventDefault();const i=e.scale-n.current;if(n.current&&Math.abs(i)>.085){const o=1+i,c=Mt(t.current.k*o,a.min,a.max);r.call(l.scaleTo,c),n.current=e.scale}},c=e=>{e.preventDefault(),n.current=e.scale},s=e=>{e.preventDefault(),n.current=null};return document.addEventListener("gesturestart",c),document.addEventListener("gesturechange",o),document.addEventListener("gestureend",s),()=>{document.removeEventListener("gesturestart",c),document.removeEventListener("gesturechange",o),document.removeEventListener("gestureend",s)}}return()=>{}},[])}(C,I,s,$);const ae=Object(i.useCallback)(({data:e})=>{const t=(e=>{const{mac:t,internalChildren:a,model:n}=e;if("UBB"!==n&&"UBBXG"!==n)return t;if(a){const e=a.find(e=>"UBB"===e.model);if(e)return e.mac}return t})(e);Y?N(Object(_.toggleClientInIoTList)({mac:t})):(L.push(Object(l.i)("/:site/topology/:section?/:id?/:panel?/:subPanel?",{id:t,section:"properties",site:k,panel:"overview"})),N(Object(Ee.g)({type:"DEVICE"===e.type?he.b.DEVICE:"CLIENT"===e.type?e.unifiDevice?he.b.UNIFI_DEVICE_CLIENT:he.b.CLIENT:void 0,mac:t})))},[N,L,Y,k]);return Object(i.useEffect)(()=>{m.current&&(m.current=!1)}),r.a.createElement(r.a.Fragment,null,r.a.createElement(be.a,{in:!0,appear:!0,timeout:0,addEndListener:()=>W(!0)},e=>r.a.createElement(_t,{style:{...At(ee),...Wt[e]}},r.a.createElement("svg",{className:"topology-svg-container",width:P+"px",height:D+"px",strokeWidth:0,style:{position:"absolute"}},r.a.createElement("rect",{x:0,y:0,width:"100%",height:"100%",fill:"transparent"}),r.a.createElement("g",{className:"topology-g",strokeWidth:0},r.a.createElement(pe.a,{appear:!0,exit:!0,component:null},Q.reverse().map(e=>r.a.createElement(Ct,{isIoTMode:Y,key:e.data.id+"-background",labelWidth:d,transitionDuration:A?ee:0,handleNodeClick:ae,nodeData:e,handleChildrenToggle:Z,hoveredNode:G,setHoveredNode:z}))),r.a.createElement(pe.a,{appear:!0,exit:!0,component:null},q.map(e=>r.a.createElement(Tt,{key:`${e.source.data.id}-${e.target.data.id}`,nextNodeListRef:H,prevNodeListRef:U,linkData:e,networkData:X(e),transitionDuration:A?ee:0,labelWidth:d,hoveredNode:G}))),r.a.createElement(pe.a,{appear:!0,exit:!0,component:null},Q.map(e=>r.a.createElement(Xe,{key:e.data.id,isIoTMode:Y,transitionDuration:A?ee:0,experienceScore:K(e.data),nodeData:e,labelWidth:d,handleChildrenToggle:Z,handleNodeClick:ae,collapsedNodes:M,hoveredNode:G,setHoveredNode:z}))))))),r.a.createElement(xt,{onResetZoomClick:()=>te(),onZoomOutClick:()=>(()=>{const{scaleExtent:t}=e,a=Object(me.a)(".topology-g"),n=Object(me.a)(".topology-svg-container"),i=Dt(t,({transform:e})=>{a.attr("transform",e.toString()),I.current=e});if(n.transition().call(i.scaleBy,.75).on("end",()=>R&&Rt(C.current)),R){const e=Mt(.75*I.current.k,t.min,t.max);Ft(C,e,I)}})(),onZoomInClick:()=>(()=>{const{scaleExtent:t}=e,a=Object(me.a)(".topology-g"),n=Object(me.a)(".topology-svg-container"),i=Dt(t,({transform:e})=>{a.attr("transform",e.toString()),I.current=e});if(n.transition().call(i.scaleBy,1.25),R){const e=Mt(1.25*I.current.k,t.min,t.max);Ft(C,e,I)}})()}))},zt=a(1758),Yt=a(1898),Vt=a(2382);const Bt=Object(w.c)(v.a)`
  max-width: 200px;
`,Ht=Object(w.c)(je.C)`
  margin-right: 8px;
`,Ut=Object(w.c)("div")`
  padding: 4px 0;
  margin-bottom: 8px;
`,Xt=Object(w.c)("div")`
  margin-top: 24px;
  border-bottom: 1px solid #e5e7ec;
`,Kt=()=>r.a.createElement(o.g,{alignItems:"center"},r.a.createElement(Ht,{size:"large"}),r.a.createElement(Bt,{weight:"bold",size:"body"},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_MANAGEMENT"}))),Zt=()=>{const e=Object(n.useSelector)(_.selectIsFirstIoTNetwork),t=Object(n.useSelector)(_.selectIsIoTNetworkEnabled),a=Object(n.useSelector)(_.selectInternetAccess),i=Object(n.useSelector)(_.selectIntraNetworkAccess),l=Object(n.useDispatch)();return r.a.createElement("section",null,!e&&r.a.createElement(Ut,null,r.a.createElement(zt.a,{checked:t,id:"networkEnabled",onChange:()=>{l(Object(_.setIoTFormProp)({enabled:!t}))}},r.a.createElement(v.a,{size:"body",color:"primary"},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_ENABLE_NETWORK"})))),r.a.createElement(Ut,null,r.a.createElement(zt.a,{checked:a,id:"internet_access_enabled",onChange:()=>{l(Object(_.setIoTFormProp)({internet_access_enabled:!a}))}},r.a.createElement(v.a,{size:"body",color:"primary"},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_INTERNET_ACCESS"})))),r.a.createElement(Ut,null,r.a.createElement(zt.a,{checked:i,id:"intra_network_access_enabled",onChange:()=>{const e=i?{intra_network_access_enabled:!1,intra_networks_ids:[]}:{intra_network_access_enabled:!0};l(Object(_.setIoTFormProp)(e))}},r.a.createElement(v.a,{size:"body",color:"primary"},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_INTRA_NET_ACCESS"})))))},Jt=Object(w.c)("div")`
  margin-top: 30px;
`,Qt=()=>{const e=Object(n.useSelector)(h.selectLanEnrichedConfiguration),t=Object(n.useSelector)(_.selectIntraNetworkAccess),a=Object(n.useSelector)(_.selectIntraNetworkIds),i=Object(n.useDispatch)(),l=e.filter(e=>"IoT"!==e.configuration.name).map(({configuration:e})=>{const t=a.indexOf(e._id);return{id:e._id,children:e.name,checked:t>-1,onChange:()=>((e,t)=>{if(t>-1){const e=[...a];e.splice(t,1),i(Object(_.setIoTFormProp)({intra_networks_ids:e}))}else i(Object(_.setIoTFormProp)({intra_networks_ids:[...a,e]}))})(e._id,t)}});return t&&r.a.createElement(Jt,null,r.a.createElement("div",null,r.a.createElement(v.a,{size:"body",weight:"bold",color:"primary"},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_NETWORKS_TITLE"}))),r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement(v.a,{color:"tertiary"},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_NETWORKS_DESC"}))),r.a.createElement(T.a,{variant:"boxed",direction:"row",full:!1,items:l}))},qt=Object(w.c)("div")`
  flex: 0 0 24px;
  margin-left: auto;
`,ea=Object(w.c)(y.a)`
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  margin-left: auto;
  padding: 0;
`,ta=Object(w.c)(o.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.neutral03};
`,aa=Object(w.c)(o.g)`
  margin: 4px 12px 4px 4px;
  height: 25px;
  flex: 0 0 25px;

  img {
    display: block;
    margin: 0 auto;
  }
`,na=Object(w.c)(v.a)`
  flex: 1 0 auto;

  span {
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 0;
    width: 100%;
    overflow: hidden;
  }
`,ia=r.a.memo(({mac:e})=>{const t=Object(i.useMemo)(()=>Object(m.selectAnyClientTypeData)(e),[e]),a=Object(n.useSelector)(t),l=Object(n.useDispatch)();return r.a.createElement(ta,{key:e,alignItems:"center"},r.a.createElement(aa,{alignItems:"center",justifyContent:"center"},r.a.createElement(o.d,{size:"standard",client:a})),r.a.createElement(na,null,r.a.createElement(v.a,{size:"body",color:"secondary"},Object(m.getClientName)(a))),r.a.createElement(qt,null,r.a.createElement(ea,{Icon:r.a.createElement(je.z,{width:10,height:10}),onClick:()=>l(Object(_.toggleClientInIoTList)({mac:e}))})))}),ra=Object(w.c)("section")`
  margin-top: 24px;
`,la=Object(w.c)(v.a)`
  font-size: 14px;
  line-height: 32px;
`,oa=Object(w.c)(o.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.neutral03};
`,ca=()=>{const e=Object(n.useSelector)(_.selectIoTClientMacList),t=Object(n.useDispatch)();return e.length>0?r.a.createElement(ra,null,r.a.createElement(oa,{alignItems:"center",justifyContent:"space-between"},r.a.createElement(la,{heading:"primary"},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_SELECTED_DEVICES_COUNT",values:{count:e.length}})),r.a.createElement(y.a,{variant:"link",onClick:()=>t(Object(_.clearClientMacsInIoTList)())},r.a.createElement(S.c,{id:"TOPOLOGY_IOT_CLEAR_ALL",values:{count:e.length}}))),r.a.createElement("div",null,e.map(e=>r.a.createElement(ia,{key:e,mac:e})))):r.a.createElement(ra,null,r.a.createElement(v.a,null,r.a.createElement(S.c,{id:"TOPOLOGY_IOT_SELECT_DEVICES"})))},sa=Object(w.c)(o.g)`
  margin-top: auto;
  padding-top: 24px;
`,da=Object(w.c)(y.a)`
  margin-right: 8px;
`,ma=({onCancel:e})=>{const t=Object(n.useSelector)(_.selectIsFirstIoTNetwork),a=Object(n.useSelector)(_.selectIoTForm),i=Object(l.k)(),o=Object(l.m)(),c=Sa[0].path,s=Object(n.useDispatch)(),d=Object(n.useSelector)(_.selectIsIoTFormSubmitting);return r.a.createElement(sa,{justifyContent:"flex-end"},r.a.createElement(da,{variant:"default",onClick:e},r.a.createElement(S.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(y.a,{variant:"primary",onClick:async()=>{i.push(Object(l.i)(c,o)),await s(Object(_.setIoTFormProp)({isSubmitting:!0})),t?await s(Object(_.createIoTNetwork)(a)):await s(Object(_.updateIoTNetwork)(a)),await s(Object(_.setIoTFormProp)({isSubmitting:!1}))},disabled:d},r.a.createElement(S.c,{id:t?"TOPOLOGY_CREATE_IOT_NETWORK":"TOPOLOGY_IOT_UPDATE_NETWORK"})))},ua=({onCancel:e})=>{const t=Object(n.useSelector)(_.selectIsIoTNetworkLoading),a=Object(n.useSelector)(_.iotNetworkDataSelector),l=Object(n.useDispatch)();return Object(i.useEffect)(()=>{l(Object(_.copyToIoTForm)(a))},[l,a]),t&&!a?r.a.createElement(Yt.a,{isLoading:!0}):r.a.createElement(o.g,{padding:"24px 32px 24px",height:"100%",flexDirection:"column",overflow:"auto"},r.a.createElement(Zt,null),r.a.createElement(Qt,null),r.a.createElement(Xt,null),r.a.createElement(ca,null),r.a.createElement(ma,{onCancel:e}))};var ba=()=>{const e=Object(l.k)(),t=Object(l.m)(),a=Sa[0].path,i=Object(n.useSelector)(_.iotNetworkDataSelector),o=Object(n.useDispatch)(),c=()=>{e.push(Object(l.i)(a,t)),o(Object(_.copyToIoTForm)(i))};return r.a.createElement(Vt.a,{in:!0,onClose:c,header:r.a.createElement(Kt,null),style:{border:"none"}},r.a.createElement(ua,{onCancel:()=>c()}))};const pa={siblings:1.5,nonSiblings:2},Oa=Object(w.c)("div")`
  width: 100%;
  height: 100%;
  position: relative;

  @media ${I.a.VIEWPORT_S_UP} {
    margin-top: ${x.a.isSafari?"50px":0};
  }
`,ha=e=>{const t=e>0;return 60+(t?32:16)+(t?100:75)+e+(t?16:0)+60},Ea=e=>101+400/Math.max(Math.min(e,5),1),ga=e=>{const{treeData:t,topologyData:a,topologyViewSettings:n,width:l,height:o,labelWidth:c}=e,s=(e=>{const{showSSID:t,showWifiStandards:a,showWiredSpeed:n,showWiredPorts:i}=e;return t||a||n||i})(n),d=s?c:0,[m,u]=Object(i.useState)(()=>{const e=Object(J.b)(t),a="invisibleNodeType"===e.data.type?e.height-1:e.height,n=Math.max(Ea(a),ha(d));var i,r;const c=(i={x:n,y:75},r=pa,Object(ce.a)().nodeSize([i.y,i.x]).separation((e,t)=>{var a,n;return(null===(a=null==e?void 0:e.parent)||void 0===a?void 0:a.id)===(null===(n=null==t?void 0:t.parent)||void 0===n?void 0:n.id)?r.siblings:r.nonSiblings}))(e).descendants();return{nodeWidth:n,nodeHeight:75,rootHeight:a,transform:kt(l,o,c,n,Nt)}}),{nodeWidth:b,nodeHeight:p,transform:O}=m;return Object(i.useEffect)(()=>{const e={...m},a=Object(J.b)(t),n="invisibleNodeType"===a.data.type?a.height-1:a.height;e.nodeWidth=Math.max(Ea(n),ha(d)),u(e)},[s,d]),r.a.createElement(Gt,{scaleExtent:{min:.3,max:2.5},data:t,labelWidth:d,edgeData:a.edges,separation:pa,containerSize:{width:l,height:o},transitionDuration:400,transform:O,nodeSize:{x:b,y:p}})},fa=e=>{var t,a;const{topologyData:l,topologyViewSettings:o}=e,{show2GClients:c,show5GClients:s,showWiredClients:d,online:m=!0,offline:u=!0,isolated:b=!0,pending_adoption:O=!0,managed_by_another_console:h=!0}=o,E=Object(n.useSelector)(te.selectIsUnifiDevicesPageSupportedController),g=Object(i.useMemo)(()=>(({edges:e,vertices:t})=>{const a=[],n=t.map(t=>({...t,parentMac:ie(t.mac,e)})).filter(e=>void 0!==e),i=n.reduce((e,t)=>(e[t.mac]=t,e),{});return n.forEach(e=>{const t=i[e.parentMac];t?(t.children||(t.children=[])).push(e):a.push(e)}),a.length>1||0===a.length?re(a):a[0]})(le(l,c,s,E,d,m,u,b,O,h)),[l,c,s,E,d,m,u,b,O,h]),f=Object(n.useDispatch)(),v=Object(i.useCallback)(()=>{f(Object(p.T)(p.c.topologyViewSettings))},[f]);return"invisibleNodeName"===g.id&&0===(null===(t=g.children)||void 0===t?void 0:t.length)?r.a.createElement(q.a,{icon:"noNotifications",maxWidth:386,detailPadding:35,title:r.a.createElement(S.c,{id:"TOPOLOGY_NO_MATCH_IN_FILTERS_TITLE"}),details:r.a.createElement(S.c,{id:"TOPOLOGY_NO_MATCH_IN_FILTERS_DESCRIPTION"}),button:r.a.createElement(y.a,{variant:"primary"},r.a.createElement(S.c,{id:"COMMON_BUTTON_RESET_DISPLAY_OPTION"})),onClick:v}):0===(null===(a=null==l?void 0:l.vertices)||void 0===a?void 0:a.length)?r.a.createElement(q.a,{icon:"noElements",maxWidth:386,detailPadding:35,title:r.a.createElement(S.c,{id:"TOPOLOGY_NO_DEVICES_TITLE"}),details:r.a.createElement(S.c,{id:"TOPOLOGY_NO_DEVICES_DESCRIPTION"}),button:null}):r.a.createElement(ga,Object.assign({treeData:g},e))},va=Object(w.c)("div")`
  // Important to fixing caliper sizing. If nodes are only 1 level deep (no children) then the width
  // would be 0px as there are no labels. This fixes this issue without introducing any other ones.
  min-width: 1px;
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  top: -10000px;
  left: -10000px;
  visibility: hidden;
  user-select: none;
  z-index: -1000;
`,ja=r.a.forwardRef((e,t)=>{const{topologyData:a}=e;return r.a.createElement(va,{innerRef:t},a.edges.map(e=>r.a.createElement(i.Fragment,{key:`${e.uplinkMac}-${e.downlinkMac}`},(e=>{const{type:t,rateMbps:a}=e;return t===ne.a.WIRELESS?r.a.createElement(it,{networkData:e,measuring:!0}):t===ne.a.WIRED&&a?r.a.createElement(ut,{rateMbps:a,measuring:!0}):null})(e),(e=>{const{uplinkPortNumber:t,downlinkPortNumber:a,type:n,essid:i}=e;return n===ne.a.WIRELESS&&i?r.a.createElement(lt,{essid:i,measuring:!0}):t&&a?r.a.createElement(r.a.Fragment,null,r.a.createElement(dt,{uplinkPortNumber:t,downlinkPortNumber:a,measuring:!0})):t?r.a.createElement(ct,{uplinkPortNumber:t,measuring:!0}):a?r.a.createElement(st,{downlinkPortNumber:a,measuring:!0}):null})(e))))}),Ta=()=>r.a.createElement(Q.a,null,r.a.createElement("style",null,'\n        #root > header {\n          position: fixed;\n          top: 0;\n        }\n        #root > main {\n          margin-top: 50px;\n        }\n        #root #app-main nav[class^="nav"] {\n          position: fixed;\n          top: 50px;\n          left: 0;\n          z-index: 12;\n        }\n        #root #app-main > div > .main-panel {\n          margin-left: 50px;\n        }\n    ')),ya={updateTopologyViewSettings:p.T};var xa=Object(n.connect)(e=>({topologyData:Object(ee.b)(e),topologyViewSettings:Object(p.M)(e)}),ya)(e=>{const{ref:t,width:a,height:n}=Object(Z.a)(),{ref:i,width:o}=Object(Z.a)();return r.a.createElement(r.a.Fragment,null,x.a.isSafari&&r.a.createElement(Ta,null),r.a.createElement(ja,{topologyData:e.topologyData,ref:i}),r.a.createElement(Oa,{innerRef:t},t&&a&&n&&o&&r.a.createElement(fa,Object.assign({width:a,height:n,labelWidth:o},e))),r.a.createElement(l.g,null,r.a.createElement(b.a,{path:"/:site/topology/iot",render:()=>r.a.createElement(ba,null)}),r.a.createElement(b.a,{path:"/:site/topology/properties/:id?/:panel?/:subPanel?",render:()=>r.a.createElement(ae.a,{panelType:void 0})})))}),Sa=[{id:"topology",label:r.a.createElement(S.c,{id:"TOPOLOGY_SECTION_TOPOLOGY"}),path:"/:site/topology",component:r.a.createElement(xa,null)},{id:"floorplan",label:r.a.createElement(S.c,{id:"TOPOLOGY_SECTION_FLOORPLAN"}),path:"/:site/floorplan",component:r.a.createElement(K,null)}],wa=a(808);const Ia=()=>{const e=Object(n.useDispatch)();return Object(i.useEffect)(()=>()=>{e(Object(p.j)()),e(Object(wa.d)())},[e]),r.a.createElement(o.j,null,r.a.createElement(F,{routes:Sa}),r.a.createElement(l.g,null,Object.values(Sa).map(({id:e,path:t,component:a})=>r.a.createElement(b.a,{key:e,path:t,render:()=>a}))))};t.default=e=>Object(c.g)([Object(s.a)(),...e.location.pathname.includes("/properties")?[Object(E.fetchDevices)(void 0,{crudCacheStrategy:{type:d.a.CACHE}})]:[],Object(m.fetchClients)(void 0,{crudCacheStrategy:{type:d.a.CACHE}}),Object(O.c)(void 0,{crudCacheStrategy:{type:d.a.CACHE}}),Object(h.fetchLanEnrichedConfiguration)(void 0,{crudCacheStrategy:{type:d.a.CACHE}}),Object(u.c)("topology"),Object(u.c)("devices"),Object(u.c)("unifiDevices"),Object(u.c)("clients"),Object(wa.c)()],r.a.createElement(Ia,Object.assign({},e)),{trackingName:"topology"})}}]);
//# sourceMappingURL=topology.f400b1db6c26e1693504.js.map