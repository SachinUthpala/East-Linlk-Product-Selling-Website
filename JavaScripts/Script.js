window.addEventListener("scroll" , () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 350);
} )