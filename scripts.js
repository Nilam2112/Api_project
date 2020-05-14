 // you remember, our index.html just has a root div - <div id="root"> right now. We'll access it with getElementById(). 
const app = document.getElementById('root')

// The first thing in our website is the logo, which is an img element. We'll create the image element with createElement().
const logo = document.createElement('img')

// An empty img is no good, so we'll set the src attribute to logo.png.
logo.src = 'logo.png'

// We'll create another element, a div this time, and set the class attribute to container.
const container = document.createElement('div')
container.setAttribute('class', 'container')

// Now we have a logo and a container, and we just need to place them in the website. We'll use the appendChild() method to append the logo image and container div to the app root.
app.appendChild(logo)
app.appendChild(container)


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
// data.forEach(posts => {
//   // Log each movie's title
//   console.log(posts.title)
//   console.log(posts.body)
// })
data.forEach(films => {
  // Create a div with a card class
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  // Create an h1 and set the text content to the film's title
  const h1 = document.createElement('h1')
  h1.textContent = films.title

  // Create a p and set the text content to the film's description
  const p = document.createElement('p')
  films.description = films.description.substring(0, 300) // Limit to 300 chars
  p.textContent = `${films.description}...` // End with an ellipses

  // Append the cards to the container element
  container.appendChild(card)

  // Each card will contain an h1 and a p
  card.appendChild(h1)
  card.appendChild(p)
})
}
 else {
  // console.log('error')
  const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
}
}
// Send request
request.send()

