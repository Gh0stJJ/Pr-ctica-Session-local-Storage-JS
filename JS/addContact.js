/*
    Script for adding new peaple to the list
    @Author: Juanja V
*/

// Variables
var addBtn;
var inputName;
var inputNumber;

// Functions
/**
 * Initialize the page
 */
function init(){
    addBtn = document.getElementById("addBtn");
    inputName = document.getElementById("name");
    inputNumber = document.getElementById("phone_number");
    if(window.location.href.includes("index")){
        set_data();
        console.log("Edit mode");
        let url = new URL(window.location.href);
        let type = url.searchParams.get("type");
        console.log(type);
        addBtn.addEventListener("click", editPerson);

    }else{
        addBtn.addEventListener("click", addPerson);
        console.log("Add mode");
    }
}


/**
 * Add a new person to the list
 
 */
function addPerson(){
    var name = inputName.value;
    var number = inputNumber.value;

    //Save the new person in a JSON object
    var person = {
        name: name,
        number: number
    };

    //Save the new person in the local storage and session storage
    set_user_data_LS(person);
    set_user_data_SS(person);

    //Redirect to the home page
    window.location.href = "./index.html";
    
}

/**
 * Set the JSON object with the user info in the local storage or session storage
 */
//Set data coming from the url
function set_data(){
    var url = new URL(window.location.href);
    var index = url.searchParams.get("index");
    var type = url.searchParams.get("type");

    if(type == "local"){
          //Get the user data from the local storage
        var user_info = get_user_by_index_LS(index);
    }else{
        var user_info = get_user_by_index_SS(index);
    }

    //Set the data in the form
    inputName.value = user_info.name;
    inputNumber.value = user_info.number;

}

//Edit the user data
/**
 * Edit a person from the list
 */
function editPerson(){
    var url = new URL(window.location.href);
    var index = url.searchParams.get("index");
    var type = url.searchParams.get("type");
    var name = inputName.value;
    var number = inputNumber.value;

    //Save the new person in a JSON object
    var person = {
        name: name,
        number: number
    };

    //Update
    if(type == "local"){
        update_user_LS(index, person);
    
    }else{
        update_user_SS(index, person);
    }

    //Redirect to the home page
    window.location.href = "./index.html";
}


document.addEventListener("DOMContentLoaded", init);

