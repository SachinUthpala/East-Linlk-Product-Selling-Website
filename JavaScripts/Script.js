window.addEventListener("scroll" , () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 350);
} )



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



      var loader = document.getElementById("preloader");
      window.addEventListener("load" , function(){
        loader.style.display = "none";
      })



      // for counter

      const counts = document.querySelectorAll('.count')
      const speed = 20

      counts.forEach((counter) => {
          function upDate(){
              const target = Number(counter.getAttribute('data-target'))
              const count = Number(counter.innerText)
              const inc = target / speed        
              if(count < target){
                  counter.innerText = Math.floor(inc + count) 
                  setTimeout(upDate, 15)
              }else{
                  counter.innerText = target
              }
          }
          upDate()
      })