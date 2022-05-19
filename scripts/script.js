// script.js
let news_data = null
const getNewsData = async () => {
    
    await fetch('https://gnews.io/api/v4/top-headlines?token=488ffe3c7aeb19e5463b1d6c9c49b908&lang=en')
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      console.log(res.articles)
      news_data = res.articles
   
    })
    .catch(err=>{
      console.log(err)
    })
    return news_data
}


const fetchNews = async()=>{
    const data = await getNewsData()
    console.log(data)
    console.log(data[0])
    const n1 = document.getElementById('news_one')
    const heading1 = `<h3> ${data[0].title}</h3>`
    const heading2 = `<h3> ${data[0].description}</h3>`
    n1.innerHTML = heading1 + heading2
//    n1.innerHTML = heading2
}
fetchNews()
