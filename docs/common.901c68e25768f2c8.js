"use strict";(self.webpackChunkfoodManagementSystem=self.webpackChunkfoodManagementSystem||[]).push([[592],{8588:(y,U,o)=>{o.r(U),o.d(U,{UsersModule:()=>D});var g=o(6814),i=o(1896),s=o(5061),p=o(7700),e=o(5879);let h=(()=>{class r{constructor(t,c){this.dialogRef=t,this.data=c,this.imagePath="https://upskilling-egypt.com/",this.dummyImage="../../../../assets/images/profile.jpg"}onNoClick(){this.dialogRef.close()}static#e=this.\u0275fac=function(c){return new(c||r)(e.Y36(p.so),e.Y36(p.WI))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-details"]],decls:13,vars:4,consts:[[1,"container","py-3"],[1,"text-end","d-block","myPointer",3,"click"],[1,"fa-regular","fa-2x","fa-circle-xmark","text-danger"],[1,"text-center"],["alt","",1,"w-25",3,"src"],[1,"text-end"],[1,"btn","btn-outline-danger",3,"mat-dialog-close"]],template:function(c,l){1&c&&(e.TgZ(0,"section",0)(1,"a",1),e.NdJ("click",function(){return l.onNoClick()}),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.TgZ(5,"h3"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e._UZ(9,"hr"),e.qZA(),e.TgZ(10,"div",5)(11,"button",6),e._uU(12,"Close"),e.qZA()()()),2&c&&(e.xp6(4),e.Q6J("src",l.data.imagePath?l.imagePath+l.data.imagePath:l.dummyImage,e.LSH),e.xp6(2),e.Oqu(l.data.userName?l.data.userName:"No Name"),e.xp6(2),e.Oqu(l.data.email?l.data.email:"No Email"),e.xp6(3),e.Q6J("mat-dialog-close",l.data.id))},dependencies:[p.ZT]})}return r})();var v=o(9862);let Z=(()=>{class r{constructor(t){this._HttpClient=t}getUsers(t,c,l){return this._HttpClient.get("Users",{params:{pageSize:t,pageNumber:c,name:l}})}onDeleteUser(t){return this._HttpClient.delete(`Users/${t}`)}onGetUser(t){return this._HttpClient.delete(`Users/${t}`)}static#e=this.\u0275fac=function(c){return new(c||r)(e.LFG(v.eN))};static#t=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var m=o(2425),f=o(6223),a=o(3365),n=o(2296),_=o(6311),d=o(617);function u(r,b){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"td")(11,"button",17)(12,"mat-icon",18),e._uU(13,"more_horiz"),e.qZA()(),e.TgZ(14,"mat-menu",null,19)(16,"button",20),e.NdJ("click",function(){const T=e.CHM(t).$implicit,C=e.oxw(2);return e.KtG(C.openUserDetailes(T))}),e.TgZ(17,"mat-icon",18),e._uU(18,"visibility"),e.qZA(),e.TgZ(19,"span"),e._uU(20,"View"),e.qZA()(),e.TgZ(21,"button",20),e.NdJ("click",function(){const T=e.CHM(t).$implicit,C=e.oxw(2);return e.KtG(C.openDeleteUserDialog(T))}),e.TgZ(22,"mat-icon",18),e._uU(23,"delete"),e.qZA(),e.TgZ(24,"span"),e._uU(25,"Delete"),e.qZA()()()()()}if(2&r){const t=b.$implicit,c=e.MAs(15);e.xp6(2),e.Oqu(t.userName),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.country),e.xp6(2),e.Oqu(e.lcZ(9,5,t.creationDate)),e.xp6(3),e.Q6J("matMenuTriggerFor",c)}}function x(r,b){if(1&r){const t=e.EpF();e.TgZ(0,"div")(1,"table",14)(2,"thead")(3,"th"),e._uU(4,"Name"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Email"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Country"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Modification Date"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Actions"),e.qZA()(),e.TgZ(13,"tbody"),e.YNc(14,u,26,7,"tr",15),e.qZA()(),e.TgZ(15,"mat-paginator",16),e.NdJ("page",function(l){e.CHM(t);const T=e.oxw();return e.KtG(T.handlePageEvent(l))}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(14),e.Q6J("ngForOf",t.tableData),e.xp6(1),e.Q6J("length",null==t.tableResponse?null:t.tableResponse.totalNumberOfRecords)("pageSize",null==t.tableResponse?null:t.tableResponse.pageSize)("pageSizeOptions",t.pageSizeOptions)("pageIndex",null==t.tableResponse?null:t.tableResponse.pageNumber)}}function A(r,b){1&r&&(e.TgZ(0,"div")(1,"div",21),e._UZ(2,"img",22),e.TgZ(3,"h5"),e._uU(4,"Not Found"),e.qZA()()())}const S=[{path:"",component:(()=>{class r{constructor(t,c,l){this.dialog=t,this._usersService=c,this._ToastrService=l,this.searchKey="",this.length=50,this.pageSize=5,this.pageIndex=1,this.pageSizeOptions=[5,10,25],this.tableData=[]}ngOnInit(){this.getAllUsers()}searchByName(){}getAllUsers(){this._usersService.getUsers(this.pageSize,this.pageIndex,this.searchKey).subscribe({next:t=>{console.log(t.pageSize),this.tableResponse=t,this.tableData=t.data}})}handlePageEvent(t){this.pageSize=t.pageSize,this.pageIndex=t.pageIndex}openDeleteUserDialog(t){console.log(t),this.dialog.open(s.T,{data:t}).afterClosed().subscribe(l=>{console.log("The dialog was closed"),console.log(l),l&&this.deleteUser(l)})}openUserDetailes(t){this.dialog.open(h,{data:t}).afterClosed().subscribe(l=>{console.log("The dialog was closed"),console.log(l)})}deleteUser(t){this._usersService.onDeleteUser(t).subscribe({next:c=>{console.log(c)},error:()=>{},complete:()=>{this.getAllUsers(),this._ToastrService.info("Deleted Successfuly")}})}static#e=this.\u0275fac=function(c){return new(c||r)(e.Y36(p.uw),e.Y36(Z),e.Y36(m._W))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-users"]],decls:24,vars:3,consts:[["id","user"],[1,"header-page","container"],[1,"row","align-items-center"],[1,"col-8","text-white"],[1,"mb-0"],[1,"col-4","text-end"],["src","../../../../assets/images/profile 1.svg","alt",""],[1,"mt-3","d-flex","align-items-center","justify-content-between"],[1,"w-75"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-magnifying-glass"],["type","text","name","email","placeholder","Search by Name","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],[4,"ngIf"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageSize","pageSizeOptions","pageIndex","page"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["color","primary"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"text-center"],["src","../../../../assets/images/delete-img.svg","alt",""]],template:function(c,l){1&c&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),e._uU(5,"Users "),e.TgZ(6,"span"),e._uU(7,"item"),e.qZA()(),e.TgZ(8,"p",4),e._uU(9,"You can now add your items that any user can order it from the Application and you can edit."),e.qZA()(),e.TgZ(10,"div",5),e._UZ(11,"img",6),e.qZA()()(),e.TgZ(12,"div",7)(13,"div",8)(14,"h6"),e._uU(15,"User Table Details"),e.qZA(),e.TgZ(16,"p"),e._uU(17,"You can check all details"),e.qZA(),e.TgZ(18,"div",9)(19,"span",10),e._UZ(20,"i",11),e.qZA(),e.TgZ(21,"input",12),e.NdJ("ngModelChange",function(C){return l.searchKey=C})("keyup.enter",function(){return l.getAllUsers()}),e.qZA()()()(),e.YNc(22,x,16,5,"div",13),e.YNc(23,A,5,0,"div",13),e.qZA()),2&c&&(e.xp6(21),e.Q6J("ngModel",l.searchKey),e.xp6(1),e.Q6J("ngIf",l.tableData.length>0),e.xp6(1),e.Q6J("ngIf",0==l.tableData.length))},dependencies:[g.sg,g.O5,f.Fj,f.JJ,f.On,a.NW,n.RK,_.VK,_.OP,_.p6,d.Hw,g.uU]})}return r})()}];let I=(()=>{class r{static#e=this.\u0275fac=function(c){return new(c||r)};static#t=this.\u0275mod=e.oAB({type:r});static#s=this.\u0275inj=e.cJS({imports:[i.Bz.forChild(S),i.Bz]})}return r})();var R=o(3358);let D=(()=>{class r{static#e=this.\u0275fac=function(c){return new(c||r)};static#t=this.\u0275mod=e.oAB({type:r});static#s=this.\u0275inj=e.cJS({imports:[g.ez,I,R.m]})}return r})()},1342:(y,U,o)=>{o.d(U,{u:()=>Z});class g extends Error{}g.prototype.name="InvalidTokenError";var e=o(5879),h=o(9862),v=o(1896);let Z=(()=>{class m{constructor(a,n){this._HttpClient=a,this._Router=n,this.role="",null!==localStorage.getItem("userToken")&&this.getProfile()}getProfile(){let a=localStorage.getItem("userToken");console.log(a);let n=function p(m,f){if("string"!=typeof m)throw new g("Invalid token specified: must be a string");f||(f={});const a=!0===f.header?0:1,n=m.split(".")[a];if("string"!=typeof n)throw new g(`Invalid token specified: missing part #${a+1}`);let _;try{_=function s(m){let f=m.replace(/-/g,"+").replace(/_/g,"/");switch(f.length%4){case 0:break;case 2:f+="==";break;case 3:f+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function i(m){return decodeURIComponent(atob(m).replace(/(.)/g,(f,a)=>{let n=a.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}(f)}catch{return atob(f)}}(n)}catch(d){throw new g(`Invalid token specified: invalid base64 for part #${a+1} (${d.message})`)}try{return JSON.parse(_)}catch(d){throw new g(`Invalid token specified: invalid json for part #${a+1} (${d.message})`)}}(a);localStorage.setItem("userRole",n.userGroup),localStorage.setItem("userName",n.userName),console.log(n),this.getRole()}getRole(){null!==localStorage.getItem("userToken")&&null!==localStorage.getItem("userRole")&&(this.role=localStorage.getItem("userRole"))}onLogin(a){return this._HttpClient.post("Users/Login",a)}onRegister(a){return this._HttpClient.post("Users/Register",a)}onVerify(a){return this._HttpClient.put("Users/verify",a)}onForgotPassword(a){return this._HttpClient.post("Users/Reset/Request",a)}onChangePassword(a){return this._HttpClient.post("Users/Reset",a)}onUserChangePassword(a){return this._HttpClient.put("Users/ChangePassword",a)}onChangeProfile(){return this._HttpClient.get("Users/currentUser")}onEditProfile(a){return this._HttpClient.put("Users",a)}logout(){localStorage.removeItem("userToken"),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),this._Router.navigate(["/auth/login"])}static#e=this.\u0275fac=function(n){return new(n||m)(e.LFG(h.eN),e.LFG(v.F0))};static#t=this.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},5061:(y,U,o)=>{o.d(U,{T:()=>s});var g=o(7700),i=o(5879);let s=(()=>{class p{constructor(h,v){this.dialogRef=h,this.data=v}onNoClick(){this.dialogRef.close()}static#e=this.\u0275fac=function(v){return new(v||p)(i.Y36(g.so),i.Y36(g.WI))};static#t=this.\u0275cmp=i.Xpm({type:p,selectors:[["app-delete"]],decls:15,vars:1,consts:[[1,"container","py-3"],[1,"text-end","d-block","myPointer",3,"click"],[1,"fa-regular","fa-2x","fa-circle-xmark","text-danger"],[1,"text-center"],["src","../../../assets/images/delete-img.svg","alt","",1,"w-25"],[1,"text-end"],[1,"btn","btn-outline-danger",3,"mat-dialog-close"],[1,"me-2"],[1,"fa-solid","fa-trash"]],template:function(v,Z){1&v&&(i.TgZ(0,"section",0)(1,"a",1),i.NdJ("click",function(){return Z.onNoClick()}),i._UZ(2,"i",2),i.qZA(),i.TgZ(3,"div",3),i._UZ(4,"img",4),i.TgZ(5,"h3"),i._uU(6,"Delete this Item ?"),i.qZA(),i.TgZ(7,"p"),i._uU(8,"are you sure you want to delete this item ? if you are sure just click on delete"),i.qZA(),i._UZ(9,"hr"),i.qZA(),i.TgZ(10,"div",5)(11,"button",6)(12,"span",7),i._UZ(13,"i",8),i.qZA(),i._uU(14,"Delete"),i.qZA()()()),2&v&&(i.xp6(11),i.Q6J("mat-dialog-close",Z.data.id))},dependencies:[g.ZT]})}return p})()},4701:(y,U,o)=>{o.r(U),o.d(U,{FavoriteModule:()=>a});var g=o(6814),i=o(1896),s=o(5879),p=o(7638),e=o(2425);function h(n,_){if(1&n){const d=s.EpF();s.TgZ(0,"div",3)(1,"div",4),s._UZ(2,"img",5),s.TgZ(3,"div",6)(4,"a",7),s.NdJ("click",function(){const A=s.CHM(d).$implicit,F=s.oxw();return s.KtG(F.removeItem(A.id))}),s._UZ(5,"i",8),s.qZA()(),s.TgZ(6,"div",9)(7,"h4"),s._uU(8),s.qZA(),s.TgZ(9,"p"),s._uU(10),s.qZA()()()()}if(2&n){const d=_.$implicit,u=s.oxw();s.xp6(2),s.Q6J("src",d.recipe.imagePath?u.imagePath+d.recipe.imagePath:u.dummyImage,s.LSH),s.xp6(6),s.Oqu(d.recipe.name),s.xp6(2),s.Oqu(d.recipe.description)}}const Z=[{path:"",component:(()=>{class n{constructor(d,u){this._UserFavoritesService=d,this._ToastrService=u,this.imagePath="https://upskilling-egypt.com/",this.dummyImage="../../../../assets/images/recipes.jpg",this.tableRecipe=[]}ngOnInit(){this.getMyFavs()}getMyFavs(){this._UserFavoritesService.getAllFavorites().subscribe({next:d=>{console.log(d),this.tableRecipe=d.data},error:d=>{},complete:()=>{}})}removeItem(d){this._UserFavoritesService.deleteFavorite(d).subscribe({next:u=>{console.log(u)},error:u=>{},complete:()=>{this._ToastrService.success("Deleted Successfuly"),this.getMyFavs()}})}static#e=this.\u0275fac=function(u){return new(u||n)(s.Y36(p.q),s.Y36(e._W))};static#t=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-favorite"]],decls:4,vars:1,consts:[[1,"container"],[1,"row"],["class","col-md-4 ",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"item","bg-white","shadow","position-relative"],["alt","",1,"w-100",3,"src"],[1,"delete-icon"],[1,"myPointer",3,"click"],[1,"fa-solid","fa-trash-can","text-danger"],[1,"p-2"]],template:function(u,x){1&u&&(s.TgZ(0,"section")(1,"div",0)(2,"div",1),s.YNc(3,h,11,3,"div",2),s.qZA()()()),2&u&&(s.xp6(3),s.Q6J("ngForOf",x.tableRecipe))},dependencies:[g.sg],styles:[".item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75%;border-radius:15px 15px 35px 35px}.item[_ngcontent-%COMP%]{border-top-left-radius:15px;border-top-right-radius:15px}.delete-icon[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:8px;background-color:#fff;border:1.5px solid #1f263E;display:flex;justify-content:center;align-items:center;position:absolute;top:10px;right:10px}"]})}return n})()}];let m=(()=>{class n{static#e=this.\u0275fac=function(u){return new(u||n)};static#t=this.\u0275mod=s.oAB({type:n});static#s=this.\u0275inj=s.cJS({imports:[i.Bz.forChild(Z),i.Bz]})}return n})();var f=o(3358);let a=(()=>{class n{static#e=this.\u0275fac=function(u){return new(u||n)};static#t=this.\u0275mod=s.oAB({type:n});static#s=this.\u0275inj=s.cJS({imports:[g.ez,m,f.m]})}return n})()},3141:(y,U,o)=>{o.d(U,{c:()=>s});var g=o(5879),i=o(9862);let s=(()=>{class p{constructor(h){this._HttpClient=h}getAllRecipes(h){return this._HttpClient.get("Recipe",{params:h})}onEditUser(h,v){return this._HttpClient.put("Users",v,{params:{id:h}})}getCurrentUser(){return this._HttpClient.get("Users/currentUser")}static#e=this.\u0275fac=function(v){return new(v||p)(g.LFG(i.eN))};static#t=this.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()}}]);