
    console.log ('Bienvenidx a mi página! Espero que este código te agrade. Que tengas un buen día!')


//boton light dark mode

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 



// Boton para ir hasta arriba
let mybutton = document.getElementById("tothetop");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
   
