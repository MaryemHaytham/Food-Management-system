"use strict";(self.webpackChunkfoodManagementSystem=self.webpackChunkfoodManagementSystem||[]).push([[836],{5836:(x,u,i)=>{i.r(u),i.d(u,{UserModule:()=>T});var c=i(6814),l=i(1896),e=i(5879);let h=(()=>{class r{static#e=this.\u0275fac=function(s){return new(s||r)};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-user"]],decls:2,vars:0,template:function(s,n){1&s&&(e.TgZ(0,"p"),e._uU(1,"user works!"),e.qZA())}})}return r})();var o=i(6223),f=i(1342),g=i(2425);function w(r,d){1&r&&(e.TgZ(0,"span"),e._uU(1,"Save"),e.qZA())}function v(r,d){1&r&&(e.TgZ(0,"span"),e._UZ(1,"i",17),e.qZA())}let Z=(()=>{class r{constructor(t,s,n){this._router=t,this._AuthServiceService=s,this._ToastrService=n,this.isLoading=!1,this.hide=!0,this.confirmHide=!0,this.confirmNewHide=!0,this.userpassword=new o.cw({oldPassword:new o.NI(null,[o.kI.required,o.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$")]),newPassword:new o.NI(null,[o.kI.required,o.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$")]),confirmNewPassword:new o.NI(null,[o.kI.required,o.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$")])})}onSubmit(t){this.isLoading=!0,console.log(t.value),this._AuthServiceService.onUserChangePassword(t.value).subscribe({next:s=>{console.log(s),localStorage.setItem("userToken",s.token),this._AuthServiceService.getProfile()},error:s=>{this.isLoading=!1,console.log(s),this._ToastrService.error(s.error.message,"Error")},complete:()=>{this.isLoading=!1,this._ToastrService.success("Password Updated successfuly","Success"),this._AuthServiceService.logout()}})}static#e=this.\u0275fac=function(s){return new(s||r)(e.Y36(l.F0),e.Y36(f.u),e.Y36(g._W))};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-change-user-password"]],decls:32,vars:13,consts:[["id","change-user-password"],[1,"auth-form","py-5"],[1,"px-5"],[1,"text-center"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-lock"],["formControlName","oldPassword","name","oldPassword","placeholder","Old Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"show-password",3,"click"],[1,"fa-solid"],["formControlName","newPassword","name","newPassword","placeholder","New Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],["formControlName","confirmNewPassword","name","confirmNewPassword","placeholder","Confirm New Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"d-flex","justify-content-between","my-3"],["routerLink","/auth/forgotpassword",1,"text-main","text-decoration-none"],[1,"main","w-100","btn",3,"disabled"],[4,"ngIf"],[1,"fa-solid","fa-spinner","fa-spin","text-white"]],template:function(s,n){1&s&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Change Password"),e.qZA(),e.TgZ(5,"p",3),e._uU(6,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(7,"form",4),e.NdJ("ngSubmit",function(){return n.onSubmit(n.userpassword)}),e.TgZ(8,"div",5)(9,"span",6),e._UZ(10,"i",7),e.qZA(),e._UZ(11,"input",8),e.TgZ(12,"a",9),e.NdJ("click",function(){return n.hide=!n.hide}),e._UZ(13,"i",10),e.qZA()(),e.TgZ(14,"div",5)(15,"span",6),e._UZ(16,"i",7),e.qZA(),e._UZ(17,"input",11),e.TgZ(18,"a",9),e.NdJ("click",function(){return n.confirmHide=!n.confirmHide}),e._UZ(19,"i",10),e.qZA()(),e.TgZ(20,"div",5)(21,"span",6),e._UZ(22,"i",7),e.qZA(),e._UZ(23,"input",12),e.TgZ(24,"a",9),e.NdJ("click",function(){return n.confirmNewHide=!n.confirmNewHide}),e._UZ(25,"i",10),e.qZA()(),e.TgZ(26,"div",13)(27,"a",14),e._uU(28,"Forgot password?"),e.qZA()(),e.TgZ(29,"button",15),e.YNc(30,w,2,0,"span",16),e.YNc(31,v,2,0,"span",16),e.qZA()()()()()),2&s&&(e.xp6(7),e.Q6J("formGroup",n.userpassword),e.xp6(4),e.Q6J("type",n.hide?"password":"text"),e.xp6(2),e.Tol(n.hide?"fa-eye-slash":"fa-eye"),e.xp6(4),e.Q6J("type",n.confirmHide?"password":"text"),e.xp6(2),e.Tol(n.confirmHide?"fa-eye-slash":"fa-eye"),e.xp6(4),e.Q6J("type",n.confirmNewHide?"password":"text"),e.xp6(2),e.Tol(n.confirmNewHide?"fa-eye-slash":"fa-eye"),e.xp6(4),e.Q6J("disabled",n.userpassword.invalid),e.xp6(1),e.Q6J("ngIf",0==n.isLoading),e.xp6(1),e.Q6J("ngIf",1==n.isLoading))},dependencies:[c.O5,l.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["#change-user-password[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]})}return r})();var b=i(3141),p=i(4426);function y(r,d){1&r&&(e.TgZ(0,"ngx-dropzone-label"),e._uU(1,"Drag and Drop image "),e.TgZ(2,"span",19),e._uU(3,"Choose image "),e.qZA(),e._uU(4,"to upload"),e.qZA())}function U(r,d){if(1&r&&(e.TgZ(0,"ngx-dropzone-label"),e._UZ(1,"img",20),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("src",t.imgSrc,e.LSH)}}function _(r,d){if(1&r){const t=e.EpF();e.TgZ(0,"ngx-dropzone-image-preview",21),e.NdJ("removed",function(){const a=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.onRemove(a))}),e._UZ(1,"ngx-dropzone-label"),e.qZA()}if(2&r){const t=d.$implicit;e.Q6J("removable",!0)("file",t)}}const N=[{path:"",component:h},{path:"recipes",loadChildren:()=>i.e(2).then(i.bind(i,9002)).then(r=>r.RecipesModule)},{path:"favorites",loadChildren:()=>Promise.all([i.e(592),i.e(293)]).then(i.bind(i,4701)).then(r=>r.FavoriteModule)},{path:"changeuserpassword",component:Z},{path:"profile",component:(()=>{class r{constructor(t,s,n,a,m){this._ActivatedRoute=t,this._router=s,this._ToastrService=n,this._AuthServiceService=a,this._UserRecipeService=m,this.userId=0,this.imgUrl="https:upskilling-egypt.com/",this.files=[],this.hide=!0,this.confirmHide=!0,this.profileForm=new o.cw({userName:new o.NI("",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(20),o.kI.pattern("^(?=.*?[a-z])(?=.*?[a-z])(?=.*?[0-9]).{3,20}$")]),imagePath:new o.NI(null,[]),country:new o.NI("",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(20)]),email:new o.NI("",[o.kI.required,o.kI.email]),phoneNumber:new o.NI("",[o.kI.required]),confirmPassword:new o.NI(null,[o.kI.required])})}ngOnInit(){this.getUserById()}onSubmit(t){let s=new FormData;s.append("userName",t.value.userName),s.append("email",t.value.email),s.append("phoneNumber",t.value.phoneNumber),s.append("country",t.value.country),s.append("confirmPassword",t.value.confirmPassword),s.append("imagePath",this.imgSrc,this.imgSrc.name),this._UserRecipeService.onEditUser(this.userId,s).subscribe({next:n=>{console.log(n)},error:()=>{},complete:()=>{this._ToastrService.success("Edited Successfuly"),this._router.navigate(["/dashboard/home"])}})}onSelect(t){console.log(t),this.imgSrc=t.addedFiles[0],this.profileForm.get("imagePath")?.setValue(this.imgSrc),this.files.push(...t.addedFiles)}onRemove(t){console.log(t),this.files.splice(this.files.indexOf(t),1)}getUserById(){this._UserRecipeService.getCurrentUser().subscribe({next:t=>{this.userId=t.id,this.userData=t},error:()=>{},complete:()=>{this.imgSrc=this.imgUrl+this.userData.imagePath,this.profileForm.patchValue({userName:this.userData.userName,country:this.userData.country,phoneNumber:this.userData.phoneNumber,email:this.userData.email,confirmPassword:this.userData.confirmPassword,imagePath:this.userData.imagePath})}})}static#e=this.\u0275fac=function(s){return new(s||r)(e.Y36(l.gz),e.Y36(l.F0),e.Y36(g._W),e.Y36(f.u),e.Y36(b.c))};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile"]],decls:29,vars:8,consts:[[3,"formGroup","ngSubmit"],[1,"container"],[1,"row","py-5"],[1,"col-9","mx-auto"],[1,"col-12","my-2","d-flex","justify-content-center","align-items-center"],[3,"multiple","change"],[4,"ngIf"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"removable","file","removed",4,"ngFor","ngForOf"],[1,"input-group","mb-3"],["formControlName","userName","type","text","name","userName","placeholder","Name","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["formControlName","email","type","email","name","email","placeholder","Email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["formControlName","country","type","text","name","country","placeholder","Country","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["formControlName","phoneNumber","type","number","name","phoneNumber","placeholder","Phone Number","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["formControlName","confirmPassword","name","Confirm Password","placeholder","Confirm Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"show-password","text-main",3,"click"],[1,"fa-solid"],[1,"d-flex","justify-content-end"],[1,"btn","btn-outline-success","mx-2"],[1,"bg-success","text-white","btn","px-4"],[1,"text-success","fw-bold"],["alt","",1,"w-25",3,"src"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"removable","file","removed"]],template:function(s,n){1&s&&(e.TgZ(0,"section")(1,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit(n.profileForm)}),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"ngx-dropzone",5),e.NdJ("change",function(m){return n.onSelect(m)}),e.YNc(7,y,5,0,"ngx-dropzone-label",6),e.YNc(8,U,2,1,"ngx-dropzone-label",6),e.YNc(9,_,2,2,"ngx-dropzone-image-preview",7),e.qZA()(),e.TgZ(10,"div",8),e._UZ(11,"input",9),e.qZA(),e.TgZ(12,"div",8),e._UZ(13,"input",10),e.qZA(),e.TgZ(14,"div",8),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"div",8),e._UZ(17,"input",12),e.qZA(),e.TgZ(18,"div",8),e._UZ(19,"input",13),e.TgZ(20,"a",14),e.NdJ("click",function(){return n.hide=!n.hide}),e._UZ(21,"i",15),e.qZA()(),e.TgZ(22,"div"),e._UZ(23,"hr"),e.TgZ(24,"div",16)(25,"button",17),e._uU(26,"Cancel"),e.qZA(),e.TgZ(27,"button",18),e._uU(28,"Save"),e.qZA()()()()()()()()),2&s&&(e.xp6(1),e.Q6J("formGroup",n.profileForm),e.xp6(5),e.Q6J("multiple",!1),e.xp6(1),e.Q6J("ngIf",!n.imgSrc),e.xp6(1),e.Q6J("ngIf",n.imgSrc),e.xp6(1),e.Q6J("ngForOf",n.files),e.xp6(10),e.Q6J("type",n.hide?"password":"text"),e.xp6(2),e.Tol(n.hide?"fa-eye-slash":"fa-eye"))},dependencies:[c.sg,c.O5,p._f,p.NP,p.sv,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.sg,o.u],styles:["ngx-dropzone[_ngcontent-%COMP%]{width:18%;border-radius:20%!important;overflow:hidden}#Edit-User[_ngcontent-%COMP%]{background-color:#f0ffef;border-radius:15px;margin-top:1rem;padding:1rem}"]})}return r})()}];let P=(()=>{class r{static#e=this.\u0275fac=function(s){return new(s||r)};static#o=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(N),l.Bz]})}return r})();var C=i(3358);let T=(()=>{class r{static#e=this.\u0275fac=function(s){return new(s||r)};static#o=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[c.ez,P,C.m]})}return r})()}}]);