let navitems = document.querySelector(".nav_items");
let menu = document.querySelector(".nav_menu");
let body = document.querySelector("#body");

menu.addEventListener("click", function () {
  navitems.classList.toggle("active");
  body.classList.toggle("overflow_hidden");
  menu.classList.toggle("position_fixed_menu");
});
