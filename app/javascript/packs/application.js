require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import "jquery";
import $ from "jquery";
window.jQuery = $
window.$ = $;
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});