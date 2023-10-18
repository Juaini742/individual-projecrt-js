import { dataMmenu } from "./data/menu-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const dataId = parseInt(urlParams.get("id"), 10);
  const data = dataMmenu.find(i => i.id === dataId);

  if (data) {

    document.querySelector('#form').textContent = 'Purchase Form';
    const titleElm = document.querySelectorAll('#title-menu')
    const priceElm = document.querySelectorAll('#price-menu')
    const descElm = document.querySelectorAll('#desc-menu')
    const purchaseImg = document.querySelectorAll('#purchase-img')

    titleElm.forEach(element => {
      element.textContent = data.titleMenu;
    });
    priceElm.forEach(element => {
      element.textContent = data.priceMenu;
    });
    descElm.forEach(element => {
      element.textContent = data.description;
    });
    purchaseImg.forEach(element => {
      element.innerHTML = `<img src="${data.imgMenu}" alt="">`
    });

    const nutElm = document.querySelector('#nut-detail')
    const dataNut = data.nutrient
    console.log(dataNut);

    dataNut.forEach(el => {

      const liMenu = document.createElement('li')
      liMenu.textContent = el

      nutElm.appendChild(liMenu)
    });

    document.querySelector('#cate-detail').textContent = `Category: ${data.category}`;
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


