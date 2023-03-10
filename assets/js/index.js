const newsItems = Array.from(document.getElementsByClassName('news-item'));
let newsRetrieved = [];
let newNews = {};
let currentAvailableNews = [];
let currentNewsItem = {};
let currentNews = [];
let myNewsItem = [];
let availableNews = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e16868377msh1ad7988b3d30406p1aefdejsn7a657dae1018',
		'X-RapidAPI-Host': 'news67.p.rapidapi.com'
	}
};

function fetchNews(){
fetch('https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=arsenal%20tottenham&batchSize=3', options)
	.then(response => response.json())
	.then(getNews => {
        newsRetrieved = getNews.news;
        newsRetrieved.forEach((element, index) => {
            console.log(`Summary: ${element.Summary}`);
            currentAvailableNews.push(element); 
          });
        })
          .catch(err => console.error(err));
        return getNews(currentAvailableNews); 
      }
/*
function getNews(newsArray) {
    console.log(newsArray[0]);
    newsArray.forEach((newsArrayArticle) => {
        myNewsItem.push(newsArrayArticle);
    })
    console.log(myNewsItem);
    const newsIndex = newsArray.length;
    console.log(newsIndex);
    currentNewsItem = currentNews[newsIndex];

    console.log(currentNewsItem);

    newsItems.forEach((item) => {
        item.innerHTML = '';
        const number = item.dataset["news-number"];
        
        let p = document.createElement("p");
        p.classList.add('vertical-center');
        p.classList.add('center-text')
        p.innerText = currentNewsItem[0];
        item.appendChild(p);
      });
    }*/

    fetchNews();
/*
    fetch('quotes.json')
    .then(res => {
      return res.json();
    }).then(loadedQuotes => {
      quotes = loadedQuotes;
      availableQuotes = [...quotes];
      // Ensure only relevant quotes selected for current match result
      availableQuotes.forEach(quote => {
        if (quote.result === currentResult) {
          currentAvailableQuotes.push(quote.quote);
        }
      });
const quoteIndex = Math.floor(Math.random() * currentAvailableQuotes.length);
    currentQuote = currentAvailableQuotes[quoteIndex];
    currentAvailableQuotes.splice(quoteIndex, 1);

    // Display bootstrap toast annoucing the match results
    const toast = new bootstrap.Toast(matchToastElement);
    toast.show();
    toastHeadMatch.innerHTML = played;
    toastBodyMatch.innerHTML = played;
    matchQuoteElement.innerHTML = currentQuote;
    toastResults.innerHTML = currentResult;
  });
  displayMatchResults(currentResult);
    */