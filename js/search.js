/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */

function search(){
    document.getElementById("searchbar").classList.toggle("hidden");
}

function clear_searchbar(){
    document.getElementById("input").value = "";
}
