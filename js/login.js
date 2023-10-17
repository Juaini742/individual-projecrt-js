import { userData } from "./data/user-data.js";


console.log(userData);

function onLogin() {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value

  const usersValidate = userData.find(user => user.username == username && user.password == password)

  console.log(usersValidate);

  if (usersValidate) {
    localStorage.setItem('user', JSON.stringify(usersValidate))
    window.location.href = `index.html`
  } else {
    alert('Username atau Password yang anda masukkan salah')
  }
}


const formLogin = document.querySelector('#formLogin')

formLogin.addEventListener('submit', (event) => {
  event.preventDefault()
  onLogin()
})





