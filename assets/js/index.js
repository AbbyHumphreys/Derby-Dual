/**
 * NEWS67 API OBTAINED FROM https://rapidapi.com/hub
 * For use with index.html news section
 * */

// Variable object to confirm identity with Rapid API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e16868377msh1ad7988b3d30406p1aefdejsn7a657dae1018',
		'X-RapidAPI-Host': 'news67.p.rapidapi.com'
	}
};

// Retrieve 3 news items from news67 API via Rapid API
function fetchNews(){
  let newsRetrieved = [];
  fetch('https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=arsenal%20tottenham&batchSize=3', options)
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not OK for questions");
      }
      return res.json(); // return in json format
    })
    .then(getNews => {
      newsRetrieved = getNews.news;
      displayNews(newsRetrieved);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// DISPLAY NEWS ITEMS
function displayNews(news) {
  const newsItems = document.getElementById('news-container');
  // Create html for each item and insert obtained news items
  // Each item is linked to it's source and opens in a new page
  news.forEach(item => {
    const newNewsArticle = `
    <a href="${item.Url}" target="_blank">
    <h5 class="news-text">${item.Title}</h2>
    <img src="${item.Image}" class="img-fluid" alt="${item.Title}">
    <p class="mt-4 news-text news-summary truncate-line-clamp">${item.Summary}</p>
    </a>
    `;
    // Create new div to display each news item
    // Append div to news section and insert news article
    let newDiv = document.createElement('div');
    newDiv.classList.add('col-12', 'col-md-4', 'ps-5', 'pe-5', 'mt-2', 'pt-2', 'news-item');
    newsItems.appendChild(newDiv);
    newDiv.innerHTML = newNewsArticle;
  });
}

fetchNews();