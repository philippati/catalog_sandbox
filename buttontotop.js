document.addEventListener("DOMContentLoaded", () => {
  let mybutton = document.getElementById("myBtn");

  
  mybutton.addEventListener('click', ()=>topFunction());

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});