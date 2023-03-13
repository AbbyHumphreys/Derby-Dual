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
    .then(response => response.json())
    .then(getNews => {
      newsRetrieved = getNews.news;
      displayNews(newsRetrieved);
  })
}

// Create new div to display each news item
function displayNews(news) {
  const newsItems = document.getElementById('news-container');
  news.forEach(item => {
    const newNewsArticle = `
    <a href="${item.Url}" target="_blank">
    <h5>${item.Title}</h2>
    <img src="${item.Image}" class="img-fluid">
    <p>${item.Summary}</p>
    </a>
    `
    let newDiv = document.createElement('div');
    newDiv.classList.add('col-12', 'col-md-4', 'p-5', 'txt-color-1');
    newsItems.appendChild(newDiv);
    newDiv.innerHTML = newNewsArticle;
  })
}

fetchNews()