let navitems = document.querySelector(".nav_items");
let menu = document.querySelector(".nav_menu");
let body = document.querySelector("#body");

menu.addEventListener("click", function () {
  navitems.classList.toggle("active");
  body.classList.toggle("overflow_hidden");
  menu.classList.toggle("position_fixed_menu");
});

// accordion//
let accordion_boxes = document.querySelectorAll(".accordion-box");

accordion_boxes.forEach((items, index) => {
  let head_box = items.querySelector(".accordion_btn");
  let paragraph = items.querySelector(".accordion_para");
  let arrow_img = items.querySelector(".accordion_sign img");

  // to hide all except the first one //
  if (index !== 0) {
    paragraph.style.display = "none";
    arrow_img.style.transform = "rotate(0deg)";
  } else {
    // If the first accordion box is initially open, rotate the arrow image//
    arrow_img.style.transform = "rotate(180deg)";
  }

  // Add event listener to each button //
  head_box.addEventListener("click", function () {
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      arrow_img.style.transform = "rotate(180deg)";
    } else {
      paragraph.style.display = "none";
      arrow_img.style.transform = "rotate(0deg)";
    }

    // If an accordion box is opened, close other accordion boxes //
    if (paragraph.style.display === "block") {
      accordion_boxes.forEach((other, otherIndex) => {
        if (otherIndex !== index) {
          other.querySelector(".accordion_para").style.display = "none";
          other.querySelector(".accordion_sign img").style.transform =
            "rotate(0deg)";
        }
      });
    }
  });
});

let navfonts = document.querySelector(".nav_items");

navfonts.addEventListener("click", function () {
  navitems.classList.remove("active");
  body.classList.remove("overflow_hidden");
  menu.classList.remove("position_fixed_menu");
});
