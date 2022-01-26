var human = ["Christo","Nosbulele", "Mvuyisi", "Sibongile", "Sinesipho", "Andisiwe", "Spumze","Simelela", "Mpumelelo", "Isolakhe", "Liyabona", "Owethu", "Khayi", "Olwethu", "Mpho"]
var height = ["67", "56", "77", "54", "65", "80", "40", "45", "65", "40", "44", "54", "98", "30", "34"]

var display = document.getElementById("display");
for (let i =0; i < human.length; i ++ ) {
    display.innerHTML += "<ol>" + human[i] + ", " + height[i] + "</ol>";
}

