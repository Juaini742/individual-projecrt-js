import { dataMmenu } from "./data/menu-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const dataId = parseInt(urlParams.get("id"), 10);

  // console.log(dataId)

  const data = dataMmenu.find(i => i.id === dataId);

  // console.log(data)

  // const buyInfo = alert(`${data.imgMenu}`)

  if (data) {

    document.querySelector('#form').textContent = 'Purchase Form';
    document.querySelector('#title-menu').textContent = data.titleMenu;
    document.querySelector('#price-menu').textContent = data.priceMenu;
    document.querySelector('#desc-menu').textContent = data.description;

    const purchaseImg = document.querySelector('#purchase-img')
    purchaseImg.innerHTML = `<img src="${data.imgMenu}" alt="">`


    document.querySelector('#title-detail').textContent = data.titleMenu;
    document.querySelector('#price-detail').textContent = data.priceMenu;
    document.querySelector('#desc-detail').textContent = data.description;
    document.querySelector('#nut-detail').textContent = data.nutrient;
    document.querySelector('#cate-detail').textContent = `Category: ${data.category}`;

    const imgDetail = document.querySelector('#img-detail')
    imgDetail.innerHTML = `<img src="${data.imgMenu}" alt="">`
  }


  const purchaseBtn = document.querySelector('#buy-btn')
  purchaseBtn.addEventListener('click', () => {
    const popUp = document.querySelector('.purchase-popUp')

    popUp.style.display = 'flex'
  })

  const alertPurchase = document.querySelector('#purchase-btn')
  alertPurchase.addEventListener('click', () => {
    alert('Your purchase is in progress, we will notify you when it is complete. Thank You')
    window.location.href = 'index.html'
  })


  const closeBtn = document.querySelector('#close-btn')
  closeBtn.addEventListener('click', () => {
    const popdown = document.querySelector('.purchase-popUp')

    popdown.style.display = 'none'

    console.log(popdown);
  })

})


