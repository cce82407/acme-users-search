const app = document.getElementById('app')
const api = 'https://acme-users-api-rev.herokuapp.com/api/users/search'






const header = document.createElement('h1')
header.classList.add('header') 
header.innerText = 'Acme Users Search'

const form = document.createElement('form')
header.classList.add('searchterm')

const label = document.createElement('label')
const input = document.createElement('input')
const clearLink = document.createElement('a')
clearLink.setAttribute('href', 'url')
clearLink.innerText = 'clear'
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Input search term')
input.setAttribute('id', 'searchterm')
form.append(input, clearLink)
app.append(header,form)

const container = document.createElement('table')
container.classList.add('container')
app.append(container)

const renderUsers = (users) => {
    const userInfo = users.map(user =>  `
    <tr class = 'user'>
    <td><img src = '${user.avatar}'></td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td>${user.title}</td>
      </tr>`
    ).join('')

    html = `<tr id = 'table-header'>
        <th></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Title</th>
        </tr>
      ${userInfo}`

container.innerHTML = html
app.append(container)
}


const fetchAndRender = () => {
    const searchTerm = searchterm.value || 'Glo'
    fetch(`https://acme-users-api-rev.herokuapp.com/api/users/search/${searchTerm}`)
    .then(response => response.json())
    .then(data => 
        {console.log(data.users)
        return renderUsers(data.users)})
        }

form.addEventListener('submit', ((ev) => {
    ev.preventDefault()
    console.log(searchterm.value)
    fetchAndRender()
}))


clearLink.addEventListener('click', ((ev) => {
    ev.preventDefault()

    if(ev.target.innerText === 'clear'){
        console.log(ev.target)
        searchterm.value = ''
    }}))



fetchAndRender()
                       