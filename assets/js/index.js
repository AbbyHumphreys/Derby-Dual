const newsItems = Array.from(document.getElementsByClassName('news-item'));

let newsRetrieved = [];
let availableNewsItems = [];
let newsIndex = 0;
let currentNewsItem = {};

let newNews = {};
let currentAvailableNews = [];
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
    console.log(newsRetrieved)
    //newsRetrieved.forEach((element, index) => {
      //console.log(`Summary: ${element.Title}`);
      //currentAvailableNews.push(element.Title, element.Image, element.Description); 
      //console.log(currentAvailableNews);
      displayNews()
    })
    
  }

function setNews(news) {
  console.log(news);
  availableNewsItems = [...news];
  console.log(availableNewsItems);
  newsIndex = 0;
  console.log(newsIndex);
  currentNewsItem = availableNewsItems[newsIndex];
  console.log(currentNewsItem);
  newsIndex ++
  //displayNews(currentNewsItem);
}

function displayNews() {
  newsItems.forEach(item => {
    setNews(currentNews);
    console.log(currentNews);
  })
  }


/*
    newsItems.forEach(item => {
      console.log(newsRetrieved.Title);
            //const number = 0;
            //item[number].innerHTML = element.Title;
           // number ++;
          })
        //})
      }
          //.catch(err => console.error(err));

  newsItems.forEach(item => {
    item.innerHTML = '';
    const number = item.dataset["news-number"];
        
    let p = document.createElement("p");
    p.classList.add('vertical-center');
    p.classList.add('center-text')
    p.innerText = currentAvailableNews['item'+number].Title.value;
    console.log(currentAvailableNews['item'+number].Title.value);
    item.appendChild(p);
  })
       // return getNews(currentAvailableNews); 
})
}

*/

    fetchNews();
