// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
// const cardEntry = document.querySelector('.cards-container')


// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//   .then(response => {
//     console.log(response)
//     const article = response.data.articles
//     cardEntry.appendChild(articleCard(article))
//   })
//   .catch(error => {
//     console.log(error)
//   })


// function articleCard(object){
//   // instantiate elements
//   const cardDiv = document.createElement('div')
//   const cardHeadline = document.createElement('div')
//   const cardAuthor = document.createElement('div')
//   const cardImgContainer = document.createElement('div')
//   const cardImg = document.createElement('img')
//   const cardAuthorName = document.createElement('span')

//   // nest correctly
//   cardDiv.appendChild(cardHeadline)
//   cardDiv.appendChild(cardAuthor)
//   cardAuthor.appendChild(cardImgContainer)
//   cardAuthor.appendChild(cardAuthorName)
//   cardImgContainer.appendChild(cardImg)

//   // add class names
//   cardDiv.classList.add('card')
//   cardHeadline.classList.add('headline')
//   cardAuthor.classList.add('author')
//   cardImgContainer.classList.add('img-container')

//   set text content for our card
//   cardHeadline.textContent = object.data
//   cardAuthorName.textContent = object.data

  // set image url for author
//   cardImg.src = object.authorPhoto

  // EXPLICIT RETURN
//   return cardDiv
// }