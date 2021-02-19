const menu = document.querySelector ('.hamburger-menu');
const nav = document.querySelector ('.nav');

menu.addEventListener("click", function(){

  nav.classList.toggle("change");

});