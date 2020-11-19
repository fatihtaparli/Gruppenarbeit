/**
 * SAVE LIKED PRODUCTS
 * Select all of the like buttons, listen to the click element on every "like-btn" and the save the key of the "like-btn" to the localStorage.
 * Add the class "liked" if the button was clicked.
 * Check on reload if data is stored and add the liked class again
 *
 * https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 *
 */


/*function allStorage() {
    var keys = [],
        values = Object.keys(localStorage),
        i = values.length;
    while ( i-- ) {
        keys.push( localStorage.getItem(values[i]) );
    }
    return keys;
}*/

const liked_elements = document.querySelectorAll('.like-btn');
let keys = Object.keys(localStorage);



function set_del_local_storage(input){
    if(keys.includes(input)){
    //if(allStorage().includes(input)){
        localStorage.removeItem(input);
        keys.splice(input,1);
        console.log(keys);
        liked_elements[input].classList.toggle('liked');
    }
    else{
        localStorage.setItem(input,input);
        keys.push(input);
        liked_elements[input].classList.toggle('liked');
    }
    //keys = Object.keys(localStorage);
}

function get_local_storage(keys){
    keys.forEach(function(key){
        //localStorage.getItem(key);
        liked_elements[key].classList.toggle('liked');
    });
}


