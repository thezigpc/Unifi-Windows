(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[12],{2435:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return M})),a.d(t,"b",(function(){return P})),a.d(t,"e",(function(){return U})),a.d(t,"f",(function(){return $})),a.d(t,"g",(function(){return G})),a.d(t,"d",(function(){return J}));var n=a(0),i=a.n(n),c=a(3),l=a(1898),r=a(9);const o=Object(c.c)(r.a)`
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  box-sizing: border-box;
`,s=Object(c.c)(l.a)`
  bottom: -1px;
`;var d=({isLoading:e,children:t,...a})=>i.a.createElement(o,Object.assign({},a,{flex:"none",className:"base-control-panel",position:"relative",alignItems:"center",justifyContent:"space-between",height:50}),t,i.a.createElement(s,{isLoading:e,placement:"bottom"})),m=a(2),p=a(5),b=a(18);const u=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen};var g=a(868),O=a(2382),h=a(2894),E=a(2877),C=a(577),f=a(2823);const x=Object(c.c)(f.a)`
  padding: 24px;
`;var j=({columns:e,columnLabels:t,tableType:a})=>{var c;const l=Object(p.useDispatch)(),r=(null===(c=Object(p.useSelector)(Object(b.I)(a)))||void 0===c?void 0:c.initialColumns)||[],o=Object(n.useMemo)(()=>Object.values(e).every(e=>r.includes(e)),[r]),s=Object(n.useCallback)(()=>{const t=o||(null==r?void 0:r.length)?[]:Object.values(e);l(Object(b.S)(a,{initialColumns:t},!0))},[l,o,a,r]),d=Object(n.useMemo)(()=>[{full:!0,id:"showAllFields",checked:o||!!(null==r?void 0:r.length)&&"mixed",children:i.a.createElement(m.c,{id:"COMMON_COLUMN_VISIBILITY_SHOW_ALL_FIELD"}),onChange:s}].concat(Object.values(e).map(e=>({full:!0,id:e,checked:r.includes(e),children:(null==t?void 0:t[e])?i.a.createElement(m.b,{id:t[e]}):e,onChange:({target:{checked:t}})=>{const n=t?[...r,e]:r.filter(t=>t!==e);l(Object(b.S)(a,{initialColumns:n},!0))}}))),[r,a]);return i.a.createElement(x,{spacing:"flush",items:d,variant:"list"})};const _=Object(c.c)(O.a)`
  width: 258px !important;
`;var y;!function(e){e.COLUMNS="columns",e.FILTERS="filters"}(y||(y={}));var v=({filterTitleLabel:e,isOpen:t,onClose:a,columnTabProps:c,renderFilterDrawerContent:l,footerProps:r})=>{var o;const[s,d]=Object(n.useState)(y.FILTERS),{tableType:u}=c||{tableType:null},g=Object(p.useDispatch)(),O=(null===(o=Object(p.useSelector)(Object(b.I)(u)))||void 0===o?void 0:o.initialColumns)||[],f=r&&s===y.COLUMNS,x=Object(n.useMemo)(()=>{var e,t;return f&&Object(C.a)(null===(t=null===(e=null===b.c||void 0===b.c?void 0:b.c.tables)||void 0===e?void 0:e[u])||void 0===t?void 0:t.initialColumns,O)},[f,u,O]),v=Object(n.useCallback)(()=>{var e,t,a;const n=[...null!==(a=null===(t=null===(e=null===b.c||void 0===b.c?void 0:b.c.tables)||void 0===e?void 0:e[u])||void 0===t?void 0:t.initialColumns)&&void 0!==a?a:[]];g(Object(b.S)(u,{initialColumns:n},!0))},[g,u]),T=Object(n.useCallback)(({id:e})=>d(e),[d]),A=c?i.a.createElement(h.a,{onSelectTab:T,tabs:[{id:y.FILTERS,label:i.a.createElement(m.c,{id:"COMMON_CONTROL_PANEL_FILTERS"}),render:l},{id:y.COLUMNS,label:i.a.createElement(m.c,{id:"COMMON_CONTROL_PANEL_COLUMNS"}),render:()=>i.a.createElement(j,{columns:c.columns,columnLabels:c.columnLabels,tableType:u})}]}):l(),w=Object(n.useMemo)(()=>f?{label:i.a.createElement(m.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_COLUMNS"}),onClick:v,disabled:x}:r,[f,r,x,v]),F=Object(n.useCallback)(()=>{a(),d(y.FILTERS)},[a,d]);return i.a.createElement(_,{in:t,renderHeader:()=>null,onClose:a,side:"left"},t&&i.a.createElement(E.a,{footerProps:w,headerProps:{label:e},onClose:F},A))},T=a(42),A=a(23),w=a(786);var F=({items:e,...t})=>{const{params:a,path:n}=Object(A.n)(),c=Object(A.l)(),l=Object(A.k)(),r=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,c);return i.a.createElement(w.a,Object.assign({tabs:e,selectedTab:null==r?void 0:r.id,onSelectTab:({path:e,params:t={}})=>l.push(Object(A.i)(e,{...a,...t}))},t))};const S=Object(c.c)(F)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var I=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...i})=>({id:e,label:t,disabled:"function"==typeof a?a(i):a,path:n})),[e]);return t?i.a.createElement(S,{selectedTabBold:!0,items:t}):null},L=a(2895);const D=Object(c.c)(L.a)`
  padding: 0 8px;
  z-index: 5;
`;var R=({filterTitleLabel:e,filtersActive:t,items:a})=>{const n=Object(p.useDispatch)();return i.a.createElement(r.a,{height:"100%"},i.a.createElement(D,{title:e,onClick:()=>n(Object(g.b)(!0)),filtersActive:t}),a)};const N=Object(c.c)(T.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;var B=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterTitleLabel:c,filtersActive:l,items:o,title:s})=>{const p=(null==e?void 0:e.length)>1,b=!p&&1===e.length;return i.a.createElement(d,{isLoading:a},!t&&i.a.createElement(R,{filterTitleLabel:c,items:o,filtersActive:l}),p&&i.a.createElement(I,{routes:e}),b&&i.a.createElement(N,{weight:"bold"},e[0].label),s&&i.a.createElement(N,{weight:"bold",hideFilterButton:t},i.a.createElement(m.c,{id:s})),i.a.createElement(r.a,{height:"100%",flex:p||s||b?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var M=Object(m.f)(({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:c,filterFooterProps:l,columnTabProps:r,renderFilterDrawerContent:o,filterTitleLabel:s,filtersActive:d,items:m,title:O,onClose:h,intl:E})=>{var C;const f=Object(p.useDispatch)(),x=Object(p.useSelector)(u),j=(null===(C=Object(p.useSelector)(Object(b.I)(null==r?void 0:r.tableType)))||void 0===C?void 0:C.initialColumns)||[],_=E.formatMessage({id:s||"COMMON_CONTROL_PANEL_FILTER_TITLE"});Object(n.useEffect)(()=>()=>{f(Object(g.b)(!1))},[]);const y=Object(n.useCallback)(()=>{f(Object(g.b)(!1)),null==h||h(),(null==r?void 0:r.tableType)&&f(Object(b.S)(r.tableType,{initialColumns:j}))},[f,h,null==r?void 0:r.tableType,j]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{isOpen:x,filterTitleLabel:_,onClose:y,columnTabProps:r,renderFilterDrawerContent:()=>x&&o,footerProps:l}),i.a.createElement(B,{routes:e,hideFilterButton:t,isLoading:a,filterTitleLabel:_,filtersActive:d,items:m,title:O},c))}),k=a(168);var P=Object(c.c)(k.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`,z=a(2425);var U=Object(c.c)(z.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var $=Object(c.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`;const W=c.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,H=c.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function G(e){return i.a.createElement(w.a,Object.assign({className:W,tabClassName:H},e))}var Y=a(1758);const V=Object(c.c)(T.a)`
  line-height: 24px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,q=Object(c.c)("div",{shouldForwardProp:e=>"toggleStyle"!==e})`
  justify-content: space-between;
  margin-top: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginTop)&&void 0!==t?t:8}}px;
  margin-right: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginRight)&&void 0!==t?t:0}}px;
  margin-bottom: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginBottom)&&void 0!==t?t:0}}px;
  margin-left: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginLeft)&&void 0!==t?t:0}}px;
  width: auto !important;

  label {
    margin-left: 0;
  }
`;var J=({checked:e,disabled:t,id:a,onChange:n,text:c,toggleStyle:l})=>i.a.createElement(q,{toggleStyle:l},i.a.createElement(Y.a,{checked:e,id:a,onChange:n,disabled:t},"string"==typeof c?i.a.createElement(V,{size:"body"},i.a.createElement(m.c,{id:c})):c))},2865:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(5),l=a(32),r=a(174),o=a(179),s=a(18),d=a(183),m=a(573),p=a(40),b=a(167),u=a(7),g=a(310),O=a(3),h=a(23),E=a(577),C=a(45),f=a(26),x=a(890),j=a(14),_=a(2),y=a(10),v=a(786),T=a(168),A=a(491),w=a(42);const F=Object(O.c)(j.g)`
  &:hover {
    background-color: ${({motif:e})=>"dark"===e?"#29292D":"#F6F6F8"};
  }
`,S=Object(O.c)(T.a)`
  padding: 0;
`,I=Object(O.c)(y.u)`
  ${({isSelected:e})=>e?"opacity: 1;":"opacity: 0;"}
  transition: opacity 150ms ease;
  margin: 10px 7px 0 7px;
`;var L,D=({children:e,isSelected:t,...a})=>{const{motif:n}=Object(C.a)();return i.a.createElement(F,{motif:n},i.a.createElement(I,{width:7,isSelected:t}),i.a.createElement(S,Object.assign({variant:"tertiary"},a),i.a.createElement(w.a,{size:"body",weight:t?"bold":"normal"},e)))};!function(e){e.topApplicationsClients="topApplicationsClients",e.overviewClients="overviewClients",e.topapplications="topapplications",e.overview="overview"}(L||(L={}));const R=e=>e===L.overviewClients||e===L.topApplicationsClients,N=Object(O.c)(j.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  min-height: 40px;
  padding: 0 24px 0 24px;
  position: relative;
`,B=Object(O.c)(v.a)`
  margin-left: 34px;
  width: fit-content;

  & > * > button {
    height: 39px !important;
  }
`,M=Object(O.c)(y.f,{shouldForwardProp:e=>"open"!==e})`
  transition: 200ms cubic-bezier(0.4, 0, 0, 1.3);
  transform: ${({open:e})=>e?"rotate(-180deg)":"rotate(0deg)"};
`,k=Object(O.c)(y.hc)`
  transform: rotate(90deg);
`,P=Object(O.c)("div")`
  @media (max-width: 1010px) and (min-width: 900px), (max-width: 700px) {
    display: none;
  }
`,z=Object(O.c)(T.a)`
  *:not(:first-child) {
    margin-left: 9px;
  }
  font-weight: bold;
`,U=Object(O.c)("div")`
  @media (min-width: 1010px) and (max-width: 900px), (min-width: 700px) {
    display: none;
  }
`,$=Object(O.c)(T.a)`
  width: 42px;
  height: 100%;
  border-right: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 0;
`,W=Object(O.c)(y.g)`
  color: #838691;
  height: 12px;
`,H=Object(O.c)(A.a)`
  position: absolute;
  right: 16px;
`,G=Object(O.c)(w.a)`
  position: absolute;
  left: 64px;

  @media (max-width: 1060px) and (min-width: 900px), (max-width: 750px) {
    display: none;
  }
`,Y=Object(O.c)("div")`
  position: absolute;
  left: 0;
  height: 100%;

  & > div {
    height: 100%;
  }
`,V=O.a`
  padding: 0;
`,q=[{id:"overview",label:i.a.createElement(_.c,{id:"TRAFFIC_TAB_LABEL_OVERVIEW"})},{id:"topapplications",label:i.a.createElement(_.c,{id:"TRAFFIC_TAB_LABEL_TABLE"})}];var J=i.a.memo(({sorting:e,setSorting:t,categoryName:a})=>{const{site:c,subSection:l}=Object(h.m)(),r=Object(h.k)(),{path:o}=Object(h.n)(),s=Object(n.useCallback)(({open:t})=>{let a="TRAFFIC_SORTING_LABEL_BY_TRAFFIC";switch(e){case"upload":a="TRAFFIC_SORTING_LABEL_BY_UPLOAD";break;case"download":a="TRAFFIC_SORTING_LABEL_BY_DOWNLOAD";break;default:a="TRAFFIC_SORTING_LABEL_BY_TRAFFIC"}return i.a.createElement(i.a.Fragment,null,i.a.createElement(P,null,i.a.createElement(z,{variant:"link"},i.a.createElement(_.c,{id:a}),i.a.createElement(M,{size:"small",open:t}))),i.a.createElement(U,null,i.a.createElement(T.a,null,i.a.createElement(k,null))))},[e]),d=Object(n.useCallback)(e=>{const t=Object(h.i)(o,{subSection:e,section:"traffic",site:c});r.push(t)},[r,o,c]),m=Object(n.useCallback)(()=>{const e=Object(h.i)(o,{subSection:l===L.topApplicationsClients?L.topapplications:L.overview,section:"traffic",site:c});r.push(e)},[l,r,o,c]),p=Object(n.useMemo)(()=>l===L.topapplications?l:L.overview,[l]);return i.a.createElement(N,{justifyContent:"center",alignItems:"center"},R(l)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Y,null,i.a.createElement($,{variant:"tertiary",onClick:m},i.a.createElement(W,null))),i.a.createElement(G,{weight:"bold"},i.a.createElement(_.c,{id:"COMMON_ACTION_BACK"})),i.a.createElement(w.a,{weight:"bold"},a?i.a.createElement(_.c,{id:a}):i.a.createElement(_.c,{id:"TRAFFIC_TAB_LABEL_TOP_APPLICATIONS"}))),!R(l)&&i.a.createElement(j.g,null,i.a.createElement(B,{selectedTabBold:!0,selectedTab:p,tabs:q,onSelectTab:({id:e})=>d(e)})),l===L.overview&&i.a.createElement(H,{classNameCard:V,size:"small",align:"bottomLeft",renderToggle:s},i.a.createElement(D,{isSelected:"upload"===e,onClick:()=>t("upload")},i.a.createElement(_.c,{id:"TRAFFIC_SORTING_LABEL_UPLOAD"})),i.a.createElement(D,{isSelected:"download"===e,onClick:()=>t("download")},i.a.createElement(_.c,{id:"TRAFFIC_SORTING_LABEL_DOWNLOAD"})),i.a.createElement(D,{isSelected:"traffic"===e,onClick:()=>t("traffic")},i.a.createElement(_.c,{id:"TRAFFIC_SORTING_LABEL_TRAFFIC"}))))},(e,t)=>e.sorting===t.sorting&&e.setSorting===t.setSorting&&e.categoryName===t.categoryName),K=a(176),X=a(2414);const Q=Object(O.c)(j.g)`
  height: 100%;
  max-height: 260px;
  padding: 0 24px 20px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    border: 7px solid ${({theme:e})=>e.motifPalette.neutral02};
    border-radius: 100%;
    width: 130px;
    height: 130px;
    pointer-events: none;
  }

  & * > text:first-of-type {
    font-size: 24px;
  }
  & * > text:last-of-type {
    font-size: 10px;
  }
`,Z=Object(O.c)(w.a)`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
`,ee=Object(O.c)(j.g)`
  margin-bottom: 8px;
`,te=Object(O.c)(w.a)`
  color: ${f.a["purple-1"]};
`,ae=e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,{size:"body",weight:"bold"},e.name),i.a.createElement(ee,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"TRAFFIC_TOOLTIP_TRAFFIC"})),i.a.createElement(w.a,null,Object(K.b)(e.rx_bytes+e.tx_bytes))),i.a.createElement(ee,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"COMMON_WORD_UP"})),i.a.createElement(te,null,Object(K.b)(e.tx_bytes))),i.a.createElement(ee,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"COMMON_WORD_DOWN"})),i.a.createElement(w.a,{color:"info"},Object(K.b)(e.rx_bytes))),i.a.createElement(ee,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"TRAFFIC_TOOLTIP_CLIENTS"})),i.a.createElement(w.a,null,e.known_clients)));var ne=({category:e,appsToShow:t,dpiDataTotal:a})=>{const c=Object(n.useMemo)(()=>{const t=e.traffic/a*100,n=2-t.toString().split(".")[0].length;return t.toFixed(Math.max(0,n))+"%"},[e.traffic,a]),l=Object(n.useMemo)(()=>t.map(e=>({...e,id:e.app,value:e.rx_bytes+e.tx_bytes,color:e.color})),[t]);return i.a.createElement(Q,{justifyContent:"center",alignItems:"center"},i.a.createElement(X.a,{items:l,renderTooltipMessage:ae,tooltipProps:{position:"right"},title:c,description:Object(K.b)(e.rx_bytes+e.tx_bytes),thickness:3,spacer:.5,size:115}))},ie=a(393),ce=a(2399),le=a(696);const re=Object(O.c)(ie.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,oe=Object(O.c)(y.h)`
  position: absolute;
  right: 9px;
  height: 10px;
  width: 7px;
  color: #b6b9c4;
`,se=[{id:"name",label:"",renderCell:({name:e,color:t,icon:a})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(re,{customColor:t}),a,i.a.createElement(w.a,{size:"body",truncate:!0},e)),minWidth:80},{id:"traffic",label:"",renderCell:({rx_bytes:e,tx_bytes:t})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{size:"body"},Object(K.b)(e+t)),i.a.createElement(oe,null)),minWidth:78,maxWidth:78}],de=Object(O.c)("div")`
  margin: 0px 24px 18px auto;
  min-width: 150px;
  width: 100%;
  height: 168px;
  & > div > table > thead {
    display: none;
  }

  & tr {
    cursor: pointer;
  }
`;var me=({appsToShow:e,category:t,updateCurrentClientUsageApps:a})=>{const{site:c}=Object(h.m)(),l=Object(h.k)(),{path:r}=Object(h.n)(),o=Object(n.useCallback)(e=>{a(null,[e.compoundAppId]);const t=Object(h.i)(r,{subSection:L.overviewClients,section:"traffic",site:c});l.push(t)},[t,l,r,c,a]),s=Object(n.useMemo)(()=>e.map(e=>{const t=i.a.createElement(le.a,{name:e.name,iconFileName:e.iconFileName});return{...e,icon:t}}),[e]);return i.a.createElement(de,null,i.a.createElement(ce.a,{columns:se,items:s,onRowClick:o,idField:"app",disableColumnFilters:!0,disableSelection:!0,rowHeight:42}))},pe=a(1283);const be=Object(O.c)("div")`
  display: grid;
  grid-template-columns: minmax(80px, 1fr) minmax(185px, 1fr) 42px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  height: 40px;
  max-height: 40px;
  padding-left: 24px;
`,ue=Object(O.c)(ie.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,ge=Object(O.c)(j.g)`
  margin-right: 6%;
`,Oe=Object(O.c)(y.G)`
  margin: 0 6px 0 16px;
`,he=Object(O.c)(T.a)`
  width: 42px;
  height: 100%;
  border-left: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 0;
`,Ee=Object(O.c)(w.a)`
  transition: color 250ms ease;
  &:hover {
    color: ${({theme:e})=>e.motifPalette.uBlue06};
  }
`,Ce=Object(O.c)("div")`
  overflow: hidden;
  & > div {
    display: block !important;
    overflow: hidden;
    & button,
    & button > label {
      overflow: hidden;
    }
  }
`;var fe=({category:e,updateCurrentClientUsageApps:t})=>{const{site:a}=Object(h.m)(),c=Object(h.k)(),{path:l}=Object(h.n)(),r=Object(n.useCallback)(()=>{t(e,e.apps);const n=Object(h.i)(l,{subSection:L.overviewClients,section:"traffic",site:a});c.push(n)},[e,c,l,a,t]);return i.a.createElement(be,null,i.a.createElement(j.g,{alignItems:"center"},i.a.createElement(ue,{customColor:e.color}),i.a.createElement(Ce,null,i.a.createElement(T.a,{variant:"inline",onClick:r},i.a.createElement(Ee,{size:"body",truncate:!0},i.a.createElement(_.c,{id:Object(o.getDpiCategoryData)(e.cat)}))))),i.a.createElement(ge,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(pe.a,{up:e.tx_bytes,down:e.rx_bytes,leftMargin:6}),i.a.createElement(Oe,null),i.a.createElement(w.a,{size:"caption",weight:"bold"},e.clientsCount)),i.a.createElement(he,{variant:"tertiary",onClick:r},i.a.createElement(y.h,null)))};const xe=Object(O.c)(j.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 343px;
  height: 270px;
  position: relative;
`,je=Object(O.c)("div")`
  position: absolute;
  bottom: 12px;
  right: 17px;
  width: auto;
`;var _e=i.a.memo(({category:e,dpiDataTotal:t,dpiDataByApp:a,updateCurrentClientUsageApps:c})=>{const{motif:l}=Object(C.a)(),[r,o]=Object(n.useState)(!1),s=Object(n.useMemo)(()=>a.filter(t=>t.cat===e.cat).sort((e,t)=>t.traffic-e.traffic),[e,a]),d=Object(n.useMemo)(()=>s.length,[s.length]),m=Object(n.useMemo)(()=>r?s.map((t,a)=>Object.assign(t,{color:Object(x.a)([...e.colorScheme.slice(4),...e.colorScheme.slice(0,4).reverse()],a)})):s.map((t,a)=>Object.assign(t,{color:a<4?Object(x.d)(e.colorScheme,a):f.a.motifs[l].neutral03})),[s,e.colorScheme,l,r]);return i.a.createElement(xe,{flexWrap:"wrap"},i.a.createElement(fe,{category:e,updateCurrentClientUsageApps:c}),i.a.createElement(j.g,{flexDirection:"row",flex:1},i.a.createElement(ne,{category:e,dpiDataTotal:t,appsToShow:m}),i.a.createElement(me,{appsToShow:r?m:m.slice(0,4),category:e,updateCurrentClientUsageApps:c})),d>4&&i.a.createElement(je,null,i.a.createElement(T.a,{variant:"link",onClick:()=>o(e=>!e)},i.a.createElement(_.c,{id:r?"APP_TABLE_BUTTON_SHOW_TOP_USAGE":"APP_TABLE_BUTTON_SHOW_ALL"}))))},(e,t)=>Object(K.b)(e.category.rx_bytes+e.category.tx_bytes)===Object(K.b)(t.category.rx_bytes+t.category.tx_bytes)),ye=a(2376);const ve=Object(O.c)(ye.a)`
  height: 338px;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    margin-top: 50px;
  }
`;function Te(){return i.a.createElement(ve,{title:i.a.createElement(_.c,{id:"DPI_NO_DATA"}),icon:"noSearchResults",maxWidth:386,detailPadding:35})}const Ae=Object(O.c)(j.g)`
  width: 100%;
  height: 100%;
  padding: 12px 12px 24px 12px;
  overflow: auto;
`,we=Object(O.c)(ie.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 16px;
`,Fe=Object(O.c)(w.a)`
  max-width: calc(100% - 18px);
`,Se=Object(O.c)(w.a)`
  color: ${({theme:e})=>e.motifPalette.purple06};
`,Ie=Object(O.c)(w.a)`
  color: ${({theme:e})=>e.motifPalette.uBlue06};
`,Le=[{id:"name",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({color:e,name:t,icon:a})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(we,{customColor:e}),a,i.a.createElement(Fe,{size:"body",truncate:!0},t)),minWidth:170},{id:"traffic",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>i.a.createElement(w.a,{size:"body"},Object(K.b)(e)),minWidth:80},{id:"rx_bytes",label:i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"COMMON_WORD_DOWN"}))),sortable:!0,renderCell:({rx_bytes:e})=>i.a.createElement(Ie,{size:"body"},Object(K.b)(e)),minWidth:80},{id:"tx_bytes",label:i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"COMMON_WORD_UP"}))),sortable:!0,renderCell:({tx_bytes:e})=>i.a.createElement(Se,{size:"body"},Object(K.b)(e)),minWidth:80},{id:"known_clients",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({known_clients:e})=>i.a.createElement(w.a,{size:"body"},e),minWidth:80}];var De=({dpiDataByApp:e,dpiDataByCategory:t,currentCategories:a,updateCurrentClientUsageApps:c})=>{const l=Object(h.k)(),{path:r}=Object(h.n)(),{site:o}=Object(h.m)(),s=Object(n.useMemo)(()=>e.filter(e=>a.includes(e.cat)),[a,e]),d=Object(n.useMemo)(()=>s.map(e=>{const{color:a}=t.find(t=>t.cat===e.cat),n=e.tx_bytes+e.rx_bytes,c=i.a.createElement(le.a,{name:e.name,iconFileName:e.iconFileName});return{...e,color:a,traffic:n,icon:c}}),[t,s]),m=Object(n.useCallback)(e=>{c(null,[e.compoundAppId]);const t=Object(h.i)(r,{subSection:L.topApplicationsClients,section:"traffic",site:o});l.push(t)},[l,r,o,c]);return i.a.createElement(i.a.Fragment,null,d.length?i.a.createElement(Ae,null,i.a.createElement(ce.a,{items:d,columns:Le,idField:"app",initialSortBy:"traffic",disableColumnFilters:!0,onRowClick:m,rowHeight:42})):i.a.createElement(Te,null))},Re=a(1260),Ne=a(92),Be=a(41);const Me=Object(O.c)(j.g)`
  margin: 30px 24px 0;
  height: 100%;
  overflow-x: overlay;

  > div {
    width: calc(100% - 1px);
  }
`,ke=Object(O.c)(j.g)`
  height: 30px;
  max-width: 30px;
  width: 100%;
  margin-right: 10px;
`,Pe=Object(O.c)(j.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.neutral04};
  padding-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,ze=Object(O.c)(w.a)`
  font-weight: bold;
`,Ue=Object(O.c)("div",{shouldForwardProp:e=>"hasIconContainer"!==e})`
  padding-top: ${({theme:e,hasIconContainer:t})=>t?e.spacing["spacing-s"]:0};
`,$e=Object(O.c)(w.a,{shouldForwardProp:e=>"metrics"!==e})`
  color: ${({theme:e,metrics:t})=>"up"===t?e.motifPalette.purple06:e.motifPalette.uBlue06};
`,We=Object(O.c)(Re.a)`
  border-radius: 2px;
`,He=Object(O.c)(w.a)`
  max-width: 90%;
`,Ge=Object(O.c)("div")`
  width: 100%;
  padding-right: ${({theme:e})=>e.spacing["spacing-m"]};
`,Ye=(e,t)=>i.a.createElement($e,{size:"body",metrics:t},Object(K.b)(e)),Ve=e=>{const t=e.toFixed(1);return Number(t)>=1?t+" %":"< 1 %"},qe=e=>({message:i.a.createElement(i.a.Fragment,null,e.appName&&i.a.createElement(Pe,{alignItems:"center"},i.a.createElement(le.a,{name:e.appName,iconFileName:e.iconFileName}),i.a.createElement(ze,{truncate:!0},e.appName)),i.a.createElement(Ue,{hasIconContainer:!!e.appName},i.a.createElement(j.g,{justifyContent:"space-between"},i.a.createElement(w.a,{size:"label"},i.a.createElement(_.c,{id:e.remainingAppsCount?"TRAFFIC_TOOLTIP_LABEL_OTHER_TRAFFIC":"TRAFFIC_TABLE_LABEL_TRAFFIC"})),i.a.createElement(w.a,{size:"label",weight:"bold"},Ve(e.value))),e.down&&i.a.createElement(j.g,{justifyContent:"space-between"},i.a.createElement(w.a,{size:"label"},i.a.createElement(_.c,{id:"COMMON_WORD_DOWN"})),i.a.createElement($e,{size:"label",metrics:"down"},e.down)),e.up&&i.a.createElement(j.g,{justifyContent:"space-between"},i.a.createElement(w.a,{size:"label"},i.a.createElement(_.c,{id:"COMMON_WORD_UP"})),i.a.createElement($e,{size:"label",metrics:"up"},e.up)),e.remainingAppsCount>0&&i.a.createElement(j.g,{justifyContent:"space-between"},i.a.createElement(w.a,{size:"label"},i.a.createElement(_.c,{id:"TRAFFIC_TOOLTIP_LABEL_APPLICATIONS"})),i.a.createElement(w.a,{size:"label",weight:"bold"},e.remainingAppsCount)))),width:176,position:"topRight"}),Je=[{id:"name",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_CLIENT"})),sortable:!0,renderCell:e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(ke,{justifyContent:"center",alignItems:"center"},"model"in e?i.a.createElement(Ne.c,{device:e}):i.a.createElement(j.d,{client:e})),i.a.createElement(He,{size:"body",truncate:!0},e.name)),minWidth:160,maxWidth:240},{id:"traffic",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>i.a.createElement(w.a,{size:"body"},Object(K.b)(e)),minWidth:80,maxWidth:170},{id:"rx_bytes",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"COMMON_WORD_DOWN"})),sortable:!0,renderCell:({rx_bytes:e})=>Ye(e,"down"),minWidth:80,maxWidth:170},{id:"tx_bytes",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"COMMON_WORD_UP"})),sortable:!0,renderCell:({tx_bytes:e})=>Ye(e,"up"),minWidth:80,maxWidth:170},{id:"trafficPercentage",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_APPLICATION_TRAFFIC"})),sortable:!0,renderCell:({barItems:e})=>i.a.createElement(Ge,null,i.a.createElement(We,{items:e,itemTooltip:qe})),minWidth:160}];var Ke=({dpiClientsData:e,currentClientsUsageApps:t})=>{const{motif:a}=Object(C.a)(),c=Object(n.useMemo)(()=>t.apps.reduce((e,t)=>({...e,[t.compoundAppId]:t}),{}),[t.apps]),l=Object(n.useMemo)(()=>e.reduce((e,n)=>{let i=n.traffic,l=n.rx_bytes,r=n.tx_bytes;const o="model"in n?Object(Be.c)(n):n.name||"hostname"in n&&n.hostname||n.mac,s=t.appIds.reduce((e,t)=>{const a=n.by_app.find(e=>e.compoundAppId===t);return a?(i-=a.tx_bytes+a.rx_bytes,l-=a.rx_bytes,r-=a.tx_bytes,[...e,{...a,traffic:a.tx_bytes+a.rx_bytes,color:c[a.compoundAppId].color,appName:c[a.compoundAppId].name,iconFileName:c[a.compoundAppId].iconFileName}]):e},[]);if(s.length){const t=s.map(e=>e.compoundAppId),c=i/n.traffic*100,d=n.by_app.filter(e=>!t.includes(e.compoundAppId)).length,m=s.map(e=>({value:e.traffic/n.traffic*100,color:e.color,up:Object(K.b)(e.tx_bytes),down:Object(K.b)(e.rx_bytes),appName:e.appName,iconFileName:e.iconFileName}));return[...e,{...n,name:o,by_app:s,traffic:n.traffic-i,rx_bytes:n.rx_bytes-l,tx_bytes:n.tx_bytes-r,trafficPercentage:100-c,barItems:[...m,{value:c,color:f.a.motifs[a].neutral03,remainingAppsCount:d}]}]}return e},[]),[e,t.appIds,c,a]);return i.a.createElement(Me,null,l.length?i.a.createElement(ce.a,{items:l,columns:Je,idField:"mac",disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,rowHeight:42}):i.a.createElement(Te,null))};const Xe=Object(O.c)(j.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 375px;
  min-height: 452px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 20px -13px #b8b8b8;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    min-height: 296px;
  }
`,Qe=Object(O.c)("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(383px, auto));
  width: 100%;
  padding: 20px 16px;
  overflow: auto; // For non webkit browsers
  overflow: overlay;
  grid-gap: 16px;

  @media (min-width: ${({theme:e})=>e.breakpoints.bp1366}px) {
    grid-template-columns: repeat(2, minmax(383px, auto));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.bp1920}px) {
    grid-template-columns: repeat(3, minmax(383px, auto));
  }
`;var Ze=({dpiDataByCategory:e,currentCategories:t,dpiDataByApp:a,clients:c,currentClientsUsageApps:l,dpiDataTotal:r,updateCurrentClientUsageApps:o})=>{var s;const[d,m]=Object(n.useState)("traffic"),{subSection:p}=Object(h.m)(),b=e.filter(e=>t.includes(e.cat)),u=Object(n.useMemo)(()=>{const e=[...b];switch(d){case"upload":return e.sort((e,t)=>t.tx_bytes-e.tx_bytes);case"download":return e.sort((e,t)=>t.rx_bytes-e.rx_bytes);case"traffic":default:return b}},[b,d]);return i.a.createElement(Xe,{flexDirection:"column"},i.a.createElement(J,{sorting:d,setSorting:m,categoryName:null===(s=l.cat)||void 0===s?void 0:s.name}),"overview"===p&&(u.length?i.a.createElement(Qe,null,u.map(e=>i.a.createElement(_e,{key:e.cat,category:e,dpiDataByApp:a,dpiDataTotal:r.rx_bytes+r.tx_bytes,updateCurrentClientUsageApps:o}))):i.a.createElement(Te,null)),R(p)&&i.a.createElement(Ke,{dpiClientsData:c,currentClientsUsageApps:l}),"topapplications"===p&&i.a.createElement(De,{dpiDataByApp:a,dpiDataByCategory:e,currentCategories:t,updateCurrentClientUsageApps:o}))};const et=Object(O.c)(ie.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,tt=Object(O.c)(w.a)`
  max-width: calc(100% - 18px);
`,at=[{id:"name",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({color:e,name:t})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(et,{customColor:e}),i.a.createElement(tt,{size:"body",truncate:!0},t)),minWidth:110},{id:"traffic",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>i.a.createElement(w.a,{size:"body"},Object(K.b)(e,2)),minWidth:70,maxWidth:80},{id:"known_clients",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({known_clients:e})=>i.a.createElement(w.a,{size:"body"},e),minWidth:60,maxWidth:80}],nt=Object(O.c)("div")`
  margin: 0 24px 24px;
  width: calc(100% - 48px);
  height: 100%;

  & > div > div > div > div {
    overflow-x: hidden !important;
  }

  & tr {
    background-color: transparent !important;
  }
  & tbody > tr:last-child > td > div > div > input {
    display: none !important;
  }
  & tbody > tr:last-child {
    cursor: default !important;
    pointer-events: none !important;
    & > td:first-child {
      display: none;
    }

    & > td:last-child > div > span {
      margin-left: 10px;
      font-weight: bold;
    }

    & > td {
      border-bottom: 0 !important;
    }
  }
`;var it=Object(_.f)(({dpiDataByCategory:e,currentCategories:t,updateCurrentCategories:a,intl:c})=>{const l=Object(n.useMemo)(()=>((e,t)=>[{id:"name",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({cat:t,color:a,name:n})=>{const c=e.includes(t)?a:"EDEDF0";return"COMMON_TOTAL_TRAFFIC"!==n?i.a.createElement(i.a.Fragment,null,i.a.createElement(et,{customColor:c}),i.a.createElement(tt,{size:"body",truncate:!0},i.a.createElement(_.c,{id:n}))):i.a.createElement(w.a,{size:"body",style:{fontWeight:"bold"}},i.a.createElement(_.c,{id:"COMMON_TOTAL_TRAFFIC"}))},minWidth:110,compare:(e,a)=>t.formatMessage({id:e}).localeCompare(t.formatMessage({id:a}))},{id:"clientsCount",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({name:e,clientsCount:t})=>"COMMON_TOTAL_TRAFFIC"!==e?i.a.createElement(w.a,{size:"body"},t):null,minWidth:75},{id:"traffic",label:i.a.createElement(w.a,{size:"body"},i.a.createElement(_.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>i.a.createElement(w.a,{size:"body"},Object(K.b)(e,2)),minWidth:75}])(t,c),[t,c]);return i.a.createElement(nt,null,i.a.createElement(ce.a,{items:e,columns:l,idField:"cat",disableColumnFilters:!0,multiSelectMode:!0,selectedIds:t,onChangeSelection:e=>a(e),rowHeight:42,divideTableByKey:"normalRow",disableBlankRowDivide:!0}))});const ct=Object(O.c)(j.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  min-height: 40px;
  padding: 0 24px 0 24px;
`,lt=Object(O.c)(w.a)`
  white-space: nowrap;
`,rt=Object(O.c)(y.G)`
  margin: 0 6px 0 16px;
`;var ot=({dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:a})=>{const{subSection:n}=Object(h.m)(),c=e.filter(e=>t.includes(e.cat)),l=new Set(c.map(e=>e.clients).flat()),{catUp:r,catDown:o}=c.reduce((e,t)=>({catUp:e.catUp+t.tx_bytes,catDown:e.catDown+t.rx_bytes}),{catUp:0,catDown:0}),{appUp:s,appDown:d}=a.apps.reduce((e,t)=>a.appIds.includes(t.compoundAppId)?{appUp:e.appUp+t.tx_bytes,appDown:e.appDown+t.rx_bytes}:e,{appUp:0,appDown:0}),m=R(n),p=a.cat?a.cat.tx_bytes:r,b=a.cat?a.cat.rx_bytes:o;return i.a.createElement(ct,{alignItems:"center",justifyContent:"space-between"},i.a.createElement(lt,{truncate:!0},m?i.a.createElement(_.c,{id:"TRAFFIC_SELECTED_APPS_COUNT",values:{value1:a.appIds.length,value2:a.apps.length}}):i.a.createElement(_.c,{id:"TRAFFIC_CATEGORY_COUNT",values:{value1:c.length,value2:e.length}})),i.a.createElement(j.g,{justifyContent:"right",alignItems:"center"},i.a.createElement(pe.a,{up:m?s:r,down:m?d:o,upTotal:m&&p,downTotal:m&&b}),!m&&i.a.createElement(i.a.Fragment,null,i.a.createElement(rt,null),i.a.createElement(w.a,{weight:"bold"},l.size))))};const st=Object(O.c)(j.g)`
  height: 100%;
  max-height: 260px;
  padding: 26px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    border: 7px solid ${({theme:e})=>e.motifPalette.neutral02};
    border-radius: 100%;
    width: 172px;
    height: 172px;
    pointer-events: none;
  }

  & * > text:first-of-type {
    font-size: 28px;
  }
  & * > text:last-of-type {
    font-size: 12px;
  }
  .titleClassName {
    transform: translateY(12px);
  }
  .descriptionClassName {
    font-weight: bold;
    transform: translateY(-34px);
  }
`,dt=Object(O.c)(w.a)`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
`,mt=Object(O.c)(j.g)`
  margin-bottom: 8px;
`,pt=Object(O.c)(w.a)`
  color: ${f.a["purple-1"]};
`,bt=e=>0===(null==e?void 0:e.id)&&1===Object.keys(e).length?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(dt,{size:"body",weight:"bold"},i.a.createElement(_.c,{defaultMessage:e.name,id:e.name})),i.a.createElement(mt,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"TRAFFIC_TOOLTIP_TRAFFIC"})),i.a.createElement(w.a,null,Object(K.b)(e.traffic))),i.a.createElement(mt,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"COMMON_WORD_UP"})),i.a.createElement(pt,null,Object(K.b)(e.tx_bytes))),i.a.createElement(mt,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"COMMON_WORD_DOWN"})),i.a.createElement(w.a,{color:"info"},Object(K.b)(e.rx_bytes))),e.clients&&i.a.createElement(mt,{justifyContent:"space-between"},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"TRAFFIC_TOOLTIP_CLIENTS"})),i.a.createElement(w.a,null,e.clients.length)));var ut=Object(_.f)(({dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:a,intl:c})=>{const{motif:l}=Object(C.a)(),r="dark"===l,{subSection:o}=Object(h.m)(),[s,d]=Object(n.useMemo)(()=>{let a=0;const n=[];for(const i of e){if(255===i.cat&&!t.includes(255))break;t.includes(i.cat)&&(a+=i.traffic),n.push({...i,id:i.cat,value:i.traffic,color:t.includes(i.cat)?i.color:f.a.motifs[l].neutral03})}return[a,n]},[t,e,l]),[m,p]=Object(n.useMemo)(()=>{let e=0;const t=[];for(const n of a.apps)a.appIds.includes(n.compoundAppId)&&(e+=n.traffic),t.push({...n,id:n.compoundAppId,value:n.traffic,compoundId:n.compoundAppId});return[e,t]},[a.appIds,a.apps]),b=Object(n.useMemo)(()=>Object(K.b)(R(o)?m:s),[m,s,o]);return i.a.createElement(st,{justifyContent:"center",alignItems:"center",isDarkMode:r},i.a.createElement(X.a,{items:R(o)?p:d,renderTooltipMessage:bt,tooltipProps:{position:"right"},title:b,description:c.formatMessage({id:"TRAFFIC_DONUT_LABEL_IDENTIFIED_TRAFFIC"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",thickness:3.5,spacer:.5}))});const gt=Object(O.c)("div")`
  margin: 0 24px 24px;
  width: calc(100% - 48px);
  height: 100%;

  & > div > div > div > div {
    overflow-x: hidden !important;
  }

  & tr {
    background-color: transparent !important;
  }
`;var Ot=({currentClientsUsageApps:e,updateCurrentClientUsageApps:t})=>{const a=Object(n.useCallback)(a=>{t(e.cat,a)},[e.cat,t]);return i.a.createElement(gt,null,i.a.createElement(ce.a,{items:e.apps,columns:at,idField:"compoundAppId",disableColumnFilters:!0,multiSelectMode:!0,selectedIds:e.appIds,onChangeSelection:e=>a(e),rowHeight:42}))};const ht=Object(O.c)(j.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 354px;
  min-height: 452px;
  height: 100%;
  box-shadow: 0px 4px 20px -13px #b8b8b8;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    min-width: 375px;
  }
`;var Et=i.a.memo(({dpiDataByCategory:e,currentCategories:t,updateCurrentCategories:a,currentClientsUsageApps:n,dpiDataTotal:c,subSection:l,updateCurrentClientUsageApps:r})=>{const o=(null==c?void 0:c.rx_bytes)+(null==c?void 0:c.tx_bytes),s=[...e,{name:"COMMON_TOTAL_TRAFFIC",cat:0,apps:[],clients:[],clientsCount:0,rx_bytes:0,tx_bytes:0,rx_packets:0,tx_packets:0,traffic:o,color:"#",colorScheme:[],normalRow:!1}];return i.a.createElement(ht,{flexDirection:"column"},i.a.createElement(ot,{dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:n}),i.a.createElement(ut,{dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:n}),R(l)?i.a.createElement(Ot,{currentClientsUsageApps:n,updateCurrentClientUsageApps:r}):i.a.createElement(it,{currentCategories:t,dpiDataByCategory:s,updateCurrentCategories:a}))},(e,t)=>{var a,n,i,c;const l=(null===(a=e.dpiDataTotal)||void 0===a?void 0:a.rx_bytes)+(null===(n=e.dpiDataTotal)||void 0===n?void 0:n.tx_bytes),r=(null===(i=t.dpiDataTotal)||void 0===i?void 0:i.rx_bytes)+(null===(c=t.dpiDataTotal)||void 0===c?void 0:c.tx_bytes);return Object(K.b)(l)===Object(K.b)(r)&&e.subSection===t.subSection&&Object(E.a)(e.currentCategories,t.currentCategories)&&Object(E.a)(e.currentClientsUsageApps,t.currentClientsUsageApps)&&Object(E.a)(e.subSection,t.subSection)}),Ct=a(774);const ft=Object(O.c)("div")`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 16px;
  width: 100%;
  height: calc(100% - 48px);
  padding: 32px;
  overflow: overlay;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp1600}px) {
    grid-template-columns: 400px 1fr;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    grid: minmax(452px, 60%) minmax(446px, calc(40% - 16px)) / minmax(375px, 100%);
  }
`;function xt(){const{site:e,id:t,subId:a,subSection:l}=Object(h.m)(),r=Object(h.k)(),{path:s}=Object(h.n)(),{motif:d}=Object(C.a)(),[m,p]=Object(n.useState)([]),[b,u]=Object(n.useState)(!0),[g,O]=Object(n.useState)([]),[j,_]=Object(n.useState)({cat:void 0,apps:[],appIds:[]}),y=Object(c.useSelector)(Ct.a),[v,T,A,w]=Object(c.useSelector)(e=>Object(o.selectParsedDpiData)(e,y)),F=Object(n.useCallback)(e=>{const t=v.map(e=>e.cat);Object(E.a)(e.sort(),t.sort())?u(!0):u(!1),p(e)},[v]);Object(n.useEffect)(()=>{const e=v.map(e=>e.cat);Object(E.a)(e.sort(),g.sort())||(b&&p(e.filter(e=>255!==e)),O(e))},[v]);const S=Object(n.useCallback)((e,t)=>{const a=e?T.filter(t=>t.cat===e.cat):T,n=Object(x.e)(a).map((e,a)=>{const n=t.includes(e.compoundAppId);return{...e,selected:n,color:n?Object(x.c)(a)[4]:f.a.motifs[d].neutral03}}),i=n.reduce((e,t)=>t.selected?[...e,t.compoundAppId]:e,[]);_({cat:e,apps:n,appIds:i})},[T,d]);Object(n.useEffect)(()=>{const n=""!==t?Object(o.combineDuplicateCategories)(Number(t)):void 0,i=n?v.find(e=>e.cat===Number(n)):void 0,c=a?a.split(",").map(e=>Number(e)):[];if(i&&c.length){S(i,c);const t=Object(h.i)(s,{subSection:L.overviewClients,section:"traffic",site:e});r.push(t)}if(!i&&!c.length&&!j.cat&&R(l)){const t=Object(h.i)(s,{subSection:L.overview,section:"traffic",site:e});r.push(t)}},[t,a]);const I=e=>[...e].sort((e,t)=>255===e.cat?1:255===t.cat?-1:0),D=Object(n.useCallback)(()=>{S(null,j.appIds)},[j.appIds,S]);return Object(n.useEffect)(()=>{D()},[y.startDate,y.endDate]),i.a.createElement(ft,null,i.a.createElement(Et,{dpiDataByCategory:I(v),currentCategories:m,updateCurrentCategories:F,currentClientsUsageApps:j,updateCurrentClientUsageApps:S,dpiDataTotal:w,subSection:l}),i.a.createElement(Ze,{dpiDataByCategory:I(v),dpiDataByApp:T,currentCategories:m,clients:A,currentClientsUsageApps:j,updateCurrentClientUsageApps:S,dpiDataTotal:w}))}var jt=a(1825),_t=a(251),yt=a(21),vt=a(28),Tt=a(2435),At=a(16),wt=a(17),Ft=a(2407),St=a(30),It=a(64),Lt=a(1815),Dt=a(106),Rt=a(72);const Nt=O.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 12px;
  overflow-x: unset !important;

  > div {
    margin: initial;
  }
`,Bt=Object(O.c)(Dt.a)`
  text-transform: uppercase;
`,Mt=Object(O.c)("div")`
  display: flex;
  align-items: center;
  white-space: nowrap;
`,kt=Object(O.c)(v.a,{shouldForwardProp:e=>"hasCustomRange"!==e})`
  @media (max-width: 720px) {
    padding: 0;
  }
  ${({hasCustomRange:e})=>e?"@media (max-width: 1075px) {\n    & > * > button {\n      display: none;\n      &:nth-last-of-type(1) {\n        display: flex;\n      }\n    }\n  }":"@media (max-width: 870px) {\n    & > * > button {\n      display: none;\n      &:nth-last-of-type(1) {\n        display: flex;\n      }\n    }\n  }"}
`,Pt=O.a`
  overflow-y: auto;
  max-height: calc(90vh - 52px);
  padding: 0 !important;
  border: none;
`,zt=O.a`
  background-color: transparent !important;
`,Ut=(e,t,a,n,c,l)=>[...e.map(e=>({id:e.id,label:i.a.createElement(Bt,{size:"small",message:e.message,values:e.messageValues})})),{id:"Custom",className:zt,label:i.a.createElement(A.a,{classNameCard:Pt,align:"bottomLeft",renderToggle:l},i.a.createElement(Ft.a,{initialStartDate:Object(It.a)(t.startDate,a),initialEndDate:Object(It.a)(Object(wt.subSeconds)(t.endDate,1),a),numberOfMonths:2,disabledDays:{after:Object(It.a)(new Date,a)},onRangeSelected:({startDate:e,endDate:t})=>{const a=Object(wt.startOfDay)(e),i=Object(wt.endOfDay)(t);n({startDate:a,endDate:i}),c(Object(g.h)({startDate:a,endDate:i,preset:null}))},showInputs:!0}))}];var $t=({tabsVariant:e,customRange:t,setCustomRange:a})=>{const l=Object(c.useDispatch)(),r=Object(c.useSelector)(Ct.c),o=Object(c.useSelector)(St.selectLocaleSettings),d=Object(c.useSelector)(s.P),m=Object(c.useSelector)(Ct.a),p=Object(c.useSelector)(Rt.c),b=Object(It.d)(d,o,p),[u,O]=Object(n.useState)(null===m.preset?"Custom":m.preset),h=Object(n.useCallback)(()=>i.a.createElement(Mt,null,t?i.a.createElement(Lt.a,{start:t.startDate,end:t.endDate,timezone:b}):i.a.createElement(y.q,null)),[t,b]);return i.a.createElement(kt,{tabs:Ut(r,m,b,a,l,h),selectedTab:u,onSelectTab:({id:e})=>(e=>{const a=r.find(t=>t.id===e);a?l(Object(g.h)({...a.getRange(new Date),preset:e})):t&&l(Object(g.h)({...t,preset:null})),O(e)})(e),className:Nt,variant:e,hasCustomRange:t})};const Wt=Object(O.c)("div")`
  .base-control-panel {
    justify-content: center;
  }
`,Ht=Object(O.c)(w.a,{shouldForwardProp:e=>"hasCustomRange"!==e})`
  font-size: 14px;
  ${({hasCustomRange:e})=>e?"@media (max-width: 750px) {\n    margin: 0 300px 0 auto;\n  }":"@media (max-width: 410px) {\n    margin: 0 180px 0 auto;\n  }"}
`,Gt=Object(O.c)(j.g)`
  position: absolute;
  right: 36px;
`,Yt=e=>t=>t(Object(_t.a)({title:"STATISTICS_RESET_DATA_MODAL_TITLE",message:"STATISTICS_RESET_DATA_MODAL_MESSAGE",onConfirm:()=>t((e=>async t=>{t(Object(yt.e)());try{await Promise.all([t(Object(jt.a)()),t(Object(o.resetDpiData)())]),t(Object(vt.c)({icon:At.a.success,message:"STATISTICS_RESET_DATA_SUCCESS"})),t(Object(o.fetchDpiHistory)({timestampFrom:e.startDate.getTime(),timestampTo:e.endDate.getTime()})),t(Object(r.fetchDpi)())}catch{t(Object(vt.c)({icon:At.a.danger,message:"STATISTICS_RESET_DATA_ERROR"}))}})(e)),confirmButtonText:"COMMON_ACTION_RESET",confirmButtonProps:{variant:"danger"}}));var Vt=()=>{const e=Object(c.useDispatch)(),t=Object(c.useSelector)(Ct.a),[a,l]=Object(n.useState)(null===t.preset?{startDate:t.startDate,endDate:t.endDate}:null);return i.a.createElement(Wt,null,i.a.createElement(Tt.a,{isLoading:!1},i.a.createElement(Ht,{weight:"bold",hasCustomRange:a},i.a.createElement(_.c,{id:"STATISTICS_TABS_TRAFFIC_STATS"})),i.a.createElement(Gt,null,i.a.createElement($t,{customRange:a,setCustomRange:l,tabsVariant:"tertiary"}),i.a.createElement(T.a,{variant:"link",onClick:()=>e(Yt(t))},i.a.createElement(w.a,null,i.a.createElement(_.c,{id:"STATISTICS_RESET_DATA_BUTTON_LABEL"}))))))};const qt=Object(O.c)("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;var Jt=()=>{const{site:e}=Object(h.m)(),{path:t}=Object(h.n)(),{section:a}=Object(h.m)(),c=Object(h.k)();return Object(n.useEffect)(()=>{if(`/${e}/statistics`===c.location.pathname){const a=Object(h.i)(t,{subSection:L.overview,section:"traffic",site:e});c.push(a)}},[c,c.location.pathname,t,e]),i.a.createElement(qt,null,i.a.createElement(Vt,null),"traffic"===a&&i.a.createElement(xt,null))};t.default=()=>{var e,t;const a=Object(c.useDispatch)(),O=Object(c.useSelector)(b.b),h=null!==(t=null===(e=Object(c.useSelector)(s.O))||void 0===e?void 0:e.offlineClientTimeframe)&&void 0!==t?t:24,E=Object(c.useSelector)(b.c),C=Object(c.useSelector)(Ct.a),{startDate:f,endDate:x}=null===C.preset?C:O[C.preset].getRange(new Date),j=Object(c.useSelector)(Object(Ct.b)(E));return Object(n.useEffect)(()=>{j&&a(r.fetchDpiAction),j||a(Object(u.c)(r.fetchDpiAction))},[a,j]),Object(n.useEffect)(()=>()=>{a(Object(g.g)()),a(Object(u.c)(r.fetchDpiAction))},[]),Object(p.g)([Object(d.c)("statistics"),Object(g.e)({startDate:f,endDate:x,preset:C.preset}),r.fetchDpiAction,Object(o.fetchDpiHistory)({timestampFrom:f.getTime(),timestampTo:x.getTime()},{crudCacheStrategy:{type:u.a.CACHE}}),Object(l.fetchClients)(void 0,{crudCacheStrategy:{type:u.a.CACHE}}),Object(l.fetchOfflineClients)({queryParams:{withinHours:h}},{crudCacheStrategy:{type:u.a.CACHE}}),Object(l.fetchBlockedClients)(void 0,{crudCacheStrategy:{type:u.a.CACHE}})],i.a.createElement(m.a,null,i.a.createElement(Jt,null)),{trackingName:"statistics"})}}}]);
//# sourceMappingURL=statistics.f400b1db6c26e1693504.js.map