webpackJsonp([23],{FlqA:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=function(){},i=u("KhCp"),a=u("kL+h"),_=u("tfJK"),o=u("drlO"),c=u("Un6q"),s=u("TMwh"),p=function(){function l(l){this.http=l,this.clickMsgArray=[],this.getHtmlAndTypeScriptCode(),this.user=!1,this.shop=!0,this.payment=!1,this.confirmation=!1}return l.prototype.stepBlockClick=function(l){"User"==l.label?(this.updateFlag(!0,!1,!1,!1),this.showMsg("Step 1 User")):"Shop"==l.label?(this.updateFlag(!1,!0,!1,!1),this.showMsg("Step 2 Shop")):"Payment"==l.label?(this.showMsg("Step 3 Payment"),this.updateFlag(!1,!1,!0,!1)):"Confirmation"==l.label&&(this.updateFlag(!1,!1,!1,!0),this.showMsg("Step 4 Confirmation"))},l.prototype.updateFlag=function(l,n,u,e){this.user=l,this.shop=n,this.payment=u,this.confirmation=e},l.prototype.showMsg=function(l){this.clickMsgArray.length>=1?(this.clickMsgArray=[],this.clickMsgArray.push(l)):this.clickMsgArray.push(l)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,u=this;this.http.get("assets/data/code/layout/steps/steps.html").subscribe(function(n){l=n.text()},function(l){},function(){u.htmlCode=l}),this.http.get("assets/data/code/layout/steps/steps.text").subscribe(function(l){n=l.text()},function(l){},function(){u.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push("Code Copied")):this.copyMsgArray.push("Code Copied")},l}(),r=e._1({encapsulation:2,styles:[],data:{}});function d(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(4,4243456,null,0,a.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function h(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,i.b,i.a)),e._2(3,4243456,null,0,a.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function m(l){return e._27(0,[(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,167,"amexio-card",[["header","true"]],null,null,null,_._41,_.f)),e._2(2,114688,null,0,o.g,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(4,0,null,0,2,"amexio-header",[],null,null,null,_._46,_.k)),e._2(5,114688,null,0,o.q,[],null,null),(l()(),e._25(-1,0,["\n         Step Box \n      "])),(l()(),e._25(-1,null,["\n      "])),(l()(),e._3(8,0,null,1,159,"amexio-body",[],null,null,null,_._38,_.c)),e._2(9,114688,null,0,o.d,[],null,null),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Step-box component is an indicator for the steps in a workflow."])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._3(14,0,null,0,152,"amexio-tab-view",[],null,null,null,_._55,_.t)),e._2(15,5357568,null,1,o.D,[e.B],null,null),e._23(603979776,1,{queryTabs:1}),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(18,0,null,0,91,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,_._56,_.u)),e._2(19,114688,[[1,4]],0,o.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(21,0,null,0,28,"amexio-row",[],null,null,null,_._52,_.q)),e._2(22,1163264,null,0,o.A,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(24,0,null,0,24,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,_._43,_.h)),e._2(25,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(28,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),e._3(29,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Step box"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(32,0,null,0,15,"amexio-steps",[],null,[[null,"onClick"]],function(l,n,u){var e=!0;return"onClick"===n&&(e=!1!==l.component.stepBlockClick(u)&&e),e},_._54,_.s)),e._2(33,1425408,null,1,o.C,[],{index:[0,"index"],block:[1,"block"]},{onClick:"onClick"}),e._23(603979776,2,{stepBlocks:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(36,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(37,114688,[[2,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(39,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(40,114688,[[2,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(42,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(43,114688,[[2,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(45,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(46,114688,[[2,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(51,0,null,0,28,"amexio-row",[],null,null,null,_._52,_.q)),e._2(52,1163264,null,0,o.A,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(54,0,null,0,24,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,_._43,_.h)),e._2(55,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(58,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),e._3(59,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Step box with clickabel"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(62,0,null,0,15,"amexio-steps",[],null,[[null,"onClick"]],function(l,n,u){var e=!0;return"onClick"===n&&(e=!1!==l.component.stepBlockClick(u)&&e),e},_._54,_.s)),e._2(63,1425408,null,1,o.C,[],{index:[0,"index"],block:[1,"block"]},{onClick:"onClick"}),e._23(603979776,3,{stepBlocks:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(66,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(67,114688,[[3,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(69,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(70,114688,[[3,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(72,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(73,114688,[[3,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(75,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(76,114688,[[3,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(81,0,null,0,27,"amexio-row",[],null,null,null,_._52,_.q)),e._2(82,1163264,null,0,o.A,[],null,null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(84,0,null,0,23,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,_._43,_.h)),e._2(85,114688,null,0,o.j,[],{size:[0,"size"]},null),(l()(),e._25(-1,0,["\n                index is true for number inside circle \n                "])),(l()(),e._3(87,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),e._3(88,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e._25(-1,null,["Step-box index"])),(l()(),e._25(-1,0,["\n                "])),(l()(),e._3(91,0,null,0,15,"amexio-steps",[],null,[[null,"onClick"]],function(l,n,u){var e=!0;return"onClick"===n&&(e=!1!==l.component.stepBlockClick(u)&&e),e},_._54,_.s)),e._2(92,1425408,null,1,o.C,[],{index:[0,"index"]},{onClick:"onClick"}),e._23(603979776,4,{stepBlocks:1}),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(95,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(96,114688,[[4,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(98,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(99,114688,[[4,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(101,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(102,114688,[[4,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                  "])),(l()(),e._3(104,0,null,null,1,"amexio-step-block",[],null,null,null,_._86,_.Y)),e._2(105,114688,[[4,4]],0,o._23,[],{active:[0,"active"],label:[1,"label"]},null),(l()(),e._25(-1,null,["\n                "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n           "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(111,0,null,0,27,"amexio-tab",[["title","API Reference"]],null,null,null,_._56,_.u)),e._2(112,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(114,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,_._103,_._15)),e._2(115,1425408,null,1,o._44,[o.Y,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,5,{columnRef:1}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(118,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),e._2(119,49152,[[5,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,6,{headerTemplate:0}),e._23(335544320,7,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(123,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),e._2(124,49152,[[5,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,8,{headerTemplate:0}),e._23(335544320,9,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(128,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),e._2(129,49152,[[5,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,10,{headerTemplate:0}),e._23(335544320,11,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(133,0,null,null,3,"amexio-data-table-column",[],null,null,null,_._104,_._16)),e._2(134,49152,[[5,4]],2,o._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,12,{headerTemplate:0}),e._23(335544320,13,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n            "])),(l()(),e._25(-1,0,["\n\n\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(140,0,null,0,21,"amexio-tab",[["title","Source"]],null,null,null,_._56,_.u)),e._2(141,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            "])),(l()(),e._3(143,0,null,0,17,"amexio-vertical-tab-view",[],null,null,null,_._58,_.w)),e._2(144,5357568,null,1,o.I,[e.B],null,null),e._23(603979776,14,{queryTabs:1}),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(147,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,_._56,_.u)),e._2(148,114688,[[14,4]],0,o.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,d)),e._2(151,16384,null,0,c.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n              "])),(l()(),e._3(154,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,_._56,_.u)),e._2(155,114688,[[14,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n                "])),(l()(),e.Y(16777216,null,0,1,null,h)),e._2(158,16384,null,0,c.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n              "])),(l()(),e._25(-1,0,["\n            "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._25(-1,0,["\n          "])),(l()(),e._3(163,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,_._56,_.u)),e._2(164,114688,[[1,4]],0,o.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n            Work in Progress\n          "])),(l()(),e._25(-1,0,["\n        "])),(l()(),e._25(-1,0,["\n      "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._25(-1,null,["\n    "])),(l()(),e._3(170,0,null,null,1,"amexio-notification",[["horizontal-position","right"],["vertical-position","top"]],null,null,null,_._49,_.n)),e._2(171,114688,null,0,o.w,[e.h],{verticalposition:[0,"verticalposition"],horizontalposition:[1,"horizontalposition"],messageData:[2,"messageData"]},null),(l()(),e._25(-1,null,["\n\n  "]))],function(l,n){var u=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,"12"),l(n,33,0,!0,!0),l(n,37,0,!0,"User"),l(n,40,0,!1,"Shop"),l(n,43,0,!1,"Payment"),l(n,46,0,!1,"Confirmation"),l(n,52,0),l(n,55,0,"12"),l(n,63,0,!0,!0),l(n,67,0,"user","User"),l(n,70,0,"shop","Shop"),l(n,73,0,"payment","Payment"),l(n,76,0,"confirmation","Confirmation"),l(n,82,0),l(n,85,0,"12"),l(n,92,0,!0),l(n,96,0,!0,"step-1"),l(n,99,0,!1,"step-2"),l(n,102,0,!1,"step-3"),l(n,105,0,!1,"step-4"),l(n,112,0,"API Reference"),l(n,115,0,"Properties","assets/apireference/layout/steps/step.json","get","properties",!1,!1),l(n,119,0,"Name","name",!1,"string",15),l(n,124,0,"Type","type",!1,"string",10),l(n,129,0,"Default","default",!1,"string",10),l(n,134,0,"Description","description",!1,"string",65),l(n,141,0,"Source"),l(n,144,0),l(n,148,0,"HTML",!0),l(n,151,0,u.htmlCode),l(n,155,0,"Type Script"),l(n,158,0,u.typeScriptCode),l(n,164,0,"Live"),l(n,171,0,"top","right",u.clickMsgArray)},function(l,n){l(n,24,0,e._16(n,25).colclass),l(n,54,0,e._16(n,55).colclass),l(n,84,0,e._16(n,85).colclass)})}var b=e.Z("step-box",p,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"step-box",[],null,null,null,m,r)),e._2(1,49152,null,0,p,[s.e],null,null)],null,null)},{},{},[]),x=u("0nO6"),f=u("UHIZ");u.d(n,"StepBoxDemoModuleNgFactory",function(){return k});var k=e._0(t,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[b]],[3,e.j],e.v]),e._13(4608,c.n,c.m,[e.s,[2,c.u]]),e._13(4608,x.n,x.n,[]),e._13(4608,s.c,s.c,[]),e._13(4608,s.h,s.b,[]),e._13(5120,s.j,s.k,[]),e._13(4608,s.i,s.i,[s.c,s.h,s.j]),e._13(4608,s.g,s.a,[]),e._13(5120,s.e,s.l,[s.i,s.g]),e._13(4608,o.a,o.a,[]),e._13(512,c.b,c.b,[]),e._13(512,x.k,x.k,[]),e._13(512,x.d,x.d,[]),e._13(512,s.f,s.f,[]),e._13(512,a.b,a.b,[]),e._13(512,o.r,o.r,[]),e._13(512,o.p,o.p,[]),e._13(512,o._34,o._34,[]),e._13(512,o.v,o.v,[]),e._13(512,o.y,o.y,[]),e._13(512,o.l,o.l,[]),e._13(512,o.J,o.J,[]),e._13(512,f.m,f.m,[[2,f.r],[2,f.k]]),e._13(512,t,t,[]),e._13(1024,f.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})}});