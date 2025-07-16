document.addEventListener("DOMContentLoaded", () => {

  let dots = document.getElementsByClassName("dot");
  document.querySelector('.prev').addEventListener('click', ()=>plusSlides(-1));
  document.querySelector('.next').addEventListener('click', ()=>plusSlides(1));
  for(i = 0; i < dots.length; i++){
    let index = i+1;
    dots[i].addEventListener('click', ()=>currentSlide(index));
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  let myIntervalID = setInterval(()=>showNextSlide(), 2000);

  // Next/previous controls
  function plusSlides(n) {
      clearInterval(myIntervalID);
      showSlides(slideIndex += n);
      myIntervalID = setInterval(()=>showNextSlide(), 2000);
    }
    
  // Thumbnail image controls
  function currentSlide(n) {
    clearInterval(myIntervalID);
    showSlides(slideIndex = n);
    myIntervalID = setInterval(()=>showNextSlide(), 2000);
  }

  function showNextSlide(){
    slideIndex++;
    showSlides(slideIndex);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    slideIndex = n;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
});