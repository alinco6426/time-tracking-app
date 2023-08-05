//   main array containing reports
let reportTable = [];
 

// color and bacground images for the reporrts contianers

let reportBackgrounds = [
    {
            color: "hsl(15, 100%, 70%)",
             image: "icon-work.svg"
    },
    {
            color: "hsl(195, 74%, 62%)",
            image: "icon-play.svg"
    },
    {
            color: "hsl(348, 100%, 68%)",
            image: "icon-study.svg"

    },
    {
        color: "hsl(145, 58%, 55%)", 
        image: "icon-exercise.svg"

    },
    {
        color: "hsl(264, 64%, 52%)", 
        image: "icon-social.svg"

    },
    {
        color: "hsl(43, 84%, 65%)",
        image: "icon-self-care.svg"

            
    }
];
//  fetching reports from data.json and storing it in an array 

function displayTable() {
    return fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            reportTable = data;
        });
}

// function structuring and displaying the reports in an html file 

function displayOption(period) {
    let container = document.getElementById("appender");
    container.innerHTML = "";
    for (let i = 0; i < reportTable.length; i++) {
        let reports = `  <div class="time-tracking-container">
        <div class="container">
  <div class="title-container">
    <div><h4>${reportTable[i].title}</h4></div>
    <div><img src="icon-ellipsis.svg" alt=""></div>
  </div>`;
  if(period === "daily"){
      reports += `<div class="timeframes"> <h1>${reportTable[i].timeframes.daily.current}hrs</h1>`
  }else if(period === "weekly"){
      reports += `<div class="timeframes">  <h1>${reportTable[i].timeframes.weekly.current}hrs</h1>`
  }else if(period === "monthly"){
      reports += `<div class="timeframes"> <h1>${reportTable[i].timeframes.monthly.current}hrs</h1>`
  };
        if (period === "daily") {
            reports += `  <p>Last week - ${reportTable[i].timeframes.daily.previous}hrs</p> </div></div> </div>`      
        } else if (period === "weekly") {
            reports += `  <p>Last week - ${reportTable[i].timeframes.weekly.previous}hrs</p> </div></div> </div>`      
        } else if (period === "monthly") {
            reports += `  <p>Last week - ${reportTable[i].timeframes.monthly.previous}hrs</p> </div></div> </div>`      
        };
   ;
    container.innerHTML += reports;
    }
    let timeContianer = document.getElementsByClassName("time-tracking-container");
    for(let i = 0; i < timeContianer.length; i++){
            timeContianer[i].style.backgroundColor = reportBackgrounds[i].color;
        timeContianer[i].style.backgroundImage = `url(${reportBackgrounds[i].image})`;     
    }
}

// finally calling the display function to display the reports fetched 

displayTable()
    .then(() => {
        displayOption("daily");
    });