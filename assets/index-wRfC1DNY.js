(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy",colors:["#c92929","#2f5a8b","#327a5f"],temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern",colors:["#3A5199","#2F2E33","#D5D6D2"],temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds",colors:["#A10115","#C0B2B5","#600A0A"],temperature:"warm"}];console.log(s);document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("app"),r=document.createElement("ul");s.forEach(o=>{const n=document.createElement("li");n.innerHTML=`<strong>${o.title}</strong><div class="color-swatch-container">${o.colors.map(e=>`<div class="color-swatch" style="background-color: ${e};"></div>`).join("")}</div>(Temperature: ${o.temperature})`,r.appendChild(n)}),i.appendChild(r)});
