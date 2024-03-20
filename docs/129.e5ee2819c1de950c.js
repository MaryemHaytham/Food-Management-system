"use strict";(self.webpackChunkfoodManagementSystem=self.webpackChunkfoodManagementSystem||[]).push([[129],{2129:(re,b,c)=>{c.r(b),c.d(b,{AuthModule:()=>te});var d=c(6814),g=c(4426),m=c(1896),i=c(6223),e=c(5879),f=c(1342),u=c(2425);function w(t,a){1&t&&(e.TgZ(0,"p",23),e._uU(1,"Email Is Invalid"),e.qZA())}function T(t,a){1&t&&(e.TgZ(0,"p",23),e._uU(1,"Email Is Invalid"),e.qZA())}function y(t,a){if(1&t&&(e.TgZ(0,"div",21),e.YNc(1,w,2,0,"p",22),e.YNc(2,T,2,0,"p",22),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.loginForm.get("email"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.loginForm.get("email"))?null:o.getError("email"))}}function A(t,a){1&t&&(e.TgZ(0,"p",25),e._uU(1,"Password Is Required"),e.qZA())}function x(t,a){1&t&&(e.TgZ(0,"p",23),e._uU(1,"Password Is Required must contain Mumbers , Chars , and Special Charctar."),e.qZA())}function q(t,a){if(1&t&&(e.TgZ(0,"div",21),e.YNc(1,A,2,0,"p",24),e.YNc(2,x,2,0,"p",22),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.loginForm.get("password"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.loginForm.get("password"))?null:o.getError("pattern"))}}let N=(()=>{class t{constructor(n,r,o){this._router=n,this._AuthServiceService=r,this._ToastrService=o,this.loginForm=new i.cw({email:new i.NI(null,[i.kI.required,i.kI.email]),password:new i.NI(null,[i.kI.required,i.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$")])}),this.hide=!0}ngOnInit(){}onSubmit(n){console.log(n.value),this._AuthServiceService.onLogin(n.value).subscribe({next:r=>{console.log(r),localStorage.setItem("userToken",r.token),this._AuthServiceService.getProfile()},error:r=>{console.log(r),this._ToastrService.error(r.error.message,"Error")},complete:()=>{this._ToastrService.success("You successfully Loggedin","Success"),this._router.navigate(["/dashboard/home"])}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(m.F0),e.Y36(f.u),e.Y36(u._W))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:32,vars:7,consts:[["id","login"],[1,"auth-form","py-5"],[1,"text-center"],["src","../../../assets/images/logo.svg","alt",""],[1,"px-5"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa","fa-mobile"],["formControlName","email","type","email","name","email","placeholder","Enter Your Email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["class","alert alert-danger p-1 small w-100 mx-auto",4,"ngIf"],[1,"input-group"],[1,"fa-solid","fa-lock"],["formControlName","password","name","password","placeholder","Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"show-password",3,"click"],[1,"fa-solid"],[1,"d-flex","justify-content-between","my-3"],["routerLink","/auth/register",1,"text-second","text-decoration-none"],["routerLink","/auth/forgotpassword",1,"text-main","text-decoration-none"],[1,"main","w-100","btn",3,"disabled"],[1,"fa-solid","text-white"],[1,"alert","alert-danger","p-1","small","w-100","mx-auto"],["class","mb-0",4,"ngIf"],[1,"mb-0"],["class","m-0",4,"ngIf"],[1,"m-0"]],template:function(r,o){if(1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h2"),e._uU(6,"Login"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(9,"form",5),e.NdJ("ngSubmit",function(){return o.onSubmit(o.loginForm)}),e.TgZ(10,"div",6)(11,"span",7),e._UZ(12,"i",8),e.qZA(),e._UZ(13,"input",9),e.YNc(14,y,3,2,"div",10),e.qZA(),e.TgZ(15,"div",11)(16,"span",7),e._UZ(17,"i",12),e.qZA(),e._UZ(18,"input",13),e.TgZ(19,"a",14),e.NdJ("click",function(){return o.hide=!o.hide}),e._UZ(20,"i",15),e.qZA()(),e.YNc(21,q,3,2,"div",10),e.TgZ(22,"div",16)(23,"a",17),e._uU(24,"Register Now?"),e.qZA(),e.TgZ(25,"a",18),e._uU(26,"Forgot password?"),e.qZA()(),e.TgZ(27,"button",19)(28,"span"),e._uU(29,"Login"),e.qZA(),e.TgZ(30,"span"),e._UZ(31,"i",20),e.qZA()()()()()()),2&r){let s,l;e.xp6(9),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&(null==(s=o.loginForm.get("email"))?null:s.touched)),e.xp6(4),e.Q6J("type",o.hide?"password":"text"),e.xp6(2),e.Tol(o.hide?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(l=o.loginForm.get("password"))?null:l.errors)&&(null==(l=o.loginForm.get("password"))?null:l.touched)),e.xp6(6),e.Q6J("disabled",o.loginForm.invalid)}},dependencies:[d.O5,m.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["#login[_ngcontent-%COMP%]{background-image:url(background.b83e6d2c120aba6f.png);background-size:cover;background-repeat:no-repeat;background-position:center center;height:100vh;display:flex;justify-content:center;align-items:center}"]})}return t})();var p=c(7700),C=c(2296);let U=(()=>{class t{constructor(n,r){this.dialogRef=n,this.data=r,this.verifyForm=new i.cw({email:new i.NI(null),code:new i.NI(null)})}onNoClick(){this.dialogRef.close()}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(p.so),e.Y36(p.WI))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-verify-account"]],decls:18,vars:2,consts:[[1,"rounded-5"],["mat-dialog-title",""],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa","fa-mobile"],["formControlName","email","type","email","name","email","placeholder","Email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],[1,"fa","fa-lock"],["formControlName","code","type","text","name","code","placeholder","Code","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],[1,"justify-content-between"],[1,"btn","text-bg-danger",3,"click"],["mat-button","","cdkFocusInitial","",1,"btn","bg-main","text-white",3,"mat-dialog-close"]],template:function(r,o){1&r&&(e.TgZ(0,"section",0)(1,"h2",1),e._uU(2,"Verify Your Account"),e.qZA(),e.TgZ(3,"mat-dialog-content")(4,"form",2),e.NdJ("ngSubmit",function(){return o.verifyForm}),e.TgZ(5,"div",3)(6,"span",4),e._UZ(7,"i",5),e.qZA(),e._UZ(8,"input",6),e.qZA(),e.TgZ(9,"div",3)(10,"span",4),e._UZ(11,"i",7),e.qZA(),e._UZ(12,"input",8),e.qZA()()(),e.TgZ(13,"mat-dialog-actions",9)(14,"button",10),e.NdJ("click",function(){return o.onNoClick()}),e._uU(15,"Close"),e.qZA(),e.TgZ(16,"button",11),e._uU(17,"Submit"),e.qZA()()()),2&r&&(e.xp6(4),e.Q6J("formGroup",o.verifyForm),e.xp6(12),e.Q6J("mat-dialog-close",o.verifyForm.value))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,C.lW,p.ZT,p.uh,p.xY,p.H8]})}return t})();function I(t,a){1&t&&(e.TgZ(0,"ngx-dropzone-image-preview",33),e._UZ(1,"ngx-dropzone-label"),e.qZA()),2&t&&e.Q6J("file",a.$implicit)("removable",!0)}function F(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"UserName Is Required."),e.qZA())}function J(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"UserName Min Length 3."),e.qZA())}function S(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"UserName Max Length 20."),e.qZA())}function k(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"UserName must contain numbers and chars."),e.qZA())}function Y(t,a){if(1&t&&(e.TgZ(0,"div",34),e.YNc(1,F,2,0,"p",35),e.YNc(2,J,2,0,"p",35),e.YNc(3,S,2,0,"p",35),e.YNc(4,k,2,0,"p",35),e.qZA()),2&t){const n=e.oxw();let r,o,s,l;e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("userName"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("userName"))?null:o.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(s=n.registerForm.get("userName"))?null:s.getError("maxlengh")),e.xp6(1),e.Q6J("ngIf",null==(l=n.registerForm.get("userName"))?null:l.getError("pattern"))}}function P(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Country Is Required."),e.qZA())}function R(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Country Min Length 3."),e.qZA())}function E(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Country Max Length 20."),e.qZA())}function Q(t,a){if(1&t&&(e.TgZ(0,"div",34),e.YNc(1,P,2,0,"p",35),e.YNc(2,R,2,0,"p",35),e.YNc(3,E,2,0,"p",35),e.qZA()),2&t){const n=e.oxw();let r,o,s;e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("country"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("country"))?null:o.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(s=n.registerForm.get("country"))?null:s.getError("maxlengh"))}}function L(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Phone Number Is Required."),e.qZA())}function z(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Must be Egyptian Number."),e.qZA())}function j(t,a){if(1&t&&(e.TgZ(0,"div",34),e.YNc(1,L,2,0,"p",35),e.YNc(2,z,2,0,"p",35),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("phoneNumber"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("phoneNumber"))?null:o.getError("pattern"))}}function M(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Email Is Required."),e.qZA())}function H(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Email Is Invalid."),e.qZA())}function O(t,a){if(1&t&&(e.TgZ(0,"div",34),e.YNc(1,M,2,0,"p",35),e.YNc(2,H,2,0,"p",35),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("email"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("email"))?null:o.getError("email"))}}function G(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Password Is Required."),e.qZA())}function W(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Password Is Required must contain Mumbers , Chars , and Special Charctar."),e.qZA())}function B(t,a){if(1&t&&(e.TgZ(0,"div",34),e.YNc(1,G,2,0,"p",35),e.YNc(2,W,2,0,"p",35),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("password"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("password"))?null:o.getError("pattern"))}}function V(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Confirm Password Is Required."),e.qZA())}function $(t,a){1&t&&(e.TgZ(0,"p",36),e._uU(1,"Confirm Password Not Same Password."),e.qZA())}function D(t,a){if(1&t&&(e.TgZ(0,"div",34),e.YNc(1,V,2,0,"p",35),e.YNc(2,$,2,0,"p",35),e.qZA()),2&t){const n=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=n.registerForm.get("confirmPassword"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.registerForm.get("confirmPassword"))?null:o.getError("missmatch"))}}const X=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:N},{path:"register",component:(()=>{class t{confirmPassword(n){const r=n.get("password"),o=n.get("confirmPassword");""==o?.value?o?.setErrors({required:!0}):r?.value!=o?.value&&o?.setErrors({missmatch:!0})}constructor(n,r,o,s){this._Router=n,this.dialog=r,this._AuthServiceService=o,this._ToastrService=s,this.hide=!0,this.confirmHide=!0,this.registerForm=new i.cw({userName:new i.NI("",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20),i.kI.pattern("^(?=.*?[a-z])(?=.*?[a-z])(?=.*?[0-9]).{3,20}$")]),country:new i.NI("",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]),email:new i.NI("",[i.kI.required,i.kI.email]),phoneNumber:new i.NI("",[i.kI.required]),password:new i.NI("",[i.kI.required,i.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$")]),confirmPassword:new i.NI("")},{validators:[this.confirmPassword]}),this.files=[]}onSubmit(n){let r=new FormData;r.append("userName",n.value.userName),r.append("email",n.value.email),r.append("phoneNumber",n.value.phoneNumber),r.append("country",n.value.country),r.append("password",n.value.password),r.append("confirmPassword",n.value.confirmPassword),r.append("profileImage",this.imgSrc),console.log(n),this._AuthServiceService.onRegister(r).subscribe({next:o=>{console.log(o)},error:o=>{console.log(o),this._ToastrService.error(o.error.message,"Error")},complete:()=>{this._ToastrService.success("You successfully Registered","Success"),this.openDialog()}})}onSelect(n){console.log(n),this.files.push(...n.addedFiles)}onRemove(n){console.log(n),this.imgSrc=n.addFiles[0],this.files.splice(this.files.indexOf(n),1)}openDialog(){this.dialog.open(U,{data:{name:""}}).afterClosed().subscribe(r=>{console.log("The dialog was closed",r),r&&this.onVerifyAccount(r)})}onVerifyAccount(n){this._AuthServiceService.onVerify(n).subscribe({next:r=>{console.log(r)},error:()=>{},complete:()=>{this._ToastrService.success("Account Active Successfully","Success"),this._Router.navigate(["/auth/login"])}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(m.F0),e.Y36(p.uw),e.Y36(f.u),e.Y36(u._W))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:68,vars:16,consts:[["id","register"],[1,"auth-form","py-5"],[1,"text-center"],["src","../../../assets/images/logo.svg","alt",""],[1,"px-5"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12","dropZone-style"],[3,"multiple","change"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"input-group","mt-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-user"],["formControlName","userName","type","text","name","userName","placeholder","Enter Your Username","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["class","alert alert-danger p-1 small w-100 mx-auto",4,"ngIf"],[1,"fa-solid","fa-globe"],["formControlName","country","type","text","name","country","placeholder","Enter Your Country","aria-label","country","aria-describedby","basic-addon1",1,"form-control"],[1,"fa","fa-mobile"],["formControlName","phoneNumber","type","text","name","phoneNumber","placeholder","Enter Your phoneNumber","aria-label","phoneNumber","aria-describedby","basic-addon1",1,"form-control"],[1,"fa-solid","fa-envelope"],["formControlName","email","type","email","name","email","placeholder","Enter Your Email","aria-label","email","aria-describedby","basic-addon1",1,"form-control"],[1,"input-group","mt-3","mb-4"],[1,"fa-solid","fa-lock"],["formControlName","password","name","password","placeholder","Enter Your Password","aria-label","password","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"show-password",3,"click"],[1,"fa-solid"],["formControlName","confirmPassword","name","confirmPassword","placeholder","Enter Your Confirm Password","aria-label","confirmPassword","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"d-flex","justify-content-between","my-2"],["routerLink","/auth/login",1,"text-second","text-decoration-none"],[1,"text-main","text-decoration-none",3,"click"],[1,"main","w-100","btn",3,"disabled"],[1,"fa-solid","text-white"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable"],[1,"alert","alert-danger","p-1","small","w-100","mx-auto"],["class","mb-0",4,"ngIf"],[1,"mb-0"]],template:function(r,o){if(1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h2"),e._uU(6,"Register"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(9,"form",5),e.NdJ("ngSubmit",function(){return o.onSubmit(o.registerForm)}),e.TgZ(10,"div",6)(11,"div",7)(12,"ngx-dropzone",8),e.NdJ("change",function(l){return o.onSelect(l)}),e.TgZ(13,"ngx-dropzone-label"),e._uU(14,"Drop image!"),e.qZA(),e.YNc(15,I,2,2,"ngx-dropzone-image-preview",9),e.qZA()(),e.TgZ(16,"div",10)(17,"div",11)(18,"span",12),e._UZ(19,"i",13),e.qZA(),e._UZ(20,"input",14),e.qZA(),e.YNc(21,Y,5,4,"div",15),e.qZA(),e.TgZ(22,"div",10)(23,"div",11)(24,"span",12),e._UZ(25,"i",16),e.qZA(),e._UZ(26,"input",17),e.qZA(),e.YNc(27,Q,4,3,"div",15),e.qZA()(),e.TgZ(28,"div",6)(29,"div",10)(30,"div",11)(31,"span",12),e._UZ(32,"i",18),e.qZA(),e._UZ(33,"input",19),e.qZA(),e.YNc(34,j,3,2,"div",15),e.qZA(),e.TgZ(35,"div",10)(36,"div",11)(37,"span",12),e._UZ(38,"i",20),e.qZA(),e._UZ(39,"input",21),e.qZA(),e.YNc(40,O,3,2,"div",15),e.qZA()(),e.TgZ(41,"div",6)(42,"div",10)(43,"div",22)(44,"span",12),e._UZ(45,"i",23),e.qZA(),e._UZ(46,"input",24),e.TgZ(47,"a",25),e.NdJ("click",function(){return o.hide=!o.hide}),e._UZ(48,"i",26),e.qZA()(),e.YNc(49,B,3,2,"div",15),e.qZA(),e.TgZ(50,"div",10)(51,"div",11)(52,"span",12),e._UZ(53,"i",23),e.qZA(),e._UZ(54,"input",27),e.TgZ(55,"a",25),e.NdJ("click",function(){return o.confirmHide=!o.confirmHide}),e._UZ(56,"i",26),e.qZA()(),e.YNc(57,D,3,2,"div",15),e.qZA()(),e.TgZ(58,"div",28)(59,"a",29),e._uU(60,"Login Now?"),e.qZA(),e.TgZ(61,"a",30),e.NdJ("click",function(){return o.openDialog()}),e._uU(62,"Have a code?"),e.qZA()(),e.TgZ(63,"button",31)(64,"span"),e._uU(65,"Register"),e.qZA(),e.TgZ(66,"span"),e._UZ(67,"i",32),e.qZA()()()()()()),2&r){let s,l,_,h,Z,v;e.xp6(9),e.Q6J("formGroup",o.registerForm),e.xp6(3),e.Q6J("multiple",!1),e.xp6(3),e.Q6J("ngForOf",o.files),e.xp6(6),e.Q6J("ngIf",(null==(s=o.registerForm.get("userName"))?null:s.errors)&&(null==(s=o.registerForm.get("userName"))?null:s.touched)),e.xp6(6),e.Q6J("ngIf",(null==(l=o.registerForm.get("country"))?null:l.errors)&&(null==(l=o.registerForm.get("country"))?null:l.touched)),e.xp6(7),e.Q6J("ngIf",(null==(_=o.registerForm.get("phoneNumber"))?null:_.errors)&&(null==(_=o.registerForm.get("phoneNumber"))?null:_.touched)),e.xp6(6),e.Q6J("ngIf",(null==(h=o.registerForm.get("email"))?null:h.errors)&&(null==(h=o.registerForm.get("email"))?null:h.touched)),e.xp6(6),e.Q6J("type",o.hide?"password":"text"),e.xp6(2),e.Tol(o.hide?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(Z=o.registerForm.get("password"))?null:Z.errors)&&(null==(Z=o.registerForm.get("password"))?null:Z.touched)),e.xp6(5),e.Q6J("type",o.confirmHide?"password":"text"),e.xp6(2),e.Tol(o.confirmHide?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",(null==(v=o.registerForm.get("confirmPassword"))?null:v.errors)&&(null==(v=o.registerForm.get("confirmPassword"))?null:v.touched)),e.xp6(6),e.Q6J("disabled",o.registerForm.invalid)}},dependencies:[d.sg,d.O5,m.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g._f,g.NP,g.sv],styles:["#register[_ngcontent-%COMP%]{background-image:url(background.b83e6d2c120aba6f.png);background-size:cover;background-repeat:no-repeat;background-position:center center;height:100vh;display:flex;justify-content:center;align-items:center}ngx-dropzone[_ngcontent-%COMP%]{height:auto;border-style:solid}"]})}return t})()},{path:"forgotpassword",component:(()=>{class t{constructor(n,r,o){this._AuthServiceService=n,this._ToastrService=r,this._Router=o,this.forgotPasswordForm=new i.cw({email:new i.NI(null,[i.kI.required,i.kI.email])})}onSubmit(n){console.log(n),this._AuthServiceService.onForgotPassword(n.value).subscribe({next:r=>{console.log(r)},error:r=>{},complete:()=>{this._ToastrService.success("Email Reset Successfully","Success"),this._Router.navigate(["/auth/changepassword"])}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(f.u),e.Y36(u._W),e.Y36(m.F0))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-forgotpassword"]],decls:19,vars:1,consts:[["id","forgot-password"],[1,"auth-form","py-5"],[1,"text-center"],["src","../../../assets/images/logo.svg","alt",""],[1,"px-5"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa","fa-mobile"],["formControlName","email","type","email","name","email","placeholder","Enter Your Email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],[1,"d-flex","justify-content-between"],[1,"text-decoration-none","btn","bg-main","text-white","w-100"],[1,"fa-solid","text-white"]],template:function(r,o){1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h2"),e._uU(6,"Forgot Your Password?"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(9,"form",5),e.NdJ("ngSubmit",function(){return o.onSubmit(o.forgotPasswordForm)}),e.TgZ(10,"div",6)(11,"span",7),e._UZ(12,"i",8),e.qZA(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",10)(15,"button",11),e._uU(16,"Reset Now?"),e.qZA(),e.TgZ(17,"span"),e._UZ(18,"i",12),e.qZA()()()()()()),2&r&&(e.xp6(9),e.Q6J("formGroup",o.forgotPasswordForm))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["#forgot-password[_ngcontent-%COMP%]{background-image:url(background.b83e6d2c120aba6f.png);background-size:cover;background-repeat:no-repeat;background-position:center center;height:100vh;display:flex;justify-content:center;align-items:center}"]})}return t})()},{path:"changepassword",component:(()=>{class t{confirmPassword(n){const r=n.get("password"),o=n.get("confirmPassword");""==o?.value?o?.setErrors({required:!0}):r?.value!=o?.value&&o?.setErrors({missmatch:!0})}constructor(n,r,o){this._AuthServiceService=n,this._ToastrService=r,this._Router=o,this.hide=!0,this.confirmHide=!0,this.changePasswordForm=new i.cw({email:new i.NI(null,[i.kI.required,i.kI.email]),password:new i.NI(null,[i.kI.required,i.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$")]),confirmPassword:new i.NI(""),seed:new i.NI(null)},{validators:[this.confirmPassword]})}onSubmit(n){console.log(n),this._AuthServiceService.onChangePassword(n.value).subscribe({next:r=>{console.log(r)},error:r=>{},complete:()=>{this._ToastrService.success("Your Password Changed Successfully","Success"),this._Router.navigate(["/auth/login"])}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(f.u),e.Y36(u._W),e.Y36(m.F0))};static#o=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-changepassword"]],decls:35,vars:8,consts:[["id","change-password"],[1,"auth-form","py-5"],[1,"text-center"],["src","../../../assets/images/logo.svg","alt",""],[1,"px-5"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-envelope"],["formControlName","email","type","email","name","email","placeholder","Enter Your Email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],[1,"fa-solid","fa-key"],["formControlName","seed","type","seed","name","seed","placeholder","Enter Your OTP","aria-label","seed","aria-describedby","basic-addon1",1,"form-control"],[1,"fa-solid","fa-lock"],["formControlName","password","name","password","placeholder","Enter Your New Password","aria-label","password","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"show-password",3,"click"],[1,"fa-solid"],["formControlName","confirmPassword","name","confirmPassword","placeholder","Confirm Password","aria-label","confirmPassword","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"d-flex","justify-content-between"],[1,"text-decoration-none","btn","bg-main","text-white","w-100",3,"disabled"],[1,"fa-solid","text-white"]],template:function(r,o){1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h2"),e._uU(6,"Forgot Your Password?"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(9,"form",5),e.NdJ("ngSubmit",function(){return o.onSubmit(o.changePasswordForm)}),e.TgZ(10,"div",6)(11,"span",7),e._UZ(12,"i",8),e.qZA(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",6)(15,"span",7),e._UZ(16,"i",10),e.qZA(),e._UZ(17,"input",11),e.qZA(),e.TgZ(18,"div",6)(19,"span",7),e._UZ(20,"i",12),e.qZA(),e._UZ(21,"input",13),e.TgZ(22,"a",14),e.NdJ("click",function(){return o.hide=!o.hide}),e._UZ(23,"i",15),e.qZA()(),e.TgZ(24,"div",6)(25,"span",7),e._UZ(26,"i",12),e.qZA(),e._UZ(27,"input",16),e.TgZ(28,"a",14),e.NdJ("click",function(){return o.confirmHide=!o.confirmHide}),e._UZ(29,"i",15),e.qZA()(),e.TgZ(30,"div",17)(31,"button",18),e._uU(32,"Reset Now?"),e.qZA(),e.TgZ(33,"span"),e._UZ(34,"i",19),e.qZA()()()()()()),2&r&&(e.xp6(9),e.Q6J("formGroup",o.changePasswordForm),e.xp6(12),e.Q6J("type",o.hide?"password":"text"),e.xp6(2),e.Tol(o.hide?"fa-eye-slash":"fa-eye"),e.xp6(4),e.Q6J("type",o.confirmHide?"password":"text"),e.xp6(2),e.Tol(o.confirmHide?"fa-eye-slash":"fa-eye"),e.xp6(2),e.Q6J("disabled",o.changePasswordForm.invalid))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:["#change-password[_ngcontent-%COMP%]{background-image:url(background.b83e6d2c120aba6f.png);background-size:cover;background-repeat:no-repeat;background-position:center center;height:100vh;display:flex;justify-content:center;align-items:center}"]})}return t})()}];let K=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#o=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(X),m.Bz]})}return t})();var ee=c(9862),oe=c(3358);let te=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#o=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[d.ez,K,i.UX,ee.JF,oe.m,g.bB,u.Rh.forRoot()]})}return t})()}}]);