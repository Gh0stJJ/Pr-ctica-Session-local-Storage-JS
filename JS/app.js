/*
    Script for adding new peaple to the list
    @Author: Juanja V
*/

// Variables
var addBtn;
var inputName;
var inputNumber;

// Functions

function init(){
    addBtn = document.getElementById("addBtn");
    inputName = document.getElementById("inputName");
    inputNumber = document.getElementById("inputNumber");

    addBtn.addEventListener("click", addPerson);
}

function addPerson(){
    var name = inputName.value;
    var number = inputNumber.value;

    //Save the new person in a JSON object
    var person = {
        name: name,
        number: number
    };
    
}

