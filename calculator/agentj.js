let height = document.getElementById("height");
let weight = document.getElementById("weight");

function calculateBMI() {
    
    h=height.value;
    w=weight.value;
    console.log(h, w);
    document.getElementById("result").innerHTML= h / w;
}