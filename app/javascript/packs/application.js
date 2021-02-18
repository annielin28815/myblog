require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener("turbolinks:load", function(e){

    const menuIcon = document.querySelector('.menu-toggler')
    const menuOption = document.querySelector('.navbar-menu')

    menuIcon.addEventListener('click', function(){
        menuIcon.classList.toggle("active");
        menuOption.classList.toggle("active");
    })

});
