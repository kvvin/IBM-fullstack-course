function tempConvert(){
    var celsius = document.getElementById("c").value;
    var output = (celsius*9/5)+32;
    document.getElementById("f").value= output;
}

function weightConvert(){
    var kg = document.getElementById("k").value;
    var p = kg*2.2;
    document.getElementById("p").value = p;
}

function distanceConvert(){
    var km = document.getElementById("km").value;
    var m = km*0.62137;
    document.getElementById("m").value = m;
}
