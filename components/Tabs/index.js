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
        console.log(response.data)
        const tabsOnSite = response.data.topics
        tabsOnSite.forEach(tabOnSite => {
             const tab = document.createElement('div')
             tab.classList.add('tab')
             tab.textContent = `${tabOnSite}`
             tabEntry.appendChild(tab)
        })
    })
    .catch(error => {
        console.log(error)
    })























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