// Change the slideshow based on whether the user clicks on the dots.
// Alternatively, setTimeout can be used to auto-control the slideshow.
let slideIndex = 1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {
	  slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  slideIndex++;
  setTimeout(showSlides, 5000);
}