const leftBtn = document.querySelector(".bi-chevron-left"),
  rightBtn = document.querySelector(".bi-chevron-right"),
  cards = document.querySelector(".cards");

leftBtn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});

rightBtn.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

const jsonURL = "/data/movie.json";

fetch(jsonURL)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { name, imdb, date, sposter, bposter, genre, url } = ele;
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" alt="rest-img">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
            </div>
        </div>
      `;
      cards.appendChild(card);
    });

    document.querySelector("#tittle").innerText = data[0].name;
    document.querySelector("#gen").innerText = data[0].genre;
    document.querySelector("#date").innerText = data[0].date;
    document.querySelector(
      "#rate"
    ).innerHTML = ` <span>IMDB</span><i class="bi bi-star-fill"></i> ${date[0].imdb}`;
  });
