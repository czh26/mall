"use strict";(self["webpackChunkmall"]=self["webpackChunkmall"]||[]).push([[489],{3736:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(3396),o=r(7139);const a={class:"docker"},s=["innerHTML"],c={class:"docker__title"};function i(t,e,r,i,d,l){const _=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.dockerList,((t,e)=>((0,n.wg)(),(0,n.iD)("span",{class:(0,o.C_)({docker__item:!0,"docker__item--active":e===r.currentIndex}),key:t.icon},[(0,n.Wm)(_,{to:t.to},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"iconfont",innerHTML:t.icon},null,8,s),(0,n._)("div",c,(0,o.zw)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var d={name:"Docker",props:["currentIndex"],setup(){const t=[{icon:"&#xe6bb;",text:"首页",to:{name:"Home"}},{icon:"&#xe658;",text:"购物",to:{name:"CartList"}},{icon:"&#xe8ae;",text:"订单",to:{name:"OrderList"}},{icon:"&#xe600;",text:"我的",to:{name:"Home"}}];return{dockerList:t}}},l=r(89);const _=(0,l.Z)(d,[["render",i],["__scopeId","data-v-46873ea2"]]);var u=_},489:function(t,e,r){r.r(e),r.d(e,{default:function(){return L}});var n=r(3396),o=r(7139);const a=t=>((0,n.dD)("data-v-2aad6579"),t=t(),(0,n.Cn)(),t),s={class:"wrapper"},c=a((()=>(0,n._)("div",{class:"title"},"我的订单",-1))),i={class:"orders"},d={class:"order__title"},l={class:"order__status"},_={class:"order__content"},u={class:"order__content__imgs"},p=["src"],v={class:"order__content__info"},m={class:"order__content__info__price"},k={class:"order__content__info__count"};function w(t,e,r,a,w,f){const g=(0,n.up)("Docker");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",s,[c,(0,n._)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.list,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"order",key:t.shopId},[(0,n._)("div",d,[(0,n.Uk)((0,o.zw)(t.shopName)+" ",1),(0,n._)("span",l,(0,o.zw)(t.isCanceled?"已取消":"已下单"),1)]),(0,n._)("div",_,[(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.products,((t,e)=>((0,n.wg)(),(0,n.iD)("span",{key:e},[e<=3?((0,n.wg)(),(0,n.iD)("img",{key:0,class:"order__content__img",src:t.product.img,alt:"订单列表"},null,8,p)):(0,n.kq)("",!0)])))),128))]),(0,n._)("div",v,[(0,n._)("div",m,"¥"+(0,o.zw)(t.totalPrice),1),(0,n._)("div",k,"共"+(0,o.zw)(t.totalNumber)+"件",1)])])])))),128))])]),(0,n.Wm)(g,{currentIndex:2})])}var f=r(4870),g=r(212),D=r(3736),x={name:"OrderList",components:{Docker:D.Z},setup(){const t=(0,f.qj)({list:[]}),{list:e}=(0,f.BK)(t),r=async()=>{const e=await(0,g.U)("/api/order");if(0===e.data?.errno&&e.data?.data?.length){const r=e.data.data;r.forEach((t=>{const e=t.products||[];let r=0,n=0;e.forEach((t=>{r+=t?.product.price*t?.orderSales||0,n+=t?.orderSales||0})),t.totalPrice=r,t.totalNumber=n})),t.list=e.data.data}};return r(),{data:t,list:e}}},h=r(89);const H=(0,h.Z)(x,[["render",w],["__scopeId","data-v-2aad6579"]]);var L=H}}]);
//# sourceMappingURL=489.00bd5a29.js.map