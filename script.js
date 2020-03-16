var css = document.querySelector("h3");
var selected = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient");

function setGradient(){

    body.style.background="linear-gradient(to right, " + color1.value + "," +  color2.value + ")";
    
    //
    css.textContent = "CSS: " + body.style.background + ";"

    // To print selected colors
    selected.textContent = "Color 1: " + color1.value + " " + "Color 2: " + color2.value;
    
}

//Using function
color1.addEventListener("input",setGradient)
      
color2.addEventListener("input",setGradient)



//Without function

/*
color1.addEventListener("input",function(){
    body.style.background="linear-gradient(to right, " + color1.value + "," +  color2.value + ")"; 
})

color2.addEventListener("input",function(){
    body.style.background="linear-gradient(to right, " + color1.value + "," +  color2.value + ")"; 
})
*/