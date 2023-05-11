//slider cards

const leftBtn = document.querySelector(".bi-chevron-left"),
  rightBtn = document.querySelector(".bi-chevron-right"),
  cards = document.querySelector(".cards"),
  search = document.querySelector(".search"),
  searchInput = document.querySelector("#search_input");

leftBtn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});

rightBtn.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

//receiving and displaying cards

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
    ).innerHTML = ` <span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}`;

    // search data Load
    data.forEach((element) => {
      let { name, imdb, date, sposter, genre, url } = element;
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
            <img src="${sposter}" alt="">
            <div class="cont">
                <h3>${name}</h3>
                <p>${genre}, ${date}, <span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
            </div>
      `;
      search.appendChild(card);
    });

    //search filter

    searchInput.addEventListener("keyup", () => {
      let filter = searchInput.value.toUpperCase();
      let a = search.getElementsByTagName("a");

      for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName("cont")[0];
        // console.log(a.textContent);
        let textValue = b.textContent || b.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          a[index].style.display = "flex";
          search.style.visibility = "visible";
          search.style.opacity = 1;
        } else {
          a[index].style.display = "none";
        }

        if (searchInput.value == 0) {
          search.style.visibility = "hidden";
          search.style.opacity = 0;
        }
      }
    });
  });
