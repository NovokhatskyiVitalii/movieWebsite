(()=>{var e={765:()=>{const e=document.querySelector(".bi-chevron-left"),t=document.querySelector(".bi-chevron-right"),r=document.querySelector(".cards"),n=document.querySelector(".search");e.addEventListener("click",(()=>{r.scrollLeft-=140})),t.addEventListener("click",(()=>{r.scrollLeft+=140})),fetch("/data/movie.json").then((e=>e.json())).then((e=>{e.forEach(((e,t)=>{let{name:n,imdb:s,date:a,sposter:c,bposter:i,genre:o,url:d}=e,l=document.createElement("a");l.classList.add("card"),l.href=d,l.innerHTML=`\n        <img src="${c}" alt="${n}" class="poster">\n        <div class="rest_card">\n            <img src="${i}" alt="rest-img">\n            <div class="cont">\n                <h4>${n}</h4>\n                <div class="sub">\n                    <p>${o}, ${a}</p>\n                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${s}</h3>\n                </div>\n            </div>\n        </div>\n      `,r.appendChild(l)})),document.querySelector("#tittle").innerText=e[0].name,document.querySelector("#gen").innerText=e[0].genre,document.querySelector("#date").innerText=e[0].date,document.querySelector("#rate").innerHTML=` <span>IMDB</span><i class="bi bi-star-fill"></i> ${e[0].imdb}`,e.forEach((e=>{let{name:t,imdb:r,date:s,sposter:a,genre:c,url:i}=e,o=document.createElement("a");o.classList.add("card"),o.href=i,o.innerHTML=`\n            <img src="${a}" alt="">\n            <div class="cont">\n                <h3>${t}</h3>\n                <p>${c}, ${s}, <span>IMDB</span><i class="bi bi-star-fill"></i>${r}</p>\n            </div>\n      `,n.appendChild(o)}))}))}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(765)})()})();