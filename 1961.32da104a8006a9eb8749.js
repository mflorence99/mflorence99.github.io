(self.webpackChunkwashington_app=self.webpackChunkwashington_app||[]).push([[1961],{8943:t=>{"use strict";t.exports=function(t){var e=t.length;return t.reduce(function(t,n,i){return t.x+=n.x,t.y+=n.y,i===e-1&&(t.x/=e,t.y/=e),t},{x:0,y:0})}},3305:(t,e,n)=>{"use strict";var i=n(2464),r=n(7642),s=n(5583),a=n(976);function o(t,e){for(var n=new Array(t.length-1),i=1;i<t.length;++i)for(var r=n[i-1]=new Array(t.length-1),s=0,a=0;s<t.length;++s)s!==e&&(r[a++]=t[i][s]);return n}function l(t){if(1===t.length)return t[0];if(2===t.length)return["sum(",t[0],",",t[1],")"].join("");var e=t.length>>1;return["sum(",l(t.slice(0,e)),",",l(t.slice(e)),")"].join("")}function c(t){if(2===t.length)return[["sum(prod(",t[0][0],",",t[1][1],"),prod(-",t[0][1],",",t[1][0],"))"].join("")];for(var e=[],n=0;n<t.length;++n)e.push(["scale(",l(c(o(t,n))),",",(i=n,1&i?"-":""),t[0][n],")"].join(""));return e;var i}function u(t){for(var e=[],n=[],u=function(t){for(var e=new Array(t),n=0;n<t;++n){e[n]=new Array(t);for(var i=0;i<t;++i)e[n][i]=["m",i,"[",t-n-1,"]"].join("")}return e}(t),h=[],p=0;p<t;++p)0==(1&p)?e.push.apply(e,c(o(u,p))):n.push.apply(n,c(o(u,p))),h.push("m"+p);var g=l(e),f=l(n),d="orientation"+t+"Exact",m=["function ",d,"(",h.join(),"){var p=",g,",n=",f,",d=sub(p,n);return d[d.length-1];};return ",d].join("");return new Function("sum","prod","scale","sub",m)(r,i,s,a)}var h=u(3),p=u(4),g=[function(){return 0},function(){return 0},function(t,e){return e[0]-t[0]},function(t,e,n){var i,r=(t[1]-n[1])*(e[0]-n[0]),s=(t[0]-n[0])*(e[1]-n[1]),a=r-s;if(r>0){if(s<=0)return a;i=r+s}else{if(!(r<0))return a;if(s>=0)return a;i=-(r+s)}var o=33306690738754716e-32*i;return a>=o||a<=-o?a:h(t,e,n)},function(t,e,n,i){var r=t[0]-i[0],s=e[0]-i[0],a=n[0]-i[0],o=t[1]-i[1],l=e[1]-i[1],c=n[1]-i[1],u=t[2]-i[2],h=e[2]-i[2],g=n[2]-i[2],f=s*c,d=a*l,m=a*o,v=r*c,Z=r*l,y=s*o,A=u*(f-d)+h*(m-v)+g*(Z-y),w=7771561172376103e-31*((Math.abs(f)+Math.abs(d))*Math.abs(u)+(Math.abs(m)+Math.abs(v))*Math.abs(h)+(Math.abs(Z)+Math.abs(y))*Math.abs(g));return A>w||-A>w?A:p(t,e,n,i)}];function f(t){var e=g[t.length];return e||(e=g[t.length]=u(t.length)),e.apply(void 0,t)}!function(){for(;g.length<=5;)g.push(u(g.length));for(var e=[],n=["slow"],i=0;i<=5;++i)e.push("a"+i),n.push("o"+i);var r=["function getOrientation(",e.join(),"){switch(arguments.length){case 0:case 1:return 0;"];for(i=2;i<=5;++i)r.push("case ",i,":return o",i,"(",e.slice(0,i).join(),");");r.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"),n.push(r.join(""));var s=Function.apply(void 0,n);for(t.exports=s.apply(void 0,[f].concat(g)),i=0;i<=5;++i)t.exports[i]=g[i]}()},6397:(t,e,n)=>{t.exports=function(t,e){for(var n=e[0],r=e[1],s=t.length,a=1,o=s,l=0,c=s-1;l<o;c=l++){var u=t[l],h=t[c],p=u[1],g=h[1];if(g<p){if(g<r&&r<p){if(0===(f=i(u,h,e)))return 0;a^=0<f|0}else if(r===p&&p<t[(l+1)%s][1]){if(0===(f=i(u,h,e)))return 0;a^=0<f|0}}else if(p<g){if(p<r&&r<g){if(0===(f=i(u,h,e)))return 0;a^=f<0|0}else if(r===p&&t[(l+1)%s][1]<p){var f;if(0===(f=i(u,h,e)))return 0;a^=f<0|0}}else if(r===p){var d=Math.min(u[0],h[0]),m=Math.max(u[0],h[0]);if(0===l){for(;c>0;){var v=(c+s-1)%s;if((A=t[v])[1]!==r)break;var Z=A[0];d=Math.min(d,Z),m=Math.max(m,Z),c=v}if(0===c)return d<=n&&n<=m?0:1;o=c+1}for(var y=t[(c+s-1)%s][1];l+1<o;){var A;if((A=t[l+1])[1]!==r)break;Z=A[0],d=Math.min(d,Z),m=Math.max(m,Z),l+=1}if(d<=n&&n<=m)return 0;n<d&&y<r!=t[(l+1)%s][1]<r&&(a^=1)}}return 2*a-1};var i=n(3305)},5583:(t,e,n)=>{"use strict";var i=n(2464),r=n(8300);t.exports=function(t,e){var n=t.length;if(1===n){var s=i(t[0],e);return s[0]?s:[s[1]]}var a=new Array(2*n),o=[.1,.1],l=[.1,.1],c=0;i(t[0],e,o),o[0]&&(a[c++]=o[0]);for(var u=1;u<n;++u){i(t[u],e,l),r(o[1],l[0],o),o[0]&&(a[c++]=o[0]);var h=l[1],p=o[1],g=h+p,f=p-(g-h);o[1]=g,f&&(a[c++]=f)}return o[1]&&(a[c++]=o[1]),0===c&&(a[c++]=0),a.length=c,a}},976:t=>{"use strict";t.exports=function(t,e){var n=0|t.length,i=0|e.length;if(1===n&&1===i)return function(t,e){var n=t+e,i=n-t,r=t-(n-i)+(e-i);return r?[r,n]:[n]}(t[0],-e[0]);var r,s,a=new Array(n+i),o=0,l=0,c=0,u=Math.abs,h=t[l],p=u(h),g=-e[c],f=u(g);p<f?(s=h,(l+=1)<n&&(p=u(h=t[l]))):(s=g,(c+=1)<i&&(f=u(g=-e[c]))),l<n&&p<f||c>=i?(r=h,(l+=1)<n&&(p=u(h=t[l]))):(r=g,(c+=1)<i&&(f=u(g=-e[c])));for(var d,m,v=r+s,Z=v-r,y=s-Z,A=y,w=v;l<n&&c<i;)p<f?(r=h,(l+=1)<n&&(p=u(h=t[l]))):(r=g,(c+=1)<i&&(f=u(g=-e[c]))),(y=(s=A)-(Z=(v=r+s)-r))&&(a[o++]=y),A=w-((d=w+v)-(m=d-w))+(v-m),w=d;for(;l<n;)(y=(s=A)-(Z=(v=(r=h)+s)-r))&&(a[o++]=y),A=w-((d=w+v)-(m=d-w))+(v-m),w=d,(l+=1)<n&&(h=t[l]);for(;c<i;)(y=(s=A)-(Z=(v=(r=g)+s)-r))&&(a[o++]=y),A=w-((d=w+v)-(m=d-w))+(v-m),w=d,(c+=1)<i&&(g=-e[c]);return A&&(a[o++]=A),w&&(a[o++]=w),o||(a[o++]=0),a.length=o,a}},7642:t=>{"use strict";t.exports=function(t,e){var n=0|t.length,i=0|e.length;if(1===n&&1===i)return function(t,e){var n=t+e,i=n-t,r=t-(n-i)+(e-i);return r?[r,n]:[n]}(t[0],e[0]);var r,s,a=new Array(n+i),o=0,l=0,c=0,u=Math.abs,h=t[l],p=u(h),g=e[c],f=u(g);p<f?(s=h,(l+=1)<n&&(p=u(h=t[l]))):(s=g,(c+=1)<i&&(f=u(g=e[c]))),l<n&&p<f||c>=i?(r=h,(l+=1)<n&&(p=u(h=t[l]))):(r=g,(c+=1)<i&&(f=u(g=e[c])));for(var d,m,v=r+s,Z=v-r,y=s-Z,A=y,w=v;l<n&&c<i;)p<f?(r=h,(l+=1)<n&&(p=u(h=t[l]))):(r=g,(c+=1)<i&&(f=u(g=e[c]))),(y=(s=A)-(Z=(v=r+s)-r))&&(a[o++]=y),A=w-((d=w+v)-(m=d-w))+(v-m),w=d;for(;l<n;)(y=(s=A)-(Z=(v=(r=h)+s)-r))&&(a[o++]=y),A=w-((d=w+v)-(m=d-w))+(v-m),w=d,(l+=1)<n&&(h=t[l]);for(;c<i;)(y=(s=A)-(Z=(v=(r=g)+s)-r))&&(a[o++]=y),A=w-((d=w+v)-(m=d-w))+(v-m),w=d,(c+=1)<i&&(g=e[c]);return A&&(a[o++]=A),w&&(a[o++]=w),o||(a[o++]=0),a.length=o,a}},2464:t=>{"use strict";t.exports=function(t,n,i){var r=t*n,s=e*t,a=s-(s-t),o=t-a,l=e*n,c=l-(l-n),u=n-c,h=o*u-(r-a*c-o*c-a*u);return i?(i[0]=h,i[1]=r,i):[h,r]};var e=+(Math.pow(2,27)+1)},8300:t=>{"use strict";t.exports=function(t,e,n){var i=t+e,r=i-t,s=e-r,a=t-(i-r);return n?(n[0]=a+s,n[1]=i,n):[a+s,i]}},1961:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomeModule:()=>G});var i=n(1332),r=n(1776),s=n(6889),a=n(2272);let o=(()=>{class t extends r.y{constructor(){super(t=>this.life$.subscribe(t)),this.life$=new s.x}ngOnDestroy(){this.life$.next(),this.life$.complete()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),t})();var l=n(5894),c=n(5207),u=n(1964),h=n(8449),p=n(9922),g=n(1841);let f=(()=>{class t{constructor(t){this.ready$=t.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyCAYavpwIUZOayj72XA3AZYJeYjlVscqvk","callback").pipe((0,p.b)(()=>console.error("Singleton Google Maps API script loaded")),(0,h.d)(),(0,c.U)(()=>!0),(0,l.K)(()=>(0,u.of)(!1)))}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(g.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n(7724),m=n(8238),v=n(8583),Z=n(9010);function y(t,e){if(1&t&&a._UZ(0,"google-map",9),2&t){const t=a.oxw();a.Q6J("options",t.mapOptions)}}let A=(()=>{class t{constructor(t,e){this.api=t,this.mc=e,this.cssClass="square",this.mapOptions={}}dismiss(){this.mc.dismiss()}googleLink(){return`https://www.google.com/maps/@?api=1&map_action=map&center=${this.lot.centers[0].lat}%2c${this.lot.centers[0].lon}&basemap=satellite&zoom=16`}ngOnInit(){this.mapOptions={center:{lat:this.lot.centers[0].lat,lng:this.lot.centers[0].lon},disableDefaultUI:!1,fullscreenControl:!1,keyboardShortcuts:!1,mapTypeControl:!1,mapTypeId:"hybrid",zoom:15}}resize(t){t.newWidth===t.newHeight?this.cssClass="square":t.newWidth>t.newHeight?this.cssClass="landscape":t.newWidth<t.newHeight&&(this.cssClass="portrait")}useDescription(){return i.y[this.lot.usage]}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(f),a.Y36(d.IN))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-details"]],hostVars:2,hostBindings:function(t,e){2&t&&a.Tol(e.cssClass)},inputs:{lot:"lot"},decls:57,vars:34,consts:[[3,"resized"],[1,"header"],[1,"map"],["height","100%","width","100%",3,"options",4,"ngIf"],[1,"table"],[1,"filler"],[1,"footer"],["target","_blank",3,"href"],["color","primary",3,"strong","click"],["height","100%","width","100%",3,"options"]],template:function(t,e){1&t&&(a.TgZ(0,"section",0),a.NdJ("resized",function(t){return e.resize(t)}),a.TgZ(1,"header",1),a.TgZ(2,"h1"),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"article",2),a.YNc(5,y,1,1,"google-map",3),a.ALo(6,"async"),a.qZA(),a.TgZ(7,"article",4),a.TgZ(8,"table"),a.TgZ(9,"tbody"),a.TgZ(10,"tr"),a.TgZ(11,"td"),a._uU(12,"Area"),a.qZA(),a.TgZ(13,"td"),a._uU(14),a.ALo(15,"number"),a.qZA(),a.qZA(),a.TgZ(16,"tr"),a.TgZ(17,"td"),a._uU(18,"Land Use"),a.qZA(),a.TgZ(19,"td"),a._uU(20),a.qZA(),a.qZA(),a.TgZ(21,"tr"),a.TgZ(22,"td"),a._uU(23,"CAMA Year"),a.qZA(),a.TgZ(24,"td"),a._uU(25),a.qZA(),a.qZA(),a.TgZ(26,"tr"),a.TgZ(27,"td"),a._uU(28,"Land Value"),a.qZA(),a.TgZ(29,"td"),a._uU(30),a.ALo(31,"currency"),a.qZA(),a.qZA(),a.TgZ(32,"tr"),a.TgZ(33,"td"),a._uU(34,"Improv Value"),a.qZA(),a.TgZ(35,"td"),a._uU(36),a.ALo(37,"currency"),a.qZA(),a.qZA(),a.TgZ(38,"tr"),a.TgZ(39,"td"),a._uU(40,"Parcel Value"),a.qZA(),a.TgZ(41,"td"),a._uU(42),a.ALo(43,"currency"),a.qZA(),a.qZA(),a.TgZ(44,"tr"),a.TgZ(45,"td"),a._uU(46,"Last Update"),a.qZA(),a.TgZ(47,"td"),a._uU(48),a.ALo(49,"date"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(50,"div",5),a._uU(51,"\xa0"),a.qZA(),a.TgZ(52,"footer",6),a.TgZ(53,"a",7),a._uU(54,"View on Google Maps"),a.qZA(),a.TgZ(55,"ion-button",8),a.NdJ("click",function(){return e.dismiss()}),a._uU(56,"Done"),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(3),a.AsE("",e.lot.id," \u2022 ",e.lot.address,""),a.xp6(2),a.Q6J("ngIf",a.lcZ(6,12,e.api.ready$)),a.xp6(9),a.hij("",a.xi3(15,14,e.lot.area,"1.0-1")," acres"),a.xp6(6),a.Oqu(e.useDescription()),a.xp6(5),a.Oqu(e.lot.yearOfCAMA),a.xp6(5),a.Oqu(a.gM2(31,17,e.lot.valueOfLand,"USD","symbol","1.0-0")),a.xp6(6),a.hij(" ",a.gM2(37,22,e.lot.valueOfImprovement,"USD","symbol","1.0-0")," "),a.xp6(6),a.hij(" ",a.gM2(43,27,e.lot.valueOfParcel,"USD","symbol","1.0-0")," "),a.xp6(6),a.Oqu(a.lcZ(49,32,e.lot.updatedAt)),a.xp6(5),a.Q6J("href",e.googleLink(),a.LSH),a.xp6(2),a.Q6J("strong",!0))},directives:[m.a5,v.O5,d.YG,Z.b6],pipes:[v.Ov,v.JJ,v.H9,v.uU],encapsulation:2}),t})();var w=n(7395),x=n(4464),T=n(9483),q=n(4689),b=n(5755),M=n(8943),U=n.n(M),_=n(6397),k=n.n(_),O=n(8168),C=n(1849),L=n(5629),S=n(850);const J=["map"],$=["menu"],V=["searchbar"];function Y(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"ion-list"),a.TgZ(1,"ion-item",21),a.NdJ("click",function(){const e=a.CHM(t).$implicit;return a.oxw().switchTo(e)}),a._UZ(2,"ion-icon",22),a.TgZ(3,"ion-label"),a._uU(4),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit;a.xp6(4),a.Oqu(t.title)}}function j(t,e){if(1&t&&(a.TgZ(0,"li"),a.TgZ(1,"div",23),a._uU(2," \xa0 "),a.qZA(),a._uU(3," \xa0 "),a.TgZ(4,"div",24),a._uU(5),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.Jzz("background-color: var(--shade-u",t[0],")"),a.xp6(4),a.Oqu(t[1])}}const E=function(t){return{animating:t}},I=function(t){return{animating:t,lots:!0}},z=function(t){return{loading:t}};let F=(()=>{class t{constructor(t,e,n,i,r,s){this.actions$=t,this.destroy$=e,this.mc=n,this.model=i,this.selection=r,this.view=s,this.animating=!0,this.loading=!0,this.maps=w.F,this.scales=[.25,.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3]}maxTranslate(){var t;const e=null===(t=this.map)||void 0===t?void 0:t.nativeElement;return e?[e.parentElement.offsetWidth-e.offsetWidth,e.parentElement.offsetHeight-e.offsetHeight]:[0,0]}minTranslate(){return[0,0]}maxScale(){return this.scales[this.scales.length-1]}minScale(){var t;const e=null===(t=this.map)||void 0===t?void 0:t.nativeElement;return e?Math.round(10*Math.max(e.parentElement.offsetWidth/e.offsetWidth,e.parentElement.offsetHeight/e.offsetHeight,this.scales[0]))/10:this.scales[0]}ngOnInit(){this.handleActions$(),this.createStylesheet()}ready(){console.error(`Ready for ${this.model.map.id}`),this.loading=!1,setTimeout(()=>{this.initializeView(),this.searchFor(this.selection.text)},500)}scaleDown(){const t=this.scales.findIndex(t=>t===this.view.view.scale);t>0&&this.view.scale(this.scales[t-1])}scaleUp(){const t=this.scales.findIndex(t=>t===this.view.view.scale);t<this.scales.length-1&&-1!==t&&this.view.scale(this.scales[t+1])}searchFor(t){this.loading||(console.error(`Searching for ${t}`),this.selection.searchFor(t))}selectLot(t){const e=this.centerOfViewport(),n=this.originOfViewport(),i=this.view.view.translate,r=this.view.view.scale;if(e&&n){const s={x:-i[0],y:-i[1]},a=e.x-t.x;t.x+=a-a/r-n.x/r+s.x;const o=e.y-t.y;t.y+=o-o/r-n.y/r+s.y;const l=this.whichPolygon(t);if(null==l?void 0:l.id){const t=x.L[l.id];t&&(this.unhighlightLots(),this.highlightLots(t,"var(--ion-color-danger)"),console.log(null==l?void 0:l.id),this.mc.create({component:A,componentProps:{lot:t[0]},cssClass:"lot-details"}).then(t=>t.present()))}}}switchTo(t){t.id!==this.model.map.id&&(this.loading=!0,this.xlate=null,this.model.switchTo(t)),this.menu.close(!0)}trackByMap(t,e){return e.id}trackByUsage(t,e){return e[0]}translate(t,e){if(this.xlate){const n=this.maxTranslate(),i=this.minTranslate(),r=[t+this.xlate[0],e+this.xlate[1]];this.view.translate([Math.max(n[0],Math.min(i[0],r[0])),Math.max(n[1],Math.min(i[1],r[1]))])}}translateBegin(){this.animating=!1,this.xlate=this.view.view.translate}translateEnd(){this.animating=!0,this.xlate=this.view.view.translate}usages(){return Object.entries(i.y)}centerLotsInViewport(t){const e=this.centerOfLots(t),n=this.centerOfViewport();if(e&&n){const t=this.maxTranslate(),i=this.minTranslate(),r=[-(Number(e.x)-n.x),-(Number(e.y)-n.y)];this.view.translate([Math.max(t[0],Math.min(i[0],r[0])),Math.max(t[1],Math.min(i[1],r[1]))]),setTimeout(()=>this.xlate=this.view.view.translate,100)}else console.error(`Can't select lots ${t[0].id}`)}centerOfLots(t){const e=t.reduce((t,e)=>{const n=document.getElementById(e.id);if(n){const e=n.getAttribute("points").split(" ").map(t=>{const[e,n]=t.split(",");return{x:Number(e),y:Number(n)}});t.push(U()(e))}else console.error(`Can't find polygon for ${e.id}`);return t},[]);return 0===e.length?null:1===e.length?e[0]:U()(e)}centerOfViewport(){var t;const e=null===(t=this.map)||void 0===t?void 0:t.nativeElement;return e?{x:e.parentElement.offsetWidth/2,y:e.parentElement.offsetHeight/2}:null}createStylesheet(){const t=document.createElement("style");document.head.appendChild(t),this.stylesheet=t.sheet}handleActions$(){this.actions$.pipe((0,b.R)(this.destroy$),(0,q.h)(({status:t})=>!this.loading&&"SUCCESSFUL"===t)).subscribe(({action:t})=>{if(t["ModelState.switchedTo"]||t["ViewState.initialized"]||t["ViewState.scaled"]||t["ViewState.translated"])this.setProperties();else if(t["SelectionState.found"]){const e=t["SelectionState.found"];this.unhighlightLots(),e.length>0&&(this.highlightLots(e,"var(--ion-color-danger)"),this.centerLotsInViewport(e))}})}highlightLots(t,e){t.forEach(t=>{this.stylesheet.insertRule(`svg-icon.lots svg g polygon[id='${t.id}'] {\n        stroke: ${e};\n      }`)})}initializeView(){const t=this.model.map.focus,e=this.centerOfViewport(),n=this.maxTranslate(),i=this.minTranslate(),r=T.f.defaultView(),s=[-(t.x-e.x),-(t.y-e.y)];this.view.initialize({scale:r.scale,translate:[Math.max(n[0],Math.min(i[0],s[0])),Math.max(n[1],Math.min(i[1],s[1]))]})}originOfViewport(){var t;const e=null===(t=this.map)||void 0===t?void 0:t.nativeElement;return e?{x:e.parentElement.offsetLeft,y:e.parentElement.offsetTop}:null}setProperties(){const t=document.body.style,e=this.view.view;t.setProperty("--app-scale",`${e.scale}`),t.setProperty("--app-translate-x",`${e.translate[0]}`),t.setProperty("--app-translate-y",`${e.translate[1]}`)}unhighlightLots(){for(;this.stylesheet.cssRules.length>0;)this.stylesheet.deleteRule(0)}whichPolygon(t){return Array.from(document.querySelectorAll("svg-icon.lots g polygon")).find(e=>{const n=e.getAttribute("points").split(" ").map(t=>t.split(","));return k()(n,[t.x,t.y])<=0})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(O.eX),a.Y36(o),a.Y36(d.IN),a.Y36(C.g),a.Y36(L.f),a.Y36(T.f))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(t,e){if(1&t&&(a.Gf(J,5),a.Gf($,5),a.Gf(V,5)),2&t){let t;a.iGM(t=a.CRH())&&(e.map=t.first),a.iGM(t=a.CRH())&&(e.menu=t.first),a.iGM(t=a.CRH())&&(e.searchbar=t.first)}},features:[a._Bn([o])],decls:31,vars:22,consts:[["content-id","theContent","side","start"],["menu",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"legend"],[4,"ngFor","ngForTrackByUsage","ngForOf"],["id","theContent",1,"ion-page"],["slot","start"],["color","dark"],["slot","end"],["color","dark","shape","round",3,"disabled","click"],["name","add-circle"],["name","remove-circle"],[1,"main",3,"fullscreen","scrollX","scrollY"],[1,"content",3,"tap"],[1,"map",3,"ngClass","src","load","pan","panend","panstart"],["map",""],[3,"ngClass","src"],["enterkeyhint","Search","inputmode","search","placeholder","Lot # or address",1,"searchbar",3,"debounce","value","ionChange"],["searchbar",""],[1,"backdrop",3,"ngClass"],["name","timer"],["button","",3,"click"],["name","map","slot","start"],[1,"code"],[1,"desc"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-menu",0,1),a.TgZ(2,"ion-header"),a.TgZ(3,"ion-toolbar"),a.TgZ(4,"ion-title"),a._uU(5,"Maps"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content"),a.YNc(7,Y,5,1,"ion-list",2),a.TgZ(8,"ul",3),a.YNc(9,j,6,4,"li",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"main",5),a.TgZ(11,"ion-header"),a.TgZ(12,"ion-toolbar"),a.TgZ(13,"ion-buttons",6),a._UZ(14,"ion-menu-button",7),a.qZA(),a.TgZ(15,"ion-title"),a._uU(16),a.qZA(),a.TgZ(17,"ion-buttons",8),a.TgZ(18,"ion-button",9),a.NdJ("click",function(){return e.scaleUp()}),a._UZ(19,"ion-icon",10),a.qZA(),a.TgZ(20,"ion-button",9),a.NdJ("click",function(){return e.scaleDown()}),a._UZ(21,"ion-icon",11),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(22,"ion-content",12),a.TgZ(23,"section",13),a.NdJ("tap",function(t){return e.selectLot(t.center)}),a.TgZ(24,"img",14,15),a.NdJ("load",function(){return e.ready()})("pan",function(t){return e.translate(t.deltaX,t.deltaY)})("panend",function(){return e.translateEnd()})("panstart",function(){return e.translateBegin()}),a.qZA(),a._UZ(26,"svg-icon",16),a.qZA(),a.TgZ(27,"ion-searchbar",17,18),a.NdJ("ionChange",function(t){return e.searchFor(t.detail.value)}),a.qZA(),a.qZA(),a.TgZ(29,"article",19),a._UZ(30,"ion-icon",20),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Q6J("ngForOf",e.maps)("ngForTrackBy",e.trackByMap),a.xp6(2),a.Q6J("ngForOf",e.usages()),a.xp6(7),a.Oqu(e.model.map.title),a.xp6(2),a.Q6J("disabled",e.view.view.scale>=e.maxScale()),a.xp6(2),a.Q6J("disabled",e.view.view.scale<=e.minScale()),a.xp6(2),a.Q6J("fullscreen",!0)("scrollX",!1)("scrollY",!1),a.xp6(2),a.Q6J("ngClass",a.VKq(16,E,e.animating))("src",e.model.map.src,a.LSH),a.xp6(2),a.Q6J("ngClass",a.VKq(18,I,e.animating))("src",e.model.map.lots),a.xp6(1),a.Q6J("debounce",500)("value",e.selection.text),a.xp6(2),a.Q6J("ngClass",a.VKq(20,z,e.loading)))},directives:[d.z0,d.Gu,d.sr,d.wd,d.W2,v.sg,d.Sm,d.fG,d.YG,d.gu,v.mk,S.bk,d.VI,d.j9,d.q_,d.Ie,d.Q$],encapsulation:2}),t})();var N=n(5785);const H=[{path:"",component:F}];let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[N.Bz.forChild(H)],N.Bz]}),t})();var Q=n(3679);let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[m.a9,S._J,v.ez,Q.u5,Z.Y4,d.Pc,B]]}),t})()}}]);