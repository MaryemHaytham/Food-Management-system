"use strict";(self.webpackChunkfoodManagementSystem=self.webpackChunkfoodManagementSystem||[]).push([[552],{5552:(u,o,n)=>{n.d(o,{H:()=>i});var r=n(5879),s=n(9862);let i=(()=>{class e{constructor(t){this._HttpClient=t}getAllCategories(t,a,_){return this._HttpClient.get("category",{params:{pageSize:t,pageNumber:a,name:_}})}onAddCategory(t){return this._HttpClient.post("Category",{name:t})}onEditCategory(t,a){return this._HttpClient.put("Category/{id}",{name:t})}onDeleteCategory(t){return this._HttpClient.delete(`Category/${t}`)}static#t=this.\u0275fac=function(a){return new(a||e)(r.LFG(s.eN))};static#e=this.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);