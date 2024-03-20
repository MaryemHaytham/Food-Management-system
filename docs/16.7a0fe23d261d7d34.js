"use strict";(self.webpackChunkfoodManagementSystem=self.webpackChunkfoodManagementSystem||[]).push([[16],{1016:(_,m,o)=>{o.r(m),o.d(m,{DashboardModule:()=>P});var c=o(6814),r=o(1896),e=o(5879),l=o(1342),g=o(2296),u=o(6311),p=o(617);function h(t,s){if(1&t&&(e.TgZ(0,"button",13),e._UZ(1,"mat-icon",9),e.TgZ(2,"span"),e._uU(3),e.qZA()()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Tol(n.icon),e.xp6(2),e.Oqu(n.text)}}function f(t,s){if(1&t&&(e.TgZ(0,"div",10)(1,"a",11),e.YNc(2,h,4,3,"button",12),e.qZA()()),2&t){const n=s.$implicit;e.xp6(1),e.Q6J("routerLink",n.link),e.xp6(1),e.Q6J("ngIf",n.isActive)}}let v=(()=>{class t{constructor(n){this._AuthServiceService=n,this.userName=localStorage.getItem("userName"),this.Menu=[{text:"Profile",link:"/dashboard/user/profile",icon:"fa-solid fa-user",isActive:this.isUser()},{text:"ChangePassword",link:"/dashboard/user/changeuserpassword",icon:"fa-solid fa-lock",isActive:this.isUser()}]}isAdmin(){return console.log(this._AuthServiceService.role),"SuperAdmin"==this._AuthServiceService.role}isUser(){return console.log(this._AuthServiceService.role),"SystemUser"==this._AuthServiceService.role}myLogout(){this._AuthServiceService.logout()}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(l.u))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-navbar"]],decls:18,vars:3,consts:[[1,"row","justify-content-end"],[1,"col-4","px-4"],[1,"d-flex","align-items-center","justify-content-end"],["src","../../../assets/images/girl-nav.png","alt","",1,"mx-2"],[1,"mb-0"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["class","ng-container",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],[1,"text-success"],[1,"ng-container"],[3,"routerLink"],["mat-menu-item","",4,"ngIf"],["mat-menu-item",""]],template:function(i,a){if(1&i&&(e.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2),e._UZ(4,"img",3),e.TgZ(5,"h6",4),e._uU(6),e.qZA(),e.TgZ(7,"button",5)(8,"mat-icon"),e._uU(9,"expand_more"),e.qZA()(),e.TgZ(10,"mat-menu",null,6),e.YNc(12,f,3,2,"div",7),e.TgZ(13,"button",8),e.NdJ("click",function(){return a.myLogout()}),e.TgZ(14,"mat-icon",9),e._uU(15,"logout"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Logout"),e.qZA()()()()()()()),2&i){const d=e.MAs(11);e.xp6(6),e.Oqu(a.userName),e.xp6(1),e.Q6J("matMenuTriggerFor",d),e.xp6(5),e.Q6J("ngForOf",a.Menu)}},dependencies:[g.RK,u.VK,u.OP,u.p6,p.Hw,c.sg,c.O5,r.rH],styles:["section[_ngcontent-%COMP%]{border-radius:16px;background-color:#f8f9f8;margin-top:15px}a[_ngcontent-%COMP%]{text-decoration:none}"]})}return t})();function A(t,s){if(1&t&&(e.TgZ(0,"li")(1,"a",7)(2,"span"),e._UZ(3,"i"),e.qZA(),e.TgZ(4,"span",8),e._uU(5),e.qZA()()()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink",n.link),e.xp6(2),e.Tol(n.icon),e.xp6(2),e.Oqu(n.text)}}function x(t,s){if(1&t&&(e.TgZ(0,"div",5),e.YNc(1,A,6,4,"li",6),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.Q6J("ngIf",n.isActive)}}let S=(()=>{class t{constructor(n){this._AuthServiceService=n,this.Menu=[{text:"Home",link:"/dashboard/home",icon:"fa-solid fa-house",isActive:this.isAdmin()||this.isUser()},{text:"Users",link:"/dashboard/admin/users",icon:"fa-solid fa-users",isActive:this.isAdmin()},{text:"Recipes",link:"/dashboard/user/recipes",icon:"fa-solid fa-receipt",isActive:this.isUser()},{text:"Favorites",link:"/dashboard/user/favorites",icon:"fa-solid fa-heart",isActive:this.isUser()},{text:"Recipes",link:"/dashboard/admin/recipes",icon:"fa-solid fa-receipt",isActive:this.isAdmin()},{text:"Categories",link:"/dashboard/admin/category",icon:"fa-solid fa-layer-group",isActive:this.isAdmin()}]}isAdmin(){return console.log(this._AuthServiceService.role),"SuperAdmin"==this._AuthServiceService.role}isUser(){return console.log(this._AuthServiceService.role),"SystemUser"==this._AuthServiceService.role}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(l.u))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-sidebar"]],decls:6,vars:1,consts:[[1,"bg-dark2"],[1,"text-center","py-3"],["src","../../../assets/images/sidebar-logo.svg","alt","",1,"w-75","myPointer"],[1,"mt-5"],["class","ng-container",4,"ngFor","ngForOf"],[1,"ng-container"],[4,"ngIf"],["routerLinkActive","bg-main-transparent",3,"routerLink"],[1,"text-capitalize"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"ul"),e.YNc(5,x,2,1,"div",4),e.qZA()()()),2&i&&(e.xp6(5),e.Q6J("ngForOf",a.Menu))},dependencies:[c.sg,c.O5,r.rH,r.Od],styles:["section[_ngcontent-%COMP%]{min-height:100vh;border-top-right-radius:58px;height:100%}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;color:#ffffff8a;text-decoration:none;display:block}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 5px}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}section[_ngcontent-%COMP%]   .bg-main-transparent[_ngcontent-%COMP%]{background-color:#00924d1a;color:#fff!important}"]})}return t})();function T(t,s){if(1&t&&(e.TgZ(0,"div",11)(1,"div",12)(2,"h3"),e._uU(3),e.TgZ(4,"span",13),e._uU(5),e.qZA()(),e.TgZ(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"div",14)(9,"button",15)(10,"span"),e._uU(11),e.qZA(),e.TgZ(12,"span",16),e._UZ(13,"i"),e.qZA()()()()),2&t){const n=e.oxw().$implicit;e.xp6(3),e.hij("",n.text," "),e.xp6(2),e.Oqu(n.textSpan),e.xp6(2),e.Oqu(n.paragraph),e.xp6(2),e.Q6J("routerLink",n.link),e.xp6(2),e.Oqu(n.buttonName),e.xp6(2),e.Tol(n.icon)}}function M(t,s){if(1&t&&(e.TgZ(0,"div",8)(1,"div",9),e.YNc(2,T,14,7,"div",10),e.qZA()()),2&t){const n=s.$implicit;e.xp6(2),e.Q6J("ngIf",n.isActive)}}const O=[{path:"",component:(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:7,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-2","px-0"],[1,"col-10"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-sidebar"),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"app-navbar")(6,"router-outlet"),e.qZA()()())},dependencies:[r.lC,v,S]})}return t})(),children:[{path:"home",component:(()=>{class t{constructor(n){this._AuthServiceService=n,this.userName=localStorage.getItem("userName"),this.role=[{text:"Fill The",icon:"fa-solid fa-arrow-right",textSpan:"Recipe",paragraph:"you can now fill the meals easily using the table and form , click here and sill it with the table !",buttonName:"Fill Recipe",link:"/dashboard/admin/recipes",isActive:this.isAdmin()},{text:"Show All",icon:"fa-solid fa-arrow-right",textSpan:"Recipes",paragraph:"you can now show the meals easily using this button, click here and sill it with the table !",buttonName:"Go To Recipes",link:"/dashboard/user/recipes",isActive:this.isUser()}]}isAdmin(){return console.log(this._AuthServiceService.role),"SuperAdmin"==this._AuthServiceService.role}isUser(){return console.log(this._AuthServiceService.role),"SystemUser"==this._AuthServiceService.role}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(l.u))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:14,vars:2,consts:[["id","home"],[1,"container"],[1,"row","align-items-center","px-5"],[1,"col-6","text-white"],[1,"mx-2","lead","text-white-10"],[1,"col-6","text-end"],["src","../../../assets/images/home-avatar.svg","alt",""],["class","fillRecipe",4,"ngFor","ngForOf"],[1,"fillRecipe"],[1,"ng-container"],["class"," row align-items-center mt-4 p-4",4,"ngIf"],[1,"row","align-items-center","mt-4","p-4"],[1,"col-8"],[1,"text-main"],[1,"col-4","text-end"],[1,"bg-main","btn","text-white",3,"routerLink"],[1,"mx-2"]],template:function(i,a){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2")(5,"span"),e._uU(6,"Welcome"),e.qZA(),e.TgZ(7,"span",4),e._uU(8),e.qZA()(),e.TgZ(9,"p"),e._uU(10,"This is a welcoming screen for the entry of the application ,you can now see the options."),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"img",6),e.qZA()()()(),e.YNc(13,M,3,1,"div",7)),2&i&&(e.xp6(8),e.hij("",a.userName," !"),e.xp6(5),e.Q6J("ngForOf",a.role))},dependencies:[c.sg,c.O5,r.rH],styles:["#home[_ngcontent-%COMP%]{background-image:url(header-bg-svg.e7cd2c7a9e952177.svg);background-size:cover;background-repeat:no-repeat;background-position:center center;background-color:#009247;border-radius:15px;margin-top:1rem}.fillRecipe[_ngcontent-%COMP%]{background-color:#f0ffef;border-radius:15px}"]})}return t})()},{path:"admin",canActivate:[(t,s)=>{const n=(0,e.f3M)(r.F0);return null!==localStorage.getItem("userToken")&&"SuperAdmin"==localStorage.getItem("userRole")||(n.navigate(["/auth/login"]),!1)}],loadChildren:()=>Promise.all([o.e(592),o.e(859)]).then(o.bind(o,9859)).then(t=>t.AdminModule)},{path:"user",canActivate:[(t,s)=>{const n=(0,e.f3M)(r.F0);return null!==localStorage.getItem("userToken")&&"SystemUser"==localStorage.getItem("userRole")||(n.navigate(["/auth/login"]),!1)}],loadChildren:()=>Promise.all([o.e(592),o.e(836)]).then(o.bind(o,5836)).then(t=>t.UserModule)}]}];let y=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[r.Bz.forChild(O),r.Bz]})}return t})();var U=o(3358);let P=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[c.ez,y,U.m]})}return t})()}}]);