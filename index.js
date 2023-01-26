

// Get the button
let mybutton = document.getElementById("tothetop");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 //* When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
 


document.getElementById("uno").onclick = function() {showme()};


function showme() {
  var x = document.getElementById("sobremi");
  const style = getComputedStyle(x);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } }



  document.getElementById('uno').onclick = function () {
    console.log ('capturamos el evento click')

}