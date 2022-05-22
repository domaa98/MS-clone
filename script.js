const bar = document.querySelector('.icon .bar');
const menu = document.querySelector('.services');


 
 if (bar){
    bar.addEventListener("click", () => menu.classList.toggle('show-toggle'));
 }


 