/* empty css                      */import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();console.log("merhaba");const d="48479056-b624f953eac1ddf8407abd187",f="https://pixabay.com/api/",p=document.querySelector(".search-input"),m=document.querySelector(".search-btn"),i=document.querySelector(".images-container"),c=document.querySelector(".loader");m.addEventListener("click",()=>{const o=p.value.trim();o?h(o):alert("Lütfen bir klime girin")});function h(o){const n=`${f}?key=${d}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;c.style.visibility="visible",i.innerHTML="",setTimeout(()=>{fetch(n).then(e=>{if(!e.ok)throw new Error("API isteği başarısız oldu");return e.json()}).then(e=>{e.hits.length>0?g(e.hits):i.innerHTML=l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(e=>{console.log("Hata : ",e),i.innerHTML="<p>Bir hata oluştu lütfen tekrar deneyin </p>"}).finally(()=>{c.style.visibility="hidden"})},500)}function g(o){i.innerHTML=o.map(e=>`
        <div class="image-card">
       <a href="${e.largeImageURL}"> <img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}"></a>
         <div class="info">
             <p><strong>Likes:</strong><br> ${e.likes}</br></p>
                    <p><strong>Views:</strong> <br>${e.views}</br></p>
                    <p><strong>Comments:</strong> <br>${e.comments}</br></p>
                    <p><strong>Downloads:</strong><br> ${e.downloads}</br></p>
                </div>
            </div>

        `).join(""),new u(".image-card a",{captionsData:"alt",captionDelay:250,nav:!0}).refresh()}
//# sourceMappingURL=index.js.map
