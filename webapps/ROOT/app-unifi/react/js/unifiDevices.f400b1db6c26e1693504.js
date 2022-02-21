(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[17],{2435:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return P})),a.d(t,"b",(function(){return k})),a.d(t,"e",(function(){return B})),a.d(t,"f",(function(){return $})),a.d(t,"g",(function(){return H})),a.d(t,"d",(function(){return X}));var n=a(0),i=a.n(n),c=a(3),l=a(1898),r=a(9);const o=Object(c.c)(r.a)`
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  box-sizing: border-box;
`,s=Object(c.c)(l.a)`
  bottom: -1px;
`;var m=({isLoading:e,children:t,...a})=>i.a.createElement(o,Object.assign({},a,{flex:"none",className:"base-control-panel",position:"relative",alignItems:"center",justifyContent:"space-between",height:50}),t,i.a.createElement(s,{isLoading:e,placement:"bottom"})),u=a(2),E=a(5),d=a(18);const b=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen};var p=a(868),O=a(2382),v=a(2894),g=a(2877),h=a(577),C=a(2823);const f=Object(c.c)(C.a)`
  padding: 24px;
`;var j=({columns:e,columnLabels:t,tableType:a})=>{var c;const l=Object(E.useDispatch)(),r=(null===(c=Object(E.useSelector)(Object(d.I)(a)))||void 0===c?void 0:c.initialColumns)||[],o=Object(n.useMemo)(()=>Object.values(e).every(e=>r.includes(e)),[r]),s=Object(n.useCallback)(()=>{const t=o||(null==r?void 0:r.length)?[]:Object.values(e);l(Object(d.S)(a,{initialColumns:t},!0))},[l,o,a,r]),m=Object(n.useMemo)(()=>[{full:!0,id:"showAllFields",checked:o||!!(null==r?void 0:r.length)&&"mixed",children:i.a.createElement(u.c,{id:"COMMON_COLUMN_VISIBILITY_SHOW_ALL_FIELD"}),onChange:s}].concat(Object.values(e).map(e=>({full:!0,id:e,checked:r.includes(e),children:(null==t?void 0:t[e])?i.a.createElement(u.b,{id:t[e]}):e,onChange:({target:{checked:t}})=>{const n=t?[...r,e]:r.filter(t=>t!==e);l(Object(d.S)(a,{initialColumns:n},!0))}}))),[r,a]);return i.a.createElement(f,{spacing:"flush",items:m,variant:"list"})};const I=Object(c.c)(O.a)`
  width: 258px !important;
`;var _;!function(e){e.COLUMNS="columns",e.FILTERS="filters"}(_||(_={}));var D=({filterTitleLabel:e,isOpen:t,onClose:a,columnTabProps:c,renderFilterDrawerContent:l,footerProps:r})=>{var o;const[s,m]=Object(n.useState)(_.FILTERS),{tableType:b}=c||{tableType:null},p=Object(E.useDispatch)(),O=(null===(o=Object(E.useSelector)(Object(d.I)(b)))||void 0===o?void 0:o.initialColumns)||[],C=r&&s===_.COLUMNS,f=Object(n.useMemo)(()=>{var e,t;return C&&Object(h.a)(null===(t=null===(e=null===d.c||void 0===d.c?void 0:d.c.tables)||void 0===e?void 0:e[b])||void 0===t?void 0:t.initialColumns,O)},[C,b,O]),D=Object(n.useCallback)(()=>{var e,t,a;const n=[...null!==(a=null===(t=null===(e=null===d.c||void 0===d.c?void 0:d.c.tables)||void 0===e?void 0:e[b])||void 0===t?void 0:t.initialColumns)&&void 0!==a?a:[]];p(Object(d.S)(b,{initialColumns:n},!0))},[p,b]),S=Object(n.useCallback)(({id:e})=>m(e),[m]),T=c?i.a.createElement(v.a,{onSelectTab:S,tabs:[{id:_.FILTERS,label:i.a.createElement(u.c,{id:"COMMON_CONTROL_PANEL_FILTERS"}),render:l},{id:_.COLUMNS,label:i.a.createElement(u.c,{id:"COMMON_CONTROL_PANEL_COLUMNS"}),render:()=>i.a.createElement(j,{columns:c.columns,columnLabels:c.columnLabels,tableType:b})}]}):l(),y=Object(n.useMemo)(()=>C?{label:i.a.createElement(u.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_COLUMNS"}),onClick:D,disabled:f}:r,[C,r,f,D]),N=Object(n.useCallback)(()=>{a(),m(_.FILTERS)},[a,m]);return i.a.createElement(I,{in:t,renderHeader:()=>null,onClose:a,side:"left"},t&&i.a.createElement(g.a,{footerProps:y,headerProps:{label:e},onClose:N},T))},S=a(42),T=a(23),y=a(786);var N=({items:e,...t})=>{const{params:a,path:n}=Object(T.n)(),c=Object(T.l)(),l=Object(T.k)(),r=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,c);return i.a.createElement(y.a,Object.assign({tabs:e,selectedTab:null==r?void 0:r.id,onSelectTab:({path:e,params:t={}})=>l.push(Object(T.i)(e,{...a,...t}))},t))};const w=Object(c.c)(N)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var x=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...i})=>({id:e,label:t,disabled:"function"==typeof a?a(i):a,path:n})),[e]);return t?i.a.createElement(w,{selectedTabBold:!0,items:t}):null},F=a(2895);const L=Object(c.c)(F.a)`
  padding: 0 8px;
  z-index: 5;
`;var U=({filterTitleLabel:e,filtersActive:t,items:a})=>{const n=Object(E.useDispatch)();return i.a.createElement(r.a,{height:"100%"},i.a.createElement(L,{title:e,onClick:()=>n(Object(p.b)(!0)),filtersActive:t}),a)};const A=Object(c.c)(S.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;var R=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterTitleLabel:c,filtersActive:l,items:o,title:s})=>{const E=(null==e?void 0:e.length)>1,d=!E&&1===e.length;return i.a.createElement(m,{isLoading:a},!t&&i.a.createElement(U,{filterTitleLabel:c,items:o,filtersActive:l}),E&&i.a.createElement(x,{routes:e}),d&&i.a.createElement(A,{weight:"bold"},e[0].label),s&&i.a.createElement(A,{weight:"bold",hideFilterButton:t},i.a.createElement(u.c,{id:s})),i.a.createElement(r.a,{height:"100%",flex:E||s||d?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var P=Object(u.f)(({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:c,filterFooterProps:l,columnTabProps:r,renderFilterDrawerContent:o,filterTitleLabel:s,filtersActive:m,items:u,title:O,onClose:v,intl:g})=>{var h;const C=Object(E.useDispatch)(),f=Object(E.useSelector)(b),j=(null===(h=Object(E.useSelector)(Object(d.I)(null==r?void 0:r.tableType)))||void 0===h?void 0:h.initialColumns)||[],I=g.formatMessage({id:s||"COMMON_CONTROL_PANEL_FILTER_TITLE"});Object(n.useEffect)(()=>()=>{C(Object(p.b)(!1))},[]);const _=Object(n.useCallback)(()=>{C(Object(p.b)(!1)),null==v||v(),(null==r?void 0:r.tableType)&&C(Object(d.S)(r.tableType,{initialColumns:j}))},[C,v,null==r?void 0:r.tableType,j]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{isOpen:f,filterTitleLabel:I,onClose:_,columnTabProps:r,renderFilterDrawerContent:()=>f&&o,footerProps:l}),i.a.createElement(R,{routes:e,hideFilterButton:t,isLoading:a,filterTitleLabel:I,filtersActive:m,items:u,title:O},c))}),M=a(168);var k=Object(c.c)(M.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`,V=a(2425);var B=Object(c.c)(V.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var $=Object(c.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`;const z=c.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,G=c.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function H(e){return i.a.createElement(y.a,Object.assign({className:z,tabClassName:G},e))}var W=a(1758);const K=Object(c.c)(S.a)`
  line-height: 24px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,Y=Object(c.c)("div",{shouldForwardProp:e=>"toggleStyle"!==e})`
  justify-content: space-between;
  margin-top: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginTop)&&void 0!==t?t:8}}px;
  margin-right: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginRight)&&void 0!==t?t:0}}px;
  margin-bottom: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginBottom)&&void 0!==t?t:0}}px;
  margin-left: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginLeft)&&void 0!==t?t:0}}px;
  width: auto !important;

  label {
    margin-left: 0;
  }
`;var X=({checked:e,disabled:t,id:a,onChange:n,text:c,toggleStyle:l})=>i.a.createElement(Y,{toggleStyle:l},i.a.createElement(W.a,{checked:e,id:a,onChange:n,disabled:t},"string"==typeof c?i.a.createElement(K,{size:"body"},i.a.createElement(u.c,{id:c})):c))},2445:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e,t)=>{const a=Object.keys(e||{}),n=Object.keys(t||{});return a.length===n.length&&n.every(a=>e[a]&&e[a].length===t[a].length&&t[a].every(t=>e[a].includes(t)))}},2451:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(3);const l=Object(c.c)("div")`
  width: 100%;
  table:after {
    content: '';
    display: block;
    position: absolute;
    right: -32px;
    width: 32px;
    height: 1px;
  }
`;t.a=({children:e})=>i.a.createElement(l,null,e)},2476:function(e,t,a){"use strict";var n=a(2878),i=a(3);const c=Object(i.c)(n.a)`
  li > div:nth-child(2) > div > div {
    padding: 0 0 10px;
    label > div:last-child > div:first-child > span {
      display: block;
      max-width: 85%;
    }
  }
`;t.a=c},2487:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=a(3).a`
  th {
    span {
      font-size: 14px;
      font-weight: 700;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
`},2570:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return r}));var n=a(203),i=a(116);const c=e=>Object(n.i)({name:i.a.UNIFI_DEVICES,value:e}),l=e=>Object(n.j)({name:i.a.UNIFI_DEVICES,value:e}),r=e=>Object(n.g)({name:i.a.UNIFI_DEVICES,mode:e})},2617:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a(0),i=a.n(n),c=a(2),l=a(3),r=a(568),o=a(1183),s=a(862),m=a(800),u=a(42),E=a(26),d=a(70),b=a(15),p=a(1263);const O=Object(l.c)("div")`
  white-space: nowrap;
`,v=Object(l.c)("div")`
  white-space: nowrap;
  display: flex;
  align-items: center;
`,g=Object(l.c)(r.a)`
  width: 100%;
  min-width: 110px;
`,h=Object(l.c)("div")`
  width: 100%;
`,C=({device:e,className:t,alwaysShowStatusBar:a})=>{const{satisfaction:l,type:r,satisfactionByRadio:C,problemPorts:f}=e;return Object(n.useMemo)(()=>{switch(r){case b.DeviceType.GATEWAY:case b.DeviceType.UXG:{const a=100-+(e["system-stats"]&&e["system-stats"].cpu||0);return i.a.createElement(g,{position:"bottom",portal:!0,className:t,message:i.a.createElement(O,null,i.a.createElement(c.c,{id:"DEVICE_UTILIZATION_INVERTED"}))},i.a.createElement(v,null,i.a.createElement(o.a,{variant:"gradient",value:a})))}case b.DeviceType.SWITCH:{if(!l||l<0)return a?i.a.createElement(h,{className:t},i.a.createElement(o.a,{value:0})):i.a.createElement(c.c,{id:"COMMON_NA"});const n=i.a.createElement(s.a,{type:"percent",input:l/100,style:{color:m.a.getGradientColor(l/100)}}),r=i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null,i.a.createElement("div",{style:{flexGrow:1,marginRight:"10px"}},i.a.createElement(u.a,{heading:"primary"},i.a.createElement(c.c,{id:"DEVICE_SWITCH_EXPERIENCE"}))),i.a.createElement("div",null,i.a.createElement(u.a,{heading:"primary"},n))),f&&f.length?i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{heading:"primary"},i.a.createElement(c.c,{id:f.length>1?"DEVICE_SWITCH_PORT_PROBLEM_PORTS":"DEVICE_SWITCH_PORT_PROBLEM_PORT"})),f.map(e=>i.a.createElement(v,{key:e.name},i.a.createElement("div",{style:{flexGrow:1}},e.name),i.a.createElement("div",null,i.a.createElement("span",{style:{color:m.a.getGradientColor(e.satisfaction/100)}},e.satisfaction,"%"))))):null,i.a.createElement(p.a,{device:e}));return i.a.createElement(g,{position:"bottom",message:r,portal:!0,className:t},i.a.createElement(v,null,i.a.createElement(o.a,{variant:"gradient",value:l})))}case b.DeviceType.AP:{const{averageSatisfaction:e,byRadio:n}=C;if(!e)return a?i.a.createElement(h,{className:t},i.a.createElement(o.a,{value:0})):i.a.createElement(c.c,{id:"COMMON_NA"});if(e<0)return a?i.a.createElement(h,{className:t},i.a.createElement(o.a,{value:0})):i.a.createElement(c.c,{id:"COMMON_NO_CLIENT"});const l=Object.entries(n).reduce((e,[t,a])=>(e.push(i.a.createElement(O,null,i.a.createElement(u.a,{heading:"primary",style:{marginBottom:"8px"}},i.a.createElement(c.c,{id:"na"===t?"DEVICE_WIFI_EXPERIENCE_5G":"DEVICE_WIFI_EXPERIENCE_2G"})))),Object.values(a).forEach(t=>{t.reverse().forEach(({essid:t,satisfaction:a})=>{e.push(i.a.createElement(v,{style:{marginBottom:"8px"}},i.a.createElement("div",{style:{flexGrow:1}},t),i.a.createElement("div",null,i.a.createElement("span",{style:a>=0?{color:E.a["color-"+Object(d.c)(a)]}:{}},a>=0?a+"%":"-"))))})}),e),[]);return i.a.createElement(g,{position:"bottom",message:i.a.createElement(i.a.Fragment,null,l),width:192,portal:!0},i.a.createElement(v,null,i.a.createElement(o.a,{value:e,variant:Object(d.c)(e)})))}default:return a?i.a.createElement(h,{className:t},i.a.createElement(o.a,{value:0})):i.a.createElement(c.c,{id:"COMMON_NA"})}},[r,e,t,l,f,a,C])}},2618:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(2),l=a(5),r=a(2376),o=a(168),s=a(579),m=a(158),u=a(18),E=a(14),d=a(132),b=a(428),p=a(1264),O=a(523),v=a(2570);t.a=({hasAnyDeviceSelector:e})=>{const t=Object(l.useSelector)(e),a=Object(l.useSelector)(m.selectIsUnifiDevicesPageSupportedController),n=Object(l.useDispatch)();return i.a.createElement(E.g,{width:"100%",flexDirection:"column"},t?i.a.createElement(r.a,{icon:"noElements",maxWidth:386,detailPadding:35,title:i.a.createElement(c.c,{id:"DEVICE_EMPTY_FILTER_HEADER"}),details:i.a.createElement(c.c,{id:"DEVICE_EMPTY_FILTER_NO_DEVICES_DETAILS"}),button:i.a.createElement(o.a,{variant:"primary"},i.a.createElement(c.c,{id:"COMMON_RESET_DISPLAY_OPTIONS"})),onClick:()=>{const e=Object(s.a)(a?O.a:p.a);n(a?Object(v.a)(e):Object(b.a)(e)),n(Object(u.S)(a?d.a.UNIFI_DEVICE:d.a.DEVICE,{filters:e}))}}):i.a.createElement(r.a,{icon:"noElements",maxWidth:386,detailPadding:35,title:i.a.createElement(c.c,{id:"DEVICE_EMPTY_HEADER"}),details:i.a.createElement(c.c,{id:"DEVICE_EMPTY_NO_DEVICES_DETAILS"}),button:null}))}},2868:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(5),l=a(23),r=a(232),o=a(158),s=a(18),m=a(9),u=a(39),E=a(57),d=a(2618),b=a(132),p=a(14),O=a(4),v=a(2451),g=a(125),h=a(3),C=a(42),f=a(1895),j=a(2),I=a(849),_=a(2487);const D=Object(h.c)("img")`
  width: 24px;
  margin-right: 12px;
`;var S=({icon:e,data:t,onRowClick:a=null,onSort:n,showUnifiCareBadge:c=!1,tablePreferences:{isAscending:l,sortBy:r,initialColumns:o}})=>(null==t?void 0:t.length)?i.a.createElement(p.g,{flexDirection:"column",marginBottom:20},i.a.createElement(p.g,{alignItems:"center"},i.a.createElement(D,{src:e}),i.a.createElement(C.a,{size:"body",color:"tertiary"},i.a.createElement(j.c,{id:"UNIFI_NUMBER_OF_DEVICES",values:{number:null==t?void 0:t.length}}))),i.a.createElement(f.a,{headerRowClassName:_.a,items:t,columns:Object(I.a)({showUnifiCareBadge:c}),onRowClick:a,onSort:n,rowHeight:32,initialSortBy:r,initiallySortAscending:l,columnOverride:o,disableColumnFilters:!0})):null;var T=({initialColumns:e,onSort:t,...a})=>{const n=Object(c.useSelector)(o.selectUnifiNetworkDeviceTableData),l=Object(c.useSelector)(Object(s.I)(b.a.UNIFI_DEVICE_NETWORK)),r=Object(c.useSelector)(g.a);return i.a.createElement(v.a,null,i.a.createElement(S,Object.assign({data:n,icon:r+"/unifiDevices/unifiNetworkDevice.png",tablePreferences:{...l,initialColumns:e},showUnifiCareBadge:n.some(e=>Object(O.hasActiveUnifiCare)(e)),onSort:(e,a)=>t(e,a,b.a.UNIFI_DEVICE_NETWORK)},a)))};var y=({initialColumns:e,onSort:t,...a})=>{const n=Object(c.useSelector)(o.selectUnifiProtectDeviceTableData),l=Object(c.useSelector)(Object(s.I)(b.a.UNIFI_DEVICE_PROTECT)),r=Object(c.useSelector)(g.a);return i.a.createElement(S,Object.assign({data:n,icon:r+"/unifiDevices/unifiProtectDevice.png",tablePreferences:{...l,initialColumns:e},onSort:(e,a)=>t(e,a,b.a.UNIFI_DEVICE_PROTECT)},a))};var N=({initialColumns:e,onSort:t,...a})=>{const n=Object(c.useSelector)(o.selectUnifiTalkDeviceTableData),l=Object(c.useSelector)(Object(s.I)(b.a.UNIFI_DEVICE_TALK)),r=Object(c.useSelector)(g.a);return i.a.createElement(S,Object.assign({data:n,icon:r+"/unifiDevices/unifiTalkDevice.png",tablePreferences:{...l,initialColumns:e},onSort:(e,a)=>t(e,a,b.a.UNIFI_DEVICE_TALK)},a))};var w=({initialColumns:e,onSort:t,...a})=>{const n=Object(c.useSelector)(o.selectUnifiAccessDeviceTableData),l=Object(c.useSelector)(Object(s.I)(b.a.UNIFI_DEVICE_ACCESS)),r=Object(c.useSelector)(g.a);return i.a.createElement(S,Object.assign({data:n,icon:r+"/unifiDevices/unifiAccessDevice.png",tablePreferences:{...l,initialColumns:e},onSort:(e,a)=>t(e,a,b.a.UNIFI_DEVICE_ACCESS)},a))};var x=({initialColumns:e,onSort:t,...a})=>{const n=Object(c.useSelector)(o.selectUnifiConnectDeviceTableData),l=Object(c.useSelector)(Object(s.I)(b.a.UNIFI_DEVICE_CONNECT)),r=Object(c.useSelector)(g.a);return i.a.createElement(S,Object.assign({icon:r+"/unifiDevices/unifiConnectDevice.png",data:n,tablePreferences:{...l,initialColumns:e},onSort:(e,a)=>t(e,a,b.a.UNIFI_DEVICE_CONNECT)},a))};var F=e=>{const t=Object(c.useDispatch)(),{initialColumns:a}=Object(c.useSelector)(Object(s.I)(b.a.UNIFI_DEVICE)),l=Object(n.useCallback)(({id:e},n,i)=>t(Object(s.S)(i,{sortBy:e,isAscending:n,initialColumns:a})),[]);return i.a.createElement(p.g,{flexDirection:"column"},[T,y,N,w,x].map(t=>i.a.createElement(t,Object.assign({initialColumns:a,onSort:l},e))))},L=a(2373),U=a(117),A=a(10),R=a(1183),P=a(568),M=a(92),k=a(1778),V=a(2617),B=a(569),$=a(41),z=a(1263),G=a(358),H=a(70);const W=Object(h.c)(M.c)`
  max-width: 100%;
  max-height: 100%;
`,K=Object(h.c)(p.d)`
  max-width: 100%;
  max-height: 80%;
`,Y=Object(h.c)(p.g)`
  background: ${({theme:e})=>e.motifPalette.disabled01};
  > picture {
    width: calc(100% - 10px) !important;
    height: 110px;
    text-align: center;
  }
`,X=Object(h.c)(A.zc)`
  position: absolute;
  top: 7px;
  right: 7px;
`,J=Object(h.c)(p.g)`
  ::after > div:nth-child(2) {
    max-width: 90%;
    > span:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,Z=Object(h.c)(p.g)`
  svg {
    color: ${({theme:e})=>e.motifPalette.icon02};
  }
`,q=Object(h.c)(B.a)`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
`,Q=Object(h.c)(C.a)`
  max-width: 165px;
`,ee=({unifiDevice:e})=>e.device_type===o.UnifiControllerType.MANAGED?i.a.createElement(W,{device:e,filesMap:"GRID",width:"auto"}):i.a.createElement(K,{client:e,grid:!0,width:"auto"}),te=({unifiDevice:e})=>i.a.createElement(p.g,{margin:"8px 0"},e.device_type===o.UnifiControllerType.MANAGED?i.a.createElement(V.a,{device:e,alwaysShowStatusBar:!0}):i.a.createElement(R.a,{value:e.satisfaction,variant:Object(H.c)(e.satisfaction)})),ae=({unifiDevice:e})=>{const{portsUtilization:t,wired_speed_megabits_per_second:a}=e,n={style:{marginRight:"4px"}},c=Object(O.isSwitch)(e),l=i.a.createElement(z.a,{device:e,hideBar:!0});return c?i.a.createElement(P.a,{message:l,position:"bottom",portal:!0,width:192},i.a.createElement(p.g,{alignItems:"center",height:20},i.a.createElement(A.K,Object.assign({},n,{height:14,width:14})),i.a.createElement(C.a,{color:"tertiary",size:"caption"},""+t.totalActivePorts,"/",""+t.total))):e.device_type===o.UnifiControllerType.MANAGED?i.a.createElement(p.g,{alignItems:"center",height:20},i.a.createElement(A.x,Object.assign({},n)),i.a.createElement(C.a,{color:"tertiary",size:"caption"},(null==e?void 0:e.num_sta)||0)):Object(O.isDeviceWireless)(e)?i.a.createElement(A.Bc,Object.assign({},n,{height:20,width:20})):i.a.createElement(p.g,{alignItems:"center",height:20},i.a.createElement(A.K,Object.assign({},n,{height:14,width:14})),i.a.createElement(C.a,{color:"tertiary",size:"caption"},i.a.createElement(j.c,{id:a>=1e3?"COMMON_PORT_SPEED_GBE":"COMMON_PORT_SPEED_MBE"})))},ne=({unifiDevice:e})=>(null==e?void 0:e.device_type)===o.UnifiControllerType.MANAGED&&Object(O.hasActiveUnifiCare)(e)?i.a.createElement(q,{width:32,height:32}):null;var ie=e=>e.map(e=>({id:e._id,image:i.a.createElement(Y,{justifyContent:"center",alignItems:"center",width:"100%",height:"120px"},Object(O.isU6)(e)&&i.a.createElement(X,{isActive:!0,size:"large"}),i.a.createElement(ee,{unifiDevice:e})),children:i.a.createElement(p.g,{width:"100%",height:"100%",flexDirection:"column",justifyContent:"center",padding:"16px 0 8px"},i.a.createElement(J,{justifyContent:"center",alignItems:"center"},i.a.createElement(k.a,{status:e.status,statusPulse:e.statusPulse,marginRight:6}),i.a.createElement(Q,{truncate:!0},Object($.c)(e))),i.a.createElement(C.a,{centered:!0,color:"tertiary",size:"caption"},Object(O.getDeviceIp)(e)||""),Object(O.isDeviceWireless)(e)||Object(O.isAp)(e)?i.a.createElement(G.a,{mac:e.mac,props:["satisfaction"]},({satisfaction:t})=>i.a.createElement(te,{unifiDevice:Object.assign({},e,{satisfaction:t})})):i.a.createElement(p.g,{height:26}),i.a.createElement(Z,{justifyContent:"space-between",width:"100%"},i.a.createElement(p.g,{alignItems:"center"},i.a.createElement(ae,{unifiDevice:e})),i.a.createElement(p.g,{alignItems:"center"},i.a.createElement(G.a,{mac:e.mac,props:["download_speed_bytes_per_second"]},({download_speed_bytes_per_second:e=0})=>i.a.createElement(p.s,{bytes:e,direction:"down",pow:2})),i.a.createElement(G.a,{mac:e.mac,props:["upload_speed_bytes_per_second"]},({upload_speed_bytes_per_second:e=0})=>i.a.createElement(p.s,{bytes:e,direction:"up",pow:2})))),i.a.createElement(ne,{unifiDevice:e}))}));var ce=({onRowClick:e})=>{const t=Object(c.useSelector)(o.selectAllCustomUnifiNetworkDeviceGridViewData);return i.a.createElement(U.g,null,i.a.createElement(L.a,{gutterSize:16,tileSize:"medium",selectType:"none",onTileClick:(a,n,i)=>e(null==t?void 0:t[i]),items:ie(t)}))};const le="/:site/devices/properties/:id?/:panel?/:subPanel?";var re=()=>{const e=Object(c.useDispatch)(),{site:t}=Object(l.m)(),a=Object(l.k)(),{initialColumns:r}=Object(c.useSelector)(Object(s.I)(b.a.UNIFI_DEVICE)),p=Object(c.useSelector)(o.selectAllUnifiDeviceTableCustomData),O=Object(n.useCallback)(({device_type:n,mac:i})=>{const c=n===o.UnifiControllerType.CLIENT;a.push(Object(l.i)(le,{id:i,site:t,panel:"overview"})),e(Object(u.g)({type:c?E.b.CLIENT:E.b.DEVICE,mac:i}))},[]);return(null==p?void 0:p.length)&&(null==r?void 0:r.length)?i.a.createElement(m.a,{height:"100%",padding:"32px",overflow:"auto",flexDirection:"column"},i.a.createElement(F,{onRowClick:O})):i.a.createElement(d.a,{hasAnyDeviceSelector:o.selectHasAnyUniFiDevice})},oe=()=>{const e=Object(c.useDispatch)(),{site:t}=Object(l.m)(),a=Object(l.k)(),r=Object(c.useSelector)(o.selectAllUnifiDeviceTableCustomData),s=Object(n.useCallback)(({device_type:n,mac:i})=>{const c=n===o.UnifiControllerType.CLIENT;a.push(Object(l.i)(le,{id:i,site:t,panel:"overview"})),e(Object(u.g)({type:c?E.b.CLIENT:E.b.DEVICE,mac:i}))},[]);return(null==r?void 0:r.length)?i.a.createElement(m.a,{height:"100%",padding:"32px",overflow:"auto",flexDirection:"column"},i.a.createElement(ce,{onRowClick:s})):i.a.createElement(d.a,{hasAnyDeviceSelector:o.selectHasAnyUniFiDevice})},se=a(579),me=a(2435),ue=a(116),Ee=a(2445),de=a(49),be=a(2476),pe=a(292),Oe=a(1826),ve=a(523);const ge=({filters:e,networkFilterData:t,nonNetworkFilterData:a,onChangeUnifiDeviceFilter:c})=>{const l=(e,n)=>{var i,c;return(null===(i=(t||[]).map(t=>Object(Oe.a)({[e]:[n]},t,o.UnifiDeviceType.NETWORK_DEVICES)).filter(e=>e.every(Boolean)))||void 0===i?void 0:i.length)+(null===(c=(a||[]).map(t=>Object(Oe.a)({[e]:[n]},t,o.UnifiDeviceType.ACCESS_DEVICES)).filter(e=>e.every(Boolean)))||void 0===c?void 0:c.length)},r=Object(n.useMemo)(()=>Object(Ee.a)(e,ve.a),[e]),s=Object(n.useCallback)(({target:{checked:e}})=>{const t=e?Object(se.a)(ve.a):{};c(t)},[c]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(me.d,{checked:r,onChange:s,id:"showAllDevices",text:"DEVICE_HEADER_SHOW_ALL_DEVICES",toggleStyle:{marginTop:28,marginRight:24,marginBottom:16,marginLeft:24}}),i.a.createElement(be.a,{onChange:(e,t)=>c(t),selectedIds:e,multiOpen:!0,items:[{id:pe.c.ELEMENTS,label:i.a.createElement(j.c,{id:"UNIFI_DEVICE_FILTER_HEADER_ELEMENTS"}),openByDefault:!0,options:Object.values(pe.a).map(e=>({key:e,id:e,children:i.a.createElement(j.c,{id:"UNIFI_DEVICE_FILTER_ELEMENT_"+e.toUpperCase()}),labelProps:{count:l(pe.c.ELEMENTS,e)}}))},{id:pe.c.STATUS,label:i.a.createElement(j.c,{id:"UNIFI_DEVICE_FILTER_HEADER_STATUS"}),options:Object.values(pe.b).map(e=>({key:e,id:e,children:i.a.createElement(j.b,{id:"UNIFI_DEVICE_FILTER_STATUS_"+e.toUpperCase()}),labelProps:{count:l(pe.c.STATUS,e)}}))}]}))};var he=a(2570);var Ce=()=>{const e=Object(c.useSelector)(ve.b),t=Object(c.useSelector)(o.selectNetworkUnifiDeviceCustomData),a=Object(c.useSelector)(o.selectNonNetworkUnifiDeviceCustomData),l=Object(c.useDispatch)(),r=Object(n.useCallback)(e=>{l(Object(he.a)(e)),l(Object(s.S)(b.a.UNIFI_DEVICE,{filters:e}))},[l]),m=Object(c.useSelector)(ve.c),[u,E]=Object(n.useState)(m),d=Object(n.useMemo)(()=>Object(Ee.a)(e,ve.a),[e]),p=Object(n.useCallback)(()=>{r(Object(se.a)(ve.a))},[r]);return i.a.createElement(me.c,{isLoading:!1,title:"UNIFI_DEVICE_HEADER_UNIFI_DEVICES",columnTabProps:{columns:Object.values(de.b),columnLabels:de.c,tableType:b.a.UNIFI_DEVICE},renderFilterDrawerContent:i.a.createElement(ge,{onChangeUnifiDeviceFilter:r,filters:e,networkFilterData:t,nonNetworkFilterData:a}),filterFooterProps:{label:i.a.createElement(j.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_DEFAULTS"}),onClick:p,disabled:d},filtersActive:!d},i.a.createElement(me.e,{value:u,onChange:({target:{value:e}})=>{E(e),l(Object(he.b)(e))},onClear:()=>{E(""),l(Object(he.b)(""))},onSubmit:(e,t)=>Object(he.b)(t)}),i.a.createElement(me.b,{onClick:()=>l(Object(he.c)(ue.b.LIST))},i.a.createElement(A.hb,{size:"original",variant:"fill"})),i.a.createElement(me.b,{onClick:()=>l(Object(he.c)(ue.b.GRID))},i.a.createElement(A.fb,{size:"original"})))},fe=a(183),je=a(1797),Ie=a(40),_e=a(7);t.default=()=>{const e=Object(c.useSelector)(ve.d)!==ue.b.GRID;return Object(Ie.g)([Object(o.fetchUnifiDevices)(void 0,{crudCacheStrategy:{type:_e.a.CACHE}}),Object(fe.c)("unifiDevices")],i.a.createElement(i.a.Fragment,null,i.a.createElement(Ce,null),e?i.a.createElement(re,null):i.a.createElement(oe,null),i.a.createElement(l.g,null,i.a.createElement(r.a,{path:"/:site/devices/properties/:id?/:panel?/:subPanel?"},i.a.createElement(je.a,{panelType:E.b.UNIFI_DEVICE})))))}}}]);
//# sourceMappingURL=unifiDevices.f400b1db6c26e1693504.js.map