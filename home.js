var human = ["Christo","Nosbulele", "Mvuyisi", "Sibongile", "Sinesipho", "Andisiwe"]
var height = ["67", "56", "77", "54", "65", "48",]

var display = document.getElementById("display");
for (let i =0; i < human.length; i ++ ) {
    display.innerHTML += "<ol>" + human[i] + ", " + height[i] + "</ol>";
}

