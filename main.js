/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn-text") &&
    !event.target.matches(".dropbtn")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bars = $$(".bars");
const images = $$(".beach-picture");
// const images = ['./assets/img/package-3.jpg', './assets/img/parallax-4.jpg', './assets/img/parallax-4-1.jpg']
bars.forEach((bar, index) => {
  const image = images[index];
  bar.onclick = function () {
    $(".beach-picture.active-image").classList.remove("active-image");
    $(".bars.active").classList.remove("active");

    this.classList.add("active");
    image.classList.add("active-image");
  };
});

//open - close slider bar
var isClose = document.querySelector(".general-close-icon");
var sliderbar = document.querySelector(".general-content");
var isOpen = document.querySelector(".img-menu");
isOpen.onclick = function (e) {
  if (e.target.closest(".img-menu")) {
    sliderbar.classList.remove("showslider");
    sliderbar.style.animation = "Open ease .6s";
  }
};

isClose.onclick = function (e) {
  if (e.target.closest(".general-close-icon")) {
    sliderbar.style.animation = "Close ease .6s";
    sliderbar.classList.add("showslider");
  }
};
