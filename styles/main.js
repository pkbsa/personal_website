$(function () {
  $("a[href*='#']").on("click", function (e) {
    console.log("clicked");
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
  AOS.init({
    duration: 3000,
  })
  
  
});


am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);

var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.text = "P5JS VERCEL VUE.JS NEXT.JS DATASTRUCTURE PROBLEMSOLVING EXCEL UNITTESTING SCRUM REQUIREMENT-GATHERING";
series.data = [{
  "tag": "C",
  "weight": 40
}, {
  "tag": "JAVA",
  "weight": 50
}, {
  "tag": "PYTHON",
  "weight": 40
}, {
  "tag": "JAVASCRIPT",
  "weight": 70
}, {
  "tag": "HTML5",
  "weight": 30
}, {
  "tag": "CSS",
  "weight": 45
}, {
  "tag": "NODEJS",
  "weight": 60
}, {
  "tag": "AGILE",
  "weight": 10
}, {
  "tag": "REACT.JS  ",
  "weight": 35
},{
  "tag": "DATASTRUCTURE",
  "weight": 12
}, {
  "tag": "FIGMA",
  "weight": 15
}, {
  "tag": "UX/UI-DESIGN",
  "weight": 15
}, {
  "tag": "CANVA",
  "weight": 20
},{
  "tag": "FLUTTER",
  "weight": 22
}, {
  "tag": "GRADLE",
  "weight": 25
}, {
  "tag": "THYMLEAF",
  "weight": 12
}, {
  "tag": "DART",
  "weight": 15
},{
  "tag": "PHOTOSHOP",
  "weight": 13
}, {
  "tag": "BOOTSTRAP",
  "weight": 24
}, {
  "tag": "SCSS",
  "weight": 26
}, {
  "tag": "DOCKER",
  "weight": 12
},{
  "tag": "AWS",
  "weight": 15
}, {
  "tag": "MYSQL",
  "weight": 21
}, {
  "tag": "MONGODB",
  "weight": 20
}, {
  "tag": "ARDUINO",
  "weight": 10
},];

// Set the font size for the words
series.dataFields.word = "tag"; // Assuming your data contains the words in the "text" field
series.dataFields.value = "weight"; // Assuming your data contains the values in the "value" field
series.randomness = 0.5
series.minFontSize = 11;


series.heatRules.push({
  "target": series.labels.template,
  "property": "fill",
  "min": am4core.color("#000"),
  "max": am4core.color("#ff0000"),
  "dataField": "value"
});


// Create a custom WordCloud template
var wordTemplate = series.labels.template;
wordTemplate.horizontalCenter = "middle";
wordTemplate.verticalCenter = "middle";
wordTemplate.fill = am4core.color("#000"); // Font color
wordTemplate.fontSize = 30; // Change this value to the desired font size

chart.logo.disabled = true; // Disable the amCharts logo

// Optionally, you can set other styling and configurations for your Word Cloud chart as needed

