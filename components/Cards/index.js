// STEP 3: Create article cards.
// -----------------------

// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
//

const cardEntry = document.querySelector('.cards-container') // where we will append each article

// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response)
    // first i need to access the specific article objects to loop through their array.
    const javascriptArticles = response.data.articles.javascript
    javascriptArticles.forEach(javascriptArticle => {
        // Use your function to create a card for each of the articles and add the card to the DOM.
        javascriptArticlePlacement = articleCard(javascriptArticle) // assigned the articleCard function that's passing in each article in the javascript object to javascriptArticlePlacement
        cardEntry.appendChild(javascriptArticlePlacement) // pushing javascriptArticlePlacement to the dom by appending it to the proper entry point of cardEntry.
    })

    const bootstrapArticles = response.data.articles.bootstrap
    bootstrapArticles.forEach(bootstrapArticle => {
        bootstrapArticlePlacement = articleCard(bootstrapArticle)
        cardEntry.appendChild(bootstrapArticlePlacement)
    })

    const technologyArticles = response.data.articles.technology
    technologyArticles.forEach(technologyArticle => {
        technologyArticlePlacesment = articleCard(technologyArticle)
        cardEntry.appendChild(technologyArticlePlacesment)
    })

    const jqueryArticles = response.data.articles.jquery
    jqueryArticles.forEach(jqueryArticle => {
        jqueryArticlePlacement = articleCard(jqueryArticle)
        cardEntry.appendChild(jqueryArticlePlacement)
    })

    const nodeArticles = response.data.articles.node
    nodeArticles.forEach(nodeArticle => {
        nodeArticlePlacement = articleCard(nodeArticle)
        cardEntry.appendChild(nodeArticlePlacement)
    })
    
  })
  .catch(error => {
    console.log(error)
  })

  

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
function articleCard(object){
  // instantiate elements
  const cardDiv = document.createElement('div')
  const cardHeadline = document.createElement('div')
  const cardAuthor = document.createElement('div')
  const cardImgContainer = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardAuthorName = document.createElement('span')

  // nest correctly
  cardDiv.appendChild(cardHeadline)
  cardDiv.appendChild(cardAuthor)
  cardAuthor.appendChild(cardImgContainer)
  cardAuthor.appendChild(cardAuthorName)
  cardImgContainer.appendChild(cardImg)

  // add class names
  cardDiv.classList.add('card')
  cardHeadline.classList.add('headline')
  cardAuthor.classList.add('author')
  cardImgContainer.classList.add('img-container')

//   set text content for our card
  cardHeadline.textContent = `${object.headline}`
  cardAuthorName.textContent = `${object.authorName}`

//   set image url for author
  cardImg.src = object.authorPhoto

//   EXPLICIT RETURN
  return cardDiv
}