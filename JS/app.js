/*
    Home Page script
    @Author: Juanja V

*/

var contactsRow;
var localSection;
var sessionSection;

/**
 * Initialize the page
 */
function init() {
    //Get the users data from the local storage
    var user_dataLS = get_user_data_LS();
    var user_dataSS = get_user_data_SS();

    localSection = document.getElementById("localStorage");
    sessionSection = document.getElementById("sessionStorage");

    //If there are users in the local storage, display them
    if (user_dataLS.length > 0) {
        display_usersLS(user_dataLS);
        console.log(user_dataLS);
    }else{
        let questionHtml = `

        <div class="col-md-12">
                    <div class="alert alert-warning" role="alert">
                        No contacts found in <Strong>local storage</Strong>
                        <a href="./addContact.html" class="alert-link>"> Add a new contact</a>
                    </div>
                </div>
        `
        localSection.innerHTML = questionHtml;
    }

    //If there are users in the session storage, display them
    if (user_dataSS.length > 0) {
        display_usersSS(user_dataSS);
        console.log("Esto es lo que hay en session storage")
        console.log(user_dataSS);
    }else{
        let questionHtml = `

        <div class="col-md-12">
                    <div class="alert alert-warning" role="alert">
                        No contacts found in <strong>session storage</strong>
                        <a href="./addContact.html" class="alert-link
                        "> Add a new contact for this session</a>
                    </div>
                </div>
        `
        sessionSection.innerHTML = questionHtml;

    }

}

/**
 * Display the users in the local storage
 * @param {JSON} user_data 
 */
function display_usersLS(user_data) {
    localSection.innerHTML = "";
    localSection.innerHTML = `
    <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">Contacts in Local storage </h1>
                </div>
            </div>

            <div class="row" id="contactsRow">
            </div>
        `;

    contactsRow = document.getElementById("contactsRow");
    user_data.forEach((user, index) => {
        var userHtml = `
        
        <div class="col-md-4 mb-3">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${user.name}</h5>
                    <p class="card-text "m-2"">${user.number}</p>
                    <a href="./addContact.html?index=${index}&type=local" class="btn btn-primary">Edit</a>
                    <button class="btn btn-danger" onclick="delete_user_Local(${index})">Delete</button>
                </div>
            </div>
        </div>
        `;
        contactsRow.innerHTML += userHtml;
    }
    );
}

/**
 * Display the users in the session storage
 * @param {JSON} user_data 
 */
function display_usersSS(user_data) {
    sessionSection.innerHTML = "";
    sessionSection.innerHTML = `
    <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">Contacts in Session storage </h1>
                </div>
            </div>

            <div class="row" id="contactsRowSS">
            </div>
        `;

    contactsRow = document.getElementById("contactsRowSS");
    user_data.forEach((user, index) => {
        var userHtml = `
        
        <div class="col-md-4 mb-3">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${user.name}</h5>
                    <p class="card-text "m-2"">${user.number}</p>
                    <a href="./addContact.html?index=${index}&type=session" class="btn btn-primary">Edit</a>
                    <button class="btn btn-danger" onclick="delete_user_Session(${index})">Delete</button>
                </div>
            </div>
        </div>
        `;
        contactsRow.innerHTML += userHtml;
    }
    );
}

/**
 * Delete a user from the local storage
 * @param {int} index 
 */
function delete_user_Local(index) {
    delete_user_LS(index);
    init();
}
/**
 * Delete a user from the session storage
 * @param {int} index 
 */
function delete_user_Session(index) {
    delete_user_SS(index);
    init();
}


document.addEventListener("DOMContentLoaded", init);