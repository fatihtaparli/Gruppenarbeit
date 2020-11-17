/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 * 
 */
let scrollB = document.getElementById('return-to-top');

window.addEventListener('scroll', function(){
    if (window.pageYOffset >= window.innerHeight) {
        scrollB.classList.add('visible');
    }else{
        scrollB.classList.remove('visible');
    }
});

scrollB.addEventListener('click', function () {
    //window.scrollTo(0,0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
