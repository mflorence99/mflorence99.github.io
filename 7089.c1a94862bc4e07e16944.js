"use strict";(self.webpackChunkwashington_app=self.webpackChunkwashington_app||[]).push([[7089],{7089:(h,c,a)=>{a.r(c),a.d(c,{startFocusVisible:()=>E});const i="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],E=()=>{let r=[],e=!0;const s=document,n=t=>{r.forEach(o=>o.classList.remove(i)),t.forEach(o=>o.classList.add(i)),r=t},d=()=>{e=!1,n([])};s.addEventListener("keydown",t=>{e=l.includes(t.key),e||n([])}),s.addEventListener("focusin",t=>{if(e&&t.composedPath){const o=t.composedPath().filter(u=>!!u.classList&&u.classList.contains("ion-focusable"));n(o)}}),s.addEventListener("focusout",()=>{s.activeElement===s.body&&n([])}),s.addEventListener("touchstart",d),s.addEventListener("mousedown",d)}}}]);