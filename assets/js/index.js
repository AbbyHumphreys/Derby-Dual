console.log('i am connected');

fetch('https://newsapi.org/v2/everything?q=Arsenal&from=2023-03-10&sortBy=popularity&apiKey=a022ad022e86407da8d88d58b285790f')
    .then(res => {
      return res.json();
    }).then(myFunction => {
        console.log(res.json);
    });