/**
 * CSS-ANIMATIONS
 * Toggle the class "hidden" from the element with the id "menu", when the user clicks on the element with the id "menu-btn"
 * 
 */

let menubtn = document.getElementById('menu-btn');
let Menu = document.getElementById('menu');
let clickedM = false;
 

menubtn.addEventListener('click', function(){
    if (clickedM == false) {
        Menu.classList.remove('hidden');
        clickedM = true;
    }else {
        Menu.classList.add('hidden');
        clickedM = false;
    }
});
