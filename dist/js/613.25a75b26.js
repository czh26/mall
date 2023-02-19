"use strict";(self["webpackChunkmall"]=self["webpackChunkmall"]||[]).push([[613],{3736:function(t,e,s){s.d(e,{Z:function(){return p}});var n=s(3396),a=s(7139);const i={class:"docker"},c=["innerHTML"],o={class:"docker__title"};function r(t,e,s,r,_,l){const d=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.dockerList,((t,e)=>((0,n.wg)(),(0,n.iD)("span",{class:(0,a.C_)({docker__item:!0,"docker__item--active":e===s.currentIndex}),key:t.icon},[(0,n.Wm)(d,{to:t.to},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"iconfont",innerHTML:t.icon},null,8,c),(0,n._)("div",o,(0,a.zw)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var _={name:"Docker",props:["currentIndex"],setup(){const t=[{icon:"&#xe6bb;",text:"首页",to:{name:"Home"}},{icon:"&#xe658;",text:"购物",to:{name:"CartList"}},{icon:"&#xe8ae;",text:"订单",to:{name:"OrderList"}},{icon:"&#xe600;",text:"我的",to:{name:"Home"}}];return{dockerList:t}}},l=s(89);const d=(0,l.Z)(_,[["render",r],["__scopeId","data-v-46873ea2"]]);var p=d},3841:function(t,e,s){s.d(e,{Z:function(){return N}});var n=s(3396),a=s(7139);const i=t=>((0,n.dD)("data-v-54af685d"),t=t(),(0,n.Cn)(),t),c={class:"shop"},o=["src"],r={class:"shop__content__title"},_={class:"shop__content__tags"},l={class:"shop__content__tag"},d={class:"shop__content__tag"},p={class:"shop__content__tag"},m={class:"shop__content__hightlight"},u={key:0,class:"shop__products"},g=["src"],v={class:"shop__product__title"},h={class:"shop__product__price"},w=i((()=>(0,n._)("span",{class:"price__yen"},"¥",-1))),f={class:"price__num"},k={class:"oldPrice__yen"};function b(t,e,s,i,b,y){return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("img",{class:"shop__img",src:s.item.imgUrl,alt:""},null,8,o),(0,n._)("div",{class:(0,a.C_)({shop__content:!0,"shop__content--bordered":!s.hideborder})},[(0,n._)("div",r,(0,a.zw)(s.item.name),1),(0,n._)("div",_,[(0,n._)("span",l,"月售"+(0,a.zw)(s.item.sales)+"+",1),(0,n._)("span",d,"起送¥"+(0,a.zw)(s.item.expressLimit),1),(0,n._)("span",p,"基础运费¥"+(0,a.zw)(s.item.expressPrice),1)]),(0,n._)("p",m,(0,a.zw)(s.item.slogan),1),s.item.products?((0,n.wg)(),(0,n.iD)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.item.products,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"shop__product",key:t.name},[(0,n._)("img",{class:"shop__product__img",src:t.imgUrl,alt:""},null,8,g),(0,n._)("p",v,(0,a.zw)(t.name),1),(0,n._)("p",h,[w,(0,n._)("span",f,(0,a.zw)(t.price),1),(0,n._)("span",k,"¥"+(0,a.zw)(t.oldPrice),1)])])))),128))])):(0,n.kq)("",!0)],2)])}var y={name:"shopinfo",props:["item","hideborder"]},D=s(89);const x=(0,D.Z)(y,[["render",b],["__scopeId","data-v-54af685d"]]);var N=x},8613:function(t,e,s){s.r(e),s.d(e,{default:function(){return S}});var n=s(3396);const a={class:"wrapper"};function i(t,e,s,i,c,o){const r=(0,n.up)("StaticPart"),_=(0,n.up)("Nearby"),l=(0,n.up)("Docker");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",a,[(0,n.Wm)(r),(0,n.Wm)(_),(0,n._)("button",{style:{margin:"0.1rem auto",display:"block"},onClick:e[0]||(e[0]=t=>i.exit())}," 退出 ")]),(0,n.Wm)(l,{currentIndex:0})])}s(7658);var c=s(7139);const o=t=>((0,n.dD)("data-v-6eceddc1"),t=t(),(0,n.Cn)(),t),r=o((()=>(0,n._)("div",{class:"position"},[(0,n._)("span",{class:"iconfont position__icon"},""),(0,n.Uk)(" 北京理工大学国防科技园2号楼10层 测试。 "),(0,n._)("span",{class:"iconfont position__notice"},"")],-1))),_=o((()=>(0,n._)("div",{class:"search"},[(0,n._)("span",{class:"iconfont"},""),(0,n._)("input",{class:"search__text",type:"text",placeholder:"山姆会员商店优惠商品"})],-1))),l=o((()=>(0,n._)("div",{class:"banner"},[(0,n._)("img",{class:"banner__img",src:"http://www.dell-lee.com/imgs/vue3/banner.jpg",alt:""})],-1))),d={class:"icons"},p=["src"],m={class:"icons__item__desc"};function u(t,e,s,a,i,o){const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[r,(0,n.Wm)(u,{to:"/search"},{default:(0,n.w5)((()=>[_])),_:1}),l,(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.iconList,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"icons__item",key:t.imgName},[(0,n._)("img",{class:"icons__item__img",src:`http://www.dell-lee.com/imgs/vue3/${t.imgName}.png`,alt:""},null,8,p),(0,n._)("p",m,(0,c.zw)(t.title),1)])))),128))])])}var g={name:"StaticPart",setup(){const t=[{imgName:"超市",title:"超市"},{imgName:"菜市场",title:"菜市场"},{imgName:"水果店",title:"水果店"},{imgName:"鲜花",title:"鲜花绿植"},{imgName:"医药健康",title:"医药健康"},{imgName:"家居",title:"家居时尚"},{imgName:"蛋糕",title:"烘焙蛋糕"},{imgName:"签到",title:"签到"},{imgName:"大牌免运",title:"大牌免运"},{imgName:"红包",title:"红包套餐"}];return{iconList:t}}},v=s(89);const h=(0,v.Z)(g,[["render",u],["__scopeId","data-v-6eceddc1"]]);var w=h;const f=t=>((0,n.dD)("data-v-1a2abba2"),t=t(),(0,n.Cn)(),t),k={class:"nearby"},b=f((()=>(0,n._)("h3",{class:"nearby__title"},"附近店铺",-1)));function y(t,e,s,a,i,c){const o=(0,n.up)("Shopinfo"),r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",k,[b,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.nearbyList,(t=>((0,n.wg)(),(0,n.j4)(r,{to:`/shop/${t._id}`,key:t._id},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{item:t},null,8,["item"])])),_:2},1032,["to"])))),128))])}var D=s(4870),x=s(212),N=s(3841),L={name:"Nearby",components:{Shopinfo:N.Z},setup(){const t=(0,D.iH)([]),e=async()=>{try{const e=await(0,x.U)("/api/shop/hot-list");0===e?.data?.errno?t.value=e.data.data:alert("获取数据失败")}catch(e){alert("请求失败 "+e)}};return e(),{nearbyList:t}}};const z=(0,v.Z)(L,[["render",y],["__scopeId","data-v-1a2abba2"]]);var H=z,C=s(3736),I=s(2483),Z={name:"Home",components:{StaticPart:w,Nearby:H,Docker:C.Z},setup(){const t=(0,I.tv)(),e=()=>{localStorage.removeItem("isLogin"),t.push({name:"Login"})};return{exit:e}}};const P=(0,v.Z)(Z,[["render",i],["__scopeId","data-v-761270b6"]]);var S=P}}]);
//# sourceMappingURL=613.25a75b26.js.map