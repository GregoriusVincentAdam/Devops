// Data Array
var xArray = ["Indonesia", "Taiwan", "China", "USA", "Malaysia"];
var yArray = [55, 49, 44, 24, 15];

// Define Layout
var layout = {title: "World Wide Wine Prduction" };

// Define Data
var data = [{ labels:xArray, values:yArray, hole:.4, type:"pie"}];

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
