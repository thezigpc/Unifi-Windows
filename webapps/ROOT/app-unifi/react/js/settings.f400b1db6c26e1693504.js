(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[11],{2873:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a(5),i=a(23),o=a(35),s=a(54),u=a(1779),d=a(1224),m=a(160),h=a(164),p=a(234),b=a(184),f=a(140),O=a(252),g=a(30),v=a(489),E=a(1140),S=a(183),j=a(268),C=a(502),x=a(373),y=a(40),N=a(7),k=a(136),w=a(2),P=a(2885),_=a(42),T=a(10),A=a(9),B=a(72);var I=()=>{const e=Object(l.useSelector)(B.d);return c.a.createElement(A.a,{flexDirection:"column",marginBottom:4},c.a.createElement(_.a,{color:"primary"},c.a.createElement(w.c,{id:"SETTINGS_SUBNAV_NETWORK_WEB_APP",values:{version:e}})))},R=a(902),U=a(14);const M=Object(r.c)(T.ab)`
  margin-right: 8px;
`,$=Object(r.c)(P.a)`
  /* Replace \`border-top\` with \`padding-top\` and remove \`border-left\` match the design */
  border-left: none !important;
  border-top: none !important;
  padding-top: 1px;
  position: relative;

  > ul:first-of-type {
    /* Make \`SettingsNavigation\` items list scrollable to be able to display all found search results */
    /* Although this *could* be done in \`ui-components\` it would require all UniFi apps \`SettingsNavigation\` elements to have header of the same height. */
    max-height: calc(100% - 64px);
    overflow: auto;
  }
`,D=Object(r.c)(_.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-l2"]} !important;
`;var F=({currentSection:e,onNavigate:t})=>{const a=Object(n.useContext)(k.SearchContext),{appContext:r,groupedResults:i,value:o}=a,s=null==o||""===o,u=Object(y.n)(),d=Object(k.useExecuteAction)(r),m=Object(l.useSelector)(k.selectSelectedResult),h=Object(n.useMemo)(()=>(null==i?void 0:i.length)>0?i.reduce((e,{group:t,results:a},n)=>{const c=R.a.find(({id:e})=>e===t.id);return c&&(e.push({...c,label:c.name,level:"primary"}),e.push({id:t.id+"-secondary-spacer",level:"secondary",spacer:!0})),e.concat(a.map(e=>{var t;return{breadcrumbs:(null===(t=e.translatedBreadcrumbs)||void 0===t?void 0:t.length)>0?e.translatedBreadcrumbs:void 0,id:e.id,label:e.translatedName,level:"secondary",translatedSearchAction:e}})).concat(n<i.length-1?{id:t.id+"-group-spacer",level:"primary",spacer:!0}:[])},[]):[{id:"no-search-results-found",label:c.a.createElement(U.g,{alignItems:"center"},c.a.createElement(M,{color:u.motifPalette.info}),c.a.createElement(D,{color:"secondary"},c.a.createElement(w.c,{id:"COMMON_SEARCH_NO_RESULTS"}))),level:"primary"}],[i,u]),p=Object(n.useCallback)((e,a)=>{a.path&&t("/"+a.path)},[t]),b=Object(n.useCallback)((e,t)=>d(t.translatedSearchAction),[d]);return c.a.createElement($,{Header:c.a.createElement(k.Search,null),navItems:R.a,searchItems:s?[]:h,selectedNavItemId:s?null==e?void 0:e.id:void 0,selectedSearchItemId:s||null==m?void 0:m.id,onSelectNavItem:p,onSelectSearchItem:b,Footer:s&&c.a.createElement(U.g,{flexDirection:"column"},c.a.createElement(I,null),c.a.createElement(U.n,null))})};var G=c.a.memo(e=>c.a.createElement(k.SearchProvider,null,c.a.createElement(F,Object.assign({},e))),(e,t)=>e.currentSection===t.currentSection),H=a(232),W=a(37),z=a(351),V=a(1168),J=a(616);var q=e=>{const t=Object(l.useSelector)(J.b),a=Object(i.k)(),r=Object(i.l)(),{node:o,fullPath:s,params:u}=Object(n.useMemo)(()=>Object(z.b)(t,r.pathname),[r.pathname,t]),{name:d}=o;return c.a.createElement(V.a,Object.assign({buttonText:c.a.createElement(w.c,{id:d?"COMMON_404_BUTTON":"COMMON_404_BUTTON_GENERIC",values:{destinationName:d}}),onClickButton:()=>a.push(Object(z.a)(s,u))},e))};const K=Object(r.c)("div")`
  display: flex;
  width: 100%;
  height: 100%;
`;var L=()=>{const e=Object(i.m)(),t=Object(l.useSelector)(Object(W.l)(null==e?void 0:e.site));let a=!1;const r=Object(l.useSelector)(J.a);return c.a.createElement(K,null,c.a.createElement(i.g,null,r.map(({path:e,fullPath:r,component:l,redirect:o})=>{if(l){const t=l;return c.a.createElement(H.a,{exact:!0,key:e,path:r},({match:e})=>(a=a||!!e,c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(t,null))))}return o?c.a.createElement(H.a,{exact:!0,key:e,path:r},c.a.createElement(i.c,{to:`${t}/${o}`})):null}),a&&c.a.createElement(H.a,{component:q})))},Q=a(270),X=a(21),Y=a(493);const Z=Object(r.c)(j.b)`
  flex-direction: column;
  border-left: 1px solid ${({theme:e})=>e.motifPalette.ui03};
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,ee=Object(r.c)("div")`
  display: flex;
  height: 100%;
  transition: all 500ms ease;
  width: 100%;
`,te=Object(r.c)("div")`
  > div > div {
    align-items: flex-start;
    background-color: ${({theme:e})=>e.motifPalette.uiBase} !important;
    display: flex;
    justify-content: center;
    outline: 0;
    overflow: auto;
    padding: 0;
    position: absolute !important;
    z-index: 600;
  }
`,ae={fetchAPGroups:m.fetchAPGroups,fetchWlanEnrichedConfiguration:d.fetchWlanEnrichedConfiguration,fetchCountryChannels:h.a,fetchDevicesBasic:p.fetchDevicesBasic,fetchFeatures:b.c,fetchHealth:f.b,fetchRadiusProfiles:O.fetchRadiusProfiles,fetchSettings:g.fetchSettings,loadTranslations:S.c};t.default=Object(o.compose)(Object(l.connect)(null,ae),Object(x.c)(({fetchAPGroups:e,fetchWlanEnrichedConfiguration:t,fetchCountryChannels:a,fetchDevicesBasic:n,fetchFeatures:c,fetchHealth:r,fetchRadiusProfiles:l,fetchSettings:i,loadTranslations:o})=>(e(),t(),a(),n(),l(),Promise.all([r(),i(),o("settings"),c(void 0,{crudCacheStrategy:{type:N.a.CACHE}})])),void 0,"settings-page"))(({history:e,location:{pathname:t},match:{path:a,url:r}})=>{const{params:{urlSection:o,urlSubsection:d}={}}=Object(i.j)(t.slice(t.indexOf(r)),{path:a+"/:urlSection/:urlSubsection?"})||{},m=Q.d.find(e=>e.path===o),h=Object(s.a)(m,"subsections",[]).find(e=>e.path===d);Object(y.p)("EVT_AD_BackupCreated",v.f,{id:"settings/backupCreated",forSuperSite:!0,unregisterOnUnmount:!1}),Object(y.p)("EVT_AD_BackupFailed",v.j,{id:"settings/backupFailed",forSuperSite:!0,unregisterOnUnmount:!1}),Object(y.p)("radio-ai:plan",E.b,{id:"settings/radioAi",forSuperSite:!1,unregisterOnUnmount:!1});const p=Object(n.useCallback)(e=>{if(h){return("function"==typeof h.featureState?h.featureState(e):h.featureState)===u.a.comingSoon}return!1},[h]),b=Object(l.useDispatch)(),f=Object(l.useSelector)(p),O=Object(n.useCallback)(t=>{e.push(`${r}${t}`)},[e,r]);return Object(n.useEffect)(()=>()=>function(e){if(!e)return;const t=Object(Y.c)();if(!/^\/(\w)+\/settings(\/|$)/.test(window.location.pathname)&&t&&t.childElementCount){e(Object(X.e)());const a=Object(Y.b)();if(a){const e=t.parentNode.removeChild(t);a.appendChild(e),setTimeout((function t(){e.childElementCount?setTimeout(t):a.removeChild(e)}))}}}(b),[]),c.a.createElement(Z,null,c.a.createElement(ee,null,c.a.createElement(G,{onNavigate:O,currentSection:m}),c.a.createElement(j.a,null,c.a.createElement(te,{id:"modal-settings-container"}),c.a.createElement(C.b,{disabled:f},c.a.createElement(L,null)))))})}}]);
//# sourceMappingURL=settings.f400b1db6c26e1693504.js.map