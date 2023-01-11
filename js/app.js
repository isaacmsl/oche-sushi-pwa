const listContainer = document.querySelector("main > ul");

const sushis = [
  { name: "Hot", image: "images/hot.jpg" },
  { name: "Niguiri", image: "images/niguiri.jpg" },
  { name: "Skin", image: "images/skin.jpg" },
  { name: "Uramaki", image: "images/uramaki.webp" }
];

const showSushis = () => {
  let output = "";
  sushis.forEach(
    ({ name, image }) => {
      output += `
        <li class="card">
          <img class="card--avatar" src=${image} />
          <h2 class="card--title">${name}</h1>
          <a class="card--link" href="#">Taste</a>
        </li>
      `;
    }
  );

  listContainer.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showSushis);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(() => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}