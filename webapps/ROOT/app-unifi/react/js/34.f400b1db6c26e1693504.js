(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[34],{1774:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(3),l=a(2),r=a(1780),o=a.n(r),s=a(1259),d=a(493),E=a(494);const p=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null,leaveButtonText:r="SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE",stayButtonText:m="SETTINGS_MODAL_UNSAVED_CHANGES_STAY",modalTitle:u="SETTINGS_MODAL_UNSAVED_CHANGES_TITLE",modalDescription:_="SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"})=>{const S=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),I=Object(E.a)(t),T=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),b=Object(n.useCallback)(e=>(e={},t={})=>I(e,t)&&T(e,t),[I,T]);return!!e&&i.a.createElement(o.a,{when:b(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(l.c,{id:m}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(l.c,{id:r}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:S,parentSelector:d.b,title:i.a.createElement(l.c,{id:u}),onRequestClose:()=>c?c(e):e()},i.a.createElement(p,null,i.a.createElement(l.c,{id:_}))))}},1775:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1789:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(54),i=a(6),c=a(7),l=a(872);const r=Object(c.A)(Object(l.c)()),o=Object(i.a)(r,e=>Object(n.a)(e,"data",[])),s=e=>t=>{const a=Object(c.w)(Object(l.b)(e),t.models);return Object(n.a)(a,"data",{})}},1790:function(e,t){},1791:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(54),i=a(6),c=a(7),l=a(871);const r=Object(c.A)(Object(l.b)()),o=Object(i.a)(r,e=>Object(n.a)(e,"data",[])),s=e=>t=>{const a=Object(c.w)(Object(l.a)(e),t.models);return Object(n.a)(a,"data",{})}},1792:function(e,t){},1795:function(e,t,a){"use strict";a.r(t);var n=a(871);a.d(t,"fetchDpiApps",(function(){return n.b})),a.d(t,"fetchDpiApp",(function(){return n.a})),a.d(t,"saveDpiApp",(function(){return n.d})),a.d(t,"saveDpiAppToDpiGroup",(function(){return n.e})),a.d(t,"removeDpiApp",(function(){return n.c}));var i=a(430);a.d(t,"MODEL",(function(){return i.a})),a.d(t,"PATH",(function(){return i.b}));var c=a(1791);a.d(t,"dpiAppsSelector",(function(){return c.a})),a.d(t,"selectDpiApps",(function(){return c.c})),a.d(t,"selectDpiApp",(function(){return c.b}));var l=a(1792);for(var r in l)["default","fetchDpiApps","fetchDpiApp","saveDpiApp","saveDpiAppToDpiGroup","removeDpiApp","MODEL","PATH","dpiAppsSelector","selectDpiApps","selectDpiApp"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(r)},1825:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var n=a(46),i=a(7),c=a(25);const l=(e,t)=>Object(i.p)(n.a.RESET_DPI,"/api/s/{site}/cmd/stat",{},e&&t?Object(c.a)(e,t):{}),r=e=>{var t;return(null===(t=Object(i.w)(l(),e.models))||void 0===t?void 0:t.pending)||!1}},1857:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(26),i=a(1825),c=a(251),l=a(21);const r=()=>e=>e(Object(c.a)({title:"SETTINGS_SECURITY_DPI_CONFIRM_CLEAR_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_CONFIRM_CLEAR_MODAL_DESCR",messageValues:{color:n.a.motifs.dark.danger},confirmButtonProps:{variant:"danger"},confirmButtonText:"COMMON_ACTION_DELETE",onConfirm:()=>e(e=>(e(Object(l.e)()),e(Object(i.a)("SETTINGS_SECURITY_DPI_RESET_COUNTERS_ERROR","SETTINGS_SECURITY_DPI_RESET_COUNTERS_SUCCESS"))))}))},2279:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),l=a(5),r=a(18),o=a(30),s=a(2429),d=a(28),E=a(40),p=a(16),m=a(36),u=a(3),_=a(1763),S=a(1761),I=a(1762),T=a(14),b=a(7),O=a(1795),C=a(34),N=a(56),g=a(571),R=a(136),h=a(38),D=a(72),A=a(178),f=a(1825),j=a(23),G=a(879),v=a(10),y=a(1895),x=a(54),P=a(25),L=a(162),w=a(9),U=a(719),M=a(88);const k=M.dpi.ruleMap.categories,B=M.dpi.ruleMap.applications,Y=Object.keys(k).reduce((e,t)=>{const{name:a}=k[t];return e[a]?e[a].push(t):e[a]=[t],e},{}),F=Object.entries(Y).map(([e,t])=>({categoryIds:t,name:e,id:e})).sort((e,t)=>e.name.localeCompare(t.name)),$=(e,t)=>t?e?i.a.createElement(v.u,{width:12,height:12}):"-":null,W=F.map(({name:e})=>({value:e,label:e})),V=Object(u.c)(v.Sb)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
`,H=[{id:"name",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_NAME"}),renderCell:({name:e})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(V,{height:18,width:16})," ",e),minWidth:110},{id:"categoryNames",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_CATEGORIES"}),renderCell:({cats:e})=>e&&e.length,minWidth:100},{id:"apps",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_APPS"}),renderCell:({apps:e})=>e&&e.length,minWidth:65},{id:"enabled",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_ENABLED"}),renderCell:({enabled:e,child:t})=>$(e,t),align:"center",minWidth:75},{id:"blocked",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_BLOCKED"}),renderCell:({blocked:e,child:t})=>$(e,t),align:"center",minWidth:90},{id:"log",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_LOG_TRAFFIC"}),renderCell:({log:e,child:t})=>$(e,t),align:"center",minWidth:90}],z=[{id:"name",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_NETWORK"}),minWidth:140},{id:"dpiGroupName",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GROUP_NAME"}),minWidth:110},{id:"ip_subnet",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SUBNET"}),minWidth:80},{id:"ipv6_subnet",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SUBNET_IPV6"}),minWidth:130},{id:"vlan",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_VLAN"}),minWidth:80}],K=[{id:"name",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_WIRELESS_NETWORK"}),minWidth:140},{id:"dpiGroupName",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GROUP_NAME"}),minWidth:110},{id:"security",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SECURITY"}),renderCell:({security:e})=>i.a.createElement(c.c,{id:Object(N.getWlanSecurityTypeTranslationKey)(e)}),minWidth:80},{id:"is_guest",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GUEST_NETWORK"}),renderCell:({is_guest:e})=>$(e,!0),minWidth:130},{id:"vlan",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_VLAN"}),minWidth:80}];var q=a(6),J=a(2315),Q=a(813);const X=e=>({value:e.toString(),label:B[e].name,appIds:[e.toString()],...B[e]}),Z=e=>F.find(t=>t.name===e),ee=e=>Object(J.a)(e.map(e=>F.find(t=>t.categoryIds.includes(e)).name)),te=e=>Object(J.a)(e.map(e=>F.find(t=>t.categoryIds.includes(e)).name)),ae=(e,t)=>e.filter(e=>((e,t)=>{const{dpigroup_id:a}=t,n=!!a,i=!!e.find(({_id:e})=>a===e);return n&&i})(t,e)).map((e=>t=>{const{dpigroup_id:a}=t,{name:n}=e.find(({_id:e})=>a===e);return{...t,dpiGroupName:n}})(t)),ne=(e,t)=>e.find(e=>e.dpiapp_ids&&e.dpiapp_ids.some(e=>e===t)),ie=e=>e.map(({name:e,_id:t})=>({label:e,value:t})),ce=(e,t)=>!!e.find(e=>!((e,t)=>{const{dpigroup_id:a}=t,n=!!a,i=!!e.find(({_id:e})=>a===e);return n&&i})(t,e)),le=(e,t,a)=>e.map(e=>{const n=t.find(({_id:t})=>t===e),i=[...n.cats.reduce((e,t)=>{const a=F.find(e=>e.categoryIds.includes(t));return e.add(a.name)},new Set)];return{...n,parentId:a,categoryNames:i}}),re=Object(q.a)(g.selectDpiGroups,O.selectDpiApps,(e,t)=>e.reduce((e,a)=>{const{dpiapp_ids:n}=a,i={...a,children:[]};return n&&n.length&&(i.children=le(n,t,a._id)),e.push(i),e},[])),oe=Object(q.a)(C.selectNetworksData,g.selectDpiGroups,(e,t)=>ce(e.filter(C.isCorporateOrGuestNetwork),t)),se=Object(q.a)(N.selectWifiNetworksData,g.selectDpiGroups,ce),de=Object(q.a)(g.selectDpiGroups,ie),Ee=Object(q.a)(N.selectWifiNetworksData,g.selectDpiGroups,ae),pe=Object(q.a)(C.selectNetworksData,g.selectDpiGroups,ae),me=Object(q.a)(C.selectNetworksData,g.selectDpiGroups,(e,t)=>ie(e.filter(C.isCorporateOrGuestNetwork))),ue=Object(q.a)(N.selectWifiNetworksData,g.selectDpiGroups,ie);var _e=a(168),Se=a(87);const Ie=Object(u.c)(T.g)`
  font-size: 18px !important;
  padding: 25px 40px 0 40px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,Te=Object(u.c)("div")`
  position: absolute;
  right: 40px;
`,be=Object(u.c)(T.c)`
  width: 20px;
  color: ${({theme:e})=>e.motifPalette.icon02} !important;
`;var Oe,Ce=({onClose:e,title:t,closeActionName:a})=>i.a.createElement(Ie,{justifyContent:"center"},t,i.a.createElement(Te,null,i.a.createElement(be,{variant:"inline",name:a,legacy:!1,onClick:e},i.a.createElement(v.A,null))));!function(e){e.RESTRICTION="restriction",e.RESTRICTION_GROUP="restrictionGroup",e.WIRELESS_ASSIGNMENTS="wirelessAssignments",e.WIRED_ASSIGNMENTS="wiredAssignments"}(Oe||(Oe={}));const Ne=Object(u.c)("footer")`
  padding: 0 40px 32px 40px;
`,ge=Object(u.c)(_.a)`
  padding: 32px 0 !important;
`,Re=Object(u.c)(I.a)`
  flex: 1;
`,he=Object(u.c)(Se.a)`
  padding: 0 !important;
  width: 476px !important;
`,De=Object(u.c)(_e.a)`
  width: 128px !important;
`,Ae=Object(u.c)("div")`
  margin-right: auto;
`;var fe=({onOpenConfirmModal:e,setCurrentOnClose:t})=>{const a=Object(l.useDispatch)(),o=Object(j.k)(),{formName:s,primaryId:d}=Object(j.m)(),p=Object(l.useSelector)(me),u=Object(l.useSelector)(ue),_=Object(l.useSelector)(de),I=Object(l.useSelector)(C.selectNetworksData),b=Object(l.useSelector)(N.selectWifiNetworksData),O=Object(E.j)("security/traffic"),g=Object(l.useSelector)(r.x),R=s===Oe.WIRED_ASSIGNMENTS,D=s===Oe.WIRELESS_ASSIGNMENTS,A=R||D,f=()=>o.push(O),G=Object(n.useMemo)(()=>{const e=R?p:u,t=R?I:b;let a=e.length?e[0].value:"",n=_[0].value;return A&&d&&(a=e.find(e=>e.value===d).value,n=t.find(e=>e._id===d).dpigroup_id),{networkId:a,restrictionGroupId:n}},[R,p,u,I,b,_,A,d]);return i.a.createElement(m.c,{initialValues:G,onSubmit:async({networkId:e,restrictionGroupId:t},{setSubmitting:n})=>{try{const n=Object(P.a)("SETTINGS_SECURITY_DPI_ASSIGN_SAVE_ERROR","SETTINGS_SECURITY_DPI_ASSIGN_SAVE_SUCCESS"),i=b.find(t=>t._id===e);if(i&&i._id){const c={...i,dpi_enabled:!0,dpigroup_id:t};await a(Object(N.updateWifiNetwork)(e,c,void 0,n))}const c=I.find(t=>t._id===e);if(c&&c._id){const e={...c,dpi_enabled:!0,dpigroup_id:t};await a(Object(C.updateNetwork)(e,{},n))}f()}catch(i){n(!1)}},enableReinitialize:!0},i.a.createElement(he,{footer:()=>{const{handleSubmit:a,isSubmitting:n}=Object(m.e)();return i.a.createElement(Ne,null,i.a.createElement(T.g,{alignItems:"center",justifyContent:"flex-end"},!g&&d&&i.a.createElement(Ae,null,i.a.createElement(_e.a,{type:"button",disabled:n,variant:"default",onClick:()=>{e(G.networkId),t(()=>f)}},i.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"}))),i.a.createElement(De,{legacy:!1,name:"restrictionAssignmentModal-close",onClick:()=>f,disabled:n},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(_e.a,{type:"submit",variant:"primary",name:"restrictionAssignmentModal-assign-dpi-group",onClick:()=>a(),disabled:n},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_BUTTON"}))))},isOpen:A,header:i.a.createElement(Ce,{title:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TITLE"}),onClose:f,closeActionName:"restrictionAssignmentModal-close"}),onRequestClose:f},i.a.createElement(ge,null,i.a.createElement(S.a,null,i.a.createElement(Re,null,i.a.createElement(h.Field,{name:"networkId",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ASSIGN_LABEL_NETWORK",type:"dropdown",options:R?p:u,disabled:!!d,full:!0}))),i.a.createElement(S.a,null,i.a.createElement(Re,null,i.a.createElement(h.Field,{name:"restrictionGroupId",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ASSIGN_LABEL_RESTRICTION_GROUP",type:"dropdown",options:_,full:!0}))))))},je=a(19);const Ge=Object(u.c)("footer")`
  padding: 0 40px 32px 40px;
`,ve=Object(u.c)(_.a)`
  padding: 32px 0 !important;
`,ye=Object(u.c)(Se.a)`
  padding: 0 !important;
  width: 342px !important;
`,xe=Object(u.c)(T.c)`
  width: 128px !important;
`,Pe=je.a.object().shape({name:je.a.string().label("SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_LABEL").required()});var Le=()=>{const e=Object(l.useDispatch)(),t=Object(j.k)(),{formName:a,primaryId:r}=Object(j.m)(),o=Object(E.j)("security/traffic"),s=()=>t.push(o),d=Object(l.useSelector)(Object(g.selectDpiGroup)(r)),p=Object(n.useMemo)(()=>({name:"",...d}),[d]);return i.a.createElement(m.c,{initialValues:p,validationSchema:Pe,onSubmit:async(t,{setSubmitting:a})=>{try{await e(Object(g.saveDpiGroup)(t,{withToast:!0})),s()}catch(n){a(!1)}},enableReinitialize:!0},i.a.createElement(ye,{footer:()=>{const{handleSubmit:e,isSubmitting:t}=Object(m.e)();return i.a.createElement(Ge,null,i.a.createElement(T.g,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(xe,{legacy:!1,name:"restrictionDpiGroupModal-close",onClick:()=>s(),disabled:t},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(T.c,{type:"submit",variant:"primary",legacy:!1,name:"restrictionDpiGroupModal-save-dpi-group",onClick:()=>e(),disabled:t},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_SAVE"}))))},isOpen:a===Oe.RESTRICTION_GROUP,header:i.a.createElement(Ce,{title:i.a.createElement(c.c,{id:r?"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_EDIT_TITLE":"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_TITLE"}),onClose:s,closeActionName:"restrictionDpiGroupModal-close"}),onRequestClose:s},i.a.createElement(ve,null,i.a.createElement(S.a,null,i.a.createElement(I.a,{column:!0},i.a.createElement(h.Field,{name:"name",label:"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_LABEL",full:!0}))))))},we=a(73),Ue=a(818),Me=a(4),ke=a(1214),Be=a(1217),Ye=a(2311),Fe=a(2379);const $e=Object(u.c)(_.a)`
  padding: 32px 0 !important;
`,We=Object(u.c)(S.a)`
  justify-content: space-between !important;
`,Ve=Object(u.c)(ke.a)`
  background: ${({theme:e})=>e.motifPalette.ui04} !important;
`,He=Object(u.c)(h.Field)`
  label {
    color: ${({theme:e})=>e.motifPalette.ui05} !important;
  }

  input::placeholder {
    color: ${({theme:e})=>e.motifPalette.text01} !important;
  }
`,ze=Object(u.c)(I.a)`
  flex: 0 !important;
  justify-content: flex-end !important;
`,Ke=Object(u.c)(h.Field,{shouldForwardProp:e=>"hideChips"!==e})`
  // hide multi Dropdown chips, show our own chips, because 'apps' values can be different than 'options' prop
  >div: nth-child(2) {
    display: ${({hideChips:e})=>e?"none":"flex"};
  }

  label {
    left: -24px;
  }

  input::placeholder {
    color: ${({theme:e})=>e.motifPalette.text01} !important;
  }
`;var qe=Object(c.f)(({intl:e})=>{var t;const{values:a,setFieldValue:r,submitCount:o,errors:s}=Object(m.e)(),d=Object(l.useSelector)(Me.selectIsDpiSupportedByGateway),E=Object(n.useCallback)((e,t)=>{let n=[...t];if(e.categoryIds){const i=!t.find(t=>t===e.value),c=a.cats.filter(t=>!e.categoryIds.includes(t)),l=i?c:[...a.cats,...e.categoryIds],o=F.find(e=>e.name===a.selectedCategoryName);i||(n=n.filter(e=>!o.categoryIds.some(t=>Number(t)===Object(x.a)(B[e],"category_id"))),r("applicationOptions",a.applicationOptions.map(e=>({...e,disabled:!e.categoryIds})))),i&&e.categoryIds===o.categoryIds&&r("applicationOptions",a.applicationOptions.map(e=>({...e,disabled:!1}))),r("cats",l)}r("apps",n)},[r,a.applicationOptions,a.cats,a.selectedCategoryName]),p=Object(n.useMemo)(()=>a.apps.map(e=>{const t=Z(e),n=Object(x.a)(B[e],"name")||t.name;return i.a.createElement(Ve,{key:e,label:n,onClose:()=>{E(B[e]||t,a.apps.filter(t=>t!==e))}})}),[a.apps,E]);return Object(n.useEffect)(()=>{a.selectedCategoryName&&r("applicationOptions",((e,t)=>{const a=Z(e);return[{...a,value:a.id,label:t.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_ALL_APPLICATIONS_VALUE"})},...Y[e].reduce((e,t)=>[...e,...k[t].applications],[]).map(X)]})(a.selectedCategoryName,e))},[a.selectedCategoryName]),i.a.createElement($e,null,d?i.a.createElement(S.a,null,i.a.createElement(I.a,{column:!0},i.a.createElement(He,{name:"selectedCategoryName",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL",options:W,width:"100%",searchable:!0}))):i.a.createElement(S.a,null,i.a.createElement(I.a,{column:!0},i.a.createElement(Ke,{name:"cats",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL",multi:!0,options:W,width:"100%",validated:!0,searchable:!0}))),d&&i.a.createElement(S.a,null,i.a.createElement(I.a,{column:!0},i.a.createElement(Ke,{name:"apps",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_APPLICATION_LABEL",searchable:!0,multi:!0,options:a.applicationOptions||[],onChange:E,width:"100%",hideChips:!0,disabled:!(null===(t=a.applicationOptions)||void 0===t?void 0:t.length)}),!!Object(x.a)(s,"apps")&&!!o&&i.a.createElement(h.ValidationMessage,{visible:!0},Object(x.a)(s,"apps")),i.a.createElement(Be.a,null,p))),i.a.createElement(Ye.a,{marginBottom:"xxxxl"}),i.a.createElement(We,{unlimitedWidth:!0},i.a.createElement(Fe.a,{htmlFor:"blocked",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_BLOCKED_LABEL"}),description:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_BLOCKED_DESCRIPTION"}),alignWith:"toggleSmall"}),i.a.createElement(ze,null,i.a.createElement(h.Field,{name:"blocked",type:"checkbox"}))),i.a.createElement(We,{unlimitedWidth:!0},i.a.createElement(Fe.a,{htmlFor:"log",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_LOG_LABEL"}),description:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_LOG_DESCRIPTION"}),alignWith:"toggleSmall"}),i.a.createElement(ze,null,i.a.createElement(h.Field,{name:"log",type:"checkbox"}))),i.a.createElement(We,{unlimitedWidth:!0},i.a.createElement(Fe.a,{htmlFor:"groupEnabled",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_ENABLED_LABEL"}),alignWith:"toggleSmall"}),i.a.createElement(ze,null,i.a.createElement(h.Field,{name:"groupEnabled",type:"checkbox"}))),i.a.createElement(Ye.a,null))});const Je=Object(u.c)("footer")`
  padding: 0 40px 32px 40px;
`,Qe=Object(u.c)(Se.a)`
  padding: 0 !important;
  width: 378px !important;
`,Xe=Object(u.c)(_e.a)`
  width: 128px !important;
`,Ze=Object(we.a)((e,t,a,n)=>{const i=Object(J.a)(Object(x.a)(t,"cats",[])),c=Object(x.a)(t,"apps",[]);return{_id:null==t?void 0:t._id,group:a&&a._id||e[0].value,groupEnabled:Object(x.a)(t,"enabled",!1),cats:n?i:te(i),apps:[...c.map(Number),...ee(i)],blocked:Object(x.a)(t,"blocked",!1),log:Object(x.a)(t,"log",!1)}}),et=Object(we.a)((e,t)=>t?je.a.object().shape({cats:je.a.array(),apps:je.a.array().when("cats",{is:e=>!e.length,then:je.a.array().min(1).label(e.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_APPLICATION_LABEL"})),otherwise:je.a.array()})}):je.a.object().shape({cats:je.a.array().min(1).label(e.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL"}))}));var tt=Object(c.f)(({intl:e})=>{const t=Object(l.useDispatch)(),a=Object(j.k)(),r=Object(l.useSelector)(Me.selectIsDpiSupportedByGateway),{formName:o,primaryId:s,secondaryId:d}=Object(j.m)(),p=Object(l.useSelector)(Object(O.selectDpiApp)(d)),u=Object(l.useSelector)(Object(g.selectDpiGroup)(s)),_=Object(l.useSelector)(de),S=Object(E.j)("security/traffic"),I=()=>a.push(S),b=Object(n.useMemo)(()=>({...Ze(_,p,u,r)}),[_,p,u,r]);return o===Oe.RESTRICTION&&i.a.createElement(m.c,{initialValues:b,validationSchema:et(e,r),onSubmit:async(e,a)=>{const n=Ze(_,p,u,r),{apps:i,blocked:c,cats:l,groupEnabled:o,log:s,group:d}=e,E={apps:i.filter(Number).map(Number),blocked:c,cats:r?l:(m=l,Object(Q.a)(m.map(e=>F.find(t=>t.name===e).categoryIds))),enabled:o,log:s};var m;const S={...p,...E};try{await t(Object(O.saveDpiAppToDpiGroup)(S,d,n.group)),I()}catch(T){a(!1)}},enableReinitialize:!0},i.a.createElement(Qe,{footer:()=>{const{handleSubmit:e,isSubmitting:t}=Object(m.e)();return i.a.createElement(Je,null,i.a.createElement(T.g,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(Xe,{legacy:!1,name:"restrictionModal-close",onClick:()=>I(),disabled:t},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(_e.a,{type:"submit",variant:"primary",name:"restrictionModal-save-dpi-app-to-dpi-group",onClick:()=>e(),disabled:t},i.a.createElement(c.c,{id:!Object(Ue.a)(p)&&u?"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_EDIT_RESTRICTION":"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"}))))},isOpen:!0,header:i.a.createElement(Ce,{title:i.a.createElement(c.c,{id:!Object(Ue.a)(p)&&u?"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_EDIT_RESTRICTION":"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"}),onClose:I,closeActionName:"restrictionModal-close"}),onRequestClose:I},i.a.createElement(qe,null)))});const at=Object(u.c)(w.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,nt=Object(u.c)("div")`
  margin-top: 15px;
  padding-bottom: 28px;
`;var it=()=>{const e=Object(j.k)(),t=Object(l.useDispatch)(),a=Object(l.useSelector)(re),r=Object(l.useSelector)(g.selectDpiGroups),o=Object(n.useContext)(T.l),[s,p]=Object(n.useState)(!1),[m,u]=Object(n.useState)(null),_=Object(E.j)("security/traffic/restrictionGroup"),S=Object(E.j)("security/traffic/restriction"),I=Object(x.a)(m,"children",null),b=Object(n.useCallback)(e=>{u(e),p(!0)},[p]),C=Object(n.useCallback)(async()=>{if(s){p(!1);const a={...ne(r,m._id)};a.dpiapp_ids=a.dpiapp_ids.filter(e=>e!==m._id);const{successToast:n,failureToast:i}=Object(P.a)("SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_ERROR","SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_SUCCESS");try{await t(Object(g.saveDpiGroup)(a)),await t(Object(O.removeDpiApp)(m._id)),t(Object(d.c)(n))}catch(e){t(Object(d.c)(i(void 0,e)))}}},[t,r,m,s]),N=Object(n.useCallback)(async()=>{const{successToast:e,failureToast:a}=Object(P.a)("SETTINGS_SECURITY_DPI_MODAL_REMOVE_GROUP_ERROR","SETTINGS_SECURITY_DPI_MODAL_REMOVE_GROUP_SUCCESS");try{if(await t(Object(g.removeDpiGroup)(m._id)),m.dpiapp_ids){const e=m.dpiapp_ids.map(e=>t(Object(O.removeDpiApp)(e)));await Promise.all(e)}p(!1),t(Object(d.c)(e))}catch(n){t(Object(d.c)(a(null,n)))}},[t,m]),R=Object(n.useCallback)(()=>{I?N():C()},[I,N,C]);return i.a.createElement(nt,null,i.a.createElement(y.a,{idField:"_id",columns:H,items:a,disableColumnFilters:!0,disableTextPointer:!0,renderRowPopoverContent:t=>i.a.createElement(U.e,null,!o&&!t.parent&&i.a.createElement(L.c,{legacy:!1,name:"security-dpi-restriction-edit",type:"button",variant:"inline",onClick:()=>e.push(`${S}/${ne(r,t._id)._id}/${t._id}`)},i.a.createElement(c.c,{id:"COMMON_ACTION_EDIT"})),!o&&!t.attr_no_delete&&t.parent&&i.a.createElement(L.c,{legacy:!1,name:"security-dpi-restriction-group-edit",type:"button",variant:"inline",onClick:()=>e.push(`${_}/${t._id}`)},i.a.createElement(c.c,{id:"COMMON_ACTION_EDIT"})),!o&&!t.attr_no_delete&&i.a.createElement(L.c,{legacy:!1,name:"security-dpi-restriction-remove",onClick:()=>b(t),type:"button",variant:"inline"},i.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"})),!o&&t.parent&&i.a.createElement(L.c,{legacy:!1,name:"security-dpi-restriction-add",type:"button",variant:"inline",onClick:()=>e.push(`${S}/${t._id}`)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"})))}),i.a.createElement(at,{alignItems:"center"},i.a.createElement(L.c,{name:"security-dpi-restriction-group-add",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(_),Icon:i.a.createElement(v.Db,null)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_CREATE_NEW"}))),i.a.createElement(tt,null),i.a.createElement(Le,null),i.a.createElement(A.a,{isOpen:s,title:I?"COMMON_QUESTION_REMOVE":"SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_TITLE",message:I?"COMMON_QUESTION_ARE_YOU_SURE_YOU_WANT_TO_REMOVE":"SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_DESCR",messageValues:{name:Object(x.a)(m,"name")},titleValues:{name:Object(x.a)(m,"name")},onConfirm:R,onCancel:()=>p(!1)}))},ct=a(1757);const lt=Object(u.c)(w.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,rt=Object(u.c)("div")`
  margin-top: 35px;
  padding-bottom: 3px;
`;var ot=()=>{const e=Object(j.k)(),t=Object(l.useSelector)(pe),a=Object(l.useSelector)(oe),n=Object(E.j)("security/traffic/"+Oe.WIRED_ASSIGNMENTS);return i.a.createElement(rt,null,i.a.createElement(y.a,{idField:"_id",columns:z,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({_id:t})=>e.push(`${n}/${t}`)}),i.a.createElement(lt,{alignItems:"center"},a&&i.a.createElement(L.c,{name:"dpi-assign-restriction",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(n),Icon:i.a.createElement(v.m,null)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_BUTTON"}))))};const st=Object(u.c)(w.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,dt=Object(u.c)("div")`
  margin-top: 35px;
  padding-bottom: 3px;
`;var Et=()=>{const e=Object(j.k)(),t=Object(l.useSelector)(Ee),a=Object(E.j)("security/traffic/"+Oe.WIRELESS_ASSIGNMENTS),n=Object(l.useSelector)(se);return i.a.createElement(dt,null,i.a.createElement(y.a,{idField:"_id",columns:K,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({_id:t})=>e.push(`${a}/${t}`)}),i.a.createElement(st,{alignItems:"center"},n&&i.a.createElement(L.c,{name:"dpi-assign-restriction",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(a),Icon:i.a.createElement(v.m,null)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_WIFI_BUTTON"}))))};var pt=()=>{const e=Object(l.useDispatch)(),{formName:t}=Object(j.m)(),a=Object(l.useSelector)(C.selectNetworksData),r=Object(l.useSelector)(N.selectWifiNetworksData),[o,s]=Object(n.useState)(!1),[d,E]=Object(n.useState)(null),[p,m]=Object(n.useState)(void 0);return i.a.createElement(i.a.Fragment,null,i.a.createElement(ct.a,{items:[{id:"networkRestrictions",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_NETWORK_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(ot,null),openByDefault:t===Oe.WIRED_ASSIGNMENTS},{id:"wifiNetworkRestrictions",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_WIFI_NETWORK_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(Et,null),openByDefault:t===Oe.WIRELESS_ASSIGNMENTS}],variant:"secondary",multiOpen:!0}),i.a.createElement(fe,{onOpenConfirmModal:e=>{s(!0),E(e)},setCurrentOnClose:m}),i.a.createElement(A.a,{isOpen:o,title:"SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_MODAL_DESCR",onConfirm:()=>{(()=>{const t=Object(P.a)("SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_ERROR","SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_SUCCESS"),n=r.find(e=>e._id===d);if(n&&n._id){const a={...n,dpi_enabled:!1,dpigroup_id:""};e(Object(N.updateWifiNetwork)(d,a,void 0,t)).then(()=>p?p():null)}const i=a.find(e=>e._id===d);if(i&&i._id){const a={...i,dpi_enabled:!1,dpigroup_id:""};e(Object(C.updateNetwork)(a,{},t)).then(()=>p?p():null)}s(!1)})()},onCancel:()=>{m(void 0),s(!1)}}))};const mt=Object(u.c)(G.a)`
  > li {
    margin-top: 28px !important;
  }
`;var ut=()=>{const{formName:e}=Object(j.m)();return i.a.createElement(mt,{items:[{id:"dpiRestrictionDefinitions",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(it,null),openByDefault:e===Oe.RESTRICTION||e===Oe.RESTRICTION_GROUP},{id:"dpiRestrictionAssignments",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(pt,null),openByDefault:e===Oe.WIRED_ASSIGNMENTS||e===Oe.WIRELESS_ASSIGNMENTS}],multiOpen:!0})},_t=a(1857);const St=Object(u.c)(A.a)`
  mark {
    background: initial;
    color: ${({theme:e})=>e.motifPalette.danger};
  }
`;var It=()=>{const{setFieldValue:e,initialValues:t}=Object(m.e)(),[a,o]=Object(n.useState)(!1),s=Object(l.useSelector)(r.x),d=Object(l.useSelector)(f.b),p=Object(l.useDispatch)(),u=Object(l.useSelector)(D.m),A=Object(n.useCallback)(e=>{!e&&t.enabled&&o(!0)},[t.enabled]),j=Object(n.useCallback)(()=>{e("enabled",!0),o(!1)},[e]),G=Object(n.useCallback)(()=>{o(!1)},[]);return Object(E.g)([Object(O.fetchDpiApps)(void 0,{crudCacheStrategy:{type:b.a.CACHE}}),Object(g.fetchDpiGroups)(void 0,{crudCacheStrategy:{type:b.a.CACHE}}),Object(C.fetchNetworks)(void 0,{crudCacheStrategy:{type:b.a.CACHE}}),Object(N.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:b.a.CACHE}})],i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,null,i.a.createElement(St,{isOpen:a,onCancel:j,onConfirm:G,title:"SETTINGS_SECURITY_DPI_DISABLE_CONFIRM_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_DISABLE_CONFIRM_MODAL_TEXT",confirmButtonProps:{variant:"danger",children:i.a.createElement(c.c,{id:"COMMON_ACTION_DISABLE"})}}),u&&i.a.createElement(S.a,null,i.a.createElement(R.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"fingerprintingEnabled",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_LABEL_ENABLE_FINGERPRINTING"}),description:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_DESCRIPTION_ENABLE_FINGERPRINTING"}),searchIsApplicable:"isUdm",searchText:"SETTINGS_SECURITY_DPI_SEARCH_LABEL_ENABLE_FINGERPRINTING"}),i.a.createElement(I.a,null,i.a.createElement(h.Field,{name:"fingerprintingEnabled",type:"checkbox",disabled:s}))),i.a.createElement(S.a,null,i.a.createElement(R.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"enabled",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_LABEL_ENABLE_DPI"}),description:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_DESCRIPTION_ENABLE_DPI",values:{isUdm:u}}),searchText:"SETTINGS_SECURITY_DPI_SEARCH_LABEL_ENABLE_DPI",searchTags:["dpi"]}),i.a.createElement(I.a,null,i.a.createElement(h.Field,{name:"enabled",type:"checkbox",afterChange:A,disabled:s}))),i.a.createElement(S.a,{disabled:s},i.a.createElement(R.SearchableGridLabel,{label:i.a.createElement(c.c,{id:"SETTING_SECURITY_DPI_CLEAR_DPI_LABEL"}),searchIgnore:!0,alignWith:"button"}),i.a.createElement(I.a,null,i.a.createElement(T.c,{name:"clear-dpi-counters",type:"button",variant:"secondary",legacy:!1,disabled:s||d,onClick:()=>p(Object(_t.a)())},i.a.createElement(c.c,{id:"SETTING_SECURITY_DPI_CLEAR_DPI_ACTION"}))))),i.a.createElement(ut,null)))};t.default=()=>{const e=Object(l.useDispatch)(),t=Object(l.useSelector)(o.selectDpiSettings),a=Object(l.useSelector)(r.x),m=Object(E.i)(),u=Object(n.useMemo)(()=>({isSubmitted:!1}),[]),_=Object(n.useMemo)(()=>({enabled:!1,fingerprintingEnabled:!1,...t}),[t]),S=Object(n.useMemo)(()=>({component:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_TITLE"}),message:"security-settings-dpi"}),[]),I=Object(n.useCallback)((t,{setStatus:a,setSubmitting:n,resetForm:i})=>e(Object(o.saveSettings)(t)).then(()=>{e(Object(d.c)({icon:p.a.success,message:"SETTINGS_SECURITY_DPI_SAVE_SUCCESS"})),a({isSubmitted:!0}),i({values:t})}).catch(t=>{e(Object(d.c)({errorMessage:t.msg,errorValues:t,icon:p.a.danger,message:"SETTINGS_SECURITY_DPI_SAVE_ERROR"})),n(!1)}),[e]);return i.a.createElement(s.b,{title:S,validationSchema:void 0,initialStatus:u,initialValues:_,isView:a,onSubmit:I,onEscClicked:m,goBack:m,isEdit:!0,showBack:!0,unsavedChangesModalIgnoredPaths:/\/(restrictionGroup|wiredAssignments|wirelessAssignments|restriction)((\/)|((\/[\w_-]+\/?))+)?$/},i.a.createElement(It,null))}},2429:function(e,t,a){"use strict";a.d(t,"b",(function(){return A})),a.d(t,"a",(function(){return O}));var n=a(0),i=a.n(n),c=a(3),l=a(2),r=a(36),o=a(2838),s=a(2760),d=a(1774),E=a(867),p=a(14),m=a(10),u=a(42);const _=Object(c.c)(p.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,S=Object(c.c)(p.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,T=Object(c.c)(p.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,b=Object(c.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var O=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:l})=>i.a.createElement(S,{flex:"none",height:"65px"},i.a.createElement(p.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(_,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(T,{legacy:!1,name:"backButton",type:"button",onClick:a},i.a.createElement(m.g,{size:"original"}))),i.a.createElement(I,null,i.a.createElement(b,{weight:"bold"},e.component)),i.a.createElement(_,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&i.a.createElement(T,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(m.A,{size:"original"})))));const C=Object(c.c)(p.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,N=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,g=Object(c.c)(p.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,R=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,h=Object(c.c)(p.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,D=Object(c.c)(p.k)`
  height: 100%;
  width: 100%;
`;var A=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:E,title:m,unsavedChangesModalIgnoredPaths:u,onEscClicked:_,submitText:S="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:I=!1,customFooterButtons:T,hidddenHeader:b,className:A,...f})=>i.a.createElement(r.c,Object.assign({enableReinitialize:!0},f),({dirty:c,handleReset:r,handleSubmit:f,isSubmitting:j})=>i.a.createElement(N,{autoComplete:"off",onSubmit:f,className:A},i.a.createElement(D,{vertical:!0},!b&&i.a.createElement(O,{goBack:a,hideClose:n,showBack:E,title:m,onEscClicked:_,ignoredPaths:u}),i.a.createElement(h,{flex:"1"},i.a.createElement(C,{flex:"none",flexDirection:"column"},e)),!t&&!o&&i.a.createElement(d.a,{ignoredPaths:u,when:c&&!j}),(!o||I)&&i.a.createElement(R,{active:c||I},i.a.createElement(p.g,{justifyContent:T?"space-between":"flex-end",width:"100%",alignItems:"center"},T&&i.a.createElement(g,null,T(j)),!o&&i.a.createElement(p.g,null,i.a.createElement(s.a,{disabled:!c||j,type:"button",variant:"default",onClick:r},i.a.createElement(l.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!c||j,type:"submit",variant:"primary"},i.a.createElement(l.c,{id:S}))))))))},429:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="dpigroup",i="/api/s/{site}/rest/".concat(n)},430:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="dpiApp",i="/api/s/{site}/rest/dpiapp"},571:function(e,t,a){"use strict";a.r(t);var n=a(872);a.d(t,"fetchDpiGroups",(function(){return n.c})),a.d(t,"fetchDpiGroup",(function(){return n.b})),a.d(t,"saveDpiGroup",(function(){return n.f})),a.d(t,"addDpiAppToGroup",(function(){return n.a})),a.d(t,"removeDpiAppFromGroup",(function(){return n.d})),a.d(t,"removeDpiGroup",(function(){return n.e}));var i=a(429);a.d(t,"MODEL",(function(){return i.a})),a.d(t,"PATH",(function(){return i.b}));var c=a(1789);a.d(t,"dpiGroupsSelector",(function(){return c.a})),a.d(t,"selectDpiGroups",(function(){return c.c})),a.d(t,"selectDpiGroup",(function(){return c.b}));var l=a(1790);for(var r in l)["default","fetchDpiGroups","fetchDpiGroup","saveDpiGroup","addDpiAppToGroup","removeDpiAppFromGroup","removeDpiGroup","MODEL","PATH","dpiGroupsSelector","selectDpiGroups","selectDpiGroup"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(r)},719:function(e,t,a){"use strict";a.d(t,"e",(function(){return E})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return T.a})),a.d(t,"a",(function(){return U}));var n=a(0),i=a.n(n),c=a(3),l=a(363),r=a(804),o=a(214);const s=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,d=(Object(c.c)(l.Link)`
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
`),E=Object(c.c)(r.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,p=e=>i.a.createElement(d,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),m=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1895),_=a(293);const S=Object(c.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,I=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(_.b)(({theme:e,...t})=>i.a.createElement(S,Object.assign({headerRowClassName:I(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var T=a(1775),b=a(577),O=a(1770),C=a(2),N=a(19),g=a(10),R=a(2399),h=a(36),D=a(14),A=a(38);const f=Object(c.c)("div")`
  display: flex;
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,j=Object(c.c)(D.c)`
  > * {
    vertical-align: middle;
  }
`,G=Object(c.c)("div",{shouldForwardProp:e=>"useInitialPositionAddButton"!==e})`
  position: absolute;
  right: -65px;
  top: 12px;
  ${({useInitialPositionAddButton:e})=>e&&"margin: 12px 0 0 16px; position: initial;"}
`,v=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,y=Object(c.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,x=Object(c.c)(D.g,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,P=Object(c.c)(D.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,L=Object(c.c)(D.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,w=Object(c.c)("div")`
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
`;var U=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:l,validationSchema:r,initialValues:o,onEditSubmit:s,customEditFunction:d,useValuesInSchema:E=!1,max:p,useWindowTable:m=!1,addButtonText:_="COMMON_ACTION_ADD",invalid:S,useInitialPositionAddButton:I,children:T,...U}){const M=Object(n.useContext)(D.l),[k,B]=Object(n.useState)(!0),Y=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(D.g,{alignItems:"center",marginRight:8,marginBottom:1},i.a.createElement(j,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{B(!1),l(t),await Promise.resolve(),B(!0)}},i.a.createElement(C.c,{id:"COMMON_ACTION_REMOVE"}))),[e,B,l]),F=Object(n.useMemo)(()=>m?R.a:u.a,[m]);return i.a.createElement(h.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>E?N.a.lazy(e=>r(e)):r},({values:n,errors:r,setFieldValue:s,handleSubmit:E,handleReset:m,setTouched:u,dirty:N,touched:R,submitCount:h})=>i.a.createElement(i.a.Fragment,null,t.map((a,l)=>i.a.createElement(f,{inline:a.inline,isLast:l===t.length-1,key:a.name},i.a.createElement(D.g,{flexDirection:"column",width:"100%",marginBottom:a.hasTwoLineError&&R[a.name]&&r[a.name]?48:16},i.a.createElement(A.Field,Object.assign({disabled:n.editActive||n[e].length>=p,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:void 0!==n[a.name]?R[a.name]&&r[a.name]:S,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!M&&c&&l===t.length-1&&i.a.createElement(G,{useInitialPositionAddButton:I},i.a.createElement(j,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),B(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await u(a,!0);t.find(e=>i[e.name])||c(n),B(!0)},Icon:g.Db,disabled:n.editActive||n[e].length>=p||!N},i.a.createElement(C.c,{id:_}))))),T,n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement(y,{key:n.id,width:"100%"},U.columns.map((n,l)=>t[l]?i.a.createElement(x,{key:n.id,isLast:l===U.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(A.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[l].type,fast:!0},"dropdown"!==t[l].type?{}:{options:t[l].options,translateLabel:!0,translateOptions:t[l].translateOptions,translatePlaceholder:!0,type:t[l].type,validated:t[l].validated}))):null))),i.a.createElement(P,{justifyContent:"flex-end",width:"100%"},i.a.createElement(L,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),s("editActive",!1)}},i.a.createElement(C.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(D.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:E,disabled:Object(b.a)(Object(O.a)(n,"editActive"),Object(O.a)(o,"editActive"))},i.a.createElement(C.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(f,null,i.a.createElement(v,null,i.a.createElement(j,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),d?d():s("editActive",!0)},Icon:g.Cb},i.a.createElement(C.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&k&&i.a.createElement(w,null,i.a.createElement(F,{columns:U.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderHoverContent:l?Y:void 0})))))}},871:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return E})),a.d(t,"e",(function(){return p})),a.d(t,"c",(function(){return m}));var n=a(54),i=a(7),c=a(28),l=a(571),r=a(25),o=a(430);const s=(e,t)=>Object(i.q)(o.a,o.b,e,{idField:"_id",...t}),d=e=>Object(i.t)(o.a,o.b,e),E=e=>{const{_id:t}=e;return t?Object(i.D)(o.a,t,`${o.b}/${t}`,e):Object(i.i)(o.a,o.b,e)},p=(e,t,a)=>async i=>{const{successToast:o,failureToast:s}=Object(r.a)("SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SAVE_ERROR","SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SAVE_SUCCESS");try{const r=await i(E(e)),s=Object(n.a)(r,"data[0]._id",r._id);a&&a!==t&&await i(Object(l.removeDpiAppFromGroup)(a,s)),s&&await i(Object(l.addDpiAppToGroup)(t,s)),i(Object(c.c)(o))}catch(d){i(Object(c.c)(s()))}},m=e=>Object(i.n)(o.a,e,`${o.b}/${e}`)},872:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return d})),a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return u}));var n=a(54),i=a(1894),c=a(7),l=a(25),r=a(429);const o=(e,t)=>Object(c.q)(r.a,r.b,e,{idField:"_id",...t}),s=e=>Object(c.t)(r.a,r.b,e),d=(e,t={})=>{const{_id:a}=e,n=Object(l.a)("SETTINGS_SECURITY_DPI_CREATE_RESTRICTION_GROUP_SAVE_ERROR","SETTINGS_SECURITY_DPI_CREATE_RESTRICTION_GROUP_SAVE_SUCCESS");if(a){const i=t&&t.withToast?n:void 0;return Object(c.D)(r.a,a,`${r.b}/${a}`,e,{},i)}return Object(c.i)(r.a,r.b,e,{},n)},E=e=>t=>Object(n.a)(Object(c.w)(s(e),t.models),"data",{}),p=(e,t)=>(a,n)=>{const{dpiapp_ids:i=[],...c}=E(e)(n());return a(d({...c,dpiapp_ids:i.concat(i.includes(t)?[]:t)}))},m=(e,t)=>(a,n)=>{const{dpiapp_ids:c=[],...l}=E(e)(n());return a(d({...l,dpiapp_ids:Object(i.a)(c,t)}))},u=e=>Object(c.n)(r.a,e,`${r.b}/${e}`,{})}}]);
//# sourceMappingURL=34.f400b1db6c26e1693504.js.map