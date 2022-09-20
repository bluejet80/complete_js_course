"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data, className = "") {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(2)}M People</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const getJSON = function (url, errorMsg = "Somehting went Wrong!!") {
  return fetch(url).then((response) => {
    // Create our own error
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}.`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  countriesContainer.innerHTML = "";
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders;
      if (!neighbour) {
        throw new Error("No Neighbour found!");
      }

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour[0]}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`Problem: ${err}`);
      renderError(`Something Went Wrong!! ${err.message} Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("australia");
});
