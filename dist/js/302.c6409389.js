"use strict";(self["webpackChunkmall"]=self["webpackChunkmall"]||[]).push([[302],{3841:function(s,e,a){a.d(e,{Z:function(){return S}});var n=a(3396),t=a(7139);const c=s=>((0,n.dD)("data-v-54af685d"),s=s(),(0,n.Cn)(),s),o={class:"shop"},_=["src"],r={class:"shop__content__title"},i={class:"shop__content__tags"},l={class:"shop__content__tag"},p={class:"shop__content__tag"},d={class:"shop__content__tag"},h={class:"shop__content__hightlight"},u={key:0,class:"shop__products"},m=["src"],g={class:"shop__product__title"},w={class:"shop__product__price"},v=c((()=>(0,n._)("span",{class:"price__yen"},"¥",-1))),f={class:"price__num"},k={class:"oldPrice__yen"};function y(s,e,a,c,y,C){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("img",{class:"shop__img",src:a.item.imgUrl,alt:""},null,8,_),(0,n._)("div",{class:(0,t.C_)({shop__content:!0,"shop__content--bordered":!a.hideborder})},[(0,n._)("div",r,(0,t.zw)(a.item.name),1),(0,n._)("div",i,[(0,n._)("span",l,"月售"+(0,t.zw)(a.item.sales)+"+",1),(0,n._)("span",p,"起送¥"+(0,t.zw)(a.item.expressLimit),1),(0,n._)("span",d,"基础运费¥"+(0,t.zw)(a.item.expressPrice),1)]),(0,n._)("p",h,(0,t.zw)(a.item.slogan),1),a.item.products?((0,n.wg)(),(0,n.iD)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.item.products,(s=>((0,n.wg)(),(0,n.iD)("div",{class:"shop__product",key:s.name},[(0,n._)("img",{class:"shop__product__img",src:s.imgUrl,alt:""},null,8,m),(0,n._)("p",g,(0,t.zw)(s.name),1),(0,n._)("p",w,[v,(0,n._)("span",f,(0,t.zw)(s.price),1),(0,n._)("span",k,"¥"+(0,t.zw)(s.oldPrice),1)])])))),128))])):(0,n.kq)("",!0)],2)])}var C={name:"shopinfo",props:["item","hideborder"]},z=a(89);const D=(0,z.Z)(C,[["render",y],["__scopeId","data-v-54af685d"]]);var S=D},7302:function(s,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=a(3396),t=a(9242);const c=s=>((0,n.dD)("data-v-3e1c533f"),s=s(),(0,n.Cn)(),s),o={class:"wrapper"},_={class:"search"},r={class:"search__content"},i=c((()=>(0,n._)("span",{class:"search__content__icon iconfont"},"",-1)));function l(s,e,a,c,l,p){const d=(0,n.up)("Shopinfo"),h=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",_,[(0,n._)("div",{class:"search__back iconfont",onClick:e[0]||(e[0]=s=>c.handleBack())},""),(0,n._)("div",r,[i,(0,n.wy)((0,n._)("input",{class:"search__content__input",placeholder:"请输入商品名称","onUpdate:modelValue":e[1]||(e[1]=s=>c.keyword=s),onChange:e[2]||(e[2]=(...s)=>c.handleSearchInputChange&&c.handleSearchInputChange(...s))},null,544),[[t.nr,c.keyword]])])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.searchList,(s=>((0,n.wg)(),(0,n.j4)(h,{to:`/shop/${s._id}`,key:s._id},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{item:s},null,8,["item"])])),_:2},1032,["to"])))),128))])}a(7658);var p=a(4870),d=a(2483),h=a(212),u=a(3841),m={name:"Search",components:{Shopinfo:u.Z},setup(){const s=(0,d.tv)(),e=(0,d.yj)(),a=(0,p.iH)(e.query.keyword||""),n=(0,p.iH)([]),t=async()=>{const s=await(0,h.U)("/api/shop/search/list",{keyword:a});0===s.data.errno&&(n.value=s.data.data,console.log(a.value))};t();const c=()=>{s.push({name:"Home"})},o=s=>{t(a.value)};return{handleBack:c,keyword:a,handleSearchInputChange:o,searchList:n,getSearchList:t}}},g=a(89);const w=(0,g.Z)(m,[["render",l],["__scopeId","data-v-3e1c533f"]]);var v=w}}]);
//# sourceMappingURL=302.c6409389.js.map