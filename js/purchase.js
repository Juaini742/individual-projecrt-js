import { dataMmenu } from "./data/menu-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const dataId = parseInt(urlParams.get("id"), 10);

  console.log(dataId)

  const data = dataMmenu.find(i => i.id === dataId);

  console.log(data)

  // const buyInfo = alert(`${data.imgMenu}`)

  if (data) {
    const purchaseInfo = document.querySelector('#purchase-info')
    purchaseInfo.innerHTML = `
    <h2>Purchase Form</h2>
    <h6>${data.titleMenu}</h6>
    <h3>${data.priceMenu}</h3>
    <p>${data.description}</p>
    <a href="" class="buy-btn">Buy Now</a>
    <a href="index.html" class="back-btn">Back To Home</a>
    `

    const purchaseImg = document.querySelector('#purchase-img')
    purchaseImg.innerHTML = `<img src="${data.imgMenu}" alt="">`
  }
})