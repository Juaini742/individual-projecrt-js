import { about } from "./data/about-data.js";
import { dataMmenu } from "./data/menu-data.js";
import { qoutesData } from "./data/qoutes-data.js";
import { userData } from "./data/user-data.js";

// username;
function getDataUser() {
  const dataUser = localStorage.getItem('user')

  console.log(dataUser);
  if (dataUser) {
    const dataId = JSON.parse(dataUser)
    document.querySelector('#userBio').textContent = dataId.username
  }
}
getDataUser()

// about
document.querySelector('#about img').src = about.imgBg;
document.querySelector('#about #title-about').textContent = about.title;
document.querySelector('#about #description').textContent = about.description;

// card menu
document.addEventListener('DOMContentLoaded', function () {
  const menuContainer = document.querySelector('#menu-cards')

  dataMmenu.forEach(data => {
    const card = document.createElement("div")
    card.classList = "card-body"
    card.innerHTML = `
    <img src="${data.imgMenu}" alt="card">
    <h6>${data.titleMenu}</h6>
    <h3>${data.priceMenu}</h3>
    <a href="purchase.html?id=${data.id}">BuyNow</a>
    `
    menuContainer.appendChild(card)
  })
})

// qoutes
document.addEventListener('DOMContentLoaded', () => {
  const qoutesElm = document.querySelector('#customer #card-item')

  qoutesData.forEach(data => {
    const cardQoutes = document.createElement('div')
    cardQoutes.classList = 'card-item'

    cardQoutes.innerHTML = `
    <img src="${data.img}" alt="">
    <h4>${data.name}</h4>
    <h6>${data.email}</h6>
    <p>${data.qoutes}</p>
    `
    console.log(cardQoutes)
    qoutesElm.appendChild(cardQoutes)
  })
})



