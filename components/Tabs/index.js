// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabEntry = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response)
        const tabsOnSite = response.data.topics
        tabsOnSite.forEach(tabOnSite => {
            const aNewTab = newTab(tabOnSite)
            tabEntry.appendChild(newTab(aNewTab))
        })
    })
    .catch(error => {
        console.log(error)
    })



function newTab(object) {
    // instantiate elements
    const tab = document.createElement('div')
    // add class names
    tab.classList.add('tab')
    // set text content for our card
    tab.textContent = `${object.topics}`
    // EXPLICIT RETURN
    return tab
}



















// const tabTitles = ['javascript', 'bootstrap', 'technology', 'jquery', 'node.js']

// tabTitles.forEach(tabTitle => {
//     axios.get(`https://lambda-times-backend.herokuapp.com/${tabTitle}`)
//         .then(response => {
//             console.log(response)
//             const tabOnSite = response.data
//             tabEntry.appendChild(newTab(tabOnSite))
//         })
//         .catch(error => {
//             console.log(error)
//         })
// })