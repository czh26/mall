"use strict";(self["webpackChunkmall"]=self["webpackChunkmall"]||[]).push([[844],{1809:function(a,s,t){t.d(s,{Z:function(){return d},S:function(){return u}});var e=t(3396),n=t(7139);const r={class:"toast"};function o(a,s,t,o,p,u){return(0,e.wg)(),(0,e.iD)("div",r,(0,n.zw)(t.message),1)}var p=t(4870);const u=()=>{const a=(0,p.qj)({toastStatus:!1,showMessage:""}),s=s=>{a.toastStatus=!0,a.showMessage=s,setTimeout((()=>{a.toastStatus=!1,a.showMessage=""}),3e3)};return{toastData:a,showToast:s,useToastEffect:u}};var l={props:["message"]},c=t(89);const i=(0,c.Z)(l,[["render",o],["__scopeId","data-v-13138cbd"]]);var d=i},4844:function(a,s,t){t.r(s),t.d(s,{default:function(){return f}});var e=t(3396),n=t(9242);const r=a=>((0,e.dD)("data-v-09e95324"),a=a(),(0,e.Cn)(),a),o={class:"wrapper"},p=r((()=>(0,e._)("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png",alt:""},null,-1))),u={class:"wrapper__input"},l={class:"wrapper__input"},c={class:"wrapper__input"};function i(a,s,t,r,i,d){const w=(0,e.up)("Toast");return(0,e.wg)(),(0,e.iD)("div",o,[p,(0,e._)("div",u,[(0,e.wy)((0,e._)("input",{class:"wrapper__input__content",placeholder:"请输入用户名","onUpdate:modelValue":s[0]||(s[0]=a=>r.data.username=a)},null,512),[[n.nr,r.data.username]])]),(0,e._)("div",l,[(0,e.wy)((0,e._)("input",{class:"wrapper__input__content",type:"password",placeholder:"请输入密码","onUpdate:modelValue":s[1]||(s[1]=a=>r.data.password=a)},null,512),[[n.nr,r.data.password]])]),(0,e._)("div",c,[(0,e.wy)((0,e._)("input",{class:"wrapper__input__content",type:"password",placeholder:"确认密码","onUpdate:modelValue":s[2]||(s[2]=a=>r.data.ensurement=a)},null,512),[[n.nr,r.data.ensurement]])]),(0,e._)("div",{class:"wrapper__register-btn",onClick:s[3]||(s[3]=a=>r.handleRegister())},"注册"),(0,e._)("div",{class:"wrapper__toLogin-btn",onClick:s[4]||(s[4]=a=>r.handleLoginClick())}," 已有账号去登陆 "),r.toastData.toastStatus?((0,e.wg)(),(0,e.j4)(w,{key:0,message:r.toastData.showMessage},null,8,["message"])):(0,e.kq)("",!0)])}t(7658);var d=t(2483),w=t(4870),_=t(212),g=t(1809),m={name:"Login",components:{Toast:g.Z},setup(){const a=(0,d.tv)(),s=(0,w.qj)({username:"",password:"",ensurement:""}),{toastData:t,showToast:e}=(0,g.S)(),n=async()=>{try{const t=await(0,_.v)("/api/user/register",{username:s.username,password:s.password});200===t.status?(localStorage.isLogin=!0,a.push({name:"Login"})):e("注册失败")}catch(t){alert("请求失败 "+t)}},r=()=>{a.push({name:"Login"})};return{reactive:w.qj,handleRegister:n,data:s,toastData:t,showToast:e,handleLoginClick:r}}},h=t(89);const v=(0,h.Z)(m,[["render",i],["__scopeId","data-v-09e95324"]]);var f=v}}]);
//# sourceMappingURL=844.5159cad6.js.map