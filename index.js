import{a as d,S as m,i as c}from"./assets/vendor-sn3b1bqD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="52456910-518eb224c41e0afc98afec318";async function y(i){const s={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};try{return(await d.get(g,{params:s})).data}catch(r){throw r}}const l=document.querySelector(".gallery"),n=document.getElementById("loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!0});function L(i){const s=i.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:a,comments:p,downloads:f})=>`
      <li class="gallery-item">
        <a href="${o}">
          <div class="photo-card">
            <img src="${r}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b><span>${t}</span></p>
              <p class="info-item"><b>Views</b><span>${a}</span></p>
              <p class="info-item"><b>Comments</b><span>${p}</span></p>
              <p class="info-item"><b>Downloads</b><span>${f}</span></p>
            </div>
          </div>
        </a>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",s),b.refresh()}function w(){l.innerHTML=""}function S(){n&&(n.classList.remove("is-hidden"),n.setAttribute("aria-hidden","false"))}function v(){n&&(n.classList.add("is-hidden"),n.setAttribute("aria-hidden","true"))}const u=document.getElementById("search-form");u.addEventListener("submit",$);function $(i){i.preventDefault();const r=new FormData(u).get("search-text").trim();if(!r){c.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}w(),S(),y(r).then(o=>{const e=o.hits;if(!Array.isArray(e)||e.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e),c.success({title:"Success",message:`Found ${o.totalHits} images. Showing ${e.length}.`,position:"topRight"})}).catch(o=>{console.error("Fetch error:",o),c.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight"})}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
