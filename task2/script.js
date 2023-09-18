var input =  document.getElementById("inputField");
var result = document.getElementById("result");
var unit1  = document.getElementById("unit1");
var unit2  = document.getElementById("unit2");
var inputValue, resultValue;
let buttonn = document.getElementById("buttonn")

buttonn.addEventListener("click", myResult);
unit1.addEventListener("change",myResult);
unit2.addEventListener("change",myResult);
inputValue = unit1.value;
resultValue = unit2.value;
function myResult(){
    inputValue = unit1.value;
    resultValue = unit2.value;

    if(inputValue === "Meter" && resultValue === "Kilometre"){
      result.value = Number(input.value)*0.001;
    }
    else if(inputValue === "Meter" && resultValue === "Centimeter"){
        result.value = Number(input.value)*100;
    }
    else if(inputValue === "Meter" && resultValue === "Meter"){
       result.value = Number(input.value);
    }
    


    if(inputValue === "Kilometre" && resultValue ==="Meter") {
        result.value = Number(input.value)*1000;
    }
    else if(inputValue === "Kilometre" && resultValue === "Centimeter"){
        result.value = Number(input.value)*100000;
    }
    else if(inputValue === "Kilometre" && resultValue ==="Kilometre"){
        result.value = Number(input.value);
    }


    
    if(inputValue === "Centimeter" && resultValue ==="Kilometre") {
        result.value = Number(input.value)*0.00001;
    }
    else if(inputValue === "Centimeter" && resultValue === "Meter"){
        result.value = Number(input.value)*0.01;
    }
    else if(inputValue === "Centimeter" && resultValue ==="Centimeter"){
        result.value = Number(input.value);
    }
}

   

