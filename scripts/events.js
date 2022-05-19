// This script.js pulls from a news api, then uses a for loop myLoop() with a time delay of 10 seconds and iterates through the list of news every 10 seconds. 
//EmilianoRodriguez
//------------------

month = "May";
list = [ "1 May Day</br> 3 National Teachers Day - Tuesday of first full week of May</br>4 Star Wars Day</br>5 Cinco de Mayo</br>7 Kentucky Derby Day. Mint Juleps anyone!? - date varies</br>8 VE Day, WW II</br>8 Mothers Day - second Sunday</br>13 Friday the 13th</br>21 Armed Forces Day -third Saturday</br>23 Victoria Day (Canada) - usually the 24th</br>30 Memorial Day - last Monday"
];

const events = async()=>{
var i = 1;
    function myLoop() {
      setTimeout(function() {
        console.log();
        const n1 = document.getElementById('events')
        const heading1 = `<p><b>UPCOMING EVENTS</b></br>Month: ${month}</br></br>${list}</p>`
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
events();
