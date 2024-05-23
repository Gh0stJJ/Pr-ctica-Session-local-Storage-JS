/*
    JS para la gestión de los datos del usuario
*/

//Local Storage functions

/**
 * Get the JSON object with the users info from the local storage
 * @returns JSON object with the users info
 */
function get_user_data_LS(){
    var user_data = JSON.parse(localStorage.getItem("user_data"));
    return user_data;
}

/**
 * Set the JSON object with the user info in the local storage
 * @param {JSON} persona 
 */
function set_user_data_LS(persona){
    var user_data = get_user_data_LS();
    user_data.push(persona);
    localStorage.setItem("user_data", JSON.stringify(user_data));
}

/**
 * Initialize the user_data key in the local storage
 */
function init_user_data(){
    if(localStorage.getItem("user_data") === null){ //If the local storage is empty, create the user_data key
        localStorage.setItem("user_data", JSON.stringify([])); //Create the key with an empty array
    }
}


/**
 * Delete a user from the local storage
 * @param {Int16Array} index 
 */
function delete_user_LS(index){
    var user_data = get_user_data_LS();
    user_data.splice(index, 1);
    localStorage.setItem("user_data", JSON.stringify(user_data));
}

/**
 * Update a user in the local storage
 * @param {Int16Array} index
 * @param {JSON} persona 
 */
function update_user_LS(index, persona){
    var user_data = get_user_data_LS();
    user_data[index] = persona;
    localStorage.setItem("user_data", JSON.stringify(user_data));
}

//Session Storage functions

/**
 * Get the JSON object with the users info from the session storage
 * @returns 
 */
function get_user_data_SS(){
    var user_data = JSON.parse(sessionStorage.getItem("user_data"));
    return user_data;
}

/**
 * Set the JSON object with the user info in the session storage
 * @param {JSON} persona 
 */
function set_user_data_SS(persona){
    var user_data = get_user_data_SS();
    user_data.push(persona);
    sessionStorage.setItem("user_data", JSON.stringify(user_data));
}

/**
 * Initialize the user_data key in the session storage
 */
function init_user_data_SS(){
    if(sessionStorage.getItem("user_data") === null){ //If the session storage is empty, create the user_data key
        sessionStorage.setItem("user_data", JSON.stringify([])); //Create the key with an empty array
    }
}


/**
 * Delete a user from the session storage
 * @param {Int16Array} index 
 */
function delete_user_SS(index){
    var user_data = get_user_data_SS();
    user_data.splice(index, 1);
    sessionStorage.setItem("user_data", JSON.stringify(user_data));
}

/**
 * Update a user in the session storage
 * @param {Int16Array} index
 * @param {JSON} persona 
 */
function update_user_SS(index, persona){
    var user_data = get_user_data_SS();
    user_data[index] = persona;
    sessionStorage.setItem("user_data", JSON.stringify(user_data));
}

