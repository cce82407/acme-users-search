const app = document.getElementById('app')

const web = fetch('https://acme-users-api-rev.herokuapp.com/api/users/search/Glo')
.then(response => response.json())
.then(data => console.log(data))

console.log(web)


const header = document.createElement('h1')
header.classList.add('header') 
header.innerText = 'Acme Users Search'

const form = document.createElement('form')
header.classList.add('form')

const label = document.createElement('label')
// label.innerText = 
const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('size', '100%')
input.setAttribute('placeholder', 'Input search term')
form.append(input)
app.append(header,form)