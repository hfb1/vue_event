"use strict";(self["webpackChunkvue_event"]=self["webpackChunkvue_event"]||[]).push([[355],{355:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("更换头像")])]),a("div",[t.avatar?a("img",{staticClass:"the_img",attrs:{src:t.avatar,alt:""}}):a("img",{staticClass:"the_img",attrs:{src:e(9389),alt:""}}),a("div",{staticClass:"btn-box"},[a("input",{ref:"iptRef",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.chooseImg}},[t._v(" 选择图片 ")]),a("el-button",{attrs:{type:"success",icon:"el-icon-upload",disabled:""===t.avatar},on:{click:t.uploadFn}},[t._v(" 上传头像 ")])],1)])])},n=[],i=e(7877),o={name:"UserAvatar",data(){return{avatar:""}},methods:{chooseImg(){this.$refs.iptRef.click()},onFileChange(t){const a=t.target.files;if(0===a.length);else{console.log(a[0]);const t=new FileReader;t.readAsDataURL(a[0]),t.onload=t=>{this.avatar=t.target.result}}},async uploadFn(){const{data:t}=await(0,i.fo)(this.avatar);console.log(t),this.$message.success(t.message),this.$store.dispatch("getUserInfoActions"),console.log(this.$store.state)}}},c=o,l=e(3736),r=(0,l.Z)(c,s,n,!1,null,"1b370fdf",null),u=r.exports},9389:function(t,a,e){t.exports=e.p+"img/avatar.b216c21d.jpg"}}]);
//# sourceMappingURL=355.54df2bca.js.map