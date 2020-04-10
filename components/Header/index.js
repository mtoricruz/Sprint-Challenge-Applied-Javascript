// STEP 1: Create a Header component.
// -----------------------

// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerEntry = document.querySelector('.header-container')
headerEntry.appendChild(Header())




// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
function Header() {
  // instantiate elements
  const headerDiv = document.createElement('div')
  const headerDate = document.createElement('span')
  const headerTitle = document.createElement('h1')
  const headerTemp = document.createElement('span')
  // nest them correctly
  headerDiv.appendChild(headerDate)
  headerDiv.appendChild(headerTitle)
  headerDiv.appendChild(headerTemp)
  // add class names
  headerDiv.classList.add('header')
  headerDate.classList.add('date')
  headerTemp.classList.add('temp')
  // EXPLICIT RETURN
  return headerDiv
}
