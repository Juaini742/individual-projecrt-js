import { dataMmenu } from "./data/menu-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const dataId = parseInt(urlParams.get("id"));
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

    dataNut.forEach(elm => {

      const liMenu = document.createElement('li')
      liMenu.textContent = elm

      nutElm.appendChild(liMenu)
    });
    document.querySelector('#cate-detail').textContent = `Category: ${data.category}`;
  }


  const purchaseBtn = document.querySelector('#buy-btn')
  const alertPurchase = document.querySelector('#purchase-btn')
  const popUp = document.querySelector('.purchase-popUp')
  const closeBtn = document.querySelector('#close-btn')

  purchaseBtn.addEventListener('click', () => {
    popUp.style.display = 'flex'
  })

  closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none'

    console.log(popUp);
  })

  alertPurchase.addEventListener('click', () => {
    alert('Your purchase is in progress, we will notify you when it is complete. Thank You')
    window.location.href = 'index.html'
  })
})


