// This script.js pulls from a news api, then uses a for loop myLoop() with a time delay of 10 seconds and iterates through the list of news every 10 seconds. 
//EmilianoRodriguez
//------------------
let news_data = null

const getNewsData = async () => {
    await fetch('https://gnews.io/api/v4/top-headlines?token=488ffe3c7aeb19e5463b1d6c9c49b908&lang=en')
    .then(res=> res.json())
    .then(res=>{
      news_data = res.articles
    })
    .catch(err=>{
      console.log(err)
    })
    return news_data
}



const fetchNews = async()=>{
    const data = await getNewsData()
    data.forEach(function(title){
});
var i = 1;
    function myLoop() {
      setTimeout(function() {
        console.log(data[i].title);
        const n1 = document.getElementById('news')
        const heading1 = `<p><p style="text-align:center;"><b>TOP NEWS </b></p> ${data[i].title} <img src=${data[i].image} style="width:50px;height:60px;float:right;"> </br></br> ${data[i].description} </p>`
        n1.innerHTML = heading1
        i++;
        if (i < 10) {
          if(i == 9){
            i = 1;
          }
          myLoop();
        }
      }, 10000)
    }
myLoop();
}
fetchNews()
