"use strict";(self.webpackChunkfaraway_test_task=self.webpackChunkfaraway_test_task||[]).push([[253],{8065:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(7294),r=a(9655),c=a(5795),l=a(707),s=a(3249),i=a(4416),m=a(7020),o=a(6804),d=({current:e,pageSize:t,total:a,disabled:r})=>{const c=(0,l.TL)();return n.createElement("div",{className:"paginationLayout-gcX5V"},n.createElement(o.Z,{disabled:r,current:e,defaultCurrent:1,pageSize:t,defaultPageSize:10,total:a,showSizeChanger:!0,pageSizeOptions:[10,25,50],onChange:(e,t)=>{c((0,m.Jr)({page:e,pageSize:t}))},className:"pagination-wPhS6"}))},u=a(1595),g=a(4644),p=a(1781),E=a(7484),h=a.n(E),y={card:"card-uAqsW",cardCoverImage:"cardCoverImage-iOBBK",article:"article-imBFT",heading:"heading-Tk81h",headingIcon:"headingIcon-d1qHd"};const{Text:f}=u.default;var k=({name:e,details:t,links:a,date_utc:r,success:c,upcoming:l,loading:s})=>n.createElement(p.Z,{loading:s,title:e,className:y.card,hoverable:!0,cover:a?.patch.small?n.createElement("img",{loading:"lazy",alt:`Patch of ${e||"not named"} mission`,src:a?.patch.small,className:y.cardCoverImage}):n.createElement("div",null)},n.createElement("article",{className:y.article},n.createElement("h3",{className:y.heading},n.createElement(f,{type:"secondary"},h()(r).format("YYYY.MM.DD HH:mm:ss [UTC]")),((e,t)=>e?n.createElement(g.Z,{status:"processing",text:"Upcoming"}):t?n.createElement(g.Z,{status:"success",text:"Success"}):n.createElement(g.Z,{status:"error",text:"Failure"}))(l,c)),n.createElement("p",{className:y.details},t))),C="launches-Y0JOd",v=()=>{const{pageSize:e}=(0,l.CG)(i.B$);return n.createElement(n.Fragment,null,n.createElement("div",{className:C},Array.from({length:e},((e,t)=>n.createElement(p.Z,{key:t,loading:!0,className:"cardLoading-PyyV8",title:"...",cover:n.createElement("div",null)},n.createElement(p.Z.Meta,{title:" "}))))),n.createElement(d,{disabled:!0,pageSize:e}))},S=a(1739),z=a(19),N=a(9250),Z=({retry:e})=>{const t=(0,N.s0)();return n.createElement(S.ZP,{status:"warning",title:"Something went wrong.",extra:[n.createElement(z.ZP,{key:"console",type:"primary",onClick:()=>{e()}},"Retry last operation"),n.createElement(z.ZP,{key:"home",onClick:()=>{t("/")}},"Go home")]})},w=()=>{const{page:e,pageSize:t}=(0,l.CG)(i.B$),{text:a,datesRange:m}=(0,l.CG)(i.mj),{data:o,isLoading:u,isFetching:g,isError:p,refetch:E}=(0,s.ND)({options:{page:e,limit:t},query:{text:a,datesRange:m}});if(u||g)return n.createElement(v,null);if(p)return n.createElement(Z,{retry:E});if(!o||!o.docs.length)return n.createElement(c.Z,null);const{docs:h,page:y,limit:f,totalDocs:S}=o;return n.createElement(n.Fragment,null,n.createElement("div",{className:C},h.map((({id:e,name:t,details:a,links:c,date_utc:l,success:s,upcoming:i})=>n.createElement(r.rU,{key:e,to:e,"data-cy":"launch-link"},n.createElement(k,{name:t,details:a,links:c,date_utc:l,success:s,upcoming:i}))))),n.createElement(d,{current:y,pageSize:f,total:S}))}}}]);
//# sourceMappingURL=launches-lazy.83d1b4b177a40a9590e2.js.map