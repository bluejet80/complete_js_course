"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

function renderCountry(data, className = "") {
  const money = Object.keys(data.currencies)[0];
  const lang = Object.keys(data.languages)[0];
  const curName = `data.currencies.${money}.name`;
  const langName = `data.languages.${lang}`;

  console.log();

  const html = `
<article class="country ${className}">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    2
  )}M People</p>
  <p class="country__row"><span>🗣️</span>${eval(langName)}</p>
  <p class="country__row"><span>💰</span>${eval(curName)}</p>
</div>
</article>
`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country 1
    renderCountry(data);

    // get neighbor country
    const neighbor = data.borders;

    if (!neighbor) return;

    // AJAX call country 2
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor[1]}`);
    request.send();

    request.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2[0]);
      renderCountry(data2[0], "neighbour");
    });
  });
};

getCountryAndNeighbor("germany");
